import { bk as BaseClient, p as AvatarUploadOptions, q as AvatarCreateResponse, M as ModelType, $ as VrmaUploadOptions, bl as AssetJsonFields, a0 as VrmaUploadResponse, aa as ImageAssetUploadOptions, ab as ImageAssetUploadResult, ac as UserData, ar as AudioAssetCreateOptions, as as AudioAssetCreateResponse, aO as VideoAssetCreateOptions, aP as VideoAssetCreateResponse, a2 as ConversationRequest, a3 as ConversationChunk, aT as ConversationRawPromptRequest, aU as ConversationDebugRequest, a7 as TTSRequest, a8 as TTSResponse, Q as Motion, K as CharacterData, e as ContentProtectionDecoder, bm as VrmProtectionMeta, bn as CacheManager, i as CharahomeApiConfig, C as CharahomeApiClient } from './index-CSCjC_qE.mjs';
export { bq as AnimatedImageAssetApiMixin, br as AnimationClipAssetApiMixin, bs as AssetBundleAssetApiMixin, aq as AudioAsset, av as AudioAssetDeleteResponse, am as AudioAssetLocalized, an as AudioAssetPaths, at as AudioAssetSearchOptions, ao as AudioAssetThumbnailPaths, au as AudioAssetUpdateRequest, ah as AudioFormat, ai as AudioQuality, ag as AudioType, A as Avatar, n as AvatarListItem, o as AvatarListResponse, bt as AvatarModelApiMixin, al as BpmRange, y as Character, F as CharacterColor, L as CharacterCreateRequest, N as CharacterCreateResponse, H as CharacterEmotionData, G as CharacterEmotionFormat, bv as CharacterFileApiMixin, B as CharacterListItem, z as CharacterLocale, J as CharacterMotionData, I as CharacterMotionFormat, b as CharahomeEnvironment, O as ChatLogAddRequest, P as ChatLogAddResponse, a4 as ConversationAction, D as DEFAULT_API_BASE_URL, h as DEFAULT_TEXT_CONVERTER_BASE_URL, ax as DataSource, E as ENVIRONMENTS, bu as EmotionFormatApiMixin, l as EmotionFormatType, k as EmotionInterruptMode, d as EnvironmentConfig, a9 as ImageResolution, a5 as LipSyncFrame, bo as LlmApiMixin, aW as LlmStreamCallback, bw as LlmStreamChunk, aX as LlmStreamResult, U as MotionCreateRequest, R as MotionFormat, Y as MotionFormatCreateRequest, Z as MotionFormatResponse, m as MotionFormatType, X as MotionResponse, j as MotionType, W as MotionUpdateRequest, T as MotionsResponse, a6 as PhonemeWeight, ak as PublishSettingsType, s as Settings, w as SettingsCreateResponse, x as SettingsFileUploadOptions, t as SettingsListItem, u as SettingsListResponse, v as SettingsWithOverviewRequest, S as SignedUrlResponse, aw as SupportedLanguage, ap as TagWithLevel, aj as ThumbnailSize, ad as UserCreateRequest, af as UserPatchRequest, ae as UserUpdateRequest, aN as VideoAsset, aS as VideoAssetDeleteResponse, aM as VideoAssetLocalized, aJ as VideoAssetRole, aQ as VideoAssetSearchOptions, aR as VideoAssetUpdateRequest, aK as VideoDurationRange, aL as VideoResolutionRange, az as VrmAsset, bp as VrmAssetApiMixin, aA as VrmAssetCreateOptions, aB as VrmAssetCreateResponse, aD as VrmAssetDeleteResponse, aE as VrmAssetFileUrlResponse, ay as VrmAssetLocalized, aC as VrmAssetUpdateRequest, V as VrmModelResponse, _ as VrmaAsset, aI as VrmaAssetFileUrlResponse, aH as VrmaAssetUpdateRequest, a1 as VrmaDeleteResponse, aG as VrmaLocalized, aF as VrmaMotionType, c as createCharahomeApiClient, f as extractUidFromToken, g as getEnvironmentConfig, a as getFirebaseConfig, r as resolveEnvironment } from './index-CSCjC_qE.mjs';
import { c as PersistentCacheStore, b as CacheEntry, a as CacheEntryMeta } from './types-D2KgMl8A.mjs';
export { d as AssetCachePolicy, A as AssetCategory, C as CacheConfig, e as CacheStats, P as PersistenceTier } from './types-D2KgMl8A.mjs';
export { A as AES_GCM_TAG_SIZE, x as AccountLink, as as AssetCatalog, aY as AssetCatalogApi, B as AuthApiErrorResponse, z as AuthApiSuccessResponse, an as AutoTagAvatarOptions, am as AutoTagCategoriesResponse, ao as AutoTagDescriptionRequest, al as AutoTagResponse, ak as AutoTagResult, a_ as AutoTransition_Output, b6 as BackgroundChangeEvent, b7 as BgmChangeEvent, c as CACHE_POLICIES, bt as CharacterBounceEvent, bb as CharacterEmotionEvent, bd as CharacterFramingChangeEvent, ba as CharacterHideEvent, bv as CharacterHighlightEvent, bc as CharacterMotionEvent, by as CharacterResetEvent, bu as CharacterScalePulseEvent, bs as CharacterShakeEvent, b9 as CharacterShowEvent, bw as CharacterSilhouetteEvent, be as CharacterSpeakEvent_Output, bx as CharacterSpinEvent, W as ChatLogDeleteResponse, T as ChatLogEntry, U as ChatLogHistoryResponse, K as ChatLogMessage, L as ChatLogSaveRequest, Q as ChatLogSaveResponse, y as CheckLinkResult, aZ as ChoiceOption_Output, Z as CompatibilityMode, Y as CompatibilitySource, b2 as Condition, b1 as ConditionGroup_Output, b3 as ConditionType, C as ContentProtectionKeyResponse, H as DictionaryUpdateRequest, I as DictionaryUpdateResponse, D as DictionaryWordAddRequest, F as DictionaryWordAddResponse, G as DictionaryWordDeleteResponse, b4 as Effect, b5 as EffectType, E as Emotion, s as EmotionCreateRequest, q as EmotionFormat, v as EmotionFormatCreateRequest, w as EmotionFormatResponse, u as EmotionResponse, t as EmotionUpdateRequest, r as EmotionsResponse, a$ as FreeInputConfig_Output, b0 as FreeInputRoute_Output, g as GeneratedApi, bA as ImageBounceEvent, bh as ImageHideEvent, bC as ImageHighlightEvent, bF as ImageResetEvent, bB as ImageScalePulseEvent, bz as ImageShakeEvent, bg as ImageShowEvent, bD as ImageSilhouetteEvent, bE as ImageSpinEvent, M as MergeAccountsRequest, J as MessageType, bf as NarrativeEvent_Output, N as NoopCacheStore, P as PROTECTION_FORMAT_V1, aj as PaginatedResponse, bj as PlayerActionEvent, a as ProtectedFileResponse, R as RegisterLinkRequest, bN as Schedule, bO as ScheduleCreateRequest, bS as ScheduleListOptions, bR as ScheduleListResponse, bL as ScheduleRecurrence, bM as ScheduleReminder, bQ as ScheduleResponse, bP as ScheduleUpdateRequest, bp as ScreenBlurEvent, bq as ScreenColorAdjustEvent, bn as ScreenFadeInEvent, bo as ScreenFadeOutEvent, bm as ScreenFlashEvent, br as ScreenResetEvent, bl as ScreenShakeEvent, b8 as SePlayEvent, S as SenderType, bJ as SessionHistoryCreateRequest, bK as SessionHistoryListResponse, bI as SessionHistoryResponse, bk as SpeechModeChangeEvent, av as Story, aV as StoryAiUsage, aL as StoryApiResponse, aQ as StoryApiSettings, au as StoryChoice, aw as StoryCreateRequest, ax as StoryCreateResponse, aT as StoryDeleteResponse, aU as StoryDuplicateResponse, aD as StoryGraph, aE as StoryGraphCreateRequest, aF as StoryGraphCreateResponse, aB as StoryGraphMetadata, aH as StoryGraphResponse, aC as StoryGraphStoryData, aG as StoryGraphUpdateRequest, bG as StoryInstanceCreateRequest, bH as StoryInstanceListResponse, aR as StoryInstanceResponse, aA as StoryLink, aW as StoryListResponse, aX as StoryLocalized, aq as StoryMetadata, ap as StoryMetadataLocalized, aI as StoryNavigationRequest, aJ as StoryNavigationResponse, aK as StoryPathsResponse, az as StoryResponse, aO as StorySceneLinkResponse, aP as StorySceneLocalized, aN as StorySceneResponse, at as StorySegment, ar as StorySettings, aS as StoryTemplateResponse, ay as StoryUpdateRequest, aM as StoryWithChildrenResponse, a3 as Tag, $ as TagCategory, a0 as TagCategoryCreateRequest, a6 as TagCategoryLink, ab as TagCategoryLinkBulkUpsertRequest, a7 as TagCategoryLinkCreateRequest, a8 as TagCategoryLinkReorderItem, a9 as TagCategoryLinkReorderRequest, aa as TagCategoryLinkReorderResponse, _ as TagCategoryLocalized, a1 as TagCategoryUpdateRequest, ac as TagCompatibility, ad as TagCompatibilityCreateRequest, ae as TagCompatibilityGenerateRequest, af as TagCompatibilityGenerateResponse, a4 as TagCreateRequest, X as TagLevel, a2 as TagLocalized, a5 as TagUpdateRequest, ai as TagWithCategoriesResponse, ah as TaxonomyNode, ag as TaxonomyTag, k as Voice, d as VoiceAgeGroup, o as VoiceCreateRequest, f as VoiceDataSource, V as VoiceGender, l as VoiceListItem, m as VoiceListResponse, h as VoiceLocalePayload, i as VoiceModel, e as VoiceProvider, n as VoiceSearchResponse, j as VoiceTagWithLevel, p as VoiceUpdateRequest, bi as WaitEvent, b as buildCacheKey } from './noop-store-B1dQRzIN.mjs';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Avatar API Client Methods - Binary Operations Only
 *
 * For simple CRUD (list, get, update, delete), use GeneratedApi.
 */

