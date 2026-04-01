import WebSocket, { type RawData } from 'ws';
import { type CharachatApiConfig } from '../config.js';

export interface RuntimeBehaviorExecutionContextInput {
  appId: string;
  clientId?: string | null;
  worldInstanceId?: string | null;
  targetClientIds?: string[];
  language?: string;
  audioEnabled?: boolean;
  debug?: boolean;
}

export interface RuntimeCharacterActionInput {
  characterActionId: string;
  name: string;
  displayName: string;
  description: string;
  category: string;
  scope: string;
  outputSchema?: Record<string, unknown> | null;
  parentActionId?: string | null;
  triggerProperty?: string | null;
  triggerDescription?: string | null;
  requiredPermissions?: string[];
  requiresUserConsent?: boolean;
  providerType: string;
  providerId?: string | null;
  instructionDoc?: string | null;
}

export interface RuntimeBehaviorJudgmentInput {
  triggerKind: 'notification_delivery' | 'alert_delivery' | 'direct_perception' | 'action_result' | 'scheduled_trigger' | 'internal_state_change';
  awarenessText: string;
  interactionSessionId?: string | null;
  interactionScopeRef?: {
    scopeType: string;
    scopeId: string;
  } | null;
  sourceRef?: {
    sourceType: string;
    sourceId: string;
  } | null;
  participantRefs?: Array<{
    participantType: string;
    participantId: string;
  }>;
  injectedCharacterActions?: RuntimeCharacterActionInput[];
  executionContext: RuntimeBehaviorExecutionContextInput;
}

export interface RuntimeBehaviorJudgmentAck {
  accepted: boolean;
  characterId: string;
  executionId: string;
  interactionSessionId?: string | null;
  primaryRenderPlanId?: string | null;
  published: boolean;
}

export interface RuntimeActionExecutionResultInput {
  phaseId: string;
  callId: string;
  providerType?: string | null;
  providerId?: string | null;
  actionStatus: 'success' | 'failure';
  resultSummaryText?: string | null;
  resultPayload?: Record<string, unknown> | null;
  errorMessage?: string | null;
}

export interface RuntimeInternalEventEnvelope {
  eventType: string;
  characterId: string;
  payload: Record<string, unknown>;
  publishedAtIso: string;
}

export interface RuntimeInternalEventSubscription {
  start(): void;
  stop(): void;
}

function nowIso() {
  return new Date().toISOString();
}

function normalizeBaseUrl(config: CharachatApiConfig) {
  const baseUrl = config.charahomeApiBaseUrl?.trim();
  if (!baseUrl) {
    return null;
  }
  return baseUrl.replace(/\/$/, '');
}

function jsonHeaders(internalApiKey: string) {
  return {
    'Content-Type': 'application/json',
    'x-internal-api-key': internalApiKey,
  };
}

export class CharahomeRuntimeClient {
  constructor(private readonly config: CharachatApiConfig) {}

  isReady() {
    return Boolean(normalizeBaseUrl(this.config) && this.config.charahomeInternalApiKey);
  }

  private buildUrl(path: string) {
    const baseUrl = normalizeBaseUrl(this.config);
    if (!baseUrl) {
      return null;
    }
    if (baseUrl.endsWith('/api/v1')) {
      return `${baseUrl}${path}`;
    }
    return `${baseUrl}/api/v1${path}`;
  }

