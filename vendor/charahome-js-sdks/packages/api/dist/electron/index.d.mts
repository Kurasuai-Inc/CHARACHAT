import { IpcMain } from 'electron';
import { C as CharahomeApiClient, a9 as ImageResolution, p as AvatarUploadOptions, q as AvatarCreateResponse, M as ModelType, v as SettingsWithOverviewRequest, w as SettingsCreateResponse, K as CharacterData, $ as VrmaUploadOptions, a0 as VrmaUploadResponse, a2 as ConversationRequest, a3 as ConversationChunk, aT as ConversationRawPromptRequest, aU as ConversationDebugRequest, aV as UnifiedChatCompletionRequest, aW as LlmStreamCallback, aX as LlmStreamResult, a7 as TTSRequest, a8 as TTSResponse, aa as ImageAssetUploadOptions, ab as ImageAssetUploadResult, ac as UserData, aA as VrmAssetCreateOptions, aB as VrmAssetCreateResponse, ar as AudioAssetCreateOptions, as as AudioAssetCreateResponse, aO as VideoAssetCreateOptions, aP as VideoAssetCreateResponse, aY as AnimatedImageAssetCreateOptions, aZ as AnimatedImageAssetCreateResponse, a_ as AnimatedImageAssetVersionOptions, a$ as AnimatedImageAssetVersionResponse, b0 as AnimationClipAssetCreateOptions, b1 as AnimationClipAssetCreateResponse, b2 as AssetBundleAssetCreateOptions, b3 as AssetBundleAssetCreateResponse, b4 as AssetBundleAssetVersionOptions, b5 as AssetBundleAssetVersionResponse, b6 as AssetBundleVariantOptions, b7 as AssetBundleVariantResponse, b8 as AvatarVrmModelUploadOptions, b9 as AvatarModelUploadResponse, ba as AvatarSpriteModelUploadOptions, bb as AvatarImageModelUploadOptions, bc as AvatarAssetBundleModelUploadOptions, bd as EmotionFormatUploadOptions, be as EmotionFormatUploadResponse, bf as CharacterCreateWithIconsOptions, bg as CharacterUpdateWithIconsOptions, bh as ApiQuotaStatus, bi as ApiRecoveryRequest, bj as ApiRecoveryResult } from '../index-CSCjC_qE.mjs';
import { c as PersistentCacheStore } from '../types-D2KgMl8A.mjs';
export { FilesystemCacheStore, FilesystemStoreConfig } from '../node-cache.mjs';

/**
 * Electron Main Process Helpers
 *
 * Electron Main プロセスで CHARAHOME SDK の IPC ハンドラーを登録するためのヘルパー
 *
 * Handlers are organized into categories:
 * - core.ts      - INIT, CALL, LIST_SERVICES (OpenAPI proxy)
 * - binary.ts    - Binary upload/download (Uint8Array handling)
 * - streaming.ts - Streaming responses (conversation, TTS, LLM)
 * - special.ts   - Complex logic handlers (auth, aggregation, etc.)
 *
 * @example
 * ```typescript
 * // main/index.ts
 * import { ipcMain } from 'electron';
 * import { registerCharahomeIpcHandlers } from '@kurasuai-inc/charahome-api/electron';
 *
 * // アプリ起動時に一度だけ呼び出す
 * registerCharahomeIpcHandlers(ipcMain);
 * ```
 */

/**
 * Register all CHARAHOME IPC handlers on the main process
 *
 * @param ipcMain - Electron's ipcMain module
 *
 * @example
 * ```typescript
 * import { ipcMain } from 'electron';
 * import { registerCharahomeIpcHandlers } from '@kurasuai-inc/charahome-api/electron';
 *
 * registerCharahomeIpcHandlers(ipcMain);
 * ```
 */
declare function registerCharahomeIpcHandlers(ipcMain: IpcMain): void;
/**
 * Get current API client instance (for advanced use cases)
 */