/**
 * Avatar API mixin methods (binary upload/download + aggregation)
 */
declare const AvatarApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Get avatar icon signed URL
         * Aggregation: GET /avatars/{id} + GET /image-assets/{assetId}/file
         */
        getAvatarIconUrl(avatarId: string, resolution?: "very_low" | "low" | "medium" | "high" | "original", iconType?: "square" | "rectangle"): Promise<string>;
        /**
         * Upload avatar (VRM file) - Binary upload
         */
        uploadAvatar(file: ArrayBuffer, options: AvatarUploadOptions, userToken: string): Promise<AvatarCreateResponse>;
        /**
         * Fetch avatar model file as ArrayBuffer - Router
         */
        fetchAvatarModel(avatarId: string, modelType: ModelType): Promise<ArrayBuffer>;
        /**
         * Download VRM file for an avatar as ArrayBuffer
         * Aggregation: GET /avatars/{id}/vrm-model → downloadVrmFile(vrmAssetId)
         * Content protection is handled by VrmAssetApiMixin.downloadVrmFile().
         */
        downloadAvatarVrmFile(avatarId: string): Promise<ArrayBuffer>;
        /**
         * Create avatar with icon files - Binary upload
         * For avatar creation without files, use GeneratedApi.AvatarsService directly.
         */
        createAvatarWithIcons(options: {
            avatarName: string;
            avatarId?: string;
            publishScope?: string;
            gender?: string;
            tags?: string;
            appearanceDescription?: string;
            skipLlmGeneration?: boolean;
        }, userToken: string, squareIcon?: ArrayBuffer | Blob, rectangleIcon?: ArrayBuffer | Blob): Promise<unknown>;
        /**
         * Update avatar with icon files - Binary upload
         * For avatar update without files, use GeneratedApi.AvatarsService directly.
         */
        updateAvatarWithIcons(avatarId: string, options: {
            avatarName?: string;
            publishScope?: string;
            gender?: string;
            tags?: string;
            appearanceDescription?: string;
            regenerateWithLlm?: boolean;
        }, userToken: string, squareIcon?: ArrayBuffer | Blob, rectangleIcon?: ArrayBuffer | Blob): Promise<unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
    };
} & T;

