import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { type ChatMessage } from '@charachat/domain';
import { FileChatThreadStore } from '../chat/threadStore.js';
import { ChatThreadService } from '../chat/threadService.js';
import { type AuthenticatedSession } from '../auth/requestAuth.js';
import { type CharachatApiConfig } from '../config.js';

const baseConfig: CharachatApiConfig = {
  port: 8794,
  host: '127.0.0.1',
  dataDir: '.charachat-test-data',
  publicBaseUrl: 'https://charachat.example.com',
  derivedAppId: 'charachat_web',
  charahomeEnvironment: 'staging',
};

const session: AuthenticatedSession = {
  derivedUid: 'derived-1',
  charahomeUid: 'user-1',
  userPrincipalKey: 'USER:user-1',
  managedCharacterIds: ['stella'],
  managedPrincipalKeys: ['USER:user-1', 'CHARACTER:stella'],
  derivedToken: 'derived-token',
  charahomeToken: 'charahome-token',
  token: { uid: 'derived-1' } as never,
};

describe('ChatThreadService', () => {
  const storePath = `${process.cwd()}/.tmp-charachat-store.json`;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(async () => {
    await import('fs/promises').then(({ rm }) => rm(storePath, { force: true }).catch(() => undefined));
  });

  it('creates a thread and returns empty message history', async () => {
    const service = new ChatThreadService(new FileChatThreadStore(storePath), baseConfig);
    const thread = await service.createThread({
      defaultCharacterId: 'stella',
      title: 'Stella',
    }, session);

    const result = await service.getMessages(thread.id, session);

    expect(result.thread.defaultCharacterId).toBe('stella');
    expect(result.messages).toHaveLength(0);
    expect(result.deskAvailability.available).toBe(false);
  });

  it('ingests the message, triggers behavior judgment, and returns the runtime-produced reply', async () => {
    const store = new FileChatThreadStore(storePath);
    const deskPresenceClient = {
      getAvailability: vi.fn().mockResolvedValue({
        available: true,
        clientKinds: ['WEB_CONTROL'],
      }),
      notifyAttention: vi.fn().mockResolvedValue({ ok: true }),
    };
    const attentionClient = {
      isReady: () => true,
      upsertNotificationPolicy: vi.fn().mockResolvedValue({ ok: true }),
      ingestInboxItem: vi.fn().mockResolvedValue({
        inboxItem: {
          inbox_item_id: 'inbox-1',
        },
        decision: {
          decision_type: 'reply_now',
        },
      }),
    };
    const runtimeClient = {
      sendBehaviorJudgment: vi.fn().mockImplementation(async () => {
        const replyMessage: ChatMessage = {
          id: 'msg-character-1',
          threadId: thread.id,
          ownerCharahomeUid: session.charahomeUid,
          sender: 'CHARACTER',
          characterId: 'stella',
          text: 'strict runtime reply',
          createdAtIso: new Date(Date.now() + 1_000).toISOString(),
          metadata: {
            behaviorExecutionId: 'exec-1',
          },
        };
        await store.appendMessages([replyMessage]);
        return {
          accepted: true,
          characterId: 'stella',
          executionId: 'exec-1',
          interactionSessionId: 'session-1',
          primaryRenderPlanId: 'plan-1',
          published: true,
        };
      }),
    };

    const service = new ChatThreadService(store, baseConfig, {
      attentionClient: attentionClient as never,
      runtimeClient: runtimeClient as never,
      deskPresenceClient: deskPresenceClient as never,
    });
    const thread = await service.createThread({
      defaultCharacterId: 'stella',
      title: 'Stella',
    }, session);

    const result = await service.sendMessage(thread.id, { text: 'こんにちは' }, session);

    expect(result.replyMessage?.text).toBe('strict runtime reply');
    expect(result.interactionDecisionType).toBe('reply_now');
    expect(result.inboxItemId).toBe('inbox-1');
    expect(result.behaviorExecutionId).toBe('exec-1');
    expect(attentionClient.ingestInboxItem).toHaveBeenCalledTimes(1);
    expect(runtimeClient.sendBehaviorJudgment).toHaveBeenCalledTimes(1);
    expect(deskPresenceClient.notifyAttention).toHaveBeenCalledTimes(1);
  });

  it('does not trigger behavior judgment when attention decides to reply later', async () => {
    const store = new FileChatThreadStore(storePath);
    const runtimeClient = {
      sendBehaviorJudgment: vi.fn(),
    };
    const service = new ChatThreadService(store, baseConfig, {
      attentionClient: {
        isReady: () => true,
        upsertNotificationPolicy: vi.fn().mockResolvedValue({ ok: true }),
        ingestInboxItem: vi.fn().mockResolvedValue({
          inboxItem: {
            inbox_item_id: 'inbox-2',
          },
          decision: {
            decision_type: 'reply_later',
          },
        }),
      } as never,
      runtimeClient: runtimeClient as never,
      deskPresenceClient: {
        getAvailability: vi.fn().mockResolvedValue({ available: false, clientKinds: [] }),
        notifyAttention: vi.fn(),
      } as never,
    });
    const thread = await service.createThread({
      defaultCharacterId: 'stella',
      title: 'Stella',
    }, session);

    const result = await service.sendMessage(thread.id, { text: 'あとで返事して' }, session);

    expect(result.replyMessage).toBeNull();
    expect(result.interactionDecisionType).toBe('reply_later');
    expect(runtimeClient.sendBehaviorJudgment).not.toHaveBeenCalled();
  });
});
