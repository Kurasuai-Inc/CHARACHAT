"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AES_GCM_TAG_SIZE: () => AES_GCM_TAG_SIZE,
  AccessType: () => AccessType,
  AnimatedImageAssetApiMixin: () => AnimatedImageAssetApiMixin,
  AnimationClipAssetApiMixin: () => AnimationClipAssetApiMixin,
  AssetAccessLevel: () => AssetAccessLevel,
  AssetBundleAssetApiMixin: () => AssetBundleAssetApiMixin,
  AssetCategory: () => AssetCategory,
  AudioAssetApiMixin: () => AudioAssetApiMixin,
  AvatarApiMixin: () => AvatarApiMixin,
  AvatarModelApiMixin: () => AvatarModelApiMixin,
  BaseClient: () => BaseClient,
  CACHE_POLICIES: () => CACHE_POLICIES,
  CacheManager: () => CacheManager,
  CachingMixin: () => CachingMixin,
  CharacterApiMixin: () => CharacterApiMixin,
  CharacterFileApiMixin: () => CharacterFileApiMixin,
  CharahomeApiClient: () => CharahomeApiClient,
  ContentProtectionDecoder: () => ContentProtectionDecoder,
  ConversationApiMixin: () => ConversationApiMixin,
  DEFAULT_API_BASE_URL: () => DEFAULT_API_BASE_URL,
  DEFAULT_TEXT_CONVERTER_BASE_URL: () => DEFAULT_TEXT_CONVERTER_BASE_URL,
  DerivativePolicy: () => DerivativePolicy,
  DistributionStatus: () => DistributionStatus,
  ENVIRONMENTS: () => ENVIRONMENTS,
  EmotionFormatApiMixin: () => EmotionFormatApiMixin,
  GeneratedApi: () => generated_api_exports,
  ImageAssetApiMixin: () => ImageAssetApiMixin,
  IndexedDBCacheStore: () => IndexedDBCacheStore,
  InstanceAccessType: () => InstanceAccessType,
  LicenseType: () => LicenseType,
  ListingBundleType: () => ListingBundleType,
  ListingVisibility: () => ListingVisibility,
  LlmApiMixin: () => LlmApiMixin,
  MarketplaceApiError: () => MarketplaceApiError,
  MarketplaceClient: () => MarketplaceClient,
  MarketplaceStatus: () => MarketplaceStatus,
  NoopCacheStore: () => NoopCacheStore,
  OwnerType: () => OwnerType,
  PROTECTION_FORMAT_V1: () => PROTECTION_FORMAT_V1,
  PersistenceTier: () => PersistenceTier,
  SellableAssetType: () => SellableAssetType,
  SourceType: () => SourceType,
  TtsApiMixin: () => TtsApiMixin,
  VideoAssetApiMixin: () => VideoAssetApiMixin,
  VrmAssetApiMixin: () => VrmAssetApiMixin,
  VrmaAssetApiMixin: () => VrmaAssetApiMixin,
  buildCacheKey: () => buildCacheKey,
  canCreateDerivative: () => canCreateDerivative,
  canDownloadAsset: () => canDownloadAsset,
  canUseInCharacter: () => canUseInCharacter,
  configureGeneratedApi: () => configureGeneratedApi,
  createCharahomeApiClient: () => createCharahomeApiClient,
  extractUidFromToken: () => extractUidFromToken,
  getClient: () => getClient,
  getConfig: () => getConfig,
  getEnvironmentConfig: () => getEnvironmentConfig,
  getFirebaseConfig: () => getFirebaseConfig,
  handleAnimationFile: () => handleAnimationFile,
  handleConversation: () => handleConversation,
  handleConversationRaw: () => handleConversationRaw,
  handleMotions: () => handleMotions,
  handleTTS: () => handleTTS,
  initCharahomeApi: () => initCharahomeApi,
  isFullAccess: () => isFullAccess,
  isTrial: () => isTrial,
  resolveEnvironment: () => resolveEnvironment
});
module.exports = __toCommonJS(index_exports);

// src/environments.ts
var ENVIRONMENTS = {
  staging: {
    apiBaseUrl: "https://charahome-internal-api-stg-cl2uo5hxla-dt.a.run.app/api/v1",
    textConverterBaseUrl: "https://text-converter-service-stg-cl2uo5hxla-dt.a.run.app",
    firebaseProjectId: "kurasuai-charahome-stg",
    firebaseAuthDomain: "kurasuai-charahome-stg.firebaseapp.com",
    firebaseApiKey: "AIzaSyBL9BY_BfeG8TYxyDiK4SsupBVj_rNuD9o",
    firebaseStorageBucket: "kurasuai-charahome-stg.firebasestorage.app",
    firebaseMessagingSenderId: "500395486946",
    firebaseAppId: "1:500395486946:web:4ef3c6e7104c9b981cb8bb"
  },
  production: {
    apiBaseUrl: "https://charahome-internal-api-prod-gt3hgkbcjq-an.a.run.app/api/v1",
    textConverterBaseUrl: "https://text-converter-service-prod.asia-northeast1.run.app",
    firebaseProjectId: "kurasuai-charahome-prod",
    firebaseAuthDomain: "kurasuai-charahome-prod.firebaseapp.com",
    firebaseApiKey: "AIzaSyDyipfI9XyWM2CBBfFUS3-uEmbZT76kFrs",
    firebaseStorageBucket: "kurasuai-charahome-prod.firebasestorage.app",
    firebaseMessagingSenderId: "555418980711",
    firebaseAppId: "1:555418980711:web:e43873f28ff748b0625fc2"
  }
};
function resolveEnvironment(explicit) {
  const env = explicit || typeof process !== "undefined" && (process.env?.NEXT_PUBLIC_CHARAHOME_ENV || process.env?.CHARAHOME_ENV);
  const resolved = env === "production" || env === "staging" ? env : "staging";
  if (resolved === "production") {
    const nodeEnv = typeof process !== "undefined" ? process.env?.NODE_ENV : void 0;
    if (nodeEnv && nodeEnv !== "production") {
      console.warn(
        `[CHARAHOME SDK] \u26A0\uFE0F Production environment selected in non-production Node.js environment (NODE_ENV=${nodeEnv}). Make sure this is intentional.`
      );
    }
  }
  return resolved;
}
function getEnvironmentConfig(env) {
  const resolved = resolveEnvironment(env);
  return ENVIRONMENTS[resolved];
}
function getFirebaseConfig(env) {
  const config = getEnvironmentConfig(env);
  return {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId
  };
}

// src/client/base.ts
var BaseClient = class {
  constructor(config) {
    const envConfig = getEnvironmentConfig(resolveEnvironment(config.environment));
    this.baseUrl = config.baseUrl ?? envConfig.apiBaseUrl;
    this.textConverterBaseUrl = config.textConverterBaseUrl ?? envConfig.textConverterBaseUrl;
    this.authToken = config.authToken.startsWith("Bearer ") ? config.authToken : `Bearer ${config.authToken}`;
  }
  /**
   * Get headers for API requests
   * @internal
   */
  getHeaders(contentType) {
    const headers = {
      Authorization: this.authToken
    };
    if (contentType) {
      headers["Content-Type"] = contentType;
    }
    return headers;
  }
  /**
   * Get headers for user-authenticated requests
   * @internal
   */
  getUserHeaders(userToken, contentType) {
    const headers = {
      Authorization: `Bearer ${userToken}`
    };
    if (contentType) {
      headers["Content-Type"] = contentType;
    }
    return headers;
  }
  /**
   * Handle API error response
   * @internal
   */
  async handleErrorResponse(response, context) {
    const errorText = await response.text();
    console.error(`[CharahomeApiClient] ${context}:`, errorText);
    throw new Error(`${context}: ${response.status} - ${errorText}`);
  }
  /**
   * Submit FormData via POST with user authentication
   * @internal
   */
  async postFormData(path, formData, userToken) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${userToken}` },
      body: formData
    });
    if (!response.ok) {
      return this.handleErrorResponse(response, `POST ${path} failed`);
    }
    return response.json();
  }
  /**
   * Submit FormData via PATCH with user authentication
   * @internal
   */
  async patchFormData(path, formData, userToken) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${userToken}` },
      body: formData
    });
    if (!response.ok) {
      return this.handleErrorResponse(response, `PATCH ${path} failed`);
    }
    return response.json();
  }
};

// src/client/binary/_common.ts
function fileEntry(data, filename, mimeType) {
  const blob = data instanceof Blob ? data : new Blob([data], mimeType ? { type: mimeType } : void 0);
  return { __formDataFile: true, blob, filename };
}
function isFileEntry(value) {
  return typeof value === "object" && value !== null && value.__formDataFile === true;
}
function buildFormData(fields) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    if (value === void 0 || value === null) continue;
    if (isFileEntry(value)) {
      formData.append(key, value.blob, value.filename);
    } else if (value instanceof Blob) {
      formData.append(key, value);
    } else if (typeof value === "string") {
      formData.append(key, value);
    } else if (typeof value === "number" || typeof value === "boolean") {
      formData.append(key, String(value));
    } else {
      formData.append(key, JSON.stringify(value));
    }
  }
  return formData;
}

// src/client/binary/avatar.ts
var AvatarApiMixin = (Base) => {
  return class extends Base {
    /**
     * Get avatar icon signed URL
     * Aggregation: GET /avatars/{id} + GET /image-assets/{assetId}/file
     */
    async getAvatarIconUrl(avatarId, resolution = "medium", iconType = "square") {
      console.log("[CharahomeApiClient] getAvatarIconUrl:", avatarId, resolution, iconType);
      const avatarResponse = await fetch(`${this.baseUrl}/avatars/${avatarId}`, {
        headers: this.getHeaders(),
        cache: "no-store"
      });
      if (!avatarResponse.ok) {
        return this.handleErrorResponse(avatarResponse, "Failed to get avatar");
      }
      const avatar = await avatarResponse.json();
      const assetId = iconType === "square" ? avatar.icon_square_asset_id : avatar.icon_rectangle_asset_id;
      if (!assetId) {
        throw new Error(`Avatar ${avatarId} has no ${iconType} icon asset`);
      }
      const url = `${this.baseUrl}/image-assets/${assetId}/file?resolution=${resolution}`;
      const response = await fetch(url, {
        headers: this.getHeaders(),
        cache: "no-store"
      });
      if (!response.ok) {
        return this.handleErrorResponse(response, "Failed to get avatar icon URL");
      }
      const data = await response.json();
      return data.url;
    }
    /**
     * Upload avatar (VRM file) - Binary upload
     */
    async uploadAvatar(file, options, userToken) {
      console.log("[CharahomeApiClient] uploadAvatar:", options.avatarName);
      const formData = buildFormData({
        file: fileEntry(file, `${options.avatarName}.vrm`, "model/gltf-binary"),
        avatar_name: options.avatarName,
        model_type: options.modelType,
        description: options.description
      });
      return this.postFormData("/avatars", formData, userToken);
    }
    /**
     * Fetch avatar model file as ArrayBuffer - Router
     */
    async fetchAvatarModel(avatarId, modelType) {
      switch (modelType) {
        case "vrm":
          return this.downloadAvatarVrmFile(avatarId);
        case "sprite":
        case "face_icon":
        case "asset_bundle":
          throw new Error(`[CharahomeApiClient] Model type '${modelType}' is not yet supported`);
        default:
          throw new Error(`[CharahomeApiClient] Unknown model type: ${modelType}`);
      }
    }
    /**
     * Download VRM file for an avatar as ArrayBuffer
     * Aggregation: GET /avatars/{id}/vrm-model → downloadVrmFile(vrmAssetId)
     * Content protection is handled by VrmAssetApiMixin.downloadVrmFile().
     */
    async downloadAvatarVrmFile(avatarId) {
      console.log("[CharahomeApiClient] downloadAvatarVrmFile:", avatarId);
      const vrmModelResponse = await fetch(
        `${this.baseUrl}/avatars/${avatarId}/vrm-model`,
        { headers: this.getHeaders(), cache: "no-store" }
      );
      if (!vrmModelResponse.ok) {
        return this.handleErrorResponse(vrmModelResponse, "Failed to get VRM model");
      }
      const vrmModelData = await vrmModelResponse.json();
      const vrmAssetId = vrmModelData.vrm_asset_id;
      console.log("[CharahomeApiClient] downloadAvatarVrmFile: got vrmAssetId:", vrmAssetId);
      return this.downloadVrmFile(vrmAssetId);
    }
    /**
     * Create avatar with icon files - Binary upload
     * For avatar creation without files, use GeneratedApi.AvatarsService directly.
     */
    async createAvatarWithIcons(options, userToken, squareIcon, rectangleIcon) {
      console.log("[CharahomeApiClient] createAvatarWithIcons:", options.avatarName);
      const formData = buildFormData({
        avatar_name: options.avatarName,
        avatar_id: options.avatarId,
        publish_scope: options.publishScope,
        gender: options.gender,
        tags: options.tags,
        appearance_description: options.appearanceDescription,
        skip_llm_generation: options.skipLlmGeneration,
        square_icon_file: squareIcon ? fileEntry(squareIcon, "square_icon.png", "image/png") : void 0,
        rectangle_icon_file: rectangleIcon ? fileEntry(rectangleIcon, "rectangle_icon.png", "image/png") : void 0
      });
      return this.postFormData("/avatars", formData, userToken);
    }
    /**
     * Update avatar with icon files - Binary upload
     * For avatar update without files, use GeneratedApi.AvatarsService directly.
     */
    async updateAvatarWithIcons(avatarId, options, userToken, squareIcon, rectangleIcon) {
      console.log("[CharahomeApiClient] updateAvatarWithIcons:", avatarId);
      const formData = buildFormData({
        avatar_name: options.avatarName,
        publish_scope: options.publishScope,
        gender: options.gender,
        tags: options.tags,
        appearance_description: options.appearanceDescription,
        regenerate_with_llm: options.regenerateWithLlm,
        square_icon_file: squareIcon ? fileEntry(squareIcon, "square_icon.png", "image/png") : void 0,
        rectangle_icon_file: rectangleIcon ? fileEntry(rectangleIcon, "rectangle_icon.png", "image/png") : void 0
      });
      return this.patchFormData(`/avatars/${avatarId}`, formData, userToken);
    }
  };
};

// src/content-protection/types.ts
var PROTECTION_FORMAT_V1 = "charahome-protected-v1";
var AES_GCM_TAG_SIZE = 16;
var AES_GCM_NONCE_SIZE = 12;

// src/client/binary/vrm-asset.ts
var VrmAssetApiMixin = (Base) => {
  return class extends Base {
    constructor() {
      super(...arguments);
      /** @internal Content protection decoder (set by CharahomeApiClient) */
      this.contentProtection = null;
      /**
       * @internal Last protection metadata from a protected download.
       * Used by CachingMixin to build a decodeFn for L2 cache hits.
       */
      this.lastVrmProtectionMeta = null;
    }
    /**
     * Create VRM asset - Binary upload
     */
    async createVrmAsset(file, options, userToken) {
      console.log("[CharahomeApiClient] createVrmAsset:", options.modelName);
      const formData = buildFormData({
        file: fileEntry(file, options.modelName || "model.vrm", "model/gltf-binary"),
        model_name: options.modelName,
        author: options.author,
        license_url: options.licenseUrl,
        thumbnail_image_asset_id: options.thumbnailImageAssetId,
        thumbnail_image_asset_version_id: options.thumbnailImageAssetVersionId,
        publish_type: options.publishType,
        default_locale: options.defaultLocale,
        locales_json: options.locales,
        tags_json: options.tags,
        declaration_json: options.declaration,
        usage_restrictions_json: options.usageRestrictions
      });
      return this.postFormData("/vrm-assets", formData, userToken);
    }
    /**
     * Download VRM file as ArrayBuffer (decoded/ready-to-use).
     *
     * Tries the protected endpoint first (encrypted + compressed + obfuscated).
     * Falls back to the unprotected signed URL during migration period.
     */
    async downloadVrmFile(vrmId) {
      console.log("[CharahomeApiClient] downloadVrmFile:", vrmId);
      if (this.contentProtection) {
        try {
          const raw = await this.fetchProtectedVrmRaw(vrmId);
          return await this.decodeProtectedVrm(raw);
        } catch (err) {
          if (err instanceof Error && err.message.includes("404")) {
            console.log("[CharahomeApiClient] Protected endpoint not available, falling back to unprotected");
          } else {
            throw err;
          }
        }
      }
      this.lastVrmProtectionMeta = null;
      return this.downloadUnprotectedVrmFile(vrmId);
    }
    /**
     * Fetch raw protected VRM data (encrypted) without decoding.
     * Stores protection metadata in lastVrmProtectionMeta for cache decodeFn.
     * @internal
     */
    async fetchProtectedVrmRaw(vrmId) {
      console.log("[CharahomeApiClient] fetchProtectedVrmRaw:", vrmId);
      const metaResponse = await fetch(
        `${this.baseUrl}/vrm-assets/${vrmId}/protected-file`,
        { headers: this.getHeaders(), cache: "no-store" }
      );
      if (!metaResponse.ok) {
        return this.handleErrorResponse(metaResponse, "Failed to get protected VRM file URL");
      }
      const meta = await metaResponse.json();
      console.log(`[CharahomeApiClient] Protected VRM format: ${meta.format}, keyId: ${meta.key_id}`);
      this.lastVrmProtectionMeta = {
        keyId: meta.key_id,
        assetId: vrmId,
        obfuscationSeed: meta.obfuscation_seed,
        format: meta.format
      };
      const fileResponse = await fetch(meta.url, { cache: "no-store" });
      if (!fileResponse.ok) {
        throw new Error(`Failed to download protected VRM file: ${fileResponse.statusText}`);
      }
      const protectedData = await fileResponse.arrayBuffer();
      console.log(`[CharahomeApiClient] Protected VRM downloaded: ${protectedData.byteLength} bytes`);
      return protectedData;
    }
    /**
     * Decode protected VRM data using lastVrmProtectionMeta.
     * @internal
     */
    async decodeProtectedVrm(protectedData) {
      const meta = this.lastVrmProtectionMeta;
      if (!meta || !this.contentProtection) {
        return protectedData;
      }
      if (meta.format === PROTECTION_FORMAT_V1) {
        const buffer = await this.contentProtection.decode(
          protectedData,
          meta.keyId,
          meta.assetId,
          meta.obfuscationSeed
        );
        console.log("[CharahomeApiClient] VRM decoded, size:", buffer.byteLength);
        return buffer;
      }
      console.warn(`[CharahomeApiClient] Unknown protection format: ${meta.format}`);
      return protectedData;
    }
    /**
     * Download VRM file via unprotected signed URL (legacy).
     * @internal
     */
    async downloadUnprotectedVrmFile(vrmId) {
      const urlResponse = await fetch(
        `${this.baseUrl}/vrm-assets/${vrmId}/file`,
        { headers: this.getHeaders(), cache: "no-store" }
      );
      if (!urlResponse.ok) {
        return this.handleErrorResponse(urlResponse, "Failed to get VRM file URL");
      }
      const urlData = await urlResponse.json();
      console.log("[CharahomeApiClient] Got signed URL, length:", urlData.url.length);
      const fileResponse = await fetch(urlData.url, { cache: "no-store" });
      if (!fileResponse.ok) {
        throw new Error(`Failed to download VRM file: ${fileResponse.statusText}`);
      }
      const buffer = await fileResponse.arrayBuffer();
      console.log("[CharahomeApiClient] VRM download complete, size:", buffer.byteLength);
      return buffer;
    }
  };
};

// src/client/binary/vrma-asset.ts
var VrmaAssetApiMixin = (Base) => {
  return class extends Base {
    /**
     * Upload VRMA asset - Binary upload
     */
    async uploadVrmaAsset(file, options, userToken) {
      console.log("[CharahomeApiClient] uploadVrmaAsset:", options.motionId);
      const formData = buildFormData({
        file: fileEntry(file, "animation.vrma", "model/gltf-binary"),
        motion_id: options.motionId,
        motion_type: options.motionType,
        thumbnail_image_asset_id: options.thumbnailImageAssetId,
        thumbnail_image: options.thumbnailImage ? fileEntry(options.thumbnailImage, "thumbnail.png", "image/png") : void 0,
        emotion_id: options.emotionId,
        target_gender: options.targetGender,
        preview_animated_image_asset_id: options.previewAnimatedImageAssetId,
        preview_animated_image: options.previewAnimatedImage ? fileEntry(options.previewAnimatedImage, "preview.gif", "image/gif") : void 0,
        age_groups_json: options.ageGroups,
        default_fade_in: options.defaultFadeIn,
        default_fade_out: options.defaultFadeOut,
        default_playback_speed: options.defaultPlaybackSpeed,
        default_body_region: options.defaultBodyRegion,
        default_weight: options.defaultWeight,
        publish_scope: options.publishScope,
        data_source: options.dataSource,
        default_locale: options.defaultLocale,
        locales_json: options.locales,
        tags_json: options.tags,
        declaration_json: options.declaration,
        usage_restrictions_json: options.usageRestrictions,
        compatible_archetypes_json: options.compatibleArchetypes,
        compatible_behavioral_patterns_json: options.compatibleBehavioralPatterns,
        creation_method: options.creationMethod,
        creator_id: options.creatorId,
        creator_display_name: options.creatorDisplayName,
        usage_conditions_json: options.usageConditions,
        rights_declaration_json: options.rightsDeclaration
      });
      return this.postFormData("/vrma-assets", formData, userToken);
    }
    /**
     * Download VRMA animation file as ArrayBuffer
     * Aggregation: GET /vrma-assets/{id}/file + download from signed URL
     */
    async downloadAnimationFile(vrmaAssetId) {
      console.log("[CharahomeApiClient] Getting VRMA URL for:", vrmaAssetId);
      const urlResponse = await fetch(
        `${this.baseUrl}/vrma-assets/${vrmaAssetId}/file`,
        { headers: this.getHeaders(), cache: "no-store" }
      );
      if (!urlResponse.ok) {
        return this.handleErrorResponse(urlResponse, "Failed to get VRMA URL");
      }
      const urlData = await urlResponse.json();
      console.log("[CharahomeApiClient] Got signed URL, length:", urlData.url.length);
      const fileResponse = await fetch(urlData.url, { cache: "no-store" });
      if (!fileResponse.ok) {
        throw new Error(`Failed to download VRMA file: ${fileResponse.statusText}`);
      }
      const buffer = await fileResponse.arrayBuffer();
      console.log("[CharahomeApiClient] VRMA download complete, size:", buffer.byteLength);
      return buffer;
    }
  };
};

// src/client/binary/image-asset.ts
var ImageAssetApiMixin = (Base) => {
  return class extends Base {
    /**
     * Upload an image and create an ImageAsset - Binary upload
     */
    async uploadImageAsset(file, options, userToken) {
      console.log("[CharahomeApiClient] Uploading image asset, role:", options.role);
      const formData = buildFormData({
        file: fileEntry(file, "image.png", "image/png"),
        role: options.role,
        size_profile: options.sizeProfile,
        artist: options.artist,
        alt_text: options.altText,
        publish_type: options.publishType || "private",
        default_locale: options.defaultLocale,
        locales_json: options.locales,
        tags_json: options.tags,
        declaration_json: options.declaration,
        usage_restrictions_json: options.usageRestrictions
      });
      return this.postFormData("/image-assets", formData, userToken);
    }
    /**
     * Upload user icon and update user profile
     * Aggregation: POST /image-assets + PATCH /users
     */
    async uploadUserIcon(file, userToken) {
      const imageAsset = await this.uploadImageAsset(
        file,
        { role: "user_icon", sizeProfile: "square", publishType: "private" },
        userToken
      );
      const patchResponse = await fetch(`${this.baseUrl}/users`, {
        method: "PATCH",
        headers: this.getUserHeaders(userToken, "application/json"),
        body: JSON.stringify({ icon_image_asset_id: imageAsset.image_asset_id })
      });
      if (!patchResponse.ok) {
        return this.handleErrorResponse(patchResponse, "Failed to update user icon");
      }
      return patchResponse.json();
    }
    /**
     * Download image file as ArrayBuffer
     * Aggregation: GET /image-assets/{id}/file → SignedUrlResponse → fetch → ArrayBuffer
     */
    async downloadImageFile(imageId, resolution) {
      console.log("[CharahomeApiClient] downloadImageFile:", imageId, resolution);
      const url = resolution ? `${this.baseUrl}/image-assets/${imageId}/file?resolution=${resolution}` : `${this.baseUrl}/image-assets/${imageId}/file`;
      const response = await fetch(url, { headers: this.getHeaders(), cache: "no-store" });
      if (!response.ok) {
        return this.handleErrorResponse(response, "Failed to get image file URL");
      }
      const data = await response.json();
      const fileResponse = await fetch(data.url, { cache: "no-store" });
      if (!fileResponse.ok) {
        throw new Error(`Failed to download image file: ${fileResponse.statusText}`);
      }
      const buffer = await fileResponse.arrayBuffer();
      console.log("[CharahomeApiClient] Image download complete, size:", buffer.byteLength);
      return buffer;
    }
    /**
     * Add new version to existing image asset - Binary upload
     */
    async addImageAssetVersion(imageId, file, userToken) {
      console.log("[CharahomeApiClient] addImageAssetVersion:", imageId);
      const formData = buildFormData({
        file: fileEntry(file, "image.png", "image/png")
      });
      return this.postFormData(`/image-assets/${imageId}/versions`, formData, userToken);
    }
  };
};

// src/client/binary/audio-asset.ts
var AudioAssetApiMixin = (Base) => {
  return class extends Base {
    /**
     * Create audio asset - Binary upload
     */
    async createAudioAsset(file, options, userToken) {
      console.log("[CharahomeApiClient] createAudioAsset:", options.title);
      const formData = buildFormData({
        file: fileEntry(file, "audio"),
        audio_type: options.audioType,
        title: options.title,
        artist: options.artist,
        album: options.album,
        description: options.description,
        publish_type: options.publishType,
        thumbnail: options.thumbnail,
        duration: options.duration,
        sample_rate: options.sampleRate,
        bit_depth: options.bitDepth,
        channels: options.channels,
        bpm: options.bpm,
        loop_point: options.loopPoint,
        is_loopable: options.isLoopable,
        default_locale: options.defaultLocale,
        locales_json: options.locales,
        tags_json: options.tags,
        declaration_json: options.declaration,
        usage_restrictions_json: options.usageRestrictions
      });
      return this.postFormData("/audio-assets", formData, userToken);
    }
    /**
     * Add new version to existing audio asset - Binary upload
     */
    async addAudioAssetVersion(audioId, file, userToken, thumbnail) {
      console.log("[CharahomeApiClient] addAudioAssetVersion:", audioId);
      const formData = buildFormData({
        file: fileEntry(file, "audio"),
        thumbnail: thumbnail ? fileEntry(thumbnail, "thumbnail.png", "image/png") : void 0
      });
      return this.postFormData(`/audio-assets/${audioId}/versions`, formData, userToken);
    }
  };
};

// src/client/binary/video-asset.ts
var VideoAssetApiMixin = (Base) => {
  return class extends Base {
    /**
     * Create video asset - Binary upload
     */
    async createVideoAsset(file, options, authToken) {
      console.log("[CharahomeApiClient] createVideoAsset:", options.title);
      const formData = buildFormData({
        file: fileEntry(file, "video.mp4"),
        role: options.role,
        title: options.title,
        artist: options.artist,
        description: options.description,
        publish_type: options.publishType,
        default_locale: options.defaultLocale,
        locales_json: options.locales,
        tags_json: options.tags,
        declaration_json: options.declaration,
        usage_restrictions_json: options.usageRestrictions
      });
      return this.postFormData("/video-assets", formData, authToken);
    }
    /**
     * Add new version to existing video asset - Binary upload
     */
    async addVideoAssetVersion(videoId, file, userToken, thumbnail) {
      console.log("[CharahomeApiClient] addVideoAssetVersion:", videoId);
      const formData = buildFormData({
        file: fileEntry(file, "video.mp4"),
        thumbnail: thumbnail ? fileEntry(thumbnail, "thumbnail.png", "image/png") : void 0
      });
      return this.postFormData(`/video-assets/${videoId}/versions`, formData, userToken);
    }
  };
};

// src/client/binary/animated-image-asset.ts
var AnimatedImageAssetApiMixin = (Base) => {
  return class extends Base {
    /**
     * Create animated image asset - Binary upload
     */
    async createAnimatedImageAsset(file, options, userToken) {
      console.log("[CharahomeApiClient] createAnimatedImageAsset:", options.name || options.format);
      const formData = buildFormData({
        file: fileEntry(file, "animated_image"),
        format: options.format,
        size_profile: options.sizeProfile,
        width: options.width,
        height: options.height,
        frame_count: options.frameCount,
        duration: options.duration,
        loop_count: options.loopCount,
        artist: options.artist,
        name: options.name,
        description: options.description,
        role: options.role,
        publish_scope: options.publishScope,
        data_source: options.dataSource,
        default_locale: options.defaultLocale,
        locales_json: options.locales,
        tags_json: options.tags,
        declaration_json: options.declaration,
        usage_restrictions_json: options.usageRestrictions
      });
      return this.postFormData("/animated-image-assets", formData, userToken);
    }
    /**
     * Add version to animated image asset - Binary upload
     */
    async addAnimatedImageAssetVersion(assetId, file, options, userToken) {
      console.log("[CharahomeApiClient] addAnimatedImageAssetVersion:", assetId);
      const formData = buildFormData({
        file: fileEntry(file, "animated_image"),
        width: options.width,
        height: options.height,
        frame_count: options.frameCount,
        duration: options.duration,
        loop_count: options.loopCount
      });
      return this.postFormData(
        `/animated-image-assets/${assetId}/versions`,
        formData,
        userToken
      );
    }
    /**
     * Download animated image file as ArrayBuffer
     * Aggregation: GET /animated-image-assets/{id}/file + download from signed URL
     */
    async downloadAnimatedImageFile(assetId, quality) {
      console.log("[CharahomeApiClient] downloadAnimatedImageFile:", assetId, quality);
      let url = `${this.baseUrl}/animated-image-assets/${assetId}/file`;
      if (quality) {
        url += `?quality=${quality}`;
      }
      const urlResponse = await fetch(url, {
        headers: this.getHeaders(),
        cache: "no-store"
      });
      if (!urlResponse.ok) {
        return this.handleErrorResponse(urlResponse, "Failed to get animated image file URL");
      }
      const urlData = await urlResponse.json();
      console.log("[CharahomeApiClient] Got signed URL, length:", urlData.url.length);
      const fileResponse = await fetch(urlData.url, { cache: "no-store" });
      if (!fileResponse.ok) {
        throw new Error(`Failed to download animated image file: ${fileResponse.statusText}`);
      }
      const buffer = await fileResponse.arrayBuffer();
      console.log("[CharahomeApiClient] Animated image download complete, size:", buffer.byteLength);
      return buffer;
    }
  };
};

// src/client/binary/animation-clip-asset.ts
var AnimationClipAssetApiMixin = (Base) => {
  return class extends Base {
    /**
     * Create animation clip asset - Binary upload
     */
    async createAnimationClipAsset(file, options, userToken) {
      console.log("[CharahomeApiClient] createAnimationClipAsset:", options.motionId, options.motionType);
      const formData = buildFormData({
        file: fileEntry(file, "animation_clip"),
        motion_id: options.motionId,
        motion_type: options.motionType,
        emotion_id: options.emotionId,
        target_gender: options.targetGender,
        age_groups_json: options.ageGroups,
        default_fade_in: options.defaultFadeIn,
        default_fade_out: options.defaultFadeOut,
        default_playback_speed: options.defaultPlaybackSpeed,
        default_weight: options.defaultWeight,
        thumbnail_image_asset_id: options.thumbnailImageAssetId,
        preview_animated_image_asset_id: options.previewAnimatedImageAssetId,
        default_bone_mask: options.boneMask,
        publish_scope: options.publishScope,
        data_source: options.dataSource,
        frame_count: options.frameCount,
        duration_seconds: options.durationSeconds,
        fps: options.fps,
        is_loopable: options.isLoopable,
        has_root_motion: options.hasRootMotion,
        default_locale: options.defaultLocale,
        locales_json: options.locales,
        tags_json: options.tags,
        declaration_json: options.declaration,
        usage_restrictions_json: options.usageRestrictions,
        usage_conditions_json: options.usageConditions,
        rights_declaration_json: options.rightsDeclaration,
        creation_method: options.creationMethod,
        creator_id: options.creatorId,
        creator_display_name: options.creatorDisplayName
      });
      return this.postFormData("/animation-clip-assets", formData, userToken);
    }
    /**
     * Download animation clip file as ArrayBuffer
     * Aggregation: GET /animation-clip-assets/{id}/file + download from signed URL
     */
    async downloadAnimationClipFile(clipId) {
      console.log("[CharahomeApiClient] downloadAnimationClipFile:", clipId);
      const urlResponse = await fetch(
        `${this.baseUrl}/animation-clip-assets/${clipId}/file`,
        { headers: this.getHeaders(), cache: "no-store" }
      );
      if (!urlResponse.ok) {
        return this.handleErrorResponse(urlResponse, "Failed to get animation clip file URL");
      }
      const urlData = await urlResponse.json();
      console.log("[CharahomeApiClient] Got signed URL, length:", urlData.url.length);
      const fileResponse = await fetch(urlData.url, { cache: "no-store" });
      if (!fileResponse.ok) {
        throw new Error(`Failed to download animation clip file: ${fileResponse.statusText}`);
      }
      const buffer = await fileResponse.arrayBuffer();
      console.log("[CharahomeApiClient] Animation clip download complete, size:", buffer.byteLength);
      return buffer;
    }
  };
};

// src/client/binary/asset-bundle-asset.ts
var AssetBundleAssetApiMixin = (Base) => {
  return class extends Base {
    /**
     * Create asset bundle asset - Binary upload
     */
    async createAssetBundleAsset(file, options, userToken) {
      console.log("[CharahomeApiClient] createAssetBundleAsset:", options.platform, options.arch);
      const formData = buildFormData({
        file: fileEntry(file, "asset_bundle"),
        platform: options.platform,
        arch: options.arch,
        publish_scope: options.publishScope,
        data_source: options.dataSource,
        default_locale: options.defaultLocale,
        locales_json: options.locales,
        tags_json: options.tags,
        declaration_json: options.declaration,
        usage_restrictions_json: options.usageRestrictions
      });
      return this.postFormData("/asset-bundle-assets", formData, userToken);
    }
    /**
     * Add version to asset bundle asset - Binary upload
     */
    async addAssetBundleAssetVersion(assetBundleId, file, options, userToken) {
      console.log("[CharahomeApiClient] addAssetBundleAssetVersion:", assetBundleId);
      const formData = buildFormData({
        file: fileEntry(file, "asset_bundle"),
        platform: options.platform,
        arch: options.arch
      });
      return this.postFormData(
        `/asset-bundle-assets/${assetBundleId}/versions`,
        formData,
        userToken
      );
    }
    /**
     * Add variant to asset bundle asset version - Binary upload
     */
    async addAssetBundleVariant(assetBundleId, versionId, file, options, userToken) {
      console.log("[CharahomeApiClient] addAssetBundleVariant:", assetBundleId, versionId);
      const formData = buildFormData({
        file: fileEntry(file, "asset_bundle"),
        platform: options.platform,
        arch: options.arch
      });
      return this.postFormData(
        `/asset-bundle-assets/${assetBundleId}/versions/${versionId}/variants`,
        formData,
        userToken
      );
    }
    /**
     * Download asset bundle file as ArrayBuffer
     * Aggregation: GET /asset-bundle-assets/{id}/file?platform&arch + download from signed URL
     */
    async downloadAssetBundleFile(assetBundleId, platform, arch) {
      console.log("[CharahomeApiClient] downloadAssetBundleFile:", assetBundleId, platform, arch);
      const urlResponse = await fetch(
        `${this.baseUrl}/asset-bundle-assets/${assetBundleId}/file?platform=${platform}&arch=${arch}`,
        { headers: this.getHeaders(), cache: "no-store" }
      );
      if (!urlResponse.ok) {
        return this.handleErrorResponse(urlResponse, "Failed to get asset bundle file URL");
      }
      const urlData = await urlResponse.json();
      console.log("[CharahomeApiClient] Got signed URL, length:", urlData.url.length);
      const fileResponse = await fetch(urlData.url, { cache: "no-store" });
      if (!fileResponse.ok) {
        throw new Error(`Failed to download asset bundle file: ${fileResponse.statusText}`);
      }
      const buffer = await fileResponse.arrayBuffer();
      console.log("[CharahomeApiClient] Asset bundle download complete, size:", buffer.byteLength);
      return buffer;
    }
  };
};

// src/client/binary/avatar-model.ts
var AvatarModelApiMixin = (Base) => {
  return class extends Base {
    /**
     * Upload VRM model for an avatar - Binary upload
     */
    async uploadAvatarVrmModel(avatarId, file, options, userToken) {
      console.log("[CharahomeApiClient] uploadAvatarVrmModel:", avatarId);
      const formData = buildFormData({
        file: fileEntry(file, "model.vrm", "model/gltf-binary"),
        modeler_name: options.modelerName,
        character_designer_name: options.characterDesignerName,
        model_name: options.modelName,
        author: options.author
      });
      return this.postFormData(
        `/avatars/${avatarId}/vrm-model/file-upload`,
        formData,
        userToken
      );
    }
    /**
     * Upload sprite model for an avatar - Binary upload (multi-file)
     */
    async uploadAvatarSpriteModel(avatarId, files, options, userToken) {
      console.log("[CharahomeApiClient] uploadAvatarSpriteModel:", avatarId);
      const formData = buildFormData({
        base_image: fileEntry(files.baseImage, "base_image.png", "image/png"),
        eyelid_image: files.eyelidImage ? fileEntry(files.eyelidImage, "eyelid_image.png", "image/png") : void 0,
        eyeball_image: files.eyeballImage ? fileEntry(files.eyeballImage, "eyeball_image.png", "image/png") : void 0,
        mouth_image: files.mouthImage ? fileEntry(files.mouthImage, "mouth_image.png", "image/png") : void 0,
        posture: options.posture,
        face_position_json: options.facePositionJson,
        illustrator_name: options.illustratorName,
        character_designer_name: options.characterDesignerName
      });
      return this.postFormData(
        `/avatars/${avatarId}/sprite-model/file-upload`,
        formData,
        userToken
      );
    }
    /**
     * Upload face icon model for an avatar - Binary upload (multi-file)
     */
    async uploadAvatarFaceIconModel(avatarId, files, options, userToken) {
      console.log("[CharahomeApiClient] uploadAvatarFaceIconModel:", avatarId);
      const formData = buildFormData({
        base_image: fileEntry(files.baseImage, "base_image.png", "image/png"),
        eyelid_image: files.eyelidImage ? fileEntry(files.eyelidImage, "eyelid_image.png", "image/png") : void 0,
        eyeball_image: files.eyeballImage ? fileEntry(files.eyeballImage, "eyeball_image.png", "image/png") : void 0,
        mouth_image: files.mouthImage ? fileEntry(files.mouthImage, "mouth_image.png", "image/png") : void 0,
        illustrator_name: options.illustratorName,
        character_designer_name: options.characterDesignerName
      });
      return this.postFormData(
        `/avatars/${avatarId}/face-icon-model/file-upload`,
        formData,
        userToken
      );
    }
    /**
     * Upload asset bundle model for an avatar - Binary upload
     */
    async uploadAvatarAssetBundleModel(avatarId, file, options, userToken) {
      console.log("[CharahomeApiClient] uploadAvatarAssetBundleModel:", avatarId, options.platform, options.arch);
      const formData = buildFormData({
        file: file ? fileEntry(file, "asset_bundle") : void 0,
        platform: options.platform,
        arch: options.arch,
        storage_path: options.storagePath,
        sha256: options.sha256,
        size_bytes: options.sizeBytes,
        modeler_name: options.modelerName,
        character_designer_name: options.characterDesignerName
      });
      return this.postFormData(
        `/avatars/${avatarId}/asset-bundle-model`,
        formData,
        userToken
      );
    }
  };
};

// src/client/binary/emotion-format.ts
var EmotionFormatApiMixin = (Base) => {
  return class extends Base {
    /**
     * Upload sprite emotion format images - Binary upload (multi-file)
     */
    async uploadSpriteEmotionFormat(avatarId, expressionId, files, options, userToken) {
      console.log("[CharahomeApiClient] uploadSpriteEmotionFormat:", avatarId, expressionId);
      const formData = buildFormData({
        posture: options.posture,
        image_composite: files.imageComposite ? fileEntry(files.imageComposite, "image_composite.png", "image/png") : void 0,
        image_body: files.imageBody ? fileEntry(files.imageBody, "image_body.png", "image/png") : void 0,
        image_eyelid: files.imageEyelid ? fileEntry(files.imageEyelid, "image_eyelid.png", "image/png") : void 0,
        image_mouth: files.imageMouth ? fileEntry(files.imageMouth, "image_mouth.png", "image/png") : void 0,
        hold_duration: options.holdDuration,
        block_mouth: options.blockMouth,
        block_blink: options.blockBlink
      });
      return this.postFormData(
        `/avatars/${avatarId}/expressions/${expressionId}/formats/sprite/file-upload`,
        formData,
        userToken
      );
    }
    /**
     * Upload face icon emotion format images - Binary upload (multi-file)
     */
    async uploadFaceIconEmotionFormat(avatarId, expressionId, files, options, userToken) {
      console.log("[CharahomeApiClient] uploadFaceIconEmotionFormat:", avatarId, expressionId);
      const formData = buildFormData({
        posture: options.posture,
        image_composite: files.imageComposite ? fileEntry(files.imageComposite, "image_composite.png", "image/png") : void 0,
        image_body: files.imageBody ? fileEntry(files.imageBody, "image_body.png", "image/png") : void 0,
        image_eyelid: files.imageEyelid ? fileEntry(files.imageEyelid, "image_eyelid.png", "image/png") : void 0,
        image_mouth: files.imageMouth ? fileEntry(files.imageMouth, "image_mouth.png", "image/png") : void 0,
        hold_duration: options.holdDuration,
        block_mouth: options.blockMouth,
        block_blink: options.blockBlink
      });
      return this.postFormData(
        `/avatars/${avatarId}/expressions/${expressionId}/formats/face-icon/file-upload`,
        formData,
        userToken
      );
    }
  };
};

// src/client/binary/character-file.ts
var CharacterFileApiMixin = (Base) => {
  return class extends Base {
    /**
     * Create character with icon files - Binary upload
     * For character creation without icon files, use GeneratedApi.CharactersService directly.
     */
    async createCharacterWithIcons(options, userToken, squareIcon, rectangleIcon) {
      console.log("[CharahomeApiClient] createCharacterWithIcons:", options.characterName);
      const formData = buildFormData({
        character_name: options.characterName,
        avatar_id: options.avatarId,
        voice_id: options.voiceId,
        settings_id: options.settingsId,
        character_id: options.characterId,
        publish_scope: options.publishScope,
        copy_avatar_data: options.copyAvatarData,
        skip_llm_generation: options.skipLlmGeneration,
        square_icon_file: squareIcon ? fileEntry(squareIcon, "square_icon.png", "image/png") : void 0,
        rectangle_icon_file: rectangleIcon ? fileEntry(rectangleIcon, "rectangle_icon.png", "image/png") : void 0
      });
      return this.postFormData("/characters", formData, userToken);
    }
    /**
     * Update character with icon files - Binary upload
     * For character update without icon files, use GeneratedApi.CharactersService directly.
     */
    async updateCharacterWithIcons(characterId, options, userToken, squareIcon, rectangleIcon) {
      console.log("[CharahomeApiClient] updateCharacterWithIcons:", characterId);
      const formData = buildFormData({
        character_name: options.characterName,
        voice_id: options.voiceId,
        avatar_id: options.avatarId,
        settings_id: options.settingsId,
        description: options.description,
        gender: options.gender,
        publish_scope: options.publishScope,
        tags: options.tags,
        use_llm_generation: options.useLlmGeneration,
        main_color: options.mainColor,
        sub_color: options.subColor,
        square_icon_file: squareIcon ? fileEntry(squareIcon, "square_icon.png", "image/png") : void 0,
        rectangle_icon_file: rectangleIcon ? fileEntry(rectangleIcon, "rectangle_icon.png", "image/png") : void 0
      });
      return this.patchFormData(`/characters/${characterId}`, formData, userToken);
    }
  };
};

// src/client/streaming/conversation.ts
var ConversationApiMixin = (Base) => {
  return class extends Base {
    /**
     * Call Conversation API and return Response (for streaming)
     * Can be used directly with Next.js API routes
     * @param characterId - Character ID
     * @param request - Conversation request
     */
    async conversationStream(characterId, request2) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request2)
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error("[CharahomeApiClient] Conversation error:", {
          status: response.status,
          body: errorText
        });
        throw new Error(`Conversation API error: ${response.status} - ${errorText}`);
      }
      return response;
    }
    /**
     * Call Conversation API and return AsyncGenerator
     * For Electron Main process or Node.js environments
     * @param characterId - Character ID
     * @param request - Conversation request
     */
    async *streamConversation(characterId, request2) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request2)
        }
      );
      if (!response.ok) {
        return this.handleErrorResponse(response, "Failed to start conversation");
      }
      const stream = response.body;
      if (!stream) {
        throw new Error("Response body is not readable");
      }
      let buffer = "";
      const reader = "getReader" in stream ? stream.getReader() : null;
      if (reader) {
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const chunk = JSON.parse(line);
              yield chunk;
            } catch (e) {
              console.error("[CharahomeApiClient] Failed to parse chunk:", e);
            }
          }
        }
      } else {
        for await (const chunk of stream) {
          buffer += String(chunk);
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const parsedChunk = JSON.parse(line);
              yield parsedChunk;
            } catch (e) {
              console.error("[CharahomeApiClient] Failed to parse chunk:", e);
            }
          }
        }
      }
    }
    /**
     * Call Conversation Raw API and return Response (for streaming)
     * Client fully controls the prompt - server passes it directly to LLM
     * @param characterId - Character ID
     * @param request - Raw prompt request
     */
    async conversationRawStream(characterId, request2) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation/raw`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request2)
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error("[CharahomeApiClient] Conversation raw error:", {
          status: response.status,
          body: errorText
        });
        throw new Error(`Conversation Raw API error: ${response.status} - ${errorText}`);
      }
      return response;
    }
    /**
     * Call Conversation Raw API and return AsyncGenerator
     * For Electron Main process or Node.js environments
     * @param characterId - Character ID
     * @param request - Raw prompt request
     */
    async *streamConversationRaw(characterId, request2) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation/raw`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request2)
        }
      );
      if (!response.ok) {
        return this.handleErrorResponse(response, "Failed to start conversation raw");
      }
      const stream = response.body;
      if (!stream) {
        throw new Error("Response body is not readable");
      }
      let buffer = "";
      const reader = "getReader" in stream ? stream.getReader() : null;
      if (reader) {
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const chunk = JSON.parse(line);
              yield chunk;
            } catch (e) {
              console.error("[CharahomeApiClient] Failed to parse chunk:", e);
            }
          }
        }
      } else {
        for await (const chunk of stream) {
          buffer += String(chunk);
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const parsedChunk = JSON.parse(line);
              yield parsedChunk;
            } catch (e) {
              console.error("[CharahomeApiClient] Failed to parse chunk:", e);
            }
          }
        }
      }
    }
    /**
     * Call Conversation Debug API and return Response (for streaming)
     * All context provided by client - minimal DB access on server
     * @param characterId - Character ID
     * @param request - Debug request with full context
     */
    async conversationDebugStream(characterId, request2) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation/debug`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request2)
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error("[CharahomeApiClient] Conversation debug error:", {
          status: response.status,
          body: errorText
        });
        throw new Error(`Conversation Debug API error: ${response.status} - ${errorText}`);
      }
      return response;
    }
    /**
     * Call Conversation Debug API and return AsyncGenerator
     * For Electron Main process or Node.js environments
     * @param characterId - Character ID
     * @param request - Debug request with full context
     */
    async *streamConversationDebug(characterId, request2) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation/debug`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request2)
        }
      );
      if (!response.ok) {
        return this.handleErrorResponse(response, "Failed to start conversation debug");
      }
      const stream = response.body;
      if (!stream) {
        throw new Error("Response body is not readable");
      }
      let buffer = "";
      const reader = "getReader" in stream ? stream.getReader() : null;
      if (reader) {
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const chunk = JSON.parse(line);
              yield chunk;
            } catch (e) {
              console.error("[CharahomeApiClient] Failed to parse chunk:", e);
            }
          }
        }
      } else {
        for await (const chunk of stream) {
          buffer += String(chunk);
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const parsedChunk = JSON.parse(line);
              yield parsedChunk;
            } catch (e) {
              console.error("[CharahomeApiClient] Failed to parse chunk:", e);
            }
          }
        }
      }
    }
  };
};

// src/client/streaming/tts.ts
var TtsApiMixin = (Base) => {
  return class extends Base {
    /**
     * Generate TTS audio
     * API returns raw WAV binary, converted to base64 for IPC transport
     * @param request - TTS request
     */
    async generateTTS(request2) {
      const response = await fetch(`${this.baseUrl}/tts/generate`, {
        method: "POST",
        headers: this.getHeaders("application/json"),
        body: JSON.stringify({
          text: request2.text,
          speaker_name: request2.speaker_name,
          language: request2.language || "JA",
          return_lip_sync: request2.return_lip_sync ?? false
        })
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("[CharahomeApiClient] TTS error:", {
          status: response.status,
          body: errorText
        });
        throw new Error(`TTS API error: ${response.status} - ${errorText}`);
      }
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await response.json();
        return {
          audio: data.audio_base64 || data.audio,
          lip_sync_frames: data.lip_sync_frames || void 0
        };
      } else {
        const arrayBuffer = await response.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        let base642;
        if (typeof Buffer !== "undefined") {
          base642 = Buffer.from(uint8Array).toString("base64");
        } else {
          const binary = String.fromCharCode(...uint8Array);
          base642 = btoa(binary);
        }
        console.log("[CharahomeApiClient] TTS generated, audio size:", arrayBuffer.byteLength);
        return {
          audio: base642,
          lip_sync_frames: void 0
        };
      }
    }
  };
};

// src/client/streaming/llm.ts
var LlmApiMixin = (Base) => {
  return class extends Base {
    /**
     * Stream LLM chat completions via SSE
     * @param request - Chat completion request (OpenAI-compatible format)
     * @param onChunk - Callback for each response chunk
     */
    llmChatStream(request2, onChunk) {
      const abortController = new AbortController();
      let isDone = false;
      const done = (async () => {
        try {
          const response = await fetch(`${this.baseUrl}/llm/chat/completions`, {
            method: "POST",
            headers: this.getHeaders("application/json"),
            body: JSON.stringify({
              ...request2,
              stream: true
            }),
            signal: abortController.signal
          });
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`LLM chat request failed: ${response.status} - ${errorText}`);
          }
          if (!response.body) {
            throw new Error("Response body is null");
          }
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let buffer = "";
          while (!isDone) {
            const { done: readerDone, value } = await reader.read();
            if (readerDone) {
              isDone = true;
              onChunk({ is_final: true });
              break;
            }
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() ?? "";
            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith("data: ")) continue;
              const data = trimmed.slice(6);
              if (data === "[DONE]") {
                isDone = true;
                onChunk({ is_final: true });
                break;
              }
              try {
                const parsed = JSON.parse(data);
                const delta = parsed.choices?.[0]?.delta;
                const chunk = {
                  id: parsed.id,
                  object: parsed.object,
                  created: parsed.created,
                  model: parsed.model,
                  provider: parsed.provider,
                  text: delta?.content ?? void 0,
                  delta,
                  is_final: false
                };
                onChunk(chunk);
              } catch {
              }
            }
          }
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("[LlmApiMixin] Stream aborted");
          } else {
            console.error("[LlmApiMixin] Stream error:", error);
            throw error;
          }
        } finally {
          isDone = true;
        }
      })();
      return {
        cancel: () => {
          isDone = true;
          abortController.abort();
        },
        done
      };
    }
  };
};

// src/cache/types.ts
var AssetCategory = /* @__PURE__ */ ((AssetCategory3) => {
  AssetCategory3["Image"] = "image";
  AssetCategory3["Vrma"] = "vrma";
  AssetCategory3["AnimationClip"] = "animation_clip";
  AssetCategory3["Audio"] = "audio";
  AssetCategory3["Vrm"] = "vrm";
  AssetCategory3["AssetBundle"] = "asset_bundle";
  AssetCategory3["Video"] = "video";
  AssetCategory3["AnimatedImage"] = "animated_image";
  return AssetCategory3;
})(AssetCategory || {});
var PersistenceTier = /* @__PURE__ */ ((PersistenceTier2) => {
  PersistenceTier2["MemoryOnly"] = "memory_only";
  PersistenceTier2["Persistent"] = "persistent";
  return PersistenceTier2;
})(PersistenceTier || {});

// src/cache/cache-key.ts
function buildCacheKey(params) {
  const { category, assetId, variant } = params;
  if (variant) {
    return `${category}:${assetId}:${variant}`;
  }
  return `${category}:${assetId}`;
}

// src/client/standard/character.ts
var CharacterApiMixin = (Base) => {
  return class extends Base {
    /**
     * Duplicate character and register to user
     * Aggregation: POST /characters/{id}/duplicate + GET /users + PATCH /users
     */
    async duplicateAndRegisterCharacter(characterId, userToken, options = {}) {
      const {
        newCharacterId,
        addToCharacterIds = true,
        setAsFavorite = false
      } = options;
      const dupUrl = newCharacterId ? `${this.baseUrl}/characters/${characterId}/duplicate?new_character_id=${encodeURIComponent(newCharacterId)}` : `${this.baseUrl}/characters/${characterId}/duplicate`;
      const dupResponse = await fetch(dupUrl, {
        method: "POST",
        headers: this.getUserHeaders(userToken)
      });
      if (!dupResponse.ok) {
        return this.handleErrorResponse(dupResponse, "Failed to duplicate character");
      }
      const dupResult = await dupResponse.json();
      const newId = dupResult.new_character_id;
      if (addToCharacterIds || setAsFavorite) {
        const userResponse = await fetch(`${this.baseUrl}/users`, {
          headers: this.getUserHeaders(userToken)
        });
        if (!userResponse.ok) {
          return this.handleErrorResponse(userResponse, "Failed to get user");
        }
        const userData = await userResponse.json();
        const updateRequest = {};
        if (addToCharacterIds) {
          const currentIds = userData.character_ids || [];
          if (!currentIds.includes(newId)) {
            updateRequest.character_ids = [...currentIds, newId];
          }
        }
        if (setAsFavorite) {
          updateRequest.favorite_character_id = newId;
        }
        if (Object.keys(updateRequest).length > 0) {
          const patchResponse = await fetch(`${this.baseUrl}/users`, {
            method: "PATCH",
            headers: this.getUserHeaders(userToken, "application/json"),
            body: JSON.stringify(updateRequest)
          });
          if (!patchResponse.ok) {
            return this.handleErrorResponse(patchResponse, "Failed to update user");
          }
        }
      }
      return newId;
    }
    /**
     * Fetch character motions (convenience: resolves character → avatar_id internally)
     * Aggregation: GET /characters/{id} + GET /avatars/{avatarId}/motions
     */
    async fetchCharacterMotions(characterId) {
      const charResponse = await fetch(
        `${this.baseUrl}/characters/${characterId}`,
        { headers: this.getHeaders() }
      );
      if (!charResponse.ok) {
        return this.handleErrorResponse(charResponse, "Failed to fetch character for motions");
      }
      const character = await charResponse.json();
      const avatarId = character.avatar_id;
      if (!avatarId) {
        console.warn("[CharahomeApiClient] Character has no avatar_id, returning empty motions");
        return [];
      }
      const motionResponse = await fetch(
        `${this.baseUrl}/avatars/${avatarId}/motions`,
        { headers: this.getHeaders() }
      );
      if (!motionResponse.ok) {
        return this.handleErrorResponse(motionResponse, "Failed to fetch motions");
      }
      const data = await motionResponse.json();
      if (Array.isArray(data)) return data;
      return data.motions || data.items || [];
    }
    /**
     * Fetch character data in SDK format
     * Aggregation: GET /characters/{id} + GET /characters/{id}/emotions + GET /avatars/{avatarId}/motions
     */
    async fetchCharacterData(characterId, modelType = "vrm") {
      console.log("[CharahomeApiClient] Fetching character data for:", characterId);
      const charResponse = await fetch(
        `${this.baseUrl}/characters/${characterId}`,
        { headers: this.getHeaders() }
      );
      if (!charResponse.ok) {
        return this.handleErrorResponse(charResponse, "Failed to fetch character");
      }
      const character = await charResponse.json();
      const avatarId = character.avatar_id;
      const cacheManager = this.cacheManager;
      if (cacheManager && character.owner_id && character.owner_id === cacheManager.userId) {
        if (avatarId) {
          cacheManager.registerOwnership(
            buildCacheKey({ category: "vrm" /* Vrm */, assetId: `avatar:${avatarId}` })
          );
        }
      }
      const fetchJson = (url) => fetch(url, { headers: this.getHeaders() }).then(async (res) => res.ok ? res.json() : null).catch(() => null);
      const emotionsPromise = fetch(
        `${this.baseUrl}/characters/${characterId}/emotions`,
        { headers: this.getHeaders() }
      ).then(async (res) => {
        if (!res.ok) return [];
        const data = await res.json();
        return data.emotions || [];
      });
      const motionsPromise = avatarId ? fetch(
        `${this.baseUrl}/avatars/${avatarId}/motions`,
        { headers: this.getHeaders() }
      ).then(async (res) => {
        if (!res.ok) return [];
        const data = await res.json();
        if (Array.isArray(data)) return data;
        return data.motions || data.items || [];
      }) : Promise.resolve([]);
      const blinksPromise = avatarId ? fetchJson(`${this.baseUrl}/avatars/${avatarId}/blinks?include_formats=true`) : Promise.resolve(null);
      const lipsyncsPromise = avatarId ? fetchJson(`${this.baseUrl}/avatars/${avatarId}/lipsyncs?include_formats=true`) : Promise.resolve(null);
      const lookatsPromise = avatarId ? fetchJson(`${this.baseUrl}/avatars/${avatarId}/lookats?include_formats=true`) : Promise.resolve(null);
      const breathingsPromise = avatarId ? fetchJson(`${this.baseUrl}/avatars/${avatarId}/breathings?include_formats=true`) : Promise.resolve(null);
      const coreMotionsPromise = avatarId ? fetchJson(`${this.baseUrl}/avatars/${avatarId}/core-motions`) : Promise.resolve(null);
      const appearancePromise = avatarId ? fetchJson(`${this.baseUrl}/avatars/${avatarId}/appearance-variants`) : Promise.resolve(null);
      const [
        emotions,
        motions,
        blinksRes,
        lipsyncsRes,
        lookatsRes,
        breathingsRes,
        coreMotionsRes,
        appearanceRes
      ] = await Promise.all([
        emotionsPromise,
        motionsPromise,
        blinksPromise,
        lipsyncsPromise,
        lookatsPromise,
        breathingsPromise,
        coreMotionsPromise,
        appearancePromise
      ]);
      const sdkEmotions = emotions.map((emotion) => ({
        emotion_id: emotion.emotion_id,
        usage_description: emotion.name || emotion.emotion_id,
        interrupt_mode: "allow_all",
        allowed_emotion_ids: [],
        formats: emotion.formats?.map((f) => ({
          format_type: f.format_type,
          payload: f.payload
        })) || []
      }));
      const sdkMotions = motions.map((motion) => ({
        avatar_motion_id: motion.avatar_motion_id,
        motion_id: motion.motion_id,
        usage_description: motion.usage_description || motion.description || motion.motion_id,
        emotion_id: motion.emotion_id || "",
        number: motion.number ?? 0,
        motion_type: motion.motion_type,
        formats: motion.formats?.map((f) => ({
          format_type: f.format_type,
          payload: f.payload
        })) || [],
        playable_postures: motion.playable_postures ?? ["any"]
      }));
      let avatarControlRawData;
      if (avatarId) {
        const blink = blinksRes?.items?.[0] ?? void 0;
        const lipSync = lipsyncsRes?.items?.[0] ?? void 0;
        const lookAt = lookatsRes?.items?.[0] ?? void 0;
        const breathing = breathingsRes?.items?.[0] ?? void 0;
        const coreMotions = coreMotionsRes ?? void 0;
        const defaultAppearance = appearanceRes?.items?.[0] ?? void 0;
        if (blink || lipSync || lookAt || breathing || coreMotions || defaultAppearance) {
          avatarControlRawData = { avatarId, modelType, blink, lipSync, lookAt, breathing, coreMotions, defaultAppearance };
        }
      }
      const locales = character.locales;
      const jaLocale = locales?.["ja-JP"] || locales?.ja;
      const enLocale = locales?.["en-US"] || locales?.en;
      const characterName = jaLocale?.name || enLocale?.name || character.character_name;
      const characterData = {
        character_id: character.character_id,
        character_name: characterName,
        character_name_reading: void 0,
        avatar_id: character.avatar_id,
        description: character.description,
        voice_id: character.voice_id,
        settings_id: character.settings_id,
        icon_url: character.icon_url,
        icon_square_asset_id: character.icon_square_asset_id,
        icon_rectangle_asset_id: character.icon_rectangle_asset_id,
        model_type: modelType,
        emotions: sdkEmotions,
        motions: sdkMotions,
        avatarControlRawData,
        main_color: character.main_color,
        sub_color: character.sub_color
      };
      const controlLoaded = avatarControlRawData ? Object.entries(avatarControlRawData).filter(([k, v]) => k !== "avatarId" && k !== "modelType" && v).map(([k]) => k) : [];
      console.log("[CharahomeApiClient] CharacterData ready:", {
        characterId,
        emotionsCount: sdkEmotions.length,
        motionsCount: sdkMotions.length,
        avatarControl: controlLoaded
      });
      return characterData;
    }
  };
};

// src/client/standard/quota.ts
var QuotaApiMixin = (Base) => {
  return class extends Base {
    /**
     * Get current quota status for the authenticated user
     *
     * @param userToken - User authentication token
     * @returns Quota status
     */
    async getQuotaStatus(userToken) {
      const response = await fetch(`${this.baseUrl}/api/v1/quota/status`, {
        headers: this.getUserHeaders(userToken)
      });
      if (!response.ok) {
        return this.handleErrorResponse(response, "Failed to get quota status");
      }
      return response.json();
    }
    /**
     * Recover quota via ad verification, item usage, or daily bonus
     *
     * @param userToken - User authentication token
     * @param request - Recovery request details
     * @returns Recovery result with updated status
     */
    async recoverQuota(userToken, request2) {
      const response = await fetch(`${this.baseUrl}/api/v1/quota/recover`, {
        method: "POST",
        headers: this.getUserHeaders(userToken, "application/json"),
        body: JSON.stringify(request2)
      });
      if (!response.ok) {
        return this.handleErrorResponse(response, "Failed to recover quota");
      }
      return response.json();
    }
  };
};

// src/client/caching.ts
var CachingMixin = (Base) => {
  return class extends Base {
    constructor() {
      super(...arguments);
      /** @internal */
      this.cacheManager = null;
    }
    // ============ VRM ============
    /**
     * Download VRM file for an avatar (cached).
     * L2 stores encrypted data; decoding happens on L2 hit.
     */
    async downloadAvatarVrmFile(avatarId) {
      if (!this.cacheManager) return super.downloadAvatarVrmFile(avatarId);
      const key = buildCacheKey({ category: "vrm" /* Vrm */, assetId: `avatar:${avatarId}` });
      const owned = this.cacheManager.isOwned(key);
      if (this.contentProtection) {
        return this.cacheManager.getOrFetch(
          key,
          "vrm" /* Vrm */,
          null,
          owned,
          () => super.downloadAvatarVrmFile(avatarId)
        );
      }
      return this.cacheManager.getOrFetch(
        key,
        "vrm" /* Vrm */,
        null,
        owned,
        () => super.downloadAvatarVrmFile(avatarId)
      );
    }
    /**
     * Download VRM file by VRM asset ID (cached).
     * L2 stores encrypted data; decodeFn decrypts on L2 hit.
     */
    async downloadVrmFile(vrmId) {
      if (!this.cacheManager) return super.downloadVrmFile(vrmId);
      const key = buildCacheKey({ category: "vrm" /* Vrm */, assetId: vrmId });
      const owned = this.cacheManager.isOwned(key);
      if (this.contentProtection) {
        const decodeFn = async (encryptedData) => {
          try {
            const metaResponse = await fetch(
              `${this.baseUrl}/vrm-assets/${vrmId}/protected-file`,
              { headers: this.getHeaders(), cache: "no-store" }
            );
            if (metaResponse.ok) {
              const meta = await metaResponse.json();
              this.lastVrmProtectionMeta = {
                keyId: meta.key_id,
                assetId: vrmId,
                obfuscationSeed: meta.obfuscation_seed,
                format: meta.format
              };
            }
          } catch {
          }
          return super.decodeProtectedVrm(encryptedData);
        };
        return this.cacheManager.getOrFetch(
          key,
          "vrm" /* Vrm */,
          null,
          owned,
          async () => {
            try {
              const raw = await super.fetchProtectedVrmRaw(vrmId);
              return await super.decodeProtectedVrm(raw);
            } catch (err) {
              if (err instanceof Error && err.message.includes("404")) {
                return super.downloadVrmFile(vrmId);
              }
              throw err;
            }
          }
        );
      }
      return this.cacheManager.getOrFetch(
        key,
        "vrm" /* Vrm */,
        null,
        owned,
        () => super.downloadVrmFile(vrmId)
      );
    }
    /**
     * Fetch avatar model (cached - routes through downloadAvatarVrmFile which is already cached)
     */
    async fetchAvatarModel(avatarId, modelType) {
      return super.fetchAvatarModel(avatarId, modelType);
    }
    // ============ Image ============
    /**
     * Download image file (cached)
     */
    async downloadImageFile(imageId, resolution) {
      if (!this.cacheManager) return super.downloadImageFile(imageId, resolution);
      const key = buildCacheKey({ category: "image" /* Image */, assetId: imageId, variant: resolution });
      return this.cacheManager.getOrFetch(
        key,
        "image" /* Image */,
        null,
        false,
        () => super.downloadImageFile(imageId, resolution)
      );
    }
    // ============ VRMA ============
    /**
     * Download VRMA animation file (cached)
     */
    async downloadAnimationFile(vrmaAssetId) {
      if (!this.cacheManager) return super.downloadAnimationFile(vrmaAssetId);
      const key = buildCacheKey({ category: "vrma" /* Vrma */, assetId: vrmaAssetId });
      return this.cacheManager.getOrFetch(
        key,
        "vrma" /* Vrma */,
        null,
        false,
        () => super.downloadAnimationFile(vrmaAssetId)
      );
    }
    // ============ Animated Image ============
    /**
     * Download animated image file (cached)
     */
    async downloadAnimatedImageFile(assetId, quality) {
      if (!this.cacheManager) return super.downloadAnimatedImageFile(assetId, quality);
      const key = buildCacheKey({ category: "animated_image" /* AnimatedImage */, assetId, variant: quality });
      return this.cacheManager.getOrFetch(
        key,
        "animated_image" /* AnimatedImage */,
        null,
        false,
        () => super.downloadAnimatedImageFile(assetId, quality)
      );
    }
    // ============ Animation Clip ============
    /**
     * Download animation clip file (cached)
     */
    async downloadAnimationClipFile(clipId) {
      if (!this.cacheManager) return super.downloadAnimationClipFile(clipId);
      const key = buildCacheKey({ category: "animation_clip" /* AnimationClip */, assetId: clipId });
      return this.cacheManager.getOrFetch(
        key,
        "animation_clip" /* AnimationClip */,
        null,
        false,
        () => super.downloadAnimationClipFile(clipId)
      );
    }
    // ============ Asset Bundle ============
    /**
     * Download asset bundle file (cached)
     */
    async downloadAssetBundleFile(assetBundleId, platform, arch) {
      if (!this.cacheManager) return super.downloadAssetBundleFile(assetBundleId, platform, arch);
      const key = buildCacheKey({
        category: "asset_bundle" /* AssetBundle */,
        assetId: assetBundleId,
        variant: `${platform}_${arch}`
      });
      const owned = this.cacheManager.isOwned(key);
      return this.cacheManager.getOrFetch(
        key,
        "asset_bundle" /* AssetBundle */,
        null,
        owned,
        () => super.downloadAssetBundleFile(assetBundleId, platform, arch)
      );
    }
  };
};

// src/cache/memory-store.ts
var MemoryCacheStore = class {
  constructor(config) {
    this.entries = /* @__PURE__ */ new Map();
    this.currentSizeBytes = 0;
    this.maxSizeBytes = config.maxSizeBytes;
    this.ttlMs = config.ttlMs;
  }
  /**
   * Get an entry from memory. Returns null if expired or missing.
   * Returns a clone of the ArrayBuffer to prevent transfer issues.
   */
  get(key) {
    const entry = this.entries.get(key);
    if (!entry) return null;
    const now = Date.now();
    if (now - entry.meta.cachedAt > this.ttlMs) {
      this.delete(key);
      return null;
    }
    entry.meta.lastAccessedAt = now;
    this.entries.delete(key);
    this.entries.set(key, entry);
    return {
      meta: { ...entry.meta },
      data: entry.data.slice(0)
    };
  }
  /**
   * Check if an entry exists and is not expired (without updating access time).
   */
  has(key) {
    const entry = this.entries.get(key);
    if (!entry) return false;
    if (Date.now() - entry.meta.cachedAt > this.ttlMs) {
      this.delete(key);
      return false;
    }
    return true;
  }
  /**
   * Get metadata only (without cloning the data).
   */
  getMeta(key) {
    const entry = this.entries.get(key);
    if (!entry) return null;
    if (Date.now() - entry.meta.cachedAt > this.ttlMs) {
      this.delete(key);
      return null;
    }
    return { ...entry.meta };
  }
  /**
   * Put an entry into memory. Evicts LRU entries if over capacity.
   */
  put(key, meta, data) {
    if (this.entries.has(key)) {
      this.delete(key);
    }
    const sizeBytes = data.byteLength;
    while (this.currentSizeBytes + sizeBytes > this.maxSizeBytes && this.entries.size > 0) {
      this.evictLRU();
    }
    if (sizeBytes > this.maxSizeBytes) {
      console.warn(`[AssetCache] Entry ${key} (${(sizeBytes / 1024 / 1024).toFixed(1)}MB) exceeds max memory, skipping`);
      return;
    }
    this.entries.set(key, { meta, data });
    this.currentSizeBytes += sizeBytes;
  }
  /**
   * Delete an entry.
   */
  delete(key) {
    const entry = this.entries.get(key);
    if (entry) {
      this.currentSizeBytes -= entry.meta.sizeBytes;
      this.entries.delete(key);
    }
  }
  /**
   * Clear all entries.
   */
  clear() {
    this.entries.clear();
    this.currentSizeBytes = 0;
  }
  /**
   * Get stats.
   */
  get size() {
    return this.entries.size;
  }
  get totalSizeBytes() {
    return this.currentSizeBytes;
  }
  /**
   * Evict the least recently used (first in Map iteration order) entry.
   */
  evictLRU() {
    const firstKey = this.entries.keys().next().value;
    if (firstKey !== void 0) {
      console.log(`[AssetCache] Evicting LRU memory entry: ${firstKey}`);
      this.delete(firstKey);
    }
  }
};

// src/cache/noop-store.ts
var NoopCacheStore = class {
  async get(_key) {
    return null;
  }
  async put(_key, _entry) {
  }
  async delete(_key) {
  }
  async has(_key) {
    return false;
  }
  async getMeta(_key) {
    return null;
  }
  async listMeta() {
    return [];
  }
  async totalSize() {
    return 0;
  }
  async clear() {
  }
};

// src/cache/cache-policy.ts
var CACHE_POLICIES = {
  ["image" /* Image */]: {
    category: "image" /* Image */,
    persistenceTier: "persistent" /* Persistent */,
    encryptOnDisk: false
  },
  ["vrma" /* Vrma */]: {
    category: "vrma" /* Vrma */,
    persistenceTier: "persistent" /* Persistent */,
    encryptOnDisk: false
  },
  ["animation_clip" /* AnimationClip */]: {
    category: "animation_clip" /* AnimationClip */,
    persistenceTier: "persistent" /* Persistent */,
    encryptOnDisk: false
  },
  ["audio" /* Audio */]: {
    category: "audio" /* Audio */,
    persistenceTier: "persistent" /* Persistent */,
    encryptOnDisk: false
  },
  ["video" /* Video */]: {
    category: "video" /* Video */,
    persistenceTier: "persistent" /* Persistent */,
    encryptOnDisk: false
  },
  ["animated_image" /* AnimatedImage */]: {
    category: "animated_image" /* AnimatedImage */,
    persistenceTier: "persistent" /* Persistent */,
    encryptOnDisk: false
  },
  ["vrm" /* Vrm */]: {
    category: "vrm" /* Vrm */,
    persistenceTier: "persistent" /* Persistent */,
    encryptOnDisk: false
    // Server-side content protection handles encryption
  },
  ["asset_bundle" /* AssetBundle */]: {
    category: "asset_bundle" /* AssetBundle */,
    persistenceTier: "memory_only" /* MemoryOnly */,
    encryptOnDisk: true
  }
};
function resolveEffectiveTier(category, ownedByUser) {
  const policy = CACHE_POLICIES[category];
  if (policy.persistenceTier === "memory_only" /* MemoryOnly */ && ownedByUser) {
    return "persistent" /* Persistent */;
  }
  return policy.persistenceTier;
}

// src/cache/cache-manager.ts
var DEFAULT_MAX_MEMORY_MB = 200;
var DEFAULT_MAX_PERSISTENT_MB = 500;
var DEFAULT_MEMORY_TTL_MS = 5 * 60 * 1e3;
var CacheManager = class {
  constructor(config, userId) {
    this.inFlight = /* @__PURE__ */ new Map();
    this.ownershipSet = /* @__PURE__ */ new Set();
    const maxMemoryBytes = (config.maxMemoryMB ?? DEFAULT_MAX_MEMORY_MB) * 1024 * 1024;
    const ttlMs = config.memoryTTLMs ?? DEFAULT_MEMORY_TTL_MS;
    this.maxPersistentBytes = (config.maxPersistentMB ?? DEFAULT_MAX_PERSISTENT_MB) * 1024 * 1024;
    this.memoryStore = new MemoryCacheStore({
      maxSizeBytes: maxMemoryBytes,
      ttlMs
    });
    this.persistentStore = config.persistentStore ?? new NoopCacheStore();
    this.userId = userId ?? null;
  }
  /**
   * Set a custom persistent store (e.g. for Electron FS after init).
   */
  setPersistentStore(store) {
    this.persistentStore = store;
  }
  /**
   * Get or fetch an asset with tiered caching.
   *
   * 1. Check L1 (memory, TTL) — stores decoded data
   * 2. Check L2 (persistent, version_id comparison) — may store encoded data
   * 3. Deduplicate in-flight requests
   * 4. Fetch from network
   * 5. Store in L1 (+L2 if policy allows)
   *
   * @param decodeFn - Optional decode function for L2 cached data.
   *   When provided, L2 stores raw (e.g., encrypted) data from the network,
   *   and decodeFn is applied before promoting to L1.
   *   This enables storing encrypted VRM data on disk while keeping
   *   decoded data in memory.
   */
  async getOrFetch(key, category, versionId, ownedByUser, fetchFn, decodeFn) {
    const memoryHit = this.memoryStore.get(key);
    if (memoryHit) {
      console.log(`[AssetCache] L1 HIT: ${key}`);
      return memoryHit.data;
    }
    const effectiveTier = resolveEffectiveTier(category, ownedByUser);
    if (effectiveTier === "persistent" /* Persistent */) {
      try {
        const persistentHit = await this.persistentStore.get(key);
        if (persistentHit) {
          if (versionId && persistentHit.meta.versionId && persistentHit.meta.versionId !== versionId) {
            console.log(`[AssetCache] L2 STALE (version mismatch): ${key}`);
            await this.persistentStore.delete(key);
          } else {
            console.log(`[AssetCache] L2 HIT: ${key}`);
            const decoded = decodeFn ? await decodeFn(persistentHit.data) : persistentHit.data;
            this.memoryStore.put(key, persistentHit.meta, decoded);
            return decoded;
          }
        }
      } catch (err) {
        console.warn(`[AssetCache] L2 read error for ${key}:`, err);
      }
    }
    const existing = this.inFlight.get(key);
    if (existing) {
      console.log(`[AssetCache] Deduplicating in-flight request: ${key}`);
      return existing;
    }
    const fetchPromise = this.fetchAndStore(key, category, versionId, ownedByUser, effectiveTier, fetchFn);
    this.inFlight.set(key, fetchPromise);
    try {
      return await fetchPromise;
    } finally {
      this.inFlight.delete(key);
    }
  }
  /**
   * Register ownership for a cache key (e.g. avatar VRM owned by the user).
   */
  registerOwnership(key) {
    this.ownershipSet.add(key);
  }
  /**
   * Check if a cache key is owned by the current user.
   */
  isOwned(key) {
    return this.ownershipSet.has(key);
  }
  /**
   * Invalidate a specific cache entry from both tiers.
   */
  async invalidate(key) {
    this.memoryStore.delete(key);
    try {
      await this.persistentStore.delete(key);
    } catch (err) {
      console.warn(`[AssetCache] Failed to invalidate persistent entry ${key}:`, err);
    }
  }
  /**
   * Clear all cache entries from both tiers.
   */
  async clear() {
    this.memoryStore.clear();
    this.ownershipSet.clear();
    this.inFlight.clear();
    try {
      await this.persistentStore.clear();
    } catch (err) {
      console.warn("[AssetCache] Failed to clear persistent store:", err);
    }
  }
  /**
   * Get cache statistics.
   */
  async getStats() {
    let persistentEntries = 0;
    let persistentSizeBytes = 0;
    try {
      const metas = await this.persistentStore.listMeta();
      persistentEntries = metas.length;
      persistentSizeBytes = await this.persistentStore.totalSize();
    } catch {
    }
    return {
      memoryEntries: this.memoryStore.size,
      memorySizeBytes: this.memoryStore.totalSizeBytes,
      persistentEntries,
      persistentSizeBytes
    };
  }
  /**
   * Fetch from network and store in cache tiers.
   */
  async fetchAndStore(key, category, versionId, ownedByUser, effectiveTier, fetchFn) {
    console.log(`[AssetCache] L3 FETCH: ${key}`);
    const data = await fetchFn();
    const now = Date.now();
    const meta = {
      key,
      category,
      versionId,
      ownedByUser,
      cachedAt: now,
      sizeBytes: data.byteLength,
      lastAccessedAt: now
    };
    this.memoryStore.put(key, meta, data);
    if (effectiveTier === "persistent" /* Persistent */) {
      try {
        await this.ensurePersistentCapacity(data.byteLength);
        await this.persistentStore.put(key, { meta, data });
      } catch (err) {
        if (this.isQuotaError(err)) {
          console.warn(`[AssetCache] Quota exceeded for ${key}, attempting eviction`);
          try {
            await this.evictPersistentLRU(data.byteLength);
            await this.persistentStore.put(key, { meta, data });
          } catch (retryErr) {
            console.warn(`[AssetCache] Failed to persist ${key} after eviction:`, retryErr);
          }
        } else {
          console.warn(`[AssetCache] Failed to persist ${key}:`, err);
        }
      }
    }
    return data;
  }
  /**
   * Ensure there's enough room in persistent storage.
   */
  async ensurePersistentCapacity(requiredBytes) {
    const currentSize = await this.persistentStore.totalSize();
    if (currentSize + requiredBytes <= this.maxPersistentBytes) return;
    await this.evictPersistentLRU(requiredBytes);
  }
  /**
   * Evict LRU entries from persistent store until enough space is available.
   */
  async evictPersistentLRU(requiredBytes) {
    const metas = await this.persistentStore.listMeta();
    metas.sort((a, b) => a.lastAccessedAt - b.lastAccessedAt);
    let currentSize = await this.persistentStore.totalSize();
    for (const meta of metas) {
      if (currentSize + requiredBytes <= this.maxPersistentBytes) break;
      console.log(`[AssetCache] Evicting persistent entry: ${meta.key}`);
      await this.persistentStore.delete(meta.key);
      currentSize -= meta.sizeBytes;
    }
  }
  /**
   * Check if an error is a quota exceeded error.
   */
  isQuotaError(err) {
    if (err instanceof DOMException && err.name === "QuotaExceededError") return true;
    if (err instanceof Error && err.message.includes("quota")) return true;
    return false;
  }
};
function extractUidFromToken(token) {
  try {
    const raw = token.startsWith("Bearer ") ? token.slice(7) : token;
    const parts = raw.split(".");
    if (parts.length !== 3) return null;
    const base642 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const json = typeof atob === "function" ? atob(base642) : Buffer.from(base642, "base64").toString("utf-8");
    const payload = JSON.parse(json);
    return payload.sub || payload.user_id || null;
  } catch {
    return null;
  }
}

// src/cache/indexeddb-store.ts
var DB_NAME = "charahome-asset-cache";
var DB_VERSION = 1;
var STORE_NAME = "assets";
var IndexedDBCacheStore = class {
  constructor() {
    this.dbPromise = null;
  }
  openDB() {
    if (this.dbPromise) return this.dbPromise;
    this.dbPromise = new Promise((resolve2, reject) => {
      const request2 = indexedDB.open(DB_NAME, DB_VERSION);
      request2.onupgradeneeded = () => {
        const db = request2.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request2.onsuccess = () => resolve2(request2.result);
      request2.onerror = () => {
        this.dbPromise = null;
        reject(request2.error);
      };
    });
    return this.dbPromise;
  }
  async get(key) {
    const db = await this.openDB();
    return new Promise((resolve2, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request2 = store.get(key);
      request2.onsuccess = () => {
        const record = request2.result;
        if (!record) {
          resolve2(null);
          return;
        }
        resolve2({
          meta: record.meta,
          data: record.data
        });
      };
      request2.onerror = () => reject(request2.error);
    });
  }
  async put(key, entry) {
    const db = await this.openDB();
    return new Promise((resolve2, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const record = {
        meta: entry.meta,
        data: entry.data
      };
      const request2 = store.put(record, key);
      request2.onsuccess = () => resolve2();
      request2.onerror = () => reject(request2.error);
    });
  }
  async delete(key) {
    const db = await this.openDB();
    return new Promise((resolve2, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request2 = store.delete(key);
      request2.onsuccess = () => resolve2();
      request2.onerror = () => reject(request2.error);
    });
  }
  async has(key) {
    const db = await this.openDB();
    return new Promise((resolve2, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request2 = store.getKey(key);
      request2.onsuccess = () => resolve2(request2.result !== void 0);
      request2.onerror = () => reject(request2.error);
    });
  }
  async getMeta(key) {
    const entry = await this.get(key);
    return entry?.meta ?? null;
  }
  async listMeta() {
    const db = await this.openDB();
    return new Promise((resolve2, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request2 = store.getAll();
      request2.onsuccess = () => {
        const records = request2.result;
        resolve2(records.map((r) => r.meta));
      };
      request2.onerror = () => reject(request2.error);
    });
  }
  async totalSize() {
    const metas = await this.listMeta();
    return metas.reduce((sum, m) => sum + m.sizeBytes, 0);
  }
  async clear() {
    const db = await this.openDB();
    return new Promise((resolve2, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request2 = store.clear();
      request2.onsuccess = () => resolve2();
      request2.onerror = () => reject(request2.error);
    });
  }
};

// src/cache/persistent-store.ts
function createDefaultPersistentStore() {
  if (typeof indexedDB !== "undefined") {
    return new IndexedDBCacheStore();
  }
  return new NoopCacheStore();
}

// src/content-protection/key-cache.ts
var DEFAULT_KEY_TTL_MS = 5 * 60 * 1e3;
var KeyCache = class {
  constructor(baseUrl, getAuthToken) {
    this.baseUrl = baseUrl;
    this.getAuthToken = getAuthToken;
    this.cache = /* @__PURE__ */ new Map();
  }
  /**
   * Get a decryption key by ID, fetching from API if not cached.
   *
   * @param keyId - Key identifier
   * @param assetId - Asset identifier (required by the key distribution endpoint)
   */
  async getKey(keyId, assetId) {
    const cached = this.cache.get(keyId);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.key;
    }
    const response = await fetch(
      `${this.baseUrl}/content-protection/keys/${keyId}?asset_id=${encodeURIComponent(assetId)}`,
      {
        headers: { Authorization: `Bearer ${this.getAuthToken()}` },
        cache: "no-store"
      }
    );
    if (!response.ok) {
      throw new Error(
        `[ContentProtection] Failed to fetch key ${keyId}: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    const rawKey = base64ToUint8Array(data.key);
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      rawKey.buffer,
      "AES-GCM",
      false,
      ["decrypt"]
    );
    this.cache.set(keyId, {
      key: cryptoKey,
      expiresAt: Date.now() + DEFAULT_KEY_TTL_MS
    });
    return cryptoKey;
  }
  /**
   * Clear all cached keys.
   */
  clear() {
    this.cache.clear();
  }
};
function base64ToUint8Array(base642) {
  const normalized = base642.replace(/-/g, "+").replace(/_/g, "/");
  const binaryString = atob(normalized);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// src/content-protection/aes-gcm.ts
var MIN_DATA_LENGTH = AES_GCM_NONCE_SIZE + AES_GCM_TAG_SIZE;
async function decryptAesGcm(protectedData, key) {
  const bytes = new Uint8Array(protectedData);
  if (bytes.length < MIN_DATA_LENGTH) {
    throw new Error(
      `[ContentProtection] Data too short for AES-GCM: ${bytes.length} bytes (minimum ${MIN_DATA_LENGTH})`
    );
  }
  const nonce = bytes.slice(0, AES_GCM_NONCE_SIZE);
  const tag = bytes.slice(AES_GCM_NONCE_SIZE, AES_GCM_NONCE_SIZE + AES_GCM_TAG_SIZE);
  const ciphertext = bytes.slice(AES_GCM_NONCE_SIZE + AES_GCM_TAG_SIZE);
  const combined = new Uint8Array(ciphertext.length + tag.length);
  combined.set(ciphertext);
  combined.set(tag, ciphertext.length);
  return crypto.subtle.decrypt(
    { name: "AES-GCM", iv: nonce },
    key,
    combined
  );
}

// src/content-protection/zstd-decoder.ts
var fzstd = null;
var loadError = null;
async function ensureFzstd() {
  if (fzstd) return fzstd;
  if (loadError) throw loadError;
  try {
    fzstd = await import("fzstd");
    return fzstd;
  } catch (err) {
    loadError = new Error(
      "[ContentProtection] fzstd is required for zstd decompression. Install it with: pnpm add fzstd"
    );
    throw loadError;
  }
}
async function zstdDecompress(compressed) {
  const lib = await ensureFzstd();
  const result = lib.decompress(new Uint8Array(compressed));
  return result.buffer.slice(result.byteOffset, result.byteOffset + result.byteLength);
}

// src/content-protection/seed-sequence.ts
var MASK32 = 0xFFFFFFFFn;
var INIT_A = 0x43b0d7e5n;
var MULT_A = 0x931e8875n;
var INIT_B = 0x8b51f9ddn;
var MULT_B = 0x58f38dedn;
var MIX_MULT_L = 0xca01f9ddn;
var MIX_MULT_R = 0x4973f715n;
var XSHIFT = 16n;
function hashmix(value, hashConst) {
  value = (value ^ hashConst[0]) & MASK32;
  hashConst[0] = hashConst[0] * MULT_A & MASK32;
  value = value * hashConst[0] & MASK32;
  value = (value ^ value >> XSHIFT) & MASK32;
  return value;
}
function mix(x, y) {
  let result = MIX_MULT_L * x - MIX_MULT_R * y & MASK32;
  if (result < 0n) result = result + (1n << 32n) & MASK32;
  result = (result ^ result >> XSHIFT) & MASK32;
  return result;
}
function mixEntropy(pool, key) {
  const poolLen = pool.length;
  const keyLen = key.length;
  const hashConst = [INIT_A];
  for (let i = 0; i < poolLen; i++) {
    if (i < keyLen) {
      pool[i] = hashmix(key[i], hashConst);
    } else {
      pool[i] = hashmix(0n, hashConst);
    }
  }
  for (let iSrc = 0; iSrc < poolLen; iSrc++) {
    for (let iDst = 0; iDst < poolLen; iDst++) {
      if (iSrc !== iDst) {
        pool[iDst] = mix(pool[iDst], hashmix(pool[iSrc], hashConst));
      }
    }
  }
  for (let iSrc = poolLen; iSrc < keyLen; iSrc++) {
    for (let iDst = 0; iDst < poolLen; iDst++) {
      pool[iDst] = mix(pool[iDst], hashmix(key[iSrc], hashConst));
    }
  }
}
function generateState(pool, numKeys, isBigint) {
  const poolLen = pool.length;
  const numUint32 = isBigint ? numKeys * 2 : numKeys;
  const result32 = [];
  let hashConst = INIT_B;
  for (let iDst = 0; iDst < numUint32; iDst++) {
    let dataVal = pool[iDst % poolLen];
    dataVal = (dataVal ^ hashConst) & MASK32;
    hashConst = hashConst * MULT_B & MASK32;
    dataVal = dataVal * hashConst & MASK32;
    dataVal = (dataVal ^ dataVal >> XSHIFT) & MASK32;
    result32.push(dataVal);
  }
  if (isBigint) {
    const result64 = [];
    for (let i = 0; i < numKeys; i++) {
      result64.push(result32[2 * i] | result32[2 * i + 1] << 32n);
    }
    return result64;
  }
  return result32;
}
function createSeedPool(seedBytes) {
  const key = [];
  for (let i = 0; i < seedBytes.length; i += 4) {
    let val = 0n;
    for (let j = 0; j < 4 && i + j < seedBytes.length; j++) {
      val |= BigInt(seedBytes[i + j]) << BigInt(j * 8);
    }
    key.push(val & MASK32);
  }
  const pool = [0n, 0n, 0n, 0n];
  mixEntropy(pool, key);
  return pool;
}

// src/content-protection/pcg64.ts
var MASK64 = (1n << 64n) - 1n;
var MASK128 = (1n << 128n) - 1n;
var PCG_DEFAULT_MULTIPLIER = 47026247687942121848144207491837523525n;
function output(state) {
  const xsl = (state >> 64n ^ state) & MASK64;
  const rot = Number(state >> 122n & 0x3Fn);
  if (rot === 0) return xsl;
  return (xsl >> BigInt(rot) | xsl << BigInt(64 - rot)) & MASK64;
}
var PCG64 = class {
  /**
   * Create PCG64 from a seed (Uint8Array, first 16 bytes used).
   * Initialization follows NumPy's PCG64 seeding via SeedSequence.
   */
  constructor(seed) {
    // 128-bit (must be odd)
    /** Buffered high 32 bits from last nextUint64() call */
    this.buffer = 0;
    this.hasBuffer = false;
    const pool = createSeedPool(seed);
    const keys = generateState(pool, 4, true);
    const initstate = ((keys[0] & MASK64) << 64n | keys[1] & MASK64) & MASK128;
    const initseq = ((keys[2] & MASK64) << 64n | keys[3] & MASK64) & MASK128;
    this.inc = (initseq << 1n | 1n) & MASK128;
    this.state = 0n;
    this.step();
    this.state = this.state + initstate & MASK128;
    this.step();
  }
  /**
   * Single LCG step: state = state * multiplier + inc (mod 2^128)
   */
  step() {
    this.state = this.state * PCG_DEFAULT_MULTIPLIER + this.inc & MASK128;
  }
  /**
   * Generate the next 64-bit unsigned integer.
   * NumPy's PCG64: step first, then output from new state.
   */
  nextUint64() {
    this.step();
    return output(this.state);
  }
  /**
   * Generate the next 32-bit unsigned integer (buffered).
   * Each nextUint64() yields two uint32 values: low32 first, then high32.
   */
  nextUint32() {
    if (this.hasBuffer) {
      this.hasBuffer = false;
      return this.buffer;
    }
    const val = this.nextUint64();
    const low = Number(val & 0xFFFFFFFFn);
    const high = Number(val >> 32n & 0xFFFFFFFFn);
    this.buffer = high;
    this.hasBuffer = true;
    return low;
  }
  /**
   * Generate a random integer in [0, upperBound) using bitmask rejection sampling.
   * This matches NumPy's bounded_uint32_bitmask method.
   */
  boundedUint32(upperBound) {
    if (upperBound <= 1) return 0;
    let mask = upperBound - 1;
    mask |= mask >>> 1;
    mask |= mask >>> 2;
    mask |= mask >>> 4;
    mask |= mask >>> 8;
    mask |= mask >>> 16;
    let val;
    do {
      val = this.nextUint32() & mask;
    } while (val >= upperBound);
    return val;
  }
};
function generatePermutation(n, seed) {
  const rng = new PCG64(seed);
  const perm = new Uint32Array(n);
  for (let i = 0; i < n; i++) perm[i] = i;
  for (let i = n - 1; i > 0; i--) {
    const j = rng.boundedUint32(i + 1);
    const tmp = perm[i];
    perm[i] = perm[j];
    perm[j] = tmp;
  }
  return perm;
}
function invertPermutation(perm) {
  const inv = new Uint32Array(perm.length);
  for (let i = 0; i < perm.length; i++) {
    inv[perm[i]] = i;
  }
  return inv;
}

// src/content-protection/mesh-deobfuscator.ts
var GLB_MAGIC = 1179937895;
var GLB_VERSION = 2;
var CHUNK_TYPE_JSON = 1313821514;
var CHUNK_TYPE_BIN = 5130562;
var COMPONENT_TYPE_SIZES = {
  5120: 1,
  // BYTE
  5121: 1,
  // UNSIGNED_BYTE
  5122: 2,
  // SHORT
  5123: 2,
  // UNSIGNED_SHORT
  5125: 4,
  // UNSIGNED_INT
  5126: 4
  // FLOAT
};
var TYPE_ELEMENT_COUNTS = {
  "SCALAR": 1,
  "VEC2": 2,
  "VEC3": 3,
  "VEC4": 4,
  "MAT2": 4,
  "MAT3": 9,
  "MAT4": 16
};
function parseGlb(data) {
  const view = new DataView(data);
  const magic = view.getUint32(0, true);
  const version = view.getUint32(4, true);
  if (magic !== GLB_MAGIC) {
    throw new Error(`[ContentProtection] Not a valid GLB: magic 0x${magic.toString(16)}`);
  }
  if (version !== GLB_VERSION) {
    throw new Error(`[ContentProtection] Unsupported GLB version: ${version}`);
  }
  let offset = 12;
  let jsonData = new Uint8Array(0);
  let binData = new Uint8Array(0);
  while (offset < data.byteLength) {
    if (offset + 8 > data.byteLength) break;
    const chunkLength = view.getUint32(offset, true);
    const chunkType = view.getUint32(offset + 4, true);
    offset += 8;
    const chunkData = new Uint8Array(data, offset, chunkLength);
    offset += chunkLength;
    if (chunkType === CHUNK_TYPE_JSON) {
      jsonData = chunkData;
    } else if (chunkType === CHUNK_TYPE_BIN) {
      binData = chunkData;
    }
  }
  return { jsonData, binData };
}
function packGlb(jsonBytes, binBytes) {
  const jsonPaddedLen = jsonBytes.length + 3 & ~3;
  const binPaddedLen = binBytes.length + 3 & ~3;
  let totalLength = 12 + 8 + jsonPaddedLen;
  if (binBytes.length > 0) {
    totalLength += 8 + binPaddedLen;
  }
  const result = new ArrayBuffer(totalLength);
  const view = new DataView(result);
  const bytes = new Uint8Array(result);
  view.setUint32(0, GLB_MAGIC, true);
  view.setUint32(4, GLB_VERSION, true);
  view.setUint32(8, totalLength, true);
  view.setUint32(12, jsonPaddedLen, true);
  view.setUint32(16, CHUNK_TYPE_JSON, true);
  bytes.set(jsonBytes, 20);
  for (let i = jsonBytes.length; i < jsonPaddedLen; i++) {
    bytes[20 + i] = 32;
  }
  if (binBytes.length > 0) {
    const binOffset = 20 + jsonPaddedLen;
    view.setUint32(binOffset, binPaddedLen, true);
    view.setUint32(binOffset + 4, CHUNK_TYPE_BIN, true);
    bytes.set(binBytes, binOffset + 8);
  }
  return result;
}
function getAccessorView(accessor, bufferViews) {
  const bv = bufferViews[accessor.bufferView];
  const componentSize = COMPONENT_TYPE_SIZES[accessor.componentType] ?? 4;
  const elementCount = TYPE_ELEMENT_COUNTS[accessor.type] ?? 1;
  const elementSize = componentSize * elementCount;
  const byteOffset = (bv.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
  const byteStride = bv.byteStride ?? elementSize;
  return { byteOffset, byteStride, elementSize, count: accessor.count };
}
function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}
var hmacKeyCache = null;
async function getHmacKey(seedBytes) {
  if (!hmacKeyCache) hmacKeyCache = /* @__PURE__ */ new Map();
  const cacheKey = Array.from(seedBytes).join(",");
  const cached = hmacKeyCache.get(cacheKey);
  if (cached) return cached;
  const key = await crypto.subtle.importKey(
    "raw",
    seedBytes.buffer,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  hmacKeyCache.set(cacheKey, key);
  return key;
}
async function hmacSha256(key, data) {
  const sig = await crypto.subtle.sign("HMAC", key, data.buffer);
  return new Uint8Array(sig);
}
function packUint32LE(value) {
  const buf = new Uint8Array(4);
  buf[0] = value & 255;
  buf[1] = value >> 8 & 255;
  buf[2] = value >> 16 & 255;
  buf[3] = value >> 24 & 255;
  return buf;
}
function readUint32LE(data, offset) {
  return data[offset] | data[offset + 1] << 8 | data[offset + 2] << 16 | data[offset + 3] << 24 >>> 0;
}
function uint32ToSignedFloat(value) {
  return value / 4294967295 * 2 - 1;
}
async function reverseDisplacementBatch(accessor, bufferViews, binData, seed, vertexCount, displacementScale) {
  if (accessor.type !== "VEC3" || accessor.componentType !== 5126) return;
  if (displacementScale === 0) return;
  const bv = bufferViews[accessor.bufferView];
  const byteOffset = (bv.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
  const byteStride = bv.byteStride ?? 12;
  const hmacKey = await getHmacKey(seed);
  const binView = new DataView(binData.buffer, binData.byteOffset, binData.byteLength);
  const BATCH_SIZE = 256;
  for (let batchStart = 0; batchStart < vertexCount; batchStart += BATCH_SIZE) {
    const batchEnd = Math.min(batchStart + BATCH_SIZE, vertexCount);
    const promises = [];
    for (let i = batchStart; i < batchEnd; i++) {
      promises.push(hmacSha256(hmacKey, packUint32LE(i)));
    }
    const digests = await Promise.all(promises);
    for (let j = 0; j < digests.length; j++) {
      const i = batchStart + j;
      const digest = digests[j];
      const pos = byteOffset + i * byteStride;
      const x = binView.getFloat32(pos, true);
      const y = binView.getFloat32(pos + 4, true);
      const z = binView.getFloat32(pos + 8, true);
      const dx = uint32ToSignedFloat(readUint32LE(digest, 0)) * displacementScale;
      const dy = uint32ToSignedFloat(readUint32LE(digest, 4)) * displacementScale;
      const dz = uint32ToSignedFloat(readUint32LE(digest, 8)) * displacementScale;
      binView.setFloat32(pos, x - dx, true);
      binView.setFloat32(pos + 4, y - dy, true);
      binView.setFloat32(pos + 8, z - dz, true);
    }
  }
}
function unshuffleAccessor(accessor, bufferViews, binData, inversePerm) {
  const { byteOffset, byteStride, elementSize, count } = getAccessorView(accessor, bufferViews);
  const original = new Uint8Array(binData.length);
  for (let i = 0; i < count; i++) {
    const src = byteOffset + i * byteStride;
    original.set(binData.subarray(src, src + elementSize), src);
  }
  for (let newIdx = 0; newIdx < count; newIdx++) {
    const oldIdx = inversePerm[newIdx];
    const src = byteOffset + oldIdx * byteStride;
    const dst = byteOffset + newIdx * byteStride;
    binData.set(original.subarray(src, src + elementSize), dst);
  }
}
function unremapIndices(accessor, bufferViews, binData, forwardPerm) {
  const bv = bufferViews[accessor.bufferView];
  const componentType = accessor.componentType;
  const byteOffset = (bv.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
  const count = accessor.count;
  const view = new DataView(binData.buffer, binData.byteOffset, binData.byteLength);
  if (componentType === 5123) {
    for (let i = 0; i < count; i++) {
      const pos = byteOffset + i * 2;
      const val = view.getUint16(pos, true);
      view.setUint16(pos, forwardPerm[val], true);
    }
  } else if (componentType === 5125) {
    for (let i = 0; i < count; i++) {
      const pos = byteOffset + i * 4;
      const val = view.getUint32(pos, true);
      view.setUint32(pos, forwardPerm[val], true);
    }
  } else if (componentType === 5121) {
    for (let i = 0; i < count; i++) {
      const pos = byteOffset + i;
      const val = binData[pos];
      binData[pos] = forwardPerm[val];
    }
  }
}
function updatePositionBounds(accessor, bufferViews, binData) {
  if (accessor.type !== "VEC3" || accessor.componentType !== 5126) return;
  const bv = bufferViews[accessor.bufferView];
  const byteOffset = (bv.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
  const byteStride = bv.byteStride ?? 12;
  const count = accessor.count;
  if (count === 0) return;
  const view = new DataView(binData.buffer, binData.byteOffset, binData.byteLength);
  const minVals = [Infinity, Infinity, Infinity];
  const maxVals = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < count; i++) {
    const pos = byteOffset + i * byteStride;
    const x = view.getFloat32(pos, true);
    const y = view.getFloat32(pos + 4, true);
    const z = view.getFloat32(pos + 8, true);
    if (x < minVals[0]) minVals[0] = x;
    if (y < minVals[1]) minVals[1] = y;
    if (z < minVals[2]) minVals[2] = z;
    if (x > maxVals[0]) maxVals[0] = x;
    if (y > maxVals[1]) maxVals[1] = y;
    if (z > maxVals[2]) maxVals[2] = z;
  }
  accessor.min = minVals;
  accessor.max = maxVals;
}
function buildPermSeed(baseSeed, meshIdx, primIdx) {
  const result = new Uint8Array(24);
  result.set(baseSeed.subarray(0, Math.min(16, baseSeed.length)));
  const view = new DataView(result.buffer);
  view.setUint32(16, meshIdx, true);
  view.setUint32(20, primIdx, true);
  return result;
}
function buildDispSeed(baseSeed, meshIdx, primIdx) {
  const result = new Uint8Array(24);
  const start = Math.min(16, baseSeed.length);
  const end = Math.min(32, baseSeed.length);
  if (end > start) {
    result.set(baseSeed.subarray(start, end));
  }
  const view = new DataView(result.buffer);
  view.setUint32(16, meshIdx, true);
  view.setUint32(20, primIdx, true);
  return result;
}
function buildMorphDispSeed(dispSeed, targetIdx) {
  const result = new Uint8Array(dispSeed.length + 4);
  result.set(dispSeed);
  const view = new DataView(result.buffer);
  view.setUint32(dispSeed.length, targetIdx + 1, true);
  return result;
}
async function deobfuscateMesh(glbData, obfuscationSeed) {
  const seed = hexToBytes(obfuscationSeed);
  const { jsonData, binData: origBinData } = parseGlb(glbData);
  const gltf = JSON.parse(new TextDecoder().decode(jsonData));
  const binData = new Uint8Array(origBinData);
  const accessors = gltf.accessors ?? [];
  const bufferViews = gltf.bufferViews ?? [];
  const meshes = gltf.meshes ?? [];
  const unshuffledAccessors = /* @__PURE__ */ new Map();
  const undisplacedAccessors = /* @__PURE__ */ new Set();
  for (let meshIdx = 0; meshIdx < meshes.length; meshIdx++) {
    const mesh = meshes[meshIdx];
    const primitives = mesh.primitives ?? [];
    for (let primIdx = 0; primIdx < primitives.length; primIdx++) {
      const primitive = primitives[primIdx];
      const attributes = primitive.attributes ?? {};
      const positionAccessorIdx = attributes.POSITION;
      if (positionAccessorIdx === void 0 || positionAccessorIdx === null) continue;
      const positionAccessor = accessors[positionAccessorIdx];
      const vertexCount = positionAccessor.count;
      if (vertexCount < 2) continue;
      const permSeed = buildPermSeed(seed, meshIdx, primIdx);
      const perm = generatePermutation(vertexCount, permSeed);
      const invPerm = invertPermutation(perm);
      const dispSeed = buildDispSeed(seed, meshIdx, primIdx);
      const obfMeta = primitive.extras?._obf ?? {};
      const posDispScale = obfMeta.pos_disp_scale ?? 0;
      const morphDispScales = obfMeta.morph_disp_scales ?? [];
      const targets = primitive.targets ?? [];
      for (let targetIdx = 0; targetIdx < targets.length; targetIdx++) {
        const targetPosIdx = targets[targetIdx].POSITION;
        if (targetPosIdx !== void 0 && targetPosIdx !== null && !undisplacedAccessors.has(targetPosIdx)) {
          const targetDispSeed = buildMorphDispSeed(dispSeed, targetIdx);
          const tScale = targetIdx < morphDispScales.length && morphDispScales[targetIdx] != null ? morphDispScales[targetIdx] : 0;
          await reverseDisplacementBatch(accessors[targetPosIdx], bufferViews, binData, targetDispSeed, vertexCount, tScale);
          undisplacedAccessors.add(targetPosIdx);
        }
      }
      if (!undisplacedAccessors.has(positionAccessorIdx)) {
        await reverseDisplacementBatch(positionAccessor, bufferViews, binData, dispSeed, vertexCount, posDispScale);
        undisplacedAccessors.add(positionAccessorIdx);
      }
      const indicesAccessorIdx = primitive.indices;
      if (indicesAccessorIdx !== void 0 && indicesAccessorIdx !== null) {
        const posPermData = unshuffledAccessors.get(positionAccessorIdx);
        const permForIndices = posPermData ? posPermData.perm : perm;
        unremapIndices(accessors[indicesAccessorIdx], bufferViews, binData, permForIndices);
      }
      for (const target of targets) {
        for (const attrName of ["POSITION", "NORMAL", "TANGENT"]) {
          const accessorIdx = target[attrName];
          if (accessorIdx !== void 0 && accessorIdx !== null && !unshuffledAccessors.has(accessorIdx)) {
            unshuffleAccessor(accessors[accessorIdx], bufferViews, binData, invPerm);
            unshuffledAccessors.set(accessorIdx, { perm, invPerm });
          }
        }
      }
      const attrNames = ["POSITION", "NORMAL", "TANGENT", "TEXCOORD_0", "TEXCOORD_1", "JOINTS_0", "WEIGHTS_0", "COLOR_0"];
      for (const attrName of attrNames) {
        const accessorIdx = attributes[attrName];
        if (accessorIdx !== void 0 && accessorIdx !== null && !unshuffledAccessors.has(accessorIdx)) {
          unshuffleAccessor(accessors[accessorIdx], bufferViews, binData, invPerm);
          unshuffledAccessors.set(accessorIdx, { perm, invPerm });
        }
      }
      updatePositionBounds(positionAccessor, bufferViews, binData);
      if (primitive.extras?._obf) {
        delete primitive.extras._obf;
        if (Object.keys(primitive.extras).length === 0) {
          delete primitive.extras;
        }
      }
    }
  }
  const updatedJson = new TextEncoder().encode(JSON.stringify(gltf));
  return packGlb(updatedJson, binData);
}

// src/content-protection/decoder.ts
var ContentProtectionDecoder = class {
  constructor(baseUrl, getAuthToken) {
    this.keyCache = new KeyCache(baseUrl, getAuthToken);
  }
  /**
   * Decode protected data through the full pipeline.
   *
   * @param protectedData - Encrypted + compressed + obfuscated data
   * @param keyId - Key identifier for decryption
   * @param assetId - Asset identifier (used for key retrieval)
   * @param obfuscationSeed - Hex seed for mesh deobfuscation (null to skip)
   * @returns Decoded original file data
   */
  async decode(protectedData, keyId, assetId, obfuscationSeed) {
    console.log(`[ContentProtection] Decoding protected data: ${protectedData.byteLength} bytes, keyId=${keyId}`);
    const key = await this.keyCache.getKey(keyId, assetId);
    const compressed = await decryptAesGcm(protectedData, key);
    console.log(`[ContentProtection] Decrypted: ${compressed.byteLength} bytes (compressed)`);
    const decompressed = await zstdDecompress(compressed);
    console.log(`[ContentProtection] Decompressed: ${decompressed.byteLength} bytes`);
    if (obfuscationSeed) {
      const result = await deobfuscateMesh(decompressed, obfuscationSeed);
      console.log(`[ContentProtection] Deobfuscated: ${result.byteLength} bytes`);
      return result;
    }
    return decompressed;
  }
  /**
   * Clear cached decryption keys.
   */
  clearKeyCache() {
    this.keyCache.clear();
  }
};

// src/client/index.ts
var CLIENT_VERSION = "0.9.0";
console.log(`[CharahomeApiClient] Loaded version: ${CLIENT_VERSION}`);
var CharahomeApiClient = class extends // Caching (transparent L1/L2 cache for all downloads)
CachingMixin(
  // Quota (battery/quota status and recovery)
  QuotaApiMixin(
    // Aggregation (fetchCharacterData, duplicateAndRegister, fetchCharacterMotions)
    CharacterApiMixin(
      // Streaming (conversation, TTS, LLM)
      LlmApiMixin(
        TtsApiMixin(
          ConversationApiMixin(
            // Binary (upload/download)
            CharacterFileApiMixin(
              EmotionFormatApiMixin(
                AvatarModelApiMixin(
                  AssetBundleAssetApiMixin(
                    AnimationClipAssetApiMixin(
                      AnimatedImageAssetApiMixin(
                        VideoAssetApiMixin(
                          AudioAssetApiMixin(
                            ImageAssetApiMixin(
                              VrmaAssetApiMixin(
                                VrmAssetApiMixin(
                                  AvatarApiMixin(BaseClient)
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
) {
  constructor(config) {
    super(config);
    if (config.cache?.enabled) {
      const userId = extractUidFromToken(config.authToken);
      const persistentStore = config.cache.persistentStore ?? createDefaultPersistentStore();
      this.cacheManager = new CacheManager(
        { ...config.cache, persistentStore },
        userId
      );
    }
    if (config.contentProtection) {
      const rawToken = config.authToken.startsWith("Bearer ") ? config.authToken.slice(7) : config.authToken;
      const envConfig = getEnvironmentConfig(resolveEnvironment(config.environment));
      this.contentProtection = new ContentProtectionDecoder(
        config.baseUrl ?? envConfig.apiBaseUrl,
        () => rawToken
      );
    }
  }
};
function createCharahomeApiClient(config) {
  return new CharahomeApiClient(config);
}

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

// src/types/config.ts
var DEFAULT_API_BASE_URL = getEnvironmentConfig("staging").apiBaseUrl;
var DEFAULT_TEXT_CONVERTER_BASE_URL = getEnvironmentConfig("staging").textConverterBaseUrl;

// src/handlers/conversation.ts
function getClientWithToken(request2) {
  const userToken = request2.headers.get("X-User-Token");
  if (userToken) {
    const config = getConfig();
    return new CharahomeApiClient({
      baseUrl: config.baseUrl,
      authToken: `Bearer ${userToken}`
    });
  }
  return getClient();
}
async function handleConversation(request2, characterId) {
  const body = await request2.json();
  console.log("[Conversation API] Request:", {
    characterId,
    body
  });
  try {
    const client = getClientWithToken(request2);
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
async function handleConversationRaw(request2, characterId) {
  const body = await request2.json();
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
    const client = getClientWithToken(request2);
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
async function handleTTS(request2) {
  const body = await request2.json();
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
async function handleAnimationFile(request2, animationId) {
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
var import_server = require("next/server");
async function handleMotions(request2, characterId) {
  try {
    const client = getClient();
    const motions = await client.fetchCharacterMotions(characterId);
    return import_server.NextResponse.json({ motions });
  } catch (error) {
    console.error("Error fetching motions:", error);
    return import_server.NextResponse.json(
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

// src/generated/core/OpenAPI.ts
var OpenAPI = {
  BASE: "",
  VERSION: "1.0.0",
  WITH_CREDENTIALS: false,
  CREDENTIALS: "include",
  TOKEN: void 0,
  USERNAME: void 0,
  PASSWORD: void 0,
  HEADERS: void 0,
  ENCODE_PATH: void 0
};

// src/generated-api.ts
var generated_api_exports = {};
__export(generated_api_exports, {
  AccessoriesService: () => AccessoriesService,
  AdminDbStatsService: () => AdminDbStatsService,
  AdminFirestoreService: () => AdminFirestoreService,
  AdminForensicsService: () => AdminForensicsService,
  AdminMigrationService: () => AdminMigrationService,
  AdminReviewsService: () => AdminReviewsService,
  AdminService: () => AdminService,
  AnimatedImageAssetsService: () => AnimatedImageAssetsService,
  AnimationClipAssetsService: () => AnimationClipAssetsService,
  ApiError: () => ApiError,
  AssetBundleAssetsService: () => AssetBundleAssetsService,
  AssetVariantsService: () => AssetVariantsService,
  AudioAssetsService: () => AudioAssetsService,
  AuthenticationService: () => AuthenticationService,
  AutoParamsService: () => AutoParamsService,
  AutoTaggingService: () => AutoTaggingService,
  AvatarAppearanceVariantsService: () => AvatarAppearanceVariantsService,
  AvatarBlinksService: () => AvatarBlinksService,
  AvatarBreathingsService: () => AvatarBreathingsService,
  AvatarCoreMotionsService: () => AvatarCoreMotionsService,
  AvatarExpressionsService: () => AvatarExpressionsService,
  AvatarInstancesService: () => AvatarInstancesService,
  AvatarItemAttachmentsService: () => AvatarItemAttachmentsService,
  AvatarLipsyncsService: () => AvatarLipsyncsService,
  AvatarLookatsService: () => AvatarLookatsService,
  AvatarModelsService: () => AvatarModelsService,
  AvatarMotionsService: () => AvatarMotionsService,
  AvatarTemplatesService: () => AvatarTemplatesService,
  AvatarsService: () => AvatarsService,
  CacheMetadataService: () => CacheMetadataService,
  CancelError: () => CancelError,
  CancelablePromise: () => CancelablePromise,
  CharacterAbilitiesService: () => CharacterAbilitiesService,
  CharacterActionsService: () => CharacterActionsService,
  CharacterBackgroundDetailsService: () => CharacterBackgroundDetailsService,
  CharacterBasicInfoService: () => CharacterBasicInfoService,
  CharacterDailyLifeService: () => CharacterDailyLifeService,
  CharacterEmotionsService: () => CharacterEmotionsService,
  CharacterEquipmentService: () => CharacterEquipmentService,
  CharacterInstancesService: () => CharacterInstancesService,
  CharacterInventoryService: () => CharacterInventoryService,
  CharacterMotionsService: () => CharacterMotionsService,
  CharacterPersonalityParamsService: () => CharacterPersonalityParamsService,
  CharacterPhysicalIdentityService: () => CharacterPhysicalIdentityService,
  CharacterPreferencesService: () => CharacterPreferencesService,
  CharacterProfileGenerationService: () => CharacterProfileGenerationService,
  CharacterTemplatesService: () => CharacterTemplatesService,
  CharactersService: () => CharactersService,
  ContentProtectionService: () => ContentProtectionService,
  CreatorsService: () => CreatorsService,
  DefaultService: () => DefaultService,
  EmotionConfigService: () => EmotionConfigService,
  EmotionFormatsBlendshapeService: () => EmotionFormatsBlendshapeService,
  EmotionFormatsFaceIconService: () => EmotionFormatsFaceIconService,
  EmotionFormatsGlbService: () => EmotionFormatsGlbService,
  EmotionFormatsSpriteService: () => EmotionFormatsSpriteService,
  EmotionsService: () => EmotionsService,
  EquipmentMotionOverlaysService: () => EquipmentMotionOverlaysService,
  GaussianSplatAssetsService: () => GaussianSplatAssetsService,
  GlbAssetsService: () => GlbAssetsService,
  GroupBansService: () => GroupBansService,
  GroupInvitesService: () => GroupInvitesService,
  GroupJoinRequestsService: () => GroupJoinRequestsService,
  GroupsService: () => GroupsService,
  HairStylesService: () => HairStylesService,
  ImageAssetsService: () => ImageAssetsService,
  InternalMarketplaceService: () => InternalMarketplaceService,
  InternalService: () => InternalService,
  KnowledgeGraphService: () => KnowledgeGraphService,
  LlmModelsService: () => LlmModelsService,
  MarketplaceBrowseService: () => MarketplaceBrowseService,
  MarketplaceDistributionBundlesService: () => MarketplaceDistributionBundlesService,
  MarketplaceDistributionsService: () => MarketplaceDistributionsService,
  MarketplaceEntitlementsService: () => MarketplaceEntitlementsService,
  MarketplaceFavoritesService: () => MarketplaceFavoritesService,
  MarketplaceGiftsService: () => MarketplaceGiftsService,
  MarketplaceListingBundlesService: () => MarketplaceListingBundlesService,
  MarketplaceListingsService: () => MarketplaceListingsService,
  MarketplaceNotificationsService: () => MarketplaceNotificationsService,
  MarketplaceReportsService: () => MarketplaceReportsService,
  MarketplaceReviewsService: () => MarketplaceReviewsService,
  MemoriesService: () => MemoriesService,
  MemoryOrganizationService: () => MemoryOrganizationService,
  MoodService: () => MoodService,
  MotionFormatsAnimatorService: () => MotionFormatsAnimatorService,
  MotionFormatsGlbService: () => MotionFormatsGlbService,
  MotionFormatsVrmaService: () => MotionFormatsVrmaService,
  MotionsService: () => MotionsService,
  MotionsSummaryService: () => MotionsSummaryService,
  OpenAPI: () => OpenAPI,
  OutfitsService: () => OutfitsService,
  PersonalityPresetsService: () => PersonalityPresetsService,
  RelationshipContextService: () => RelationshipContextService,
  RelationshipsService: () => RelationshipsService,
  ReviewsService: () => ReviewsService,
  SchedulesService: () => SchedulesService,
  SessionHistoryService: () => SessionHistoryService,
  SettingsService: () => SettingsService,
  SettingsSnippetsClientService: () => SettingsSnippetsClientService,
  SettingsSnippetsService: () => SettingsSnippetsService,
  StateService: () => StateService,
  StoriesService: () => StoriesService,
  StoryInstancesService: () => StoryInstancesService,
  StoryTemplatesService: () => StoryTemplatesService,
  TagsService: () => TagsService,
  ToolDefinitionsService: () => ToolDefinitionsService,
  TtsService: () => TtsService,
  TurnEndPredictionService: () => TurnEndPredictionService,
  UnifiedLlmWrapperService: () => UnifiedLlmWrapperService,
  UsageSummaryService: () => UsageSummaryService,
  UsersService: () => UsersService,
  VideoAssetsService: () => VideoAssetsService,
  VoicesService: () => VoicesService,
  VrmAssetsService: () => VrmAssetsService,
  VrmaAssetsService: () => VrmaAssetsService
});

// src/generated/core/ApiError.ts
var ApiError = class extends Error {
  constructor(request2, response, message) {
    super(message);
    this.name = "ApiError";
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
    this.request = request2;
  }
};

// src/generated/core/CancelablePromise.ts
var CancelError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CancelError";
  }
  get isCancelled() {
    return true;
  }
};
var _isResolved, _isRejected, _isCancelled, _cancelHandlers, _promise, _resolve, _reject;
var CancelablePromise = class {
  constructor(executor) {
    __privateAdd(this, _isResolved);
    __privateAdd(this, _isRejected);
    __privateAdd(this, _isCancelled);
    __privateAdd(this, _cancelHandlers);
    __privateAdd(this, _promise);
    __privateAdd(this, _resolve);
    __privateAdd(this, _reject);
    __privateSet(this, _isResolved, false);
    __privateSet(this, _isRejected, false);
    __privateSet(this, _isCancelled, false);
    __privateSet(this, _cancelHandlers, []);
    __privateSet(this, _promise, new Promise((resolve2, reject) => {
      __privateSet(this, _resolve, resolve2);
      __privateSet(this, _reject, reject);
      const onResolve = (value) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateSet(this, _isResolved, true);
        if (__privateGet(this, _resolve)) __privateGet(this, _resolve).call(this, value);
      };
      const onReject = (reason) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateSet(this, _isRejected, true);
        if (__privateGet(this, _reject)) __privateGet(this, _reject).call(this, reason);
      };
      const onCancel = (cancelHandler) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateGet(this, _cancelHandlers).push(cancelHandler);
      };
      Object.defineProperty(onCancel, "isResolved", {
        get: () => __privateGet(this, _isResolved)
      });
      Object.defineProperty(onCancel, "isRejected", {
        get: () => __privateGet(this, _isRejected)
      });
      Object.defineProperty(onCancel, "isCancelled", {
        get: () => __privateGet(this, _isCancelled)
      });
      return executor(onResolve, onReject, onCancel);
    }));
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(onFulfilled, onRejected) {
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return __privateGet(this, _promise).catch(onRejected);
  }
  finally(onFinally) {
    return __privateGet(this, _promise).finally(onFinally);
  }
  cancel() {
    if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
      return;
    }
    __privateSet(this, _isCancelled, true);
    if (__privateGet(this, _cancelHandlers).length) {
      try {
        for (const cancelHandler of __privateGet(this, _cancelHandlers)) {
          cancelHandler();
        }
      } catch (error) {
        console.warn("Cancellation threw an error", error);
        return;
      }
    }
    __privateGet(this, _cancelHandlers).length = 0;
    if (__privateGet(this, _reject)) __privateGet(this, _reject).call(this, new CancelError("Request aborted"));
  }
  get isCancelled() {
    return __privateGet(this, _isCancelled);
  }
};
_isResolved = new WeakMap();
_isRejected = new WeakMap();
_isCancelled = new WeakMap();
_cancelHandlers = new WeakMap();
_promise = new WeakMap();
_resolve = new WeakMap();
_reject = new WeakMap();

// src/generated/core/request.ts
var isDefined = (value) => {
  return value !== void 0 && value !== null;
};
var isString = (value) => {
  return typeof value === "string";
};
var isStringWithValue = (value) => {
  return isString(value) && value !== "";
};
var isBlob = (value) => {
  return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
var isFormData = (value) => {
  return value instanceof FormData;
};
var base64 = (str) => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString("base64");
  }
};
var getQueryString = (params) => {
  const qs = [];
  const append = (key, value) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  const process2 = (key, value) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process2(key, v);
        });
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          process2(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };
  Object.entries(params).forEach(([key, value]) => {
    process2(key, value);
  });
  if (qs.length > 0) {
    return `?${qs.join("&")}`;
  }
  return "";
};
var getUrl = (config, options) => {
  const encoder = config.ENCODE_PATH || encodeURI;
  const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group) => {
    if (options.path?.hasOwnProperty(group)) {
      return encoder(String(options.path[group]));
    }
    return substring;
  });
  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};
var getFormData = (options) => {
  if (options.formData) {
    const formData = new FormData();
    const process2 = (key, value) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };
    Object.entries(options.formData).filter(([_, value]) => isDefined(value)).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => process2(key, v));
      } else {
        process2(key, value);
      }
    });
    return formData;
  }
  return void 0;
};
var resolve = async (options, resolver) => {
  if (typeof resolver === "function") {
    return resolver(options);
  }
  return resolver;
};
var getHeaders = async (config, options) => {
  const [token, username, password, additionalHeaders] = await Promise.all([
    resolve(options, config.TOKEN),
    resolve(options, config.USERNAME),
    resolve(options, config.PASSWORD),
    resolve(options, config.HEADERS)
  ]);
  const headers = Object.entries({
    Accept: "application/json",
    ...additionalHeaders,
    ...options.headers
  }).filter(([_, value]) => isDefined(value)).reduce((headers2, [key, value]) => ({
    ...headers2,
    [key]: String(value)
  }), {});
  if (isStringWithValue(token)) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (isStringWithValue(username) && isStringWithValue(password)) {
    const credentials = base64(`${username}:${password}`);
    headers["Authorization"] = `Basic ${credentials}`;
  }
  if (options.body !== void 0) {
    if (options.mediaType) {
      headers["Content-Type"] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers["Content-Type"] = options.body.type || "application/octet-stream";
    } else if (isString(options.body)) {
      headers["Content-Type"] = "text/plain";
    } else if (!isFormData(options.body)) {
      headers["Content-Type"] = "application/json";
    }
  }
  return new Headers(headers);
};
var getRequestBody = (options) => {
  if (options.body !== void 0) {
    if (options.mediaType?.includes("/json")) {
      return JSON.stringify(options.body);
    } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
      return options.body;
    } else {
      return JSON.stringify(options.body);
    }
  }
  return void 0;
};
var sendRequest = async (config, options, url, body, formData, headers, onCancel) => {
  const controller = new AbortController();
  const request2 = {
    headers,
    body: body ?? formData,
    method: options.method,
    signal: controller.signal
  };
  if (config.WITH_CREDENTIALS) {
    request2.credentials = config.CREDENTIALS;
  }
  onCancel(() => controller.abort());
  return await fetch(url, request2);
};
var getResponseHeader = (response, responseHeader) => {
  if (responseHeader) {
    const content = response.headers.get(responseHeader);
    if (isString(content)) {
      return content;
    }
  }
  return void 0;
};
var getResponseBody = async (response) => {
  if (response.status !== 204) {
    try {
      const contentType = response.headers.get("Content-Type");
      if (contentType) {
        const jsonTypes = ["application/json", "application/problem+json"];
        const isJSON = jsonTypes.some((type) => contentType.toLowerCase().startsWith(type));
        if (isJSON) {
          return await response.json();
        } else {
          return await response.text();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return void 0;
};
var catchErrorCodes = (options, result) => {
  const errors = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...options.errors
  };
  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }
  if (!result.ok) {
    const errorStatus = result.status ?? "unknown";
    const errorStatusText = result.statusText ?? "unknown";
    const errorBody = (() => {
      try {
        return JSON.stringify(result.body, null, 2);
      } catch (e) {
        return void 0;
      }
    })();
    throw new ApiError(
      options,
      result,
      `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`
    );
  }
};
var request = (config, options) => {
  return new CancelablePromise(async (resolve2, reject, onCancel) => {
    try {
      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options);
      if (!onCancel.isCancelled) {
        const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
        const responseBody = await getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);
        const result = {
          url,
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          body: responseHeader ?? responseBody
        };
        catchErrorCodes(options, result);
        resolve2(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// src/generated/services/AccessoriesService.ts
var AccessoriesService = class {
  /**
   * Create Accessory
   * アクセサリーを作成
   * @returns AccessoryResponse Successful Response
   * @throws ApiError
   */
  static createAccessoryApiV1AccessoriesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/accessories",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Accessories
   * アクセサリー一覧を取得
   * @returns AccessoryListResponse Successful Response
   * @throws ApiError
   */
  static listAccessoriesApiV1AccessoriesGet({
    category,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/accessories",
      query: {
        "category": category,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Accessory
   * アクセサリーを取得
   * @returns AccessoryResponse Successful Response
   * @throws ApiError
   */
  static getAccessoryApiV1AccessoriesAccessoryIdGet({
    accessoryId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/accessories/{accessory_id}",
      path: {
        "accessory_id": accessoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Accessory
   * アクセサリーを更新
   * @returns AccessoryResponse Successful Response
   * @throws ApiError
   */
  static updateAccessoryApiV1AccessoriesAccessoryIdPatch({
    accessoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/accessories/{accessory_id}",
      path: {
        "accessory_id": accessoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Accessory
   * アクセサリーを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAccessoryApiV1AccessoriesAccessoryIdDelete({
    accessoryId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/accessories/{accessory_id}",
      path: {
        "accessory_id": accessoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AdminService.ts
var AdminService = class {
  /**
   * Admin Healthcheck
   * 管理者エンドポイントのヘルスチェック
   *
   * このエンドポイントにアクセスできた場合、
   * リクエストユーザーは claims.admin == true を持っている。
   * @returns any Successful Response
   * @throws ApiError
   */
  static adminHealthcheckAdminV1HealthcheckGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/healthcheck"
    });
  }
  /**
   * Get Db Overview
   * 全コレクションのドキュメント数を一覧取得
   *
   * マイグレーション計画時に全体像を把握するために使用。
   * @returns DbOverviewResponse Successful Response
   * @throws ApiError
   */
  static getDbOverviewAdminV1DbStatsOverviewGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/db-stats/overview"
    });
  }
  /**
   * Get Collection Detail
   * 特定コレクションの詳細統計を取得
   *
   * 全フィールド名の和集合と、指定フィールドの存在率を返す。
   * @returns CollectionDetailResponse Successful Response
   * @throws ApiError
   */
  static getCollectionDetailAdminV1DbStatsCollectionsCollectionNameGet({
    collectionName,
    checkFields
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/db-stats/collections/{collection_name}",
      path: {
        "collection_name": collectionName
      },
      query: {
        "check_fields": checkFields
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Collection Count
   * 指定コレクションのドキュメント数を取得
   *
   * Args:
   * collection_path: コレクションパス（例: "user/characters_data/characters"）
   *
   * Returns:
   * ドキュメント数
   * @returns CollectionCountResponse Successful Response
   * @throws ApiError
   */
  static getCollectionCountAdminV1FirestoreCollectionsCollectionPathCountGet({
    collectionPath
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/count",
      path: {
        "collection_path": collectionPath
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Collection Documents
   * 指定コレクションのドキュメント一覧を取得
   *
   * Args:
   * collection_path: コレクションパス
   * limit: 取得件数上限（デフォルト100、最大1000）
   * fields: 取得するフィールド（カンマ区切り）
   * cursor: ページネーションカーソル
   *
   * Returns:
   * ドキュメント一覧
   * @returns CollectionListResponse Successful Response
   * @throws ApiError
   */
  static listCollectionDocumentsAdminV1FirestoreCollectionsCollectionPathListGet({
    collectionPath,
    limit = 100,
    fields,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/list",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "limit": limit,
        "fields": fields,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Check Migration Status
   * 指定コレクションのマイグレーション状態を確認
   *
   * 特定のフィールドが存在するかどうかをチェックし、
   * マイグレーションが必要なドキュメントを特定する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 確認するフィールド名（例: "owner_type"）
   *
   * Returns:
   * マイグレーション状態
   * @returns MigrationStatusResponse Successful Response
   * @throws ApiError
   */
  static checkMigrationStatusAdminV1FirestoreCollectionsCollectionPathMigrationStatusGet({
    collectionPath,
    fieldName
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/migration-status",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Field
   * 指定コレクションのドキュメントにフィールドを追加
   *
   * 指定フィールドが存在しないドキュメントに、指定値を設定する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 追加するフィールド名
   * field_value: 設定する値
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateFieldAdminV1FirestoreCollectionsCollectionPathMigrateFieldPost({
    collectionPath,
    fieldName,
    fieldValue,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/migrate-field",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName,
        "field_value": fieldValue,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Field Value
   * 指定コレクションのフィールド値を変更
   *
   * 指定フィールドが old_value のドキュメントを new_value に更新する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 変更するフィールド名
   * old_value: 変更前の値
   * new_value: 変更後の値
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateFieldValueAdminV1FirestoreCollectionsCollectionPathMigrateFieldValuePost({
    collectionPath,
    fieldName,
    oldValue,
    newValue,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/migrate-field-value",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName,
        "old_value": oldValue,
        "new_value": newValue,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Document
   * 指定コレクションのドキュメントを削除
   *
   * Args:
   * collection_path: コレクションパス
   * document_id: ドキュメントID
   *
   * Returns:
   * 削除結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteDocumentAdminV1FirestoreCollectionsCollectionPathDocumentsDocumentIdDelete({
    collectionPath,
    documentId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/admin/v1/firestore/collections/{collection_path}/documents/{document_id}",
      path: {
        "collection_path": collectionPath,
        "document_id": documentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Rename Field
   * 指定コレクションのフィールド名をリネーム
   *
   * old_field_name を new_field_name にリネームする。
   *
   * Args:
   * collection_path: コレクションパス
   * old_field_name: 変更前のフィールド名
   * new_field_name: 変更後のフィールド名
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static renameFieldAdminV1FirestoreCollectionsCollectionPathRenameFieldPost({
    collectionPath,
    oldFieldName,
    newFieldName,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/rename-field",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "old_field_name": oldFieldName,
        "new_field_name": newFieldName,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Image Colluders
   * 静止画像からフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * ブラインド検出（オリジナル画像不要）。DWTスペクトルと擬似乱数列の相関で
   * 符号語を復元し、Tardosスコアリングで共謀者を特定する。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectImageColludersAdminV1ForensicsDetectImagePost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-image",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Model Colluders
   * GLB/VRMモデルからフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * オリジナルGLBをGCSから取得し、頂点変位の差分比較で符号語を復元する。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectModelColludersAdminV1ForensicsDetectModelPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-model",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Animated Image Colluders
   * アニメーション画像からフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * 先頭フレームを抽出して静止画と同じDWT相関検出を行う。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectAnimatedImageColludersAdminV1ForensicsDetectAnimatedImagePost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-animated-image",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Add Tag Ids
   * 全タグ付きエンティティのFirestoreドキュメントにtag_idsフラット配列を追加する。
   *
   * 既存のtags配列からtag_idを抽出し、tag_idsフィールドとして非正規化する。
   * array-containsクエリでの高速なタグ検索を可能にする。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateAddTagIdsAdminV1MigrateAddTagIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/add-tag-ids"
    });
  }
  /**
   * Migrate Add Tag Category Ids
   * 全タグ付きエンティティのtagsにtag_category_idを追加する。
   *
   * tag_category_linksコレクションからtag_id→tag_category_idのマッピングを構築し、
   * 各エンティティのtags配列内のタグオブジェクトにtag_category_idを追加する。
   * tag_category_linksに存在しないtag_idは"uncategorized"をセットする。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateAddTagCategoryIdsAdminV1MigrateAddTagCategoryIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/add-tag-category-ids"
    });
  }
  /**
   * Migrate Emotions Data Summary
   * emotion_config/default のデータを user/emotions_data ドキュメントに統合し、
   * official_emotion_index を構築する。
   *
   * 処理:
   * 1. user/emotions_data/emotion_config/default から既存データを読み取り
   * 2. user/emotions_data ドキュメントに既存フィールド(groups, vad_map, mood_verbalizer)を書き込み
   * 3. 全OFFICIAL Emotionドキュメントを読み取り → official_emotion_index を構築・追加
   * 4. user/emotions_data/emotion_config/default を削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateEmotionsDataSummaryAdminV1MigrateEmotionsDataSummaryPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/emotions-data-summary"
    });
  }
  /**
   * Recover Emotions Data
   * 消失した groups / emotion_vad_map / mood_verbalizer を再構築する。
   *
   * ソース:
   * - groups: scripts/seed_emotion_config.py の EMOTION_GROUPS
   * - emotion_vad_map: 個別Emotionドキュメントの vad フィールドから再構築
   * - mood_verbalizer: default_mood_verbalizer_config()
   * - official_emotion_index: 全OFFICIALのEmotionから再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static recoverEmotionsDataAdminV1MigrateRecoverEmotionsDataPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/recover-emotions-data"
    });
  }
  /**
   * Migrate Motions Data Summary
   * 全OFFICIAL Motionから official_motion_index を構築し、
   * user/motions_data ドキュメントに書き込む。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateMotionsDataSummaryAdminV1MigrateMotionsDataSummaryPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/motions-data-summary"
    });
  }
  /**
   * Migrate Motion Types
   * 既存Motionドキュメントにmotion_typeを正しく設定し、インデックスを再構築する。
   *
   * motion_idに基づいて意味的カテゴリ(base/gesture)を判定して設定。
   * 既存の motion_types リストフィールドがあれば motion_type 単数に移行。
   * 全Motionを処理後、motions_dataインデックスを再構築する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateMotionTypesAdminV1MigrateMotionTypesPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/motion-types"
    });
  }
  /**
   * Migrate Vrma Frame Counts
   * 既存VRMAAssetVersionにframe_countを設定する。
   *
   * 各VRMAファイルをStorageからダウンロードし、GLBバイナリを解析して
   * 実際のキーフレーム数を取得・保存する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateVrmaFrameCountsAdminV1MigrateVrmaFrameCountsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/vrma-frame-counts"
    });
  }
  /**
   * Seed All Motions
   * 全Motionデータを削除して新規シードデータを一括投入する。
   *
   * 1. 既存の全Motionドキュメントを削除
   * 2. scripts/seed_motions_data.py の全定義をFirestoreに書き込み
   * 3. motions_dataインデックスを再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static seedAllMotionsAdminV1MigrateSeedAllMotionsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/seed-all-motions"
    });
  }
  /**
   * Seed All Emotions
   * 全Emotionデータを削除して新規シードデータを一括投入し、EmotionConfigも更新する。
   *
   * 1. 既存の全Emotionドキュメントを削除
   * 2. scripts/seed_emotions_data.py の全定義をFirestoreに書き込み
   * 3. EmotionConfigを更新（groups + VAD map + mood_verbalizer + official_emotion_index）
   * @returns any Successful Response
   * @throws ApiError
   */
  static seedAllEmotionsAdminV1MigrateSeedAllEmotionsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/seed-all-emotions"
    });
  }
  /**
   * Rename Numbered Motion Ids
   * motion_id の数字表記を英単語表記にリネームする。
   *
   * 対象: finger_count_1→finger_count_one, ..., countdown_3_2_1→countdown_three_two_one (計11件)
   *
   * 更新対象コレクション:
   * 1. Motion ドキュメント (ドキュメントID + motion_id フィールド)
   * 2. AnimationClipAsset (motion_id フィールド)
   * 3. VRMAAsset (motion_id フィールド)
   * 4. CharacterMotion (各キャラクターのサブコレクション)
   * 5. AvatarMotion (各アバターのサブコレクション)
   * 6. AvatarCoreMotions (深いネスト構造内の全 motion_id)
   * 7. MotionsSummary インデックスの再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static renameNumberedMotionIdsAdminV1MigrateRenameNumberedMotionIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/rename-numbered-motion-ids"
    });
  }
};

// src/generated/services/AdminDbStatsService.ts
var AdminDbStatsService = class {
  /**
   * Get Db Overview
   * 全コレクションのドキュメント数を一覧取得
   *
   * マイグレーション計画時に全体像を把握するために使用。
   * @returns DbOverviewResponse Successful Response
   * @throws ApiError
   */
  static getDbOverviewAdminV1DbStatsOverviewGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/db-stats/overview"
    });
  }
  /**
   * Get Collection Detail
   * 特定コレクションの詳細統計を取得
   *
   * 全フィールド名の和集合と、指定フィールドの存在率を返す。
   * @returns CollectionDetailResponse Successful Response
   * @throws ApiError
   */
  static getCollectionDetailAdminV1DbStatsCollectionsCollectionNameGet({
    collectionName,
    checkFields
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/db-stats/collections/{collection_name}",
      path: {
        "collection_name": collectionName
      },
      query: {
        "check_fields": checkFields
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AdminFirestoreService.ts
var AdminFirestoreService = class {
  /**
   * Get Collection Count
   * 指定コレクションのドキュメント数を取得
   *
   * Args:
   * collection_path: コレクションパス（例: "user/characters_data/characters"）
   *
   * Returns:
   * ドキュメント数
   * @returns CollectionCountResponse Successful Response
   * @throws ApiError
   */
  static getCollectionCountAdminV1FirestoreCollectionsCollectionPathCountGet({
    collectionPath
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/count",
      path: {
        "collection_path": collectionPath
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Collection Documents
   * 指定コレクションのドキュメント一覧を取得
   *
   * Args:
   * collection_path: コレクションパス
   * limit: 取得件数上限（デフォルト100、最大1000）
   * fields: 取得するフィールド（カンマ区切り）
   * cursor: ページネーションカーソル
   *
   * Returns:
   * ドキュメント一覧
   * @returns CollectionListResponse Successful Response
   * @throws ApiError
   */
  static listCollectionDocumentsAdminV1FirestoreCollectionsCollectionPathListGet({
    collectionPath,
    limit = 100,
    fields,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/list",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "limit": limit,
        "fields": fields,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Check Migration Status
   * 指定コレクションのマイグレーション状態を確認
   *
   * 特定のフィールドが存在するかどうかをチェックし、
   * マイグレーションが必要なドキュメントを特定する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 確認するフィールド名（例: "owner_type"）
   *
   * Returns:
   * マイグレーション状態
   * @returns MigrationStatusResponse Successful Response
   * @throws ApiError
   */
  static checkMigrationStatusAdminV1FirestoreCollectionsCollectionPathMigrationStatusGet({
    collectionPath,
    fieldName
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/migration-status",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Field
   * 指定コレクションのドキュメントにフィールドを追加
   *
   * 指定フィールドが存在しないドキュメントに、指定値を設定する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 追加するフィールド名
   * field_value: 設定する値
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateFieldAdminV1FirestoreCollectionsCollectionPathMigrateFieldPost({
    collectionPath,
    fieldName,
    fieldValue,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/migrate-field",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName,
        "field_value": fieldValue,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Field Value
   * 指定コレクションのフィールド値を変更
   *
   * 指定フィールドが old_value のドキュメントを new_value に更新する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 変更するフィールド名
   * old_value: 変更前の値
   * new_value: 変更後の値
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateFieldValueAdminV1FirestoreCollectionsCollectionPathMigrateFieldValuePost({
    collectionPath,
    fieldName,
    oldValue,
    newValue,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/migrate-field-value",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName,
        "old_value": oldValue,
        "new_value": newValue,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Document
   * 指定コレクションのドキュメントを削除
   *
   * Args:
   * collection_path: コレクションパス
   * document_id: ドキュメントID
   *
   * Returns:
   * 削除結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteDocumentAdminV1FirestoreCollectionsCollectionPathDocumentsDocumentIdDelete({
    collectionPath,
    documentId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/admin/v1/firestore/collections/{collection_path}/documents/{document_id}",
      path: {
        "collection_path": collectionPath,
        "document_id": documentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Rename Field
   * 指定コレクションのフィールド名をリネーム
   *
   * old_field_name を new_field_name にリネームする。
   *
   * Args:
   * collection_path: コレクションパス
   * old_field_name: 変更前のフィールド名
   * new_field_name: 変更後のフィールド名
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static renameFieldAdminV1FirestoreCollectionsCollectionPathRenameFieldPost({
    collectionPath,
    oldFieldName,
    newFieldName,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/rename-field",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "old_field_name": oldFieldName,
        "new_field_name": newFieldName,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AdminForensicsService.ts
var AdminForensicsService = class {
  /**
   * Detect Image Colluders
   * 静止画像からフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * ブラインド検出（オリジナル画像不要）。DWTスペクトルと擬似乱数列の相関で
   * 符号語を復元し、Tardosスコアリングで共謀者を特定する。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectImageColludersAdminV1ForensicsDetectImagePost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-image",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Model Colluders
   * GLB/VRMモデルからフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * オリジナルGLBをGCSから取得し、頂点変位の差分比較で符号語を復元する。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectModelColludersAdminV1ForensicsDetectModelPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-model",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Animated Image Colluders
   * アニメーション画像からフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * 先頭フレームを抽出して静止画と同じDWT相関検出を行う。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectAnimatedImageColludersAdminV1ForensicsDetectAnimatedImagePost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-animated-image",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AdminMigrationService.ts
var AdminMigrationService = class {
  /**
   * Migrate Add Tag Ids
   * 全タグ付きエンティティのFirestoreドキュメントにtag_idsフラット配列を追加する。
   *
   * 既存のtags配列からtag_idを抽出し、tag_idsフィールドとして非正規化する。
   * array-containsクエリでの高速なタグ検索を可能にする。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateAddTagIdsAdminV1MigrateAddTagIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/add-tag-ids"
    });
  }
  /**
   * Migrate Add Tag Category Ids
   * 全タグ付きエンティティのtagsにtag_category_idを追加する。
   *
   * tag_category_linksコレクションからtag_id→tag_category_idのマッピングを構築し、
   * 各エンティティのtags配列内のタグオブジェクトにtag_category_idを追加する。
   * tag_category_linksに存在しないtag_idは"uncategorized"をセットする。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateAddTagCategoryIdsAdminV1MigrateAddTagCategoryIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/add-tag-category-ids"
    });
  }
  /**
   * Migrate Emotions Data Summary
   * emotion_config/default のデータを user/emotions_data ドキュメントに統合し、
   * official_emotion_index を構築する。
   *
   * 処理:
   * 1. user/emotions_data/emotion_config/default から既存データを読み取り
   * 2. user/emotions_data ドキュメントに既存フィールド(groups, vad_map, mood_verbalizer)を書き込み
   * 3. 全OFFICIAL Emotionドキュメントを読み取り → official_emotion_index を構築・追加
   * 4. user/emotions_data/emotion_config/default を削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateEmotionsDataSummaryAdminV1MigrateEmotionsDataSummaryPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/emotions-data-summary"
    });
  }
  /**
   * Recover Emotions Data
   * 消失した groups / emotion_vad_map / mood_verbalizer を再構築する。
   *
   * ソース:
   * - groups: scripts/seed_emotion_config.py の EMOTION_GROUPS
   * - emotion_vad_map: 個別Emotionドキュメントの vad フィールドから再構築
   * - mood_verbalizer: default_mood_verbalizer_config()
   * - official_emotion_index: 全OFFICIALのEmotionから再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static recoverEmotionsDataAdminV1MigrateRecoverEmotionsDataPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/recover-emotions-data"
    });
  }
  /**
   * Migrate Motions Data Summary
   * 全OFFICIAL Motionから official_motion_index を構築し、
   * user/motions_data ドキュメントに書き込む。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateMotionsDataSummaryAdminV1MigrateMotionsDataSummaryPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/motions-data-summary"
    });
  }
  /**
   * Migrate Motion Types
   * 既存Motionドキュメントにmotion_typeを正しく設定し、インデックスを再構築する。
   *
   * motion_idに基づいて意味的カテゴリ(base/gesture)を判定して設定。
   * 既存の motion_types リストフィールドがあれば motion_type 単数に移行。
   * 全Motionを処理後、motions_dataインデックスを再構築する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateMotionTypesAdminV1MigrateMotionTypesPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/motion-types"
    });
  }
  /**
   * Migrate Vrma Frame Counts
   * 既存VRMAAssetVersionにframe_countを設定する。
   *
   * 各VRMAファイルをStorageからダウンロードし、GLBバイナリを解析して
   * 実際のキーフレーム数を取得・保存する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateVrmaFrameCountsAdminV1MigrateVrmaFrameCountsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/vrma-frame-counts"
    });
  }
  /**
   * Seed All Motions
   * 全Motionデータを削除して新規シードデータを一括投入する。
   *
   * 1. 既存の全Motionドキュメントを削除
   * 2. scripts/seed_motions_data.py の全定義をFirestoreに書き込み
   * 3. motions_dataインデックスを再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static seedAllMotionsAdminV1MigrateSeedAllMotionsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/seed-all-motions"
    });
  }
  /**
   * Seed All Emotions
   * 全Emotionデータを削除して新規シードデータを一括投入し、EmotionConfigも更新する。
   *
   * 1. 既存の全Emotionドキュメントを削除
   * 2. scripts/seed_emotions_data.py の全定義をFirestoreに書き込み
   * 3. EmotionConfigを更新（groups + VAD map + mood_verbalizer + official_emotion_index）
   * @returns any Successful Response
   * @throws ApiError
   */
  static seedAllEmotionsAdminV1MigrateSeedAllEmotionsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/seed-all-emotions"
    });
  }
  /**
   * Rename Numbered Motion Ids
   * motion_id の数字表記を英単語表記にリネームする。
   *
   * 対象: finger_count_1→finger_count_one, ..., countdown_3_2_1→countdown_three_two_one (計11件)
   *
   * 更新対象コレクション:
   * 1. Motion ドキュメント (ドキュメントID + motion_id フィールド)
   * 2. AnimationClipAsset (motion_id フィールド)
   * 3. VRMAAsset (motion_id フィールド)
   * 4. CharacterMotion (各キャラクターのサブコレクション)
   * 5. AvatarMotion (各アバターのサブコレクション)
   * 6. AvatarCoreMotions (深いネスト構造内の全 motion_id)
   * 7. MotionsSummary インデックスの再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static renameNumberedMotionIdsAdminV1MigrateRenameNumberedMotionIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/rename-numbered-motion-ids"
    });
  }
};

// src/generated/services/AdminReviewsService.ts
var AdminReviewsService = class {
  /**
   * List Pending Staff Reviews
   * 運営審査待ちの一覧を取得（管理者用）
   * @returns PendingReviewListResponse Successful Response
   * @throws ApiError
   */
  static listPendingStaffReviewsAdminV1ReviewLogsPendingStaffGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/review-logs/pending-staff",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Staff Confirm Review
   * 運営による審査確定（管理者用）
   * @returns ReviewLogResponse Successful Response
   * @throws ApiError
   */
  static staffConfirmReviewAdminV1ReviewLogsReviewLogIdStaffConfirmPut({
    reviewLogId,
    reviewerId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/admin/v1/review-logs/{review_log_id}/staff-confirm",
      path: {
        "review_log_id": reviewLogId
      },
      query: {
        "reviewer_id": reviewerId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * 審査ドライラン（DB保存なし・プロンプト評価用）
   * 任意のコンテンツでLLM審査を実行し、結果のみ返す（管理者用）
   *
   * DB保存は行わない。プロンプトや評価基準の品質検証に使用する。
   * appealsを指定すると異議申し立てプロンプトで再審査を実行する。
   * @returns ReviewResultResponse Successful Response
   * @throws ApiError
   */
  static dryRunReviewAdminV1ReviewLogsDryRunPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/review-logs/dry-run",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AnimatedImageAssetsService.ts
var AnimatedImageAssetsService = class {
  /**
   * Create Animated Image Asset
   * アニメーション画像アセットを作成（GIF, APNG対応）
   *
   * ファイルからformat, size_profile, width, height, frame_count, durationを自動検出。
   * roleのみ必須で指定。複雑なデータ構造はJSON文字列で渡す。
   * @returns AnimatedImageAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createAnimatedImageAssetApiV1AnimatedImageAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animated-image-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Animated Image Assets
   * 複数のアニメーション画像アセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAnimatedImageAssetsApiV1AnimatedImageAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animated-image-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Animated Image Assets
   * アニメーション画像アセットを検索
   * @returns AnimatedImageAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchAnimatedImageAssetsApiV1AnimatedImageAssetsSearchGet({
    ownerId,
    format,
    sizeProfile,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/search",
      query: {
        "owner_id": ownerId,
        "format": format,
        "size_profile": sizeProfile,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animated Image Asset
   * アニメーション画像アセットを取得
   * @returns AnimatedImageAssetResponse Successful Response
   * @throws ApiError
   */
  static getAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdGet({
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Animated Image Asset
   * アニメーション画像アセットのメタデータを更新（オーナーのみ）
   * @returns AnimatedImageAssetResponse Successful Response
   * @throws ApiError
   */
  static updateAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdPatch({
    assetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/animated-image-assets/{asset_id}",
      path: {
        "asset_id": assetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Animated Image Asset
   * アニメーション画像アセットを削除（オーナーのみ）
   * @returns void
   * @throws ApiError
   */
  static deleteAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdDelete({
    assetId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/animated-image-assets/{asset_id}",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Animated Image Asset Versions
   * アニメーション画像アセットのバージョン一覧を取得
   * @returns AnimatedImageAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listAnimatedImageAssetVersionsApiV1AnimatedImageAssetsAssetIdVersionsGet({
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/versions",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Animated Image Asset Version
   * アニメーション画像アセットに新しいバージョンを追加
   *
   * ファイルからwidth, height, frame_count, durationを自動検出。
   * フォーマットはアセットのformatと一致する必要がある（不一致時は400エラー）。
   * @returns AnimatedImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsPost({
    assetId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animated-image-assets/{asset_id}/versions",
      path: {
        "asset_id": assetId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Animated Image Version
   * アニメーション画像アセットの最新バージョンを取得
   * @returns AnimatedImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestAnimatedImageVersionApiV1AnimatedImageAssetsAssetIdVersionsLatestGet({
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/versions/latest",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animated Image Asset Version
   * アニメーション画像アセットの特定バージョンを取得
   * @returns AnimatedImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsVersionIdGet({
    assetId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/versions/{version_id}",
      path: {
        "asset_id": assetId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Animated Image Asset Version
   * アニメーション画像アセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsVersionIdDelete({
    assetId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/animated-image-assets/{asset_id}/versions/{version_id}",
      path: {
        "asset_id": assetId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animated Image File Url
   * アニメーション画像ファイルのダウンロード用一時URL（Signed URL）を返す
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getAnimatedImageFileUrlApiV1AnimatedImageAssetsAssetIdFileGet({
    assetId,
    quality = "original"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/file",
      path: {
        "asset_id": assetId
      },
      query: {
        "quality": quality
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animated Image Protected File
   * 透かし入り暗号化アニメーション画像をバイナリレスポンスで返す
   *
   * ヘッダー X-Key-Id, X-Fingerprint-Id, X-Format を含む。
   * @returns any Successful Response
   * @throws ApiError
   */
  static getAnimatedImageProtectedFileApiV1AnimatedImageAssetsAssetIdProtectedFileGet({
    assetId,
    quality = "original"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/protected-file",
      path: {
        "asset_id": assetId
      },
      query: {
        "quality": quality
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AnimationClipAssetsService.ts
var AnimationClipAssetsService = class {
  /**
   * Create Animation Clip Asset
   * AnimationClipアセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns AnimationClipAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createAnimationClipAssetApiV1AnimationClipAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animation-clip-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Animation Clip Assets
   * AnimationClipアセットを検索
   * @returns AnimationClipAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchAnimationClipAssetsApiV1AnimationClipAssetsSearchGet({
    ownerId,
    motionId,
    motionType,
    emotionId,
    targetGender,
    dataSource,
    tagIds,
    minLevel,
    maxAiLevel,
    isLoopable,
    hasRootMotion,
    minDuration,
    maxDuration,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animation-clip-assets/search",
      query: {
        "owner_id": ownerId,
        "motion_id": motionId,
        "motion_type": motionType,
        "emotion_id": emotionId,
        "target_gender": targetGender,
        "data_source": dataSource,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "is_loopable": isLoopable,
        "has_root_motion": hasRootMotion,
        "min_duration": minDuration,
        "max_duration": maxDuration,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Animation Clip Assets
   * 複数のAnimationClipアセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAnimationClipAssetsApiV1AnimationClipAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animation-clip-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animation Clip Asset
   * AnimationClipアセットの詳細情報を取得
   *
   * キャッシュ更新判定に使用するため、updated_atを含む
   *
   * Returns:
   * AnimationClipAsset: アセットの詳細情報
   * @returns AnimationClipAssetResponse Successful Response
   * @throws ApiError
   */
  static getAnimationClipAssetApiV1AnimationClipAssetsClipIdGet({
    clipId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animation-clip-assets/{clip_id}",
      path: {
        "clip_id": clipId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Animation Clip Asset
   * AnimationClipアセットのメタデータを更新（オーナーのみ）
   * @returns AnimationClipAssetResponse Successful Response
   * @throws ApiError
   */
  static updateAnimationClipAssetApiV1AnimationClipAssetsClipIdPatch({
    clipId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/animation-clip-assets/{clip_id}",
      path: {
        "clip_id": clipId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Animation Clip Asset
   * AnimationClipアセットを削除（オーナーのみ、参照されている場合は削除不可）
   * @returns void
   * @throws ApiError
   */
  static deleteAnimationClipAssetApiV1AnimationClipAssetsClipIdDelete({
    clipId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/animation-clip-assets/{clip_id}",
      path: {
        "clip_id": clipId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animation Clip File Url
   * AnimationClipファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getAnimationClipFileUrlApiV1AnimationClipAssetsClipIdFileGet({
    clipId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animation-clip-assets/{clip_id}/file",
      path: {
        "clip_id": clipId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AssetBundleAssetsService.ts
var AssetBundleAssetsService = class {
  /**
   * Create Asset Bundle Asset
   * AssetBundleアセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns AssetBundleAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createAssetBundleAssetApiV1AssetBundleAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-bundle-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Asset Bundle Assets
   * AssetBundleアセットを検索
   * @returns AssetBundleAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchAssetBundleAssetsApiV1AssetBundleAssetsSearchGet({
    ownerId,
    bundleName,
    platform,
    dataSource,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/search",
      query: {
        "owner_id": ownerId,
        "bundle_name": bundleName,
        "platform": platform,
        "data_source": dataSource,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Asset Bundle Assets
   * 複数のAssetBundleアセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAssetBundleAssetsApiV1AssetBundleAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-bundle-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle Asset
   * AssetBundleアセットの詳細情報を取得
   * @returns AssetBundleAssetResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdGet({
    assetBundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}",
      path: {
        "asset_bundle_id": assetBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Asset Bundle Asset
   * AssetBundleアセットのメタデータを更新（オーナーのみ）
   * @returns AssetBundleAssetResponse Successful Response
   * @throws ApiError
   */
  static updateAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdPatch({
    assetBundleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}",
      path: {
        "asset_bundle_id": assetBundleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Bundle Asset
   * AssetBundleアセットを削除（オーナーのみ、参照されている場合は削除不可）
   * @returns void
   * @throws ApiError
   */
  static deleteAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdDelete({
    assetBundleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}",
      path: {
        "asset_bundle_id": assetBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Asset Bundle Asset Versions
   * AssetBundleアセットのバージョン一覧を取得
   * @returns AssetBundleAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listAssetBundleAssetVersionsApiV1AssetBundleAssetsAssetBundleIdVersionsGet({
    assetBundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions",
      path: {
        "asset_bundle_id": assetBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Asset Bundle Asset Version
   * AssetBundleアセットに新しいバージョンを追加
   * @returns AssetBundleAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsPost({
    assetBundleId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions",
      path: {
        "asset_bundle_id": assetBundleId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Asset Bundle Version
   * AssetBundleアセットの最新バージョンを取得
   * @returns AssetBundleAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestAssetBundleVersionApiV1AssetBundleAssetsAssetBundleIdVersionsLatestGet({
    assetBundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions/latest",
      path: {
        "asset_bundle_id": assetBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle Asset Version
   * AssetBundleアセットの特定バージョンを取得
   * @returns AssetBundleAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdGet({
    assetBundleId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions/{version_id}",
      path: {
        "asset_bundle_id": assetBundleId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Bundle Asset Version
   * AssetBundleアセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdDelete({
    assetBundleId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions/{version_id}",
      path: {
        "asset_bundle_id": assetBundleId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Variant To Version
   * 既存バージョンに新しいバリアント（プラットフォーム/アーキテクチャ）を追加
   * @returns AssetBundleAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addVariantToVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdVariantsPost({
    assetBundleId,
    versionId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions/{version_id}/variants",
      path: {
        "asset_bundle_id": assetBundleId,
        "version_id": versionId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle File Url
   * AssetBundleファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * 最新バージョンのファイルを取得
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleFileUrlApiV1AssetBundleAssetsAssetBundleIdFileGet({
    assetBundleId,
    platform,
    arch
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/file",
      path: {
        "asset_bundle_id": assetBundleId
      },
      query: {
        "platform": platform,
        "arch": arch
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle Protected File
   * 保護済みAssetBundleファイルのダウンロード情報を返す
   *
   * ファイルはzstd圧縮 + AES-256-GCM暗号化済み（メッシュ難読化なし）。
   * @returns ProtectedFileResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleProtectedFileApiV1AssetBundleAssetsAssetBundleIdProtectedFileGet({
    assetBundleId,
    platform,
    arch
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/protected-file",
      path: {
        "asset_bundle_id": assetBundleId
      },
      query: {
        "platform": platform,
        "arch": arch
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AssetVariantsService.ts
var AssetVariantsService = class {
  /**
   * Create Asset Variant Link
   * 2つのアセット間のリンクを作成
   *
   * 同じペアは重複不可（辞書順で正規化されるため、順序は問わない）
   * @returns AssetVariantLinkResponse Successful Response
   * @throws ApiError
   */
  static createAssetVariantLinkApiV1AssetVariantsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-variants",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Asset Variant Links
   * 複数のアセットバリアントリンクを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAssetVariantLinksApiV1AssetVariantsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-variants/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Variants By Asset Id
   * 特定のアセットIDに紐づく全リンクを取得
   *
   * 例: vrm_xxxを指定すると、それに紐づくGLTF, AssetBundle等が返る
   * @returns AssetVariantGroupResponse Successful Response
   * @throws ApiError
   */
  static getVariantsByAssetIdApiV1AssetVariantsByAssetAssetIdGet({
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-variants/by-asset/{asset_id}",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Variant Link
   * アセットバリアントリンクを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAssetVariantLinkApiV1AssetVariantsLinkIdDelete({
    linkId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/asset-variants/{link_id}",
      path: {
        "link_id": linkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AudioAssetsService.ts
var AudioAssetsService = class {
  /**
   * Create Audio Asset
   * 音声アセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns AudioAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createAudioAssetApiV1AudioAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/audio-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Audio Assets
   * 複数のオーディオアセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAudioAssetsApiV1AudioAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/audio-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Audio Assets
   * Search audio assets using field-based filters
   * @returns AudioAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchAudioAssetsApiV1AudioAssetsSearchGet({
    audioType,
    maxDuration,
    title,
    ownerId,
    tagIds,
    minLevel,
    artistName,
    album,
    bpmRange,
    isLoopable,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/search",
      query: {
        "audio_type": audioType,
        "max_duration": maxDuration,
        "title": title,
        "owner_id": ownerId,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "artist_name": artistName,
        "album": album,
        "bpm_range": bpmRange,
        "is_loopable": isLoopable,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Audio Asset
   * 音声アセットを取得
   * @returns AudioAssetResponse Successful Response
   * @throws ApiError
   */
  static getAudioAssetApiV1AudioAssetsAudioIdGet({
    audioId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/{audio_id}",
      path: {
        "audio_id": audioId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Audio Asset
   * 音声アセットのメタデータを更新（オーナーのみ）
   * @returns AudioAssetResponse Successful Response
   * @throws ApiError
   */
  static updateAudioAssetApiV1AudioAssetsAudioIdPatch({
    audioId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/audio-assets/{audio_id}",
      path: {
        "audio_id": audioId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Audio Asset
   * 音声アセットを削除（オーナーのみ）
   * @returns void
   * @throws ApiError
   */
  static deleteAudioAssetApiV1AudioAssetsAudioIdDelete({
    audioId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/audio-assets/{audio_id}",
      path: {
        "audio_id": audioId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Audio Asset Versions
   * 音声アセットのバージョン一覧を取得
   * @returns AudioAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listAudioAssetVersionsApiV1AudioAssetsAudioIdVersionsGet({
    audioId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/{audio_id}/versions",
      path: {
        "audio_id": audioId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Audio Asset Version
   * 音声アセットに新しいバージョンを追加
   * @returns AudioAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addAudioAssetVersionApiV1AudioAssetsAudioIdVersionsPost({
    audioId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/audio-assets/{audio_id}/versions",
      path: {
        "audio_id": audioId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Audio Version
   * 音声アセットの最新バージョンを取得
   * @returns AudioAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestAudioVersionApiV1AudioAssetsAudioIdVersionsLatestGet({
    audioId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/{audio_id}/versions/latest",
      path: {
        "audio_id": audioId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Audio Asset Version
   * 音声アセットの特定バージョンを取得
   * @returns AudioAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getAudioAssetVersionApiV1AudioAssetsAudioIdVersionsVersionIdGet({
    audioId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/{audio_id}/versions/{version_id}",
      path: {
        "audio_id": audioId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Audio Asset Version
   * 音声アセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAudioAssetVersionApiV1AudioAssetsAudioIdVersionsVersionIdDelete({
    audioId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/audio-assets/{audio_id}/versions/{version_id}",
      path: {
        "audio_id": audioId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Audio Assets By Type
   * タイプ別に音声アセットを取得
   * @returns AudioAssetListResponse Successful Response
   * @throws ApiError
   */
  static getAudioAssetsByTypeApiV1AudioAssetsTypeAudioTypeGet({
    audioType,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/type/{audio_type}",
      path: {
        "audio_type": audioType
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AuthenticationService.ts
var AuthenticationService = class {
  /**
   * Merge Accounts
   * Merge an anonymous account into an existing account and link the derived app user.
   *
   * Authentication:
   * - Header token: Anonymous account (anon_uid)
   * - Body existing_token: Existing account (proves ownership of target account)
   * @returns any Successful Response
   * @throws ApiError
   */
  static mergeAccountsApiV1AuthMergeAccountsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auth/merge-accounts",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Register Link
   * Register a link between a CHARAHOME account (usually just upgraded) and a derived app user.
   * @returns any Successful Response
   * @throws ApiError
   */
  static registerLinkApiV1AuthRegisterLinkPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auth/register-link",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Check Link
   * Check if the current user is linked to the specified app.
   * @returns any Successful Response
   * @throws ApiError
   */
  static checkLinkApiV1AuthCheckLinkGet({
    appId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auth/check-link",
      query: {
        "app_id": appId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AutoParamsService.ts
var AutoParamsService = class {
  /**
   * Generate Avatar Auto Params
   * アバターのアイコン画像からパラメータを自動生成
   *
   * LLMを使用して、アイコン画像から以下のパラメータを推定します:
   * - archetype: 推定された性格アーキタイプ（1つ）
   * - プリセット値（emotional_params, lookat, blink等）は GET /personality-presets/{archetype} で取得
   * - gender: 性別
   * - age_group: 年齢層（LLM推論）
   * - content_description: 審査・メタデータ用の詳細説明（50〜100文字程度）
   * - display_description: ストア・検索結果用の短いキャッチフレーズ（20文字程度）
   * - main_color / sub_color: テーマカラー
   * - tags: 既存タグDBからLLM推論で自動選択されたタグ（generate_tags=trueの場合）
   * @returns AvatarAutoParamsResponse Successful Response
   * @throws ApiError
   */
  static generateAvatarAutoParamsApiV1AutoParamsAvatarPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-params/avatar",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Character Auto Params
   * キャラクター情報からパラメータを自動生成
   *
   * LLMを使用して、キャラクター情報から以下のパラメータを推定します:
   * - personality_archetype: 性格アーキタイプ（23種から1つ選択）
   * - プリセット値（emotional_params, lookat, blink等）は GET /personality-presets/{archetype} で取得
   * - gender: 性別
   * - age_group: 年齢層（LLM推論）
   * - content_description: 審査・メタデータ用の詳細説明（50〜100文字程度）
   * - display_description: ストア・検索結果用の短いキャッチフレーズ（20文字程度）
   * - main_color / sub_color: テーマカラー
   * - tags: 既存タグDBからLLM推論で自動選択されたタグ（generate_tags=trueの場合）
   * - basic_info, background_details等: サブコレクション（generate_subcollections=trueの場合）
   * @returns CharacterAutoParamsResponse Successful Response
   * @throws ApiError
   */
  static generateCharacterAutoParamsApiV1AutoParamsCharacterPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-params/character",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Motion Auto Params
   * モーションの説明文 / 動画 / GIF からパラメータを自動生成
   *
   * description, video, gif のいずれか1つ以上を入力してください。
   * GIF/APNGはサーバー側でMP4に自動変換されてからLLMに送信されます。
   *
   * LLMを使用して、以下のパラメータを推定します:
   * - content_description: 審査・メタデータ用の整形された説明（フィラー除去済み、50〜100文字）
   * - display_description: ストア表示用の短いキャッチフレーズ（20文字程度）
   * - motion_id: MotionDataから最適なもの選択
   * - motion_id_candidates: 適合度順の候補リスト（最大5件）
   * - emotion_id: EmotionDataから最適なもの選択（デフォルト: neutral）
   * - target_gender: 対象性別
   * - age_groups: 該当する年齢層のリスト
   * - motion_type: モーションタイプ（インデックス参照の確定値）
   * - tags: 既存タグDBからLLM推論で自動選択されたタグ（generate_tags=trueの場合）
   *
   * 音声入力のようなフィラー混じりテキストにも対応します。
   * 動画/GIF入力ではキャラクターの外見を無視し、動作のみを分析します。
   * @returns MotionAutoParamsResponse Successful Response
   * @throws ApiError
   */
  static generateMotionAutoParamsApiV1AutoParamsMotionPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-params/motion",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AutoTaggingService.ts
var AutoTaggingService = class {
  /**
   * Auto Tag Avatar
   * Avatarの自動タグ付け
   *
   * Args:
   * description: アバターの説明文
   * icon_image: アバターのアイコン画像（オプション）
   *
   * Returns:
   * 重み付きタグのリスト
   * @returns AutoTagResponse Successful Response
   * @throws ApiError
   */
  static autoTagAvatarApiV1AutoTaggingAvatarPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-tagging/avatar",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Auto Tag Settings
   * Settingsの自動タグ付け
   *
   * Args:
   * request: 設定の説明文を含むリクエスト
   *
   * Returns:
   * 重み付きタグのリスト
   * @returns AutoTagResponse Successful Response
   * @throws ApiError
   */
  static autoTagSettingsApiV1AutoTaggingSettingsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-tagging/settings",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Auto Tag Animation
   * Animationの自動タグ付け
   *
   * Args:
   * request: アニメーションの説明文を含むリクエスト
   *
   * Returns:
   * 重み付きタグのリスト
   * @returns AutoTagResponse Successful Response
   * @throws ApiError
   */
  static autoTagAnimationApiV1AutoTaggingAnimationPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-tagging/animation",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Tag Categories
   * Avatarで使用可能なタグカテゴリ一覧を取得
   * @returns TagCategoriesResponse Successful Response
   * @throws ApiError
   */
  static getAvatarTagCategoriesApiV1AutoTaggingAvatarCategoriesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auto-tagging/avatar/categories"
    });
  }
  /**
   * Get Settings Tag Categories
   * Settingsで使用可能なタグカテゴリ一覧を取得
   * @returns TagCategoriesResponse Successful Response
   * @throws ApiError
   */
  static getSettingsTagCategoriesApiV1AutoTaggingSettingsCategoriesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auto-tagging/settings/categories"
    });
  }
  /**
   * Get Motion Tag Categories
   * Motionで使用可能なタグカテゴリ一覧を取得
   * @returns TagCategoriesResponse Successful Response
   * @throws ApiError
   */
  static getMotionTagCategoriesApiV1AutoTaggingMotionCategoriesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auto-tagging/motion/categories"
    });
  }
  /**
   * Auto Tag Voice
   * Voiceの自動タグ付け
   *
   * Args:
   * request: 音声の説明文を含むリクエスト
   *
   * Returns:
   * 重み付きタグのリスト
   * @returns AutoTagResponse Successful Response
   * @throws ApiError
   */
  static autoTagVoiceApiV1AutoTaggingVoicePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-tagging/voice",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Voice Tag Categories
   * Voiceで使用可能なタグカテゴリ一覧を取得
   * @returns TagCategoriesResponse Successful Response
   * @throws ApiError
   */
  static getVoiceTagCategoriesApiV1AutoTaggingVoiceCategoriesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auto-tagging/voice/categories"
    });
  }
};

// src/generated/services/AvatarAppearanceVariantsService.ts
var AvatarAppearanceVariantsService = class {
  /**
   * Get Appearance Variant List
   * アバターの全外観バリアントを取得
   * @returns AppearanceVariantListResponse Successful Response
   * @throws ApiError
   */
  static getAppearanceVariantListApiV1AvatarsAvatarIdAppearanceVariantsGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Appearance Variant
   * アバターに新しい外観バリアントを作成
   * @returns AppearanceVariantResponse Successful Response
   * @throws ApiError
   */
  static createAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Appearance Variant
   * 特定の外観バリアントを取得
   * @returns AppearanceVariantResponse Successful Response
   * @throws ApiError
   */
  static getAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdGet({
    avatarId,
    variantId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants/{variant_id}",
      path: {
        "avatar_id": avatarId,
        "variant_id": variantId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Appearance Variant
   * 外観バリアントを更新
   * @returns AppearanceVariantResponse Successful Response
   * @throws ApiError
   */
  static updateAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdPatch({
    avatarId,
    variantId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants/{variant_id}",
      path: {
        "avatar_id": avatarId,
        "variant_id": variantId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Appearance Variant
   * 外観バリアントを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdDelete({
    avatarId,
    variantId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants/{variant_id}",
      path: {
        "avatar_id": avatarId,
        "variant_id": variantId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarBlinksService.ts
var AvatarBlinksService = class {
  /**
   * Get Avatar Blinks
   * アバターの全ての瞬きデータを取得
   * @returns AvatarBlinkListResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBlinksApiV1AvatarsAvatarIdBlinksGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/blinks",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Blink
   * アバターに新しい瞬きデータを作成
   *
   * blink_id はサーバー側で自動生成される（blink_{avatar_id}形式）
   * @returns AvatarBlinkResponse Successful Response
   * @throws ApiError
   */
  static createAvatarBlinkApiV1AvatarsAvatarIdBlinksPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/blinks",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Blinks
   * 複数の瞬きデータを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarBlinksApiV1AvatarsAvatarIdBlinksBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/blinks/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Blink
   * 特定の瞬きデータを取得
   * @returns AvatarBlinkResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBlinkApiV1AvatarsAvatarIdBlinksAvatarBlinkIdGet({
    avatarId,
    avatarBlinkId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Blink
   * 瞬きデータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarBlinkApiV1AvatarsAvatarIdBlinksAvatarBlinkIdDelete({
    avatarId,
    avatarBlinkId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Blink Formats
   * 瞬きデータの全フォーマットを一覧取得
   * @returns BlinkFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarBlinkFormatsApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsGet({
    avatarId,
    avatarBlinkId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Blink Format
   * 瞬きデータにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsPost({
    avatarId,
    avatarBlinkId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Blink Format
   * 特定のフォーマットを取得
   * @returns BlinkFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypeGet({
    avatarId,
    avatarBlinkId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Blink Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypePatch({
    avatarId,
    avatarBlinkId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Blink Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypeDelete({
    avatarId,
    avatarBlinkId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarBreathingsService.ts
var AvatarBreathingsService = class {
  /**
   * Get Avatar Breathings
   * アバターの全ての呼吸データを取得
   * @returns AvatarBreathingListResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBreathingsApiV1AvatarsAvatarIdBreathingsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/breathings",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Breathing
   * アバターに新しい呼吸データを作成
   * @returns AvatarBreathingResponse Successful Response
   * @throws ApiError
   */
  static createAvatarBreathingApiV1AvatarsAvatarIdBreathingsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/breathings",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Breathings
   * 複数の呼吸データを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarBreathingsApiV1AvatarsAvatarIdBreathingsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/breathings/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Breathing
   * 特定の呼吸データを取得
   * @returns AvatarBreathingResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBreathingApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdGet({
    avatarId,
    avatarBreathingId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Breathing
   * 呼吸データを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarBreathingApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdDelete({
    avatarId,
    avatarBreathingId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Breathing Formats
   * 呼吸データの全フォーマットを一覧取得
   * @returns BreathingFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarBreathingFormatsApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsGet({
    avatarId,
    avatarBreathingId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Breathing Format
   * 呼吸データにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsPost({
    avatarId,
    avatarBreathingId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Breathing Format
   * 特定のフォーマットを取得
   * @returns BreathingFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypeGet({
    avatarId,
    avatarBreathingId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Breathing Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypePatch({
    avatarId,
    avatarBreathingId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Breathing Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypeDelete({
    avatarId,
    avatarBreathingId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarCoreMotionsService.ts
var AvatarCoreMotionsService = class {
  /**
   * Get Avatar Core Motions
   * アバターのAvatarCoreMotionsデータを取得
   * @returns AvatarCoreMotionsResponse Successful Response
   * @throws ApiError
   */
  static getAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/core-motions",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Core Motions
   * アバターのAvatarCoreMotionsデータを作成
   * @returns AvatarCoreMotionsResponse Successful Response
   * @throws ApiError
   */
  static createAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/core-motions",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Core Motions
   * アバターのAvatarCoreMotionsデータを更新
   * @returns AvatarCoreMotionsResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsPut({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/avatars/{avatar_id}/core-motions",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Core Motions
   * アバターのAvatarCoreMotionsデータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/core-motions",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarExpressionsService.ts
var AvatarExpressionsService = class {
  /**
   * Get Avatar Expressions
   * アバターの全ての表現を取得
   * @returns AvatarExpressionResponse Successful Response
   * @throws ApiError
   */
  static getAvatarExpressionsApiV1AvatarsAvatarIdExpressionsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Expression
   * アバターに新しい表現を作成
   *
   * avatar_expression_id と number はサーバー側で自動採番される
   * @returns AvatarExpressionResponse Successful Response
   * @throws ApiError
   */
  static createAvatarExpressionApiV1AvatarsAvatarIdExpressionsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Expressions
   * 複数の表現データを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarExpressionsApiV1AvatarsAvatarIdExpressionsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Expression
   * 特定の表現を取得
   * @returns AvatarExpressionResponse Successful Response
   * @throws ApiError
   */
  static getAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdGet({
    avatarId,
    avatarExpressionId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Expression
   * 表現を更新
   * @returns AvatarExpressionResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdPatch({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Expression
   * 表現を削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Expression Formats
   * 表現の全フォーマットを一覧取得
   * @returns ExpressionFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarExpressionFormatsApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Expression Format
   * 表現にフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsPost({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Expression Format
   * 特定のフォーマットを取得
   * @returns ExpressionFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypeGet({
    avatarId,
    avatarExpressionId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Expression Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypePatch({
    avatarId,
    avatarExpressionId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Expression Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypeDelete({
    avatarId,
    avatarExpressionId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarInstancesService.ts
var AvatarInstancesService = class {
  /**
   * Create Avatar Instance
   * @returns AvatarInstanceResponse Successful Response
   * @throws ApiError
   */
  static createAvatarInstanceApiV1MarketplaceAvatarInstancesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/avatar-instances",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Instances
   * @returns AvatarInstanceListResponse Successful Response
   * @throws ApiError
   */
  static listAvatarInstancesApiV1MarketplaceAvatarInstancesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-instances",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Instance
   * @returns AvatarInstanceResponse Successful Response
   * @throws ApiError
   */
  static getAvatarInstanceApiV1MarketplaceAvatarInstancesInstanceIdGet({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Instance
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarInstanceApiV1MarketplaceAvatarInstancesInstanceIdDelete({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/avatar-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Instance To Latest
   * @returns AvatarInstanceResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarInstanceToLatestApiV1MarketplaceAvatarInstancesInstanceIdUpdatePost({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/avatar-instances/{instance_id}/update",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Fork Avatar Instance
   * @returns any Successful Response
   * @throws ApiError
   */
  static forkAvatarInstanceApiV1MarketplaceAvatarInstancesInstanceIdForkPost({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/avatar-instances/{instance_id}/fork",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarItemAttachmentsService.ts
var AvatarItemAttachmentsService = class {
  /**
   * Create Attachment
   * 装着設定を作成
   * @returns AvatarItemAttachmentResponse Successful Response
   * @throws ApiError
   */
  static createAttachmentApiV1AvatarsAvatarIdItemAttachmentsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/item-attachments",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Attachments
   * 装着設定一覧を取得
   * @returns AvatarItemAttachmentListResponse Successful Response
   * @throws ApiError
   */
  static listAttachmentsApiV1AvatarsAvatarIdItemAttachmentsGet({
    avatarId,
    outfitId,
    accessoryId,
    hairStyleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/item-attachments",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "outfit_id": outfitId,
        "accessory_id": accessoryId,
        "hair_style_id": hairStyleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Attachment
   * 装着設定を1件取得
   * @returns AvatarItemAttachmentResponse Successful Response
   * @throws ApiError
   */
  static getAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdGet({
    avatarId,
    attachmentId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/item-attachments/{attachment_id}",
      path: {
        "avatar_id": avatarId,
        "attachment_id": attachmentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Attachment
   * 装着設定を更新
   * @returns AvatarItemAttachmentResponse Successful Response
   * @throws ApiError
   */
  static updateAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdPatch({
    avatarId,
    attachmentId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/item-attachments/{attachment_id}",
      path: {
        "avatar_id": avatarId,
        "attachment_id": attachmentId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Attachment
   * 装着設定を削除
   * @returns void
   * @throws ApiError
   */
  static deleteAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdDelete({
    avatarId,
    attachmentId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/item-attachments/{attachment_id}",
      path: {
        "avatar_id": avatarId,
        "attachment_id": attachmentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarLipsyncsService.ts
var AvatarLipsyncsService = class {
  /**
   * Get Avatar Lipsyncs
   * アバターの全てのリップシンクデータを取得
   * @returns AvatarLipSyncListResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLipsyncsApiV1AvatarsAvatarIdLipsyncsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Lipsync
   * アバターに新しいリップシンクデータを作成
   * @returns AvatarLipSyncResponse Successful Response
   * @throws ApiError
   */
  static createAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Lipsyncs
   * 複数のリップシンクデータを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarLipsyncsApiV1AvatarsAvatarIdLipsyncsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Lipsync
   * 特定のリップシンクデータを取得
   * @returns AvatarLipSyncResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdGet({
    avatarId,
    avatarLipsyncId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Lipsync
   * リップシンクデータを更新（共通パラメータのみ）
   * @returns AvatarLipSyncResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdPatch({
    avatarId,
    avatarLipsyncId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Lipsync
   * リップシンクデータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdDelete({
    avatarId,
    avatarLipsyncId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Lipsync Formats
   * リップシンクデータの全フォーマットを一覧取得
   * @returns LipSyncFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarLipsyncFormatsApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsGet({
    avatarId,
    avatarLipsyncId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Lipsync Format
   * リップシンクデータにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsPost({
    avatarId,
    avatarLipsyncId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Lipsync Format
   * 特定のフォーマットを取得
   * @returns LipSyncFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypeGet({
    avatarId,
    avatarLipsyncId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Lipsync Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypePatch({
    avatarId,
    avatarLipsyncId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Lipsync Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypeDelete({
    avatarId,
    avatarLipsyncId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarLookatsService.ts
var AvatarLookatsService = class {
  /**
   * Get Avatar Lookats
   * アバターの全ての視線制御データを取得
   * @returns AvatarLookAtListResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLookatsApiV1AvatarsAvatarIdLookatsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lookats",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Lookat
   * アバターに新しい視線制御データを作成
   * @returns AvatarLookAtResponse Successful Response
   * @throws ApiError
   */
  static createAvatarLookatApiV1AvatarsAvatarIdLookatsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lookats",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Lookats
   * 複数の視線制御データを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarLookatsApiV1AvatarsAvatarIdLookatsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lookats/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Lookat
   * 特定の視線制御データを取得
   * @returns AvatarLookAtResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLookatApiV1AvatarsAvatarIdLookatsAvatarLookatIdGet({
    avatarId,
    avatarLookatId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Lookat
   * 視線制御データを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarLookatApiV1AvatarsAvatarIdLookatsAvatarLookatIdDelete({
    avatarId,
    avatarLookatId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Lookat Formats
   * 視線制御データの全フォーマットを一覧取得
   * @returns LookAtFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarLookatFormatsApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsGet({
    avatarId,
    avatarLookatId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Lookat Format
   * 視線制御データにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsPost({
    avatarId,
    avatarLookatId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Lookat Format
   * 特定のフォーマットを取得
   * @returns LookAtFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypeGet({
    avatarId,
    avatarLookatId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Lookat Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypePatch({
    avatarId,
    avatarLookatId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Lookat Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypeDelete({
    avatarId,
    avatarLookatId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarModelsService.ts
var AvatarModelsService = class {
  /**
   * Create Vrm Model
   * VRMモデルを登録（アセットID参照）
   * @returns VRMModelResponse Successful Response
   * @throws ApiError
   */
  static createVrmModelApiV1AvatarsAvatarIdVrmModelPost({
    avatarId,
    vrmAssetId,
    modelerName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/vrm-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "vrm_asset_id": vrmAssetId,
        "modeler_name": modelerName,
        "character_designer_name": characterDesignerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrm Model
   * VRMモデル情報を取得
   * @returns VRMModelResponse Successful Response
   * @throws ApiError
   */
  static getVrmModelApiV1AvatarsAvatarIdVrmModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/vrm-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Vrm Model
   * VRMモデルを更新
   * @returns VRMModelResponse Successful Response
   * @throws ApiError
   */
  static updateVrmModelApiV1AvatarsAvatarIdVrmModelPatch({
    avatarId,
    vrmAssetId,
    modelerName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/vrm-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "vrm_asset_id": vrmAssetId,
        "modeler_name": modelerName,
        "character_designer_name": characterDesignerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Vrm Model
   * VRMモデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteVrmModelApiV1AvatarsAvatarIdVrmModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/vrm-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Vrm Model With File
   * VRMモデルを登録（ファイルアップロードしてアセット作成も行う統合版）
   * @returns VRMModelResponse Successful Response
   * @throws ApiError
   */
  static uploadVrmModelWithFileApiV1AvatarsAvatarIdVrmModelFileUploadPost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/vrm-model/file-upload",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Sprite Model
   * Spriteモデルを登録（アセットID参照）
   * @returns SpriteModelResponse Successful Response
   * @throws ApiError
   */
  static createSpriteModelApiV1AvatarsAvatarIdSpriteModelPost({
    avatarId,
    posture,
    baseAssetId,
    facePositionJson,
    eyelidAssetId,
    eyeballAssetId,
    mouthAssetId,
    illustratorName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/sprite-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "posture": posture,
        "base_asset_id": baseAssetId,
        "eyelid_asset_id": eyelidAssetId,
        "eyeball_asset_id": eyeballAssetId,
        "mouth_asset_id": mouthAssetId,
        "illustrator_name": illustratorName,
        "character_designer_name": characterDesignerName,
        "face_position_json": facePositionJson
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Sprite Model
   * Spriteモデル情報を取得
   * @returns SpriteModelResponse Successful Response
   * @throws ApiError
   */
  static getSpriteModelApiV1AvatarsAvatarIdSpriteModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/sprite-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Sprite Model
   * Spriteモデルを更新
   * @returns SpriteModelResponse Successful Response
   * @throws ApiError
   */
  static updateSpriteModelApiV1AvatarsAvatarIdSpriteModelPatch({
    avatarId,
    posture,
    baseAssetId,
    eyelidAssetId,
    eyeballAssetId,
    mouthAssetId,
    illustratorName,
    characterDesignerName,
    facePositionJson
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/sprite-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "posture": posture,
        "base_asset_id": baseAssetId,
        "eyelid_asset_id": eyelidAssetId,
        "eyeball_asset_id": eyeballAssetId,
        "mouth_asset_id": mouthAssetId,
        "illustrator_name": illustratorName,
        "character_designer_name": characterDesignerName,
        "face_position_json": facePositionJson
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Sprite Model
   * Spriteモデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSpriteModelApiV1AvatarsAvatarIdSpriteModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/sprite-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Sprite Model With Files
   * Spriteモデルを登録（画像ファイルアップロードしてアセット作成も行う統合版）
   * @returns SpriteModelResponse Successful Response
   * @throws ApiError
   */
  static uploadSpriteModelWithFilesApiV1AvatarsAvatarIdSpriteModelFileUploadPost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/sprite-model/file-upload",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Face
   * 画像から顔位置を自動検出する（正規化座標で返却）
   * @returns FaceDetectionResponse Successful Response
   * @throws ApiError
   */
  static detectFaceApiV1AvatarsAvatarIdSpriteModelDetectFacePost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/sprite-model/detect-face",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Pose
   * 画像からボディキーポイントを自動検出する（正規化座標で返却）
   * @returns PoseDetectionResponse Successful Response
   * @throws ApiError
   */
  static detectPoseApiV1AvatarsAvatarIdSpriteModelDetectPosePost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/sprite-model/detect-pose",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Face Icon Model
   * FaceIconモデルを登録（アセットID参照）
   * @returns FaceIconModelResponse Successful Response
   * @throws ApiError
   */
  static createFaceIconModelApiV1AvatarsAvatarIdFaceIconModelPost({
    avatarId,
    baseAssetId,
    bodyAssetId,
    eyelidAssetId,
    eyeballAssetId,
    mouthAssetId,
    illustratorName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "base_asset_id": baseAssetId,
        "body_asset_id": bodyAssetId,
        "eyelid_asset_id": eyelidAssetId,
        "eyeball_asset_id": eyeballAssetId,
        "mouth_asset_id": mouthAssetId,
        "illustrator_name": illustratorName,
        "character_designer_name": characterDesignerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Face Icon Model
   * FaceIconモデル情報を取得
   * @returns FaceIconModelResponse Successful Response
   * @throws ApiError
   */
  static getFaceIconModelApiV1AvatarsAvatarIdFaceIconModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Face Icon Model
   * FaceIconモデルを更新
   * @returns FaceIconModelResponse Successful Response
   * @throws ApiError
   */
  static updateFaceIconModelApiV1AvatarsAvatarIdFaceIconModelPatch({
    avatarId,
    baseAssetId,
    bodyAssetId,
    eyelidAssetId,
    eyeballAssetId,
    mouthAssetId,
    illustratorName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "base_asset_id": baseAssetId,
        "body_asset_id": bodyAssetId,
        "eyelid_asset_id": eyelidAssetId,
        "eyeball_asset_id": eyeballAssetId,
        "mouth_asset_id": mouthAssetId,
        "illustrator_name": illustratorName,
        "character_designer_name": characterDesignerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Face Icon Model
   * FaceIconモデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteFaceIconModelApiV1AvatarsAvatarIdFaceIconModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Face Icon Model With Files
   * FaceIconモデルを登録（画像ファイルアップロードしてアセット作成も行う統合版）
   * @returns FaceIconModelResponse Successful Response
   * @throws ApiError
   */
  static uploadFaceIconModelWithFilesApiV1AvatarsAvatarIdFaceIconModelFileUploadPost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model/file-upload",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Asset Bundle
   * AssetBundleモデルの作成/更新（単一バリアント登録・差し替え）
   * @returns AssetBundleModelResponse Successful Response
   * @throws ApiError
   */
  static uploadAssetBundleApiV1AvatarsAvatarIdAssetBundleModelPost({
    avatarId,
    platform,
    arch,
    storagePath,
    sha256,
    sizeBytes,
    modelerName,
    characterDesignerName,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/asset-bundle-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "platform": platform,
        "arch": arch,
        "storage_path": storagePath,
        "sha256": sha256,
        "size_bytes": sizeBytes,
        "modeler_name": modelerName,
        "character_designer_name": characterDesignerName
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle
   * AssetBundleモデル情報を取得（全バリアント一覧）
   * @returns AssetBundleModelResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleApiV1AvatarsAvatarIdAssetBundleModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/asset-bundle-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Bundle
   * AssetBundleモデル全体を削除（全バリアント + Firestore）
   * @returns void
   * @throws ApiError
   */
  static deleteAssetBundleApiV1AvatarsAvatarIdAssetBundleModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/asset-bundle-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Bundle Variant
   * AssetBundleの単一バリアントを削除（Firestore + Storage）
   * @returns void
   * @throws ApiError
   */
  static deleteAssetBundleVariantApiV1AvatarsAvatarIdAssetBundleModelVariantDelete({
    avatarId,
    platform,
    arch
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/asset-bundle-model/variant",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "platform": platform,
        "arch": arch
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Glb Model
   * GLBモデルを登録（アセットID参照）
   * @returns GLBModelResponse Successful Response
   * @throws ApiError
   */
  static createGlbModelApiV1AvatarsAvatarIdGlbModelPost({
    avatarId,
    glbAssetId,
    glbAssetVersionId,
    modelerName,
    designerName
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/glb-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "glb_asset_id": glbAssetId,
        "glb_asset_version_id": glbAssetVersionId,
        "modeler_name": modelerName,
        "designer_name": designerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Model
   * GLBモデル情報を取得
   * @returns GLBModelResponse Successful Response
   * @throws ApiError
   */
  static getGlbModelApiV1AvatarsAvatarIdGlbModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/glb-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Glb Model
   * GLBモデルを更新
   * @returns GLBModelResponse Successful Response
   * @throws ApiError
   */
  static updateGlbModelApiV1AvatarsAvatarIdGlbModelPatch({
    avatarId,
    glbAssetId,
    glbAssetVersionId,
    modelerName,
    designerName
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/glb-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "glb_asset_id": glbAssetId,
        "glb_asset_version_id": glbAssetVersionId,
        "modeler_name": modelerName,
        "designer_name": designerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Glb Model
   * GLBモデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteGlbModelApiV1AvatarsAvatarIdGlbModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/glb-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Glb Model With File
   * GLBモデルを登録（ファイルアップロードしてアセット作成も行う統合版）
   * @returns GLBModelResponse Successful Response
   * @throws ApiError
   */
  static uploadGlbModelWithFileApiV1AvatarsAvatarIdGlbModelFileUploadPost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/glb-model/file-upload",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarMotionsService.ts
var AvatarMotionsService = class {
  /**
   * Get Avatar Motions
   * アバターの全てのモーションを取得
   * @returns AvatarMotionResponse Successful Response
   * @throws ApiError
   */
  static getAvatarMotionsApiV1AvatarsAvatarIdMotionsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Motion
   * アバターに新しいモーションを作成
   * @returns AvatarMotionResponse Successful Response
   * @throws ApiError
   */
  static createAvatarMotionApiV1AvatarsAvatarIdMotionsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Motions
   * 複数のモーションデータを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarMotionsApiV1AvatarsAvatarIdMotionsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Motion
   * 特定のモーションを取得
   * @returns AvatarMotionResponse Successful Response
   * @throws ApiError
   */
  static getAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdGet({
    avatarId,
    motionId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Motion
   * モーションを更新
   * @returns AvatarMotionResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdPatch({
    avatarId,
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Motion
   * モーションを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdDelete({
    avatarId,
    motionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Motion Formats
   * モーションの全フォーマットを一覧取得
   * @returns MotionFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarMotionFormatsApiV1AvatarsAvatarIdMotionsMotionIdFormatsGet({
    avatarId,
    motionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Motion Format
   * モーションにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsPost({
    avatarId,
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Motion Format
   * 特定のフォーマットを取得
   * @returns MotionFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypeGet({
    avatarId,
    motionId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Motion Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypePatch({
    avatarId,
    motionId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Motion Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypeDelete({
    avatarId,
    motionId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarsService.ts
var AvatarsService = class {
  /**
   * List Avatars
   * @returns AvatarListResponse Successful Response
   * @throws ApiError
   */
  static listAvatarsApiV1AvatarsGet({
    modelType,
    gender,
    ageRating,
    country,
    publishScope,
    filterByOwner = false,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars",
      query: {
        "model_type": modelType,
        "gender": gender,
        "age_rating": ageRating,
        "country": country,
        "publish_scope": publishScope,
        "filter_by_owner": filterByOwner,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar
   * @returns AvatarResponse Successful Response
   * @throws ApiError
   */
  static createAvatarApiV1AvatarsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatars
   * 複数のアバターを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarsApiV1AvatarsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar
   * @returns AvatarResponse Successful Response
   * @throws ApiError
   */
  static getAvatarApiV1AvatarsAvatarIdGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar
   * @returns AvatarResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarApiV1AvatarsAvatarIdPatch({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarApiV1AvatarsAvatarIdDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Avatar Ai Usage
   * アバターの参照アセットからAI使用レベルをサジェスト
   * @returns AvatarAiUsage Successful Response
   * @throws ApiError
   */
  static suggestAvatarAiUsageApiV1AvatarsAvatarIdSuggestAiUsagePost({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/suggest-ai-usage",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Recommend Voices
   * アバターに相性の良いVoiceをおすすめ順で返す
   *
   * data_source=official, publish_scope=publicのVoiceのみが対象
   * @returns RecommendationResponse Successful Response
   * @throws ApiError
   */
  static recommendVoicesApiV1AvatarsAvatarIdRecommendVoicesPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/recommend-voices",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Recommend Settings
   * アバターに相性の良いSettingsをおすすめ順で返す
   *
   * data_source=official, publish_scope=publicのSettingsのみが対象
   * @returns RecommendationResponse Successful Response
   * @throws ApiError
   */
  static recommendSettingsApiV1AvatarsAvatarIdRecommendSettingsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/recommend-settings",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Copy Avatar Expressions To Avatar
   * アバターの表現を別のアバターにコピー
   * @returns SimpleCopyEmotionsResponse Successful Response
   * @throws ApiError
   */
  static copyAvatarExpressionsToAvatarApiV1AvatarsSourceAvatarIdCopyExpressionsToAvatarTargetAvatarIdPost({
    sourceAvatarId,
    targetAvatarId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{source_avatar_id}/copy-expressions-to-avatar/{target_avatar_id}",
      path: {
        "source_avatar_id": sourceAvatarId,
        "target_avatar_id": targetAvatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Copy Avatar Motions To Avatar
   * アバターのモーションを別のアバターにコピー
   * @returns SimpleCopyMotionsResponse Successful Response
   * @throws ApiError
   */
  static copyAvatarMotionsToAvatarApiV1AvatarsSourceAvatarIdCopyMotionsToAvatarTargetAvatarIdPost({
    sourceAvatarId,
    targetAvatarId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{source_avatar_id}/copy-motions-to-avatar/{target_avatar_id}",
      path: {
        "source_avatar_id": sourceAvatarId,
        "target_avatar_id": targetAvatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Duplicate Avatar
   * アバターを複製（すべてのサブコレクションをコピー）
   * @returns DuplicateResponse Successful Response
   * @throws ApiError
   */
  static duplicateAvatarApiV1AvatarsAvatarIdDuplicatePost({
    avatarId,
    newAvatarId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/duplicate",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "new_avatar_id": newAvatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarTemplatesService.ts
var AvatarTemplatesService = class {
  /**
   * Promote Avatar To Template
   * @returns AvatarTemplateResponse Successful Response
   * @throws ApiError
   */
  static promoteAvatarToTemplateApiV1MarketplaceAvatarTemplatesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/avatar-templates",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Templates
   * @returns AvatarTemplateListResponse Successful Response
   * @throws ApiError
   */
  static listAvatarTemplatesApiV1MarketplaceAvatarTemplatesGet({
    sourceEntityId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-templates",
      query: {
        "source_entity_id": sourceEntityId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Template
   * @returns AvatarTemplateResponse Successful Response
   * @throws ApiError
   */
  static getAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdGet({
    templateId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Template
   * @returns AvatarTemplateResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdPatch({
    templateId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/avatar-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Template
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdDelete({
    templateId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/avatar-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Fork Avatar Template
   * @returns any Successful Response
   * @throws ApiError
   */
  static forkAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdForkPost({
    templateId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/avatar-templates/{template_id}/fork",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Template Subcollection
   * @returns any Successful Response
   * @throws ApiError
   */
  static getTemplateSubcollectionApiV1MarketplaceAvatarTemplatesTemplateIdSubcollectionsSubcollectionNameGet({
    templateId,
    subcollectionName
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-templates/{template_id}/subcollections/{subcollection_name}",
      path: {
        "template_id": templateId,
        "subcollection_name": subcollectionName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Template Subcollection Doc
   * @returns any Successful Response
   * @throws ApiError
   */
  static getTemplateSubcollectionDocApiV1MarketplaceAvatarTemplatesTemplateIdSubcollectionsSubcollectionNameDocIdGet({
    templateId,
    subcollectionName,
    docId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-templates/{template_id}/subcollections/{subcollection_name}/{doc_id}",
      path: {
        "template_id": templateId,
        "subcollection_name": subcollectionName,
        "doc_id": docId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CacheMetadataService.ts
var CacheMetadataService = class {
  /**
   * Get Cache Metadata
   * @returns CacheMetadataResponse Successful Response
   * @throws ApiError
   */
  static getCacheMetadataApiV1CharactersCharacterIdCacheMetadataGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/cache-metadata",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upsert Cache Metadata
   * @returns CacheMetadataResponse Successful Response
   * @throws ApiError
   */
  static upsertCacheMetadataApiV1CharactersCharacterIdCacheMetadataPut({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/cache-metadata",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Cache Metadata
   * @returns void
   * @throws ApiError
   */
  static deleteCacheMetadataApiV1CharactersCharacterIdCacheMetadataDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/cache-metadata",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Cache Status
   * インメモリキャッシュ状態を取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static getCacheStatusApiV1CharactersCharacterIdCacheMetadataStatusGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/cache-metadata/status",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Invalidate Cache
   * キャッシュを即座に無効化
   * @returns void
   * @throws ApiError
   */
  static invalidateCacheApiV1CharactersCharacterIdCacheMetadataInvalidateDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/cache-metadata/invalidate",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterAbilitiesService.ts
var CharacterAbilitiesService = class {
  /**
   * Create Abilities
   * キャラクターの能力情報を作成
   * @returns CharacterAbilitiesResponse Successful Response
   * @throws ApiError
   */
  static createAbilitiesApiV1CharactersCharacterIdAbilitiesPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/abilities",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Abilities
   * キャラクターの能力情報を取得
   * @returns CharacterAbilitiesResponse Successful Response
   * @throws ApiError
   */
  static getAbilitiesApiV1CharactersCharacterIdAbilitiesGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/abilities",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Abilities
   * キャラクターの能力情報を更新
   * @returns CharacterAbilitiesResponse Successful Response
   * @throws ApiError
   */
  static updateAbilitiesApiV1CharactersCharacterIdAbilitiesPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/abilities",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Abilities
   * キャラクターの能力情報を削除
   * @returns void
   * @throws ApiError
   */
  static deleteAbilitiesApiV1CharactersCharacterIdAbilitiesDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/abilities",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterActionsService.ts
var CharacterActionsService = class {
  /**
   * Create Action
   * アクションデータを作成
   * @returns CharacterActionResponse Successful Response
   * @throws ApiError
   */
  static createActionApiV1CharactersCharacterIdActionsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/actions",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Actions
   * キャラクターの全アクションデータを取得
   * @returns CharacterActionListResponse Successful Response
   * @throws ApiError
   */
  static listActionsApiV1CharactersCharacterIdActionsGet({
    characterId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions",
      path: {
        "character_id": characterId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Top Level Actions
   * トップレベルアクションのみ取得
   * @returns CharacterActionListResponse Successful Response
   * @throws ApiError
   */
  static listTopLevelActionsApiV1CharactersCharacterIdActionsTopLevelGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions/top-level",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Child Actions
   * 子アクションを取得
   * @returns CharacterActionListResponse Successful Response
   * @throws ApiError
   */
  static listChildActionsApiV1CharactersCharacterIdActionsActionIdChildrenGet({
    characterId,
    actionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions/{action_id}/children",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Action Tree
   * アクションのツリー構造を取得
   * @returns CharacterActionTreeResponse Successful Response
   * @throws ApiError
   */
  static getActionTreeApiV1CharactersCharacterIdActionsActionIdTreeGet({
    characterId,
    actionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions/{action_id}/tree",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Action
   * アクションデータを取得
   * @returns CharacterActionResponse Successful Response
   * @throws ApiError
   */
  static getActionApiV1CharactersCharacterIdActionsActionIdGet({
    characterId,
    actionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions/{action_id}",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Action
   * アクションデータを更新
   * @returns CharacterActionResponse Successful Response
   * @throws ApiError
   */
  static updateActionApiV1CharactersCharacterIdActionsActionIdPatch({
    characterId,
    actionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/actions/{action_id}",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Action
   * アクションデータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteActionApiV1CharactersCharacterIdActionsActionIdDelete({
    characterId,
    actionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/actions/{action_id}",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Create Actions
   * アクションデータを一括作成
   * @returns CharacterActionListResponse Successful Response
   * @throws ApiError
   */
  static batchCreateActionsApiV1CharactersCharacterIdActionsBatchPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/actions/batch",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterBackgroundDetailsService.ts
var CharacterBackgroundDetailsService = class {
  /**
   * Create Background Details
   * キャラクターの背景詳細を作成
   * @returns CharacterBackgroundDetailsResponse Successful Response
   * @throws ApiError
   */
  static createBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/background_details",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Background Details
   * キャラクターの背景詳細を取得
   * @returns CharacterBackgroundDetailsResponse Successful Response
   * @throws ApiError
   */
  static getBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/background_details",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Background Details
   * キャラクターの背景詳細を更新
   * @returns CharacterBackgroundDetailsResponse Successful Response
   * @throws ApiError
   */
  static updateBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/background_details",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Background Details
   * キャラクターの背景詳細を削除
   * @returns void
   * @throws ApiError
   */
  static deleteBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/background_details",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterBasicInfoService.ts
var CharacterBasicInfoService = class {
  /**
   * Create Basic Info
   * キャラクターの基本情報を作成
   * @returns CharacterBasicInfoResponse Successful Response
   * @throws ApiError
   */
  static createBasicInfoApiV1CharactersCharacterIdBasicInfoPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/basic_info",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Basic Info
   * キャラクターの基本情報を取得
   * @returns CharacterBasicInfoResponse Successful Response
   * @throws ApiError
   */
  static getBasicInfoApiV1CharactersCharacterIdBasicInfoGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/basic_info",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Basic Info
   * キャラクターの基本情報を更新
   * @returns CharacterBasicInfoResponse Successful Response
   * @throws ApiError
   */
  static updateBasicInfoApiV1CharactersCharacterIdBasicInfoPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/basic_info",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Basic Info
   * キャラクターの基本情報を削除
   * @returns void
   * @throws ApiError
   */
  static deleteBasicInfoApiV1CharactersCharacterIdBasicInfoDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/basic_info",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterDailyLifeService.ts
var CharacterDailyLifeService = class {
  /**
   * Create Daily Life
   * キャラクターの日常生活情報を作成
   * @returns CharacterDailyLifeResponse Successful Response
   * @throws ApiError
   */
  static createDailyLifeApiV1CharactersCharacterIdDailyLifePost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/daily_life",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Daily Life
   * キャラクターの日常生活情報を取得
   * @returns CharacterDailyLifeResponse Successful Response
   * @throws ApiError
   */
  static getDailyLifeApiV1CharactersCharacterIdDailyLifeGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/daily_life",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Daily Life
   * キャラクターの日常生活情報を更新
   * @returns CharacterDailyLifeResponse Successful Response
   * @throws ApiError
   */
  static updateDailyLifeApiV1CharactersCharacterIdDailyLifePatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/daily_life",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Daily Life
   * キャラクターの日常生活情報を削除
   * @returns void
   * @throws ApiError
   */
  static deleteDailyLifeApiV1CharactersCharacterIdDailyLifeDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/daily_life",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterEmotionsService.ts
var CharacterEmotionsService = class {
  /**
   * List Character Emotions
   * キャラクターの感情設定一覧を取得
   * @returns CharacterEmotionListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterEmotionsApiV1CharactersCharacterIdEmotionsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/emotions",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Character Emotion
   * キャラクターの感情設定を作成
   * @returns CharacterEmotionResponse Successful Response
   * @throws ApiError
   */
  static createCharacterEmotionApiV1CharactersCharacterIdEmotionsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/emotions",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Emotion
   * キャラクターの特定の感情設定を取得
   * @returns CharacterEmotionResponse Successful Response
   * @throws ApiError
   */
  static getCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdGet({
    characterId,
    emotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/emotions/{emotion_id}",
      path: {
        "character_id": characterId,
        "emotion_id": emotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Emotion
   * キャラクターの感情設定を更新
   * @returns CharacterEmotionResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdPut({
    characterId,
    emotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/emotions/{emotion_id}",
      path: {
        "character_id": characterId,
        "emotion_id": emotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Emotion
   * キャラクターの感情設定を削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdDelete({
    characterId,
    emotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/emotions/{emotion_id}",
      path: {
        "character_id": characterId,
        "emotion_id": emotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Create Character Emotions
   * キャラクターの感情設定を一括作成
   * @returns CharacterEmotionListResponse Successful Response
   * @throws ApiError
   */
  static batchCreateCharacterEmotionsApiV1CharactersCharacterIdEmotionsBatchPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/emotions/batch",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Emotion Ids
   * キャラクターが持つemotion_idのリストを取得
   * @returns CharacterEmotionIdsResponse Successful Response
   * @throws ApiError
   */
  static getCharacterEmotionIdsApiV1CharactersCharacterIdEmotionsIdsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/emotions/ids",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterEquipmentService.ts
var CharacterEquipmentService = class {
  /**
   * Create Equipment
   * キャラクターに装備を追加
   * @returns CharacterEquipmentResponse Successful Response
   * @throws ApiError
   */
  static createEquipmentApiV1CharactersCharacterIdEquipmentPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/equipment",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Equipment
   * キャラクターの装備一覧を取得
   * @returns CharacterEquipmentListResponse Successful Response
   * @throws ApiError
   */
  static listEquipmentApiV1CharactersCharacterIdEquipmentGet({
    characterId,
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/equipment",
      path: {
        "character_id": characterId
      },
      query: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Equipment
   * 装備を1件取得
   * @returns CharacterEquipmentResponse Successful Response
   * @throws ApiError
   */
  static getEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdGet({
    characterId,
    equipmentId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/equipment/{equipment_id}",
      path: {
        "character_id": characterId,
        "equipment_id": equipmentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Equipment
   * 装備を更新
   * @returns CharacterEquipmentResponse Successful Response
   * @throws ApiError
   */
  static updateEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdPatch({
    characterId,
    equipmentId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/equipment/{equipment_id}",
      path: {
        "character_id": characterId,
        "equipment_id": equipmentId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Equipment
   * 装備を解除（ドキュメント削除）
   * @returns void
   * @throws ApiError
   */
  static deleteEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdDelete({
    characterId,
    equipmentId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/equipment/{equipment_id}",
      path: {
        "character_id": characterId,
        "equipment_id": equipmentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterInstancesService.ts
var CharacterInstancesService = class {
  /**
   * Create Character Instance
   * @returns CharacterInstanceResponse Successful Response
   * @throws ApiError
   */
  static createCharacterInstanceApiV1MarketplaceCharacterInstancesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/character-instances",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Character Instances
   * @returns CharacterInstanceListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterInstancesApiV1MarketplaceCharacterInstancesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-instances",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Instance
   * @returns CharacterInstanceResponse Successful Response
   * @throws ApiError
   */
  static getCharacterInstanceApiV1MarketplaceCharacterInstancesInstanceIdGet({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Instance
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterInstanceApiV1MarketplaceCharacterInstancesInstanceIdDelete({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/character-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Instance To Latest
   * @returns CharacterInstanceResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterInstanceToLatestApiV1MarketplaceCharacterInstancesInstanceIdUpdatePost({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/character-instances/{instance_id}/update",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Fork Character Instance
   * @returns any Successful Response
   * @throws ApiError
   */
  static forkCharacterInstanceApiV1MarketplaceCharacterInstancesInstanceIdForkPost({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/character-instances/{instance_id}/fork",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterInventoryService.ts
var CharacterInventoryService = class {
  /**
   * List Character Inventory
   * キャラクターの所持品一覧を取得
   * @returns CharacterInventoryListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterInventoryApiV1CharactersCharacterIdInventoryGet({
    characterId,
    itemCategory,
    accessibleOnly = false
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/inventory",
      path: {
        "character_id": characterId
      },
      query: {
        "item_category": itemCategory,
        "accessible_only": accessibleOnly
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Character Inventory Item
   * キャラクターの所持品を作成
   * @returns CharacterInventoryResponse Successful Response
   * @throws ApiError
   */
  static createCharacterInventoryItemApiV1CharactersCharacterIdInventoryPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/inventory",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Inventory Item
   * キャラクターの特定の所持品を取得
   * @returns CharacterInventoryResponse Successful Response
   * @throws ApiError
   */
  static getCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdGet({
    characterId,
    inventoryId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/inventory/{inventory_id}",
      path: {
        "character_id": characterId,
        "inventory_id": inventoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Inventory Item
   * キャラクターの所持品を更新
   * @returns CharacterInventoryResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdPatch({
    characterId,
    inventoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/inventory/{inventory_id}",
      path: {
        "character_id": characterId,
        "inventory_id": inventoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Inventory Item
   * キャラクターの所持品を削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdDelete({
    characterId,
    inventoryId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/inventory/{inventory_id}",
      path: {
        "character_id": characterId,
        "inventory_id": inventoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Sync From Entitlement
   * Entitlementから CharacterInventory を作成（デフォルトアクション付き）
   * @returns CharacterInventoryResponse Successful Response
   * @throws ApiError
   */
  static syncFromEntitlementApiV1CharactersCharacterIdInventorySyncFromEntitlementPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/inventory/sync-from-entitlement",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterMotionsService.ts
var CharacterMotionsService = class {
  /**
   * List Character Motions
   * キャラクターのモーション設定一覧を取得
   * @returns CharacterMotionListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterMotionsApiV1CharactersCharacterIdMotionsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/motions",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Character Motion
   * キャラクターのモーション設定を作成
   * @returns CharacterMotionResponse Successful Response
   * @throws ApiError
   */
  static createCharacterMotionApiV1CharactersCharacterIdMotionsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/motions",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Motion Ids
   * キャラクターが持つmotion_idのリストを取得
   * @returns CharacterMotionIdsResponse Successful Response
   * @throws ApiError
   */
  static getCharacterMotionIdsApiV1CharactersCharacterIdMotionsIdsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/motions/ids",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Motion
   * キャラクターの特定のモーション設定を取得
   * @returns CharacterMotionResponse Successful Response
   * @throws ApiError
   */
  static getCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdGet({
    characterId,
    motionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/motions/{motion_id}",
      path: {
        "character_id": characterId,
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Motion
   * キャラクターのモーション設定を更新
   * @returns CharacterMotionResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdPut({
    characterId,
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/motions/{motion_id}",
      path: {
        "character_id": characterId,
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Motion
   * キャラクターのモーション設定を削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdDelete({
    characterId,
    motionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/motions/{motion_id}",
      path: {
        "character_id": characterId,
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Create Character Motions
   * キャラクターのモーション設定を一括作成
   * @returns CharacterMotionListResponse Successful Response
   * @throws ApiError
   */
  static batchCreateCharacterMotionsApiV1CharactersCharacterIdMotionsBatchPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/motions/batch",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterPersonalityParamsService.ts
var CharacterPersonalityParamsService = class {
  /**
   * List Character Personality Params
   * キャラクターのパーソナリティパラメータ一覧を取得
   * @returns CharacterPersonalityParamsListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/personality-params",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Character Personality Params
   * キャラクターのパーソナリティパラメータを作成
   * @returns CharacterPersonalityParamsResponse Successful Response
   * @throws ApiError
   */
  static createCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/personality-params",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Personality Params
   * キャラクターの特定のパーソナリティパラメータを取得
   * @returns CharacterPersonalityParamsResponse Successful Response
   * @throws ApiError
   */
  static getCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyGet({
    characterId,
    key
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/personality-params/{key}",
      path: {
        "character_id": characterId,
        "key": key
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Personality Params
   * キャラクターのパーソナリティパラメータを更新
   * @returns CharacterPersonalityParamsResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyPatch({
    characterId,
    key,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/personality-params/{key}",
      path: {
        "character_id": characterId,
        "key": key
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Personality Params
   * キャラクターのパーソナリティパラメータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyDelete({
    characterId,
    key
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/personality-params/{key}",
      path: {
        "character_id": characterId,
        "key": key
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterPhysicalIdentityService.ts
var CharacterPhysicalIdentityService = class {
  /**
   * Create Physical Identity
   * キャラクターの身体的自認情報を作成
   * @returns CharacterPhysicalIdentityResponse Successful Response
   * @throws ApiError
   */
  static createPhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/physical_identity",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Physical Identity
   * キャラクターの身体的自認情報を取得
   * @returns CharacterPhysicalIdentityResponse Successful Response
   * @throws ApiError
   */
  static getPhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/physical_identity",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Physical Identity
   * キャラクターの身体的自認情報を更新
   * @returns CharacterPhysicalIdentityResponse Successful Response
   * @throws ApiError
   */
  static updatePhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/physical_identity",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Physical Identity
   * キャラクターの身体的自認情報を削除
   * @returns void
   * @throws ApiError
   */
  static deletePhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/physical_identity",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterPreferencesService.ts
var CharacterPreferencesService = class {
  /**
   * Create Preferences
   * キャラクターの好み・嗜好情報を作成
   * @returns CharacterPreferencesResponse Successful Response
   * @throws ApiError
   */
  static createPreferencesApiV1CharactersCharacterIdPreferencesPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/preferences",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Preferences
   * キャラクターの好み・嗜好情報を取得
   * @returns CharacterPreferencesResponse Successful Response
   * @throws ApiError
   */
  static getPreferencesApiV1CharactersCharacterIdPreferencesGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/preferences",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Preferences
   * キャラクターの好み・嗜好情報を更新
   * @returns CharacterPreferencesResponse Successful Response
   * @throws ApiError
   */
  static updatePreferencesApiV1CharactersCharacterIdPreferencesPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/preferences",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Preferences
   * キャラクターの好み・嗜好情報を削除
   * @returns void
   * @throws ApiError
   */
  static deletePreferencesApiV1CharactersCharacterIdPreferencesDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/preferences",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterProfileGenerationService.ts
var CharacterProfileGenerationService = class {
  /**
   * キャラクタープロファイルを一括生成
   * キャラクターの関連情報からプロファイル情報を一括生成します。save=trueで各サブコレクションに保存します。
   * @returns GenerateProfileResponse Successful Response
   * @throws ApiError
   */
  static generateCharacterProfileApiV1CharactersCharacterIdGenerateProfilePost({
    characterId,
    requestBody,
    save = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/generate-profile",
      path: {
        "character_id": characterId
      },
      query: {
        "save": save
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharactersService.ts
var CharactersService = class {
  /**
   * Create Character
   * キャラクターを新規作成
   *
   * multipart/form-data 形式でリクエストを受け付けます。
   * 複雑なフィールド（tags, locales, emotional_params等）はJSON文字列で送信してください。
   * @returns CharacterResponse Successful Response
   * @throws ApiError
   */
  static createCharacterApiV1CharactersPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Characters
   * キャラクター一覧を取得（カーソルベースページネーション）
   * @returns CharacterListResponse Successful Response
   * @throws ApiError
   */
  static listCharactersApiV1CharactersGet({
    filterByOwner = false,
    publishScope,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters",
      query: {
        "filter_by_owner": filterByOwner,
        "publish_scope": publishScope,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character
   * キャラクター情報を取得
   * @returns CharacterResponse Successful Response
   * @throws ApiError
   */
  static getCharacterApiV1CharactersCharacterIdGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character
   * キャラクター情報を更新
   * @returns CharacterResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterApiV1CharactersCharacterIdPatch({
    characterId,
    formData
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}",
      path: {
        "character_id": characterId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character
   * キャラクターを削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterApiV1CharactersCharacterIdDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Duplicate Character
   * キャラクターを複製（chat_logs以外のサブコレクションをコピー）
   * @returns DuplicateResponse Successful Response
   * @throws ApiError
   */
  static duplicateCharacterApiV1CharactersCharacterIdDuplicatePost({
    characterId,
    newCharacterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/duplicate",
      path: {
        "character_id": characterId
      },
      query: {
        "new_character_id": newCharacterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Character Ai Usage
   * キャラクターの参照アセットからAI使用レベルをサジェスト
   * @returns CharacterAiUsage Successful Response
   * @throws ApiError
   */
  static suggestCharacterAiUsageApiV1CharactersCharacterIdSuggestAiUsagePost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/suggest-ai-usage",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Characters
   * 複数のキャラクターを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetCharactersApiV1CharactersBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Auto Create Character
   * キャラクターを自動生成
   * @returns CharacterResponse Successful Response
   * @throws ApiError
   */
  static autoCreateCharacterApiV1CharactersAutoCreatePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/auto-create",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterTemplatesService.ts
var CharacterTemplatesService = class {
  /**
   * Promote Character To Template
   * @returns CharacterTemplateResponse Successful Response
   * @throws ApiError
   */
  static promoteCharacterToTemplateApiV1MarketplaceCharacterTemplatesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/character-templates",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Character Templates
   * @returns CharacterTemplateListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterTemplatesApiV1MarketplaceCharacterTemplatesGet({
    sourceEntityId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-templates",
      query: {
        "source_entity_id": sourceEntityId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Template
   * @returns CharacterTemplateResponse Successful Response
   * @throws ApiError
   */
  static getCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdGet({
    templateId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Template
   * @returns CharacterTemplateResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdPatch({
    templateId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/character-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Template
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdDelete({
    templateId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/character-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Fork Character Template
   * @returns any Successful Response
   * @throws ApiError
   */
  static forkCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdForkPost({
    templateId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/character-templates/{template_id}/fork",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Template Subcollection
   * @returns any Successful Response
   * @throws ApiError
   */
  static getTemplateSubcollectionApiV1MarketplaceCharacterTemplatesTemplateIdSubcollectionsSubcollectionNameGet({
    templateId,
    subcollectionName
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-templates/{template_id}/subcollections/{subcollection_name}",
      path: {
        "template_id": templateId,
        "subcollection_name": subcollectionName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Template Subcollection Doc
   * @returns any Successful Response
   * @throws ApiError
   */
  static getTemplateSubcollectionDocApiV1MarketplaceCharacterTemplatesTemplateIdSubcollectionsSubcollectionNameDocIdGet({
    templateId,
    subcollectionName,
    docId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-templates/{template_id}/subcollections/{subcollection_name}/{doc_id}",
      path: {
        "template_id": templateId,
        "subcollection_name": subcollectionName,
        "doc_id": docId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/ContentProtectionService.ts
var ContentProtectionService = class {
  /**
   * Get Key
   * 復号鍵を取得する（Firebase認証必須・レート制限あり）
   *
   * クライアントはこのエンドポイントからper-asset鍵を取得し、
   * ダウンロードした保護済みファイルをクライアント側で復号する。
   * nonceはファイルの先頭12バイトに埋め込まれているため、nonce_prefixは不要。
   * @returns KeyResponse Successful Response
   * @throws ApiError
   */
  static getKeyApiV1ContentProtectionKeysKeyIdGet({
    keyId,
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/content-protection/keys/{key_id}",
      path: {
        "key_id": keyId
      },
      query: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CreatorsService.ts
var CreatorsService = class {
  /**
   * Create Creator
   * クリエイターを作成
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static createCreatorApiV1CreatorsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/creators",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Creator
   * クリエイターを取得
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static getCreatorApiV1CreatorsCreatorIdGet({
    creatorId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/creators/{creator_id}",
      path: {
        "creator_id": creatorId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Creator
   * クリエイターを更新
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static updateCreatorApiV1CreatorsCreatorIdPatch({
    creatorId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/creators/{creator_id}",
      path: {
        "creator_id": creatorId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Creator
   * クリエイターを削除
   * @returns void
   * @throws ApiError
   */
  static deleteCreatorApiV1CreatorsCreatorIdDelete({
    creatorId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/creators/{creator_id}",
      path: {
        "creator_id": creatorId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Creator By User Id
   * ユーザーIDでクリエイターを取得
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static getCreatorByUserIdApiV1CreatorsByUserUserIdGet({
    userId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/creators/by-user/{user_id}",
      path: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Creator By Group Id
   * グループIDでクリエイターを取得
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static getCreatorByGroupIdApiV1CreatorsByGroupGroupIdGet({
    groupId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/creators/by-group/{group_id}",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/DefaultService.ts
var DefaultService = class {
  /**
   * Healthcheck
   * @returns any Successful Response
   * @throws ApiError
   */
  static healthcheckHealthcheckGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/healthcheck"
    });
  }
  /**
   * Root
   * @returns any Successful Response
   * @throws ApiError
   */
  static rootGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/"
    });
  }
};

// src/generated/services/EmotionConfigService.ts
var EmotionConfigService = class {
  /**
   * Get Emotion Config
   * EmotionConfigを取得
   * @returns EmotionConfigResponse Successful Response
   * @throws ApiError
   */
  static getEmotionConfigApiV1EmotionConfigGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/emotion-config"
    });
  }
  /**
   * Update Emotion Config
   * EmotionConfigを更新
   * @returns EmotionConfigResponse Successful Response
   * @throws ApiError
   */
  static updateEmotionConfigApiV1EmotionConfigPut({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/emotion-config",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Emotion Config
   * EmotionConfigを作成
   * @returns EmotionConfigResponse Successful Response
   * @throws ApiError
   */
  static createEmotionConfigApiV1EmotionConfigPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotion-config",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Emotion Config
   * EmotionConfigを削除
   * @returns void
   * @throws ApiError
   */
  static deleteEmotionConfigApiV1EmotionConfigDelete() {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/emotion-config"
    });
  }
  /**
   * Init Mood Verbalizer
   * デフォルトのMoodVerbalizerConfigをEmotionConfigに追加
   * @returns EmotionConfigResponse Successful Response
   * @throws ApiError
   */
  static initMoodVerbalizerApiV1EmotionConfigMoodVerbalizerInitPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotion-config/mood-verbalizer/init"
    });
  }
  /**
   * Resolve Expression
   * 表現解決: emotion_idから利用可能な表現を解決
   * @returns ResolveExpressionResponse Successful Response
   * @throws ApiError
   */
  static resolveExpressionApiV1EmotionConfigResolvePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotion-config/resolve",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionFormatsBlendshapeService.ts
var EmotionFormatsBlendshapeService = class {
  /**
   * Create Avatar Blend Shape
   * アバターの表現にBlendShapeフォーマットを追加
   * @returns BlendShapeExpressionData_Output Successful Response
   * @throws ApiError
   */
  static createAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapePost({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/blend_shape",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Blend Shape
   * アバターの表現のBlendShapeフォーマットを取得
   * @returns BlendShapeExpressionData_Output Successful Response
   * @throws ApiError
   */
  static getAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapeGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/blend_shape",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Blend Shape
   * アバターの表現のBlendShapeフォーマットを更新
   * @returns BlendShapeExpressionData_Output Successful Response
   * @throws ApiError
   */
  static updateAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapePatch({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/blend_shape",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Blend Shape
   * アバターの表現のBlendShapeフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapeDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/blend_shape",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionFormatsFaceIconService.ts
var EmotionFormatsFaceIconService = class {
  /**
   * Create Avatar Face Icon
   * アバターの表現にFaceIconフォーマットを追加（アセットID参照）
   * @returns FaceIconExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconPost({
    avatarId,
    avatarExpressionId,
    compositeImageAssetId,
    bodyImageAssetId,
    eyelidImageAssetId,
    mouthImageAssetId,
    holdDuration = 2,
    blockMouth = false,
    blockBlink = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "composite_image_asset_id": compositeImageAssetId,
        "body_image_asset_id": bodyImageAssetId,
        "eyelid_image_asset_id": eyelidImageAssetId,
        "mouth_image_asset_id": mouthImageAssetId,
        "hold_duration": holdDuration,
        "block_mouth": blockMouth,
        "block_blink": blockBlink
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Face Icon
   * アバターの表現のFaceIconフォーマットを取得
   * @returns FaceIconExpressionData Successful Response
   * @throws ApiError
   */
  static getAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Face Icon
   * アバターの表現のFaceIconフォーマットを更新（アセットID参照）
   * @returns FaceIconExpressionData Successful Response
   * @throws ApiError
   */
  static updateAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconPatch({
    avatarId,
    avatarExpressionId,
    compositeImageAssetId,
    bodyImageAssetId,
    eyelidImageAssetId,
    mouthImageAssetId,
    holdDuration,
    blockMouth,
    blockBlink
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "composite_image_asset_id": compositeImageAssetId,
        "body_image_asset_id": bodyImageAssetId,
        "eyelid_image_asset_id": eyelidImageAssetId,
        "mouth_image_asset_id": mouthImageAssetId,
        "hold_duration": holdDuration,
        "block_mouth": blockMouth,
        "block_blink": blockBlink
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Face Icon
   * アバターの表現のFaceIconフォーマットを削除（asset_id参照のみ削除、Asset自体は削除しない）
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Face Icon With Files
   * アバターの表現にFaceIconフォーマットを追加（画像ファイルアップロードしてアセット作成も行う統合版）
   * @returns FaceIconExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarFaceIconWithFilesApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconFileUploadPost({
    avatarId,
    avatarExpressionId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon/file_upload",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionFormatsGlbService.ts
var EmotionFormatsGlbService = class {
  /**
   * Create Avatar Glb Expression
   * アバターの表現にGLBフォーマットを追加
   * @returns GLBExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbPost({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Glb Expression
   * アバターの表現のGLBフォーマットを取得
   * @returns GLBExpressionData Successful Response
   * @throws ApiError
   */
  static getAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Glb Expression
   * アバターの表現のGLBフォーマットを更新
   * @returns GLBExpressionData Successful Response
   * @throws ApiError
   */
  static updateAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbPatch({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Glb Expression
   * アバターの表現のGLBフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionFormatsSpriteService.ts
var EmotionFormatsSpriteService = class {
  /**
   * Create Avatar Sprite
   * アバターの表現にSpriteフォーマットを追加（アセットID参照）
   * @returns SpriteExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpritePost({
    avatarId,
    avatarExpressionId,
    posture,
    compositeImageAssetId,
    bodyImageAssetId,
    eyelidImageAssetId,
    mouthImageAssetId,
    holdDuration = 2,
    blockMouth = false,
    blockBlink = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "posture": posture,
        "composite_image_asset_id": compositeImageAssetId,
        "body_image_asset_id": bodyImageAssetId,
        "eyelid_image_asset_id": eyelidImageAssetId,
        "mouth_image_asset_id": mouthImageAssetId,
        "hold_duration": holdDuration,
        "block_mouth": blockMouth,
        "block_blink": blockBlink
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Sprite
   * アバターの表現のSpriteフォーマットを取得
   * @returns SpriteExpressionData Successful Response
   * @throws ApiError
   */
  static getAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Sprite
   * アバターの表現のSpriteフォーマットを更新（アセットID参照）
   * @returns SpriteExpressionData Successful Response
   * @throws ApiError
   */
  static updateAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpritePatch({
    avatarId,
    avatarExpressionId,
    posture,
    compositeImageAssetId,
    bodyImageAssetId,
    eyelidImageAssetId,
    mouthImageAssetId,
    holdDuration,
    blockMouth,
    blockBlink
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "posture": posture,
        "composite_image_asset_id": compositeImageAssetId,
        "body_image_asset_id": bodyImageAssetId,
        "eyelid_image_asset_id": eyelidImageAssetId,
        "mouth_image_asset_id": mouthImageAssetId,
        "hold_duration": holdDuration,
        "block_mouth": blockMouth,
        "block_blink": blockBlink
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Sprite
   * アバターの表現のSpriteフォーマットを削除（asset_id参照のみ削除、Asset自体は削除しない）
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Sprite With Files
   * アバターの表現にSpriteフォーマットを追加（画像ファイルアップロードしてアセット作成も行う統合版）
   * @returns SpriteExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarSpriteWithFilesApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteFileUploadPost({
    avatarId,
    avatarExpressionId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite/file_upload",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionsService.ts
var EmotionsService = class {
  /**
   * List Emotions
   * 感情の一覧取得・検索
   * @returns EmotionListResponse Successful Response
   * @throws ApiError
   */
  static listEmotionsApiV1EmotionsGet({
    q,
    dataSource,
    locale,
    prefer = "official",
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/emotions",
      query: {
        "q": q,
        "data_source": dataSource,
        "locale": locale,
        "prefer": prefer,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Emotion
   * 感情を作成
   * @returns EmotionResponse Successful Response
   * @throws ApiError
   */
  static createEmotionApiV1EmotionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Emotion
   * 感情を部分更新（管理者のみ）
   * @returns EmotionResponse Successful Response
   * @throws ApiError
   */
  static updateEmotionApiV1EmotionsEmotionIdPatch({
    emotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/emotions/{emotion_id}",
      path: {
        "emotion_id": emotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Emotion
   * 感情を削除（管理者のみ）
   * @returns void
   * @throws ApiError
   */
  static deleteEmotionApiV1EmotionsEmotionIdDelete({
    emotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/emotions/{emotion_id}",
      path: {
        "emotion_id": emotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Emotion By Id
   * IDで感情を取得
   * @returns EmotionResponse Successful Response
   * @throws ApiError
   */
  static getEmotionByIdApiV1EmotionsByIdEmotionIdGet({
    emotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/emotions/by-id/{emotion_id}",
      path: {
        "emotion_id": emotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Emotion By Name
   * 名前で感情を完全一致検索
   * @returns EmotionResponse Successful Response
   * @throws ApiError
   */
  static getEmotionByNameApiV1EmotionsByNameGet({
    name,
    locale,
    prefer = "official"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/emotions/by-name",
      query: {
        "name": name,
        "locale": locale,
        "prefer": prefer
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Emotions By Text
   * テキストから感情を提案（LLM使用）
   * @returns EmotionSuggestionResponse Successful Response
   * @throws ApiError
   */
  static suggestEmotionsByTextApiV1EmotionsSuggestByTextPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/suggest-by-text",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Find Nearest Emotions
   * VAD値で最近傍の感情を検索
   * @returns EmotionNeighborResponse Successful Response
   * @throws ApiError
   */
  static findNearestEmotionsApiV1EmotionsNearestPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/nearest",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Emotion Alias
   * 感情にエイリアスを追加
   * @returns SuccessResponse Successful Response
   * @throws ApiError
   */
  static addEmotionAliasApiV1EmotionsEmotionIdAliasesPost({
    emotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/{emotion_id}/aliases",
      path: {
        "emotion_id": emotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Remove Emotion Alias
   * 感情からエイリアスを削除
   * @returns void
   * @throws ApiError
   */
  static removeEmotionAliasApiV1EmotionsEmotionIdAliasesDelete({
    emotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/emotions/{emotion_id}/aliases",
      path: {
        "emotion_id": emotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Emotion From Text
   * テキストから感情を作成（VAD指定またはLLM推定）
   * @returns CreateFromTextResponse Successful Response
   * @throws ApiError
   */
  static createEmotionFromTextApiV1EmotionsCreateFromTextPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/create-from-text",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Emotions
   * 複数の感情を一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetEmotionsApiV1EmotionsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EquipmentMotionOverlaysService.ts
var EquipmentMotionOverlaysService = class {
  /**
   * Create Overlay
   * モーションオーバーレイを作成
   * @returns EquipmentMotionOverlayResponse Successful Response
   * @throws ApiError
   */
  static createOverlayApiV1AvatarsAvatarIdMotionOverlaysPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Overlays
   * モーションオーバーレイ一覧を取得
   * @returns EquipmentMotionOverlayListResponse Successful Response
   * @throws ApiError
   */
  static listOverlaysApiV1AvatarsAvatarIdMotionOverlaysGet({
    avatarId,
    outfitId,
    accessoryId,
    hairStyleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "outfit_id": outfitId,
        "accessory_id": accessoryId,
        "hair_style_id": hairStyleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Overlay
   * モーションオーバーレイを1件取得
   * @returns EquipmentMotionOverlayResponse Successful Response
   * @throws ApiError
   */
  static getOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdGet({
    avatarId,
    overlayId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays/{overlay_id}",
      path: {
        "avatar_id": avatarId,
        "overlay_id": overlayId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Overlay
   * モーションオーバーレイを更新
   * @returns EquipmentMotionOverlayResponse Successful Response
   * @throws ApiError
   */
  static updateOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdPatch({
    avatarId,
    overlayId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays/{overlay_id}",
      path: {
        "avatar_id": avatarId,
        "overlay_id": overlayId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Overlay
   * モーションオーバーレイを削除
   * @returns void
   * @throws ApiError
   */
  static deleteOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdDelete({
    avatarId,
    overlayId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays/{overlay_id}",
      path: {
        "avatar_id": avatarId,
        "overlay_id": overlayId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GaussianSplatAssetsService.ts
var GaussianSplatAssetsService = class {
  /**
   * Create Gaussian Splat Asset
   * Gaussian Splatアセットを作成（SPZ/PLY直接アップロード）
   *
   * SPZ/PLYファイルを直接アップロード。変換不要なので即完了。
   * splat_formatを省略するとファイル名の拡張子から自動判定。
   * @returns GaussianSplatAssetResponse Successful Response
   * @throws ApiError
   */
  static createGaussianSplatAssetApiV1GaussianSplatAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/gaussian-splat-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Gaussian Splat Asset Version
   * 既存Gaussian Splatアセットに新バージョンを追加
   * @returns GaussianSplatAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addGaussianSplatAssetVersionApiV1GaussianSplatAssetsGsIdVersionsPost({
    gsId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/versions",
      path: {
        "gs_id": gsId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Gaussian Splat Asset Versions
   * Gaussian Splatアセットのバージョン一覧を取得
   * @returns GaussianSplatAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listGaussianSplatAssetVersionsApiV1GaussianSplatAssetsGsIdVersionsGet({
    gsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/versions",
      path: {
        "gs_id": gsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Gaussian Splat Assets
   * Gaussian Splatアセットを検索
   * @returns GaussianSplatAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchGaussianSplatAssetsApiV1GaussianSplatAssetsSearchGet({
    ownerId,
    modelName,
    modelerName,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/search",
      query: {
        "owner_id": ownerId,
        "model_name": modelName,
        "modeler_name": modelerName,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Gaussian Splat Assets
   * 複数のGaussian Splatアセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetGaussianSplatAssetsApiV1GaussianSplatAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/gaussian-splat-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Gaussian Splat Asset
   * Gaussian Splatアセットの詳細情報を取得
   * @returns GaussianSplatAssetResponse Successful Response
   * @throws ApiError
   */
  static getGaussianSplatAssetApiV1GaussianSplatAssetsGsIdGet({
    gsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}",
      path: {
        "gs_id": gsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Gaussian Splat Asset
   * Gaussian Splatアセットのメタデータを更新（オーナーのみ）
   * @returns GaussianSplatAssetResponse Successful Response
   * @throws ApiError
   */
  static updateGaussianSplatAssetApiV1GaussianSplatAssetsGsIdPatch({
    gsId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/gaussian-splat-assets/{gs_id}",
      path: {
        "gs_id": gsId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Gaussian Splat Asset
   * Gaussian Splatアセットを削除（オーナーのみ、参照されている場合は削除不可）
   * @returns void
   * @throws ApiError
   */
  static deleteGaussianSplatAssetApiV1GaussianSplatAssetsGsIdDelete({
    gsId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/gaussian-splat-assets/{gs_id}",
      path: {
        "gs_id": gsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Gaussian Splat Asset Version
   * Gaussian Splatアセットの特定バージョンを取得
   * @returns GaussianSplatAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getGaussianSplatAssetVersionApiV1GaussianSplatAssetsGsIdVersionsVersionIdGet({
    gsId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/versions/{version_id}",
      path: {
        "gs_id": gsId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Gaussian Splat File Url
   * Gaussian SplatファイルのダウンロードURL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getGaussianSplatFileUrlApiV1GaussianSplatAssetsGsIdFileGet({
    gsId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/file",
      path: {
        "gs_id": gsId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Gaussian Splat Protected File
   * 保護済みGaussian Splatファイルのダウンロード情報を返す
   *
   * PLY形式: 頂点難読化 + zstd圧縮 + AES-256-GCM暗号化
   * SPZ形式: zstd圧縮 + AES-256-GCM暗号化（難読化なし）
   * @returns ProtectedFileResponse Successful Response
   * @throws ApiError
   */
  static getGaussianSplatProtectedFileApiV1GaussianSplatAssetsGsIdProtectedFileGet({
    gsId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/protected-file",
      path: {
        "gs_id": gsId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GlbAssetsService.ts
var GlbAssetsService = class {
  /**
   * Create Glb Asset
   * GLBアセットを作成（GLB直接アップロード）
   *
   * GLBファイルを直接アップロード。変換不要なので即完了（conversion_status=completed）。
   * @returns GLBAssetResponse Successful Response
   * @throws ApiError
   */
  static createGlbAssetApiV1GlbAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Glb From Gltf
   * glTFファイルからGLBアセットを作成（非同期変換）
   *
   * glTFファイルをアップロードし、バックグラウンドでGLBに変換。
   * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
   * @returns GLBAssetFromSourceResponse Successful Response
   * @throws ApiError
   */
  static createGlbFromGltfApiV1GlbAssetsFromGltfPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/from-gltf",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Glb From Fbx
   * FBXファイルからGLBアセットを作成（非同期変換）
   *
   * FBXファイルをアップロードし、バックグラウンドでGLBに変換。
   * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
   * @returns GLBAssetFromSourceResponse Successful Response
   * @throws ApiError
   */
  static createGlbFromFbxApiV1GlbAssetsFromFbxPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/from-fbx",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Glb From Obj
   * OBJファイルからGLBアセットを作成（非同期変換）
   *
   * OBJファイル（+ 任意のMTLファイル）をアップロードし、バックグラウンドでGLBに変換。
   * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
   * @returns GLBAssetFromSourceResponse Successful Response
   * @throws ApiError
   */
  static createGlbFromObjApiV1GlbAssetsFromObjPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/from-obj",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Glb Asset Version
   * 既存GLBアセットに新バージョンを追加（GLB直接）
   * @returns GLBAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addGlbAssetVersionApiV1GlbAssetsGlbIdVersionsPost({
    glbId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/{glb_id}/versions",
      path: {
        "glb_id": glbId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Glb Asset Versions
   * GLBアセットのバージョン一覧を取得
   * @returns GLBAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listGlbAssetVersionsApiV1GlbAssetsGlbIdVersionsGet({
    glbId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/versions",
      path: {
        "glb_id": glbId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Glb Assets
   * GLBアセットを検索
   * @returns GLBAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchGlbAssetsApiV1GlbAssetsSearchGet({
    ownerId,
    modelName,
    modelerName,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/search",
      query: {
        "owner_id": ownerId,
        "model_name": modelName,
        "modeler_name": modelerName,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Glb Assets
   * 複数のGLBアセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetGlbAssetsApiV1GlbAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Asset
   * GLBアセットの詳細情報を取得
   * @returns GLBAssetResponse Successful Response
   * @throws ApiError
   */
  static getGlbAssetApiV1GlbAssetsGlbIdGet({
    glbId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}",
      path: {
        "glb_id": glbId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Glb Asset
   * GLBアセットのメタデータを更新（オーナーのみ）
   * @returns GLBAssetResponse Successful Response
   * @throws ApiError
   */
  static updateGlbAssetApiV1GlbAssetsGlbIdPatch({
    glbId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/glb-assets/{glb_id}",
      path: {
        "glb_id": glbId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Glb Asset
   * GLBアセットを削除（オーナーのみ、参照されている場合は削除不可）
   * @returns void
   * @throws ApiError
   */
  static deleteGlbAssetApiV1GlbAssetsGlbIdDelete({
    glbId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/glb-assets/{glb_id}",
      path: {
        "glb_id": glbId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Asset Version
   * GLBアセットの特定バージョンを取得
   * @returns GLBAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getGlbAssetVersionApiV1GlbAssetsGlbIdVersionsVersionIdGet({
    glbId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/versions/{version_id}",
      path: {
        "glb_id": glbId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb File Url
   * GLBファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getGlbFileUrlApiV1GlbAssetsGlbIdFileGet({
    glbId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/file",
      path: {
        "glb_id": glbId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Original File Url
   * 原本ファイル（FBX/glTF/OBJ）のダウンロード用一時URL（Signed URL）を返す
   *
   * GLB直接アップロードの場合は404を返す（原本は存在しない）。
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getGlbOriginalFileUrlApiV1GlbAssetsGlbIdOriginalFileGet({
    glbId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/original-file",
      path: {
        "glb_id": glbId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Protected File
   * 保護済みGLBファイルのダウンロード情報を返す
   *
   * ファイルはメッシュ難読化 + zstd圧縮 + AES-256-GCM暗号化済み。
   * @returns ProtectedFileResponse Successful Response
   * @throws ApiError
   */
  static getGlbProtectedFileApiV1GlbAssetsGlbIdProtectedFileGet({
    glbId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/protected-file",
      path: {
        "glb_id": glbId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GroupBansService.ts
var GroupBansService = class {
  /**
   * Ban User
   * ユーザーをBAN（ADMIN以上）
   * @returns GroupBanResponse Successful Response
   * @throws ApiError
   */
  static banUserApiV1GroupsGroupIdBansPost({
    groupId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/bans",
      path: {
        "group_id": groupId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Bans
   * BANリスト（ADMIN以上）
   * @returns GroupBanListResponse Successful Response
   * @throws ApiError
   */
  static listBansApiV1GroupsGroupIdBansGet({
    groupId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/{group_id}/bans",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Unban User
   * BAN解除（ADMIN以上）
   * @returns void
   * @throws ApiError
   */
  static unbanUserApiV1GroupsGroupIdBansTargetUserIdDelete({
    groupId,
    targetUserId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/groups/{group_id}/bans/{target_user_id}",
      path: {
        "group_id": groupId,
        "target_user_id": targetUserId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GroupInvitesService.ts
var GroupInvitesService = class {
  /**
   * Create Invite
   * 招待を作成（ADMIN以上）
   * @returns GroupInviteResponse Successful Response
   * @throws ApiError
   */
  static createInviteApiV1GroupsGroupIdInvitesPost({
    groupId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/invites",
      path: {
        "group_id": groupId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Invites
   * 招待一覧（ADMIN以上）
   * @returns GroupInviteListResponse Successful Response
   * @throws ApiError
   */
  static listInvitesApiV1GroupsGroupIdInvitesGet({
    groupId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/{group_id}/invites",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Revoke Invite
   * 招待を取消（ADMIN以上）
   * @returns void
   * @throws ApiError
   */
  static revokeInviteApiV1GroupsGroupIdInvitesInviteIdDelete({
    groupId,
    inviteId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/groups/{group_id}/invites/{invite_id}",
      path: {
        "group_id": groupId,
        "invite_id": inviteId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Join By Token
   * 招待トークンでグループに参加
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static joinByTokenApiV1GroupsJoinByTokenTokenPost({
    token
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/join-by-token/{token}",
      path: {
        "token": token
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GroupJoinRequestsService.ts
var GroupJoinRequestsService = class {
  /**
   * List Join Requests
   * 参加申請一覧（ADMIN以上）
   * @returns GroupJoinRequestListResponse Successful Response
   * @throws ApiError
   */
  static listJoinRequestsApiV1GroupsGroupIdJoinRequestsGet({
    groupId,
    status
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/{group_id}/join-requests",
      path: {
        "group_id": groupId
      },
      query: {
        "status": status
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Approve Join Request
   * 参加申請を承認（ADMIN以上）
   * @returns GroupJoinRequestResponse Successful Response
   * @throws ApiError
   */
  static approveJoinRequestApiV1GroupsGroupIdJoinRequestsRequestIdApprovePost({
    groupId,
    requestId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/join-requests/{request_id}/approve",
      path: {
        "group_id": groupId,
        "request_id": requestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Reject Join Request
   * 参加申請を拒否（ADMIN以上）
   * @returns GroupJoinRequestResponse Successful Response
   * @throws ApiError
   */
  static rejectJoinRequestApiV1GroupsGroupIdJoinRequestsRequestIdRejectPost({
    groupId,
    requestId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/join-requests/{request_id}/reject",
      path: {
        "group_id": groupId,
        "request_id": requestId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GroupsService.ts
var GroupsService = class {
  /**
   * Create Group
   * グループを作成
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static createGroupApiV1GroupsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Group
   * グループを取得
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static getGroupApiV1GroupsGroupIdGet({
    groupId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/{group_id}",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Group
   * グループを更新
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static updateGroupApiV1GroupsGroupIdPatch({
    groupId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/groups/{group_id}",
      path: {
        "group_id": groupId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Group
   * グループを削除
   * @returns void
   * @throws ApiError
   */
  static deleteGroupApiV1GroupsGroupIdDelete({
    groupId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/groups/{group_id}",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Groups By Member
   * メンバーIDで所属グループを取得
   * @returns GroupListResponse Successful Response
   * @throws ApiError
   */
  static listGroupsByMemberApiV1GroupsByMemberMemberIdGet({
    memberId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/by-member/{member_id}",
      path: {
        "member_id": memberId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Member
   * グループにメンバーを追加
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static addMemberApiV1GroupsGroupIdMembersPost({
    groupId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/members",
      path: {
        "group_id": groupId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Remove Member
   * グループからメンバーを削除（キック）
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static removeMemberApiV1GroupsGroupIdMembersMemberIdDelete({
    groupId,
    memberId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/groups/{group_id}/members/{member_id}",
      path: {
        "group_id": groupId,
        "member_id": memberId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Join Group
   * グループに参加（OPENの場合は即参加、APPROVALの場合は申請作成）
   * @returns any Successful Response
   * @throws ApiError
   */
  static joinGroupApiV1GroupsGroupIdJoinPost({
    groupId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/join",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Leave Group
   * グループから自主脱退
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static leaveGroupApiV1GroupsGroupIdLeavePost({
    groupId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/leave",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Member Role
   * メンバーのロールを変更（OWNERのみ）
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static updateMemberRoleApiV1GroupsGroupIdMembersMemberIdRolePatch({
    groupId,
    memberId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/groups/{group_id}/members/{member_id}/role",
      path: {
        "group_id": groupId,
        "member_id": memberId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/HairStylesService.ts
var HairStylesService = class {
  /**
   * Create Hair Style
   * 髪型を作成
   * @returns HairStyleResponse Successful Response
   * @throws ApiError
   */
  static createHairStyleApiV1HairStylesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/hair-styles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Hair Styles
   * 髪型一覧を取得
   * @returns HairStyleListResponse Successful Response
   * @throws ApiError
   */
  static listHairStylesApiV1HairStylesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/hair-styles",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Hair Style
   * 髪型を取得
   * @returns HairStyleResponse Successful Response
   * @throws ApiError
   */
  static getHairStyleApiV1HairStylesHairStyleIdGet({
    hairStyleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/hair-styles/{hair_style_id}",
      path: {
        "hair_style_id": hairStyleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Hair Style
   * 髪型を更新
   * @returns HairStyleResponse Successful Response
   * @throws ApiError
   */
  static updateHairStyleApiV1HairStylesHairStyleIdPatch({
    hairStyleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/hair-styles/{hair_style_id}",
      path: {
        "hair_style_id": hairStyleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Hair Style
   * 髪型を削除
   * @returns void
   * @throws ApiError
   */
  static deleteHairStyleApiV1HairStylesHairStyleIdDelete({
    hairStyleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/hair-styles/{hair_style_id}",
      path: {
        "hair_style_id": hairStyleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/ImageAssetsService.ts
var ImageAssetsService = class {
  /**
   * Create Image Asset
   * 画像アセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * SizeProfileは画像のアスペクト比から自動判定。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns ImageAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createImageAssetApiV1ImageAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/image-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Image Assets
   * 複数の画像アセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetImageAssetsApiV1ImageAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/image-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Image Assets
   * 画像アセットを検索（プロファイルフラグベース）
   *
   * 公開検索では exclude_unreviewed=True（デフォルト）で審査済みアセットのみ取得。
   * 自分のアセット一覧を取得する場合は exclude_unreviewed=False を指定。
   * @returns ImageAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchImageAssetsApiV1ImageAssetsSearchGet({
    ownerId,
    role,
    hasSquare,
    hasPortrait916,
    hasPortrait34,
    hasLandscape169,
    hasLandscape43,
    tagIds,
    minLevel,
    excludeUnreviewed = true,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/search",
      query: {
        "owner_id": ownerId,
        "role": role,
        "has_square": hasSquare,
        "has_portrait_9_16": hasPortrait916,
        "has_portrait_3_4": hasPortrait34,
        "has_landscape_16_9": hasLandscape169,
        "has_landscape_4_3": hasLandscape43,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "exclude_unreviewed": excludeUnreviewed,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Image Asset
   * 画像アセットを取得
   * @returns ImageAssetResponse Successful Response
   * @throws ApiError
   */
  static getImageAssetApiV1ImageAssetsImageIdGet({
    imageId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}",
      path: {
        "image_id": imageId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Image Asset
   * 画像アセットのメタデータを更新（オーナーのみ）
   * @returns ImageAssetResponse Successful Response
   * @throws ApiError
   */
  static updateImageAssetApiV1ImageAssetsImageIdPatch({
    imageId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/image-assets/{image_id}",
      path: {
        "image_id": imageId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Image Asset
   * 画像アセットを削除（オーナーのみ）
   * @returns void
   * @throws ApiError
   */
  static deleteImageAssetApiV1ImageAssetsImageIdDelete({
    imageId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/image-assets/{image_id}",
      path: {
        "image_id": imageId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Image Asset Versions
   * 画像アセットのバージョン一覧を取得
   * @returns ImageAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listImageAssetVersionsApiV1ImageAssetsImageIdVersionsGet({
    imageId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/versions",
      path: {
        "image_id": imageId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Image Asset Version
   * 画像アセットに新しいバージョンを追加
   * @returns ImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addImageAssetVersionApiV1ImageAssetsImageIdVersionsPost({
    imageId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/image-assets/{image_id}/versions",
      path: {
        "image_id": imageId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Image Version
   * 画像アセットの最新バージョンを取得
   * @returns ImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestImageVersionApiV1ImageAssetsImageIdVersionsLatestGet({
    imageId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/versions/latest",
      path: {
        "image_id": imageId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Image Asset Version
   * 画像アセットの特定バージョンを取得
   * @returns ImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getImageAssetVersionApiV1ImageAssetsImageIdVersionsVersionIdGet({
    imageId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/versions/{version_id}",
      path: {
        "image_id": imageId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Image Asset Version
   * 画像アセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteImageAssetVersionApiV1ImageAssetsImageIdVersionsVersionIdDelete({
    imageId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/image-assets/{image_id}/versions/{version_id}",
      path: {
        "image_id": imageId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Image File Url
   * 画像ファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * プロファイルと解像度を指定してファイルを取得。
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getImageFileUrlApiV1ImageAssetsImageIdFileGet({
    imageId,
    profile,
    resolution = "high"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/file",
      path: {
        "image_id": imageId
      },
      query: {
        "profile": profile,
        "resolution": resolution
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Image Protected File
   * 透かし入り暗号化画像をバイナリレスポンスで返す
   *
   * ヘッダー X-Key-Id, X-Fingerprint-Id, X-Format を含む。
   * クライアントはこれらのヘッダーを使って復号・管理する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static getImageProtectedFileApiV1ImageAssetsImageIdProtectedFileGet({
    imageId,
    profile,
    resolution = "low"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/protected-file",
      path: {
        "image_id": imageId
      },
      query: {
        "profile": profile,
        "resolution": resolution
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Protected Image Files
   * バッチ透かし生成（メモリバジェット制御付き並列処理）
   *
   * 最大100件の画像を一括処理。各画像はbase64エンコードされた暗号化バイト列で返される。
   * @returns ProtectedImageBatchResponse Successful Response
   * @throws ApiError
   */
  static batchGetProtectedImageFilesApiV1ImageAssetsProtectedFilesBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/image-assets/protected-files/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/InternalService.ts
var InternalService = class {
  /**
   * Conversion Callback
   * Converter Serviceからの変換完了通知を受信
   *
   * 変換が成功した場合はGLBファイル情報でバージョンを更新。
   * 失敗した場合はエラー情報を記録。
   * @returns GLBAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static conversionCallbackApiV1InternalConversionCallbackPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/internal/conversion-callback",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/InternalMarketplaceService.ts
var InternalMarketplaceService = class {
  /**
   * Validate Prices
   * billing-gateway からの価格検証
   *
   * 各アイテムの effective_price がサーバー計算結果と一致するか検証する。
   * @returns ValidatePricesResponse Successful Response
   * @throws ApiError
   */
  static validatePricesInternalV1MarketplaceValidatePricesPost({
    requestBody,
    xInternalApiKey = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/internal/v1/marketplace/validate-prices",
      headers: {
        "x-internal-api-key": xInternalApiKey
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Purchase Completed
   * billing-gateway からの購入完了通知
   *
   * 各アイテムについて Entitlement を作成する。
   * 既に同じアセットの TRIAL Entitlement がある場合は FULL に昇格する。
   * @returns PurchaseCompletedResponse Successful Response
   * @throws ApiError
   */
  static purchaseCompletedInternalV1MarketplacePurchaseCompletedPost({
    requestBody,
    xInternalApiKey = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/internal/v1/marketplace/purchase-completed",
      headers: {
        "x-internal-api-key": xInternalApiKey
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/KnowledgeGraphService.ts
var KnowledgeGraphService = class {
  /**
   * Get Knowledge Graph
   * @returns KnowledgeGraphResponse Successful Response
   * @throws ApiError
   */
  static getKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/knowledge-graph",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Overwrite Knowledge Graph
   * @returns KnowledgeGraphResponse Successful Response
   * @throws ApiError
   */
  static overwriteKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphPut({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/knowledge-graph",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Rebuild Knowledge Graph
   * 全記憶から knowledge_graph を再構築する。
   * @returns KnowledgeGraphResponse Successful Response
   * @throws ApiError
   */
  static rebuildKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphRebuildPost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/knowledge-graph/rebuild",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/LlmModelsService.ts
var LlmModelsService = class {
  /**
   * List All Models
   * 全プロバイダーのモデル一覧を取得
   * @returns AllModelsResponse Successful Response
   * @throws ApiError
   */
  static listAllModelsApiV1LlmModelsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/"
    });
  }
  /**
   * List All Models
   * 全プロバイダーのモデル一覧を取得
   * @returns AllModelsResponse Successful Response
   * @throws ApiError
   */
  static listAllModelsApiV1LlmModelsGet1() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models"
    });
  }
  /**
   * List Models By Provider
   * プロバイダー別モデル一覧を取得
   * @returns ProviderModelsResponse Successful Response
   * @throws ApiError
   */
  static listModelsByProviderApiV1LlmModelsProviderProviderGet({
    provider
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/provider/{provider}",
      path: {
        "provider": provider
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Models By Use Case
   * 用途別モデル一覧を取得（コスト順）
   *
   * use_case: conversation, structured_output, classification,
   * summarization, coding, reasoning, vision_analysis, general
   * @returns ModelInfoResponse Successful Response
   * @throws ApiError
   */
  static listModelsByUseCaseApiV1LlmModelsUseCaseUseCaseGet({
    useCase
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/use-case/{use_case}",
      path: {
        "use_case": useCase
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Model Info
   * 特定モデルの情報を取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static getModelInfoApiV1LlmModelsModelProviderModelIdGet({
    provider,
    modelId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/model/{provider}/{model_id}",
      path: {
        "provider": provider,
        "model_id": modelId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Calculate Model Cost
   * コストを計算
   * @returns CostCalculationResponse Successful Response
   * @throws ApiError
   */
  static calculateModelCostApiV1LlmModelsCalculateCostPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/llm-models/calculate-cost",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Capabilities
   * 利用可能な機能一覧を取得
   * @returns string Successful Response
   * @throws ApiError
   */
  static listCapabilitiesApiV1LlmModelsCapabilitiesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/capabilities"
    });
  }
  /**
   * List Use Cases
   * 利用可能な用途一覧を取得
   * @returns string Successful Response
   * @throws ApiError
   */
  static listUseCasesApiV1LlmModelsUseCasesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/use-cases"
    });
  }
};

// src/generated/services/MarketplaceBrowseService.ts
var MarketplaceBrowseService = class {
  /**
   * Browse Listings
   * @returns ListingListResponse Successful Response
   * @throws ApiError
   */
  static browseListingsApiV1MarketplaceBrowseListingsGet({
    assetType,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/browse/listings",
      query: {
        "asset_type": assetType,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Browse Listing Bundles
   * @returns ListingBundleListResponse Successful Response
   * @throws ApiError
   */
  static browseListingBundlesApiV1MarketplaceBrowseListingBundlesGet({
    listingBundleType,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/browse/listing-bundles",
      query: {
        "listing_bundle_type": listingBundleType,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceDistributionBundlesService.ts
var MarketplaceDistributionBundlesService = class {
  /**
   * Create Distribution Bundle
   * @returns DistributionBundleResponse Successful Response
   * @throws ApiError
   */
  static createDistributionBundleApiV1MarketplaceDistributionBundlesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/distribution-bundles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Distribution Bundles
   * @returns DistributionBundleListResponse Successful Response
   * @throws ApiError
   */
  static listDistributionBundlesApiV1MarketplaceDistributionBundlesGet({
    creatorId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/distribution-bundles",
      query: {
        "creator_id": creatorId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Distribution Bundle
   * @returns DistributionBundleResponse Successful Response
   * @throws ApiError
   */
  static getDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdGet({
    bundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/distribution-bundles/{bundle_id}",
      path: {
        "bundle_id": bundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Distribution Bundle
   * @returns DistributionBundleResponse Successful Response
   * @throws ApiError
   */
  static updateDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdPatch({
    bundleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/distribution-bundles/{bundle_id}",
      path: {
        "bundle_id": bundleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Distribution Bundle
   * @returns void
   * @throws ApiError
   */
  static deleteDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdDelete({
    bundleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/distribution-bundles/{bundle_id}",
      path: {
        "bundle_id": bundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceDistributionsService.ts
var MarketplaceDistributionsService = class {
  /**
   * Create Distribution
   * @returns DistributionResponse Successful Response
   * @throws ApiError
   */
  static createDistributionApiV1MarketplaceDistributionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/distributions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Distributions
   * @returns DistributionListResponse Successful Response
   * @throws ApiError
   */
  static listDistributionsApiV1MarketplaceDistributionsGet({
    creatorId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/distributions",
      query: {
        "creator_id": creatorId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Distribution
   * @returns DistributionResponse Successful Response
   * @throws ApiError
   */
  static getDistributionApiV1MarketplaceDistributionsDistributionIdGet({
    distributionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/distributions/{distribution_id}",
      path: {
        "distribution_id": distributionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Distribution
   * @returns DistributionResponse Successful Response
   * @throws ApiError
   */
  static updateDistributionApiV1MarketplaceDistributionsDistributionIdPatch({
    distributionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/distributions/{distribution_id}",
      path: {
        "distribution_id": distributionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Discontinue Distribution
   * @returns DistributionResponse Successful Response
   * @throws ApiError
   */
  static discontinueDistributionApiV1MarketplaceDistributionsDistributionIdDelete({
    distributionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/distributions/{distribution_id}",
      path: {
        "distribution_id": distributionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Claim Distribution
   * @returns EntitlementResponse Successful Response
   * @throws ApiError
   */
  static claimDistributionApiV1MarketplaceDistributionsDistributionIdClaimPost({
    distributionId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/distributions/{distribution_id}/claim",
      path: {
        "distribution_id": distributionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceEntitlementsService.ts
var MarketplaceEntitlementsService = class {
  /**
   * List Entitlements
   * @returns EntitlementListResponse Successful Response
   * @throws ApiError
   */
  static listEntitlementsApiV1MarketplaceEntitlementsGet({
    ownerType = "user",
    assetType,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/entitlements",
      query: {
        "owner_type": ownerType,
        "asset_type": assetType,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Check Entitlement
   * @returns EntitlementCheckResponse Successful Response
   * @throws ApiError
   */
  static checkEntitlementApiV1MarketplaceEntitlementsCheckGet({
    assetId,
    ownerType = "user"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/entitlements/check",
      query: {
        "asset_id": assetId,
        "owner_type": ownerType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Entitlement
   * @returns EntitlementResponse Successful Response
   * @throws ApiError
   */
  static getEntitlementApiV1MarketplaceEntitlementsEntitlementIdGet({
    entitlementId,
    ownerType = "user"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/entitlements/{entitlement_id}",
      path: {
        "entitlement_id": entitlementId
      },
      query: {
        "owner_type": ownerType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Entitlement Version
   * @returns EntitlementResponse Successful Response
   * @throws ApiError
   */
  static updateEntitlementVersionApiV1MarketplaceEntitlementsEntitlementIdVersionPatch({
    entitlementId,
    requestBody,
    ownerType = "user"
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/entitlements/{entitlement_id}/version",
      path: {
        "entitlement_id": entitlementId
      },
      query: {
        "owner_type": ownerType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceFavoritesService.ts
var MarketplaceFavoritesService = class {
  /**
   * Create Favorite
   * @returns FavoriteResponse Successful Response
   * @throws ApiError
   */
  static createFavoriteApiV1MarketplaceFavoritesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/favorites",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Favorites
   * @returns FavoriteListResponse Successful Response
   * @throws ApiError
   */
  static listFavoritesApiV1MarketplaceFavoritesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/favorites",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Favorite
   * @returns void
   * @throws ApiError
   */
  static deleteFavoriteApiV1MarketplaceFavoritesFavoriteIdDelete({
    favoriteId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/favorites/{favorite_id}",
      path: {
        "favorite_id": favoriteId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceGiftsService.ts
var MarketplaceGiftsService = class {
  /**
   * Create Gift Purchase
   * ギフト購入リクエストを作成する。
   *
   * 実際の決済は billing-gateway で処理される。
   * 決済完了後、purchase-completed エンドポイントで Entitlement が作成される。
   * @returns GiftPurchaseResponse Successful Response
   * @throws ApiError
   */
  static createGiftPurchaseApiV1MarketplaceGiftsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/gifts",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceListingBundlesService.ts
var MarketplaceListingBundlesService = class {
  /**
   * Create Listing Bundle
   * @returns ListingBundleResponse Successful Response
   * @throws ApiError
   */
  static createListingBundleApiV1MarketplaceListingBundlesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/listing-bundles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Listing Bundles
   * @returns ListingBundleListResponse Successful Response
   * @throws ApiError
   */
  static listListingBundlesApiV1MarketplaceListingBundlesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/listing-bundles",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Listing Bundle
   * @returns ListingBundleResponse Successful Response
   * @throws ApiError
   */
  static getListingBundleApiV1MarketplaceListingBundlesListingBundleIdGet({
    listingBundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/listing-bundles/{listing_bundle_id}",
      path: {
        "listing_bundle_id": listingBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Listing Bundle
   * @returns ListingBundleResponse Successful Response
   * @throws ApiError
   */
  static updateListingBundleApiV1MarketplaceListingBundlesListingBundleIdPatch({
    listingBundleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/listing-bundles/{listing_bundle_id}",
      path: {
        "listing_bundle_id": listingBundleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Listing Bundle
   * @returns void
   * @throws ApiError
   */
  static deleteListingBundleApiV1MarketplaceListingBundlesListingBundleIdDelete({
    listingBundleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/listing-bundles/{listing_bundle_id}",
      path: {
        "listing_bundle_id": listingBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceListingsService.ts
var MarketplaceListingsService = class {
  /**
   * Create Listing
   * @returns ListingResponse Successful Response
   * @throws ApiError
   */
  static createListingApiV1MarketplaceListingsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/listings",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Listings
   * @returns ListingListResponse Successful Response
   * @throws ApiError
   */
  static listListingsApiV1MarketplaceListingsGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/listings",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Listing
   * @returns ListingResponse Successful Response
   * @throws ApiError
   */
  static getListingApiV1MarketplaceListingsListingIdGet({
    listingId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/listings/{listing_id}",
      path: {
        "listing_id": listingId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Listing
   * @returns ListingResponse Successful Response
   * @throws ApiError
   */
  static updateListingApiV1MarketplaceListingsListingIdPatch({
    listingId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/listings/{listing_id}",
      path: {
        "listing_id": listingId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Listing
   * @returns void
   * @throws ApiError
   */
  static deleteListingApiV1MarketplaceListingsListingIdDelete({
    listingId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/listings/{listing_id}",
      path: {
        "listing_id": listingId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceNotificationsService.ts
var MarketplaceNotificationsService = class {
  /**
   * List Notifications
   * @returns NotificationListResponse Successful Response
   * @throws ApiError
   */
  static listNotificationsApiV1MarketplaceNotificationsGet({
    unreadOnly = false,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/notifications",
      query: {
        "unread_only": unreadOnly,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Mark Notification As Read
   * @returns void
   * @throws ApiError
   */
  static markNotificationAsReadApiV1MarketplaceNotificationsNotificationIdReadPatch({
    notificationId
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/notifications/{notification_id}/read",
      path: {
        "notification_id": notificationId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Mark All Notifications As Read
   * @returns any Successful Response
   * @throws ApiError
   */
  static markAllNotificationsAsReadApiV1MarketplaceNotificationsMarkAllReadPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/notifications/mark-all-read"
    });
  }
};

// src/generated/services/MarketplaceReportsService.ts
var MarketplaceReportsService = class {
  /**
   * Create Report
   * @returns any Successful Response
   * @throws ApiError
   */
  static createReportApiV1MarketplaceReportsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/reports",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceReviewsService.ts
var MarketplaceReviewsService = class {
  /**
   * Create Review
   * @returns ReviewResponse Successful Response
   * @throws ApiError
   */
  static createReviewApiV1MarketplaceReviewsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/reviews",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Reviews
   * @returns ReviewListResponse Successful Response
   * @throws ApiError
   */
  static listReviewsApiV1MarketplaceReviewsGet({
    targetType,
    targetId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/reviews",
      query: {
        "target_type": targetType,
        "target_id": targetId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Review
   * @returns void
   * @throws ApiError
   */
  static deleteReviewApiV1MarketplaceReviewsReviewIdDelete({
    reviewId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/reviews/{review_id}",
      path: {
        "review_id": reviewId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MemoriesService.ts
var MemoriesService = class {
  /**
   * Search Memories
   * @returns MemorySearchResponse Successful Response
   * @throws ApiError
   */
  static searchMemoriesApiV1CharactersCharacterIdMemoriesSearchPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/memories/search",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Memory
   * @returns MemoryResponse Successful Response
   * @throws ApiError
   */
  static createMemoryApiV1CharactersCharacterIdMemoriesPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/memories",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Memories
   * @returns MemoryListResponse Successful Response
   * @throws ApiError
   */
  static listMemoriesApiV1CharactersCharacterIdMemoriesGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/memories",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Memory
   * @returns MemoryResponse Successful Response
   * @throws ApiError
   */
  static getMemoryApiV1CharactersCharacterIdMemoriesMemoryIdGet({
    characterId,
    memoryId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/memories/{memory_id}",
      path: {
        "character_id": characterId,
        "memory_id": memoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Memory
   * @returns MemoryResponse Successful Response
   * @throws ApiError
   */
  static updateMemoryApiV1CharactersCharacterIdMemoriesMemoryIdPut({
    characterId,
    memoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/memories/{memory_id}",
      path: {
        "character_id": characterId,
        "memory_id": memoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Memory
   * @returns void
   * @throws ApiError
   */
  static deleteMemoryApiV1CharactersCharacterIdMemoriesMemoryIdDelete({
    characterId,
    memoryId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/memories/{memory_id}",
      path: {
        "character_id": characterId,
        "memory_id": memoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Toggle Memory Pin
   * @returns MemoryResponse Successful Response
   * @throws ApiError
   */
  static toggleMemoryPinApiV1CharactersCharacterIdMemoriesMemoryIdPinPatch({
    characterId,
    memoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/memories/{memory_id}/pin",
      path: {
        "character_id": characterId,
        "memory_id": memoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MemoryOrganizationService.ts
var MemoryOrganizationService = class {
  /**
   * Organize Memories
   * @returns MemoryOrganizationResponse Successful Response
   * @throws ApiError
   */
  static organizeMemoriesApiV1CharactersCharacterIdMemoryOrganizationPost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/memory-organization",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MoodService.ts
var MoodService = class {
  /**
   * Get Current Mood
   * キャラクターの現在の気分状態を取得（減衰計算適用後）
   *
   * 時間経過による減衰を計算し、現在の気分値を返す。
   * MoodStateが存在しない場合は、キャラクターのemotional_paramsに基づいた
   * デフォルト値で初期化された状態を返す。
   * @returns MoodStateResponse Successful Response
   * @throws ApiError
   */
  static getCurrentMoodApiV1CharactersCharacterIdMoodGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/mood",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Mood From Conversation
   * 会話結果から気分を更新
   *
   * 会話で出力されたemotion_idのリストから気分を更新する。
   * 1. 現在のMoodStateを取得（減衰計算適用）
   * 2. emotion_idsからターンVADを算出
   * 3. sensitivityを適用
   * 4. emotion_centerを更新
   * 5. moodを更新（気分一致効果 + 飽和対策）
   * 6. 保存して返す
   * @returns MoodStateResponse Successful Response
   * @throws ApiError
   */
  static updateMoodFromConversationApiV1CharactersCharacterIdMoodPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/mood",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Verbalized Mood
   * キャラクターの現在の気分を言語化して取得
   *
   * 気分のVAD値を自然言語の説明に変換して返す。
   * EmotionConfigにmood_verbalizerが設定されている必要がある。
   * 未設定の場合は500エラーを返す。
   * @returns MoodVerbalizedResponse Successful Response
   * @throws ApiError
   */
  static getVerbalizedMoodApiV1CharactersCharacterIdMoodVerbalizedGet({
    characterId,
    locale = "ja-JP"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/mood/verbalized",
      path: {
        "character_id": characterId
      },
      query: {
        "locale": locale
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Reset Mood
   * 気分をデフォルト値にリセット
   *
   * キャラクターのemotional_paramsに基づいたデフォルト値にリセットする。
   * emotion_centerの履歴もクリアされる。
   * @returns MoodStateResponse Successful Response
   * @throws ApiError
   */
  static resetMoodApiV1CharactersCharacterIdMoodResetPost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/mood/reset",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionFormatsAnimatorService.ts
var MotionFormatsAnimatorService = class {
  /**
   * Create Avatar Animator Format
   * アバターモーションのAnimatorフォーマットを作成
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static createAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorPost({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/animator",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Animator Format
   * アバターモーションのAnimatorフォーマットを取得
   * @returns AnimatorMotionData Successful Response
   * @throws ApiError
   */
  static getAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorGet({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/animator",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Animator Format
   * アバターモーションのAnimatorフォーマットを更新
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorPatch({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/animator",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Animator Format
   * アバターモーションのAnimatorフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorDelete({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/animator",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionFormatsGlbService.ts
var MotionFormatsGlbService = class {
  /**
   * Create Avatar Glb Motion Format
   * アバターモーションのGLBフォーマットを作成
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static createAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbPost({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Glb Motion Format
   * アバターモーションのGLBフォーマットを取得
   * @returns GLBMotionData Successful Response
   * @throws ApiError
   */
  static getAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbGet({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Glb Motion Format
   * アバターモーションのGLBフォーマットを更新
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbPatch({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Glb Motion Format
   * アバターモーションのGLBフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbDelete({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionFormatsVrmaService.ts
var MotionFormatsVrmaService = class {
  /**
   * Create Avatar Vrma Format
   * アバターモーションのVRMAフォーマットを作成
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static createAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaPost({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/vrma",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Vrma Format
   * アバターモーションのVRMAフォーマットを取得
   * @returns VRMAMotionData Successful Response
   * @throws ApiError
   */
  static getAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaGet({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/vrma",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Vrma Format
   * アバターモーションのVRMAフォーマットを更新
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaPatch({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/vrma",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Vrma Format
   * アバターモーションのVRMAフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaDelete({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/vrma",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionsService.ts
var MotionsService = class {
  /**
   * Create Motion
   * 新しいMotionを作成
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static createMotionApiV1MotionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Motions
   * Motion一覧を取得
   * @returns MotionListResponse Successful Response
   * @throws ApiError
   */
  static listMotionsApiV1MotionsGet({
    dataSource,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/motions",
      query: {
        "data_source": dataSource,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Motions
   * 名前または同義語でMotionを検索
   * @returns MotionSearchResponse Successful Response
   * @throws ApiError
   */
  static searchMotionsApiV1MotionsSearchGet({
    searchTerm,
    locale = "ja-JP",
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/motions/search",
      query: {
        "search_term": searchTerm,
        "locale": locale,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Motions By Text
   * テキストからMotionを提案（LLM使用）
   * @returns MotionSuggestionResponse Successful Response
   * @throws ApiError
   */
  static suggestMotionsByTextApiV1MotionsSuggestByTextPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions/suggest-by-text",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Motions
   * 複数のMotionを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetMotionsApiV1MotionsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Motion
   * IDでMotionを取得
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static getMotionApiV1MotionsMotionIdGet({
    motionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/motions/{motion_id}",
      path: {
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Motion
   * Motionを更新
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static updateMotionApiV1MotionsMotionIdPatch({
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/motions/{motion_id}",
      path: {
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Motion
   * Motionを削除
   * @returns void
   * @throws ApiError
   */
  static deleteMotionApiV1MotionsMotionIdDelete({
    motionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/motions/{motion_id}",
      path: {
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Synonyms
   * 指定ロケールに同義語を追加
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static addSynonymsApiV1MotionsMotionIdSynonymsAddPost({
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions/{motion_id}/synonyms/add",
      path: {
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Remove Synonyms
   * 指定ロケールから同義語を削除
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static removeSynonymsApiV1MotionsMotionIdSynonymsRemovePost({
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions/{motion_id}/synonyms/remove",
      path: {
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionsSummaryService.ts
var MotionsSummaryService = class {
  /**
   * Get Motions Summary
   * MotionsSummary（モーションインデックス）を取得
   *
   * OFFICIALモーションの一括参照用インデックスを返します。
   * ロケール別にモーションID・名前・同義語・タイプを含みます。
   * @returns MotionsSummaryResponse Successful Response
   * @throws ApiError
   */
  static getMotionsSummaryApiV1MotionsSummaryGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/motions-summary"
    });
  }
};

// src/generated/services/OutfitsService.ts
var OutfitsService = class {
  /**
   * Create Outfit
   * 衣装を作成
   * @returns OutfitResponse Successful Response
   * @throws ApiError
   */
  static createOutfitApiV1OutfitsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/outfits",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Outfits
   * 衣装一覧を取得
   * @returns OutfitListResponse Successful Response
   * @throws ApiError
   */
  static listOutfitsApiV1OutfitsGet({
    category,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/outfits",
      query: {
        "category": category,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Outfit
   * 衣装を取得
   * @returns OutfitResponse Successful Response
   * @throws ApiError
   */
  static getOutfitApiV1OutfitsOutfitIdGet({
    outfitId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/outfits/{outfit_id}",
      path: {
        "outfit_id": outfitId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Outfit
   * 衣装を更新
   * @returns OutfitResponse Successful Response
   * @throws ApiError
   */
  static updateOutfitApiV1OutfitsOutfitIdPatch({
    outfitId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/outfits/{outfit_id}",
      path: {
        "outfit_id": outfitId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Outfit
   * 衣装を削除
   * @returns void
   * @throws ApiError
   */
  static deleteOutfitApiV1OutfitsOutfitIdDelete({
    outfitId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/outfits/{outfit_id}",
      path: {
        "outfit_id": outfitId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/PersonalityPresetsService.ts
var PersonalityPresetsService = class {
  /**
   * List Presets
   * 全性格プリセットを取得
   * @returns PersonalityPresetListResponse Successful Response
   * @throws ApiError
   */
  static listPresetsApiV1PersonalityPresetsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets"
    });
  }
  /**
   * Get Context Table
   * Layer 0 コンテキストテーブルを取得
   * @returns StandardContextTableResponse Successful Response
   * @throws ApiError
   */
  static getContextTableApiV1PersonalityPresetsContextTableGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/context-table"
    });
  }
  /**
   * Get Vad Mapping
   * Layer 0 VAD→非言語マッピングを取得
   * @returns VadNonVerbalMappingResponse Successful Response
   * @throws ApiError
   */
  static getVadMappingApiV1PersonalityPresetsVadMappingGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/vad-mapping"
    });
  }
  /**
   * List Behavioral Patterns
   * 全行動パターンプリセットを取得
   * @returns BehavioralPatternPresetListResponse Successful Response
   * @throws ApiError
   */
  static listBehavioralPatternsApiV1PersonalityPresetsBehavioralPatternsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/behavioral-patterns"
    });
  }
  /**
   * Get Behavioral Pattern
   * 指定パターンの行動パターンプリセットを取得
   * @returns BehavioralPatternPresetResponse Successful Response
   * @throws ApiError
   */
  static getBehavioralPatternApiV1PersonalityPresetsBehavioralPatternsPatternGet({
    pattern
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/behavioral-patterns/{pattern}",
      path: {
        "pattern": pattern
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Preset
   * 指定アーキタイプのプリセットを取得
   * @returns PersonalityPresetResponse Successful Response
   * @throws ApiError
   */
  static getPresetApiV1PersonalityPresetsArchetypeGet({
    archetype
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/{archetype}",
      path: {
        "archetype": archetype
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/RelationshipContextService.ts
var RelationshipContextService = class {
  /**
   * Get Relationship Context Map
   * RelationshipRole→(AffinityLevel, PowerDynamic, BondType) マッピングを取得
   *
   * クライアント側で RelationshipRole から AffinityLevel, PowerDynamic, BondType を
   * 導出するためのマッピングテーブル。
   * @returns RelationshipContextMapResponse Successful Response
   * @throws ApiError
   */
  static getRelationshipContextMapApiV1RelationshipContextMapGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/relationship-context-map"
    });
  }
};

// src/generated/services/RelationshipsService.ts
var RelationshipsService = class {
  /**
   * Create Relationship
   * キャラクターの対人関係を作成
   * @returns CharacterRelationshipResponse Successful Response
   * @throws ApiError
   */
  static createRelationshipApiV1CharactersCharacterIdRelationshipsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/relationships",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Relationships
   * キャラクターの全対人関係を取得
   * @returns CharacterRelationshipListResponse Successful Response
   * @throws ApiError
   */
  static listRelationshipsApiV1CharactersCharacterIdRelationshipsGet({
    characterId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/relationships",
      path: {
        "character_id": characterId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Relationship
   * 特定の対人関係を取得
   * @returns CharacterRelationshipResponse Successful Response
   * @throws ApiError
   */
  static getRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdGet({
    characterId,
    conversantType,
    conversantId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/relationships/{conversant_type}/{conversant_id}",
      path: {
        "character_id": characterId,
        "conversant_type": conversantType,
        "conversant_id": conversantId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Relationship
   * 対人関係を更新
   * @returns CharacterRelationshipResponse Successful Response
   * @throws ApiError
   */
  static updateRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdPatch({
    characterId,
    conversantType,
    conversantId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/relationships/{conversant_type}/{conversant_id}",
      path: {
        "character_id": characterId,
        "conversant_type": conversantType,
        "conversant_id": conversantId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Relationship
   * 対人関係を削除
   * @returns void
   * @throws ApiError
   */
  static deleteRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdDelete({
    characterId,
    conversantType,
    conversantId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/relationships/{conversant_type}/{conversant_id}",
      path: {
        "character_id": characterId,
        "conversant_type": conversantType,
        "conversant_id": conversantId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/ReviewsService.ts
var ReviewsService = class {
  /**
   * Auto Review
   * 自動審査（一次審査）を実行
   *
   * LLMを使用してコンテンツを自動審査します。
   * @returns ReviewLogResponse Successful Response
   * @throws ApiError
   */
  static autoReviewApiV1ReviewsTargetTypeTargetIdAutoPost({
    targetType,
    targetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/reviews/{target_type}/{target_id}/auto",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Appeal Review
   * 異議申し立て（再審査）を実行
   *
   * LLMを使用して、異議内容を考慮した再審査を行います。
   * @returns ReviewLogResponse Successful Response
   * @throws ApiError
   */
  static appealReviewApiV1ReviewsTargetTypeTargetIdAppealPost({
    targetType,
    targetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/reviews/{target_type}/{target_id}/appeal",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Request Staff Review
   * 運営審査を要求
   *
   * 運営による手動審査を要求します。
   * @returns ReviewLogResponse Successful Response
   * @throws ApiError
   */
  static requestStaffReviewApiV1ReviewsTargetTypeTargetIdStaffRequestPost({
    targetType,
    targetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/reviews/{target_type}/{target_id}/staff-request",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Reviews
   * 審査ログ一覧を取得
   * @returns ReviewLogListResponse Successful Response
   * @throws ApiError
   */
  static listReviewsApiV1ReviewsTargetTypeTargetIdGet({
    targetType,
    targetId,
    limit = 10,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/reviews/{target_type}/{target_id}",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Review Status
   * 審査ステータスを取得
   * @returns ReviewStatusResponse Successful Response
   * @throws ApiError
   */
  static getReviewStatusApiV1ReviewsTargetTypeTargetIdStatusGet({
    targetType,
    targetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/reviews/{target_type}/{target_id}/status",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SchedulesService.ts
var SchedulesService = class {
  /**
   * Get Schedules
   * @returns ScheduleListResponse Successful Response
   * @throws ApiError
   */
  static getSchedulesApiV1CharactersCharacterIdSchedulesGet({
    characterId,
    startDate,
    endDate,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/schedules",
      path: {
        "character_id": characterId
      },
      query: {
        "start_date": startDate,
        "end_date": endDate,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Schedule
   * @returns ScheduleResponse Successful Response
   * @throws ApiError
   */
  static createScheduleApiV1CharactersCharacterIdSchedulesPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/schedules",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Schedule
   * @returns ScheduleResponse Successful Response
   * @throws ApiError
   */
  static getScheduleApiV1CharactersCharacterIdSchedulesScheduleIdGet({
    characterId,
    scheduleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/schedules/{schedule_id}",
      path: {
        "character_id": characterId,
        "schedule_id": scheduleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Schedule
   * @returns ScheduleResponse Successful Response
   * @throws ApiError
   */
  static updateScheduleApiV1CharactersCharacterIdSchedulesScheduleIdPatch({
    characterId,
    scheduleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/schedules/{schedule_id}",
      path: {
        "character_id": characterId,
        "schedule_id": scheduleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Schedule
   * @returns void
   * @throws ApiError
   */
  static deleteScheduleApiV1CharactersCharacterIdSchedulesScheduleIdDelete({
    characterId,
    scheduleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/schedules/{schedule_id}",
      path: {
        "character_id": characterId,
        "schedule_id": scheduleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SessionHistoryService.ts
var SessionHistoryService = class {
  /**
   * Create Session History
   * @returns SessionHistoryResponse Successful Response
   * @throws ApiError
   */
  static createSessionHistoryApiV1CharactersCharacterIdSessionHistoryPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/session-history",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Session History
   * @returns SessionHistoryListResponse Successful Response
   * @throws ApiError
   */
  static listSessionHistoryApiV1CharactersCharacterIdSessionHistoryGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/session-history",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Session History
   * @returns SessionHistoryResponse Successful Response
   * @throws ApiError
   */
  static getSessionHistoryApiV1CharactersCharacterIdSessionHistorySessionIdGet({
    characterId,
    sessionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/session-history/{session_id}",
      path: {
        "character_id": characterId,
        "session_id": sessionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SettingsService.ts
var SettingsService = class {
  /**
   * Create Settings
   * 詳細な設定内容（content）を指定して新しいSettingsを作成
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static createSettingsApiV1SettingsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Settings
   * 条件に合うSettings一覧を取得
   * @returns SettingsListResponse Successful Response
   * @throws ApiError
   */
  static listSettingsApiV1SettingsGet({
    filterByOwner = false,
    publishScope,
    parentSettingsId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings",
      query: {
        "filter_by_owner": filterByOwner,
        "publish_scope": publishScope,
        "parent_settings_id": parentSettingsId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Settings With Description
   * キャラ設定の概要（overview）から新しいSettingsを自動生成して作成
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static createSettingsWithDescriptionApiV1SettingsWithDescriptionPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/with-description",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Settings
   * 指定したIDのSettingsを取得
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static getSettingsApiV1SettingsSettingsIdGet({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Settings
   * 既存のSettingsを更新。
   * parent_settings_id, content, description, publishingを個別または複数まとめて更新できます。
   * タグは自動的に生成されます。
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static updateSettingsApiV1SettingsSettingsIdPatch({
    settingsId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/settings/{settings_id}",
      path: {
        "settings_id": settingsId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Settings
   * 指定したIDのSettingsを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSettingsApiV1SettingsSettingsIdDelete({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/settings/{settings_id}",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Settings Content
   * 設定の詳細なコンテンツのみを取得
   * @returns SettingsContentResponse Successful Response
   * @throws ApiError
   */
  static getSettingsContentApiV1SettingsSettingsIdContentGet({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/content",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Content
   * キャラ設定の概要（overview）から詳細な設定（SettingsContent）を生成
   * ※この時点ではデータベースに保存されません
   * @returns GenerateContentResponse Successful Response
   * @throws ApiError
   */
  static generateContentApiV1SettingsGenerateContentPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/generate-content",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Regenerate Content From Input
   * Client-input版: テキスト入力からSettingsContentを再生成（保存なし）
   *
   * settings_content にJSON文字列またはテキストを渡し、modification_instruction で修正指示を与える。
   * @returns RegenerateContentFromInputResponse Successful Response
   * @throws ApiError
   */
  static regenerateContentFromInputApiV1SettingsRegenerateContentPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/regenerate-content",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Regenerate Content
   * 既存Settingsのcontentを修正指示に基づいてLLMで再生成
   *
   * - save=false（デフォルト）: 再生成結果を返すのみ
   * - save=true: 再生成結果をDBに保存
   * @returns RegenerateContentResponse Successful Response
   * @throws ApiError
   */
  static regenerateContentApiV1SettingsSettingsIdRegenerateContentPost({
    settingsId,
    requestBody,
    save = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/regenerate-content",
      path: {
        "settings_id": settingsId
      },
      query: {
        "save": save
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Duplicate Settings
   * 既存のSettingsを複製して新規作成
   * @returns DuplicateSettingsResponse Successful Response
   * @throws ApiError
   */
  static duplicateSettingsApiV1SettingsSettingsIdDuplicatePost({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/duplicate",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Parent Settings
   * 指定したSettingsの親情報を取得
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static getParentSettingsApiV1SettingsSettingsIdParentGet({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/parent",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Children Settings
   * 指定したSettingsの子一覧を取得
   * @returns SettingsListResponse Successful Response
   * @throws ApiError
   */
  static getChildrenSettingsApiV1SettingsSettingsIdChildrenGet({
    settingsId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/children",
      path: {
        "settings_id": settingsId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Settings By Tags
   * タグベースの検索を実行し、一致度が高い順に結果を返す
   *
   * Args:
   * tags: 検索するタグIDのリスト
   * limit: 取得件数制限
   * cursor: ページネーションカーソル
   *
   * Returns:
   * 検索結果のSettingsリスト（一致度が高い順）
   * @returns SettingsListResponse Successful Response
   * @throws ApiError
   */
  static searchSettingsByTagsApiV1SettingsTagSearchGet({
    tags,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/tag/search",
      query: {
        "tags": tags,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get User Settings
   * 特定のユーザーが所有するSettings一覧を取得
   * @returns SettingsListResponse Successful Response
   * @throws ApiError
   */
  static getUserSettingsApiV1SettingsUserUserIdGet({
    userId,
    publishScope,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/user/{user_id}",
      path: {
        "user_id": userId
      },
      query: {
        "publish_scope": publishScope,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Settings
   * フィールド値でSettingsを検索してIDリストを返す
   *
   * Args:
   * search_request: 検索条件
   *
   * Returns:
   * 検索結果のsettings_idリストと次のカーソル
   * @returns SettingsSearchResponse Successful Response
   * @throws ApiError
   */
  static searchSettingsApiV1SettingsSearchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/search",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Settings Batch
   * 複数のSettingsを一括取得
   *
   * Args:
   * request: リクエストオブジェクト（ユーザーID取得用）
   * batch_request: 一括取得リクエスト
   *
   * Returns:
   * 取得できたSettingsリストと統計情報
   * @returns BatchSettingsResponse Successful Response
   * @throws ApiError
   */
  static getSettingsBatchApiV1SettingsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SettingsSnippetsService.ts
var SettingsSnippetsService = class {
  /**
   * Create Snippet
   * Settingsにスニペットを作成
   * @returns CharacterBehaviorSnippetResponse Successful Response
   * @throws ApiError
   */
  static createSnippetApiV1SettingsSettingsIdSnippetsPost({
    settingsId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/snippets",
      path: {
        "settings_id": settingsId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Snippets
   * Settingsの全スニペットを取得
   * @returns CharacterBehaviorSnippetListResponse Successful Response
   * @throws ApiError
   */
  static listSnippetsApiV1SettingsSettingsIdSnippetsGet({
    settingsId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/snippets",
      path: {
        "settings_id": settingsId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete All Snippets
   * Settingsの全スニペットを一括削除
   * @returns SnippetBulkDeleteResponse Successful Response
   * @throws ApiError
   */
  static deleteAllSnippetsApiV1SettingsSettingsIdSnippetsDelete({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/settings/{settings_id}/snippets",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Snippet
   * 特定のスニペットを取得
   * @returns CharacterBehaviorSnippetResponse Successful Response
   * @throws ApiError
   */
  static getSnippetApiV1SettingsSettingsIdSnippetsSnippetIdGet({
    settingsId,
    snippetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/snippets/{snippet_id}",
      path: {
        "settings_id": settingsId,
        "snippet_id": snippetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Snippet
   * スニペットを更新
   * @returns CharacterBehaviorSnippetResponse Successful Response
   * @throws ApiError
   */
  static updateSnippetApiV1SettingsSettingsIdSnippetsSnippetIdPatch({
    settingsId,
    snippetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/settings/{settings_id}/snippets/{snippet_id}",
      path: {
        "settings_id": settingsId,
        "snippet_id": snippetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Snippet
   * スニペットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSnippetApiV1SettingsSettingsIdSnippetsSnippetIdDelete({
    settingsId,
    snippetId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/settings/{settings_id}/snippets/{snippet_id}",
      path: {
        "settings_id": settingsId,
        "snippet_id": snippetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Snippets
   * SettingsContentからBehaviorSnippetをLLM生成
   *
   * - save=false（デフォルト）: 生成結果を返すのみ
   * - save=true: 生成結果をサブコレクションに保存
   * @returns SnippetGenerateResponse Successful Response
   * @throws ApiError
   */
  static generateSnippetsApiV1SettingsSettingsIdSnippetsGeneratePost({
    settingsId,
    requestBody,
    save = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/snippets/generate",
      path: {
        "settings_id": settingsId
      },
      query: {
        "save": save
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Regenerate Snippets
   * 既存スニペットを修正指示に基づいてLLMで再生成
   *
   * - save=false（デフォルト）: 再生成結果を返すのみ
   * - save=true: 再生成結果をサブコレクションに保存
   * @returns SnippetGenerateResponse Successful Response
   * @throws ApiError
   */
  static regenerateSnippetsApiV1SettingsSettingsIdSnippetsRegeneratePost({
    settingsId,
    requestBody,
    save = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/snippets/regenerate",
      path: {
        "settings_id": settingsId
      },
      query: {
        "save": save
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SettingsSnippetsClientService.ts
var SettingsSnippetsClientService = class {
  /**
   * Generate Snippets From Input
   * Client-input版: テキスト入力からBehaviorSnippetをLLM生成（保存なし）
   *
   * settings_content にJSON文字列またはテキストを渡して、スニペットを生成。
   * @returns SnippetGenerateResponse Successful Response
   * @throws ApiError
   */
  static generateSnippetsFromInputApiV1SettingsSnippetsGeneratePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/snippets/generate",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Regenerate Snippets From Input
   * Client-input版: テキスト入力から既存スニペットをLLMで再生成（保存なし）
   *
   * settings_content と existing_snippets をJSON文字列またはテキストで渡し、
   * modification_instruction で修正指示を与える。
   * @returns SnippetGenerateResponse Successful Response
   * @throws ApiError
   */
  static regenerateSnippetsFromInputApiV1SettingsSnippetsRegeneratePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/snippets/regenerate",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/StateService.ts
var StateService = class {
  /**
   * Create Scene Details
   * シーン詳細を作成
   * @returns CharacterSceneDetailsResponse Successful Response
   * @throws ApiError
   */
  static createSceneDetailsApiV1CharactersCharacterIdStateScenePost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/state/scene",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Scene Details
   * シーン詳細を取得
   * @returns CharacterSceneDetailsResponse Successful Response
   * @throws ApiError
   */
  static getSceneDetailsApiV1CharactersCharacterIdStateSceneGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/state/scene",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Scene Details
   * シーン詳細を更新
   * @returns CharacterSceneDetailsResponse Successful Response
   * @throws ApiError
   */
  static updateSceneDetailsApiV1CharactersCharacterIdStateScenePatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/state/scene",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Scene Details
   * シーン詳細を削除
   * @returns void
   * @throws ApiError
   */
  static deleteSceneDetailsApiV1CharactersCharacterIdStateSceneDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/state/scene",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Turn State
   * ターン状態を作成
   * @returns CharacterTurnStateResponse Successful Response
   * @throws ApiError
   */
  static createTurnStateApiV1CharactersCharacterIdStateTurnPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/state/turn",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Turn State
   * ターン状態を取得
   * @returns CharacterTurnStateResponse Successful Response
   * @throws ApiError
   */
  static getTurnStateApiV1CharactersCharacterIdStateTurnGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/state/turn",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Turn State
   * ターン状態を更新
   * @returns CharacterTurnStateResponse Successful Response
   * @throws ApiError
   */
  static updateTurnStateApiV1CharactersCharacterIdStateTurnPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/state/turn",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Turn State
   * ターン状態を削除
   * @returns void
   * @throws ApiError
   */
  static deleteTurnStateApiV1CharactersCharacterIdStateTurnDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/state/turn",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character State
   * キャラクターの全状態を取得
   * @returns CharacterStateResponse Successful Response
   * @throws ApiError
   */
  static getCharacterStateApiV1CharactersCharacterIdStateGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/state",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/StoriesService.ts
var StoriesService = class {
  /**
   * Create Story
   * ストーリーを作成
   * @returns StoryResponse Successful Response
   * @throws ApiError
   */
  static createStoryApiV1StoriesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Stories
   * ストーリー一覧を取得
   * @returns StoryListResponse Successful Response
   * @throws ApiError
   */
  static listStoriesApiV1StoriesGet({
    filterByOwner = false,
    publishScope,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories",
      query: {
        "filter_by_owner": filterByOwner,
        "publish_scope": publishScope,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Stories
   * 複数のストーリーを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetStoriesApiV1StoriesBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Story
   * ストーリーを取得
   * @returns StoryResponse Successful Response
   * @throws ApiError
   */
  static getStoryApiV1StoriesStoryIdGet({
    storyId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}",
      path: {
        "story_id": storyId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Story
   * ストーリーを更新
   * @returns StoryResponse Successful Response
   * @throws ApiError
   */
  static updateStoryApiV1StoriesStoryIdPatch({
    storyId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/stories/{story_id}",
      path: {
        "story_id": storyId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Story
   * ストーリーを削除
   * @returns StoryDeleteResponse Successful Response
   * @throws ApiError
   */
  static deleteStoryApiV1StoriesStoryIdDelete({
    storyId,
    deleteChildren = true
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/stories/{story_id}",
      path: {
        "story_id": storyId
      },
      query: {
        "delete_children": deleteChildren
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Story With Children
   * ストーリーとその子要素（シーン・リンク）を一括取得
   * @returns StoryWithChildrenResponse Successful Response
   * @throws ApiError
   */
  static getStoryWithChildrenApiV1StoriesStoryIdWithChildrenGet({
    storyId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/with-children",
      path: {
        "story_id": storyId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Duplicate Story
   * ストーリーを複製（シーン・リンクも含む）
   * @returns StoryDuplicateResponse Successful Response
   * @throws ApiError
   */
  static duplicateStoryApiV1StoriesStoryIdDuplicatePost({
    storyId,
    newStoryId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/{story_id}/duplicate",
      path: {
        "story_id": storyId
      },
      query: {
        "new_story_id": newStoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Story Ai Usage
   * ストーリーの参照アセットからAI使用レベルをサジェスト
   * @returns StoryAiUsage Successful Response
   * @throws ApiError
   */
  static suggestStoryAiUsageApiV1StoriesStoryIdSuggestAiUsagePost({
    storyId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/{story_id}/suggest-ai-usage",
      path: {
        "story_id": storyId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Scene
   * シーンを作成
   * @returns StorySceneResponse Successful Response
   * @throws ApiError
   */
  static createSceneApiV1StoriesStoryIdScenesPost({
    storyId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/{story_id}/scenes",
      path: {
        "story_id": storyId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Scenes
   * ストーリーのシーン一覧を取得
   * @returns StorySceneListResponse Successful Response
   * @throws ApiError
   */
  static listScenesApiV1StoriesStoryIdScenesGet({
    storyId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scenes",
      path: {
        "story_id": storyId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Scene
   * シーンを取得
   * @returns StorySceneResponse Successful Response
   * @throws ApiError
   */
  static getSceneApiV1StoriesStoryIdScenesSceneIdGet({
    storyId,
    sceneId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scenes/{scene_id}",
      path: {
        "story_id": storyId,
        "scene_id": sceneId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Scene
   * シーンを更新
   * @returns StorySceneResponse Successful Response
   * @throws ApiError
   */
  static updateSceneApiV1StoriesStoryIdScenesSceneIdPatch({
    storyId,
    sceneId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/stories/{story_id}/scenes/{scene_id}",
      path: {
        "story_id": storyId,
        "scene_id": sceneId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Scene
   * シーンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSceneApiV1StoriesStoryIdScenesSceneIdDelete({
    storyId,
    sceneId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/stories/{story_id}/scenes/{scene_id}",
      path: {
        "story_id": storyId,
        "scene_id": sceneId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Scene Link
   * シーンリンクを作成
   * @returns StorySceneLinkResponse Successful Response
   * @throws ApiError
   */
  static createSceneLinkApiV1StoriesStoryIdSceneLinksPost({
    storyId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/{story_id}/scene-links",
      path: {
        "story_id": storyId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Scene Links
   * ストーリーのシーンリンク一覧を取得
   * @returns StorySceneLinkListResponse Successful Response
   * @throws ApiError
   */
  static listSceneLinksApiV1StoriesStoryIdSceneLinksGet({
    storyId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scene-links",
      path: {
        "story_id": storyId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Scene Link
   * シーンリンクを取得
   * @returns StorySceneLinkResponse Successful Response
   * @throws ApiError
   */
  static getSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdGet({
    storyId,
    linkId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scene-links/{link_id}",
      path: {
        "story_id": storyId,
        "link_id": linkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Scene Link
   * シーンリンクを更新
   * @returns StorySceneLinkResponse Successful Response
   * @throws ApiError
   */
  static updateSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdPatch({
    storyId,
    linkId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/stories/{story_id}/scene-links/{link_id}",
      path: {
        "story_id": storyId,
        "link_id": linkId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Scene Link
   * シーンリンクを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdDelete({
    storyId,
    linkId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/stories/{story_id}/scene-links/{link_id}",
      path: {
        "story_id": storyId,
        "link_id": linkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Outgoing Links
   * 指定シーンから出発するリンク一覧を取得
   * @returns StorySceneLinkListResponse Successful Response
   * @throws ApiError
   */
  static getOutgoingLinksApiV1StoriesStoryIdScenesSceneIdOutgoingLinksGet({
    storyId,
    sceneId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scenes/{scene_id}/outgoing-links",
      path: {
        "story_id": storyId,
        "scene_id": sceneId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/StoryInstancesService.ts
var StoryInstancesService = class {
  /**
   * Create Story Instance
   * @returns StoryInstanceResponse Successful Response
   * @throws ApiError
   */
  static createStoryInstanceApiV1MarketplaceStoryInstancesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/story-instances",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Story Instances
   * @returns StoryInstanceListResponse Successful Response
   * @throws ApiError
   */
  static listStoryInstancesApiV1MarketplaceStoryInstancesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/story-instances",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Story Instance
   * @returns StoryInstanceResponse Successful Response
   * @throws ApiError
   */
  static getStoryInstanceApiV1MarketplaceStoryInstancesInstanceIdGet({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/story-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Story Instance
   * @returns void
   * @throws ApiError
   */
  static deleteStoryInstanceApiV1MarketplaceStoryInstancesInstanceIdDelete({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/story-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Story Instance To Latest
   * @returns StoryInstanceResponse Successful Response
   * @throws ApiError
   */
  static updateStoryInstanceToLatestApiV1MarketplaceStoryInstancesInstanceIdUpdatePost({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/story-instances/{instance_id}/update",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Fork Story Instance
   * @returns any Successful Response
   * @throws ApiError
   */
  static forkStoryInstanceApiV1MarketplaceStoryInstancesInstanceIdForkPost({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/story-instances/{instance_id}/fork",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/StoryTemplatesService.ts
var StoryTemplatesService = class {
  /**
   * Promote Story To Template
   * @returns StoryTemplateResponse Successful Response
   * @throws ApiError
   */
  static promoteStoryToTemplateApiV1MarketplaceStoryTemplatesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/story-templates",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Story Templates
   * @returns StoryTemplateListResponse Successful Response
   * @throws ApiError
   */
  static listStoryTemplatesApiV1MarketplaceStoryTemplatesGet({
    sourceEntityId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/story-templates",
      query: {
        "source_entity_id": sourceEntityId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Story Template
   * @returns StoryTemplateResponse Successful Response
   * @throws ApiError
   */
  static getStoryTemplateApiV1MarketplaceStoryTemplatesTemplateIdGet({
    templateId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/story-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Story Template
   * @returns StoryTemplateResponse Successful Response
   * @throws ApiError
   */
  static updateStoryTemplateApiV1MarketplaceStoryTemplatesTemplateIdPatch({
    templateId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/story-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Story Template
   * @returns void
   * @throws ApiError
   */
  static deleteStoryTemplateApiV1MarketplaceStoryTemplatesTemplateIdDelete({
    templateId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/story-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Fork Story Template
   * @returns any Successful Response
   * @throws ApiError
   */
  static forkStoryTemplateApiV1MarketplaceStoryTemplatesTemplateIdForkPost({
    templateId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/story-templates/{template_id}/fork",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Template Subcollection
   * @returns any Successful Response
   * @throws ApiError
   */
  static getTemplateSubcollectionApiV1MarketplaceStoryTemplatesTemplateIdSubcollectionsSubcollectionNameGet({
    templateId,
    subcollectionName
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/story-templates/{template_id}/subcollections/{subcollection_name}",
      path: {
        "template_id": templateId,
        "subcollection_name": subcollectionName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/TagsService.ts
var TagsService = class {
  /**
   * Search Tags
   * タグを検索
   * @returns TagSearchResultResponse Successful Response
   * @throws ApiError
   */
  static searchTagsApiV1TagsSearchTagsGet({
    query,
    locale = "ja-JP",
    categoryId,
    limit = 50,
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/search/tags",
      query: {
        "query": query,
        "locale": locale,
        "category_id": categoryId,
        "limit": limit,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Taxonomy
   * カテゴリと配下を一括取得
   * @returns TaxonomyResponse Successful Response
   * @throws ApiError
   */
  static getTaxonomyApiV1TagsTaxonomyTagCategoryIdGet({
    tagCategoryId,
    locale = "ja-JP",
    fallback = true,
    depth = -1
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/taxonomy/{tag_category_id}",
      path: {
        "tag_category_id": tagCategoryId
      },
      query: {
        "locale": locale,
        "fallback": fallback,
        "depth": depth
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Tag Category
   * カテゴリを作成
   * @returns TagCategoryResponse Successful Response
   * @throws ApiError
   */
  static createTagCategoryApiV1TagsTagCategoriesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/tag-categories",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Tag Categories
   * カテゴリ一覧を取得
   * @returns TagCategoryListCursorResponse Successful Response
   * @throws ApiError
   */
  static listTagCategoriesApiV1TagsTagCategoriesGet({
    parentId,
    locale = "ja-JP",
    fallback = true,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tag-categories",
      query: {
        "parent_id": parentId,
        "locale": locale,
        "fallback": fallback,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Tag Categories
   * 複数のタグカテゴリを一括取得
   * @returns BatchResponse_TagCategoryResponse_ Successful Response
   * @throws ApiError
   */
  static batchGetTagCategoriesApiV1TagsTagCategoriesBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/tag-categories/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Tag Category
   * カテゴリを取得
   * @returns TagCategoryWithLocaleResponse Successful Response
   * @throws ApiError
   */
  static getTagCategoryApiV1TagsTagCategoriesTagCategoryIdGet({
    tagCategoryId,
    locale = "ja-JP",
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tag-categories/{tag_category_id}",
      path: {
        "tag_category_id": tagCategoryId
      },
      query: {
        "locale": locale,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Tag Category
   * カテゴリを部分更新
   * @returns TagCategoryResponse Successful Response
   * @throws ApiError
   */
  static updateTagCategoryApiV1TagsTagCategoriesTagCategoryIdPatch({
    tagCategoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/tags/tag-categories/{tag_category_id}",
      path: {
        "tag_category_id": tagCategoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Tag Category
   * カテゴリを削除
   * @returns void
   * @throws ApiError
   */
  static deleteTagCategoryApiV1TagsTagCategoriesTagCategoryIdDelete({
    tagCategoryId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/tags/tag-categories/{tag_category_id}",
      path: {
        "tag_category_id": tagCategoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Tag
   * タグを作成
   * @returns TagResponse Successful Response
   * @throws ApiError
   */
  static createTagApiV1TagsTagsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/tags",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Tags
   * タグ一覧を取得
   * @returns TagListCursorResponse Successful Response
   * @throws ApiError
   */
  static listTagsApiV1TagsTagsGet({
    locale = "ja-JP",
    fallback = true,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tags",
      query: {
        "locale": locale,
        "fallback": fallback,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Tags
   * 複数のタグを一括取得
   * @returns BatchResponse_TagResponse_ Successful Response
   * @throws ApiError
   */
  static batchGetTagsApiV1TagsTagsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/tags/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Tag Categories
   * タグが属するカテゴリ一覧
   * @returns TagCategoriesForTagResponse Successful Response
   * @throws ApiError
   */
  static getTagCategoriesApiV1TagsTagsTagIdCategoriesGet({
    tagId,
    locale = "ja-JP",
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tags/{tag_id}/categories",
      path: {
        "tag_id": tagId
      },
      query: {
        "locale": locale,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Similar Tags
   * 類似タグを取得
   * @returns SimilarTagsResponse Successful Response
   * @throws ApiError
   */
  static getSimilarTagsApiV1TagsTagsTagIdSimilarGet({
    tagId,
    locale = "ja-JP",
    withinCategoryId,
    limit = 50,
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tags/{tag_id}/similar",
      path: {
        "tag_id": tagId
      },
      query: {
        "locale": locale,
        "within_category_id": withinCategoryId,
        "limit": limit,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Tag
   * タグを取得
   * @returns TagWithLocaleResponse Successful Response
   * @throws ApiError
   */
  static getTagApiV1TagsTagsTagIdGet({
    tagId,
    locale = "ja-JP",
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tags/{tag_id}",
      path: {
        "tag_id": tagId
      },
      query: {
        "locale": locale,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Tag
   * タグを部分更新
   * @returns TagResponse Successful Response
   * @throws ApiError
   */
  static updateTagApiV1TagsTagsTagIdPatch({
    tagId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/tags/tags/{tag_id}",
      path: {
        "tag_id": tagId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Tag
   * タグを削除
   * @returns void
   * @throws ApiError
   */
  static deleteTagApiV1TagsTagsTagIdDelete({
    tagId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/tags/tags/{tag_id}",
      path: {
        "tag_id": tagId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Link
   * リンクを作成/更新
   * @returns TagCategoryLinkResponse Successful Response
   * @throws ApiError
   */
  static createLinkApiV1TagsLinksPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/links",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Links
   * リンクを取得
   * @returns LinkListCursorResponse Successful Response
   * @throws ApiError
   */
  static getLinksApiV1TagsLinksGet({
    tagCategoryId,
    tagId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/links",
      query: {
        "tag_category_id": tagCategoryId,
        "tag_id": tagId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Reorder Links
   * カテゴリ内のタグ並び替え
   * @returns ReorderResultResponse Successful Response
   * @throws ApiError
   */
  static reorderLinksApiV1TagsLinksReorderPatch({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/tags/links/reorder",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Bulk Upsert Links
   * リンクを一括作成/更新
   * @returns BulkUpsertResultResponse Successful Response
   * @throws ApiError
   */
  static bulkUpsertLinksApiV1TagsLinksBulkUpsertPost({
    requestBody,
    upsert = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/links/bulk-upsert",
      query: {
        "upsert": upsert
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Link
   * リンクを削除
   * @returns void
   * @throws ApiError
   */
  static deleteLinkApiV1TagsLinksLinkKeyDelete({
    linkKey
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/tags/links/{link_key}",
      path: {
        "link_key": linkKey
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Compatibility
   * 相性を作成/更新
   * @returns TagCompatibilityResponse Successful Response
   * @throws ApiError
   */
  static createCompatibilityApiV1TagsCompatibilitiesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/compatibilities",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Compatibilities
   * カテゴリペアで相性一覧を取得
   * @returns CompatibilityListCursorResponse Successful Response
   * @throws ApiError
   */
  static listCompatibilitiesApiV1TagsCompatibilitiesGet({
    leftCategoryId,
    rightCategoryId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/compatibilities",
      query: {
        "left_category_id": leftCategoryId,
        "right_category_id": rightCategoryId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate And Save Compatibilities
   * カテゴリペアの全組み合わせで相性を生成・保存
   * @returns GenerateCompatibilityResultResponse Successful Response
   * @throws ApiError
   */
  static generateAndSaveCompatibilitiesApiV1TagsCompatibilitiesGenerateAndSavePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/compatibilities/generate-and-save",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Compatibility
   * 相性を取得
   * @returns TagCompatibilityResponse Successful Response
   * @throws ApiError
   */
  static getCompatibilityApiV1TagsCompatibilitiesPairKeyGet({
    pairKey
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/compatibilities/{pair_key}",
      path: {
        "pair_key": pairKey
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Compatibility
   * 相性を削除
   * @returns void
   * @throws ApiError
   */
  static deleteCompatibilityApiV1TagsCompatibilitiesPairKeyDelete({
    pairKey
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/tags/compatibilities/{pair_key}",
      path: {
        "pair_key": pairKey
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/ToolDefinitionsService.ts
var ToolDefinitionsService = class {
  /**
   * Create Tool Definition
   * @returns ToolDefinitionResponse Successful Response
   * @throws ApiError
   */
  static createToolDefinitionApiV1CharactersCharacterIdToolDefinitionsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/tool-definitions",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Tool Definitions
   * @returns ToolDefinitionListResponse Successful Response
   * @throws ApiError
   */
  static listToolDefinitionsApiV1CharactersCharacterIdToolDefinitionsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/tool-definitions",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Tool Definition
   * @returns ToolDefinitionResponse Successful Response
   * @throws ApiError
   */
  static getToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdGet({
    characterId,
    toolDefinitionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/tool-definitions/{tool_definition_id}",
      path: {
        "character_id": characterId,
        "tool_definition_id": toolDefinitionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Tool Definition
   * @returns ToolDefinitionResponse Successful Response
   * @throws ApiError
   */
  static updateToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdPatch({
    characterId,
    toolDefinitionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/tool-definitions/{tool_definition_id}",
      path: {
        "character_id": characterId,
        "tool_definition_id": toolDefinitionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Tool Definition
   * @returns void
   * @throws ApiError
   */
  static deleteToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdDelete({
    characterId,
    toolDefinitionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/tool-definitions/{tool_definition_id}",
      path: {
        "character_id": characterId,
        "tool_definition_id": toolDefinitionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Reset Tool Definitions
   * 全ツール定義を削除してデフォルトに戻す。
   * @returns ToolDefinitionListResponse Successful Response
   * @throws ApiError
   */
  static resetToolDefinitionsApiV1CharactersCharacterIdToolDefinitionsResetDefaultsPost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/tool-definitions/reset-defaults",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/TtsService.ts
var TtsService = class {
  /**
   * Get Models Details
   * @returns any Successful Response
   * @throws ApiError
   */
  static getModelsDetailsApiV1TtsModelsDetailsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tts/models/details"
    });
  }
  /**
   * Generate Speech
   * @returns any Successful Response
   * @throws ApiError
   */
  static generateSpeechApiV1TtsGeneratePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tts/generate",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/TurnEndPredictionService.ts
var TurnEndPredictionService = class {
  /**
   * Predict Turn End
   * @returns TurnEndPredictionResponse Successful Response
   * @throws ApiError
   */
  static predictTurnEndTurnEndPredictionPredictPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/turn-end-prediction/predict",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Health Check
   * @returns any Successful Response
   * @throws ApiError
   */
  static healthCheckTurnEndPredictionHealthGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/turn-end-prediction/health"
    });
  }
};

// src/generated/services/UnifiedLlmWrapperService.ts
var UnifiedLlmWrapperService = class {
  /**
   * Create Chat Completion
   * 統合チャット補完エンドポイント（通常チャット用）
   *
   * OpenAI、Claude、Gemini、Vertex AIのAPIを統一したインターフェースで提供します。
   * 通常の会話型チャットに最適化されています。
   *
   * 使用例:
   * - providerとmodelを両方指定: {"provider": "openai", "model": "gpt-4.1-mini"}
   * - providerのみ指定: {"provider": "gemini"} (modelはデフォルト)
   * - 両方未指定: コンテンツに応じて自動選択
   *
   * ストリーミング:
   * - stream=true の場合、SSE形式でレスポンスを返します
   * @returns any Successful Response
   * @throws ApiError
   */
  static createChatCompletionApiV1LlmChatCompletionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/llm/chat/completions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Structured Completion
   * Structured Output専用エンドポイント
   *
   * JSON Schema制約を厳密に遵守する構造化出力専用。
   * 制約違反を最小化し、信頼性の高いJSON出力を保証します。
   *
   * 制約遵守レベル:
   * - OpenAI: 100%保証（strict mode、スキーマ完全遵守）
   * - Claude: Tool Use（高精度、ほぼ100%）
   * - Gemini: response_schema（ベストエフォート、制約違反の可能性あり）
   *
   * 推奨: 制約遵守が重要な場合はOpenAIモデルを明示的に指定してください。
   *
   * ストリーミング:
   * - stream=true の場合、SSE形式でレスポンスを返します
   * @returns any Successful Response
   * @throws ApiError
   */
  static createStructuredCompletionApiV1LlmStructuredCompletionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/llm/structured/completions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Models
   * 利用可能なモデル一覧を返す（2025年最新版）
   * @returns any Successful Response
   * @throws ApiError
   */
  static listModelsApiV1LlmModelsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm/models"
    });
  }
};

// src/generated/services/UsageSummaryService.ts
var UsageSummaryService = class {
  /**
   * Get Usage Summary
   * @returns UsageSummaryResponse Successful Response
   * @throws ApiError
   */
  static getUsageSummaryApiV1CharactersCharacterIdUsageSummaryGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/usage-summary",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Accumulate Usage
   * @returns UsageSummaryResponse Successful Response
   * @throws ApiError
   */
  static accumulateUsageApiV1CharactersCharacterIdUsageSummaryAccumulatePost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/usage-summary/accumulate",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/UsersService.ts
var UsersService = class {
  /**
   * Get User
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  static getUserApiV1UsersGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users"
    });
  }
  /**
   * Create User
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  static createUserApiV1UsersPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete User
   * @returns void
   * @throws ApiError
   */
  static deleteUserApiV1UsersDelete() {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/users"
    });
  }
  /**
   * Update User
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  static updateUserApiV1UsersPatch({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Users
   * 複数のユーザーを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetUsersApiV1UsersBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/VideoAssetsService.ts
var VideoAssetsService = class {
  /**
   * Create Video Asset
   * 動画アセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns VideoAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createVideoAssetApiV1VideoAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/video-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Video Assets
   * 複数のビデオアセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetVideoAssetsApiV1VideoAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/video-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Video Assets
   * Search video assets using field-based filters
   * @returns VideoAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchVideoAssetsApiV1VideoAssetsSearchGet({
    role,
    maxDuration,
    durationRange,
    title,
    ownerId,
    tagIds,
    minLevel,
    artistName,
    resolutionRange,
    hasAudio,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/search",
      query: {
        "role": role,
        "max_duration": maxDuration,
        "duration_range": durationRange,
        "title": title,
        "owner_id": ownerId,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "artist_name": artistName,
        "resolution_range": resolutionRange,
        "has_audio": hasAudio,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Video Asset
   * 動画アセットを取得
   * @returns VideoAssetResponse Successful Response
   * @throws ApiError
   */
  static getVideoAssetApiV1VideoAssetsVideoIdGet({
    videoId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/{video_id}",
      path: {
        "video_id": videoId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Video Asset
   * 動画アセットのメタデータを更新（オーナーのみ）
   * @returns VideoAssetResponse Successful Response
   * @throws ApiError
   */
  static updateVideoAssetApiV1VideoAssetsVideoIdPatch({
    videoId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/video-assets/{video_id}",
      path: {
        "video_id": videoId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Video Asset
   * 動画アセットを削除（オーナーのみ）
   * @returns void
   * @throws ApiError
   */
  static deleteVideoAssetApiV1VideoAssetsVideoIdDelete({
    videoId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/video-assets/{video_id}",
      path: {
        "video_id": videoId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Video Asset Versions
   * 動画アセットのバージョン一覧を取得
   * @returns VideoAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listVideoAssetVersionsApiV1VideoAssetsVideoIdVersionsGet({
    videoId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/{video_id}/versions",
      path: {
        "video_id": videoId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Video Asset Version
   * 動画アセットに新しいバージョンを追加
   * @returns VideoAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addVideoAssetVersionApiV1VideoAssetsVideoIdVersionsPost({
    videoId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/video-assets/{video_id}/versions",
      path: {
        "video_id": videoId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Video Version
   * 動画アセットの最新バージョンを取得
   * @returns VideoAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestVideoVersionApiV1VideoAssetsVideoIdVersionsLatestGet({
    videoId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/{video_id}/versions/latest",
      path: {
        "video_id": videoId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Video Asset Version
   * 動画アセットの特定バージョンを取得
   * @returns VideoAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getVideoAssetVersionApiV1VideoAssetsVideoIdVersionsVersionIdGet({
    videoId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/{video_id}/versions/{version_id}",
      path: {
        "video_id": videoId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Video Asset Version
   * 動画アセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteVideoAssetVersionApiV1VideoAssetsVideoIdVersionsVersionIdDelete({
    videoId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/video-assets/{video_id}/versions/{version_id}",
      path: {
        "video_id": videoId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Video Assets By Role
   * ロール別に動画アセットを取得
   * @returns VideoAssetListResponse Successful Response
   * @throws ApiError
   */
  static getVideoAssetsByRoleApiV1VideoAssetsRoleRoleGet({
    role,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/role/{role}",
      path: {
        "role": role
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/VoicesService.ts
var VoicesService = class {
  /**
   * Create Voice
   * 音声モデルを作成
   * @returns VoiceResponse Successful Response
   * @throws ApiError
   */
  static createVoiceApiV1VoicesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/voices",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Voices
   * 音声モデル一覧を取得
   * @returns VoiceListResponse Successful Response
   * @throws ApiError
   */
  static listVoicesApiV1VoicesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/voices",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Voices
   * 音声モデルを検索
   * @returns VoiceSearchResponse Successful Response
   * @throws ApiError
   */
  static searchVoicesApiV1VoicesSearchGet({
    languageCode,
    gender,
    ageGroup,
    provider,
    publishScope,
    ownerId,
    tagIds,
    minLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/voices/search",
      query: {
        "language_code": languageCode,
        "gender": gender,
        "age_group": ageGroup,
        "provider": provider,
        "publish_scope": publishScope,
        "owner_id": ownerId,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Voice
   * 音声モデルを取得
   * @returns VoiceResponse Successful Response
   * @throws ApiError
   */
  static getVoiceApiV1VoicesVoiceIdGet({
    voiceId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/voices/{voice_id}",
      path: {
        "voice_id": voiceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Voice
   * 音声モデルを更新（PATCH - 指定されたフィールドのみ更新）
   * @returns VoiceResponse Successful Response
   * @throws ApiError
   */
  static updateVoiceApiV1VoicesVoiceIdPatch({
    voiceId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/voices/{voice_id}",
      path: {
        "voice_id": voiceId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Voice
   * 音声モデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteVoiceApiV1VoicesVoiceIdDelete({
    voiceId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/voices/{voice_id}",
      path: {
        "voice_id": voiceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Auto Tag Voice By Id
   * 特定の音声モデルに対して自動タグ付けを実行
   * @returns any Successful Response
   * @throws ApiError
   */
  static autoTagVoiceByIdApiV1VoicesVoiceIdAutoTagPost({
    voiceId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/voices/{voice_id}/auto-tag",
      path: {
        "voice_id": voiceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Voices
   * 複数の音声モデルを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetVoicesApiV1VoicesBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/voices/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/VrmaAssetsService.ts
var VrmaAssetsService = class {
  /**
   * Create Vrma Asset
   * VRMAアセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * サムネイル画像・プレビューアニメーション画像は、ファイル直接アップロードまたは既存asset_id参照のいずれかを指定可能。
   * 両方を同時に指定した場合は400エラー。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns VRMAAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createVrmaAssetApiV1VrmaAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/vrma-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Vrma Assets
   * VRMAアセットを検索
   *
   * 管理者は全件閲覧可。一般ユーザーはPRIVATE/UNLISTED/未審査のアセットは自分のもののみ表示。
   * access_filterを指定すると、そのアクセスレベルに一致するアセットのみ返す。
   * @returns VRMAAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchVrmaAssetsApiV1VrmaAssetsSearchGet({
    ownerId,
    motionId,
    motionType,
    emotionId,
    targetGender,
    dataSource,
    tagIds,
    minLevel,
    maxAiLevel,
    isLoopable,
    hasRootMotion,
    minDuration,
    maxDuration,
    accessFilter,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrma-assets/search",
      query: {
        "owner_id": ownerId,
        "motion_id": motionId,
        "motion_type": motionType,
        "emotion_id": emotionId,
        "target_gender": targetGender,
        "data_source": dataSource,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "is_loopable": isLoopable,
        "has_root_motion": hasRootMotion,
        "min_duration": minDuration,
        "max_duration": maxDuration,
        "access_filter": accessFilter,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Vrma Assets
   * 複数のVRMAアセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetVrmaAssetsApiV1VrmaAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/vrma-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrma Asset
   * VRMAアセットの詳細情報を取得
   * @returns VRMAAssetResponse Successful Response
   * @throws ApiError
   */
  static getVrmaAssetApiV1VrmaAssetsVrmaIdGet({
    vrmaId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrma-assets/{vrma_id}",
      path: {
        "vrma_id": vrmaId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Vrma Asset
   * VRMAアセットのメタデータを更新（オーナーのみ）
   * @returns VRMAAssetResponse Successful Response
   * @throws ApiError
   */
  static updateVrmaAssetApiV1VrmaAssetsVrmaIdPatch({
    vrmaId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/vrma-assets/{vrma_id}",
      path: {
        "vrma_id": vrmaId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Vrma Asset
   * VRMAアセットを削除（オーナーのみ）
   * @returns void
   * @throws ApiError
   */
  static deleteVrmaAssetApiV1VrmaAssetsVrmaIdDelete({
    vrmaId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/vrma-assets/{vrma_id}",
      path: {
        "vrma_id": vrmaId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrma File Url
   * VRMAファイルのダウンロード用一時URL（Signed URL）を返す
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getVrmaFileUrlApiV1VrmaAssetsVrmaIdFileGet({
    vrmaId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrma-assets/{vrma_id}/file",
      path: {
        "vrma_id": vrmaId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/VrmAssetsService.ts
var VrmAssetsService = class {
  /**
   * Create Vrm Asset
   * VRMアセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns VRMAssetResponse Successful Response
   * @throws ApiError
   */
  static createVrmAssetApiV1VrmAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/vrm-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Vrm Assets
   * VRMアセットを検索
   *
   * Args:
   * owner_id: オーナーIDでフィルタ
   * model_name: モデル名でフィルタ
   * artist_name: アーティスト名でフィルタ
   * tags: カンマ区切りのタグでフィルタ（すべて一致、重み順でソート）
   * min_level: タグの最小レベル (core, secondary, flavor)
   * limit: 最大取得件数
   * cursor: ページネーションカーソル
   * @returns VRMAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchVrmAssetsApiV1VrmAssetsSearchGet({
    ownerId,
    modelName,
    artistName,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrm-assets/search",
      query: {
        "owner_id": ownerId,
        "model_name": modelName,
        "artist_name": artistName,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Vrm Assets
   * 複数のVRMアセットを一括取得（アクセス不可は除外）
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetVrmAssetsApiV1VrmAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/vrm-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrm Asset
   * VRMアセットの詳細情報を取得
   *
   * キャッシュ更新判定に使用するため、updated_atを含む
   *
   * Returns:
   * VRMAsset: アセットの詳細情報
   * @returns VRMAssetResponse Successful Response
   * @throws ApiError
   */
  static getVrmAssetApiV1VrmAssetsVrmIdGet({
    vrmId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrm-assets/{vrm_id}",
      path: {
        "vrm_id": vrmId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Vrm Asset
   * VRMアセットのメタデータを更新（オーナーのみ）
   * @returns VRMAssetResponse Successful Response
   * @throws ApiError
   */
  static updateVrmAssetApiV1VrmAssetsVrmIdPatch({
    vrmId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/vrm-assets/{vrm_id}",
      path: {
        "vrm_id": vrmId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Vrm Asset
   * VRMアセットを削除（オーナーのみ、参照されている場合は削除不可）
   * @returns void
   * @throws ApiError
   */
  static deleteVrmAssetApiV1VrmAssetsVrmIdDelete({
    vrmId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/vrm-assets/{vrm_id}",
      path: {
        "vrm_id": vrmId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrm File Url
   * VRMファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getVrmFileUrlApiV1VrmAssetsVrmIdFileGet({
    vrmId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrm-assets/{vrm_id}/file",
      path: {
        "vrm_id": vrmId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrm Protected File
   * 保護済みVRMファイルのダウンロード情報を返す
   *
   * ファイルはメッシュ難読化 + zstd圧縮 + AES-256-GCM暗号化済み。
   * クライアントは /content-protection/keys/{key_id} から鍵を取得して復号する。
   * @returns ProtectedFileResponse Successful Response
   * @throws ApiError
   */
  static getVrmProtectedFileApiV1VrmAssetsVrmIdProtectedFileGet({
    vrmId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrm-assets/{vrm_id}/protected-file",
      path: {
        "vrm_id": vrmId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  GeneratedApi,
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
});