/**
 * VRMA Asset API Client Methods - Binary Operations Only
 *
 * For simple CRUD (get, delete), use GeneratedApi.
 */

/**
 * VRMA Asset API mixin methods (binary upload/download only)
 */
declare const VrmaAssetApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Upload VRMA asset - Binary upload
         */
        uploadVrmaAsset(file: ArrayBuffer, options: VrmaUploadOptions & AssetJsonFields, userToken: string): Promise<VrmaUploadResponse>;
        /**
         * Download VRMA animation file as ArrayBuffer
         * Aggregation: GET /vrma-assets/{id}/file + download from signed URL
         */
        downloadAnimationFile(vrmaAssetId: string): Promise<ArrayBuffer>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
    };
} & T;

/**
 * Image Asset API Client Methods - Binary Operations Only
 *
 * For simple CRUD (get URL, list), use GeneratedApi.
 */

/**
 * Image Asset API mixin methods (binary upload + aggregation only)
 */
declare const ImageAssetApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Upload an image and create an ImageAsset - Binary upload
         */
        uploadImageAsset(file: Blob | ArrayBuffer, options: ImageAssetUploadOptions & AssetJsonFields, userToken: string): Promise<ImageAssetUploadResult>;
        /**
         * Upload user icon and update user profile
         * Aggregation: POST /image-assets + PATCH /users
         */
        uploadUserIcon(file: Blob | ArrayBuffer, userToken: string): Promise<UserData>;
        /**
         * Download image file as ArrayBuffer
         * Aggregation: GET /image-assets/{id}/file → SignedUrlResponse → fetch → ArrayBuffer
         */
        downloadImageFile(imageId: string, resolution?: string): Promise<ArrayBuffer>;
        /**
         * Add new version to existing image asset - Binary upload
         */
        addImageAssetVersion(imageId: string, file: Blob | ArrayBuffer, userToken: string): Promise<unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
    };
} & T;

/**
 * Audio Asset API Client Methods - Binary Upload Only
 *
 * For search, get, update, delete, use GeneratedApi.
 */

/**
 * Audio Asset API mixin methods (binary upload only)
 */