declare function getApiClient(): CharahomeApiClient | null;
/**
 * Set a custom persistent cache store on the current API client.
 * Call this after init() if you want to use FilesystemCacheStore in Electron.
 *
 * @example
 * ```typescript
 * import { setCachePersistentStore, FilesystemCacheStore } from '@kurasuai-inc/charahome-api/electron';
 * import { app } from 'electron';
 * import path from 'path';
 *
 * const store = new FilesystemCacheStore({
 *   cacheDir: path.join(app.getPath('userData'), 'asset-cache'),
 *   encryptionPassphrase: 'my-app-secret',
 * });
 * setCachePersistentStore(store);
 * ```
 */
declare function setCachePersistentStore(store: PersistentCacheStore): void;

/**
 * Electron IPC Helpers - Type Definitions
 *
 * Electron アプリで CHARAHOME SDK を使用するための型定義
 *
 * Only channels for binary upload/download, streaming, and aggregation
 * are defined here. For standard REST CRUD, use `call()` with GeneratedApi.
 */

declare const IPC_CHANNELS: {
    readonly INIT: "charahome:init";
    readonly CALL: "charahome:call";
    readonly LIST_SERVICES: "charahome:listServices";
    readonly AVATAR_GET_ICON_URL: "charahome:avatar:getIconUrl";
    readonly AVATAR_UPLOAD: "charahome:avatar:upload";
    readonly FETCH_AVATAR_MODEL: "charahome:fetchAvatarModel";
    readonly SETTINGS_CREATE_WITH_OVERVIEW: "charahome:settings:createWithOverview";
    readonly CHARACTER_DUPLICATE_AND_REGISTER: "charahome:character:duplicateAndRegister";
    readonly FETCH_CHARACTER_DATA: "charahome:fetchCharacterData";
    readonly VRMA_UPLOAD: "charahome:vrma:upload";
    readonly FETCH_ANIMATION: "charahome:fetchAnimation";
    readonly CONVERSATION_START: "charahome:conversation:start";
    readonly CONVERSATION_CHUNK: "charahome:conversation:chunk";
    readonly CONVERSATION_END: "charahome:conversation:end";
    readonly CONVERSATION_ERROR: "charahome:conversation:error";
    readonly CONVERSATION_CANCEL: "charahome:conversation:cancel";
    readonly CONVERSATION_RAW_START: "charahome:conversation:raw:start";
    readonly CONVERSATION_RAW_CHUNK: "charahome:conversation:raw:chunk";
    readonly CONVERSATION_RAW_END: "charahome:conversation:raw:end";
    readonly CONVERSATION_RAW_ERROR: "charahome:conversation:raw:error";
    readonly CONVERSATION_RAW_CANCEL: "charahome:conversation:raw:cancel";
    readonly LLM_CHAT_START: "charahome:llm:chat:start";
    readonly LLM_CHAT_CHUNK: "charahome:llm:chat:chunk";
    readonly LLM_CHAT_END: "charahome:llm:chat:end";
    readonly LLM_CHAT_ERROR: "charahome:llm:chat:error";
    readonly LLM_CHAT_CANCEL: "charahome:llm:chat:cancel";
    readonly TTS_GENERATE: "charahome:tts:generate";
    readonly CONVERSATION_DEBUG_START: "charahome:conversation:debug:start";
    readonly CONVERSATION_DEBUG_CHUNK: "charahome:conversation:debug:chunk";
    readonly CONVERSATION_DEBUG_END: "charahome:conversation:debug:end";
    readonly CONVERSATION_DEBUG_ERROR: "charahome:conversation:debug:error";
    readonly CONVERSATION_DEBUG_CANCEL: "charahome:conversation:debug:cancel";
    readonly IMAGE_ASSET_UPLOAD: "charahome:imageAsset:upload";
    readonly IMAGE_ASSET_DOWNLOAD: "charahome:imageAsset:download";
    readonly IMAGE_ASSET_ADD_VERSION: "charahome:imageAsset:addVersion";
    readonly USER_UPLOAD_ICON: "charahome:user:uploadIcon";
    readonly VRM_ASSET_CREATE: "charahome:vrmAsset:create";
    readonly VRM_ASSET_DOWNLOAD: "charahome:vrmAsset:download";
    readonly AUDIO_ASSET_CREATE: "charahome:audioAsset:create";
    readonly AUDIO_ASSET_ADD_VERSION: "charahome:audioAsset:addVersion";
    readonly VIDEO_ASSET_CREATE: "charahome:videoAsset:create";
    readonly VIDEO_ASSET_ADD_VERSION: "charahome:videoAsset:addVersion";
    readonly ANIMATED_IMAGE_ASSET_CREATE: "charahome:animatedImageAsset:create";
    readonly ANIMATED_IMAGE_ASSET_ADD_VERSION: "charahome:animatedImageAsset:addVersion";
    readonly ANIMATED_IMAGE_ASSET_DOWNLOAD: "charahome:animatedImageAsset:download";
    readonly ANIMATION_CLIP_ASSET_CREATE: "charahome:animationClipAsset:create";
    readonly ANIMATION_CLIP_ASSET_DOWNLOAD: "charahome:animationClipAsset:download";
    readonly ASSET_BUNDLE_ASSET_CREATE: "charahome:assetBundleAsset:create";
    readonly ASSET_BUNDLE_ASSET_ADD_VERSION: "charahome:assetBundleAsset:addVersion";
    readonly ASSET_BUNDLE_ASSET_ADD_VARIANT: "charahome:assetBundleAsset:addVariant";
    readonly ASSET_BUNDLE_ASSET_DOWNLOAD: "charahome:assetBundleAsset:download";
    readonly AVATAR_VRM_MODEL_UPLOAD: "charahome:avatar:vrmModel:upload";
    readonly AVATAR_SPRITE_MODEL_UPLOAD: "charahome:avatar:spriteModel:upload";
    readonly AVATAR_FACE_ICON_MODEL_UPLOAD: "charahome:avatar:faceIconModel:upload";
    readonly AVATAR_ASSET_BUNDLE_MODEL_UPLOAD: "charahome:avatar:assetBundleModel:upload";
    readonly EMOTION_SPRITE_FORMAT_UPLOAD: "charahome:emotion:spriteFormat:upload";
    readonly EMOTION_FACE_ICON_FORMAT_UPLOAD: "charahome:emotion:faceIconFormat:upload";
    readonly CHARACTER_CREATE_WITH_ICONS: "charahome:character:createWithIcons";
    readonly CHARACTER_UPDATE_WITH_ICONS: "charahome:character:updateWithIcons";
    readonly AVATAR_CREATE_WITH_ICONS: "charahome:avatar:createWithIcons";
    readonly AVATAR_UPDATE_WITH_ICONS: "charahome:avatar:updateWithIcons";
    readonly QUOTA_GET_STATUS: "charahome:quota:getStatus";
    readonly QUOTA_RECOVER: "charahome:quota:recover";
};
/**
 * Conversation stream callback type
 */
