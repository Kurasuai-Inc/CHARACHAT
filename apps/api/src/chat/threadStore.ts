import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { type Firestore } from 'firebase-admin/firestore';
import { type ChatMessage, type ChatThread } from '@charachat/domain';

interface StoreShape {
  threads: ChatThread[];
  messages: ChatMessage[];
}

const COLLECTION_THREADS = 'charachatThreads';
const COLLECTION_MESSAGES = 'charachatMessages';

export interface ChatThreadStore {
  listThreads(ownerCharahomeUid: string): Promise<ChatThread[]>;
  getThread(threadId: string): Promise<ChatThread | null>;
  getThreadForOwner(threadId: string, ownerCharahomeUid: string): Promise<ChatThread | null>;
  saveThread(thread: ChatThread): Promise<ChatThread>;
  listMessages(threadId: string, ownerCharahomeUid: string): Promise<ChatMessage[]>;
  appendMessages(messages: ChatMessage[]): Promise<void>;
}

export class FileChatThreadStore implements ChatThreadStore {
  constructor(private readonly filePath: string) {}

  private async load(): Promise<StoreShape> {
    try {
      const raw = await readFile(this.filePath, 'utf8');
      return JSON.parse(raw) as StoreShape;
    } catch {
      return { threads: [], messages: [] };
    }
  }

  private async persist(shape: StoreShape) {
    await mkdir(path.dirname(this.filePath), { recursive: true });
    await writeFile(this.filePath, `${JSON.stringify(shape, null, 2)}\n`, 'utf8');
  }

  async listThreads(ownerCharahomeUid: string) {
    const shape = await this.load();
    return shape.threads
      .filter((thread) => thread.ownerCharahomeUid === ownerCharahomeUid)
      .sort((left, right) => right.updatedAtIso.localeCompare(left.updatedAtIso));
  }

  async getThread(threadId: string) {
    const shape = await this.load();
    return shape.threads.find((thread) => thread.id === threadId) ?? null;
  }

  async getThreadForOwner(threadId: string, ownerCharahomeUid: string) {
    const thread = await this.getThread(threadId);
    return thread?.ownerCharahomeUid === ownerCharahomeUid ? thread : null;
  }

  async saveThread(thread: ChatThread) {
    const shape = await this.load();
    shape.threads = [...shape.threads.filter((item) => item.id !== thread.id), thread];
    await this.persist(shape);
    return thread;
  }

  async listMessages(threadId: string, ownerCharahomeUid: string) {
    const shape = await this.load();
    const thread = shape.threads.find((item) => item.id === threadId && item.ownerCharahomeUid === ownerCharahomeUid);
    if (!thread) {
      return [];
    }
    return shape.messages
      .filter((message) => message.threadId === threadId && message.ownerCharahomeUid === ownerCharahomeUid)
      .sort((left, right) => left.createdAtIso.localeCompare(right.createdAtIso));
  }

  async appendMessages(messages: ChatMessage[]) {
    const shape = await this.load();
    shape.messages.push(...messages);
    await this.persist(shape);
  }
}

export class FirestoreChatThreadStore implements ChatThreadStore {
  constructor(private readonly firestore: Firestore) {}

  async listThreads(ownerCharahomeUid: string) {
    const snapshot = await this.firestore.collection(COLLECTION_THREADS)
      .where('ownerCharahomeUid', '==', ownerCharahomeUid)
      .get();
    return snapshot.docs
      .map((doc) => doc.data() as ChatThread)
      .sort((left, right) => right.updatedAtIso.localeCompare(left.updatedAtIso));
  }

  async getThread(threadId: string) {
    const snapshot = await this.firestore.collection(COLLECTION_THREADS).doc(threadId).get();
    return snapshot.exists ? snapshot.data() as ChatThread : null;
  }

  async getThreadForOwner(threadId: string, ownerCharahomeUid: string) {
    const thread = await this.getThread(threadId);
    return thread?.ownerCharahomeUid === ownerCharahomeUid ? thread : null;
  }

  async saveThread(thread: ChatThread) {
    await this.firestore.collection(COLLECTION_THREADS).doc(thread.id).set(thread);
    return thread;
  }

  async listMessages(threadId: string, ownerCharahomeUid: string) {
    const snapshot = await this.firestore.collection(COLLECTION_MESSAGES)
      .where('threadId', '==', threadId)
      .where('ownerCharahomeUid', '==', ownerCharahomeUid)
      .get();
    return snapshot.docs
      .map((doc) => doc.data() as ChatMessage)
      .sort((left, right) => left.createdAtIso.localeCompare(right.createdAtIso));
  }

  async appendMessages(messages: ChatMessage[]) {
    const batch = this.firestore.batch();
    for (const message of messages) {
      batch.set(this.firestore.collection(COLLECTION_MESSAGES).doc(message.id), message);
    }
    await batch.commit();
  }
}

