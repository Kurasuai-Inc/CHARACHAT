import { type ChatThread } from '@charachat/domain';
import { type ChatThreadStore } from '../chat/threadStore.js';

export interface OfficialCharacterActionPayload {
  character_action_id: string;
  name: string;
  display_name: string;
  description: string;
  category: string;
  scope: string;
  output_schema: Record<string, unknown>;
  required_permissions: string[];
  requires_user_consent: boolean;
  provider_type: string;
  provider_id: string;
  instruction_doc: string;
}

interface BuildThreadActionInput {
  thread: ChatThread;
  ownerCharahomeUid: string;
  characterId: string;
}

function buildBasePayload(input: BuildThreadActionInput) {
  return {
    thread_id: input.thread.id,
    thread_title: input.thread.title,
    owner_charahome_uid: input.ownerCharahomeUid,
    character_id: input.characterId,
  };
}

export function buildOfficialThreadSendAction(input: BuildThreadActionInput): OfficialCharacterActionPayload {
  return {
    character_action_id: `charachat.official.thread.send.${input.thread.id}`,
    name: 'charachat_thread_send_message',
    display_name: `CHARACHATの「${input.thread.title}」に返信する`,
    description: `CHARACHAT のスレッド「${input.thread.title}」へメッセージを送信する。`,
    category: 'messaging',
    scope: 'app',
    output_schema: {
      type: 'object',
      properties: {
        text: {
          type: 'string',
          description: 'スレッドに送信する本文',
        },
      },
      required: ['text'],
      additionalProperties: false,
      'x-default_payload': {
        transport_kind: 'official_thread_send_message',
        ...buildBasePayload(input),
      },
      'x-editable_payload_keys': ['text'],
    },
    required_permissions: [],
    requires_user_consent: false,
    provider_type: 'charachat',
    provider_id: input.thread.id,
    instruction_doc: 'CHARACHAT のこのスレッドに返信するときに使う。',
  };
}

export function buildOfficialThreadReadRecentAction(input: BuildThreadActionInput): OfficialCharacterActionPayload {
  return {
    character_action_id: `charachat.official.thread.read_recent.${input.thread.id}`,
    name: 'charachat_thread_read_recent',
    display_name: `CHARACHATの「${input.thread.title}」を確認する`,
    description: `CHARACHAT のスレッド「${input.thread.title}」の最近の会話内容を読み返す。`,
    category: 'messaging',
    scope: 'app',
    output_schema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
      'x-default_payload': {
        transport_kind: 'official_thread_read_recent',
        recent_limit: 10,
        ...buildBasePayload(input),
      },
      'x-editable_payload_keys': [],
    },
    required_permissions: [],
    requires_user_consent: false,
    provider_type: 'charachat',
    provider_id: input.thread.id,
    instruction_doc: 'CHARACHAT のこのスレッドで直近の会話内容を確認したいときに使う。',
  };
}

export class OfficialCharacterActionCatalogService {
  constructor(private readonly store: ChatThreadStore) {}

  async listOfficialCharacterActions(input: {
    characterId: string;
    ownerCharahomeUid: string;
  }) {
    const threads = await this.store.listThreads(input.ownerCharahomeUid);
    return threads
      .filter((thread) => !thread.archived && thread.defaultCharacterId === input.characterId)
      .sort((left, right) => right.updatedAtIso.localeCompare(left.updatedAtIso))
      .slice(0, 24)
      .flatMap((thread) => ([
        buildOfficialThreadSendAction({
          thread,
          ownerCharahomeUid: input.ownerCharahomeUid,
          characterId: input.characterId,
        }),
        buildOfficialThreadReadRecentAction({
          thread,
          ownerCharahomeUid: input.ownerCharahomeUid,
          characterId: input.characterId,
        }),
      ]));
  }
}
