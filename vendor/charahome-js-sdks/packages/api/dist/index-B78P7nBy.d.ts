import { C as CacheConfig, c as PersistentCacheStore, A as AssetCategory, e as CacheStats } from './types-D2KgMl8A.js';

/**
 * CHARAHOME Environment Configuration
 *
 * Predefined environment settings for staging and production.
 * Default is staging to prevent accidental production access during development.
 */
type CharahomeEnvironment = 'staging' | 'production';
interface EnvironmentConfig {
    /** Internal API base URL */
    apiBaseUrl: string;
    /** Text Converter Service base URL */
    textConverterBaseUrl: string;
    /** Firebase project ID */
    firebaseProjectId: string;
    /** Firebase Auth domain */
    firebaseAuthDomain: string;
    /** Firebase API key */
    firebaseApiKey: string;
    /** Firebase Storage bucket */
    firebaseStorageBucket: string;
    /** Firebase Messaging sender ID */
    firebaseMessagingSenderId: string;
    /** Firebase App ID */
    firebaseAppId: string;
}
declare const ENVIRONMENTS: Record<CharahomeEnvironment, EnvironmentConfig>;
/**
 * Resolve the environment from explicit value or environment variable.
 *
 * Priority:
 * 1. Explicitly passed environment
 * 2. NEXT_PUBLIC_CHARAHOME_ENV or CHARAHOME_ENV environment variable
 * 3. Default: 'staging'
 *
 * Safety: If 'production' is requested in a non-production Node.js environment,
 * a console warning is emitted.
 */
declare function resolveEnvironment(explicit?: CharahomeEnvironment): CharahomeEnvironment;
/**
 * Get the environment configuration.
 */
declare function getEnvironmentConfig(env?: CharahomeEnvironment): EnvironmentConfig;
/**
 * Get Firebase configuration for the specified environment.
 * Returns a FirebaseOptions-compatible object.
 */
declare function getFirebaseConfig(env?: CharahomeEnvironment): {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
};

type ModelType = 'vrm' | 'sprite' | 'face_icon' | 'asset_bundle' | 'glb';

/**
 * モーションタイプ（意味的カテゴリ）
 */
type MotionType$1 = 'base' | 'gesture' | 'object_interaction';

/**
 * 感情フォーマットタイプ
 */
type EmotionFormatType = 'blend_shape' | 'sprite' | 'face_icon' | 'glb';

/**
 * モーションフォーマットタイプ
 */
type MotionFormatType = 'animator' | 'vrma' | 'glb' | 'animated_image' | 'image_sequence' | 'sprite_sheet';

/**
 * Default API base URL (staging - safe default for development)
 * @deprecated Use `getEnvironmentConfig()` or pass `environment` to config instead
 */
declare const DEFAULT_API_BASE_URL: string;
/**
 * Default Text Converter Service base URL (staging)
 * @deprecated Use `getEnvironmentConfig()` or pass `environment` to config instead
 */
declare const DEFAULT_TEXT_CONVERTER_BASE_URL: string;
interface CharahomeApiConfig {
    /**
     * Environment preset ('staging' | 'production').
     * Defaults to 'staging'. When set, provides default values for baseUrl,
     * textConverterBaseUrl, and Firebase config.
     * Explicit baseUrl/textConverterBaseUrl override the environment preset.
     */
    environment?: CharahomeEnvironment;
    /** API base URL (overrides environment preset) */
    baseUrl?: string;
    /** Text Converter Service base URL (overrides environment preset) */
    textConverterBaseUrl?: string;
    /** Authentication token */
    authToken: string;
    /** Asset cache configuration */
    cache?: CacheConfig;
    /**
     * Enable content protection for VRM/GLB downloads.
     * When enabled, downloads use the encrypted protected-file endpoint
     * with AES-256-GCM decryption, zstd decompression, and mesh deobfuscation.
     * Requires server-side protected-file endpoints to be deployed.
     * @default false
     */
    contentProtection?: boolean;
}

type EmotionInterruptMode = 'block' | 'allow_additive' | 'allow_specific' | 'allow_all';
/**
 * Common response for signed URLs
 */
interface SignedUrlResponse {
    url: string;
}

/**
 * Avatar API Types
 */

/**
 * Avatar data (from GET /avatars)
 */
interface Avatar {
    avatar_id: string;
    avatar_name: string;
    owner_id?: string;
    model_type: ModelType;
    vrm_asset_id?: string;
    icon_image_asset_id?: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
}
/**
 * Avatar list item (simplified)
 */
interface AvatarListItem {
    avatar_id: string;
    avatar_name: string;
    owner_id?: string;
    model_type: ModelType;
    icon_image_asset_id?: string;
    created_at?: string;
}
/**
 * Avatar list response
 */
interface AvatarListResponse {
    avatars: AvatarListItem[];
}
/**
 * VRM model response (from GET /avatars/{avatarId}/vrm-model)
 */
interface VrmModelResponse {
    vrm_asset_id: string;
}
/**
 * Avatar upload options
 */
interface AvatarUploadOptions {
    /** Avatar name */
    avatarName: string;
    /** Model type (default: 'vrm') */
    modelType?: ModelType;
    /** Description */
    description?: string;
}
/**
 * Avatar create response (from POST /avatars)
 */
interface AvatarCreateResponse {
    avatar_id: string;
    vrm_asset_id: string;
    message: string;
}

/**
 * Settings API Types
 */
/**
 * Settings data (from GET /settings)
 */
interface Settings {
    settings_id: string;
    settings_name: string;
    owner_id?: string;
    overview_id?: string;
    system_prompt?: string;
    first_person_pronoun?: string;
    second_person_pronoun?: string;
    personality?: string;
    speaking_style?: string;
    background?: string;
    custom_fields?: Record<string, unknown>;
    created_at?: string;
    updated_at?: string;
}
/**
 * Settings list item (simplified)
 */
interface SettingsListItem {
    settings_id: string;
    settings_name: string;
    owner_id?: string;
    overview_id?: string;
    created_at?: string;
}
/**
 * Settings list response
 */
interface SettingsListResponse {
    settings: SettingsListItem[];
}
/**
 * Settings with overview create request
 */
interface SettingsWithOverviewRequest {
    /** Settings name */
    settings_name: string;
    /** Overview data */
    overview?: {
        name?: string;
        personality?: string;
        speaking_style?: string;
        background?: string;
    };
    /** System prompt template */
    system_prompt?: string;
    /** First person pronoun (e.g., "私", "俺") */
    first_person_pronoun?: string;
    /** Second person pronoun (e.g., "あなた", "君") */
    second_person_pronoun?: string;
    /** Custom fields for additional data */
    custom_fields?: Record<string, unknown>;
}
/**
 * Settings create response
 */
interface SettingsCreateResponse {
    settings_id: string;
    overview_id?: string;
    message: string;
}
/**
 * Settings file upload options
 */
interface SettingsFileUploadOptions {
    /** Field name to associate the file with */
    fieldName: string;
    /** MIME type of the file */
    mimeType?: string;
}

/**
 * Character API Types
 */

/**
 * Character data (from GET /characters/{characterId})
 */
interface Character {
    character_id: string;
    character_name: string;
    avatar_id?: string;
    description?: string;
    voice_id?: string;
    settings_id?: string;
    icon_url?: string;
    icon_square_asset_id?: string;
    icon_rectangle_asset_id?: string;
    owner_id?: string;
    main_color?: CharacterColor;
    sub_color?: CharacterColor;
    locales?: Record<string, CharacterLocale>;
    created_at?: string;
    updated_at?: string;
}
/**
 * Character locale data
 */
interface CharacterLocale {
    name?: string;
    description?: string;
}
/**
 * Character list item (from GET /characters)
 */
interface CharacterListItem {
    character_id: string;
    character_name: string;
    owner_id: string;
    avatar_id?: string;
    description?: string;
    voice_id?: string;
    settings_id?: string;
    icon_url?: string;
    created_at?: string;
    updated_at?: string;
}
/**
 * Color type for character theme colors
 */
interface CharacterColor {
    r: number;
    g: number;
    b: number;
    a: number;
}
/**
 * Character emotion format (SDK compatible)
 */
interface CharacterEmotionFormat {
    format_type: EmotionFormatType;
    payload: Record<string, unknown>;
}
/**
 * Character emotion data (SDK compatible)
 */
interface CharacterEmotionData {
    emotion_id: string;
    usage_description: string;
    interrupt_mode: EmotionInterruptMode;
    allowed_emotion_ids: string[];
    formats: CharacterEmotionFormat[];
}
/**
 * Character motion format (SDK compatible)
 */
interface CharacterMotionFormat {
    format_type: MotionFormatType;
    payload: Record<string, unknown>;
}
/**
 * Character motion data (SDK compatible)
 */
interface CharacterMotionData {
    avatar_motion_id: string;
    motion_id: string;
    usage_description: string;
    emotion_id: string;
    number: number;
    motion_type: MotionType$1;
    formats: CharacterMotionFormat[];
    playable_postures?: string[];
}
/**
 * CharacterData for SDK (compatible with @kurasuai-inc/charahome-core CharacterData)
 */
interface CharacterData {
    character_id: string;
    character_name: string;
    character_name_reading?: string;
    avatar_id?: string;
    description?: string;
    voice_id?: string;
    settings_id?: string;
    icon_url?: string;
    icon_square_asset_id?: string;
    icon_rectangle_asset_id?: string;
    model_type: ModelType;
    emotions?: CharacterEmotionData[];
    motions?: CharacterMotionData[];
    /** Raw avatar control data from API (snake_case, to be converted by factories) */
    avatarControlRawData?: {
        avatarId: string;
        modelType: ModelType;
        blink?: Record<string, unknown>;
        lipSync?: Record<string, unknown>;
        lookAt?: Record<string, unknown>;
        breathing?: Record<string, unknown>;
        coreMotions?: Record<string, unknown>;
        defaultAppearance?: Record<string, unknown>;
    };
    options?: Record<string, unknown>;
    main_color?: CharacterColor;
    sub_color?: CharacterColor;
}
/**
 * Character create request
 */