declare const AudioAssetApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Create audio asset - Binary upload
         */
        createAudioAsset(file: Blob | ArrayBuffer, options: AudioAssetCreateOptions & AssetJsonFields, userToken: string): Promise<AudioAssetCreateResponse>;
        /**
         * Add new version to existing audio asset - Binary upload
         */
        addAudioAssetVersion(audioId: string, file: Blob | ArrayBuffer, userToken: string, thumbnail?: Blob | ArrayBuffer): Promise<unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
    };
} & T;

/**
 * Video Asset API Client Mixin - Binary Upload Only
 *
 * For search, get, update, delete, use GeneratedApi.
 */

/**
 * Video Asset API mixin methods (binary upload only)
 */
declare const VideoAssetApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Create video asset - Binary upload
         */
        createVideoAsset(file: ArrayBuffer, options: VideoAssetCreateOptions & AssetJsonFields, authToken: string): Promise<VideoAssetCreateResponse>;
        /**
         * Add new version to existing video asset - Binary upload
         */
        addVideoAssetVersion(videoId: string, file: Blob | ArrayBuffer, userToken: string, thumbnail?: Blob | ArrayBuffer): Promise<unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
    };
} & T;

/**
 * Conversation API Client Methods
 */

/**
 * Conversation API mixin methods
 */
declare const ConversationApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Call Conversation API and return Response (for streaming)
         * Can be used directly with Next.js API routes
         * @param characterId - Character ID
         * @param request - Conversation request
         */
        conversationStream(characterId: string, request: ConversationRequest): Promise<Response>;
        /**
         * Call Conversation API and return AsyncGenerator
         * For Electron Main process or Node.js environments
         * @param characterId - Character ID
         * @param request - Conversation request
         */
        streamConversation(characterId: string, request: ConversationRequest): AsyncGenerator<ConversationChunk, void, unknown>;
        /**
         * Call Conversation Raw API and return Response (for streaming)
         * Client fully controls the prompt - server passes it directly to LLM
         * @param characterId - Character ID
         * @param request - Raw prompt request
         */
        conversationRawStream(characterId: string, request: ConversationRawPromptRequest): Promise<Response>;
        /**
         * Call Conversation Raw API and return AsyncGenerator
         * For Electron Main process or Node.js environments
         * @param characterId - Character ID
         * @param request - Raw prompt request
         */
        streamConversationRaw(characterId: string, request: ConversationRawPromptRequest): AsyncGenerator<ConversationChunk, void, unknown>;
        /**
         * Call Conversation Debug API and return Response (for streaming)
         * All context provided by client - minimal DB access on server
         * @param characterId - Character ID
         * @param request - Debug request with full context
         */
        conversationDebugStream(characterId: string, request: ConversationDebugRequest): Promise<Response>;
        /**
         * Call Conversation Debug API and return AsyncGenerator
         * For Electron Main process or Node.js environments
         * @param characterId - Character ID
         * @param request - Debug request with full context
         */
        streamConversationDebug(characterId: string, request: ConversationDebugRequest): AsyncGenerator<ConversationChunk, void, unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
    };
} & T;

/**
 * TTS API Client Methods
 */

/**
 * TTS API mixin methods
 */
declare const TtsApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Generate TTS audio
         * API returns raw WAV binary, converted to base64 for IPC transport
         * @param request - TTS request
         */
        generateTTS(request: TTSRequest): Promise<TTSResponse>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
    };
} & T;

/**
 * Character API Client Methods - Aggregation Only
 *
 * Only methods that combine multiple API calls are kept here.
 * For simple CRUD, use GeneratedApi directly.
 */

/**
 * Character API mixin methods (aggregation only)
 */
declare const CharacterApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Duplicate character and register to user
         * Aggregation: POST /characters/{id}/duplicate + GET /users + PATCH /users
         */
        duplicateAndRegisterCharacter(characterId: string, userToken: string, options?: {
            newCharacterId?: string;
            addToCharacterIds?: boolean;
            setAsFavorite?: boolean;
        }): Promise<string>;
        /**
         * Fetch character motions (convenience: resolves character → avatar_id internally)
         * Aggregation: GET /characters/{id} + GET /avatars/{avatarId}/motions
         */
        fetchCharacterMotions(characterId: string): Promise<Motion[]>;
        /**
         * Fetch character data in SDK format
         * Aggregation: GET /characters/{id} + GET /characters/{id}/emotions + GET /avatars/{avatarId}/motions
         */
        fetchCharacterData(characterId: string, modelType?: ModelType): Promise<CharacterData>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
    };
} & T;

/**
 * Caching Mixin
 *
 * Wraps all binary download methods with transparent cache lookup.
 * Inserted as the outermost mixin in the CharahomeApiClient chain.
 *
 * Each download method:
 * 1. Builds a cache key from the asset identifiers
 * 2. Delegates to CacheManager.getOrFetch() which checks L1 → L2 → L3
 * 3. Falls through to super.method() (the real download) on cache miss
 *
 * VRM downloads use the decodeFn pattern:
 * - L2 (persistent) stores encrypted data from the server
 * - L1 (memory) stores decoded (decrypted + decompressed) data
 * - On L2 hit, decodeFn decrypts before promoting to L1
 */

