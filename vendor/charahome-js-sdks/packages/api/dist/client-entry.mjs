import {
  generated_api_exports
} from "./chunk-GQJKLIT6.mjs";
import {
  AES_GCM_TAG_SIZE,
  CharahomeApiClient,
  ContentProtectionDecoder,
  DEFAULT_API_BASE_URL,
  DEFAULT_TEXT_CONVERTER_BASE_URL,
  ENVIRONMENTS,
  NoopCacheStore,
  PROTECTION_FORMAT_V1,
  buildCacheKey,
  createCharahomeApiClient,
  extractUidFromToken,
  getEnvironmentConfig,
  getFirebaseConfig,
  resolveEnvironment
} from "./chunk-PIPROP5W.mjs";
import {
  AssetCategory,
  CACHE_POLICIES,
  PersistenceTier
} from "./chunk-NXASMBQR.mjs";
import "./chunk-PA7OAL7A.mjs";
import {
  OpenAPI
} from "./chunk-HRAAT6ML.mjs";
import "./chunk-HE7KASUR.mjs";

// src/client-entry.ts
function normalizeGeneratedApiBaseUrl(baseUrl) {
  return baseUrl.replace(/\/+$/, "").replace(/\/api\/v1$/, "");
}
function configureGeneratedApi(config) {
  OpenAPI.BASE = normalizeGeneratedApiBaseUrl(config.baseUrl);
  if (config.token) {
    OpenAPI.TOKEN = config.token;
  }
  if (config.headers) {
    OpenAPI.HEADERS = config.headers;
  }
}
export {
  AES_GCM_TAG_SIZE,
  AssetCategory,
  CACHE_POLICIES,
  CharahomeApiClient,
  ContentProtectionDecoder,
  DEFAULT_API_BASE_URL,
  DEFAULT_TEXT_CONVERTER_BASE_URL,
  ENVIRONMENTS,
  generated_api_exports as GeneratedApi,
  NoopCacheStore,
  OpenAPI,
  PROTECTION_FORMAT_V1,
  PersistenceTier,
  buildCacheKey,
  configureGeneratedApi,
  createCharahomeApiClient,
  extractUidFromToken,
  getEnvironmentConfig,
  getFirebaseConfig,
  resolveEnvironment
};
