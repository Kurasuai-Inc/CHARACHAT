import { afterEach, describe, expect, it, vi } from 'vitest';
import { FileChatThreadStore } from '../chat/threadStore.js';
import { CharahomeRuntimeBridge } from '../charahome/runtimeBridge.js';
import { type CharachatApiConfig } from '../config.js';

const baseConfig: CharachatApiConfig = {
  port: 8794,
  host: '127.0.0.1',
  dataDir: '.charachat-test-data',
  publicBaseUrl: 'https://charachat.example.com',
  derivedAppId: 'charachat_web',
  charahomeEnvironment: 'staging',
};

describe('CharahomeRuntimeBridge', () => {
  const storePath = `${process.cwd()}/.tmp-charachat-runtime-bridge-store.json`;

  afterEach(async () => {
    await import('fs/promises').then(({ rm }) => rm(storePath, { force: true }).catch(() => undefined));
  });

  it('executes official thread send actions and reports success', async () => {
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
    const reportActionExecutionResult = vi.fn().mockResolvedValue({});
    const bridge = new CharahomeRuntimeBridge(baseConfig, store, {
      runtimeClient: {
        isReady: () => true,
        createInternalEventSubscription: () => null,
        reportActionExecutionResult,
      } as never,
    });

    await (bridge as any).handleRuntimeEvent({
      eventType: 'behavior_execution_event.created',
      characterId: 'stella',
      publishedAtIso: new Date().toISOString(),
      payload: {
        execution_id: 'exec-1',
        phase_id: 'phase-1',
        event_kind: 'provider_action_dispatch_requested',
        payload: {
          action_calls: [
            {
              call_id: 'call-1',
              provider_type: 'charachat',
              provider_id: 'thread-1',
              payload: {
                transport_kind: 'official_thread_send_message',
                thread_id: 'thread-1',
                owner_charahome_uid: 'user-1',
                text: 'CHARACHAT に返信したよ',
              },
            },
          ],
        },
      },
    });

    const messages = await store.listMessages('thread-1', 'user-1');
    expect(messages).toHaveLength(1);
    expect(messages[0]?.text).toBe('CHARACHAT に返信したよ');
    expect(reportActionExecutionResult).toHaveBeenCalledWith('stella', 'exec-1', expect.objectContaining({
      callId: 'call-1',
      actionStatus: 'success',
    }));
  });
});
