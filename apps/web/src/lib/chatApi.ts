import type {
  ChatMessage,
  ChatThread,
  ChatThreadInput,
  DeskAvailability,
  SendChatMessageResult,
} from '@charachat/domain';

const API_BASE_URL = import.meta.env.VITE_CHARACHAT_API_BASE_URL || '';

export type ChatApiAuth = {
  derivedToken?: string | null;
  charahomeToken?: string | null;
};

function buildApiUrl(path: string) {
  if (!API_BASE_URL) {
    return path;
  }
  return `${API_BASE_URL.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
}

function buildAuthHeaders(auth?: ChatApiAuth) {
  const headers: Record<string, string> = {};
  if (auth?.derivedToken) {
    headers.Authorization = `Bearer ${auth.derivedToken}`;
  }
  if (auth?.charahomeToken) {
    headers['X-CHARAHOME-AUTH-TOKEN'] = auth.charahomeToken;
  }
  return headers;
}

async function requestApi<T>(path: string, init?: RequestInit, auth?: ChatApiAuth): Promise<T> {
  const response = await fetch(buildApiUrl(path), {
    headers: {
      'Content-Type': 'application/json',
      ...buildAuthHeaders(auth),
      ...(init?.headers ?? {}),
    },
    ...init,
  });
  const payload = await response.json().catch(() => ({})) as T & { ok?: boolean; message?: string };
  if (!response.ok || ('ok' in payload && payload.ok === false)) {
    throw new Error(payload.message ?? `CHARACHAT API returned ${response.status}.`);
  }
  return payload;
}

export async function listThreads(auth: ChatApiAuth) {
  const payload = await requestApi<{ threads: ChatThread[] }>('/threads', undefined, auth);
  return payload.threads;
}

export async function createThread(input: ChatThreadInput, auth: ChatApiAuth) {
  const payload = await requestApi<{ thread: ChatThread }>('/threads', {
    method: 'POST',
    body: JSON.stringify(input),
  }, auth);
  return payload.thread;
}

export async function getThreadMessages(threadId: string, auth: ChatApiAuth) {
  const payload = await requestApi<{
    result: {
      thread: ChatThread;
      messages: ChatMessage[];
      deskAvailability: DeskAvailability;
    };
  }>(`/threads/${threadId}/messages`, undefined, auth);
  return payload.result;
}

export async function sendThreadMessage(threadId: string, text: string, auth: ChatApiAuth) {
  const payload = await requestApi<{ result: SendChatMessageResult }>(`/threads/${threadId}/messages`, {
    method: 'POST',
    body: JSON.stringify({ text }),
  }, auth);
  return payload.result;
}