  private buildWebSocketUrl(path: string) {
    const httpUrl = this.buildUrl(path);
    if (!httpUrl) {
      return null;
    }
    return httpUrl
      .replace(/^http:\/\//, 'ws://')
      .replace(/^https:\/\//, 'wss://');
  }

  async sendBehaviorJudgment(
    characterId: string,
    input: RuntimeBehaviorJudgmentInput,
  ): Promise<RuntimeBehaviorJudgmentAck | null> {
    const url = this.buildUrl(`/internal/characters/${characterId}/behavior-judgments`);
    const internalApiKey = this.config.charahomeInternalApiKey;
    if (!url || !internalApiKey) {
      return null;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: jsonHeaders(internalApiKey),
      body: JSON.stringify({
        trigger_kind: input.triggerKind,
        awareness_text: input.awarenessText,
        interaction_session_id: input.interactionSessionId ?? null,
        interaction_scope_ref: input.interactionScopeRef ? {
          scope_type: input.interactionScopeRef.scopeType,
          scope_id: input.interactionScopeRef.scopeId,
        } : null,
        source_ref: input.sourceRef ? {
          source_type: input.sourceRef.sourceType,
          source_id: input.sourceRef.sourceId,
        } : null,
        participant_refs: (input.participantRefs ?? []).map((participant) => ({
          participant_type: participant.participantType,
          participant_id: participant.participantId,
        })),
        injected_character_actions: (input.injectedCharacterActions ?? []).map((action) => ({
          character_action_id: action.characterActionId,
          name: action.name,
          display_name: action.displayName,
          description: action.description,
          category: action.category,
          scope: action.scope,
          output_schema: action.outputSchema ?? null,
          parent_action_id: action.parentActionId ?? null,
          trigger_property: action.triggerProperty ?? null,
          trigger_description: action.triggerDescription ?? null,
          required_permissions: action.requiredPermissions ?? [],
          requires_user_consent: action.requiresUserConsent ?? false,
          provider_type: action.providerType,
          provider_id: action.providerId ?? null,
          instruction_doc: action.instructionDoc ?? null,
        })),
        execution_context: {
          app_id: input.executionContext.appId,
          client_id: input.executionContext.clientId ?? null,
          world_instance_id: input.executionContext.worldInstanceId ?? null,
          target_client_ids: input.executionContext.targetClientIds ?? [],
          language: input.executionContext.language ?? 'JP',
          audio_enabled: input.executionContext.audioEnabled !== false,
          debug: input.executionContext.debug === true,
        },
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to create CHARAHOME behavior judgment (${response.status}).`);
    }

    const payload = await response.json() as Record<string, unknown>;
    return {
      accepted: payload.accepted !== false,
      characterId: typeof payload.character_id === 'string' ? payload.character_id : characterId,
      executionId: typeof payload.execution_id === 'string' ? payload.execution_id : '',
      interactionSessionId: typeof payload.interaction_session_id === 'string'
        ? payload.interaction_session_id
        : null,
      primaryRenderPlanId: typeof payload.primary_render_plan_id === 'string'
        ? payload.primary_render_plan_id
        : null,
      published: payload.published === true,
    };
  }

  async reportActionExecutionResult(
    characterId: string,
    executionId: string,
    input: RuntimeActionExecutionResultInput,
  ) {
    const url = this.buildUrl(`/internal/runtime-events/behavior-execution-plans/${characterId}/${executionId}/action-results`);
    const internalApiKey = this.config.charahomeInternalApiKey;
    if (!url || !internalApiKey) {
      return null;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: jsonHeaders(internalApiKey),
      body: JSON.stringify({
        phase_id: input.phaseId,
        call_id: input.callId,
        provider_type: input.providerType ?? null,
        provider_id: input.providerId ?? null,
        action_status: input.actionStatus,
        result_summary_text: input.resultSummaryText ?? null,
        result_payload: input.resultPayload ?? null,
        error_message: input.errorMessage ?? null,
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to report CHARAHOME action execution result (${response.status}).`);
    }
    return response.json() as Promise<Record<string, unknown>>;
  }

  createInternalEventSubscription(handlers: {
    onOpen?: () => void;
    onClose?: () => void;
    onError?: (error: unknown) => void;
    onEvent: (event: RuntimeInternalEventEnvelope) => void | Promise<void>;
    reconnectDelayMs?: number;
    heartbeatIntervalMs?: number;
  }): RuntimeInternalEventSubscription | null {
    const url = this.buildWebSocketUrl('/internal/runtime-events/ws');
    const internalApiKey = this.config.charahomeInternalApiKey;
    if (!url || !internalApiKey) {
      return null;
    }

    let socket: WebSocket | null = null;
    let reconnectTimer: NodeJS.Timeout | null = null;
    let heartbeatTimer: NodeJS.Timeout | null = null;
    let stopped = false;

    const clearTimers = () => {
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }
      if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }
    };

    const scheduleReconnect = () => {
      if (stopped || reconnectTimer) {
        return;
      }
      reconnectTimer = setTimeout(() => {
        reconnectTimer = null;
        connect();
      }, handlers.reconnectDelayMs ?? 3_000);
    };

    const connect = () => {
      if (stopped) {
        return;
      }
      socket = new WebSocket(url, {
        headers: {
          'x-internal-api-key': internalApiKey,
        },
      });

      socket.on('open', () => {
        handlers.onOpen?.();
        heartbeatTimer = setInterval(() => {
          if (socket?.readyState === WebSocket.OPEN) {
            socket.send('ping');
          }
        }, handlers.heartbeatIntervalMs ?? 20_000);
      });

      socket.on('message', (raw: RawData) => {
        try {
          const payload = JSON.parse(raw.toString()) as Record<string, unknown>;
          void handlers.onEvent({
            eventType: typeof payload.event_type === 'string' ? payload.event_type : '',
            characterId: typeof payload.character_id === 'string' ? payload.character_id : '',
            payload: (payload.payload && typeof payload.payload === 'object')
              ? payload.payload as Record<string, unknown>
              : {},
            publishedAtIso: typeof payload.published_at === 'string'
              ? payload.published_at
              : nowIso(),
          });
        } catch (error) {
          handlers.onError?.(error);
        }
      });

      socket.on('close', () => {
        handlers.onClose?.();
        clearTimers();
        socket = null;
        scheduleReconnect();
      });

      socket.on('error', (error: Error) => {
        handlers.onError?.(error);
      });
    };

    return {
      start() {
        stopped = false;
        connect();
      },
      stop() {
        stopped = true;
        clearTimers();
        if (socket) {
          socket.removeAllListeners();
          socket.close();
          socket = null;
        }
      },
    };
  }
}