type ConversationStreamCallback = (chunk: ConversationChunk) => void;
/**
 * Conversation stream result
 */
interface ConversationStreamResult {
    /** Cancel the ongoing stream */
    cancel: () => void;
    /** Promise that resolves when stream completes */
    done: Promise<void>;
}
/**
 * CHARAHOME IPC API exposed to renderer process
 * Use this type in your preload script
 *
 * For standard REST CRUD operations, use `call()` with GeneratedApi service names.
 * Only binary upload/download, streaming, and aggregation methods have dedicated IPC methods.
 */
interface CharahomeIpcApi {
    /** Initialize API client with config */
    init: (config: {
        baseUrl: string;
        authToken: string;
    }) => Promise<{
        success: boolean;
    }>;
    /**
     * Call any GeneratedApi service method via single IPC channel
     *
     * This is the recommended way to call API methods - it automatically routes
     * to the correct service and method using the auto-generated OpenAPI client.
     *
     * @param serviceName - The service class name (e.g., 'CharactersService', 'AvatarsService')
     * @param methodName - The method name to call on the service
     * @param args - Optional arguments to pass to the method (as an object)
     * @returns Promise resolving to the API response
     *
     * @example
     * ```typescript
     * // Get a character
     * const character = await window.api.charahome.call(
     *   'CharactersService',
     *   'getCharacterCharactersCharacterIdGet',
     *   { characterId: 'stella' }
     * );
     *
     * // List avatars
     * const avatars = await window.api.charahome.call(
     *   'AvatarsService',
     *   'getAvatarsListAvatarsGet',
     *   { filterByOwner: false, limit: 10 }
     * );
     *
     * // Get user data
     * const user = await window.api.charahome.call(
     *   'UsersService',
     *   'getUserUsersGet',
     *   {}
     * );
     * ```
     */
    call: <T = unknown>(serviceName: string, methodName: string, args?: Record<string, unknown>) => Promise<T>;
    /**
     * List all available services and their methods from GeneratedApi
     * @returns Object mapping service names to arrays of method names
     */
    listServices: () => Promise<Record<string, string[]>>;
    /** Get avatar icon signed URL (aggregation: avatar → image-asset → signed URL) */
    getAvatarIconUrl: (avatarId: string, resolution?: ImageResolution) => Promise<string>;
    /** Upload avatar (VRM file) - binary upload */
    uploadAvatar: (file: ArrayBuffer, options: AvatarUploadOptions, userToken: string) => Promise<AvatarCreateResponse>;
    /** Fetch avatar model file (returns ArrayBuffer) - binary download */
    fetchAvatarModel: (avatarId: string, modelType: ModelType) => Promise<ArrayBuffer>;
    /** Create settings with overview (uses GeneratedApi internally) */
    createSettingsWithOverview: (request: SettingsWithOverviewRequest, userToken: string) => Promise<SettingsCreateResponse>;
    /** Duplicate character and register to user (aggregation: duplicate + get user + patch user) */
    duplicateAndRegisterCharacter: (sourceCharacterId: string, userToken: string) => Promise<string>;
    /** Fetch character data (aggregation: character + emotions + motions) */
    fetchCharacterData: (characterId: string) => Promise<CharacterData>;
    /** Upload VRMA asset - binary upload */
    uploadVrmaAsset: (file: ArrayBuffer, options: VrmaUploadOptions, userToken: string) => Promise<VrmaUploadResponse>;
    /** Fetch animation file (returns ArrayBuffer) - binary download */
    fetchAnimation: (vrmaAssetId: string) => Promise<ArrayBuffer>;
    /**
     * Start conversation stream
     * Chunks are delivered via callback, returns cancel function and completion promise
     */
    conversationStream: (characterId: string, request: ConversationRequest, onChunk: ConversationStreamCallback) => ConversationStreamResult;
    /**
     * Start conversation raw stream
     * Client fully controls the prompt - server passes it directly to LLM
     */
    conversationRawStream: (characterId: string, request: ConversationRawPromptRequest, onChunk: ConversationStreamCallback) => ConversationStreamResult;
    /**
     * Start conversation debug stream
     * All context provided by client - minimal DB access on server
     */
    conversationDebugStream: (characterId: string, request: ConversationDebugRequest, onChunk: ConversationStreamCallback) => ConversationStreamResult;
    /**
     * Stream LLM chat completions via SSE
     * Supports OpenAI, Claude, Gemini, Vertex AI providers
     */
    llmChatStream: (request: UnifiedChatCompletionRequest, onChunk: LlmStreamCallback) => LlmStreamResult;
    /** Generate TTS audio from text */
    generateTTS: (request: TTSRequest) => Promise<TTSResponse>;
    /** Upload an image asset - binary upload */
    uploadImageAsset: (file: ArrayBuffer, options: ImageAssetUploadOptions, userToken: string) => Promise<ImageAssetUploadResult>;
    /** Download image file as ArrayBuffer - binary download */
    downloadImageFile: (imageId: string, resolution?: string) => Promise<ArrayBuffer>;
    /** Add version to image asset - binary upload */
    addImageAssetVersion: (imageId: string, file: ArrayBuffer, userToken: string) => Promise<unknown>;
    /** Upload user icon (binary upload + aggregation: upload image + patch user) */
    uploadUserIcon: (file: ArrayBuffer, userToken: string) => Promise<UserData>;
    /** Create VRM asset - binary upload */
    createVrmAsset: (file: ArrayBuffer, options: VrmAssetCreateOptions, userToken: string) => Promise<VrmAssetCreateResponse>;
    /** Download VRM file as ArrayBuffer - binary download */
    downloadVrmFile: (vrmId: string) => Promise<ArrayBuffer>;
    /** Create audio asset - binary upload */
    createAudioAsset: (file: ArrayBuffer, options: AudioAssetCreateOptions, userToken: string) => Promise<AudioAssetCreateResponse>;
    /** Add version to audio asset - binary upload */
    addAudioAssetVersion: (audioId: string, file: ArrayBuffer, userToken: string, thumbnail?: ArrayBuffer) => Promise<unknown>;
    /** Create video asset - binary upload */
    createVideoAsset: (file: ArrayBuffer, options: VideoAssetCreateOptions, userToken: string) => Promise<VideoAssetCreateResponse>;
    /** Add version to video asset - binary upload */
    addVideoAssetVersion: (videoId: string, file: ArrayBuffer, userToken: string, thumbnail?: ArrayBuffer) => Promise<unknown>;
    /** Create animated image asset - binary upload */
    createAnimatedImageAsset: (file: ArrayBuffer, options: AnimatedImageAssetCreateOptions, userToken: string) => Promise<AnimatedImageAssetCreateResponse>;
    /** Add version to animated image asset - binary upload */
    addAnimatedImageAssetVersion: (assetId: string, file: ArrayBuffer, options: AnimatedImageAssetVersionOptions, userToken: string) => Promise<AnimatedImageAssetVersionResponse>;
    /** Download animated image file as ArrayBuffer - binary download */
    downloadAnimatedImageFile: (assetId: string, quality?: string) => Promise<ArrayBuffer>;
    /** Create animation clip asset - binary upload */
    createAnimationClipAsset: (file: ArrayBuffer, options: AnimationClipAssetCreateOptions, userToken: string) => Promise<AnimationClipAssetCreateResponse>;
    /** Download animation clip file as ArrayBuffer - binary download */
    downloadAnimationClipFile: (clipId: string) => Promise<ArrayBuffer>;
    /** Create asset bundle asset - binary upload */
    createAssetBundleAsset: (file: ArrayBuffer, options: AssetBundleAssetCreateOptions, userToken: string) => Promise<AssetBundleAssetCreateResponse>;
    /** Add version to asset bundle asset - binary upload */
    addAssetBundleAssetVersion: (assetBundleId: string, file: ArrayBuffer, options: AssetBundleAssetVersionOptions, userToken: string) => Promise<AssetBundleAssetVersionResponse>;
    /** Add variant to asset bundle version - binary upload */
    addAssetBundleVariant: (assetBundleId: string, versionId: string, file: ArrayBuffer, options: AssetBundleVariantOptions, userToken: string) => Promise<AssetBundleVariantResponse>;
    /** Download asset bundle file as ArrayBuffer - binary download */
    downloadAssetBundleFile: (assetBundleId: string, platform: string, arch: string) => Promise<ArrayBuffer>;
    /** Upload VRM model for avatar - binary upload */
    uploadAvatarVrmModel: (avatarId: string, file: ArrayBuffer, options: AvatarVrmModelUploadOptions, userToken: string) => Promise<AvatarModelUploadResponse>;
    /** Upload sprite model for avatar - binary upload (multi-file via serialized object) */
    uploadAvatarSpriteModel: (avatarId: string, files: {
        baseImage: ArrayBuffer;
        eyelidImage?: ArrayBuffer;
        eyeballImage?: ArrayBuffer;
        mouthImage?: ArrayBuffer;
    }, options: AvatarSpriteModelUploadOptions, userToken: string) => Promise<AvatarModelUploadResponse>;
    /** Upload face icon model for avatar - binary upload (multi-file via serialized object) */
    uploadAvatarFaceIconModel: (avatarId: string, files: {
        baseImage: ArrayBuffer;
        eyelidImage?: ArrayBuffer;
        eyeballImage?: ArrayBuffer;
        mouthImage?: ArrayBuffer;
    }, options: AvatarImageModelUploadOptions, userToken: string) => Promise<AvatarModelUploadResponse>;
    /** Upload asset bundle model for avatar - binary upload */
    uploadAvatarAssetBundleModel: (avatarId: string, file: ArrayBuffer | undefined, options: AvatarAssetBundleModelUploadOptions, userToken: string) => Promise<AvatarModelUploadResponse>;
    /** Upload sprite emotion format images - binary upload (multi-file via serialized object) */
    uploadSpriteEmotionFormat: (avatarId: string, expressionId: string, files: {
        imageComposite?: ArrayBuffer;
        imageBody?: ArrayBuffer;
        imageEyelid?: ArrayBuffer;
        imageMouth?: ArrayBuffer;
    }, options: EmotionFormatUploadOptions, userToken: string) => Promise<EmotionFormatUploadResponse>;
    /** Upload face icon emotion format images - binary upload (multi-file via serialized object) */
    uploadFaceIconEmotionFormat: (avatarId: string, expressionId: string, files: {
        imageComposite?: ArrayBuffer;
        imageBody?: ArrayBuffer;
        imageEyelid?: ArrayBuffer;
        imageMouth?: ArrayBuffer;
    }, options: EmotionFormatUploadOptions, userToken: string) => Promise<EmotionFormatUploadResponse>;
    /** Create character with icon files - binary upload */
    createCharacterWithIcons: (options: CharacterCreateWithIconsOptions, userToken: string, squareIcon?: ArrayBuffer, rectangleIcon?: ArrayBuffer) => Promise<unknown>;
    /** Update character with icon files - binary upload */
    updateCharacterWithIcons: (characterId: string, options: CharacterUpdateWithIconsOptions, userToken: string, squareIcon?: ArrayBuffer, rectangleIcon?: ArrayBuffer) => Promise<unknown>;
    /** Create avatar with icon files - binary upload */
    createAvatarWithIcons: (options: {
        avatarName: string;
        avatarId?: string;
        publishScope?: string;
        gender?: string;
        tags?: string;
        appearanceDescription?: string;
        skipLlmGeneration?: boolean;
    }, userToken: string, squareIcon?: ArrayBuffer, rectangleIcon?: ArrayBuffer) => Promise<unknown>;
    /** Update avatar with icon files - binary upload */
    updateAvatarWithIcons: (avatarId: string, options: {
        avatarName?: string;
        publishScope?: string;
        gender?: string;
        tags?: string;
        appearanceDescription?: string;
        regenerateWithLlm?: boolean;
    }, userToken: string, squareIcon?: ArrayBuffer, rectangleIcon?: ArrayBuffer) => Promise<unknown>;
    /** Get current quota status */
    getQuotaStatus: (userToken: string) => Promise<ApiQuotaStatus>;
    /** Recover quota via ad, item, or daily bonus */
    recoverQuota: (userToken: string, request: ApiRecoveryRequest) => Promise<ApiRecoveryResult>;
}
/**
 * Configuration for IPC handlers
 */