/**
 * Interface describing the download methods that CachingMixin will override.
 * These are provided by inner mixins in the chain.
 */
interface DownloadMethods {
    downloadAvatarVrmFile(avatarId: string): Promise<ArrayBuffer>;
    downloadVrmFile(vrmId: string): Promise<ArrayBuffer>;
    fetchAvatarModel(avatarId: string, modelType: ModelType): Promise<ArrayBuffer>;
    downloadImageFile(imageId: string, resolution?: string): Promise<ArrayBuffer>;
    downloadAnimationFile(vrmaAssetId: string): Promise<ArrayBuffer>;
    downloadAnimatedImageFile(assetId: string, quality?: string): Promise<ArrayBuffer>;
    downloadAnimationClipFile(clipId: string): Promise<ArrayBuffer>;
    downloadAssetBundleFile(assetBundleId: string, platform: string, arch: string): Promise<ArrayBuffer>;
    fetchProtectedVrmRaw(vrmId: string): Promise<ArrayBuffer>;
    decodeProtectedVrm(protectedData: ArrayBuffer): Promise<ArrayBuffer>;
    contentProtection: ContentProtectionDecoder | null;
    lastVrmProtectionMeta: VrmProtectionMeta | null;
}
/**
 * CachingMixin - Transparent cache layer for all download methods.
 *
 * If cacheManager is null (caching disabled), all methods pass through unchanged.
 */
declare const CachingMixin: <T extends new (...args: any[]) => BaseClient & DownloadMethods>(Base: T) => {
    new (...args: any[]): {
        /** @internal */ cacheManager: CacheManager | null;
        /**
         * Download VRM file for an avatar (cached).
         * L2 stores encrypted data; decoding happens on L2 hit.
         */
        downloadAvatarVrmFile(avatarId: string): Promise<ArrayBuffer>;
        /**
         * Download VRM file by VRM asset ID (cached).
         * L2 stores encrypted data; decodeFn decrypts on L2 hit.
         */
        downloadVrmFile(vrmId: string): Promise<ArrayBuffer>;
        /**
         * Fetch avatar model (cached - routes through downloadAvatarVrmFile which is already cached)
         */
        fetchAvatarModel(avatarId: string, modelType: ModelType): Promise<ArrayBuffer>;
        /**
         * Download image file (cached)
         */
        downloadImageFile(imageId: string, resolution?: string): Promise<ArrayBuffer>;
        /**
         * Download VRMA animation file (cached)
         */
        downloadAnimationFile(vrmaAssetId: string): Promise<ArrayBuffer>;
        /**
         * Download animated image file (cached)
         */
        downloadAnimatedImageFile(assetId: string, quality?: string): Promise<ArrayBuffer>;
        /**
         * Download animation clip file (cached)
         */
        downloadAnimationClipFile(clipId: string): Promise<ArrayBuffer>;
        /**
         * Download asset bundle file (cached)
         */
        downloadAssetBundleFile(assetBundleId: string, platform: string, arch: string): Promise<ArrayBuffer>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        patchFormData<T_1>(path: string, formData: FormData, userToken: string): Promise<T_1>;
        fetchProtectedVrmRaw(vrmId: string): Promise<ArrayBuffer>;
        decodeProtectedVrm(protectedData: ArrayBuffer): Promise<ArrayBuffer>;
        contentProtection: ContentProtectionDecoder | null;
        lastVrmProtectionMeta: VrmProtectionMeta | null;
    };
} & T;

/**
 * IndexedDB Persistent Cache Store (Web)
 *
 * Stores binary assets in IndexedDB for offline/repeated access.
 * Metadata is stored alongside data in the same object store.
 */

declare class IndexedDBCacheStore implements PersistentCacheStore {
    private dbPromise;
    private openDB;
    get(key: string): Promise<CacheEntry | null>;
    put(key: string, entry: CacheEntry): Promise<void>;
    delete(key: string): Promise<void>;
    has(key: string): Promise<boolean>;
    getMeta(key: string): Promise<CacheEntryMeta | null>;
    listMeta(): Promise<CacheEntryMeta[]>;
    totalSize(): Promise<number>;
    clear(): Promise<void>;
}

/**
 * CHARAHOME API SDK Configuration
 */

/**
 * Initialize the SDK with configuration
 */
declare function initCharahomeApi(config: CharahomeApiConfig): CharahomeApiClient;
/**
 * Get the current configuration
 * Falls back to environment variables if not explicitly initialized
 */
declare function getConfig(): CharahomeApiConfig;
/**
 * Get the global CharahomeApiClient instance
 * Creates one from environment variables if not initialized
 */
declare function getClient(): CharahomeApiClient;

