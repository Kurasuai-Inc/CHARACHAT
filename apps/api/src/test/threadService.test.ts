import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
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

  it('sends a message and notifies CHARADESK when direct desk presence is active', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        ok: true,
        available: true,
        presence: [{ clientKind: 'WEB_CONTROL' }],
      }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const service = new ChatThreadService(new FileChatThreadStore(storePath), {
      ...baseConfig,
      charadeskRuntimeBaseUrl: 'https://desk.example.com',
      charadeskSiblingSharedSecret: 'desk-secret',
    });
    const thread = await service.createThread({
      defaultCharacterId: 'stella',
      title: 'Stella',
    }, session);

    const result = await service.sendMessage(thread.id, { text: 'こんにちは' }, session);

    expect(result.replyMessage.text).toContain('Character acknowledged');
    expect(result.deskAvailability.available).toBe(true);
    const calledUrls = fetchMock.mock.calls
      .map((call) => typeof call[0] === 'string' ? call[0] : '');
    expect(calledUrls).toContain('https://desk.example.com/runtime/external/attention/user-1');
  });
});