interface CharacterCreateRequest {
    /** Character ID (optional, auto-generated if not provided) */
    character_id?: string;
    /** Character name */
    character_name: string;
    /** Avatar ID */
    avatar_id?: string;
    /** Voice ID */
    voice_id?: string;
    /** Settings ID */
    settings_id?: string;
    /** Description */
    description?: string;
    /** Icon square asset ID */
    icon_square_asset_id?: string;
    /** Icon rectangle asset ID */
    icon_rectangle_asset_id?: string;
    /** Main theme color */
    main_color?: CharacterColor;
    /** Sub theme color */
    sub_color?: CharacterColor;
    /** Locale data */
    locales?: Record<string, CharacterLocale>;
}
/**
 * Character create response
 */
interface CharacterCreateResponse {
    character_id: string;
    message: string;
}
/**
 * Chat log add request
 */
interface ChatLogAddRequest {
    /** User message */
    user_message: string;
    /** Character response */
    character_response: string;
    /** Session ID (optional) */
    session_id?: string;
    /** Additional metadata */
    metadata?: Record<string, unknown>;
}
/**
 * Chat log add response
 */
interface ChatLogAddResponse {
    chat_log_id: string;
    message: string;
}

/**
 * Character Motion API Types
 */

/**
 * Motion data (from GET /characters/{characterId}/motions)
 */
interface Motion {
    avatar_motion_id: string;
    motion_id: string;
    description?: string;
    usage_description?: string;
    motion_type: MotionType$1;
    emotion_id?: string;
    number?: number;
    valence?: number;
    arousal?: number;
    dominance?: number;
    formats?: MotionFormat[];
    playable_postures?: string[];
}
/**
 * Motion format data
 */
interface MotionFormat {
    format_type: string;
    payload: {
        vrma_asset_id?: string;
        [key: string]: unknown;
    };
}
/**
 * Motions response (from GET /characters/{characterId}/motions)
 */
interface MotionsResponse {
    motions: Motion[];
}
/**
 * Motion create request
 */
interface MotionCreateRequest {
    /** Motion ID (e.g., "idle_stand", "wave", "nod") */
    motion_id: string;
    /** Motion type */
    motion_type: MotionType$1;
    /** Associated emotion ID */
    emotion_id?: string;
    /** Description */
    description?: string;
    /** Usage description for AI selection */
    usage_description?: string;
    /** Valence value (-1 to 1) */
    valence?: number;
    /** Arousal value (-1 to 1) */
    arousal?: number;
    /** Dominance value (-1 to 1) */
    dominance?: number;
}
/**
 * Motion update request
 */
interface MotionUpdateRequest {
    /** Motion type */
    motion_type?: MotionType$1;
    /** Associated emotion ID */
    emotion_id?: string;
    /** Description */
    description?: string;
    /** Usage description for AI selection */
    usage_description?: string;
    /** Valence value (-1 to 1) */
    valence?: number;
    /** Arousal value (-1 to 1) */
    arousal?: number;
    /** Dominance value (-1 to 1) */
    dominance?: number;
}
/**
 * Motion create/update response
 */
interface MotionResponse {
    avatar_motion_id: string;
    motion_id: string;
    motion_type: MotionType$1;
    message?: string;
}
/**
 * Motion format create request
 */
interface MotionFormatCreateRequest {
    /** Format type (e.g., "vrma", "fbx") */
    format_type: string;
    /** Format-specific payload */
    payload: {
        vrma_asset_id?: string;
        [key: string]: unknown;
    };
}
/**
 * Motion format response
 */
interface MotionFormatResponse {
    format_type: string;
    payload: Record<string, unknown>;
    message?: string;
}

/**
 * Audio Asset API Types
 */
/**
 * Audio type
 */
type AudioType = 'bgm' | 'se' | 'jingle';
/**
 * Audio format
 */
type AudioFormat = 'mp3' | 'wav' | 'ogg' | 'm4a' | 'flac';
/**
 * Audio quality level
 */
type AudioQuality = 'low' | 'medium' | 'high' | 'lossless';
/**
 * Thumbnail size
 */
type ThumbnailSize = 'small' | 'medium' | 'large';
/**
 * Publish settings type
 */
type PublishSettingsType = 'private' | 'public' | 'premium';
/**
 * BPM range filter
 */
type BpmRange = 'slow' | 'moderate' | 'fast' | 'very_fast';
/**
 * Localized audio asset data
 */
interface AudioAssetLocalized {
    name: string;
    description?: string;
}
/**
 * Audio asset paths for different quality levels
 */
interface AudioAssetPaths {
    low?: string;
    medium?: string;
    high?: string;
    lossless?: string;
}
/**
 * Audio asset thumbnail paths
 */
interface AudioAssetThumbnailPaths {
    small?: string;
    medium?: string;
    large?: string;
}
/**
 * Tag with level
 */
interface TagWithLevel$1 {
    tag_id: string;
    level: 'core' | 'secondary' | 'flavor';
}
/**
 * Audio asset response
 */
interface AudioAsset {
    audio_asset_id: string;
    audio_type: AudioType;
    default_locale: string;
    locales: Record<string, AudioAssetLocalized>;
    paths: AudioAssetPaths;
    format: AudioFormat;
    duration: number;
    sample_rate: number;
    bit_depth: number;
    channels: number;
    file_size: number;
    owner_id: string;
    artist?: string;
    album?: string;
    bpm?: number;
    loop_point?: number;
    is_loopable?: boolean;
    thumbnail_paths?: AudioAssetThumbnailPaths;
    tags?: TagWithLevel$1[];
    publish_type: PublishSettingsType;
    created_at?: string;
    updated_at?: string;
}
/**
 * Audio asset create options (for form data)
 */
interface AudioAssetCreateOptions {
    /** Audio type */
    audioType: AudioType;
    /** Audio title */
    title: string;
    /** Artist name */
    artist?: string;
    /** Album name */
    album?: string;
    /** Description */
    description?: string;
    /** Publish type */
    publishType?: PublishSettingsType;
    /** Thumbnail file */
    thumbnail?: Blob;
    /** Duration in seconds (auto-detected if not provided) */
    duration?: number;
    /** Sample rate in Hz */
    sampleRate?: number;
    /** Bit depth */
    bitDepth?: number;
    /** Number of channels */
    channels?: number;
    /** BPM (BGM only) */
    bpm?: number;
    /** Loop point in seconds */
    loopPoint?: number;
    /** Whether file is loopable */
    isLoopable?: boolean;
}
/**
 * Audio asset create response
 */
interface AudioAssetCreateResponse {
    message: string;
    audio_id: string;
}
/**
 * Audio asset search options
 */
interface AudioAssetSearchOptions {
    /** Audio type filter */
    audioType?: AudioType;
    /** Maximum duration in seconds */
    maxDuration?: number;
    /** Exact title match */
    title?: string;
    /** Owner ID filter */
    ownerId?: string;
    /** Comma-separated tags (all must match) */
    tags?: string;
    /** Artist name filter */
    artist?: string;
    /** Album name filter */
    album?: string;
    /** BPM range filter */
    bpmRange?: BpmRange;
    /** Loop capability filter */
    isLoopable?: boolean;
    /** Maximum results (default: 50) */
    limit?: number;
}
/**
 * Audio asset update request
 */
interface AudioAssetUpdateRequest {
    title?: string;
    description?: string;
    default_locale?: string;
    locales?: Record<string, AudioAssetLocalized>;
    artist?: string;
    album?: string;
    duration?: number;
    sample_rate?: number;
    bit_depth?: number;
    channels?: number;
    bpm?: number;
    loop_point?: number;
    is_loopable?: boolean;
    tags?: string[];
    publish_type?: PublishSettingsType;
}
/**
 * Audio asset delete response
 */
interface AudioAssetDeleteResponse {
    message: string;
}

/**
 * VRM Asset API Types
 */

/**
 * Supported language
 */
type SupportedLanguage$1 = 'ja-JP' | 'en-US' | 'zh-CN';
/**
 * Data source
 */
type DataSource = 'official' | 'community';
/**
 * VRM asset localized data
 */
interface VrmAssetLocalized {
    name: string;
    description?: string;
}
/**
 * VRM asset response
 */
interface VrmAsset {
    vrm_asset_id: string;
    vrm_path: string;
    file_size?: number;
    owner_id: string;
    data_source: DataSource;
    default_locale: SupportedLanguage$1;
    locales: Record<SupportedLanguage$1, VrmAssetLocalized>;
    author?: string;
    license_url?: string;
    thumbnail_path?: string;
    version?: number;
    tags?: TagWithLevel$1[];
    publish_type: PublishSettingsType;
    created_at?: string;
    updated_at?: string;
}
/**
 * VRM asset create options (for form data)
 */
interface VrmAssetCreateOptions {
    /** Model name */
    modelName?: string;
    /** Author name */
    author?: string;
    /** License URL */
    licenseUrl?: string;
    /** Thumbnail image asset ID */
    thumbnailImageAssetId?: string;
    /** Thumbnail image asset version ID */
    thumbnailImageAssetVersionId?: string;
    /** Publish type */
    publishType?: PublishSettingsType;
}
/**
 * VRM asset create response
 */
interface VrmAssetCreateResponse {
    vrm_asset_id: string;
    message?: string;
}
/**
 * VRM asset update request
 */
interface VrmAssetUpdateRequest {
    default_locale?: SupportedLanguage$1;
    locales?: Record<SupportedLanguage$1, VrmAssetLocalized>;
    author?: string;
    license_url?: string;
    tags?: string[];
    publish_type?: PublishSettingsType;
}
/**
 * VRM asset delete response
 */
interface VrmAssetDeleteResponse {
    message: string;
}
/**
 * VRM asset file URL response
 */
interface VrmAssetFileUrlResponse {
    url: string;
}

/**
 * 性格アーキタイプ（ベース17値）
 *
 * キャラクターの根幹気質。行動プリセット（目線・まばたき・モーション・会話シグナル・
 * 感情ベースライン）の決定キー、性格ラベル、特殊機能トリガーとして使用。
 *
 * 詳細仕様: docs/personality-classification-spec.md
 */