/**
 * Conversation API Handler
 * POST /characters/{id}/conversation
 * POST /characters/{id}/conversation/raw
 *
 * X-User-Token header is supported for per-request authentication
 */
declare function handleConversation(request: Request, characterId: string): Promise<Response>;
/**
 * Conversation Raw API Handler
 * POST /characters/{id}/conversation/raw
 *
 * Raw prompt endpoint - client fully controls the prompt.
 * Server passes it directly to LLM without modification.
 */
declare function handleConversationRaw(request: Request, characterId: string): Promise<Response>;

/**
 * TTS API Handler
 * POST /tts/generate
 */

declare function handleTTS(request: NextRequest): Promise<Response>;

/**
 * VRMA Animation File Handler
 * GET /animations/{id}/file
 */

declare function handleAnimationFile(request: NextRequest, animationId: string): Promise<Response>;

declare function handleMotions(request: NextRequest, characterId: string): Promise<NextResponse<{
    motions: Motion[];
}> | NextResponse<{
    error: string;
}>>;

/**
 * CHARAHOME API SDK - Marketplace Type Definitions
 *
 * Types for the avatar/character marketplace system.
 * Enums are used for all categorical values per SDK convention.
 */
declare enum MarketplaceStatus {
    Draft = "draft",
    Listed = "listed",
    Unlisted = "unlisted",
    Suspended = "suspended"
}
declare enum ListingVisibility {
    Public = "public",
    BundleOnly = "bundle_only"
}
declare enum LicenseType {
    Quantity = "quantity",
    UsageRights = "usage_rights"
}
declare enum SellableAssetType {
    Vrm = "vrm",
    Vrma = "vrma",
    Image = "image",
    AnimatedImage = "animated_image",
    Audio = "audio",
    Glb = "glb",
    AssetBundle = "asset_bundle",
    AnimationClip = "animation_clip",
    GaussianSplat = "gaussian_splat",
    Video = "video"
}
declare enum ListingBundleType {
    Avatar = "avatar",
    Character = "character",
    Story = "story",
    ModifiedAvatar = "modified_avatar"
}
declare enum DerivativePolicy {
    Strict = "strict",
    PersonalOnly = "personal_only",
    FreeDistribution = "free_distribution",
    Commercial = "commercial"
}
declare enum InstanceAccessType {
    Trial = "trial",
    Full = "full"
}
declare enum AssetAccessLevel {
    Full = "full",
    Trial = "trial",
    DerivativeOnly = "derivative_only",
    None = "none"
}
declare enum OwnerType {
    User = "user",
    Character = "character"
}
declare enum SourceType {
    Listing = "listing",
    Distribution = "distribution"
}
declare enum AccessType {
    Trial = "trial",
    Full = "full"
}
declare enum DistributionStatus {
    Active = "active",
    Discontinued = "discontinued"
}
interface Listing {
    listing_id: string;
    creator_id: string;
    owner_id: string;
    asset_type: SellableAssetType;
    asset_id: string;
    license_type: LicenseType;
    price_coins: number;
    marketplace_status: MarketplaceStatus;
    visibility: ListingVisibility;
    discount_rate: number;
    discount_start_at: string | null;
    discount_end_at: string | null;
    discount_total_stock: number | null;
    discount_remaining_stock: number | null;
    discount_per_user: number | null;
    max_quantity_per_user: number | null;
    locales: Record<string, {
        name: string;
        description: string;
    }>;
    tags: Array<{
        tag_id: string;
        level: string;
    }>;
    purchase_count: number;
    favorite_count: number;
    created_at: string;
    updated_at: string;
}
interface ListingBundle {
    listing_bundle_id: string;
    creator_id: string;
    listing_bundle_type: ListingBundleType;
    marketplace_status: MarketplaceStatus;
    component_listings: Array<{
        listing_id: string;
        role: string;
        required: boolean;
    }>;
    child_bundles: Array<{
        listing_bundle_id: string;
        role: string;
        required: boolean;
    }>;
    total_price_coins: number;
    discount_rate: number;
    discount_start_at: string | null;
    discount_end_at: string | null;
    locales: Record<string, {
        name: string;
        description: string;
    }>;
    thumbnail_image_asset_id: string;
    review_summary: {
        average_rating: number;
        total_count: number;
    };
    purchase_count: number;
    favorite_count: number;
    created_at: string;
    updated_at: string;
}
interface ComponentListingDetail {
    listing_id: string;
    asset_type: SellableAssetType;
    role: string;
    required: boolean;
    price_coins: number;
    individual_effective_price: number;
    is_owned: boolean;
    is_discounted: boolean;
}
interface ListingBundleDetailResponse {
    listing_bundle: ListingBundle;
    component_details: ComponentListingDetail[];
    child_bundle_details: ListingBundleDetailResponse[];
    effective_total: number;
    user_payment: number;
    price_valid_until: string | null;
}
interface BrowseParams {
    type?: ListingBundleType;
    asset_type?: SellableAssetType;
    tags?: string;
    sort?: 'newest' | 'popular' | 'price_asc' | 'price_desc';
    q?: string;
    limit?: number;
    cursor?: string;
}
interface BrowseItem {
    listing_bundle_id: string;
    listing_bundle_type: ListingBundleType;
    name: string;
    creator_name: string;
    thumbnail_url: string;
    total_price_coins: number;
    effective_price: number;
    discount_rate: number;
    review_average: number;
    review_count: number;
    tags: Array<{
        tag_id: string;
        level: string;
    }>;
}
interface BrowseResponse {
    items: BrowseItem[];
    total: number;
    limit: number;
    next_cursor: string | null;
}
interface Entitlement {
    entitlement_id: string;
    owner_id: string;
    owner_type: OwnerType;
    source_type: SourceType;
    source_id: string;
    asset_type: SellableAssetType;
    asset_id: string;
    license_type: LicenseType;
    quantity: number | null;
    access_type: AccessType;
    pinned_version_id: string | null;
    available_update_version_id: string | null;
    created_at: string;
    updated_at: string;
}
interface EntitlementListResponse {
    items: Entitlement[];
    total: number;
    limit: number;
    next_cursor: string | null;
}
interface Distribution {
    distribution_id: string;
    asset_type: SellableAssetType;
    asset_id: string;
    creator_id: string;
    status: DistributionStatus;
    locales: Record<string, {
        name: string;
        description: string;
    }>;
    default_locale: string;
    created_at: string;
    updated_at: string;
}
interface DistributionBundle {
    distribution_bundle_id: string;
    creator_id: string;
    distribution_ids: string[];
    locales: Record<string, {
        name: string;
        description: string;
    }>;
    default_locale: string;
    created_at: string;
    updated_at: string;
}
interface AvatarTemplate {
    template_id: string;
    source_avatar_id: string;
    creator_id: string;
    marketplace_status: MarketplaceStatus;
    derivative_policy: DerivativePolicy;
    latest_version_id: string | null;
    origin_template_id: string | null;
    locales: Record<string, {
        name: string;
        description: string;
    }>;
    created_at: string;
    updated_at: string;
}
interface AvatarTemplateVersion {
    version_id: string;
    template_id: string;
    version_number: number;
    snapshot: Record<string, unknown>;
    created_at: string;
}
interface AvatarInstance {
    instance_id: string;
    user_id: string;
    avatar_template_id: string;
    pinned_version_id: string;
    access_type: InstanceAccessType;
    available_update_version_id: string | null;
    created_at: string;
    updated_at: string;
}
interface CharacterInstance {
    instance_id: string;
    user_id: string;
    character_template_id: string;
    pinned_version_id: string;
    access_type: InstanceAccessType;
    available_update_version_id: string | null;
    avatar_instance_id: string;
    created_at: string;
    updated_at: string;
}
interface MarketplaceReview {
    review_id: string;
    user_id: string;
    target_type: string;
    target_id: string;
    rating: number;
    comment: string;
    created_at: string;
}
interface MarketplaceFavorite {
    favorite_id: string;
    user_id: string;
    target_type: string;
    target_id: string;
    created_at: string;
}
interface CreateReportRequest {
    target_type: string;
    target_id: string;
    reason: 'copyright' | 'inappropriate' | 'spam' | 'other';
    description: string;
}
interface MarketplaceNotification {
    notification_id: string;
    user_id: string;
    notification_type: string;
    title: string;
    body: string;
    is_read: boolean;
    metadata: Record<string, unknown>;
    created_at: string;
}
interface MarketplacePaginatedResponse<T> {
    items: T[];
    total: number;
    limit: number;
    next_cursor: string | null;
}

