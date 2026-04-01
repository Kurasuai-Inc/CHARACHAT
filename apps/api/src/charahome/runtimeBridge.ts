import { randomUUID } from 'node:crypto';
import { type ChatMessage } from '@charachat/domain';
import { type ChatThreadStore } from '../chat/threadStore.js';
import { type CharachatApiConfig } from '../config.js';
import {
  CharahomeRuntimeClient,
  type RuntimeInternalEventEnvelope,
} from './runtimeClient.js';

function extractActionCalls(payload: Record<string, unknown>) {
  const actionCalls = payload.action_calls;
  if (!Array.isArray(actionCalls)) {
    return [] as Array<Record<string, unknown>>;
  }
  return actionCalls.filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object');
}

function nowIso() {
  return new Date().toISOString();
}

export class CharahomeRuntimeBridge {
  private readonly runtimeClient: CharahomeRuntimeClient;
  private subscription: ReturnType<CharahomeRuntimeClient['createInternalEventSubscription']> | null = null;
  private readonly processedDispatches = new Map<string, number>();

  constructor(
    config: CharachatApiConfig,
    private readonly store: ChatThreadStore,
    dependencies: {
      runtimeClient?: CharahomeRuntimeClient;
    } = {},
  ) {
    this.runtimeClient = dependencies.runtimeClient ?? new CharahomeRuntimeClient(config);
  }

  start() {
    if (!this.runtimeClient.isReady() || this.subscription) {
      return;
    }
    this.subscription = this.runtimeClient.createInternalEventSubscription({
      onError: (error) => {
        console.warn('[CharachatRuntimeBridge] Runtime websocket error.', error);
      },
      onEvent: async (event) => {
        await this.handleRuntimeEvent(event);
      },
    });
    this.subscription?.start();
  }

  stop() {
    this.subscription?.stop();
    this.subscription = null;
  }

  private markDispatchSeen(dispatchKey: string) {
    const now = Date.now();
    this.processedDispatches.set(dispatchKey, now + (5 * 60_000));
    for (const [key, expiresAt] of this.processedDispatches.entries()) {
      if (expiresAt <= now) {
        this.processedDispatches.delete(key);
      }
    }
  }

  private hasSeenDispatch(dispatchKey: string) {
    const expiresAt = this.processedDispatches.get(dispatchKey);
    if (!expiresAt) {
      return false;
    }
    if (expiresAt <= Date.now()) {
      this.processedDispatches.delete(dispatchKey);
      return false;
    }
    return true;
  }

  private async handleRuntimeEvent(event: RuntimeInternalEventEnvelope) {
    if (event.eventType !== 'behavior_execution_event.created') {
      return;
    }
    if (typeof event.characterId !== 'string' || !event.characterId) {
      return;
    }

    const executionId = typeof event.payload.execution_id === 'string'
      ? event.payload.execution_id
      : typeof event.payload.executionId === 'string'
        ? event.payload.executionId
        : null;
    const phaseId = typeof event.payload.phase_id === 'string'
      ? event.payload.phase_id
      : typeof event.payload.phaseId === 'string'
        ? event.payload.phaseId
        : null;
    if (!executionId || !phaseId) {
      return;
    }

    if ((event.payload.event_kind ?? event.payload.eventKind) !== 'provider_action_dispatch_requested') {
      return;
    }

    const dispatchPayload = event.payload.payload && typeof event.payload.payload === 'object'
      ? event.payload.payload as Record<string, unknown>
      : event.payload;

    for (const actionCall of extractActionCalls(dispatchPayload)) {
      const providerType = typeof actionCall.provider_type === 'string'
        ? actionCall.provider_type
        : typeof actionCall.providerType === 'string'
          ? actionCall.providerType
          : null;
      if (providerType !== 'charachat') {
        continue;
      }

      const callId = typeof actionCall.call_id === 'string'
        ? actionCall.call_id
        : typeof actionCall.callId === 'string'
          ? actionCall.callId
          : null;
      if (!callId) {
        continue;
      }
      const dispatchKey = `${executionId}:${phaseId}:${callId}`;
      if (this.hasSeenDispatch(dispatchKey)) {
        continue;
      }
      this.markDispatchSeen(dispatchKey);

      const providerId = typeof actionCall.provider_id === 'string'
        ? actionCall.provider_id
        : typeof actionCall.providerId === 'string'
          ? actionCall.providerId
          : null;
      const payload = actionCall.payload && typeof actionCall.payload === 'object'
        ? actionCall.payload as Record<string, unknown>
        : {};

      await this.executeActionCall({
        characterId: event.characterId,
        executionId,
        phaseId,
        callId,
        providerId,
        payload,
      });
    }
  }