type PersonalityArchetype = 'genki' | 'bold' | 'fierce' | 'cheerful' | 'gentle' | 'shy' | 'stoic' | 'dreamy' | 'cool' | 'nonchalant' | 'regal' | 'mysterious' | 'alluring' | 'trickster' | 'chuunibyou' | 'eccentric' | 'chaotic';

/**
 * 行動パターンオーバーレイ（6値）
 *
 * ベースアーキタイプの自然な挙動では説明できない特異な行動パターン。
 * キャラクター単位で0個以上付与し、ベースプリセットにオフセット加算する。
 *
 * 詳細仕様: docs/personality-classification-spec.md
 */
type BehavioralPattern = 'tsundere' | 'kuudere' | 'yandere' | 'sadistic' | 'masochistic' | 'menhera';

/**
 * 生成AI使用レベル
 */
type CreationMethod = 'no_generative_ai' | 'generative_ai_assisted' | 'generative_ai_refined' | 'fully_generative_ai';

/**
 * 改変ポリシー（利用規約 第12条の2 第5項1号）
 *
 * アセットのデータ自体の外観・構造・色彩等を変更する行為の可否を定義する。
 * キャラクターが装備品を着脱する行為は改変に含まれない。
 * PROHIBITED: フォーク（改変コピー作成）自体が不可。
 * ALLOWED: フォーク可、改変・再テンプレート化・販売すべて自由。
 */
type ModificationPolicy = 'prohibited' | 'allowed';

/**
 * アセット利用条件（利用規約 第12条の2 第5項）
 *
 * クリエイターがアセットに設定する利用条件。
 * UsageRestrictionsとは独立したモデル。
 *
 * - UsageRestrictions: アセットがどのコンテンツで表示/再生可能か（年齢制限・表現強度）
 * - AssetUsageConditions: アセットをどのように利用できるか（改変・クレジット）
 */
type AssetUsageConditions = {
    /**
     * 改変ポリシー。デフォルト値はアセット種類により異なる（APIレイヤーで制御）
     */
    modification: ModificationPolicy;
    /**
     * クレジット表記の要否。デフォルト: 必要（True）
     */
    credit_required?: boolean;
};

/**
 * アセットの入手方法
 */
type AcquisitionMethod = 'self_created' | 'co_created' | 'commissioned' | 'purchased' | 'received' | 'public_source';

/**
 * クリエイティブ・コモンズ ライセンス種別
 */
type CreativeCommonsType = 'cc_by' | 'cc_by_sa' | 'cc_by_nd' | 'cc_by_nc' | 'cc_by_nc_sa' | 'cc_by_nc_nd';

/**
 * アップロード者が保有する権利の範囲
 *
 * 権限マトリクス:
 * - FULL_OWNERSHIP:    運営OK, PRIVATE OK, UNLISTED OK, PUBLIC OK
 * - EXCLUSIVE_LICENSE: 運営OK, PRIVATE OK, UNLISTED OK, PUBLIC OK
 * - REDISTRIBUTION:    運営OK, PRIVATE OK, UNLISTED OK, PUBLIC OK
 * - PUBLIC_DOMAIN:     運営OK, PRIVATE OK, UNLISTED OK, PUBLIC OK
 * - COMMERCIAL_PRODUCT:運営OK, PRIVATE OK, UNLISTED NG, PUBLIC NG
 * - PERSONAL_ONLY:     運営NG, PRIVATE OK, UNLISTED NG, PUBLIC NG
 * - CREATIVE_COMMONS:  CC種別による
 * - CUSTOM:            契約による
 */
type RightsScope = 'full_ownership' | 'exclusive_license' | 'commercial_product' | 'redistribution' | 'personal_only' | 'public_domain' | 'creative_commons' | 'custom';

/**
 * アップロード者のアセットに対する権利宣言
 *
 * 入手方法（acquisition_method）と保有権利（rights_scope）の2軸で管理する。
 * ユーザー申告情報であり、バリデーション・紛争対応・運営管理に使用する。
 */
type AssetRightsDeclaration = {
    /**
     * 入手方法
     */
    acquisition_method?: AcquisitionMethod;
    /**
     * 保有する権利の範囲
     */
    rights_scope?: RightsScope;
    /**
     * CC系ライセンスの種別（rights_scopeがCREATIVE_COMMONSの場合のみ）
     */
    cc_type?: (CreativeCommonsType | null);
    /**
     * 取得元URL（購入ページ、ライセンスページ等）
     */
    source_url?: (string | null);
    /**
     * 補足情報（契約名、共同制作者等）
     */
    rights_note?: string;
};

/**
 * VRMA Asset API Types
 */

/**
 * Motion type (matches server MotionType enum)
 */
type MotionType = 'base' | 'gesture' | 'object_interaction';
/**
 * VRMA localized data
 */
interface VrmaLocalized {
    name: string;
    description?: string;
}
/**
 * VRMA asset data (from GET /vrma-assets/{assetId})
 */
interface VrmaAsset {
    vrma_asset_id: string;
    vrma_path: string;
    file_size?: number;
    owner_id: string;
    data_source: DataSource;
    motion_id: string;
    motion_type: MotionType;
    emotion_id?: string;
    target_gender?: string;
    default_locale: SupportedLanguage$1;
    locales: Record<SupportedLanguage$1, VrmaLocalized>;
    default_fade_in: number;
    default_fade_out: number;
    default_playback_speed: number;
    default_body_region?: string;
    default_weight: number;
    thumbnail_image_asset_id?: string;
    preview_animated_image_asset_id?: string;
    tags?: TagWithLevel$1[];
    publish_scope?: string;
    age_groups?: string[];
    version?: number;
    created_at?: string;
    updated_at?: string;
}
/**
 * Thumbnail: either existing asset ID or direct file upload (mutually exclusive)
 */
type ThumbnailOption = {
    thumbnailImageAssetId?: string;
    thumbnailImage?: never;
} | {
    thumbnailImageAssetId?: never;
    thumbnailImage?: ArrayBuffer | Blob;
};
/**
 * Preview: either existing asset ID or direct file upload (mutually exclusive)
 */
type PreviewOption = {
    previewAnimatedImageAssetId?: string;
    previewAnimatedImage?: never;
} | {
    previewAnimatedImageAssetId?: never;
    previewAnimatedImage?: ArrayBuffer | Blob;
};
/**
 * VRMA asset upload options (base fields)
 */
interface VrmaUploadOptionsBase {
    /** Motion ID (required) */
    motionId: string;
    /** Motion type (required) */
    motionType: MotionType;
    /** Emotion ID */
    emotionId?: string;
    /** Target gender */
    targetGender?: string;
    /** Target age groups (JSON array) */
    ageGroups?: string[];
    /** Default fade-in duration in seconds */
    defaultFadeIn?: number;
    /** Default fade-out duration in seconds */
    defaultFadeOut?: number;
    /** Default playback speed multiplier */
    defaultPlaybackSpeed?: number;
    /** Default body region */
    defaultBodyRegion?: string;
    /** Default blend weight */
    defaultWeight?: number;
    /** Publish scope */
    publishScope?: string;
    /** Data source */
    dataSource?: DataSource;
    /** Compatible personality archetypes */
    compatibleArchetypes?: PersonalityArchetype[];
    /** Compatible behavioral patterns */
    compatibleBehavioralPatterns?: BehavioralPattern[];
    /** Creation method (no_generative_ai, generative_ai_assisted, etc.) */
    creationMethod?: CreationMethod;
    /** Creator entity ID */
    creatorId?: string;
    /** Creator display name */
    creatorDisplayName?: string;
    /** Asset usage conditions (modification policy, credit) */
    usageConditions?: AssetUsageConditions;
    /** Asset rights declaration (acquisition method, rights scope) */
    rightsDeclaration?: AssetRightsDeclaration;
}
/**
 * VRMA asset upload options
 *
 * Thumbnail and preview each accept either an existing asset ID or a direct file upload, not both.
 */
type VrmaUploadOptions = VrmaUploadOptionsBase & ThumbnailOption & PreviewOption;
/**
 * VRMA asset upload response
 */
interface VrmaUploadResponse {
    vrma_asset_id: string;
    message: string;
}
/**
 * VRMA asset update request
 */
interface VrmaAssetUpdateRequest {
    locales?: Record<SupportedLanguage$1, VrmaLocalized>;
    emotion_id?: string;
    target_gender?: string;
    default_fade_in?: number;
    default_fade_out?: number;
    default_playback_speed?: number;
    default_body_region?: string;
    default_weight?: number;
    thumbnail_image_asset_id?: string;
    preview_animated_image_asset_id?: string;
    tags?: TagWithLevel$1[];
    publish_scope?: string;
    age_groups?: string[];
}
/**
 * VRMA asset delete response
 */
interface VrmaDeleteResponse {
    message: string;
}
/**
 * VRMA asset file URL response
 */
interface VrmaAssetFileUrlResponse {
    url: string;
}

/**
 * Conversation API Types
 */
/**
 * Conversation request
 */
interface ConversationRequest {
    input_string: string;
    is_audio?: boolean;
    language?: 'JP' | 'EN';
    session_id?: string;
    additional_prompt?: string;
    custom_properties?: Record<string, unknown>;
    return_lip_sync?: boolean;
    llm_provider?: string;
    llm_model?: string;
    byok?: {
        api_key: string;
        provider?: string;
        model?: string;
    } | null;
}
/**
 * Conversation chunk (streamed response)
 */
interface ConversationChunk {
    text?: string;
    emotion_id?: string;
    motion_id?: string;
    motion_type?: string;
    audio?: string;
    lip_sync_frames?: LipSyncFrame[];
    action?: ConversationAction;
    is_final?: boolean;
    error?: string;
}
/**
 * Conversation action
 */
interface ConversationAction {
    type: string;
    emotion_id?: string;
    motion_id?: string;
    result?: unknown;
}
/**
 * Lip sync frame data (weight-based)
 */
