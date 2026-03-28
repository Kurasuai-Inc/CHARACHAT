// src/environments.ts
var ENVIRONMENTS = {
  staging: {
    apiBaseUrl: "https://charahome-internal-api-stg-zanlo6glyq-an.a.run.app/api/v1",
    textConverterBaseUrl: "https://text-converter-service-434673878610.asia-northeast1.run.app",
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
    async conversationStream(characterId, request) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request)
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
    async *streamConversation(characterId, request) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request)
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
    async conversationRawStream(characterId, request) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation/raw`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request)
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
    async *streamConversationRaw(characterId, request) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation/raw`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request)
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
    async conversationDebugStream(characterId, request) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation/debug`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request)
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
    async *streamConversationDebug(characterId, request) {
      const response = await fetch(
        `${this.baseUrl}/characters/${characterId}/conversation/debug`,
        {
          method: "POST",
          headers: this.getHeaders("application/json"),
          body: JSON.stringify(request)
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
    async generateTTS(request) {
      const response = await fetch(`${this.baseUrl}/tts/generate`, {
        method: "POST",
        headers: this.getHeaders("application/json"),
        body: JSON.stringify({
          text: request.text,
          speaker_name: request.speaker_name,
          language: request.language || "JA",
          return_lip_sync: request.return_lip_sync ?? false
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
        let base64;
        if (typeof Buffer !== "undefined") {
          base64 = Buffer.from(uint8Array).toString("base64");
        } else {
          const binary = String.fromCharCode(...uint8Array);
          base64 = btoa(binary);
        }
        console.log("[CharahomeApiClient] TTS generated, audio size:", arrayBuffer.byteLength);
        return {
          audio: base64,
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
    llmChatStream(request, onChunk) {
      const abortController = new AbortController();
      let isDone = false;
      const done = (async () => {
        try {
          const response = await fetch(`${this.baseUrl}/llm/chat/completions`, {
            method: "POST",
            headers: this.getHeaders("application/json"),
            body: JSON.stringify({
              ...request,
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
      const [emotions, motions] = await Promise.all([emotionsPromise, motionsPromise]);
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
        main_color: character.main_color,
        sub_color: character.sub_color
      };
      console.log("[CharahomeApiClient] CharacterData ready:", {
        characterId,
        emotionsCount: sdkEmotions.length,
        motionsCount: sdkMotions.length
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
    async recoverQuota(userToken, request) {
      const response = await fetch(`${this.baseUrl}/api/v1/quota/recover`, {
        method: "POST",
        headers: this.getUserHeaders(userToken, "application/json"),
        body: JSON.stringify(request)
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
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const json = typeof atob === "function" ? atob(base64) : Buffer.from(base64, "base64").toString("utf-8");
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
    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => {
        this.dbPromise = null;
        reject(request.error);
      };
    });
    return this.dbPromise;
  }
  async get(key) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => {
        const record = request.result;
        if (!record) {
          resolve(null);
          return;
        }
        resolve({
          meta: record.meta,
          data: record.data
        });
      };
      request.onerror = () => reject(request.error);
    });
  }
  async put(key, entry) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const record = {
        meta: entry.meta,
        data: entry.data
      };
      const request = store.put(record, key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
  async delete(key) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.delete(key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
  async has(key) {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request = store.getKey(key);
      request.onsuccess = () => resolve(request.result !== void 0);
      request.onerror = () => reject(request.error);
    });
  }
  async getMeta(key) {
    const entry = await this.get(key);
    return entry?.meta ?? null;
  }
  async listMeta() {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => {
        const records = request.result;
        resolve(records.map((r) => r.meta));
      };
      request.onerror = () => reject(request.error);
    });
  }
  async totalSize() {
    const metas = await this.listMeta();
    return metas.reduce((sum, m) => sum + m.sizeBytes, 0);
  }
  async clear() {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const request = store.clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
};

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
function base64ToUint8Array(base64) {
  const normalized = base64.replace(/-/g, "+").replace(/_/g, "/");
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

// src/cache/persistent-store.ts
function createDefaultPersistentStore() {
  if (typeof indexedDB !== "undefined") {
    return new IndexedDBCacheStore();
  }
  return new NoopCacheStore();
}

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

// src/types/config.ts
var DEFAULT_API_BASE_URL = getEnvironmentConfig("staging").apiBaseUrl;
var DEFAULT_TEXT_CONVERTER_BASE_URL = getEnvironmentConfig("staging").textConverterBaseUrl;

// src/cache/filesystem-store.ts
var IV_LENGTH = 12;
var AUTH_TAG_LENGTH = 16;
var PBKDF2_ITERATIONS = 1e5;
var KEY_LENGTH = 32;
var SALT = "charahome-asset-cache-v1";
var FilesystemCacheStore = class {
  constructor(config) {
    this.encryptionKey = null;
    this.initialized = false;
    this.cacheDir = config.cacheDir;
    this.metaDir = "";
    this.dataDir = "";
    this.encryptionPassphrase = config.encryptionPassphrase;
  }
  async init() {
    if (this.initialized) return;
    this.crypto = await import("crypto");
    this.fs = await import("fs/promises");
    this.path = await import("path");
    this.metaDir = this.path.join(this.cacheDir, "meta");
    this.dataDir = this.path.join(this.cacheDir, "data");
    await this.fs.mkdir(this.metaDir, { recursive: true });
    await this.fs.mkdir(this.dataDir, { recursive: true });
    this.encryptionKey = this.crypto.pbkdf2Sync(
      this.encryptionPassphrase,
      SALT,
      PBKDF2_ITERATIONS,
      KEY_LENGTH,
      "sha256"
    );
    this.initialized = true;
  }
  async get(key) {
    await this.init();
    const meta = await this.getMeta(key);
    if (!meta) return null;
    const dataPath = this.dataPath(key);
    try {
      const raw = await this.fs.readFile(dataPath);
      const policy = CACHE_POLICIES[meta.category];
      const data = policy?.encryptOnDisk ? this.decrypt(raw) : raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength);
      return { meta, data };
    } catch (err) {
      console.warn(`[AssetCache] FS read error for ${key}:`, err);
      await this.delete(key);
      return null;
    }
  }
  async put(key, entry) {
    await this.init();
    const policy = CACHE_POLICIES[entry.meta.category];
    const fileData = policy?.encryptOnDisk ? this.encrypt(entry.data) : Buffer.from(entry.data);
    await this.fs.writeFile(this.dataPath(key), fileData);
    await this.fs.writeFile(this.metaPath(key), JSON.stringify(entry.meta));
  }
  async delete(key) {
    await this.init();
    try {
      await this.fs.unlink(this.dataPath(key));
    } catch {
    }
    try {
      await this.fs.unlink(this.metaPath(key));
    } catch {
    }
  }
  async has(key) {
    await this.init();
    try {
      await this.fs.access(this.metaPath(key));
      return true;
    } catch {
      return false;
    }
  }
  async getMeta(key) {
    await this.init();
    try {
      const raw = await this.fs.readFile(this.metaPath(key), "utf-8");
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  async listMeta() {
    await this.init();
    try {
      const files = await this.fs.readdir(this.metaDir);
      const metas = [];
      for (const file of files) {
        if (!file.endsWith(".json")) continue;
        try {
          const raw = await this.fs.readFile(this.path.join(this.metaDir, file), "utf-8");
          metas.push(JSON.parse(raw));
        } catch {
        }
      }
      return metas;
    } catch {
      return [];
    }
  }
  async totalSize() {
    const metas = await this.listMeta();
    return metas.reduce((sum, m) => sum + m.sizeBytes, 0);
  }
  async clear() {
    await this.init();
    try {
      const metaFiles = await this.fs.readdir(this.metaDir);
      for (const f of metaFiles) {
        await this.fs.unlink(this.path.join(this.metaDir, f));
      }
    } catch {
    }
    try {
      const dataFiles = await this.fs.readdir(this.dataDir);
      for (const f of dataFiles) {
        await this.fs.unlink(this.path.join(this.dataDir, f));
      }
    } catch {
    }
  }
  /**
   * Encrypt data with AES-256-GCM.
   * Output: [12-byte IV][ciphertext][16-byte AuthTag]
   */
  encrypt(data) {
    const iv = this.crypto.randomBytes(IV_LENGTH);
    const cipher = this.crypto.createCipheriv("aes-256-gcm", this.encryptionKey, iv);
    const encrypted = Buffer.concat([
      cipher.update(Buffer.from(data)),
      cipher.final()
    ]);
    const authTag = cipher.getAuthTag();
    return Buffer.concat([iv, encrypted, authTag]);
  }
  /**
   * Decrypt AES-256-GCM encrypted data.
   * Input: [12-byte IV][ciphertext][16-byte AuthTag]
   */
  decrypt(raw) {
    const iv = raw.subarray(0, IV_LENGTH);
    const authTag = raw.subarray(raw.length - AUTH_TAG_LENGTH);
    const ciphertext = raw.subarray(IV_LENGTH, raw.length - AUTH_TAG_LENGTH);
    const decipher = this.crypto.createDecipheriv("aes-256-gcm", this.encryptionKey, iv);
    decipher.setAuthTag(authTag);
    const decrypted = Buffer.concat([
      decipher.update(ciphertext),
      decipher.final()
    ]);
    return decrypted.buffer.slice(decrypted.byteOffset, decrypted.byteOffset + decrypted.byteLength);
  }
  /**
   * Sanitize cache key for use as a filename.
   */
  sanitizeKey(key) {
    return key.replace(/[^a-zA-Z0-9_-]/g, "_");
  }
  metaPath(key) {
    return this.path.join(this.metaDir, `${this.sanitizeKey(key)}.json`);
  }
  dataPath(key) {
    return this.path.join(this.dataDir, this.sanitizeKey(key));
  }
};

export {
  ENVIRONMENTS,
  resolveEnvironment,
  getEnvironmentConfig,
  getFirebaseConfig,
  BaseClient,
  AvatarApiMixin,
  PROTECTION_FORMAT_V1,
  AES_GCM_TAG_SIZE,
  VrmAssetApiMixin,
  VrmaAssetApiMixin,
  ImageAssetApiMixin,
  AudioAssetApiMixin,
  VideoAssetApiMixin,
  AnimatedImageAssetApiMixin,
  AnimationClipAssetApiMixin,
  AssetBundleAssetApiMixin,
  AvatarModelApiMixin,
  EmotionFormatApiMixin,
  CharacterFileApiMixin,
  ConversationApiMixin,
  TtsApiMixin,
  LlmApiMixin,
  AssetCategory,
  PersistenceTier,
  buildCacheKey,
  CharacterApiMixin,
  CachingMixin,
  NoopCacheStore,
  CACHE_POLICIES,
  CacheManager,
  extractUidFromToken,
  IndexedDBCacheStore,
  ContentProtectionDecoder,
  CharahomeApiClient,
  createCharahomeApiClient,
  DEFAULT_API_BASE_URL,
  DEFAULT_TEXT_CONVERTER_BASE_URL,
  FilesystemCacheStore
};