  private async executeActionCall(input: {
    characterId: string;
    executionId: string;
    phaseId: string;
    callId: string;
    providerId: string | null;
    payload: Record<string, unknown>;
  }) {
    const transportKind = typeof input.payload.transport_kind === 'string'
      ? input.payload.transport_kind
      : '';
    const threadId = typeof input.payload.thread_id === 'string' ? input.payload.thread_id : '';
    const ownerCharahomeUid = typeof input.payload.owner_charahome_uid === 'string'
      ? input.payload.owner_charahome_uid
      : '';

    try {
      const thread = await this.resolveThread(threadId, ownerCharahomeUid);
      if (!thread) {
        throw new Error(`CHARACHAT thread ${threadId} was not found.`);
      }

      switch (transportKind) {
        case 'official_thread_send_message': {
          const text = typeof input.payload.text === 'string' ? input.payload.text.trim() : '';
          if (!text) {
            throw new Error('CHARACHAT send message action requires text.');
          }

          const message: ChatMessage = {
            id: `msg-${randomUUID()}`,
            threadId: thread.id,
            ownerCharahomeUid,
            sender: 'CHARACTER',
            characterId: input.characterId,
            text,
            createdAtIso: nowIso(),
            metadata: {
              behaviorExecutionId: input.executionId,
              behaviorPhaseId: input.phaseId,
              actionCallId: input.callId,
              providerType: 'charachat',
              providerId: input.providerId,
            },
          };
          thread.updatedAtIso = message.createdAtIso;
          thread.metadata = {
            ...(thread.metadata ?? {}),
            lastBehaviorExecutionId: input.executionId,
          };
          await this.store.appendMessages([message]);
          await this.store.saveThread(thread);

          await this.runtimeClient.reportActionExecutionResult(input.characterId, input.executionId, {
            phaseId: input.phaseId,
            callId: input.callId,
            providerType: 'charachat',
            providerId: input.providerId,
            actionStatus: 'success',
            resultSummaryText: `CHARACHAT の「${thread.title}」に返信を送信した。`,
            resultPayload: {
              thread_id: thread.id,
              message_id: message.id,
              text,
            },
          });
          return;
        }
        case 'official_thread_read_recent': {
          const recentMessages = await this.store.listMessages(thread.id, ownerCharahomeUid);
          const selected = recentMessages.slice(-10);
          const summary = selected.length > 0
            ? selected.map((message) => `${message.sender === 'CHARACTER' ? (message.characterId ?? 'character') : 'user'}: ${message.text}`).join('\n')
            : 'このスレッドにはまだメッセージがない。';
          await this.runtimeClient.reportActionExecutionResult(input.characterId, input.executionId, {
            phaseId: input.phaseId,
            callId: input.callId,
            providerType: 'charachat',
            providerId: input.providerId,
            actionStatus: 'success',
            resultSummaryText: `CHARACHAT の「${thread.title}」を確認した。最近の内容:\n${summary}`,
            resultPayload: {
              thread_id: thread.id,
              thread_title: thread.title,
              recent_messages: selected.map((message) => ({
                message_id: message.id,
                sender: message.sender,
                character_id: message.characterId ?? null,
                text: message.text,
                created_at_iso: message.createdAtIso,
              })),
            },
          });
          return;
        }
        default:
          throw new Error(`Unsupported CHARACHAT transport kind: ${transportKind}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      await this.runtimeClient.reportActionExecutionResult(input.characterId, input.executionId, {
        phaseId: input.phaseId,
        callId: input.callId,
        providerType: 'charachat',
        providerId: input.providerId,
        actionStatus: 'failure',
        resultSummaryText: 'CHARACHAT の操作に失敗した。',
        errorMessage,
        resultPayload: {
          transport_kind: transportKind || null,
          thread_id: threadId || null,
        },
      });
    }
  }

  private async resolveThread(threadId: string, ownerCharahomeUid: string) {
    if (!threadId || !ownerCharahomeUid) {
      return null;
    }
    return this.store.getThreadForOwner(threadId, ownerCharahomeUid);
  }
}