interface IpcHandlerConfig {
    /** API base URL (defaults to production) */
    baseUrl?: string;
    /** Authentication token */
    authToken: string;
}

/**
 * Electron Preload Script Helpers
 *
 * Electron Preload スクリプトで使用する CHARAHOME IPC API の作成ヘルパー
 *
 * Only binary upload/download, streaming, and aggregation methods have
 * dedicated IPC methods. For standard REST CRUD, use `call()` with GeneratedApi.
 *
 * @example
 * ```typescript
 * // preload/index.ts
 * import { contextBridge } from 'electron';
 * import { createCharahomePreloadApi } from '@kurasuai-inc/charahome-api/electron';
 *
 * // CHARAHOME API を window.charahome として公開
 * contextBridge.exposeInMainWorld('charahome', createCharahomePreloadApi());
 * ```
 */

/**
 * Create CHARAHOME IPC API for preload script
 *
 * @returns CharahomeIpcApi object to expose via contextBridge
 *
 * @example
 * ```typescript
 * import { contextBridge } from 'electron';
 * import { createCharahomePreloadApi } from '@kurasuai-inc/charahome-api/electron';
 *
 * contextBridge.exposeInMainWorld('charahome', createCharahomePreloadApi());
 *
 * // Or combine with other APIs
 * contextBridge.exposeInMainWorld('api', {
 *   charahome: createCharahomePreloadApi(),
 *   // ...other APIs
 * });
 * ```
 */
declare function createCharahomePreloadApi(): CharahomeIpcApi;

export { type CharahomeIpcApi, type ConversationStreamCallback, type ConversationStreamResult, IPC_CHANNELS, type IpcHandlerConfig, PersistentCacheStore, createCharahomePreloadApi, getApiClient, registerCharahomeIpcHandlers, setCachePersistentStore };
