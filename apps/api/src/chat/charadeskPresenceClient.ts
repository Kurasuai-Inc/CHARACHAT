import { type CharachatApiConfig } from '../config.js';

export interface DeskAvailabilityResult {
  available: boolean;
  clientKinds: string[];
}

export interface DeskAttentionInput {
  ownerCharahomeUid: string;
  characterId?: string;
  sourceClient: string;
  sourceLabel: string;
  contextId?: string;
  previewText: string;
  metadata?: Record<string, unknown>;
}

export class CharadeskPresenceClient {
  constructor(private readonly config: CharachatApiConfig) {}

  async getAvailability(ownerCharahomeUid: string, characterId?: string): Promise<DeskAvailabilityResult> {
    if (!this.config.charadeskRuntimeBaseUrl || !this.config.charadeskSiblingSharedSecret) {
      return {
        available: false,
        clientKinds: [],
      };
    }

    const url = new URL(
      `${this.config.charadeskRuntimeBaseUrl.replace(/\/$/, '')}/runtime/external/presence/${encodeURIComponent(ownerCharahomeUid)}`,
    );
    if (characterId) {
      url.searchParams.set('characterId', characterId);
    }

    const response = await fetch(url, {
      headers: {
        'x-charadesk-sibling-secret': this.config.charadeskSiblingSharedSecret,
      },
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !(payload as { ok?: boolean }).ok) {
      return {
        available: false,
        clientKinds: [],
      };
    }

    const presence = Array.isArray((payload as { presence?: unknown[] }).presence)
      ? (payload as { presence: Array<{ clientKind?: unknown }> }).presence
      : [];
    return {
      available: Boolean((payload as { available?: unknown }).available),
      clientKinds: presence
        .map((record) => typeof record.clientKind === 'string' ? record.clientKind : null)
        .filter((value): value is string => Boolean(value)),
    };
  }

  async notifyAttention(input: DeskAttentionInput) {
    if (!this.config.charadeskRuntimeBaseUrl || !this.config.charadeskSiblingSharedSecret) {
      return { ok: false };
    }

    const response = await fetch(
      `${this.config.charadeskRuntimeBaseUrl.replace(/\/$/, '')}/runtime/external/attention/${encodeURIComponent(input.ownerCharahomeUid)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-charadesk-sibling-secret': this.config.charadeskSiblingSharedSecret,
        },
        body: JSON.stringify({
          characterId: input.characterId,
          sourceClient: input.sourceClient,
          sourceLabel: input.sourceLabel,
          contextId: input.contextId,
          previewText: input.previewText,
          metadata: input.metadata,
        }),
      },
    );
    return {
      ok: response.ok,
    };
  }
}
