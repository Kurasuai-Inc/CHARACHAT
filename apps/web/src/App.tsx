import { useEffect, useMemo, useState } from 'react';
import { CHARAHOMEAuthProvider, useAuth } from '@kurasuai-inc/charahome-auth/react';
import {
  MinimalOnboardingFlow,
  createMinimalOnboardingFetchAdapter,
  type MinimalOnboardingCompletePayload,
} from '@kurasuai-inc/charahome-onboarding-minimal';
import type { ChatMessage, ChatThread, DeskAvailability } from '@charachat/domain';
import { chatAuthConfig } from './lib/authConfig.js';
import { createThread, getThreadMessages, listThreads, sendThreadMessage, type ChatApiAuth } from './lib/chatApi.js';

function ChatWorkspace({
  onboardingResult,
}: {
  onboardingResult: MinimalOnboardingCompletePayload | null;
}) {
  const { charahomeUser, derivedUser, getCharahomeToken, getDerivedToken, signOut } = useAuth();
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [selectedThreadId, setSelectedThreadId] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [deskAvailability, setDeskAvailability] = useState<DeskAvailability>({ available: false, clientKinds: [] });
  const [messageText, setMessageText] = useState('');
  const [newCharacterId, setNewCharacterId] = useState(onboardingResult?.user.favorite_character_id ?? 'stella');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const selectedThread = useMemo(
    () => threads.find((thread) => thread.id === selectedThreadId) ?? null,
    [threads, selectedThreadId],
  );

  const getApiAuth = async (): Promise<ChatApiAuth> => ({
    derivedToken: await getDerivedToken(),
    charahomeToken: await getCharahomeToken(),
  });

  const refreshThreads = async () => {
    const auth = await getApiAuth();
    const nextThreads = await listThreads(auth);
    setThreads(nextThreads);
    if (!selectedThreadId && nextThreads[0]) {
      setSelectedThreadId(nextThreads[0].id);
    }
  };

  const refreshMessages = async (threadId: string) => {
    const auth = await getApiAuth();
    const result = await getThreadMessages(threadId, auth);
    setMessages(result.messages);
    setDeskAvailability(result.deskAvailability);
  };

  useEffect(() => {
    if (!charahomeUser || !derivedUser) return;
    void refreshThreads().catch((error) => {
      setStatus(error instanceof Error ? error.message : 'Failed to load threads.');
    });
  }, [charahomeUser, derivedUser]);

  useEffect(() => {
    if (!selectedThreadId) return;
    void refreshMessages(selectedThreadId).catch((error) => {
      setStatus(error instanceof Error ? error.message : 'Failed to load messages.');
    });
  }, [selectedThreadId]);

  const handleCreateThread = async () => {
    if (!newCharacterId.trim()) {
      setStatus('characterId を入力してください。');
      return;
    }
    setBusy(true);
    setStatus(null);
    try {
      const auth = await getApiAuth();
      const thread = await createThread({
        defaultCharacterId: newCharacterId.trim(),
        title: newCharacterId.trim(),
      }, auth);
      const nextThreads = [thread, ...threads.filter((item) => item.id !== thread.id)];
      setThreads(nextThreads);
      setSelectedThreadId(thread.id);
      setMessages([]);
      setStatus(`${thread.defaultCharacterId} のスレッドを開きました。`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Failed to create thread.');
    } finally {
      setBusy(false);
    }
  };

  const handleSend = async () => {
    if (!selectedThreadId || !messageText.trim()) {
      return;
    }
    setBusy(true);
    setStatus(null);
    try {
      const auth = await getApiAuth();
      const result = await sendThreadMessage(selectedThreadId, messageText.trim(), auth);
      setMessageText('');
      setMessages((current) => [...current, result.userMessage, result.replyMessage]);
      setDeskAvailability(result.deskAvailability);
      setThreads((current) => [result.thread, ...current.filter((item) => item.id !== result.thread.id)]);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Failed to send message.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="chat-shell">
      <aside className="sidebar">
        <div className="brandBlock">
          <div>
            <div className="eyebrow">CHARAHOME</div>
            <h1>CHARACHAT</h1>
          </div>
          <button type="button" className="ghost" onClick={() => void signOut()}>Sign Out</button>
        </div>

        <div className="composerCard">
          <label className="stack">
            <span>新しいキャラで始める</span>
            <input
              className="field"
              value={newCharacterId}
              onChange={(event) => setNewCharacterId(event.target.value)}
              placeholder="stella"
            />
          </label>
          <button type="button" className="primary" disabled={busy} onClick={() => { void handleCreateThread(); }}>
            スレッド作成
          </button>
        </div>

        <div className="threadList">
          {threads.map((thread) => (
            <button
              type="button"
              key={thread.id}
              className={`threadCard${thread.id === selectedThreadId ? ' threadCard--active' : ''}`}
              onClick={() => setSelectedThreadId(thread.id)}
            >
              <strong>{thread.title}</strong>
              <span>{thread.defaultCharacterId}</span>
            </button>
          ))}
        </div>
      </aside>

      <section className="chatPanel">
        <header className="chatHeader">
          <div>
            <strong>{selectedThread?.title ?? 'スレッドを選んでください'}</strong>
            <div className="muted">
              {selectedThread ? `${selectedThread.defaultCharacterId} とすぐ話せます。` : 'favorite character から新規スレッドを作れます。'}
            </div>
          </div>
          {deskAvailability.available ? (
            <div className="presencePill">今 CHARADESK でも直接話せます</div>
          ) : null}
        </header>

        <div className="messagePane">
          {messages.length === 0 ? (
            <div className="emptyState">
              <strong>まだ会話はありません。</strong>
              <span>短く送っても、じっくり相談しても大丈夫です。</span>
            </div>
          ) : (
            messages.map((message) => (
              <article
                key={message.id}
                className={`messageBubble messageBubble--${message.sender.toLowerCase()}`}
              >
                <span className="messageMeta">
                  {message.sender === 'CHARACTER' ? message.characterId ?? 'character' : message.sender}
                </span>
                <p>{message.text}</p>
              </article>
            ))
          )}
        </div>

        <div className="composer">
          {status ? <div className="status">{status}</div> : null}
          <textarea
            className="field field--textarea"
            value={messageText}
            onChange={(event) => setMessageText(event.target.value)}
            placeholder="今ちょっと話したいことを送る"
          />
          <div className="composerActions">
            <span className="muted">
              {deskAvailability.available
                ? 'Desk も開いているので、必要ならそっちに切り替えても大丈夫です。'
                : 'ここが一番軽い会話窓口です。'}
            </span>
            <button type="button" className="primary" disabled={busy || !selectedThreadId || !messageText.trim()} onClick={() => { void handleSend(); }}>
              送信
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ChatApp() {
  const { charahomeUser, derivedUser, loading } = useAuth();
  const [onboardingResult, setOnboardingResult] = useState<MinimalOnboardingCompletePayload | null>(null);
  const onboardingApi = useMemo(() => createMinimalOnboardingFetchAdapter({
    baseUrl: chatAuthConfig.apiBaseUrl!,
  }), []);

  if (loading) {
    return <main className="shellLoading">Loading...</main>;
  }

  if (!charahomeUser || !derivedUser) {
    return (
      <main className="shell">
        <div className="shell__content">
          <MinimalOnboardingFlow
            appId="charachat_web"
            title="CHARACHAT"
            subtitle="すぐ開いて、すぐ話せる軽量チャットです。ログインまたは新規登録が済めば、そのまま favorite character と話し始められます。"
            tosUrl="https://charahome.ai/terms"
            privacyPolicyUrl="https://charahome.ai/privacy"
            tosVersion="1.0"
            privacyPolicyVersion="1.0"
            api={onboardingApi}
            onComplete={async (payload: MinimalOnboardingCompletePayload) => {
              setOnboardingResult(payload);
            }}
          />
        </div>
      </main>
    );
  }

  return <ChatWorkspace onboardingResult={onboardingResult} />;
}

export function App() {
  return (
    <CHARAHOMEAuthProvider config={chatAuthConfig} autoAnonymousLogin={false}>
      <ChatApp />
    </CHARAHOMEAuthProvider>
  );
}