/**
 * CHARAHOME API SDK - MarketplaceClient
 *
 * Client for marketplace API endpoints: browse, listing-bundle, listing,
 * template, instance, review, favorite, report, notification, creator tools.
 */

interface MarketplaceClientOptions {
    baseUrl?: string;
    token?: string;
}
declare class MarketplaceClient {
    private baseUrl;
    private token;
    constructor(options?: MarketplaceClientOptions);
    /** Set the authentication token */
    setAuthToken(token: string): void;
    /** Clear the authentication token */
    clearAuthToken(): void;
    browse(params?: BrowseParams): Promise<BrowseResponse>;
    getListingBundle(id: string): Promise<ListingBundleDetailResponse>;
    getListing(id: string): Promise<Listing>;
    getAvatarTemplate(id: string): Promise<AvatarTemplate>;
    getAvatarTemplateVersions(id: string): Promise<MarketplacePaginatedResponse<AvatarTemplateVersion>>;
    createDerivative(templateId: string): Promise<{
        avatar_id: string;
    }>;
    createAvatarInstance(templateId: string, versionId: string): Promise<AvatarInstance>;
    getAvatarInstance(id: string): Promise<AvatarInstance>;
    updateAvatarInstanceVersion(id: string): Promise<AvatarInstance>;
    forkAvatarInstance(id: string): Promise<{
        avatar_id: string;
    }>;
    createCharacterInstance(templateId: string, versionId: string): Promise<CharacterInstance>;
    upgradeCharacterInstance(id: string): Promise<CharacterInstance>;
    getReviews(targetId: string, limit?: number, cursor?: string): Promise<MarketplacePaginatedResponse<MarketplaceReview>>;
    createReview(targetType: string, targetId: string, rating: number, comment: string): Promise<MarketplaceReview>;
    getFavorites(limit?: number, cursor?: string): Promise<MarketplacePaginatedResponse<MarketplaceFavorite>>;
    addFavorite(targetType: string, targetId: string): Promise<MarketplaceFavorite>;
    removeFavorite(id: string): Promise<void>;
    createReport(req: CreateReportRequest): Promise<void>;
    getNotifications(limit?: number, cursor?: string): Promise<MarketplacePaginatedResponse<MarketplaceNotification>>;
    markNotificationRead(id: string): Promise<void>;
    markAllNotificationsRead(): Promise<void>;
    getMyListings(limit?: number, cursor?: string): Promise<MarketplacePaginatedResponse<Listing>>;
    createListing(req: Record<string, unknown>): Promise<Listing>;
    updateListing(id: string, req: Record<string, unknown>): Promise<Listing>;
    deleteListing(id: string): Promise<void>;
    createListingBundle(req: Record<string, unknown>): Promise<ListingBundle>;
    updateListingBundle(id: string, req: Record<string, unknown>): Promise<ListingBundle>;
    checkPurposeUpgrade(avatarId: string): Promise<{
        upgraded: boolean;
        new_purpose: string;
    }>;
    private request;
}
declare class MarketplaceApiError extends Error {
    readonly status: number;
    readonly body?: unknown | undefined;
    constructor(message: string, status: number, body?: unknown | undefined);
}

