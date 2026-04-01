export interface CharachatApiConfig {
  port: number;
  host: string;
  dataDir: string;
  publicBaseUrl?: string;
  derivedAppId: string;
  charahomeEnvironment: 'staging' | 'production';
  charahomeApiBaseUrl?: string;
  charahomeAuthToken?: string;
  charahomeInternalApiKey?: string;
  firebaseProjectId?: string;
  firebaseClientEmail?: string;
  firebasePrivateKey?: string;
  charadeskRuntimeBaseUrl?: string;
  charadeskSiblingSharedSecret?: string;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): CharachatApiConfig {
  return {
    port: Number(env.PORT ?? 8794),
    host: env.HOST ?? '0.0.0.0',
    dataDir: env.CHARACHAT_DATA_DIR?.trim() || '.charachat-data',
    publicBaseUrl: env.PUBLIC_API_BASE_URL?.trim() || undefined,
    derivedAppId: env.CHARACHAT_APP_ID?.trim() || 'charachat_web',
    charahomeEnvironment: env.CHARAHOME_ENVIRONMENT === 'production' ? 'production' : 'staging',
    charahomeApiBaseUrl: env.CHARAHOME_API_BASE_URL?.trim() || undefined,
    charahomeAuthToken: env.CHARAHOME_AUTH_TOKEN?.trim() || undefined,
    charahomeInternalApiKey: env.CHARAHOME_INTERNAL_API_KEY?.trim() || undefined,
    firebaseProjectId: env.FIREBASE_PROJECT_ID?.trim() || undefined,
    firebaseClientEmail: env.FIREBASE_CLIENT_EMAIL?.trim() || undefined,
    firebasePrivateKey: env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') || undefined,
    charadeskRuntimeBaseUrl: env.CHARADESK_RUNTIME_BASE_URL?.trim() || undefined,
    charadeskSiblingSharedSecret: env.CHARADESK_SIBLING_SHARED_SECRET?.trim() || undefined,
  };
}
