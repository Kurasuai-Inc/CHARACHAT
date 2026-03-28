import { type CharachatApiConfig } from '../config.js';

export interface DirectConversationInput {
  characterId: string;
  sessionId?: string;
  text: string;
  sourceId: string;
  metadata?: Record<string, unknown>;
}

export interface DirectConversationResult {
  sessionId: string;
  characterId: string;
  responseText: string;
}

export class DirectConversationService {
  constructor(private readonly config: CharachatApiConfig) {}

  async send(input: DirectConversationInput): Promise<DirectConversationResult> {
    const sessionId = input.sessionId ?? `${input.characterId}-${Date.now()}`;
    if (!this.config.charahomeAuthToken) {
      return {
        sessionId,
        characterId: input.characterId,
        responseText: `Character acknowledged: ${input.text}`,
      };
    }

    const environment = this.config.charahomeEnvironment ?? 'staging';
    const { createCharahomeApiClient, getEnvironmentConfig } = await import('@kurasuai-inc/charahome-api');
    type CharahomeApiConfig = import('@kurasuai-inc/charahome-api').CharahomeApiConfig;
    type ConversationChunk = import('@kurasuai-inc/charahome-api').ConversationChunk;
    type ConversationRequest = import('@kurasuai-inc/charahome-api').ConversationRequest;
    const sdkConfig: CharahomeApiConfig = {
      environment,
      baseUrl: this.config.charahomeApiBaseUrl ?? getEnvironmentConfig(environment).apiBaseUrl,
      authToken: this.config.charahomeAuthToken,
    };
    const client = createCharahomeApiClient(sdkConfig);
    const request: ConversationRequest = {
      input_string: input.text,
      session_id: sessionId,
      custom_properties: {
        source: 'CHARACHAT',
        client_context: {
          clientId: 'charachat',
          conversationId: input.sourceId,
        },
        metadata: input.metadata,
      },
    };
    const chunks: ConversationChunk[] = [];
    for await (const chunk of client.streamConversation(input.characterId, request)) {
      chunks.push(chunk);
    }
    return {
      sessionId,
      characterId: input.characterId,
      responseText: chunks.map((chunk) => chunk.text ?? '').join('').trim() || `Character acknowledged: ${input.text}`,
    };
  }
}

