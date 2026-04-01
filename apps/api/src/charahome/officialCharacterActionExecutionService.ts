import { randomUUID } from 'node:crypto';
import { type ChatMessage } from '@charachat/domain';
import { type ChatThreadStore } from '../chat/threadStore.js';

function nowIso() {
  return new Date().toISOString();
}

function ensureString(value: unknown, fieldName: string) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${fieldName} is required.`);
  }
  return value.trim();
}

export interface OfficialCharacterActionExecutionResult {
  providerType: string;
  providerId: string | null;
  actionStatus: 'success' | 'failure';
  resultSummaryText: string;
  resultPayload?: Record<string, unknown> | null;
  errorMessage?: string | null;
}

export class OfficialCharacterActionExecutionService {
  constructor(private readonly store: ChatThreadStore) {}

  async execute(input: {
    characterId: string;
    providerId?: string | null;
    payload: Record<string, unknown>;
  }): Promise<OfficialCharacterActionExecutionResult> {
    const transportKind = typeof input.payload.transport_kind === 'string'
      ? input.payload.transport_kind
      : '';
    const threadId = typeof input.payload.thread_id === 'string' ? input.payload.thread_id.trim() : '';
    const ownerCharahomeUid = typeof input.payload.owner_charahome_uid === 'string'
      ? input.payload.owner_charahome_uid.trim()
      : '';

    try {
      if (!threadId || !ownerCharahomeUid) {
        throw new Error('thread_id and owner_charahome_uid are required.');
      }
      const thread = await this.store.getThreadForOwner(threadId, ownerCharahomeUid);
      if (!thread) {
        throw new Error(`CHARACHAT thread ${threadId} was not found.`);
      }

      switch (transportKind) {
        case 'official_thread_send_message': {
          const text = ensureString(input.payload.text, 'text');
          const message: ChatMessage = {
            id: `msg-${randomUUID()}`,
            threadId: thread.id,
            ownerCharahomeUid,
            sender: 'CHARACTER',
            characterId: input.characterId,
            text,
            createdAtIso: nowIso(),
            metadata: {
              providerType: 'charachat',
              providerId: input.providerId ?? thread.id,
            },
          };
          thread.updatedAtIso = message.createdAtIso;
          await this.store.appendMessages([message]);
          await this.store.saveThread(thread);
          return {
            providerType: 'charachat',
            providerId: input.providerId ?? thread.id,
            actionStatus: 'success',
            resultSummaryText: `CHARACHAT の「${thread.title}」に返信を送信した。`,
            resultPayload: {
              thread_id: thread.id,
              message_id: message.id,
              text,
            },
          };
        }
        case 'official_thread_read_recent': {
          const recentMessages = await this.store.listMessages(thread.id, ownerCharahomeUid);
          const selected = recentMessages.slice(-10);
          const summary = selected.length > 0
            ? selected.map((message) => `${message.sender === 'CHARACTER' ? (message.characterId ?? 'character') : 'user'}: ${message.text}`).join('\n')
            : 'このスレッドにはまだメッセージがない。';
          return {
            providerType: 'charachat',
            providerId: input.providerId ?? thread.id,
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
          };
        }
        default:
          throw new Error(`Unsupported CHARACHAT transport kind: ${transportKind}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return {
        providerType: 'charachat',
        providerId: input.providerId ?? threadId ?? null,
        actionStatus: 'failure',
        resultSummaryText: 'CHARACHAT の操作に失敗した。',
        errorMessage,
        resultPayload: {
          transport_kind: transportKind || null,
          thread_id: threadId || null,
        },
      };
    }
  }
}
