export type ChatMessageSender = 'USER' | 'CHARACTER' | 'SYSTEM';

export interface ChatThread {
  id: string;
  ownerCharahomeUid: string;
  ownerDerivedUid?: string;
  defaultCharacterId: string;
  title: string;
  createdAtIso: string;
  updatedAtIso: string;
  archived: boolean;
  metadata?: {
    sessionId?: string;
    lastDeskAttentionAtIso?: string;
    lastBehaviorExecutionId?: string;
    lastInboxItemId?: string;
  };
}

export interface ChatMessage {
  id: string;
  threadId: string;
  ownerCharahomeUid: string;
  sender: ChatMessageSender;
  characterId?: string;
  text: string;
  createdAtIso: string;
  metadata?: Record<string, unknown>;
}

export interface ChatThreadInput {
  title?: string;
  defaultCharacterId: string;
}

export interface ChatMessageInput {
  text: string;
}

export interface DeskAvailability {
  available: boolean;
  clientKinds: string[];
}

export type ChatInteractionDecisionType = 'reply_now' | 'reply_later' | 'no_reply' | 'notice_only';

export interface SendChatMessageResult {
  thread: ChatThread;
  userMessage: ChatMessage;
  replyMessage?: ChatMessage | null;
  deskAvailability: DeskAvailability;
  interactionDecisionType?: ChatInteractionDecisionType;
  inboxItemId?: string | null;
  behaviorExecutionId?: string | null;
}
