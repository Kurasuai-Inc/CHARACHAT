import { GeneratedApi, configureGeneratedApi } from '@kurasuai-inc/charahome-api/client';
import { type DecodedIdToken } from 'firebase-admin/auth';
import { type FastifyReply, type FastifyRequest } from 'fastify';
import { getAdminAuth } from '../firebaseAdmin.js';
import { type CharachatApiConfig } from '../config.js';

export interface AuthenticatedSession {
  derivedUid: string;
  charahomeUid: string;
  userPrincipalKey: string;
  managedCharacterIds: string[];
  managedPrincipalKeys: string[];
  derivedToken: string;
  charahomeToken: string;
  token: DecodedIdToken;
}

export interface RequestAuthService {
  authenticate(request: FastifyRequest, reply: FastifyReply): Promise<AuthenticatedSession | null>;
}

declare module 'fastify' {
  interface FastifyRequest {
    authSession: AuthenticatedSession | null;
  }
}

function getBearerToken(value: string | undefined) {
  if (!value?.startsWith('Bearer ')) return null;
  return value.slice('Bearer '.length).trim() || null;
}

function getHeaderValue(header: string | string[] | undefined) {
  return Array.isArray(header) ? header[0] : header;
}

function buildSessionCacheKey(derivedUid: string, charahomeToken: string) {
  return `${derivedUid}:${charahomeToken.slice(0, 24)}`;
}

interface CachedSession {
  session: AuthenticatedSession;
  expiresAt: number;
}

export class FirebaseRequestAuthService implements RequestAuthService {
  private readonly cache = new Map<string, CachedSession>();

  constructor(private readonly config: CharachatApiConfig) {}

  private async fetchManagedIdentity(charahomeToken: string) {
    const baseUrl = this.config.charahomeApiBaseUrl;
    if (!baseUrl) {
      throw new Error('CHARAHOME_API_BASE_URL is required for authenticated chat requests.');
    }

    configureGeneratedApi({
      baseUrl,
      token: charahomeToken,
    });

    const [linkResult, user, characters] = await Promise.all([
      GeneratedApi.AuthenticationService.checkLinkApiV1AuthCheckLinkGet({ appId: this.config.derivedAppId }),
      GeneratedApi.UsersService.getUserApiV1UsersGet(),
      GeneratedApi.CharactersService.listCharactersApiV1CharactersGet({
        filterByOwner: true,
        limit: 100,
      }),
    ]);

    return {
      linkResult,
      user,
      managedCharacterIds: (characters.items as Array<{ owner_id?: string; character_id: string }>)
        .filter((character) => character.owner_id === user.user_id)
        .map((character) => character.character_id),
    };
  }

  async authenticate(request: FastifyRequest, reply: FastifyReply) {
    const derivedToken = getBearerToken(getHeaderValue(request.headers.authorization));
    const charahomeToken = getHeaderValue(request.headers['x-charahome-auth-token']);

    if (!derivedToken || !charahomeToken) {
      reply.code(401);
      return null;
    }

    try {
      const decodedToken = await getAdminAuth(this.config).verifyIdToken(derivedToken);
      const cacheKey = buildSessionCacheKey(decodedToken.uid, charahomeToken);
      const cached = this.cache.get(cacheKey);
      if (cached && cached.expiresAt > Date.now()) {
        request.authSession = cached.session;
        return cached.session;
      }

      const identity = await this.fetchManagedIdentity(charahomeToken);
      const matchingLink = (identity.linkResult.links as Array<{ derivedUid?: string; appId?: string; disabled?: boolean }>).find((link) => (
        link.derivedUid === decodedToken.uid
        && link.appId === this.config.derivedAppId
        && !link.disabled
      ));

      if (!matchingLink) {
        reply.code(403);
        return null;
      }

      const userId = identity.user.user_id;
      const session: AuthenticatedSession = {
        derivedUid: decodedToken.uid,
        charahomeUid: userId,
        userPrincipalKey: `USER:${userId}`,
        managedCharacterIds: identity.managedCharacterIds,
        managedPrincipalKeys: [
          `USER:${userId}`,
          ...identity.managedCharacterIds.map((characterId: string) => `CHARACTER:${characterId}`),
        ],
        derivedToken,
        charahomeToken,
        token: decodedToken,
      };

      this.cache.set(cacheKey, {
        session,
        expiresAt: Date.now() + 60_000,
      });
      request.authSession = session;
      return session;
    } catch (error) {
      console.warn('Failed to authenticate CHARACHAT API request.', error);
      reply.code(401);
      return null;
    }
  }
}