interface LipSyncFrame {
    /** Phoneme weights (A/I/U/E/O/S) */
    weights: PhonemeWeight[];
    /** Timestamp in milliseconds */
    timestamp_ms: number;
    /** RMS volume */
    volume: number;
}
/**
 * Phoneme weight entry
 */
interface PhonemeWeight {
    /** Phoneme name (A/I/U/E/O/S) */
    name: string;
    /** Detection weight */
    weight: number;
}

/**
 * TTS API Types
 */

/**
 * TTS request
 */
interface TTSRequest {
    text: string;
    speaker_name: string;
    language?: 'JP' | 'EN';
    return_lip_sync?: boolean;
}
/**
 * TTS response
 */
interface TTSResponse {
    audio: string;
    lip_sync_frames?: LipSyncFrame[];
}

/**
 * Image Asset API Types
 */
/**
 * Image resolution options
 */
type ImageResolution = 'very_low' | 'low' | 'medium' | 'high' | 'original';
/**
 * Image asset upload options
 */
interface ImageAssetUploadOptions {
    role: 'user_icon_square' | 'user_icon_rectangle' | 'character_icon' | string;
    sizeProfile?: 'square' | 'rectangle' | string;
    artist?: string;
    altText?: string;
    publishType?: 'public' | 'private';
}
/**
 * Image asset upload result
 */
interface ImageAssetUploadResult {
    image_asset_id: string;
    role: string;
    size_profile: string;
    paths: Record<string, string>;
}

/**
 * User API Types
 */
/**
 * User data (from GET /users)
 */
interface UserData {
    user_id: string;
    user_name: string;
    user_name_reading?: string;
    favorite_character_id?: string;
    character_ids: string[];
    icon_image_asset_id?: string;
    birth_date?: string;
    age?: number;
    is_adult?: boolean;
    tos_accepted_at?: string;
    tos_version?: string;
    privacy_policy_accepted_at?: string;
    privacy_policy_version?: string;
    age_verified?: boolean;
    guide_character_ids?: Record<string, string>;
    created_at: string;
    updated_at: string;
}
/**
 * User create request
 */
interface UserCreateRequest {
    user_name: string;
    favorite_character_id?: string;
    character_ids?: string[];
}
/**
 * User update request (PUT - full update)
 */
interface UserUpdateRequest {
    user_name?: string;
    favorite_character_id?: string;
    character_ids?: string[];
}
/**
 * User patch request (PATCH - partial update with auto-set fields)
 * - Sending tos_version auto-sets tos_accepted_at
 * - Sending privacy_policy_version auto-sets privacy_policy_accepted_at
 * - Sending birth_date auto-sets age_verified = true
 */
interface UserPatchRequest {
    user_name?: string;
    user_name_reading?: string;
    favorite_character_id?: string;
    character_ids?: string[];
    birth_date?: string;
    tos_version?: string;
    privacy_policy_version?: string;
    guide_character_ids?: Record<string, string>;
    icon_image_asset_id?: string;
}

/**
 * Video Asset API Types
 */

/**
 * Video asset role
 */
type VideoAssetRole = 'NARRATIVE' | 'INSTRUCTIONAL' | 'PROMOTIONAL' | 'ENTERTAINMENT';
/**
 * Video duration range
 */
type VideoDurationRange = '0-15' | '15-30' | '30-45' | '45-60' | '60-90' | '90-120' | '120-180' | '180-240' | '240-300' | '300-420' | '420-600' | '600-900' | '900-1200' | '1200-1500' | '1500-1800' | '1800-2400' | '2400-3000' | '3000-3600' | '3600-5400' | '5400-7200' | '7200+';
/**
 * Video resolution range
 */
type VideoResolutionRange = 'sd' | 'hd' | 'fhd' | 'uhd';
/**
 * Video asset localized data
 */
interface VideoAssetLocalized {
    title: string;
    description?: string;
}
/**
 * Video asset
 */
interface VideoAsset {
    video_asset_id: string;
    role: VideoAssetRole;
    default_locale: SupportedLanguage$1;
    locales: Record<string, VideoAssetLocalized>;
    video_path: string;
    thumbnail_path?: string;
    duration: number;
    width: number;
    height: number;
    fps: number;
    bitrate: number;
    codec: string;
    has_audio: boolean;
    file_size: number;
    owner_id: string;
    artist?: string;
    tags?: TagWithLevel$1[];
    publish_type: PublishSettingsType;
    created_at?: string;
    updated_at?: string;
}
/**
 * Video asset create options (for form data upload)
 */
interface VideoAssetCreateOptions {
    /** Asset role */
    role: VideoAssetRole;
    /** Video title */
    title: string;
    /** Artist name */
    artist?: string;
    /** Description */
    description?: string;
    /** Publish type */
    publishType?: PublishSettingsType;
}
/**
 * Video asset create response
 */
interface VideoAssetCreateResponse {
    message: string;
    video_id: string;
}
/**
 * Video asset search options
 */
interface VideoAssetSearchOptions {
    /** Filter by role */
    role?: VideoAssetRole;
    /** Maximum duration in seconds */
    maxDuration?: number;
    /** Duration range */
    durationRange?: VideoDurationRange;
    /** Exact title match */
    title?: string;
    /** Owner ID filter */
    ownerId?: string;
    /** Comma-separated tags */
    tags?: string;
    /** Artist name filter */
    artist?: string;
    /** Resolution range */
    resolutionRange?: VideoResolutionRange;
    /** Filter by audio availability */
    hasAudio?: boolean;
    /** Maximum results (default: 50) */
    limit?: number;
}
/**
 * Video asset update request
 */
interface VideoAssetUpdateRequest {
    title?: string;
    artist?: string;
    description?: string;
    tags?: string[];
    publish_type?: PublishSettingsType;
}
/**
 * Video asset delete response
 */
interface VideoAssetDeleteResponse {
    message: string;
}

/**
 * Base Client - Shared utilities for API clients
 */

/**
 * Base client class with shared configuration and utilities
 * Note: Properties are public to support TypeScript mixin pattern
 */
declare class BaseClient {
    /** @internal */ baseUrl: string;
    /** @internal */ textConverterBaseUrl: string;
    /** @internal */ authToken: string;
    constructor(config: CharahomeApiConfig);
    /**
     * Get headers for API requests
     * @internal
     */
    getHeaders(contentType?: string): Record<string, string>;
    /**
     * Get headers for user-authenticated requests
     * @internal
     */
    getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
    /**
     * Handle API error response
     * @internal
     */
    handleErrorResponse(response: Response, context: string): Promise<never>;
    /**
     * Submit FormData via POST with user authentication
     * @internal
     */
    postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    /**
     * Submit FormData via PATCH with user authentication
     * @internal
     */
    patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
}

/**
 * タグのレベル定義
 *
 * 各レベルには重要度に応じた倍率が設定されている
 */
type TagLevel = 'core' | 'secondary' | 'flavor';

/**
 * 重み付きタグモデル
 *
 * 複数のエンティティ（Avatar, Character, Settings, Animation）で
 * 共通して使用されるタグ構造。
 * tag_category_id により、同一タグでもどのカテゴリ文脈で付与されたかを識別する。
 */
type TagWithLevel = {
    /**
     * タグのID
     */
    tag_id: string;
    /**
     * タグが属するカテゴリID
     */
    tag_category_id: string;
    /**
     * タグのレベル（CORE, SECONDARY, FLAVOR）
     */
    level: TagLevel;
};

/**
 * コンテンツの出自
 */
type ContentOriginType = 'original' | 'fanwork' | 'official';

/**
 * 恋愛タグ
 */
type RomanceTag = 'bl' | 'gl';

/**
 * ユーザー申告のコンテンツ情報
 *
 * アップロード時にユーザーが申告する情報。
 */
type ContentDeclaration = {
    /**
     * 恋愛タグ（BL/GL等、複数選択可）
     */
    romance_tags?: Array<RomanceTag>;
    /**
     * コンテンツの出自（オリジナル/二次創作/公式）
     */
    origin_type?: (ContentOriginType | null);
};

/**
 * 年齢レーティング
 */
type AgeRating = 'all' | 'r15' | 'r18';

/**
 * コンテンツの強度
 */
type ContentIntensity = 'none' | 'mild' | 'moderate' | 'intense';

/**
 * 使用制限（このアセット/アバターがどのようなコンテンツで使用可能か）
 *
 * max_age_rating: 許可される最大の年齢レーティング（デフォルト: R18 = 制限なし）
 * limits: カテゴリごとの許可される最大強度（未指定カテゴリは全許可）
 *
 * 判定ロジック:
 * 1. コンテンツの age_rating > max_age_rating なら使用不可
 * 2. コンテンツの labels.details[category].intensity > limits[category] なら使用不可
 */
type UsageRestrictions = {
    /**
     * 許可される最大の年齢レーティング
     */
    max_age_rating?: AgeRating;
    /**
     * カテゴリごとの許可される最大強度
     */
    limits?: Record<string, ContentIntensity>;
};

type SupportedLanguage = 'ja-JP' | 'en-US' | 'zh-CN';

/**
 * Common types and helpers for binary upload mixins
 *
 * All asset creation endpoints accept _json suffixed FormData fields
 * for complex nested data (locales, tags, declaration, usage_restrictions).
 * The SDK accepts typed objects and internally JSON.stringify()s them.
 */

/**
 * Localized data for assets (name + optional description)
 * All asset types share this shape.
 */
interface AssetLocalized {
    name: string;
    description?: string | null;
}
/**
 * Common JSON fields for asset creation/upload endpoints.
 * These are serialized to JSON strings and sent as FormData _json fields.
 */
interface AssetJsonFields {
    /** Localized data per language */
    locales?: Partial<Record<SupportedLanguage, AssetLocalized>>;
    /** Tags with levels */
    tags?: TagWithLevel[];
    /** Content declaration (user-submitted: romance_tags, origin_type) */
    declaration?: ContentDeclaration;
    /** Usage restrictions */
    usageRestrictions?: UsageRestrictions;
    /** Asset usage conditions (modification policy, credit) */
    usageConditions?: AssetUsageConditions;
    /** Asset rights declaration (acquisition method, rights scope) */
    rightsDeclaration?: AssetRightsDeclaration;
    /** Default locale */
    defaultLocale?: SupportedLanguage;
    /** Creation method (no_generative_ai, generative_ai_assisted, etc.) */
    creationMethod?: CreationMethod;
    /** Creator entity ID */
    creatorId?: string;
    /** Creator display name */
    creatorDisplayName?: string;
}

