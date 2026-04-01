import { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';
import { FirebaseRequestAuthService, type RequestAuthService } from './auth/requestAuth.js';
import { ChatThreadService } from './chat/threadService.js';
import { OfficialCharacterActionCatalogService } from './charahome/officialCharacterActionCatalog.js';
import { CharahomeRuntimeBridge } from './charahome/runtimeBridge.js';
import { loadConfig, type CharachatApiConfig } from './config.js';
import { canUseFirebaseAdmin, getAdminFirestore } from './firebaseAdmin.js';
import { FirestoreChatThreadStore, FileChatThreadStore, type ChatThreadStore } from './chat/threadStore.js';
import { registerChatRoutes } from './routes/chatRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function directoryExists(targetPath: string) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

export interface BuildServerOptions {
  config?: CharachatApiConfig;
  authService?: RequestAuthService;
  chatThreadService?: ChatThreadService;
}

export async function buildServer(options: BuildServerOptions = {}) {
  const config = options.config ?? loadConfig();
  const app = Fastify({ logger: false });
  const authService = options.authService ?? new FirebaseRequestAuthService(config);
  const store: ChatThreadStore = canUseFirebaseAdmin(config)
    ? new FirestoreChatThreadStore(getAdminFirestore(config))
    : new FileChatThreadStore(`${config.dataDir.replace(/[\\/]$/, '')}/chat-store.json`);
  const chatThreadService = options.chatThreadService ?? new ChatThreadService(store, config);
  const officialActionCatalogService = new OfficialCharacterActionCatalogService(store);
  const runtimeBridge = new CharahomeRuntimeBridge(config, store);

  await registerChatRoutes(app, chatThreadService, authService, config, officialActionCatalogService);

  const webDistPath = path.resolve(__dirname, '../../web/dist');
  if (await directoryExists(webDistPath)) {
    await app.register(fastifyStatic, {
      root: webDistPath,
      prefix: '/',
      wildcard: false,
    });
  }

  app.addHook('onClose', async () => {
    runtimeBridge.stop();
  });

  app.addHook('onReady', async () => {
    runtimeBridge.start();
  });

  return app;
}
