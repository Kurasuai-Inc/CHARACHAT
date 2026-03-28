import { randomUUID } from 'node:crypto';
import type {
  ChatMessage,
  ChatMessageInput,
  ChatThread,
  ChatThreadInput,
  DeskAvailability,
  SendChatMessageResult,
} from '@charachat/domain';
import { type AuthenticatedSession } from '../auth/requestAuth.js';
import { CharadeskPresenceClient } from './charadeskPresenceClient.js';
import { DirectConversationService } from './conversationService.js';
import { type ChatThreadStore } from './threadStore.js';

function nowIso() {
  return new Date().toISOString();
}

function shouldInjectDeskHint(thread: ChatThread, availability: DeskAvailability) {
  if (!availability.available) {
    return false;
  }
  const lastHintAt = thread.metadata?.lastDeskHintAtIso ? Date.parse(thread.metadata.lastDeskHintAtIso) : 0;
  return Number.isNaN(lastHintAt) || (Date.now() - lastHintAt) > 10 * 60_000;
}

export class ChatThreadService {
  private readonly directConversationService: DirectConversationService;
  private readonly deskPresenceClient: CharadeskPresenceClient;

  constructor(private readonly store: ChatThreadStore, config: ConstructorParameters<typeof DirectConversationService>[0]) {
    this.directConversationService = new DirectConversationService(config);
    this.deskPresenceClient = new CharadeskPresenceClient(config);
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

    const conversationResult = await this.directConversationService.send({
      characterId: thread.defaultCharacterId,
      sessionId: thread.metadata?.sessionId,
      text: input.text.trim(),
      sourceId: thread.id,
      metadata: {
        ownerCharahomeUid: session.charahomeUid,
        sourceClient: 'charachat',
      },
    });

    const deskAvailability = await this.getDeskAvailability(session, thread.defaultCharacterId);
    const injectDeskHint = shouldInjectDeskHint(thread, deskAvailability);
    const replyText = injectDeskHint
      ? `今 CHARADESK が開いてるなら、そっちで直接話してくれてもいいよ。\n\n${conversationResult.responseText}`
      : conversationResult.responseText;

    const replyMessage: ChatMessage = {
      id: `msg-${randomUUID()}`,
      threadId,
      ownerCharahomeUid: session.charahomeUid,
      sender: 'CHARACTER',
      characterId: thread.defaultCharacterId,
      text: replyText,
      createdAtIso: nowIso(),
      metadata: {
        sessionId: conversationResult.sessionId,
        deskAvailability,
      },
    };

    thread.updatedAtIso = replyMessage.createdAtIso;
    thread.metadata = {
      ...(thread.metadata ?? {}),
      sessionId: conversationResult.sessionId,
      lastDeskHintAtIso: injectDeskHint ? replyMessage.createdAtIso : thread.metadata?.lastDeskHintAtIso,
    };

    await this.store.appendMessages([userMessage, replyMessage]);
    await this.store.saveThread(thread);

    return {
      thread,
      userMessage,
      replyMessage,
      deskAvailability,
    };
  }
}