/**
 * アニメーション画像の役割
 */
type AnimatedImageRole = 'vrma_preview' | 'animation_clip_preview' | 'sprite_motion';

/**
 * Animated Image Asset API Client Methods - Binary Upload/Download
 *
 * For search, get, update, delete, use GeneratedApi.
 */

/**
 * Animated image asset create options (for form data)
 */
interface AnimatedImageAssetCreateOptions extends AssetJsonFields {
    /** Role of the animated image (e.g. 'vrma_preview', 'animation_clip_preview', 'sprite_motion') */
    role: AnimatedImageRole;
    /** Image format (e.g. 'gif', 'apng', 'webp') */
    format: string;
    /** Size profile */
    sizeProfile: string;
    /** Width in pixels */
    width: number;
    /** Height in pixels */
    height: number;
    /** Number of frames */
    frameCount: number;
    /** Duration in seconds */
    duration: number;
    /** Loop count (0 = infinite) */
    loopCount?: number;
    /** Artist name */
    artist?: string;
    /** Asset name */
    name?: string;
    /** Description */
    description?: string;
    /** Publish scope */
    publishScope?: string;
    /** Data source */
    dataSource?: string;
}
/**
 * Animated image asset version options (for form data)
 */
interface AnimatedImageAssetVersionOptions {
    /** Width in pixels */
    width: number;
    /** Height in pixels */
    height: number;
    /** Number of frames */
    frameCount: number;
    /** Duration in seconds */
    duration: number;
    /** Loop count (0 = infinite) */
    loopCount?: number;
}
/**
 * Animated image asset create response
 */
interface AnimatedImageAssetCreateResponse {
    animated_image_asset_id: string;
    message?: string;
}
/**
 * Animated image asset version response
 */
interface AnimatedImageAssetVersionResponse {
    version_id: string;
    message?: string;
}
/**
 * Animated Image Asset API mixin methods (binary upload/download)
 */
declare const AnimatedImageAssetApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Create animated image asset - Binary upload
         */
        createAnimatedImageAsset(file: ArrayBuffer | Blob, options: AnimatedImageAssetCreateOptions, userToken: string): Promise<AnimatedImageAssetCreateResponse>;
        /**
         * Add version to animated image asset - Binary upload
         */
        addAnimatedImageAssetVersion(assetId: string, file: ArrayBuffer | Blob, options: AnimatedImageAssetVersionOptions, userToken: string): Promise<AnimatedImageAssetVersionResponse>;
        /**
         * Download animated image file as ArrayBuffer
         * Aggregation: GET /animated-image-assets/{id}/file + download from signed URL
         */
        downloadAnimatedImageFile(assetId: string, quality?: string): Promise<ArrayBuffer>;
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
 * Animation Clip Asset API Client Methods - Binary Upload/Download
 *
 * For search, get, update, delete, use GeneratedApi.
 */

/**
 * Animation clip asset create options (for form data)
 */
type AnimationClipAssetCreateOptions = {
    /** Motion ID to associate with */
    motionId: string;
    /** Motion type (e.g. 'base', 'gesture', 'object_interaction') */
    motionType: string;
    /** Emotion ID (optional association) */
    emotionId?: string;
    /** Target gender */
    targetGender?: string;
    /** Target age groups (array, sent as JSON) */
    ageGroups?: string[];
    /** Thumbnail image asset ID */
    thumbnailImageAssetId?: string;
    /** Preview animated image asset ID */
    previewAnimatedImageAssetId?: string;
    /** Default bone mask */
    boneMask?: string;
    /** Default fade-in duration in seconds */
    defaultFadeIn?: number;
    /** Default fade-out duration in seconds */
    defaultFadeOut?: number;
    /** Default playback speed multiplier */
    defaultPlaybackSpeed?: number;
    /** Default blend weight */
    defaultWeight?: number;
    /** Publish scope */
    publishScope?: string;
    /** Data source */
    dataSource?: string;
    /** Total frame count */
    frameCount?: number;
    /** Duration in seconds */
    durationSeconds?: number;
    /** Frames per second */
    fps?: number;
    /** Whether the animation is loopable */
    isLoopable?: boolean;
    /** Whether the animation has root motion */
    hasRootMotion?: boolean;
} & AssetJsonFields;
/**
 * Animation clip asset create response
 */
interface AnimationClipAssetCreateResponse {
    animation_clip_asset_id: string;
    message?: string;
}
/**
 * Animation Clip Asset API mixin methods (binary upload/download)
 */
declare const AnimationClipAssetApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Create animation clip asset - Binary upload
         */
        createAnimationClipAsset(file: ArrayBuffer | Blob, options: AnimationClipAssetCreateOptions, userToken: string): Promise<AnimationClipAssetCreateResponse>;
        /**
         * Download animation clip file as ArrayBuffer
         * Aggregation: GET /animation-clip-assets/{id}/file + download from signed URL
         */
        downloadAnimationClipFile(clipId: string): Promise<ArrayBuffer>;
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
 * Content Protection Decoder
 *
 * Main pipeline for decoding protected 3D model files:
 *   AES-256-GCM decryption → zstd decompression → mesh deobfuscation
 *
 * Used by VRM/GLB download methods to transparently handle
 * server-side content protection.
 */
declare class ContentProtectionDecoder {
    private keyCache;
    constructor(baseUrl: string, getAuthToken: () => string);
    /**
     * Decode protected data through the full pipeline.
     *
     * @param protectedData - Encrypted + compressed + obfuscated data
     * @param keyId - Key identifier for decryption
     * @param assetId - Asset identifier (used for key retrieval)
     * @param obfuscationSeed - Hex seed for mesh deobfuscation (null to skip)
     * @returns Decoded original file data
     */
    decode(protectedData: ArrayBuffer, keyId: string, assetId: string, obfuscationSeed: string | null): Promise<ArrayBuffer>;
    /**
     * Clear cached decryption keys.
     */
    clearKeyCache(): void;
}

/**
 * VRM Asset API Client Methods - Binary Operations Only
 *
 * For simple CRUD (get, update, delete, getFileUrl), use GeneratedApi.
 */

/** Metadata returned alongside protected VRM data for cache decode */
interface VrmProtectionMeta {
    keyId: string;
    assetId: string;
    obfuscationSeed: string | null;
    format: string;
}
/**
 * VRM Asset API mixin methods (binary upload/download only)
 */
declare const VrmAssetApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /** @internal Content protection decoder (set by CharahomeApiClient) */
        contentProtection: ContentProtectionDecoder | null;
        /**
         * @internal Last protection metadata from a protected download.
         * Used by CachingMixin to build a decodeFn for L2 cache hits.
         */
        lastVrmProtectionMeta: VrmProtectionMeta | null;
        /**
         * Create VRM asset - Binary upload
         */
        createVrmAsset(file: Blob | ArrayBuffer, options: VrmAssetCreateOptions & AssetJsonFields, userToken: string): Promise<VrmAssetCreateResponse>;
        /**
         * Download VRM file as ArrayBuffer (decoded/ready-to-use).
         *
         * Tries the protected endpoint first (encrypted + compressed + obfuscated).
         * Falls back to the unprotected signed URL during migration period.
         */
        downloadVrmFile(vrmId: string): Promise<ArrayBuffer>;
        /**
         * Fetch raw protected VRM data (encrypted) without decoding.
         * Stores protection metadata in lastVrmProtectionMeta for cache decodeFn.
         * @internal
         */
        fetchProtectedVrmRaw(vrmId: string): Promise<ArrayBuffer>;
        /**
         * Decode protected VRM data using lastVrmProtectionMeta.
         * @internal
         */
        decodeProtectedVrm(protectedData: ArrayBuffer): Promise<ArrayBuffer>;
        /**
         * Download VRM file via unprotected signed URL (legacy).
         * @internal
         */
        downloadUnprotectedVrmFile(vrmId: string): Promise<ArrayBuffer>;
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
 * Asset Bundle Asset API Client Methods - Binary Upload/Download
 *
 * For search, get, update, delete, use GeneratedApi.
 */

/**
 * Asset bundle asset create options (for form data)
 */
interface AssetBundleAssetCreateOptions {
    /** Target platform (e.g. 'windows', 'android', 'ios') */
    platform: string;
    /** Target architecture (e.g. 'x64', 'arm64') */
    arch: string;
    /** Publish scope */
    publishScope?: string;
    /** Data source */
    dataSource?: string;
}
/**
 * Asset bundle asset version options (for form data)
 */
interface AssetBundleAssetVersionOptions {
    /** Target platform */
    platform: string;
    /** Target architecture */
    arch: string;
}
/**
 * Asset bundle variant options (for form data)
 */
interface AssetBundleVariantOptions {
    /** Target platform */
    platform: string;
    /** Target architecture */
    arch: string;
}
/**
 * Asset bundle asset create response
 */
interface AssetBundleAssetCreateResponse {
    asset_bundle_id: string;
    message?: string;
}
/**
 * Asset bundle asset version response
 */
interface AssetBundleAssetVersionResponse {
    version_id: string;
    message?: string;
}
/**
 * Asset bundle variant response
 */
interface AssetBundleVariantResponse {
    variant_id: string;
    message?: string;
}
/**
 * Asset Bundle Asset API mixin methods (binary upload/download)
 */
