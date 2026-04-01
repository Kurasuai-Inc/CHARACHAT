import { type ChatMessageInput, type ChatThreadInput } from '@charachat/domain';
import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify';
import { type RequestAuthService } from '../auth/requestAuth.js';
import { type ChatThreadService } from '../chat/threadService.js';
import { type OfficialCharacterActionCatalogService } from '../charahome/officialCharacterActionCatalog.js';
import { type CharachatApiConfig } from '../config.js';

function ensureString(value: unknown, fieldName: string) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${fieldName} is required.`);
  }
  return value.trim();
}

async function requireSession(
  authService: RequestAuthService,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const session = await authService.authenticate(request, reply);
  if (!session) {
    if (!reply.sent) {
      reply.code(reply.statusCode >= 400 ? reply.statusCode : 401);
      await reply.send({ ok: false, message: 'Unauthorized.' });
    }
    return null;
  }
  return session;
}

export async function registerChatRoutes(
  app: FastifyInstance,
  chatThreadService: ChatThreadService,
  authService: RequestAuthService,
  config: CharachatApiConfig,
  officialActionCatalogService: OfficialCharacterActionCatalogService,
) {
  function requireInternalApiKey(request: FastifyRequest, reply: FastifyReply) {
    const configured = config.charahomeInternalApiKey?.trim();
    if (!configured) {
      reply.code(503);
      return false;
    }
    const received = typeof request.headers['x-internal-api-key'] === 'string'
      ? request.headers['x-internal-api-key'].trim()
      : '';
    if (!received || received !== configured) {
      reply.code(401);
      return false;
    }
    return true;
  }

  app.get('/health', async () => ({ ok: true }));

  app.get('/internal/official-character-actions/catalog', async (request, reply) => {
    if (!requireInternalApiKey(request, reply)) {
      return { ok: false, message: 'Unauthorized.' };
    }
    try {
      const query = request.query as { characterId?: string; ownerCharahomeUid?: string };
      return {
        ok: true,
        actions: await officialActionCatalogService.listOfficialCharacterActions({
          characterId: ensureString(query.characterId, 'characterId'),
          ownerCharahomeUid: ensureString(query.ownerCharahomeUid, 'ownerCharahomeUid'),
        }),
      };
    } catch (error) {
      reply.code(400);
      return {
        ok: false,
        message: error instanceof Error ? error.message : 'Failed to load official CHARACHAT CharacterActions.',
      };
    }
  });

  app.get('/threads', async (request, reply) => {
    const session = await requireSession(authService, request, reply);
    if (!session) return;
    return { ok: true, threads: await chatThreadService.listThreads(session) };
  });

  app.post('/threads', async (request, reply) => {
    const session = await requireSession(authService, request, reply);
    if (!session) return;
    try {
      const body = (request.body ?? {}) as Partial<ChatThreadInput>;
      const thread = await chatThreadService.createThread({
        title: typeof body.title === 'string' ? body.title : undefined,
        defaultCharacterId: ensureString(body.defaultCharacterId, 'defaultCharacterId'),
      }, session);
      return { ok: true, thread };
    } catch (error) {
      reply.code(400);
      return { ok: false, message: error instanceof Error ? error.message : 'Invalid thread payload.' };
    }
  });

  app.get('/threads/:threadId/messages', async (request, reply) => {
    const session = await requireSession(authService, request, reply);
    if (!session) return;
    try {
      const params = request.params as { threadId: string };
      return { ok: true, result: await chatThreadService.getMessages(ensureString(params.threadId, 'threadId'), session) };
    } catch (error) {
      reply.code(400);
      return { ok: false, message: error instanceof Error ? error.message : 'Failed to load messages.' };
    }
  });

  app.post('/threads/:threadId/messages', async (request, reply) => {
    const session = await requireSession(authService, request, reply);
    if (!session) return;
    try {
      const params = request.params as { threadId: string };
      const body = (request.body ?? {}) as Partial<ChatMessageInput>;
      const result = await chatThreadService.sendMessage(
        ensureString(params.threadId, 'threadId'),
        { text: ensureString(body.text, 'text') },
        session,
      );
      return { ok: true, result };
    } catch (error) {
      reply.code(400);
      return { ok: false, message: error instanceof Error ? error.message : 'Failed to send message.' };
    }
  });

  app.get('/desk/availability', async (request, reply) => {
    const session = await requireSession(authService, request, reply);
    if (!session) return;
    const query = request.query as { characterId?: string };
    return {
      ok: true,
      deskAvailability: await chatThreadService.getDeskAvailability(
        session,
        typeof query.characterId === 'string' ? query.characterId : undefined,
      ),
    };
  });
}
