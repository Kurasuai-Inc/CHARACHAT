import {
  CharahomeApiClient,
  DEFAULT_API_BASE_URL
} from "../chunk-PIPROP5W.mjs";
import {
  FilesystemCacheStore
} from "../chunk-URD7Z6KT.mjs";
import "../chunk-NXASMBQR.mjs";
import "../chunk-HE7KASUR.mjs";

// src/electron/types.ts
var IPC_CHANNELS = {
  // API initialization
  INIT: "charahome:init",
  // ============ Generic API Proxy ============
  // Call any GeneratedApi service method via single IPC channel
  CALL: "charahome:call",
  // List all available services and methods
  LIST_SERVICES: "charahome:listServices",
  // ============ Avatar API (binary + aggregation) ============
  AVATAR_GET_ICON_URL: "charahome:avatar:getIconUrl",
  AVATAR_UPLOAD: "charahome:avatar:upload",
  FETCH_AVATAR_MODEL: "charahome:fetchAvatarModel",
  // ============ Settings API (GeneratedApi-based) ============
  SETTINGS_CREATE_WITH_OVERVIEW: "charahome:settings:createWithOverview",
  // ============ Character API (aggregation) ============
  CHARACTER_DUPLICATE_AND_REGISTER: "charahome:character:duplicateAndRegister",
  FETCH_CHARACTER_DATA: "charahome:fetchCharacterData",
  // ============ VRMA Asset API (binary) ============
  VRMA_UPLOAD: "charahome:vrma:upload",
  FETCH_ANIMATION: "charahome:fetchAnimation",
  // ============ Conversation API (streaming) ============
  CONVERSATION_START: "charahome:conversation:start",
  CONVERSATION_CHUNK: "charahome:conversation:chunk",
  CONVERSATION_END: "charahome:conversation:end",
  CONVERSATION_ERROR: "charahome:conversation:error",
  CONVERSATION_CANCEL: "charahome:conversation:cancel",
  CONVERSATION_RAW_START: "charahome:conversation:raw:start",
  CONVERSATION_RAW_CHUNK: "charahome:conversation:raw:chunk",
  CONVERSATION_RAW_END: "charahome:conversation:raw:end",
  CONVERSATION_RAW_ERROR: "charahome:conversation:raw:error",
  CONVERSATION_RAW_CANCEL: "charahome:conversation:raw:cancel",
  // ============ LLM API (streaming only) ============
  LLM_CHAT_START: "charahome:llm:chat:start",
  LLM_CHAT_CHUNK: "charahome:llm:chat:chunk",
  LLM_CHAT_END: "charahome:llm:chat:end",
  LLM_CHAT_ERROR: "charahome:llm:chat:error",
  LLM_CHAT_CANCEL: "charahome:llm:chat:cancel",
  // ============ TTS API (streaming) ============
  TTS_GENERATE: "charahome:tts:generate",
  // ============ Conversation Debug API (streaming) ============
  CONVERSATION_DEBUG_START: "charahome:conversation:debug:start",
  CONVERSATION_DEBUG_CHUNK: "charahome:conversation:debug:chunk",
  CONVERSATION_DEBUG_END: "charahome:conversation:debug:end",
  CONVERSATION_DEBUG_ERROR: "charahome:conversation:debug:error",
  CONVERSATION_DEBUG_CANCEL: "charahome:conversation:debug:cancel",
  // ============ Image Asset API (binary) ============
  IMAGE_ASSET_UPLOAD: "charahome:imageAsset:upload",
  IMAGE_ASSET_DOWNLOAD: "charahome:imageAsset:download",
  IMAGE_ASSET_ADD_VERSION: "charahome:imageAsset:addVersion",
  USER_UPLOAD_ICON: "charahome:user:uploadIcon",
  // ============ VRM Asset API (binary) ============
  VRM_ASSET_CREATE: "charahome:vrmAsset:create",
  VRM_ASSET_DOWNLOAD: "charahome:vrmAsset:download",
  // ============ Audio Asset API (binary) ============
  AUDIO_ASSET_CREATE: "charahome:audioAsset:create",
  AUDIO_ASSET_ADD_VERSION: "charahome:audioAsset:addVersion",
  // ============ Video Asset API (binary) ============
  VIDEO_ASSET_CREATE: "charahome:videoAsset:create",
  VIDEO_ASSET_ADD_VERSION: "charahome:videoAsset:addVersion",
  // ============ Animated Image Asset API (binary) ============
  ANIMATED_IMAGE_ASSET_CREATE: "charahome:animatedImageAsset:create",
  ANIMATED_IMAGE_ASSET_ADD_VERSION: "charahome:animatedImageAsset:addVersion",
  ANIMATED_IMAGE_ASSET_DOWNLOAD: "charahome:animatedImageAsset:download",
  // ============ Animation Clip Asset API (binary) ============
  ANIMATION_CLIP_ASSET_CREATE: "charahome:animationClipAsset:create",
  ANIMATION_CLIP_ASSET_DOWNLOAD: "charahome:animationClipAsset:download",
  // ============ Asset Bundle Asset API (binary) ============
  ASSET_BUNDLE_ASSET_CREATE: "charahome:assetBundleAsset:create",
  ASSET_BUNDLE_ASSET_ADD_VERSION: "charahome:assetBundleAsset:addVersion",
  ASSET_BUNDLE_ASSET_ADD_VARIANT: "charahome:assetBundleAsset:addVariant",
  ASSET_BUNDLE_ASSET_DOWNLOAD: "charahome:assetBundleAsset:download",
  // ============ Avatar Model API (binary) ============
  AVATAR_VRM_MODEL_UPLOAD: "charahome:avatar:vrmModel:upload",
  AVATAR_SPRITE_MODEL_UPLOAD: "charahome:avatar:spriteModel:upload",
  AVATAR_FACE_ICON_MODEL_UPLOAD: "charahome:avatar:faceIconModel:upload",
  AVATAR_ASSET_BUNDLE_MODEL_UPLOAD: "charahome:avatar:assetBundleModel:upload",
  // ============ Emotion Format API (binary) ============
  EMOTION_SPRITE_FORMAT_UPLOAD: "charahome:emotion:spriteFormat:upload",
  EMOTION_FACE_ICON_FORMAT_UPLOAD: "charahome:emotion:faceIconFormat:upload",
  // ============ Character File API (binary) ============
  CHARACTER_CREATE_WITH_ICONS: "charahome:character:createWithIcons",
  CHARACTER_UPDATE_WITH_ICONS: "charahome:character:updateWithIcons",
  // ============ Avatar with Icons API (binary) ============
  AVATAR_CREATE_WITH_ICONS: "charahome:avatar:createWithIcons",
  AVATAR_UPDATE_WITH_ICONS: "charahome:avatar:updateWithIcons",
  // ============ Quota API ============
  QUOTA_GET_STATUS: "charahome:quota:getStatus",
  QUOTA_RECOVER: "charahome:quota:recover"
};