declare const AssetBundleAssetApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Create asset bundle asset - Binary upload
         */
        createAssetBundleAsset(file: ArrayBuffer | Blob, options: AssetBundleAssetCreateOptions & AssetJsonFields, userToken: string): Promise<AssetBundleAssetCreateResponse>;
        /**
         * Add version to asset bundle asset - Binary upload
         */
        addAssetBundleAssetVersion(assetBundleId: string, file: ArrayBuffer | Blob, options: AssetBundleAssetVersionOptions, userToken: string): Promise<AssetBundleAssetVersionResponse>;
        /**
         * Add variant to asset bundle asset version - Binary upload
         */
        addAssetBundleVariant(assetBundleId: string, versionId: string, file: ArrayBuffer | Blob, options: AssetBundleVariantOptions, userToken: string): Promise<AssetBundleVariantResponse>;
        /**
         * Download asset bundle file as ArrayBuffer
         * Aggregation: GET /asset-bundle-assets/{id}/file?platform&arch + download from signed URL
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
    };
} & T;

/**
 * Avatar Model API Client Methods - Binary Upload
 *
 * For simple CRUD, use GeneratedApi.
 */

/**
 * Avatar VRM model upload options (for form data)
 */
interface AvatarVrmModelUploadOptions {
    /** Modeler name */
    modelerName?: string;
    /** Character designer name */
    characterDesignerName?: string;
    /** Model name */
    modelName?: string;
    /** Author name */
    author?: string;
}
/**
 * Avatar sprite/face-icon model files
 */
interface AvatarImageModelFiles {
    /** Base image file */
    baseImage: ArrayBuffer | Blob;
    /** Eyelid layer image file */
    eyelidImage?: ArrayBuffer | Blob;
    /** Eyeball layer image file */
    eyeballImage?: ArrayBuffer | Blob;
    /** Mouth layer image file */
    mouthImage?: ArrayBuffer | Blob;
}
/**
 * Avatar sprite/face-icon model upload options (for form data)
 */
interface AvatarImageModelUploadOptions {
    /** Illustrator name */
    illustratorName?: string;
    /** Character designer name */
    characterDesignerName?: string;
}
/**
 * Avatar sprite model upload options (extends base with sprite-specific required fields)
 */
interface AvatarSpriteModelUploadOptions extends AvatarImageModelUploadOptions {
    /** Posture (standing/sitting/lying) */
    posture: string;
    /** Face position JSON e.g. {"center_x":0.5,"center_y":0.3,"width":0.2,"height":0.25} */
    facePositionJson: string;
}
/**
 * Avatar asset bundle model upload options (for form data)
 */
interface AvatarAssetBundleModelUploadOptions {
    /** Target platform */
    platform: string;
    /** Target architecture */
    arch: string;
    /** Storage path override */
    storagePath?: string;
    /** SHA-256 hash of the file */
    sha256?: string;
    /** File size in bytes */
    sizeBytes?: number;
    /** Modeler name */
    modelerName?: string;
    /** Character designer name */
    characterDesignerName?: string;
}
/**
 * Avatar model upload response
 */
interface AvatarModelUploadResponse {
    message?: string;
    [key: string]: unknown;
}
/**
 * Avatar Model API mixin methods (binary upload)
 */
declare const AvatarModelApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Upload VRM model for an avatar - Binary upload
         */
        uploadAvatarVrmModel(avatarId: string, file: ArrayBuffer | Blob, options: AvatarVrmModelUploadOptions, userToken: string): Promise<AvatarModelUploadResponse>;
        /**
         * Upload sprite model for an avatar - Binary upload (multi-file)
         */
        uploadAvatarSpriteModel(avatarId: string, files: AvatarImageModelFiles, options: AvatarSpriteModelUploadOptions, userToken: string): Promise<AvatarModelUploadResponse>;
        /**
         * Upload face icon model for an avatar - Binary upload (multi-file)
         */
        uploadAvatarFaceIconModel(avatarId: string, files: AvatarImageModelFiles, options: AvatarImageModelUploadOptions, userToken: string): Promise<AvatarModelUploadResponse>;
        /**
         * Upload asset bundle model for an avatar - Binary upload
         */
        uploadAvatarAssetBundleModel(avatarId: string, file: ArrayBuffer | Blob | undefined, options: AvatarAssetBundleModelUploadOptions, userToken: string): Promise<AvatarModelUploadResponse>;
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
 * Emotion Format API Client Methods - Binary Upload
 *
 * For simple CRUD, use GeneratedApi.
 */

/**
 * Sprite/face-icon emotion format files
 */
interface EmotionFormatImageFiles {
    /** Composite image file */
    imageComposite?: ArrayBuffer | Blob;
    /** Body layer image file */
    imageBody?: ArrayBuffer | Blob;
    /** Eyelid layer image file */
    imageEyelid?: ArrayBuffer | Blob;
    /** Mouth layer image file */
    imageMouth?: ArrayBuffer | Blob;
}
/**
 * Sprite/face-icon emotion format upload options (for form data)
 */
interface EmotionFormatUploadOptions {
    /** Posture (standing/sitting/lying) - required for sprite format */
    posture: string;
    /** Hold duration in seconds */
    holdDuration?: number;
    /** Block mouth animation */
    blockMouth?: boolean;
    /** Block blink animation */
    blockBlink?: boolean;
}
/**
 * Emotion format upload response
 */
interface EmotionFormatUploadResponse {
    message?: string;
    [key: string]: unknown;
}
/**
 * Emotion Format API mixin methods (binary upload)
 */
declare const EmotionFormatApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Upload sprite emotion format images - Binary upload (multi-file)
         */
        uploadSpriteEmotionFormat(avatarId: string, expressionId: string, files: EmotionFormatImageFiles, options: EmotionFormatUploadOptions, userToken: string): Promise<EmotionFormatUploadResponse>;
        /**
         * Upload face icon emotion format images - Binary upload (multi-file)
         */
        uploadFaceIconEmotionFormat(avatarId: string, expressionId: string, files: EmotionFormatImageFiles, options: EmotionFormatUploadOptions, userToken: string): Promise<EmotionFormatUploadResponse>;
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
 * Character File Upload API Client Mixin - Binary Upload Only
 *
 * For character create/update without icon files, use GeneratedApi.CharactersService directly.
 */

/** Options for creating a character with icon files */
interface CharacterCreateWithIconsOptions {
    characterName: string;
    avatarId: string;
    voiceId: string;
    settingsId: string;
    characterId?: string;
    publishScope?: string;
    copyAvatarData?: boolean;
    skipLlmGeneration?: boolean;
}
/** Options for updating a character with icon files */
interface CharacterUpdateWithIconsOptions {
    characterName?: string;
    voiceId?: string;
    avatarId?: string;
    settingsId?: string;
    description?: string;
    gender?: string;
    publishScope?: string;
    tags?: string;
    useLlmGeneration?: boolean;
    mainColor?: string;
    subColor?: string;
}
declare const CharacterFileApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Create character with icon files - Binary upload
         * For character creation without icon files, use GeneratedApi.CharactersService directly.
         */
        createCharacterWithIcons(options: CharacterCreateWithIconsOptions, userToken: string, squareIcon?: ArrayBuffer | Blob, rectangleIcon?: ArrayBuffer | Blob): Promise<unknown>;
        /**
         * Update character with icon files - Binary upload
         * For character update without icon files, use GeneratedApi.CharactersService directly.
         */
        updateCharacterWithIcons(characterId: string, options: CharacterUpdateWithIconsOptions, userToken: string, squareIcon?: ArrayBuffer | Blob, rectangleIcon?: ArrayBuffer | Blob): Promise<unknown>;
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
 * Legacy Conversation Types
 *
 * These types were removed from the server's OpenAPI spec when conversation
 * endpoints were deleted. They are preserved here for backwards compatibility
 * with existing SDK consumers until the conversation API is replaced.
 */
type SenderType = 'user' | 'ai' | 'system';
type DebugChatMessage = {
    sender_type: SenderType;
    sender_name?: (string | null);
    content: string;
};
type BYOKConfig = {
    api_key: string;
    provider: string;
    model: string;
    max_tokens?: (number | null);
    temperature?: (number | null);
    thinking_budget?: (number | null);
    safety_settings?: (Record<string, string> | null);
    use_tool_call?: boolean;
    max_retries?: number;
};
type ConversationRawPromptRequest = {
    prompt: string;
    input_string: string;
    voice_id?: (string | null);
    is_audio?: boolean;
    return_lip_sync?: boolean;
    custom_properties?: (Record<string, any> | null);
    llm_provider?: (string | null);
    llm_model?: (string | null);
    byok?: (BYOKConfig | null);
};
type ConversationDebugRequest = {
    input_string: string;
    character_name: string;
    character_description: string;
    voice_id?: (string | null);
    user_nickname?: string;
    recent_conversation?: Array<DebugChatMessage>;
    available_emotion_ids?: Array<string>;
    available_motion_ids?: Array<string>;
    timeline_memory?: (string | null);
    specific_memory?: (string | null);
    is_audio?: boolean;
    return_lip_sync?: boolean;
    additional_prompt?: (string | null);
    custom_properties?: (Record<string, any> | null);
    llm_provider?: (string | null);
    llm_model?: (string | null);
};

/**
 * 統合LLMリクエストモデル（通常チャット用）
 *
 * マルチモーダル対応:
 * - テキスト: {"type": "text", "text": "内容"}
 * - 画像: {"type": "image_url", "image_url": {"url": "data:image/jpeg;base64,..."}}
 * - 音声: {"type": "audio_url", "audio_url": {"url": "data:audio/wav;base64,..."}}
 * - 動画: {"type": "video_url", "video_url": {"url": "data:video/mp4;base64,..."}}
 */
type UnifiedChatCompletionRequest = {
    /**
     * メッセージリスト
     */
    messages: Array<Record<string, any>>;
    /**
     * モデル名（プロバイダー指定なし）
     */
    model?: (string | null);
    /**
     * プロバイダー（openai, gemini, claude, vertex-ai）
     */
    provider?: (string | null);
    /**
     * 生成温度
     */
    temperature?: (number | null);
    /**
     * 最大トークン数
     */
    max_tokens?: (number | null);
    /**
     * ストリーミングモード
     */
    stream?: boolean;
};

/**
 * LLM Chat Completions API Client Methods
 *
 * Uses /llm/chat/completions endpoint with SSE streaming.
 * Supports OpenAI, Claude, Gemini, Vertex AI providers via unified interface.
 */

