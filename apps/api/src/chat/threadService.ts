import { randomUUID } from 'node:crypto';
import type {
  ChatMessage,
  ChatMessageInput,
  ChatThread,
  ChatInteractionDecisionType,
  ChatThreadInput,
  DeskAvailability,
  SendChatMessageResult,
} from '@charachat/domain';
import { type AuthenticatedSession } from '../auth/requestAuth.js';
import { CharahomeAttentionClient } from '../charahome/attentionClient.js';
import {
  buildOfficialThreadSendAction,
  type OfficialCharacterActionPayload,
} from '../charahome/officialCharacterActionCatalog.js';
import { CharahomeRuntimeClient } from '../charahome/runtimeClient.js';
import { CharadeskPresenceClient } from './charadeskPresenceClient.js';
import { type ChatThreadStore } from './threadStore.js';

function nowIso() {
  return new Date().toISOString();
}

function shouldNotifyDesk(thread: ChatThread, availability: DeskAvailability) {
  if (!availability.available) {
    return false;
  }
  const lastAttentionAt = thread.metadata?.lastDeskAttentionAtIso ? Date.parse(thread.metadata.lastDeskAttentionAtIso) : 0;
  return Number.isNaN(lastAttentionAt) || (Date.now() - lastAttentionAt) > 10 * 60_000;
}

export class ChatThreadService {
  private readonly attentionClient: CharahomeAttentionClient;
  private readonly runtimeClient: CharahomeRuntimeClient;
  private readonly deskPresenceClient: CharadeskPresenceClient;

  constructor(
    private readonly store: ChatThreadStore,
    config: ConstructorParameters<typeof CharadeskPresenceClient>[0],
    dependencies: {
      attentionClient?: CharahomeAttentionClient;
      runtimeClient?: CharahomeRuntimeClient;
      deskPresenceClient?: CharadeskPresenceClient;
    } = {},
  ) {
    this.attentionClient = dependencies.attentionClient ?? new CharahomeAttentionClient(config);
    this.runtimeClient = dependencies.runtimeClient ?? new CharahomeRuntimeClient(config);
    this.deskPresenceClient = dependencies.deskPresenceClient ?? new CharadeskPresenceClient(config);
  }

  listThreads(session: AuthenticatedSession) {
    return this.store.listThreads(session.charahomeUid);
  }

  getDeskAvailability(session: AuthenticatedSession, characterId?: string) {
    return this.deskPresenceClient.getAvailability(session.charahomeUid, characterId);
  }

  async createThread(input: ChatThreadInput, session: AuthenticatedSession) {
    const timestamp = nowIso();
    const thread: ChatThread = {
      id: `thread-${randomUUID()}`,
      ownerCharahomeUid: session.charahomeUid,
      ownerDerivedUid: session.derivedUid,
      defaultCharacterId: input.defaultCharacterId.trim(),
      title: input.title?.trim() || input.defaultCharacterId.trim(),
      createdAtIso: timestamp,
      updatedAtIso: timestamp,
      archived: false,
      metadata: {},
    };
    await this.store.saveThread(thread);
    if (this.attentionClient.isReady()) {
      await this.attentionClient.upsertNotificationPolicy({
        policyId: `charachat:${thread.defaultCharacterId}:THREAD:${thread.id}`,
        characterId: thread.defaultCharacterId,
        appId: 'charachat',
        scopeType: 'THREAD',
        scopeId: thread.id,
        notificationsEnabled: true,
        notificationDeliverySetting: 'ring',
        observeScope: 'direct_messages',
        allowAutoReply: true,
        handoffToDirectPresenceWhenActive: true,
      });
    }
    return thread;
  }

  async getMessages(threadId: string, session: AuthenticatedSession) {
    const thread = await this.store.getThreadForOwner(threadId, session.charahomeUid);
    if (!thread) {
      throw new Error(`Thread ${threadId} was not found.`);
    }
    const [messages, availability] = await Promise.all([
      this.store.listMessages(threadId, session.charahomeUid),
      this.getDeskAvailability(session, thread.defaultCharacterId),
    ]);
    return {
      thread,
      messages,
      deskAvailability: availability,
    };
  }

