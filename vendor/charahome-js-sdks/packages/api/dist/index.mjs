import {
  generated_api_exports
} from "./chunk-GQJKLIT6.mjs";
import {
  AES_GCM_TAG_SIZE,
  AnimatedImageAssetApiMixin,
  AnimationClipAssetApiMixin,
  AssetBundleAssetApiMixin,
  AudioAssetApiMixin,
  AvatarApiMixin,
  AvatarModelApiMixin,
  BaseClient,
  CacheManager,
  CachingMixin,
  CharacterApiMixin,
  CharacterFileApiMixin,
  CharahomeApiClient,
  ContentProtectionDecoder,
  ConversationApiMixin,
  DEFAULT_API_BASE_URL,
  DEFAULT_TEXT_CONVERTER_BASE_URL,
  ENVIRONMENTS,
  EmotionFormatApiMixin,
  ImageAssetApiMixin,
  IndexedDBCacheStore,
  LlmApiMixin,
  NoopCacheStore,
  PROTECTION_FORMAT_V1,
  TtsApiMixin,
  VideoAssetApiMixin,
  VrmAssetApiMixin,
  VrmaAssetApiMixin,
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

// src/config.ts
var globalConfig = null;
var globalClient = null;
function initCharahomeApi(config) {
  globalConfig = config;
  globalClient = new CharahomeApiClient(config);
  return globalClient;
}
function getConfig() {
  if (globalConfig) {
    return globalConfig;
  }
  const env = resolveEnvironment();
  const envConfig = getEnvironmentConfig(env);
  const baseUrl = process.env.CHARAHOME_API_BASE_URL || envConfig.apiBaseUrl;
  const authToken = process.env.CHARAHOME_API_AUTH_TOKEN || process.env.NEXT_PUBLIC_AUTH_TOKEN || "";
  return {
    environment: env,
    baseUrl,
    authToken: authToken.startsWith("Bearer ") ? authToken : `Bearer ${authToken}`
  };
}
function getClient() {
  if (globalClient) {
    return globalClient;
  }
  const config = getConfig();
  globalClient = new CharahomeApiClient(config);
  return globalClient;
}

// src/handlers/conversation.ts
function getClientWithToken(request) {
  const userToken = request.headers.get("X-User-Token");
  if (userToken) {
    const config = getConfig();
    return new CharahomeApiClient({
      baseUrl: config.baseUrl,
      authToken: `Bearer ${userToken}`
    });
  }
  return getClient();
}
async function handleConversation(request, characterId) {
  const body = await request.json();
  console.log("[Conversation API] Request:", {
    characterId,
    body
  });
  try {
    const client = getClientWithToken(request);
    const response = await client.conversationStream(characterId, body);
    console.log("[Conversation API] Response status:", response.status);
    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": "application/x-ndjson",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    console.error("[Conversation API] Exception:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
async function handleConversationRaw(request, characterId) {
  const body = await request.json();
  console.log("[Conversation Raw API] Request:", {
    characterId,
    promptLength: body.prompt?.length,
    input_string: body.input_string,
    voice_id: body.voice_id,
    is_audio: body.is_audio,
    llm_provider: body.llm_provider,
    llm_model: body.llm_model
  });
  try {
    const client = getClientWithToken(request);
    const response = await client.conversationRawStream(characterId, body);
    console.log("[Conversation Raw API] Response status:", response.status);
    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": "application/x-ndjson",
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    console.error("[Conversation Raw API] Exception:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

// src/handlers/tts.ts
async function handleTTS(request) {
  const body = await request.json();
  const { text, speaker_name, language = "EN", return_lip_sync = true } = body;
  if (!text || !speaker_name) {
    return new Response(
      JSON.stringify({ error: "Missing required parameters: text, speaker_name" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  console.log("[TTS API] Request:", {
    text: text.substring(0, 50) + (text.length > 50 ? "..." : ""),
    speaker_name,
    language
  });
  try {
    const client = getClient();
    const result = await client.generateTTS({
      text,
      speaker_name,
      language,
      return_lip_sync
    });
    console.log("[TTS API] Response received");
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("[TTS API] Exception:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

// src/handlers/animations.ts
async function handleAnimationFile(request, animationId) {
  try {
    const client = getClient();
    const arrayBuffer = await client.downloadAnimationFile(animationId);
    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Length": arrayBuffer.byteLength.toString(),
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch (error) {
    console.error("[VRMA API] Error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return new Response(message, { status: 500 });
  }
}

// src/handlers/motions.ts
import { NextResponse } from "next/server";
async function handleMotions(request, characterId) {
  try {
    const client = getClient();
    const motions = await client.fetchCharacterMotions(characterId);
    return NextResponse.json({ motions });
  } catch (error) {
    console.error("Error fetching motions:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}

// src/marketplace-types.ts
var MarketplaceStatus = /* @__PURE__ */ ((MarketplaceStatus2) => {
  MarketplaceStatus2["Draft"] = "draft";
  MarketplaceStatus2["Listed"] = "listed";
  MarketplaceStatus2["Unlisted"] = "unlisted";
  MarketplaceStatus2["Suspended"] = "suspended";
  return MarketplaceStatus2;
})(MarketplaceStatus || {});
var ListingVisibility = /* @__PURE__ */ ((ListingVisibility2) => {
  ListingVisibility2["Public"] = "public";
  ListingVisibility2["BundleOnly"] = "bundle_only";
  return ListingVisibility2;
})(ListingVisibility || {});
var LicenseType = /* @__PURE__ */ ((LicenseType2) => {
  LicenseType2["Quantity"] = "quantity";
  LicenseType2["UsageRights"] = "usage_rights";
  return LicenseType2;
})(LicenseType || {});
var SellableAssetType = /* @__PURE__ */ ((SellableAssetType2) => {
  SellableAssetType2["Vrm"] = "vrm";
  SellableAssetType2["Vrma"] = "vrma";
  SellableAssetType2["Image"] = "image";
  SellableAssetType2["AnimatedImage"] = "animated_image";
  SellableAssetType2["Audio"] = "audio";
  SellableAssetType2["Glb"] = "glb";
  SellableAssetType2["AssetBundle"] = "asset_bundle";
  SellableAssetType2["AnimationClip"] = "animation_clip";
  SellableAssetType2["GaussianSplat"] = "gaussian_splat";
  SellableAssetType2["Video"] = "video";
  return SellableAssetType2;
})(SellableAssetType || {});
var ListingBundleType = /* @__PURE__ */ ((ListingBundleType2) => {
  ListingBundleType2["Avatar"] = "avatar";
  ListingBundleType2["Character"] = "character";
  ListingBundleType2["Story"] = "story";
  ListingBundleType2["ModifiedAvatar"] = "modified_avatar";
  return ListingBundleType2;
})(ListingBundleType || {});
var DerivativePolicy = /* @__PURE__ */ ((DerivativePolicy2) => {
  DerivativePolicy2["Strict"] = "strict";
  DerivativePolicy2["PersonalOnly"] = "personal_only";
  DerivativePolicy2["FreeDistribution"] = "free_distribution";
  DerivativePolicy2["Commercial"] = "commercial";
  return DerivativePolicy2;
})(DerivativePolicy || {});
var InstanceAccessType = /* @__PURE__ */ ((InstanceAccessType2) => {
  InstanceAccessType2["Trial"] = "trial";
  InstanceAccessType2["Full"] = "full";
  return InstanceAccessType2;
})(InstanceAccessType || {});
var AssetAccessLevel = /* @__PURE__ */ ((AssetAccessLevel2) => {
  AssetAccessLevel2["Full"] = "full";
  AssetAccessLevel2["Trial"] = "trial";
  AssetAccessLevel2["DerivativeOnly"] = "derivative_only";
  AssetAccessLevel2["None"] = "none";
  return AssetAccessLevel2;
})(AssetAccessLevel || {});
var OwnerType = /* @__PURE__ */ ((OwnerType2) => {
  OwnerType2["User"] = "user";
  OwnerType2["Character"] = "character";
  return OwnerType2;
})(OwnerType || {});
var SourceType = /* @__PURE__ */ ((SourceType2) => {
  SourceType2["Listing"] = "listing";
  SourceType2["Distribution"] = "distribution";
  return SourceType2;
})(SourceType || {});
var AccessType = /* @__PURE__ */ ((AccessType2) => {
  AccessType2["Trial"] = "trial";
  AccessType2["Full"] = "full";
  return AccessType2;
})(AccessType || {});
var DistributionStatus = /* @__PURE__ */ ((DistributionStatus2) => {
  DistributionStatus2["Active"] = "active";
  DistributionStatus2["Discontinued"] = "discontinued";
  return DistributionStatus2;
})(DistributionStatus || {});

// src/marketplace-client.ts
var MarketplaceClient = class {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl ?? "http://localhost:8080";
    this.token = options.token ?? null;
  }
  /** Set the authentication token */
  setAuthToken(token) {
    this.token = token;
  }
  /** Clear the authentication token */
  clearAuthToken() {
    this.token = null;
  }
  // === Browse ===
  async browse(params = {}) {
    const searchParams = new URLSearchParams();
    if (params.type) searchParams.set("type", params.type);
    if (params.asset_type) searchParams.set("asset_type", params.asset_type);
    if (params.tags) searchParams.set("tags", params.tags);
    if (params.sort) searchParams.set("sort", params.sort);
    if (params.q) searchParams.set("q", params.q);
    if (params.limit) searchParams.set("limit", String(params.limit));
    if (params.cursor) searchParams.set("cursor", params.cursor);
    return this.request("GET", `/api/v1/marketplace/browse?${searchParams}`);
  }
  // === ListingBundle ===
  async getListingBundle(id) {
    return this.request("GET", `/api/v1/marketplace/listing-bundles/${id}`);
  }
  // === Listing ===
  async getListing(id) {
    return this.request("GET", `/api/v1/marketplace/listings/${id}`);
  }
  // === AvatarTemplate ===
  async getAvatarTemplate(id) {
    return this.request("GET", `/api/v1/marketplace/avatar-templates/${id}`);
  }
  async getAvatarTemplateVersions(id) {
    return this.request("GET", `/api/v1/marketplace/avatar-templates/${id}/versions`);
  }
  async createDerivative(templateId) {
    return this.request("POST", `/api/v1/marketplace/avatar-templates/${templateId}/create-derivative`);
  }
  // === AvatarInstance ===
  async createAvatarInstance(templateId, versionId) {
    return this.request("POST", "/api/v1/avatar-instances", {
      avatar_template_id: templateId,
      pinned_version_id: versionId
    });
  }
  async getAvatarInstance(id) {
    return this.request("GET", `/api/v1/avatar-instances/${id}`);
  }
  async updateAvatarInstanceVersion(id) {
    return this.request("POST", `/api/v1/avatar-instances/${id}/update-version`);
  }
  async forkAvatarInstance(id) {
    return this.request("POST", `/api/v1/avatar-instances/${id}/fork`);
  }
  // === CharacterInstance ===
  async createCharacterInstance(templateId, versionId) {
    return this.request("POST", "/api/v1/character-instances", {
      character_template_id: templateId,
      pinned_version_id: versionId
    });
  }
  async upgradeCharacterInstance(id) {
    return this.request("PATCH", `/api/v1/character-instances/${id}`, {
      access_type: "full"
    });
  }
  // === Review ===
  async getReviews(targetId, limit = 20, cursor) {
    const params = new URLSearchParams({ target_id: targetId, limit: String(limit) });
    if (cursor) params.set("cursor", cursor);
    return this.request("GET", `/api/v1/marketplace/reviews?${params}`);
  }
  async createReview(targetType, targetId, rating, comment) {
    return this.request("POST", "/api/v1/marketplace/reviews", {
      target_type: targetType,
      target_id: targetId,
      rating,
      comment
    });
  }
  // === Favorite ===
  async getFavorites(limit = 20, cursor) {
    const params = new URLSearchParams({ limit: String(limit) });
    if (cursor) params.set("cursor", cursor);
    return this.request("GET", `/api/v1/marketplace/favorites?${params}`);
  }
  async addFavorite(targetType, targetId) {
    return this.request("POST", "/api/v1/marketplace/favorites", {
      target_type: targetType,
      target_id: targetId
    });
  }
  async removeFavorite(id) {
    await this.request("DELETE", `/api/v1/marketplace/favorites/${id}`);
  }
  // === Report ===
  async createReport(req) {
    await this.request("POST", "/api/v1/marketplace/reports", req);
  }
  // === Notification ===
  async getNotifications(limit = 20, cursor) {
    const params = new URLSearchParams({ limit: String(limit) });
    if (cursor) params.set("cursor", cursor);
    return this.request("GET", `/api/v1/notifications?${params}`);
  }
  async markNotificationRead(id) {
    await this.request("PATCH", `/api/v1/notifications/${id}/read`);
  }
  async markAllNotificationsRead() {
    await this.request("POST", "/api/v1/notifications/read-all");
  }
  // === Creator: Listing Management ===
  async getMyListings(limit = 50, cursor) {
    const params = new URLSearchParams({ limit: String(limit) });
    if (cursor) params.set("cursor", cursor);
    return this.request("GET", `/api/v1/marketplace/my-listings?${params}`);
  }
  async createListing(req) {
    return this.request("POST", "/api/v1/marketplace/listings", req);
  }
  async updateListing(id, req) {
    return this.request("PATCH", `/api/v1/marketplace/listings/${id}`, req);
  }
  async deleteListing(id) {
    await this.request("DELETE", `/api/v1/marketplace/listings/${id}`);
  }
  // === Creator: ListingBundle Management ===
  async createListingBundle(req) {
    return this.request("POST", "/api/v1/marketplace/listing-bundles", req);
  }
  async updateListingBundle(id, req) {
    return this.request("PATCH", `/api/v1/marketplace/listing-bundles/${id}`, req);
  }
  // === Purpose Upgrade Check ===
  async checkPurposeUpgrade(avatarId) {
    return this.request("POST", `/api/v1/avatars/${avatarId}/check-purpose-upgrade`);
  }
  // ── Internal ──
  async request(method, path, body) {
    const headers = { "Content-Type": "application/json" };
    if (this.token) headers["Authorization"] = `Bearer ${this.token}`;
    const response = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : void 0
    });
    if (!response.ok) {
      const errorBody = await response.json().catch(() => void 0);
      throw new MarketplaceApiError(
        `Marketplace API error: ${response.status}`,
        response.status,
        errorBody
      );
    }
    return response.json();
  }
};
var MarketplaceApiError = class extends Error {
  constructor(message, status, body) {
    super(message);
    this.status = status;
    this.body = body;
    this.name = "MarketplaceApiError";
  }
};

// src/access-helpers.ts
function canDownloadAsset(level) {
  return level === "full" /* Full */;
}
function canUseInCharacter(level) {
  return level === "full" /* Full */ || level === "trial" /* Trial */;
}
function canCreateDerivative(level) {
  return level === "full" /* Full */ || level === "derivative_only" /* DerivativeOnly */;
}
function isFullAccess(accessType) {
  return accessType === "full" /* Full */;
}
function isTrial(accessType) {
  return accessType === "trial" /* Trial */;
}

// src/index.ts
function configureGeneratedApi(config) {
  OpenAPI.BASE = config.baseUrl;
  if (config.token) {
    OpenAPI.TOKEN = config.token;
  }
  if (config.headers) {
    OpenAPI.HEADERS = config.headers;
  }
}
export {
  AES_GCM_TAG_SIZE,
  AccessType,
  AnimatedImageAssetApiMixin,
  AnimationClipAssetApiMixin,
  AssetAccessLevel,
  AssetBundleAssetApiMixin,
  AssetCategory,
  AudioAssetApiMixin,
  AvatarApiMixin,
  AvatarModelApiMixin,
  BaseClient,
  CACHE_POLICIES,
  CacheManager,
  CachingMixin,
  CharacterApiMixin,
  CharacterFileApiMixin,
  CharahomeApiClient,
  ContentProtectionDecoder,
  ConversationApiMixin,
  DEFAULT_API_BASE_URL,
  DEFAULT_TEXT_CONVERTER_BASE_URL,
  DerivativePolicy,
  DistributionStatus,
  ENVIRONMENTS,
  EmotionFormatApiMixin,
  generated_api_exports as GeneratedApi,
  ImageAssetApiMixin,
  IndexedDBCacheStore,
  InstanceAccessType,
  LicenseType,
  ListingBundleType,
  ListingVisibility,
  LlmApiMixin,
  MarketplaceApiError,
  MarketplaceClient,
  MarketplaceStatus,
  NoopCacheStore,
  OwnerType,
  PROTECTION_FORMAT_V1,
  PersistenceTier,
  SellableAssetType,
  SourceType,
  TtsApiMixin,
  VideoAssetApiMixin,
  VrmAssetApiMixin,
  VrmaAssetApiMixin,
  buildCacheKey,
  canCreateDerivative,
  canDownloadAsset,
  canUseInCharacter,
  configureGeneratedApi,
  createCharahomeApiClient,
  extractUidFromToken,
  getClient,
  getConfig,
  getEnvironmentConfig,
  getFirebaseConfig,
  handleAnimationFile,
  handleConversation,
  handleConversationRaw,
  handleMotions,
  handleTTS,
  initCharahomeApi,
  isFullAccess,
  isTrial,
  resolveEnvironment
};