/**
 * LLM streaming chunk (OpenAI-compatible SSE delta)
 */
interface LlmStreamChunk {
    /** Chunk ID */
    id?: string;
    /** Object type */
    object?: string;
    /** Created timestamp */
    created?: number;
    /** Model name */
    model?: string;
    /** Provider name */
    provider?: string;
    /** Delta content from the choice */
    text?: string;
    /** Full choice delta (for advanced use) */
    delta?: Record<string, unknown>;
    /** Whether this is the final chunk */
    is_final: boolean;
}
/**
 * LLM stream callback
 */
type LlmStreamCallback = (chunk: LlmStreamChunk) => void;
/**
 * LLM stream result
 */
interface LlmStreamResult {
    /** Cancel the stream */
    cancel: () => void;
    /** Promise that resolves when stream completes */
    done: Promise<void>;
}
/**
 * LLM API mixin methods
 */
declare const LlmApiMixin: <T extends new (...args: any[]) => BaseClient>(Base: T) => {
    new (...args: any[]): {
        /**
         * Stream LLM chat completions via SSE
         * @param request - Chat completion request (OpenAI-compatible format)
         * @param onChunk - Callback for each response chunk
         */
        llmChatStream(request: UnifiedChatCompletionRequest, onChunk: LlmStreamCallback): LlmStreamResult;
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
 * Quota API Client Methods (Stub)
 *
 * Server-side quota API is not yet implemented.
 * This mixin defines the interface and stubs for future integration.
 */

/**
 * API-level quota status (snake_case, matches future API response)
 */
interface ApiQuotaStatus {
    remaining: number;
    capacity: number;
    recovery_item_count: number;
    daily_bonus_available: boolean;
    next_regen_at: string | null;
    regen_amount: number;
}
/**
 * API-level recovery request
 */
interface ApiRecoveryRequest {
    method: string;
    verification_token?: {
        token: string;
        provider_id: string;
        completed_at: number;
    };
    item_id?: string;
    /** Impression-level revenue in micros (e.g. 1500000 = 1.5 JPY) */
    revenue_micros?: number;
    /** Revenue currency code (e.g. "JPY", "USD") */
    revenue_currency?: string;
}
/**
 * API-level recovery result
 */
interface ApiRecoveryResult {
    success: boolean;
    amount_recovered: number;
    new_status: ApiQuotaStatus;
    error?: string;
}

/**
 * Cache Manager - L1 → L2 → L3 Orchestrator
 *
 * Coordinates memory cache (L1), persistent cache (L2), and network fetch (L3).
 * Features:
 * - In-flight request deduplication
 * - Ownership-based persistence promotion for VRM/AssetBundle
 * - Version-based invalidation for persistent entries
 * - LRU eviction on both tiers
 */

declare class CacheManager {
    private memoryStore;
    private persistentStore;
    private maxPersistentBytes;
    private inFlight;
    private ownershipSet;
    readonly userId: string | null;
    constructor(config: CacheConfig, userId?: string | null);
    /**
     * Set a custom persistent store (e.g. for Electron FS after init).
     */
    setPersistentStore(store: PersistentCacheStore): void;
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
    getOrFetch(key: string, category: AssetCategory, versionId: string | null, ownedByUser: boolean, fetchFn: () => Promise<ArrayBuffer>, decodeFn?: (data: ArrayBuffer) => Promise<ArrayBuffer>): Promise<ArrayBuffer>;
    /**
     * Register ownership for a cache key (e.g. avatar VRM owned by the user).
     */
    registerOwnership(key: string): void;
    /**
     * Check if a cache key is owned by the current user.
     */
    isOwned(key: string): boolean;
    /**
     * Invalidate a specific cache entry from both tiers.
     */
    invalidate(key: string): Promise<void>;
    /**
     * Clear all cache entries from both tiers.
     */
    clear(): Promise<void>;
    /**
     * Get cache statistics.
     */
    getStats(): Promise<CacheStats>;
    /**
     * Fetch from network and store in cache tiers.
     */
    private fetchAndStore;
    /**
     * Ensure there's enough room in persistent storage.
     */
    private ensurePersistentCapacity;
    /**
     * Evict LRU entries from persistent store until enough space is available.
     */
    private evictPersistentLRU;
    /**
     * Check if an error is a quota exceeded error.
     */
    private isQuotaError;
}
/**
 * Extract UID from a Firebase Auth JWT token (client-side decode, no verification).
 */
declare function extractUidFromToken(token: string): string | null;

declare const CharahomeApiClient_base: {
    new (...args: any[]): {
        cacheManager: CacheManager | null;
        downloadAvatarVrmFile(avatarId: string): Promise<ArrayBuffer>;
        downloadVrmFile(vrmId: string): Promise<ArrayBuffer>;
        fetchAvatarModel(avatarId: string, modelType: ModelType): Promise<ArrayBuffer>;
        downloadImageFile(imageId: string, resolution?: string): Promise<ArrayBuffer>;
        downloadAnimationFile(vrmaAssetId: string): Promise<ArrayBuffer>;
        downloadAnimatedImageFile(assetId: string, quality?: string): Promise<ArrayBuffer>;
        downloadAnimationClipFile(clipId: string): Promise<ArrayBuffer>;
        downloadAssetBundleFile(assetBundleId: string, platform: string, arch: string): Promise<ArrayBuffer>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        fetchProtectedVrmRaw(vrmId: string): Promise<ArrayBuffer>;
        decodeProtectedVrm(protectedData: ArrayBuffer): Promise<ArrayBuffer>;
        contentProtection: ContentProtectionDecoder | null;
        lastVrmProtectionMeta: VrmProtectionMeta | null;
    };
} & {
    new (...args: any[]): {
        getQuotaStatus(userToken: string): Promise<ApiQuotaStatus>;
        recoverQuota(userToken: string, request: ApiRecoveryRequest): Promise<ApiRecoveryResult>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        duplicateAndRegisterCharacter(characterId: string, userToken: string, options?: {
            newCharacterId?: string;
            addToCharacterIds?: boolean;
            setAsFavorite?: boolean;
        }): Promise<string>;
        fetchCharacterMotions(characterId: string): Promise<Motion[]>;
        fetchCharacterData(characterId: string, modelType?: ModelType): Promise<CharacterData>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        llmChatStream(request: UnifiedChatCompletionRequest, onChunk: LlmStreamCallback): LlmStreamResult;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        generateTTS(request: TTSRequest): Promise<TTSResponse>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        conversationStream(characterId: string, request: ConversationRequest): Promise<Response>;
        streamConversation(characterId: string, request: ConversationRequest): AsyncGenerator<ConversationChunk, void, unknown>;
        conversationRawStream(characterId: string, request: ConversationRawPromptRequest): Promise<Response>;
        streamConversationRaw(characterId: string, request: ConversationRawPromptRequest): AsyncGenerator<ConversationChunk, void, unknown>;
        conversationDebugStream(characterId: string, request: ConversationDebugRequest): Promise<Response>;
        streamConversationDebug(characterId: string, request: ConversationDebugRequest): AsyncGenerator<ConversationChunk, void, unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        createCharacterWithIcons(options: CharacterCreateWithIconsOptions, userToken: string, squareIcon?: ArrayBuffer | Blob, rectangleIcon?: ArrayBuffer | Blob): Promise<unknown>;
        updateCharacterWithIcons(characterId: string, options: CharacterUpdateWithIconsOptions, userToken: string, squareIcon?: ArrayBuffer | Blob, rectangleIcon?: ArrayBuffer | Blob): Promise<unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        uploadSpriteEmotionFormat(avatarId: string, expressionId: string, files: EmotionFormatImageFiles, options: EmotionFormatUploadOptions, userToken: string): Promise<EmotionFormatUploadResponse>;
        uploadFaceIconEmotionFormat(avatarId: string, expressionId: string, files: EmotionFormatImageFiles, options: EmotionFormatUploadOptions, userToken: string): Promise<EmotionFormatUploadResponse>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        uploadAvatarVrmModel(avatarId: string, file: ArrayBuffer | Blob, options: AvatarVrmModelUploadOptions, userToken: string): Promise<AvatarModelUploadResponse>;
        uploadAvatarSpriteModel(avatarId: string, files: AvatarImageModelFiles, options: AvatarSpriteModelUploadOptions, userToken: string): Promise<AvatarModelUploadResponse>;
        uploadAvatarFaceIconModel(avatarId: string, files: AvatarImageModelFiles, options: AvatarImageModelUploadOptions, userToken: string): Promise<AvatarModelUploadResponse>;
        uploadAvatarAssetBundleModel(avatarId: string, file: ArrayBuffer | Blob | undefined, options: AvatarAssetBundleModelUploadOptions, userToken: string): Promise<AvatarModelUploadResponse>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        createAssetBundleAsset(file: ArrayBuffer | Blob, options: AssetBundleAssetCreateOptions & AssetJsonFields, userToken: string): Promise<AssetBundleAssetCreateResponse>;
        addAssetBundleAssetVersion(assetBundleId: string, file: ArrayBuffer | Blob, options: AssetBundleAssetVersionOptions, userToken: string): Promise<AssetBundleAssetVersionResponse>;
        addAssetBundleVariant(assetBundleId: string, versionId: string, file: ArrayBuffer | Blob, options: AssetBundleVariantOptions, userToken: string): Promise<AssetBundleVariantResponse>;
        downloadAssetBundleFile(assetBundleId: string, platform: string, arch: string): Promise<ArrayBuffer>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        createAnimationClipAsset(file: ArrayBuffer | Blob, options: AnimationClipAssetCreateOptions, userToken: string): Promise<AnimationClipAssetCreateResponse>;
        downloadAnimationClipFile(clipId: string): Promise<ArrayBuffer>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        createAnimatedImageAsset(file: ArrayBuffer | Blob, options: AnimatedImageAssetCreateOptions, userToken: string): Promise<AnimatedImageAssetCreateResponse>;
        addAnimatedImageAssetVersion(assetId: string, file: ArrayBuffer | Blob, options: AnimatedImageAssetVersionOptions, userToken: string): Promise<AnimatedImageAssetVersionResponse>;
        downloadAnimatedImageFile(assetId: string, quality?: string): Promise<ArrayBuffer>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        createVideoAsset(file: ArrayBuffer, options: VideoAssetCreateOptions & AssetJsonFields, authToken: string): Promise<VideoAssetCreateResponse>;
        addVideoAssetVersion(videoId: string, file: Blob | ArrayBuffer, userToken: string, thumbnail?: Blob | ArrayBuffer): Promise<unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        createAudioAsset(file: Blob | ArrayBuffer, options: AudioAssetCreateOptions & AssetJsonFields, userToken: string): Promise<AudioAssetCreateResponse>;
        addAudioAssetVersion(audioId: string, file: Blob | ArrayBuffer, userToken: string, thumbnail?: Blob | ArrayBuffer): Promise<unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        uploadImageAsset(file: Blob | ArrayBuffer, options: ImageAssetUploadOptions & AssetJsonFields, userToken: string): Promise<ImageAssetUploadResult>;
        uploadUserIcon(file: Blob | ArrayBuffer, userToken: string): Promise<UserData>;
        downloadImageFile(imageId: string, resolution?: string): Promise<ArrayBuffer>;
        addImageAssetVersion(imageId: string, file: Blob | ArrayBuffer, userToken: string): Promise<unknown>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        uploadVrmaAsset(file: ArrayBuffer, options: VrmaUploadOptions & AssetJsonFields, userToken: string): Promise<VrmaUploadResponse>;
        downloadAnimationFile(vrmaAssetId: string): Promise<ArrayBuffer>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        contentProtection: ContentProtectionDecoder | null;
        lastVrmProtectionMeta: VrmProtectionMeta | null;
        createVrmAsset(file: Blob | ArrayBuffer, options: VrmAssetCreateOptions & AssetJsonFields, userToken: string): Promise<VrmAssetCreateResponse>;
        downloadVrmFile(vrmId: string): Promise<ArrayBuffer>;
        fetchProtectedVrmRaw(vrmId: string): Promise<ArrayBuffer>;
        decodeProtectedVrm(protectedData: ArrayBuffer): Promise<ArrayBuffer>;
        downloadUnprotectedVrmFile(vrmId: string): Promise<ArrayBuffer>;
        baseUrl: string;
        textConverterBaseUrl: string;
        authToken: string;
        getHeaders(contentType?: string): Record<string, string>;
        getUserHeaders(userToken: string, contentType?: string): Record<string, string>;
        handleErrorResponse(response: Response, context: string): Promise<never>;
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & {
    new (...args: any[]): {
        getAvatarIconUrl(avatarId: string, resolution?: "very_low" | "low" | "medium" | "high" | "original", iconType?: "square" | "rectangle"): Promise<string>;
        uploadAvatar(file: ArrayBuffer, options: AvatarUploadOptions, userToken: string): Promise<AvatarCreateResponse>;
        fetchAvatarModel(avatarId: string, modelType: ModelType): Promise<ArrayBuffer>;
        downloadAvatarVrmFile(avatarId: string): Promise<ArrayBuffer>;
        createAvatarWithIcons(options: {
            avatarName: string;
            avatarId?: string;
            publishScope?: string;
            gender?: string;
            tags?: string;
            appearanceDescription?: string;
            skipLlmGeneration?: boolean;
        }, userToken: string, squareIcon?: ArrayBuffer | Blob, rectangleIcon?: ArrayBuffer | Blob): Promise<unknown>;
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
        postFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
        patchFormData<T>(path: string, formData: FormData, userToken: string): Promise<T>;
    };
} & typeof BaseClient;
/**
 * CharahomeApiClient - API client with binary/streaming/aggregation/caching features
 *
 * For standard REST CRUD operations, use GeneratedApi directly.
 */
declare class CharahomeApiClient extends CharahomeApiClient_base {
    constructor(config: CharahomeApiConfig);
}
/**
 * Factory function to create CharahomeApiClient
 */
declare function createCharahomeApiClient(config: CharahomeApiConfig): CharahomeApiClient;

export { type VrmaUploadOptions as $, type Avatar as A, type CharacterListItem as B, CharahomeApiClient as C, DEFAULT_API_BASE_URL as D, ENVIRONMENTS as E, type CharacterColor as F, type CharacterEmotionFormat as G, type CharacterEmotionData as H, type CharacterMotionFormat as I, type CharacterMotionData as J, type CharacterData as K, type CharacterCreateRequest as L, type ModelType as M, type CharacterCreateResponse as N, type ChatLogAddRequest as O, type ChatLogAddResponse as P, type Motion as Q, type MotionFormat as R, type SignedUrlResponse as S, type MotionsResponse as T, type MotionCreateRequest as U, type VrmModelResponse as V, type MotionUpdateRequest as W, type MotionResponse as X, type MotionFormatCreateRequest as Y, type MotionFormatResponse as Z, type VrmaAsset as _, getFirebaseConfig as a, type AnimatedImageAssetVersionResponse as a$, type VrmaUploadResponse as a0, type VrmaDeleteResponse as a1, type ConversationRequest as a2, type ConversationChunk as a3, type ConversationAction as a4, type LipSyncFrame as a5, type PhonemeWeight as a6, type TTSRequest as a7, type TTSResponse as a8, type ImageResolution as a9, type VrmAssetCreateOptions as aA, type VrmAssetCreateResponse as aB, type VrmAssetUpdateRequest as aC, type VrmAssetDeleteResponse as aD, type VrmAssetFileUrlResponse as aE, type MotionType as aF, type VrmaLocalized as aG, type VrmaAssetUpdateRequest as aH, type VrmaAssetFileUrlResponse as aI, type VideoAssetRole as aJ, type VideoDurationRange as aK, type VideoResolutionRange as aL, type VideoAssetLocalized as aM, type VideoAsset as aN, type VideoAssetCreateOptions as aO, type VideoAssetCreateResponse as aP, type VideoAssetSearchOptions as aQ, type VideoAssetUpdateRequest as aR, type VideoAssetDeleteResponse as aS, type ConversationRawPromptRequest as aT, type ConversationDebugRequest as aU, type UnifiedChatCompletionRequest as aV, type LlmStreamCallback as aW, type LlmStreamResult as aX, type AnimatedImageAssetCreateOptions as aY, type AnimatedImageAssetCreateResponse as aZ, type AnimatedImageAssetVersionOptions as a_, type ImageAssetUploadOptions as aa, type ImageAssetUploadResult as ab, type UserData as ac, type UserCreateRequest as ad, type UserUpdateRequest as ae, type UserPatchRequest as af, type AudioType as ag, type AudioFormat as ah, type AudioQuality as ai, type ThumbnailSize as aj, type PublishSettingsType as ak, type BpmRange as al, type AudioAssetLocalized as am, type AudioAssetPaths as an, type AudioAssetThumbnailPaths as ao, type TagWithLevel$1 as ap, type AudioAsset as aq, type AudioAssetCreateOptions as ar, type AudioAssetCreateResponse as as, type AudioAssetSearchOptions as at, type AudioAssetUpdateRequest as au, type AudioAssetDeleteResponse as av, type SupportedLanguage$1 as aw, type DataSource as ax, type VrmAssetLocalized as ay, type VrmAsset as az, type CharahomeEnvironment as b, type AnimationClipAssetCreateOptions as b0, type AnimationClipAssetCreateResponse as b1, type AssetBundleAssetCreateOptions as b2, type AssetBundleAssetCreateResponse as b3, type AssetBundleAssetVersionOptions as b4, type AssetBundleAssetVersionResponse as b5, type AssetBundleVariantOptions as b6, type AssetBundleVariantResponse as b7, type AvatarVrmModelUploadOptions as b8, type AvatarModelUploadResponse as b9, type ContentDeclaration as bA, type TagWithLevel as bB, type UsageRestrictions as bC, type AnimatedImageRole as bD, type CreationMethod as bE, type PersonalityArchetype as bF, type BehavioralPattern as bG, type AssetUsageConditions as bH, type AssetRightsDeclaration as bI, type ModificationPolicy as bJ, type TagLevel as bK, type AcquisitionMethod as bL, type ContentOriginType as bM, type CreativeCommonsType as bN, type RightsScope as bO, type RomanceTag as bP, type AvatarSpriteModelUploadOptions as ba, type AvatarImageModelUploadOptions as bb, type AvatarAssetBundleModelUploadOptions as bc, type EmotionFormatUploadOptions as bd, type EmotionFormatUploadResponse as be, type CharacterCreateWithIconsOptions as bf, type CharacterUpdateWithIconsOptions as bg, type ApiQuotaStatus as bh, type ApiRecoveryRequest as bi, type ApiRecoveryResult as bj, BaseClient as bk, type AssetJsonFields as bl, type VrmProtectionMeta as bm, CacheManager as bn, LlmApiMixin as bo, VrmAssetApiMixin as bp, AnimatedImageAssetApiMixin as bq, AnimationClipAssetApiMixin as br, AssetBundleAssetApiMixin as bs, AvatarModelApiMixin as bt, EmotionFormatApiMixin as bu, CharacterFileApiMixin as bv, type LlmStreamChunk as bw, type SupportedLanguage as bx, type ContentIntensity as by, type AgeRating as bz, createCharahomeApiClient as c, type EnvironmentConfig as d, ContentProtectionDecoder as e, extractUidFromToken as f, getEnvironmentConfig as g, DEFAULT_TEXT_CONVERTER_BASE_URL as h, type CharahomeApiConfig as i, type MotionType$1 as j, type EmotionInterruptMode as k, type EmotionFormatType as l, type MotionFormatType as m, type AvatarListItem as n, type AvatarListResponse as o, type AvatarUploadOptions as p, type AvatarCreateResponse as q, resolveEnvironment as r, type Settings as s, type SettingsListItem as t, type SettingsListResponse as u, type SettingsWithOverviewRequest as v, type SettingsCreateResponse as w, type SettingsFileUploadOptions as x, type Character as y, type CharacterLocale as z };
