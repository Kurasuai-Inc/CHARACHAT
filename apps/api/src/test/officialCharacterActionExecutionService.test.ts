import { afterEach, describe, expect, it } from 'vitest';
import { FileChatThreadStore } from '../chat/threadStore.js';
import { OfficialCharacterActionExecutionService } from '../charahome/officialCharacterActionExecutionService.js';

describe('OfficialCharacterActionExecutionService', () => {
  const storePath = `${process.cwd()}/.tmp-charachat-execution-store.json`;

  afterEach(async () => {
    await import('fs/promises').then(({ rm }) => rm(storePath, { force: true }).catch(() => undefined));
  });

  it('sends a message to an owned thread', async () => {
    const store = new FileChatThreadStore(storePath);
    await store.saveThread({
      id: 'thread-1',
      ownerCharahomeUid: 'user-1',
      ownerDerivedUid: 'derived-1',
      defaultCharacterId: 'stella',
      title: 'Stella',
      createdAtIso: new Date().toISOString(),
      updatedAtIso: new Date().toISOString(),
      archived: false,
      metadata: {},
    });

    const service = new OfficialCharacterActionExecutionService(store);
    const result = await service.execute({
      characterId: 'stella',
      providerId: 'thread-1',
      payload: {
        transport_kind: 'official_thread_send_message',
        thread_id: 'thread-1',
        owner_charahome_uid: 'user-1',
        text: 'こんにちは',
      },
    });

    const messages = await store.listMessages('thread-1', 'user-1');
    expect(result).toMatchObject({
      providerType: 'charachat',
      providerId: 'thread-1',
      actionStatus: 'success',
    });
    expect(messages).toHaveLength(1);
    expect(messages[0]?.text).toBe('こんにちは');
  });
});