// src/electron/handlers/state.ts
var apiClient = null;
var activeStreams = /* @__PURE__ */ new Map();
function setApiClient(client) {
  apiClient = client;
}
function getApiClientInternal() {
  return apiClient;
}
function ensureClient() {
  if (!apiClient) {
    throw new Error("[CHARAHOME SDK] API client not initialized. Call init first.");
  }
  return apiClient;
}

// src/electron/handlers/core.ts
function registerCoreHandlers(ipcMain) {
  ipcMain.handle(
    IPC_CHANNELS.INIT,
    async (_event, config) => {
      console.log("[CHARAHOME SDK] Initializing API client");
      const baseUrl = config.baseUrl ?? DEFAULT_API_BASE_URL;
      const client = new CharahomeApiClient({
        baseUrl,
        authToken: config.authToken
      });
      setApiClient(client);
      const { OpenAPI } = await import("../OpenAPI-UZJFYPDP.mjs");
      OpenAPI.BASE = baseUrl;
      OpenAPI.TOKEN = config.authToken;
      return { success: true };
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.CALL,
    async (_event, serviceName, methodName, args) => {
      const GeneratedApi = await import("../generated-YE643UOM.mjs");
      const service = GeneratedApi[serviceName];
      if (!service || typeof service !== "function") {
        throw new Error(`[CHARAHOME SDK] Unknown service: ${serviceName}`);
      }
      const method = service[methodName];
      if (typeof method !== "function") {
        throw new Error(`[CHARAHOME SDK] Unknown method: ${serviceName}.${methodName}`);
      }
      console.log(`[CHARAHOME SDK] Calling ${serviceName}.${methodName}`);
      if (!args || Object.keys(args).length === 0) {
        return method();
      }
      if ("_positional" in args && Array.isArray(args._positional)) {
        return method(...args._positional);
      }
      const methodStr = method.toString();
      const paramMatch = methodStr.match(/^[^(]*\(([^)]*)\)/);
      if (!paramMatch) {
        return method(args);
      }
      const paramNames = paramMatch[1].split(",").map((p) => p.trim().split("=")[0].trim().split(":")[0].trim()).filter((p) => p.length > 0);
      const positionalArgs = paramNames.map((name) => args[name]);
      return method(...positionalArgs);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.LIST_SERVICES,
    async () => {
      const GeneratedApi = await import("../generated-YE643UOM.mjs");
      const services = {};
      for (const [name, service] of Object.entries(GeneratedApi)) {
        if (typeof service === "function" && name.endsWith("Service")) {
          const serviceClass = service;
          const methods = Object.getOwnPropertyNames(service).filter(
            (m) => typeof serviceClass[m] === "function" && m !== "length" && m !== "name" && m !== "prototype"
          );
          services[name] = methods;
        }
      }
      return services;
    }
  );
}

// src/electron/handlers/binary.ts
function toArrayBuffer(data) {
  return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
}
function toOptionalArrayBuffer(data) {
  return data ? toArrayBuffer(data) : void 0;
}
function registerBinaryHandlers(ipcMain) {
  ipcMain.handle(
    IPC_CHANNELS.AVATAR_UPLOAD,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading avatar:", options.avatarName);
      return ensureClient().uploadAvatar(toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.VRMA_UPLOAD,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading VRMA asset:", options.motionId);
      const clientOptions = { ...options };
      if (clientOptions.thumbnailImage) {
        clientOptions.thumbnailImage = toArrayBuffer(clientOptions.thumbnailImage);
      }
      if (clientOptions.previewAnimatedImage) {
        clientOptions.previewAnimatedImage = toArrayBuffer(clientOptions.previewAnimatedImage);
      }
      return ensureClient().uploadVrmaAsset(toArrayBuffer(file), clientOptions, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.IMAGE_ASSET_UPLOAD,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading image asset:", options.role);
      return ensureClient().uploadImageAsset(toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.USER_UPLOAD_ICON,
    async (_event, file, userToken) => {
      console.log("[CHARAHOME SDK] Uploading user icon");
      return ensureClient().uploadUserIcon(toArrayBuffer(file), userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.VRM_ASSET_CREATE,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Creating VRM asset:", options.modelName);
      return ensureClient().createVrmAsset(toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AUDIO_ASSET_CREATE,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Creating audio asset:", options.title);
      return ensureClient().createAudioAsset(toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.VIDEO_ASSET_CREATE,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Creating video asset:", options.title);
      return ensureClient().createVideoAsset(toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.IMAGE_ASSET_ADD_VERSION,
    async (_event, imageId, file, userToken) => {
      console.log("[CHARAHOME SDK] Adding image asset version:", imageId);
      return ensureClient().addImageAssetVersion(imageId, toArrayBuffer(file), userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AUDIO_ASSET_ADD_VERSION,
    async (_event, audioId, file, userToken, thumbnail) => {
      console.log("[CHARAHOME SDK] Adding audio asset version:", audioId);
      return ensureClient().addAudioAssetVersion(audioId, toArrayBuffer(file), userToken, toOptionalArrayBuffer(thumbnail));
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.VIDEO_ASSET_ADD_VERSION,
    async (_event, videoId, file, userToken, thumbnail) => {
      console.log("[CHARAHOME SDK] Adding video asset version:", videoId);
      return ensureClient().addVideoAssetVersion(videoId, toArrayBuffer(file), userToken, toOptionalArrayBuffer(thumbnail));
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ANIMATED_IMAGE_ASSET_CREATE,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Creating animated image asset:", options.name || options.format);
      return ensureClient().createAnimatedImageAsset(toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ANIMATED_IMAGE_ASSET_ADD_VERSION,
    async (_event, assetId, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Adding animated image asset version:", assetId);
      return ensureClient().addAnimatedImageAssetVersion(assetId, toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ANIMATED_IMAGE_ASSET_DOWNLOAD,
    async (_event, assetId, quality) => {
      console.log("[CHARAHOME SDK] Downloading animated image:", assetId);
      const buffer = await ensureClient().downloadAnimatedImageFile(assetId, quality);
      return new Uint8Array(buffer);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ANIMATION_CLIP_ASSET_CREATE,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Creating animation clip asset:", options.motionId);
      return ensureClient().createAnimationClipAsset(toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ANIMATION_CLIP_ASSET_DOWNLOAD,
    async (_event, clipId) => {
      console.log("[CHARAHOME SDK] Downloading animation clip:", clipId);
      const buffer = await ensureClient().downloadAnimationClipFile(clipId);
      return new Uint8Array(buffer);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ASSET_BUNDLE_ASSET_CREATE,
    async (_event, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Creating asset bundle asset:", options.platform, options.arch);
      return ensureClient().createAssetBundleAsset(toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ASSET_BUNDLE_ASSET_ADD_VERSION,
    async (_event, assetBundleId, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Adding asset bundle version:", assetBundleId);
      return ensureClient().addAssetBundleAssetVersion(assetBundleId, toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ASSET_BUNDLE_ASSET_ADD_VARIANT,
    async (_event, assetBundleId, versionId, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Adding asset bundle variant:", assetBundleId, versionId);
      return ensureClient().addAssetBundleVariant(assetBundleId, versionId, toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.ASSET_BUNDLE_ASSET_DOWNLOAD,
    async (_event, assetBundleId, platform, arch) => {
      console.log("[CHARAHOME SDK] Downloading asset bundle:", assetBundleId, platform, arch);
      const buffer = await ensureClient().downloadAssetBundleFile(assetBundleId, platform, arch);
      return new Uint8Array(buffer);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AVATAR_VRM_MODEL_UPLOAD,
    async (_event, avatarId, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading avatar VRM model:", avatarId);
      return ensureClient().uploadAvatarVrmModel(avatarId, toArrayBuffer(file), options, userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AVATAR_SPRITE_MODEL_UPLOAD,
    async (_event, avatarId, files, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading avatar sprite model:", avatarId);
      return ensureClient().uploadAvatarSpriteModel(
        avatarId,
        {
          baseImage: toArrayBuffer(files.baseImage),
          eyelidImage: toOptionalArrayBuffer(files.eyelidImage),
          eyeballImage: toOptionalArrayBuffer(files.eyeballImage),
          mouthImage: toOptionalArrayBuffer(files.mouthImage)
        },
        options,
        userToken
      );
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AVATAR_FACE_ICON_MODEL_UPLOAD,
    async (_event, avatarId, files, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading avatar face icon model:", avatarId);
      return ensureClient().uploadAvatarFaceIconModel(
        avatarId,
        {
          baseImage: toArrayBuffer(files.baseImage),
          eyelidImage: toOptionalArrayBuffer(files.eyelidImage),
          eyeballImage: toOptionalArrayBuffer(files.eyeballImage),
          mouthImage: toOptionalArrayBuffer(files.mouthImage)
        },
        options,
        userToken
      );
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AVATAR_ASSET_BUNDLE_MODEL_UPLOAD,
    async (_event, avatarId, file, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading avatar asset bundle model:", avatarId);
      return ensureClient().uploadAvatarAssetBundleModel(
        avatarId,
        file ? toArrayBuffer(file) : void 0,
        options,
        userToken
      );
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.EMOTION_SPRITE_FORMAT_UPLOAD,
    async (_event, avatarId, expressionId, files, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading sprite emotion format:", avatarId, expressionId);
      return ensureClient().uploadSpriteEmotionFormat(
        avatarId,
        expressionId,
        {
          imageComposite: toOptionalArrayBuffer(files.imageComposite),
          imageBody: toOptionalArrayBuffer(files.imageBody),
          imageEyelid: toOptionalArrayBuffer(files.imageEyelid),
          imageMouth: toOptionalArrayBuffer(files.imageMouth)
        },
        options,
        userToken
      );
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.EMOTION_FACE_ICON_FORMAT_UPLOAD,
    async (_event, avatarId, expressionId, files, options, userToken) => {
      console.log("[CHARAHOME SDK] Uploading face icon emotion format:", avatarId, expressionId);
      return ensureClient().uploadFaceIconEmotionFormat(
        avatarId,
        expressionId,
        {
          imageComposite: toOptionalArrayBuffer(files.imageComposite),
          imageBody: toOptionalArrayBuffer(files.imageBody),
          imageEyelid: toOptionalArrayBuffer(files.imageEyelid),
          imageMouth: toOptionalArrayBuffer(files.imageMouth)
        },
        options,
        userToken
      );
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.CHARACTER_CREATE_WITH_ICONS,
    async (_event, options, userToken, squareIcon, rectangleIcon) => {
      console.log("[CHARAHOME SDK] Creating character with icons:", options.characterName);
      return ensureClient().createCharacterWithIcons(options, userToken, toOptionalArrayBuffer(squareIcon), toOptionalArrayBuffer(rectangleIcon));
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.CHARACTER_UPDATE_WITH_ICONS,
    async (_event, characterId, options, userToken, squareIcon, rectangleIcon) => {
      console.log("[CHARAHOME SDK] Updating character with icons:", characterId);
      return ensureClient().updateCharacterWithIcons(characterId, options, userToken, toOptionalArrayBuffer(squareIcon), toOptionalArrayBuffer(rectangleIcon));
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AVATAR_CREATE_WITH_ICONS,
    async (_event, options, userToken, squareIcon, rectangleIcon) => {
      console.log("[CHARAHOME SDK] Creating avatar with icons:", options.avatarName);
      return ensureClient().createAvatarWithIcons(options, userToken, toOptionalArrayBuffer(squareIcon), toOptionalArrayBuffer(rectangleIcon));
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AVATAR_UPDATE_WITH_ICONS,
    async (_event, avatarId, options, userToken, squareIcon, rectangleIcon) => {
      console.log("[CHARAHOME SDK] Updating avatar with icons:", avatarId);
      return ensureClient().updateAvatarWithIcons(avatarId, options, userToken, toOptionalArrayBuffer(squareIcon), toOptionalArrayBuffer(rectangleIcon));
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.FETCH_AVATAR_MODEL,
    async (_event, avatarId, modelType) => {
      console.log("[CHARAHOME SDK] Fetching avatar model:", avatarId, modelType);
      const buffer = await ensureClient().fetchAvatarModel(avatarId, modelType);
      return new Uint8Array(buffer);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.FETCH_ANIMATION,
    async (_event, vrmaAssetId) => {
      console.log("[CHARAHOME SDK] Fetching animation:", vrmaAssetId);
      const buffer = await ensureClient().downloadAnimationFile(vrmaAssetId);
      return new Uint8Array(buffer);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.VRM_ASSET_DOWNLOAD,
    async (_event, vrmId) => {
      console.log("[CHARAHOME SDK] Downloading VRM file:", vrmId);
      const buffer = await ensureClient().downloadVrmFile(vrmId);
      return new Uint8Array(buffer);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.IMAGE_ASSET_DOWNLOAD,
    async (_event, imageId, resolution) => {
      console.log("[CHARAHOME SDK] Downloading image:", imageId);
      const buffer = await ensureClient().downloadImageFile(imageId, resolution);
      return new Uint8Array(buffer);
    }
  );
}

// src/electron/handlers/streaming.ts
function registerStreamingHandlers(ipcMain) {
  ipcMain.handle(
    IPC_CHANNELS.CONVERSATION_START,
    async (event, streamId, characterId, request) => {
      const sender = event.sender;
      const abortController = new AbortController();
      activeStreams.set(streamId, abortController);
      console.log("[CHARAHOME SDK] Starting conversation stream:", streamId, characterId);
      streamConversation(
        ensureClient(),
        sender,
        streamId,
        characterId,
        request,
        abortController.signal
      );
      return { streamId };
    }
  );
  ipcMain.handle(IPC_CHANNELS.CONVERSATION_CANCEL, (_event, streamId) => {
    const controller = activeStreams.get(streamId);
    if (controller) {
      console.log("[CHARAHOME SDK] Cancelling conversation stream:", streamId);
      controller.abort();
      activeStreams.delete(streamId);
      return { cancelled: true };
    }
    return { cancelled: false };
  });
  ipcMain.handle(
    IPC_CHANNELS.CONVERSATION_RAW_START,
    async (event, streamId, characterId, request) => {
      const sender = event.sender;
      const abortController = new AbortController();
      activeStreams.set(streamId, abortController);
      console.log("[CHARAHOME SDK] Starting conversation raw stream:", streamId, characterId);
      streamConversationRaw(
        ensureClient(),
        sender,
        streamId,
        characterId,
        request,
        abortController.signal
      );
      return { streamId };
    }
  );
  ipcMain.handle(IPC_CHANNELS.CONVERSATION_RAW_CANCEL, (_event, streamId) => {
    const controller = activeStreams.get(streamId);
    if (controller) {
      console.log("[CHARAHOME SDK] Cancelling conversation raw stream:", streamId);
      controller.abort();
      activeStreams.delete(streamId);
      return { cancelled: true };
    }
    return { cancelled: false };
  });
  ipcMain.handle(
    IPC_CHANNELS.CONVERSATION_DEBUG_START,
    async (event, streamId, characterId, request) => {
      const sender = event.sender;
      const abortController = new AbortController();
      activeStreams.set(streamId, abortController);
      console.log("[CHARAHOME SDK] Starting conversation debug stream:", streamId, characterId);
      streamConversationDebug(
        ensureClient(),
        sender,
        streamId,
        characterId,
        request,
        abortController.signal
      );
      return { streamId };
    }
  );
  ipcMain.handle(IPC_CHANNELS.CONVERSATION_DEBUG_CANCEL, (_event, streamId) => {
    const controller = activeStreams.get(streamId);
    if (controller) {
      console.log("[CHARAHOME SDK] Cancelling conversation debug stream:", streamId);
      controller.abort();
      activeStreams.delete(streamId);
      return { cancelled: true };
    }
    return { cancelled: false };
  });
  ipcMain.handle(
    IPC_CHANNELS.LLM_CHAT_START,
    async (event, streamId, request) => {
      const sender = event.sender;
      const abortController = new AbortController();
      activeStreams.set(streamId, abortController);
      console.log("[CHARAHOME SDK] Starting LLM chat stream:", streamId);
      streamLlmChat(
        ensureClient(),
        sender,
        streamId,
        request,
        abortController.signal
      );
      return { streamId };
    }
  );
  ipcMain.handle(IPC_CHANNELS.LLM_CHAT_CANCEL, (_event, streamId) => {
    const controller = activeStreams.get(streamId);
    if (controller) {
      console.log("[CHARAHOME SDK] Cancelling LLM chat stream:", streamId);
      controller.abort();
      activeStreams.delete(streamId);
      return { cancelled: true };
    }
    return { cancelled: false };
  });
  ipcMain.handle(
    IPC_CHANNELS.TTS_GENERATE,
    async (_event, request) => {
      console.log("[CHARAHOME SDK] Generating TTS:", request.text.substring(0, 30) + "...");
      return ensureClient().generateTTS(request);
    }
  );
}
async function pipeStreamToIpc(generator, sender, streamId, signal, channels, label) {
  try {
    for await (const chunk of generator) {
      if (signal.aborted) {
        console.log(`[CHARAHOME SDK] ${label} stream aborted:`, streamId);
        break;
      }
      sender.send(channels.chunk, streamId, chunk);
    }
    if (!signal.aborted) {
      sender.send(channels.end, streamId);
    }
  } catch (error) {
    console.error(`[CHARAHOME SDK] ${label} stream error:`, error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    sender.send(channels.error, streamId, errorMessage);
  } finally {
    activeStreams.delete(streamId);
  }
}
async function streamConversation(client, sender, streamId, characterId, request, signal) {
  return pipeStreamToIpc(
    client.streamConversation(characterId, request),
    sender,
    streamId,
    signal,
    {
      chunk: IPC_CHANNELS.CONVERSATION_CHUNK,
      end: IPC_CHANNELS.CONVERSATION_END,
      error: IPC_CHANNELS.CONVERSATION_ERROR
    },
    "Conversation"
  );
}
async function streamConversationRaw(client, sender, streamId, characterId, request, signal) {
  return pipeStreamToIpc(
    client.streamConversationRaw(characterId, request),
    sender,
    streamId,
    signal,
    {
      chunk: IPC_CHANNELS.CONVERSATION_RAW_CHUNK,
      end: IPC_CHANNELS.CONVERSATION_RAW_END,
      error: IPC_CHANNELS.CONVERSATION_RAW_ERROR
    },
    "ConversationRaw"
  );
}
async function streamConversationDebug(client, sender, streamId, characterId, request, signal) {
  return pipeStreamToIpc(
    client.streamConversationDebug(characterId, request),
    sender,
    streamId,
    signal,
    {
      chunk: IPC_CHANNELS.CONVERSATION_DEBUG_CHUNK,
      end: IPC_CHANNELS.CONVERSATION_DEBUG_END,
      error: IPC_CHANNELS.CONVERSATION_DEBUG_ERROR
    },
    "ConversationDebug"
  );
}
async function streamLlmChat(client, sender, streamId, request, signal) {
  try {
    const { done } = client.llmChatStream(request, (chunk) => {
      if (signal.aborted) return;
      sender.send(IPC_CHANNELS.LLM_CHAT_CHUNK, streamId, chunk);
    });
    await done;
    if (!signal.aborted) {
      sender.send(IPC_CHANNELS.LLM_CHAT_END, streamId);
    }
  } catch (error) {
    console.error("[CHARAHOME SDK] LLM chat stream error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    sender.send(IPC_CHANNELS.LLM_CHAT_ERROR, streamId, errorMessage);
  } finally {
    activeStreams.delete(streamId);
  }
}

// src/electron/handlers/special.ts
function registerSpecialHandlers(ipcMain) {
  ipcMain.handle(
    IPC_CHANNELS.SETTINGS_CREATE_WITH_OVERVIEW,
    async (_event, request) => {
      console.log("[CHARAHOME SDK] Creating settings with description");
      const { SettingsService } = await import("../generated-YE643UOM.mjs");
      return SettingsService.createSettingsWithDescriptionApiV1SettingsWithDescriptionPost({
        requestBody: request
      });
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.FETCH_CHARACTER_DATA,
    async (_event, characterId) => {
      console.log("[CHARAHOME SDK] Fetching character data (aggregated):", characterId);
      return ensureClient().fetchCharacterData(characterId);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.CHARACTER_DUPLICATE_AND_REGISTER,
    async (_event, sourceCharacterId, userToken) => {
      console.log("[CHARAHOME SDK] Duplicating and registering character:", sourceCharacterId);
      const newCharacterId = await ensureClient().duplicateAndRegisterCharacter(sourceCharacterId, userToken);
      console.log("[CHARAHOME SDK] New character ID:", newCharacterId);
      return newCharacterId;
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.AVATAR_GET_ICON_URL,
    async (_event, avatarId, resolution) => {
      console.log("[CHARAHOME SDK] Getting avatar icon URL:", avatarId);
      return ensureClient().getAvatarIconUrl(avatarId, resolution);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.QUOTA_GET_STATUS,
    async (_event, userToken) => {
      console.log("[CHARAHOME SDK] Getting quota status");
      return ensureClient().getQuotaStatus(userToken);
    }
  );
  ipcMain.handle(
    IPC_CHANNELS.QUOTA_RECOVER,
    async (_event, userToken, request) => {
      console.log("[CHARAHOME SDK] Recovering quota:", request.method);
      return ensureClient().recoverQuota(userToken, request);
    }
  );
}

// src/electron/handlers/index.ts
function registerAllHandlers(ipcMain) {
  registerCoreHandlers(ipcMain);
  registerBinaryHandlers(ipcMain);
  registerStreamingHandlers(ipcMain);
  registerSpecialHandlers(ipcMain);
}

// src/electron/main.ts
function registerCharahomeIpcHandlers(ipcMain) {
  registerAllHandlers(ipcMain);
}
function getApiClient() {
  return getApiClientInternal();
}
function setCachePersistentStore(store) {
  const client = getApiClientInternal();
  if (!client) {
    console.warn("[CharahomeIPC] Cannot set cache store: API client not initialized");
    return;
  }
  if (client.cacheManager) {
    client.cacheManager.setPersistentStore(store);
  } else {
    console.warn("[CharahomeIPC] Cannot set cache store: cache not enabled");
  }
}

// src/electron/preload.ts
import { ipcRenderer } from "electron";
var streamIdCounter = 0;
function generateStreamId() {
  return `stream-${Date.now()}-${++streamIdCounter}`;
}
function createCharahomePreloadApi() {
  return {
    init: (config) => {
      return ipcRenderer.invoke(IPC_CHANNELS.INIT, config);
    },
    // ============ Generic API Proxy ============
    call: (serviceName, methodName, args) => {
      return ipcRenderer.invoke(IPC_CHANNELS.CALL, serviceName, methodName, args);
    },
    listServices: () => {
      return ipcRenderer.invoke(IPC_CHANNELS.LIST_SERVICES);
    },
    // ============ Avatar API (binary + aggregation) ============
    getAvatarIconUrl: (avatarId, resolution) => {
      return ipcRenderer.invoke(IPC_CHANNELS.AVATAR_GET_ICON_URL, avatarId, resolution);
    },
    uploadAvatar: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.AVATAR_UPLOAD, uint8Array, options, userToken);
    },
    fetchAvatarModel: async (avatarId, modelType) => {
      const uint8Array = await ipcRenderer.invoke(
        IPC_CHANNELS.FETCH_AVATAR_MODEL,
        avatarId,
        modelType
      );
      return new Uint8Array(uint8Array).buffer;
    },
    // ============ Settings API ============
    createSettingsWithOverview: (request, userToken) => {
      return ipcRenderer.invoke(IPC_CHANNELS.SETTINGS_CREATE_WITH_OVERVIEW, request, userToken);
    },
    // ============ Character API (aggregation) ============
    duplicateAndRegisterCharacter: (sourceCharacterId, userToken) => {
      return ipcRenderer.invoke(IPC_CHANNELS.CHARACTER_DUPLICATE_AND_REGISTER, sourceCharacterId, userToken);
    },
    fetchCharacterData: (characterId) => {
      return ipcRenderer.invoke(IPC_CHANNELS.FETCH_CHARACTER_DATA, characterId);
    },
    // ============ VRMA Asset API (binary) ============
    uploadVrmaAsset: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      const ipcOptions = { ...options };
      if (options.thumbnailImage) {
        const buf = options.thumbnailImage instanceof Blob ? await options.thumbnailImage.arrayBuffer() : options.thumbnailImage;
        ipcOptions.thumbnailImage = new Uint8Array(buf);
      }
      if (options.previewAnimatedImage) {
        const buf = options.previewAnimatedImage instanceof Blob ? await options.previewAnimatedImage.arrayBuffer() : options.previewAnimatedImage;
        ipcOptions.previewAnimatedImage = new Uint8Array(buf);
      }
      return ipcRenderer.invoke(IPC_CHANNELS.VRMA_UPLOAD, uint8Array, ipcOptions, userToken);
    },
    fetchAnimation: async (vrmaAssetId) => {
      const uint8Array = await ipcRenderer.invoke(
        IPC_CHANNELS.FETCH_ANIMATION,
        vrmaAssetId
      );
      return new Uint8Array(uint8Array).buffer;
    },
    // ============ Conversation API (streaming) ============
    conversationStream: (characterId, request, onChunk) => {
      const streamId = generateStreamId();
      let resolvePromise;
      let rejectPromise;
      const done = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      const chunkHandler = (_event, id, chunk) => {
        if (id === streamId) {
          onChunk(chunk);
        }
      };
      const endHandler = (_event, id) => {
        if (id === streamId) {
          cleanup();
          resolvePromise();
        }
      };
      const errorHandler = (_event, id, errorMessage) => {
        if (id === streamId) {
          cleanup();
          rejectPromise(new Error(errorMessage));
        }
      };
      const cleanup = () => {
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_CHUNK, chunkHandler);
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_END, endHandler);
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_ERROR, errorHandler);
      };
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_CHUNK, chunkHandler);
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_END, endHandler);
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_ERROR, errorHandler);
      ipcRenderer.invoke(IPC_CHANNELS.CONVERSATION_START, streamId, characterId, request).catch((err) => {
        cleanup();
        rejectPromise(err);
      });
      return {
        cancel: () => {
          ipcRenderer.invoke(IPC_CHANNELS.CONVERSATION_CANCEL, streamId);
          cleanup();
          resolvePromise();
        },
        done
      };
    },
    conversationRawStream: (characterId, request, onChunk) => {
      const streamId = generateStreamId();
      let resolvePromise;
      let rejectPromise;
      const done = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      const chunkHandler = (_event, id, chunk) => {
        if (id === streamId) {
          onChunk(chunk);
        }
      };
      const endHandler = (_event, id) => {
        if (id === streamId) {
          cleanup();
          resolvePromise();
        }
      };
      const errorHandler = (_event, id, errorMessage) => {
        if (id === streamId) {
          cleanup();
          rejectPromise(new Error(errorMessage));
        }
      };
      const cleanup = () => {
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_RAW_CHUNK, chunkHandler);
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_RAW_END, endHandler);
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_RAW_ERROR, errorHandler);
      };
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_RAW_CHUNK, chunkHandler);
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_RAW_END, endHandler);
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_RAW_ERROR, errorHandler);
      ipcRenderer.invoke(IPC_CHANNELS.CONVERSATION_RAW_START, streamId, characterId, request).catch((err) => {
        cleanup();
        rejectPromise(err);
      });
      return {
        cancel: () => {
          ipcRenderer.invoke(IPC_CHANNELS.CONVERSATION_RAW_CANCEL, streamId);
          cleanup();
          resolvePromise();
        },
        done
      };
    },
    conversationDebugStream: (characterId, request, onChunk) => {
      const streamId = generateStreamId();
      let resolvePromise;
      let rejectPromise;
      const done = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      const chunkHandler = (_event, id, chunk) => {
        if (id === streamId) {
          onChunk(chunk);
        }
      };
      const endHandler = (_event, id) => {
        if (id === streamId) {
          cleanup();
          resolvePromise();
        }
      };
      const errorHandler = (_event, id, errorMessage) => {
        if (id === streamId) {
          cleanup();
          rejectPromise(new Error(errorMessage));
        }
      };
      const cleanup = () => {
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_DEBUG_CHUNK, chunkHandler);
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_DEBUG_END, endHandler);
        ipcRenderer.removeListener(IPC_CHANNELS.CONVERSATION_DEBUG_ERROR, errorHandler);
      };
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_DEBUG_CHUNK, chunkHandler);
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_DEBUG_END, endHandler);
      ipcRenderer.on(IPC_CHANNELS.CONVERSATION_DEBUG_ERROR, errorHandler);
      ipcRenderer.invoke(IPC_CHANNELS.CONVERSATION_DEBUG_START, streamId, characterId, request).catch((err) => {
        cleanup();
        rejectPromise(err);
      });
      return {
        cancel: () => {
          ipcRenderer.invoke(IPC_CHANNELS.CONVERSATION_DEBUG_CANCEL, streamId);
          cleanup();
          resolvePromise();
        },
        done
      };
    },
    // ============ LLM API (streaming only) ============
    llmChatStream: (request, onChunk) => {
      const streamId = generateStreamId();
      let resolvePromise;
      let rejectPromise;
      const done = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      const chunkHandler = (_event, id, chunk) => {
        if (id === streamId) {
          onChunk(chunk);
        }
      };
      const endHandler = (_event, id) => {
        if (id === streamId) {
          cleanup();
          resolvePromise();
        }
      };
      const errorHandler = (_event, id, errorMessage) => {
        if (id === streamId) {
          cleanup();
          rejectPromise(new Error(errorMessage));
        }
      };
      const cleanup = () => {
        ipcRenderer.removeListener(IPC_CHANNELS.LLM_CHAT_CHUNK, chunkHandler);
        ipcRenderer.removeListener(IPC_CHANNELS.LLM_CHAT_END, endHandler);
        ipcRenderer.removeListener(IPC_CHANNELS.LLM_CHAT_ERROR, errorHandler);
      };
      ipcRenderer.on(IPC_CHANNELS.LLM_CHAT_CHUNK, chunkHandler);
      ipcRenderer.on(IPC_CHANNELS.LLM_CHAT_END, endHandler);
      ipcRenderer.on(IPC_CHANNELS.LLM_CHAT_ERROR, errorHandler);
      ipcRenderer.invoke(IPC_CHANNELS.LLM_CHAT_START, streamId, request).catch((err) => {
        cleanup();
        rejectPromise(err);
      });
      return {
        cancel: () => {
          ipcRenderer.invoke(IPC_CHANNELS.LLM_CHAT_CANCEL, streamId);
          cleanup();
          resolvePromise();
        },
        done
      };
    },
    // ============ TTS API ============
    generateTTS: (request) => {
      return ipcRenderer.invoke(IPC_CHANNELS.TTS_GENERATE, request);
    },
    // ============ Image Asset API (binary) ============
    uploadImageAsset: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.IMAGE_ASSET_UPLOAD, uint8Array, options, userToken);
    },
    downloadImageFile: async (imageId, resolution) => {
      const uint8Array = await ipcRenderer.invoke(IPC_CHANNELS.IMAGE_ASSET_DOWNLOAD, imageId, resolution);
      return new Uint8Array(uint8Array).buffer;
    },
    addImageAssetVersion: async (imageId, file, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.IMAGE_ASSET_ADD_VERSION, imageId, uint8Array, userToken);
    },
    uploadUserIcon: async (file, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.USER_UPLOAD_ICON, uint8Array, userToken);
    },
    // ============ VRM Asset API (binary) ============
    createVrmAsset: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.VRM_ASSET_CREATE, uint8Array, options, userToken);
    },
    downloadVrmFile: async (vrmId) => {
      const uint8Array = await ipcRenderer.invoke(IPC_CHANNELS.VRM_ASSET_DOWNLOAD, vrmId);
      return new Uint8Array(uint8Array).buffer;
    },
    // ============ Audio Asset API (binary) ============
    createAudioAsset: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.AUDIO_ASSET_CREATE, uint8Array, options, userToken);
    },
    addAudioAssetVersion: async (audioId, file, userToken, thumbnail) => {
      const uint8Array = new Uint8Array(file);
      const thumbArray = thumbnail ? new Uint8Array(thumbnail) : void 0;
      return ipcRenderer.invoke(IPC_CHANNELS.AUDIO_ASSET_ADD_VERSION, audioId, uint8Array, userToken, thumbArray);
    },
    // ============ Video Asset API (binary) ============
    createVideoAsset: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.VIDEO_ASSET_CREATE, uint8Array, options, userToken);
    },
    addVideoAssetVersion: async (videoId, file, userToken, thumbnail) => {
      const uint8Array = new Uint8Array(file);
      const thumbArray = thumbnail ? new Uint8Array(thumbnail) : void 0;
      return ipcRenderer.invoke(IPC_CHANNELS.VIDEO_ASSET_ADD_VERSION, videoId, uint8Array, userToken, thumbArray);
    },
    // ============ Animated Image Asset API (binary) ============
    createAnimatedImageAsset: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.ANIMATED_IMAGE_ASSET_CREATE, uint8Array, options, userToken);
    },
    addAnimatedImageAssetVersion: async (assetId, file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.ANIMATED_IMAGE_ASSET_ADD_VERSION, assetId, uint8Array, options, userToken);
    },
    downloadAnimatedImageFile: async (assetId, quality) => {
      const uint8Array = await ipcRenderer.invoke(IPC_CHANNELS.ANIMATED_IMAGE_ASSET_DOWNLOAD, assetId, quality);
      return new Uint8Array(uint8Array).buffer;
    },
    // ============ Animation Clip Asset API (binary) ============
    createAnimationClipAsset: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.ANIMATION_CLIP_ASSET_CREATE, uint8Array, options, userToken);
    },
    downloadAnimationClipFile: async (clipId) => {
      const uint8Array = await ipcRenderer.invoke(IPC_CHANNELS.ANIMATION_CLIP_ASSET_DOWNLOAD, clipId);
      return new Uint8Array(uint8Array).buffer;
    },
    // ============ Asset Bundle Asset API (binary) ============
    createAssetBundleAsset: async (file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.ASSET_BUNDLE_ASSET_CREATE, uint8Array, options, userToken);
    },
    addAssetBundleAssetVersion: async (assetBundleId, file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.ASSET_BUNDLE_ASSET_ADD_VERSION, assetBundleId, uint8Array, options, userToken);
    },
    addAssetBundleVariant: async (assetBundleId, versionId, file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.ASSET_BUNDLE_ASSET_ADD_VARIANT, assetBundleId, versionId, uint8Array, options, userToken);
    },
    downloadAssetBundleFile: async (assetBundleId, platform, arch) => {
      const uint8Array = await ipcRenderer.invoke(IPC_CHANNELS.ASSET_BUNDLE_ASSET_DOWNLOAD, assetBundleId, platform, arch);
      return new Uint8Array(uint8Array).buffer;
    },
    // ============ Avatar Model API (binary) ============
    uploadAvatarVrmModel: async (avatarId, file, options, userToken) => {
      const uint8Array = new Uint8Array(file);
      return ipcRenderer.invoke(IPC_CHANNELS.AVATAR_VRM_MODEL_UPLOAD, avatarId, uint8Array, options, userToken);
    },
    uploadAvatarSpriteModel: async (avatarId, files, options, userToken) => {
      const serialized = {
        baseImage: new Uint8Array(files.baseImage),
        eyelidImage: files.eyelidImage ? new Uint8Array(files.eyelidImage) : void 0,
        eyeballImage: files.eyeballImage ? new Uint8Array(files.eyeballImage) : void 0,
        mouthImage: files.mouthImage ? new Uint8Array(files.mouthImage) : void 0
      };
      return ipcRenderer.invoke(IPC_CHANNELS.AVATAR_SPRITE_MODEL_UPLOAD, avatarId, serialized, options, userToken);
    },
    uploadAvatarFaceIconModel: async (avatarId, files, options, userToken) => {
      const serialized = {
        baseImage: new Uint8Array(files.baseImage),
        eyelidImage: files.eyelidImage ? new Uint8Array(files.eyelidImage) : void 0,
        eyeballImage: files.eyeballImage ? new Uint8Array(files.eyeballImage) : void 0,
        mouthImage: files.mouthImage ? new Uint8Array(files.mouthImage) : void 0
      };
      return ipcRenderer.invoke(IPC_CHANNELS.AVATAR_FACE_ICON_MODEL_UPLOAD, avatarId, serialized, options, userToken);
    },
    uploadAvatarAssetBundleModel: async (avatarId, file, options, userToken) => {
      const uint8Array = file ? new Uint8Array(file) : void 0;
      return ipcRenderer.invoke(IPC_CHANNELS.AVATAR_ASSET_BUNDLE_MODEL_UPLOAD, avatarId, uint8Array, options, userToken);
    },
    // ============ Emotion Format API (binary) ============
    uploadSpriteEmotionFormat: async (avatarId, expressionId, files, options, userToken) => {
      const serialized = {
        imageComposite: files.imageComposite ? new Uint8Array(files.imageComposite) : void 0,
        imageBody: files.imageBody ? new Uint8Array(files.imageBody) : void 0,
        imageEyelid: files.imageEyelid ? new Uint8Array(files.imageEyelid) : void 0,
        imageMouth: files.imageMouth ? new Uint8Array(files.imageMouth) : void 0
      };
      return ipcRenderer.invoke(IPC_CHANNELS.EMOTION_SPRITE_FORMAT_UPLOAD, avatarId, expressionId, serialized, options, userToken);
    },
    uploadFaceIconEmotionFormat: async (avatarId, expressionId, files, options, userToken) => {
      const serialized = {
        imageComposite: files.imageComposite ? new Uint8Array(files.imageComposite) : void 0,
        imageBody: files.imageBody ? new Uint8Array(files.imageBody) : void 0,
        imageEyelid: files.imageEyelid ? new Uint8Array(files.imageEyelid) : void 0,
        imageMouth: files.imageMouth ? new Uint8Array(files.imageMouth) : void 0
      };
      return ipcRenderer.invoke(IPC_CHANNELS.EMOTION_FACE_ICON_FORMAT_UPLOAD, avatarId, expressionId, serialized, options, userToken);
    },
    // ============ Character File API (binary) ============
    createCharacterWithIcons: async (options, userToken, squareIcon, rectangleIcon) => {
      const sq = squareIcon ? new Uint8Array(squareIcon) : void 0;
      const rect = rectangleIcon ? new Uint8Array(rectangleIcon) : void 0;
      return ipcRenderer.invoke(IPC_CHANNELS.CHARACTER_CREATE_WITH_ICONS, options, userToken, sq, rect);
    },
    updateCharacterWithIcons: async (characterId, options, userToken, squareIcon, rectangleIcon) => {
      const sq = squareIcon ? new Uint8Array(squareIcon) : void 0;
      const rect = rectangleIcon ? new Uint8Array(rectangleIcon) : void 0;
      return ipcRenderer.invoke(IPC_CHANNELS.CHARACTER_UPDATE_WITH_ICONS, characterId, options, userToken, sq, rect);
    },
    // ============ Avatar with Icons API (binary) ============
    createAvatarWithIcons: async (options, userToken, squareIcon, rectangleIcon) => {
      const sq = squareIcon ? new Uint8Array(squareIcon) : void 0;
      const rect = rectangleIcon ? new Uint8Array(rectangleIcon) : void 0;
      return ipcRenderer.invoke(IPC_CHANNELS.AVATAR_CREATE_WITH_ICONS, options, userToken, sq, rect);
    },
    updateAvatarWithIcons: async (avatarId, options, userToken, squareIcon, rectangleIcon) => {
      const sq = squareIcon ? new Uint8Array(squareIcon) : void 0;
      const rect = rectangleIcon ? new Uint8Array(rectangleIcon) : void 0;
      return ipcRenderer.invoke(IPC_CHANNELS.AVATAR_UPDATE_WITH_ICONS, avatarId, options, userToken, sq, rect);
    },
    // ============ Quota API ============
    getQuotaStatus: (userToken) => {
      return ipcRenderer.invoke(IPC_CHANNELS.QUOTA_GET_STATUS, userToken);
    },
    recoverQuota: (userToken, request) => {
      return ipcRenderer.invoke(IPC_CHANNELS.QUOTA_RECOVER, userToken, request);
    }
  };
}
export {
  FilesystemCacheStore,
  IPC_CHANNELS,
  createCharahomePreloadApi,
  getApiClient,
  registerCharahomeIpcHandlers,
  setCachePersistentStore
};
