import { type ChatInteractionDecisionType } from '@charachat/domain';
import { type CharachatApiConfig } from '../config.js';

export interface AttentionIngestInput {
  inboxItemId?: string;
  characterId: string;
  ownerUserId: string;
  appId: string;
  sourceClientId?: string;
  scopeType: string;
  scopeId: string;
  sourceMessageId: string;
  sourceUserId: string;
  sourceDisplayName?: string;
  messageText: string;
  attachments?: Array<Record<string, unknown>>;
  priorityReason: 'direct_message' | 'mention' | 'reply_to_character' | 'watched_channel' | 'system_alert';
  metadata?: Record<string, unknown>;
}

export interface AttentionIngestResult {
  inboxItem: Record<string, unknown>;
  decision: {
    decision_type: ChatInteractionDecisionType;
    reply_app_id?: string | null;
    reply_scope_id?: string | null;
    eligible_at?: string | null;
    decision_reason_summary?: string | null;
  };
}

export interface AttentionNotificationPolicyInput {
  policyId: string;
  characterId: string;
  appId: string;
  scopeType: string;
  scopeId?: string;
  notificationsEnabled: boolean;
  notificationDeliverySetting: 'ring' | 'silent' | 'badge_only' | 'off';
  observeScope: 'direct_messages' | 'mentions_only' | 'watched_channel' | 'all_visible';
  allowAutoReply: boolean;
  handoffToDirectPresenceWhenActive: boolean;
}

function normalizeBaseUrl(baseUrl: string | undefined) {
  const normalized = baseUrl?.trim().replace(/\/$/, '');
  if (!normalized) {
    return null;
  }
  return normalized.endsWith('/api/v1') ? normalized : `${normalized}/api/v1`;
}

export class CharahomeAttentionClient {
  constructor(private readonly config: CharachatApiConfig) {}

  isReady() {
    return Boolean(normalizeBaseUrl(this.config.charahomeApiBaseUrl) && this.config.charahomeInternalApiKey);
  }

  private buildInboxEndpoint() {
    const baseUrl = normalizeBaseUrl(this.config.charahomeApiBaseUrl);
    if (!baseUrl) {
      return null;
    }
    return `${baseUrl}/internal/attention/inbox-items`;
  }

  private buildNotificationPolicyEndpoint() {
    const baseUrl = normalizeBaseUrl(this.config.charahomeApiBaseUrl);
    if (!baseUrl) {
      return null;
    }
    return `${baseUrl}/internal/attention/notification-policies`;
  }

  async ingestInboxItem(input: AttentionIngestInput): Promise<AttentionIngestResult | null> {
    const url = this.buildInboxEndpoint();
    const internalApiKey = this.config.charahomeInternalApiKey;
    if (!url || !internalApiKey) {
      return null;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-internal-api-key': internalApiKey,
      },
      body: JSON.stringify({
        inbox_item_id: input.inboxItemId,
        character_id: input.characterId,
        owner_user_id: input.ownerUserId,
        app_id: input.appId,
        source_client_id: input.sourceClientId,
        scope_type: input.scopeType,
        scope_id: input.scopeId,
        source_message_id: input.sourceMessageId,
        source_user_id: input.sourceUserId,
        source_display_name: input.sourceDisplayName,
        message_text: input.messageText,
        attachments: input.attachments ?? [],
        priority_reason: input.priorityReason,
        metadata: input.metadata ?? {},
      }),
    });

    const payload = await response.json().catch(() => ({})) as Record<string, unknown>;
    if (!response.ok || payload.ok !== true) {
      const detail = typeof payload.detail === 'string'
        ? payload.detail
        : typeof payload.message === 'string'
          ? payload.message
          : 'Failed to ingest CHARAHOME attention inbox item.';
      throw new Error(detail);
    }

    return {
      inboxItem: (payload.inbox_item ?? payload.inboxItem ?? {}) as Record<string, unknown>,
      decision: (payload.decision ?? {}) as AttentionIngestResult['decision'],
    };
  }

  async upsertNotificationPolicy(input: AttentionNotificationPolicyInput) {
    const url = this.buildNotificationPolicyEndpoint();
    const internalApiKey = this.config.charahomeInternalApiKey;
    if (!url || !internalApiKey) {
      return null;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-internal-api-key': internalApiKey,
      },
      body: JSON.stringify({
        policy_id: input.policyId,
        character_id: input.characterId,
        app_id: input.appId,
        scope_type: input.scopeType,
        scope_id: input.scopeId ?? null,
        notifications_enabled: input.notificationsEnabled,
        notification_delivery_setting: input.notificationDeliverySetting,
        observe_scope: input.observeScope,
        allow_auto_reply: input.allowAutoReply,
        handoff_to_direct_presence_when_active: input.handoffToDirectPresenceWhenActive,
      }),
    });

    const payload = await response.json().catch(() => ({})) as Record<string, unknown>;
    if (!response.ok) {
      const detail = typeof payload.detail === 'string'
        ? payload.detail
        : typeof payload.message === 'string'
          ? payload.message
          : 'Failed to upsert CHARAHOME notification policy.';
      throw new Error(detail);
    }

    return payload;
  }
}