/**
 * CHARAHOME API SDK - Access Control Helpers
 *
 * Utility functions for marketplace access level checks.
 */

/** Whether the user can download the asset file */
declare function canDownloadAsset(level: AssetAccessLevel): boolean;
/** Whether the user can use the asset in a character */
declare function canUseInCharacter(level: AssetAccessLevel): boolean;
/** Whether the user can create a derivative from the asset */
declare function canCreateDerivative(level: AssetAccessLevel): boolean;
/** Whether the instance has full access */
declare function isFullAccess(accessType: InstanceAccessType): boolean;
/** Whether the instance is trial access */
declare function isTrial(accessType: InstanceAccessType): boolean;

/**
 * @kurasuai-inc/charahome-api
 *
 * CHARAHOME API SDK - API Client and handlers for Node.js applications
 */

/**
 * Configure the generated API client
 * Must be called before using any generated service
 */
declare function configureGeneratedApi(config: {
    baseUrl: string;
    token?: string;
    headers?: Record<string, string>;
}): void;

export { AccessType, AssetAccessLevel, AudioAssetApiMixin, AudioAssetCreateOptions, AudioAssetCreateResponse, AvatarApiMixin, AvatarCreateResponse, type AvatarInstance, type AvatarTemplate, type AvatarTemplateVersion, AvatarUploadOptions, BaseClient, type BrowseItem, type BrowseParams, type BrowseResponse, CacheEntry, CacheEntryMeta, CacheManager, CachingMixin, CharacterApiMixin, CharacterData, type CharacterInstance, CharahomeApiClient, CharahomeApiConfig, type ComponentListingDetail, ContentProtectionDecoder, ConversationApiMixin, ConversationChunk, ConversationRequest, type CreateReportRequest, DerivativePolicy, type Distribution, type DistributionBundle, DistributionStatus, type Entitlement, type EntitlementListResponse, ImageAssetApiMixin, ImageAssetUploadOptions, ImageAssetUploadResult, IndexedDBCacheStore, InstanceAccessType, LicenseType, type Listing, type ListingBundle, type ListingBundleDetailResponse, ListingBundleType, ListingVisibility, MarketplaceApiError, MarketplaceClient, type MarketplaceClientOptions, type MarketplaceFavorite, type MarketplaceNotification, type MarketplacePaginatedResponse, type MarketplaceReview, MarketplaceStatus, ModelType, Motion, OwnerType, PersistentCacheStore, SellableAssetType, SourceType, TTSRequest, TTSResponse, TtsApiMixin, UserData, VideoAssetApiMixin, VideoAssetCreateOptions, VideoAssetCreateResponse, VrmaAssetApiMixin, VrmaUploadOptions, VrmaUploadResponse, canCreateDerivative, canDownloadAsset, canUseInCharacter, configureGeneratedApi, getClient, getConfig, handleAnimationFile, handleConversation, handleConversationRaw, handleMotions, handleTTS, initCharahomeApi, isFullAccess, isTrial };