  async sendMessage(threadId: string, input: ChatMessageInput, session: AuthenticatedSession): Promise<SendChatMessageResult> {
    const thread = await this.store.getThreadForOwner(threadId, session.charahomeUid);
    if (!thread) {
      throw new Error(`Thread ${threadId} was not found.`);
    }

    const timestamp = nowIso();
    const userMessage: ChatMessage = {
      id: `msg-${randomUUID()}`,
      threadId,
      ownerCharahomeUid: session.charahomeUid,
      sender: 'USER',
      text: input.text.trim(),
      createdAtIso: timestamp,
    };

    const deskAvailability = await this.getDeskAvailability(session, thread.defaultCharacterId);
    const shouldCreateDeskAttention = shouldNotifyDesk(thread, deskAvailability);
    if (shouldCreateDeskAttention) {
      await this.deskPresenceClient.notifyAttention({
        ownerCharahomeUid: session.charahomeUid,
        characterId: thread.defaultCharacterId,
        sourceClient: 'charachat',
        sourceLabel: 'CHARACHAT',
        contextId: thread.id,
        previewText: input.text.trim(),
        metadata: {
          threadId: thread.id,
        },
      }).catch(() => ({ ok: false }));
    }

    await this.store.appendMessages([userMessage]);
    thread.updatedAtIso = userMessage.createdAtIso;
    thread.metadata = {
      ...(thread.metadata ?? {}),
      lastDeskAttentionAtIso: shouldCreateDeskAttention ? userMessage.createdAtIso : thread.metadata?.lastDeskAttentionAtIso,
    };
    await this.store.saveThread(thread);

    const attentionResult = await this.attentionClient.ingestInboxItem({
      inboxItemId: `charachat-inbox-${userMessage.id}`,
      characterId: thread.defaultCharacterId,
      ownerUserId: session.charahomeUid,
      appId: 'charachat',
      sourceClientId: 'charachat-api',
      scopeType: 'THREAD',
      scopeId: thread.id,
      sourceMessageId: userMessage.id,
      sourceUserId: session.charahomeUid,
      sourceDisplayName: session.charahomeUid,
      messageText: userMessage.text,
      attachments: [],
      priorityReason: 'direct_message',
      metadata: {
        threadId: thread.id,
        threadTitle: thread.title,
      },
    });
    if (!attentionResult) {
      throw new Error('CHARAHOME attention client is not configured.');
    }

    const decisionType = this.normalizeDecisionType(attentionResult.decision?.decision_type);
    const inboxItemId = this.readStringField(attentionResult.inboxItem, 'inbox_item_id');
    thread.metadata = {
      ...(thread.metadata ?? {}),
      ...(inboxItemId ? { lastInboxItemId: inboxItemId } : {}),
    };

    let behaviorExecutionId: string | null = null;
    let replyMessage: ChatMessage | null = null;
    if (decisionType === 'reply_now') {
      const currentThreadSendAction = this.buildThreadSendAction(thread, session.charahomeUid);
      const judgmentAck = await this.runtimeClient.sendBehaviorJudgment(thread.defaultCharacterId, {
        triggerKind: 'direct_perception',
        awarenessText: [
          `CHARACHAT のスレッド「${thread.title}」でユーザーから新しいメッセージが届いた。`,
          `ユーザーの発言: ${userMessage.text}`,
          '必要なら CHARACHAT でこのスレッドに返信できる。',
        ].join('\n'),
        interactionSessionId: thread.metadata?.sessionId,
        interactionScopeRef: {
          scopeType: 'charachat.thread',
          scopeId: thread.id,
        },
        sourceRef: {
          sourceType: 'charachat.message',
          sourceId: userMessage.id,
        },
        participantRefs: [
          {
            participantType: 'charahome.user',
            participantId: session.charahomeUid,
          },
          {
            participantType: 'charahome.character',
            participantId: thread.defaultCharacterId,
          },
        ],
        injectedCharacterActions: [this.toRuntimeCharacterActionInput(currentThreadSendAction)],
        executionContext: {
          appId: 'charachat',
          clientId: 'charachat-api',
          language: 'JP',
          audioEnabled: true,
          debug: false,
        },
      });
      if (!judgmentAck?.accepted || !judgmentAck.executionId) {
        throw new Error('CHARAHOME behavior judgment did not return a valid execution id.');
      }

      behaviorExecutionId = judgmentAck.executionId;
      thread.metadata = {
        ...(thread.metadata ?? {}),
        sessionId: judgmentAck.interactionSessionId ?? thread.metadata?.sessionId,
        lastBehaviorExecutionId: judgmentAck.executionId,
      };
      await this.store.saveThread(thread);
      replyMessage = await this.waitForCharacterReply(thread.id, session.charahomeUid, judgmentAck.executionId);
    } else {
      await this.store.saveThread(thread);
    }

    return {
      thread,
      userMessage,
      replyMessage,
      deskAvailability,
      interactionDecisionType: decisionType,
      inboxItemId,
      behaviorExecutionId,
    };
  }

  private normalizeDecisionType(value: unknown): ChatInteractionDecisionType {
    if (value === 'reply_now' || value === 'reply_later' || value === 'no_reply' || value === 'notice_only') {
      return value;
    }
    return 'notice_only';
  }

  private readStringField(record: Record<string, unknown>, fieldName: string) {
    const value = record[fieldName];
    return typeof value === 'string' && value.trim().length > 0 ? value : null;
  }

  private buildThreadSendAction(thread: ChatThread, ownerCharahomeUid: string) {
    return buildOfficialThreadSendAction({
      thread,
      ownerCharahomeUid,
      characterId: thread.defaultCharacterId,
    });
  }

  private toRuntimeCharacterActionInput(action: OfficialCharacterActionPayload) {
    return {
      characterActionId: action.character_action_id,
      name: action.name,
      displayName: action.display_name,
      description: action.description,
      category: action.category,
      scope: action.scope,
      outputSchema: action.output_schema,
      requiredPermissions: action.required_permissions,
      requiresUserConsent: action.requires_user_consent,
      providerType: action.provider_type,
      providerId: action.provider_id,
      instructionDoc: action.instruction_doc,
    };
  }

  private async waitForCharacterReply(
    threadId: string,
    ownerCharahomeUid: string,
    behaviorExecutionId: string,
    timeoutMs = 4_000,
    pollIntervalMs = 160,
  ) {
    const startedAt = Date.now();
    while ((Date.now() - startedAt) < timeoutMs) {
      const messages = await this.store.listMessages(threadId, ownerCharahomeUid);
      const replyMessage = messages.find((message) => (
        message.sender === 'CHARACTER'
        && message.metadata
        && typeof message.metadata.behaviorExecutionId === 'string'
        && message.metadata.behaviorExecutionId === behaviorExecutionId
      ));
      if (replyMessage) {
        return replyMessage;
      }
      await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
    }
    return null;
  }
}
