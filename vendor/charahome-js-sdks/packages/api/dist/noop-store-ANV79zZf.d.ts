import { k as EmotionInterruptMode, aw as SupportedLanguage, ak as PublishSettingsType, bx as SupportedLanguage$1, by as ContentIntensity, bz as AgeRating, bA as ContentDeclaration, bB as TagWithLevel, bC as UsageRestrictions, bD as AnimatedImageRole, bE as CreationMethod, j as MotionType, bF as PersonalityArchetype, bG as BehavioralPattern, bH as AssetUsageConditions, bI as AssetRightsDeclaration, M as ModelType, l as EmotionFormatType, m as MotionFormatType, bJ as ModificationPolicy, bK as TagLevel$1, aV as UnifiedChatCompletionRequest, bL as AcquisitionMethod, bM as ContentOriginType, bN as CreativeCommonsType, bO as RightsScope, bP as RomanceTag } from './index-B78P7nBy.js';
import { A as AssetCategory, d as AssetCachePolicy, c as PersistentCacheStore, b as CacheEntry, a as CacheEntryMeta } from './types-D2KgMl8A.js';

/**
 * Voice API Types
 */
type VoiceGender = 'male' | 'female' | 'other';
type VoiceAgeGroup = 'child' | 'teen' | 'adult' | 'senior';
type VoiceProvider$1 = 'sbv2' | 'elevenlabs' | 'openai' | 'google' | 'azure';
type VoiceDataSource = 'official' | 'community';
/**
 * Voice locale payload
 */
interface VoiceLocalePayload {
    display_name: string;
    description?: string;
    credit?: string;
}
/**
 * Voice model info
 */
interface VoiceModel$1 {
    model_id: string;
    language_code: string;
    provider: VoiceProvider$1;
}
/**
 * Tag with level
 */
interface VoiceTagWithLevel {
    tag_id: string;
    level: 'primary' | 'secondary';
}
/**
 * Voice data (from GET /voices, GET /voices/{voice_id})
 */
interface Voice {
    voice_id: string;
    models: VoiceModel$1[];
    gender: VoiceGender;
    age_group: VoiceAgeGroup;
    default_locale: string;
    locales: Record<string, VoiceLocalePayload>;
    tags: VoiceTagWithLevel[];
    owner_id: string;
    publish_type: string;
    data_source: VoiceDataSource;
    created_at: string;
    updated_at: string;
}
/**
 * Voice list item (same as Voice)
 */
type VoiceListItem = Voice;
/**
 * Voice list response
 */
interface VoiceListResponse$1 {
    voices: Voice[];
    total_count: number;
    has_more: boolean;
}
/**
 * Voice search response
 */
interface VoiceSearchResponse$1 {
    voices: Voice[];
    total_count: number;
    has_more: boolean;
}
/**
 * Voice create request
 */
interface VoiceCreateRequest$1 {
    voice_id?: string;
    models: VoiceModel$1[];
    gender: VoiceGender;
    age_group: VoiceAgeGroup;
    default_locale?: string;
    locales?: Record<string, VoiceLocalePayload>;
    tags?: VoiceTagWithLevel[];
    owner_id: string;
    publish_type?: string;
    data_source?: VoiceDataSource;
}
/**
 * Voice update request
 */
interface VoiceUpdateRequest$1 {
    models: VoiceModel$1[];
    gender: VoiceGender;
    age_group: VoiceAgeGroup;
    default_locale?: string;
    locales?: Record<string, VoiceLocalePayload>;
    tags?: VoiceTagWithLevel[];
    owner_id: string;
    publish_type?: string;
    data_source?: VoiceDataSource;
}

/**
 * Character Emotion API Types
 */
/**
 * Emotion data (from GET /characters/{characterId}/emotions)
 */
interface Emotion {
    character_emotion_id: string;
    emotion_id: string;
    name: string;
    expression_name?: string;
    formats?: EmotionFormat[];
}
/**
 * Emotion format data
 */
interface EmotionFormat {
    format_type: string;
    payload: Record<string, unknown>;
}
/**
 * Emotions response (from GET /characters/{characterId}/emotions)
 */
interface EmotionsResponse {
    emotions: Emotion[];
}

/**
 * Emotion create request
 */
interface EmotionCreateRequest$1 {
    /** Emotion ID (e.g., "happy", "sad", "neutral") */
    emotion_id: string;
    /** Description of when LLM should select this emotion */
    usage_description: string;
    /** Interrupt mode for emotion interactions (default: allow_all) */
    interrupt_mode?: EmotionInterruptMode;
    /** Allowed emotion IDs (for allow_specific mode) */
    allowed_emotion_ids?: string[];
    /** Format data list */
    formats?: EmotionFormatCreateRequest[];
}
/**
 * Emotion update request
 */
interface EmotionUpdateRequest$1 {
    /** Display name */
    name?: string;
    /** Expression name for VRM */
    expression_name?: string;
    /** Description for usage */
    description?: string;
}
/**
 * Emotion create/update response
 */
interface EmotionResponse$1 {
    character_emotion_id: string;
    emotion_id: string;
    name: string;
    expression_name?: string;
    message?: string;
}
/**
 * Emotion format create request
 */
interface EmotionFormatCreateRequest {
    /** Format type (e.g., "vrm_blendshape", "sprite") */
    format_type: string;
    /** Format-specific payload */
    payload: Record<string, unknown>;
}
/**
 * Emotion format response
 */
interface EmotionFormatResponse {
    format_type: string;
    payload: Record<string, unknown>;
    message?: string;
}

/**
 * Auth API Types
 */
/**
 * Account link data
 */
interface AccountLink {
    linkId: string;
    charahomeUid: string;
    appId: string;
    derivedUid: string;
    derivedProjectId: string;
    linkedAt: string;
    lastUsedAt: string;
    disabled: boolean;
}
/**
 * Check link result
 */
interface CheckLinkResult {
    linked: boolean;
    links: AccountLink[];
}
/**
 * Merge accounts request
 */
interface MergeAccountsRequest$1 {
    anonUid: string;
    /** ID token of the existing account (for server-side verification) */
    existingToken: string;
    derivedUid: string;
    appId: string;
    derivedProjectId: string;
}
/**
 * Register link request
 */
interface RegisterLinkRequest$1 {
    charahomeUid: string;
    derivedUid: string;
    appId: string;
    derivedProjectId: string;
}
/**
 * Auth API success response
 * Compatible with CHARAHOMEApiSuccessResponse from @kurasuai-inc/charahome-auth
 */
interface AuthApiSuccessResponse {
    status: 'success';
    charahomeUid?: string;
    linkId: string;
    message?: string;
}
/**
 * Auth API error response
 */
interface AuthApiErrorResponse {
    detail: string;
}

/**
 * Dictionary API Types (Text Converter Service)
 */
/**
 * Request to add a word to character dictionary
 */
interface DictionaryWordAddRequest {
    word: string;
    replacement: string;
}
/**
 * Response from adding a word to character dictionary
 */
interface DictionaryWordAddResponse {
    characterId: string;
    word: string;
    replacement: string;
    message: string;
}
/**
 * Response from deleting a word from character dictionary
 */
interface DictionaryWordDeleteResponse {
    characterId: string;
    word: string;
    message: string;
}
/**
 * Request to update entire character dictionary
 */
interface DictionaryUpdateRequest {
    entries: Record<string, string>;
}
/**
 * Response from updating character dictionary
 */
interface DictionaryUpdateResponse {
    characterId: string;
    entries: Record<string, string>;
    message: string;
}

/**
 * Chat Log API Types
 */
/**
 * Message sender type
 */
type SenderType = 'user' | 'character' | 'system';
/**
 * Message type
 */
type MessageType = 'text' | 'audio' | 'image' | 'action';
/**
 * Single chat log message for request
 */
interface ChatLogMessage {
    /** Sender ID (user_id or character_id) */
    sender_id?: string;
    /** Sender type */
    sender_type: SenderType;
    /** Message type */
    message_type: MessageType;
    /** Message content */
    content: string;
    /** Additional metadata */
    metadata?: Record<string, unknown>;
}
/**
 * Chat log save request
 */
interface ChatLogSaveRequest {
    /** Array of messages to save */
    messages: ChatLogMessage[];
}
/**
 * Chat log save response
 */
interface ChatLogSaveResponse {
    status: string;
    message: string;
    character_id: string;
}
/**
 * Single chat log response entry
 */
interface ChatLogEntry {
    /** Message ID */
    message_id: string;
    /** Sender ID */
    sender_id?: string;
    /** Sender type */
    sender_type: SenderType;
    /** Message type */
    message_type: MessageType;
    /** Message content */
    content: string;
    /** Additional metadata */
    metadata?: Record<string, unknown>;
    /** Timestamp */
    timestamp: string;
}
/**
 * Chat log history response
 */
interface ChatLogHistoryResponse {
    /** Character ID */
    character_id: string;
    /** Total message count */
    total_count: number;
    /** Messages */
    messages: ChatLogEntry[];
}
/**
 * Chat log delete response
 */
interface ChatLogDeleteResponse {
    status: string;
    message: string;
    character_id: string;
}

/**
 * Tag API Types
 */

/**
 * Tag level
 */
type TagLevel = 'core' | 'secondary' | 'flavor';
/**
 * Compatibility source
 */
type CompatibilitySource = 'llm' | 'human';
/**
 * Compatibility generate mode
 */
type CompatibilityMode = 'upsert' | 'replace';
/**
 * Tag category localized data
 */
interface TagCategoryLocalized$1 {
    name: string;
    description?: string;
}
/**
 * Tag category
 */
interface TagCategory {
    tag_category_id: string;
    default_locale: SupportedLanguage;
    locales: Record<SupportedLanguage, TagCategoryLocalized$1>;
    parent_id?: string;
    order: number;
    min_required: number;
    max_allowed?: number;
    created_at?: string;
    updated_at?: string;
}
/**
 * Tag category create request
 */
interface TagCategoryCreateRequest$1 {
    tag_category_id: string;
    default_locale?: SupportedLanguage;
    locales: Record<SupportedLanguage, TagCategoryLocalized$1>;
    parent_id?: string;
    order?: number;
    min_required?: number;
    max_allowed?: number;
}
/**
 * Tag category update request
 */
interface TagCategoryUpdateRequest {
    default_locale?: SupportedLanguage;
    locales?: Record<SupportedLanguage, TagCategoryLocalized$1>;
    parent_id?: string;
    order?: number;
    min_required?: number;
    max_allowed?: number;
}
/**
 * Tag localized data
 */
interface TagLocalized$1 {
    name: string;
    synonyms?: string[];
}
/**
 * Tag
 */
interface Tag {
    tag_id: string;
    default_locale: SupportedLanguage;
    locales: Record<SupportedLanguage, TagLocalized$1>;
    created_at?: string;
    updated_at?: string;
}
/**
 * Tag create request
 */
interface TagCreateRequest$1 {
    tag_id: string;
    default_locale?: SupportedLanguage;
    locales: Record<SupportedLanguage, TagLocalized$1>;
}
/**
 * Tag update request
 */
interface TagUpdateRequest {
    default_locale?: SupportedLanguage;
    locales?: Record<SupportedLanguage, TagLocalized$1>;
}
/**
 * Tag category link
 */
interface TagCategoryLink {
    tag_category_id: string;
    tag_id: string;
    order_in_category: number;
    link_key: string;
    created_at?: string;
    updated_at?: string;
}
/**
 * Tag category link create request
 */
interface TagCategoryLinkCreateRequest$1 {
    tag_category_id: string;
    tag_id: string;
    order_in_category?: number;
}
/**
 * Tag category link reorder item
 */
interface TagCategoryLinkReorderItem {
    tag_id: string;
    order_in_category: number;
}
/**
 * Tag category link reorder request
 */
interface TagCategoryLinkReorderRequest {
    tag_category_id: string;
    items: TagCategoryLinkReorderItem[];
}
/**
 * Tag category link reorder response
 */
interface TagCategoryLinkReorderResponse {
    ok: boolean;
    updated: number;
}
/**
 * Tag category link bulk upsert request
 */
interface TagCategoryLinkBulkUpsertRequest {
    items: TagCategoryLinkCreateRequest$1[];
}
/**
 * Tag compatibility
 */
interface TagCompatibility {
    left_tag_category_id: string;
    left_tag_id: string;
    right_tag_category_id: string;
    right_tag_id: string;
    score: number;
    confidence?: number;
    batch_id?: string;
    source: CompatibilitySource;
    reason: string;
    model?: string;
    prompt?: string;
    pair_key: string;
    created_at?: string;
    updated_at?: string;
}
/**
 * Tag compatibility create request
 */
interface TagCompatibilityCreateRequest$1 {
    left_tag_category_id: string;
    left_tag_id: string;
    right_tag_category_id: string;
    right_tag_id: string;
    score: number;
    confidence?: number;
    batch_id?: string;
    source?: CompatibilitySource;
    reason: string;
    model?: string;
    prompt?: string;
}
/**
 * Tag compatibility generate request
 */
interface TagCompatibilityGenerateRequest {
    left_category_id: string;
    right_category_id: string;
    mode?: CompatibilityMode;
    batch_id?: string;
    model?: string;
    prompt_version?: string;
}
/**
 * Tag compatibility generate response
 */
interface TagCompatibilityGenerateResponse {
    ok: boolean;
    generated_pairs: number;
    left_category_id: string;
    right_category_id: string;
}
/**
 * Tag in taxonomy
 */
interface TaxonomyTag {
    tag_id: string;
    name: string;
    synonyms?: string[];
}
/**
 * Taxonomy node
 */
interface TaxonomyNode {
    category: TagCategory;
    tags: TaxonomyTag[];
    children: TaxonomyNode[];
}
/**
 * Tag with categories response
 */
interface TagWithCategoriesResponse {
    tag_id: string;
    name: string;
    categories: Array<{
        tag_category_id: string;
        name: string;
        order_in_category: number;
    }>;
}
/**
 * Paginated response
 */
interface PaginatedResponse<T> {
    items: T[];
    next_cursor?: string;
}
/**
 * Auto tag result
 */
interface AutoTagResult {
    tag_id: string;
    level: number;
}
/**
 * Auto tag response
 */
interface AutoTagResponse$1 {
    tags: AutoTagResult[];
}
/**
 * Auto tag categories response
 */
interface AutoTagCategoriesResponse {
    categories: string[];
}
/**
 * Auto tag avatar request (form data)
 */
interface AutoTagAvatarOptions {
    description: string;
    iconImage?: Blob;
}
/**
 * Auto tag description request
 */
interface AutoTagDescriptionRequest {
    description: string;
}

/**
 * Story API Types
 */

/**
 * Story metadata localized
 */
interface StoryMetadataLocalized {
    name: string;
    description?: string;
}
/**
 * Story metadata
 */
interface StoryMetadata {
    author?: string;
    created_at?: string;
    updated_at?: string;
    tags?: string[];
    version?: string;
    default_locale: SupportedLanguage;
    locales: Record<string, StoryMetadataLocalized>;
    owner_id?: string;
    publish_type?: PublishSettingsType;
}
/**
 * Story settings
 */
interface StorySettings$1 {
    auto_advance?: boolean;
    display_mode?: string;
    [key: string]: unknown;
}
/**
 * Asset catalog for story
 */
interface AssetCatalog$1 {
    visual_asset_ids: string[];
    audio_asset_ids: string[];
    animation_ids: string[];
    character_ids: string[];
}
/**
 * Story segment
 */
interface StorySegment {
    segment_id: string;
    text?: string;
    speaker_id?: string;
    emotion_id?: string;
    animation_id?: string;
    audio_asset_id?: string;
    duration?: number;
    choices?: StoryChoice[];
    [key: string]: unknown;
}
/**
 * Story choice
 */
interface StoryChoice {
    text: string;
    target_segment_id?: string;
    condition?: string;
}
/**
 * Story data
 */
interface Story {
    story_id: string;
    metadata: StoryMetadata;
    original_text: string;
    annotated_text?: string;
    settings?: StorySettings$1;
    assets?: AssetCatalog$1;
    segments?: Record<string, StorySegment>;
}
/**
 * Story create request
 */
interface StoryCreateRequest$1 {
    title: string;
    author: string;
    tags: string[];
    overview: string;
    language: SupportedLanguage;
    owner_id: string;
    original_text: string;
    publish_type?: PublishSettingsType;
    settings?: StorySettings$1;
    assets?: AssetCatalog$1;
}
/**
 * Story create response
 */
interface StoryCreateResponse {
    message: string;
    story_id: string;
}
/**
 * Story update request
 */
interface StoryUpdateRequest$1 {
    title?: string;
    overview?: string;
    original_text?: string;
    annotated_text?: string;
    author?: string;
    tags?: string[];
    language?: string;
    publish_type?: PublishSettingsType;
    settings?: StorySettings$1;
    assets?: AssetCatalog$1;
    segments?: Record<string, StorySegment>;
}
/**
 * Story response
 */
interface StoryResponse$1 {
    story_id: string;
    metadata: StoryMetadata;
    original_text: string;
    annotated_text?: string;
    settings?: StorySettings$1;
    assets?: AssetCatalog$1;
    segments?: Record<string, StorySegment>;
}
/**
 * Story link
 */
interface StoryLink {
    source_id: string;
    choice_index?: number;
    target_id: string;
    condition?: string;
}
/**
 * Story graph metadata (required fields for API)
 */
interface StoryGraphMetadata {
    author: string;
    created_at: string;
    updated_at: string;
    default_locale?: SupportedLanguage;
    locales?: Record<string, StoryMetadataLocalized>;
    tags?: string[];
    version?: string;
    owner_id?: string;
    publish_type?: PublishSettingsType;
    [key: string]: unknown;
}
/**
 * Story data within a story graph (each story must have metadata)
 */
interface StoryGraphStoryData {
    metadata: StoryGraphMetadata;
    original_text?: string;
    annotated_text?: string;
    settings?: StorySettings$1;
    assets?: AssetCatalog$1;
    segments?: Record<string, StorySegment>;
    [key: string]: unknown;
}
/**
 * Story graph
 */
interface StoryGraph {
    graph_id?: string;
    stories: Record<string, StoryGraphStoryData>;
    links: StoryLink[];
    entry_story_id: string;
    metadata: StoryGraphMetadata;
}
/**
 * Story graph create request
 * Note: Each story in 'stories' must have 'metadata' with at least 'author', 'created_at', 'updated_at'
 */
interface StoryGraphCreateRequest {
    stories: Record<string, StoryGraphStoryData>;
    links: StoryLink[];
    entry_story_id: string;
    metadata: StoryGraphMetadata;
}
/**
 * Story graph create response
 */
interface StoryGraphCreateResponse {
    message: string;
    graph_id: string;
}
/**
 * Story graph update request
 */
interface StoryGraphUpdateRequest {
    stories?: Record<string, Record<string, unknown>>;
    links?: StoryLink[];
    entry_story_id?: string;
    metadata?: StoryGraphMetadata;
}
/**
 * Story graph response
 */
interface StoryGraphResponse {
    stories: Record<string, Record<string, unknown>>;
    links: StoryLink[];
    entry_story_id: string;
    metadata?: StoryGraphMetadata;
}
/**
 * Story navigation request
 */
interface StoryNavigationRequest {
    current_story_id: string;
    choice_index?: number;
    flags?: Record<string, unknown>;
    user_input?: string;
}
/**
 * Story navigation response
 */
interface StoryNavigationResponse {
    message: string;
    next_story_id?: string;
    reached_end: boolean;
}
/**
 * Story paths response
 */
interface StoryPathsResponse {
    graph_id: string;
    start_story_id: string;
    paths: string[][];
    total_paths: number;
}

/**
 * Schedule API Types
 */
/**
 * Schedule recurrence rule
 */
interface ScheduleRecurrence {
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval?: number;
    days_of_week?: number[];
    days_of_month?: number[];
    end_date?: string;
    count?: number;
}
/**
 * Schedule reminder
 */
interface ScheduleReminder {
    minutes_before: number;
    notification_type?: 'push' | 'in_app' | 'both';
}
/**
 * Schedule data
 */
interface Schedule {
    schedule_id: string;
    character_id: string;
    title: string;
    description?: string;
    start_time: string;
    end_time?: string;
    all_day?: boolean;
    location?: string;
    recurrence?: ScheduleRecurrence;
    reminders?: ScheduleReminder[];
    metadata?: Record<string, unknown>;
    created_at?: string;
    updated_at?: string;
}
/**
 * Schedule create request
 */
interface ScheduleCreateRequest$1 {
    title: string;
    description?: string;
    start_time: string;
    end_time?: string;
    all_day?: boolean;
    location?: string;
    recurrence?: ScheduleRecurrence;
    reminders?: ScheduleReminder[];
    metadata?: Record<string, unknown>;
}
/**
 * Schedule update request
 */
interface ScheduleUpdateRequest$1 {
    title?: string;
    description?: string;
    start_time?: string;
    end_time?: string;
    all_day?: boolean;
    location?: string;
    recurrence?: ScheduleRecurrence;
    reminders?: ScheduleReminder[];
    metadata?: Record<string, unknown>;
}
/**
 * Schedule response
 */
interface ScheduleResponse$1 extends Schedule {
}
/**
 * Schedule list response
 */
interface ScheduleListResponse$1 {
    schedules: Schedule[];
}
/**
 * Schedule list options
 */
interface ScheduleListOptions {
    startDate: string;
    endDate: string;
}

type ApiRequestOptions = {
    readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
    readonly url: string;
    readonly path?: Record<string, any>;
    readonly cookies?: Record<string, any>;
    readonly headers?: Record<string, any>;
    readonly query?: Record<string, any>;
    readonly formData?: Record<string, any>;
    readonly body?: any;
    readonly mediaType?: string;
    readonly responseHeader?: string;
    readonly errors?: Record<number, string>;
};

type ApiResult = {
    readonly url: string;
    readonly ok: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
};

declare class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: any;
    readonly request: ApiRequestOptions;
    constructor(request: ApiRequestOptions, response: ApiResult, message: string);
}

declare class CancelError extends Error {
    constructor(message: string);
    get isCancelled(): boolean;
}
interface OnCancel {
    readonly isResolved: boolean;
    readonly isRejected: boolean;
    readonly isCancelled: boolean;
    (cancelHandler: () => void): void;
}
declare class CancelablePromise<T> implements Promise<T> {
    #private;
    constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void, onCancel: OnCancel) => void);
    get [Symbol.toStringTag](): string;
    then<TResult1 = T, TResult2 = never>(onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult>;
    finally(onFinally?: (() => void) | null): Promise<T>;
    cancel(): void;
    get isCancelled(): boolean;
}

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;
type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string> | undefined;
    USERNAME?: string | Resolver<string> | undefined;
    PASSWORD?: string | Resolver<string> | undefined;
    HEADERS?: Headers | Resolver<Headers> | undefined;
    ENCODE_PATH?: ((path: string) => string) | undefined;
};
declare const OpenAPI: OpenAPIConfig;

/**
 * アクセサリーカテゴリ
 */
type AccessoryCategory = 'headwear' | 'hair_accessory' | 'eyewear' | 'earwear' | 'face_decoration' | 'neckwear' | 'handwear' | 'wristwear' | 'ring' | 'belt' | 'back_attachment' | 'held_item' | 'body_effect';

/**
 * Accessory多言語情報リクエスト
 */
type AccessoryLocalizedRequest = {
    /**
     * アクセサリー名
     */
    name: string;
    /**
     * コンテンツ詳細説明
     */
    content_description: string;
    /**
     * 公開表示用説明
     */
    display_description: string;
};

/**
 * 人体部位スロット（衣装・アクセサリー共通）
 *
 * HumanoidBone互換粒度。用途:
 * - アバター姿勢の位置・領域データのキー
 * - 衣装/アクセサリーの占有箇所宣言
 * - 「この部位に何か付いてるか？」の確認
 * - bone名マッピングのキー（別途対応表を定義）
 */
type BodySlot = 'head_top' | 'head_front' | 'head_back' | 'head_left' | 'head_right' | 'forehead' | 'left_eyebrow' | 'right_eyebrow' | 'left_eye' | 'right_eye' | 'nose' | 'mouth' | 'jaw' | 'left_ear' | 'right_ear' | 'left_cheek' | 'right_cheek' | 'neck' | 'upper_chest' | 'chest' | 'spine' | 'hips' | 'back' | 'left_shoulder' | 'left_upper_arm' | 'left_lower_arm' | 'left_hand' | 'left_thumb' | 'left_index_finger' | 'left_middle_finger' | 'left_ring_finger' | 'left_little_finger' | 'right_shoulder' | 'right_upper_arm' | 'right_lower_arm' | 'right_hand' | 'right_thumb' | 'right_index_finger' | 'right_middle_finger' | 'right_ring_finger' | 'right_little_finger' | 'left_upper_leg' | 'left_lower_leg' | 'left_foot' | 'left_toes' | 'left_big_toe' | 'left_second_toe' | 'left_middle_toe' | 'left_fourth_toe' | 'left_little_toe' | 'right_upper_leg' | 'right_lower_leg' | 'right_foot' | 'right_toes' | 'right_big_toe' | 'right_second_toe' | 'right_middle_toe' | 'right_fourth_toe' | 'right_little_toe';

type DataSource = 'official' | 'community';

/**
 * Accessory作成リクエスト
 */
type AccessoryCreateRequest = {
    category: AccessoryCategory;
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * 多言語情報
     */
    locales: Record<string, AccessoryLocalizedRequest>;
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * データソース
     */
    data_source?: DataSource;
    /**
     * 占有スロット（省略時はカテゴリデフォルト）
     */
    occupies_slots?: (Array<BodySlot> | null);
};

/**
 * アクセサリーの多言語情報
 */
type AccessoryLocalized = {
    /**
     * アクセサリー名
     */
    name: string;
    /**
     * コンテンツ詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * 公開範囲
 */
type PublishScope = 'public' | 'unlisted' | 'private';

/**
 * 特定のユーザー/グループのみアクセス可（UNLISTED公開時のアクセス制限用）
 */
type WhitelistRule = {
    /**
     * ユーザーIDリスト
     */
    user_ids?: Array<string>;
    /**
     * グループIDリスト（将来対応予定、現在は未評価）
     */
    group_ids?: Array<string>;
};

/**
 * コンテンツ公開設定
 *
 * 公開範囲とホワイトリストを定義する。
 * UNLISTED公開時にアクセスを制限する場合にwhitelistを指定する。
 */
type ContentPublishing = {
    publish_scope?: PublishScope;
    /**
     * ホワイトリスト（UNLISTED時のアクセス制限用）
     */
    whitelist?: (WhitelistRule | null);
};

/**
 * コンテンツの出現頻度
 */
type ContentFrequency = 'none' | 'rare' | 'occasional' | 'frequent';

/**
 * コンテンツ詳細（頻度と強度）
 *
 * 各ContentCategoryに対する頻度と強度の組み合わせ。
 */
type ContentDetail = {
    /**
     * 出現頻度
     */
    frequency?: ContentFrequency;
    /**
     * 強度
     */
    intensity?: ContentIntensity;
};

/**
 * コンテンツラベル（カテゴリごとの頻度・強度）
 *
 * 各ContentCategoryに対して頻度と強度を設定できる。
 * 例: {"nudity": {"frequency": "rare", "intensity": "mild"}, "violence": {"frequency": "frequent", "intensity": "intense"}}
 */
type ContentLabels = {
    /**
     * カテゴリごとの頻度・強度
     */
    details?: Record<string, ContentDetail>;
};

/**
 * レビューシステムによる審査結果
 *
 * サーバー側のレビューシステムが設定する情報。
 */
type ContentReview = {
    /**
     * 国別の年齢レーティング
     */
    age_ratings?: Record<string, AgeRating>;
    /**
     * カテゴリごとの詳細ラベル
     */
    labels?: ContentLabels;
};

/**
 * コンテンツゾーニング（年齢制限・カテゴリ分類）
 *
 * declaration: ユーザー申告のコンテンツ情報
 * review: レビューシステムによる審査結果
 */
type ContentZoning = {
    /**
     * ユーザー申告のコンテンツ情報
     */
    declaration?: ContentDeclaration;
    /**
     * レビューシステムによる審査結果
     */
    review?: ContentReview;
};

/**
 * アイテム画像の撮影角度（3D空間でのカメラアングル）
 */
type ViewAngle = {
    /**
     * 水平角度（正面=0, 右=正, 左=負）
     */
    yaw: number;
    /**
     * 垂直角度（正面=0, 上=正, 下=負）
     */
    pitch: number;
};

/**
 * アイテム（衣装/アクセサリー）の角度別2D画像
 */
type ItemImageData = {
    /**
     * 撮影角度
     */
    view_angle: ViewAngle;
    /**
     * 画像アセットID
     */
    image_asset_id: string;
    /**
     * 画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
};

/**
 * 2D画像セット（配置基準点付き）
 *
 * anchor_slot: 画像の配置基準となる部位。
 * アバター姿勢のどのAttachmentPointPoseに合わせて画像を配置するかを指定する。
 * 3Dモデルはbone attachで位置が決まるため、2D画像のみが必要とするデータ。
 */
type ItemImageSet = {
    /**
     * 画像の配置基準となる部位
     */
    anchor_slot: BodySlot;
    /**
     * 角度別2D画像リスト
     */
    images?: Array<ItemImageData>;
};

/**
 * 所有主体の種類
 */
type OwnerType = 'user' | 'group' | 'system';

/**
 * 審査ステータス
 */
type ReviewStatus = 'unreviewed' | 'auto_reviewed' | 'auto_reviewed_again' | 'staff_review_requested' | 'staff_confirmed' | 'staff_corrected';

/**
 * Accessory Response DTO
 */
type AccessoryResponse = {
    /**
     * アクセサリーID
     */
    accessory_id: string;
    category: AccessoryCategory;
    /**
     * 占有スロット
     */
    occupies_slots?: Array<BodySlot>;
    /**
     * 2D画像セット
     */
    image_set?: (ItemImageSet | null);
    /**
     * GLBアセットID
     */
    glb_asset_id?: (string | null);
    /**
     * GLBアセットバージョンID
     */
    glb_asset_version_id?: (string | null);
    /**
     * AssetBundleアセットID
     */
    asset_bundle_asset_id?: (string | null);
    /**
     * AssetBundleアセットバージョンID
     */
    asset_bundle_asset_version_id?: (string | null);
    /**
     * Gaussian SplattingアセットID
     */
    gaussian_splatting_asset_id?: (string | null);
    /**
     * Gaussian SplattingアセットバージョンID
     */
    gaussian_splatting_asset_version_id?: (string | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    review_status: ReviewStatus;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語情報
     */
    locales?: Record<string, AccessoryLocalized>;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * ゾーニング
     */
    zoning?: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions?: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Accessory一覧レスポンス
 */
type AccessoryListResponse = {
    /**
     * アクセサリーリスト
     */
    items: Array<AccessoryResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * Accessory更新リクエスト
 */
type AccessoryUpdateRequest = {
    /**
     * アクセサリーカテゴリ
     */
    category?: (AccessoryCategory | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, AccessoryLocalizedRequest> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 占有スロット
     */
    occupies_slots?: (Array<BodySlot> | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
};

/**
 * Entitlementのアクセスタイプ
 */
type AccessType = 'trial' | 'full';

/**
 * エイリアス追加のリクエストスキーマ
 */
type AddAliasRequest = {
    /**
     * 追加するエイリアス
     */
    alias: string;
    /**
     * ロケール
     */
    locale: SupportedLanguage$1;
};

/**
 * 好意の強度レベル（7段階）
 *
 * 純粋な「好意の強度」軸。RelationshipRoleから導出される。
 * プリセットのコンテキスト補正キーとして使用。
 * NEUTRAL が基準点（オフセット0）。
 */
type AffinityLevel = 'hate' | 'dislike' | 'averse' | 'neutral' | 'warm' | 'fond' | 'devoted';

/**
 * 年齢層
 */
type AgeGroupType = 'infant' | 'child' | 'teen' | 'young_adult' | 'middle_aged' | 'senior' | 'other';

/**
 * モデル品質評価メトリクスレスポンス
 */
type ModelBenchmarkResponse = {
    /**
     * 言語別の自然さスコア (1-10)
     */
    language_quality: Record<string, number>;
    /**
     * R18コンテンツ許容度 (0-100)
     */
    r18_score: number;
    /**
     * 平均TTFT（秒）
     */
    avg_ttft_seconds: number;
    /**
     * 平均トータル生成時間（秒）
     */
    avg_total_seconds: number;
    /**
     * 構造化出力の信頼性 (high/medium/low)
     */
    structured_output_reliability: string;
    /**
     * 推奨生成モード (tool_call/json_forced/both)
     */
    recommended_mode: string;
    /**
     * 評価実施日 (YYYY-MM-DD)
     */
    evaluated_at: string;
};

/**
 * 料金情報レスポンス
 */
type ModelPricingResponse = {
    /**
     * 入力料金（per 1M tokens, USD）
     */
    input_price_per_1m: number;
    /**
     * 出力料金（per 1M tokens, USD）
     */
    output_price_per_1m: number;
    /**
     * キャッシュヒット時の入力料金
     */
    cached_input_price_per_1m?: (number | null);
    /**
     * キャッシュ書き込み倍率
     */
    cache_write_multiplier?: (number | null);
    /**
     * バッチ割引率
     */
    batch_discount: number;
    /**
     * ロングコンテキスト閾値
     */
    long_context_threshold?: (number | null);
    /**
     * ロングコンテキスト倍率
     */
    long_context_multiplier?: (number | null);
};

/**
 * モデル情報レスポンス
 */
type ModelInfoResponse = {
    /**
     * モデルID
     */
    model_id: string;
    /**
     * プロバイダー名
     */
    provider: string;
    /**
     * 表示名
     */
    display_name: string;
    /**
     * 料金情報
     */
    pricing: ModelPricingResponse;
    /**
     * コンテキストウィンドウサイズ
     */
    context_window: number;
    /**
     * 最大出力トークン数
     */
    max_output_tokens: number;
    /**
     * モデルの機能リスト
     */
    capabilities: Array<string>;
    /**
     * 推奨用途リスト
     */
    recommended_use_cases: Array<string>;
    /**
     * tool calling対応。Falseの場合はJSON強制モードを使用
     */
    supports_tool_calling: boolean;
    /**
     * BYOKでのみ利用可能（ユーザーAPIキー必須）
     */
    is_byok_only: boolean;
    /**
     * 非推奨フラグ
     */
    is_deprecated: boolean;
    /**
     * 備考
     */
    notes?: (string | null);
    /**
     * 品質評価メトリクス
     */
    benchmark?: (ModelBenchmarkResponse | null);
};

/**
 * プロバイダー別モデル一覧レスポンス
 */
type ProviderModelsResponse = {
    /**
     * プロバイダー名
     */
    provider: string;
    /**
     * モデル一覧
     */
    models: Array<ModelInfoResponse>;
};

/**
 * 全モデル一覧レスポンス
 */
type AllModelsResponse = {
    /**
     * プロバイダー別モデル一覧
     */
    providers: Array<ProviderModelsResponse>;
};

/**
 * アニメーション画像アセットの多言語情報
 */
type AnimatedImageAssetLocalized = {
    /**
     * 名前
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * アニメーション画像フォーマット
 */
type AnimatedImageFormat = 'gif' | 'apng';

/**
 * サイズプロファイル（アスペクト比）
 */
type SizeProfile = 'square' | 'portrait_9_16' | 'portrait_3_4' | 'landscape_16_9' | 'landscape_4_3';

/**
 * AnimatedImageAsset Response DTO
 */
type AnimatedImageAssetResponse = {
    /**
     * アニメーション画像アセットID
     */
    animated_image_asset_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    role: AnimatedImageRole;
    /**
     * ファイルフォーマット (gif, apng)
     */
    format: AnimatedImageFormat;
    /**
     * サイズプロファイル
     */
    size_profile: SizeProfile;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * クリエイター名
     */
    artist_name?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, AnimatedImageAssetLocalized>;
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * 最新バージョンのコンテンツハッシュ（重複検索用）
     */
    latest_content_hash: string;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * AnimatedImageAsset一覧のレスポンススキーマ
 */
type AnimatedImageAssetListResponse = {
    /**
     * アニメーション画像アセットリスト
     */
    items: Array<AnimatedImageAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * AnimatedImageAsset更新リクエスト - メタデータのみ更新可能
 */
type AnimatedImageAssetUpdateRequest = {
    /**
     * クリエイター名
     */
    artist_name?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, AnimatedImageAssetLocalized> | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

/**
 * AnimatedImageAssetVersion Response DTO
 */
type AnimatedImageAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * 解像度別ファイルパス
     */
    paths: Record<string, string>;
    /**
     * 幅（ピクセル）
     */
    width: number;
    /**
     * 高さ（ピクセル）
     */
    height: number;
    /**
     * アスペクト比
     */
    aspect_ratio: number;
    /**
     * フレーム数
     */
    frame_count: number;
    /**
     * 総再生時間（秒）
     */
    duration: number;
    /**
     * ループ回数（0=無限ループ）
     */
    loop_count: number;
    /**
     * ファイルサイズ（バイト）
     */
    file_size: number;
    /**
     * ファイルコンテンツのハッシュ
     */
    content_hash: string;
    /**
     * 参照カウント
     */
    ref_count: number;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイル画像アセットバージョンID
     */
    thumbnail_image_asset_version_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * AnimatedImageAssetVersion一覧のレスポンススキーマ
 */
type AnimatedImageAssetVersionListResponse = {
    /**
     * バージョンリスト
     */
    items: Array<AnimatedImageAssetVersionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * AnimatedImageAsset with Version Response DTO
 */
type AnimatedImageAssetWithVersionResponse = {
    /**
     * アニメーション画像アセット
     */
    asset: AnimatedImageAssetResponse;
    /**
     * 最新バージョン
     */
    version: AnimatedImageAssetVersionResponse;
};

/**
 * Animation自動タグ付けリクエスト
 */
type AnimationAutoTagRequest = {
    /**
     * アニメーションの説明文
     */
    description: string;
};

/**
 * AnimationClipアセットの多言語情報
 */
type AnimationClipAssetLocalized = {
    /**
     * アセット名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * リーフアセット共通のAI使用申告（単一フィールド）
 */
type AssetAiUsage = {
    /**
     * アセットの作成方法（AI使用レベル）
     */
    creation_method?: CreationMethod;
};

/**
 * 対象性別タイプ（モーション/アニメーション用）
 *
 * モーションやアニメーションがどの性別向けかを表す。
 * - MALE: 男性向けモーション
 * - FEMALE: 女性向けモーション
 * - GENERIC: 汎用（性別を問わず使用可能）
 */
type TargetGenderType = 'male' | 'female' | 'generic';

/**
 * AnimationClipAsset Response DTO - 明示的フィールド定義
 */
type AnimationClipAssetResponse = {
    /**
     * AnimationClipアセットID
     */
    animation_clip_asset_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    review_status: ReviewStatus;
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * グローバルMotionテーブルへの参照
     */
    motion_id: string;
    /**
     * モーションタイプ
     */
    motion_type: MotionType;
    /**
     * 感情ID（オプション）
     */
    emotion_id?: (string | null);
    /**
     * 対象性別（オプション）
     */
    target_gender?: (TargetGenderType | null);
    /**
     * 対象年齢層のリスト
     */
    age_groups?: Array<AgeGroupType>;
    /**
     * 適合する性格アーキタイプのリスト
     */
    compatible_archetypes?: Array<PersonalityArchetype>;
    /**
     * 適合する行動パターンのリスト
     */
    compatible_behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, AnimationClipAssetLocalized>;
    /**
     * デフォルトのフェードイン時間（秒）
     */
    default_fade_in: number;
    /**
     * デフォルトのフェードアウト時間（秒）
     */
    default_fade_out: number;
    /**
     * デフォルトの再生速度
     */
    default_playback_speed: number;
    /**
     * デフォルトのブレンドウェイト
     */
    default_weight: number;
    /**
     * タグリスト（レベル付き）
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * AI使用申告
     */
    ai_usage: AssetAiUsage;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 利用条件
     */
    usage_conditions: AssetUsageConditions;
    /**
     * 権利宣言
     */
    rights_declaration: AssetRightsDeclaration;
    /**
     * Creator entityへの参照
     */
    creator_id?: (string | null);
    /**
     * クリエイター表示名
     */
    creator_display_name?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * AnimationClipAsset一覧のレスポンススキーマ
 */
type AnimationClipAssetListResponse = {
    /**
     * アニメーションクリップリスト
     */
    items: Array<AnimationClipAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * AnimationClipアセットの更新リクエスト
 */
type AnimationClipAssetUpdateRequest = {
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * ロケール別情報
     */
    locales?: (Record<string, AnimationClipAssetLocalized> | null);
    /**
     * 感情ID
     */
    emotion_id?: (string | null);
    /**
     * 対象性別
     */
    target_gender?: (TargetGenderType | null);
    /**
     * 対象年齢層のリスト
     */
    age_groups?: (Array<AgeGroupType> | null);
    /**
     * デフォルトフェードイン時間
     */
    default_fade_in?: (number | null);
    /**
     * デフォルトフェードアウト時間
     */
    default_fade_out?: (number | null);
    /**
     * デフォルト再生速度
     */
    default_playback_speed?: (number | null);
    /**
     * デフォルトウェイト
     */
    default_weight?: (number | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

/**
 * AnimationClipAssetVersion Response DTO
 */
type AnimationClipAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * Storage上のAnimationClipファイルパス
     */
    storage_path: string;
    /**
     * ファイルコンテンツのハッシュ
     */
    content_hash: string;
    /**
     * 参照カウント
     */
    ref_count: number;
    /**
     * ファイルサイズ（バイト）
     */
    file_size: number;
    /**
     * アニメーションの総フレーム数
     */
    frame_count?: (number | null);
    /**
     * 再生時間（秒）
     */
    duration_seconds?: (number | null);
    /**
     * フレームレート（frames per second）
     */
    fps?: (number | null);
    /**
     * ループ再生可能かどうか
     */
    is_loopable?: boolean;
    /**
     * Root Motion（位置移動）があるか
     */
    has_root_motion?: boolean;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイル画像アセットバージョンID
     */
    thumbnail_image_asset_version_id?: (string | null);
    /**
     * プレビューアニメーション画像アセットID
     */
    preview_animated_image_asset_id?: (string | null);
    /**
     * プレビューアニメーション画像アセットバージョンID
     */
    preview_animated_image_asset_version_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * AnimationClipアセット + バージョン情報を含むレスポンス
 */
type AnimationClipAssetWithVersionResponse = {
    /**
     * AnimationClipアセット情報
     */
    asset: AnimationClipAssetResponse;
    /**
     * 作成されたバージョン情報
     */
    version: AnimationClipAssetVersionResponse;
};

/**
 * モーションレイヤー
 */
type MotionLayer = 'locomotion' | 'upper_body' | 'full_body' | 'pose' | 'interaction' | 'face' | 'fx';

/**
 * Animator形式のモーションデータ
 */
type AnimatorMotionData = {
    /**
     * トリガーID
     */
    trigger_id: number;
    motion_layer: MotionLayer;
    /**
     * レイヤーの重み
     */
    layer_weight?: number;
    /**
     * 現在のモーションを中断するかどうか
     */
    interrupt_current?: boolean;
    /**
     * フェードイン時間（秒）
     */
    fade_in?: number;
    /**
     * 保持時間（秒）
     */
    hold_duration?: number;
    /**
     * フェードアウト時間（秒）
     */
    fade_out?: number;
};

/**
 * VADのスキーマ
 */
type app__api__schemas__emotion__VADSchema = {
    /**
     * Valence（感情の正負）
     */
    'v': number;
    /**
     * Arousal（覚醒度）
     */
    'a': number;
    /**
     * Dominance（支配度）
     */
    'd': number;
};

/**
 * VAD値スキーマ
 */
type app__api__schemas__emotion_config__VADSchema = {
    /**
     * Valence
     */
    'v': number;
    /**
     * Arousal
     */
    'a': number;
    /**
     * Dominance
     */
    'd': number;
};

/**
 * 異議申し立て理由（選択式）
 */
type AppealReason = 'frequency_too_high' | 'frequency_too_low' | 'intensity_too_high' | 'intensity_too_low';

/**
 * コンテンツカテゴリ
 */
type ContentCategory = 'nudity' | 'sexual' | 'sexual_violence' | 'violence' | 'gore' | 'self_harm' | 'drugs' | 'alcohol_tobacco' | 'crime' | 'weapons' | 'horror' | 'profanity' | 'crude_humor' | 'hate' | 'harassment' | 'gambling' | 'mature_themes';

/**
 * コンテンツ詳細リクエスト
 */
type ContentDetailRequest = {
    /**
     * 出現頻度
     */
    frequency: ContentFrequency;
    /**
     * 強度
     */
    intensity: ContentIntensity;
};

/**
 * 異議申し立て項目リクエスト
 */
type AppealItemRequest = {
    /**
     * 異議を唱えるカテゴリ
     */
    category: ContentCategory;
    /**
     * 異議の理由
     */
    reason: AppealReason;
    /**
     * 提案する頻度・強度
     */
    proposed_detail: ContentDetailRequest;
};

/**
 * コンテンツ詳細レスポンス
 */
type ContentDetailResponse = {
    /**
     * 出現頻度
     */
    frequency: ContentFrequency;
    /**
     * 強度
     */
    intensity: ContentIntensity;
};

/**
 * 異議申し立て項目レスポンス
 */
type AppealItemResponse = {
    /**
     * 異議を唱えるカテゴリ
     */
    category: ContentCategory;
    /**
     * 異議の理由
     */
    reason: AppealReason;
    /**
     * 提案する頻度・強度
     */
    proposed_detail: ContentDetailResponse;
};

/**
 * 異議申し立て（再審査）リクエスト
 */
type AppealReviewRequest = {
    /**
     * カテゴリごとの異議内容リスト
     */
    appeals: Array<AppealItemRequest>;
};

/**
 * BlendShape設定リクエスト
 */
type BlendShapeEntryRequest = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path: string;
    /**
     * BlendShape名
     */
    blend_shape_name: string;
    /**
     * 設定値（0.0-1.0）
     */
    weight: number;
};

/**
 * ボーンスケール設定リクエスト
 */
type BoneScaleEntryRequest = {
    /**
     * ボーン名（例: 'Head', 'UpperLeg_L', 'Spine'）
     */
    bone_name: string;
    /**
     * X軸スケール
     */
    scale_x?: number;
    /**
     * Y軸スケール
     */
    scale_y?: number;
    /**
     * Z軸スケール
     */
    scale_z?: number;
};

/**
 * オブジェクト表示設定リクエスト
 */
type ObjectVisibilityEntryRequest = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path: string;
    /**
     * 表示状態
     */
    is_visible?: boolean;
};

/**
 * 外観バリアント作成リクエスト
 */
type AppearanceVariantCreateRequest = {
    /**
     * 外観バリアントID（例: 'default', 'jitome'）
     */
    appearance_variant_id: string;
    /**
     * 表示名（例: 'デフォルト', 'ジト目'）
     */
    variant_name: string;
    /**
     * Blink BlendShapeの静止位置
     */
    blink_open_max?: number;
    /**
     * オブジェクト表示設定の配列
     */
    object_visibility?: Array<ObjectVisibilityEntryRequest>;
    /**
     * BlendShape設定の配列
     */
    blend_shapes?: Array<BlendShapeEntryRequest>;
    /**
     * ボーンスケール設定の配列
     */
    bone_scales?: Array<BoneScaleEntryRequest>;
};

/**
 * BlendShape設定レスポンス
 */
type BlendShapeEntryResponse = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path: string;
    /**
     * BlendShape名
     */
    blend_shape_name: string;
    /**
     * 設定値（0.0-1.0）
     */
    weight: number;
};

/**
 * ボーンスケール設定レスポンス
 */
type BoneScaleEntryResponse = {
    /**
     * ボーン名
     */
    bone_name: string;
    /**
     * X軸スケール
     */
    scale_x: number;
    /**
     * Y軸スケール
     */
    scale_y: number;
    /**
     * Z軸スケール
     */
    scale_z: number;
};

/**
 * オブジェクト表示設定レスポンス
 */
type ObjectVisibilityEntryResponse = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path: string;
    /**
     * 表示状態
     */
    is_visible: boolean;
};

/**
 * AppearanceVariant Response DTO
 */
type AppearanceVariantResponse = {
    /**
     * 外観バリアントの一意識別子
     */
    appearance_variant_id: string;
    /**
     * 表示名
     */
    variant_name: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * Blink BlendShapeの静止位置
     */
    blink_open_max: number;
    /**
     * オブジェクト表示設定の配列
     */
    object_visibility?: Array<ObjectVisibilityEntryResponse>;
    /**
     * BlendShape設定の配列
     */
    blend_shapes?: Array<BlendShapeEntryResponse>;
    /**
     * ボーンスケール設定の配列
     */
    bone_scales?: Array<BoneScaleEntryResponse>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 外観バリアントリストレスポンス
 */
type AppearanceVariantListResponse = {
    /**
     * 外観バリアントリスト
     */
    items: Array<AppearanceVariantResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * 外観バリアント更新リクエスト（PATCH用）
 */
type AppearanceVariantUpdateRequest = {
    /**
     * 表示名
     */
    variant_name?: (string | null);
    /**
     * Blink BlendShapeの静止位置
     */
    blink_open_max?: (number | null);
    /**
     * オブジェクト表示設定の配列
     */
    object_visibility?: (Array<ObjectVisibilityEntryRequest> | null);
    /**
     * BlendShape設定の配列
     */
    blend_shapes?: (Array<BlendShapeEntryRequest> | null);
    /**
     * ボーンスケール設定の配列
     */
    bone_scales?: (Array<BoneScaleEntryRequest> | null);
};

/**
 * グループ単位の positive/negative scale（D3）
 *
 * コンテキスト補正 + VAD影響 で共用。
 * 1.0 = 標準通り。>1.0 = 増幅。<1.0 = 減衰。0.0 = 影響なし。
 */
type ArchetypeSensitivity = {
    /**
     * 視線 正方向倍率
     */
    lookat_positive_scale?: number;
    /**
     * 視線 負方向倍率
     */
    lookat_negative_scale?: number;
    /**
     * まばたき 正方向倍率
     */
    blink_positive_scale?: number;
    /**
     * まばたき 負方向倍率
     */
    blink_negative_scale?: number;
    /**
     * 呼吸 正方向倍率
     */
    breathing_positive_scale?: number;
    /**
     * 呼吸 負方向倍率
     */
    breathing_negative_scale?: number;
    /**
     * 表情 正方向倍率
     */
    expression_positive_scale?: number;
    /**
     * 表情 負方向倍率
     */
    expression_negative_scale?: number;
    /**
     * モーションタイミング 正方向倍率
     */
    motion_timing_positive_scale?: number;
    /**
     * モーションタイミング 負方向倍率
     */
    motion_timing_negative_scale?: number;
    /**
     * 会話タイミング 正方向倍率
     */
    conversation_timing_positive_scale?: number;
    /**
     * 会話タイミング 負方向倍率
     */
    conversation_timing_negative_scale?: number;
};

/**
 * アセットアクセスレベル
 */
type AssetAccessLevel = 'full' | 'trial' | 'none';

/**
 * AssetBundleアセットの多言語情報
 */
type AssetBundleAssetLocalized = {
    /**
     * AssetBundle名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * AssetBundleAsset Response DTO - メタデータのみ（variantsはVersionに移動）
 */
type AssetBundleAssetResponse = {
    /**
     * AssetBundleアセットID
     */
    asset_bundle_asset_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * official or community
     */
    data_source: DataSource;
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * 最新バージョンのコンテンツハッシュ
     */
    latest_content_hash: string;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, AssetBundleAssetLocalized>;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * タグリスト（レベル付き）
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * AssetBundleAsset一覧のレスポンススキーマ
 */
type AssetBundleAssetListResponse = {
    /**
     * アセットバンドルリスト
     */
    items: Array<AssetBundleAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * AssetBundleアセットの更新リクエスト
 */
type AssetBundleAssetUpdateRequest = {
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * ロケール別情報
     */
    locales?: (Record<string, AssetBundleAssetLocalized> | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

/**
 * AssetBundleの単一バリアント（プラットフォーム・アーキテクチャ別）
 */
type AssetBundleVariant = {
    /**
     * Storage上のファイルパス
     */
    storage_path: string;
    /**
     * SHA256ハッシュ (hex-lowercase-64chars)
     */
    sha256: string;
    /**
     * ファイルサイズ（バイト）
     */
    size_bytes: number;
};

/**
 * AssetBundleAssetVersion Response DTO
 */
type AssetBundleAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * プラットフォーム・アーキテクチャ別バリアント
     */
    variants?: Record<string, Record<string, AssetBundleVariant>>;
    /**
     * コンテンツハッシュ
     */
    content_hash: string;
    /**
     * 参照カウント
     */
    ref_count?: number;
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * AssetBundleAssetVersion一覧のレスポンススキーマ
 */
type AssetBundleAssetVersionListResponse = {
    /**
     * バージョンリスト
     */
    items: Array<AssetBundleAssetVersionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * AssetBundleAsset + Version 複合レスポンス
 */
type AssetBundleAssetWithVersionResponse = {
    /**
     * アセット情報
     */
    asset: AssetBundleAssetResponse;
    /**
     * バージョン情報
     */
    version: AssetBundleAssetVersionResponse;
};

/**
 * AssetBundleのバリアント別データレスポンス
 */
type AssetBundleVariantDataResponse = {
    /**
     * AssetBundleアセットID参照
     */
    asset_bundle_asset_id: string;
    /**
     * AssetBundleアセットバージョンID参照
     */
    asset_bundle_asset_version_id?: (string | null);
};

/**
 * AssetBundleモデルのレスポンススキーマ
 */
type AssetBundleModelResponse = {
    /**
     * プラットフォーム・アーキテクチャ別バリアント
     */
    variants?: Record<string, AssetBundleVariantDataResponse>;
    /**
     * モデラー名
     */
    modeler_name?: (string | null);
    /**
     * キャラクターデザイナー名
     */
    character_designer_name?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * アセットカタログ（このストーリーで使用するアセットの一覧）
 */
type AssetCatalog = {
    /**
     * 音声アセットIDリスト
     */
    audio_asset_ids?: Array<string>;
    /**
     * 画像アセットIDリスト
     */
    image_asset_ids?: Array<string>;
    /**
     * キャラクターIDリスト
     */
    character_ids?: Array<string>;
};

/**
 * アセットの役割
 */
type AssetRole = 'background' | 'sprite_sheet' | 'sprite_standing_base' | 'sprite_standing_eye' | 'sprite_standing_mouth' | 'sprite_sitting_base' | 'sprite_sitting_eye' | 'sprite_sitting_mouth' | 'sprite_lying_base' | 'sprite_lying_eye' | 'sprite_lying_mouth' | 'sprite_preview' | 'motion_frame' | 'face_icon_base' | 'face_icon_eye' | 'face_icon_mouth' | 'character_icon_square' | 'character_icon_portrait' | 'user_icon' | 'thumbnail';

/**
 * アセットタイプ
 */
type AssetType = 'vrm' | 'gltf' | 'glb' | 'asset_bundle' | 'fbx' | 'vrma' | 'animation_clip';

/**
 * AssetVariantLink Response DTO - 明示的フィールド定義
 */
type AssetVariantLinkResponse = {
    /**
     * リンクID
     */
    asset_variant_link_id: string;
    /**
     * アセットID（辞書順で小さい方）
     */
    asset_a_id: string;
    /**
     * アセットAのタイプ
     */
    asset_a_type: AssetType;
    /**
     * アセットID（辞書順で大きい方）
     */
    asset_b_id: string;
    /**
     * アセットBのタイプ
     */
    asset_b_type: AssetType;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 関連アセットレスポンス
 */
type RelatedAssetResponse = {
    /**
     * アセットID
     */
    asset_id: string;
    asset_type: AssetType;
};

/**
 * アセットバリアントグループレスポンス
 */
type AssetVariantGroupResponse = {
    /**
     * 検索に使用したアセットID
     */
    query_asset_id: string;
    /**
     * 該当する全リンク
     */
    links: Array<AssetVariantLinkResponse>;
    /**
     * 関連アセット
     */
    related_assets: Array<RelatedAssetResponse>;
};

/**
 * 装着箇所の位置・領域・角度レスポンス
 */
type AttachmentPointPoseResponse = {
    /**
     * 中心X（画像幅に対する比率）
     */
    center_x: number;
    /**
     * 中心Y（画像高さに対する比率）
     */
    center_y: number;
    /**
     * 占有幅（画像幅に対する比率）
     */
    width: number;
    /**
     * 占有高さ（画像高さに対する比率）
     */
    height: number;
    /**
     * 水平角度
     */
    yaw: number;
    /**
     * 垂直角度
     */
    pitch: number;
};

/**
 * 2D装着トランスフォーム（確定値を保存）
 *
 * 自動フィット結果もここに保存。読む側は値を使うだけ。
 * 描画順はRenderLayerで管理するため、ここには含まない。
 */
type AttachmentTransform2D = {
    /**
     * Z軸回転（画像平面内の回転）
     */
    rotation_degrees?: number;
    /**
     * 位置オフセットX
     */
    offset_x?: number;
    /**
     * 位置オフセットY
     */
    offset_y?: number;
    /**
     * スケール（自動フィット結果または手動調整値）
     */
    scale?: number;
};

/**
 * 3D装着トランスフォーム（確定値を保存）
 */
type AttachmentTransform3D = {
    /**
     * 位置X
     */
    position_x?: number;
    /**
     * 位置Y
     */
    position_y?: number;
    /**
     * 位置Z
     */
    position_z?: number;
    /**
     * 回転X
     */
    rotation_x?: number;
    /**
     * 回転Y
     */
    rotation_y?: number;
    /**
     * 回転Z
     */
    rotation_z?: number;
    /**
     * スケール
     */
    scale?: number;
};

/**
 * 装着設定タイプ
 */
type AttachmentType = 'external' | 'built_in';

/**
 * 会話を聞いている人数カテゴリ（3択）
 *
 * プリセットのコンテキスト補正キーとして使用。
 * ONE_ON_ONE が基準点（オフセット0）。
 */
type AudienceScale = 'one_on_one' | 'small_group' | 'large_audience';

/**
 * 音声アセットの多言語情報
 */
type AudioAssetLocalized = {
    /**
     * 音声名（タイトル）
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * オーディオタイプ
 */
type AudioType = 'bgm' | 'se' | 'jingle';

/**
 * AudioAsset Response DTO - エンティティと完全に同じフィールド
 */
type AudioAssetResponse = {
    /**
     * 音声アセットID
     */
    audio_asset_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 音声タイプ
     */
    audio_type: AudioType;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * 最新バージョンのコンテンツハッシュ（重複検索用）
     */
    latest_content_hash: string;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, AudioAssetLocalized>;
    /**
     * アーティスト名
     */
    artist_name?: (string | null);
    /**
     * アルバム名
     */
    album?: (string | null);
    /**
     * BPM
     */
    bpm?: (number | null);
    /**
     * ループポイント（秒）
     */
    loop_point?: (number | null);
    /**
     * ループ可能かどうか
     */
    is_loopable: boolean;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * AudioAsset一覧のレスポンススキーマ
 */
type AudioAssetListResponse = {
    /**
     * 音声アセットリスト
     */
    items: Array<AudioAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * AudioAsset更新リクエスト - メタデータのみ更新可能
 */
type AudioAssetUpdateRequest = {
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, AudioAssetLocalized> | null);
    /**
     * アーティスト名
     */
    artist_name?: (string | null);
    /**
     * アルバム名
     */
    album?: (string | null);
    /**
     * BPM
     */
    bpm?: (number | null);
    /**
     * ループポイント
     */
    loop_point?: (number | null);
    /**
     * ループ可能かどうか
     */
    is_loopable?: (boolean | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

type AudioFormat = 'mp3' | 'wav' | 'ogg' | 'm4a' | 'flac';

/**
 * AudioAssetVersion Response DTO - エンティティと完全に同じフィールド
 */
type AudioAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * 品質別パス
     */
    paths: Record<string, string>;
    /**
     * 音声フォーマット
     */
    format: AudioFormat;
    /**
     * 再生時間（秒）
     */
    duration: number;
    /**
     * サンプルレート（Hz）
     */
    sample_rate: number;
    /**
     * チャンネル数
     */
    channels: number;
    /**
     * ファイルサイズ（バイト）
     */
    file_size: number;
    /**
     * ファイルコンテンツのハッシュ
     */
    content_hash: string;
    /**
     * 参照カウント
     */
    ref_count?: number;
    /**
     * ビット深度
     */
    bit_depth?: (number | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイル画像アセットバージョンID
     */
    thumbnail_image_asset_version_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * AudioAssetVersion一覧のレスポンススキーマ
 */
type AudioAssetVersionListResponse = {
    /**
     * バージョンリスト
     */
    items: Array<AudioAssetVersionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * AudioAsset + 最新Version の複合レスポンス
 */
type AudioAssetWithVersionResponse = {
    /**
     * 音声アセット情報
     */
    asset: AudioAssetResponse;
    /**
     * 最新バージョン情報
     */
    version: AudioAssetVersionResponse;
};

type AudioQuality = 'low' | 'medium' | 'high' | 'lossless';

type AutoCreateCharacterRequest = {
    /**
     * 大まかなキャラクター設定を含む辞書
     */
    minimal_settings: Record<string, string>;
};

/**
 * 自動審査リクエスト
 */
type AutoReviewRequest = {};

/**
 * 自動タグ付けレスポンス
 */
type AutoTagResponse = {
    /**
     * 重み付きタグのリスト
     */
    tags: Array<TagWithLevel>;
};

/**
 * 条件タイプ
 */
type ConditionType = 'flag_is_true' | 'flag_is_false' | 'counter_equals' | 'counter_not_equals' | 'counter_greater_than' | 'counter_greater_or_equal' | 'counter_less_than' | 'counter_less_or_equal' | 'score_greater_than' | 'score_less_than';

/**
 * 条件
 */
type Condition = {
    type: ConditionType;
    /**
     * 条件対象のキー
     */
    key: string;
    /**
     * 比較値（カウンター/スコア用）
     */
    value?: (number | null);
};

/**
 * 条件グループ（AND/OR）
 */
type ConditionGroup_Input = {
    /**
     * 論理演算子
     */
    operator?: 'and' | 'or';
    /**
     * 条件リスト
     */
    conditions?: Array<Condition>;
};

/**
 * 効果タイプ
 */
type EffectType = 'set_flag' | 'clear_flag' | 'set_counter' | 'add_counter' | 'set_score' | 'add_score';

/**
 * 効果（状態変更）
 */
type Effect = {
    type: EffectType;
    /**
     * 対象のキー
     */
    key: string;
    /**
     * 設定/加算する値
     */
    value?: (number | null);
};

/**
 * 自動遷移
 */
type AutoTransition_Input = {
    /**
     * 遷移先シーンID
     */
    target_scene_id: string;
    /**
     * 自動遷移が発火する条件
     */
    condition: ConditionGroup_Input;
    /**
     * 遷移時に適用する効果
     */
    effects?: Array<Effect>;
    /**
     * 優先度（高い順に評価）
     */
    priority?: number;
};

/**
 * 条件グループ（AND/OR）
 */
type ConditionGroup_Output = {
    /**
     * 論理演算子
     */
    operator?: 'and' | 'or';
    /**
     * 条件リスト
     */
    conditions?: Array<Condition>;
};

/**
 * 自動遷移
 */
type AutoTransition_Output = {
    /**
     * 遷移先シーンID
     */
    target_scene_id: string;
    /**
     * 自動遷移が発火する条件
     */
    condition: ConditionGroup_Output;
    /**
     * 遷移時に適用する効果
     */
    effects?: Array<Effect>;
    /**
     * 優先度（高い順に評価）
     */
    priority?: number;
};

/**
 * アバターのAI使用申告
 */
type AvatarAiUsage = {
    /**
     * 2DスプライトのAI使用
     */
    sprite?: CreationMethod;
    /**
     * 3Dモデル（VRM）のAI使用
     */
    model_3d?: CreationMethod;
    /**
     * フェイスアイコンのAI使用
     */
    face_icon?: CreationMethod;
};

/**
 * RGBA色モデル
 *
 * 複数のエンティティ（Avatar, Character）で共通して使用される
 */
type Color = {
    /**
     * 赤成分 (0-255)
     */
    'r': number;
    /**
     * 緑成分 (0-255)
     */
    'g': number;
    /**
     * 青成分 (0-255)
     */
    'b': number;
    /**
     * アルファ/不透明度 (0-255)
     */
    'a': number;
};

/**
 * 性別タイプ（キャラクター/アバター/ボイス用）
 *
 * キャラクターやアバター、ボイスの性別を表す。
 * - MALE: 男性
 * - FEMALE: 女性
 * - OTHER: その他（中性、ノンバイナリー、性別不明、性別なし等）
 */
type GenderType = 'male' | 'female' | 'other';

/**
 * アバター自動パラメータ生成のレスポンス
 */
type AvatarAutoParamsResponse = {
    /**
     * 適合する性格アーキタイプのリスト（推奨順）。プリセット値は GET /personality-presets/{archetype} で取得
     */
    compatible_archetypes?: Array<PersonalityArchetype>;
    /**
     * 適合する行動パターンのリスト。プリセット値は GET /personality-presets/behavioral-patterns/{pattern} で取得
     */
    compatible_behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * 推定された性別
     */
    gender: GenderType;
    /**
     * 推定された年齢層
     */
    age_group: AgeGroupType;
    /**
     * 審査・メタデータ用の詳細説明（50〜100文字程度）
     */
    content_description: string;
    /**
     * ストア・検索結果に表示する短いキャッチフレーズ（20文字程度）
     */
    display_description: string;
    /**
     * メインカラー (RGBA)
     */
    main_color: Color;
    /**
     * サブカラー (RGBA)
     */
    sub_color: Color;
    /**
     * 推奨タグリスト
     */
    tags?: Array<TagWithLevel>;
};

/**
 * 瞬きフォーマットリクエスト
 */
type BlinkFormatRequest = {
    /**
     * フォーマットタイプ (blend_shape, sprite, face_icon)
     */
    format_type: string;
    /**
     * ペイロードデータ
     */
    payload: Record<string, any>;
};

/**
 * 瞬きデータ作成リクエスト
 */
type AvatarBlinkCreateRequest = {
    /**
     * フォーマットデータのリスト
     */
    formats?: Array<BlinkFormatRequest>;
};

/**
 * 瞬きに使用する個別BlendShape設定
 */
type BlinkBlendShapeEntry = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path: string;
    /**
     * BlendShape名
     */
    blend_shape_name: string;
    /**
     * 瞬き時のターゲット値（0.0-1.0）
     */
    weight: number;
};

/**
 * BlendShapeフォーマット用ペイロード
 */
type BlendShapeBlinkPayload = {
    /**
     * 瞬きに使用するBlendShape設定の配列
     */
    blink_blend_shapes: Array<BlinkBlendShapeEntry>;
};

/**
 * 瞬きフォーマットタイプ
 */
type BlinkFormatType = 'blend_shape' | 'sprite' | 'face_icon';

/**
 * FaceIconフォーマット用ペイロード（flat構造）
 *
 * Blinkはまぶたレイヤー（eyelid）を制御する。
 */
type FaceIconBlinkPayload = {
    /**
     * まぶた開き状態の画像アセットID
     */
    eyelid_open_image_asset_id: string;
    /**
     * まぶた開き状態の画像アセットバージョン
     */
    eyelid_open_image_asset_version_id?: (string | null);
    /**
     * まぶた半閉じ状態の画像アセットID
     */
    eyelid_half_closed_image_asset_id?: (string | null);
    /**
     * まぶた半閉じ状態の画像アセットバージョン
     */
    eyelid_half_closed_image_asset_version_id?: (string | null);
    /**
     * まぶた閉じ状態の画像アセットID
     */
    eyelid_closed_image_asset_id: string;
    /**
     * まぶた閉じ状態の画像アセットバージョン
     */
    eyelid_closed_image_asset_version_id?: (string | null);
};

/**
 * Sprite瞬き用の姿勢別データ
 *
 * Blinkはまぶたレイヤー（eyelid）を制御する。
 */
type SpriteBlinkPostureData = {
    /**
     * まぶた開き状態の画像アセットID
     */
    eyelid_open_image_asset_id: string;
    /**
     * まぶた開き状態の画像アセットバージョン
     */
    eyelid_open_image_asset_version_id?: (string | null);
    /**
     * まぶた半閉じ状態の画像アセットID
     */
    eyelid_half_closed_image_asset_id?: (string | null);
    /**
     * まぶた半閉じ状態の画像アセットバージョン
     */
    eyelid_half_closed_image_asset_version_id?: (string | null);
    /**
     * まぶた閉じ状態の画像アセットID
     */
    eyelid_closed_image_asset_id: string;
    /**
     * まぶた閉じ状態の画像アセットバージョン
     */
    eyelid_closed_image_asset_version_id?: (string | null);
};

/**
 * Spriteフォーマット用ペイロード（姿勢キーMap）
 *
 * キーは姿勢（standing/sitting/lying）。存在しない姿勢キーはその姿勢で瞬きオーバーレイ無効。
 */
type SpriteBlinkPayload = {
    /**
     * 立ち姿勢の瞬きデータ
     */
    standing?: (SpriteBlinkPostureData | null);
    /**
     * 座り姿勢の瞬きデータ
     */
    sitting?: (SpriteBlinkPostureData | null);
    /**
     * 寝転び姿勢の瞬きデータ
     */
    lying?: (SpriteBlinkPostureData | null);
};

/**
 * BlinkFormat Response DTO
 */
type BlinkFormatResponse = {
    /**
     * フォーマットタイプ
     */
    format_type: BlinkFormatType;
    /**
     * ペイロードデータ
     */
    payload: (BlendShapeBlinkPayload | FaceIconBlinkPayload | SpriteBlinkPayload);
};

/**
 * AvatarBlink Response DTO
 */
type AvatarBlinkResponse = {
    /**
     * 瞬きデータの一意識別子
     */
    avatar_blink_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * フォーマット別の実装データ
     */
    formats?: Array<BlinkFormatResponse>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 瞬きリストレスポンス
 */
type AvatarBlinkListResponse = {
    /**
     * 瞬きリスト
     */
    items: Array<AvatarBlinkResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * 呼吸フォーマットリクエスト
 */
type BreathingFormatRequest = {
    /**
     * フォーマットタイプ (bone, sprite, face_icon)
     */
    format_type: string;
    /**
     * ペイロードデータ
     */
    payload: Record<string, any>;
};

/**
 * 呼吸データ作成リクエスト
 */
type AvatarBreathingCreateRequest = {
    /**
     * フォーマットデータのリスト
     */
    formats?: Array<BreathingFormatRequest>;
};

/**
 * 呼吸に使用する個別BlendShape設定
 */
type BreathingBlendShapeEntry = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path: string;
    /**
     * BlendShape名
     */
    blend_shape_name: string;
    /**
     * 呼吸時の最大値（0.0-1.0）
     */
    weight: number;
};

/**
 * BlendShapeフォーマット用ペイロード（VRMモデルのBlendShapeで呼吸表現）
 */
type BlendShapeBreathingPayload = {
    /**
     * 呼吸に使用するBlendShape設定の配列
     */
    breathing_blend_shapes: Array<BreathingBlendShapeEntry>;
};

/**
 * XYZ軸ごとのスケール
 */
type XYZScale = {
    /**
     * X軸の揺らぎ倍率
     */
    'x'?: number;
    /**
     * Y軸の揺らぎ倍率
     */
    'y'?: number;
    /**
     * Z軸の揺らぎ倍率
     */
    'z'?: number;
};

/**
 * Boneフォーマット用ペイロード（VRM/Generic 3Dモデル用）
 */
type BoneBreathingPayload = {
    /**
     * XYZ軸ごとの揺らぎ倍率
     */
    xyz_scale?: XYZScale;
    /**
     * 揺らぎを適用するボーンのリスト（BodySlot enum値）
     */
    target_bones?: Array<BodySlot>;
};

/**
 * 呼吸フォーマットタイプ
 */
type BreathingFormatType = 'bone' | 'blend_shape' | 'sprite' | 'face_icon';

/**
 * FaceIconフォーマット用ペイロード（2Dキャラクター用）
 */
type FaceIconBreathingPayload = {
    /**
     * 動きの滑らかさ（SmoothDamp用）
     */
    smooth_time?: number;
    /**
     * 自然さを出すためのノイズ強度
     */
    noise_strength?: number;
    /**
     * 基準位置からのオフセット
     */
    breathing_offset?: number;
};

/**
 * Spriteフォーマット用ペイロード（2Dキャラクター用）
 *
 * 現時点ではFaceIconBreathingPayloadと同一フィールド。
 * 今後Sprite側のみパラメータ追加の可能性があるため分離。
 */
type SpriteBreathingPayload = {
    /**
     * 動きの滑らかさ（SmoothDamp用）
     */
    smooth_time?: number;
    /**
     * 自然さを出すためのノイズ強度
     */
    noise_strength?: number;
    /**
     * 基準位置からのオフセット
     */
    breathing_offset?: number;
};

/**
 * BreathingFormat Response DTO
 */
type BreathingFormatResponse = {
    /**
     * フォーマットタイプ
     */
    format_type: BreathingFormatType;
    /**
     * ペイロードデータ
     */
    payload: (BoneBreathingPayload | BlendShapeBreathingPayload | FaceIconBreathingPayload | SpriteBreathingPayload);
};

/**
 * AvatarBreathing Response DTO
 */
type AvatarBreathingResponse = {
    /**
     * 呼吸データの一意識別子
     */
    avatar_breathing_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * フォーマット別の実装データ
     */
    formats?: Array<BreathingFormatResponse>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 呼吸リストレスポンス
 */
type AvatarBreathingListResponse = {
    /**
     * 呼吸リスト
     */
    items: Array<AvatarBreathingResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * ベースモーション リクエスト
 */
type BaseMotionsRequest = {
    idle_turn_90_left?: (string | null);
    idle_turn_90_right?: (string | null);
    idle_turn_180_left?: (string | null);
    idle_turn_180_right?: (string | null);
    ground_move_forward?: (string | null);
    ground_move_backward?: (string | null);
    ground_move_left?: (string | null);
    ground_move_right?: (string | null);
    ground_move_start?: (string | null);
    ground_move_stop?: (string | null);
    ground_move_turn_90_left?: (string | null);
    ground_move_turn_90_right?: (string | null);
    ground_move_turn_180_left?: (string | null);
    ground_move_turn_180_right?: (string | null);
    ground_move_forward_left?: (string | null);
    ground_move_forward_right?: (string | null);
    ground_move_backward_left?: (string | null);
    ground_move_backward_right?: (string | null);
    ground_rush_forward?: (string | null);
    ground_rush_backward?: (string | null);
    ground_rush_left?: (string | null);
    ground_rush_right?: (string | null);
    ground_rush_start?: (string | null);
    ground_rush_stop?: (string | null);
    ground_rush_turn_90_left?: (string | null);
    ground_rush_turn_90_right?: (string | null);
    ground_rush_turn_180_left?: (string | null);
    ground_rush_turn_180_right?: (string | null);
    ground_rush_forward_left?: (string | null);
    ground_rush_forward_right?: (string | null);
    ground_rush_backward_left?: (string | null);
    ground_rush_backward_right?: (string | null);
    ground_move_forward_speed?: (number | null);
    ground_move_backward_speed?: (number | null);
    ground_move_strafe_speed?: (number | null);
    ground_rush_forward_speed?: (number | null);
    ground_rush_backward_speed?: (number | null);
    ground_rush_strafe_speed?: (number | null);
};

/**
 * 会話シグナルモーションエントリ リクエスト
 */
type SignalMotionEntryRequest = {
    motion_id: string;
    min_interval?: number;
};

/**
 * 会話シグナルモード動作 リクエスト
 */
type SignalModeBehaviorRequest = {
    motions?: Array<SignalMotionEntryRequest>;
};

/**
 * 会話シグナル リクエスト
 */
type ConversationSignalsRequest = {
    listening?: SignalModeBehaviorRequest;
    speaking?: SignalModeBehaviorRequest;
    thinking?: SignalModeBehaviorRequest;
};

/**
 * ジェスチャーモーション リクエスト
 */
type GestureMotionsRequest = {
    entrance?: Array<string>;
    exit?: Array<string>;
    greeting?: Array<string>;
    farewell?: Array<string>;
    victory?: Array<string>;
    defeat?: Array<string>;
};

/**
 * 姿勢遷移 リクエスト
 */
type PostureTransitionsRequest = {
    stand_to_sit?: (string | null);
    stand_to_lay?: (string | null);
    sit_to_stand?: (string | null);
    sit_to_lay?: (string | null);
    lay_to_stand?: (string | null);
    lay_to_sit?: (string | null);
};

/**
 * ランダムモーションエントリ リクエスト
 */
type RandomMotionEntryRequest = {
    motion_id: string;
    min_interval?: number;
};

/**
 * アイドル状態動作 リクエスト
 */
type StateBehaviorRequest = {
    base_motion_ids?: Array<string>;
    random_motions?: Array<RandomMotionEntryRequest>;
};

/**
 * アイドル動作 リクエスト
 */
type IdleBehaviorsRequest = {
    standing?: StateBehaviorRequest;
    sitting?: StateBehaviorRequest;
    lying?: StateBehaviorRequest;
    posture_transitions?: PostureTransitionsRequest;
};

/**
 * ポーズモーション リクエスト
 */
type PoseMotionsRequest = {
    soulless_idle_stand?: (string | null);
};

/**
 * AvatarCoreMotions 作成リクエスト
 */
type AvatarCoreMotionsCreateRequest = {
    base_motions?: BaseMotionsRequest;
    gesture_motions?: GestureMotionsRequest;
    pose_motions?: PoseMotionsRequest;
    idle_behaviors?: IdleBehaviorsRequest;
    conversation_signals?: ConversationSignalsRequest;
};

/**
 * ベースモーション レスポンス
 */
type BaseMotionsResponse = {
    idle_turn_90_left?: (string | null);
    idle_turn_90_right?: (string | null);
    idle_turn_180_left?: (string | null);
    idle_turn_180_right?: (string | null);
    ground_move_forward?: (string | null);
    ground_move_backward?: (string | null);
    ground_move_left?: (string | null);
    ground_move_right?: (string | null);
    ground_move_start?: (string | null);
    ground_move_stop?: (string | null);
    ground_move_turn_90_left?: (string | null);
    ground_move_turn_90_right?: (string | null);
    ground_move_turn_180_left?: (string | null);
    ground_move_turn_180_right?: (string | null);
    ground_move_forward_left?: (string | null);
    ground_move_forward_right?: (string | null);
    ground_move_backward_left?: (string | null);
    ground_move_backward_right?: (string | null);
    ground_rush_forward?: (string | null);
    ground_rush_backward?: (string | null);
    ground_rush_left?: (string | null);
    ground_rush_right?: (string | null);
    ground_rush_start?: (string | null);
    ground_rush_stop?: (string | null);
    ground_rush_turn_90_left?: (string | null);
    ground_rush_turn_90_right?: (string | null);
    ground_rush_turn_180_left?: (string | null);
    ground_rush_turn_180_right?: (string | null);
    ground_rush_forward_left?: (string | null);
    ground_rush_forward_right?: (string | null);
    ground_rush_backward_left?: (string | null);
    ground_rush_backward_right?: (string | null);
    ground_move_forward_speed?: (number | null);
    ground_move_backward_speed?: (number | null);
    ground_move_strafe_speed?: (number | null);
    ground_rush_forward_speed?: (number | null);
    ground_rush_backward_speed?: (number | null);
    ground_rush_strafe_speed?: (number | null);
};

/**
 * 会話シグナルモーションエントリ レスポンス
 */
type SignalMotionEntryResponse = {
    motion_id: string;
    min_interval: number;
};

/**
 * 会話シグナルモード動作 レスポンス
 */
type SignalModeBehaviorResponse = {
    motions?: Array<SignalMotionEntryResponse>;
};

/**
 * 会話シグナル レスポンス
 */
type ConversationSignalsResponse = {
    listening?: SignalModeBehaviorResponse;
    speaking?: SignalModeBehaviorResponse;
    thinking?: SignalModeBehaviorResponse;
};

/**
 * ジェスチャーモーション レスポンス
 */
type GestureMotionsResponse = {
    entrance?: Array<string>;
    exit?: Array<string>;
    greeting?: Array<string>;
    farewell?: Array<string>;
    victory?: Array<string>;
    defeat?: Array<string>;
};

/**
 * 姿勢遷移 レスポンス
 */
type PostureTransitionsResponse = {
    stand_to_sit?: (string | null);
    stand_to_lay?: (string | null);
    sit_to_stand?: (string | null);
    sit_to_lay?: (string | null);
    lay_to_stand?: (string | null);
    lay_to_sit?: (string | null);
};

/**
 * ランダムモーションエントリ レスポンス
 */
type RandomMotionEntryResponse = {
    motion_id: string;
    min_interval: number;
};

/**
 * アイドル状態動作 レスポンス
 */
type StateBehaviorResponse = {
    base_motion_ids?: Array<string>;
    random_motions?: Array<RandomMotionEntryResponse>;
};

/**
 * アイドル動作 レスポンス
 */
type IdleBehaviorsResponse = {
    standing?: StateBehaviorResponse;
    sitting?: StateBehaviorResponse;
    lying?: StateBehaviorResponse;
    posture_transitions?: PostureTransitionsResponse;
};

/**
 * ポーズモーション レスポンス
 */
type PoseMotionsResponse = {
    soulless_idle_stand?: (string | null);
};

/**
 * AvatarCoreMotions レスポンス
 */
type AvatarCoreMotionsResponse = {
    avatar_core_motions_id: string;
    base_motions: BaseMotionsResponse;
    gesture_motions: GestureMotionsResponse;
    pose_motions: PoseMotionsResponse;
    idle_behaviors: IdleBehaviorsResponse;
    conversation_signals: ConversationSignalsResponse;
    schema_version: number;
    created_at: string;
    updated_at: string;
};

/**
 * AvatarCoreMotions 更新リクエスト（PATCH用、全フィールドOptional）
 */
type AvatarCoreMotionsUpdateRequest = {
    base_motions?: (BaseMotionsRequest | null);
    gesture_motions?: (GestureMotionsRequest | null);
    pose_motions?: (PoseMotionsRequest | null);
    idle_behaviors?: (IdleBehaviorsRequest | null);
    conversation_signals?: (ConversationSignalsRequest | null);
};

/**
 * スナップショット用のアバター多言語情報
 */
type AvatarLocalizedSnapshot = {
    /**
     * アバター名
     */
    name: string;
    /**
     * コンテンツの詳細説明
     */
    content_description: string;
    /**
     * 公開表示用の説明
     */
    display_description: string;
};

/**
 * Avatarの用途
 */
type AvatarPurpose = 'personal' | 'derivative_draft';

/**
 * Promote時のAvatarトップレベルフィールド全てのスナップショット
 */
type AvatarEntitySnapshot = {
    /**
     * アバターID
     */
    avatar_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type?: OwnerType;
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * 性別
     */
    gender?: GenderType;
    age_group?: AgeGroupType;
    /**
     * 適合する性格アーキタイプ
     */
    compatible_archetypes?: Array<any>;
    /**
     * 適合する行動パターン
     */
    compatible_behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, AvatarLocalizedSnapshot>;
    /**
     * コンテンツゾーニング
     */
    zoning?: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions?: UsageRestrictions;
    /**
     * AI使用申告
     */
    ai_usage?: AvatarAiUsage;
    /**
     * 利用可能なモデルタイプ
     */
    available_model_types?: Array<ModelType>;
    /**
     * 正方形アイコンの画像アセットID
     */
    icon_square_image_asset_id?: (string | null);
    /**
     * 正方形アイコンの画像アセットバージョンID
     */
    icon_square_image_asset_version_id?: (string | null);
    /**
     * 長方形アイコンの画像アセットID
     */
    icon_rectangle_image_asset_id?: (string | null);
    /**
     * 長方形アイコンの画像アセットバージョンID
     */
    icon_rectangle_image_asset_version_id?: (string | null);
    /**
     * メインカラー
     */
    main_color?: Color;
    /**
     * サブカラー
     */
    sub_color?: Color;
    /**
     * データソース
     */
    data_source?: DataSource;
    review_status?: ReviewStatus;
    /**
     * 複製元のアバターID
     */
    origin_avatar_id?: (string | null);
    /**
     * アバターの用途
     */
    purpose?: AvatarPurpose;
    /**
     * 最新公開テンプレートID
     */
    latest_template_id?: (string | null);
    /**
     * フォーク元テンプレートID
     */
    forked_from_template_id?: (string | null);
    /**
     * 作成日時
     */
    created_at?: string;
    /**
     * 更新日時
     */
    updated_at?: string;
};

/**
 * 表現フォーマットリクエスト
 */
type ExpressionFormatRequest = {
    /**
     * フォーマットタイプ (BlendShape, Sprite, FaceIcon)
     */
    format_type: string;
    /**
     * ペイロードデータ
     */
    payload: Record<string, any>;
};

/**
 * 感情の割り込みモード
 */
type InterruptMode = 'block' | 'allow_additive' | 'allow_specific' | 'allow_all';

/**
 * 表現作成リクエスト
 */
type AvatarExpressionCreateRequest = {
    /**
     * 参照するEmotionのID
     */
    emotion_id: string;
    /**
     * 他の表現との相互作用モード
     */
    interrupt_mode?: InterruptMode;
    /**
     * 許可される感情ID
     */
    allowed_emotion_ids?: Array<string>;
    /**
     * フォーマットデータのリスト
     */
    formats?: Array<ExpressionFormatRequest>;
};

/**
 * BlendShape用の重み設定
 */
type BlendShapeWeight = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path: string;
    /**
     * BlendShape名
     */
    blend_shape_name: string;
    /**
     * 重み（0.0-1.0）
     */
    weight: number;
};

/**
 * 目のBlendShapeグループ
 *
 * 排他制約: このグループのblend_shapes内のBS名は、Blink側のBS名と重複してはならない。
 */
type EyeBlendShapeGroup = {
    /**
     * 目のBlendShape設定
     */
    blend_shapes?: Array<BlendShapeWeight>;
    /**
     * 瞬きアニメーションの上限値。感情で既に目を閉じている場合に瞬きが過剰にならないよう抑制（0.0=瞬き無効、1.0=通常）
     */
    blink_limit?: number;
    /**
     * 目のBlendShape weightの上限。性格プリセットのexpression_intensity_scale適用後のクランプ上限（1.0=通常、1.0超=オーバードライブ許容）
     */
    overdrive_max?: number;
};

/**
 * 口のBlendShapeグループ
 */
type MouthBlendShapeGroup = {
    /**
     * 口のBlendShape設定
     */
    blend_shapes?: Array<BlendShapeWeight>;
    /**
     * リップシンク中のこのグループのBlendShape乗数（0.0=完全抑制、1.0=抑制なし）
     */
    during_lipsync_multiplier?: number;
    /**
     * 口のBlendShape weightの上限。性格プリセットのexpression_intensity_scale適用後のクランプ上限（1.0=通常、1.0超=オーバードライブ許容）
     */
    overdrive_max?: number;
};

/**
 * その他のBlendShapeグループ（眉、頬など）
 */
type OtherBlendShapeGroup = {
    /**
     * その他のBlendShape設定
     */
    blend_shapes?: Array<BlendShapeWeight>;
    /**
     * その他BlendShape weightの上限。性格プリセットのexpression_intensity_scale適用後のクランプ上限（1.0=通常、1.0超=オーバードライブ許容）
     */
    overdrive_max?: number;
};

/**
 * BlendShape形式の表現データ
 */
type BlendShapeExpressionData_Output = {
    /**
     * 目のBlendShapeグループ
     */
    eye?: (EyeBlendShapeGroup | null);
    /**
     * 口のBlendShapeグループ
     */
    mouth?: (MouthBlendShapeGroup | null);
    /**
     * その他のBlendShapeグループ
     */
    other?: (OtherBlendShapeGroup | null);
    /**
     * 中間値を許可するかどうか
     */
    allow_intermediate_values?: boolean;
    /**
     * 加算モードかどうか
     */
    additive?: boolean;
    /**
     * フェードイン時間（秒）
     */
    fade_in_duration?: number;
    /**
     * 保持時間（秒）
     */
    hold_duration?: number;
    /**
     * フェードアウト時間（秒）
     */
    fade_out_duration?: number;
};

/**
 * FaceIcon形式の表現データ（flat構造）
 *
 * Expressionはまぶた+眉毛レイヤー(eyelid)を制御。eyeball（瞳）はExpressionでは変更しない。
 * composite/bodyは表情適用時のオーバーライド用（指定時のみモデル層の画像を差し替え）。
 */
type FaceIconExpressionData = {
    /**
     * コンポジット画像アセットID（全レイヤー結合済み、表情適用時オーバーライド）
     */
    composite_image_asset_id?: (string | null);
    /**
     * コンポジット画像アセットバージョンID
     */
    composite_image_asset_version_id?: (string | null);
    /**
     * ボディ画像アセットID（非分離要素焼き込み済み素体、表情適用時オーバーライド）
     */
    body_image_asset_id?: (string | null);
    /**
     * ボディ画像アセットバージョンID
     */
    body_image_asset_version_id?: (string | null);
    /**
     * まぶた+眉毛レイヤー画像アセットID参照（感情の目形状）
     */
    eyelid_image_asset_id?: (string | null);
    /**
     * まぶた+眉毛レイヤー画像アセットバージョンID参照
     */
    eyelid_image_asset_version_id?: (string | null);
    /**
     * 口の画像アセットID参照
     */
    mouth_image_asset_id?: (string | null);
    /**
     * 口の画像アセットバージョンID参照
     */
    mouth_image_asset_version_id?: (string | null);
    /**
     * 保持時間（秒）
     */
    hold_duration?: number;
    /**
     * 口のアニメーションをブロックするかどうか
     */
    block_mouth?: boolean;
    /**
     * 瞬きをブロックするかどうか
     */
    block_blink?: boolean;
};

/**
 * GLBアニメーション形式の表現データ
 *
 * 骨格ベースの表情リグ（非Humanoid）や複雑なキーフレーム表現に使用。
 * blend_shapeフォーマットで表現できないケースの受け皿。
 */
type GLBExpressionData = {
    /**
     * GLBアニメーションアセットID
     */
    glb_asset_id: string;
    /**
     * GLBアセットバージョンID参照
     */
    glb_asset_version_id?: (string | null);
    /**
     * GLB内のアニメーション名（None=最初のアニメーション）
     */
    animation_name?: (string | null);
    /**
     * 適用重み
     */
    weight?: number;
    /**
     * フェードイン時間（秒）
     */
    fade_in_duration?: number;
    /**
     * 保持時間（秒）
     */
    hold_duration?: number;
    /**
     * フェードアウト時間（秒）
     */
    fade_out_duration?: number;
    /**
     * 自動瞬きの強度制限（0.0=瞬き抑制、1.0=通常）
     */
    blink_limit?: number;
    /**
     * リップシンク中のこの表現の口領域トラック乗数（0.0=口トラック抑制、1.0=フル）
     */
    during_lipsync_multiplier?: number;
};

/**
 * Sprite表現用の姿勢別データ
 *
 * Expressionはまぶた+眉毛レイヤー(eyelid)を制御。eyeball（瞳）はExpressionでは変更しない。
 * composite/bodyは表情適用時のオーバーライド用（指定時のみモデル層の画像を差し替え）。
 */
type SpriteExpressionPostureData = {
    /**
     * コンポジット画像アセットID（全レイヤー結合済み、表情適用時オーバーライド）
     */
    composite_image_asset_id?: (string | null);
    /**
     * コンポジット画像アセットバージョンID
     */
    composite_image_asset_version_id?: (string | null);
    /**
     * ボディ画像アセットID（非分離要素焼き込み済み素体、表情適用時オーバーライド）
     */
    body_image_asset_id?: (string | null);
    /**
     * ボディ画像アセットバージョンID
     */
    body_image_asset_version_id?: (string | null);
    /**
     * まぶた+眉毛レイヤー画像アセットID参照（感情の目形状）
     */
    eyelid_image_asset_id?: (string | null);
    /**
     * まぶた+眉毛レイヤー画像アセットバージョンID参照
     */
    eyelid_image_asset_version_id?: (string | null);
    /**
     * 口の画像アセットID参照
     */
    mouth_image_asset_id?: (string | null);
    /**
     * 口の画像アセットバージョンID参照
     */
    mouth_image_asset_version_id?: (string | null);
};

/**
 * Sprite表現の姿勢マップ
 */
type SpriteExpressionPostures = {
    /**
     * 立ち姿勢の表現データ
     */
    standing?: (SpriteExpressionPostureData | null);
    /**
     * 座り姿勢の表現データ
     */
    sitting?: (SpriteExpressionPostureData | null);
    /**
     * 寝転び姿勢の表現データ
     */
    lying?: (SpriteExpressionPostureData | null);
};

/**
 * Sprite形式の表現データ（姿勢キーMap）
 *
 * posturesのキーはstanding/sitting/lying。全姿勢の登録は任意。
 * 存在しない姿勢キーはその姿勢でこの感情の表示不可。
 * hold_duration, block_mouth, block_blinkは姿勢共通。
 */
type SpriteExpressionData = {
    /**
     * 姿勢別の表現データ
     */
    postures?: SpriteExpressionPostures;
    /**
     * 保持時間（秒）
     */
    hold_duration?: number;
    /**
     * 口のアニメーションをブロックするかどうか
     */
    block_mouth?: boolean;
    /**
     * 瞬きをブロックするかどうか
     */
    block_blink?: boolean;
};

/**
 * ExpressionFormat Response DTO
 */
type ExpressionFormatResponse = {
    /**
     * フォーマットタイプ
     */
    format_type: EmotionFormatType;
    /**
     * ペイロードデータ
     */
    payload: (BlendShapeExpressionData_Output | SpriteExpressionData | FaceIconExpressionData | GLBExpressionData);
};

/**
 * AvatarExpression Response DTO
 */
type AvatarExpressionResponse = {
    /**
     * 一意のID
     */
    avatar_expression_id: string;
    /**
     * 参照するEmotionのID
     */
    emotion_id: string;
    /**
     * 同一emotion_idの連番
     */
    number: number;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 他の表現との相互作用モード
     */
    interrupt_mode: InterruptMode;
    /**
     * 許可される感情ID
     */
    allowed_emotion_ids?: Array<string>;
    /**
     * プラットフォーム別の実装データ
     */
    formats?: Array<ExpressionFormatResponse>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 表現更新リクエスト
 */
type AvatarExpressionUpdateRequest = {
    /**
     * 相互作用モード
     */
    interrupt_mode?: (InterruptMode | null);
    /**
     * 許可される感情ID
     */
    allowed_emotion_ids?: (Array<string> | null);
};

/**
 * Instanceのアクセスタイプ
 */
type InstanceAccessType = 'trial' | 'full';

type AvatarInstanceCreateRequest = {
    /**
     * アバターテンプレートID
     */
    avatar_template_id: string;
    /**
     * アクセスタイプ
     */
    access_type?: InstanceAccessType;
};

type AvatarInstanceResponse = {
    /**
     * インスタンスID
     */
    instance_id: string;
    /**
     * ユーザーID
     */
    user_id: string;
    /**
     * アバターテンプレートID
     */
    avatar_template_id: string;
    /**
     * 元エンティティID
     */
    source_entity_id: string;
    /**
     * アクセスタイプ
     */
    access_type: InstanceAccessType;
    /**
     * 利用可能な更新テンプレートID
     */
    available_update_template_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type AvatarInstanceListResponse = {
    /**
     * インスタンスリスト
     */
    items: Array<AvatarInstanceResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

/**
 * 装着設定の生成方法
 */
type FittingMethod = 'manual' | 'auto_generated';

/**
 * 2Dスプライトの描画レイヤー（後ろ→前の順序）
 *
 * 各OutfitCategory / AccessoryCategory / HairStyleと1:1対応。
 * 同一RenderLayer内に2つ以上のアイテムが配置されることは基本的にない。
 * 稀なケースはAvatarItemAttachment.render_layer_overrideで対応。
 */
type RenderLayer = 'behind_all' | 'back_attachment' | 'back_hair' | 'body' | 'skin_decoration' | 'ear' | 'underwear_lower' | 'underwear_upper' | 'legwear' | 'bottom' | 'footwear' | 'top' | 'belt' | 'neckwear' | 'outerwear' | 'eyewear' | 'front_hair' | 'hair_accessory' | 'headwear' | 'handwear' | 'wristwear' | 'ring' | 'held_item' | 'over_all';

/**
 * AvatarItemAttachment作成リクエスト
 */
type AvatarItemAttachmentCreateRequest = {
    /**
     * 衣装ID
     */
    outfit_id?: (string | null);
    /**
     * アクセサリーID
     */
    accessory_id?: (string | null);
    /**
     * 髪型ID
     */
    hair_style_id?: (string | null);
    /**
     * 作成者ID
     */
    owner_id: string;
    /**
     * 装着タイプ
     */
    attachment_type?: (AttachmentType | null);
    /**
     * 生成方法
     */
    fitting_method?: (FittingMethod | null);
    /**
     * 表示メッシュパス（built_in用）
     */
    show_avatar_mesh_paths?: (Array<string> | null);
    /**
     * ブレンドシェイプ上書き（built_in用）
     */
    blendshape_overrides?: (Record<string, number> | null);
    /**
     * 3Dトランスフォーム
     */
    transform_3d?: (AttachmentTransform3D | null);
    /**
     * 非表示メッシュパス
     */
    hide_avatar_mesh_paths?: (Array<string> | null);
    /**
     * 2Dトランスフォーム
     */
    transform_2d?: (AttachmentTransform2D | null);
    /**
     * 描画レイヤー上書き
     */
    render_layer_override?: (RenderLayer | null);
};

/**
 * AvatarItemAttachment Response DTO
 */
type AvatarItemAttachmentResponse = {
    /**
     * 装着設定ID
     */
    attachment_id: string;
    /**
     * 対象アバターID
     */
    avatar_id: string;
    /**
     * 衣装ID
     */
    outfit_id?: (string | null);
    /**
     * アクセサリーID
     */
    accessory_id?: (string | null);
    /**
     * 髪型ID
     */
    hair_style_id?: (string | null);
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * 作成者ID
     */
    owner_id: string;
    /**
     * 装着タイプ (external=外部モデル, built_in=内蔵メッシュ/ブレンドシェイプ切り替え)
     */
    attachment_type?: AttachmentType;
    /**
     * 生成方法 (manual=人が確認・調整済み, auto_generated=自動生成・未確認)
     */
    fitting_method?: FittingMethod;
    /**
     * 表示メッシュパス（built_in用）
     */
    show_avatar_mesh_paths?: Array<string>;
    /**
     * ブレンドシェイプ上書き（built_in用）
     */
    blendshape_overrides?: Record<string, number>;
    /**
     * 3Dトランスフォーム
     */
    transform_3d?: AttachmentTransform3D;
    /**
     * 非表示メッシュパス
     */
    hide_avatar_mesh_paths?: Array<string>;
    /**
     * 2Dトランスフォーム
     */
    transform_2d?: AttachmentTransform2D;
    /**
     * 描画レイヤー上書き
     */
    render_layer_override?: (RenderLayer | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * AvatarItemAttachment一覧レスポンス
 */
type AvatarItemAttachmentListResponse = {
    /**
     * 装着設定リスト
     */
    items: Array<AvatarItemAttachmentResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * AvatarItemAttachment更新リクエスト
 */
type AvatarItemAttachmentUpdateRequest = {
    /**
     * 装着タイプ
     */
    attachment_type?: (AttachmentType | null);
    /**
     * 生成方法
     */
    fitting_method?: (FittingMethod | null);
    /**
     * 表示メッシュパス（built_in用）
     */
    show_avatar_mesh_paths?: (Array<string> | null);
    /**
     * ブレンドシェイプ上書き（built_in用）
     */
    blendshape_overrides?: (Record<string, number> | null);
    /**
     * 3Dトランスフォーム
     */
    transform_3d?: (AttachmentTransform3D | null);
    /**
     * 非表示メッシュパス
     */
    hide_avatar_mesh_paths?: (Array<string> | null);
    /**
     * 2Dトランスフォーム
     */
    transform_2d?: (AttachmentTransform2D | null);
    /**
     * 描画レイヤー上書き
     */
    render_layer_override?: (RenderLayer | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
};

/**
 * リップシンクフォーマットリクエスト
 */
type LipSyncFormatRequest = {
    /**
     * フォーマットタイプ (blend_shape, sprite, face_icon)
     */
    format_type: string;
    /**
     * ペイロードデータ
     */
    payload: Record<string, any>;
};

/**
 * リップシンクデータ作成リクエスト
 */
type AvatarLipSyncCreateRequest = {
    /**
     * スムージングに使用する過去フレーム数
     */
    smoothing_frames?: number;
    /**
     * フォーマットデータのリスト
     */
    formats?: Array<LipSyncFormatRequest>;
};

/**
 * Oculus Lipsync SDK準拠の15種類のViseme
 */
type Phoneme = 'sil' | 'PP' | 'FF' | 'TH' | 'DD' | 'kk' | 'CH' | 'SS' | 'nn' | 'RR' | 'aa' | 'E' | 'ih' | 'oh' | 'ou';

/**
 * BlendShape用Visemeマッピング
 */
type LipSyncVisemeMapping = {
    /**
     * BlendShape名
     */
    name: string;
    /**
     * 音素
     */
    phoneme: Phoneme;
    /**
     * 最大適用重み
     */
    max_weight: number;
    /**
     * このViseme発音中の口の表情の維持率。during_lipsync_multiplierと乗算される（0.0=表情完全抑制、1.0=維持）
     */
    expression_retention?: number;
};

/**
 * BlendShapeフォーマット用ペイロード
 */
type BlendShapeLipSyncPayload = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path?: (string | null);
    /**
     * 音素マッピング配列
     */
    viseme_mappings: Array<LipSyncVisemeMapping>;
};

/**
 * FaceIcon用のVisemeマッピング
 */
type FaceIconVisemeMapping = {
    /**
     * 音素
     */
    phoneme: Phoneme;
    /**
     * 口画像のアセットID
     */
    mouth_image_asset_id: string;
    /**
     * 口画像のアセットバージョン
     */
    mouth_image_asset_version_id?: (string | null);
};

/**
 * FaceIconフォーマット用ペイロード（flat構造）
 */
type FaceIconLipSyncPayload = {
    /**
     * 閉じ口の画像アセットID
     */
    fallback_mouth_closed_image_asset_id: string;
    /**
     * 閉じ口の画像アセットバージョン
     */
    fallback_mouth_closed_image_asset_version_id?: (string | null);
    /**
     * 中口の画像アセットID
     */
    fallback_mouth_half_open_image_asset_id: string;
    /**
     * 中口の画像アセットバージョン
     */
    fallback_mouth_half_open_image_asset_version_id?: (string | null);
    /**
     * 開き口の画像アセットID
     */
    fallback_mouth_open_image_asset_id: string;
    /**
     * 開き口の画像アセットバージョン
     */
    fallback_mouth_open_image_asset_version_id?: (string | null);
    /**
     * 音素別の口画像マッピング（オプション）
     */
    viseme_mappings?: Array<FaceIconVisemeMapping>;
};

/**
 * リップシンクフォーマットタイプ
 */
type LipSyncFormatType = 'blend_shape' | 'sprite' | 'face_icon';

/**
 * Sprite用のVisemeマッピング
 */
type SpriteVisemeMapping = {
    /**
     * 音素
     */
    phoneme: Phoneme;
    /**
     * 口画像のアセットID
     */
    mouth_image_asset_id: string;
    /**
     * 口画像のアセットバージョン
     */
    mouth_image_asset_version_id?: (string | null);
};

/**
 * Spriteリップシンク用の姿勢別データ
 */
type SpriteLipSyncPostureData = {
    /**
     * 閉じ口の画像アセットID
     */
    fallback_mouth_closed_image_asset_id: string;
    /**
     * 閉じ口の画像アセットバージョン
     */
    fallback_mouth_closed_image_asset_version_id?: (string | null);
    /**
     * 中口の画像アセットID
     */
    fallback_mouth_half_open_image_asset_id: string;
    /**
     * 中口の画像アセットバージョン
     */
    fallback_mouth_half_open_image_asset_version_id?: (string | null);
    /**
     * 開き口の画像アセットID
     */
    fallback_mouth_open_image_asset_id: string;
    /**
     * 開き口の画像アセットバージョン
     */
    fallback_mouth_open_image_asset_version_id?: (string | null);
    /**
     * 音素別の口画像マッピング（オプション）
     */
    viseme_mappings?: Array<SpriteVisemeMapping>;
};

/**
 * Spriteフォーマット用ペイロード（姿勢キーMap）
 *
 * キーは姿勢（standing/sitting/lying）。存在しない姿勢キーはその姿勢でリップシンク無効。
 */
type SpriteLipSyncPayload = {
    /**
     * 立ち姿勢のリップシンクデータ
     */
    standing?: (SpriteLipSyncPostureData | null);
    /**
     * 座り姿勢のリップシンクデータ
     */
    sitting?: (SpriteLipSyncPostureData | null);
    /**
     * 寝転び姿勢のリップシンクデータ
     */
    lying?: (SpriteLipSyncPostureData | null);
};

/**
 * LipSyncFormat Response DTO
 */
type LipSyncFormatResponse = {
    /**
     * フォーマットタイプ
     */
    format_type: LipSyncFormatType;
    /**
     * ペイロードデータ
     */
    payload: (BlendShapeLipSyncPayload | FaceIconLipSyncPayload | SpriteLipSyncPayload);
};

/**
 * AvatarLipSync Response DTO
 */
type AvatarLipSyncResponse = {
    /**
     * リップシンクデータの一意識別子
     */
    avatar_lipsync_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * スムージングに使用する過去フレーム数
     */
    smoothing_frames: number;
    /**
     * フォーマット別の実装データ
     */
    formats?: Array<LipSyncFormatResponse>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * リップシンクリストレスポンス
 */
type AvatarLipSyncListResponse = {
    /**
     * リップシンクリスト
     */
    items: Array<AvatarLipSyncResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * リップシンクデータ更新リクエスト（PATCH用）
 */
type AvatarLipSyncUpdateRequest = {
    /**
     * スムージングに使用する過去フレーム数
     */
    smoothing_frames?: (number | null);
};

/**
 * アバターの多言語情報
 */
type AvatarLocalized = {
    /**
     * アバター名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * Avatar Response DTO - 明示的フィールド定義
 */
type AvatarResponse = {
    /**
     * アバターID
     */
    avatar_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * 性別
     */
    gender: GenderType;
    age_group: AgeGroupType;
    /**
     * 適合する性格アーキタイプのリスト（推奨順）
     */
    compatible_archetypes?: Array<PersonalityArchetype>;
    /**
     * 適合する行動パターンのリスト
     */
    compatible_behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * タグIDとレベルのリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, AvatarLocalized>;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * AI使用申告（カテゴリ別）
     */
    ai_usage?: AvatarAiUsage;
    /**
     * 利用可能なモデルタイプ
     */
    available_model_types?: Array<ModelType>;
    /**
     * 正方形アイコンの画像アセットID
     */
    icon_square_image_asset_id?: (string | null);
    /**
     * 正方形アイコンの画像アセットバージョンID
     */
    icon_square_image_asset_version_id?: (string | null);
    /**
     * 長方形アイコンの画像アセットID
     */
    icon_rectangle_image_asset_id?: (string | null);
    /**
     * 長方形アイコンの画像アセットバージョンID
     */
    icon_rectangle_image_asset_version_id?: (string | null);
    /**
     * メインカラー
     */
    main_color: Color;
    /**
     * サブカラー
     */
    sub_color: Color;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * 複製元のアバターID
     */
    origin_avatar_id?: (string | null);
    /**
     * 最新公開テンプレートID
     */
    latest_template_id?: (string | null);
    /**
     * フォーク元テンプレートID
     */
    forked_from_template_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Avatar一覧のレスポンススキーマ
 */
type AvatarListResponse = {
    /**
     * アバターリスト
     */
    items: Array<AvatarResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル（ドキュメントID）。nullの場合は最終ページ
     */
    next_cursor?: (string | null);
};

/**
 * 視線制御フォーマットリクエスト
 */
type LookAtFormatRequest = {
    /**
     * フォーマットタイプ (bone, blend_shape, sprite, face_icon)
     */
    format_type: string;
    /**
     * ペイロードデータ
     */
    payload: Record<string, any>;
};

/**
 * 視線制御データ作成リクエスト
 */
type AvatarLookAtCreateRequest = {
    /**
     * フォーマットデータのリスト
     */
    formats?: Array<LookAtFormatRequest>;
};

/**
 * 視線用BlendShape設定
 */
type LookAtBlendShapeEntry = {
    /**
     * BlendShape名
     */
    blend_shape_name: string;
    /**
     * 最大適用重み
     */
    max_weight: number;
};

/**
 * BlendShapeフォーマット用ペイロード
 */
type BlendShapeLookAtPayload = {
    /**
     * 対象オブジェクトのパス（ルートオブジェクト以下）
     */
    object_path?: (string | null);
    /**
     * 上を見る設定
     */
    look_up: LookAtBlendShapeEntry;
    /**
     * 下を見る設定
     */
    look_down: LookAtBlendShapeEntry;
    /**
     * 左を見る設定
     */
    look_left: LookAtBlendShapeEntry;
    /**
     * 右を見る設定
     */
    look_right: LookAtBlendShapeEntry;
};

/**
 * Boneフォーマット用ペイロード
 */
type BoneLookAtPayload = {
    /**
     * 水平内側（寄り目方向）の回転制限（度）
     */
    horizontal_inner_limit?: number;
    /**
     * 水平外側の回転制限（度）
     */
    horizontal_outer_limit?: number;
    /**
     * 上方向の回転制限（度）
     */
    vertical_up_limit?: number;
    /**
     * 下方向の回転制限（度）
     */
    vertical_down_limit?: number;
};

/**
 * FaceIconフォーマット用ペイロード（flat構造）
 *
 * LookAtはeyeball（瞳/目玉）レイヤーのみ制御。eyelid（まぶた）はLookAtでは変更しない。
 *
 * デフォルト動作: eyeball_image をオフセット移動（max_offset_x/y の範囲内）。
 * 方向別画像が指定された場合はオフセットではなくその画像に差し替える。
 * ユースケース: eyelidレイヤーが小さく、オフセットだとeyeballがはみ出る場合に
 * 見えない部分を削った方向別画像をセットする。
 */
type FaceIconLookAtPayload = {
    /**
     * 正面瞳画像アセットID（必須・デフォルト）
     */
    eyeball_image_asset_id: string;
    /**
     * 正面瞳画像アセットバージョン
     */
    eyeball_image_asset_version_id?: (string | null);
    /**
     * 水平最大移動量（画像幅に対する比率）
     */
    max_offset_x?: number;
    /**
     * 垂直最大移動量（画像高さに対する比率）
     */
    max_offset_y?: number;
    /**
     * 左を見る瞳画像アセットID（指定時はオフセットではなく差し替え）
     */
    eyeball_left_image_asset_id?: (string | null);
    /**
     * 左を見る瞳画像アセットバージョン
     */
    eyeball_left_image_asset_version_id?: (string | null);
    /**
     * 右を見る瞳画像アセットID（指定時はオフセットではなく差し替え）
     */
    eyeball_right_image_asset_id?: (string | null);
    /**
     * 右を見る瞳画像アセットバージョン
     */
    eyeball_right_image_asset_version_id?: (string | null);
    /**
     * 上を見る瞳画像アセットID（指定時はオフセットではなく差し替え）
     */
    eyeball_up_image_asset_id?: (string | null);
    /**
     * 上を見る瞳画像アセットバージョン
     */
    eyeball_up_image_asset_version_id?: (string | null);
    /**
     * 下を見る瞳画像アセットID（指定時はオフセットではなく差し替え）
     */
    eyeball_down_image_asset_id?: (string | null);
    /**
     * 下を見る瞳画像アセットバージョン
     */
    eyeball_down_image_asset_version_id?: (string | null);
};

/**
 * 視線制御フォーマットタイプ
 */
type LookAtFormatType = 'bone' | 'blend_shape' | 'sprite' | 'face_icon';

/**
 * Sprite視線用の姿勢別データ
 *
 * LookAtはeyeball（瞳/目玉）レイヤーのみ制御。eyelid（まぶた）はLookAtでは変更しない。
 *
 * デフォルト動作: eyeball_image をオフセット移動（max_offset_x/y の範囲内）。
 * 方向別画像が指定された場合はオフセットではなくその画像に差し替える。
 * ユースケース: eyelidレイヤーが小さく、オフセットだとeyeballがはみ出る場合に
 * 見えない部分を削った方向別画像をセットする。
 */
type SpriteLookAtPostureData = {
    /**
     * 正面瞳画像アセットID（必須・デフォルト）
     */
    eyeball_image_asset_id: string;
    /**
     * 正面瞳画像アセットバージョン
     */
    eyeball_image_asset_version_id?: (string | null);
    /**
     * 水平最大移動量（画像幅に対する比率）
     */
    max_offset_x?: number;
    /**
     * 垂直最大移動量（画像高さに対する比率）
     */
    max_offset_y?: number;
    /**
     * 左を見る瞳画像アセットID（指定時はオフセットではなく差し替え）
     */
    eyeball_left_image_asset_id?: (string | null);
    /**
     * 左を見る瞳画像アセットバージョン
     */
    eyeball_left_image_asset_version_id?: (string | null);
    /**
     * 右を見る瞳画像アセットID（指定時はオフセットではなく差し替え）
     */
    eyeball_right_image_asset_id?: (string | null);
    /**
     * 右を見る瞳画像アセットバージョン
     */
    eyeball_right_image_asset_version_id?: (string | null);
    /**
     * 上を見る瞳画像アセットID（指定時はオフセットではなく差し替え）
     */
    eyeball_up_image_asset_id?: (string | null);
    /**
     * 上を見る瞳画像アセットバージョン
     */
    eyeball_up_image_asset_version_id?: (string | null);
    /**
     * 下を見る瞳画像アセットID（指定時はオフセットではなく差し替え）
     */
    eyeball_down_image_asset_id?: (string | null);
    /**
     * 下を見る瞳画像アセットバージョン
     */
    eyeball_down_image_asset_version_id?: (string | null);
};

/**
 * Spriteフォーマット用ペイロード（姿勢キーMap）
 *
 * キーは姿勢（standing/sitting/lying）。存在しない姿勢キーはその姿勢で視線制御無効。
 */
type SpriteLookAtPayload = {
    /**
     * 立ち姿勢の視線データ
     */
    standing?: (SpriteLookAtPostureData | null);
    /**
     * 座り姿勢の視線データ
     */
    sitting?: (SpriteLookAtPostureData | null);
    /**
     * 寝転び姿勢の視線データ
     */
    lying?: (SpriteLookAtPostureData | null);
};

/**
 * LookAtFormat Response DTO
 */
type LookAtFormatResponse = {
    /**
     * フォーマットタイプ
     */
    format_type: LookAtFormatType;
    /**
     * ペイロードデータ
     */
    payload: (BoneLookAtPayload | BlendShapeLookAtPayload | FaceIconLookAtPayload | SpriteLookAtPayload);
};

/**
 * AvatarLookAt Response DTO
 */
type AvatarLookAtResponse = {
    /**
     * 視線制御データの一意識別子
     */
    avatar_lookat_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * フォーマット別の実装データ
     */
    formats?: Array<LookAtFormatResponse>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 視線制御リストレスポンス
 */
type AvatarLookAtListResponse = {
    /**
     * 視線制御リスト
     */
    items: Array<AvatarLookAtResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * モーションフォーマットリクエスト（Unity JObject互換）
 */
type AvatarMotionFormatRequest = {
    /**
     * フォーマットタイプ (animator, vrma, animated_image, image_sequence, sprite_sheet)
     */
    format_type: string;
    /**
     * 型付きペイロードデータ
     */
    payload: Record<string, any>;
};

/**
 * キャラクターの基本姿勢
 */
type BaseState = 'standing' | 'sitting' | 'lying' | 'walking' | 'running' | 'any';

/**
 * 身体領域（モーション適用範囲・装備品影響判定用）
 *
 * 3Dモーション適用範囲と2Dモーション影響範囲の両方で使用する。
 * 人外モデルにも対応する意味的な領域定義。
 */
type BodyRegion = 'full_body' | 'upper_body' | 'lower_body' | 'head' | 'torso' | 'left_arm' | 'right_arm' | 'both_arms' | 'left_hand' | 'right_hand' | 'left_leg' | 'right_leg' | 'both_legs';

/**
 * モーション作成リクエスト
 */
type AvatarMotionCreateRequest = {
    /**
     * モーション識別子
     */
    motion_id: string;
    /**
     * 関連する感情ID
     */
    emotion_id: string;
    /**
     * LLMがこのモーションを選択すべき状況の説明
     */
    usage_description: string;
    /**
     * モーションタイプ
     */
    motion_type: MotionType;
    /**
     * ポーズモーションか（再生後に解除まで姿勢を保持する）
     */
    is_pose?: boolean;
    /**
     * このモーションを再生可能な姿勢リスト（デフォルト: ANY=全姿勢で再生可能）
     */
    playable_postures?: Array<BaseState>;
    /**
     * このモーションが動かす身体領域のリスト（装備品の表示/非表示判定に使用）
     */
    affected_body_regions?: Array<BodyRegion>;
    /**
     * フォーマットデータのリスト
     */
    formats?: Array<AvatarMotionFormatRequest>;
};

/**
 * MotionFormat Response DTO - 明示的フィールド定義
 */
type MotionFormatResponse = {
    /**
     * フォーマットタイプ
     */
    format_type: MotionFormatType;
    /**
     * ペイロードデータ（format_typeに応じた型付きデータ）
     */
    payload: any;
};

/**
 * AvatarMotion Response DTO - 明示的フィールド定義
 */
type AvatarMotionResponse = {
    /**
     * 一意のID
     */
    avatar_motion_id: string;
    /**
     * モーション識別子
     */
    motion_id: string;
    /**
     * 関連する感情ID
     */
    emotion_id: string;
    /**
     * 同一motion_id・motion_type・emotion_idの連番
     */
    number: number;
    /**
     * LLMがこのモーションを選択すべき状況の説明
     */
    usage_description: string;
    /**
     * モーションタイプ
     */
    motion_type: MotionType;
    /**
     * ポーズモーションか（再生後に解除まで姿勢を保持する）
     */
    is_pose: boolean;
    /**
     * このモーションを再生可能な姿勢リスト
     */
    playable_postures: Array<BaseState>;
    /**
     * このモーションが動かす身体領域のリスト（装備品の表示/非表示判定に使用）
     */
    affected_body_regions?: Array<BodyRegion>;
    /**
     * プラットフォーム別の実装データ
     */
    formats?: Array<MotionFormatResponse>;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * モーション更新リクエスト
 */
type AvatarMotionUpdateRequest = {
    /**
     * 関連する感情ID
     */
    emotion_id?: (string | null);
    /**
     * 使用説明
     */
    usage_description?: (string | null);
    /**
     * モーションタイプ
     */
    motion_type?: (MotionType | null);
    /**
     * ポーズモーションか（再生後に解除まで姿勢を保持する）
     */
    is_pose?: (boolean | null);
    /**
     * このモーションを再生可能な姿勢リスト
     */
    playable_postures?: (Array<BaseState> | null);
    /**
     * このモーションが動かす身体領域のリスト
     */
    affected_body_regions?: (Array<BodyRegion> | null);
    /**
     * フォーマットデータのリスト
     */
    formats?: (Array<AvatarMotionFormatRequest> | null);
};

/**
 * テンプレートの多言語情報
 */
type TemplateLocalized = {
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明
     */
    description?: string;
};

type AvatarTemplateResponse = {
    /**
     * テンプレートID
     */
    template_id: string;
    /**
     * 元エンティティID
     */
    source_entity_id: string;
    /**
     * バージョン番号
     */
    version_number: number;
    /**
     * 変更履歴
     */
    changelog?: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * 改変ポリシー
     */
    modification_policy: ModificationPolicy;
    /**
     * 改変元テンプレートID
     */
    origin_template_id?: (string | null);
    /**
     * 多言語情報
     */
    locales?: Record<string, TemplateLocalized>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * Entityの全トップレベルデータ
     */
    snapshot: AvatarEntitySnapshot;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type AvatarTemplateListResponse = {
    /**
     * テンプレートリスト
     */
    items: Array<AvatarTemplateResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type AvatarTemplatePromoteRequest = {
    /**
     * 元アバターID
     */
    source_avatar_id: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 変更履歴
     */
    changelog?: string;
    /**
     * 改変ポリシー
     */
    modification_policy?: ModificationPolicy;
    /**
     * 多言語情報JSON
     */
    locales_json?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * タグリストJSON
     */
    tags_json?: (string | null);
};

type AvatarTemplateUpdateRequest = {
    /**
     * 改変ポリシー
     */
    modification_policy?: (ModificationPolicy | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, TemplateLocalized> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
};

/**
 * トランジションタイプ
 */
type TransitionType = 'none' | 'fade' | 'slide_left' | 'slide_right' | 'slide_up' | 'slide_down' | 'dissolve';

/**
 * 背景変更
 */
type BackgroundChangeEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 背景画像アセットID
     */
    background_image_asset_id: string;
    /**
     * 背景画像アセットバージョンID
     */
    background_image_asset_version_id?: (string | null);
    transition?: TransitionType;
    /**
     * トランジション時間（秒）
     */
    transition_duration?: number;
};

/**
 * 一括取得リクエスト
 */
type BatchRequest = {
    /**
     * 取得したいIDのリスト
     */
    ids: Array<string>;
};

/**
 * カテゴリの多言語情報
 */
type TagCategoryLocalized = {
    /**
     * 表示名（カテゴリ名の翻訳）
     */
    name: string;
    /**
     * 説明（用途・境界・注意点）
     */
    description?: (string | null);
};

/**
 * TagCategory Response DTO - 明示的フィールド定義
 */
type TagCategoryResponse = {
    /**
     * カテゴリID
     */
    tag_category_id: string;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別翻訳
     */
    locales?: Record<string, TagCategoryLocalized>;
    /**
     * 親カテゴリID
     */
    parent_id?: (string | null);
    /**
     * UI並び順
     */
    order: number;
    /**
     * 最低付与数
     */
    min_required: number;
    /**
     * 最大付与数
     */
    max_allowed?: (number | null);
    /**
     * 作成者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * 作成時刻
     */
    created_at: string;
    /**
     * 更新時刻
     */
    updated_at: string;
};

type BatchResponse_TagCategoryResponse_ = {
    /**
     * 取得できたアイテムの配列
     */
    items: Array<TagCategoryResponse>;
    /**
     * リクエストされたID数
     */
    requested_count: number;
    /**
     * 実際に見つかった件数
     */
    found_count: number;
    /**
     * 存在しなかったIDのリスト
     */
    not_found_ids?: Array<string>;
};

/**
 * タグの多言語情報
 */
type TagLocalized = {
    /**
     * 表示名（タグ名の翻訳）
     */
    name: string;
    /**
     * 同義語/検索語
     */
    synonyms?: Array<string>;
};

/**
 * Tag Response DTO - 明示的フィールド定義
 */
type TagResponse = {
    /**
     * タグID
     */
    tag_id: string;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別翻訳
     */
    locales?: Record<string, TagLocalized>;
    /**
     * 作成者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * 作成時刻
     */
    created_at: string;
    /**
     * 更新時刻
     */
    updated_at: string;
};

type BatchResponse_TagResponse_ = {
    /**
     * 取得できたアイテムの配列
     */
    items: Array<TagResponse>;
    /**
     * リクエストされたID数
     */
    requested_count: number;
    /**
     * 実際に見つかった件数
     */
    found_count: number;
    /**
     * 存在しなかったIDのリスト
     */
    not_found_ids?: Array<string>;
};

/**
 * Settings一括取得リクエスト
 */
type BatchSettingsRequest = {
    /**
     * 取得したいSettings IDのリスト
     */
    settings_ids: Array<string>;
    /**
     * contentフィールドを含めるかどうか
     */
    include_content?: boolean;
};

type ComplexityFactors = {
    /**
     * 矛盾リスト
     */
    contradictions?: Array<string>;
    /**
     * 弱点リスト
     */
    soft_spots?: Array<string>;
    /**
     * 不安リスト
     */
    insecurities?: Array<string>;
    /**
     * 誇りポイントリスト
     */
    pride_points?: Array<string>;
    /**
     * トリガー要約リスト
     */
    triggers_summary?: Array<string>;
    /**
     * 対処法要約リスト
     */
    coping_summary?: Array<string>;
};

type DecisionMaking = {
    /**
     * 思考プロセス
     */
    thought_process?: (string | null);
    /**
     * 優先事項リスト
     */
    priorities?: Array<string>;
    /**
     * 回避傾向リスト
     */
    avoidance_tendencies?: Array<string>;
    /**
     * 決断の速さ
     */
    decision_speed?: (string | null);
    /**
     * 対立への対応
     */
    conflict_response?: (string | null);
    /**
     * 信頼の基準
     */
    trust_basis?: (string | null);
    /**
     * 思考の習慣
     */
    thinking_habits?: (string | null);
};

/**
 * 決め台詞・口癖（使用条件付き）
 */
type SignaturePhrase = {
    /**
     * フレーズ
     */
    phrase: string;
    /**
     * 使用条件・場面
     */
    condition: string;
};

type LinguisticPatterns = {
    /**
     * 文末表現リスト（例：〜のじゃ、〜だよ）
     */
    sentence_endings?: Array<string>;
    /**
     * 決め台詞・口癖リスト（条件付き）
     */
    signature_phrases?: Array<SignaturePhrase>;
    /**
     * 敬語の基準
     */
    politeness_base?: (string | null);
    /**
     * 話し方の特徴リスト
     */
    speech_characteristics?: Array<string>;
    /**
     * 禁句リスト
     */
    taboo_phrases?: Array<string>;
};

type PersonalityTraits = {
    /**
     * 気質
     */
    temperament?: (string | null);
    /**
     * 社会的態度
     */
    social_attitude?: (string | null);
    /**
     * 情緒安定性
     */
    emotional_stability?: (string | null);
    /**
     * 自信レベル
     */
    confidence_level?: (string | null);
    /**
     * 楽観性
     */
    optimism?: (string | null);
    /**
     * 親切さ
     */
    kindness?: (string | null);
    /**
     * 忍耐力
     */
    patience?: (string | null);
    /**
     * 正直さ
     */
    honesty?: (string | null);
    /**
     * 忠誠心
     */
    loyalty?: (string | null);
    /**
     * 野心
     */
    ambition?: (string | null);
    /**
     * 適応力
     */
    adaptability?: (string | null);
    /**
     * ユーモアセンス
     */
    humor_sense?: (string | null);
    /**
     * 創造性
     */
    creativity?: (string | null);
    /**
     * リスク許容度
     */
    risk_tolerance?: (string | null);
    /**
     * 支配的な特性リスト
     */
    dominant_traits?: Array<string>;
    /**
     * 欠点リスト
     */
    flaws?: Array<string>;
    /**
     * 癖リスト
     */
    mannerisms?: Array<string>;
};

type EthicalDilemma = {
    /**
     * 倫理的ジレンマ
     */
    dilemma?: (string | null);
    /**
     * 解決策
     */
    resolution?: (string | null);
};

type ValueAndBeliefSystem = {
    /**
     * 核心的信念リスト
     */
    core_beliefs?: Array<string>;
    /**
     * 道徳原則リスト
     */
    moral_principles?: Array<string>;
    /**
     * 価値観の優先順位リスト
     */
    value_priorities?: Array<string>;
    /**
     * 人生哲学
     */
    life_philosophy?: (string | null);
    /**
     * 文化的価値観リスト
     */
    cultural_values?: Array<string>;
    /**
     * 従う伝統リスト
     */
    traditions_followed?: Array<string>;
    /**
     * タブーリスト
     */
    taboos?: Array<string>;
    /**
     * 正義の概念
     */
    justice_concept?: (string | null);
    /**
     * 倫理的ジレンマリスト
     */
    ethical_dilemmas?: Array<EthicalDilemma>;
    /**
     * 自己認識
     */
    self_perception?: (string | null);
    /**
     * 他者認識
     */
    other_perception?: (string | null);
    /**
     * 世界認識
     */
    world_perception?: (string | null);
    /**
     * 偏見リスト
     */
    biases?: Array<string>;
};

/**
 * キャラクターの性格・思考・言語パターンを定義する設定内容
 */
type SettingsContent_Output = {
    /**
     * 性格特性
     */
    personality_traits?: (PersonalityTraits | null);
    /**
     * 言語パターン
     */
    linguistic_patterns?: (LinguisticPatterns | null);
    /**
     * 意思決定パターン
     */
    decision_making?: (DecisionMaking | null);
    /**
     * 価値観・信念体系
     */
    value_and_belief_system?: (ValueAndBeliefSystem | null);
    /**
     * 複雑性要因
     */
    complexity_factors?: (ComplexityFactors | null);
};

/**
 * 設定の多言語情報
 */
type SettingsLocalized = {
    /**
     * 設定の名前
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: (string | null);
};

/**
 * Settings Response DTO - 明示的フィールド定義
 */
type SettingsResponse = {
    /**
     * 設定ID
     */
    settings_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 親設定のID
     */
    parent_settings_id?: (string | null);
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * 設定の詳細コンテンツ
     */
    content: SettingsContent_Output;
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別の設定情報
     */
    locales?: Record<string, SettingsLocalized>;
    /**
     * 性別
     */
    gender?: (GenderType | null);
    /**
     * 年齢グループ
     */
    age_group?: (AgeGroupType | null);
    /**
     * 適合する性格アーキタイプのリスト（推奨順）
     */
    compatible_archetypes?: Array<PersonalityArchetype>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * 設定に紐づくタグ
     */
    tags?: Array<TagWithLevel>;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Settings一括取得結果
 */
type BatchSettingsResponse = {
    /**
     * 取得できたSettingsの配列
     */
    items: Array<SettingsResponse>;
    /**
     * リクエストされたID数
     */
    requested_count: number;
    /**
     * 実際に見つかった件数
     */
    found_count: number;
    /**
     * 存在しなかった、または権限がないIDのリスト
     */
    not_found_ids?: Array<string>;
};

/**
 * 絆の種類（RelationshipRoleから導出される関係カテゴリ）
 *
 * AffinityLevel + PowerDynamic だけでは区別できない関係を分離する第3軸。
 * 例: LOVER と BEST_FRIEND は共に INTIMATE+EQUAL だが、
 * BondType が ROMANTIC vs PLATONIC で態度が変わる。
 */
type BondType = 'romantic' | 'platonic' | 'familial' | 'occupational' | 'adversarial';

/**
 * 感情条件付き発動の条件（D12）
 */
type EmotionalActivationConditions = {
    /**
     * 最低好意レベル
     */
    min_affinity?: (AffinityLevel | null);
    /**
     * 対象絆タイプ
     */
    bond_types?: (Array<BondType> | null);
};

/**
 * 感情パラメータの補正レイヤー（オフセット値）
 */
type EmotionalModifierLayer = {
    /**
     * Valence基準値の補正
     */
    valence_default?: (number | null);
    /**
     * Arousal基準値の補正
     */
    arousal_default?: (number | null);
    /**
     * Dominance基準値の補正
     */
    dominance_default?: (number | null);
    /**
     * Valence正方向感度の補正
     */
    valence_positive_sensitivity?: (number | null);
    /**
     * Valence負方向感度の補正
     */
    valence_negative_sensitivity?: (number | null);
    /**
     * Arousal正方向感度の補正
     */
    arousal_positive_sensitivity?: (number | null);
    /**
     * Arousal負方向感度の補正
     */
    arousal_negative_sensitivity?: (number | null);
    /**
     * Dominance正方向感度の補正
     */
    dominance_positive_sensitivity?: (number | null);
    /**
     * Dominance負方向感度の補正
     */
    dominance_negative_sensitivity?: (number | null);
    /**
     * Valence正方向の減衰半減期の補正（秒）
     */
    valence_positive_half_life_seconds?: (number | null);
    /**
     * Valence負方向の減衰半減期の補正（秒）
     */
    valence_negative_half_life_seconds?: (number | null);
    /**
     * Arousal正方向の減衰半減期の補正（秒）
     */
    arousal_positive_half_life_seconds?: (number | null);
    /**
     * Arousal負方向の減衰半減期の補正（秒）
     */
    arousal_negative_half_life_seconds?: (number | null);
    /**
     * Dominance正方向の減衰半減期の補正（秒）
     */
    dominance_positive_half_life_seconds?: (number | null);
    /**
     * Dominance負方向の減衰半減期の補正（秒）
     */
    dominance_negative_half_life_seconds?: (number | null);
    /**
     * 気分追従速度の補正
     */
    mood_follow_rate?: (number | null);
    /**
     * 感情履歴サイズの補正
     */
    emotion_history_size?: (number | null);
};

/**
 * 条件付き感情補正（D12）
 */
type ConditionalEmotionalActivation = {
    /**
     * 発動条件
     */
    conditions: EmotionalActivationConditions;
    /**
     * 適用する感情補正
     */
    modifier: EmotionalModifierLayer;
};

/**
 * Layer 3 のパラメータ補正エントリ（D11: ADD + OVERRIDE）
 */
type ModifierEntry = {
    /**
     * 補正値
     */
    value: number;
    /**
     * 適用方法（add=加算, override=置換）
     */
    operation?: 'add' | 'override';
};

/**
 * Layer 3 のグループ別 ModifierEntry
 */
type Layer3ModifierSet = {
    /**
     * 視線パラメータ補正
     */
    lookat?: Record<string, ModifierEntry>;
    /**
     * まばたきパラメータ補正
     */
    blink?: Record<string, ModifierEntry>;
    /**
     * 呼吸パラメータ補正
     */
    breathing?: Record<string, ModifierEntry>;
    /**
     * 表情パラメータ補正
     */
    expression?: Record<string, ModifierEntry>;
    /**
     * モーションタイミング補正
     */
    motion_timing?: Record<string, ModifierEntry>;
    /**
     * 会話タイミング補正
     */
    conversation_timing?: Record<string, ModifierEntry>;
};

/**
 * BehavioralPatternPreset レスポンスDTO（Layer 3）
 */
type BehavioralPatternPresetResponse = {
    /**
     * 行動パターン
     */
    pattern: BehavioralPattern;
    /**
     * 常時適用の補正
     */
    base_modifier?: Layer3ModifierSet;
    /**
     * 好意レベル別の補正
     */
    affinity_modifiers?: Record<string, Layer3ModifierSet>;
    /**
     * 力関係別の補正
     */
    power_modifiers?: Record<string, Layer3ModifierSet>;
    /**
     * 絆種類別の補正
     */
    bond_type_modifiers?: Record<string, Layer3ModifierSet>;
    /**
     * 聴衆規模別の補正
     */
    audience_modifiers?: Record<string, Layer3ModifierSet>;
    /**
     * 状況別の補正
     */
    situation_modifiers?: Record<string, Layer3ModifierSet>;
    /**
     * 常時適用の感情補正
     */
    emotional_base_modifier?: EmotionalModifierLayer;
    /**
     * 条件付き感情補正リスト
     */
    emotional_conditional_activations?: Array<ConditionalEmotionalActivation>;
};

/**
 * BehavioralPatternPreset 一覧レスポンスDTO
 */
type BehavioralPatternPresetListResponse = {
    /**
     * 行動パターンプリセット一覧
     */
    items: Array<BehavioralPatternPresetResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * BGM変更
 */
type BgmChangeEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 音声アセットID（Noneで停止）
     */
    audio_asset_id?: (string | null);
    /**
     * 音声アセットバージョンID
     */
    audio_asset_version_id?: (string | null);
    /**
     * 音量
     */
    volume?: number;
    /**
     * フェード時間（秒）
     */
    fade_duration?: number;
};

/**
 * BlendShape形式の表現データ
 */
type BlendShapeExpressionData_Input = {
    /**
     * 目のBlendShapeグループ
     */
    eye?: (EyeBlendShapeGroup | null);
    /**
     * 口のBlendShapeグループ
     */
    mouth?: (MouthBlendShapeGroup | null);
    /**
     * その他のBlendShapeグループ
     */
    other?: (OtherBlendShapeGroup | null);
    /**
     * 中間値を許可するかどうか
     */
    allow_intermediate_values?: boolean;
    /**
     * 加算モードかどうか
     */
    additive?: boolean;
    /**
     * フェードイン時間（秒）
     */
    fade_in_duration?: number;
    /**
     * 保持時間（秒）
     */
    hold_duration?: number;
    /**
     * フェードアウト時間（秒）
     */
    fade_out_duration?: number;
};

/**
 * まばたきコンテキスト補正（3パラメータ、D18）
 */
type BlinkContextModifier = {
    /**
     * 瞬き最小間隔の補正
     */
    min_blink_interval?: (number | null);
    /**
     * バースト瞬き確率の補正
     */
    burst_probability?: (number | null);
    /**
     * 瞬き速度の一括倍率補正（base=1.0）
     */
    blink_duration_scale?: (number | null);
};

type Body_add_animated_image_asset_version_api_v1_animated_image_assets__asset_id__versions_post = {
    file: Blob;
    /**
     * ループ回数（0=無限ループ, 未指定=ファイルから自動検出）
     */
    loop_count?: (number | null);
};

type Body_add_asset_bundle_asset_version_api_v1_asset_bundle_assets__asset_bundle_id__versions_post = {
    file: Blob;
    platform: string;
    arch: string;
};

type Body_add_audio_asset_version_api_v1_audio_assets__audio_id__versions_post = {
    file: Blob;
    thumbnail?: (Blob | null);
};

/**
 * 3D Gaussian Splatting フォーマット
 */
type GaussianSplatFormat = 'spz' | 'ply';

type Body_add_gaussian_splat_asset_version_api_v1_gaussian_splat_assets__gs_id__versions_post = {
    file: Blob;
    /**
     * Splatフォーマット（省略時はファイル名から自動判定）
     */
    splat_format?: (GaussianSplatFormat | null);
    /**
     * ポイント数
     */
    point_count?: (number | null);
};

type Body_add_glb_asset_version_api_v1_glb_assets__glb_id__versions_post = {
    file: Blob;
};

type Body_add_image_asset_version_api_v1_image_assets__image_id__versions_post = {
    file: Blob;
};

type Body_add_variant_to_version_api_v1_asset_bundle_assets__asset_bundle_id__versions__version_id__variants_post = {
    file: Blob;
    platform: string;
    arch: string;
};

type Body_add_video_asset_version_api_v1_video_assets__video_id__versions_post = {
    file: Blob;
    thumbnail?: (Blob | null);
};

type Body_auto_tag_avatar_api_v1_auto_tagging_avatar_post = {
    description: string;
    icon_image?: (Blob | null);
};

type Body_create_animated_image_asset_api_v1_animated_image_assets_post = {
    file: Blob;
    role: AnimatedImageRole;
    /**
     * ループ回数（0=無限ループ, 未指定=ファイルから自動検出）
     */
    loop_count?: (number | null);
    artist_name?: (string | null);
    /**
     * 名前
     */
    name?: (string | null);
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: (string | null);
    thumbnail_image_asset_id?: (string | null);
    thumbnail_image_asset_version_id?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, AnimatedImageAssetLocalized] - see #/components/schemas/AnimatedImageAssetLocalized
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel] - see #/components/schemas/TagWithLevel
     */
    tags_json?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration - see #/components/schemas/ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions - see #/components/schemas/UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

type Body_create_animation_clip_asset_api_v1_animation_clip_assets_post = {
    file: Blob;
    motion_id: string;
    motion_type: MotionType;
    thumbnail_image_asset_id?: (string | null);
    thumbnail_image_asset_version_id?: (string | null);
    emotion_id?: (string | null);
    target_gender?: (TargetGenderType | null);
    /**
     * JSON: List[AgeGroupType] 例: ["teen", "adult"]
     */
    age_groups_json?: (string | null);
    preview_animated_image_asset_id?: (string | null);
    preview_animated_image_asset_version_id?: (string | null);
    default_fade_in?: number;
    default_fade_out?: number;
    default_playback_speed?: number;
    default_weight?: number;
    /**
     * アニメーションの総フレーム数
     */
    frame_count?: (number | null);
    /**
     * 再生時間（秒）
     */
    duration_seconds?: (number | null);
    /**
     * フレームレート
     */
    fps?: (number | null);
    /**
     * ループ再生可能かどうか
     */
    is_loopable?: boolean;
    /**
     * Root Motionがあるか
     */
    has_root_motion?: boolean;
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, AnimationClipAssetLocalized] - see #/components/schemas/AnimationClipAssetLocalized
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel] - see #/components/schemas/TagWithLevel
     */
    tags_json?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration - see #/components/schemas/ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * 作成手法
     */
    creation_method?: (CreationMethod | null);
    /**
     * JSON: UsageRestrictions - see #/components/schemas/UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    /**
     * JSON: AssetUsageConditions - 利用条件
     */
    usage_conditions_json?: (string | null);
    /**
     * JSON: AssetRightsDeclaration - 権利宣言
     */
    rights_declaration_json?: (string | null);
    /**
     * Creator entity ID
     */
    creator_id?: (string | null);
    /**
     * クリエイター表示名
     */
    creator_display_name?: (string | null);
    data_source?: DataSource;
};

type Body_create_asset_bundle_asset_api_v1_asset_bundle_assets_post = {
    file: Blob;
    platform: string;
    arch: string;
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, AssetBundleAssetLocalized] - see #/components/schemas/AssetBundleAssetLocalized
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel] - see #/components/schemas/TagWithLevel
     */
    tags_json?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration - see #/components/schemas/ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions - see #/components/schemas/UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

type Body_create_audio_asset_api_v1_audio_assets_post = {
    file: Blob;
    audio_type: AudioType;
    title: string;
    artist_name?: (string | null);
    album?: (string | null);
    content_description?: (string | null);
    display_description?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, AudioAssetLocalized] - see #/components/schemas/AudioAssetLocalized
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel] - see #/components/schemas/TagWithLevel
     */
    tags_json?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration - see #/components/schemas/ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions - see #/components/schemas/UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
    thumbnail?: (Blob | null);
    bpm?: (number | null);
    loop_point?: (number | null);
    is_loopable?: (boolean | null);
};

type Body_create_avatar_api_v1_avatars_post = {
    /**
     * アバターID（省略時は自動生成）
     */
    avatar_id?: (string | null);
    /**
     * アバター名
     */
    avatar_name: string;
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * 性別
     */
    gender?: GenderType;
    age_group?: AgeGroupType;
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 審査・メタデータ用の詳細説明
     */
    content_description?: (string | null);
    /**
     * ストア・検索結果に表示する短い説明
     */
    display_description?: (string | null);
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * データソース
     */
    data_source?: DataSource;
    /**
     * 複製元のアバターID
     */
    origin_avatar_id?: (string | null);
    /**
     * タグリスト JSON例: [{"tag_id":"xxx","level":"core"}]
     */
    tags_json?: (string | null);
    /**
     * 多言語情報 JSON例: {"ja-JP":{"name":"名前","content_description":"説明","display_description":"紹介"}}
     */
    locales_json?: (string | null);
    /**
     * ユーザー申告 JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * 使用制限 JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    /**
     * AI使用申告 JSON例: {"sprite":"no_generative_ai","model_3d":"no_generative_ai","face_icon":"fully_generative_ai"}
     */
    ai_usage_json?: (string | null);
    /**
     * 利用可能モデルタイプ JSON例: ["vrm","sprite"]
     */
    available_model_types_json?: (string | null);
    /**
     * メインカラー JSON例: {"r":255,"g":0,"b":128,"a":255}
     */
    main_color_json?: (string | null);
    /**
     * サブカラー JSON例: {"r":200,"g":200,"b":200,"a":255}
     */
    sub_color_json?: (string | null);
    square_icon_file?: (Blob | null);
    rectangle_icon_file?: (Blob | null);
};

type Body_create_avatar_face_icon_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_face_icon_file_upload_post = {
    image_composite?: (Blob | null);
    image_body?: (Blob | null);
    image_eyelid?: (Blob | null);
    image_mouth?: (Blob | null);
    hold_duration?: number;
    block_mouth?: boolean;
    block_blink?: boolean;
};

type Body_create_avatar_sprite_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_sprite_file_upload_post = {
    /**
     * 姿勢（standing/sitting/lying）
     */
    posture: BaseState;
    image_composite?: (Blob | null);
    image_body?: (Blob | null);
    image_eyelid?: (Blob | null);
    image_mouth?: (Blob | null);
    hold_duration?: number;
    block_mouth?: boolean;
    block_blink?: boolean;
};

type Body_create_character_api_v1_characters_post = {
    /**
     * キャラクターID（省略時は自動生成）
     */
    character_id?: (string | null);
    /**
     * キャラクター名
     */
    character_name: string;
    /**
     * アバターID
     */
    avatar_id: string;
    /**
     * ボイスID
     */
    voice_id: string;
    /**
     * 設定ID
     */
    settings_id: string;
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * アバターのemotions/motions/modelsとアイコンをコピーするかどうか
     */
    copy_avatar_data?: boolean;
    /**
     * 性別
     */
    gender?: GenderType;
    age_group?: AgeGroupType;
    /**
     * キャラクターの説明
     */
    character_description?: (string | null);
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * データソース
     */
    data_source?: DataSource;
    /**
     * 複製元のキャラクターID
     */
    origin_character_id?: (string | null);
    /**
     * タグリスト JSON例: [{"tag_id":"xxx","level":"core"}]
     */
    tags_json?: (string | null);
    /**
     * 多言語情報 JSON例: {"ja-JP":{"name":"名前","description":"説明"}}
     */
    locales_json?: (string | null);
    /**
     * 感情パラメータ JSON
     */
    emotional_params_json?: (string | null);
    /**
     * ユーザー申告 JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * 使用制限 JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    /**
     * AI使用申告 JSON例: {"text":"no_generative_ai","visual":"fully_generative_ai","voice":"no_generative_ai"}
     */
    ai_usage_json?: (string | null);
    /**
     * 利用可能モデルタイプ JSON例: ["vrm","sprite"]
     */
    available_model_types_json?: (string | null);
    /**
     * メインカラー JSON例: {"r":255,"g":0,"b":128,"a":255}
     */
    main_color_json?: (string | null);
    /**
     * サブカラー JSON例: {"r":200,"g":200,"b":200,"a":255}
     */
    sub_color_json?: (string | null);
    square_icon_file?: (Blob | null);
    rectangle_icon_file?: (Blob | null);
};

/**
 * Gaussian Splatアセットの用途
 */
type GaussianSplatAssetRole = 'hair' | 'accessory' | 'clothing' | 'food';

type Body_create_gaussian_splat_asset_api_v1_gaussian_splat_assets_post = {
    file: Blob;
    role: GaussianSplatAssetRole;
    /**
     * Splatフォーマット（省略時はファイル名から自動判定）
     */
    splat_format?: (GaussianSplatFormat | null);
    /**
     * ポイント数
     */
    point_count?: (number | null);
    model_name?: (string | null);
    modeler_name?: (string | null);
    designer_name?: (string | null);
    thumbnail_image_asset_id?: (string | null);
    thumbnail_image_asset_version_id?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, GaussianSplatAssetLocalized]
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel]
     */
    tags_json?: (string | null);
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

/**
 * GLBアセットの用途
 */
type GLBAssetRole = 'avatar' | 'hair' | 'accessory' | 'clothing' | 'food' | 'animation';

type Body_create_glb_asset_api_v1_glb_assets_post = {
    file: Blob;
    role: GLBAssetRole;
    model_name?: (string | null);
    modeler_name?: (string | null);
    designer_name?: (string | null);
    thumbnail_image_asset_id?: (string | null);
    thumbnail_image_asset_version_id?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, GLBAssetLocalized]
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel]
     */
    tags_json?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

type Body_create_glb_from_fbx_api_v1_glb_assets_from_fbx_post = {
    file: Blob;
    role: GLBAssetRole;
    model_name?: (string | null);
    modeler_name?: (string | null);
    designer_name?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, GLBAssetLocalized]
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel]
     */
    tags_json?: (string | null);
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

type Body_create_glb_from_gltf_api_v1_glb_assets_from_gltf_post = {
    file: Blob;
    role: GLBAssetRole;
    model_name?: (string | null);
    modeler_name?: (string | null);
    designer_name?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, GLBAssetLocalized]
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel]
     */
    tags_json?: (string | null);
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

type Body_create_glb_from_obj_api_v1_glb_assets_from_obj_post = {
    file: Blob;
    /**
     * MTLマテリアルファイル（任意）
     */
    mtl_file?: (Blob | null);
    role: GLBAssetRole;
    model_name?: (string | null);
    modeler_name?: (string | null);
    designer_name?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, GLBAssetLocalized]
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel]
     */
    tags_json?: (string | null);
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

type Body_create_image_asset_api_v1_image_assets_post = {
    file: Blob;
    role: AssetRole;
    artist_name?: (string | null);
    /**
     * 画像名
     */
    name?: (string | null);
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, ImageAssetLocalized] - see #/components/schemas/ImageAssetLocalized
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel] - see #/components/schemas/TagWithLevel
     */
    tags_json?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration - see #/components/schemas/ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions - see #/components/schemas/UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

type Body_create_video_asset_api_v1_video_assets_post = {
    file: Blob;
    role: AssetRole;
    title: string;
    artist_name?: (string | null);
    content_description?: (string | null);
    display_description?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, VideoAssetLocalized] - see #/components/schemas/VideoAssetLocalized
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel] - see #/components/schemas/TagWithLevel
     */
    tags_json?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration - see #/components/schemas/ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions - see #/components/schemas/UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
    thumbnail?: (Blob | null);
};

type Body_create_vrm_asset_api_v1_vrm_assets_post = {
    file: Blob;
    model_name?: (string | null);
    artist_name?: (string | null);
    thumbnail_image_asset_id?: (string | null);
    thumbnail_image_asset_version_id?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, VRMAssetLocalized] - see #/components/schemas/VRMAssetLocalized
     */
    locales_json?: (string | null);
    /**
     * JSON: List[TagWithLevel] - see #/components/schemas/TagWithLevel
     */
    tags_json?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration - see #/components/schemas/ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions - see #/components/schemas/UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    data_source?: DataSource;
};

type Body_create_vrma_asset_api_v1_vrma_assets_post = {
    file: Blob;
    motion_id: string;
    motion_type: MotionType;
    /**
     * サムネイル画像ファイル（直接アップロード）
     */
    thumbnail_image?: (Blob | null);
    /**
     * 既存ImageAssetのIDを参照
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイルアニメーションGIF/APNGファイル（直接アップロード）
     */
    thumbnail_animated_image?: (Blob | null);
    /**
     * 既存AnimatedImageAssetのIDを参照
     */
    thumbnail_animated_image_asset_id?: (string | null);
    emotion_id?: (string | null);
    target_gender?: (TargetGenderType | null);
    /**
     * JSON: List[AgeGroupType] 例: ["teen", "young_adult"]
     */
    age_groups_json?: (string | null);
    /**
     * JSON: List[PersonalityArchetype] 例: ["cheerful", "cool"]
     */
    compatible_archetypes_json?: (string | null);
    /**
     * JSON: List[BehavioralPattern] 例: ["energetic", "calm"]
     */
    compatible_behavioral_patterns_json?: (string | null);
    default_locale?: SupportedLanguage$1;
    /**
     * JSON: Dict[SupportedLanguage, VRMAAssetLocalized] - see #/components/schemas/VRMAAssetLocalized
     */
    locales_json?: (string | null);
    default_fade_in?: number;
    default_fade_out?: number;
    default_playback_speed?: number;
    default_body_region?: BodyRegion;
    default_weight?: number;
    /**
     * JSON: List[TagWithLevel] - see #/components/schemas/TagWithLevel
     */
    tags_json?: (string | null);
    publish_scope?: PublishScope;
    /**
     * JSON: ContentDeclaration - see #/components/schemas/ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * JSON: UsageRestrictions - see #/components/schemas/UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    /**
     * JSON: AssetUsageConditions (利用条件)
     */
    usage_conditions_json?: (string | null);
    /**
     * JSON: AssetRightsDeclaration (権利宣言)
     */
    rights_declaration_json?: (string | null);
    /**
     * Creator entity ID
     */
    creator_id?: (string | null);
    /**
     * クリエイター表示名
     */
    creator_display_name?: (string | null);
    /**
     * 作成手法
     */
    creation_method?: (CreationMethod | null);
    data_source?: DataSource;
};

type Body_detect_animated_image_colluders_admin_v1_forensics_detect_animated_image_post = {
    /**
     * 疑わしいアニメーション画像（GIF/APNG）
     */
    file: Blob;
    /**
     * 元のアセットID
     */
    asset_id: string;
};

type Body_detect_face_api_v1_avatars__avatar_id__sprite_model_detect_face_post = {
    /**
     * 顔検出する画像
     */
    image: Blob;
};

type Body_detect_image_colluders_admin_v1_forensics_detect_image_post = {
    /**
     * 疑わしい画像ファイル（スクリーンショット/ダウンロード品）
     */
    file: Blob;
    /**
     * 元のアセットID (例: img_abc123)
     */
    asset_id: string;
};

type Body_detect_model_colluders_admin_v1_forensics_detect_model_post = {
    /**
     * 流出したGLB/VRMファイル
     */
    file: Blob;
    /**
     * 元のアセットID (例: vrm_abc123)
     */
    asset_id: string;
    /**
     * オリジナルファイルのGCSパス
     */
    original_storage_path: string;
};

type Body_detect_pose_api_v1_avatars__avatar_id__sprite_model_detect_pose_post = {
    /**
     * ポーズ検出する画像
     */
    image: Blob;
};

type Body_generate_avatar_auto_params_api_v1_auto_params_avatar_post = {
    /**
     * アバターのアイコン画像（必須）
     */
    icon_image: Blob;
    /**
     * アバターの説明（任意）
     */
    description?: (string | null);
    /**
     * タグを自動生成するか
     */
    generate_tags?: boolean;
};

type Body_generate_character_auto_params_api_v1_auto_params_character_post = {
    /**
     * キャラクター名（必須）
     */
    character_name: string;
    /**
     * キャラクターのアイコン画像（任意）
     */
    icon_image?: (Blob | null);
    /**
     * キャラクター設定テキスト（任意）
     */
    character_settings?: (string | null);
    /**
     * ボイスID（任意）
     */
    voice_id?: (string | null);
    /**
     * アバターID（任意）
     */
    avatar_id?: (string | null);
    /**
     * タグを自動生成するか
     */
    generate_tags?: boolean;
    /**
     * サブコレクション（プロファイル）を生成するか
     */
    generate_subcollections?: boolean;
};

type Body_generate_motion_auto_params_api_v1_auto_params_motion_post = {
    /**
     * モーションの説明文（音声入力テキストも可）。動画/GIFがある場合は省略可
     */
    description?: (string | null);
    /**
     * タグを自動生成するか
     */
    generate_tags?: boolean;
    /**
     * モーション名の言語（例: ja-JP, en-US, zh-CN）
     */
    locale?: string;
    /**
     * モーションの動画ファイル（MP4等）
     */
    video?: (Blob | null);
    /**
     * モーションのGIF/APNGファイル（サーバー側でMP4に自動変換）
     */
    gif?: (Blob | null);
};

type Body_update_avatar_api_v1_avatars__avatar_id__patch = {
    /**
     * アバター名
     */
    avatar_name?: (string | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: (string | null);
    /**
     * 性別
     */
    gender?: (string | null);
    /**
     * 年齢層
     */
    age_group?: (AgeGroupType | null);
    /**
     * スキーマバージョン
     */
    schema_version?: (number | null);
    /**
     * 審査・メタデータ用の詳細説明
     */
    content_description?: (string | null);
    /**
     * ストア・検索結果に表示する短い説明
     */
    display_description?: (string | null);
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
    /**
     * タグリスト JSON例: [{"tag_id":"xxx","level":"core"}]
     */
    tags_json?: (string | null);
    /**
     * 多言語情報 JSON
     */
    locales_json?: (string | null);
    /**
     * ユーザー申告 JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * 使用制限 JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    /**
     * AI使用申告 JSON例: {"sprite":"no_generative_ai","model_3d":"no_generative_ai","face_icon":"fully_generative_ai"}
     */
    ai_usage_json?: (string | null);
    /**
     * 利用可能モデルタイプ JSON例: ["vrm","sprite"]
     */
    available_model_types_json?: (string | null);
    /**
     * メインカラー JSON例: {"r":255,"g":0,"b":128,"a":255}
     */
    main_color_json?: (string | null);
    /**
     * サブカラー JSON例: {"r":200,"g":200,"b":200,"a":255}
     */
    sub_color_json?: (string | null);
    square_icon_file?: (Blob | null);
    rectangle_icon_file?: (Blob | null);
};

type Body_update_character_api_v1_characters__character_id__patch = {
    /**
     * キャラクター名
     */
    character_name?: (string | null);
    /**
     * ボイスID
     */
    voice_id?: (string | null);
    /**
     * アバターID
     */
    avatar_id?: (string | null);
    /**
     * 設定ID
     */
    settings_id?: (string | null);
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: (string | null);
    /**
     * 性別
     */
    gender?: (GenderType | null);
    /**
     * 年齢層
     */
    age_group?: (AgeGroupType | null);
    /**
     * 公開範囲 (public, unlisted, private)
     */
    publish_scope?: (PublishScope | null);
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
    /**
     * タグリスト JSON例: [{"tag_id":"xxx","level":"core"}]
     */
    tags_json?: (string | null);
    /**
     * 多言語情報 JSON
     */
    locales_json?: (string | null);
    /**
     * 感情パラメータ JSON
     */
    emotional_params_json?: (string | null);
    /**
     * ユーザー申告 JSON: ContentDeclaration
     */
    declaration_json?: (string | null);
    /**
     * 使用制限 JSON: UsageRestrictions
     */
    usage_restrictions_json?: (string | null);
    /**
     * AI使用申告 JSON例: {"text":"no_generative_ai","visual":"fully_generative_ai","voice":"no_generative_ai"}
     */
    ai_usage_json?: (string | null);
    /**
     * 利用可能モデルタイプ JSON例: ["vrm","sprite"]
     */
    available_model_types_json?: (string | null);
    /**
     * メインカラー JSON例: {"r":255,"g":0,"b":128,"a":255}
     */
    main_color_json?: (string | null);
    /**
     * サブカラー JSON例: {"r":200,"g":200,"b":200,"a":255}
     */
    sub_color_json?: (string | null);
    square_icon_file?: (Blob | null);
    rectangle_icon_file?: (Blob | null);
};

type Body_upload_asset_bundle_api_v1_avatars__avatar_id__asset_bundle_model_post = {
    /**
     * AssetBundle file (.ab)
     */
    file?: (Blob | null);
};

type Body_upload_face_icon_model_with_files_api_v1_avatars__avatar_id__face_icon_model_file_upload_post = {
    /**
     * ベース画像
     */
    base_image: Blob;
    /**
     * まぶた画像
     */
    eyelid_image?: (Blob | null);
    /**
     * 眼球画像
     */
    eyeball_image?: (Blob | null);
    /**
     * 口の画像
     */
    mouth_image?: (Blob | null);
    /**
     * イラストレーター名
     */
    illustrator_name?: (string | null);
    /**
     * キャラクターデザイナー名
     */
    character_designer_name?: (string | null);
};

type Body_upload_glb_model_with_file_api_v1_avatars__avatar_id__glb_model_file_upload_post = {
    /**
     * GLB file (.glb)
     */
    file: Blob;
    /**
     * 3Dモデラー名
     */
    modeler_name?: (string | null);
    /**
     * デザイナー名
     */
    designer_name?: (string | null);
};

type Body_upload_sprite_model_with_files_api_v1_avatars__avatar_id__sprite_model_file_upload_post = {
    /**
     * ベース画像
     */
    base_image: Blob;
    /**
     * まぶた画像
     */
    eyelid_image?: (Blob | null);
    /**
     * 眼球画像
     */
    eyeball_image?: (Blob | null);
    /**
     * 口の画像
     */
    mouth_image?: (Blob | null);
    /**
     * 姿勢（standing/sitting/lying）
     */
    posture: BaseState;
    /**
     * イラストレーター名
     */
    illustrator_name?: (string | null);
    /**
     * キャラクターデザイナー名
     */
    character_designer_name?: (string | null);
    /**
     * 顔位置JSON 例: {"center_x":0.5,"center_y":0.3,"width":0.2,"height":0.25}
     */
    face_position_json: string;
};

type Body_upload_vrm_model_with_file_api_v1_avatars__avatar_id__vrm_model_file_upload_post = {
    /**
     * VRM file (.vrm)
     */
    file: Blob;
    /**
     * 3Dモデラー名
     */
    modeler_name?: (string | null);
    /**
     * キャラクターデザイナー名
     */
    character_designer_name?: (string | null);
    /**
     * モデル名
     */
    model_name?: (string | null);
    /**
     * 作者
     */
    author?: (string | null);
};

/**
 * 呼吸コンテキスト補正（2パラメータ）
 */
type BreathingContextModifier = {
    /**
     * 呼吸速度の補正
     */
    breathing_rate?: (number | null);
    /**
     * 呼吸深さの補正
     */
    breathing_depth?: (number | null);
};

/**
 * 一括更新リクエスト
 */
type BulkUpsertRequest = {
    /**
     * アイテムリスト
     */
    items: Array<Record<string, any>>;
};

/**
 * 一括更新結果レスポンス
 */
type BulkUpsertResultResponse = {
    /**
     * 作成件数
     */
    created_count: number;
    /**
     * 更新件数
     */
    updated_count: number;
    /**
     * エラーリスト
     */
    errors?: Array<string>;
};

type CacheMetadataResponse = {
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * キャッシュ名
     */
    cache_name?: (string | null);
    /**
     * キャッシュトークン数
     */
    token_count: number;
    /**
     * キャッシュメッセージ数
     */
    cached_message_count: number;
    /**
     * 使用モデル名
     */
    model?: (string | null);
    /**
     * TTL（秒）
     */
    ttl_seconds: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type CacheMetadataUpsertRequest = {
    /**
     * キャッシュ名
     */
    cache_name?: (string | null);
    /**
     * キャッシュトークン数
     */
    token_count?: number;
    /**
     * キャッシュメッセージ数
     */
    cached_message_count?: number;
    /**
     * 使用モデル名
     */
    model?: (string | null);
    /**
     * TTL（秒）
     */
    ttl_seconds?: number;
};

/**
 * Abilities作成・更新リクエスト
 */
type CharacterAbilitiesRequest = {
    /**
     * 知識の深さと広さ
     */
    knowledge_levels?: (string | null);
    /**
     * 思考や知識処理に関する能力
     */
    cognitive_abilities?: (string | null);
    /**
     * 身体的な能力の水準
     */
    physical_abilities?: (string | null);
    /**
     * 実践的なスキルや技能
     */
    practical_skills?: Array<string>;
    /**
     * 具体的な得意分野
     */
    strengths?: Array<string>;
    /**
     * 具体的な苦手分野
     */
    weaknesses?: Array<string>;
};

/**
 * Abilitiesレスポンス
 */
type CharacterAbilitiesResponse = {
    /**
     * 能力の一意識別子
     */
    character_abilities_id: string;
    /**
     * 知識の深さと広さ
     */
    knowledge_levels?: (string | null);
    /**
     * 思考や知識処理に関する能力
     */
    cognitive_abilities?: (string | null);
    /**
     * 身体的な能力の水準
     */
    physical_abilities?: (string | null);
    /**
     * 実践的なスキルや技能
     */
    practical_skills?: Array<string>;
    /**
     * 具体的な得意分野
     */
    strengths?: Array<string>;
    /**
     * 具体的な苦手分野
     */
    weaknesses?: Array<string>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * アクション作成リクエスト
 */
type CharacterActionCreateRequest = {
    /**
     * 一意のID
     */
    character_action_id: string;
    /**
     * 内部名
     */
    name: string;
    /**
     * 表示名
     */
    display_name: string;
    /**
     * LLMに与える説明
     */
    description: string;
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
    /**
     * 分類
     */
    category: string;
    /**
     * レスポンス伝播制御: server/app/webhook
     */
    scope: string;
    /**
     * LLMが返すカスタムプロパティのJSONスキーマ
     */
    output_schema?: (Record<string, any> | null);
    /**
     * 親アクションID（null=トップレベル）
     */
    parent_action_id?: (string | null);
    /**
     * トップレベルのみ。custom_property名
     */
    trigger_property?: (string | null);
    /**
     * トップレベルのみ。LLMへの説明
     */
    trigger_description?: (string | null);
    /**
     * 実行に必要な権限
     */
    required_permissions?: Array<string>;
    /**
     * 実行前にユーザー確認が必要か
     */
    requires_user_consent?: boolean;
    /**
     * 提供元: platform/asset/user/marketplace
     */
    provider_type: string;
    /**
     * 提供元の識別ID
     */
    provider_id?: (string | null);
    /**
     * 使用説明書
     */
    instruction_doc?: (string | null);
};

/**
 * アクション一括作成リクエスト
 */
type CharacterActionBatchCreateRequest = {
    /**
     * 作成するアクションのリスト
     */
    items: Array<CharacterActionCreateRequest>;
};

/**
 * CharacterAction レスポンス DTO
 */
type CharacterActionResponse = {
    /**
     * 一意のID
     */
    character_action_id: string;
    /**
     * 内部名
     */
    name: string;
    /**
     * 表示名
     */
    display_name: string;
    /**
     * LLMに与える説明
     */
    description: string;
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id: (string | null);
    /**
     * 分類
     */
    category: string;
    /**
     * レスポンス伝播制御
     */
    scope: string;
    /**
     * カスタムプロパティのJSONスキーマ
     */
    output_schema: (Record<string, any> | null);
    /**
     * 親アクションID
     */
    parent_action_id: (string | null);
    /**
     * custom_property名
     */
    trigger_property: (string | null);
    /**
     * LLMへの説明
     */
    trigger_description: (string | null);
    /**
     * 実行に必要な権限
     */
    required_permissions: Array<string>;
    /**
     * 実行前にユーザー確認が必要か
     */
    requires_user_consent: boolean;
    /**
     * 提供元
     */
    provider_type: string;
    /**
     * 提供元の識別ID
     */
    provider_id: (string | null);
    /**
     * 使用説明書
     */
    instruction_doc: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * アクションリストレスポンス
 */
type CharacterActionListResponse = {
    /**
     * アクションリスト
     */
    items: Array<CharacterActionResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * アクションツリー構造レスポンス
 */
type CharacterActionTreeResponse = {
    /**
     * 一意のID
     */
    character_action_id: string;
    /**
     * 内部名
     */
    name: string;
    /**
     * 表示名
     */
    display_name: string;
    /**
     * LLMに与える説明
     */
    description: string;
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
    /**
     * 分類
     */
    category: string;
    /**
     * レスポンス伝播制御
     */
    scope: string;
    /**
     * カスタムプロパティのJSONスキーマ
     */
    output_schema?: (Record<string, any> | null);
    /**
     * 親アクションID
     */
    parent_action_id?: (string | null);
    /**
     * custom_property名
     */
    trigger_property?: (string | null);
    /**
     * LLMへの説明
     */
    trigger_description?: (string | null);
    /**
     * 実行に必要な権限
     */
    required_permissions?: Array<string>;
    /**
     * 実行前にユーザー確認が必要か
     */
    requires_user_consent?: boolean;
    /**
     * 提供元
     */
    provider_type: string;
    /**
     * 提供元の識別ID
     */
    provider_id?: (string | null);
    /**
     * 使用説明書
     */
    instruction_doc?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
    /**
     * 子アクションのツリー
     */
    children?: Array<any>;
};

/**
 * アクション更新リクエスト
 */
type CharacterActionUpdateRequest = {
    /**
     * 内部名
     */
    name?: (string | null);
    /**
     * 表示名
     */
    display_name?: (string | null);
    /**
     * LLMに与える説明
     */
    description?: (string | null);
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
    /**
     * 分類
     */
    category?: (string | null);
    /**
     * レスポンス伝播制御
     */
    scope?: (string | null);
    /**
     * LLMが返すカスタムプロパティのJSONスキーマ
     */
    output_schema?: (Record<string, any> | null);
    /**
     * 親アクションID
     */
    parent_action_id?: (string | null);
    /**
     * custom_property名
     */
    trigger_property?: (string | null);
    /**
     * LLMへの説明
     */
    trigger_description?: (string | null);
    /**
     * 実行に必要な権限
     */
    required_permissions?: (Array<string> | null);
    /**
     * 実行前にユーザー確認が必要か
     */
    requires_user_consent?: (boolean | null);
    /**
     * 提供元
     */
    provider_type?: (string | null);
    /**
     * 提供元の識別ID
     */
    provider_id?: (string | null);
    /**
     * 使用説明書
     */
    instruction_doc?: (string | null);
};

/**
 * キャラクターのAI使用申告
 */
type CharacterAiUsage = {
    /**
     * キャラ設定・性格テキストのAI使用
     */
    text?: CreationMethod;
    /**
     * ビジュアル（アバター）のAI使用
     */
    visual?: CreationMethod;
};

/**
 * 生成された能力情報（タイムスタンプなし）
 */
type GeneratedAbilitiesResponse = {
    /**
     * 知識レベル
     */
    knowledge_levels?: (string | null);
    /**
     * 思考能力
     */
    cognitive_abilities?: (string | null);
    /**
     * 身体能力
     */
    physical_abilities?: (string | null);
    /**
     * 実践的スキル
     */
    practical_skills?: Array<string>;
    /**
     * 得意なこと
     */
    strengths?: Array<string>;
    /**
     * 苦手なこと
     */
    weaknesses?: Array<string>;
};

/**
 * 重要な人物
 */
type ImportantPerson = {
    /**
     * 人物の名前
     */
    person_name: string;
    /**
     * 関係性の詳細
     */
    relationship: string;
};

/**
 * 重要な出来事
 */
type KeyEvent = {
    /**
     * イベントの名前
     */
    event_name: string;
    /**
     * イベントの詳細な内容や意義
     */
    description: string;
};

/**
 * 特別な日
 */
type SpecialDay = {
    /**
     * 記念日の名前
     */
    name: string;
    /**
     * 日付（例: 12-25, 03-14）
     */
    day?: (string | null);
    /**
     * 特別な日の説明
     */
    description: string;
};

/**
 * 生成された背景情報（タイムスタンプなし）
 */
type GeneratedBackgroundDetailsResponse = {
    /**
     * 時代・世界観
     */
    era?: (string | null);
    /**
     * 出身地
     */
    place_of_origin?: (string | null);
    /**
     * 恋愛・結婚状況
     */
    relationship_status?: (string | null);
    /**
     * 重要な出来事
     */
    key_events?: Array<KeyEvent>;
    /**
     * 重要な人物
     */
    important_people?: Array<ImportantPerson>;
    /**
     * 特別な日
     */
    special_days?: Array<SpecialDay>;
    /**
     * 心的外傷
     */
    trauma?: (string | null);
    /**
     * 秘密
     */
    secrets?: (string | null);
    /**
     * 生活状況
     */
    living_environment?: (string | null);
    /**
     * 世界内での位置付け
     */
    world_position?: (string | null);
    /**
     * 社会的生態系での役割
     */
    social_ecosystem?: (string | null);
    /**
     * 属する組織
     */
    affiliation?: (string | null);
    /**
     * 過去の概要
     */
    past?: (string | null);
    /**
     * 人生の目標
     */
    goals?: (string | null);
};

/**
 * 生成された基本情報（タイムスタンプなし）
 */
type GeneratedBasicInfoResponse = {
    /**
     * 年齢
     */
    age?: (string | null);
    /**
     * 性別
     */
    gender?: (string | null);
    /**
     * 職業または役割
     */
    occupation?: (string | null);
    /**
     * 誕生日
     */
    birthday?: (string | null);
    /**
     * 種族
     */
    species?: (string | null);
    /**
     * 一人称
     */
    default_first_person?: (string | null);
    /**
     * 二人称
     */
    default_second_person?: (string | null);
    /**
     * 状況別の一人称上書き
     */
    first_person_overrides?: Record<string, string>;
};

/**
 * 生成されたキャラクターlocale
 */
type GeneratedCharacterLocaleResponse = {
    /**
     * キャラクター名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
    /**
     * ニックネーム
     */
    nicknames?: Array<string>;
};

/**
 * 生成された日常生活情報（タイムスタンプなし）
 */
type GeneratedDailyLifeResponse = {
    /**
     * 典型的な一日の流れ
     */
    daily_routine?: (string | null);
    /**
     * 睡眠パターン
     */
    sleep_patterns?: (string | null);
    /**
     * 趣味・余暇の過ごし方
     */
    leisure_activities?: Array<string>;
    /**
     * ストレス解消法
     */
    stress_relief_methods?: Array<string>;
    /**
     * 習慣的な行動
     */
    habitual_behavior?: Array<string>;
};

/**
 * 生成された身体的特徴（タイムスタンプなし）
 */
type GeneratedPhysicalIdentityResponse = {
    /**
     * 身長
     */
    height?: (string | null);
    /**
     * 体重
     */
    weight?: (string | null);
    /**
     * 体型
     */
    body_build?: (string | null);
    /**
     * 髪型
     */
    hair_style?: (string | null);
    /**
     * 髪色
     */
    hair_color?: (string | null);
    /**
     * 目の特徴
     */
    eye_features?: (string | null);
    /**
     * 目の色
     */
    eye_color?: (string | null);
    /**
     * 肌の色
     */
    skin_tone?: (string | null);
    /**
     * 顔の特徴
     */
    facial_features?: (string | null);
    /**
     * 普段の服装
     */
    clothing_style?: (string | null);
    /**
     * アクセサリー
     */
    accessories?: (string | null);
    /**
     * 姿勢
     */
    posture?: (string | null);
    /**
     * 象徴的要素
     */
    symbolic_elements?: (string | null);
    /**
     * 外見的特徴
     */
    appearance_traits?: (string | null);
    /**
     * 表情の特徴
     */
    facial_expressions?: (string | null);
    /**
     * 声の特徴
     */
    voice_characteristics?: (string | null);
};

/**
 * 嗜好項目
 */
type PreferenceItem = {
    /**
     * 好み・嗜好の対象
     */
    item_name: string;
    /**
     * 好き・嫌いの理由
     */
    reason?: (string | null);
};

/**
 * 生成された好み情報（タイムスタンプなし）
 */
type GeneratedPreferencesResponse = {
    /**
     * 好きなもの
     */
    favorite_things?: Array<PreferenceItem>;
    /**
     * 嫌いなもの
     */
    disliked_things?: Array<PreferenceItem>;
    /**
     * 安らぎを得るもの
     */
    comfort_items?: Array<PreferenceItem>;
    /**
     * 好きな食べ物
     */
    favorite_foods?: Array<PreferenceItem>;
    /**
     * 嫌いな食べ物
     */
    disliked_foods?: Array<PreferenceItem>;
    /**
     * 好きな色
     */
    favorite_colors?: Array<PreferenceItem>;
    /**
     * 好きな場所
     */
    favorite_places?: Array<PreferenceItem>;
    /**
     * 美的嗜好
     */
    aesthetic_preferences?: (string | null);
    /**
     * 抽象的な好み
     */
    abstract_preferences?: (string | null);
    /**
     * 感覚的好み
     */
    sensory_preferences?: Array<PreferenceItem>;
    /**
     * 好きな状況
     */
    favorite_situations?: Array<PreferenceItem>;
    /**
     * 嫌いな状況
     */
    disliked_situations?: Array<PreferenceItem>;
};

/**
 * キャラクター自動パラメータ生成のレスポンス
 */
type CharacterAutoParamsResponse = {
    /**
     * 推定された性格アーキタイプ。プリセット値は GET /personality-presets/{archetype} で取得
     */
    personality_archetype: PersonalityArchetype;
    /**
     * 推定された行動パターンオーバーレイ。プリセット値は GET /personality-presets/behavioral-patterns/{pattern} で取得
     */
    behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * 推定された性別
     */
    gender: GenderType;
    /**
     * 推定された年齢層
     */
    age_group: AgeGroupType;
    /**
     * 審査・メタデータ用の詳細説明（50〜100文字程度）
     */
    content_description: string;
    /**
     * ストア・検索結果に表示する短いキャッチフレーズ（20文字程度）
     */
    display_description: string;
    /**
     * メインカラー (RGBA)
     */
    main_color: Color;
    /**
     * サブカラー (RGBA)
     */
    sub_color: Color;
    /**
     * 推奨タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 生成された基本情報
     */
    basic_info?: (GeneratedBasicInfoResponse | null);
    /**
     * 生成された背景情報
     */
    background_details?: (GeneratedBackgroundDetailsResponse | null);
    /**
     * 生成された日常生活情報
     */
    daily_life?: (GeneratedDailyLifeResponse | null);
    /**
     * 生成された好み情報
     */
    preferences?: (GeneratedPreferencesResponse | null);
    /**
     * 生成された身体的特徴
     */
    physical_identity?: (GeneratedPhysicalIdentityResponse | null);
    /**
     * 生成された能力情報
     */
    abilities?: (GeneratedAbilitiesResponse | null);
    /**
     * 生成されたキャラクター名・説明
     */
    character_locales?: (GeneratedCharacterLocaleResponse | null);
};

/**
 * BackgroundDetails作成・更新リクエスト
 */
type CharacterBackgroundDetailsRequest = {
    /**
     * 生きている時代・世界観（例: 現代日本、中世ヨーロッパ、西暦3000年）
     */
    era?: (string | null);
    /**
     * 出身地
     */
    place_of_origin?: (string | null);
    /**
     * 恋愛・結婚状況
     */
    relationship_status?: (string | null);
    /**
     * 重要な出来事のリスト
     */
    key_events?: Array<KeyEvent>;
    /**
     * 重要な人物
     */
    important_people?: Array<ImportantPerson>;
    /**
     * 特別な日
     */
    special_days?: Array<SpecialDay>;
    /**
     * 心的外傷
     */
    trauma?: (string | null);
    /**
     * 秘密
     */
    secrets?: (string | null);
    /**
     * 生活状況
     */
    living_environment?: (string | null);
    /**
     * 世界内での位置付け
     */
    world_position?: (string | null);
    /**
     * 社会的生態系での役割
     */
    social_ecosystem?: (string | null);
    /**
     * 属する組織
     */
    affiliation?: (string | null);
    /**
     * 過去の概要
     */
    past?: (string | null);
    /**
     * 人生の目標
     */
    goals?: (string | null);
};

/**
 * BackgroundDetailsレスポンス
 */
type CharacterBackgroundDetailsResponse = {
    /**
     * 背景詳細の一意識別子
     */
    character_background_details_id: string;
    /**
     * 生きている時代・世界観（例: 現代日本、中世ヨーロッパ、西暦3000年）
     */
    era?: (string | null);
    /**
     * 出身地
     */
    place_of_origin?: (string | null);
    /**
     * 恋愛・結婚状況
     */
    relationship_status?: (string | null);
    /**
     * 重要な出来事のリスト
     */
    key_events?: Array<KeyEvent>;
    /**
     * 重要な人物
     */
    important_people?: Array<ImportantPerson>;
    /**
     * 特別な日
     */
    special_days?: Array<SpecialDay>;
    /**
     * 心的外傷
     */
    trauma?: (string | null);
    /**
     * 秘密
     */
    secrets?: (string | null);
    /**
     * 生活状況
     */
    living_environment?: (string | null);
    /**
     * 世界内での位置付け
     */
    world_position?: (string | null);
    /**
     * 社会的生態系での役割
     */
    social_ecosystem?: (string | null);
    /**
     * 属する組織
     */
    affiliation?: (string | null);
    /**
     * 過去の概要
     */
    past?: (string | null);
    /**
     * 人生の目標
     */
    goals?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * BasicInfo作成・更新リクエスト
 */
type CharacterBasicInfoRequest = {
    /**
     * 年齢
     */
    age?: (string | null);
    /**
     * 性別（体の性/心の性など自由記述）
     */
    gender?: (string | null);
    /**
     * 職業または役割
     */
    occupation?: (string | null);
    /**
     * 誕生日
     */
    birthday?: (string | null);
    /**
     * 種族（人間、エルフなど）
     */
    species?: (string | null);
    /**
     * 相手不明時のデフォルト一人称
     */
    default_first_person?: (string | null);
    /**
     * 相手不明時のデフォルト二人称
     */
    default_second_person?: (string | null);
    /**
     * 状況別の一人称上書き
     */
    first_person_overrides?: Record<string, string>;
};

/**
 * BasicInfoレスポンス
 */
type CharacterBasicInfoResponse = {
    /**
     * 基本情報の一意識別子
     */
    character_basic_info_id: string;
    /**
     * 年齢
     */
    age?: (string | null);
    /**
     * 性別（体の性/心の性など自由記述）
     */
    gender?: (string | null);
    /**
     * 職業または役割
     */
    occupation?: (string | null);
    /**
     * 誕生日
     */
    birthday?: (string | null);
    /**
     * 種族
     */
    species?: (string | null);
    /**
     * 相手不明時のデフォルト一人称
     */
    default_first_person?: (string | null);
    /**
     * 相手不明時のデフォルト二人称
     */
    default_second_person?: (string | null);
    /**
     * 状況別の一人称上書き
     */
    first_person_overrides?: Record<string, string>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * BehaviorSnippet Response DTO - 明示的フィールド定義
 */
type CharacterBehaviorSnippetResponse = {
    /**
     * スニペットID
     */
    snippet_id: string;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * マッチング条件
     */
    tags: Record<string, string>;
    /**
     * このタグ条件下での話し方の傾向
     */
    speech_tendency?: (string | null);
    /**
     * 発話例
     */
    utterance_examples?: Array<string>;
    /**
     * 態度や反応方針のメモ
     */
    behavioral_notes?: Array<string>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * BehaviorSnippet一覧のレスポンススキーマ
 */
type CharacterBehaviorSnippetListResponse = {
    /**
     * スニペットリスト
     */
    items: Array<CharacterBehaviorSnippetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル（ドキュメントID）。nullの場合は最終ページ
     */
    next_cursor?: (string | null);
};

/**
 * キャラクター跳ね（喜び等）
 */
type CharacterBounceEvent = {
    /**
     * 跳ね高さ（対象サイズに対する相対値）
     */
    height: number;
    /**
     * 周波数（Hz）
     */
    frequency: number;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象キャラクターID
     */
    character_id: string;
};

/**
 * DailyLife作成・更新リクエスト
 */
type CharacterDailyLifeRequest = {
    /**
     * 典型的な一日の流れ
     */
    daily_routine?: (string | null);
    /**
     * 睡眠パターン
     */
    sleep_patterns?: (string | null);
    /**
     * 趣味や余暇の過ごし方
     */
    leisure_activities?: Array<string>;
    /**
     * ストレス解消法
     */
    stress_relief_methods?: Array<string>;
    /**
     * 繰り返し見られる行動パターン
     */
    habitual_behavior?: Array<string>;
};

/**
 * DailyLifeレスポンス
 */
type CharacterDailyLifeResponse = {
    /**
     * 日常生活の一意識別子
     */
    character_daily_life_id: string;
    /**
     * 典型的な一日の流れ
     */
    daily_routine?: (string | null);
    /**
     * 睡眠パターン
     */
    sleep_patterns?: (string | null);
    /**
     * 趣味や余暇の過ごし方
     */
    leisure_activities?: Array<string>;
    /**
     * ストレス解消法
     */
    stress_relief_methods?: Array<string>;
    /**
     * 繰り返し見られる行動パターン
     */
    habitual_behavior?: Array<string>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterEmotion 作成リクエスト
 */
type CharacterEmotionCreateRequest = {
    /**
     * 一意のID（省略時はemotion_idを使用）
     */
    character_emotion_id?: (string | null);
    /**
     * 参照するEmotionのID
     */
    emotion_id: string;
    /**
     * LLMがこの感情を選択すべき状況の説明
     */
    usage_description: string;
    /**
     * usage_descriptionのロケール
     */
    usage_description_locale?: SupportedLanguage$1;
};

/**
 * CharacterEmotion 一括作成リクエスト
 */
type CharacterEmotionBatchCreateRequest = {
    /**
     * 作成する感情設定のリスト
     */
    items: Array<CharacterEmotionCreateRequest>;
};

/**
 * キャラクター表情変更
 */
type CharacterEmotionEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * 表情ID（{emotion_id}_{number}形式）
     */
    avatar_expression_id: string;
    /**
     * トランジション時間（秒）
     */
    transition_duration?: number;
};

/**
 * CharacterEmotionのemotion_idリストレスポンス
 */
type CharacterEmotionIdsResponse = {
    /**
     * emotion_idのリスト
     */
    emotion_ids: Array<string>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * CharacterEmotion レスポンス
 */
type CharacterEmotionResponse = {
    /**
     * 一意のID
     */
    character_emotion_id: string;
    /**
     * 参照するEmotionのID
     */
    emotion_id: string;
    /**
     * LLMがこの感情を選択すべき状況の説明
     */
    usage_description: string;
    /**
     * usage_descriptionのロケール
     */
    usage_description_locale: SupportedLanguage$1;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterEmotion 一覧レスポンス
 */
type CharacterEmotionListResponse = {
    /**
     * 感情設定のリスト
     */
    items: Array<CharacterEmotionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * CharacterEmotion 更新リクエスト
 */
type CharacterEmotionUpdateRequest = {
    /**
     * LLMがこの感情を選択すべき状況の説明
     */
    usage_description?: (string | null);
    /**
     * usage_descriptionのロケール
     */
    usage_description_locale?: (SupportedLanguage$1 | null);
};

/**
 * スナップショット用のキャラクター多言語情報
 */
type CharacterLocalizedSnapshot = {
    /**
     * キャラクター名
     */
    name: string;
    /**
     * キャラクター名の読み仮名
     */
    name_reading?: (string | null);
    /**
     * 愛称・ニックネームリスト
     */
    nicknames?: Array<string>;
    /**
     * コンテンツの詳細説明
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明
     */
    display_description?: (string | null);
};

/**
 * 感情パラメータの設定値（VAD各軸の設定）
 *
 * キャラクターの感情傾向を定義する静的パラメータ。
 *
 * Attributes:
 * default: 基準値。刺激がない時に戻る値（-1.0〜1.0）
 * positive_sensitivity: ポジティブ方向への感度（0.0以上、1.0が基準）
 * negative_sensitivity: ネガティブ方向への感度（0.0以上、1.0が基準）
 * positive_half_life_seconds: ポジティブ側からデフォルトに戻る半減期（秒）
 * negative_half_life_seconds: ネガティブ側からデフォルトに戻る半減期（秒）
 */
type ParamConfig = {
    /**
     * 基準値（刺激がない時に戻る値）
     */
    default?: number;
    /**
     * ポジティブ方向への感度
     */
    positive_sensitivity?: number;
    /**
     * ネガティブ方向への感度
     */
    negative_sensitivity?: number;
    /**
     * ポジティブ側からデフォルトに戻る半減期（秒）。デフォルト1時間
     */
    positive_half_life_seconds?: number;
    /**
     * ネガティブ側からデフォルトに戻る半減期（秒）。デフォルト1時間
     */
    negative_half_life_seconds?: number;
};

/**
 * 感情パラメータ（VAD値）
 *
 * キャラクターの感情傾向を定義する静的パラメータ。
 * 複数のエンティティ（Avatar, Character）で共通して使用される。
 *
 * VAD (Valence-Arousal-Dominance) モデル:
 * - valence: 感情価（快-不快）
 * - arousal: 覚醒度（高-低）
 * - dominance: 支配性（支配的-従順）
 *
 * 気分システムパラメータ:
 * - emotion_history_size: emotion_centerが保持する履歴数
 * - mood_follow_rate: moodがemotion_centerに追従する基本係数
 */
type EmotionalParams = {
    /**
     * Valence（感情価）の設定
     */
    valence?: ParamConfig;
    /**
     * Arousal（覚醒度）の設定
     */
    arousal?: ParamConfig;
    /**
     * Dominance（支配性）の設定
     */
    dominance?: ParamConfig;
    /**
     * emotion_centerが保持する履歴数。多いほど気分が安定する
     */
    emotion_history_size?: number;
    /**
     * moodがemotion_centerに追従する基本係数。大きいほど変化が速い
     */
    mood_follow_rate?: number;
};

/**
 * Promote時のCharacterトップレベルフィールド全てのスナップショット
 */
type CharacterEntitySnapshot = {
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type?: OwnerType;
    /**
     * ボイスID
     */
    voice_id?: (string | null);
    /**
     * アバターID
     */
    avatar_id?: (string | null);
    /**
     * 設定ID
     */
    settings_id?: (string | null);
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * 正方形アイコンの画像アセットID
     */
    icon_square_image_asset_id?: (string | null);
    /**
     * 正方形アイコンの画像アセットバージョンID
     */
    icon_square_image_asset_version_id?: (string | null);
    /**
     * 長方形アイコンの画像アセットID
     */
    icon_rectangle_image_asset_id?: (string | null);
    /**
     * 長方形アイコンの画像アセットバージョンID
     */
    icon_rectangle_image_asset_version_id?: (string | null);
    /**
     * 性別
     */
    gender?: GenderType;
    age_group?: AgeGroupType;
    /**
     * 性格アーキタイプ
     */
    personality_archetype?: (PersonalityArchetype | null);
    /**
     * 行動パターンオーバーレイ
     */
    behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, CharacterLocalizedSnapshot>;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * コンテンツゾーニング
     */
    zoning?: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions?: UsageRestrictions;
    /**
     * AI使用申告
     */
    ai_usage?: CharacterAiUsage;
    /**
     * 利用可能なモデルタイプ
     */
    available_model_types?: Array<ModelType>;
    /**
     * 所属グループIDリスト
     */
    group_ids?: Array<string>;
    /**
     * 感情パラメータ
     */
    emotional_params?: EmotionalParams;
    /**
     * メインカラー
     */
    main_color?: Color;
    /**
     * サブカラー
     */
    sub_color?: Color;
    /**
     * データソース
     */
    data_source?: DataSource;
    review_status?: ReviewStatus;
    /**
     * 複製元のキャラクターID
     */
    origin_character_id?: (string | null);
    /**
     * 最新公開テンプレートID
     */
    latest_template_id?: (string | null);
    /**
     * フォーク元テンプレートID
     */
    forked_from_template_id?: (string | null);
    /**
     * 作成日時
     */
    created_at?: string;
    /**
     * 更新日時
     */
    updated_at?: string;
};

/**
 * 装備アイテムの種別
 */
type EquipmentItemType = 'outfit' | 'accessory' | 'hair_style';

/**
 * 装備追加リクエスト
 */
type CharacterEquipmentCreateRequest = {
    /**
     * 対象アバターID
     */
    avatar_id: string;
    /**
     * AvatarItemAttachment参照
     */
    attachment_id: string;
    item_type: EquipmentItemType;
    /**
     * 衣装ID
     */
    outfit_id?: (string | null);
    /**
     * アクセサリーID
     */
    accessory_id?: (string | null);
    /**
     * 髪型ID
     */
    hair_style_id?: (string | null);
    /**
     * カテゴリ値
     */
    item_category?: (string | null);
    /**
     * 占有スロット
     */
    occupied_slots?: (Array<BodySlot> | null);
};

/**
 * CharacterEquipment Response DTO
 */
type CharacterEquipmentResponse = {
    /**
     * 装備エントリID
     */
    equipment_id: string;
    /**
     * 対象アバターID
     */
    avatar_id: string;
    /**
     * AvatarItemAttachment参照
     */
    attachment_id: string;
    item_type: EquipmentItemType;
    /**
     * 衣装ID
     */
    outfit_id?: (string | null);
    /**
     * アクセサリーID
     */
    accessory_id?: (string | null);
    /**
     * 髪型ID
     */
    hair_style_id?: (string | null);
    /**
     * カテゴリ値
     */
    item_category?: (string | null);
    /**
     * 占有スロット
     */
    occupied_slots?: Array<BodySlot>;
    /**
     * 着用中かどうか
     */
    is_visible: boolean;
    /**
     * 装着日時
     */
    equipped_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterEquipment一覧レスポンス
 */
type CharacterEquipmentListResponse = {
    /**
     * 装備リスト
     */
    items: Array<CharacterEquipmentResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * 装備更新リクエスト
 */
type CharacterEquipmentUpdateRequest = {
    /**
     * 着用中かどうか
     */
    is_visible?: (boolean | null);
    /**
     * 占有スロット
     */
    occupied_slots?: (Array<BodySlot> | null);
};

/**
 * キャラクターの表示フレーミング
 */
type CharacterFraming = 'full' | 'upper' | 'face';

/**
 * キャラクターフレーミング変更（全身/上半身/顔アップ切り替え）
 */
type CharacterFramingChangeEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * 表示フレーミング
     */
    framing: CharacterFraming;
    /**
     * トランジション時間（秒）
     */
    transition_duration?: number;
};

/**
 * キャラクター非表示
 */
type CharacterHideEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * キャラクターID
     */
    character_id: string;
    transition?: TransitionType;
    /**
     * トランジション時間（秒）
     */
    transition_duration?: number;
};

/**
 * キャラクターハイライト（注目等）
 */
type CharacterHighlightEvent = {
    /**
     * ハイライト色
     */
    color?: string;
    /**
     * ハイライト強度
     */
    alpha?: number;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象キャラクターID
     */
    character_id: string;
};

type CharacterInstanceCreateRequest = {
    /**
     * キャラクターテンプレートID
     */
    character_template_id: string;
    /**
     * アクセスタイプ
     */
    access_type?: InstanceAccessType;
};

type CharacterInstanceResponse = {
    /**
     * インスタンスID
     */
    instance_id: string;
    /**
     * ユーザーID
     */
    user_id: string;
    /**
     * キャラクターテンプレートID
     */
    character_template_id: string;
    /**
     * 元エンティティID
     */
    source_entity_id: string;
    /**
     * アクセスタイプ
     */
    access_type: InstanceAccessType;
    /**
     * 利用可能な更新テンプレートID
     */
    available_update_template_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type CharacterInstanceListResponse = {
    /**
     * インスタンスリスト
     */
    items: Array<CharacterInstanceResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

/**
 * CharacterInventory 作成リクエスト
 */
type CharacterInventoryCreateRequest = {
    /**
     * 一意のID
     */
    inventory_id: string;
    /**
     * 所有キャラクターID
     */
    character_id: string;
    /**
     * Entitlement起源の場合のID
     */
    entitlement_id?: (string | null);
    /**
     * 入手元: entitlement/default/admin_grant/manual
     */
    source: string;
    /**
     * アセット参照
     */
    asset_id?: (string | null);
    /**
     * アイテム種別
     */
    item_category: string;
    /**
     * キャラクターが付けた名前
     */
    display_name: string;
    /**
     * キャラクターが書いた説明
     */
    description: string;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * 保管場所ID（null=四次元ポケット）
     */
    location_id?: (string | null);
    /**
     * 今アクセス可能か
     */
    accessible?: boolean;
    /**
     * アイテムの簡潔な説明（100文字以内）
     */
    brief_description: string;
    /**
     * このアイテムが提供するCharacterActionのIDリスト
     */
    character_action_ids?: Array<string>;
};

/**
 * CharacterInventory レスポンス
 */
type CharacterInventoryResponse = {
    /**
     * 一意のID
     */
    inventory_id: string;
    /**
     * 所有キャラクターID
     */
    character_id: string;
    /**
     * Entitlement起源の場合のID
     */
    entitlement_id: (string | null);
    /**
     * 入手元
     */
    source: string;
    /**
     * アセット参照
     */
    asset_id: (string | null);
    /**
     * アイテム種別
     */
    item_category: string;
    /**
     * キャラクターが付けた名前
     */
    display_name: string;
    /**
     * キャラクターが書いた説明
     */
    description: string;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id: (string | null);
    /**
     * 保管場所ID
     */
    location_id: (string | null);
    /**
     * 今アクセス可能か
     */
    accessible: boolean;
    /**
     * アイテムの簡潔な説明（100文字以内）
     */
    brief_description: string;
    /**
     * CharacterActionのIDリスト
     */
    character_action_ids: Array<string>;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterInventory 一覧レスポンス
 */
type CharacterInventoryListResponse = {
    /**
     * 所持品のリスト
     */
    items: Array<CharacterInventoryResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * CharacterInventory 更新リクエスト
 */
type CharacterInventoryUpdateRequest = {
    /**
     * Entitlement起源の場合のID
     */
    entitlement_id?: (string | null);
    /**
     * 入手元
     */
    source?: (string | null);
    /**
     * アセット参照
     */
    asset_id?: (string | null);
    /**
     * アイテム種別
     */
    item_category?: (string | null);
    /**
     * キャラクターが付けた名前
     */
    display_name?: (string | null);
    /**
     * キャラクターが書いた説明
     */
    description?: (string | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * 保管場所ID
     */
    location_id?: (string | null);
    /**
     * 今アクセス可能か
     */
    accessible?: (boolean | null);
    /**
     * アイテムの簡潔な説明（100文字以内）
     */
    brief_description?: (string | null);
    /**
     * このアイテムが提供するCharacterActionのIDリスト
     */
    character_action_ids?: (Array<string> | null);
};

/**
 * キャラクターの多言語情報
 */
type CharacterLocalized = {
    /**
     * キャラクター名
     */
    name: string;
    /**
     * キャラクター名の読み仮名
     */
    name_reading?: (string | null);
    /**
     * 愛称・ニックネームリスト
     */
    nicknames?: Array<string>;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: (string | null);
};

/**
 * Character Response DTO - 明示的フィールド定義
 */
type CharacterResponse = {
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * ボイスID
     */
    voice_id?: (string | null);
    /**
     * アバターID
     */
    avatar_id?: (string | null);
    /**
     * 設定ID
     */
    settings_id?: (string | null);
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * 正方形アイコンの画像アセットID
     */
    icon_square_image_asset_id?: (string | null);
    /**
     * 正方形アイコンの画像アセットバージョンID
     */
    icon_square_image_asset_version_id?: (string | null);
    /**
     * 長方形アイコンの画像アセットID
     */
    icon_rectangle_image_asset_id?: (string | null);
    /**
     * 長方形アイコンの画像アセットバージョンID
     */
    icon_rectangle_image_asset_version_id?: (string | null);
    /**
     * 性別
     */
    gender: GenderType;
    age_group: AgeGroupType;
    /**
     * 性格アーキタイプ
     */
    personality_archetype?: (PersonalityArchetype | null);
    /**
     * 行動パターンオーバーレイ
     */
    behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, CharacterLocalized>;
    /**
     * タグIDとレベルのリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * AI使用申告（カテゴリ別）
     */
    ai_usage?: CharacterAiUsage;
    /**
     * 利用可能なモデルタイプ
     */
    available_model_types?: Array<ModelType>;
    /**
     * 感情パラメータ
     */
    emotional_params: EmotionalParams;
    /**
     * メインカラー
     */
    main_color: Color;
    /**
     * サブカラー
     */
    sub_color: Color;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * 複製元のキャラクターID
     */
    origin_character_id?: (string | null);
    /**
     * 最新公開テンプレートID
     */
    latest_template_id?: (string | null);
    /**
     * フォーク元テンプレートID
     */
    forked_from_template_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Character一覧のレスポンススキーマ
 */
type CharacterListResponse = {
    /**
     * キャラクターリスト
     */
    items: Array<CharacterResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル（ドキュメントID）。nullの場合は最終ページ
     */
    next_cursor?: (string | null);
};

/**
 * CharacterMotion 作成リクエスト
 */
type CharacterMotionCreateRequest = {
    /**
     * 一意のID（省略時はmotion_idを使用）
     */
    character_motion_id?: (string | null);
    /**
     * 参照するMotionのID
     */
    motion_id: string;
    /**
     * LLMがこのモーションを選択すべき状況の説明
     */
    usage_description: string;
    /**
     * usage_descriptionのロケール
     */
    usage_description_locale?: SupportedLanguage$1;
};

/**
 * CharacterMotion 一括作成リクエスト
 */
type CharacterMotionBatchCreateRequest = {
    /**
     * 作成するモーション設定のリスト
     */
    items: Array<CharacterMotionCreateRequest>;
};

/**
 * キャラクターモーション変更
 */
type CharacterMotionEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * モーションID
     */
    avatar_motion_id: string;
};

/**
 * CharacterMotionのmotion_idリストレスポンス
 */
type CharacterMotionIdsResponse = {
    /**
     * motion_idのリスト
     */
    motion_ids: Array<string>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * CharacterMotion レスポンス
 */
type CharacterMotionResponse = {
    /**
     * 一意のID
     */
    character_motion_id: string;
    /**
     * 参照するMotionのID
     */
    motion_id: string;
    /**
     * LLMがこのモーションを選択すべき状況の説明
     */
    usage_description: string;
    /**
     * usage_descriptionのロケール
     */
    usage_description_locale: SupportedLanguage$1;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterMotion 一覧レスポンス
 */
type CharacterMotionListResponse = {
    /**
     * モーション設定のリスト
     */
    items: Array<CharacterMotionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * CharacterMotion 更新リクエスト
 */
type CharacterMotionUpdateRequest = {
    /**
     * LLMがこのモーションを選択すべき状況の説明
     */
    usage_description?: (string | null);
    /**
     * usage_descriptionのロケール
     */
    usage_description_locale?: (SupportedLanguage$1 | null);
};

/**
 * まばたきプリセットパラメータ（8値）
 */
type PresetBlinkParams = {
    /**
     * 瞬き間の最小間隔（秒）
     */
    min_blink_interval: number;
    /**
     * ガンマ分布の形状パラメータ（k）
     */
    gamma_shape_parameter: number;
    /**
     * ガンマ分布のスケールパラメータ（θ）
     */
    gamma_scale_parameter: number;
    /**
     * バースト瞬き時の平均間隔（秒）
     */
    burst_mean_interval: number;
    /**
     * バースト瞬きが発生する確率
     */
    burst_probability: number;
    /**
     * 目を閉じるのにかかる時間（秒）
     */
    close_duration: number;
    /**
     * 目を閉じた状態を維持する時間（秒）
     */
    closed_duration: number;
    /**
     * 目を開けるのにかかる時間（秒）
     */
    open_duration: number;
};

/**
 * 呼吸プリセットパラメータ（2値）
 */
type PresetBreathingParams = {
    /**
     * 呼吸速度（1秒あたりの呼吸回数）
     */
    breathing_rate: number;
    /**
     * 呼吸の深さ（0.0-1.0、1.0で最大）
     */
    breathing_depth: number;
};

/**
 * 会話タイミングプリセットパラメータ（5値、D15）
 */
type PresetConversationTimingParams = {
    /**
     * 最短応答遅延（秒）
     */
    min_response_delay: number;
    /**
     * 応答遅延のばらつき（秒）
     */
    response_delay_variance: number;
    /**
     * 発話検討開始の沈黙閾値（秒）
     */
    initiation_onset: number;
    /**
     * 発話確率の上昇速度（/秒）
     */
    initiation_buildup_rate: number;
    /**
     * ピーク後の確率減衰（/秒、0=減衰なし）
     */
    initiation_decay_rate: number;
};

/**
 * 表情表示プリセットパラメータ（4値）
 */
type PresetExpressionParams = {
    /**
     * 表情の強度倍率（BlendShape weight乗数。1.0=アバター設計通り）
     */
    expression_intensity_scale: number;
    /**
     * フェードイン速度倍率（>1.0=ゆっくり出る、<1.0=素早く出る）
     */
    expression_fade_in_scale: number;
    /**
     * フェードアウト速度倍率（>1.0=ゆっくり消える、<1.0=素早く消える）
     */
    expression_fade_out_scale: number;
    /**
     * 保持時間倍率（>1.0=長く表情を維持、<1.0=短く）
     */
    expression_hold_scale: number;
};

/**
 * ジェスチャー（ボディモーション）プリセットパラメータ（3値、D16: base値のみ）
 */
type PresetGestureParams = {
    /**
     * ジェスチャー再生速度倍率（>1.0=キビキビ、<1.0=ゆったり）
     */
    gesture_playback_speed_scale: number;
    /**
     * モーションフェードイン倍率（>1.0=ゆっくりブレンドイン、<1.0=素早く）
     */
    gesture_fade_in_scale: number;
    /**
     * モーションフェードアウト倍率（>1.0=ゆっくりブレンドアウト、<1.0=素早く）
     */
    gesture_fade_out_scale: number;
};

/**
 * リップシンクプリセットパラメータ（1値、D17: base値のみ）
 */
type PresetLipSyncParams = {
    /**
     * リップシンク強度倍率（>1.0=大きく口を動かす、<1.0=控えめ）
     */
    lipsync_intensity_scale: number;
};

/**
 * 視線プリセットパラメータ（10値）
 */
type PresetLookAtParams = {
    /**
     * アイコンタクトを開始する確率
     */
    eye_contact_probability: number;
    /**
     * アイコンタクト最小継続時間（秒）
     */
    min_eye_contact_duration: number;
    /**
     * アイコンタクト最大継続時間（秒）
     */
    max_eye_contact_duration: number;
    /**
     * アイコンタクト中に突然逸らす確率
     */
    gaze_aversion_tendency: number;
    /**
     * 視線外し最小時間（秒）
     */
    min_gaze_away_duration: number;
    /**
     * 視線外し最大時間（秒）
     */
    max_gaze_away_duration: number;
    /**
     * 視線移動の速さ（秒）
     */
    gaze_shift_duration: number;
    /**
     * 視線の安定度
     */
    gaze_stability: number;
    /**
     * 視線外し時の垂直傾向
     */
    gaze_away_vertical_bias: number;
    /**
     * 相互視線への反応
     */
    mutual_gaze_tendency: number;
};

/**
 * モーションタイミングプリセットパラメータ（4値、D14）
 */
type PresetMotionTimingParams = {
    /**
     * 通常idleのランダムモーション頻度倍率
     */
    idle_random_motion_interval_scale: number;
    /**
     * 聞いてる時のランダムモーション頻度倍率
     */
    listening_random_motion_interval_scale: number;
    /**
     * 話し中のランダムモーション頻度倍率
     */
    speaking_random_motion_interval_scale: number;
    /**
     * 考え中のランダムモーション頻度倍率
     */
    thinking_random_motion_interval_scale: number;
};

/**
 * CharacterPersonalityParams 作成リクエスト
 */
type CharacterPersonalityParamsCreateRequest = {
    /**
     * アーキタイプまたは行動パターンのenum値
     */
    key: string;
    /**
     * 偏差増幅倍率
     */
    intensity?: number;
    /**
     * 感情パラメータoverride
     */
    emotional_params?: (EmotionalParams | null);
    /**
     * 視線パラメータoverride
     */
    lookat?: (PresetLookAtParams | null);
    /**
     * まばたきパラメータoverride
     */
    blink?: (PresetBlinkParams | null);
    /**
     * 呼吸パラメータoverride
     */
    breathing?: (PresetBreathingParams | null);
    /**
     * モーションタイミングoverride
     */
    motion_timing?: (PresetMotionTimingParams | null);
    /**
     * 会話タイミングoverride
     */
    conversation_timing?: (PresetConversationTimingParams | null);
    /**
     * 表情パラメータoverride
     */
    expression?: (PresetExpressionParams | null);
    /**
     * ジェスチャーパラメータoverride
     */
    gesture?: (PresetGestureParams | null);
    /**
     * リップシンクパラメータoverride
     */
    lipsync?: (PresetLipSyncParams | null);
    /**
     * Layer 1 感度override
     */
    sensitivity?: (ArchetypeSensitivity | null);
};

/**
 * CharacterPersonalityParams レスポンス
 */
type CharacterPersonalityParamsResponse = {
    /**
     * アーキタイプまたは行動パターンのenum値
     */
    key: string;
    /**
     * 偏差増幅倍率
     */
    intensity: number;
    /**
     * 感情パラメータoverride
     */
    emotional_params: (EmotionalParams | null);
    /**
     * 視線パラメータoverride
     */
    lookat: (PresetLookAtParams | null);
    /**
     * まばたきパラメータoverride
     */
    blink: (PresetBlinkParams | null);
    /**
     * 呼吸パラメータoverride
     */
    breathing: (PresetBreathingParams | null);
    /**
     * モーションタイミングoverride
     */
    motion_timing: (PresetMotionTimingParams | null);
    /**
     * 会話タイミングoverride
     */
    conversation_timing: (PresetConversationTimingParams | null);
    /**
     * 表情パラメータoverride
     */
    expression: (PresetExpressionParams | null);
    /**
     * ジェスチャーパラメータoverride
     */
    gesture: (PresetGestureParams | null);
    /**
     * リップシンクパラメータoverride
     */
    lipsync: (PresetLipSyncParams | null);
    /**
     * Layer 1 感度override
     */
    sensitivity: (ArchetypeSensitivity | null);
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterPersonalityParams 一覧レスポンス
 */
type CharacterPersonalityParamsListResponse = {
    /**
     * パーソナリティパラメータのリスト
     */
    items: Array<CharacterPersonalityParamsResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * CharacterPersonalityParams 更新リクエスト（PATCH用）
 */
type CharacterPersonalityParamsUpdateRequest = {
    /**
     * 偏差増幅倍率
     */
    intensity?: (number | null);
    /**
     * 感情パラメータoverride
     */
    emotional_params?: (EmotionalParams | null);
    /**
     * 視線パラメータoverride
     */
    lookat?: (PresetLookAtParams | null);
    /**
     * まばたきパラメータoverride
     */
    blink?: (PresetBlinkParams | null);
    /**
     * 呼吸パラメータoverride
     */
    breathing?: (PresetBreathingParams | null);
    /**
     * モーションタイミングoverride
     */
    motion_timing?: (PresetMotionTimingParams | null);
    /**
     * 会話タイミングoverride
     */
    conversation_timing?: (PresetConversationTimingParams | null);
    /**
     * 表情パラメータoverride
     */
    expression?: (PresetExpressionParams | null);
    /**
     * ジェスチャーパラメータoverride
     */
    gesture?: (PresetGestureParams | null);
    /**
     * リップシンクパラメータoverride
     */
    lipsync?: (PresetLipSyncParams | null);
    /**
     * Layer 1 感度override
     */
    sensitivity?: (ArchetypeSensitivity | null);
};

/**
 * PhysicalIdentity作成・更新リクエスト
 */
type CharacterPhysicalIdentityRequest = {
    /**
     * 身長
     */
    height?: (string | null);
    /**
     * 体重
     */
    weight?: (string | null);
    /**
     * 体型（痩せ型、筋肉質など）
     */
    body_build?: (string | null);
    /**
     * 髪型・髪の毛特徴
     */
    hair_style?: (string | null);
    /**
     * 髪色
     */
    hair_color?: (string | null);
    /**
     * 目の特徴
     */
    eye_features?: (string | null);
    /**
     * 目の色
     */
    eye_color?: (string | null);
    /**
     * 肌の色や質感
     */
    skin_tone?: (string | null);
    /**
     * 顔の特徴（顔の形、鼻や口など）
     */
    facial_features?: (string | null);
    /**
     * 着ている服装
     */
    clothing_style?: (string | null);
    /**
     * 常に身につけている装飾品やアクセサリー
     */
    accessories?: (string | null);
    /**
     * 姿勢や立ち振る舞い
     */
    posture?: (string | null);
    /**
     * 象徴的要素
     */
    symbolic_elements?: (string | null);
    /**
     * その他の外見的特徴
     */
    appearance_traits?: (string | null);
    /**
     * 表情の特徴
     */
    facial_expressions?: (string | null);
    /**
     * 声の特徴
     */
    voice_characteristics?: (string | null);
};

/**
 * PhysicalIdentityレスポンス
 */
type CharacterPhysicalIdentityResponse = {
    /**
     * 身体的自認の一意識別子
     */
    character_physical_identity_id: string;
    /**
     * 身長
     */
    height?: (string | null);
    /**
     * 体重
     */
    weight?: (string | null);
    /**
     * 体型（痩せ型、筋肉質など）
     */
    body_build?: (string | null);
    /**
     * 髪型・髪の毛特徴
     */
    hair_style?: (string | null);
    /**
     * 髪色
     */
    hair_color?: (string | null);
    /**
     * 目の特徴
     */
    eye_features?: (string | null);
    /**
     * 目の色
     */
    eye_color?: (string | null);
    /**
     * 肌の色や質感
     */
    skin_tone?: (string | null);
    /**
     * 顔の特徴（顔の形、鼻や口など）
     */
    facial_features?: (string | null);
    /**
     * 着ている服装
     */
    clothing_style?: (string | null);
    /**
     * 常に身につけている装飾品やアクセサリー
     */
    accessories?: (string | null);
    /**
     * 姿勢や立ち振る舞い
     */
    posture?: (string | null);
    /**
     * 象徴的要素
     */
    symbolic_elements?: (string | null);
    /**
     * その他の外見的特徴
     */
    appearance_traits?: (string | null);
    /**
     * 表情の特徴
     */
    facial_expressions?: (string | null);
    /**
     * 声の特徴
     */
    voice_characteristics?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Preferences作成・更新リクエスト
 */
type CharacterPreferencesRequest = {
    /**
     * 好きなもの
     */
    favorite_things?: Array<PreferenceItem>;
    /**
     * 嫌い、苦手なもの
     */
    disliked_things?: Array<PreferenceItem>;
    /**
     * 心の安らぎを得るもの
     */
    comfort_items?: Array<PreferenceItem>;
    /**
     * 好きな食べ物
     */
    favorite_foods?: Array<PreferenceItem>;
    /**
     * 嫌いな食べ物
     */
    disliked_foods?: Array<PreferenceItem>;
    /**
     * 好きな色
     */
    favorite_colors?: Array<PreferenceItem>;
    /**
     * 好きな場所
     */
    favorite_places?: Array<PreferenceItem>;
    /**
     * 美的嗜好
     */
    aesthetic_preferences?: (string | null);
    /**
     * 抽象的な好み
     */
    abstract_preferences?: (string | null);
    /**
     * 感覚的好み
     */
    sensory_preferences?: Array<PreferenceItem>;
    /**
     * 好きなシチュエーション
     */
    favorite_situations?: Array<PreferenceItem>;
    /**
     * 嫌いなシチュエーション
     */
    disliked_situations?: Array<PreferenceItem>;
    /**
     * 季節の好み
     */
    seasonal_preferences?: Array<PreferenceItem>;
    /**
     * 音楽の好み
     */
    music_preferences?: Array<PreferenceItem>;
    /**
     * メディア嗜好
     */
    media_preferences?: Array<PreferenceItem>;
    /**
     * 贈り物の好み
     */
    gift_preferences?: Array<PreferenceItem>;
    /**
     * 天気の好み
     */
    weather_preferences?: Array<PreferenceItem>;
    /**
     * 動物/ペットの好み
     */
    animal_preferences?: Array<PreferenceItem>;
};

/**
 * Preferencesレスポンス
 */
type CharacterPreferencesResponse = {
    /**
     * 嗜好性の一意識別子
     */
    character_preferences_id: string;
    /**
     * 好きなもの
     */
    favorite_things?: Array<PreferenceItem>;
    /**
     * 嫌い、苦手なもの
     */
    disliked_things?: Array<PreferenceItem>;
    /**
     * 心の安らぎを得るもの
     */
    comfort_items?: Array<PreferenceItem>;
    /**
     * 好きな食べ物
     */
    favorite_foods?: Array<PreferenceItem>;
    /**
     * 嫌いな食べ物
     */
    disliked_foods?: Array<PreferenceItem>;
    /**
     * 好きな色
     */
    favorite_colors?: Array<PreferenceItem>;
    /**
     * 好きな場所
     */
    favorite_places?: Array<PreferenceItem>;
    /**
     * 美的嗜好
     */
    aesthetic_preferences?: (string | null);
    /**
     * 抽象的な好み
     */
    abstract_preferences?: (string | null);
    /**
     * 感覚的好み
     */
    sensory_preferences?: Array<PreferenceItem>;
    /**
     * 好きなシチュエーション
     */
    favorite_situations?: Array<PreferenceItem>;
    /**
     * 嫌いなシチュエーション
     */
    disliked_situations?: Array<PreferenceItem>;
    /**
     * 季節の好み
     */
    seasonal_preferences?: Array<PreferenceItem>;
    /**
     * 音楽の好み
     */
    music_preferences?: Array<PreferenceItem>;
    /**
     * メディア嗜好
     */
    media_preferences?: Array<PreferenceItem>;
    /**
     * 贈り物の好み
     */
    gift_preferences?: Array<PreferenceItem>;
    /**
     * 天気の好み
     */
    weather_preferences?: Array<PreferenceItem>;
    /**
     * 動物/ペットの好み
     */
    animal_preferences?: Array<PreferenceItem>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterRelationshipのローカライズ情報
 */
type CharacterRelationshipLocalized = {
    /**
     * この相手との会話でのデフォルト一人称
     */
    first_person: string;
    /**
     * 状況別の一人称上書き（キー: situation, audience_scale等）
     */
    first_person_overrides?: Record<string, string>;
    /**
     * この相手へのデフォルト呼び方
     */
    second_person: string;
    /**
     * 状況別の二人称上書き
     */
    second_person_overrides?: Record<string, string>;
    /**
     * 相手からの普段の呼ばれ方
     */
    called_by?: (string | null);
};

/**
 * 参加者の種別（会話相手、グループメンバー等で共通利用）
 */
type ParticipantType = 'user' | 'character';

/**
 * 関係性ロール（相手がキャラにとって何か）
 *
 * 複数ロールを同時に持てる（例: 先輩の恋人 → [SENPAI, LOVER]）。
 * CharacterRelationship.roles: List[RelationshipRole] で保持。
 */
type RelationshipRole = 'stranger' | 'acquaintance' | 'friend' | 'close_friend' | 'best_friend' | 'childhood_friend' | 'roommate' | 'neighbor' | 'classmate' | 'senpai' | 'kouhai' | 'teammate' | 'same_year' | 'colleague' | 'superior' | 'subordinate' | 'client' | 'customer' | 'business_partner' | 'mentor' | 'student' | 'master' | 'servant' | 'benefactor' | 'crush' | 'romantic_interest' | 'lover' | 'fiance' | 'spouse' | 'ex_lover' | 'love_rival' | 'father' | 'mother' | 'son' | 'daughter' | 'grandfather' | 'grandmother' | 'grandchild' | 'older_brother' | 'younger_brother' | 'older_sister' | 'younger_sister' | 'uncle' | 'aunt' | 'cousin' | 'guardian' | 'ward' | 'rival' | 'enemy' | 'former_enemy' | 'fan' | 'oshi' | 'comrade';

/**
 * CharacterRelationship作成リクエスト
 */
type CharacterRelationshipCreateRequest = {
    /**
     * 会話相手の種別（user/character）
     */
    conversant_type: ParticipantType;
    /**
     * 会話相手のID
     */
    conversant_id: string;
    /**
     * 関係性ロールのリスト（例: [senpai, lover]）
     */
    roles?: Array<RelationshipRole>;
    /**
     * デフォルトのロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * ロケール別のローカライズ情報
     */
    locales: Record<string, CharacterRelationshipLocalized>;
    /**
     * 常に使うスニペットID
     */
    pinned_snippet_ids?: Array<string>;
};

/**
 * CharacterRelationship Response DTO - 明示的フィールド定義
 */
type CharacterRelationshipResponse = {
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * 会話相手の種類
     */
    conversant_type: ParticipantType;
    /**
     * 会話相手のID
     */
    conversant_id: string;
    /**
     * 関係性ロールのリスト（複数ロール可）
     */
    roles?: Array<RelationshipRole>;
    /**
     * デフォルトのロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別のローカライズ情報
     */
    locales?: Record<string, CharacterRelationshipLocalized>;
    /**
     * 固定スニペットIDリスト
     */
    pinned_snippet_ids?: Array<string>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterRelationship一覧のレスポンススキーマ
 */
type CharacterRelationshipListResponse = {
    /**
     * 関係性リスト
     */
    items: Array<CharacterRelationshipResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル（ドキュメントID）。nullの場合は最終ページ
     */
    next_cursor?: (string | null);
};

/**
 * CharacterRelationship更新リクエスト（PATCH用）
 */
type CharacterRelationshipUpdateRequest = {
    /**
     * 関係性ロールのリスト
     */
    roles?: (Array<RelationshipRole> | null);
    /**
     * デフォルトのロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * ロケール別のローカライズ情報
     */
    locales?: (Record<string, CharacterRelationshipLocalized> | null);
    /**
     * 常に使うスニペットID
     */
    pinned_snippet_ids?: (Array<string> | null);
};

/**
 * リセット可能なキャラクター/画像エフェクトタイプ
 */
type ResettableVisualEffectType = 'shake' | 'bounce' | 'scale_pulse' | 'highlight' | 'silhouette' | 'spin';

/**
 * キャラクターエフェクトのリセット（永続化されたエフェクトを停止）
 */
type CharacterResetEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象キャラクターID
     */
    character_id: string;
    /**
     * リセットするエフェクトタイプ。Noneで全てリセット
     */
    effect_types?: (Array<ResettableVisualEffectType> | null);
};

/**
 * キャラクター拡大縮小（強調等）
 */
type CharacterScalePulseEvent = {
    /**
     * 最小スケール
     */
    scale_min?: number;
    /**
     * 最大スケール
     */
    scale_max?: number;
    /**
     * 周波数（Hz）
     */
    frequency: number;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象キャラクターID
     */
    character_id: string;
};

/**
 * 今この瞬間の状況（動的コンテキスト）。
 */
type CharacterSceneDetails = {
    /**
     * 場所（例: 自宅, 会社, カフェ, 電車）
     */
    location?: (string | null);
    /**
     * 時間のヒント（例: 朝, 昼, 夜, 深夜）
     */
    time_hint?: (string | null);
    /**
     * 活動（例: 作業中, 会議中, 休憩中, 移動中）
     */
    activity?: (string | null);
    /**
     * 制約（例: 声を出せない, 時間がない, 手が離せない）
     */
    constraint?: (string | null);
    /**
     * 5W1Hの短い要約
     */
    summary?: (string | null);
    /**
     * 作成日時
     */
    created_at?: string;
    /**
     * 更新日時
     */
    updated_at?: string;
};

/**
 * CharacterSceneDetails作成リクエスト
 */
type CharacterSceneDetailsCreateRequest = {
    /**
     * 場所
     */
    location?: (string | null);
    /**
     * 時間帯
     */
    time_hint?: (string | null);
    /**
     * 活動
     */
    activity?: (string | null);
    /**
     * 制約
     */
    constraint?: (string | null);
    /**
     * 5W1Hの短い要約
     */
    summary?: (string | null);
};

/**
 * CharacterSceneDetails Response DTO - 明示的フィールド定義
 */
type CharacterSceneDetailsResponse = {
    /**
     * 場所
     */
    location?: (string | null);
    /**
     * 時間のヒント
     */
    time_hint?: (string | null);
    /**
     * 活動
     */
    activity?: (string | null);
    /**
     * 制約
     */
    constraint?: (string | null);
    /**
     * 5W1Hの短い要約
     */
    summary?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterSceneDetails更新リクエスト（PATCH用）
 */
type CharacterSceneDetailsUpdateRequest = {
    /**
     * 場所
     */
    location?: (string | null);
    /**
     * 時間帯
     */
    time_hint?: (string | null);
    /**
     * 活動
     */
    activity?: (string | null);
    /**
     * 制約
     */
    constraint?: (string | null);
    /**
     * 5W1Hの短い要約
     */
    summary?: (string | null);
};

/**
 * キャラクター振動（驚き、怒り等）
 */
type CharacterShakeEvent = {
    /**
     * 振幅（対象サイズに対する相対値）
     */
    amplitude: number;
    /**
     * 周波数（Hz）
     */
    frequency: number;
    /**
     * 継続時間（秒）、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象キャラクターID
     */
    character_id: string;
};

/**
 * キャラクター表示
 */
type CharacterShowEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * 表情ID（{emotion_id}_{number}形式）
     */
    avatar_expression_id?: (string | null);
    /**
     * X位置（0=左端, 1=右端）
     */
    position_x?: number;
    /**
     * 表示フレーミング
     */
    framing?: CharacterFraming;
    transition?: TransitionType;
    /**
     * トランジション時間（秒）
     */
    transition_duration?: number;
};

/**
 * キャラクターシルエット化（謎の人物等）
 */
type CharacterSilhouetteEvent = {
    /**
     * シルエット色
     */
    color?: string;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象キャラクターID
     */
    character_id: string;
};

/**
 * キャラクター回転
 */
type CharacterSpinEvent = {
    /**
     * 回転速度（回転/秒）
     */
    speed?: number;
    /**
     * 時計回りか
     */
    clockwise?: boolean;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象キャラクターID
     */
    character_id: string;
};

/**
 * 画像跳ね
 */
type ImageBounceEvent = {
    /**
     * 跳ね高さ（対象サイズに対する相対値）
     */
    height: number;
    /**
     * 周波数（Hz）
     */
    frequency: number;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象画像アセットID
     */
    image_asset_id: string;
    /**
     * 対象画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
};

/**
 * 画像ハイライト
 */
type ImageHighlightEvent = {
    /**
     * ハイライト色
     */
    color?: string;
    /**
     * ハイライト強度
     */
    alpha?: number;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象画像アセットID
     */
    image_asset_id: string;
    /**
     * 対象画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
};

/**
 * 画像エフェクトのリセット（永続化されたエフェクトを停止）
 */
type ImageResetEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象画像アセットID
     */
    image_asset_id: string;
    /**
     * 対象画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
    /**
     * リセットするエフェクトタイプ。Noneで全てリセット
     */
    effect_types?: (Array<ResettableVisualEffectType> | null);
};

/**
 * 画像拡大縮小
 */
type ImageScalePulseEvent = {
    /**
     * 最小スケール
     */
    scale_min?: number;
    /**
     * 最大スケール
     */
    scale_max?: number;
    /**
     * 周波数（Hz）
     */
    frequency: number;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象画像アセットID
     */
    image_asset_id: string;
    /**
     * 対象画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
};

/**
 * 画像振動
 */
type ImageShakeEvent = {
    /**
     * 振幅（対象サイズに対する相対値）
     */
    amplitude: number;
    /**
     * 周波数（Hz）
     */
    frequency: number;
    /**
     * 継続時間（秒）、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象画像アセットID
     */
    image_asset_id: string;
    /**
     * 対象画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
};

/**
 * 画像シルエット化
 */
type ImageSilhouetteEvent = {
    /**
     * シルエット色
     */
    color?: string;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象画像アセットID
     */
    image_asset_id: string;
    /**
     * 対象画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
};

/**
 * 画像回転
 */
type ImageSpinEvent = {
    /**
     * 回転速度（回転/秒）
     */
    speed?: number;
    /**
     * 時計回りか
     */
    clockwise?: boolean;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 対象画像アセットID
     */
    image_asset_id: string;
    /**
     * 対象画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
};

/**
 * 画面ぼかし
 */
type ScreenBlurEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * ぼかし強度（0-1）
     */
    strength: number;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
};

/**
 * 画面カラー調整（乗算式）
 *
 * 各チャンネル 0-2 の乗数（1.0がデフォルト）
 * 0.0 = そのチャンネルなし、2.0 = 2倍の明るさ
 * duration=None で永続、指定で自動リセット（1,1,1に戻る）
 */
type ScreenColorAdjustEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 赤チャンネル乗数
     */
    'r'?: number;
    /**
     * 緑チャンネル乗数
     */
    'g'?: number;
    /**
     * 青チャンネル乗数
     */
    'b'?: number;
    /**
     * 継続時間、Noneは永続
     */
    duration?: (number | null);
};

/**
 * 画面フェードイン（黒/白からの復帰）
 *
 * 数式:
 * - overlay_alpha = 1 - clamp01(t / duration)
 * - t >= duration で終了（overlay消滅）
 */
type ScreenFadeInEvent = {
    /**
     * オーバーレイ色
     */
    color?: string;
    /**
     * 継続時間（秒）、0なら即時
     */
    duration: number;
    /**
     * イベントタイプ
     */
    event_type?: string;
};

/**
 * 画面フェードアウト（黒/白への遷移）
 *
 * 数式:
 * - overlay_alpha = clamp01(t / duration)
 * - t >= duration で終了（overlay完全不透明）
 */
type ScreenFadeOutEvent = {
    /**
     * オーバーレイ色
     */
    color?: string;
    /**
     * 継続時間（秒）、0なら即時
     */
    duration: number;
    /**
     * イベントタイプ
     */
    event_type?: string;
};

/**
 * 画面フラッシュ
 */
type ScreenFlashEvent = {
    /**
     * フラッシュ色（#RRGGBB）
     */
    color?: string;
    /**
     * 最大不透明度
     */
    alpha?: number;
    /**
     * 継続時間（秒）
     */
    duration: number;
    /**
     * イベントタイプ
     */
    event_type?: string;
};

/**
 * リセット可能な画面エフェクトタイプ（duration=Noneで永続化可能なもの）
 */
type ResettableScreenEffectType = 'shake' | 'blur' | 'color_adjust';

/**
 * 画面エフェクトのリセット（永続化されたエフェクトを停止）
 */
type ScreenResetEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * リセットするエフェクトタイプ。Noneで全てリセット
     */
    effect_types?: (Array<ResettableScreenEffectType> | null);
};

/**
 * 画面振動
 */
type ScreenShakeEvent = {
    /**
     * 振幅（対象サイズに対する相対値）
     */
    amplitude: number;
    /**
     * 周波数（Hz）
     */
    frequency: number;
    /**
     * 継続時間（秒）、Noneは永続
     */
    duration?: (number | null);
    /**
     * イベントタイプ
     */
    event_type?: string;
};

/**
 * 効果音再生
 */
type SePlayEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 音声アセットID
     */
    audio_asset_id: string;
    /**
     * 音声アセットバージョンID
     */
    audio_asset_version_id?: (string | null);
    /**
     * 音量
     */
    volume?: number;
};

/**
 * 発話モード
 */
type SpeechMode = 'normal' | 'thinking' | 'whisper';

/**
 * 発話モード変更（心の声、ささやき等）
 */
type SpeechModeChangeEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    mode: SpeechMode;
};

/**
 * キャラクターのセリフ
 *
 * text内に [e:N] マーカーを埋め込み、その位置でembedded_events[N]を発火。
 * テキストタグ（[shake], [color]等）は文字レベル演出でこことは別。
 */
type CharacterSpeakEvent_Input = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * セリフテキスト（多言語、テキストタグ含む）
     */
    text?: Record<string, string>;
    /**
     * 埋め込みイベント（[e:N]で参照）
     */
    embedded_events?: Array<(CharacterEmotionEvent | CharacterMotionEvent | CharacterShakeEvent | CharacterBounceEvent | CharacterScalePulseEvent | CharacterHighlightEvent | CharacterSilhouetteEvent | CharacterSpinEvent | CharacterResetEvent | ImageShakeEvent | ImageBounceEvent | ImageScalePulseEvent | ImageHighlightEvent | ImageSilhouetteEvent | ImageSpinEvent | ImageResetEvent | ScreenShakeEvent | ScreenFlashEvent | ScreenFadeInEvent | ScreenFadeOutEvent | ScreenBlurEvent | ScreenColorAdjustEvent | ScreenResetEvent | SePlayEvent | SpeechModeChangeEvent)>;
};

/**
 * キャラクターのセリフ
 *
 * text内に [e:N] マーカーを埋め込み、その位置でembedded_events[N]を発火。
 * テキストタグ（[shake], [color]等）は文字レベル演出でこことは別。
 */
type CharacterSpeakEvent_Output = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * セリフテキスト（多言語、テキストタグ含む）
     */
    text?: Record<string, string>;
    /**
     * 埋め込みイベント（[e:N]で参照）
     */
    embedded_events?: Array<(CharacterEmotionEvent | CharacterMotionEvent | CharacterShakeEvent | CharacterBounceEvent | CharacterScalePulseEvent | CharacterHighlightEvent | CharacterSilhouetteEvent | CharacterSpinEvent | CharacterResetEvent | ImageShakeEvent | ImageBounceEvent | ImageScalePulseEvent | ImageHighlightEvent | ImageSilhouetteEvent | ImageSpinEvent | ImageResetEvent | ScreenShakeEvent | ScreenFlashEvent | ScreenFadeInEvent | ScreenFadeOutEvent | ScreenBlurEvent | ScreenColorAdjustEvent | ScreenResetEvent | SePlayEvent | SpeechModeChangeEvent)>;
};

/**
 * 各ターン（発話）の行為ラベル：観測可能な「何をしたか」。
 * - 口調/悪意/親しみ 等の"雰囲気"は他key（関係性・感情・状況・スタンス）側で表現する前提。
 * - ここは「その発話が果たした機能」を有限個で持つ。
 */
type DialogueAct = 'inform' | 'ask' | 'request' | 'offer' | 'accept' | 'suggest' | 'confirm' | 'clarify' | 'summarize' | 'transition' | 'agree' | 'disagree' | 'challenge' | 'refuse' | 'warn' | 'set_rule' | 'set_boundary' | 'greet' | 'backchannel' | 'close' | 'thank' | 'apologize' | 'compliment' | 'congratulate' | 'empathize' | 'comfort' | 'encourage' | 'reassure' | 'joke' | 'tease';

/**
 * 力関係（RelationshipRoleから導出される上下関係）
 *
 * モディファイアの補正キーとして使用。
 * EQUAL が基準点（オフセット0）。
 */
type PowerDynamic = 'submissive' | 'equal' | 'dominant';

/**
 * 状況（外部環境・制約・リスクの種類）
 * value(キャラの振る舞い)に大きい変化が起きやすいものを中心に定義。
 */
type Situation = 'casual' | 'work' | 'meeting' | 'interview' | 'presentation' | 'customer_support' | 'trouble' | 'emergency' | 'safety_risk' | 'health' | 'mental_health' | 'legal' | 'finance' | 'privacy' | 'conflict' | 'negotiation' | 'teaching' | 'learning' | 'brainstorm' | 'creative' | 'roleplay';

/**
 * 状況カテゴリ（Situation を3カテゴリに抽象化）
 *
 * プリセットのコンテキスト補正キーとして使用。
 * CASUAL が基準点（オフセット0）。
 * 感情的状態（気遣い・高揚・緊張感等）は emotion_id → VAD → 非言語で反映。
 * SituationCategory は感情とは独立した「社会規範・環境制約」のみを扱う。
 */
type SituationCategory = 'casual' | 'formal' | 'urgent';

/**
 * 1ターンで変動し得る状態。
 * スニペット選択の条件として使用される。
 * 感情（emotion_ids）はMoodStateで管理するため、ここには含めない。
 *
 * 関係性コンテキスト（affinity_level, power_dynamic, bond_type）は
 * CharacterRelationship.roles から RELATIONSHIP_ROLE_TO_CONTEXT で導出される。
 */
type CharacterTurnState = {
    /**
     * 好意レベル
     */
    affinity_level?: AffinityLevel;
    /**
     * 力関係
     */
    power_dynamic?: PowerDynamic;
    /**
     * 絆の種類
     */
    bond_type?: BondType;
    /**
     * オーディエンス規模
     */
    audience_scale?: AudienceScale;
    /**
     * 状況カテゴリ
     */
    situation_category?: SituationCategory;
    /**
     * 状況リスト（細粒度）
     */
    situations?: Array<Situation>;
    /**
     * 対話行為リスト
     */
    dialogue_acts?: Array<DialogueAct>;
    /**
     * 更新日時
     */
    updated_at?: string;
};

/**
 * キャラクターの全状態レスポンス
 */
type CharacterStateResponse = {
    /**
     * シーン詳細
     */
    scene_details?: (CharacterSceneDetails | null);
    /**
     * ターン状態
     */
    turn_state?: (CharacterTurnState | null);
};

/**
 * キャラクターテンプレートの多言語情報
 */
type CharacterTemplateLocalized = {
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明
     */
    description?: string;
};

type CharacterTemplateResponse = {
    /**
     * テンプレートID
     */
    template_id: string;
    /**
     * 元エンティティID
     */
    source_entity_id: string;
    /**
     * バージョン番号
     */
    version_number: number;
    /**
     * 変更履歴
     */
    changelog?: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * 改変ポリシー
     */
    modification_policy: ModificationPolicy;
    /**
     * 改変元テンプレートID
     */
    origin_template_id?: (string | null);
    /**
     * 多言語情報
     */
    locales?: Record<string, CharacterTemplateLocalized>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * Entityの全トップレベルデータ
     */
    snapshot: CharacterEntitySnapshot;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type CharacterTemplateListResponse = {
    /**
     * テンプレートリスト
     */
    items: Array<CharacterTemplateResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type CharacterTemplatePromoteRequest = {
    /**
     * 元キャラクターID
     */
    source_character_id: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 変更履歴
     */
    changelog?: string;
    /**
     * 改変ポリシー
     */
    modification_policy?: ModificationPolicy;
    /**
     * 多言語情報JSON
     */
    locales_json?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * タグリストJSON
     */
    tags_json?: (string | null);
};

type CharacterTemplateUpdateRequest = {
    /**
     * 改変ポリシー
     */
    modification_policy?: (ModificationPolicy | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, CharacterTemplateLocalized> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
};

/**
 * CharacterTurnState作成リクエスト
 */
type CharacterTurnStateCreateRequest = {
    /**
     * 好意レベル
     */
    affinity_level?: AffinityLevel;
    /**
     * 力関係
     */
    power_dynamic?: PowerDynamic;
    /**
     * 絆の種類
     */
    bond_type?: BondType;
    /**
     * 会話人数
     */
    audience_scale?: AudienceScale;
    /**
     * 状況カテゴリ
     */
    situation_category?: SituationCategory;
    /**
     * 状況（細粒度）
     */
    situations?: Array<Situation>;
    /**
     * 発話行為
     */
    dialogue_acts?: Array<DialogueAct>;
};

/**
 * CharacterTurnState Response DTO - 明示的フィールド定義
 */
type CharacterTurnStateResponse = {
    /**
     * 好意レベル
     */
    affinity_level: AffinityLevel;
    /**
     * 力関係
     */
    power_dynamic: PowerDynamic;
    /**
     * 絆の種類
     */
    bond_type: BondType;
    /**
     * オーディエンス規模
     */
    audience_scale: AudienceScale;
    /**
     * 状況カテゴリ
     */
    situation_category: SituationCategory;
    /**
     * 状況リスト（細粒度）
     */
    situations?: Array<Situation>;
    /**
     * 対話行為リスト
     */
    dialogue_acts?: Array<DialogueAct>;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * CharacterTurnState更新リクエスト（PATCH用）
 */
type CharacterTurnStateUpdateRequest = {
    /**
     * 好意レベル
     */
    affinity_level?: (AffinityLevel | null);
    /**
     * 力関係
     */
    power_dynamic?: (PowerDynamic | null);
    /**
     * 絆の種類
     */
    bond_type?: (BondType | null);
    /**
     * 会話人数
     */
    audience_scale?: (AudienceScale | null);
    /**
     * 状況カテゴリ
     */
    situation_category?: (SituationCategory | null);
    /**
     * 状況（細粒度）
     */
    situations?: (Array<Situation> | null);
    /**
     * 発話行為
     */
    dialogue_acts?: (Array<DialogueAct> | null);
};

/**
 * ListingBundle内の子Bundle参照
 */
type ChildBundle = {
    /**
     * 子ListingBundleID
     */
    listing_bundle_id: string;
    /**
     * avatar, voice等の役割
     */
    role: string;
    /**
     * 必須フラグ
     */
    required?: boolean;
};

/**
 * 選択肢オプション
 */
type ChoiceOption_Input = {
    /**
     * 選択肢テキスト（多言語）
     */
    text?: Record<string, string>;
    /**
     * 遷移先シーンID
     */
    target_scene_id: string;
    /**
     * この選択肢が表示される条件
     */
    condition?: (ConditionGroup_Input | null);
    /**
     * 選択時に適用する効果
     */
    effects?: Array<Effect>;
};

/**
 * 選択肢オプション
 */
type ChoiceOption_Output = {
    /**
     * 選択肢テキスト（多言語）
     */
    text?: Record<string, string>;
    /**
     * 遷移先シーンID
     */
    target_scene_id: string;
    /**
     * この選択肢が表示される条件
     */
    condition?: (ConditionGroup_Output | null);
    /**
     * 選択時に適用する効果
     */
    effects?: Array<Effect>;
};

/**
 * コレクションのドキュメント数レスポンス
 */
type CollectionCountResponse = {
    /**
     * コレクションパス
     */
    collection_path: string;
    /**
     * ドキュメント数
     */
    count: number;
};

type FieldStatsEntry = {
    /**
     * フィールド名
     */
    field: string;
    /**
     * フィールドが存在するドキュメント数
     */
    present: number;
    /**
     * フィールドが存在しないドキュメント数
     */
    missing: number;
    /**
     * 値のサンプル（最大5件）
     */
    sample_values?: Array<any>;
};

type CollectionDetailResponse = {
    /**
     * コレクション短縮名
     */
    name: string;
    /**
     * Firestoreコレクションパス
     */
    path: string;
    /**
     * ドキュメント数
     */
    count: number;
    /**
     * 全ドキュメントに出現するフィールド名（和集合）
     */
    all_fields?: Array<string>;
    /**
     * 指定フィールドの存在率
     */
    field_stats?: Array<FieldStatsEntry>;
};

/**
 * ドキュメントの概要
 */
type DocumentSummary = {
    /**
     * ドキュメントID
     */
    id: string;
    /**
     * 選択されたフィールド
     */
    fields?: Record<string, any>;
};

/**
 * コレクションのドキュメント一覧レスポンス
 */
type CollectionListResponse = {
    /**
     * コレクションパス
     */
    collection_path: string;
    /**
     * ドキュメント一覧
     */
    documents?: Array<DocumentSummary>;
    /**
     * 取得したドキュメント数
     */
    total: number;
    /**
     * さらにドキュメントがあるか
     */
    has_more?: boolean;
};

type CollectionStats = {
    /**
     * コレクション短縮名
     */
    name: string;
    /**
     * Firestoreコレクションパス
     */
    path: string;
    /**
     * ドキュメント数
     */
    count: number;
    /**
     * 先頭ドキュメントのフィールド名一覧
     */
    sample_fields?: Array<string>;
};

/**
 * TagCompatibility Response DTO - 明示的フィールド定義
 */
type TagCompatibilityResponse = {
    /**
     * カテゴリID（左）
     */
    left_tag_category_id: string;
    /**
     * タグID（左）
     */
    left_tag_id: string;
    /**
     * カテゴリID（右）
     */
    right_tag_category_id: string;
    /**
     * タグID（右）
     */
    right_tag_id: string;
    /**
     * 相性スコア
     */
    score: number;
    /**
     * 信頼度
     */
    confidence?: (number | null);
    /**
     * バッチID
     */
    batch_id?: (string | null);
    /**
     * 由来
     */
    source: string;
    /**
     * 値の根拠・説明
     */
    reason: string;
    /**
     * 使用モデル識別子
     */
    model?: (string | null);
    /**
     * プロンプトバージョン
     */
    prompt?: (string | null);
    /**
     * ペアキー
     */
    pair_key: string;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * 作成時刻
     */
    created_at: string;
    /**
     * 更新時刻
     */
    updated_at: string;
};

/**
 * カーソルベースの相性リストレスポンス
 */
type CompatibilityListCursorResponse = {
    /**
     * 相性リスト
     */
    items: Array<TagCompatibilityResponse>;
    /**
     * このページの取得件数
     */
    count: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * ListingBundle内のListingコンポーネント
 */
type ComponentListing = {
    /**
     * ListingID
     */
    listing_id: string;
    /**
     * vrm_main, motion_idle等の役割
     */
    role: string;
    /**
     * 必須フラグ
     */
    required?: boolean;
};

/**
 * 審査根拠リクエスト
 */
type EvidenceRequest = {
    /**
     * 参照キー
     */
    ref: string;
    /**
     * 短い抜粋/要約
     */
    excerpt: string;
};

/**
 * カテゴリごとの判断説明リクエスト
 */
type ContentAssessmentRequest = {
    /**
     * 判断理由（1〜3文）
     */
    rationale: string;
    /**
     * 根拠リスト（最大3件）
     */
    evidence?: Array<EvidenceRequest>;
};

/**
 * 審査根拠レスポンス
 */
type EvidenceResponse = {
    /**
     * 参照キー
     */
    ref: string;
    /**
     * 短い抜粋/要約
     */
    excerpt: string;
};

/**
 * カテゴリごとの判断説明レスポンス
 */
type ContentAssessmentResponse = {
    /**
     * 判断理由
     */
    rationale: string;
    /**
     * 根拠リスト
     */
    evidence?: Array<EvidenceResponse>;
};

/**
 * 会話タイミングコンテキスト補正（5パラメータ、D15）
 */
type ConversationTimingContextModifier = {
    /**
     * 最短応答遅延の補正
     */
    min_response_delay?: (number | null);
    /**
     * 応答遅延ばらつきの補正
     */
    response_delay_variance?: (number | null);
    /**
     * 発話開始閾値の補正
     */
    initiation_onset?: (number | null);
    /**
     * 発話確率上昇速度の補正
     */
    initiation_buildup_rate?: (number | null);
    /**
     * 発話確率減衰速度の補正
     */
    initiation_decay_rate?: (number | null);
};

/**
 * 表情コンテキスト補正（4パラメータ）
 */
type ExpressionContextModifier = {
    /**
     * 表情強度倍率の補正
     */
    expression_intensity_scale?: (number | null);
    /**
     * フェードイン速度倍率の補正
     */
    expression_fade_in_scale?: (number | null);
    /**
     * フェードアウト速度倍率の補正
     */
    expression_fade_out_scale?: (number | null);
    /**
     * 保持時間倍率の補正
     */
    expression_hold_scale?: (number | null);
};

/**
 * 視線コンテキスト補正（9パラメータ、gaze_away_vertical_bias除外: D19）
 */
type LookAtContextModifier = {
    /**
     * アイコンタクト確率の補正
     */
    eye_contact_probability?: (number | null);
    /**
     * アイコンタクト最小継続時間の補正
     */
    min_eye_contact_duration?: (number | null);
    /**
     * アイコンタクト最大継続時間の補正
     */
    max_eye_contact_duration?: (number | null);
    /**
     * 視線逸らし傾向の補正
     */
    gaze_aversion_tendency?: (number | null);
    /**
     * 視線外し最小時間の補正
     */
    min_gaze_away_duration?: (number | null);
    /**
     * 視線外し最大時間の補正
     */
    max_gaze_away_duration?: (number | null);
    /**
     * 視線移動速さの補正
     */
    gaze_shift_duration?: (number | null);
    /**
     * 視線安定度の補正
     */
    gaze_stability?: (number | null);
    /**
     * 相互視線反応の補正
     */
    mutual_gaze_tendency?: (number | null);
};

/**
 * モーションタイミングコンテキスト補正（4パラメータ、D14）
 */
type MotionTimingContextModifier = {
    /**
     * idle頻度倍率の補正
     */
    idle_random_motion_interval_scale?: (number | null);
    /**
     * listening頻度倍率の補正
     */
    listening_random_motion_interval_scale?: (number | null);
    /**
     * speaking頻度倍率の補正
     */
    speaking_random_motion_interval_scale?: (number | null);
    /**
     * thinking頻度倍率の補正
     */
    thinking_random_motion_interval_scale?: (number | null);
};

/**
 * 1つのコンテキスト値に対する全グループ補正セット
 */
type ContextModifierSet = {
    lookat?: LookAtContextModifier;
    blink?: BlinkContextModifier;
    breathing?: BreathingContextModifier;
    expression?: ExpressionContextModifier;
    motion_timing?: MotionTimingContextModifier;
    conversation_timing?: ConversationTimingContextModifier;
};

/**
 * Converter Serviceからのコールバックペイロード
 */
type ConversionCallbackPayload = {
    /**
     * GLBアセットID
     */
    asset_id: string;
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * 変換成功フラグ
     */
    success: boolean;
    /**
     * 変換後GLBファイルのStorageパス
     */
    storage_path?: (string | null);
    /**
     * 変換後GLBファイルのハッシュ
     */
    content_hash?: (string | null);
    /**
     * 変換後GLBファイルサイズ（バイト）
     */
    file_size?: (number | null);
    /**
     * 変換失敗時のエラーメッセージ
     */
    conversion_error?: (string | null);
    /**
     * 変換結果メタデータ
     */
    conversion_metadata?: (Record<string, any> | null);
};

/**
 * 3D変換結果メタデータ（Converter Service が書き込む）
 */
type ConversionMetadata = {
    /**
     * 頂点数
     */
    vertex_count?: (number | null);
    /**
     * マテリアル数
     */
    material_count?: (number | null);
    /**
     * アニメーション数
     */
    animation_count?: (number | null);
    /**
     * アニメーション名リスト
     */
    animation_names?: Array<string>;
    /**
     * スケルトン（ボーン）の有無
     */
    has_skeleton?: boolean;
    /**
     * ブレンドシェイプの有無
     */
    has_blend_shapes?: boolean;
    /**
     * 変換時の警告メッセージ
     */
    warnings?: Array<string>;
};

/**
 * 3Dモデル変換ステータス
 */
type ConversionStatus = 'completed' | 'processing' | 'failed';

/**
 * コスト計算リクエスト
 */
type CostCalculationRequest = {
    provider: string;
    model_id: string;
    input_tokens: number;
    output_tokens: number;
    cached_input_tokens?: number;
    is_batch?: boolean;
    image_count?: number;
};

/**
 * コスト計算レスポンス
 */
type CostCalculationResponse = {
    provider: string;
    model_id: string;
    input_tokens: number;
    output_tokens: number;
    cached_input_tokens: number;
    is_batch: boolean;
    image_count: number;
    cost_usd: number;
    cost_jpy: number;
};

/**
 * 国コード（ISO 3166-1 alpha-2）
 */
type Country = 'JP' | 'KR' | 'CN' | 'TW' | 'HK' | 'MO' | 'MN' | 'TH' | 'VN' | 'PH' | 'ID' | 'MY' | 'SG' | 'MM' | 'KH' | 'LA' | 'BN' | 'TL' | 'IN' | 'BD' | 'PK' | 'LK' | 'NP' | 'KZ' | 'UZ' | 'TR' | 'SA' | 'AE' | 'IL' | 'QA' | 'KW' | 'BH' | 'OM' | 'JO' | 'LB' | 'IQ' | 'IR' | 'US' | 'CA' | 'MX' | 'BR' | 'AR' | 'CL' | 'CO' | 'PE' | 'VE' | 'EC' | 'UY' | 'PY' | 'BO' | 'CR' | 'PA' | 'CU' | 'DO' | 'GT' | 'PR' | 'JM' | 'TT' | 'GB' | 'DE' | 'FR' | 'IT' | 'ES' | 'PT' | 'NL' | 'BE' | 'LU' | 'AT' | 'CH' | 'IE' | 'SE' | 'NO' | 'DK' | 'FI' | 'IS' | 'PL' | 'CZ' | 'HU' | 'RO' | 'BG' | 'UA' | 'SK' | 'HR' | 'RS' | 'SI' | 'LT' | 'LV' | 'EE' | 'GR' | 'MT' | 'CY' | 'RU' | 'BY' | 'GE' | 'AM' | 'AZ' | 'MD' | 'AU' | 'NZ' | 'FJ' | 'PG' | 'ZA' | 'NG' | 'KE' | 'EG' | 'MA' | 'GH' | 'TZ' | 'ET' | 'DZ' | 'TN' | 'SN' | 'CI' | 'CM' | 'UG' | 'RW';

/**
 * アセットバリアントリンク作成リクエスト
 */
type CreateAssetVariantLinkRequest = {
    /**
     * アセットID 1
     */
    asset_id_1: string;
    /**
     * アセット1のタイプ
     */
    asset_type_1: AssetType;
    /**
     * アセットID 2
     */
    asset_id_2: string;
    /**
     * アセット2のタイプ
     */
    asset_type_2: AssetType;
};

/**
 * テキストから感情作成のリクエストスキーマ
 */
type CreateFromTextRequest = {
    /**
     * 感情名
     */
    emotion_name: string;
    /**
     * 説明
     */
    description?: (string | null);
    /**
     * ロケール
     */
    locale: SupportedLanguage$1;
    /**
     * VAD値（指定時はLLM推定をスキップ）
     */
    vad?: (app__api__schemas__emotion__VADSchema | null);
};

/**
 * 感情のローカライズ情報
 */
type EmotionLocalized = {
    /**
     * 感情の名前
     */
    name: string;
    /**
     * 同義語・エイリアスのリスト
     */
    synonyms?: Array<string>;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 感情・状態の説明（ストア表示用）
     */
    display_description: string;
    /**
     * 表現の説明（どのように表現されるか）
     */
    expression_description: string;
};

/**
 * VAD（Valence-Arousal-Dominance）モデル
 * 感情を3次元空間で表現するモデル
 */
type VAD = {
    /**
     * Valence（感情価）: -1（不快）から1（快）
     */
    'v': number;
    /**
     * Arousal（覚醒度）: -1（低覚醒）から1（高覚醒）
     */
    'a': number;
    /**
     * Dominance（支配性）: -1（支配される）から1（支配的）
     */
    'd': number;
};

/**
 * Emotion Response DTO - 明示的フィールド定義
 */
type EmotionResponse = {
    /**
     * 感情の一意識別子
     */
    emotion_id: string;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * VAD（Valence-Arousal-Dominance）値
     */
    vad: VAD;
    /**
     * データソース（公式/コミュニティ）
     */
    data_source: DataSource;
    /**
     * コンテンツゾーニング
     */
    zoning?: ContentZoning;
    review_status?: ReviewStatus;
    /**
     * デフォルトのロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別のローカライズ情報
     */
    locales?: Record<string, EmotionLocalized>;
    /**
     * 作成者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * テキストから感情作成のレスポンススキーマ
 */
type CreateFromTextResponse = {
    /**
     * 作成された感情
     */
    emotion: EmotionResponse;
    /**
     * LLMを使用したか
     */
    used_llm: boolean;
};

type CreatorLinkRequest = {
    /**
     * リンクURL
     */
    url: string;
    /**
     * 表示ラベル（空ならフロントがドメインから自動判定）
     */
    label?: string;
};

type CreatorLocalizedRequest = {
    /**
     * 表示名
     */
    display_name: string;
    /**
     * 自己紹介
     */
    bio?: string;
};

/**
 * クリエイター種別
 */
type CreatorType = 'user' | 'group';

type CreatorCreateRequest = {
    creator_type: CreatorType;
    /**
     * 紐付くユーザーID（creator_type=USERの場合必須）
     */
    user_id?: (string | null);
    /**
     * 紐付くグループID（creator_type=GROUPの場合必須）
     */
    group_id?: (string | null);
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * ロケール別のローカライズ情報
     */
    locales?: (Record<string, CreatorLocalizedRequest> | null);
    /**
     * 外部リンク一覧
     */
    links?: (Array<CreatorLinkRequest> | null);
};

type CreatorLinkResponse = {
    /**
     * リンクURL
     */
    url: string;
    /**
     * 表示ラベル
     */
    label: string;
};

type CreatorLocalizedResponse = {
    /**
     * 表示名
     */
    display_name: string;
    /**
     * 自己紹介
     */
    bio: string;
};

type CreatorResponse = {
    /**
     * クリエイターID
     */
    creator_id: string;
    creator_type: CreatorType;
    /**
     * 紐付くユーザーID
     */
    user_id?: (string | null);
    /**
     * 紐付くグループID
     */
    group_id?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別のローカライズ情報
     */
    locales: Record<string, CreatorLocalizedResponse>;
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
    /**
     * アイコン画像アセットバージョンID
     */
    icon_image_asset_version_id?: (string | null);
    /**
     * 外部リンク一覧
     */
    links: Array<CreatorLinkResponse>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type CreatorUpdateRequest = {
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * ロケール別のローカライズ情報
     */
    locales?: (Record<string, CreatorLocalizedRequest> | null);
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
    /**
     * アイコン画像アセットバージョンID
     */
    icon_image_asset_version_id?: (string | null);
    /**
     * 外部リンク一覧
     */
    links?: (Array<CreatorLinkRequest> | null);
};

type DbOverviewResponse = {
    /**
     * コレクション数
     */
    total_collections: number;
    /**
     * 全ドキュメント合計数
     */
    total_documents: number;
    /**
     * 各コレクションの統計
     */
    collections?: Array<CollectionStats>;
};

/**
 * 検出された顔のレスポンス（confidence付き）
 */
type DetectedFaceResponse = {
    /**
     * 顔中心X（画像幅に対する比率）
     */
    center_x: number;
    /**
     * 顔中心Y（画像高さに対する比率）
     */
    center_y: number;
    /**
     * 顔幅（画像幅に対する比率）
     */
    width: number;
    /**
     * 顔高さ（画像高さに対する比率）
     */
    height: number;
    /**
     * 検出信頼度
     */
    confidence: number;
};

/**
 * 検出されたキーポイントのレスポンス
 */
type DetectedKeypointResponse = {
    /**
     * キーポイント名（OpenPose形式）
     */
    name: string;
    /**
     * X座標（正規化: 0.0-1.0）
     */
    'x': number;
    /**
     * Y座標（正規化: 0.0-1.0）
     */
    'y': number;
    /**
     * 検出信頼度
     */
    confidence: number;
};

/**
 * 検出されたポーズのレスポンス（人物ごと）
 */
type DetectedPoseResponse = {
    /**
     * ボディキーポイント（OpenPose 18点）
     */
    body_keypoints?: Array<DetectedKeypointResponse>;
    /**
     * 左手キーポイント（21点）
     */
    left_hand_keypoints?: Array<DetectedKeypointResponse>;
    /**
     * 右手キーポイント（21点）
     */
    right_hand_keypoints?: Array<DetectedKeypointResponse>;
};

type DistributionBundleCreateRequest = {
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * DistributionIDリスト
     */
    distribution_ids?: Array<string>;
    /**
     * 多言語情報JSON
     */
    locales_json?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
};

/**
 * DistributionBundleの多言語情報
 */
type DistributionBundleLocalized = {
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明
     */
    description?: string;
};

type DistributionBundleResponse = {
    /**
     * DistributionBundleID
     */
    distribution_bundle_id: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * DistributionIDリスト
     */
    distribution_ids?: Array<string>;
    /**
     * 多言語情報
     */
    locales?: Record<string, DistributionBundleLocalized>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type DistributionBundleListResponse = {
    /**
     * DistributionBundleリスト
     */
    items: Array<DistributionBundleResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type DistributionBundleUpdateRequest = {
    /**
     * DistributionIDリスト
     */
    distribution_ids?: (Array<string> | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, DistributionBundleLocalized> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
};

/**
 * 販売可能なアセットタイプ
 */
type SellableAssetType = 'vrm' | 'vrma' | 'image' | 'animated_image' | 'audio' | 'glb' | 'asset_bundle' | 'animation_clip' | 'gaussian_splat' | 'video' | 'story_template';

type DistributionCreateRequest = {
    /**
     * アセットタイプ
     */
    asset_type: SellableAssetType;
    /**
     * アセットID
     */
    asset_id: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 多言語情報JSON
     */
    locales_json?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
};

/**
 * Distributionの多言語情報
 */
type DistributionLocalized = {
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明
     */
    description?: string;
};

/**
 * Distributionのステータス
 */
type DistributionStatus = 'active' | 'discontinued';

type DistributionResponse = {
    /**
     * DistributionID
     */
    distribution_id: string;
    /**
     * アセットタイプ
     */
    asset_type: SellableAssetType;
    /**
     * アセットID
     */
    asset_id: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 配布ステータス
     */
    status: DistributionStatus;
    /**
     * 多言語情報
     */
    locales?: Record<string, DistributionLocalized>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type DistributionListResponse = {
    /**
     * Distributionリスト
     */
    items: Array<DistributionResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type DistributionUpdateRequest = {
    /**
     * 多言語情報
     */
    locales?: (Record<string, DistributionLocalized> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
};

/**
 * 記憶ドキュメントの種別
 */
type DocumentType = 'daily_log' | 'event' | 'topic';

/**
 * 審査対象エンティティタイプ
 */
type ReviewTargetType = 'character' | 'avatar' | 'story' | 'settings' | 'image_asset' | 'video_asset' | 'audio_asset' | 'vrma_asset' | 'animation_clip_asset' | 'vrm_asset' | 'animated_image_asset' | 'asset_bundle_asset' | 'emotion' | 'motion' | 'glb_asset' | 'gaussian_splat_asset';

/**
 * ドライラン審査リクエスト（DB保存なし、プロンプト評価用）
 */
type DryRunReviewRequest = {
    /**
     * 審査対象のコンテンツ情報（JSON文字列など自由形式）
     */
    content_info: string;
    /**
     * 対象タイプ（フォーカスカテゴリ選択用、省略時は全カテゴリ評価）
     */
    target_type?: (ReviewTargetType | null);
    /**
     * 異議内容リスト（指定時はappealプロンプトで再審査）
     */
    appeals?: (Array<AppealItemRequest> | null);
};

/**
 * 複製操作のレスポンス
 */
type DuplicateResponse = {
    /**
     * 結果メッセージ
     */
    message: string;
    /**
     * 元のID
     */
    original_id: string;
    /**
     * 新しいID
     */
    new_id: string;
    /**
     * コピーされたサブコレクションの件数
     */
    copied_subcollections?: (Record<string, number> | null);
};

type DuplicateSettingsResponse = {
    /**
     * 複製後のSettingsのID
     */
    settings_id: string;
    /**
     * 成功メッセージ
     */
    message: string;
};

/**
 * 効果ルール（LLM生成エフェクトの制約）
 */
type EffectRule = {
    /**
     * 対象のキー
     */
    key: string;
    /**
     * 許可するエフェクトタイプ
     */
    allowed_types?: Array<EffectType>;
    /**
     * 加算の最小値
     */
    min_add?: (number | null);
    /**
     * 加算の最大値
     */
    max_add?: (number | null);
    /**
     * 設定の最小値
     */
    min_set?: (number | null);
    /**
     * 設定の最大値
     */
    max_set?: (number | null);
};

/**
 * EmotionCenterのレスポンススキーマ
 */
type EmotionCenterResponse = {
    /**
     * Valence（感情価）の平均
     */
    valence: number;
    /**
     * Arousal（覚醒度）の平均
     */
    arousal: number;
    /**
     * Dominance（支配性）の平均
     */
    dominance: number;
    /**
     * 直近の感情評価履歴
     */
    recent_appraisals: Array<VAD>;
};

/**
 * グループローカライズ情報
 */
type EmotionGroupLocalizedSchema = {
    /**
     * グループ名
     */
    name: string;
    /**
     * 表情・動きの説明
     */
    expression_description: string;
};

/**
 * 感情グループスキーマ
 */
type EmotionGroupSchema = {
    /**
     * グループID
     */
    group_id: string;
    /**
     * 属するemotion_id
     */
    emotion_ids: Array<string>;
    /**
     * ローカライズ情報
     */
    locales?: Record<string, EmotionGroupLocalizedSchema>;
};

/**
 * EmotionConfig 作成リクエスト
 */
type EmotionConfigCreateRequest = {
    /**
     * グループ情報
     */
    groups: Record<string, EmotionGroupSchema>;
    /**
     * VADマップ
     */
    emotion_vad_map: Record<string, app__api__schemas__emotion_config__VADSchema>;
};

/**
 * 感情インデックスエントリスキーマ
 */
type EmotionIndexEntrySchema = {
    /**
     * 感情ID
     */
    emotion_id: string;
    /**
     * 感情名
     */
    name: string;
    /**
     * 同義語リスト
     */
    synonyms?: Array<string>;
};

/**
 * VAD値スキーマ
 */
type VADSchema_Output = {
    /**
     * Valence
     */
    'v': number;
    /**
     * Arousal
     */
    'a': number;
    /**
     * Dominance
     */
    'd': number;
};

/**
 * 気分領域スキーマ
 */
type MoodRegionSchema = {
    /**
     * 領域の中心点
     */
    center: VADSchema_Output;
    /**
     * 領域の半径
     */
    radius: number;
    /**
     * 言語ごとの説明テキスト
     */
    locales?: Record<string, string>;
};

/**
 * EmotionConfig レスポンス
 */
type EmotionConfigResponse = {
    /**
     * バージョン
     */
    version: number;
    /**
     * グループ情報
     */
    groups: Record<string, EmotionGroupSchema>;
    /**
     * VADマップ
     */
    emotion_vad_map: Record<string, VADSchema_Output>;
    /**
     * 気分言語化設定
     */
    mood_verbalizer?: (Record<string, MoodRegionSchema> | null);
    /**
     * OFFICIAL感情インデックス（ロケール別）
     */
    official_emotion_index?: (Record<string, Array<EmotionIndexEntrySchema>> | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * EmotionConfig 更新リクエスト
 */
type EmotionConfigUpdateRequest = {
    /**
     * グループ情報
     */
    groups?: (Record<string, EmotionGroupSchema> | null);
    /**
     * VADマップ
     */
    emotion_vad_map?: (Record<string, app__api__schemas__emotion_config__VADSchema> | null);
};

/**
 * 感情作成リクエストのスキーマ
 */
type EmotionCreateRequest = {
    /**
     * 感情ID（省略時は自動生成）
     */
    emotion_id?: (string | null);
    /**
     * VAD値
     */
    vad: app__api__schemas__emotion__VADSchema;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別情報
     */
    locales: Record<string, EmotionLocalized>;
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
};

/**
 * 1つの感情グループの非言語行動プロファイル（セマンティック方向）
 */
type EmotionGroupNonVerbalProfile = {
    lookat?: LookAtContextModifier;
    blink?: BlinkContextModifier;
    breathing?: BreathingContextModifier;
    expression?: ExpressionContextModifier;
    motion_timing?: MotionTimingContextModifier;
    conversation_timing?: ConversationTimingContextModifier;
};

/**
 * 感情リストのレスポンススキーマ
 */
type EmotionListResponse = {
    /**
     * 感情リスト
     */
    items: Array<EmotionResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル（ドキュメントID）。nullの場合は最終ページ
     */
    next_cursor?: (string | null);
};

/**
 * VAD近傍検索のレスポンススキーマ
 */
type EmotionNeighborResponse = {
    /**
     * 感情ID
     */
    emotion_id: string;
    /**
     * L2距離
     */
    distance_l2: number;
    /**
     * データソース
     */
    data_source: DataSource;
};

type MatchLevel = 'exact' | 'high' | 'medium' | 'low';

/**
 * 感情提案のレスポンススキーマ
 */
type EmotionSuggestionResponse = {
    /**
     * 感情ID
     */
    emotion_id: string;
    /**
     * 順位
     */
    rank: number;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * マッチした名前
     */
    match_name: string;
    /**
     * マッチレベル
     */
    match_level: MatchLevel;
    /**
     * 理由
     */
    why: string;
};

/**
 * 感情更新リクエストのスキーマ（部分更新対応）
 */
type EmotionUpdateRequest = {
    /**
     * VAD値
     */
    vad?: (app__api__schemas__emotion__VADSchema | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * ロケール別情報
     */
    locales?: (Record<string, EmotionLocalized> | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
};

/**
 * ライセンスタイプ
 */
type LicenseType = 'quantity' | 'usage_rights';

/**
 * Entitlementの取得元種別
 */
type SourceType = 'listing' | 'distribution';

type EntitlementResponse = {
    /**
     * EntitlementID
     */
    entitlement_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * 所有者タイプ
     */
    owner_type: ParticipantType;
    /**
     * 取得元タイプ
     */
    source_type: SourceType;
    /**
     * listing_id or distribution_id
     */
    source_id: string;
    /**
     * アセットタイプ
     */
    asset_type: SellableAssetType;
    /**
     * アセットID
     */
    asset_id: string;
    license_type: LicenseType;
    /**
     * 数量
     */
    quantity?: (number | null);
    /**
     * アクセスタイプ
     */
    access_type: AccessType;
    /**
     * 固定バージョンID
     */
    pinned_version_id?: (string | null);
    /**
     * 利用可能な更新バージョンID
     */
    available_update_version_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type EntitlementCheckResponse = {
    /**
     * Entitlementの有無
     */
    has_entitlement: boolean;
    /**
     * Entitlement詳細
     */
    entitlement?: (EntitlementResponse | null);
};

type EntitlementListResponse = {
    /**
     * Entitlementリスト
     */
    items: Array<EntitlementResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type EntitlementVersionUpdateRequest = {
    /**
     * 固定バージョンID
     */
    pinned_version_id?: (string | null);
    /**
     * 利用可能な更新バージョンID
     */
    available_update_version_id?: (string | null);
};

/**
 * 装備品アニメーションの1キーフレーム
 */
type EquipmentAnimationKeyframe = {
    /**
     * 正規化時間（0.0=アニメーション開始, 1.0=終了）
     */
    time: number;
    /**
     * X方向オフセット（-1.0〜1.0, 画像幅に対する比率）
     */
    offset_x?: number;
    /**
     * Y方向オフセット（-1.0〜1.0, 画像高さに対する比率）
     */
    offset_y?: number;
    /**
     * 回転角度（度）
     */
    rotation?: number;
    /**
     * スケール倍率
     */
    scale?: number;
    /**
     * このキーフレームでの装備品の表示/非表示
     */
    visible?: boolean;
    /**
     * このキーフレームで装備品画像を差し替える場合のImageアセットID
     */
    swap_image_asset_id?: (string | null);
    /**
     * 差し替え画像のアセットバージョンID
     */
    swap_image_asset_version_id?: (string | null);
};

/**
 * 装備品アニメーショントラック
 */
type EquipmentAnimationTrack = {
    /**
     * 描画レイヤーの上書き（Noneの場合はアイテムカテゴリのデフォルトを使用）
     */
    render_layer?: (RenderLayer | null);
    /**
     * キーフレームリスト（timeの昇順）
     */
    keyframes: Array<EquipmentAnimationKeyframe>;
};

/**
 * EquipmentMotionOverlay作成リクエスト
 */
type EquipmentMotionOverlayCreateRequest = {
    /**
     * 衣装ID
     */
    outfit_id?: (string | null);
    /**
     * アクセサリーID
     */
    accessory_id?: (string | null);
    /**
     * 髪型ID
     */
    hair_style_id?: (string | null);
    /**
     * AnimatedImageアセットID
     */
    animated_image_asset_id?: (string | null);
    /**
     * SpriteSheetアセットID
     */
    sprite_sheet_asset_id?: (string | null);
    /**
     * ImageSequence AvatarMotionID
     */
    image_sequence_avatar_motion_id?: (string | null);
    /**
     * アニメーショントラック
     */
    track: EquipmentAnimationTrack;
    /**
     * 作成者ID
     */
    owner_id: string;
};

/**
 * EquipmentMotionOverlay Response DTO
 */
type EquipmentMotionOverlayResponse = {
    /**
     * オーバーレイID
     */
    overlay_id: string;
    /**
     * 対象アバターID
     */
    avatar_id: string;
    /**
     * 衣装ID
     */
    outfit_id?: (string | null);
    /**
     * アクセサリーID
     */
    accessory_id?: (string | null);
    /**
     * 髪型ID
     */
    hair_style_id?: (string | null);
    /**
     * AnimatedImageアセットID
     */
    animated_image_asset_id?: (string | null);
    /**
     * SpriteSheetアセットID
     */
    sprite_sheet_asset_id?: (string | null);
    /**
     * ImageSequence AvatarMotionID
     */
    image_sequence_avatar_motion_id?: (string | null);
    /**
     * アニメーショントラック
     */
    track: EquipmentAnimationTrack;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * 作成者ID
     */
    owner_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * EquipmentMotionOverlay一覧レスポンス
 */
type EquipmentMotionOverlayListResponse = {
    /**
     * オーバーレイリスト
     */
    items: Array<EquipmentMotionOverlayResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * EquipmentMotionOverlay更新リクエスト
 */
type EquipmentMotionOverlayUpdateRequest = {
    /**
     * アニメーショントラック
     */
    track?: (EquipmentAnimationTrack | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
};

/**
 * 顔検出エンドポイントのレスポンス
 */
type FaceDetectionResponse = {
    /**
     * 検出された顔のリスト
     */
    faces: Array<DetectedFaceResponse>;
    /**
     * 入力画像の幅（ピクセル）
     */
    image_width: number;
    /**
     * 入力画像の高さ（ピクセル）
     */
    image_height: number;
};

/**
 * FaceIconモデルのレスポンススキーマ
 *
 * 目レイヤーは eyelid（まぶた+眉毛）と eyeball（瞳/目玉）に分離。
 * compositing順: body → eyeball → eyelid → mouth
 */
type FaceIconModelResponse = {
    /**
     * コンポジット画像アセットID（全レイヤー結合済み）
     */
    composite_image_asset_id: string;
    /**
     * コンポジット画像アセットバージョンID
     */
    composite_image_asset_version_id?: (string | null);
    /**
     * ボディ画像アセットID（非分離要素焼き込み済み素体）
     */
    body_image_asset_id?: (string | null);
    /**
     * ボディ画像アセットバージョンID
     */
    body_image_asset_version_id?: (string | null);
    /**
     * まぶた+眉毛レイヤー画像のアセットID
     */
    eyelid_image_asset_id?: (string | null);
    /**
     * まぶた+眉毛レイヤー画像のバージョンID
     */
    eyelid_image_asset_version_id?: (string | null);
    /**
     * 目玉/瞳レイヤー画像のアセットID
     */
    eyeball_image_asset_id?: (string | null);
    /**
     * 目玉/瞳レイヤー画像のバージョンID
     */
    eyeball_image_asset_version_id?: (string | null);
    /**
     * 口の画像のアセットID
     */
    mouth_image_asset_id?: (string | null);
    /**
     * 口の画像のバージョンID
     */
    mouth_image_asset_version_id?: (string | null);
    /**
     * body画像に焼き込み済みで差し替え不可能な描画レイヤー
     */
    locked_layers?: Array<RenderLayer>;
    /**
     * このアイコンで装備品を表示可能な身体部位
     */
    equippable_slots?: Array<BodySlot>;
    /**
     * 部位ごとの位置・領域・角度データ（自動配置用、オプショナル）
     */
    attachment_point_poses?: Record<string, AttachmentPointPoseResponse>;
    /**
     * イラストレーター名
     */
    illustrator_name?: (string | null);
    /**
     * キャラクターデザイナー名
     */
    character_designer_name?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 顔位置の正規化座標レスポンス
 */
type FacePositionResponse = {
    /**
     * 顔中心X（画像幅に対する比率）
     */
    center_x: number;
    /**
     * 顔中心Y（画像高さに対する比率）
     */
    center_y: number;
    /**
     * 顔幅（画像幅に対する比率）
     */
    width: number;
    /**
     * 顔高さ（画像高さに対する比率）
     */
    height: number;
    /**
     * 顔の水平角度
     */
    yaw?: number;
    /**
     * 顔の垂直角度
     */
    pitch?: number;
};

type FavoriteCreateRequest = {
    /**
     * 対象タイプ
     */
    target_type: string;
    /**
     * 対象ID
     */
    target_id: string;
};

type FavoriteResponse = {
    /**
     * お気に入りID
     */
    favorite_id: string;
    /**
     * ユーザーID
     */
    user_id: string;
    /**
     * 対象タイプ
     */
    target_type: string;
    /**
     * 対象ID
     */
    target_id: string;
    /**
     * 作成日時
     */
    created_at: string;
};

type FavoriteListResponse = {
    /**
     * お気に入りリスト
     */
    items: Array<FavoriteResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type SuspectResult = {
    /**
     * 疑わしいユーザーのID
     */
    user_id: string;
    /**
     * フィンガープリント発行ID
     */
    fingerprint_id: string;
    /**
     * Tardosスコア（高いほど疑わしい）
     */
    score: number;
    /**
     * 判定閾値
     */
    threshold: number;
    /**
     * 閾値を超えた場合True
     */
    is_colluder: boolean;
};

type ForensicDetectResponse = {
    /**
     * 対象アセットID
     */
    asset_id: string;
    /**
     * アセットタイプ (image, animated_image, vrm, glb)
     */
    asset_type: string;
    /**
     * 疑わしいユーザーのリスト
     */
    suspects?: Array<SuspectResult>;
    /**
     * このアセットに発行されたフィンガープリント総数
     */
    total_issuances: number;
    /**
     * 抽出された符号語の長さ
     */
    extracted_code_length: number;
    /**
     * 検出品質 (high / medium / low)
     */
    detection_quality: string;
};

/**
 * フォーマット操作レスポンス（作成・更新）
 */
type FormatOperationResponse = {
    /**
     * 結果メッセージ
     */
    message: string;
    /**
     * 操作されたデータ
     */
    data: Record<string, any>;
};

/**
 * 自由入力設定
 */
type FreeInputConfig_Input = {
    /**
     * 自由入力を有効にするか
     */
    enabled?: boolean;
    /**
     * LLMへの追加情報（コンテキスト）
     */
    additional_information?: (string | null);
    /**
     * 最大ターン数（これを超えると強制決定）
     */
    max_turns?: number;
    /**
     * LLM生成エフェクトの制約ルール
     */
    generated_effect_rules?: Array<EffectRule>;
};

/**
 * 自由入力設定
 */
type FreeInputConfig_Output = {
    /**
     * 自由入力を有効にするか
     */
    enabled?: boolean;
    /**
     * LLMへの追加情報（コンテキスト）
     */
    additional_information?: (string | null);
    /**
     * 最大ターン数（これを超えると強制決定）
     */
    max_turns?: number;
    /**
     * LLM生成エフェクトの制約ルール
     */
    generated_effect_rules?: Array<EffectRule>;
};

/**
 * 自由入力ルート
 */
type FreeInputRoute_Input = {
    /**
     * 遷移先シーンID
     */
    target_scene_id: string;
    /**
     * この遷移先が有効になる条件
     */
    condition?: (ConditionGroup_Input | null);
    /**
     * 遷移時に適用する効果
     */
    effects?: Array<Effect>;
};

/**
 * 自由入力ルート
 */
type FreeInputRoute_Output = {
    /**
     * 遷移先シーンID
     */
    target_scene_id: string;
    /**
     * この遷移先が有効になる条件
     */
    condition?: (ConditionGroup_Output | null);
    /**
     * 遷移時に適用する効果
     */
    effects?: Array<Effect>;
};

/**
 * Gaussian Splatアセットの多言語情報
 */
type GaussianSplatAssetLocalized = {
    /**
     * モデル名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * GaussianSplatAsset Response DTO
 */
type GaussianSplatAssetResponse = {
    /**
     * Gaussian SplatアセットID
     */
    gs_asset_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    review_status: ReviewStatus;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, GaussianSplatAssetLocalized>;
    role: GaussianSplatAssetRole;
    /**
     * 3Dモデラー名
     */
    modeler_name?: (string | null);
    /**
     * デザイナー名
     */
    designer_name?: (string | null);
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * GaussianSplatAsset一覧のレスポンススキーマ
 */
type GaussianSplatAssetListResponse = {
    /**
     * Gaussian Splatアセットリスト
     */
    items: Array<GaussianSplatAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * Gaussian Splatアセットの更新リクエスト
 */
type GaussianSplatAssetUpdateRequest = {
    /**
     * モデル名
     */
    model_name?: (string | null);
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, GaussianSplatAssetLocalized> | null);
    /**
     * Gaussian Splatアセットの用途
     */
    role?: (GaussianSplatAssetRole | null);
    /**
     * 3Dモデラー名
     */
    modeler_name?: (string | null);
    /**
     * デザイナー名
     */
    designer_name?: (string | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

/**
 * GaussianSplatAssetVersion Response DTO
 */
type GaussianSplatAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * Splatフォーマット
     */
    splat_format: GaussianSplatFormat;
    /**
     * ポイント数
     */
    point_count?: (number | null);
    /**
     * Storage上のファイルパス
     */
    storage_path: string;
    /**
     * ファイルコンテンツのハッシュ
     */
    content_hash: string;
    /**
     * ファイルサイズ（バイト）
     */
    file_size: number;
    /**
     * 参照カウント
     */
    ref_count: number;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイル画像アセットバージョンID
     */
    thumbnail_image_asset_version_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * GaussianSplatAssetVersion一覧のレスポンススキーマ
 */
type GaussianSplatAssetVersionListResponse = {
    /**
     * バージョンリスト
     */
    items: Array<GaussianSplatAssetVersionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * 相性生成リクエスト
 */
type GenerateCompatibilityRequest = {
    /**
     * 左カテゴリID
     */
    left_category_id: string;
    /**
     * 右カテゴリID
     */
    right_category_id: string;
    /**
     * 処理モード
     */
    mode?: string;
    /**
     * バッチID
     */
    batch_id?: (string | null);
    /**
     * モデル
     */
    model?: (string | null);
    /**
     * プロンプトバージョン
     */
    prompt_version?: (string | null);
};

/**
 * 相性生成結果レスポンス
 */
type GenerateCompatibilityResultResponse = {
    /**
     * 成功フラグ
     */
    ok: boolean;
    /**
     * 生成件数
     */
    generated_count?: number;
    /**
     * エラーメッセージ
     */
    error?: (string | null);
};

type GenerateContentRequest = {
    /**
     * 設定の概要
     */
    description: string;
};

type GenerateContentResponse = {
    /**
     * 生成された詳細コンテンツ
     */
    content: SettingsContent_Output;
};

/**
 * プロファイル生成リクエスト
 */
type GenerateProfileRequest = {
    /**
     * 生成する言語コード
     */
    language?: string;
    /**
     * 既存データを上書きするか
     */
    overwrite?: boolean;
};

/**
 * プロファイル生成レスポンス
 */
type GenerateProfileResponse = {
    /**
     * 結果メッセージ
     */
    message: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * 生成された基本情報
     */
    basic_info: GeneratedBasicInfoResponse;
    /**
     * 生成された背景情報
     */
    background_details: GeneratedBackgroundDetailsResponse;
    /**
     * 生成された日常生活情報
     */
    daily_life: GeneratedDailyLifeResponse;
    /**
     * 生成された好み情報
     */
    preferences: GeneratedPreferencesResponse;
    /**
     * 生成された身体的特徴
     */
    physical_identity: GeneratedPhysicalIdentityResponse;
    /**
     * 生成された能力情報
     */
    abilities: GeneratedAbilitiesResponse;
    /**
     * 生成されたキャラクター名・説明
     */
    character_locales: GeneratedCharacterLocaleResponse;
};

type GiftPurchaseRequest = {
    /**
     * ListingID
     */
    listing_id: string;
    /**
     * 受取人ID（ユーザーID or キャラクターID）
     */
    recipient_id: string;
    /**
     * 受取人タイプ
     */
    recipient_type: ParticipantType;
    /**
     * 数量
     */
    quantity?: number;
    /**
     * ギフトメッセージ
     */
    message?: (string | null);
};

type GiftPurchaseResponse = {
    /**
     * ギフトID（将来的にbilling-gatewayのトランザクションIDと連携）
     */
    gift_id: string;
    /**
     * ListingID
     */
    listing_id: string;
    /**
     * 送信者ID
     */
    sender_id: string;
    /**
     * 受取人ID
     */
    recipient_id: string;
    /**
     * 受取人タイプ
     */
    recipient_type: ParticipantType;
    /**
     * 数量
     */
    quantity: number;
    /**
     * ギフトメッセージ
     */
    message?: (string | null);
    /**
     * ステータス
     */
    status?: string;
};

/**
 * GLBアセットの多言語情報
 */
type GLBAssetLocalized = {
    /**
     * モデル名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * GLBAsset Response DTO
 */
type GLBAssetResponse = {
    /**
     * GLBアセットID
     */
    glb_asset_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    review_status: ReviewStatus;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, GLBAssetLocalized>;
    role: GLBAssetRole;
    /**
     * 3Dモデラー名
     */
    modeler_name?: (string | null);
    /**
     * デザイナー名
     */
    designer_name?: (string | null);
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 3Dモデルのアップロード元フォーマット
 */
type Model3DSourceFormat = 'glb' | 'gltf' | 'fbx' | 'obj';

/**
 * GLBAssetVersion Response DTO
 */
type GLBAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * Storage上のGLBファイルパス
     */
    storage_path?: (string | null);
    /**
     * ファイルコンテンツのハッシュ
     */
    content_hash?: (string | null);
    /**
     * GLBファイルサイズ（バイト）
     */
    file_size?: (number | null);
    /**
     * 参照カウント
     */
    ref_count: number;
    /**
     * アップロード元フォーマット
     */
    source_format: Model3DSourceFormat;
    /**
     * 原本ファイルのStorageパス
     */
    original_storage_path?: (string | null);
    /**
     * 原本ファイルサイズ（バイト）
     */
    original_file_size?: (number | null);
    /**
     * 変換ステータス
     */
    conversion_status: ConversionStatus;
    /**
     * 変換失敗時のエラーメッセージ
     */
    conversion_error?: (string | null);
    /**
     * 変換結果メタデータ
     */
    conversion_metadata?: (ConversionMetadata | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイル画像アセットバージョンID
     */
    thumbnail_image_asset_version_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * 非同期変換投入レスポンス（202 Accepted）
 */
type GLBAssetFromSourceResponse = {
    /**
     * GLBアセット
     */
    asset: GLBAssetResponse;
    /**
     * バージョン（processing状態）
     */
    version: GLBAssetVersionResponse;
    /**
     * ステータスメッセージ
     */
    message: string;
};

/**
 * GLBAsset一覧のレスポンススキーマ
 */
type GLBAssetListResponse = {
    /**
     * GLBアセットリスト
     */
    items: Array<GLBAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * GLBアセットの更新リクエスト
 */
type GLBAssetUpdateRequest = {
    /**
     * モデル名
     */
    model_name?: (string | null);
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, GLBAssetLocalized> | null);
    /**
     * GLBアセットの用途
     */
    role?: (GLBAssetRole | null);
    /**
     * 3Dモデラー名
     */
    modeler_name?: (string | null);
    /**
     * デザイナー名
     */
    designer_name?: (string | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

/**
 * GLBAssetVersion一覧のレスポンススキーマ
 */
type GLBAssetVersionListResponse = {
    /**
     * バージョンリスト
     */
    items: Array<GLBAssetVersionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * GLBモデルのレスポンススキーマ
 */
type GLBModelResponse = {
    /**
     * GLBアセットID参照
     */
    glb_asset_id: string;
    /**
     * GLBアセットバージョンID参照
     */
    glb_asset_version_id?: (string | null);
    /**
     * 3Dモデラー名
     */
    modeler_name?: (string | null);
    /**
     * デザイナー名
     */
    designer_name?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * GLBアニメーション形式のモーションデータ
 */
type GLBMotionData = {
    /**
     * GLBアニメーションアセットID
     */
    glb_asset_id: string;
    /**
     * GLBアセットバージョンID参照
     */
    glb_asset_version_id?: (string | null);
    /**
     * GLB内のアニメーション名（None=最初のアニメーション）
     */
    animation_name?: (string | null);
    /**
     * フェードイン時間（秒）
     */
    fade_in?: number;
    /**
     * フェードアウト時間（秒）
     */
    fade_out?: number;
    /**
     * 重み
     */
    weight?: number;
    /**
     * 再生速度
     */
    playback_speed?: number;
};

/**
 * グループメンバーの役割（ユーザー・キャラクター共通）
 */
type GroupMemberRole = 'owner' | 'admin' | 'member';

type GroupAddMemberRequest = {
    /**
     * メンバーID（user_id or character_id）
     */
    member_id: string;
    /**
     * メンバー種別
     */
    member_type: ParticipantType;
    /**
     * グループ内の役割
     */
    role?: GroupMemberRole;
};

type GroupBanCreateRequest = {
    /**
     * BAN対象ユーザーID
     */
    user_id: string;
    /**
     * BAN理由
     */
    reason?: string;
};

type GroupBanResponse = {
    /**
     * グループID
     */
    group_id: string;
    /**
     * BAN対象ユーザーID
     */
    user_id: string;
    /**
     * BAN実行者のuser_id
     */
    banned_by: string;
    /**
     * BAN理由
     */
    reason: string;
    /**
     * 作成日時
     */
    created_at: string;
};

type GroupBanListResponse = {
    /**
     * BANリスト
     */
    items: Array<GroupBanResponse>;
    /**
     * 総件数
     */
    total: number;
};

type GroupLocalizedRequest = {
    /**
     * グループ名
     */
    name: string;
    /**
     * グループ説明
     */
    description?: string;
};

/**
 * グループの公開設定
 */
type GroupVisibility = 'public' | 'private';

/**
 * グループの参加ポリシー
 */
type JoinPolicy = 'open' | 'invite_only' | 'approval';

type GroupCreateRequest = {
    /**
     * オーナーのユーザーID
     */
    owner_id: string;
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * ロケール別のローカライズ情報
     */
    locales?: (Record<string, GroupLocalizedRequest> | null);
    /**
     * 参加ポリシー
     */
    join_policy?: JoinPolicy;
    /**
     * 公開設定
     */
    visibility?: GroupVisibility;
    /**
     * 最大メンバー数
     */
    max_members?: number;
};

/**
 * 招待の種類
 */
type InviteType = 'link' | 'direct';

type GroupInviteCreateRequest = {
    /**
     * 招待種別
     */
    invite_type?: InviteType;
    /**
     * 個別招待の対象ユーザーID
     */
    target_user_id?: (string | null);
    /**
     * 最大使用回数（null=無制限）
     */
    max_uses?: (number | null);
    /**
     * 有効期限（null=無期限）
     */
    expires_at?: (string | null);
};

type GroupInviteResponse = {
    /**
     * 招待ID
     */
    invite_id: string;
    /**
     * グループID
     */
    group_id: string;
    /**
     * 招待種別
     */
    invite_type: InviteType;
    /**
     * 招待トークン
     */
    token: string;
    /**
     * 個別招待の対象ユーザーID
     */
    target_user_id?: (string | null);
    /**
     * 招待発行者のuser_id
     */
    created_by: string;
    /**
     * 最大使用回数
     */
    max_uses?: (number | null);
    /**
     * 使用回数
     */
    use_count: number;
    /**
     * 有効期限
     */
    expires_at?: (string | null);
    /**
     * 取消済みフラグ
     */
    is_revoked: boolean;
    /**
     * 作成日時
     */
    created_at: string;
};

type GroupInviteListResponse = {
    /**
     * 招待リスト
     */
    items: Array<GroupInviteResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * 参加申請のステータス
 */
type JoinRequestStatus = 'pending' | 'approved' | 'rejected';

type GroupJoinRequestResponse = {
    /**
     * 申請ID
     */
    request_id: string;
    /**
     * グループID
     */
    group_id: string;
    /**
     * 申請者のuser_id
     */
    user_id: string;
    /**
     * 申請ステータス
     */
    status: JoinRequestStatus;
    /**
     * 審査者のuser_id
     */
    reviewed_by?: (string | null);
    /**
     * 審査日時
     */
    reviewed_at?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
};

type GroupJoinRequestListResponse = {
    /**
     * 参加申請リスト
     */
    items: Array<GroupJoinRequestResponse>;
    /**
     * 総件数
     */
    total: number;
};

type GroupLocalizedResponse = {
    /**
     * グループ名
     */
    name: string;
    /**
     * グループ説明
     */
    description: string;
};

type GroupMemberResponse = {
    /**
     * メンバーID（user_id or character_id）
     */
    member_id: string;
    /**
     * メンバー種別
     */
    member_type: ParticipantType;
    /**
     * グループ内の役割
     */
    role: GroupMemberRole;
    /**
     * 参加日時
     */
    joined_at: string;
};

type GroupResponse = {
    /**
     * グループID
     */
    group_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別のローカライズ情報
     */
    locales: Record<string, GroupLocalizedResponse>;
    /**
     * メンバーリスト
     */
    members: Array<GroupMemberResponse>;
    /**
     * 参加ポリシー
     */
    join_policy: JoinPolicy;
    /**
     * 公開設定
     */
    visibility: GroupVisibility;
    /**
     * 最大メンバー数
     */
    max_members: number;
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
    /**
     * アイコン画像アセットバージョンID
     */
    icon_image_asset_version_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type GroupListResponse = {
    /**
     * グループリスト
     */
    items: Array<GroupResponse>;
    /**
     * 総件数
     */
    total: number;
};

type GroupRoleUpdateRequest = {
    /**
     * 新しいロール
     */
    role: GroupMemberRole;
};

type GroupUpdateRequest = {
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * ロケール別のローカライズ情報
     */
    locales?: (Record<string, GroupLocalizedRequest> | null);
    /**
     * 参加ポリシー
     */
    join_policy?: (JoinPolicy | null);
    /**
     * 公開設定
     */
    visibility?: (GroupVisibility | null);
    /**
     * 最大メンバー数
     */
    max_members?: (number | null);
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
    /**
     * アイコン画像アセットバージョンID
     */
    icon_image_asset_version_id?: (string | null);
};

/**
 * HairStyle多言語情報リクエスト
 */
type HairStyleLocalizedRequest = {
    /**
     * 髪型名
     */
    name: string;
    /**
     * コンテンツ詳細説明
     */
    content_description: string;
    /**
     * 公開表示用説明
     */
    display_description: string;
};

/**
 * HairStyle作成リクエスト
 */
type HairStyleCreateRequest = {
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * 多言語情報
     */
    locales: Record<string, HairStyleLocalizedRequest>;
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * データソース
     */
    data_source?: DataSource;
};

/**
 * 髪型の多言語情報
 */
type HairStyleLocalized = {
    /**
     * 髪型名
     */
    name: string;
    /**
     * コンテンツ詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * HairStyle Response DTO
 */
type HairStyleResponse = {
    /**
     * 髪型ID
     */
    hair_style_id: string;
    /**
     * 前髪2D画像セット
     */
    front_image_set?: (ItemImageSet | null);
    /**
     * 後ろ髪2D画像セット
     */
    back_image_set?: (ItemImageSet | null);
    /**
     * GLBアセットID
     */
    glb_asset_id?: (string | null);
    /**
     * GLBアセットバージョンID
     */
    glb_asset_version_id?: (string | null);
    /**
     * AssetBundleアセットID
     */
    asset_bundle_asset_id?: (string | null);
    /**
     * AssetBundleアセットバージョンID
     */
    asset_bundle_asset_version_id?: (string | null);
    /**
     * Gaussian SplattingアセットID
     */
    gaussian_splatting_asset_id?: (string | null);
    /**
     * Gaussian SplattingアセットバージョンID
     */
    gaussian_splatting_asset_version_id?: (string | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    review_status: ReviewStatus;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語情報
     */
    locales?: Record<string, HairStyleLocalized>;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * ゾーニング
     */
    zoning?: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions?: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * HairStyle一覧レスポンス
 */
type HairStyleListResponse = {
    /**
     * 髪型リスト
     */
    items: Array<HairStyleResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * HairStyle更新リクエスト
 */
type HairStyleUpdateRequest = {
    /**
     * 多言語情報
     */
    locales?: (Record<string, HairStyleLocalizedRequest> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
};

type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
    input?: any;
    ctx?: Record<string, any>;
};

type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

/**
 * 画像アセットの多言語情報
 */
type ImageAssetLocalized = {
    /**
     * 画像名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * ImageAsset Response DTO（検索フラグ付き、マルチプロファイル対応）
 */
type ImageAssetResponse = {
    /**
     * 画像アセットID
     */
    image_asset_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * アセットロール
     */
    role: AssetRole;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    review_status: ReviewStatus;
    /**
     * アーティスト名
     */
    artist_name?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, ImageAssetLocalized>;
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * 最新バージョンのコンテンツハッシュ（重複検索用）
     */
    latest_content_hash: string;
    /**
     * 利用可能なプロファイルリスト
     */
    available_profiles?: Array<SizeProfile>;
    /**
     * squareプロファイルの有無
     */
    has_square?: boolean;
    /**
     * portrait_9_16プロファイルの有無
     */
    has_portrait_9_16?: boolean;
    /**
     * portrait_3_4プロファイルの有無
     */
    has_portrait_3_4?: boolean;
    /**
     * landscape_16_9プロファイルの有無
     */
    has_landscape_16_9?: boolean;
    /**
     * landscape_4_3プロファイルの有無
     */
    has_landscape_4_3?: boolean;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * ImageAsset一覧のレスポンススキーマ
 */
type ImageAssetListResponse = {
    /**
     * 画像アセットリスト
     */
    items: Array<ImageAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * ImageAsset更新リクエスト - メタデータのみ更新可能
 */
type ImageAssetUpdateRequest = {
    /**
     * アーティスト名
     */
    artist_name?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, ImageAssetLocalized> | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

/**
 * SizeProfileData Response DTO
 */
type SizeProfileDataResponse = {
    /**
     * 解像度別パス
     */
    paths: Record<string, string>;
    /**
     * オリジナル幅
     */
    original_width: number;
    /**
     * オリジナル高さ
     */
    original_height: number;
    /**
     * オリジナルファイルサイズ
     */
    original_file_size: number;
    /**
     * コンテンツハッシュ
     */
    content_hash: string;
};

/**
 * ImageAssetVersion Response DTO（マルチプロファイル対応）
 */
type ImageAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * プロファイル別データ
     */
    profiles: Record<string, SizeProfileDataResponse>;
    /**
     * 画像フォーマット
     */
    format: string;
    /**
     * アルファチャンネルの有無
     */
    has_alpha: boolean;
    /**
     * 参照カウント
     */
    ref_count: number;
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * ImageAssetVersion一覧のレスポンススキーマ
 */
type ImageAssetVersionListResponse = {
    /**
     * バージョンリスト
     */
    items: Array<ImageAssetVersionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * ImageAsset with Version Response DTO - アセットと最新バージョンの両方を返す
 */
type ImageAssetWithVersionResponse = {
    /**
     * 画像アセット
     */
    asset: ImageAssetResponse;
    /**
     * 最新バージョン
     */
    version: ImageAssetVersionResponse;
};

/**
 * 画像非表示
 */
type ImageHideEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 画像アセットID
     */
    image_asset_id: string;
    /**
     * 画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
    transition?: TransitionType;
    /**
     * トランジション時間（秒）
     */
    transition_duration?: number;
};

/**
 * 画像表示
 */
type ImageShowEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 画像アセットID
     */
    image_asset_id: string;
    /**
     * 画像アセットバージョンID
     */
    image_asset_version_id?: (string | null);
    /**
     * X位置（0=左端, 1=右端）
     */
    position_x?: number;
    /**
     * Y位置（0=上端, 1=下端）
     */
    position_y?: number;
    /**
     * スケール
     */
    scale?: number;
    /**
     * 表示レイヤー（大きいほど前面）
     */
    layer?: number;
    transition?: TransitionType;
    /**
     * トランジション時間（秒）
     */
    transition_duration?: number;
};

/**
 * 復号鍵レスポンス
 */
type KeyResponse = {
    /**
     * AES-256鍵 (base64)
     */
    key: string;
    /**
     * 暗号アルゴリズム
     */
    algorithm?: string;
};

type KnowledgeGraphEdgeRequest = {
    /**
     * ソースノードタイトル
     */
    source: string;
    /**
     * ターゲットノードタイトル
     */
    target: string;
};

type KnowledgeGraphEdgeResponse = {
    /**
     * ソースノードタイトル
     */
    source: string;
    /**
     * ターゲットノードタイトル
     */
    target: string;
};

type KnowledgeGraphNodeRequest = {
    /**
     * ノードタイトル
     */
    title: string;
    /**
     * ドキュメントタイプ
     */
    doc_type?: DocumentType;
    /**
     * ピン留めフラグ
     */
    pinned?: boolean;
    /**
     * ノードが存在するか
     */
    exists?: boolean;
    /**
     * コンテンツ長
     */
    content_length?: number;
};

type KnowledgeGraphNodeResponse = {
    /**
     * ノードタイトル
     */
    title: string;
    /**
     * ドキュメントタイプ
     */
    doc_type: DocumentType;
    /**
     * ピン留めフラグ
     */
    pinned: boolean;
    /**
     * ノードが存在するか
     */
    exists: boolean;
    /**
     * 最終更新日時
     */
    updated_at?: (string | null);
    /**
     * コンテンツ長
     */
    content_length: number;
};

type KnowledgeGraphOverwriteRequest = {
    /**
     * ノードリスト
     */
    nodes?: Array<KnowledgeGraphNodeRequest>;
    /**
     * エッジリスト
     */
    edges?: Array<KnowledgeGraphEdgeRequest>;
};

type KnowledgeGraphResponse = {
    /**
     * ノードリスト
     */
    nodes: Array<KnowledgeGraphNodeResponse>;
    /**
     * エッジリスト
     */
    edges: Array<KnowledgeGraphEdgeResponse>;
    /**
     * 最終更新日時
     */
    updated_at: string;
};

/**
 * TagCategoryLink Response DTO - 明示的フィールド定義
 */
type TagCategoryLinkResponse = {
    /**
     * カテゴリID
     */
    tag_category_id: string;
    /**
     * タグID
     */
    tag_id: string;
    /**
     * カテゴリ内の並び順
     */
    order_in_category: number;
    /**
     * リンクキー
     */
    link_key: string;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * 作成時刻
     */
    created_at: string;
    /**
     * 更新時刻
     */
    updated_at: string;
};

/**
 * カーソルベースのLinkリストレスポンス
 */
type LinkListCursorResponse = {
    /**
     * リンクリスト
     */
    items: Array<TagCategoryLinkResponse>;
    /**
     * このページの取得件数
     */
    count: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * ListingBundleのタイプ
 */
type ListingBundleType = 'avatar' | 'character' | 'story' | 'modified_avatar';

type ListingBundleCreateRequest = {
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * タイプ
     */
    listing_bundle_type: ListingBundleType;
    /**
     * コンポーネントListingJSON
     */
    component_listings_json?: (string | null);
    /**
     * 子BundleJSON
     */
    child_bundles_json?: (string | null);
    /**
     * 多言語情報JSON
     */
    locales_json?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * サムネイルID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * バンドル割引率
     */
    discount_rate?: number;
};

/**
 * ListingBundleの多言語情報
 */
type ListingBundleLocalized = {
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明
     */
    description?: string;
};

/**
 * マーケットプレイス公開ステータス
 */
type MarketplaceStatus = 'draft' | 'listed' | 'unlisted' | 'suspended';

type ListingBundleResponse = {
    /**
     * ListingBundleID
     */
    listing_bundle_id: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * タイプ
     */
    listing_bundle_type: ListingBundleType;
    /**
     * 公開ステータス
     */
    marketplace_status: MarketplaceStatus;
    /**
     * コンポーネント
     */
    component_listings?: Array<ComponentListing>;
    /**
     * 子Bundle
     */
    child_bundles?: Array<ChildBundle>;
    /**
     * 合計価格
     */
    total_price_coins: number;
    /**
     * バンドル割引率
     */
    discount_rate: number;
    /**
     * 割引開始日時
     */
    discount_start_at?: (string | null);
    /**
     * 割引終了日時
     */
    discount_end_at?: (string | null);
    /**
     * 割引全体上限数
     */
    discount_total_stock?: (number | null);
    /**
     * 割引残数
     */
    discount_remaining_stock?: (number | null);
    /**
     * ユーザー別割引上限
     */
    discount_per_user?: (number | null);
    /**
     * ベースListingBundleID
     */
    base_listing_bundle_id?: (string | null);
    /**
     * バリアントラベル
     */
    variant_label?: (string | null);
    /**
     * 多言語情報
     */
    locales?: Record<string, ListingBundleLocalized>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * サムネイルID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * 通報数
     */
    report_count: number;
    /**
     * 購入数
     */
    purchase_count: number;
    /**
     * お気に入り数
     */
    favorite_count: number;
    /**
     * レビューサマリー
     */
    review_summary?: Record<string, any>;
    /**
     * 作成日時
     */
    created_at: (string | null);
    /**
     * 更新日時
     */
    updated_at: (string | null);
};

type ListingBundleListResponse = {
    /**
     * ListingBundleリスト
     */
    items: Array<ListingBundleResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type ListingBundleUpdateRequest = {
    /**
     * 公開ステータス
     */
    marketplace_status?: (MarketplaceStatus | null);
    /**
     * コンポーネント
     */
    component_listings?: (Array<ComponentListing> | null);
    /**
     * 子Bundle
     */
    child_bundles?: (Array<ChildBundle> | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, ListingBundleLocalized> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * サムネイルID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * バンドル割引率
     */
    discount_rate?: (number | null);
};

/**
 * Listingの表示範囲
 */
type ListingVisibility = 'public' | 'bundle_only';

type ListingCreateRequest = {
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * クリエイタータイプ
     */
    creator_type?: ParticipantType;
    /**
     * アセットタイプ
     */
    asset_type: SellableAssetType;
    /**
     * アセットID
     */
    asset_id: string;
    license_type?: LicenseType;
    /**
     * 価格
     */
    price_coins: number;
    /**
     * 表示範囲
     */
    visibility?: ListingVisibility;
    /**
     * 割引率
     */
    discount_rate?: number;
    /**
     * 多言語情報JSON
     */
    locales_json?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * タグリストJSON
     */
    tags_json?: (string | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
};

/**
 * Listingの多言語情報
 */
type ListingLocalized = {
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明
     */
    description?: string;
};

type ListingResponse = {
    /**
     * ListingID
     */
    listing_id: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * クリエイタータイプ
     */
    creator_type: ParticipantType;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * アセットタイプ
     */
    asset_type: SellableAssetType;
    /**
     * アセットID
     */
    asset_id: string;
    license_type: LicenseType;
    /**
     * 価格
     */
    price_coins: number;
    /**
     * 公開ステータス
     */
    marketplace_status: MarketplaceStatus;
    /**
     * 表示範囲
     */
    visibility: ListingVisibility;
    /**
     * 割引率
     */
    discount_rate: number;
    /**
     * 割引開始日時
     */
    discount_start_at?: (string | null);
    /**
     * 割引終了日時
     */
    discount_end_at?: (string | null);
    /**
     * 割引全体上限数
     */
    discount_total_stock?: (number | null);
    /**
     * 割引残数
     */
    discount_remaining_stock?: (number | null);
    /**
     * ユーザー別割引上限
     */
    discount_per_user?: (number | null);
    /**
     * ユーザー別最大所有数
     */
    max_quantity_per_user?: (number | null);
    /**
     * 多言語情報
     */
    locales?: Record<string, ListingLocalized>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 通報数
     */
    report_count: number;
    /**
     * 購入数
     */
    purchase_count: number;
    /**
     * お気に入り数
     */
    favorite_count: number;
    /**
     * 作成日時
     */
    created_at: (string | null);
    /**
     * 更新日時
     */
    updated_at: (string | null);
};

type ListingListResponse = {
    /**
     * Listingリスト
     */
    items: Array<ListingResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type ListingUpdateRequest = {
    /**
     * 価格
     */
    price_coins?: (number | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * 公開ステータス
     */
    marketplace_status?: (MarketplaceStatus | null);
    /**
     * 表示範囲
     */
    visibility?: (ListingVisibility | null);
    /**
     * 割引率
     */
    discount_rate?: (number | null);
    /**
     * 割引開始日時
     */
    discount_start_at?: (string | null);
    /**
     * 割引終了日時
     */
    discount_end_at?: (string | null);
    /**
     * 割引全体上限数
     */
    discount_total_stock?: (number | null);
    /**
     * 割引残数
     */
    discount_remaining_stock?: (number | null);
    /**
     * ユーザー別割引上限
     */
    discount_per_user?: (number | null);
    /**
     * ユーザー別最大所有数
     */
    max_quantity_per_user?: (number | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, ListingLocalized> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
};

type MemoryCreateRequest = {
    /**
     * タイトル
     */
    title: string;
    /**
     * 記憶内容
     */
    content: string;
    /**
     * ドキュメントタイプ
     */
    doc_type?: DocumentType;
};

type MemorySummaryResponse = {
    /**
     * 記憶ID
     */
    memory_id: string;
    /**
     * タイトル
     */
    title: string;
    /**
     * ドキュメントタイプ
     */
    doc_type: DocumentType;
    /**
     * ピン留めフラグ
     */
    pinned?: boolean;
    /**
     * 更新日時
     */
    updated_at: string;
    /**
     * コンテンツ長
     */
    content_length: number;
};

type MemoryListResponse = {
    /**
     * 記憶サマリーリスト
     */
    items: Array<MemorySummaryResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * 記憶整理レスポンス
 */
type MemoryOrganizationResponse = {
    /**
     * completed / partial / failed
     */
    status: string;
    /**
     * LLM計画JSON
     */
    plan_json?: (string | null);
    /**
     * 新規作成された記憶タイトル
     */
    new_memories?: Array<string>;
    /**
     * 更新された記憶タイトル
     */
    updated_memories?: Array<string>;
    /**
     * 新規作成されたスケジュール
     */
    created_schedules?: Array<string>;
    /**
     * 更新されたスケジュール
     */
    updated_schedules?: Array<string>;
    /**
     * 削除されたスケジュール
     */
    deleted_schedules?: Array<string>;
    /**
     * エラーメッセージ
     */
    error?: (string | null);
    /**
     * クリアされた会話ログ数
     */
    conversation_log_cleared?: number;
};

type MemoryPinRequest = {
    /**
     * ピン留め状態
     */
    pinned: boolean;
};

type MemoryResponse = {
    /**
     * 記憶ID
     */
    memory_id: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * タイトル
     */
    title: string;
    /**
     * 記憶内容
     */
    content: string;
    /**
     * ドキュメントタイプ
     */
    doc_type: DocumentType;
    /**
     * ピン留めフラグ
     */
    pinned?: boolean;
    /**
     * リンク先タイトルリスト
     */
    links_to: Array<string>;
    /**
     * コンテンツハッシュ
     */
    content_hash?: (string | null);
    /**
     * 埋め込みモデル名
     */
    embedding_model?: (string | null);
    /**
     * 埋め込み更新日時
     */
    embedding_updated_at?: (string | null);
    /**
     * 作成日時
     */
    created_at: (string | null);
    /**
     * 更新日時
     */
    updated_at: (string | null);
};

type MemorySearchRequest = {
    /**
     * 検索クエリ
     */
    query: string;
    /**
     * 上位K件
     */
    top_k?: number;
};

type MemorySearchResponse = {
    /**
     * 検索クエリ
     */
    query: string;
    /**
     * 検索結果
     */
    results: Array<MemoryResponse>;
    /**
     * 結果件数
     */
    total: number;
};

type MemoryUpdateRequest = {
    /**
     * 記憶内容
     */
    content: string;
};

type MergeAccountsRequest = {
    anonUid: string;
    existingToken: string;
    derivedUid: string;
    appId: string;
    derivedProjectId: string;
    deviceName?: (string | null);
};

/**
 * マイグレーション状態レスポンス
 */
type MigrationStatusResponse = {
    /**
     * コレクションパス
     */
    collection_path: string;
    /**
     * 総ドキュメント数
     */
    total_documents: number;
    /**
     * 確認したフィールド名
     */
    field_name: string;
    /**
     * フィールドを持つドキュメント数
     */
    documents_with_field: number;
    /**
     * フィールドを持たないドキュメント数
     */
    documents_without_field: number;
    /**
     * フィールドを持たないドキュメントIDのサンプル（最大10件）
     */
    sample_without_field?: Array<string>;
};

/**
 * MoodStateのレスポンススキーマ
 */
type MoodStateResponse = {
    /**
     * MoodStateのID
     */
    mood_state_id: string;
    /**
     * 現在のValence（感情価）
     */
    valence: number;
    /**
     * 現在のArousal（覚醒度）
     */
    arousal: number;
    /**
     * 現在のDominance（支配性）
     */
    dominance: number;
    /**
     * 短期の感情傾向
     */
    emotion_center: EmotionCenterResponse;
    /**
     * 最終更新日時
     */
    updated_at: string;
};

/**
 * 会話後の気分更新リクエスト
 */
type MoodUpdateRequest = {
    /**
     * 会話で出力されたemotion_idのリスト
     */
    emotion_ids: Array<string>;
};

/**
 * 言語化された気分のレスポンス
 */
type MoodVerbalizedResponse = {
    /**
     * MoodStateのID
     */
    mood_state_id: string;
    /**
     * 現在のValence
     */
    valence: number;
    /**
     * 現在のArousal
     */
    arousal: number;
    /**
     * 現在のDominance
     */
    dominance: number;
    /**
     * 気分の自然言語説明
     */
    description: string;
    /**
     * 言語
     */
    locale: SupportedLanguage$1;
    /**
     * 最終更新日時
     */
    updated_at: string;
};

/**
 * モーションID候補（IDと名前のペア）
 */
type MotionCandidate = {
    /**
     * モーションID
     */
    motion_id: string;
    /**
     * モーション名（指定ロケール）
     */
    name?: string;
};

/**
 * モーション自動パラメータ生成のレスポンス
 */
type MotionAutoParamsResponse = {
    /**
     * 審査・メタデータ用の整形された説明（50〜100文字）
     */
    content_description: string;
    /**
     * ストア表示用の短いキャッチフレーズ（20文字程度）
     */
    display_description: string;
    /**
     * MotionDataから選択された最適なモーションID（候補1位）
     */
    motion_id: string;
    /**
     * motion_idに対応するモーション名（指定ロケール）
     */
    motion_name?: string;
    /**
     * 適合するモーションIDの候補リスト（適合度順、最大5件）
     */
    motion_id_candidates?: Array<MotionCandidate>;
    /**
     * EmotionDataから選択された最適な感情ID（デフォルト: neutral）
     */
    emotion_id: string;
    /**
     * 対象性別
     */
    target_gender: TargetGenderType;
    /**
     * 該当する年齢層のリスト
     */
    age_groups: Array<AgeGroupType>;
    /**
     * モーションタイプ（インデックス参照の確定値）
     */
    motion_type: MotionType;
    /**
     * 適合する性格アーキタイプのリスト
     */
    compatible_archetypes?: Array<PersonalityArchetype>;
    /**
     * 適合する行動パターンのリスト
     */
    compatible_behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * 推奨タグリスト
     */
    tags?: Array<TagWithLevel>;
};

/**
 * Motion多言語情報のリクエストスキーマ
 */
type MotionLocalizedRequest = {
    /**
     * 動作の名前
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 動作の説明（ストア表示用）
     */
    display_description: string;
    /**
     * 同義語リスト
     */
    synonyms?: Array<string>;
};

/**
 * Motion作成のリクエストスキーマ
 */
type MotionCreateRequest = {
    /**
     * 動作ID（例: wave_hand）
     */
    motion_id: string;
    /**
     * モーションタイプ
     */
    motion_type?: MotionType;
    /**
     * ロケール別の動作情報
     */
    locales: Record<string, MotionLocalizedRequest>;
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * データソース
     */
    data_source?: DataSource;
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
};

/**
 * モーションインデックスエントリのレスポンスDTO
 */
type MotionIndexEntrySchema = {
    /**
     * モーションID
     */
    motion_id: string;
    /**
     * モーション名
     */
    name: string;
    /**
     * 同義語リスト
     */
    synonyms?: Array<string>;
    /**
     * モーションタイプ
     */
    motion_type: MotionType;
};

/**
 * Motion多言語情報
 */
type MotionLocalized = {
    /**
     * 動作の名前
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 動作の説明（ストア表示用）
     */
    display_description: string;
    /**
     * 同義語リスト
     */
    synonyms?: Array<string>;
};

/**
 * Motion Response DTO - 明示的フィールド定義
 */
type MotionResponse = {
    /**
     * 動作ID
     */
    motion_id: string;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * モーションタイプ
     */
    motion_type: MotionType;
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別の動作情報
     */
    locales?: Record<string, MotionLocalized>;
    /**
     * データソース（公式/コミュニティ）
     */
    data_source: DataSource;
    /**
     * コンテンツゾーニング
     */
    zoning?: ContentZoning;
    review_status?: ReviewStatus;
    /**
     * 作成者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Motion一覧のレスポンススキーマ
 */
type MotionListResponse = {
    /**
     * モーションリスト
     */
    items: Array<MotionResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル（ドキュメントID）。nullの場合は最終ページ
     */
    next_cursor?: (string | null);
};

/**
 * Motion検索のレスポンススキーマ
 */
type MotionSearchResponse = {
    /**
     * モーションリスト
     */
    items: Array<MotionResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * MotionsSummaryのレスポンスDTO
 */
type MotionsSummaryResponse = {
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * OFFICIALモーションのインデックス（ロケール別）
     */
    official_motion_index?: (Record<string, Array<MotionIndexEntrySchema>> | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 検索優先度タイプ
 */
type PreferType = 'official' | 'all';

/**
 * テキストでMotion提案のリクエストスキーマ
 */
type MotionSuggestByTextRequest = {
    /**
     * 検索する動作名
     */
    query_name: string;
    /**
     * 動作の説明
     */
    query_description?: (string | null);
    /**
     * 検索対象のロケール
     */
    locale?: SupportedLanguage$1;
    /**
     * 最大取得件数
     */
    max_results?: number;
    /**
     * 公式Motion優先
     */
    prefer?: PreferType;
};

/**
 * Motion提案のレスポンススキーマ
 */
type MotionSuggestionResponse = {
    /**
     * モーションID
     */
    motion_id: string;
    /**
     * ランク
     */
    rank: number;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * マッチした名前
     */
    match_name: string;
    /**
     * マッチレベル
     */
    match_level: MatchLevel;
    /**
     * マッチした理由
     */
    why: string;
};

/**
 * Motion更新のリクエストスキーマ
 */
type MotionUpdateRequest = {
    /**
     * モーションタイプ
     */
    motion_type?: (MotionType | null);
    /**
     * ロケール別の動作情報
     */
    locales?: (Record<string, MotionLocalizedRequest> | null);
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
};

/**
 * ナレーション（キャラクターに紐づかない語り）
 *
 * 音声読み上げの優先順位:
 * 1. character_id が指定されていれば、そのキャラクターの音声で読み上げ
 * 2. 未指定なら StorySettings.narrative_character_id を使用
 * 3. どちらも未指定なら音声読み上げなし
 */
type NarrativeEvent_Input = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * ナレーションテキスト（多言語）
     */
    text?: Record<string, string>;
    /**
     * 読み上げに使用するキャラクターID（未指定時はStorySettings.narrative_character_idを使用）
     */
    character_id?: (string | null);
    /**
     * 埋め込みイベント（[e:N]で参照）
     */
    embedded_events?: Array<(CharacterEmotionEvent | CharacterMotionEvent | CharacterShakeEvent | CharacterBounceEvent | CharacterScalePulseEvent | CharacterHighlightEvent | CharacterSilhouetteEvent | CharacterSpinEvent | CharacterResetEvent | ImageShakeEvent | ImageBounceEvent | ImageScalePulseEvent | ImageHighlightEvent | ImageSilhouetteEvent | ImageSpinEvent | ImageResetEvent | ScreenShakeEvent | ScreenFlashEvent | ScreenFadeInEvent | ScreenFadeOutEvent | ScreenBlurEvent | ScreenColorAdjustEvent | ScreenResetEvent | SePlayEvent | SpeechModeChangeEvent)>;
};

/**
 * ナレーション（キャラクターに紐づかない語り）
 *
 * 音声読み上げの優先順位:
 * 1. character_id が指定されていれば、そのキャラクターの音声で読み上げ
 * 2. 未指定なら StorySettings.narrative_character_id を使用
 * 3. どちらも未指定なら音声読み上げなし
 */
type NarrativeEvent_Output = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * ナレーションテキスト（多言語）
     */
    text?: Record<string, string>;
    /**
     * 読み上げに使用するキャラクターID（未指定時はStorySettings.narrative_character_idを使用）
     */
    character_id?: (string | null);
    /**
     * 埋め込みイベント（[e:N]で参照）
     */
    embedded_events?: Array<(CharacterEmotionEvent | CharacterMotionEvent | CharacterShakeEvent | CharacterBounceEvent | CharacterScalePulseEvent | CharacterHighlightEvent | CharacterSilhouetteEvent | CharacterSpinEvent | CharacterResetEvent | ImageShakeEvent | ImageBounceEvent | ImageScalePulseEvent | ImageHighlightEvent | ImageSilhouetteEvent | ImageSpinEvent | ImageResetEvent | ScreenShakeEvent | ScreenFlashEvent | ScreenFadeInEvent | ScreenFadeOutEvent | ScreenBlurEvent | ScreenColorAdjustEvent | ScreenResetEvent | SePlayEvent | SpeechModeChangeEvent)>;
};

/**
 * VAD近傍検索のリクエストスキーマ
 */
type NearestByVADRequest = {
    /**
     * 検索するVAD値
     */
    vad: app__api__schemas__emotion__VADSchema;
    /**
     * 取得件数
     */
    'k'?: number;
    /**
     * 検索スコープ
     */
    scope?: string;
};

/**
 * 通知タイプ
 */
type NotificationType = 'version_update' | 'purchase_received' | 'listing_suspended' | 'report_result';

type NotificationResponse = {
    /**
     * 通知ID
     */
    notification_id: string;
    /**
     * ユーザーID
     */
    user_id: string;
    notification_type: NotificationType;
    /**
     * タイトル
     */
    title: string;
    /**
     * 本文
     */
    body: string;
    /**
     * 関連ID
     */
    related_id?: (string | null);
    /**
     * 既読フラグ
     */
    is_read: boolean;
    /**
     * 作成日時
     */
    created_at: string;
};

type NotificationListResponse = {
    /**
     * 通知リスト
     */
    items: Array<NotificationResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

/**
 * 衣装カテゴリ
 */
type OutfitCategory = 'underwear_upper' | 'underwear_lower' | 'top' | 'bottom' | 'one_piece' | 'outerwear' | 'legwear' | 'footwear' | 'full_outfit';

/**
 * Outfit多言語情報リクエスト
 */
type OutfitLocalizedRequest = {
    /**
     * 衣装名
     */
    name: string;
    /**
     * コンテンツ詳細説明
     */
    content_description: string;
    /**
     * 公開表示用説明
     */
    display_description: string;
};

/**
 * Outfit作成リクエスト
 */
type OutfitCreateRequest = {
    category: OutfitCategory;
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * 多言語情報
     */
    locales: Record<string, OutfitLocalizedRequest>;
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * データソース
     */
    data_source?: DataSource;
    /**
     * 占有スロット（省略時はカテゴリデフォルト）
     */
    occupies_slots?: (Array<BodySlot> | null);
};

/**
 * 衣装の多言語情報
 */
type OutfitLocalized = {
    /**
     * 衣装名
     */
    name: string;
    /**
     * コンテンツ詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * Outfit Response DTO
 */
type OutfitResponse = {
    /**
     * 衣装ID
     */
    outfit_id: string;
    category: OutfitCategory;
    /**
     * 占有スロット
     */
    occupies_slots?: Array<BodySlot>;
    /**
     * 2D画像セット
     */
    image_set?: (ItemImageSet | null);
    /**
     * GLBアセットID
     */
    glb_asset_id?: (string | null);
    /**
     * GLBアセットバージョンID
     */
    glb_asset_version_id?: (string | null);
    /**
     * AssetBundleアセットID
     */
    asset_bundle_asset_id?: (string | null);
    /**
     * AssetBundleアセットバージョンID
     */
    asset_bundle_asset_version_id?: (string | null);
    /**
     * Gaussian SplattingアセットID
     */
    gaussian_splatting_asset_id?: (string | null);
    /**
     * Gaussian SplattingアセットバージョンID
     */
    gaussian_splatting_asset_version_id?: (string | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    review_status: ReviewStatus;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語情報
     */
    locales?: Record<string, OutfitLocalized>;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * ゾーニング
     */
    zoning?: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions?: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Outfit一覧レスポンス
 */
type OutfitListResponse = {
    /**
     * 衣装リスト
     */
    items: Array<OutfitResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * Outfit更新リクエスト
 */
type OutfitUpdateRequest = {
    /**
     * 衣装カテゴリ
     */
    category?: (OutfitCategory | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, OutfitLocalizedRequest> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 占有スロット
     */
    occupies_slots?: (Array<BodySlot> | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
};

/**
 * 審査要求レスポンス
 */
type ReviewRequestResponse = {
    /**
     * 異議内容リスト
     */
    appeals?: Array<AppealItemResponse>;
    /**
     * 詳細説明
     */
    detail_description?: (string | null);
    /**
     * 該当箇所リスト
     */
    reference_locations?: Array<string>;
};

/**
 * 審査結果レスポンス
 */
type ReviewResultResponse = {
    /**
     * 確定したコンテンツラベル
     */
    result_labels: Record<string, ContentDetailResponse>;
    /**
     * カテゴリごとの判断説明
     */
    assessments?: Record<string, ContentAssessmentResponse>;
    /**
     * 審査者ID
     */
    reviewer_id?: (string | null);
    /**
     * 審査者コメント
     */
    reviewer_note?: (string | null);
};

/**
 * 審査タイプ
 */
type ReviewType = 'auto' | 'auto_again' | 'staff';

/**
 * 審査ログレスポンス
 */
type ReviewLogResponse = {
    /**
     * 審査ログID
     */
    review_log_id: string;
    /**
     * 審査対象エンティティタイプ
     */
    target_type: string;
    /**
     * 審査対象エンティティID
     */
    target_id: string;
    review_type: ReviewType;
    /**
     * 審査要求
     */
    request: ReviewRequestResponse;
    /**
     * 審査結果
     */
    result?: (ReviewResultResponse | null);
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 運営審査待ち一覧レスポンス
 */
type PendingReviewListResponse = {
    /**
     * 審査ログリスト
     */
    items: Array<ReviewLogResponse>;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
    /**
     * 運営審査待ちの総件数
     */
    total_pending: number;
};

/**
 * PersonalityPreset レスポンスDTO（4層アーキテクチャ）
 */
type PersonalityPresetResponse = {
    /**
     * 性格アーキタイプ
     */
    archetype: PersonalityArchetype;
    /**
     * 視線制御プリセット（10値）
     */
    lookat: PresetLookAtParams;
    /**
     * まばたきプリセット（8値）
     */
    blink: PresetBlinkParams;
    /**
     * 呼吸プリセット（2値）
     */
    breathing: PresetBreathingParams;
    /**
     * 感情ベースラインプリセット
     */
    emotional_params: EmotionalParams;
    /**
     * モーションタイミングプリセット（4値）
     */
    motion_timing: PresetMotionTimingParams;
    /**
     * 会話タイミングプリセット（5値）
     */
    conversation_timing: PresetConversationTimingParams;
    /**
     * 表情表示プリセット（4値）
     */
    expression: PresetExpressionParams;
    /**
     * ジェスチャープリセット（3値）
     */
    gesture: PresetGestureParams;
    /**
     * リップシンクプリセット（1値）
     */
    lipsync: PresetLipSyncParams;
    /**
     * グループ別 positive/negative 倍率
     */
    sensitivity?: ArchetypeSensitivity;
    /**
     * 好意レベル別の上書き
     */
    affinity_overrides?: Record<string, ContextModifierSet>;
    /**
     * 力関係別の上書き
     */
    power_overrides?: Record<string, ContextModifierSet>;
    /**
     * 絆種類別の上書き
     */
    bond_type_overrides?: Record<string, ContextModifierSet>;
    /**
     * 聴衆規模別の上書き
     */
    audience_overrides?: Record<string, ContextModifierSet>;
    /**
     * 状況別の上書き
     */
    situation_overrides?: Record<string, ContextModifierSet>;
};

/**
 * PersonalityPreset 一覧レスポンスDTO
 */
type PersonalityPresetListResponse = {
    /**
     * プリセット一覧
     */
    items: Array<PersonalityPresetResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * プレイヤーアクション（確認ボタン等、分岐なし）
 */
type PlayerActionEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * ボタンテキスト（多言語）
     */
    text?: Record<string, string>;
    /**
     * 見出し（多言語、任意）
     */
    heading?: Record<string, string>;
};

/**
 * ポーズ検出エンドポイントのレスポンス
 */
type PoseDetectionResponse = {
    /**
     * 検出されたポーズのリスト（人物ごと）
     */
    poses: Array<DetectedPoseResponse>;
    /**
     * 入力画像の幅（ピクセル）
     */
    image_width: number;
    /**
     * 入力画像の高さ（ピクセル）
     */
    image_height: number;
};

/**
 * 保護済みファイルのレスポンス
 */
type ProtectedFileResponse$1 = {
    /**
     * 保護済みファイルの署名付きURL
     */
    url: string;
    /**
     * 復号鍵ID
     */
    key_id: string;
    /**
     * 保護フォーマットバージョン
     */
    format: string;
    /**
     * メッシュ難読化シード (hex)
     */
    obfuscation_seed?: (string | null);
    /**
     * フィンガープリントID
     */
    fingerprint_id?: (string | null);
};

/**
 * 画像解像度
 */
type Resolution = 'very_low' | 'low' | 'medium' | 'high' | 'very_high' | 'original';

/**
 * バッチ保護画像リクエストの1アイテム
 */
type ProtectedImageBatchItem = {
    /**
     * アセットID
     */
    asset_id: string;
    /**
     * アセットタイプ (image or animated_image)
     */
    asset_type?: string;
    /**
     * 取得するSizeProfile (image用)
     */
    profile?: (SizeProfile | null);
    /**
     * 取得する解像度
     */
    resolution?: Resolution;
    /**
     * 品質 (animated_image用: original, high, medium, low)
     */
    quality?: (string | null);
};

/**
 * バッチ保護画像リクエスト
 */
type ProtectedImageBatchRequest = {
    /**
     * リクエストアイテム
     */
    items: Array<ProtectedImageBatchItem>;
};

/**
 * バッチ保護画像レスポンスの1アイテム
 */
type ProtectedImageBatchResponseItem = {
    /**
     * アセットID
     */
    asset_id: string;
    /**
     * 復号鍵ID
     */
    key_id: string;
    /**
     * 保護フォーマットバージョン
     */
    format: string;
    /**
     * フィンガープリントID
     */
    fingerprint_id: string;
    /**
     * base64エンコードされた暗号化バイト列
     */
    data: string;
};

/**
 * バッチ保護画像レスポンス
 */
type ProtectedImageBatchResponse = {
    /**
     * 処理済みアイテム
     */
    items?: Array<ProtectedImageBatchResponseItem>;
    /**
     * リクエスト件数
     */
    requested_count: number;
    /**
     * 処理成功件数
     */
    processed_count: number;
    /**
     * エラー一覧
     */
    errors?: Array<Record<string, any>>;
};

/**
 * 購入完了リクエストの個別アイテム
 */
type PurchasedItem = {
    /**
     * ListingID
     */
    listing_id: string;
    /**
     * アセットタイプ
     */
    asset_type: SellableAssetType;
    /**
     * アセットID
     */
    asset_id: string;
    license_type: LicenseType;
    /**
     * 数量（quantityライセンスのみ）
     */
    quantity?: (number | null);
    /**
     * アクセスタイプ
     */
    access_type?: AccessType;
};

/**
 * 購入完了リクエスト（billing-gateway から呼ばれる）
 */
type PurchaseCompletedRequest = {
    /**
     * トランザクションID
     */
    transaction_id: string;
    /**
     * 購入者ID
     */
    buyer_id: string;
    /**
     * 購入者タイプ
     */
    buyer_type: ParticipantType;
    /**
     * ListingBundle経由の場合
     */
    listing_bundle_id?: (string | null);
    /**
     * 購入アイテム一覧
     */
    items: Array<PurchasedItem>;
};

/**
 * 購入完了レスポンス
 */
type PurchaseCompletedResponse = {
    /**
     * トランザクションID
     */
    transaction_id: string;
    /**
     * 作成されたEntitlementID一覧
     */
    entitlement_ids?: Array<string>;
    /**
     * 結果メッセージ
     */
    message: string;
};

/**
 * レコメンデーション結果の1アイテム
 */
type RecommendationItem = {
    /**
     * アイテムID
     */
    id: string;
    /**
     * スコア
     */
    score: number;
};

/**
 * レコメンデーションリクエスト
 */
type RecommendationRequest = {
    /**
     * 取得件数上限
     */
    limit?: (number | null);
    /**
     * キャッシュを使用するか
     */
    use_cache?: boolean;
};

/**
 * レコメンデーションレスポンス
 */
type RecommendationResponse = {
    /**
     * レコメンデーション結果
     */
    recommendations: Array<RecommendationItem>;
};

/**
 * Client-input版: Settings content再生成リクエスト
 */
type RegenerateContentFromInputRequest = {
    /**
     * 既存のSettingsContent（JSON文字列またはテキスト）
     */
    settings_content: string;
    /**
     * 修正指示
     */
    modification_instruction: string;
    /**
     * 参考発話例
     */
    example_utterances?: (Array<string> | null);
};

/**
 * Client-input版: Settings content再生成レスポンス
 */
type RegenerateContentFromInputResponse = {
    /**
     * 処理結果メッセージ
     */
    message: string;
    /**
     * 再生成されたcontent
     */
    content: SettingsContent_Output;
};

/**
 * Settings content再生成リクエスト
 */
type RegenerateContentRequest = {
    /**
     * 既存contentに対する修正指示（例: 「話し方をもっとフレンドリーに」「一人称を『僕』に変更」）
     */
    modification_instruction: string;
    /**
     * 参考にしてほしい発話例（指定すると、この口調を参考に生成）
     */
    example_utterances?: (Array<string> | null);
};

/**
 * Settings content再生成レスポンス
 */
type RegenerateContentResponse = {
    /**
     * 更新されたSettingsのID
     */
    settings_id: string;
    /**
     * 処理結果メッセージ
     */
    message: string;
    /**
     * 再生成されたcontent
     */
    content: SettingsContent_Output;
};

type RegisterLinkRequest = {
    charahomeUid: string;
    derivedUid: string;
    appId: string;
    derivedProjectId: string;
    deviceName?: (string | null);
};

/**
 * RelationshipRole→コンテキスト変換の1エントリ
 */
type RelationshipContextEntry = {
    /**
     * 好意レベル
     */
    affinity: AffinityLevel;
    /**
     * 力関係
     */
    power: PowerDynamic;
    /**
     * 絆の種類
     */
    bond: BondType;
};

/**
 * RelationshipRole→(AffinityLevel, PowerDynamic, BondType) マッピング レスポンスDTO
 */
type RelationshipContextMapResponse = {
    /**
     * RelationshipRole→コンテキストマッピング
     */
    mapping: Record<string, RelationshipContextEntry>;
};

/**
 * エイリアス削除のリクエストスキーマ
 */
type RemoveAliasRequest = {
    /**
     * 削除するエイリアス
     */
    alias: string;
    /**
     * ロケール
     */
    locale: SupportedLanguage$1;
};

/**
 * 並び替えリクエスト
 */
type ReorderRequest = {
    /**
     * カテゴリID
     */
    tag_category_id: string;
    /**
     * 並び替え対象
     */
    items: Array<Record<string, any>>;
};

/**
 * 並び替え結果レスポンス
 */
type ReorderResultResponse = {
    /**
     * 成功フラグ
     */
    ok: boolean;
    /**
     * 更新件数
     */
    updated: number;
};

/**
 * 通報理由
 */
type ReportReason = 'copyright' | 'inappropriate' | 'spam' | 'other';

type ReportCreateRequest = {
    /**
     * 対象タイプ
     */
    target_type: string;
    /**
     * 対象ID
     */
    target_id: string;
    reason: ReportReason;
    /**
     * 詳細説明
     */
    detail?: string;
};

/**
 * 表現解決リクエスト
 */
type ResolveExpressionRequest = {
    /**
     * 解決したいemotion_id
     */
    emotion_id: string;
    /**
     * 利用可能なemotion_idリスト
     */
    available_emotion_ids: Array<string>;
};

/**
 * 表現解決レスポンス
 */
type ResolveExpressionResponse = {
    /**
     * 元のemotion_id
     */
    original_emotion_id: string;
    /**
     * 解決されたemotion_id（Noneはスルー）
     */
    resolved_emotion_id?: (string | null);
    /**
     * 解決タイプ: exact_match, group_fallback, skip
     */
    resolution_type: string;
};

type ReviewCreateRequest = {
    /**
     * 対象タイプ
     */
    target_type: string;
    /**
     * 対象ID
     */
    target_id: string;
    /**
     * 評価
     */
    rating: number;
    /**
     * コメント
     */
    comment?: string;
};

type ReviewResponse = {
    /**
     * レビューID
     */
    review_id: string;
    /**
     * レビュー投稿者ID
     */
    user_id: string;
    /**
     * 対象タイプ
     */
    target_type: string;
    /**
     * 対象ID
     */
    target_id: string;
    /**
     * 評価
     */
    rating: number;
    /**
     * コメント
     */
    comment: string;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type ReviewListResponse = {
    /**
     * レビューリスト
     */
    items: Array<ReviewResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

/**
 * 審査ログ一覧レスポンス
 */
type ReviewLogListResponse = {
    /**
     * 審査ログリスト
     */
    items: Array<ReviewLogResponse>;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * 審査ステータスレスポンス
 */
type ReviewStatusResponse = {
    /**
     * 現在の審査ステータス
     */
    review_status: ReviewStatus;
    /**
     * 最新の審査ログ
     */
    latest_review_log?: (ReviewLogResponse | null);
};

/**
 * スケジュールの時間精度
 */
type TimeSpecificity = 'exact' | 'early_morning' | 'dawn' | 'morning' | 'late_morning' | 'early_afternoon' | 'evening' | 'early_night' | 'late_night' | 'all_day';

type ScheduleCreateRequest = {
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明
     */
    description?: (string | null);
    /**
     * 開始日時
     */
    start: string;
    /**
     * 終了日時
     */
    end?: (string | null);
    /**
     * 時間精度
     */
    time_specificity?: TimeSpecificity;
    /**
     * 場所
     */
    location?: (string | null);
    /**
     * 表示色
     */
    color?: (string | null);
    /**
     * 繰り返しルール
     */
    rrule?: (string | null);
};

type ScheduleResponse = {
    /**
     * スケジュールID
     */
    schedule_id: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * タイトル
     */
    title: string;
    /**
     * 説明
     */
    description?: (string | null);
    /**
     * 開始日時
     */
    start: (string | null);
    /**
     * 終了日時
     */
    end?: (string | null);
    /**
     * 時間精度
     */
    time_specificity: TimeSpecificity;
    /**
     * 場所
     */
    location?: (string | null);
    /**
     * 表示色
     */
    color?: (string | null);
    /**
     * 繰り返しルール
     */
    rrule?: (string | null);
    /**
     * 作成日時
     */
    created_at: (string | null);
    /**
     * 更新日時
     */
    updated_at: (string | null);
};

type ScheduleListResponse = {
    /**
     * スケジュールリスト
     */
    items: Array<ScheduleResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得上限数
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

type ScheduleUpdateRequest = {
    /**
     * タイトル
     */
    title?: (string | null);
    /**
     * 説明
     */
    description?: (string | null);
    /**
     * 開始日時
     */
    start?: (string | null);
    /**
     * 終了日時
     */
    end?: (string | null);
    /**
     * 時間精度
     */
    time_specificity?: (TimeSpecificity | null);
    /**
     * 場所
     */
    location?: (string | null);
    /**
     * 表示色
     */
    color?: (string | null);
    /**
     * 繰り返しルール
     */
    rrule?: (string | null);
};

/**
 * 画面向き対応
 */
type ScreenOrientation = 'portrait' | 'landscape' | 'both';

type SessionTokenUsageCreateRequest = {
    /**
     * 合計プロンプトトークン数
     */
    total_prompt_tokens?: number;
    /**
     * 合計完了トークン数
     */
    total_completion_tokens?: number;
    /**
     * 合計キャッシュ済みトークン数
     */
    total_cached_tokens?: number;
    /**
     * 合計トークン数
     */
    total_tokens?: number;
    /**
     * 合計コスト（USD）
     */
    total_cost_usd?: number;
    /**
     * モデル別使用量
     */
    by_model?: Record<string, Record<string, number>>;
    /**
     * リクエストタイプ別使用量
     */
    by_request_type?: Record<string, Record<string, number>>;
};

type SessionHistoryCreateRequest = {
    /**
     * セッション開始日時
     */
    started_at: string;
    /**
     * セッション終了日時
     */
    ended_at?: (string | null);
    /**
     * メッセージ数
     */
    message_count?: number;
    /**
     * トークン使用量
     */
    token_usage?: SessionTokenUsageCreateRequest;
};

type SessionTokenUsageResponse = {
    /**
     * 合計プロンプトトークン数
     */
    total_prompt_tokens: number;
    /**
     * 合計完了トークン数
     */
    total_completion_tokens: number;
    /**
     * 合計キャッシュ済みトークン数
     */
    total_cached_tokens: number;
    /**
     * 合計トークン数
     */
    total_tokens: number;
    /**
     * 合計コスト（USD）
     */
    total_cost_usd: number;
    /**
     * モデル別使用量
     */
    by_model: Record<string, Record<string, number>>;
    /**
     * リクエストタイプ別使用量
     */
    by_request_type: Record<string, Record<string, number>>;
};

type SessionHistoryResponse = {
    /**
     * セッションID
     */
    session_id: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * セッション開始日時
     */
    started_at: (string | null);
    /**
     * セッション終了日時
     */
    ended_at?: (string | null);
    /**
     * メッセージ数
     */
    message_count: number;
    /**
     * トークン使用量
     */
    token_usage: SessionTokenUsageResponse;
    /**
     * 作成日時
     */
    created_at: (string | null);
    /**
     * 更新日時
     */
    updated_at: (string | null);
};

type SessionHistoryListResponse = {
    /**
     * セッション履歴リスト
     */
    items: Array<SessionHistoryResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * Settings自動タグ付けリクエスト
 */
type SettingsAutoTagRequest = {
    /**
     * 設定の説明文
     */
    description: string;
};

/**
 * キャラクターの性格・思考・言語パターンを定義する設定内容
 */
type SettingsContent_Input = {
    /**
     * 性格特性
     */
    personality_traits?: (PersonalityTraits | null);
    /**
     * 言語パターン
     */
    linguistic_patterns?: (LinguisticPatterns | null);
    /**
     * 意思決定パターン
     */
    decision_making?: (DecisionMaking | null);
    /**
     * 価値観・信念体系
     */
    value_and_belief_system?: (ValueAndBeliefSystem | null);
    /**
     * 複雑性要因
     */
    complexity_factors?: (ComplexityFactors | null);
};

type SettingsContentResponse = {
    /**
     * 設定の詳細コンテンツ
     */
    content: SettingsContent_Output;
};

type SettingsCreateRequest = {
    /**
     * キャラクター設定の概要
     */
    description: string;
    /**
     * 親SettingsのID
     */
    parent_settings_id?: (string | null);
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * 設定ID（省略時は自動生成）
     */
    settings_id?: (string | null);
};

/**
 * Settings作成リクエスト
 *
 * Note: 設定名や説明は locales フィールドで指定する。
 * 例: locales={"ja_jp": {"name": "設定名", "description": "説明"}}
 */
type SettingsCreateWithContentRequest = {
    /**
     * 設定の詳細内容
     */
    content: SettingsContent_Input;
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * ロケール別の設定情報（名前・説明を含む）
     */
    locales: Record<string, SettingsLocalized>;
    /**
     * 性別
     */
    gender?: (GenderType | null);
    /**
     * 親SettingsのID
     */
    parent_settings_id?: (string | null);
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * 設定ID（省略時は自動生成）
     */
    settings_id?: (string | null);
    /**
     * データソース
     */
    data_source?: DataSource;
};

/**
 * Settings一覧のレスポンススキーマ
 */
type SettingsListResponse = {
    /**
     * 設定リスト
     */
    items: Array<SettingsResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * フィールド値でのSettings検索リクエスト
 */
type SettingsSearchRequest = {
    /**
     * 所有者IDでフィルタ
     */
    owner_id?: (string | null);
    /**
     * 設定名でフィルタ
     */
    settings_name?: (string | null);
    /**
     * 性別でフィルタ
     */
    gender?: (GenderType | null);
    /**
     * 公開設定でフィルタ
     */
    publishing?: (ContentPublishing | null);
    /**
     * データソースでフィルタ
     */
    data_source?: (DataSource | null);
    /**
     * 取得件数
     */
    limit?: number;
    /**
     * ページネーションカーソル
     */
    cursor?: (string | null);
};

/**
 * Settings検索結果
 */
type SettingsSearchResponse = {
    /**
     * 検索結果のsettings_idリスト
     */
    settings_ids: Array<string>;
    /**
     * 次のページへのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * Settings更新リクエスト（PATCH用）
 *
 * Note: 設定名や説明は locales フィールドで更新する。
 * 例: locales={"ja_jp": {"name": "新しい名前", "content_description": "...", "display_description": "..."}}
 */
type SettingsUpdateRequest = {
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * ロケール別の設定情報（名前・説明を含む）
     */
    locales?: (Record<string, SettingsLocalized> | null);
    /**
     * 性別
     */
    gender?: (GenderType | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * 親SettingsのID
     */
    parent_settings_id?: (string | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
    /**
     * 詳細コンテンツ
     */
    content?: (SettingsContent_Input | null);
};

/**
 * 署名付きURLレスポンス
 */
type SignedUrlResponse = {
    /**
     * 署名付きURL
     */
    url: string;
};

/**
 * 類似タグアイテム
 */
type SimilarTagItem = {
    /**
     * タグID
     */
    tag_id: string;
    /**
     * タグ名
     */
    name: string;
    /**
     * 同義語
     */
    synonyms?: Array<string>;
    /**
     * 類似度スコア
     */
    score: number;
};

/**
 * 類似タグレスポンス
 */
type SimilarTagsResponse = {
    /**
     * 基準タグID
     */
    tag_id: string;
    /**
     * 類似タグリスト
     */
    items?: Array<SimilarTagItem>;
};

/**
 * シンプルなコピー操作のサマリー
 */
type SimpleCopySummary = {
    /**
     * 総件数
     */
    total: number;
    /**
     * コピーされた件数
     */
    copied: number;
    /**
     * スキップされた件数
     */
    skipped: number;
    /**
     * エラー一覧
     */
    errors?: Array<Record<string, any>>;
};

/**
 * シンプルな感情コピー操作のレスポンス
 */
type SimpleCopyEmotionsResponse = {
    /**
     * 結果メッセージ
     */
    message: string;
    /**
     * コピー元ID
     */
    source_id: string;
    /**
     * コピー先ID
     */
    target_id: string;
    /**
     * 感情コピーのサマリー
     */
    emotions: SimpleCopySummary;
};

/**
 * シンプルなモーションコピー操作のレスポンス
 */
type SimpleCopyMotionsResponse = {
    /**
     * 結果メッセージ
     */
    message: string;
    /**
     * コピー元ID
     */
    source_id: string;
    /**
     * コピー先ID
     */
    target_id: string;
    /**
     * モーションコピーのサマリー
     */
    motions: SimpleCopySummary;
};

/**
 * Snippet一括削除レスポンス
 */
type SnippetBulkDeleteResponse = {
    /**
     * 削除されたスニペット数
     */
    deleted_count: number;
};

/**
 * Snippet作成リクエスト
 */
type SnippetCreateRequest = {
    /**
     * スニペットID（省略時は自動生成）
     */
    snippet_id?: (string | null);
    /**
     * マッチング条件（role, emotion_id, audience_scale, dialogue_act, situation など）
     */
    tags: Record<string, string>;
    /**
     * このタグ条件下での話し方の傾向
     */
    speech_tendency: string;
    /**
     * 発話例（{first_person}, {second_person} をプレースホルダーとして使用）
     */
    utterance_examples?: Array<string>;
    /**
     * 態度や反応方針のメモ
     */
    behavioral_notes?: Array<string>;
};

/**
 * Client-input版: Snippet LLM生成リクエスト
 */
type SnippetGenerateFromInputRequest = {
    /**
     * SettingsContent情報（JSON文字列またはテキスト）
     */
    settings_content: string;
    /**
     * 生成してほしいタグの組み合わせリスト
     */
    requested_tags?: (Array<Record<string, string>> | null);
    /**
     * キャラクター固有の行動ルールや補足情報
     */
    additional_context?: (string | null);
};

/**
 * Snippet LLM生成リクエスト
 */
type SnippetGenerateRequest = {
    /**
     * 生成してほしいタグの組み合わせリスト。指定時はこれらのタグに対してのみ生成。省略時はLLMが自動選択
     */
    requested_tags?: (Array<Record<string, string>> | null);
    /**
     * キャラクター固有の行動ルールや補足情報。例：「煽り口調は仲良い相手との1対1会話限定。公衆の前では大人びた普通の少女として振る舞う」
     */
    additional_context?: (string | null);
};

/**
 * Snippet LLM生成レスポンス
 */
type SnippetGenerateResponse = {
    /**
     * 生成されたスニペットリスト
     */
    snippets: Array<CharacterBehaviorSnippetResponse>;
    /**
     * 生成されたスニペット数
     */
    count: number;
};

/**
 * Client-input版: Snippet再生成リクエスト
 */
type SnippetRegenerateFromInputRequest = {
    /**
     * SettingsContent情報（JSON文字列またはテキスト）
     */
    settings_content: string;
    /**
     * 既存スニペットデータ（JSON文字列またはテキスト）
     */
    existing_snippets: string;
    /**
     * 変更要望
     */
    modification_instruction: string;
};

/**
 * DB-fetch版: Snippet再生成リクエスト
 */
type SnippetRegenerateRequest = {
    /**
     * 変更要望（例: 「もっと可愛い言い回しにして」）
     */
    modification_instruction: string;
};

/**
 * Snippet更新リクエスト（PATCH用）
 */
type SnippetUpdateRequest = {
    /**
     * マッチング条件
     */
    tags?: (Record<string, string> | null);
    /**
     * 話し方の傾向
     */
    speech_tendency?: (string | null);
    /**
     * 発話例
     */
    utterance_examples?: (Array<string> | null);
    /**
     * 態度や反応方針のメモ
     */
    behavioral_notes?: (Array<string> | null);
};

/**
 * Spriteモデルの姿勢別画像データのレスポンス
 */
type SpriteModelPostureDataResponse = {
    /**
     * コンポジット画像アセットID（全レイヤー結合済み）
     */
    composite_image_asset_id: string;
    /**
     * コンポジット画像アセットバージョンID
     */
    composite_image_asset_version_id?: (string | null);
    /**
     * ボディ画像アセットID（非分離要素焼き込み済み素体）
     */
    body_image_asset_id?: (string | null);
    /**
     * ボディ画像アセットバージョンID
     */
    body_image_asset_version_id?: (string | null);
    /**
     * まぶた+眉毛レイヤー画像アセットID
     */
    eyelid_image_asset_id?: (string | null);
    /**
     * まぶた+眉毛レイヤー画像アセットバージョンID
     */
    eyelid_image_asset_version_id?: (string | null);
    /**
     * 目玉/瞳レイヤー画像アセットID
     */
    eyeball_image_asset_id?: (string | null);
    /**
     * 目玉/瞳レイヤー画像アセットバージョンID
     */
    eyeball_image_asset_version_id?: (string | null);
    /**
     * 口の画像アセットID
     */
    mouth_image_asset_id?: (string | null);
    /**
     * 口の画像アセットバージョンID
     */
    mouth_image_asset_version_id?: (string | null);
    /**
     * 顔位置（正規化座標）
     */
    face_position: FacePositionResponse;
    /**
     * body画像に焼き込み済みで差し替え不可能な描画レイヤー
     */
    locked_layers?: Array<RenderLayer>;
    /**
     * このポーズで見えない/装備品を表示できない身体部位
     */
    hidden_slots?: Array<BodySlot>;
    /**
     * 部位ごとの位置・領域・角度データ（自動配置用、オプショナル）
     */
    attachment_point_poses?: Record<string, AttachmentPointPoseResponse>;
};

/**
 * Spriteモデルの姿勢マップのレスポンス
 */
type SpriteModelPosturesResponse = {
    /**
     * 立ち姿勢
     */
    standing?: (SpriteModelPostureDataResponse | null);
    /**
     * 座り姿勢
     */
    sitting?: (SpriteModelPostureDataResponse | null);
    /**
     * 寝転び姿勢
     */
    lying?: (SpriteModelPostureDataResponse | null);
};

/**
 * Spriteモデルのレスポンススキーマ
 */
type SpriteModelResponse = {
    /**
     * 姿勢別画像データ
     */
    postures?: SpriteModelPosturesResponse;
    /**
     * レイヤー結合済み一枚絵（サムネ・プレビュー用）
     */
    preview_image_asset_id?: (string | null);
    /**
     * プレビュー画像のバージョンID
     */
    preview_image_asset_version_id?: (string | null);
    /**
     * イラストレーター名
     */
    illustrator_name?: (string | null);
    /**
     * キャラクターデザイナー名
     */
    character_designer_name?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * 運営審査確定リクエスト
 */
type StaffConfirmRequest = {
    /**
     * 確定したコンテンツラベル（カテゴリ名 -> 頻度・強度）
     */
    result_labels: Record<string, ContentDetailRequest>;
    /**
     * カテゴリごとの判断説明
     */
    assessments?: Record<string, ContentAssessmentRequest>;
    /**
     * 審査者コメント
     */
    reviewer_note?: (string | null);
    /**
     * 申告と不一致で修正した場合True
     */
    is_correction?: boolean;
};

/**
 * 運営審査要求リクエスト
 */
type StaffReviewRequestRequest = {
    /**
     * 詳細説明（自由記述）
     */
    detail_description?: (string | null);
    /**
     * 該当箇所の提示（参照キーリスト）
     */
    reference_locations?: Array<string>;
};

/**
 * StandardContextTable レスポンスDTO（Layer 0 コンテキスト）
 */
type StandardContextTableResponse = {
    /**
     * 好意レベル別の補正
     */
    affinity: Record<string, ContextModifierSet>;
    /**
     * 力関係別の補正
     */
    power_dynamic: Record<string, ContextModifierSet>;
    /**
     * 絆種類別の補正
     */
    bond_type: Record<string, ContextModifierSet>;
    /**
     * 聴衆規模別の補正
     */
    audience_scale: Record<string, ContextModifierSet>;
    /**
     * 状況別の補正
     */
    situation: Record<string, ContextModifierSet>;
    /**
     * AffinityLevel補間ウェイト
     */
    affinity_interpolation_weights: Record<string, number>;
};

/**
 * ストーリーのAI使用申告
 */
type StoryAiUsage = {
    /**
     * ストーリーテキスト本文のAI使用
     */
    story_text?: CreationMethod;
    /**
     * 登場キャラクターのビジュアルのAI使用
     */
    character_visual?: CreationMethod;
    /**
     * 背景・素材イラストのAI使用
     */
    illustration?: CreationMethod;
    /**
     * BGM・効果音のAI使用
     */
    audio?: CreationMethod;
    /**
     * ランタイム中のAI生成（ルート分岐・動的対話等）
     */
    has_runtime_generation?: boolean;
    /**
     * キャラクターボイス・ナレーションに生収録（人間の演技）を使用
     */
    has_live_voice_acting?: boolean;
};

/**
 * ストーリーの多言語情報
 */
type StoryLocalized = {
    /**
     * ストーリー名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: string;
};

/**
 * ストーリー設定
 */
type StorySettings = {
    /**
     * デフォルトBGMの音声アセットID
     */
    default_bgm_audio_asset_id?: (string | null);
    /**
     * デフォルトBGMの音声アセットバージョンID
     */
    default_bgm_audio_asset_version_id?: (string | null);
    /**
     * デフォルト背景の画像アセットID
     */
    default_background_image_asset_id?: (string | null);
    /**
     * デフォルト背景の画像アセットバージョンID
     */
    default_background_image_asset_version_id?: (string | null);
    /**
     * ナレーション読み上げに使用するキャラクターID（そのキャラの音声設定を使用）
     */
    narrative_character_id?: (string | null);
    /**
     * ダイアログボックスのスタイルID
     */
    dialog_style_id?: (string | null);
    /**
     * ボタン/選択肢のスタイルID
     */
    button_style_id?: (string | null);
    /**
     * デフォルトフォントID
     */
    default_font_id?: (string | null);
    /**
     * 一文字あたりのテキスト送り速度（秒）、0.03が標準
     */
    default_text_speed?: number;
    screen_orientation?: ScreenOrientation;
};

/**
 * Story作成リクエスト
 */
type StoryCreateRequest = {
    /**
     * 著者名
     */
    author: string;
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * AI使用申告（カテゴリ別）
     */
    ai_usage?: StoryAiUsage;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_id?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * 多言語情報
     */
    locales: Record<string, StoryLocalized>;
    /**
     * ストーリー全体の設定
     */
    settings?: (StorySettings | null);
    /**
     * ストーリー全体で使用するアセット
     */
    assets?: (AssetCatalog | null);
    /**
     * 開始シーンID
     */
    opening_scene_id?: (string | null);
    /**
     * 終了シーンIDリスト
     */
    ending_scene_ids?: Array<string>;
};

/**
 * Story削除のレスポンス
 */
type StoryDeleteResponse = {
    /**
     * 結果メッセージ
     */
    message?: string;
    /**
     * 削除されたストーリーID
     */
    story_id: string;
    /**
     * 削除されたシーン数
     */
    deleted_scenes?: number;
    /**
     * 削除されたリンク数
     */
    deleted_links?: number;
};

/**
 * Story複製のレスポンス
 */
type StoryDuplicateResponse = {
    /**
     * 結果メッセージ
     */
    message?: string;
    /**
     * 複製元ストーリーID
     */
    original_story_id: string;
    /**
     * 新しいストーリーID
     */
    new_story_id: string;
    /**
     * コピーされたシーン数
     */
    copied_scenes?: number;
    /**
     * コピーされたリンク数
     */
    copied_links?: number;
};

/**
 * Promote時のStoryトップレベルフィールド全てのスナップショット
 */
type StoryEntitySnapshot = {
    /**
     * ストーリーID
     */
    story_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type?: OwnerType;
    /**
     * 著者名
     */
    author: string;
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning?: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions?: UsageRestrictions;
    /**
     * AI使用申告
     */
    ai_usage?: StoryAiUsage;
    /**
     * データソース
     */
    data_source?: DataSource;
    review_status?: ReviewStatus;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイル画像アセットバージョンID
     */
    thumbnail_image_asset_version_id?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * 多言語情報
     */
    locales?: Record<string, StoryLocalized>;
    /**
     * ストーリー全体の設定
     */
    settings?: StorySettings;
    /**
     * ストーリー全体で使用するアセット
     */
    assets?: AssetCatalog;
    /**
     * 開始シーンID
     */
    opening_scene_id?: (string | null);
    /**
     * 終了シーンIDリスト
     */
    ending_scene_ids?: Array<string>;
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 作成日時
     */
    created_at?: string;
    /**
     * 更新日時
     */
    updated_at?: string;
};

type StoryInstanceCreateRequest = {
    /**
     * ストーリーテンプレートID
     */
    story_template_id: string;
    /**
     * アクセスタイプ
     */
    access_type?: InstanceAccessType;
};

type StoryInstanceResponse = {
    /**
     * インスタンスID
     */
    instance_id: string;
    /**
     * ユーザーID
     */
    user_id: string;
    /**
     * ストーリーテンプレートID
     */
    story_template_id: string;
    /**
     * 元エンティティID
     */
    source_entity_id: string;
    /**
     * アクセスタイプ
     */
    access_type: InstanceAccessType;
    /**
     * 利用可能な更新テンプレートID
     */
    available_update_template_id?: (string | null);
    /**
     * 現在のシーンID
     */
    current_scene_id?: (string | null);
    /**
     * フラグ状態
     */
    flags?: Record<string, boolean>;
    /**
     * カウンター状態
     */
    counters?: Record<string, number>;
    /**
     * スコア状態
     */
    scores?: Record<string, number>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type StoryInstanceListResponse = {
    /**
     * インスタンスリスト
     */
    items: Array<StoryInstanceResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

/**
 * Story Response DTO - エンティティと同一フィールド
 */
type StoryResponse = {
    /**
     * ストーリーID
     */
    story_id?: (string | null);
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type?: OwnerType;
    /**
     * 著者名
     */
    author: string;
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * AI使用申告（カテゴリ別）
     */
    ai_usage?: StoryAiUsage;
    /**
     * データソース
     */
    data_source?: DataSource;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_id?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * 多言語情報
     */
    locales?: Record<string, StoryLocalized>;
    /**
     * ストーリー全体の設定
     */
    settings?: StorySettings;
    /**
     * ストーリー全体で使用するアセット
     */
    assets?: AssetCatalog;
    /**
     * 開始シーンID
     */
    opening_scene_id?: (string | null);
    /**
     * 終了シーンIDリスト
     */
    ending_scene_ids?: Array<string>;
    /**
     * スキーマバージョン
     */
    version?: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Story一覧のレスポンス
 */
type StoryListResponse = {
    /**
     * ストーリーリスト
     */
    items: Array<StoryResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * シーンの多言語情報
 */
type StorySceneLocalized = {
    /**
     * シーン名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: string;
};

/**
 * 待機（シーンレベル、テキスト内の[wait]とは別）
 */
type WaitEvent = {
    /**
     * イベントタイプ
     */
    event_type?: string;
    /**
     * 待機時間（秒）
     */
    duration: number;
};

/**
 * StoryScene作成リクエスト
 */
type StorySceneCreateRequest = {
    /**
     * LLM用の短い分類説明
     */
    routing_description?: string;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_id?: (string | null);
    /**
     * 多言語情報
     */
    locales: Record<string, StorySceneLocalized>;
    /**
     * 原文テキスト
     */
    original_text?: string;
    /**
     * シーン固有設定
     */
    settings?: (StorySettings | null);
    /**
     * このシーンで使用するアセット
     */
    assets?: (AssetCatalog | null);
    /**
     * イベントリスト
     */
    events?: Array<(BackgroundChangeEvent | BgmChangeEvent | SePlayEvent | CharacterShowEvent | CharacterHideEvent | CharacterEmotionEvent | CharacterMotionEvent | CharacterFramingChangeEvent | ImageShowEvent | ImageHideEvent | WaitEvent | SpeechModeChangeEvent | PlayerActionEvent | CharacterSpeakEvent_Input | NarrativeEvent_Input | ScreenShakeEvent | ScreenFlashEvent | ScreenFadeInEvent | ScreenFadeOutEvent | ScreenBlurEvent | ScreenColorAdjustEvent | ScreenResetEvent | CharacterShakeEvent | CharacterBounceEvent | CharacterScalePulseEvent | CharacterHighlightEvent | CharacterSilhouetteEvent | CharacterSpinEvent | CharacterResetEvent | ImageShakeEvent | ImageBounceEvent | ImageScalePulseEvent | ImageHighlightEvent | ImageSilhouetteEvent | ImageSpinEvent | ImageResetEvent)>;
};

/**
 * StorySceneLink作成リクエスト
 */
type StorySceneLinkCreateRequest = {
    /**
     * 遷移元シーンID
     */
    source_scene_id: string;
    /**
     * 見出しテキスト（多言語）
     */
    heading?: Record<string, string>;
    /**
     * 選択肢リスト
     */
    choices?: Array<ChoiceOption_Input>;
    /**
     * 自動遷移リスト
     */
    auto_transitions?: Array<AutoTransition_Input>;
    /**
     * 自由入力設定
     */
    free_input_config?: (FreeInputConfig_Input | null);
    /**
     * 自由入力ルートリスト
     */
    free_input_routes?: Array<FreeInputRoute_Input>;
};

/**
 * StorySceneLink Response DTO - エンティティと同一フィールド
 */
type StorySceneLinkResponse = {
    /**
     * リンクID
     */
    link_id?: (string | null);
    /**
     * 遷移元シーンID
     */
    source_scene_id: string;
    /**
     * 見出しテキスト（多言語）
     */
    heading?: Record<string, string>;
    /**
     * 選択肢リスト
     */
    choices?: Array<ChoiceOption_Output>;
    /**
     * 自動遷移リスト
     */
    auto_transitions?: Array<AutoTransition_Output>;
    /**
     * 自由入力設定
     */
    free_input_config?: (FreeInputConfig_Output | null);
    /**
     * 自由入力ルートリスト
     */
    free_input_routes?: Array<FreeInputRoute_Output>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * StorySceneLink一覧のレスポンス
 */
type StorySceneLinkListResponse = {
    /**
     * リンクリスト
     */
    items: Array<StorySceneLinkResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * StorySceneLink更新リクエスト（PATCH用）
 */
type StorySceneLinkUpdateRequest = {
    /**
     * 見出しテキスト（多言語）
     */
    heading?: (Record<string, string> | null);
    /**
     * 選択肢リスト
     */
    choices?: (Array<ChoiceOption_Input> | null);
    /**
     * 自動遷移リスト
     */
    auto_transitions?: (Array<AutoTransition_Input> | null);
    /**
     * 自由入力設定
     */
    free_input_config?: (FreeInputConfig_Input | null);
    /**
     * 自由入力ルートリスト
     */
    free_input_routes?: (Array<FreeInputRoute_Input> | null);
};

/**
 * StoryScene Response DTO - エンティティと同一フィールド
 */
type StorySceneResponse = {
    /**
     * シーンID
     */
    scene_id?: (string | null);
    /**
     * LLM用の短い分類説明
     */
    routing_description?: string;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_id?: (string | null);
    /**
     * 多言語情報
     */
    locales?: Record<string, StorySceneLocalized>;
    /**
     * 原文テキスト
     */
    original_text?: string;
    /**
     * シーン固有設定
     */
    settings?: StorySettings;
    /**
     * このシーンで使用するアセット
     */
    assets?: AssetCatalog;
    /**
     * イベントリスト
     */
    events?: Array<(BackgroundChangeEvent | BgmChangeEvent | SePlayEvent | CharacterShowEvent | CharacterHideEvent | CharacterEmotionEvent | CharacterMotionEvent | CharacterFramingChangeEvent | ImageShowEvent | ImageHideEvent | WaitEvent | SpeechModeChangeEvent | PlayerActionEvent | CharacterSpeakEvent_Output | NarrativeEvent_Output | ScreenShakeEvent | ScreenFlashEvent | ScreenFadeInEvent | ScreenFadeOutEvent | ScreenBlurEvent | ScreenColorAdjustEvent | ScreenResetEvent | CharacterShakeEvent | CharacterBounceEvent | CharacterScalePulseEvent | CharacterHighlightEvent | CharacterSilhouetteEvent | CharacterSpinEvent | CharacterResetEvent | ImageShakeEvent | ImageBounceEvent | ImageScalePulseEvent | ImageHighlightEvent | ImageSilhouetteEvent | ImageSpinEvent | ImageResetEvent)>;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * StoryScene一覧のレスポンス
 */
type StorySceneListResponse = {
    /**
     * シーンリスト
     */
    items: Array<StorySceneResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * StoryScene更新リクエスト（PATCH用）
 */
type StorySceneUpdateRequest = {
    /**
     * LLM用の短い分類説明
     */
    routing_description?: (string | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_id?: (string | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, StorySceneLocalized> | null);
    /**
     * 原文テキスト
     */
    original_text?: (string | null);
    /**
     * シーン固有設定
     */
    settings?: (StorySettings | null);
    /**
     * このシーンで使用するアセット
     */
    assets?: (AssetCatalog | null);
    /**
     * イベントリスト
     */
    events?: null;
};

type StoryTemplateResponse = {
    /**
     * テンプレートID
     */
    template_id: string;
    /**
     * 元エンティティID
     */
    source_entity_id: string;
    /**
     * バージョン番号
     */
    version_number: number;
    /**
     * 変更履歴
     */
    changelog?: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    /**
     * 改変ポリシー
     */
    modification_policy: ModificationPolicy;
    /**
     * 改変元テンプレートID
     */
    origin_template_id?: (string | null);
    /**
     * 多言語情報
     */
    locales?: Record<string, TemplateLocalized>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * Entityの全トップレベルデータ
     */
    snapshot: StoryEntitySnapshot;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type StoryTemplateListResponse = {
    /**
     * テンプレートリスト
     */
    items: Array<StoryTemplateResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページカーソル
     */
    next_cursor?: (string | null);
};

type StoryTemplatePromoteRequest = {
    /**
     * 元ストーリーID
     */
    source_story_id: string;
    /**
     * クリエイターID
     */
    creator_id: string;
    /**
     * 変更履歴
     */
    changelog?: string;
    /**
     * 改変ポリシー
     */
    modification_policy?: ModificationPolicy;
    /**
     * 多言語情報JSON
     */
    locales_json?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: SupportedLanguage$1;
    /**
     * タグリストJSON
     */
    tags_json?: (string | null);
};

type StoryTemplateUpdateRequest = {
    /**
     * 改変ポリシー
     */
    modification_policy?: (ModificationPolicy | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, TemplateLocalized> | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
};

/**
 * Story更新リクエスト（PATCH用、全フィールドOptional）
 */
type StoryUpdateRequest = {
    /**
     * 著者名
     */
    author?: (string | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * AI使用申告（カテゴリ別）
     */
    ai_usage?: (StoryAiUsage | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_id?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, StoryLocalized> | null);
    /**
     * ストーリー全体の設定
     */
    settings?: (StorySettings | null);
    /**
     * ストーリー全体で使用するアセット
     */
    assets?: (AssetCatalog | null);
    /**
     * 開始シーンID
     */
    opening_scene_id?: (string | null);
    /**
     * 終了シーンIDリスト
     */
    ending_scene_ids?: (Array<string> | null);
};

/**
 * ストーリーとその子要素を一括で返すレスポンス
 */
type StoryWithChildrenResponse = {
    /**
     * ストーリー
     */
    story: StoryResponse;
    /**
     * シーンリスト
     */
    scenes?: Array<StorySceneResponse>;
    /**
     * リンクリスト
     */
    links?: Array<StorySceneLinkResponse>;
};

/**
 * 汎用成功レスポンス
 */
type SuccessResponse = {
    /**
     * 成功フラグ
     */
    ok?: boolean;
    /**
     * メッセージ
     */
    message?: (string | null);
};

/**
 * テキストで感情提案のリクエストスキーマ
 */
type SuggestByTextRequest = {
    /**
     * 検索する感情名
     */
    query_name: string;
    /**
     * 検索する感情の説明
     */
    query_description?: (string | null);
    /**
     * ロケール
     */
    locale: SupportedLanguage$1;
    /**
     * 取得件数
     */
    'k'?: number;
    /**
     * 優先するデータソース
     */
    prefer?: PreferType;
};

/**
 * Entitlementからの同期リクエスト
 */
type SyncFromEntitlementRequest = {
    /**
     * EntitlementID
     */
    entitlement_id: string;
    /**
     * アセットID
     */
    asset_id?: (string | null);
    /**
     * アイテム種別
     */
    item_category: string;
    /**
     * 表示名
     */
    display_name: string;
    /**
     * 説明
     */
    description: string;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * アイテムの簡潔な説明（100文字以内）
     */
    brief_description: string;
};

/**
 * 同義語操作のリクエストスキーマ
 */
type SynonymsRequest = {
    /**
     * 対象ロケール
     */
    locale: SupportedLanguage$1;
    /**
     * 追加/削除する同義語リスト
     */
    synonyms: Array<string>;
};

/**
 * order_in_categoryを含むカテゴリアイテム
 */
type TagCategoryItemWithOrder = {
    /**
     * カテゴリID
     */
    tag_category_id: string;
    /**
     * カテゴリ名
     */
    name: string;
    /**
     * 説明
     */
    description?: (string | null);
    /**
     * カテゴリ内並び順
     */
    order_in_category?: number;
};

/**
 * タグが属するカテゴリ一覧レスポンス
 */
type TagCategoriesForTagResponse = {
    /**
     * タグID
     */
    tag_id: string;
    /**
     * タグ名
     */
    name: string;
    /**
     * 同義語
     */
    synonyms?: Array<string>;
    /**
     * 所属カテゴリ一覧
     */
    categories?: Array<TagCategoryItemWithOrder>;
};

/**
 * タグカテゴリ一覧レスポンス
 */
type TagCategoriesResponse = {
    /**
     * 利用可能なカテゴリ一覧
     */
    categories: Array<string>;
};

/**
 * カテゴリ作成リクエスト
 */
type TagCategoryCreateRequest = {
    /**
     * カテゴリID
     */
    tag_category_id: string;
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * ロケール別翻訳
     */
    locales: Record<string, TagCategoryLocalized>;
    /**
     * 親カテゴリID
     */
    parent_id?: (string | null);
    /**
     * UI並び順
     */
    order?: number;
    /**
     * 最低付与数
     */
    min_required?: number;
    /**
     * 最大付与数
     */
    max_allowed?: (number | null);
};

/**
 * リンク作成リクエスト
 */
type TagCategoryLinkCreateRequest = {
    /**
     * カテゴリID
     */
    tag_category_id: string;
    /**
     * タグID
     */
    tag_id: string;
    /**
     * カテゴリ内並び順
     */
    order_in_category?: number;
};

/**
 * locale解決後のTagCategoryレスポンス
 */
type TagCategoryWithLocaleResponse = {
    /**
     * カテゴリID
     */
    tag_category_id: string;
    /**
     * 解決されたカテゴリ名
     */
    name: string;
    /**
     * 解決された説明
     */
    description?: (string | null);
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別翻訳
     */
    locales: Record<string, TagCategoryLocalized>;
    /**
     * 親カテゴリID
     */
    parent_id?: (string | null);
    /**
     * UI並び順
     */
    order?: number;
    /**
     * 最低付与数
     */
    min_required?: number;
    /**
     * 最大付与数
     */
    max_allowed?: (number | null);
    /**
     * 作成者ID
     */
    owner_id: string;
    /**
     * スキーマバージョン
     */
    version?: number;
    /**
     * 作成時刻
     */
    created_at: string;
    /**
     * 更新時刻
     */
    updated_at: string;
};

/**
 * カーソルベースのTagCategoryリストレスポンス
 */
type TagCategoryListCursorResponse = {
    /**
     * カテゴリリスト（locale解決後）
     */
    items: Array<TagCategoryWithLocaleResponse>;
    /**
     * このページの取得件数
     */
    count: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * 相性スコア作成リクエスト
 */
type TagCompatibilityCreateRequest = {
    /**
     * カテゴリID（左）
     */
    left_tag_category_id: string;
    /**
     * タグID（左）
     */
    left_tag_id: string;
    /**
     * カテゴリID（右）
     */
    right_tag_category_id: string;
    /**
     * タグID（右）
     */
    right_tag_id: string;
    /**
     * 相性スコア
     */
    score: number;
    /**
     * 信頼度
     */
    confidence?: (number | null);
    /**
     * バッチID
     */
    batch_id?: (string | null);
    /**
     * 由来
     */
    source?: string;
    /**
     * 根拠・説明
     */
    reason: string;
    /**
     * 使用モデル識別子
     */
    model?: (string | null);
    /**
     * プロンプトバージョン
     */
    prompt?: (string | null);
};

/**
 * タグ作成リクエスト
 */
type TagCreateRequest = {
    /**
     * タグID
     */
    tag_id: string;
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * ロケール別翻訳
     */
    locales: Record<string, TagLocalized>;
};

/**
 * locale解決後のTagレスポンス
 */
type TagWithLocaleResponse = {
    /**
     * タグID
     */
    tag_id: string;
    /**
     * 解決されたタグ名
     */
    name: string;
    /**
     * 解決された同義語
     */
    synonyms?: Array<string>;
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * ロケール別翻訳
     */
    locales: Record<string, TagLocalized>;
    /**
     * 作成者ID
     */
    owner_id: string;
    /**
     * スキーマバージョン
     */
    version?: number;
    /**
     * 作成時刻
     */
    created_at: string;
    /**
     * 更新時刻
     */
    updated_at: string;
};

/**
 * カーソルベースのTagリストレスポンス
 */
type TagListCursorResponse = {
    /**
     * タグリスト（locale解決後）
     */
    items: Array<TagWithLocaleResponse>;
    /**
     * このページの取得件数
     */
    count: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * タグ検索結果アイテム
 */
type TagSearchResultItem = {
    /**
     * タグID
     */
    tag_id: string;
    /**
     * タグ名
     */
    name: string;
    /**
     * 同義語
     */
    synonyms?: Array<string>;
    /**
     * マッチタイプ（name/synonym）
     */
    match_type: string;
    /**
     * マッチスコア
     */
    score: number;
};

/**
 * タグ検索結果レスポンス
 */
type TagSearchResultResponse = {
    /**
     * 検索クエリ
     */
    query: string;
    /**
     * 検索ロケール
     */
    locale: string;
    /**
     * 検索結果
     */
    items: Array<TagSearchResultItem>;
};

/**
 * Taxonomy内のカテゴリアイテム
 */
type TaxonomyCategoryItem = {
    /**
     * カテゴリID
     */
    tag_category_id: string;
    /**
     * カテゴリ名
     */
    name: string;
    /**
     * 説明
     */
    description?: (string | null);
    /**
     * UI並び順
     */
    order?: number;
    /**
     * 最低付与数
     */
    min_required?: number;
    /**
     * 最大付与数
     */
    max_allowed?: (number | null);
};

/**
 * Taxonomy内のタグアイテム
 */
type TaxonomyTagItem = {
    /**
     * タグID
     */
    tag_id: string;
    /**
     * タグ名
     */
    name: string;
    /**
     * 同義語
     */
    synonyms?: Array<string>;
};

/**
 * Taxonomyレスポンス（再帰構造）
 */
type TaxonomyResponse = {
    /**
     * カテゴリ情報
     */
    category: TaxonomyCategoryItem;
    /**
     * タグリスト
     */
    tags?: Array<TaxonomyTagItem>;
    /**
     * 子カテゴリ
     */
    children?: Array<TaxonomyResponse>;
};

type ToolParameterPropertySchema = {
    /**
     * パラメータの型
     */
    type: string;
    /**
     * パラメータの説明
     */
    description?: string;
    /**
     * nullを許容するか
     */
    nullable?: boolean;
};

/**
 * ツール実行の位置（LLMレスポンスの前後）
 */
type ToolPosition = 'pre' | 'post';

type ToolDefinitionCreateRequest = {
    /**
     * ツール名
     */
    name: string;
    /**
     * ツールの説明
     */
    description?: string;
    /**
     * パラメータ定義
     */
    parameters?: Record<string, ToolParameterPropertySchema>;
    /**
     * 実行位置
     */
    position?: ToolPosition;
    /**
     * 組み込みハンドラ名
     */
    builtin_handler?: (string | null);
    /**
     * フロントエンドに通知するか
     */
    notify_frontend?: boolean;
    /**
     * 必須パラメータ名リスト
     */
    required?: Array<string>;
    /**
     * フォローアップをトリガーするか
     */
    triggers_followup?: boolean;
};

type ToolDefinitionResponse = {
    /**
     * ツール定義ID
     */
    tool_definition_id: string;
    /**
     * キャラクターID
     */
    character_id: string;
    /**
     * ツール名
     */
    name: string;
    /**
     * ツールの説明
     */
    description: string;
    /**
     * パラメータ定義
     */
    parameters: Record<string, ToolParameterPropertySchema>;
    /**
     * 実行位置
     */
    position: ToolPosition;
    /**
     * 組み込みハンドラ名
     */
    builtin_handler?: (string | null);
    /**
     * フロントエンドに通知するか
     */
    notify_frontend: boolean;
    /**
     * 必須パラメータ名リスト
     */
    required: Array<string>;
    /**
     * フォローアップをトリガーするか
     */
    triggers_followup: boolean;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

type ToolDefinitionListResponse = {
    /**
     * ツール定義リスト
     */
    items: Array<ToolDefinitionResponse>;
    /**
     * 総件数
     */
    total: number;
};

type ToolDefinitionUpdateRequest = {
    /**
     * ツールの説明
     */
    description?: (string | null);
    /**
     * パラメータ定義
     */
    parameters?: (Record<string, ToolParameterPropertySchema> | null);
    /**
     * 実行位置
     */
    position?: (ToolPosition | null);
    /**
     * 組み込みハンドラ名
     */
    builtin_handler?: (string | null);
    /**
     * フロントエンドに通知するか
     */
    notify_frontend?: (boolean | null);
    /**
     * 必須パラメータ名リスト
     */
    required?: (Array<string> | null);
    /**
     * フォローアップをトリガーするか
     */
    triggers_followup?: (boolean | null);
};

type TreeNode = {
    /**
     * 累積テキスト
     */
    cumulative_text: string;
    /**
     * トークン
     */
    token: string;
    /**
     * 確率
     */
    prob: number;
    /**
     * 条件付き確率
     */
    conditional_prob?: (number | null);
    /**
     * 子ノードリスト
     */
    children?: Array<TreeNode>;
};

type TTSRequest = {
    /**
     * セリフ
     */
    text?: string;
    /**
     * モデル名
     */
    speaker_name?: string;
    /**
     * True にすると音声とともにリップシンクフレームデータを返却する
     */
    return_lip_sync?: boolean;
};

type TurnEndPredictionRequest = {
    /**
     * 予測対象のテキスト
     */
    text: string;
    /**
     * プロンプトの接頭辞
     */
    prompt_prefix?: (string | null);
};

type TurnEndPredictionResponse = {
    /**
     * 発話終了確率
     */
    eou_prob: number;
    /**
     * 補完テキスト
     */
    completion?: (string | null);
    /**
     * レイテンシー（ミリ秒）
     */
    latency_ms: number;
    /**
     * 予測ツリー構造
     */
    tree?: (TreeNode | null);
};

/**
 * 統合LLMリクエストモデル（Structured Output専用）
 */
type UnifiedStructuredCompletionRequest = {
    /**
     * メッセージリスト
     */
    messages: Array<Record<string, any>>;
    /**
     * モデル名
     */
    model?: (string | null);
    /**
     * プロバイダー
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
    /**
     * ツール定義リスト
     */
    tools?: null;
    /**
     * ツール選択
     */
    tool_choice?: (string | Record<string, any> | null);
    /**
     * 必須：JSON Schema
     */
    response_format: Record<string, any>;
};

type UsageSummaryAccumulateRequest = {
    /**
     * 追加セッション数
     */
    total_sessions?: number;
    /**
     * 追加メッセージ数
     */
    total_messages?: number;
    /**
     * 追加プロンプトトークン数
     */
    total_prompt_tokens?: number;
    /**
     * 追加完了トークン数
     */
    total_completion_tokens?: number;
    /**
     * 追加キャッシュ済みトークン数
     */
    total_cached_tokens?: number;
    /**
     * 追加合計トークン数
     */
    total_tokens?: number;
    /**
     * 追加コスト（USD）
     */
    total_cost_usd?: number;
    /**
     * モデル別追加使用量
     */
    by_model?: Record<string, Record<string, number>>;
    /**
     * リクエストタイプ別追加使用量
     */
    by_request_type?: Record<string, Record<string, number>>;
};

type UsageSummaryResponse = {
    /**
     * 合計セッション数
     */
    total_sessions: number;
    /**
     * 合計メッセージ数
     */
    total_messages: number;
    /**
     * 合計プロンプトトークン数
     */
    total_prompt_tokens: number;
    /**
     * 合計完了トークン数
     */
    total_completion_tokens: number;
    /**
     * 合計キャッシュ済みトークン数
     */
    total_cached_tokens: number;
    /**
     * 合計トークン数
     */
    total_tokens: number;
    /**
     * 合計コスト（USD）
     */
    total_cost_usd: number;
    /**
     * モデル別使用量
     */
    by_model: Record<string, Record<string, number>>;
    /**
     * リクエストタイプ別使用量
     */
    by_request_type: Record<string, Record<string, number>>;
    /**
     * 最終更新日時
     */
    updated_at: string;
};

/**
 * ユーザー作成リクエスト
 *
 * Note: birth_date は文字列（YYYY-MM-DD形式）で受け取り、
 * サービス層でdate型に変換してエンティティに格納されます。
 */
type UserCreateRequest = {
    /**
     * ユーザー名
     */
    user_name: string;
    /**
     * ユーザー名の読み仮名
     */
    name_reading?: (string | null);
    /**
     * お気に入りキャラクターID
     */
    favorite_character_id?: (string | null);
    /**
     * 保有キャラクターIDリスト
     */
    character_ids?: Array<string>;
    /**
     * 生年月日（YYYY-MM-DD形式の文字列、サービス層でdate型に変換）
     */
    birth_date?: (string | null);
    /**
     * 利用規約バージョン
     */
    tos_version?: (string | null);
    /**
     * プライバシーポリシーバージョン
     */
    privacy_policy_version?: (string | null);
    /**
     * ガイドキャラクターIDマップ
     */
    guide_character_ids?: (Record<string, string> | null);
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
};

/**
 * ユーザー情報レスポンス
 *
 * Note: age と is_adult は birth_date から計算される派生フィールドです。
 * エンティティには存在せず、レスポンス生成時に算出されます。
 */
type UserResponse = {
    /**
     * ユーザーID
     */
    user_id: string;
    /**
     * スキーマバージョン
     */
    version?: number;
    /**
     * ユーザー名
     */
    user_name: string;
    /**
     * ユーザー名の読み仮名
     */
    name_reading?: (string | null);
    /**
     * お気に入りキャラクターID
     */
    favorite_character_id?: (string | null);
    /**
     * 保有キャラクターIDリスト
     */
    character_ids?: Array<string>;
    /**
     * 生年月日
     */
    birth_date?: (string | null);
    /**
     * 年齢（birth_dateから計算、エンティティには存在しない）
     */
    age?: (number | null);
    /**
     * 成人フラグ（ageから計算、エンティティには存在しない）
     */
    is_adult?: (boolean | null);
    /**
     * 利用規約同意日時
     */
    tos_accepted_at?: (string | null);
    /**
     * 利用規約バージョン
     */
    tos_version?: (string | null);
    /**
     * プライバシーポリシー同意日時
     */
    privacy_policy_accepted_at?: (string | null);
    /**
     * プライバシーポリシーバージョン
     */
    privacy_policy_version?: (string | null);
    /**
     * 年齢確認済みフラグ
     */
    age_verified?: boolean;
    /**
     * ガイドキャラクターIDマップ
     */
    guide_character_ids?: (Record<string, string> | null);
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
    /**
     * 作成日時
     */
    created_at: (string | null);
    /**
     * 更新日時
     */
    updated_at: (string | null);
};

type UserUpdateRequest = {
    /**
     * ユーザー名
     */
    user_name?: (string | null);
    /**
     * ユーザー名の読み仮名
     */
    name_reading?: (string | null);
    /**
     * お気に入りキャラクターID
     */
    favorite_character_id?: (string | null);
    /**
     * 保有キャラクターIDリスト
     */
    character_ids?: (Array<string> | null);
    /**
     * 生年月日 (YYYY-MM-DD)
     */
    birth_date?: (string | null);
    /**
     * 利用規約バージョン
     */
    tos_version?: (string | null);
    /**
     * プライバシーポリシーバージョン
     */
    privacy_policy_version?: (string | null);
    /**
     * ガイドキャラクターIDマップ
     */
    guide_character_ids?: (Record<string, string> | null);
    /**
     * アイコン画像アセットID
     */
    icon_image_asset_id?: (string | null);
};

/**
 * VadNonVerbalMapping レスポンスDTO（Layer 0 VAD）
 */
type VadNonVerbalMappingResponse = {
    /**
     * 感情グループID → 非言語プロファイル
     */
    group_profiles: Record<string, EmotionGroupNonVerbalProfile>;
    /**
     * softmax温度パラメータ
     */
    softmax_temperature: number;
};

/**
 * 価格検証リクエストの個別アイテム
 */
type ValidatePriceItem = {
    /**
     * mkt_{asset_type}_{asset_id} 形式
     */
    product_id: string;
    /**
     * Listing ID
     */
    listing_id: string;
    /**
     * クライアント計算の実効価格
     */
    effective_price: number;
    /**
     * Listing 自身の割引が適用されたか
     */
    is_discounted?: boolean;
    /**
     * 購入数量
     */
    quantity?: number;
};

/**
 * 価格検証リクエスト（billing-gateway から呼ばれる）
 */
type ValidatePricesRequest = {
    /**
     * 購入者のユーザーID
     */
    user_id: string;
    /**
     * ListingBundle 経由の場合
     */
    listing_bundle_id?: (string | null);
    /**
     * 検証対象アイテム一覧
     */
    items: Array<ValidatePriceItem>;
};

/**
 * 価格検証レスポンス
 */
type ValidatePricesResponse = {
    /**
     * 価格が正しいか
     */
    valid: boolean;
    /**
     * エラーコード
     */
    error_code?: (string | null);
    /**
     * エラーメッセージ
     */
    message?: (string | null);
    /**
     * エラー詳細
     */
    details?: (Record<string, any> | null);
};

/**
 * 動画アセットの多言語情報
 */
type VideoAssetLocalized = {
    /**
     * 動画名（タイトル）
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * VideoAsset Response DTO - エンティティと完全に同じフィールド
 */
type VideoAssetResponse = {
    /**
     * 動画アセットID
     */
    video_asset_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * アセットロール
     */
    role: AssetRole;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * 最新バージョンのコンテンツハッシュ（重複検索用）
     */
    latest_content_hash: string;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, VideoAssetLocalized>;
    /**
     * クリエイター名
     */
    artist_name?: (string | null);
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * VideoAsset一覧のレスポンススキーマ
 */
type VideoAssetListResponse = {
    /**
     * 動画アセットリスト
     */
    items: Array<VideoAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * VideoAsset更新リクエスト - メタデータのみ更新可能
 */
type VideoAssetUpdateRequest = {
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, VideoAssetLocalized> | null);
    /**
     * アーティスト名
     */
    artist?: (string | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

type VideoCodec = 'h264' | 'h265' | 'vp9' | 'av1';

type VideoFormat = 'mp4' | 'webm' | 'avi' | 'mov' | 'mkv';

/**
 * VideoAssetVersion Response DTO - エンティティと完全に同じフィールド
 */
type VideoAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * 品質別パス
     */
    paths: Record<string, string>;
    /**
     * 動画フォーマット
     */
    format: VideoFormat;
    /**
     * 動画コーデック
     */
    codec: VideoCodec;
    /**
     * 再生時間（秒）
     */
    duration: number;
    /**
     * 解像度（幅）
     */
    width: number;
    /**
     * 解像度（高さ）
     */
    height: number;
    /**
     * アスペクト比
     */
    aspect_ratio: number;
    /**
     * フレームレート（fps）
     */
    frame_rate: number;
    /**
     * ファイルサイズ（バイト）
     */
    file_size: number;
    /**
     * 音声トラックの有無
     */
    has_audio: boolean;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイル画像アセットバージョンID
     */
    thumbnail_image_asset_version_id?: (string | null);
    /**
     * ファイルコンテンツのハッシュ
     */
    content_hash: string;
    /**
     * 参照カウント
     */
    ref_count?: number;
    /**
     * ビットレート（kbps）
     */
    bitrate?: (number | null);
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * VideoAssetVersion一覧のレスポンススキーマ
 */
type VideoAssetVersionListResponse = {
    /**
     * バージョンリスト
     */
    items: Array<VideoAssetVersionResponse>;
    /**
     * 総件数
     */
    total: number;
};

/**
 * VideoAsset + 最新Version の複合レスポンス
 */
type VideoAssetWithVersionResponse = {
    /**
     * 動画アセット情報
     */
    asset: VideoAssetResponse;
    /**
     * 最新バージョン情報
     */
    version: VideoAssetVersionResponse;
};

type VideoQuality = 'low' | 'medium' | 'high' | 'ultra' | 'original';

/**
 * Voice自動タグ付けリクエスト
 */
type VoiceAutoTagRequest = {
    /**
     * 音声の説明文
     */
    description: string;
};

/**
 * ロケール別情報リクエスト
 */
type VoiceLocalizedRequest = {
    /**
     * 表示名
     */
    display_name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
    /**
     * クレジット表記
     */
    credit?: (string | null);
};

/**
 * 音声合成プロバイダー
 */
type VoiceProvider = 'sbv2';

/**
 * 音声モデル情報リクエスト
 */
type VoiceModelRequest = {
    /**
     * モデルID（TTSプロバイダーのモデルID）
     */
    model_id: string;
    /**
     * 言語コード (ja-JP, en-US等)
     */
    language_code: string;
    provider?: VoiceProvider;
};

/**
 * 音声作成リクエスト
 */
type VoiceCreateRequest = {
    /**
     * 音声モデルのID（省略時は自動生成）
     */
    voice_id?: (string | null);
    /**
     * 音声モデル情報のリスト
     */
    models: Array<VoiceModelRequest>;
    /**
     * 性別
     */
    gender: GenderType;
    age_group: AgeGroupType;
    /**
     * 声の特徴説明（LLMコンテキスト用）
     */
    voice_description?: (string | null);
    /**
     * デフォルトロケール
     */
    default_locale?: SupportedLanguage$1;
    /**
     * ロケール別情報
     */
    locales: Record<string, VoiceLocalizedRequest>;
    /**
     * タグ（レベル付き）
     */
    tags?: Array<TagWithLevel>;
    /**
     * 作成者ID
     */
    owner_id: string;
    /**
     * 公開設定
     */
    publishing?: ContentPublishing;
    /**
     * データソース
     */
    data_source?: DataSource;
};

/**
 * 言語別のVoice情報
 */
type VoiceLocalized = {
    /**
     * 表示名
     */
    display_name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
    /**
     * クレジット表記
     */
    credit?: (string | null);
};

/**
 * 音声モデル情報（複数言語対応）
 */
type VoiceModel = {
    /**
     * モデルID（TTSプロバイダーのモデルID）
     */
    model_id: string;
    /**
     * 言語コード (ja-JP, en-US等)
     */
    language_code: string;
    provider: VoiceProvider;
};

/**
 * Voice Response DTO - 明示的フィールド定義
 */
type VoiceResponse = {
    /**
     * 音声モデルのID
     */
    voice_id: string;
    /**
     * スキーマバージョン
     */
    version: number;
    /**
     * 音声モデル情報のリスト
     */
    models: Array<VoiceModel>;
    /**
     * 性別
     */
    gender: GenderType;
    age_group: AgeGroupType;
    /**
     * 適合する性格アーキタイプのリスト（推奨順）
     */
    compatible_archetypes?: Array<PersonalityArchetype>;
    /**
     * 声の特徴説明（LLMコンテキスト用）
     */
    voice_description?: (string | null);
    /**
     * デフォルトロケール
     */
    default_locale: SupportedLanguage$1;
    /**
     * 作成者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * ロケール別情報
     */
    locales?: Record<string, VoiceLocalized>;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * Voice一覧のレスポンススキーマ
 */
type VoiceListResponse = {
    /**
     * 音声リスト
     */
    items: Array<VoiceResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * Voice検索のレスポンススキーマ
 */
type VoiceSearchResponse = {
    /**
     * 音声リスト
     */
    items: Array<VoiceResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * 音声更新リクエスト（PATCH用 - 全フィールドOptional）
 */
type VoiceUpdateRequest = {
    /**
     * 音声モデル情報のリスト
     */
    models?: (Array<VoiceModelRequest> | null);
    /**
     * 性別
     */
    gender?: (GenderType | null);
    /**
     * 年齢層
     */
    age_group?: (AgeGroupType | null);
    /**
     * 声の特徴説明（LLMコンテキスト用）
     */
    voice_description?: (string | null);
    /**
     * デフォルトロケール
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * ロケール別情報
     */
    locales?: (Record<string, VoiceLocalizedRequest> | null);
    /**
     * タグ（レベル付き）
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 作成者ID
     */
    owner_id?: (string | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * データソース
     */
    data_source?: (DataSource | null);
};

/**
 * VRMAアセットの多言語情報
 */
type VRMAAssetLocalized = {
    /**
     * アセット名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * VRMAAsset Response DTO - 明示的フィールド定義
 */
type VRMAAssetResponse = {
    /**
     * VRMAアセットID
     */
    vrma_asset_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    review_status: ReviewStatus;
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * グローバルMotionテーブルへの参照
     */
    motion_id: string;
    /**
     * モーションタイプ
     */
    motion_type: MotionType;
    /**
     * 感情ID
     */
    emotion_id?: (string | null);
    /**
     * 対象性別
     */
    target_gender?: (TargetGenderType | null);
    /**
     * 対象年齢層のリスト
     */
    age_groups?: Array<AgeGroupType>;
    /**
     * 適合する性格アーキタイプのリスト
     */
    compatible_archetypes?: Array<PersonalityArchetype>;
    /**
     * 適合する行動パターンのリスト
     */
    compatible_behavioral_patterns?: Array<BehavioralPattern>;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, VRMAAssetLocalized>;
    /**
     * デフォルトのフェードイン時間
     */
    default_fade_in: number;
    /**
     * デフォルトのフェードアウト時間
     */
    default_fade_out: number;
    /**
     * デフォルトの再生速度
     */
    default_playback_speed: number;
    /**
     * デフォルトの適用身体領域
     */
    default_body_region: BodyRegion;
    /**
     * デフォルトのブレンドウェイト
     */
    default_weight: number;
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイルアニメーション画像アセットID
     */
    thumbnail_animated_image_asset_id?: (string | null);
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * AI使用申告
     */
    ai_usage: AssetAiUsage;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 利用条件
     */
    usage_conditions: AssetUsageConditions;
    /**
     * 権利宣言
     */
    rights_declaration: AssetRightsDeclaration;
    /**
     * Creator entityへの参照
     */
    creator_id?: (string | null);
    /**
     * クリエイター表示名
     */
    creator_display_name?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * VRMAAsset一覧のレスポンススキーマ
 */
type VRMAAssetListResponse = {
    /**
     * VRMAアセットリスト
     */
    items: Array<VRMAAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * VRMAアセットの更新リクエスト
 */
type VRMAAssetUpdateRequest = {
    /**
     * ロケール別情報
     */
    locales?: (Record<string, VRMAAssetLocalized> | null);
    /**
     * 感情ID
     */
    emotion_id?: (string | null);
    /**
     * 対象性別
     */
    target_gender?: (TargetGenderType | null);
    /**
     * 対象年齢層のリスト
     */
    age_groups?: (Array<AgeGroupType> | null);
    /**
     * 適合する性格アーキタイプのリスト
     */
    compatible_archetypes?: (Array<PersonalityArchetype> | null);
    /**
     * 適合する行動パターンのリスト
     */
    compatible_behavioral_patterns?: (Array<BehavioralPattern> | null);
    /**
     * デフォルトフェードイン時間
     */
    default_fade_in?: (number | null);
    /**
     * デフォルトフェードアウト時間
     */
    default_fade_out?: (number | null);
    /**
     * デフォルト再生速度
     */
    default_playback_speed?: (number | null);
    /**
     * デフォルトの適用身体領域
     */
    default_body_region?: (BodyRegion | null);
    /**
     * デフォルトウェイト
     */
    default_weight?: (number | null);
    /**
     * サムネイル画像アセットID
     */
    thumbnail_image_asset_id?: (string | null);
    /**
     * サムネイルアニメーション画像アセットID
     */
    thumbnail_animated_image_asset_id?: (string | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

/**
 * VRMAAssetVersion Response DTO
 */
type VRMAAssetVersionResponse = {
    /**
     * バージョンID
     */
    version_id: string;
    /**
     * Storage上のVRMAファイルパス
     */
    storage_path: string;
    /**
     * ファイルコンテンツのハッシュ
     */
    content_hash: string;
    /**
     * 参照カウント
     */
    ref_count: number;
    /**
     * ファイルサイズ（バイト）
     */
    file_size: number;
    /**
     * アニメーションの総フレーム数
     */
    frame_count?: (number | null);
    /**
     * 再生時間（秒）
     */
    duration_seconds?: (number | null);
    /**
     * フレームレート（frames per second）
     */
    fps?: (number | null);
    /**
     * ループ再生可能かどうか（GLB解析結果）
     */
    is_loopable?: boolean;
    /**
     * Root Motion（位置移動）があるか（GLB解析結果）
     */
    has_root_motion?: boolean;
    /**
     * 作成日時
     */
    created_at: string;
};

/**
 * VRMAアセット + バージョン情報を含むレスポンス
 */
type VRMAAssetWithVersionResponse = {
    /**
     * VRMAアセット情報
     */
    asset: VRMAAssetResponse;
    /**
     * 作成されたバージョン情報
     */
    version: VRMAAssetVersionResponse;
};

/**
 * VRMA形式のモーションデータ
 */
type VRMAMotionData = {
    /**
     * VRMAアセットID
     */
    vrma_asset_id: string;
    /**
     * VRMAアセットバージョンID参照
     */
    vrma_asset_version_id?: (string | null);
    /**
     * フェードイン時間（秒）
     */
    fade_in?: number;
    /**
     * フェードアウト時間（秒）
     */
    fade_out?: number;
    /**
     * 適用する身体領域
     */
    body_region?: BodyRegion;
    /**
     * 重み
     */
    weight?: number;
    /**
     * 再生速度
     */
    playback_speed?: number;
};

/**
 * VRMアセットの多言語情報
 */
type VRMAssetLocalized = {
    /**
     * モデル名
     */
    name: string;
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description: string;
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description: string;
};

/**
 * VRMAsset Response DTO - 明示的フィールド定義
 */
type VRMAssetResponse = {
    /**
     * VRMアセットID
     */
    vrm_asset_id: string;
    /**
     * 所有者ID
     */
    owner_id: string;
    owner_type: OwnerType;
    /**
     * データソース
     */
    data_source: DataSource;
    /**
     * デフォルト言語
     */
    default_locale: SupportedLanguage$1;
    /**
     * 多言語対応の名前・説明
     */
    locales?: Record<string, VRMAssetLocalized>;
    /**
     * アーティスト名
     */
    artist_name?: (string | null);
    /**
     * 最新バージョンID
     */
    latest_version_id: string;
    /**
     * スキーマバージョン
     */
    schema_version: number;
    /**
     * タグリスト
     */
    tags?: Array<TagWithLevel>;
    /**
     * 公開設定
     */
    publishing: ContentPublishing;
    /**
     * コンテンツゾーニング
     */
    zoning: ContentZoning;
    /**
     * 使用制限
     */
    usage_restrictions: UsageRestrictions;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

/**
 * VRMAsset一覧のレスポンススキーマ
 */
type VRMAssetListResponse = {
    /**
     * VRMアセットリスト
     */
    items: Array<VRMAssetResponse>;
    /**
     * 総件数
     */
    total: number;
    /**
     * 取得件数上限
     */
    limit: number;
    /**
     * 次ページのカーソル
     */
    next_cursor?: (string | null);
};

/**
 * VRMアセットの更新リクエスト
 */
type VRMAssetUpdateRequest = {
    /**
     * モデル名
     */
    model_name?: (string | null);
    /**
     * コンテンツの詳細説明（審査・メタデータ用）
     */
    content_description?: (string | null);
    /**
     * 公開表示用の説明（ストア・検索結果用）
     */
    display_description?: (string | null);
    /**
     * デフォルト言語
     */
    default_locale?: (SupportedLanguage$1 | null);
    /**
     * 多言語情報
     */
    locales?: (Record<string, VRMAssetLocalized> | null);
    /**
     * アーティスト名
     */
    artist_name?: (string | null);
    /**
     * タグリスト
     */
    tags?: (Array<TagWithLevel> | null);
    /**
     * 公開設定
     */
    publishing?: (ContentPublishing | null);
    /**
     * コンテンツ申告情報
     */
    declaration?: (ContentDeclaration | null);
    /**
     * AI使用レベル
     */
    creation_method?: (CreationMethod | null);
    /**
     * 使用制限
     */
    usage_restrictions?: (UsageRestrictions | null);
};

/**
 * VRMモデルのレスポンススキーマ
 */
type VRMModelResponse = {
    /**
     * VRMアセットID
     */
    vrm_asset_id: string;
    /**
     * VRMアセットバージョンID
     */
    vrm_asset_version_id?: (string | null);
    /**
     * モデラー名
     */
    modeler_name?: (string | null);
    /**
     * キャラクターデザイナー名
     */
    character_designer_name?: (string | null);
    /**
     * スキーマバージョン
     */
    schema_version?: number;
    /**
     * 作成日時
     */
    created_at: string;
    /**
     * 更新日時
     */
    updated_at: string;
};

declare class AccessoriesService {
    /**
     * Create Accessory
     * アクセサリーを作成
     * @returns AccessoryResponse Successful Response
     * @throws ApiError
     */
    static createAccessoryApiV1AccessoriesPost({ requestBody, }: {
        requestBody: AccessoryCreateRequest;
    }): CancelablePromise<AccessoryResponse>;
    /**
     * List Accessories
     * アクセサリー一覧を取得
     * @returns AccessoryListResponse Successful Response
     * @throws ApiError
     */
    static listAccessoriesApiV1AccessoriesGet({ category, limit, cursor, }: {
        /**
         * カテゴリでフィルタ
         */
        category?: (AccessoryCategory | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<AccessoryListResponse>;
    /**
     * Get Accessory
     * アクセサリーを取得
     * @returns AccessoryResponse Successful Response
     * @throws ApiError
     */
    static getAccessoryApiV1AccessoriesAccessoryIdGet({ accessoryId, }: {
        accessoryId: string;
    }): CancelablePromise<AccessoryResponse>;
    /**
     * Update Accessory
     * アクセサリーを更新
     * @returns AccessoryResponse Successful Response
     * @throws ApiError
     */
    static updateAccessoryApiV1AccessoriesAccessoryIdPatch({ accessoryId, requestBody, }: {
        accessoryId: string;
        requestBody: AccessoryUpdateRequest;
    }): CancelablePromise<AccessoryResponse>;
    /**
     * Delete Accessory
     * アクセサリーを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAccessoryApiV1AccessoriesAccessoryIdDelete({ accessoryId, }: {
        accessoryId: string;
    }): CancelablePromise<void>;
}

declare class AdminService {
    /**
     * Admin Healthcheck
     * 管理者エンドポイントのヘルスチェック
     *
     * このエンドポイントにアクセスできた場合、
     * リクエストユーザーは claims.admin == true を持っている。
     * @returns any Successful Response
     * @throws ApiError
     */
    static adminHealthcheckAdminV1HealthcheckGet(): CancelablePromise<any>;
    /**
     * Get Db Overview
     * 全コレクションのドキュメント数を一覧取得
     *
     * マイグレーション計画時に全体像を把握するために使用。
     * @returns DbOverviewResponse Successful Response
     * @throws ApiError
     */
    static getDbOverviewAdminV1DbStatsOverviewGet(): CancelablePromise<DbOverviewResponse>;
    /**
     * Get Collection Detail
     * 特定コレクションの詳細統計を取得
     *
     * 全フィールド名の和集合と、指定フィールドの存在率を返す。
     * @returns CollectionDetailResponse Successful Response
     * @throws ApiError
     */
    static getCollectionDetailAdminV1DbStatsCollectionsCollectionNameGet({ collectionName, checkFields, }: {
        collectionName: string;
        /**
         * 存在率を確認するフィールド名（カンマ区切り）例: tag_ids,tags,owner_id
         */
        checkFields?: (string | null);
    }): CancelablePromise<CollectionDetailResponse>;
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
    static getCollectionCountAdminV1FirestoreCollectionsCollectionPathCountGet({ collectionPath, }: {
        collectionPath: string;
    }): CancelablePromise<CollectionCountResponse>;
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
    static listCollectionDocumentsAdminV1FirestoreCollectionsCollectionPathListGet({ collectionPath, limit, fields, cursor, }: {
        collectionPath: string;
        /**
         * 取得件数上限
         */
        limit?: number;
        /**
         * 取得するフィールド（カンマ区切り、未指定で全フィールド）
         */
        fields?: (string | null);
        /**
         * ページネーションカーソル（ドキュメントID）
         */
        cursor?: (string | null);
    }): CancelablePromise<CollectionListResponse>;
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
    static checkMigrationStatusAdminV1FirestoreCollectionsCollectionPathMigrationStatusGet({ collectionPath, fieldName, }: {
        collectionPath: string;
        /**
         * 確認するフィールド名
         */
        fieldName: string;
    }): CancelablePromise<MigrationStatusResponse>;
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
    static migrateFieldAdminV1FirestoreCollectionsCollectionPathMigrateFieldPost({ collectionPath, fieldName, fieldValue, dryRun, }: {
        collectionPath: string;
        /**
         * 追加するフィールド名
         */
        fieldName: string;
        /**
         * 設定する値
         */
        fieldValue: string;
        /**
         * ドライラン（実際には更新しない）
         */
        dryRun?: boolean;
    }): CancelablePromise<any>;
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
    static migrateFieldValueAdminV1FirestoreCollectionsCollectionPathMigrateFieldValuePost({ collectionPath, fieldName, oldValue, newValue, dryRun, }: {
        collectionPath: string;
        /**
         * 変更するフィールド名
         */
        fieldName: string;
        /**
         * 変更前の値
         */
        oldValue: string;
        /**
         * 変更後の値
         */
        newValue: string;
        /**
         * ドライラン（実際には更新しない）
         */
        dryRun?: boolean;
    }): CancelablePromise<any>;
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
    static deleteDocumentAdminV1FirestoreCollectionsCollectionPathDocumentsDocumentIdDelete({ collectionPath, documentId, }: {
        collectionPath: string;
        documentId: string;
    }): CancelablePromise<any>;
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
    static renameFieldAdminV1FirestoreCollectionsCollectionPathRenameFieldPost({ collectionPath, oldFieldName, newFieldName, dryRun, }: {
        collectionPath: string;
        /**
         * 変更前のフィールド名
         */
        oldFieldName: string;
        /**
         * 変更後のフィールド名
         */
        newFieldName: string;
        /**
         * ドライラン（実際には更新しない）
         */
        dryRun?: boolean;
    }): CancelablePromise<any>;
    /**
     * Detect Image Colluders
     * 静止画像からフィンガープリントを抽出し、流出元ユーザーを特定する
     *
     * ブラインド検出（オリジナル画像不要）。DWTスペクトルと擬似乱数列の相関で
     * 符号語を復元し、Tardosスコアリングで共謀者を特定する。
     * @returns ForensicDetectResponse Successful Response
     * @throws ApiError
     */
    static detectImageColludersAdminV1ForensicsDetectImagePost({ formData, }: {
        formData: Body_detect_image_colluders_admin_v1_forensics_detect_image_post;
    }): CancelablePromise<ForensicDetectResponse>;
    /**
     * Detect Model Colluders
     * GLB/VRMモデルからフィンガープリントを抽出し、流出元ユーザーを特定する
     *
     * オリジナルGLBをGCSから取得し、頂点変位の差分比較で符号語を復元する。
     * @returns ForensicDetectResponse Successful Response
     * @throws ApiError
     */
    static detectModelColludersAdminV1ForensicsDetectModelPost({ formData, }: {
        formData: Body_detect_model_colluders_admin_v1_forensics_detect_model_post;
    }): CancelablePromise<ForensicDetectResponse>;
    /**
     * Detect Animated Image Colluders
     * アニメーション画像からフィンガープリントを抽出し、流出元ユーザーを特定する
     *
     * 先頭フレームを抽出して静止画と同じDWT相関検出を行う。
     * @returns ForensicDetectResponse Successful Response
     * @throws ApiError
     */
    static detectAnimatedImageColludersAdminV1ForensicsDetectAnimatedImagePost({ formData, }: {
        formData: Body_detect_animated_image_colluders_admin_v1_forensics_detect_animated_image_post;
    }): CancelablePromise<ForensicDetectResponse>;
    /**
     * Migrate Add Tag Ids
     * 全タグ付きエンティティのFirestoreドキュメントにtag_idsフラット配列を追加する。
     *
     * 既存のtags配列からtag_idを抽出し、tag_idsフィールドとして非正規化する。
     * array-containsクエリでの高速なタグ検索を可能にする。
     * @returns any Successful Response
     * @throws ApiError
     */
    static migrateAddTagIdsAdminV1MigrateAddTagIdsPost(): CancelablePromise<any>;
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
    static migrateAddTagCategoryIdsAdminV1MigrateAddTagCategoryIdsPost(): CancelablePromise<any>;
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
    static migrateEmotionsDataSummaryAdminV1MigrateEmotionsDataSummaryPost(): CancelablePromise<Record<string, any>>;
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
    static recoverEmotionsDataAdminV1MigrateRecoverEmotionsDataPost(): CancelablePromise<Record<string, any>>;
    /**
     * Migrate Motions Data Summary
     * 全OFFICIAL Motionから official_motion_index を構築し、
     * user/motions_data ドキュメントに書き込む。
     * @returns any Successful Response
     * @throws ApiError
     */
    static migrateMotionsDataSummaryAdminV1MigrateMotionsDataSummaryPost(): CancelablePromise<Record<string, any>>;
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
    static migrateMotionTypesAdminV1MigrateMotionTypesPost(): CancelablePromise<Record<string, any>>;
    /**
     * Migrate Vrma Frame Counts
     * 既存VRMAAssetVersionにframe_countを設定する。
     *
     * 各VRMAファイルをStorageからダウンロードし、GLBバイナリを解析して
     * 実際のキーフレーム数を取得・保存する。
     * @returns any Successful Response
     * @throws ApiError
     */
    static migrateVrmaFrameCountsAdminV1MigrateVrmaFrameCountsPost(): CancelablePromise<Record<string, any>>;
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
    static seedAllMotionsAdminV1MigrateSeedAllMotionsPost(): CancelablePromise<Record<string, any>>;
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
    static seedAllEmotionsAdminV1MigrateSeedAllEmotionsPost(): CancelablePromise<Record<string, any>>;
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
    static renameNumberedMotionIdsAdminV1MigrateRenameNumberedMotionIdsPost(): CancelablePromise<Record<string, any>>;
}

declare class AdminDbStatsService {
    /**
     * Get Db Overview
     * 全コレクションのドキュメント数を一覧取得
     *
     * マイグレーション計画時に全体像を把握するために使用。
     * @returns DbOverviewResponse Successful Response
     * @throws ApiError
     */
    static getDbOverviewAdminV1DbStatsOverviewGet(): CancelablePromise<DbOverviewResponse>;
    /**
     * Get Collection Detail
     * 特定コレクションの詳細統計を取得
     *
     * 全フィールド名の和集合と、指定フィールドの存在率を返す。
     * @returns CollectionDetailResponse Successful Response
     * @throws ApiError
     */
    static getCollectionDetailAdminV1DbStatsCollectionsCollectionNameGet({ collectionName, checkFields, }: {
        collectionName: string;
        /**
         * 存在率を確認するフィールド名（カンマ区切り）例: tag_ids,tags,owner_id
         */
        checkFields?: (string | null);
    }): CancelablePromise<CollectionDetailResponse>;
}

declare class AdminFirestoreService {
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
    static getCollectionCountAdminV1FirestoreCollectionsCollectionPathCountGet({ collectionPath, }: {
        collectionPath: string;
    }): CancelablePromise<CollectionCountResponse>;
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
    static listCollectionDocumentsAdminV1FirestoreCollectionsCollectionPathListGet({ collectionPath, limit, fields, cursor, }: {
        collectionPath: string;
        /**
         * 取得件数上限
         */
        limit?: number;
        /**
         * 取得するフィールド（カンマ区切り、未指定で全フィールド）
         */
        fields?: (string | null);
        /**
         * ページネーションカーソル（ドキュメントID）
         */
        cursor?: (string | null);
    }): CancelablePromise<CollectionListResponse>;
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
    static checkMigrationStatusAdminV1FirestoreCollectionsCollectionPathMigrationStatusGet({ collectionPath, fieldName, }: {
        collectionPath: string;
        /**
         * 確認するフィールド名
         */
        fieldName: string;
    }): CancelablePromise<MigrationStatusResponse>;
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
    static migrateFieldAdminV1FirestoreCollectionsCollectionPathMigrateFieldPost({ collectionPath, fieldName, fieldValue, dryRun, }: {
        collectionPath: string;
        /**
         * 追加するフィールド名
         */
        fieldName: string;
        /**
         * 設定する値
         */
        fieldValue: string;
        /**
         * ドライラン（実際には更新しない）
         */
        dryRun?: boolean;
    }): CancelablePromise<any>;
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
    static migrateFieldValueAdminV1FirestoreCollectionsCollectionPathMigrateFieldValuePost({ collectionPath, fieldName, oldValue, newValue, dryRun, }: {
        collectionPath: string;
        /**
         * 変更するフィールド名
         */
        fieldName: string;
        /**
         * 変更前の値
         */
        oldValue: string;
        /**
         * 変更後の値
         */
        newValue: string;
        /**
         * ドライラン（実際には更新しない）
         */
        dryRun?: boolean;
    }): CancelablePromise<any>;
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
    static deleteDocumentAdminV1FirestoreCollectionsCollectionPathDocumentsDocumentIdDelete({ collectionPath, documentId, }: {
        collectionPath: string;
        documentId: string;
    }): CancelablePromise<any>;
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
    static renameFieldAdminV1FirestoreCollectionsCollectionPathRenameFieldPost({ collectionPath, oldFieldName, newFieldName, dryRun, }: {
        collectionPath: string;
        /**
         * 変更前のフィールド名
         */
        oldFieldName: string;
        /**
         * 変更後のフィールド名
         */
        newFieldName: string;
        /**
         * ドライラン（実際には更新しない）
         */
        dryRun?: boolean;
    }): CancelablePromise<any>;
}

declare class AdminForensicsService {
    /**
     * Detect Image Colluders
     * 静止画像からフィンガープリントを抽出し、流出元ユーザーを特定する
     *
     * ブラインド検出（オリジナル画像不要）。DWTスペクトルと擬似乱数列の相関で
     * 符号語を復元し、Tardosスコアリングで共謀者を特定する。
     * @returns ForensicDetectResponse Successful Response
     * @throws ApiError
     */
    static detectImageColludersAdminV1ForensicsDetectImagePost({ formData, }: {
        formData: Body_detect_image_colluders_admin_v1_forensics_detect_image_post;
    }): CancelablePromise<ForensicDetectResponse>;
    /**
     * Detect Model Colluders
     * GLB/VRMモデルからフィンガープリントを抽出し、流出元ユーザーを特定する
     *
     * オリジナルGLBをGCSから取得し、頂点変位の差分比較で符号語を復元する。
     * @returns ForensicDetectResponse Successful Response
     * @throws ApiError
     */
    static detectModelColludersAdminV1ForensicsDetectModelPost({ formData, }: {
        formData: Body_detect_model_colluders_admin_v1_forensics_detect_model_post;
    }): CancelablePromise<ForensicDetectResponse>;
    /**
     * Detect Animated Image Colluders
     * アニメーション画像からフィンガープリントを抽出し、流出元ユーザーを特定する
     *
     * 先頭フレームを抽出して静止画と同じDWT相関検出を行う。
     * @returns ForensicDetectResponse Successful Response
     * @throws ApiError
     */
    static detectAnimatedImageColludersAdminV1ForensicsDetectAnimatedImagePost({ formData, }: {
        formData: Body_detect_animated_image_colluders_admin_v1_forensics_detect_animated_image_post;
    }): CancelablePromise<ForensicDetectResponse>;
}

declare class AdminMigrationService {
    /**
     * Migrate Add Tag Ids
     * 全タグ付きエンティティのFirestoreドキュメントにtag_idsフラット配列を追加する。
     *
     * 既存のtags配列からtag_idを抽出し、tag_idsフィールドとして非正規化する。
     * array-containsクエリでの高速なタグ検索を可能にする。
     * @returns any Successful Response
     * @throws ApiError
     */
    static migrateAddTagIdsAdminV1MigrateAddTagIdsPost(): CancelablePromise<any>;
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
    static migrateAddTagCategoryIdsAdminV1MigrateAddTagCategoryIdsPost(): CancelablePromise<any>;
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
    static migrateEmotionsDataSummaryAdminV1MigrateEmotionsDataSummaryPost(): CancelablePromise<Record<string, any>>;
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
    static recoverEmotionsDataAdminV1MigrateRecoverEmotionsDataPost(): CancelablePromise<Record<string, any>>;
    /**
     * Migrate Motions Data Summary
     * 全OFFICIAL Motionから official_motion_index を構築し、
     * user/motions_data ドキュメントに書き込む。
     * @returns any Successful Response
     * @throws ApiError
     */
    static migrateMotionsDataSummaryAdminV1MigrateMotionsDataSummaryPost(): CancelablePromise<Record<string, any>>;
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
    static migrateMotionTypesAdminV1MigrateMotionTypesPost(): CancelablePromise<Record<string, any>>;
    /**
     * Migrate Vrma Frame Counts
     * 既存VRMAAssetVersionにframe_countを設定する。
     *
     * 各VRMAファイルをStorageからダウンロードし、GLBバイナリを解析して
     * 実際のキーフレーム数を取得・保存する。
     * @returns any Successful Response
     * @throws ApiError
     */
    static migrateVrmaFrameCountsAdminV1MigrateVrmaFrameCountsPost(): CancelablePromise<Record<string, any>>;
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
    static seedAllMotionsAdminV1MigrateSeedAllMotionsPost(): CancelablePromise<Record<string, any>>;
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
    static seedAllEmotionsAdminV1MigrateSeedAllEmotionsPost(): CancelablePromise<Record<string, any>>;
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
    static renameNumberedMotionIdsAdminV1MigrateRenameNumberedMotionIdsPost(): CancelablePromise<Record<string, any>>;
}

declare class AdminReviewsService {
    /**
     * List Pending Staff Reviews
     * 運営審査待ちの一覧を取得（管理者用）
     * @returns PendingReviewListResponse Successful Response
     * @throws ApiError
     */
    static listPendingStaffReviewsAdminV1ReviewLogsPendingStaffGet({ limit, cursor, }: {
        /**
         * 取得件数上限
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<PendingReviewListResponse>;
    /**
     * Staff Confirm Review
     * 運営による審査確定（管理者用）
     * @returns ReviewLogResponse Successful Response
     * @throws ApiError
     */
    static staffConfirmReviewAdminV1ReviewLogsReviewLogIdStaffConfirmPut({ reviewLogId, reviewerId, requestBody, }: {
        reviewLogId: string;
        /**
         * 審査者ID
         */
        reviewerId: string;
        requestBody: StaffConfirmRequest;
    }): CancelablePromise<ReviewLogResponse>;
    /**
     * 審査ドライラン（DB保存なし・プロンプト評価用）
     * 任意のコンテンツでLLM審査を実行し、結果のみ返す（管理者用）
     *
     * DB保存は行わない。プロンプトや評価基準の品質検証に使用する。
     * appealsを指定すると異議申し立てプロンプトで再審査を実行する。
     * @returns ReviewResultResponse Successful Response
     * @throws ApiError
     */
    static dryRunReviewAdminV1ReviewLogsDryRunPost({ requestBody, }: {
        requestBody: DryRunReviewRequest;
    }): CancelablePromise<ReviewResultResponse>;
}

declare class AnimatedImageAssetsService {
    /**
     * Create Animated Image Asset
     * アニメーション画像アセットを作成（GIF, APNG対応）
     *
     * ファイルからformat, size_profile, width, height, frame_count, durationを自動検出。
     * roleのみ必須で指定。複雑なデータ構造はJSON文字列で渡す。
     * @returns AnimatedImageAssetWithVersionResponse Successful Response
     * @throws ApiError
     */
    static createAnimatedImageAssetApiV1AnimatedImageAssetsPost({ formData, }: {
        formData: Body_create_animated_image_asset_api_v1_animated_image_assets_post;
    }): CancelablePromise<AnimatedImageAssetWithVersionResponse>;
    /**
     * Batch Get Animated Image Assets
     * 複数のアニメーション画像アセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAnimatedImageAssetsApiV1AnimatedImageAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Search Animated Image Assets
     * アニメーション画像アセットを検索
     * @returns AnimatedImageAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchAnimatedImageAssetsApiV1AnimatedImageAssetsSearchGet({ ownerId, format, sizeProfile, tagIds, minLevel, maxAiLevel, limit, cursor, }: {
        ownerId?: (string | null);
        format?: (AnimatedImageFormat | null);
        sizeProfile?: (SizeProfile | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<AnimatedImageAssetListResponse>;
    /**
     * Get Animated Image Asset
     * アニメーション画像アセットを取得
     * @returns AnimatedImageAssetResponse Successful Response
     * @throws ApiError
     */
    static getAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdGet({ assetId, }: {
        assetId: string;
    }): CancelablePromise<AnimatedImageAssetResponse>;
    /**
     * Update Animated Image Asset
     * アニメーション画像アセットのメタデータを更新（オーナーのみ）
     * @returns AnimatedImageAssetResponse Successful Response
     * @throws ApiError
     */
    static updateAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdPatch({ assetId, requestBody, }: {
        assetId: string;
        requestBody: AnimatedImageAssetUpdateRequest;
    }): CancelablePromise<AnimatedImageAssetResponse>;
    /**
     * Delete Animated Image Asset
     * アニメーション画像アセットを削除（オーナーのみ）
     * @returns void
     * @throws ApiError
     */
    static deleteAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdDelete({ assetId, }: {
        assetId: string;
    }): CancelablePromise<void>;
    /**
     * List Animated Image Asset Versions
     * アニメーション画像アセットのバージョン一覧を取得
     * @returns AnimatedImageAssetVersionListResponse Successful Response
     * @throws ApiError
     */
    static listAnimatedImageAssetVersionsApiV1AnimatedImageAssetsAssetIdVersionsGet({ assetId, }: {
        assetId: string;
    }): CancelablePromise<AnimatedImageAssetVersionListResponse>;
    /**
     * Add Animated Image Asset Version
     * アニメーション画像アセットに新しいバージョンを追加
     *
     * ファイルからwidth, height, frame_count, durationを自動検出。
     * フォーマットはアセットのformatと一致する必要がある（不一致時は400エラー）。
     * @returns AnimatedImageAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static addAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsPost({ assetId, formData, }: {
        assetId: string;
        formData: Body_add_animated_image_asset_version_api_v1_animated_image_assets__asset_id__versions_post;
    }): CancelablePromise<AnimatedImageAssetVersionResponse>;
    /**
     * Get Latest Animated Image Version
     * アニメーション画像アセットの最新バージョンを取得
     * @returns AnimatedImageAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getLatestAnimatedImageVersionApiV1AnimatedImageAssetsAssetIdVersionsLatestGet({ assetId, }: {
        assetId: string;
    }): CancelablePromise<AnimatedImageAssetVersionResponse>;
    /**
     * Get Animated Image Asset Version
     * アニメーション画像アセットの特定バージョンを取得
     * @returns AnimatedImageAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsVersionIdGet({ assetId, versionId, }: {
        assetId: string;
        versionId: string;
    }): CancelablePromise<AnimatedImageAssetVersionResponse>;
    /**
     * Delete Animated Image Asset Version
     * アニメーション画像アセットの特定バージョンを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsVersionIdDelete({ assetId, versionId, }: {
        assetId: string;
        versionId: string;
    }): CancelablePromise<void>;
    /**
     * Get Animated Image File Url
     * アニメーション画像ファイルのダウンロード用一時URL（Signed URL）を返す
     * @returns SignedUrlResponse Successful Response
     * @throws ApiError
     */
    static getAnimatedImageFileUrlApiV1AnimatedImageAssetsAssetIdFileGet({ assetId, quality, }: {
        assetId: string;
        /**
         * 取得する品質 (original, high, medium, low, very_low)
         */
        quality?: string;
    }): CancelablePromise<SignedUrlResponse>;
    /**
     * Get Animated Image Protected File
     * 透かし入り暗号化アニメーション画像をバイナリレスポンスで返す
     *
     * ヘッダー X-Key-Id, X-Fingerprint-Id, X-Format を含む。
     * @returns any Successful Response
     * @throws ApiError
     */
    static getAnimatedImageProtectedFileApiV1AnimatedImageAssetsAssetIdProtectedFileGet({ assetId, quality, }: {
        assetId: string;
        /**
         * 取得する品質 (original, high, medium, low, very_low)
         */
        quality?: string;
    }): CancelablePromise<any>;
}

declare class AnimationClipAssetsService {
    /**
     * Create Animation Clip Asset
     * AnimationClipアセットを作成
     *
     * ファイルアップロードと全メタデータを含む。
     * 複雑なデータ構造はJSON文字列で渡す。
     * @returns AnimationClipAssetWithVersionResponse Successful Response
     * @throws ApiError
     */
    static createAnimationClipAssetApiV1AnimationClipAssetsPost({ formData, }: {
        formData: Body_create_animation_clip_asset_api_v1_animation_clip_assets_post;
    }): CancelablePromise<AnimationClipAssetWithVersionResponse>;
    /**
     * Search Animation Clip Assets
     * AnimationClipアセットを検索
     * @returns AnimationClipAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchAnimationClipAssetsApiV1AnimationClipAssetsSearchGet({ ownerId, motionId, motionType, emotionId, targetGender, dataSource, tagIds, minLevel, maxAiLevel, isLoopable, hasRootMotion, minDuration, maxDuration, limit, cursor, }: {
        ownerId?: (string | null);
        motionId?: (string | null);
        motionType?: (MotionType | null);
        emotionId?: (string | null);
        targetGender?: (TargetGenderType | null);
        dataSource?: (DataSource | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * ループ可能フィルタ
         */
        isLoopable?: (boolean | null);
        /**
         * Root Motionフィルタ
         */
        hasRootMotion?: (boolean | null);
        /**
         * 最小再生時間（秒）
         */
        minDuration?: (number | null);
        /**
         * 最大再生時間（秒）
         */
        maxDuration?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<AnimationClipAssetListResponse>;
    /**
     * Batch Get Animation Clip Assets
     * 複数のAnimationClipアセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAnimationClipAssetsApiV1AnimationClipAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
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
    static getAnimationClipAssetApiV1AnimationClipAssetsClipIdGet({ clipId, }: {
        clipId: string;
    }): CancelablePromise<AnimationClipAssetResponse>;
    /**
     * Update Animation Clip Asset
     * AnimationClipアセットのメタデータを更新（オーナーのみ）
     * @returns AnimationClipAssetResponse Successful Response
     * @throws ApiError
     */
    static updateAnimationClipAssetApiV1AnimationClipAssetsClipIdPatch({ clipId, requestBody, }: {
        clipId: string;
        requestBody: AnimationClipAssetUpdateRequest;
    }): CancelablePromise<AnimationClipAssetResponse>;
    /**
     * Delete Animation Clip Asset
     * AnimationClipアセットを削除（オーナーのみ、参照されている場合は削除不可）
     * @returns void
     * @throws ApiError
     */
    static deleteAnimationClipAssetApiV1AnimationClipAssetsClipIdDelete({ clipId, }: {
        clipId: string;
    }): CancelablePromise<void>;
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
    static getAnimationClipFileUrlApiV1AnimationClipAssetsClipIdFileGet({ clipId, }: {
        clipId: string;
    }): CancelablePromise<SignedUrlResponse>;
}

declare class AssetBundleAssetsService {
    /**
     * Create Asset Bundle Asset
     * AssetBundleアセットを作成
     *
     * ファイルアップロードと全メタデータを含む。
     * 複雑なデータ構造はJSON文字列で渡す。
     * @returns AssetBundleAssetWithVersionResponse Successful Response
     * @throws ApiError
     */
    static createAssetBundleAssetApiV1AssetBundleAssetsPost({ formData, }: {
        formData: Body_create_asset_bundle_asset_api_v1_asset_bundle_assets_post;
    }): CancelablePromise<AssetBundleAssetWithVersionResponse>;
    /**
     * Search Asset Bundle Assets
     * AssetBundleアセットを検索
     * @returns AssetBundleAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchAssetBundleAssetsApiV1AssetBundleAssetsSearchGet({ ownerId, bundleName, platform, dataSource, tagIds, minLevel, maxAiLevel, limit, cursor, }: {
        ownerId?: (string | null);
        bundleName?: (string | null);
        platform?: (string | null);
        dataSource?: (DataSource | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<AssetBundleAssetListResponse>;
    /**
     * Batch Get Asset Bundle Assets
     * 複数のAssetBundleアセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAssetBundleAssetsApiV1AssetBundleAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Asset Bundle Asset
     * AssetBundleアセットの詳細情報を取得
     * @returns AssetBundleAssetResponse Successful Response
     * @throws ApiError
     */
    static getAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdGet({ assetBundleId, }: {
        assetBundleId: string;
    }): CancelablePromise<AssetBundleAssetResponse>;
    /**
     * Update Asset Bundle Asset
     * AssetBundleアセットのメタデータを更新（オーナーのみ）
     * @returns AssetBundleAssetResponse Successful Response
     * @throws ApiError
     */
    static updateAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdPatch({ assetBundleId, requestBody, }: {
        assetBundleId: string;
        requestBody: AssetBundleAssetUpdateRequest;
    }): CancelablePromise<AssetBundleAssetResponse>;
    /**
     * Delete Asset Bundle Asset
     * AssetBundleアセットを削除（オーナーのみ、参照されている場合は削除不可）
     * @returns void
     * @throws ApiError
     */
    static deleteAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdDelete({ assetBundleId, }: {
        assetBundleId: string;
    }): CancelablePromise<void>;
    /**
     * List Asset Bundle Asset Versions
     * AssetBundleアセットのバージョン一覧を取得
     * @returns AssetBundleAssetVersionListResponse Successful Response
     * @throws ApiError
     */
    static listAssetBundleAssetVersionsApiV1AssetBundleAssetsAssetBundleIdVersionsGet({ assetBundleId, }: {
        assetBundleId: string;
    }): CancelablePromise<AssetBundleAssetVersionListResponse>;
    /**
     * Add Asset Bundle Asset Version
     * AssetBundleアセットに新しいバージョンを追加
     * @returns AssetBundleAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static addAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsPost({ assetBundleId, formData, }: {
        assetBundleId: string;
        formData: Body_add_asset_bundle_asset_version_api_v1_asset_bundle_assets__asset_bundle_id__versions_post;
    }): CancelablePromise<AssetBundleAssetVersionResponse>;
    /**
     * Get Latest Asset Bundle Version
     * AssetBundleアセットの最新バージョンを取得
     * @returns AssetBundleAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getLatestAssetBundleVersionApiV1AssetBundleAssetsAssetBundleIdVersionsLatestGet({ assetBundleId, }: {
        assetBundleId: string;
    }): CancelablePromise<AssetBundleAssetVersionResponse>;
    /**
     * Get Asset Bundle Asset Version
     * AssetBundleアセットの特定バージョンを取得
     * @returns AssetBundleAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdGet({ assetBundleId, versionId, }: {
        assetBundleId: string;
        versionId: string;
    }): CancelablePromise<AssetBundleAssetVersionResponse>;
    /**
     * Delete Asset Bundle Asset Version
     * AssetBundleアセットの特定バージョンを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdDelete({ assetBundleId, versionId, }: {
        assetBundleId: string;
        versionId: string;
    }): CancelablePromise<void>;
    /**
     * Add Variant To Version
     * 既存バージョンに新しいバリアント（プラットフォーム/アーキテクチャ）を追加
     * @returns AssetBundleAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static addVariantToVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdVariantsPost({ assetBundleId, versionId, formData, }: {
        assetBundleId: string;
        versionId: string;
        formData: Body_add_variant_to_version_api_v1_asset_bundle_assets__asset_bundle_id__versions__version_id__variants_post;
    }): CancelablePromise<AssetBundleAssetVersionResponse>;
    /**
     * Get Asset Bundle File Url
     * AssetBundleファイルのダウンロード用一時URL（Signed URL）を返す
     *
     * 最新バージョンのファイルを取得
     * @returns SignedUrlResponse Successful Response
     * @throws ApiError
     */
    static getAssetBundleFileUrlApiV1AssetBundleAssetsAssetBundleIdFileGet({ assetBundleId, platform, arch, }: {
        assetBundleId: string;
        /**
         * Platform (android, ios, etc.)
         */
        platform: string;
        /**
         * Architecture (arm64, x86, etc.)
         */
        arch: string;
    }): CancelablePromise<SignedUrlResponse>;
    /**
     * Get Asset Bundle Protected File
     * 保護済みAssetBundleファイルのダウンロード情報を返す
     *
     * ファイルはzstd圧縮 + AES-256-GCM暗号化済み（メッシュ難読化なし）。
     * @returns ProtectedFileResponse Successful Response
     * @throws ApiError
     */
    static getAssetBundleProtectedFileApiV1AssetBundleAssetsAssetBundleIdProtectedFileGet({ assetBundleId, platform, arch, }: {
        assetBundleId: string;
        /**
         * Platform (android, ios, etc.)
         */
        platform: string;
        /**
         * Architecture (arm64, x86, etc.)
         */
        arch: string;
    }): CancelablePromise<ProtectedFileResponse$1>;
}

declare class AssetVariantsService {
    /**
     * Create Asset Variant Link
     * 2つのアセット間のリンクを作成
     *
     * 同じペアは重複不可（辞書順で正規化されるため、順序は問わない）
     * @returns AssetVariantLinkResponse Successful Response
     * @throws ApiError
     */
    static createAssetVariantLinkApiV1AssetVariantsPost({ requestBody, }: {
        requestBody: CreateAssetVariantLinkRequest;
    }): CancelablePromise<AssetVariantLinkResponse>;
    /**
     * Batch Get Asset Variant Links
     * 複数のアセットバリアントリンクを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAssetVariantLinksApiV1AssetVariantsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Variants By Asset Id
     * 特定のアセットIDに紐づく全リンクを取得
     *
     * 例: vrm_xxxを指定すると、それに紐づくGLTF, AssetBundle等が返る
     * @returns AssetVariantGroupResponse Successful Response
     * @throws ApiError
     */
    static getVariantsByAssetIdApiV1AssetVariantsByAssetAssetIdGet({ assetId, }: {
        assetId: string;
    }): CancelablePromise<AssetVariantGroupResponse>;
    /**
     * Delete Asset Variant Link
     * アセットバリアントリンクを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAssetVariantLinkApiV1AssetVariantsLinkIdDelete({ linkId, }: {
        linkId: string;
    }): CancelablePromise<void>;
}

declare class AudioAssetsService {
    /**
     * Create Audio Asset
     * 音声アセットを作成
     *
     * ファイルアップロードと全メタデータを含む。
     * 複雑なデータ構造はJSON文字列で渡す。
     * @returns AudioAssetWithVersionResponse Successful Response
     * @throws ApiError
     */
    static createAudioAssetApiV1AudioAssetsPost({ formData, }: {
        formData: Body_create_audio_asset_api_v1_audio_assets_post;
    }): CancelablePromise<AudioAssetWithVersionResponse>;
    /**
     * Batch Get Audio Assets
     * 複数のオーディオアセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAudioAssetsApiV1AudioAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Search Audio Assets
     * Search audio assets using field-based filters
     * @returns AudioAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchAudioAssetsApiV1AudioAssetsSearchGet({ audioType, maxDuration, title, ownerId, tagIds, minLevel, artistName, album, bpmRange, isLoopable, maxAiLevel, limit, cursor, }: {
        audioType?: (AudioType | null);
        maxDuration?: (number | null);
        title?: (string | null);
        ownerId?: (string | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        artistName?: (string | null);
        album?: (string | null);
        bpmRange?: (string | null);
        isLoopable?: (boolean | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<AudioAssetListResponse>;
    /**
     * Get Audio Asset
     * 音声アセットを取得
     * @returns AudioAssetResponse Successful Response
     * @throws ApiError
     */
    static getAudioAssetApiV1AudioAssetsAudioIdGet({ audioId, }: {
        audioId: string;
    }): CancelablePromise<AudioAssetResponse>;
    /**
     * Update Audio Asset
     * 音声アセットのメタデータを更新（オーナーのみ）
     * @returns AudioAssetResponse Successful Response
     * @throws ApiError
     */
    static updateAudioAssetApiV1AudioAssetsAudioIdPatch({ audioId, requestBody, }: {
        audioId: string;
        requestBody: AudioAssetUpdateRequest;
    }): CancelablePromise<AudioAssetResponse>;
    /**
     * Delete Audio Asset
     * 音声アセットを削除（オーナーのみ）
     * @returns void
     * @throws ApiError
     */
    static deleteAudioAssetApiV1AudioAssetsAudioIdDelete({ audioId, }: {
        audioId: string;
    }): CancelablePromise<void>;
    /**
     * List Audio Asset Versions
     * 音声アセットのバージョン一覧を取得
     * @returns AudioAssetVersionListResponse Successful Response
     * @throws ApiError
     */
    static listAudioAssetVersionsApiV1AudioAssetsAudioIdVersionsGet({ audioId, }: {
        audioId: string;
    }): CancelablePromise<AudioAssetVersionListResponse>;
    /**
     * Add Audio Asset Version
     * 音声アセットに新しいバージョンを追加
     * @returns AudioAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static addAudioAssetVersionApiV1AudioAssetsAudioIdVersionsPost({ audioId, formData, }: {
        audioId: string;
        formData: Body_add_audio_asset_version_api_v1_audio_assets__audio_id__versions_post;
    }): CancelablePromise<AudioAssetVersionResponse>;
    /**
     * Get Latest Audio Version
     * 音声アセットの最新バージョンを取得
     * @returns AudioAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getLatestAudioVersionApiV1AudioAssetsAudioIdVersionsLatestGet({ audioId, }: {
        audioId: string;
    }): CancelablePromise<AudioAssetVersionResponse>;
    /**
     * Get Audio Asset Version
     * 音声アセットの特定バージョンを取得
     * @returns AudioAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getAudioAssetVersionApiV1AudioAssetsAudioIdVersionsVersionIdGet({ audioId, versionId, }: {
        audioId: string;
        versionId: string;
    }): CancelablePromise<AudioAssetVersionResponse>;
    /**
     * Delete Audio Asset Version
     * 音声アセットの特定バージョンを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAudioAssetVersionApiV1AudioAssetsAudioIdVersionsVersionIdDelete({ audioId, versionId, }: {
        audioId: string;
        versionId: string;
    }): CancelablePromise<void>;
    /**
     * Get Audio Assets By Type
     * タイプ別に音声アセットを取得
     * @returns AudioAssetListResponse Successful Response
     * @throws ApiError
     */
    static getAudioAssetsByTypeApiV1AudioAssetsTypeAudioTypeGet({ audioType, limit, cursor, }: {
        audioType: AudioType;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<AudioAssetListResponse>;
}

declare class AuthenticationService {
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
    static mergeAccountsApiV1AuthMergeAccountsPost({ requestBody, }: {
        requestBody: MergeAccountsRequest;
    }): CancelablePromise<any>;
    /**
     * Register Link
     * Register a link between a CHARAHOME account (usually just upgraded) and a derived app user.
     * @returns any Successful Response
     * @throws ApiError
     */
    static registerLinkApiV1AuthRegisterLinkPost({ requestBody, }: {
        requestBody: RegisterLinkRequest;
    }): CancelablePromise<any>;
    /**
     * Check Link
     * Check if the current user is linked to the specified app.
     * @returns any Successful Response
     * @throws ApiError
     */
    static checkLinkApiV1AuthCheckLinkGet({ appId, }: {
        appId: string;
    }): CancelablePromise<any>;
}

declare class AutoParamsService {
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
    static generateAvatarAutoParamsApiV1AutoParamsAvatarPost({ formData, }: {
        formData: Body_generate_avatar_auto_params_api_v1_auto_params_avatar_post;
    }): CancelablePromise<AvatarAutoParamsResponse>;
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
    static generateCharacterAutoParamsApiV1AutoParamsCharacterPost({ formData, }: {
        formData: Body_generate_character_auto_params_api_v1_auto_params_character_post;
    }): CancelablePromise<CharacterAutoParamsResponse>;
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
    static generateMotionAutoParamsApiV1AutoParamsMotionPost({ formData, }: {
        formData?: Body_generate_motion_auto_params_api_v1_auto_params_motion_post;
    }): CancelablePromise<MotionAutoParamsResponse>;
}

declare class AutoTaggingService {
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
    static autoTagAvatarApiV1AutoTaggingAvatarPost({ formData, }: {
        formData: Body_auto_tag_avatar_api_v1_auto_tagging_avatar_post;
    }): CancelablePromise<AutoTagResponse>;
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
    static autoTagSettingsApiV1AutoTaggingSettingsPost({ requestBody, }: {
        requestBody: SettingsAutoTagRequest;
    }): CancelablePromise<AutoTagResponse>;
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
    static autoTagAnimationApiV1AutoTaggingAnimationPost({ requestBody, }: {
        requestBody: AnimationAutoTagRequest;
    }): CancelablePromise<AutoTagResponse>;
    /**
     * Get Avatar Tag Categories
     * Avatarで使用可能なタグカテゴリ一覧を取得
     * @returns TagCategoriesResponse Successful Response
     * @throws ApiError
     */
    static getAvatarTagCategoriesApiV1AutoTaggingAvatarCategoriesGet(): CancelablePromise<TagCategoriesResponse>;
    /**
     * Get Settings Tag Categories
     * Settingsで使用可能なタグカテゴリ一覧を取得
     * @returns TagCategoriesResponse Successful Response
     * @throws ApiError
     */
    static getSettingsTagCategoriesApiV1AutoTaggingSettingsCategoriesGet(): CancelablePromise<TagCategoriesResponse>;
    /**
     * Get Motion Tag Categories
     * Motionで使用可能なタグカテゴリ一覧を取得
     * @returns TagCategoriesResponse Successful Response
     * @throws ApiError
     */
    static getMotionTagCategoriesApiV1AutoTaggingMotionCategoriesGet(): CancelablePromise<TagCategoriesResponse>;
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
    static autoTagVoiceApiV1AutoTaggingVoicePost({ requestBody, }: {
        requestBody: VoiceAutoTagRequest;
    }): CancelablePromise<AutoTagResponse>;
    /**
     * Get Voice Tag Categories
     * Voiceで使用可能なタグカテゴリ一覧を取得
     * @returns TagCategoriesResponse Successful Response
     * @throws ApiError
     */
    static getVoiceTagCategoriesApiV1AutoTaggingVoiceCategoriesGet(): CancelablePromise<TagCategoriesResponse>;
}

declare class AvatarAppearanceVariantsService {
    /**
     * Get Appearance Variant List
     * アバターの全外観バリアントを取得
     * @returns AppearanceVariantListResponse Successful Response
     * @throws ApiError
     */
    static getAppearanceVariantListApiV1AvatarsAvatarIdAppearanceVariantsGet({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<AppearanceVariantListResponse>;
    /**
     * Create Appearance Variant
     * アバターに新しい外観バリアントを作成
     * @returns AppearanceVariantResponse Successful Response
     * @throws ApiError
     */
    static createAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AppearanceVariantCreateRequest;
    }): CancelablePromise<AppearanceVariantResponse>;
    /**
     * Get Appearance Variant
     * 特定の外観バリアントを取得
     * @returns AppearanceVariantResponse Successful Response
     * @throws ApiError
     */
    static getAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdGet({ avatarId, variantId, }: {
        avatarId: string;
        variantId: string;
    }): CancelablePromise<AppearanceVariantResponse>;
    /**
     * Update Appearance Variant
     * 外観バリアントを更新
     * @returns AppearanceVariantResponse Successful Response
     * @throws ApiError
     */
    static updateAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdPatch({ avatarId, variantId, requestBody, }: {
        avatarId: string;
        variantId: string;
        requestBody: AppearanceVariantUpdateRequest;
    }): CancelablePromise<AppearanceVariantResponse>;
    /**
     * Delete Appearance Variant
     * 外観バリアントを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdDelete({ avatarId, variantId, }: {
        avatarId: string;
        variantId: string;
    }): CancelablePromise<void>;
}

declare class AvatarBlinksService {
    /**
     * Get Avatar Blinks
     * アバターの全ての瞬きデータを取得
     * @returns AvatarBlinkListResponse Successful Response
     * @throws ApiError
     */
    static getAvatarBlinksApiV1AvatarsAvatarIdBlinksGet({ avatarId, includeFormats, }: {
        avatarId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarBlinkListResponse>;
    /**
     * Create Avatar Blink
     * アバターに新しい瞬きデータを作成
     *
     * blink_id はサーバー側で自動生成される（blink_{avatar_id}形式）
     * @returns AvatarBlinkResponse Successful Response
     * @throws ApiError
     */
    static createAvatarBlinkApiV1AvatarsAvatarIdBlinksPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarBlinkCreateRequest;
    }): CancelablePromise<AvatarBlinkResponse>;
    /**
     * Batch Get Avatar Blinks
     * 複数の瞬きデータを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAvatarBlinksApiV1AvatarsAvatarIdBlinksBatchPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Blink
     * 特定の瞬きデータを取得
     * @returns AvatarBlinkResponse Successful Response
     * @throws ApiError
     */
    static getAvatarBlinkApiV1AvatarsAvatarIdBlinksAvatarBlinkIdGet({ avatarId, avatarBlinkId, includeFormats, }: {
        avatarId: string;
        avatarBlinkId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarBlinkResponse>;
    /**
     * Delete Avatar Blink
     * 瞬きデータを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarBlinkApiV1AvatarsAvatarIdBlinksAvatarBlinkIdDelete({ avatarId, avatarBlinkId, }: {
        avatarId: string;
        avatarBlinkId: string;
    }): CancelablePromise<void>;
    /**
     * List Avatar Blink Formats
     * 瞬きデータの全フォーマットを一覧取得
     * @returns BlinkFormatResponse Successful Response
     * @throws ApiError
     */
    static listAvatarBlinkFormatsApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsGet({ avatarId, avatarBlinkId, }: {
        avatarId: string;
        avatarBlinkId: string;
    }): CancelablePromise<Array<BlinkFormatResponse>>;
    /**
     * Add Avatar Blink Format
     * 瞬きデータにフォーマットを追加
     * @returns any Successful Response
     * @throws ApiError
     */
    static addAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsPost({ avatarId, avatarBlinkId, requestBody, }: {
        avatarId: string;
        avatarBlinkId: string;
        requestBody: BlinkFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Blink Format
     * 特定のフォーマットを取得
     * @returns BlinkFormatResponse Successful Response
     * @throws ApiError
     */
    static getAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypeGet({ avatarId, avatarBlinkId, formatType, }: {
        avatarId: string;
        avatarBlinkId: string;
        formatType: string;
    }): CancelablePromise<BlinkFormatResponse>;
    /**
     * Update Avatar Blink Format
     * 特定のフォーマットを更新
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypePatch({ avatarId, avatarBlinkId, formatType, requestBody, }: {
        avatarId: string;
        avatarBlinkId: string;
        formatType: string;
        requestBody: BlinkFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Delete Avatar Blink Format
     * 特定のフォーマットを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypeDelete({ avatarId, avatarBlinkId, formatType, }: {
        avatarId: string;
        avatarBlinkId: string;
        formatType: string;
    }): CancelablePromise<void>;
}

declare class AvatarBreathingsService {
    /**
     * Get Avatar Breathings
     * アバターの全ての呼吸データを取得
     * @returns AvatarBreathingListResponse Successful Response
     * @throws ApiError
     */
    static getAvatarBreathingsApiV1AvatarsAvatarIdBreathingsGet({ avatarId, includeFormats, }: {
        avatarId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarBreathingListResponse>;
    /**
     * Create Avatar Breathing
     * アバターに新しい呼吸データを作成
     * @returns AvatarBreathingResponse Successful Response
     * @throws ApiError
     */
    static createAvatarBreathingApiV1AvatarsAvatarIdBreathingsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarBreathingCreateRequest;
    }): CancelablePromise<AvatarBreathingResponse>;
    /**
     * Batch Get Avatar Breathings
     * 複数の呼吸データを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAvatarBreathingsApiV1AvatarsAvatarIdBreathingsBatchPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Breathing
     * 特定の呼吸データを取得
     * @returns AvatarBreathingResponse Successful Response
     * @throws ApiError
     */
    static getAvatarBreathingApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdGet({ avatarId, avatarBreathingId, includeFormats, }: {
        avatarId: string;
        avatarBreathingId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarBreathingResponse>;
    /**
     * Delete Avatar Breathing
     * 呼吸データを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarBreathingApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdDelete({ avatarId, avatarBreathingId, }: {
        avatarId: string;
        avatarBreathingId: string;
    }): CancelablePromise<void>;
    /**
     * List Avatar Breathing Formats
     * 呼吸データの全フォーマットを一覧取得
     * @returns BreathingFormatResponse Successful Response
     * @throws ApiError
     */
    static listAvatarBreathingFormatsApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsGet({ avatarId, avatarBreathingId, }: {
        avatarId: string;
        avatarBreathingId: string;
    }): CancelablePromise<Array<BreathingFormatResponse>>;
    /**
     * Add Avatar Breathing Format
     * 呼吸データにフォーマットを追加
     * @returns any Successful Response
     * @throws ApiError
     */
    static addAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsPost({ avatarId, avatarBreathingId, requestBody, }: {
        avatarId: string;
        avatarBreathingId: string;
        requestBody: BreathingFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Breathing Format
     * 特定のフォーマットを取得
     * @returns BreathingFormatResponse Successful Response
     * @throws ApiError
     */
    static getAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypeGet({ avatarId, avatarBreathingId, formatType, }: {
        avatarId: string;
        avatarBreathingId: string;
        formatType: string;
    }): CancelablePromise<BreathingFormatResponse>;
    /**
     * Update Avatar Breathing Format
     * 特定のフォーマットを更新
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypePatch({ avatarId, avatarBreathingId, formatType, requestBody, }: {
        avatarId: string;
        avatarBreathingId: string;
        formatType: string;
        requestBody: BreathingFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Delete Avatar Breathing Format
     * 特定のフォーマットを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypeDelete({ avatarId, avatarBreathingId, formatType, }: {
        avatarId: string;
        avatarBreathingId: string;
        formatType: string;
    }): CancelablePromise<void>;
}

declare class AvatarCoreMotionsService {
    /**
     * Get Avatar Core Motions
     * アバターのAvatarCoreMotionsデータを取得
     * @returns AvatarCoreMotionsResponse Successful Response
     * @throws ApiError
     */
    static getAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsGet({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<AvatarCoreMotionsResponse>;
    /**
     * Create Avatar Core Motions
     * アバターのAvatarCoreMotionsデータを作成
     * @returns AvatarCoreMotionsResponse Successful Response
     * @throws ApiError
     */
    static createAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarCoreMotionsCreateRequest;
    }): CancelablePromise<AvatarCoreMotionsResponse>;
    /**
     * Update Avatar Core Motions
     * アバターのAvatarCoreMotionsデータを更新
     * @returns AvatarCoreMotionsResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsPut({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarCoreMotionsUpdateRequest;
    }): CancelablePromise<AvatarCoreMotionsResponse>;
    /**
     * Delete Avatar Core Motions
     * アバターのAvatarCoreMotionsデータを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsDelete({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<void>;
}

declare class AvatarExpressionsService {
    /**
     * Get Avatar Expressions
     * アバターの全ての表現を取得
     * @returns AvatarExpressionResponse Successful Response
     * @throws ApiError
     */
    static getAvatarExpressionsApiV1AvatarsAvatarIdExpressionsGet({ avatarId, includeFormats, }: {
        avatarId: string;
        includeFormats?: boolean;
    }): CancelablePromise<Array<AvatarExpressionResponse>>;
    /**
     * Create Avatar Expression
     * アバターに新しい表現を作成
     *
     * avatar_expression_id と number はサーバー側で自動採番される
     * @returns AvatarExpressionResponse Successful Response
     * @throws ApiError
     */
    static createAvatarExpressionApiV1AvatarsAvatarIdExpressionsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarExpressionCreateRequest;
    }): CancelablePromise<AvatarExpressionResponse>;
    /**
     * Batch Get Avatar Expressions
     * 複数の表現データを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAvatarExpressionsApiV1AvatarsAvatarIdExpressionsBatchPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Expression
     * 特定の表現を取得
     * @returns AvatarExpressionResponse Successful Response
     * @throws ApiError
     */
    static getAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdGet({ avatarId, avatarExpressionId, includeFormats, }: {
        avatarId: string;
        avatarExpressionId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarExpressionResponse>;
    /**
     * Update Avatar Expression
     * 表現を更新
     * @returns AvatarExpressionResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdPatch({ avatarId, avatarExpressionId, requestBody, }: {
        avatarId: string;
        avatarExpressionId: string;
        requestBody: AvatarExpressionUpdateRequest;
    }): CancelablePromise<AvatarExpressionResponse>;
    /**
     * Delete Avatar Expression
     * 表現を削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdDelete({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<void>;
    /**
     * List Avatar Expression Formats
     * 表現の全フォーマットを一覧取得
     * @returns ExpressionFormatResponse Successful Response
     * @throws ApiError
     */
    static listAvatarExpressionFormatsApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGet({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<Array<ExpressionFormatResponse>>;
    /**
     * Add Avatar Expression Format
     * 表現にフォーマットを追加
     * @returns any Successful Response
     * @throws ApiError
     */
    static addAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsPost({ avatarId, avatarExpressionId, requestBody, }: {
        avatarId: string;
        avatarExpressionId: string;
        requestBody: ExpressionFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Expression Format
     * 特定のフォーマットを取得
     * @returns ExpressionFormatResponse Successful Response
     * @throws ApiError
     */
    static getAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypeGet({ avatarId, avatarExpressionId, formatType, }: {
        avatarId: string;
        avatarExpressionId: string;
        formatType: string;
    }): CancelablePromise<ExpressionFormatResponse>;
    /**
     * Update Avatar Expression Format
     * 特定のフォーマットを更新
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypePatch({ avatarId, avatarExpressionId, formatType, requestBody, }: {
        avatarId: string;
        avatarExpressionId: string;
        formatType: string;
        requestBody: ExpressionFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Delete Avatar Expression Format
     * 特定のフォーマットを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypeDelete({ avatarId, avatarExpressionId, formatType, }: {
        avatarId: string;
        avatarExpressionId: string;
        formatType: string;
    }): CancelablePromise<void>;
}

declare class AvatarInstancesService {
    /**
     * Create Avatar Instance
     * @returns AvatarInstanceResponse Successful Response
     * @throws ApiError
     */
    static createAvatarInstanceApiV1MarketplaceAvatarInstancesPost({ requestBody, }: {
        requestBody: AvatarInstanceCreateRequest;
    }): CancelablePromise<AvatarInstanceResponse>;
    /**
     * List Avatar Instances
     * @returns AvatarInstanceListResponse Successful Response
     * @throws ApiError
     */
    static listAvatarInstancesApiV1MarketplaceAvatarInstancesGet({ limit, cursor, }: {
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<AvatarInstanceListResponse>;
    /**
     * Get Avatar Instance
     * @returns AvatarInstanceResponse Successful Response
     * @throws ApiError
     */
    static getAvatarInstanceApiV1MarketplaceAvatarInstancesInstanceIdGet({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<AvatarInstanceResponse>;
    /**
     * Delete Avatar Instance
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarInstanceApiV1MarketplaceAvatarInstancesInstanceIdDelete({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<void>;
    /**
     * Update Avatar Instance To Latest
     * @returns AvatarInstanceResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarInstanceToLatestApiV1MarketplaceAvatarInstancesInstanceIdUpdatePost({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<AvatarInstanceResponse>;
    /**
     * Fork Avatar Instance
     * @returns any Successful Response
     * @throws ApiError
     */
    static forkAvatarInstanceApiV1MarketplaceAvatarInstancesInstanceIdForkPost({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<any>;
}

declare class AvatarItemAttachmentsService {
    /**
     * Create Attachment
     * 装着設定を作成
     * @returns AvatarItemAttachmentResponse Successful Response
     * @throws ApiError
     */
    static createAttachmentApiV1AvatarsAvatarIdItemAttachmentsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarItemAttachmentCreateRequest;
    }): CancelablePromise<AvatarItemAttachmentResponse>;
    /**
     * List Attachments
     * 装着設定一覧を取得
     * @returns AvatarItemAttachmentListResponse Successful Response
     * @throws ApiError
     */
    static listAttachmentsApiV1AvatarsAvatarIdItemAttachmentsGet({ avatarId, outfitId, accessoryId, hairStyleId, }: {
        avatarId: string;
        /**
         * 衣装IDでフィルタ
         */
        outfitId?: (string | null);
        /**
         * アクセサリーIDでフィルタ
         */
        accessoryId?: (string | null);
        /**
         * 髪型IDでフィルタ
         */
        hairStyleId?: (string | null);
    }): CancelablePromise<AvatarItemAttachmentListResponse>;
    /**
     * Get Attachment
     * 装着設定を1件取得
     * @returns AvatarItemAttachmentResponse Successful Response
     * @throws ApiError
     */
    static getAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdGet({ avatarId, attachmentId, }: {
        avatarId: string;
        attachmentId: string;
    }): CancelablePromise<AvatarItemAttachmentResponse>;
    /**
     * Update Attachment
     * 装着設定を更新
     * @returns AvatarItemAttachmentResponse Successful Response
     * @throws ApiError
     */
    static updateAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdPatch({ avatarId, attachmentId, requestBody, }: {
        avatarId: string;
        attachmentId: string;
        requestBody: AvatarItemAttachmentUpdateRequest;
    }): CancelablePromise<AvatarItemAttachmentResponse>;
    /**
     * Delete Attachment
     * 装着設定を削除
     * @returns void
     * @throws ApiError
     */
    static deleteAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdDelete({ avatarId, attachmentId, }: {
        avatarId: string;
        attachmentId: string;
    }): CancelablePromise<void>;
}

declare class AvatarLipsyncsService {
    /**
     * Get Avatar Lipsyncs
     * アバターの全てのリップシンクデータを取得
     * @returns AvatarLipSyncListResponse Successful Response
     * @throws ApiError
     */
    static getAvatarLipsyncsApiV1AvatarsAvatarIdLipsyncsGet({ avatarId, includeFormats, }: {
        avatarId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarLipSyncListResponse>;
    /**
     * Create Avatar Lipsync
     * アバターに新しいリップシンクデータを作成
     * @returns AvatarLipSyncResponse Successful Response
     * @throws ApiError
     */
    static createAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarLipSyncCreateRequest;
    }): CancelablePromise<AvatarLipSyncResponse>;
    /**
     * Batch Get Avatar Lipsyncs
     * 複数のリップシンクデータを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAvatarLipsyncsApiV1AvatarsAvatarIdLipsyncsBatchPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Lipsync
     * 特定のリップシンクデータを取得
     * @returns AvatarLipSyncResponse Successful Response
     * @throws ApiError
     */
    static getAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdGet({ avatarId, avatarLipsyncId, includeFormats, }: {
        avatarId: string;
        avatarLipsyncId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarLipSyncResponse>;
    /**
     * Update Avatar Lipsync
     * リップシンクデータを更新（共通パラメータのみ）
     * @returns AvatarLipSyncResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdPatch({ avatarId, avatarLipsyncId, requestBody, }: {
        avatarId: string;
        avatarLipsyncId: string;
        requestBody: AvatarLipSyncUpdateRequest;
    }): CancelablePromise<AvatarLipSyncResponse>;
    /**
     * Delete Avatar Lipsync
     * リップシンクデータを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdDelete({ avatarId, avatarLipsyncId, }: {
        avatarId: string;
        avatarLipsyncId: string;
    }): CancelablePromise<void>;
    /**
     * List Avatar Lipsync Formats
     * リップシンクデータの全フォーマットを一覧取得
     * @returns LipSyncFormatResponse Successful Response
     * @throws ApiError
     */
    static listAvatarLipsyncFormatsApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsGet({ avatarId, avatarLipsyncId, }: {
        avatarId: string;
        avatarLipsyncId: string;
    }): CancelablePromise<Array<LipSyncFormatResponse>>;
    /**
     * Add Avatar Lipsync Format
     * リップシンクデータにフォーマットを追加
     * @returns any Successful Response
     * @throws ApiError
     */
    static addAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsPost({ avatarId, avatarLipsyncId, requestBody, }: {
        avatarId: string;
        avatarLipsyncId: string;
        requestBody: LipSyncFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Lipsync Format
     * 特定のフォーマットを取得
     * @returns LipSyncFormatResponse Successful Response
     * @throws ApiError
     */
    static getAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypeGet({ avatarId, avatarLipsyncId, formatType, }: {
        avatarId: string;
        avatarLipsyncId: string;
        formatType: string;
    }): CancelablePromise<LipSyncFormatResponse>;
    /**
     * Update Avatar Lipsync Format
     * 特定のフォーマットを更新
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypePatch({ avatarId, avatarLipsyncId, formatType, requestBody, }: {
        avatarId: string;
        avatarLipsyncId: string;
        formatType: string;
        requestBody: LipSyncFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Delete Avatar Lipsync Format
     * 特定のフォーマットを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypeDelete({ avatarId, avatarLipsyncId, formatType, }: {
        avatarId: string;
        avatarLipsyncId: string;
        formatType: string;
    }): CancelablePromise<void>;
}

declare class AvatarLookatsService {
    /**
     * Get Avatar Lookats
     * アバターの全ての視線制御データを取得
     * @returns AvatarLookAtListResponse Successful Response
     * @throws ApiError
     */
    static getAvatarLookatsApiV1AvatarsAvatarIdLookatsGet({ avatarId, includeFormats, }: {
        avatarId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarLookAtListResponse>;
    /**
     * Create Avatar Lookat
     * アバターに新しい視線制御データを作成
     * @returns AvatarLookAtResponse Successful Response
     * @throws ApiError
     */
    static createAvatarLookatApiV1AvatarsAvatarIdLookatsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarLookAtCreateRequest;
    }): CancelablePromise<AvatarLookAtResponse>;
    /**
     * Batch Get Avatar Lookats
     * 複数の視線制御データを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAvatarLookatsApiV1AvatarsAvatarIdLookatsBatchPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Lookat
     * 特定の視線制御データを取得
     * @returns AvatarLookAtResponse Successful Response
     * @throws ApiError
     */
    static getAvatarLookatApiV1AvatarsAvatarIdLookatsAvatarLookatIdGet({ avatarId, avatarLookatId, includeFormats, }: {
        avatarId: string;
        avatarLookatId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarLookAtResponse>;
    /**
     * Delete Avatar Lookat
     * 視線制御データを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarLookatApiV1AvatarsAvatarIdLookatsAvatarLookatIdDelete({ avatarId, avatarLookatId, }: {
        avatarId: string;
        avatarLookatId: string;
    }): CancelablePromise<void>;
    /**
     * List Avatar Lookat Formats
     * 視線制御データの全フォーマットを一覧取得
     * @returns LookAtFormatResponse Successful Response
     * @throws ApiError
     */
    static listAvatarLookatFormatsApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsGet({ avatarId, avatarLookatId, }: {
        avatarId: string;
        avatarLookatId: string;
    }): CancelablePromise<Array<LookAtFormatResponse>>;
    /**
     * Add Avatar Lookat Format
     * 視線制御データにフォーマットを追加
     * @returns any Successful Response
     * @throws ApiError
     */
    static addAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsPost({ avatarId, avatarLookatId, requestBody, }: {
        avatarId: string;
        avatarLookatId: string;
        requestBody: LookAtFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Lookat Format
     * 特定のフォーマットを取得
     * @returns LookAtFormatResponse Successful Response
     * @throws ApiError
     */
    static getAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypeGet({ avatarId, avatarLookatId, formatType, }: {
        avatarId: string;
        avatarLookatId: string;
        formatType: string;
    }): CancelablePromise<LookAtFormatResponse>;
    /**
     * Update Avatar Lookat Format
     * 特定のフォーマットを更新
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypePatch({ avatarId, avatarLookatId, formatType, requestBody, }: {
        avatarId: string;
        avatarLookatId: string;
        formatType: string;
        requestBody: LookAtFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Delete Avatar Lookat Format
     * 特定のフォーマットを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypeDelete({ avatarId, avatarLookatId, formatType, }: {
        avatarId: string;
        avatarLookatId: string;
        formatType: string;
    }): CancelablePromise<void>;
}

declare class AvatarModelsService {
    /**
     * Create Vrm Model
     * VRMモデルを登録（アセットID参照）
     * @returns VRMModelResponse Successful Response
     * @throws ApiError
     */
    static createVrmModelApiV1AvatarsAvatarIdVrmModelPost({ avatarId, vrmAssetId, modelerName, characterDesignerName, }: {
        avatarId: string;
        /**
         * VRM AssetのID
         */
        vrmAssetId: string;
        /**
         * 3Dモデラー名
         */
        modelerName?: (string | null);
        /**
         * キャラクターデザイナー名
         */
        characterDesignerName?: (string | null);
    }): CancelablePromise<VRMModelResponse>;
    /**
     * Get Vrm Model
     * VRMモデル情報を取得
     * @returns VRMModelResponse Successful Response
     * @throws ApiError
     */
    static getVrmModelApiV1AvatarsAvatarIdVrmModelGet({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<VRMModelResponse>;
    /**
     * Update Vrm Model
     * VRMモデルを更新
     * @returns VRMModelResponse Successful Response
     * @throws ApiError
     */
    static updateVrmModelApiV1AvatarsAvatarIdVrmModelPatch({ avatarId, vrmAssetId, modelerName, characterDesignerName, }: {
        avatarId: string;
        /**
         * VRM AssetのID
         */
        vrmAssetId?: (string | null);
        /**
         * 3Dモデラー名
         */
        modelerName?: (string | null);
        /**
         * キャラクターデザイナー名
         */
        characterDesignerName?: (string | null);
    }): CancelablePromise<VRMModelResponse>;
    /**
     * Delete Vrm Model
     * VRMモデルを削除
     * @returns void
     * @throws ApiError
     */
    static deleteVrmModelApiV1AvatarsAvatarIdVrmModelDelete({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<void>;
    /**
     * Upload Vrm Model With File
     * VRMモデルを登録（ファイルアップロードしてアセット作成も行う統合版）
     * @returns VRMModelResponse Successful Response
     * @throws ApiError
     */
    static uploadVrmModelWithFileApiV1AvatarsAvatarIdVrmModelFileUploadPost({ avatarId, formData, }: {
        avatarId: string;
        formData: Body_upload_vrm_model_with_file_api_v1_avatars__avatar_id__vrm_model_file_upload_post;
    }): CancelablePromise<VRMModelResponse>;
    /**
     * Create Sprite Model
     * Spriteモデルを登録（アセットID参照）
     * @returns SpriteModelResponse Successful Response
     * @throws ApiError
     */
    static createSpriteModelApiV1AvatarsAvatarIdSpriteModelPost({ avatarId, posture, baseAssetId, facePositionJson, eyelidAssetId, eyeballAssetId, mouthAssetId, illustratorName, characterDesignerName, }: {
        avatarId: string;
        /**
         * 姿勢（standing/sitting/lying）
         */
        posture: BaseState;
        /**
         * ベース画像のアセットID
         */
        baseAssetId: string;
        /**
         * 顔位置JSON 例: {"center_x":0.5,"center_y":0.3,"width":0.2,"height":0.25}
         */
        facePositionJson: string;
        /**
         * まぶた画像のアセットID
         */
        eyelidAssetId?: (string | null);
        /**
         * 眼球画像のアセットID
         */
        eyeballAssetId?: (string | null);
        /**
         * 口の画像のアセットID
         */
        mouthAssetId?: (string | null);
        /**
         * イラストレーター名
         */
        illustratorName?: (string | null);
        /**
         * キャラクターデザイナー名
         */
        characterDesignerName?: (string | null);
    }): CancelablePromise<SpriteModelResponse>;
    /**
     * Get Sprite Model
     * Spriteモデル情報を取得
     * @returns SpriteModelResponse Successful Response
     * @throws ApiError
     */
    static getSpriteModelApiV1AvatarsAvatarIdSpriteModelGet({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<SpriteModelResponse>;
    /**
     * Update Sprite Model
     * Spriteモデルを更新
     * @returns SpriteModelResponse Successful Response
     * @throws ApiError
     */
    static updateSpriteModelApiV1AvatarsAvatarIdSpriteModelPatch({ avatarId, posture, baseAssetId, eyelidAssetId, eyeballAssetId, mouthAssetId, illustratorName, characterDesignerName, facePositionJson, }: {
        avatarId: string;
        /**
         * 更新する姿勢（standing/sitting/lying）
         */
        posture?: (BaseState | null);
        /**
         * ベース画像のアセットID
         */
        baseAssetId?: (string | null);
        /**
         * まぶた画像のアセットID
         */
        eyelidAssetId?: (string | null);
        /**
         * 眼球画像のアセットID
         */
        eyeballAssetId?: (string | null);
        /**
         * 口の画像のアセットID
         */
        mouthAssetId?: (string | null);
        /**
         * イラストレーター名
         */
        illustratorName?: (string | null);
        /**
         * キャラクターデザイナー名
         */
        characterDesignerName?: (string | null);
        /**
         * 顔位置JSON 例: {"center_x":0.5,"center_y":0.3,"width":0.2,"height":0.25}
         */
        facePositionJson?: (string | null);
    }): CancelablePromise<SpriteModelResponse>;
    /**
     * Delete Sprite Model
     * Spriteモデルを削除
     * @returns void
     * @throws ApiError
     */
    static deleteSpriteModelApiV1AvatarsAvatarIdSpriteModelDelete({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<void>;
    /**
     * Upload Sprite Model With Files
     * Spriteモデルを登録（画像ファイルアップロードしてアセット作成も行う統合版）
     * @returns SpriteModelResponse Successful Response
     * @throws ApiError
     */
    static uploadSpriteModelWithFilesApiV1AvatarsAvatarIdSpriteModelFileUploadPost({ avatarId, formData, }: {
        avatarId: string;
        formData: Body_upload_sprite_model_with_files_api_v1_avatars__avatar_id__sprite_model_file_upload_post;
    }): CancelablePromise<SpriteModelResponse>;
    /**
     * Detect Face
     * 画像から顔位置を自動検出する（正規化座標で返却）
     * @returns FaceDetectionResponse Successful Response
     * @throws ApiError
     */
    static detectFaceApiV1AvatarsAvatarIdSpriteModelDetectFacePost({ avatarId, formData, }: {
        avatarId: string;
        formData: Body_detect_face_api_v1_avatars__avatar_id__sprite_model_detect_face_post;
    }): CancelablePromise<FaceDetectionResponse>;
    /**
     * Detect Pose
     * 画像からボディキーポイントを自動検出する（正規化座標で返却）
     * @returns PoseDetectionResponse Successful Response
     * @throws ApiError
     */
    static detectPoseApiV1AvatarsAvatarIdSpriteModelDetectPosePost({ avatarId, formData, }: {
        avatarId: string;
        formData: Body_detect_pose_api_v1_avatars__avatar_id__sprite_model_detect_pose_post;
    }): CancelablePromise<PoseDetectionResponse>;
    /**
     * Create Face Icon Model
     * FaceIconモデルを登録（アセットID参照）
     * @returns FaceIconModelResponse Successful Response
     * @throws ApiError
     */
    static createFaceIconModelApiV1AvatarsAvatarIdFaceIconModelPost({ avatarId, baseAssetId, bodyAssetId, eyelidAssetId, eyeballAssetId, mouthAssetId, illustratorName, characterDesignerName, }: {
        avatarId: string;
        /**
         * コンポジット画像のアセットID（全レイヤー結合済み）
         */
        baseAssetId: string;
        /**
         * ボディ画像のアセットID（非分離要素焼き込み済み素体）
         */
        bodyAssetId?: (string | null);
        /**
         * まぶた画像のアセットID
         */
        eyelidAssetId?: (string | null);
        /**
         * 眼球画像のアセットID
         */
        eyeballAssetId?: (string | null);
        /**
         * 口の画像のアセットID
         */
        mouthAssetId?: (string | null);
        /**
         * イラストレーター名
         */
        illustratorName?: (string | null);
        /**
         * キャラクターデザイナー名
         */
        characterDesignerName?: (string | null);
    }): CancelablePromise<FaceIconModelResponse>;
    /**
     * Get Face Icon Model
     * FaceIconモデル情報を取得
     * @returns FaceIconModelResponse Successful Response
     * @throws ApiError
     */
    static getFaceIconModelApiV1AvatarsAvatarIdFaceIconModelGet({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<FaceIconModelResponse>;
    /**
     * Update Face Icon Model
     * FaceIconモデルを更新
     * @returns FaceIconModelResponse Successful Response
     * @throws ApiError
     */
    static updateFaceIconModelApiV1AvatarsAvatarIdFaceIconModelPatch({ avatarId, baseAssetId, bodyAssetId, eyelidAssetId, eyeballAssetId, mouthAssetId, illustratorName, characterDesignerName, }: {
        avatarId: string;
        /**
         * コンポジット画像のアセットID（全レイヤー結合済み）
         */
        baseAssetId?: (string | null);
        /**
         * ボディ画像のアセットID（非分離要素焼き込み済み素体）
         */
        bodyAssetId?: (string | null);
        /**
         * まぶた画像のアセットID
         */
        eyelidAssetId?: (string | null);
        /**
         * 眼球画像のアセットID
         */
        eyeballAssetId?: (string | null);
        /**
         * 口の画像のアセットID
         */
        mouthAssetId?: (string | null);
        /**
         * イラストレーター名
         */
        illustratorName?: (string | null);
        /**
         * キャラクターデザイナー名
         */
        characterDesignerName?: (string | null);
    }): CancelablePromise<FaceIconModelResponse>;
    /**
     * Delete Face Icon Model
     * FaceIconモデルを削除
     * @returns void
     * @throws ApiError
     */
    static deleteFaceIconModelApiV1AvatarsAvatarIdFaceIconModelDelete({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<void>;
    /**
     * Upload Face Icon Model With Files
     * FaceIconモデルを登録（画像ファイルアップロードしてアセット作成も行う統合版）
     * @returns FaceIconModelResponse Successful Response
     * @throws ApiError
     */
    static uploadFaceIconModelWithFilesApiV1AvatarsAvatarIdFaceIconModelFileUploadPost({ avatarId, formData, }: {
        avatarId: string;
        formData: Body_upload_face_icon_model_with_files_api_v1_avatars__avatar_id__face_icon_model_file_upload_post;
    }): CancelablePromise<FaceIconModelResponse>;
    /**
     * Upload Asset Bundle
     * AssetBundleモデルの作成/更新（単一バリアント登録・差し替え）
     * @returns AssetBundleModelResponse Successful Response
     * @throws ApiError
     */
    static uploadAssetBundleApiV1AvatarsAvatarIdAssetBundleModelPost({ avatarId, platform, arch, storagePath, sha256, sizeBytes, modelerName, characterDesignerName, formData, }: {
        avatarId: string;
        /**
         * Platform (e.g., android, ios, webgl, pc)
         */
        platform: string;
        /**
         * Architecture (e.g., arm64-v8a, arm64, wasm, win-x64)
         */
        arch: string;
        /**
         * Existing storage path (for JSON import)
         */
        storagePath?: (string | null);
        /**
         * SHA256 hash (for JSON import)
         */
        sha256?: (string | null);
        /**
         * File size in bytes (for JSON import)
         */
        sizeBytes?: (number | null);
        /**
         * 3Dモデラー名
         */
        modelerName?: (string | null);
        /**
         * キャラクターデザイナー名
         */
        characterDesignerName?: (string | null);
        formData?: Body_upload_asset_bundle_api_v1_avatars__avatar_id__asset_bundle_model_post;
    }): CancelablePromise<AssetBundleModelResponse>;
    /**
     * Get Asset Bundle
     * AssetBundleモデル情報を取得（全バリアント一覧）
     * @returns AssetBundleModelResponse Successful Response
     * @throws ApiError
     */
    static getAssetBundleApiV1AvatarsAvatarIdAssetBundleModelGet({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<AssetBundleModelResponse>;
    /**
     * Delete Asset Bundle
     * AssetBundleモデル全体を削除（全バリアント + Firestore）
     * @returns void
     * @throws ApiError
     */
    static deleteAssetBundleApiV1AvatarsAvatarIdAssetBundleModelDelete({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<void>;
    /**
     * Delete Asset Bundle Variant
     * AssetBundleの単一バリアントを削除（Firestore + Storage）
     * @returns void
     * @throws ApiError
     */
    static deleteAssetBundleVariantApiV1AvatarsAvatarIdAssetBundleModelVariantDelete({ avatarId, platform, arch, }: {
        avatarId: string;
        /**
         * Platform
         */
        platform: string;
        /**
         * Architecture
         */
        arch: string;
    }): CancelablePromise<void>;
    /**
     * Create Glb Model
     * GLBモデルを登録（アセットID参照）
     * @returns GLBModelResponse Successful Response
     * @throws ApiError
     */
    static createGlbModelApiV1AvatarsAvatarIdGlbModelPost({ avatarId, glbAssetId, glbAssetVersionId, modelerName, designerName, }: {
        avatarId: string;
        /**
         * GLBアセットID
         */
        glbAssetId: string;
        /**
         * GLBアセットバージョンID
         */
        glbAssetVersionId?: (string | null);
        /**
         * 3Dモデラー名
         */
        modelerName?: (string | null);
        /**
         * デザイナー名
         */
        designerName?: (string | null);
    }): CancelablePromise<GLBModelResponse>;
    /**
     * Get Glb Model
     * GLBモデル情報を取得
     * @returns GLBModelResponse Successful Response
     * @throws ApiError
     */
    static getGlbModelApiV1AvatarsAvatarIdGlbModelGet({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<GLBModelResponse>;
    /**
     * Update Glb Model
     * GLBモデルを更新
     * @returns GLBModelResponse Successful Response
     * @throws ApiError
     */
    static updateGlbModelApiV1AvatarsAvatarIdGlbModelPatch({ avatarId, glbAssetId, glbAssetVersionId, modelerName, designerName, }: {
        avatarId: string;
        /**
         * GLBアセットID
         */
        glbAssetId?: (string | null);
        /**
         * GLBアセットバージョンID
         */
        glbAssetVersionId?: (string | null);
        /**
         * 3Dモデラー名
         */
        modelerName?: (string | null);
        /**
         * デザイナー名
         */
        designerName?: (string | null);
    }): CancelablePromise<GLBModelResponse>;
    /**
     * Delete Glb Model
     * GLBモデルを削除
     * @returns void
     * @throws ApiError
     */
    static deleteGlbModelApiV1AvatarsAvatarIdGlbModelDelete({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<void>;
    /**
     * Upload Glb Model With File
     * GLBモデルを登録（ファイルアップロードしてアセット作成も行う統合版）
     * @returns GLBModelResponse Successful Response
     * @throws ApiError
     */
    static uploadGlbModelWithFileApiV1AvatarsAvatarIdGlbModelFileUploadPost({ avatarId, formData, }: {
        avatarId: string;
        formData: Body_upload_glb_model_with_file_api_v1_avatars__avatar_id__glb_model_file_upload_post;
    }): CancelablePromise<GLBModelResponse>;
}

declare class AvatarMotionsService {
    /**
     * Get Avatar Motions
     * アバターの全てのモーションを取得
     * @returns AvatarMotionResponse Successful Response
     * @throws ApiError
     */
    static getAvatarMotionsApiV1AvatarsAvatarIdMotionsGet({ avatarId, includeFormats, }: {
        avatarId: string;
        includeFormats?: boolean;
    }): CancelablePromise<Array<AvatarMotionResponse>>;
    /**
     * Create Avatar Motion
     * アバターに新しいモーションを作成
     * @returns AvatarMotionResponse Successful Response
     * @throws ApiError
     */
    static createAvatarMotionApiV1AvatarsAvatarIdMotionsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: AvatarMotionCreateRequest;
    }): CancelablePromise<AvatarMotionResponse>;
    /**
     * Batch Get Avatar Motions
     * 複数のモーションデータを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAvatarMotionsApiV1AvatarsAvatarIdMotionsBatchPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Motion
     * 特定のモーションを取得
     * @returns AvatarMotionResponse Successful Response
     * @throws ApiError
     */
    static getAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdGet({ avatarId, motionId, includeFormats, }: {
        avatarId: string;
        motionId: string;
        includeFormats?: boolean;
    }): CancelablePromise<AvatarMotionResponse>;
    /**
     * Update Avatar Motion
     * モーションを更新
     * @returns AvatarMotionResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdPatch({ avatarId, motionId, requestBody, }: {
        avatarId: string;
        motionId: string;
        requestBody: AvatarMotionUpdateRequest;
    }): CancelablePromise<AvatarMotionResponse>;
    /**
     * Delete Avatar Motion
     * モーションを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdDelete({ avatarId, motionId, }: {
        avatarId: string;
        motionId: string;
    }): CancelablePromise<void>;
    /**
     * List Avatar Motion Formats
     * モーションの全フォーマットを一覧取得
     * @returns MotionFormatResponse Successful Response
     * @throws ApiError
     */
    static listAvatarMotionFormatsApiV1AvatarsAvatarIdMotionsMotionIdFormatsGet({ avatarId, motionId, }: {
        avatarId: string;
        motionId: string;
    }): CancelablePromise<Array<MotionFormatResponse>>;
    /**
     * Add Avatar Motion Format
     * モーションにフォーマットを追加
     * @returns any Successful Response
     * @throws ApiError
     */
    static addAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsPost({ avatarId, motionId, requestBody, }: {
        avatarId: string;
        motionId: string;
        requestBody: AvatarMotionFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar Motion Format
     * 特定のフォーマットを取得
     * @returns MotionFormatResponse Successful Response
     * @throws ApiError
     */
    static getAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypeGet({ avatarId, motionId, formatType, }: {
        avatarId: string;
        motionId: string;
        formatType: string;
    }): CancelablePromise<MotionFormatResponse>;
    /**
     * Update Avatar Motion Format
     * 特定のフォーマットを更新
     * @returns any Successful Response
     * @throws ApiError
     */
    static updateAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypePatch({ avatarId, motionId, formatType, requestBody, }: {
        avatarId: string;
        motionId: string;
        formatType: string;
        requestBody: AvatarMotionFormatRequest;
    }): CancelablePromise<any>;
    /**
     * Delete Avatar Motion Format
     * 特定のフォーマットを削除
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypeDelete({ avatarId, motionId, formatType, }: {
        avatarId: string;
        motionId: string;
        formatType: string;
    }): CancelablePromise<void>;
}

declare class AvatarsService {
    /**
     * List Avatars
     * @returns AvatarListResponse Successful Response
     * @throws ApiError
     */
    static listAvatarsApiV1AvatarsGet({ modelType, gender, ageRating, country, publishScope, filterByOwner, maxAiLevel, limit, cursor, }: {
        /**
         * モデル形式でフィルタリング
         */
        modelType?: (ModelType | null);
        /**
         * 性別フィルター
         */
        gender?: (GenderType | null);
        /**
         * 年齢レーティングフィルター (all, r15, r18)
         */
        ageRating?: (AgeRating | null);
        /**
         * 国コードフィルター (JP, US, DE等)。age_ratingと組み合わせて使用
         */
        country?: (Country | null);
        /**
         * 公開範囲フィルター (public, unlisted, private)
         */
        publishScope?: (PublishScope | null);
        /**
         * 所有者IDでフィルタリングするかどうか
         */
        filterByOwner?: boolean;
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<AvatarListResponse>;
    /**
     * Create Avatar
     * @returns AvatarResponse Successful Response
     * @throws ApiError
     */
    static createAvatarApiV1AvatarsPost({ formData, }: {
        formData: Body_create_avatar_api_v1_avatars_post;
    }): CancelablePromise<AvatarResponse>;
    /**
     * Batch Get Avatars
     * 複数のアバターを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetAvatarsApiV1AvatarsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Avatar
     * @returns AvatarResponse Successful Response
     * @throws ApiError
     */
    static getAvatarApiV1AvatarsAvatarIdGet({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<AvatarResponse>;
    /**
     * Update Avatar
     * @returns AvatarResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarApiV1AvatarsAvatarIdPatch({ avatarId, formData, }: {
        avatarId: string;
        formData?: Body_update_avatar_api_v1_avatars__avatar_id__patch;
    }): CancelablePromise<AvatarResponse>;
    /**
     * Delete Avatar
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarApiV1AvatarsAvatarIdDelete({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<void>;
    /**
     * Suggest Avatar Ai Usage
     * アバターの参照アセットからAI使用レベルをサジェスト
     * @returns AvatarAiUsage Successful Response
     * @throws ApiError
     */
    static suggestAvatarAiUsageApiV1AvatarsAvatarIdSuggestAiUsagePost({ avatarId, }: {
        avatarId: string;
    }): CancelablePromise<AvatarAiUsage>;
    /**
     * Recommend Voices
     * アバターに相性の良いVoiceをおすすめ順で返す
     *
     * data_source=official, publish_scope=publicのVoiceのみが対象
     * @returns RecommendationResponse Successful Response
     * @throws ApiError
     */
    static recommendVoicesApiV1AvatarsAvatarIdRecommendVoicesPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody?: RecommendationRequest;
    }): CancelablePromise<RecommendationResponse>;
    /**
     * Recommend Settings
     * アバターに相性の良いSettingsをおすすめ順で返す
     *
     * data_source=official, publish_scope=publicのSettingsのみが対象
     * @returns RecommendationResponse Successful Response
     * @throws ApiError
     */
    static recommendSettingsApiV1AvatarsAvatarIdRecommendSettingsPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody?: RecommendationRequest;
    }): CancelablePromise<RecommendationResponse>;
    /**
     * Copy Avatar Expressions To Avatar
     * アバターの表現を別のアバターにコピー
     * @returns SimpleCopyEmotionsResponse Successful Response
     * @throws ApiError
     */
    static copyAvatarExpressionsToAvatarApiV1AvatarsSourceAvatarIdCopyExpressionsToAvatarTargetAvatarIdPost({ sourceAvatarId, targetAvatarId, }: {
        sourceAvatarId: string;
        targetAvatarId: string;
    }): CancelablePromise<SimpleCopyEmotionsResponse>;
    /**
     * Copy Avatar Motions To Avatar
     * アバターのモーションを別のアバターにコピー
     * @returns SimpleCopyMotionsResponse Successful Response
     * @throws ApiError
     */
    static copyAvatarMotionsToAvatarApiV1AvatarsSourceAvatarIdCopyMotionsToAvatarTargetAvatarIdPost({ sourceAvatarId, targetAvatarId, }: {
        sourceAvatarId: string;
        targetAvatarId: string;
    }): CancelablePromise<SimpleCopyMotionsResponse>;
    /**
     * Duplicate Avatar
     * アバターを複製（すべてのサブコレクションをコピー）
     * @returns DuplicateResponse Successful Response
     * @throws ApiError
     */
    static duplicateAvatarApiV1AvatarsAvatarIdDuplicatePost({ avatarId, newAvatarId, }: {
        avatarId: string;
        /**
         * 新しいアバターID（省略時は自動生成）
         */
        newAvatarId?: (string | null);
    }): CancelablePromise<DuplicateResponse>;
}

declare class AvatarTemplatesService {
    /**
     * Promote Avatar To Template
     * @returns AvatarTemplateResponse Successful Response
     * @throws ApiError
     */
    static promoteAvatarToTemplateApiV1MarketplaceAvatarTemplatesPost({ requestBody, }: {
        requestBody: AvatarTemplatePromoteRequest;
    }): CancelablePromise<AvatarTemplateResponse>;
    /**
     * List Avatar Templates
     * @returns AvatarTemplateListResponse Successful Response
     * @throws ApiError
     */
    static listAvatarTemplatesApiV1MarketplaceAvatarTemplatesGet({ sourceEntityId, limit, cursor, }: {
        /**
         * 元エンティティIDで絞り込み
         */
        sourceEntityId?: (string | null);
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<AvatarTemplateListResponse>;
    /**
     * Get Avatar Template
     * @returns AvatarTemplateResponse Successful Response
     * @throws ApiError
     */
    static getAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdGet({ templateId, }: {
        templateId: string;
    }): CancelablePromise<AvatarTemplateResponse>;
    /**
     * Update Avatar Template
     * @returns AvatarTemplateResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdPatch({ templateId, requestBody, }: {
        templateId: string;
        requestBody: AvatarTemplateUpdateRequest;
    }): CancelablePromise<AvatarTemplateResponse>;
    /**
     * Delete Avatar Template
     * @returns void
     * @throws ApiError
     */
    static deleteAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdDelete({ templateId, }: {
        templateId: string;
    }): CancelablePromise<void>;
    /**
     * Fork Avatar Template
     * @returns any Successful Response
     * @throws ApiError
     */
    static forkAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdForkPost({ templateId, }: {
        templateId: string;
    }): CancelablePromise<any>;
    /**
     * Get Template Subcollection
     * @returns any Successful Response
     * @throws ApiError
     */
    static getTemplateSubcollectionApiV1MarketplaceAvatarTemplatesTemplateIdSubcollectionsSubcollectionNameGet({ templateId, subcollectionName, }: {
        templateId: string;
        subcollectionName: string;
    }): CancelablePromise<any>;
    /**
     * Get Template Subcollection Doc
     * @returns any Successful Response
     * @throws ApiError
     */
    static getTemplateSubcollectionDocApiV1MarketplaceAvatarTemplatesTemplateIdSubcollectionsSubcollectionNameDocIdGet({ templateId, subcollectionName, docId, }: {
        templateId: string;
        subcollectionName: string;
        docId: string;
    }): CancelablePromise<any>;
}

declare class CacheMetadataService {
    /**
     * Get Cache Metadata
     * @returns CacheMetadataResponse Successful Response
     * @throws ApiError
     */
    static getCacheMetadataApiV1CharactersCharacterIdCacheMetadataGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CacheMetadataResponse>;
    /**
     * Upsert Cache Metadata
     * @returns CacheMetadataResponse Successful Response
     * @throws ApiError
     */
    static upsertCacheMetadataApiV1CharactersCharacterIdCacheMetadataPut({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CacheMetadataUpsertRequest;
    }): CancelablePromise<CacheMetadataResponse>;
    /**
     * Delete Cache Metadata
     * @returns void
     * @throws ApiError
     */
    static deleteCacheMetadataApiV1CharactersCharacterIdCacheMetadataDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
    /**
     * Get Cache Status
     * インメモリキャッシュ状態を取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static getCacheStatusApiV1CharactersCharacterIdCacheMetadataStatusGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<any>;
    /**
     * Invalidate Cache
     * キャッシュを即座に無効化
     * @returns void
     * @throws ApiError
     */
    static invalidateCacheApiV1CharactersCharacterIdCacheMetadataInvalidateDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
}

declare class CharacterAbilitiesService {
    /**
     * Create Abilities
     * キャラクターの能力情報を作成
     * @returns CharacterAbilitiesResponse Successful Response
     * @throws ApiError
     */
    static createAbilitiesApiV1CharactersCharacterIdAbilitiesPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterAbilitiesRequest;
    }): CancelablePromise<CharacterAbilitiesResponse>;
    /**
     * Get Abilities
     * キャラクターの能力情報を取得
     * @returns CharacterAbilitiesResponse Successful Response
     * @throws ApiError
     */
    static getAbilitiesApiV1CharactersCharacterIdAbilitiesGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterAbilitiesResponse>;
    /**
     * Update Abilities
     * キャラクターの能力情報を更新
     * @returns CharacterAbilitiesResponse Successful Response
     * @throws ApiError
     */
    static updateAbilitiesApiV1CharactersCharacterIdAbilitiesPatch({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterAbilitiesRequest;
    }): CancelablePromise<CharacterAbilitiesResponse>;
    /**
     * Delete Abilities
     * キャラクターの能力情報を削除
     * @returns void
     * @throws ApiError
     */
    static deleteAbilitiesApiV1CharactersCharacterIdAbilitiesDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
}

declare class CharacterActionsService {
    /**
     * Create Action
     * アクションデータを作成
     * @returns CharacterActionResponse Successful Response
     * @throws ApiError
     */
    static createActionApiV1CharactersCharacterIdActionsPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterActionCreateRequest;
    }): CancelablePromise<CharacterActionResponse>;
    /**
     * List Actions
     * キャラクターの全アクションデータを取得
     * @returns CharacterActionListResponse Successful Response
     * @throws ApiError
     */
    static listActionsApiV1CharactersCharacterIdActionsGet({ characterId, limit, cursor, }: {
        characterId: string;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル（オフセット値）
         */
        cursor?: (string | null);
    }): CancelablePromise<CharacterActionListResponse>;
    /**
     * List Top Level Actions
     * トップレベルアクションのみ取得
     * @returns CharacterActionListResponse Successful Response
     * @throws ApiError
     */
    static listTopLevelActionsApiV1CharactersCharacterIdActionsTopLevelGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterActionListResponse>;
    /**
     * List Child Actions
     * 子アクションを取得
     * @returns CharacterActionListResponse Successful Response
     * @throws ApiError
     */
    static listChildActionsApiV1CharactersCharacterIdActionsActionIdChildrenGet({ characterId, actionId, }: {
        characterId: string;
        actionId: string;
    }): CancelablePromise<CharacterActionListResponse>;
    /**
     * Get Action Tree
     * アクションのツリー構造を取得
     * @returns CharacterActionTreeResponse Successful Response
     * @throws ApiError
     */
    static getActionTreeApiV1CharactersCharacterIdActionsActionIdTreeGet({ characterId, actionId, }: {
        characterId: string;
        actionId: string;
    }): CancelablePromise<CharacterActionTreeResponse>;
    /**
     * Get Action
     * アクションデータを取得
     * @returns CharacterActionResponse Successful Response
     * @throws ApiError
     */
    static getActionApiV1CharactersCharacterIdActionsActionIdGet({ characterId, actionId, }: {
        characterId: string;
        actionId: string;
    }): CancelablePromise<CharacterActionResponse>;
    /**
     * Update Action
     * アクションデータを更新
     * @returns CharacterActionResponse Successful Response
     * @throws ApiError
     */
    static updateActionApiV1CharactersCharacterIdActionsActionIdPatch({ characterId, actionId, requestBody, }: {
        characterId: string;
        actionId: string;
        requestBody: CharacterActionUpdateRequest;
    }): CancelablePromise<CharacterActionResponse>;
    /**
     * Delete Action
     * アクションデータを削除
     * @returns void
     * @throws ApiError
     */
    static deleteActionApiV1CharactersCharacterIdActionsActionIdDelete({ characterId, actionId, }: {
        characterId: string;
        actionId: string;
    }): CancelablePromise<void>;
    /**
     * Batch Create Actions
     * アクションデータを一括作成
     * @returns CharacterActionListResponse Successful Response
     * @throws ApiError
     */
    static batchCreateActionsApiV1CharactersCharacterIdActionsBatchPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterActionBatchCreateRequest;
    }): CancelablePromise<CharacterActionListResponse>;
}

declare class CharacterBackgroundDetailsService {
    /**
     * Create Background Details
     * キャラクターの背景詳細を作成
     * @returns CharacterBackgroundDetailsResponse Successful Response
     * @throws ApiError
     */
    static createBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterBackgroundDetailsRequest;
    }): CancelablePromise<CharacterBackgroundDetailsResponse>;
    /**
     * Get Background Details
     * キャラクターの背景詳細を取得
     * @returns CharacterBackgroundDetailsResponse Successful Response
     * @throws ApiError
     */
    static getBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterBackgroundDetailsResponse>;
    /**
     * Update Background Details
     * キャラクターの背景詳細を更新
     * @returns CharacterBackgroundDetailsResponse Successful Response
     * @throws ApiError
     */
    static updateBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsPatch({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterBackgroundDetailsRequest;
    }): CancelablePromise<CharacterBackgroundDetailsResponse>;
    /**
     * Delete Background Details
     * キャラクターの背景詳細を削除
     * @returns void
     * @throws ApiError
     */
    static deleteBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
}

declare class CharacterBasicInfoService {
    /**
     * Create Basic Info
     * キャラクターの基本情報を作成
     * @returns CharacterBasicInfoResponse Successful Response
     * @throws ApiError
     */
    static createBasicInfoApiV1CharactersCharacterIdBasicInfoPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterBasicInfoRequest;
    }): CancelablePromise<CharacterBasicInfoResponse>;
    /**
     * Get Basic Info
     * キャラクターの基本情報を取得
     * @returns CharacterBasicInfoResponse Successful Response
     * @throws ApiError
     */
    static getBasicInfoApiV1CharactersCharacterIdBasicInfoGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterBasicInfoResponse>;
    /**
     * Update Basic Info
     * キャラクターの基本情報を更新
     * @returns CharacterBasicInfoResponse Successful Response
     * @throws ApiError
     */
    static updateBasicInfoApiV1CharactersCharacterIdBasicInfoPatch({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterBasicInfoRequest;
    }): CancelablePromise<CharacterBasicInfoResponse>;
    /**
     * Delete Basic Info
     * キャラクターの基本情報を削除
     * @returns void
     * @throws ApiError
     */
    static deleteBasicInfoApiV1CharactersCharacterIdBasicInfoDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
}

declare class CharacterDailyLifeService {
    /**
     * Create Daily Life
     * キャラクターの日常生活情報を作成
     * @returns CharacterDailyLifeResponse Successful Response
     * @throws ApiError
     */
    static createDailyLifeApiV1CharactersCharacterIdDailyLifePost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterDailyLifeRequest;
    }): CancelablePromise<CharacterDailyLifeResponse>;
    /**
     * Get Daily Life
     * キャラクターの日常生活情報を取得
     * @returns CharacterDailyLifeResponse Successful Response
     * @throws ApiError
     */
    static getDailyLifeApiV1CharactersCharacterIdDailyLifeGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterDailyLifeResponse>;
    /**
     * Update Daily Life
     * キャラクターの日常生活情報を更新
     * @returns CharacterDailyLifeResponse Successful Response
     * @throws ApiError
     */
    static updateDailyLifeApiV1CharactersCharacterIdDailyLifePatch({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterDailyLifeRequest;
    }): CancelablePromise<CharacterDailyLifeResponse>;
    /**
     * Delete Daily Life
     * キャラクターの日常生活情報を削除
     * @returns void
     * @throws ApiError
     */
    static deleteDailyLifeApiV1CharactersCharacterIdDailyLifeDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
}

declare class CharacterEmotionsService {
    /**
     * List Character Emotions
     * キャラクターの感情設定一覧を取得
     * @returns CharacterEmotionListResponse Successful Response
     * @throws ApiError
     */
    static listCharacterEmotionsApiV1CharactersCharacterIdEmotionsGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterEmotionListResponse>;
    /**
     * Create Character Emotion
     * キャラクターの感情設定を作成
     * @returns CharacterEmotionResponse Successful Response
     * @throws ApiError
     */
    static createCharacterEmotionApiV1CharactersCharacterIdEmotionsPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterEmotionCreateRequest;
    }): CancelablePromise<CharacterEmotionResponse>;
    /**
     * Get Character Emotion
     * キャラクターの特定の感情設定を取得
     * @returns CharacterEmotionResponse Successful Response
     * @throws ApiError
     */
    static getCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdGet({ characterId, emotionId, }: {
        characterId: string;
        emotionId: string;
    }): CancelablePromise<CharacterEmotionResponse>;
    /**
     * Update Character Emotion
     * キャラクターの感情設定を更新
     * @returns CharacterEmotionResponse Successful Response
     * @throws ApiError
     */
    static updateCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdPut({ characterId, emotionId, requestBody, }: {
        characterId: string;
        emotionId: string;
        requestBody: CharacterEmotionUpdateRequest;
    }): CancelablePromise<CharacterEmotionResponse>;
    /**
     * Delete Character Emotion
     * キャラクターの感情設定を削除
     * @returns void
     * @throws ApiError
     */
    static deleteCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdDelete({ characterId, emotionId, }: {
        characterId: string;
        emotionId: string;
    }): CancelablePromise<void>;
    /**
     * Batch Create Character Emotions
     * キャラクターの感情設定を一括作成
     * @returns CharacterEmotionListResponse Successful Response
     * @throws ApiError
     */
    static batchCreateCharacterEmotionsApiV1CharactersCharacterIdEmotionsBatchPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterEmotionBatchCreateRequest;
    }): CancelablePromise<CharacterEmotionListResponse>;
    /**
     * Get Character Emotion Ids
     * キャラクターが持つemotion_idのリストを取得
     * @returns CharacterEmotionIdsResponse Successful Response
     * @throws ApiError
     */
    static getCharacterEmotionIdsApiV1CharactersCharacterIdEmotionsIdsGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterEmotionIdsResponse>;
}

declare class CharacterEquipmentService {
    /**
     * Create Equipment
     * キャラクターに装備を追加
     * @returns CharacterEquipmentResponse Successful Response
     * @throws ApiError
     */
    static createEquipmentApiV1CharactersCharacterIdEquipmentPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterEquipmentCreateRequest;
    }): CancelablePromise<CharacterEquipmentResponse>;
    /**
     * List Equipment
     * キャラクターの装備一覧を取得
     * @returns CharacterEquipmentListResponse Successful Response
     * @throws ApiError
     */
    static listEquipmentApiV1CharactersCharacterIdEquipmentGet({ characterId, avatarId, }: {
        characterId: string;
        /**
         * アバターIDでフィルタ
         */
        avatarId?: (string | null);
    }): CancelablePromise<CharacterEquipmentListResponse>;
    /**
     * Get Equipment
     * 装備を1件取得
     * @returns CharacterEquipmentResponse Successful Response
     * @throws ApiError
     */
    static getEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdGet({ characterId, equipmentId, }: {
        characterId: string;
        equipmentId: string;
    }): CancelablePromise<CharacterEquipmentResponse>;
    /**
     * Update Equipment
     * 装備を更新
     * @returns CharacterEquipmentResponse Successful Response
     * @throws ApiError
     */
    static updateEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdPatch({ characterId, equipmentId, requestBody, }: {
        characterId: string;
        equipmentId: string;
        requestBody: CharacterEquipmentUpdateRequest;
    }): CancelablePromise<CharacterEquipmentResponse>;
    /**
     * Delete Equipment
     * 装備を解除（ドキュメント削除）
     * @returns void
     * @throws ApiError
     */
    static deleteEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdDelete({ characterId, equipmentId, }: {
        characterId: string;
        equipmentId: string;
    }): CancelablePromise<void>;
}

declare class CharacterInstancesService {
    /**
     * Create Character Instance
     * @returns CharacterInstanceResponse Successful Response
     * @throws ApiError
     */
    static createCharacterInstanceApiV1MarketplaceCharacterInstancesPost({ requestBody, }: {
        requestBody: CharacterInstanceCreateRequest;
    }): CancelablePromise<CharacterInstanceResponse>;
    /**
     * List Character Instances
     * @returns CharacterInstanceListResponse Successful Response
     * @throws ApiError
     */
    static listCharacterInstancesApiV1MarketplaceCharacterInstancesGet({ limit, cursor, }: {
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<CharacterInstanceListResponse>;
    /**
     * Get Character Instance
     * @returns CharacterInstanceResponse Successful Response
     * @throws ApiError
     */
    static getCharacterInstanceApiV1MarketplaceCharacterInstancesInstanceIdGet({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<CharacterInstanceResponse>;
    /**
     * Delete Character Instance
     * @returns void
     * @throws ApiError
     */
    static deleteCharacterInstanceApiV1MarketplaceCharacterInstancesInstanceIdDelete({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<void>;
    /**
     * Update Character Instance To Latest
     * @returns CharacterInstanceResponse Successful Response
     * @throws ApiError
     */
    static updateCharacterInstanceToLatestApiV1MarketplaceCharacterInstancesInstanceIdUpdatePost({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<CharacterInstanceResponse>;
    /**
     * Fork Character Instance
     * @returns any Successful Response
     * @throws ApiError
     */
    static forkCharacterInstanceApiV1MarketplaceCharacterInstancesInstanceIdForkPost({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<any>;
}

declare class CharacterInventoryService {
    /**
     * List Character Inventory
     * キャラクターの所持品一覧を取得
     * @returns CharacterInventoryListResponse Successful Response
     * @throws ApiError
     */
    static listCharacterInventoryApiV1CharactersCharacterIdInventoryGet({ characterId, itemCategory, accessibleOnly, }: {
        characterId: string;
        /**
         * アイテム種別でフィルタ
         */
        itemCategory?: (string | null);
        /**
         * アクセス可能なもののみ取得
         */
        accessibleOnly?: boolean;
    }): CancelablePromise<CharacterInventoryListResponse>;
    /**
     * Create Character Inventory Item
     * キャラクターの所持品を作成
     * @returns CharacterInventoryResponse Successful Response
     * @throws ApiError
     */
    static createCharacterInventoryItemApiV1CharactersCharacterIdInventoryPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterInventoryCreateRequest;
    }): CancelablePromise<CharacterInventoryResponse>;
    /**
     * Get Character Inventory Item
     * キャラクターの特定の所持品を取得
     * @returns CharacterInventoryResponse Successful Response
     * @throws ApiError
     */
    static getCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdGet({ characterId, inventoryId, }: {
        characterId: string;
        inventoryId: string;
    }): CancelablePromise<CharacterInventoryResponse>;
    /**
     * Update Character Inventory Item
     * キャラクターの所持品を更新
     * @returns CharacterInventoryResponse Successful Response
     * @throws ApiError
     */
    static updateCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdPatch({ characterId, inventoryId, requestBody, }: {
        characterId: string;
        inventoryId: string;
        requestBody: CharacterInventoryUpdateRequest;
    }): CancelablePromise<CharacterInventoryResponse>;
    /**
     * Delete Character Inventory Item
     * キャラクターの所持品を削除
     * @returns void
     * @throws ApiError
     */
    static deleteCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdDelete({ characterId, inventoryId, }: {
        characterId: string;
        inventoryId: string;
    }): CancelablePromise<void>;
    /**
     * Sync From Entitlement
     * Entitlementから CharacterInventory を作成（デフォルトアクション付き）
     * @returns CharacterInventoryResponse Successful Response
     * @throws ApiError
     */
    static syncFromEntitlementApiV1CharactersCharacterIdInventorySyncFromEntitlementPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: SyncFromEntitlementRequest;
    }): CancelablePromise<CharacterInventoryResponse>;
}

declare class CharacterMotionsService {
    /**
     * List Character Motions
     * キャラクターのモーション設定一覧を取得
     * @returns CharacterMotionListResponse Successful Response
     * @throws ApiError
     */
    static listCharacterMotionsApiV1CharactersCharacterIdMotionsGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterMotionListResponse>;
    /**
     * Create Character Motion
     * キャラクターのモーション設定を作成
     * @returns CharacterMotionResponse Successful Response
     * @throws ApiError
     */
    static createCharacterMotionApiV1CharactersCharacterIdMotionsPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterMotionCreateRequest;
    }): CancelablePromise<CharacterMotionResponse>;
    /**
     * Get Character Motion Ids
     * キャラクターが持つmotion_idのリストを取得
     * @returns CharacterMotionIdsResponse Successful Response
     * @throws ApiError
     */
    static getCharacterMotionIdsApiV1CharactersCharacterIdMotionsIdsGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterMotionIdsResponse>;
    /**
     * Get Character Motion
     * キャラクターの特定のモーション設定を取得
     * @returns CharacterMotionResponse Successful Response
     * @throws ApiError
     */
    static getCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdGet({ characterId, motionId, }: {
        characterId: string;
        motionId: string;
    }): CancelablePromise<CharacterMotionResponse>;
    /**
     * Update Character Motion
     * キャラクターのモーション設定を更新
     * @returns CharacterMotionResponse Successful Response
     * @throws ApiError
     */
    static updateCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdPut({ characterId, motionId, requestBody, }: {
        characterId: string;
        motionId: string;
        requestBody: CharacterMotionUpdateRequest;
    }): CancelablePromise<CharacterMotionResponse>;
    /**
     * Delete Character Motion
     * キャラクターのモーション設定を削除
     * @returns void
     * @throws ApiError
     */
    static deleteCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdDelete({ characterId, motionId, }: {
        characterId: string;
        motionId: string;
    }): CancelablePromise<void>;
    /**
     * Batch Create Character Motions
     * キャラクターのモーション設定を一括作成
     * @returns CharacterMotionListResponse Successful Response
     * @throws ApiError
     */
    static batchCreateCharacterMotionsApiV1CharactersCharacterIdMotionsBatchPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterMotionBatchCreateRequest;
    }): CancelablePromise<CharacterMotionListResponse>;
}

declare class CharacterPersonalityParamsService {
    /**
     * List Character Personality Params
     * キャラクターのパーソナリティパラメータ一覧を取得
     * @returns CharacterPersonalityParamsListResponse Successful Response
     * @throws ApiError
     */
    static listCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterPersonalityParamsListResponse>;
    /**
     * Create Character Personality Params
     * キャラクターのパーソナリティパラメータを作成
     * @returns CharacterPersonalityParamsResponse Successful Response
     * @throws ApiError
     */
    static createCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterPersonalityParamsCreateRequest;
    }): CancelablePromise<CharacterPersonalityParamsResponse>;
    /**
     * Get Character Personality Params
     * キャラクターの特定のパーソナリティパラメータを取得
     * @returns CharacterPersonalityParamsResponse Successful Response
     * @throws ApiError
     */
    static getCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyGet({ characterId, key, }: {
        characterId: string;
        key: string;
    }): CancelablePromise<CharacterPersonalityParamsResponse>;
    /**
     * Update Character Personality Params
     * キャラクターのパーソナリティパラメータを更新
     * @returns CharacterPersonalityParamsResponse Successful Response
     * @throws ApiError
     */
    static updateCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyPatch({ characterId, key, requestBody, }: {
        characterId: string;
        key: string;
        requestBody: CharacterPersonalityParamsUpdateRequest;
    }): CancelablePromise<CharacterPersonalityParamsResponse>;
    /**
     * Delete Character Personality Params
     * キャラクターのパーソナリティパラメータを削除
     * @returns void
     * @throws ApiError
     */
    static deleteCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyDelete({ characterId, key, }: {
        characterId: string;
        key: string;
    }): CancelablePromise<void>;
}

declare class CharacterPhysicalIdentityService {
    /**
     * Create Physical Identity
     * キャラクターの身体的自認情報を作成
     * @returns CharacterPhysicalIdentityResponse Successful Response
     * @throws ApiError
     */
    static createPhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterPhysicalIdentityRequest;
    }): CancelablePromise<CharacterPhysicalIdentityResponse>;
    /**
     * Get Physical Identity
     * キャラクターの身体的自認情報を取得
     * @returns CharacterPhysicalIdentityResponse Successful Response
     * @throws ApiError
     */
    static getPhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterPhysicalIdentityResponse>;
    /**
     * Update Physical Identity
     * キャラクターの身体的自認情報を更新
     * @returns CharacterPhysicalIdentityResponse Successful Response
     * @throws ApiError
     */
    static updatePhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityPatch({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterPhysicalIdentityRequest;
    }): CancelablePromise<CharacterPhysicalIdentityResponse>;
    /**
     * Delete Physical Identity
     * キャラクターの身体的自認情報を削除
     * @returns void
     * @throws ApiError
     */
    static deletePhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
}

declare class CharacterPreferencesService {
    /**
     * Create Preferences
     * キャラクターの好み・嗜好情報を作成
     * @returns CharacterPreferencesResponse Successful Response
     * @throws ApiError
     */
    static createPreferencesApiV1CharactersCharacterIdPreferencesPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterPreferencesRequest;
    }): CancelablePromise<CharacterPreferencesResponse>;
    /**
     * Get Preferences
     * キャラクターの好み・嗜好情報を取得
     * @returns CharacterPreferencesResponse Successful Response
     * @throws ApiError
     */
    static getPreferencesApiV1CharactersCharacterIdPreferencesGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterPreferencesResponse>;
    /**
     * Update Preferences
     * キャラクターの好み・嗜好情報を更新
     * @returns CharacterPreferencesResponse Successful Response
     * @throws ApiError
     */
    static updatePreferencesApiV1CharactersCharacterIdPreferencesPatch({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterPreferencesRequest;
    }): CancelablePromise<CharacterPreferencesResponse>;
    /**
     * Delete Preferences
     * キャラクターの好み・嗜好情報を削除
     * @returns void
     * @throws ApiError
     */
    static deletePreferencesApiV1CharactersCharacterIdPreferencesDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
}

declare class CharacterProfileGenerationService {
    /**
     * キャラクタープロファイルを一括生成
     * キャラクターの関連情報からプロファイル情報を一括生成します。save=trueで各サブコレクションに保存します。
     * @returns GenerateProfileResponse Successful Response
     * @throws ApiError
     */
    static generateCharacterProfileApiV1CharactersCharacterIdGenerateProfilePost({ characterId, requestBody, save, }: {
        characterId: string;
        requestBody: GenerateProfileRequest;
        /**
         * 生成結果をDBに保存するか（デフォルト: false）
         */
        save?: boolean;
    }): CancelablePromise<GenerateProfileResponse>;
}

declare class CharactersService {
    /**
     * Create Character
     * キャラクターを新規作成
     *
     * multipart/form-data 形式でリクエストを受け付けます。
     * 複雑なフィールド（tags, locales, emotional_params等）はJSON文字列で送信してください。
     * @returns CharacterResponse Successful Response
     * @throws ApiError
     */
    static createCharacterApiV1CharactersPost({ formData, }: {
        formData: Body_create_character_api_v1_characters_post;
    }): CancelablePromise<CharacterResponse>;
    /**
     * List Characters
     * キャラクター一覧を取得（カーソルベースページネーション）
     * @returns CharacterListResponse Successful Response
     * @throws ApiError
     */
    static listCharactersApiV1CharactersGet({ filterByOwner, publishScope, maxAiLevel, limit, cursor, }: {
        /**
         * 現在のユーザーが所有するキャラクターでフィルタするかどうか
         */
        filterByOwner?: boolean;
        /**
         * 公開範囲でフィルタ (public, unlisted, private)
         */
        publishScope?: (PublishScope | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        limit?: number;
        /**
         * ページネーションカーソル（前回レスポンスのnext_cursor）
         */
        cursor?: (string | null);
    }): CancelablePromise<CharacterListResponse>;
    /**
     * Get Character
     * キャラクター情報を取得
     * @returns CharacterResponse Successful Response
     * @throws ApiError
     */
    static getCharacterApiV1CharactersCharacterIdGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterResponse>;
    /**
     * Update Character
     * キャラクター情報を更新
     * @returns CharacterResponse Successful Response
     * @throws ApiError
     */
    static updateCharacterApiV1CharactersCharacterIdPatch({ characterId, formData, }: {
        characterId: string;
        formData?: Body_update_character_api_v1_characters__character_id__patch;
    }): CancelablePromise<CharacterResponse>;
    /**
     * Delete Character
     * キャラクターを削除
     * @returns void
     * @throws ApiError
     */
    static deleteCharacterApiV1CharactersCharacterIdDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
    /**
     * Duplicate Character
     * キャラクターを複製（chat_logs以外のサブコレクションをコピー）
     * @returns DuplicateResponse Successful Response
     * @throws ApiError
     */
    static duplicateCharacterApiV1CharactersCharacterIdDuplicatePost({ characterId, newCharacterId, }: {
        characterId: string;
        /**
         * 新しいキャラクターID（省略時は自動生成）
         */
        newCharacterId?: (string | null);
    }): CancelablePromise<DuplicateResponse>;
    /**
     * Suggest Character Ai Usage
     * キャラクターの参照アセットからAI使用レベルをサジェスト
     * @returns CharacterAiUsage Successful Response
     * @throws ApiError
     */
    static suggestCharacterAiUsageApiV1CharactersCharacterIdSuggestAiUsagePost({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterAiUsage>;
    /**
     * Batch Get Characters
     * 複数のキャラクターを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetCharactersApiV1CharactersBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Auto Create Character
     * キャラクターを自動生成
     * @returns CharacterResponse Successful Response
     * @throws ApiError
     */
    static autoCreateCharacterApiV1CharactersAutoCreatePost({ requestBody, }: {
        requestBody: AutoCreateCharacterRequest;
    }): CancelablePromise<CharacterResponse>;
}

declare class CharacterTemplatesService {
    /**
     * Promote Character To Template
     * @returns CharacterTemplateResponse Successful Response
     * @throws ApiError
     */
    static promoteCharacterToTemplateApiV1MarketplaceCharacterTemplatesPost({ requestBody, }: {
        requestBody: CharacterTemplatePromoteRequest;
    }): CancelablePromise<CharacterTemplateResponse>;
    /**
     * List Character Templates
     * @returns CharacterTemplateListResponse Successful Response
     * @throws ApiError
     */
    static listCharacterTemplatesApiV1MarketplaceCharacterTemplatesGet({ sourceEntityId, limit, cursor, }: {
        /**
         * 元エンティティIDで絞り込み
         */
        sourceEntityId?: (string | null);
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<CharacterTemplateListResponse>;
    /**
     * Get Character Template
     * @returns CharacterTemplateResponse Successful Response
     * @throws ApiError
     */
    static getCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdGet({ templateId, }: {
        templateId: string;
    }): CancelablePromise<CharacterTemplateResponse>;
    /**
     * Update Character Template
     * @returns CharacterTemplateResponse Successful Response
     * @throws ApiError
     */
    static updateCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdPatch({ templateId, requestBody, }: {
        templateId: string;
        requestBody: CharacterTemplateUpdateRequest;
    }): CancelablePromise<CharacterTemplateResponse>;
    /**
     * Delete Character Template
     * @returns void
     * @throws ApiError
     */
    static deleteCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdDelete({ templateId, }: {
        templateId: string;
    }): CancelablePromise<void>;
    /**
     * Fork Character Template
     * @returns any Successful Response
     * @throws ApiError
     */
    static forkCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdForkPost({ templateId, }: {
        templateId: string;
    }): CancelablePromise<any>;
    /**
     * Get Template Subcollection
     * @returns any Successful Response
     * @throws ApiError
     */
    static getTemplateSubcollectionApiV1MarketplaceCharacterTemplatesTemplateIdSubcollectionsSubcollectionNameGet({ templateId, subcollectionName, }: {
        templateId: string;
        subcollectionName: string;
    }): CancelablePromise<any>;
    /**
     * Get Template Subcollection Doc
     * @returns any Successful Response
     * @throws ApiError
     */
    static getTemplateSubcollectionDocApiV1MarketplaceCharacterTemplatesTemplateIdSubcollectionsSubcollectionNameDocIdGet({ templateId, subcollectionName, docId, }: {
        templateId: string;
        subcollectionName: string;
        docId: string;
    }): CancelablePromise<any>;
}

declare class ContentProtectionService {
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
    static getKeyApiV1ContentProtectionKeysKeyIdGet({ keyId, assetId, }: {
        keyId: string;
        /**
         * 復号対象のアセットID
         */
        assetId: string;
    }): CancelablePromise<KeyResponse>;
}

declare class CreatorsService {
    /**
     * Create Creator
     * クリエイターを作成
     * @returns CreatorResponse Successful Response
     * @throws ApiError
     */
    static createCreatorApiV1CreatorsPost({ requestBody, }: {
        requestBody: CreatorCreateRequest;
    }): CancelablePromise<CreatorResponse>;
    /**
     * Get Creator
     * クリエイターを取得
     * @returns CreatorResponse Successful Response
     * @throws ApiError
     */
    static getCreatorApiV1CreatorsCreatorIdGet({ creatorId, }: {
        creatorId: string;
    }): CancelablePromise<CreatorResponse>;
    /**
     * Update Creator
     * クリエイターを更新
     * @returns CreatorResponse Successful Response
     * @throws ApiError
     */
    static updateCreatorApiV1CreatorsCreatorIdPatch({ creatorId, requestBody, }: {
        creatorId: string;
        requestBody: CreatorUpdateRequest;
    }): CancelablePromise<CreatorResponse>;
    /**
     * Delete Creator
     * クリエイターを削除
     * @returns void
     * @throws ApiError
     */
    static deleteCreatorApiV1CreatorsCreatorIdDelete({ creatorId, }: {
        creatorId: string;
    }): CancelablePromise<void>;
    /**
     * Get Creator By User Id
     * ユーザーIDでクリエイターを取得
     * @returns CreatorResponse Successful Response
     * @throws ApiError
     */
    static getCreatorByUserIdApiV1CreatorsByUserUserIdGet({ userId, }: {
        userId: string;
    }): CancelablePromise<CreatorResponse>;
    /**
     * Get Creator By Group Id
     * グループIDでクリエイターを取得
     * @returns CreatorResponse Successful Response
     * @throws ApiError
     */
    static getCreatorByGroupIdApiV1CreatorsByGroupGroupIdGet({ groupId, }: {
        groupId: string;
    }): CancelablePromise<CreatorResponse>;
}

declare class DefaultService {
    /**
     * Healthcheck
     * @returns any Successful Response
     * @throws ApiError
     */
    static healthcheckHealthcheckGet(): CancelablePromise<any>;
    /**
     * Root
     * @returns any Successful Response
     * @throws ApiError
     */
    static rootGet(): CancelablePromise<any>;
}

declare class EmotionConfigService {
    /**
     * Get Emotion Config
     * EmotionConfigを取得
     * @returns EmotionConfigResponse Successful Response
     * @throws ApiError
     */
    static getEmotionConfigApiV1EmotionConfigGet(): CancelablePromise<EmotionConfigResponse>;
    /**
     * Update Emotion Config
     * EmotionConfigを更新
     * @returns EmotionConfigResponse Successful Response
     * @throws ApiError
     */
    static updateEmotionConfigApiV1EmotionConfigPut({ requestBody, }: {
        requestBody: EmotionConfigUpdateRequest;
    }): CancelablePromise<EmotionConfigResponse>;
    /**
     * Create Emotion Config
     * EmotionConfigを作成
     * @returns EmotionConfigResponse Successful Response
     * @throws ApiError
     */
    static createEmotionConfigApiV1EmotionConfigPost({ requestBody, }: {
        requestBody: EmotionConfigCreateRequest;
    }): CancelablePromise<EmotionConfigResponse>;
    /**
     * Delete Emotion Config
     * EmotionConfigを削除
     * @returns void
     * @throws ApiError
     */
    static deleteEmotionConfigApiV1EmotionConfigDelete(): CancelablePromise<void>;
    /**
     * Init Mood Verbalizer
     * デフォルトのMoodVerbalizerConfigをEmotionConfigに追加
     * @returns EmotionConfigResponse Successful Response
     * @throws ApiError
     */
    static initMoodVerbalizerApiV1EmotionConfigMoodVerbalizerInitPost(): CancelablePromise<EmotionConfigResponse>;
    /**
     * Resolve Expression
     * 表現解決: emotion_idから利用可能な表現を解決
     * @returns ResolveExpressionResponse Successful Response
     * @throws ApiError
     */
    static resolveExpressionApiV1EmotionConfigResolvePost({ requestBody, }: {
        requestBody: ResolveExpressionRequest;
    }): CancelablePromise<ResolveExpressionResponse>;
}

declare class EmotionFormatsBlendshapeService {
    /**
     * Create Avatar Blend Shape
     * アバターの表現にBlendShapeフォーマットを追加
     * @returns BlendShapeExpressionData_Output Successful Response
     * @throws ApiError
     */
    static createAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapePost({ avatarId, avatarExpressionId, requestBody, }: {
        avatarId: string;
        avatarExpressionId: string;
        requestBody: BlendShapeExpressionData_Input;
    }): CancelablePromise<BlendShapeExpressionData_Output>;
    /**
     * Get Avatar Blend Shape
     * アバターの表現のBlendShapeフォーマットを取得
     * @returns BlendShapeExpressionData_Output Successful Response
     * @throws ApiError
     */
    static getAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapeGet({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<BlendShapeExpressionData_Output>;
    /**
     * Update Avatar Blend Shape
     * アバターの表現のBlendShapeフォーマットを更新
     * @returns BlendShapeExpressionData_Output Successful Response
     * @throws ApiError
     */
    static updateAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapePatch({ avatarId, avatarExpressionId, requestBody, }: {
        avatarId: string;
        avatarExpressionId: string;
        requestBody: BlendShapeExpressionData_Input;
    }): CancelablePromise<BlendShapeExpressionData_Output>;
    /**
     * Delete Avatar Blend Shape
     * アバターの表現のBlendShapeフォーマットを削除
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapeDelete({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<any>;
}

declare class EmotionFormatsFaceIconService {
    /**
     * Create Avatar Face Icon
     * アバターの表現にFaceIconフォーマットを追加（アセットID参照）
     * @returns FaceIconExpressionData Successful Response
     * @throws ApiError
     */
    static createAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconPost({ avatarId, avatarExpressionId, compositeImageAssetId, bodyImageAssetId, eyelidImageAssetId, mouthImageAssetId, holdDuration, blockMouth, blockBlink, }: {
        avatarId: string;
        avatarExpressionId: string;
        /**
         * コンポジット画像アセットID（全レイヤー結合済み、表情適用時オーバーライド）
         */
        compositeImageAssetId?: (string | null);
        /**
         * ボディ画像アセットID（非分離要素焼き込み済み素体、表情適用時オーバーライド）
         */
        bodyImageAssetId?: (string | null);
        /**
         * まぶた+眉毛レイヤー画像のアセットID
         */
        eyelidImageAssetId?: (string | null);
        /**
         * 口の画像のアセットID
         */
        mouthImageAssetId?: (string | null);
        holdDuration?: number;
        blockMouth?: boolean;
        blockBlink?: boolean;
    }): CancelablePromise<FaceIconExpressionData>;
    /**
     * Get Avatar Face Icon
     * アバターの表現のFaceIconフォーマットを取得
     * @returns FaceIconExpressionData Successful Response
     * @throws ApiError
     */
    static getAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconGet({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<FaceIconExpressionData>;
    /**
     * Update Avatar Face Icon
     * アバターの表現のFaceIconフォーマットを更新（アセットID参照）
     * @returns FaceIconExpressionData Successful Response
     * @throws ApiError
     */
    static updateAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconPatch({ avatarId, avatarExpressionId, compositeImageAssetId, bodyImageAssetId, eyelidImageAssetId, mouthImageAssetId, holdDuration, blockMouth, blockBlink, }: {
        avatarId: string;
        avatarExpressionId: string;
        /**
         * コンポジット画像アセットID（全レイヤー結合済み、表情適用時オーバーライド）
         */
        compositeImageAssetId?: (string | null);
        /**
         * ボディ画像アセットID（非分離要素焼き込み済み素体、表情適用時オーバーライド）
         */
        bodyImageAssetId?: (string | null);
        /**
         * まぶた+眉毛レイヤー画像のアセットID
         */
        eyelidImageAssetId?: (string | null);
        /**
         * 口の画像のアセットID
         */
        mouthImageAssetId?: (string | null);
        holdDuration?: (number | null);
        blockMouth?: (boolean | null);
        blockBlink?: (boolean | null);
    }): CancelablePromise<FaceIconExpressionData>;
    /**
     * Delete Avatar Face Icon
     * アバターの表現のFaceIconフォーマットを削除（asset_id参照のみ削除、Asset自体は削除しない）
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconDelete({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<any>;
    /**
     * Create Avatar Face Icon With Files
     * アバターの表現にFaceIconフォーマットを追加（画像ファイルアップロードしてアセット作成も行う統合版）
     * @returns FaceIconExpressionData Successful Response
     * @throws ApiError
     */
    static createAvatarFaceIconWithFilesApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconFileUploadPost({ avatarId, avatarExpressionId, formData, }: {
        avatarId: string;
        avatarExpressionId: string;
        formData?: Body_create_avatar_face_icon_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_face_icon_file_upload_post;
    }): CancelablePromise<FaceIconExpressionData>;
}

declare class EmotionFormatsGlbService {
    /**
     * Create Avatar Glb Expression
     * アバターの表現にGLBフォーマットを追加
     * @returns GLBExpressionData Successful Response
     * @throws ApiError
     */
    static createAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbPost({ avatarId, avatarExpressionId, requestBody, }: {
        avatarId: string;
        avatarExpressionId: string;
        requestBody: GLBExpressionData;
    }): CancelablePromise<GLBExpressionData>;
    /**
     * Get Avatar Glb Expression
     * アバターの表現のGLBフォーマットを取得
     * @returns GLBExpressionData Successful Response
     * @throws ApiError
     */
    static getAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbGet({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<GLBExpressionData>;
    /**
     * Update Avatar Glb Expression
     * アバターの表現のGLBフォーマットを更新
     * @returns GLBExpressionData Successful Response
     * @throws ApiError
     */
    static updateAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbPatch({ avatarId, avatarExpressionId, requestBody, }: {
        avatarId: string;
        avatarExpressionId: string;
        requestBody: GLBExpressionData;
    }): CancelablePromise<GLBExpressionData>;
    /**
     * Delete Avatar Glb Expression
     * アバターの表現のGLBフォーマットを削除
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbDelete({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<any>;
}

declare class EmotionFormatsSpriteService {
    /**
     * Create Avatar Sprite
     * アバターの表現にSpriteフォーマットを追加（アセットID参照）
     * @returns SpriteExpressionData Successful Response
     * @throws ApiError
     */
    static createAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpritePost({ avatarId, avatarExpressionId, posture, compositeImageAssetId, bodyImageAssetId, eyelidImageAssetId, mouthImageAssetId, holdDuration, blockMouth, blockBlink, }: {
        avatarId: string;
        avatarExpressionId: string;
        /**
         * 姿勢（standing/sitting/lying）
         */
        posture: BaseState;
        /**
         * コンポジット画像アセットID（全レイヤー結合済み、表情適用時オーバーライド）
         */
        compositeImageAssetId?: (string | null);
        /**
         * ボディ画像アセットID（非分離要素焼き込み済み素体、表情適用時オーバーライド）
         */
        bodyImageAssetId?: (string | null);
        /**
         * まぶた+眉毛レイヤー画像のアセットID
         */
        eyelidImageAssetId?: (string | null);
        /**
         * 口の画像のアセットID
         */
        mouthImageAssetId?: (string | null);
        holdDuration?: number;
        blockMouth?: boolean;
        blockBlink?: boolean;
    }): CancelablePromise<SpriteExpressionData>;
    /**
     * Get Avatar Sprite
     * アバターの表現のSpriteフォーマットを取得
     * @returns SpriteExpressionData Successful Response
     * @throws ApiError
     */
    static getAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteGet({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<SpriteExpressionData>;
    /**
     * Update Avatar Sprite
     * アバターの表現のSpriteフォーマットを更新（アセットID参照）
     * @returns SpriteExpressionData Successful Response
     * @throws ApiError
     */
    static updateAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpritePatch({ avatarId, avatarExpressionId, posture, compositeImageAssetId, bodyImageAssetId, eyelidImageAssetId, mouthImageAssetId, holdDuration, blockMouth, blockBlink, }: {
        avatarId: string;
        avatarExpressionId: string;
        /**
         * 更新する姿勢（standing/sitting/lying）
         */
        posture?: (BaseState | null);
        /**
         * コンポジット画像アセットID（全レイヤー結合済み、表情適用時オーバーライド）
         */
        compositeImageAssetId?: (string | null);
        /**
         * ボディ画像アセットID（非分離要素焼き込み済み素体、表情適用時オーバーライド）
         */
        bodyImageAssetId?: (string | null);
        /**
         * まぶた+眉毛レイヤー画像のアセットID
         */
        eyelidImageAssetId?: (string | null);
        /**
         * 口の画像のアセットID
         */
        mouthImageAssetId?: (string | null);
        holdDuration?: (number | null);
        blockMouth?: (boolean | null);
        blockBlink?: (boolean | null);
    }): CancelablePromise<SpriteExpressionData>;
    /**
     * Delete Avatar Sprite
     * アバターの表現のSpriteフォーマットを削除（asset_id参照のみ削除、Asset自体は削除しない）
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteDelete({ avatarId, avatarExpressionId, }: {
        avatarId: string;
        avatarExpressionId: string;
    }): CancelablePromise<any>;
    /**
     * Create Avatar Sprite With Files
     * アバターの表現にSpriteフォーマットを追加（画像ファイルアップロードしてアセット作成も行う統合版）
     * @returns SpriteExpressionData Successful Response
     * @throws ApiError
     */
    static createAvatarSpriteWithFilesApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteFileUploadPost({ avatarId, avatarExpressionId, formData, }: {
        avatarId: string;
        avatarExpressionId: string;
        formData: Body_create_avatar_sprite_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_sprite_file_upload_post;
    }): CancelablePromise<SpriteExpressionData>;
}

declare class EmotionsService {
    /**
     * List Emotions
     * 感情の一覧取得・検索
     * @returns EmotionListResponse Successful Response
     * @throws ApiError
     */
    static listEmotionsApiV1EmotionsGet({ q, dataSource, locale, prefer, limit, cursor, }: {
        /**
         * 部分一致検索クエリ
         */
        q?: (string | null);
        /**
         * データソースでフィルタ
         */
        dataSource?: (DataSource | null);
        /**
         * 優先ロケール
         */
        locale?: (SupportedLanguage$1 | null);
        /**
         * 公式感情を優先
         */
        prefer?: PreferType;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル（オフセット値）
         */
        cursor?: (string | null);
    }): CancelablePromise<EmotionListResponse>;
    /**
     * Create Emotion
     * 感情を作成
     * @returns EmotionResponse Successful Response
     * @throws ApiError
     */
    static createEmotionApiV1EmotionsPost({ requestBody, }: {
        requestBody: EmotionCreateRequest;
    }): CancelablePromise<EmotionResponse>;
    /**
     * Update Emotion
     * 感情を部分更新（管理者のみ）
     * @returns EmotionResponse Successful Response
     * @throws ApiError
     */
    static updateEmotionApiV1EmotionsEmotionIdPatch({ emotionId, requestBody, }: {
        emotionId: string;
        requestBody: EmotionUpdateRequest;
    }): CancelablePromise<EmotionResponse>;
    /**
     * Delete Emotion
     * 感情を削除（管理者のみ）
     * @returns void
     * @throws ApiError
     */
    static deleteEmotionApiV1EmotionsEmotionIdDelete({ emotionId, }: {
        emotionId: string;
    }): CancelablePromise<void>;
    /**
     * Get Emotion By Id
     * IDで感情を取得
     * @returns EmotionResponse Successful Response
     * @throws ApiError
     */
    static getEmotionByIdApiV1EmotionsByIdEmotionIdGet({ emotionId, }: {
        emotionId: string;
    }): CancelablePromise<EmotionResponse>;
    /**
     * Get Emotion By Name
     * 名前で感情を完全一致検索
     * @returns EmotionResponse Successful Response
     * @throws ApiError
     */
    static getEmotionByNameApiV1EmotionsByNameGet({ name, locale, prefer, }: {
        /**
         * 検索する名前
         */
        name: string;
        /**
         * ロケール
         */
        locale: SupportedLanguage$1;
        /**
         * 公式感情を優先
         */
        prefer?: PreferType;
    }): CancelablePromise<EmotionResponse>;
    /**
     * Suggest Emotions By Text
     * テキストから感情を提案（LLM使用）
     * @returns EmotionSuggestionResponse Successful Response
     * @throws ApiError
     */
    static suggestEmotionsByTextApiV1EmotionsSuggestByTextPost({ requestBody, }: {
        requestBody: SuggestByTextRequest;
    }): CancelablePromise<Array<EmotionSuggestionResponse>>;
    /**
     * Find Nearest Emotions
     * VAD値で最近傍の感情を検索
     * @returns EmotionNeighborResponse Successful Response
     * @throws ApiError
     */
    static findNearestEmotionsApiV1EmotionsNearestPost({ requestBody, }: {
        requestBody: NearestByVADRequest;
    }): CancelablePromise<Array<EmotionNeighborResponse>>;
    /**
     * Add Emotion Alias
     * 感情にエイリアスを追加
     * @returns SuccessResponse Successful Response
     * @throws ApiError
     */
    static addEmotionAliasApiV1EmotionsEmotionIdAliasesPost({ emotionId, requestBody, }: {
        emotionId: string;
        requestBody: AddAliasRequest;
    }): CancelablePromise<SuccessResponse>;
    /**
     * Remove Emotion Alias
     * 感情からエイリアスを削除
     * @returns void
     * @throws ApiError
     */
    static removeEmotionAliasApiV1EmotionsEmotionIdAliasesDelete({ emotionId, requestBody, }: {
        emotionId: string;
        requestBody: RemoveAliasRequest;
    }): CancelablePromise<void>;
    /**
     * Create Emotion From Text
     * テキストから感情を作成（VAD指定またはLLM推定）
     * @returns CreateFromTextResponse Successful Response
     * @throws ApiError
     */
    static createEmotionFromTextApiV1EmotionsCreateFromTextPost({ requestBody, }: {
        requestBody: CreateFromTextRequest;
    }): CancelablePromise<CreateFromTextResponse>;
    /**
     * Batch Get Emotions
     * 複数の感情を一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetEmotionsApiV1EmotionsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
}

declare class EquipmentMotionOverlaysService {
    /**
     * Create Overlay
     * モーションオーバーレイを作成
     * @returns EquipmentMotionOverlayResponse Successful Response
     * @throws ApiError
     */
    static createOverlayApiV1AvatarsAvatarIdMotionOverlaysPost({ avatarId, requestBody, }: {
        avatarId: string;
        requestBody: EquipmentMotionOverlayCreateRequest;
    }): CancelablePromise<EquipmentMotionOverlayResponse>;
    /**
     * List Overlays
     * モーションオーバーレイ一覧を取得
     * @returns EquipmentMotionOverlayListResponse Successful Response
     * @throws ApiError
     */
    static listOverlaysApiV1AvatarsAvatarIdMotionOverlaysGet({ avatarId, outfitId, accessoryId, hairStyleId, }: {
        avatarId: string;
        /**
         * 衣装IDでフィルタ
         */
        outfitId?: (string | null);
        /**
         * アクセサリーIDでフィルタ
         */
        accessoryId?: (string | null);
        /**
         * 髪型IDでフィルタ
         */
        hairStyleId?: (string | null);
    }): CancelablePromise<EquipmentMotionOverlayListResponse>;
    /**
     * Get Overlay
     * モーションオーバーレイを1件取得
     * @returns EquipmentMotionOverlayResponse Successful Response
     * @throws ApiError
     */
    static getOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdGet({ avatarId, overlayId, }: {
        avatarId: string;
        overlayId: string;
    }): CancelablePromise<EquipmentMotionOverlayResponse>;
    /**
     * Update Overlay
     * モーションオーバーレイを更新
     * @returns EquipmentMotionOverlayResponse Successful Response
     * @throws ApiError
     */
    static updateOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdPatch({ avatarId, overlayId, requestBody, }: {
        avatarId: string;
        overlayId: string;
        requestBody: EquipmentMotionOverlayUpdateRequest;
    }): CancelablePromise<EquipmentMotionOverlayResponse>;
    /**
     * Delete Overlay
     * モーションオーバーレイを削除
     * @returns void
     * @throws ApiError
     */
    static deleteOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdDelete({ avatarId, overlayId, }: {
        avatarId: string;
        overlayId: string;
    }): CancelablePromise<void>;
}

declare class GaussianSplatAssetsService {
    /**
     * Create Gaussian Splat Asset
     * Gaussian Splatアセットを作成（SPZ/PLY直接アップロード）
     *
     * SPZ/PLYファイルを直接アップロード。変換不要なので即完了。
     * splat_formatを省略するとファイル名の拡張子から自動判定。
     * @returns GaussianSplatAssetResponse Successful Response
     * @throws ApiError
     */
    static createGaussianSplatAssetApiV1GaussianSplatAssetsPost({ formData, }: {
        formData: Body_create_gaussian_splat_asset_api_v1_gaussian_splat_assets_post;
    }): CancelablePromise<GaussianSplatAssetResponse>;
    /**
     * Add Gaussian Splat Asset Version
     * 既存Gaussian Splatアセットに新バージョンを追加
     * @returns GaussianSplatAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static addGaussianSplatAssetVersionApiV1GaussianSplatAssetsGsIdVersionsPost({ gsId, formData, }: {
        gsId: string;
        formData: Body_add_gaussian_splat_asset_version_api_v1_gaussian_splat_assets__gs_id__versions_post;
    }): CancelablePromise<GaussianSplatAssetVersionResponse>;
    /**
     * List Gaussian Splat Asset Versions
     * Gaussian Splatアセットのバージョン一覧を取得
     * @returns GaussianSplatAssetVersionListResponse Successful Response
     * @throws ApiError
     */
    static listGaussianSplatAssetVersionsApiV1GaussianSplatAssetsGsIdVersionsGet({ gsId, }: {
        gsId: string;
    }): CancelablePromise<GaussianSplatAssetVersionListResponse>;
    /**
     * Search Gaussian Splat Assets
     * Gaussian Splatアセットを検索
     * @returns GaussianSplatAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchGaussianSplatAssetsApiV1GaussianSplatAssetsSearchGet({ ownerId, modelName, modelerName, tagIds, minLevel, maxAiLevel, limit, cursor, }: {
        ownerId?: (string | null);
        modelName?: (string | null);
        modelerName?: (string | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<GaussianSplatAssetListResponse>;
    /**
     * Batch Get Gaussian Splat Assets
     * 複数のGaussian Splatアセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetGaussianSplatAssetsApiV1GaussianSplatAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Gaussian Splat Asset
     * Gaussian Splatアセットの詳細情報を取得
     * @returns GaussianSplatAssetResponse Successful Response
     * @throws ApiError
     */
    static getGaussianSplatAssetApiV1GaussianSplatAssetsGsIdGet({ gsId, }: {
        gsId: string;
    }): CancelablePromise<GaussianSplatAssetResponse>;
    /**
     * Update Gaussian Splat Asset
     * Gaussian Splatアセットのメタデータを更新（オーナーのみ）
     * @returns GaussianSplatAssetResponse Successful Response
     * @throws ApiError
     */
    static updateGaussianSplatAssetApiV1GaussianSplatAssetsGsIdPatch({ gsId, requestBody, }: {
        gsId: string;
        requestBody: GaussianSplatAssetUpdateRequest;
    }): CancelablePromise<GaussianSplatAssetResponse>;
    /**
     * Delete Gaussian Splat Asset
     * Gaussian Splatアセットを削除（オーナーのみ、参照されている場合は削除不可）
     * @returns void
     * @throws ApiError
     */
    static deleteGaussianSplatAssetApiV1GaussianSplatAssetsGsIdDelete({ gsId, }: {
        gsId: string;
    }): CancelablePromise<void>;
    /**
     * Get Gaussian Splat Asset Version
     * Gaussian Splatアセットの特定バージョンを取得
     * @returns GaussianSplatAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getGaussianSplatAssetVersionApiV1GaussianSplatAssetsGsIdVersionsVersionIdGet({ gsId, versionId, }: {
        gsId: string;
        versionId: string;
    }): CancelablePromise<GaussianSplatAssetVersionResponse>;
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
    static getGaussianSplatFileUrlApiV1GaussianSplatAssetsGsIdFileGet({ gsId, versionId, }: {
        gsId: string;
        /**
         * バージョンID（省略時は最新）
         */
        versionId?: (string | null);
    }): CancelablePromise<SignedUrlResponse>;
    /**
     * Get Gaussian Splat Protected File
     * 保護済みGaussian Splatファイルのダウンロード情報を返す
     *
     * PLY形式: 頂点難読化 + zstd圧縮 + AES-256-GCM暗号化
     * SPZ形式: zstd圧縮 + AES-256-GCM暗号化（難読化なし）
     * @returns ProtectedFileResponse Successful Response
     * @throws ApiError
     */
    static getGaussianSplatProtectedFileApiV1GaussianSplatAssetsGsIdProtectedFileGet({ gsId, versionId, }: {
        gsId: string;
        /**
         * バージョンID（省略時は最新）
         */
        versionId?: (string | null);
    }): CancelablePromise<ProtectedFileResponse$1>;
}

declare class GlbAssetsService {
    /**
     * Create Glb Asset
     * GLBアセットを作成（GLB直接アップロード）
     *
     * GLBファイルを直接アップロード。変換不要なので即完了（conversion_status=completed）。
     * @returns GLBAssetResponse Successful Response
     * @throws ApiError
     */
    static createGlbAssetApiV1GlbAssetsPost({ formData, }: {
        formData: Body_create_glb_asset_api_v1_glb_assets_post;
    }): CancelablePromise<GLBAssetResponse>;
    /**
     * Create Glb From Gltf
     * glTFファイルからGLBアセットを作成（非同期変換）
     *
     * glTFファイルをアップロードし、バックグラウンドでGLBに変換。
     * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
     * @returns GLBAssetFromSourceResponse Successful Response
     * @throws ApiError
     */
    static createGlbFromGltfApiV1GlbAssetsFromGltfPost({ formData, }: {
        formData: Body_create_glb_from_gltf_api_v1_glb_assets_from_gltf_post;
    }): CancelablePromise<GLBAssetFromSourceResponse>;
    /**
     * Create Glb From Fbx
     * FBXファイルからGLBアセットを作成（非同期変換）
     *
     * FBXファイルをアップロードし、バックグラウンドでGLBに変換。
     * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
     * @returns GLBAssetFromSourceResponse Successful Response
     * @throws ApiError
     */
    static createGlbFromFbxApiV1GlbAssetsFromFbxPost({ formData, }: {
        formData: Body_create_glb_from_fbx_api_v1_glb_assets_from_fbx_post;
    }): CancelablePromise<GLBAssetFromSourceResponse>;
    /**
     * Create Glb From Obj
     * OBJファイルからGLBアセットを作成（非同期変換）
     *
     * OBJファイル（+ 任意のMTLファイル）をアップロードし、バックグラウンドでGLBに変換。
     * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
     * @returns GLBAssetFromSourceResponse Successful Response
     * @throws ApiError
     */
    static createGlbFromObjApiV1GlbAssetsFromObjPost({ formData, }: {
        formData: Body_create_glb_from_obj_api_v1_glb_assets_from_obj_post;
    }): CancelablePromise<GLBAssetFromSourceResponse>;
    /**
     * Add Glb Asset Version
     * 既存GLBアセットに新バージョンを追加（GLB直接）
     * @returns GLBAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static addGlbAssetVersionApiV1GlbAssetsGlbIdVersionsPost({ glbId, formData, }: {
        glbId: string;
        formData: Body_add_glb_asset_version_api_v1_glb_assets__glb_id__versions_post;
    }): CancelablePromise<GLBAssetVersionResponse>;
    /**
     * List Glb Asset Versions
     * GLBアセットのバージョン一覧を取得
     * @returns GLBAssetVersionListResponse Successful Response
     * @throws ApiError
     */
    static listGlbAssetVersionsApiV1GlbAssetsGlbIdVersionsGet({ glbId, }: {
        glbId: string;
    }): CancelablePromise<GLBAssetVersionListResponse>;
    /**
     * Search Glb Assets
     * GLBアセットを検索
     * @returns GLBAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchGlbAssetsApiV1GlbAssetsSearchGet({ ownerId, modelName, modelerName, tagIds, minLevel, maxAiLevel, limit, cursor, }: {
        ownerId?: (string | null);
        modelName?: (string | null);
        modelerName?: (string | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<GLBAssetListResponse>;
    /**
     * Batch Get Glb Assets
     * 複数のGLBアセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetGlbAssetsApiV1GlbAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Glb Asset
     * GLBアセットの詳細情報を取得
     * @returns GLBAssetResponse Successful Response
     * @throws ApiError
     */
    static getGlbAssetApiV1GlbAssetsGlbIdGet({ glbId, }: {
        glbId: string;
    }): CancelablePromise<GLBAssetResponse>;
    /**
     * Update Glb Asset
     * GLBアセットのメタデータを更新（オーナーのみ）
     * @returns GLBAssetResponse Successful Response
     * @throws ApiError
     */
    static updateGlbAssetApiV1GlbAssetsGlbIdPatch({ glbId, requestBody, }: {
        glbId: string;
        requestBody: GLBAssetUpdateRequest;
    }): CancelablePromise<GLBAssetResponse>;
    /**
     * Delete Glb Asset
     * GLBアセットを削除（オーナーのみ、参照されている場合は削除不可）
     * @returns void
     * @throws ApiError
     */
    static deleteGlbAssetApiV1GlbAssetsGlbIdDelete({ glbId, }: {
        glbId: string;
    }): CancelablePromise<void>;
    /**
     * Get Glb Asset Version
     * GLBアセットの特定バージョンを取得
     * @returns GLBAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getGlbAssetVersionApiV1GlbAssetsGlbIdVersionsVersionIdGet({ glbId, versionId, }: {
        glbId: string;
        versionId: string;
    }): CancelablePromise<GLBAssetVersionResponse>;
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
    static getGlbFileUrlApiV1GlbAssetsGlbIdFileGet({ glbId, versionId, }: {
        glbId: string;
        /**
         * バージョンID（省略時は最新）
         */
        versionId?: (string | null);
    }): CancelablePromise<SignedUrlResponse>;
    /**
     * Get Glb Original File Url
     * 原本ファイル（FBX/glTF/OBJ）のダウンロード用一時URL（Signed URL）を返す
     *
     * GLB直接アップロードの場合は404を返す（原本は存在しない）。
     * @returns SignedUrlResponse Successful Response
     * @throws ApiError
     */
    static getGlbOriginalFileUrlApiV1GlbAssetsGlbIdOriginalFileGet({ glbId, versionId, }: {
        glbId: string;
        /**
         * バージョンID（省略時は最新）
         */
        versionId?: (string | null);
    }): CancelablePromise<SignedUrlResponse>;
    /**
     * Get Glb Protected File
     * 保護済みGLBファイルのダウンロード情報を返す
     *
     * ファイルはメッシュ難読化 + zstd圧縮 + AES-256-GCM暗号化済み。
     * @returns ProtectedFileResponse Successful Response
     * @throws ApiError
     */
    static getGlbProtectedFileApiV1GlbAssetsGlbIdProtectedFileGet({ glbId, versionId, }: {
        glbId: string;
        /**
         * バージョンID（省略時は最新）
         */
        versionId?: (string | null);
    }): CancelablePromise<ProtectedFileResponse$1>;
}

declare class GroupBansService {
    /**
     * Ban User
     * ユーザーをBAN（ADMIN以上）
     * @returns GroupBanResponse Successful Response
     * @throws ApiError
     */
    static banUserApiV1GroupsGroupIdBansPost({ groupId, requestBody, }: {
        groupId: string;
        requestBody: GroupBanCreateRequest;
    }): CancelablePromise<GroupBanResponse>;
    /**
     * List Bans
     * BANリスト（ADMIN以上）
     * @returns GroupBanListResponse Successful Response
     * @throws ApiError
     */
    static listBansApiV1GroupsGroupIdBansGet({ groupId, }: {
        groupId: string;
    }): CancelablePromise<GroupBanListResponse>;
    /**
     * Unban User
     * BAN解除（ADMIN以上）
     * @returns void
     * @throws ApiError
     */
    static unbanUserApiV1GroupsGroupIdBansTargetUserIdDelete({ groupId, targetUserId, }: {
        groupId: string;
        targetUserId: string;
    }): CancelablePromise<void>;
}

declare class GroupInvitesService {
    /**
     * Create Invite
     * 招待を作成（ADMIN以上）
     * @returns GroupInviteResponse Successful Response
     * @throws ApiError
     */
    static createInviteApiV1GroupsGroupIdInvitesPost({ groupId, requestBody, }: {
        groupId: string;
        requestBody: GroupInviteCreateRequest;
    }): CancelablePromise<GroupInviteResponse>;
    /**
     * List Invites
     * 招待一覧（ADMIN以上）
     * @returns GroupInviteListResponse Successful Response
     * @throws ApiError
     */
    static listInvitesApiV1GroupsGroupIdInvitesGet({ groupId, }: {
        groupId: string;
    }): CancelablePromise<GroupInviteListResponse>;
    /**
     * Revoke Invite
     * 招待を取消（ADMIN以上）
     * @returns void
     * @throws ApiError
     */
    static revokeInviteApiV1GroupsGroupIdInvitesInviteIdDelete({ groupId, inviteId, }: {
        groupId: string;
        inviteId: string;
    }): CancelablePromise<void>;
    /**
     * Join By Token
     * 招待トークンでグループに参加
     * @returns GroupResponse Successful Response
     * @throws ApiError
     */
    static joinByTokenApiV1GroupsJoinByTokenTokenPost({ token, }: {
        token: string;
    }): CancelablePromise<GroupResponse>;
}

declare class GroupJoinRequestsService {
    /**
     * List Join Requests
     * 参加申請一覧（ADMIN以上）
     * @returns GroupJoinRequestListResponse Successful Response
     * @throws ApiError
     */
    static listJoinRequestsApiV1GroupsGroupIdJoinRequestsGet({ groupId, status, }: {
        groupId: string;
        status?: (JoinRequestStatus | null);
    }): CancelablePromise<GroupJoinRequestListResponse>;
    /**
     * Approve Join Request
     * 参加申請を承認（ADMIN以上）
     * @returns GroupJoinRequestResponse Successful Response
     * @throws ApiError
     */
    static approveJoinRequestApiV1GroupsGroupIdJoinRequestsRequestIdApprovePost({ groupId, requestId, }: {
        groupId: string;
        requestId: string;
    }): CancelablePromise<GroupJoinRequestResponse>;
    /**
     * Reject Join Request
     * 参加申請を拒否（ADMIN以上）
     * @returns GroupJoinRequestResponse Successful Response
     * @throws ApiError
     */
    static rejectJoinRequestApiV1GroupsGroupIdJoinRequestsRequestIdRejectPost({ groupId, requestId, }: {
        groupId: string;
        requestId: string;
    }): CancelablePromise<GroupJoinRequestResponse>;
}

declare class GroupsService {
    /**
     * Create Group
     * グループを作成
     * @returns GroupResponse Successful Response
     * @throws ApiError
     */
    static createGroupApiV1GroupsPost({ requestBody, }: {
        requestBody: GroupCreateRequest;
    }): CancelablePromise<GroupResponse>;
    /**
     * Get Group
     * グループを取得
     * @returns GroupResponse Successful Response
     * @throws ApiError
     */
    static getGroupApiV1GroupsGroupIdGet({ groupId, }: {
        groupId: string;
    }): CancelablePromise<GroupResponse>;
    /**
     * Update Group
     * グループを更新
     * @returns GroupResponse Successful Response
     * @throws ApiError
     */
    static updateGroupApiV1GroupsGroupIdPatch({ groupId, requestBody, }: {
        groupId: string;
        requestBody: GroupUpdateRequest;
    }): CancelablePromise<GroupResponse>;
    /**
     * Delete Group
     * グループを削除
     * @returns void
     * @throws ApiError
     */
    static deleteGroupApiV1GroupsGroupIdDelete({ groupId, }: {
        groupId: string;
    }): CancelablePromise<void>;
    /**
     * List Groups By Member
     * メンバーIDで所属グループを取得
     * @returns GroupListResponse Successful Response
     * @throws ApiError
     */
    static listGroupsByMemberApiV1GroupsByMemberMemberIdGet({ memberId, }: {
        memberId: string;
    }): CancelablePromise<GroupListResponse>;
    /**
     * Add Member
     * グループにメンバーを追加
     * @returns GroupResponse Successful Response
     * @throws ApiError
     */
    static addMemberApiV1GroupsGroupIdMembersPost({ groupId, requestBody, }: {
        groupId: string;
        requestBody: GroupAddMemberRequest;
    }): CancelablePromise<GroupResponse>;
    /**
     * Remove Member
     * グループからメンバーを削除（キック）
     * @returns GroupResponse Successful Response
     * @throws ApiError
     */
    static removeMemberApiV1GroupsGroupIdMembersMemberIdDelete({ groupId, memberId, }: {
        groupId: string;
        memberId: string;
    }): CancelablePromise<GroupResponse>;
    /**
     * Join Group
     * グループに参加（OPENの場合は即参加、APPROVALの場合は申請作成）
     * @returns any Successful Response
     * @throws ApiError
     */
    static joinGroupApiV1GroupsGroupIdJoinPost({ groupId, }: {
        groupId: string;
    }): CancelablePromise<(GroupResponse | GroupJoinRequestResponse)>;
    /**
     * Leave Group
     * グループから自主脱退
     * @returns GroupResponse Successful Response
     * @throws ApiError
     */
    static leaveGroupApiV1GroupsGroupIdLeavePost({ groupId, }: {
        groupId: string;
    }): CancelablePromise<GroupResponse>;
    /**
     * Update Member Role
     * メンバーのロールを変更（OWNERのみ）
     * @returns GroupResponse Successful Response
     * @throws ApiError
     */
    static updateMemberRoleApiV1GroupsGroupIdMembersMemberIdRolePatch({ groupId, memberId, requestBody, }: {
        groupId: string;
        memberId: string;
        requestBody: GroupRoleUpdateRequest;
    }): CancelablePromise<GroupResponse>;
}

declare class HairStylesService {
    /**
     * Create Hair Style
     * 髪型を作成
     * @returns HairStyleResponse Successful Response
     * @throws ApiError
     */
    static createHairStyleApiV1HairStylesPost({ requestBody, }: {
        requestBody: HairStyleCreateRequest;
    }): CancelablePromise<HairStyleResponse>;
    /**
     * List Hair Styles
     * 髪型一覧を取得
     * @returns HairStyleListResponse Successful Response
     * @throws ApiError
     */
    static listHairStylesApiV1HairStylesGet({ limit, cursor, }: {
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<HairStyleListResponse>;
    /**
     * Get Hair Style
     * 髪型を取得
     * @returns HairStyleResponse Successful Response
     * @throws ApiError
     */
    static getHairStyleApiV1HairStylesHairStyleIdGet({ hairStyleId, }: {
        hairStyleId: string;
    }): CancelablePromise<HairStyleResponse>;
    /**
     * Update Hair Style
     * 髪型を更新
     * @returns HairStyleResponse Successful Response
     * @throws ApiError
     */
    static updateHairStyleApiV1HairStylesHairStyleIdPatch({ hairStyleId, requestBody, }: {
        hairStyleId: string;
        requestBody: HairStyleUpdateRequest;
    }): CancelablePromise<HairStyleResponse>;
    /**
     * Delete Hair Style
     * 髪型を削除
     * @returns void
     * @throws ApiError
     */
    static deleteHairStyleApiV1HairStylesHairStyleIdDelete({ hairStyleId, }: {
        hairStyleId: string;
    }): CancelablePromise<void>;
}

declare class ImageAssetsService {
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
    static createImageAssetApiV1ImageAssetsPost({ formData, }: {
        formData: Body_create_image_asset_api_v1_image_assets_post;
    }): CancelablePromise<ImageAssetWithVersionResponse>;
    /**
     * Batch Get Image Assets
     * 複数の画像アセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetImageAssetsApiV1ImageAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Search Image Assets
     * 画像アセットを検索（プロファイルフラグベース）
     *
     * 公開検索では exclude_unreviewed=True（デフォルト）で審査済みアセットのみ取得。
     * 自分のアセット一覧を取得する場合は exclude_unreviewed=False を指定。
     * @returns ImageAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchImageAssetsApiV1ImageAssetsSearchGet({ ownerId, role, hasSquare, hasPortrait916, hasPortrait34, hasLandscape169, hasLandscape43, tagIds, minLevel, excludeUnreviewed, maxAiLevel, limit, cursor, }: {
        ownerId?: (string | null);
        role?: (AssetRole | null);
        /**
         * squareプロファイルを持つか
         */
        hasSquare?: (boolean | null);
        /**
         * portrait_9_16プロファイルを持つか
         */
        hasPortrait916?: (boolean | null);
        /**
         * portrait_3_4プロファイルを持つか
         */
        hasPortrait34?: (boolean | null);
        /**
         * landscape_16_9プロファイルを持つか
         */
        hasLandscape169?: (boolean | null);
        /**
         * landscape_4_3プロファイルを持つか
         */
        hasLandscape43?: (boolean | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        /**
         * 未審査アセットを除外（公開検索ではTrue推奨）
         */
        excludeUnreviewed?: boolean;
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<ImageAssetListResponse>;
    /**
     * Get Image Asset
     * 画像アセットを取得
     * @returns ImageAssetResponse Successful Response
     * @throws ApiError
     */
    static getImageAssetApiV1ImageAssetsImageIdGet({ imageId, }: {
        imageId: string;
    }): CancelablePromise<ImageAssetResponse>;
    /**
     * Update Image Asset
     * 画像アセットのメタデータを更新（オーナーのみ）
     * @returns ImageAssetResponse Successful Response
     * @throws ApiError
     */
    static updateImageAssetApiV1ImageAssetsImageIdPatch({ imageId, requestBody, }: {
        imageId: string;
        requestBody: ImageAssetUpdateRequest;
    }): CancelablePromise<ImageAssetResponse>;
    /**
     * Delete Image Asset
     * 画像アセットを削除（オーナーのみ）
     * @returns void
     * @throws ApiError
     */
    static deleteImageAssetApiV1ImageAssetsImageIdDelete({ imageId, }: {
        imageId: string;
    }): CancelablePromise<void>;
    /**
     * List Image Asset Versions
     * 画像アセットのバージョン一覧を取得
     * @returns ImageAssetVersionListResponse Successful Response
     * @throws ApiError
     */
    static listImageAssetVersionsApiV1ImageAssetsImageIdVersionsGet({ imageId, }: {
        imageId: string;
    }): CancelablePromise<ImageAssetVersionListResponse>;
    /**
     * Add Image Asset Version
     * 画像アセットに新しいバージョンを追加
     * @returns ImageAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static addImageAssetVersionApiV1ImageAssetsImageIdVersionsPost({ imageId, formData, }: {
        imageId: string;
        formData: Body_add_image_asset_version_api_v1_image_assets__image_id__versions_post;
    }): CancelablePromise<ImageAssetVersionResponse>;
    /**
     * Get Latest Image Version
     * 画像アセットの最新バージョンを取得
     * @returns ImageAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getLatestImageVersionApiV1ImageAssetsImageIdVersionsLatestGet({ imageId, }: {
        imageId: string;
    }): CancelablePromise<ImageAssetVersionResponse>;
    /**
     * Get Image Asset Version
     * 画像アセットの特定バージョンを取得
     * @returns ImageAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getImageAssetVersionApiV1ImageAssetsImageIdVersionsVersionIdGet({ imageId, versionId, }: {
        imageId: string;
        versionId: string;
    }): CancelablePromise<ImageAssetVersionResponse>;
    /**
     * Delete Image Asset Version
     * 画像アセットの特定バージョンを削除
     * @returns void
     * @throws ApiError
     */
    static deleteImageAssetVersionApiV1ImageAssetsImageIdVersionsVersionIdDelete({ imageId, versionId, }: {
        imageId: string;
        versionId: string;
    }): CancelablePromise<void>;
    /**
     * Get Image File Url
     * 画像ファイルのダウンロード用一時URL（Signed URL）を返す
     *
     * プロファイルと解像度を指定してファイルを取得。
     * @returns SignedUrlResponse Successful Response
     * @throws ApiError
     */
    static getImageFileUrlApiV1ImageAssetsImageIdFileGet({ imageId, profile, resolution, }: {
        imageId: string;
        /**
         * 取得するSizeProfile
         */
        profile: SizeProfile;
        /**
         * 取得する解像度
         */
        resolution?: Resolution;
    }): CancelablePromise<SignedUrlResponse>;
    /**
     * Get Image Protected File
     * 透かし入り暗号化画像をバイナリレスポンスで返す
     *
     * ヘッダー X-Key-Id, X-Fingerprint-Id, X-Format を含む。
     * クライアントはこれらのヘッダーを使って復号・管理する。
     * @returns any Successful Response
     * @throws ApiError
     */
    static getImageProtectedFileApiV1ImageAssetsImageIdProtectedFileGet({ imageId, profile, resolution, }: {
        imageId: string;
        /**
         * 取得するSizeProfile
         */
        profile: SizeProfile;
        /**
         * 取得する解像度
         */
        resolution?: Resolution;
    }): CancelablePromise<any>;
    /**
     * Batch Get Protected Image Files
     * バッチ透かし生成（メモリバジェット制御付き並列処理）
     *
     * 最大100件の画像を一括処理。各画像はbase64エンコードされた暗号化バイト列で返される。
     * @returns ProtectedImageBatchResponse Successful Response
     * @throws ApiError
     */
    static batchGetProtectedImageFilesApiV1ImageAssetsProtectedFilesBatchPost({ requestBody, }: {
        requestBody: ProtectedImageBatchRequest;
    }): CancelablePromise<ProtectedImageBatchResponse>;
}

declare class InternalService {
    /**
     * Conversion Callback
     * Converter Serviceからの変換完了通知を受信
     *
     * 変換が成功した場合はGLBファイル情報でバージョンを更新。
     * 失敗した場合はエラー情報を記録。
     * @returns GLBAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static conversionCallbackApiV1InternalConversionCallbackPost({ requestBody, }: {
        requestBody: ConversionCallbackPayload;
    }): CancelablePromise<GLBAssetVersionResponse>;
}

declare class InternalMarketplaceService {
    /**
     * Validate Prices
     * billing-gateway からの価格検証
     *
     * 各アイテムの effective_price がサーバー計算結果と一致するか検証する。
     * @returns ValidatePricesResponse Successful Response
     * @throws ApiError
     */
    static validatePricesInternalV1MarketplaceValidatePricesPost({ requestBody, xInternalApiKey, }: {
        requestBody: ValidatePricesRequest;
        xInternalApiKey?: string;
    }): CancelablePromise<ValidatePricesResponse>;
    /**
     * Purchase Completed
     * billing-gateway からの購入完了通知
     *
     * 各アイテムについて Entitlement を作成する。
     * 既に同じアセットの TRIAL Entitlement がある場合は FULL に昇格する。
     * @returns PurchaseCompletedResponse Successful Response
     * @throws ApiError
     */
    static purchaseCompletedInternalV1MarketplacePurchaseCompletedPost({ requestBody, xInternalApiKey, }: {
        requestBody: PurchaseCompletedRequest;
        xInternalApiKey?: string;
    }): CancelablePromise<PurchaseCompletedResponse>;
}

declare class KnowledgeGraphService {
    /**
     * Get Knowledge Graph
     * @returns KnowledgeGraphResponse Successful Response
     * @throws ApiError
     */
    static getKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<KnowledgeGraphResponse>;
    /**
     * Overwrite Knowledge Graph
     * @returns KnowledgeGraphResponse Successful Response
     * @throws ApiError
     */
    static overwriteKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphPut({ characterId, requestBody, }: {
        characterId: string;
        requestBody: KnowledgeGraphOverwriteRequest;
    }): CancelablePromise<KnowledgeGraphResponse>;
    /**
     * Rebuild Knowledge Graph
     * 全記憶から knowledge_graph を再構築する。
     * @returns KnowledgeGraphResponse Successful Response
     * @throws ApiError
     */
    static rebuildKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphRebuildPost({ characterId, }: {
        characterId: string;
    }): CancelablePromise<KnowledgeGraphResponse>;
}

declare class LlmModelsService {
    /**
     * List All Models
     * 全プロバイダーのモデル一覧を取得
     * @returns AllModelsResponse Successful Response
     * @throws ApiError
     */
    static listAllModelsApiV1LlmModelsGet(): CancelablePromise<AllModelsResponse>;
    /**
     * List All Models
     * 全プロバイダーのモデル一覧を取得
     * @returns AllModelsResponse Successful Response
     * @throws ApiError
     */
    static listAllModelsApiV1LlmModelsGet1(): CancelablePromise<AllModelsResponse>;
    /**
     * List Models By Provider
     * プロバイダー別モデル一覧を取得
     * @returns ProviderModelsResponse Successful Response
     * @throws ApiError
     */
    static listModelsByProviderApiV1LlmModelsProviderProviderGet({ provider, }: {
        provider: string;
    }): CancelablePromise<ProviderModelsResponse>;
    /**
     * List Models By Use Case
     * 用途別モデル一覧を取得（コスト順）
     *
     * use_case: conversation, structured_output, classification,
     * summarization, coding, reasoning, vision_analysis, general
     * @returns ModelInfoResponse Successful Response
     * @throws ApiError
     */
    static listModelsByUseCaseApiV1LlmModelsUseCaseUseCaseGet({ useCase, }: {
        useCase: string;
    }): CancelablePromise<Array<ModelInfoResponse>>;
    /**
     * Get Model Info
     * 特定モデルの情報を取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static getModelInfoApiV1LlmModelsModelProviderModelIdGet({ provider, modelId, }: {
        provider: string;
        modelId: string;
    }): CancelablePromise<(ModelInfoResponse | null)>;
    /**
     * Calculate Model Cost
     * コストを計算
     * @returns CostCalculationResponse Successful Response
     * @throws ApiError
     */
    static calculateModelCostApiV1LlmModelsCalculateCostPost({ requestBody, }: {
        requestBody: CostCalculationRequest;
    }): CancelablePromise<CostCalculationResponse>;
    /**
     * List Capabilities
     * 利用可能な機能一覧を取得
     * @returns string Successful Response
     * @throws ApiError
     */
    static listCapabilitiesApiV1LlmModelsCapabilitiesGet(): CancelablePromise<Array<string>>;
    /**
     * List Use Cases
     * 利用可能な用途一覧を取得
     * @returns string Successful Response
     * @throws ApiError
     */
    static listUseCasesApiV1LlmModelsUseCasesGet(): CancelablePromise<Array<string>>;
}

declare class MarketplaceBrowseService {
    /**
     * Browse Listings
     * @returns ListingListResponse Successful Response
     * @throws ApiError
     */
    static browseListingsApiV1MarketplaceBrowseListingsGet({ assetType, limit, cursor, }: {
        assetType?: (SellableAssetType | null);
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<ListingListResponse>;
    /**
     * Browse Listing Bundles
     * @returns ListingBundleListResponse Successful Response
     * @throws ApiError
     */
    static browseListingBundlesApiV1MarketplaceBrowseListingBundlesGet({ listingBundleType, limit, cursor, }: {
        listingBundleType?: (ListingBundleType | null);
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<ListingBundleListResponse>;
}

declare class MarketplaceDistributionBundlesService {
    /**
     * Create Distribution Bundle
     * @returns DistributionBundleResponse Successful Response
     * @throws ApiError
     */
    static createDistributionBundleApiV1MarketplaceDistributionBundlesPost({ requestBody, }: {
        requestBody: DistributionBundleCreateRequest;
    }): CancelablePromise<DistributionBundleResponse>;
    /**
     * List Distribution Bundles
     * @returns DistributionBundleListResponse Successful Response
     * @throws ApiError
     */
    static listDistributionBundlesApiV1MarketplaceDistributionBundlesGet({ creatorId, limit, cursor, }: {
        /**
         * クリエイターIDフィルタ
         */
        creatorId?: (string | null);
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<DistributionBundleListResponse>;
    /**
     * Get Distribution Bundle
     * @returns DistributionBundleResponse Successful Response
     * @throws ApiError
     */
    static getDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdGet({ bundleId, }: {
        bundleId: string;
    }): CancelablePromise<DistributionBundleResponse>;
    /**
     * Update Distribution Bundle
     * @returns DistributionBundleResponse Successful Response
     * @throws ApiError
     */
    static updateDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdPatch({ bundleId, requestBody, }: {
        bundleId: string;
        requestBody: DistributionBundleUpdateRequest;
    }): CancelablePromise<DistributionBundleResponse>;
    /**
     * Delete Distribution Bundle
     * @returns void
     * @throws ApiError
     */
    static deleteDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdDelete({ bundleId, }: {
        bundleId: string;
    }): CancelablePromise<void>;
}

declare class MarketplaceDistributionsService {
    /**
     * Create Distribution
     * @returns DistributionResponse Successful Response
     * @throws ApiError
     */
    static createDistributionApiV1MarketplaceDistributionsPost({ requestBody, }: {
        requestBody: DistributionCreateRequest;
    }): CancelablePromise<DistributionResponse>;
    /**
     * List Distributions
     * @returns DistributionListResponse Successful Response
     * @throws ApiError
     */
    static listDistributionsApiV1MarketplaceDistributionsGet({ creatorId, limit, cursor, }: {
        /**
         * クリエイターIDフィルタ
         */
        creatorId?: (string | null);
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<DistributionListResponse>;
    /**
     * Get Distribution
     * @returns DistributionResponse Successful Response
     * @throws ApiError
     */
    static getDistributionApiV1MarketplaceDistributionsDistributionIdGet({ distributionId, }: {
        distributionId: string;
    }): CancelablePromise<DistributionResponse>;
    /**
     * Update Distribution
     * @returns DistributionResponse Successful Response
     * @throws ApiError
     */
    static updateDistributionApiV1MarketplaceDistributionsDistributionIdPatch({ distributionId, requestBody, }: {
        distributionId: string;
        requestBody: DistributionUpdateRequest;
    }): CancelablePromise<DistributionResponse>;
    /**
     * Discontinue Distribution
     * @returns DistributionResponse Successful Response
     * @throws ApiError
     */
    static discontinueDistributionApiV1MarketplaceDistributionsDistributionIdDelete({ distributionId, }: {
        distributionId: string;
    }): CancelablePromise<DistributionResponse>;
    /**
     * Claim Distribution
     * @returns EntitlementResponse Successful Response
     * @throws ApiError
     */
    static claimDistributionApiV1MarketplaceDistributionsDistributionIdClaimPost({ distributionId, }: {
        distributionId: string;
    }): CancelablePromise<EntitlementResponse>;
}

declare class MarketplaceEntitlementsService {
    /**
     * List Entitlements
     * @returns EntitlementListResponse Successful Response
     * @throws ApiError
     */
    static listEntitlementsApiV1MarketplaceEntitlementsGet({ ownerType, assetType, limit, cursor, }: {
        /**
         * 所有者タイプ
         */
        ownerType?: ParticipantType;
        /**
         * アセットタイプフィルタ
         */
        assetType?: (string | null);
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<EntitlementListResponse>;
    /**
     * Check Entitlement
     * @returns EntitlementCheckResponse Successful Response
     * @throws ApiError
     */
    static checkEntitlementApiV1MarketplaceEntitlementsCheckGet({ assetId, ownerType, }: {
        /**
         * アセットID
         */
        assetId: string;
        /**
         * 所有者タイプ
         */
        ownerType?: ParticipantType;
    }): CancelablePromise<EntitlementCheckResponse>;
    /**
     * Get Entitlement
     * @returns EntitlementResponse Successful Response
     * @throws ApiError
     */
    static getEntitlementApiV1MarketplaceEntitlementsEntitlementIdGet({ entitlementId, ownerType, }: {
        entitlementId: string;
        /**
         * 所有者タイプ
         */
        ownerType?: ParticipantType;
    }): CancelablePromise<EntitlementResponse>;
    /**
     * Update Entitlement Version
     * @returns EntitlementResponse Successful Response
     * @throws ApiError
     */
    static updateEntitlementVersionApiV1MarketplaceEntitlementsEntitlementIdVersionPatch({ entitlementId, requestBody, ownerType, }: {
        entitlementId: string;
        requestBody: EntitlementVersionUpdateRequest;
        /**
         * 所有者タイプ
         */
        ownerType?: ParticipantType;
    }): CancelablePromise<EntitlementResponse>;
}

declare class MarketplaceFavoritesService {
    /**
     * Create Favorite
     * @returns FavoriteResponse Successful Response
     * @throws ApiError
     */
    static createFavoriteApiV1MarketplaceFavoritesPost({ requestBody, }: {
        requestBody: FavoriteCreateRequest;
    }): CancelablePromise<FavoriteResponse>;
    /**
     * List Favorites
     * @returns FavoriteListResponse Successful Response
     * @throws ApiError
     */
    static listFavoritesApiV1MarketplaceFavoritesGet({ limit, cursor, }: {
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<FavoriteListResponse>;
    /**
     * Delete Favorite
     * @returns void
     * @throws ApiError
     */
    static deleteFavoriteApiV1MarketplaceFavoritesFavoriteIdDelete({ favoriteId, }: {
        favoriteId: string;
    }): CancelablePromise<void>;
}

declare class MarketplaceGiftsService {
    /**
     * Create Gift Purchase
     * ギフト購入リクエストを作成する。
     *
     * 実際の決済は billing-gateway で処理される。
     * 決済完了後、purchase-completed エンドポイントで Entitlement が作成される。
     * @returns GiftPurchaseResponse Successful Response
     * @throws ApiError
     */
    static createGiftPurchaseApiV1MarketplaceGiftsPost({ requestBody, }: {
        requestBody: GiftPurchaseRequest;
    }): CancelablePromise<GiftPurchaseResponse>;
}

declare class MarketplaceListingBundlesService {
    /**
     * Create Listing Bundle
     * @returns ListingBundleResponse Successful Response
     * @throws ApiError
     */
    static createListingBundleApiV1MarketplaceListingBundlesPost({ requestBody, }: {
        requestBody: ListingBundleCreateRequest;
    }): CancelablePromise<ListingBundleResponse>;
    /**
     * List Listing Bundles
     * @returns ListingBundleListResponse Successful Response
     * @throws ApiError
     */
    static listListingBundlesApiV1MarketplaceListingBundlesGet({ limit, cursor, }: {
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<ListingBundleListResponse>;
    /**
     * Get Listing Bundle
     * @returns ListingBundleResponse Successful Response
     * @throws ApiError
     */
    static getListingBundleApiV1MarketplaceListingBundlesListingBundleIdGet({ listingBundleId, }: {
        listingBundleId: string;
    }): CancelablePromise<ListingBundleResponse>;
    /**
     * Update Listing Bundle
     * @returns ListingBundleResponse Successful Response
     * @throws ApiError
     */
    static updateListingBundleApiV1MarketplaceListingBundlesListingBundleIdPatch({ listingBundleId, requestBody, }: {
        listingBundleId: string;
        requestBody: ListingBundleUpdateRequest;
    }): CancelablePromise<ListingBundleResponse>;
    /**
     * Delete Listing Bundle
     * @returns void
     * @throws ApiError
     */
    static deleteListingBundleApiV1MarketplaceListingBundlesListingBundleIdDelete({ listingBundleId, }: {
        listingBundleId: string;
    }): CancelablePromise<void>;
}

declare class MarketplaceListingsService {
    /**
     * Create Listing
     * @returns ListingResponse Successful Response
     * @throws ApiError
     */
    static createListingApiV1MarketplaceListingsPost({ requestBody, }: {
        requestBody: ListingCreateRequest;
    }): CancelablePromise<ListingResponse>;
    /**
     * List Listings
     * @returns ListingListResponse Successful Response
     * @throws ApiError
     */
    static listListingsApiV1MarketplaceListingsGet({ limit, cursor, }: {
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<ListingListResponse>;
    /**
     * Get Listing
     * @returns ListingResponse Successful Response
     * @throws ApiError
     */
    static getListingApiV1MarketplaceListingsListingIdGet({ listingId, }: {
        listingId: string;
    }): CancelablePromise<ListingResponse>;
    /**
     * Update Listing
     * @returns ListingResponse Successful Response
     * @throws ApiError
     */
    static updateListingApiV1MarketplaceListingsListingIdPatch({ listingId, requestBody, }: {
        listingId: string;
        requestBody: ListingUpdateRequest;
    }): CancelablePromise<ListingResponse>;
    /**
     * Delete Listing
     * @returns void
     * @throws ApiError
     */
    static deleteListingApiV1MarketplaceListingsListingIdDelete({ listingId, }: {
        listingId: string;
    }): CancelablePromise<void>;
}

declare class MarketplaceNotificationsService {
    /**
     * List Notifications
     * @returns NotificationListResponse Successful Response
     * @throws ApiError
     */
    static listNotificationsApiV1MarketplaceNotificationsGet({ unreadOnly, limit, cursor, }: {
        unreadOnly?: boolean;
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<NotificationListResponse>;
    /**
     * Mark Notification As Read
     * @returns void
     * @throws ApiError
     */
    static markNotificationAsReadApiV1MarketplaceNotificationsNotificationIdReadPatch({ notificationId, }: {
        notificationId: string;
    }): CancelablePromise<void>;
    /**
     * Mark All Notifications As Read
     * @returns any Successful Response
     * @throws ApiError
     */
    static markAllNotificationsAsReadApiV1MarketplaceNotificationsMarkAllReadPost(): CancelablePromise<any>;
}

declare class MarketplaceReportsService {
    /**
     * Create Report
     * @returns any Successful Response
     * @throws ApiError
     */
    static createReportApiV1MarketplaceReportsPost({ requestBody, }: {
        requestBody: ReportCreateRequest;
    }): CancelablePromise<any>;
}

declare class MarketplaceReviewsService {
    /**
     * Create Review
     * @returns ReviewResponse Successful Response
     * @throws ApiError
     */
    static createReviewApiV1MarketplaceReviewsPost({ requestBody, }: {
        requestBody: ReviewCreateRequest;
    }): CancelablePromise<ReviewResponse>;
    /**
     * List Reviews
     * @returns ReviewListResponse Successful Response
     * @throws ApiError
     */
    static listReviewsApiV1MarketplaceReviewsGet({ targetType, targetId, limit, cursor, }: {
        /**
         * Target type (listing or composition)
         */
        targetType: string;
        /**
         * Target ID
         */
        targetId: string;
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<ReviewListResponse>;
    /**
     * Delete Review
     * @returns void
     * @throws ApiError
     */
    static deleteReviewApiV1MarketplaceReviewsReviewIdDelete({ reviewId, }: {
        reviewId: string;
    }): CancelablePromise<void>;
}

declare class MemoriesService {
    /**
     * Search Memories
     * @returns MemorySearchResponse Successful Response
     * @throws ApiError
     */
    static searchMemoriesApiV1CharactersCharacterIdMemoriesSearchPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: MemorySearchRequest;
    }): CancelablePromise<MemorySearchResponse>;
    /**
     * Create Memory
     * @returns MemoryResponse Successful Response
     * @throws ApiError
     */
    static createMemoryApiV1CharactersCharacterIdMemoriesPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: MemoryCreateRequest;
    }): CancelablePromise<MemoryResponse>;
    /**
     * List Memories
     * @returns MemoryListResponse Successful Response
     * @throws ApiError
     */
    static listMemoriesApiV1CharactersCharacterIdMemoriesGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<MemoryListResponse>;
    /**
     * Get Memory
     * @returns MemoryResponse Successful Response
     * @throws ApiError
     */
    static getMemoryApiV1CharactersCharacterIdMemoriesMemoryIdGet({ characterId, memoryId, }: {
        characterId: string;
        memoryId: string;
    }): CancelablePromise<MemoryResponse>;
    /**
     * Update Memory
     * @returns MemoryResponse Successful Response
     * @throws ApiError
     */
    static updateMemoryApiV1CharactersCharacterIdMemoriesMemoryIdPut({ characterId, memoryId, requestBody, }: {
        characterId: string;
        memoryId: string;
        requestBody: MemoryUpdateRequest;
    }): CancelablePromise<MemoryResponse>;
    /**
     * Delete Memory
     * @returns void
     * @throws ApiError
     */
    static deleteMemoryApiV1CharactersCharacterIdMemoriesMemoryIdDelete({ characterId, memoryId, }: {
        characterId: string;
        memoryId: string;
    }): CancelablePromise<void>;
    /**
     * Toggle Memory Pin
     * @returns MemoryResponse Successful Response
     * @throws ApiError
     */
    static toggleMemoryPinApiV1CharactersCharacterIdMemoriesMemoryIdPinPatch({ characterId, memoryId, requestBody, }: {
        characterId: string;
        memoryId: string;
        requestBody: MemoryPinRequest;
    }): CancelablePromise<MemoryResponse>;
}

declare class MemoryOrganizationService {
    /**
     * Organize Memories
     * @returns MemoryOrganizationResponse Successful Response
     * @throws ApiError
     */
    static organizeMemoriesApiV1CharactersCharacterIdMemoryOrganizationPost({ characterId, }: {
        characterId: string;
    }): CancelablePromise<MemoryOrganizationResponse>;
}

declare class MoodService {
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
    static getCurrentMoodApiV1CharactersCharacterIdMoodGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<MoodStateResponse>;
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
    static updateMoodFromConversationApiV1CharactersCharacterIdMoodPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: MoodUpdateRequest;
    }): CancelablePromise<MoodStateResponse>;
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
    static getVerbalizedMoodApiV1CharactersCharacterIdMoodVerbalizedGet({ characterId, locale, }: {
        characterId: string;
        /**
         * 言語
         */
        locale?: SupportedLanguage$1;
    }): CancelablePromise<MoodVerbalizedResponse>;
    /**
     * Reset Mood
     * 気分をデフォルト値にリセット
     *
     * キャラクターのemotional_paramsに基づいたデフォルト値にリセットする。
     * emotion_centerの履歴もクリアされる。
     * @returns MoodStateResponse Successful Response
     * @throws ApiError
     */
    static resetMoodApiV1CharactersCharacterIdMoodResetPost({ characterId, }: {
        characterId: string;
    }): CancelablePromise<MoodStateResponse>;
}

declare class MotionFormatsAnimatorService {
    /**
     * Create Avatar Animator Format
     * アバターモーションのAnimatorフォーマットを作成
     * @returns FormatOperationResponse Successful Response
     * @throws ApiError
     */
    static createAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorPost({ avatarId, avatarMotionId, requestBody, }: {
        avatarId: string;
        avatarMotionId: string;
        requestBody: AnimatorMotionData;
    }): CancelablePromise<FormatOperationResponse>;
    /**
     * Get Avatar Animator Format
     * アバターモーションのAnimatorフォーマットを取得
     * @returns AnimatorMotionData Successful Response
     * @throws ApiError
     */
    static getAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorGet({ avatarId, avatarMotionId, }: {
        avatarId: string;
        avatarMotionId: string;
    }): CancelablePromise<AnimatorMotionData>;
    /**
     * Update Avatar Animator Format
     * アバターモーションのAnimatorフォーマットを更新
     * @returns FormatOperationResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorPatch({ avatarId, avatarMotionId, requestBody, }: {
        avatarId: string;
        avatarMotionId: string;
        requestBody: AnimatorMotionData;
    }): CancelablePromise<FormatOperationResponse>;
    /**
     * Delete Avatar Animator Format
     * アバターモーションのAnimatorフォーマットを削除
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorDelete({ avatarId, avatarMotionId, }: {
        avatarId: string;
        avatarMotionId: string;
    }): CancelablePromise<any>;
}

declare class MotionFormatsGlbService {
    /**
     * Create Avatar Glb Motion Format
     * アバターモーションのGLBフォーマットを作成
     * @returns FormatOperationResponse Successful Response
     * @throws ApiError
     */
    static createAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbPost({ avatarId, avatarMotionId, requestBody, }: {
        avatarId: string;
        avatarMotionId: string;
        requestBody: GLBMotionData;
    }): CancelablePromise<FormatOperationResponse>;
    /**
     * Get Avatar Glb Motion Format
     * アバターモーションのGLBフォーマットを取得
     * @returns GLBMotionData Successful Response
     * @throws ApiError
     */
    static getAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbGet({ avatarId, avatarMotionId, }: {
        avatarId: string;
        avatarMotionId: string;
    }): CancelablePromise<GLBMotionData>;
    /**
     * Update Avatar Glb Motion Format
     * アバターモーションのGLBフォーマットを更新
     * @returns FormatOperationResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbPatch({ avatarId, avatarMotionId, requestBody, }: {
        avatarId: string;
        avatarMotionId: string;
        requestBody: GLBMotionData;
    }): CancelablePromise<FormatOperationResponse>;
    /**
     * Delete Avatar Glb Motion Format
     * アバターモーションのGLBフォーマットを削除
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbDelete({ avatarId, avatarMotionId, }: {
        avatarId: string;
        avatarMotionId: string;
    }): CancelablePromise<any>;
}

declare class MotionFormatsVrmaService {
    /**
     * Create Avatar Vrma Format
     * アバターモーションのVRMAフォーマットを作成
     * @returns FormatOperationResponse Successful Response
     * @throws ApiError
     */
    static createAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaPost({ avatarId, avatarMotionId, requestBody, }: {
        avatarId: string;
        avatarMotionId: string;
        requestBody: VRMAMotionData;
    }): CancelablePromise<FormatOperationResponse>;
    /**
     * Get Avatar Vrma Format
     * アバターモーションのVRMAフォーマットを取得
     * @returns VRMAMotionData Successful Response
     * @throws ApiError
     */
    static getAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaGet({ avatarId, avatarMotionId, }: {
        avatarId: string;
        avatarMotionId: string;
    }): CancelablePromise<VRMAMotionData>;
    /**
     * Update Avatar Vrma Format
     * アバターモーションのVRMAフォーマットを更新
     * @returns FormatOperationResponse Successful Response
     * @throws ApiError
     */
    static updateAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaPatch({ avatarId, avatarMotionId, requestBody, }: {
        avatarId: string;
        avatarMotionId: string;
        requestBody: VRMAMotionData;
    }): CancelablePromise<FormatOperationResponse>;
    /**
     * Delete Avatar Vrma Format
     * アバターモーションのVRMAフォーマットを削除
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaDelete({ avatarId, avatarMotionId, }: {
        avatarId: string;
        avatarMotionId: string;
    }): CancelablePromise<any>;
}

declare class MotionsService {
    /**
     * Create Motion
     * 新しいMotionを作成
     * @returns MotionResponse Successful Response
     * @throws ApiError
     */
    static createMotionApiV1MotionsPost({ requestBody, }: {
        requestBody: MotionCreateRequest;
    }): CancelablePromise<MotionResponse>;
    /**
     * List Motions
     * Motion一覧を取得
     * @returns MotionListResponse Successful Response
     * @throws ApiError
     */
    static listMotionsApiV1MotionsGet({ dataSource, limit, cursor, }: {
        /**
         * データソースでフィルタ
         */
        dataSource?: (DataSource | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル（オフセット値）
         */
        cursor?: (string | null);
    }): CancelablePromise<MotionListResponse>;
    /**
     * Search Motions
     * 名前または同義語でMotionを検索
     * @returns MotionSearchResponse Successful Response
     * @throws ApiError
     */
    static searchMotionsApiV1MotionsSearchGet({ searchTerm, locale, limit, cursor, }: {
        /**
         * 検索キーワード
         */
        searchTerm: string;
        /**
         * 検索対象のロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル（オフセット値）
         */
        cursor?: (string | null);
    }): CancelablePromise<MotionSearchResponse>;
    /**
     * Suggest Motions By Text
     * テキストからMotionを提案（LLM使用）
     * @returns MotionSuggestionResponse Successful Response
     * @throws ApiError
     */
    static suggestMotionsByTextApiV1MotionsSuggestByTextPost({ requestBody, }: {
        requestBody: MotionSuggestByTextRequest;
    }): CancelablePromise<Array<MotionSuggestionResponse>>;
    /**
     * Batch Get Motions
     * 複数のMotionを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetMotionsApiV1MotionsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Motion
     * IDでMotionを取得
     * @returns MotionResponse Successful Response
     * @throws ApiError
     */
    static getMotionApiV1MotionsMotionIdGet({ motionId, }: {
        motionId: string;
    }): CancelablePromise<MotionResponse>;
    /**
     * Update Motion
     * Motionを更新
     * @returns MotionResponse Successful Response
     * @throws ApiError
     */
    static updateMotionApiV1MotionsMotionIdPatch({ motionId, requestBody, }: {
        motionId: string;
        requestBody: MotionUpdateRequest;
    }): CancelablePromise<MotionResponse>;
    /**
     * Delete Motion
     * Motionを削除
     * @returns void
     * @throws ApiError
     */
    static deleteMotionApiV1MotionsMotionIdDelete({ motionId, }: {
        motionId: string;
    }): CancelablePromise<void>;
    /**
     * Add Synonyms
     * 指定ロケールに同義語を追加
     * @returns MotionResponse Successful Response
     * @throws ApiError
     */
    static addSynonymsApiV1MotionsMotionIdSynonymsAddPost({ motionId, requestBody, }: {
        motionId: string;
        requestBody: SynonymsRequest;
    }): CancelablePromise<MotionResponse>;
    /**
     * Remove Synonyms
     * 指定ロケールから同義語を削除
     * @returns MotionResponse Successful Response
     * @throws ApiError
     */
    static removeSynonymsApiV1MotionsMotionIdSynonymsRemovePost({ motionId, requestBody, }: {
        motionId: string;
        requestBody: SynonymsRequest;
    }): CancelablePromise<MotionResponse>;
}

declare class MotionsSummaryService {
    /**
     * Get Motions Summary
     * MotionsSummary（モーションインデックス）を取得
     *
     * OFFICIALモーションの一括参照用インデックスを返します。
     * ロケール別にモーションID・名前・同義語・タイプを含みます。
     * @returns MotionsSummaryResponse Successful Response
     * @throws ApiError
     */
    static getMotionsSummaryApiV1MotionsSummaryGet(): CancelablePromise<MotionsSummaryResponse>;
}

declare class OutfitsService {
    /**
     * Create Outfit
     * 衣装を作成
     * @returns OutfitResponse Successful Response
     * @throws ApiError
     */
    static createOutfitApiV1OutfitsPost({ requestBody, }: {
        requestBody: OutfitCreateRequest;
    }): CancelablePromise<OutfitResponse>;
    /**
     * List Outfits
     * 衣装一覧を取得
     * @returns OutfitListResponse Successful Response
     * @throws ApiError
     */
    static listOutfitsApiV1OutfitsGet({ category, limit, cursor, }: {
        /**
         * カテゴリでフィルタ
         */
        category?: (OutfitCategory | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<OutfitListResponse>;
    /**
     * Get Outfit
     * 衣装を取得
     * @returns OutfitResponse Successful Response
     * @throws ApiError
     */
    static getOutfitApiV1OutfitsOutfitIdGet({ outfitId, }: {
        outfitId: string;
    }): CancelablePromise<OutfitResponse>;
    /**
     * Update Outfit
     * 衣装を更新
     * @returns OutfitResponse Successful Response
     * @throws ApiError
     */
    static updateOutfitApiV1OutfitsOutfitIdPatch({ outfitId, requestBody, }: {
        outfitId: string;
        requestBody: OutfitUpdateRequest;
    }): CancelablePromise<OutfitResponse>;
    /**
     * Delete Outfit
     * 衣装を削除
     * @returns void
     * @throws ApiError
     */
    static deleteOutfitApiV1OutfitsOutfitIdDelete({ outfitId, }: {
        outfitId: string;
    }): CancelablePromise<void>;
}

declare class PersonalityPresetsService {
    /**
     * List Presets
     * 全性格プリセットを取得
     * @returns PersonalityPresetListResponse Successful Response
     * @throws ApiError
     */
    static listPresetsApiV1PersonalityPresetsGet(): CancelablePromise<PersonalityPresetListResponse>;
    /**
     * Get Context Table
     * Layer 0 コンテキストテーブルを取得
     * @returns StandardContextTableResponse Successful Response
     * @throws ApiError
     */
    static getContextTableApiV1PersonalityPresetsContextTableGet(): CancelablePromise<StandardContextTableResponse>;
    /**
     * Get Vad Mapping
     * Layer 0 VAD→非言語マッピングを取得
     * @returns VadNonVerbalMappingResponse Successful Response
     * @throws ApiError
     */
    static getVadMappingApiV1PersonalityPresetsVadMappingGet(): CancelablePromise<VadNonVerbalMappingResponse>;
    /**
     * List Behavioral Patterns
     * 全行動パターンプリセットを取得
     * @returns BehavioralPatternPresetListResponse Successful Response
     * @throws ApiError
     */
    static listBehavioralPatternsApiV1PersonalityPresetsBehavioralPatternsGet(): CancelablePromise<BehavioralPatternPresetListResponse>;
    /**
     * Get Behavioral Pattern
     * 指定パターンの行動パターンプリセットを取得
     * @returns BehavioralPatternPresetResponse Successful Response
     * @throws ApiError
     */
    static getBehavioralPatternApiV1PersonalityPresetsBehavioralPatternsPatternGet({ pattern, }: {
        pattern: BehavioralPattern;
    }): CancelablePromise<BehavioralPatternPresetResponse>;
    /**
     * Get Preset
     * 指定アーキタイプのプリセットを取得
     * @returns PersonalityPresetResponse Successful Response
     * @throws ApiError
     */
    static getPresetApiV1PersonalityPresetsArchetypeGet({ archetype, }: {
        archetype: PersonalityArchetype;
    }): CancelablePromise<PersonalityPresetResponse>;
}

declare class RelationshipContextService {
    /**
     * Get Relationship Context Map
     * RelationshipRole→(AffinityLevel, PowerDynamic, BondType) マッピングを取得
     *
     * クライアント側で RelationshipRole から AffinityLevel, PowerDynamic, BondType を
     * 導出するためのマッピングテーブル。
     * @returns RelationshipContextMapResponse Successful Response
     * @throws ApiError
     */
    static getRelationshipContextMapApiV1RelationshipContextMapGet(): CancelablePromise<RelationshipContextMapResponse>;
}

declare class RelationshipsService {
    /**
     * Create Relationship
     * キャラクターの対人関係を作成
     * @returns CharacterRelationshipResponse Successful Response
     * @throws ApiError
     */
    static createRelationshipApiV1CharactersCharacterIdRelationshipsPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterRelationshipCreateRequest;
    }): CancelablePromise<CharacterRelationshipResponse>;
    /**
     * List Relationships
     * キャラクターの全対人関係を取得
     * @returns CharacterRelationshipListResponse Successful Response
     * @throws ApiError
     */
    static listRelationshipsApiV1CharactersCharacterIdRelationshipsGet({ characterId, limit, cursor, }: {
        characterId: string;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル（オフセット値）
         */
        cursor?: (string | null);
    }): CancelablePromise<CharacterRelationshipListResponse>;
    /**
     * Get Relationship
     * 特定の対人関係を取得
     * @returns CharacterRelationshipResponse Successful Response
     * @throws ApiError
     */
    static getRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdGet({ characterId, conversantType, conversantId, }: {
        characterId: string;
        conversantType: ParticipantType;
        conversantId: string;
    }): CancelablePromise<CharacterRelationshipResponse>;
    /**
     * Update Relationship
     * 対人関係を更新
     * @returns CharacterRelationshipResponse Successful Response
     * @throws ApiError
     */
    static updateRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdPatch({ characterId, conversantType, conversantId, requestBody, }: {
        characterId: string;
        conversantType: ParticipantType;
        conversantId: string;
        requestBody: CharacterRelationshipUpdateRequest;
    }): CancelablePromise<CharacterRelationshipResponse>;
    /**
     * Delete Relationship
     * 対人関係を削除
     * @returns void
     * @throws ApiError
     */
    static deleteRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdDelete({ characterId, conversantType, conversantId, }: {
        characterId: string;
        conversantType: ParticipantType;
        conversantId: string;
    }): CancelablePromise<void>;
}

declare class ReviewsService {
    /**
     * Auto Review
     * 自動審査（一次審査）を実行
     *
     * LLMを使用してコンテンツを自動審査します。
     * @returns ReviewLogResponse Successful Response
     * @throws ApiError
     */
    static autoReviewApiV1ReviewsTargetTypeTargetIdAutoPost({ targetType, targetId, requestBody, }: {
        targetType: ReviewTargetType;
        targetId: string;
        requestBody: AutoReviewRequest;
    }): CancelablePromise<ReviewLogResponse>;
    /**
     * Appeal Review
     * 異議申し立て（再審査）を実行
     *
     * LLMを使用して、異議内容を考慮した再審査を行います。
     * @returns ReviewLogResponse Successful Response
     * @throws ApiError
     */
    static appealReviewApiV1ReviewsTargetTypeTargetIdAppealPost({ targetType, targetId, requestBody, }: {
        targetType: ReviewTargetType;
        targetId: string;
        requestBody: AppealReviewRequest;
    }): CancelablePromise<ReviewLogResponse>;
    /**
     * Request Staff Review
     * 運営審査を要求
     *
     * 運営による手動審査を要求します。
     * @returns ReviewLogResponse Successful Response
     * @throws ApiError
     */
    static requestStaffReviewApiV1ReviewsTargetTypeTargetIdStaffRequestPost({ targetType, targetId, requestBody, }: {
        targetType: ReviewTargetType;
        targetId: string;
        requestBody: StaffReviewRequestRequest;
    }): CancelablePromise<ReviewLogResponse>;
    /**
     * List Reviews
     * 審査ログ一覧を取得
     * @returns ReviewLogListResponse Successful Response
     * @throws ApiError
     */
    static listReviewsApiV1ReviewsTargetTypeTargetIdGet({ targetType, targetId, limit, cursor, }: {
        targetType: ReviewTargetType;
        targetId: string;
        /**
         * 取得件数上限
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<ReviewLogListResponse>;
    /**
     * Get Review Status
     * 審査ステータスを取得
     * @returns ReviewStatusResponse Successful Response
     * @throws ApiError
     */
    static getReviewStatusApiV1ReviewsTargetTypeTargetIdStatusGet({ targetType, targetId, }: {
        targetType: ReviewTargetType;
        targetId: string;
    }): CancelablePromise<ReviewStatusResponse>;
}

declare class SchedulesService {
    /**
     * Get Schedules
     * @returns ScheduleListResponse Successful Response
     * @throws ApiError
     */
    static getSchedulesApiV1CharactersCharacterIdSchedulesGet({ characterId, startDate, endDate, limit, cursor, }: {
        characterId: string;
        /**
         * 開始日（ISO形式）
         */
        startDate: string;
        /**
         * 終了日（ISO形式）
         */
        endDate: string;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<ScheduleListResponse>;
    /**
     * Create Schedule
     * @returns ScheduleResponse Successful Response
     * @throws ApiError
     */
    static createScheduleApiV1CharactersCharacterIdSchedulesPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: ScheduleCreateRequest;
    }): CancelablePromise<ScheduleResponse>;
    /**
     * Get Schedule
     * @returns ScheduleResponse Successful Response
     * @throws ApiError
     */
    static getScheduleApiV1CharactersCharacterIdSchedulesScheduleIdGet({ characterId, scheduleId, }: {
        characterId: string;
        scheduleId: string;
    }): CancelablePromise<ScheduleResponse>;
    /**
     * Update Schedule
     * @returns ScheduleResponse Successful Response
     * @throws ApiError
     */
    static updateScheduleApiV1CharactersCharacterIdSchedulesScheduleIdPatch({ characterId, scheduleId, requestBody, }: {
        characterId: string;
        scheduleId: string;
        requestBody: ScheduleUpdateRequest;
    }): CancelablePromise<ScheduleResponse>;
    /**
     * Delete Schedule
     * @returns void
     * @throws ApiError
     */
    static deleteScheduleApiV1CharactersCharacterIdSchedulesScheduleIdDelete({ characterId, scheduleId, }: {
        characterId: string;
        scheduleId: string;
    }): CancelablePromise<void>;
}

declare class SessionHistoryService {
    /**
     * Create Session History
     * @returns SessionHistoryResponse Successful Response
     * @throws ApiError
     */
    static createSessionHistoryApiV1CharactersCharacterIdSessionHistoryPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: SessionHistoryCreateRequest;
    }): CancelablePromise<SessionHistoryResponse>;
    /**
     * List Session History
     * @returns SessionHistoryListResponse Successful Response
     * @throws ApiError
     */
    static listSessionHistoryApiV1CharactersCharacterIdSessionHistoryGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<SessionHistoryListResponse>;
    /**
     * Get Session History
     * @returns SessionHistoryResponse Successful Response
     * @throws ApiError
     */
    static getSessionHistoryApiV1CharactersCharacterIdSessionHistorySessionIdGet({ characterId, sessionId, }: {
        characterId: string;
        sessionId: string;
    }): CancelablePromise<SessionHistoryResponse>;
}

declare class SettingsService {
    /**
     * Create Settings
     * 詳細な設定内容（content）を指定して新しいSettingsを作成
     * @returns SettingsResponse Successful Response
     * @throws ApiError
     */
    static createSettingsApiV1SettingsPost({ requestBody, }: {
        requestBody: SettingsCreateWithContentRequest;
    }): CancelablePromise<SettingsResponse>;
    /**
     * List Settings
     * 条件に合うSettings一覧を取得
     * @returns SettingsListResponse Successful Response
     * @throws ApiError
     */
    static listSettingsApiV1SettingsGet({ filterByOwner, publishScope, parentSettingsId, limit, cursor, }: {
        /**
         * 現在のユーザーが所有する設定でフィルタするかどうか
         */
        filterByOwner?: boolean;
        /**
         * 公開範囲でフィルタ (public, unlisted, private)
         */
        publishScope?: (PublishScope | null);
        parentSettingsId?: (string | null);
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<SettingsListResponse>;
    /**
     * Create Settings With Description
     * キャラ設定の概要（overview）から新しいSettingsを自動生成して作成
     * @returns SettingsResponse Successful Response
     * @throws ApiError
     */
    static createSettingsWithDescriptionApiV1SettingsWithDescriptionPost({ requestBody, }: {
        requestBody: SettingsCreateRequest;
    }): CancelablePromise<SettingsResponse>;
    /**
     * Get Settings
     * 指定したIDのSettingsを取得
     * @returns SettingsResponse Successful Response
     * @throws ApiError
     */
    static getSettingsApiV1SettingsSettingsIdGet({ settingsId, }: {
        settingsId: string;
    }): CancelablePromise<SettingsResponse>;
    /**
     * Update Settings
     * 既存のSettingsを更新。
     * parent_settings_id, content, description, publishingを個別または複数まとめて更新できます。
     * タグは自動的に生成されます。
     * @returns SettingsResponse Successful Response
     * @throws ApiError
     */
    static updateSettingsApiV1SettingsSettingsIdPatch({ settingsId, requestBody, }: {
        settingsId: string;
        requestBody: SettingsUpdateRequest;
    }): CancelablePromise<SettingsResponse>;
    /**
     * Delete Settings
     * 指定したIDのSettingsを削除
     * @returns void
     * @throws ApiError
     */
    static deleteSettingsApiV1SettingsSettingsIdDelete({ settingsId, }: {
        settingsId: string;
    }): CancelablePromise<void>;
    /**
     * Get Settings Content
     * 設定の詳細なコンテンツのみを取得
     * @returns SettingsContentResponse Successful Response
     * @throws ApiError
     */
    static getSettingsContentApiV1SettingsSettingsIdContentGet({ settingsId, }: {
        settingsId: string;
    }): CancelablePromise<SettingsContentResponse>;
    /**
     * Generate Content
     * キャラ設定の概要（overview）から詳細な設定（SettingsContent）を生成
     * ※この時点ではデータベースに保存されません
     * @returns GenerateContentResponse Successful Response
     * @throws ApiError
     */
    static generateContentApiV1SettingsGenerateContentPost({ requestBody, }: {
        requestBody: GenerateContentRequest;
    }): CancelablePromise<GenerateContentResponse>;
    /**
     * Regenerate Content From Input
     * Client-input版: テキスト入力からSettingsContentを再生成（保存なし）
     *
     * settings_content にJSON文字列またはテキストを渡し、modification_instruction で修正指示を与える。
     * @returns RegenerateContentFromInputResponse Successful Response
     * @throws ApiError
     */
    static regenerateContentFromInputApiV1SettingsRegenerateContentPost({ requestBody, }: {
        requestBody: RegenerateContentFromInputRequest;
    }): CancelablePromise<RegenerateContentFromInputResponse>;
    /**
     * Regenerate Content
     * 既存Settingsのcontentを修正指示に基づいてLLMで再生成
     *
     * - save=false（デフォルト）: 再生成結果を返すのみ
     * - save=true: 再生成結果をDBに保存
     * @returns RegenerateContentResponse Successful Response
     * @throws ApiError
     */
    static regenerateContentApiV1SettingsSettingsIdRegenerateContentPost({ settingsId, requestBody, save, }: {
        settingsId: string;
        requestBody: RegenerateContentRequest;
        /**
         * 生成結果をDBに保存するか（デフォルト: false）
         */
        save?: boolean;
    }): CancelablePromise<RegenerateContentResponse>;
    /**
     * Duplicate Settings
     * 既存のSettingsを複製して新規作成
     * @returns DuplicateSettingsResponse Successful Response
     * @throws ApiError
     */
    static duplicateSettingsApiV1SettingsSettingsIdDuplicatePost({ settingsId, }: {
        settingsId: string;
    }): CancelablePromise<DuplicateSettingsResponse>;
    /**
     * Get Parent Settings
     * 指定したSettingsの親情報を取得
     * @returns SettingsResponse Successful Response
     * @throws ApiError
     */
    static getParentSettingsApiV1SettingsSettingsIdParentGet({ settingsId, }: {
        settingsId: string;
    }): CancelablePromise<SettingsResponse>;
    /**
     * Get Children Settings
     * 指定したSettingsの子一覧を取得
     * @returns SettingsListResponse Successful Response
     * @throws ApiError
     */
    static getChildrenSettingsApiV1SettingsSettingsIdChildrenGet({ settingsId, limit, cursor, }: {
        settingsId: string;
        limit?: number;
        /**
         * ページネーションカーソル（オフセット値）
         */
        cursor?: (string | null);
    }): CancelablePromise<SettingsListResponse>;
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
    static searchSettingsByTagsApiV1SettingsTagSearchGet({ tags, limit, cursor, }: {
        /**
         * 検索するタグIDのリスト
         */
        tags: Array<string>;
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<SettingsListResponse>;
    /**
     * Get User Settings
     * 特定のユーザーが所有するSettings一覧を取得
     * @returns SettingsListResponse Successful Response
     * @throws ApiError
     */
    static getUserSettingsApiV1SettingsUserUserIdGet({ userId, publishScope, limit, cursor, }: {
        userId: string;
        /**
         * 公開範囲でフィルタ (public, unlisted, private)
         */
        publishScope?: (PublishScope | null);
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<SettingsListResponse>;
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
    static searchSettingsApiV1SettingsSearchPost({ requestBody, }: {
        requestBody: SettingsSearchRequest;
    }): CancelablePromise<SettingsSearchResponse>;
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
    static getSettingsBatchApiV1SettingsBatchPost({ requestBody, }: {
        requestBody: BatchSettingsRequest;
    }): CancelablePromise<BatchSettingsResponse>;
}

declare class SettingsSnippetsService {
    /**
     * Create Snippet
     * Settingsにスニペットを作成
     * @returns CharacterBehaviorSnippetResponse Successful Response
     * @throws ApiError
     */
    static createSnippetApiV1SettingsSettingsIdSnippetsPost({ settingsId, requestBody, }: {
        settingsId: string;
        requestBody: SnippetCreateRequest;
    }): CancelablePromise<CharacterBehaviorSnippetResponse>;
    /**
     * List Snippets
     * Settingsの全スニペットを取得
     * @returns CharacterBehaviorSnippetListResponse Successful Response
     * @throws ApiError
     */
    static listSnippetsApiV1SettingsSettingsIdSnippetsGet({ settingsId, limit, cursor, }: {
        settingsId: string;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル（オフセット値）
         */
        cursor?: (string | null);
    }): CancelablePromise<CharacterBehaviorSnippetListResponse>;
    /**
     * Delete All Snippets
     * Settingsの全スニペットを一括削除
     * @returns SnippetBulkDeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteAllSnippetsApiV1SettingsSettingsIdSnippetsDelete({ settingsId, }: {
        settingsId: string;
    }): CancelablePromise<SnippetBulkDeleteResponse>;
    /**
     * Get Snippet
     * 特定のスニペットを取得
     * @returns CharacterBehaviorSnippetResponse Successful Response
     * @throws ApiError
     */
    static getSnippetApiV1SettingsSettingsIdSnippetsSnippetIdGet({ settingsId, snippetId, }: {
        settingsId: string;
        snippetId: string;
    }): CancelablePromise<CharacterBehaviorSnippetResponse>;
    /**
     * Update Snippet
     * スニペットを更新
     * @returns CharacterBehaviorSnippetResponse Successful Response
     * @throws ApiError
     */
    static updateSnippetApiV1SettingsSettingsIdSnippetsSnippetIdPatch({ settingsId, snippetId, requestBody, }: {
        settingsId: string;
        snippetId: string;
        requestBody: SnippetUpdateRequest;
    }): CancelablePromise<CharacterBehaviorSnippetResponse>;
    /**
     * Delete Snippet
     * スニペットを削除
     * @returns void
     * @throws ApiError
     */
    static deleteSnippetApiV1SettingsSettingsIdSnippetsSnippetIdDelete({ settingsId, snippetId, }: {
        settingsId: string;
        snippetId: string;
    }): CancelablePromise<void>;
    /**
     * Generate Snippets
     * SettingsContentからBehaviorSnippetをLLM生成
     *
     * - save=false（デフォルト）: 生成結果を返すのみ
     * - save=true: 生成結果をサブコレクションに保存
     * @returns SnippetGenerateResponse Successful Response
     * @throws ApiError
     */
    static generateSnippetsApiV1SettingsSettingsIdSnippetsGeneratePost({ settingsId, requestBody, save, }: {
        settingsId: string;
        requestBody: SnippetGenerateRequest;
        /**
         * 生成結果をDBに保存するか（デフォルト: false）
         */
        save?: boolean;
    }): CancelablePromise<SnippetGenerateResponse>;
    /**
     * Regenerate Snippets
     * 既存スニペットを修正指示に基づいてLLMで再生成
     *
     * - save=false（デフォルト）: 再生成結果を返すのみ
     * - save=true: 再生成結果をサブコレクションに保存
     * @returns SnippetGenerateResponse Successful Response
     * @throws ApiError
     */
    static regenerateSnippetsApiV1SettingsSettingsIdSnippetsRegeneratePost({ settingsId, requestBody, save, }: {
        settingsId: string;
        requestBody: SnippetRegenerateRequest;
        /**
         * 生成結果をDBに保存するか（デフォルト: false）
         */
        save?: boolean;
    }): CancelablePromise<SnippetGenerateResponse>;
}

declare class SettingsSnippetsClientService {
    /**
     * Generate Snippets From Input
     * Client-input版: テキスト入力からBehaviorSnippetをLLM生成（保存なし）
     *
     * settings_content にJSON文字列またはテキストを渡して、スニペットを生成。
     * @returns SnippetGenerateResponse Successful Response
     * @throws ApiError
     */
    static generateSnippetsFromInputApiV1SettingsSnippetsGeneratePost({ requestBody, }: {
        requestBody: SnippetGenerateFromInputRequest;
    }): CancelablePromise<SnippetGenerateResponse>;
    /**
     * Regenerate Snippets From Input
     * Client-input版: テキスト入力から既存スニペットをLLMで再生成（保存なし）
     *
     * settings_content と existing_snippets をJSON文字列またはテキストで渡し、
     * modification_instruction で修正指示を与える。
     * @returns SnippetGenerateResponse Successful Response
     * @throws ApiError
     */
    static regenerateSnippetsFromInputApiV1SettingsSnippetsRegeneratePost({ requestBody, }: {
        requestBody: SnippetRegenerateFromInputRequest;
    }): CancelablePromise<SnippetGenerateResponse>;
}

declare class StateService {
    /**
     * Create Scene Details
     * シーン詳細を作成
     * @returns CharacterSceneDetailsResponse Successful Response
     * @throws ApiError
     */
    static createSceneDetailsApiV1CharactersCharacterIdStateScenePost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterSceneDetailsCreateRequest;
    }): CancelablePromise<CharacterSceneDetailsResponse>;
    /**
     * Get Scene Details
     * シーン詳細を取得
     * @returns CharacterSceneDetailsResponse Successful Response
     * @throws ApiError
     */
    static getSceneDetailsApiV1CharactersCharacterIdStateSceneGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterSceneDetailsResponse>;
    /**
     * Update Scene Details
     * シーン詳細を更新
     * @returns CharacterSceneDetailsResponse Successful Response
     * @throws ApiError
     */
    static updateSceneDetailsApiV1CharactersCharacterIdStateScenePatch({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterSceneDetailsUpdateRequest;
    }): CancelablePromise<CharacterSceneDetailsResponse>;
    /**
     * Delete Scene Details
     * シーン詳細を削除
     * @returns void
     * @throws ApiError
     */
    static deleteSceneDetailsApiV1CharactersCharacterIdStateSceneDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
    /**
     * Create Turn State
     * ターン状態を作成
     * @returns CharacterTurnStateResponse Successful Response
     * @throws ApiError
     */
    static createTurnStateApiV1CharactersCharacterIdStateTurnPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterTurnStateCreateRequest;
    }): CancelablePromise<CharacterTurnStateResponse>;
    /**
     * Get Turn State
     * ターン状態を取得
     * @returns CharacterTurnStateResponse Successful Response
     * @throws ApiError
     */
    static getTurnStateApiV1CharactersCharacterIdStateTurnGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterTurnStateResponse>;
    /**
     * Update Turn State
     * ターン状態を更新
     * @returns CharacterTurnStateResponse Successful Response
     * @throws ApiError
     */
    static updateTurnStateApiV1CharactersCharacterIdStateTurnPatch({ characterId, requestBody, }: {
        characterId: string;
        requestBody: CharacterTurnStateUpdateRequest;
    }): CancelablePromise<CharacterTurnStateResponse>;
    /**
     * Delete Turn State
     * ターン状態を削除
     * @returns void
     * @throws ApiError
     */
    static deleteTurnStateApiV1CharactersCharacterIdStateTurnDelete({ characterId, }: {
        characterId: string;
    }): CancelablePromise<void>;
    /**
     * Get Character State
     * キャラクターの全状態を取得
     * @returns CharacterStateResponse Successful Response
     * @throws ApiError
     */
    static getCharacterStateApiV1CharactersCharacterIdStateGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<CharacterStateResponse>;
}

declare class StoriesService {
    /**
     * Create Story
     * ストーリーを作成
     * @returns StoryResponse Successful Response
     * @throws ApiError
     */
    static createStoryApiV1StoriesPost({ requestBody, }: {
        requestBody: StoryCreateRequest;
    }): CancelablePromise<StoryResponse>;
    /**
     * List Stories
     * ストーリー一覧を取得
     * @returns StoryListResponse Successful Response
     * @throws ApiError
     */
    static listStoriesApiV1StoriesGet({ filterByOwner, publishScope, maxAiLevel, limit, cursor, }: {
        /**
         * 現在のユーザーが所有するストーリーでフィルタ
         */
        filterByOwner?: boolean;
        /**
         * 公開範囲でフィルタ (public, unlisted, private)
         */
        publishScope?: (PublishScope | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<StoryListResponse>;
    /**
     * Batch Get Stories
     * 複数のストーリーを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetStoriesApiV1StoriesBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Story
     * ストーリーを取得
     * @returns StoryResponse Successful Response
     * @throws ApiError
     */
    static getStoryApiV1StoriesStoryIdGet({ storyId, }: {
        storyId: string;
    }): CancelablePromise<StoryResponse>;
    /**
     * Update Story
     * ストーリーを更新
     * @returns StoryResponse Successful Response
     * @throws ApiError
     */
    static updateStoryApiV1StoriesStoryIdPatch({ storyId, requestBody, }: {
        storyId: string;
        requestBody: StoryUpdateRequest;
    }): CancelablePromise<StoryResponse>;
    /**
     * Delete Story
     * ストーリーを削除
     * @returns StoryDeleteResponse Successful Response
     * @throws ApiError
     */
    static deleteStoryApiV1StoriesStoryIdDelete({ storyId, deleteChildren, }: {
        storyId: string;
        /**
         * 関連するシーン・リンクも削除
         */
        deleteChildren?: boolean;
    }): CancelablePromise<StoryDeleteResponse>;
    /**
     * Get Story With Children
     * ストーリーとその子要素（シーン・リンク）を一括取得
     * @returns StoryWithChildrenResponse Successful Response
     * @throws ApiError
     */
    static getStoryWithChildrenApiV1StoriesStoryIdWithChildrenGet({ storyId, }: {
        storyId: string;
    }): CancelablePromise<StoryWithChildrenResponse>;
    /**
     * Duplicate Story
     * ストーリーを複製（シーン・リンクも含む）
     * @returns StoryDuplicateResponse Successful Response
     * @throws ApiError
     */
    static duplicateStoryApiV1StoriesStoryIdDuplicatePost({ storyId, newStoryId, }: {
        storyId: string;
        /**
         * 新しいストーリーID（省略時は自動生成）
         */
        newStoryId?: (string | null);
    }): CancelablePromise<StoryDuplicateResponse>;
    /**
     * Suggest Story Ai Usage
     * ストーリーの参照アセットからAI使用レベルをサジェスト
     * @returns StoryAiUsage Successful Response
     * @throws ApiError
     */
    static suggestStoryAiUsageApiV1StoriesStoryIdSuggestAiUsagePost({ storyId, }: {
        storyId: string;
    }): CancelablePromise<StoryAiUsage>;
    /**
     * Create Scene
     * シーンを作成
     * @returns StorySceneResponse Successful Response
     * @throws ApiError
     */
    static createSceneApiV1StoriesStoryIdScenesPost({ storyId, requestBody, }: {
        storyId: string;
        requestBody: StorySceneCreateRequest;
    }): CancelablePromise<StorySceneResponse>;
    /**
     * List Scenes
     * ストーリーのシーン一覧を取得
     * @returns StorySceneListResponse Successful Response
     * @throws ApiError
     */
    static listScenesApiV1StoriesStoryIdScenesGet({ storyId, limit, cursor, }: {
        storyId: string;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<StorySceneListResponse>;
    /**
     * Get Scene
     * シーンを取得
     * @returns StorySceneResponse Successful Response
     * @throws ApiError
     */
    static getSceneApiV1StoriesStoryIdScenesSceneIdGet({ storyId, sceneId, }: {
        storyId: string;
        sceneId: string;
    }): CancelablePromise<StorySceneResponse>;
    /**
     * Update Scene
     * シーンを更新
     * @returns StorySceneResponse Successful Response
     * @throws ApiError
     */
    static updateSceneApiV1StoriesStoryIdScenesSceneIdPatch({ storyId, sceneId, requestBody, }: {
        storyId: string;
        sceneId: string;
        requestBody: StorySceneUpdateRequest;
    }): CancelablePromise<StorySceneResponse>;
    /**
     * Delete Scene
     * シーンを削除
     * @returns void
     * @throws ApiError
     */
    static deleteSceneApiV1StoriesStoryIdScenesSceneIdDelete({ storyId, sceneId, }: {
        storyId: string;
        sceneId: string;
    }): CancelablePromise<void>;
    /**
     * Create Scene Link
     * シーンリンクを作成
     * @returns StorySceneLinkResponse Successful Response
     * @throws ApiError
     */
    static createSceneLinkApiV1StoriesStoryIdSceneLinksPost({ storyId, requestBody, }: {
        storyId: string;
        requestBody: StorySceneLinkCreateRequest;
    }): CancelablePromise<StorySceneLinkResponse>;
    /**
     * List Scene Links
     * ストーリーのシーンリンク一覧を取得
     * @returns StorySceneLinkListResponse Successful Response
     * @throws ApiError
     */
    static listSceneLinksApiV1StoriesStoryIdSceneLinksGet({ storyId, limit, cursor, }: {
        storyId: string;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<StorySceneLinkListResponse>;
    /**
     * Get Scene Link
     * シーンリンクを取得
     * @returns StorySceneLinkResponse Successful Response
     * @throws ApiError
     */
    static getSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdGet({ storyId, linkId, }: {
        storyId: string;
        linkId: string;
    }): CancelablePromise<StorySceneLinkResponse>;
    /**
     * Update Scene Link
     * シーンリンクを更新
     * @returns StorySceneLinkResponse Successful Response
     * @throws ApiError
     */
    static updateSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdPatch({ storyId, linkId, requestBody, }: {
        storyId: string;
        linkId: string;
        requestBody: StorySceneLinkUpdateRequest;
    }): CancelablePromise<StorySceneLinkResponse>;
    /**
     * Delete Scene Link
     * シーンリンクを削除
     * @returns void
     * @throws ApiError
     */
    static deleteSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdDelete({ storyId, linkId, }: {
        storyId: string;
        linkId: string;
    }): CancelablePromise<void>;
    /**
     * Get Outgoing Links
     * 指定シーンから出発するリンク一覧を取得
     * @returns StorySceneLinkListResponse Successful Response
     * @throws ApiError
     */
    static getOutgoingLinksApiV1StoriesStoryIdScenesSceneIdOutgoingLinksGet({ storyId, sceneId, }: {
        storyId: string;
        sceneId: string;
    }): CancelablePromise<StorySceneLinkListResponse>;
}

declare class StoryInstancesService {
    /**
     * Create Story Instance
     * @returns StoryInstanceResponse Successful Response
     * @throws ApiError
     */
    static createStoryInstanceApiV1MarketplaceStoryInstancesPost({ requestBody, }: {
        requestBody: StoryInstanceCreateRequest;
    }): CancelablePromise<StoryInstanceResponse>;
    /**
     * List Story Instances
     * @returns StoryInstanceListResponse Successful Response
     * @throws ApiError
     */
    static listStoryInstancesApiV1MarketplaceStoryInstancesGet({ limit, cursor, }: {
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<StoryInstanceListResponse>;
    /**
     * Get Story Instance
     * @returns StoryInstanceResponse Successful Response
     * @throws ApiError
     */
    static getStoryInstanceApiV1MarketplaceStoryInstancesInstanceIdGet({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<StoryInstanceResponse>;
    /**
     * Delete Story Instance
     * @returns void
     * @throws ApiError
     */
    static deleteStoryInstanceApiV1MarketplaceStoryInstancesInstanceIdDelete({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<void>;
    /**
     * Update Story Instance To Latest
     * @returns StoryInstanceResponse Successful Response
     * @throws ApiError
     */
    static updateStoryInstanceToLatestApiV1MarketplaceStoryInstancesInstanceIdUpdatePost({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<StoryInstanceResponse>;
    /**
     * Fork Story Instance
     * @returns any Successful Response
     * @throws ApiError
     */
    static forkStoryInstanceApiV1MarketplaceStoryInstancesInstanceIdForkPost({ instanceId, }: {
        instanceId: string;
    }): CancelablePromise<any>;
}

declare class StoryTemplatesService {
    /**
     * Promote Story To Template
     * @returns StoryTemplateResponse Successful Response
     * @throws ApiError
     */
    static promoteStoryToTemplateApiV1MarketplaceStoryTemplatesPost({ requestBody, }: {
        requestBody: StoryTemplatePromoteRequest;
    }): CancelablePromise<StoryTemplateResponse>;
    /**
     * List Story Templates
     * @returns StoryTemplateListResponse Successful Response
     * @throws ApiError
     */
    static listStoryTemplatesApiV1MarketplaceStoryTemplatesGet({ sourceEntityId, limit, cursor, }: {
        /**
         * 元エンティティIDで絞り込み
         */
        sourceEntityId?: (string | null);
        limit?: number;
        cursor?: (string | null);
    }): CancelablePromise<StoryTemplateListResponse>;
    /**
     * Get Story Template
     * @returns StoryTemplateResponse Successful Response
     * @throws ApiError
     */
    static getStoryTemplateApiV1MarketplaceStoryTemplatesTemplateIdGet({ templateId, }: {
        templateId: string;
    }): CancelablePromise<StoryTemplateResponse>;
    /**
     * Update Story Template
     * @returns StoryTemplateResponse Successful Response
     * @throws ApiError
     */
    static updateStoryTemplateApiV1MarketplaceStoryTemplatesTemplateIdPatch({ templateId, requestBody, }: {
        templateId: string;
        requestBody: StoryTemplateUpdateRequest;
    }): CancelablePromise<StoryTemplateResponse>;
    /**
     * Delete Story Template
     * @returns void
     * @throws ApiError
     */
    static deleteStoryTemplateApiV1MarketplaceStoryTemplatesTemplateIdDelete({ templateId, }: {
        templateId: string;
    }): CancelablePromise<void>;
    /**
     * Fork Story Template
     * @returns any Successful Response
     * @throws ApiError
     */
    static forkStoryTemplateApiV1MarketplaceStoryTemplatesTemplateIdForkPost({ templateId, }: {
        templateId: string;
    }): CancelablePromise<any>;
    /**
     * Get Template Subcollection
     * @returns any Successful Response
     * @throws ApiError
     */
    static getTemplateSubcollectionApiV1MarketplaceStoryTemplatesTemplateIdSubcollectionsSubcollectionNameGet({ templateId, subcollectionName, }: {
        templateId: string;
        subcollectionName: string;
    }): CancelablePromise<any>;
}

declare class TagsService {
    /**
     * Search Tags
     * タグを検索
     * @returns TagSearchResultResponse Successful Response
     * @throws ApiError
     */
    static searchTagsApiV1TagsSearchTagsGet({ query, locale, categoryId, limit, fallback, }: {
        /**
         * 検索クエリ
         */
        query: string;
        /**
         * 検索ロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * カテゴリIDでフィルタ
         */
        categoryId?: (string | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * フォールバック有効
         */
        fallback?: boolean;
    }): CancelablePromise<TagSearchResultResponse>;
    /**
     * Get Taxonomy
     * カテゴリと配下を一括取得
     * @returns TaxonomyResponse Successful Response
     * @throws ApiError
     */
    static getTaxonomyApiV1TagsTaxonomyTagCategoryIdGet({ tagCategoryId, locale, fallback, depth, }: {
        tagCategoryId: string;
        /**
         * ロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * フォールバック有効
         */
        fallback?: boolean;
        /**
         * 深さ（-1で無制限）
         */
        depth?: number;
    }): CancelablePromise<TaxonomyResponse>;
    /**
     * Create Tag Category
     * カテゴリを作成
     * @returns TagCategoryResponse Successful Response
     * @throws ApiError
     */
    static createTagCategoryApiV1TagsTagCategoriesPost({ requestBody, }: {
        requestBody: TagCategoryCreateRequest;
    }): CancelablePromise<TagCategoryResponse>;
    /**
     * List Tag Categories
     * カテゴリ一覧を取得
     * @returns TagCategoryListCursorResponse Successful Response
     * @throws ApiError
     */
    static listTagCategoriesApiV1TagsTagCategoriesGet({ parentId, locale, fallback, limit, cursor, }: {
        /**
         * 親カテゴリIDでフィルタ
         */
        parentId?: (string | null);
        /**
         * ロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * フォールバック有効
         */
        fallback?: boolean;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<TagCategoryListCursorResponse>;
    /**
     * Batch Get Tag Categories
     * 複数のタグカテゴリを一括取得
     * @returns BatchResponse_TagCategoryResponse_ Successful Response
     * @throws ApiError
     */
    static batchGetTagCategoriesApiV1TagsTagCategoriesBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<BatchResponse_TagCategoryResponse_>;
    /**
     * Get Tag Category
     * カテゴリを取得
     * @returns TagCategoryWithLocaleResponse Successful Response
     * @throws ApiError
     */
    static getTagCategoryApiV1TagsTagCategoriesTagCategoryIdGet({ tagCategoryId, locale, fallback, }: {
        tagCategoryId: string;
        /**
         * ロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * フォールバック有効
         */
        fallback?: boolean;
    }): CancelablePromise<TagCategoryWithLocaleResponse>;
    /**
     * Update Tag Category
     * カテゴリを部分更新
     * @returns TagCategoryResponse Successful Response
     * @throws ApiError
     */
    static updateTagCategoryApiV1TagsTagCategoriesTagCategoryIdPatch({ tagCategoryId, requestBody, }: {
        tagCategoryId: string;
        requestBody: Record<string, any>;
    }): CancelablePromise<TagCategoryResponse>;
    /**
     * Delete Tag Category
     * カテゴリを削除
     * @returns void
     * @throws ApiError
     */
    static deleteTagCategoryApiV1TagsTagCategoriesTagCategoryIdDelete({ tagCategoryId, }: {
        tagCategoryId: string;
    }): CancelablePromise<void>;
    /**
     * Create Tag
     * タグを作成
     * @returns TagResponse Successful Response
     * @throws ApiError
     */
    static createTagApiV1TagsTagsPost({ requestBody, }: {
        requestBody: TagCreateRequest;
    }): CancelablePromise<TagResponse>;
    /**
     * List Tags
     * タグ一覧を取得
     * @returns TagListCursorResponse Successful Response
     * @throws ApiError
     */
    static listTagsApiV1TagsTagsGet({ locale, fallback, limit, cursor, }: {
        /**
         * ロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * フォールバック有効
         */
        fallback?: boolean;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<TagListCursorResponse>;
    /**
     * Batch Get Tags
     * 複数のタグを一括取得
     * @returns BatchResponse_TagResponse_ Successful Response
     * @throws ApiError
     */
    static batchGetTagsApiV1TagsTagsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<BatchResponse_TagResponse_>;
    /**
     * Get Tag Categories
     * タグが属するカテゴリ一覧
     * @returns TagCategoriesForTagResponse Successful Response
     * @throws ApiError
     */
    static getTagCategoriesApiV1TagsTagsTagIdCategoriesGet({ tagId, locale, fallback, }: {
        tagId: string;
        /**
         * ロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * フォールバック有効
         */
        fallback?: boolean;
    }): CancelablePromise<TagCategoriesForTagResponse>;
    /**
     * Get Similar Tags
     * 類似タグを取得
     * @returns SimilarTagsResponse Successful Response
     * @throws ApiError
     */
    static getSimilarTagsApiV1TagsTagsTagIdSimilarGet({ tagId, locale, withinCategoryId, limit, fallback, }: {
        tagId: string;
        /**
         * ロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * カテゴリ内に限定
         */
        withinCategoryId?: (string | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * フォールバック有効
         */
        fallback?: boolean;
    }): CancelablePromise<SimilarTagsResponse>;
    /**
     * Get Tag
     * タグを取得
     * @returns TagWithLocaleResponse Successful Response
     * @throws ApiError
     */
    static getTagApiV1TagsTagsTagIdGet({ tagId, locale, fallback, }: {
        tagId: string;
        /**
         * ロケール
         */
        locale?: SupportedLanguage$1;
        /**
         * フォールバック有効
         */
        fallback?: boolean;
    }): CancelablePromise<TagWithLocaleResponse>;
    /**
     * Update Tag
     * タグを部分更新
     * @returns TagResponse Successful Response
     * @throws ApiError
     */
    static updateTagApiV1TagsTagsTagIdPatch({ tagId, requestBody, }: {
        tagId: string;
        requestBody: Record<string, any>;
    }): CancelablePromise<TagResponse>;
    /**
     * Delete Tag
     * タグを削除
     * @returns void
     * @throws ApiError
     */
    static deleteTagApiV1TagsTagsTagIdDelete({ tagId, }: {
        tagId: string;
    }): CancelablePromise<void>;
    /**
     * Create Link
     * リンクを作成/更新
     * @returns TagCategoryLinkResponse Successful Response
     * @throws ApiError
     */
    static createLinkApiV1TagsLinksPost({ requestBody, }: {
        requestBody: TagCategoryLinkCreateRequest;
    }): CancelablePromise<TagCategoryLinkResponse>;
    /**
     * Get Links
     * リンクを取得
     * @returns LinkListCursorResponse Successful Response
     * @throws ApiError
     */
    static getLinksApiV1TagsLinksGet({ tagCategoryId, tagId, limit, cursor, }: {
        /**
         * カテゴリIDでフィルタ
         */
        tagCategoryId?: (string | null);
        /**
         * タグIDでフィルタ
         */
        tagId?: (string | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<LinkListCursorResponse>;
    /**
     * Reorder Links
     * カテゴリ内のタグ並び替え
     * @returns ReorderResultResponse Successful Response
     * @throws ApiError
     */
    static reorderLinksApiV1TagsLinksReorderPatch({ requestBody, }: {
        requestBody: ReorderRequest;
    }): CancelablePromise<ReorderResultResponse>;
    /**
     * Bulk Upsert Links
     * リンクを一括作成/更新
     * @returns BulkUpsertResultResponse Successful Response
     * @throws ApiError
     */
    static bulkUpsertLinksApiV1TagsLinksBulkUpsertPost({ requestBody, upsert, }: {
        requestBody: BulkUpsertRequest;
        /**
         * upsertモード
         */
        upsert?: boolean;
    }): CancelablePromise<BulkUpsertResultResponse>;
    /**
     * Delete Link
     * リンクを削除
     * @returns void
     * @throws ApiError
     */
    static deleteLinkApiV1TagsLinksLinkKeyDelete({ linkKey, }: {
        linkKey: string;
    }): CancelablePromise<void>;
    /**
     * Create Compatibility
     * 相性を作成/更新
     * @returns TagCompatibilityResponse Successful Response
     * @throws ApiError
     */
    static createCompatibilityApiV1TagsCompatibilitiesPost({ requestBody, }: {
        requestBody: TagCompatibilityCreateRequest;
    }): CancelablePromise<TagCompatibilityResponse>;
    /**
     * List Compatibilities
     * カテゴリペアで相性一覧を取得
     * @returns CompatibilityListCursorResponse Successful Response
     * @throws ApiError
     */
    static listCompatibilitiesApiV1TagsCompatibilitiesGet({ leftCategoryId, rightCategoryId, limit, cursor, }: {
        /**
         * 左カテゴリID
         */
        leftCategoryId: string;
        /**
         * 右カテゴリID
         */
        rightCategoryId: string;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<CompatibilityListCursorResponse>;
    /**
     * Generate And Save Compatibilities
     * カテゴリペアの全組み合わせで相性を生成・保存
     * @returns GenerateCompatibilityResultResponse Successful Response
     * @throws ApiError
     */
    static generateAndSaveCompatibilitiesApiV1TagsCompatibilitiesGenerateAndSavePost({ requestBody, }: {
        requestBody: GenerateCompatibilityRequest;
    }): CancelablePromise<GenerateCompatibilityResultResponse>;
    /**
     * Get Compatibility
     * 相性を取得
     * @returns TagCompatibilityResponse Successful Response
     * @throws ApiError
     */
    static getCompatibilityApiV1TagsCompatibilitiesPairKeyGet({ pairKey, }: {
        pairKey: string;
    }): CancelablePromise<TagCompatibilityResponse>;
    /**
     * Delete Compatibility
     * 相性を削除
     * @returns void
     * @throws ApiError
     */
    static deleteCompatibilityApiV1TagsCompatibilitiesPairKeyDelete({ pairKey, }: {
        pairKey: string;
    }): CancelablePromise<void>;
}

declare class ToolDefinitionsService {
    /**
     * Create Tool Definition
     * @returns ToolDefinitionResponse Successful Response
     * @throws ApiError
     */
    static createToolDefinitionApiV1CharactersCharacterIdToolDefinitionsPost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: ToolDefinitionCreateRequest;
    }): CancelablePromise<ToolDefinitionResponse>;
    /**
     * List Tool Definitions
     * @returns ToolDefinitionListResponse Successful Response
     * @throws ApiError
     */
    static listToolDefinitionsApiV1CharactersCharacterIdToolDefinitionsGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<ToolDefinitionListResponse>;
    /**
     * Get Tool Definition
     * @returns ToolDefinitionResponse Successful Response
     * @throws ApiError
     */
    static getToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdGet({ characterId, toolDefinitionId, }: {
        characterId: string;
        toolDefinitionId: string;
    }): CancelablePromise<ToolDefinitionResponse>;
    /**
     * Update Tool Definition
     * @returns ToolDefinitionResponse Successful Response
     * @throws ApiError
     */
    static updateToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdPatch({ characterId, toolDefinitionId, requestBody, }: {
        characterId: string;
        toolDefinitionId: string;
        requestBody: ToolDefinitionUpdateRequest;
    }): CancelablePromise<ToolDefinitionResponse>;
    /**
     * Delete Tool Definition
     * @returns void
     * @throws ApiError
     */
    static deleteToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdDelete({ characterId, toolDefinitionId, }: {
        characterId: string;
        toolDefinitionId: string;
    }): CancelablePromise<void>;
    /**
     * Reset Tool Definitions
     * 全ツール定義を削除してデフォルトに戻す。
     * @returns ToolDefinitionListResponse Successful Response
     * @throws ApiError
     */
    static resetToolDefinitionsApiV1CharactersCharacterIdToolDefinitionsResetDefaultsPost({ characterId, }: {
        characterId: string;
    }): CancelablePromise<ToolDefinitionListResponse>;
}

declare class TtsService {
    /**
     * Get Models Details
     * @returns any Successful Response
     * @throws ApiError
     */
    static getModelsDetailsApiV1TtsModelsDetailsGet(): CancelablePromise<any>;
    /**
     * Generate Speech
     * @returns any Successful Response
     * @throws ApiError
     */
    static generateSpeechApiV1TtsGeneratePost({ requestBody, }: {
        requestBody: TTSRequest;
    }): CancelablePromise<any>;
}

declare class TurnEndPredictionService {
    /**
     * Predict Turn End
     * @returns TurnEndPredictionResponse Successful Response
     * @throws ApiError
     */
    static predictTurnEndTurnEndPredictionPredictPost({ requestBody, }: {
        requestBody: TurnEndPredictionRequest;
    }): CancelablePromise<TurnEndPredictionResponse>;
    /**
     * Health Check
     * @returns any Successful Response
     * @throws ApiError
     */
    static healthCheckTurnEndPredictionHealthGet(): CancelablePromise<any>;
}

declare class UnifiedLlmWrapperService {
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
    static createChatCompletionApiV1LlmChatCompletionsPost({ requestBody, }: {
        requestBody: UnifiedChatCompletionRequest;
    }): CancelablePromise<any>;
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
    static createStructuredCompletionApiV1LlmStructuredCompletionsPost({ requestBody, }: {
        requestBody: UnifiedStructuredCompletionRequest;
    }): CancelablePromise<any>;
    /**
     * List Models
     * 利用可能なモデル一覧を返す（2025年最新版）
     * @returns any Successful Response
     * @throws ApiError
     */
    static listModelsApiV1LlmModelsGet(): CancelablePromise<any>;
}

declare class UsageSummaryService {
    /**
     * Get Usage Summary
     * @returns UsageSummaryResponse Successful Response
     * @throws ApiError
     */
    static getUsageSummaryApiV1CharactersCharacterIdUsageSummaryGet({ characterId, }: {
        characterId: string;
    }): CancelablePromise<UsageSummaryResponse>;
    /**
     * Accumulate Usage
     * @returns UsageSummaryResponse Successful Response
     * @throws ApiError
     */
    static accumulateUsageApiV1CharactersCharacterIdUsageSummaryAccumulatePost({ characterId, requestBody, }: {
        characterId: string;
        requestBody: UsageSummaryAccumulateRequest;
    }): CancelablePromise<UsageSummaryResponse>;
}

declare class UsersService {
    /**
     * Get User
     * @returns UserResponse Successful Response
     * @throws ApiError
     */
    static getUserApiV1UsersGet(): CancelablePromise<UserResponse>;
    /**
     * Create User
     * @returns UserResponse Successful Response
     * @throws ApiError
     */
    static createUserApiV1UsersPost({ requestBody, }: {
        requestBody: UserCreateRequest;
    }): CancelablePromise<UserResponse>;
    /**
     * Delete User
     * @returns void
     * @throws ApiError
     */
    static deleteUserApiV1UsersDelete(): CancelablePromise<void>;
    /**
     * Update User
     * @returns UserResponse Successful Response
     * @throws ApiError
     */
    static updateUserApiV1UsersPatch({ requestBody, }: {
        requestBody: UserUpdateRequest;
    }): CancelablePromise<UserResponse>;
    /**
     * Batch Get Users
     * 複数のユーザーを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetUsersApiV1UsersBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
}

declare class VideoAssetsService {
    /**
     * Create Video Asset
     * 動画アセットを作成
     *
     * ファイルアップロードと全メタデータを含む。
     * 複雑なデータ構造はJSON文字列で渡す。
     * @returns VideoAssetWithVersionResponse Successful Response
     * @throws ApiError
     */
    static createVideoAssetApiV1VideoAssetsPost({ formData, }: {
        formData: Body_create_video_asset_api_v1_video_assets_post;
    }): CancelablePromise<VideoAssetWithVersionResponse>;
    /**
     * Batch Get Video Assets
     * 複数のビデオアセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetVideoAssetsApiV1VideoAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Search Video Assets
     * Search video assets using field-based filters
     * @returns VideoAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchVideoAssetsApiV1VideoAssetsSearchGet({ role, maxDuration, durationRange, title, ownerId, tagIds, minLevel, artistName, resolutionRange, hasAudio, maxAiLevel, limit, cursor, }: {
        role?: (AssetRole | null);
        maxDuration?: (number | null);
        durationRange?: (string | null);
        title?: (string | null);
        ownerId?: (string | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        artistName?: (string | null);
        resolutionRange?: (string | null);
        hasAudio?: (boolean | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<VideoAssetListResponse>;
    /**
     * Get Video Asset
     * 動画アセットを取得
     * @returns VideoAssetResponse Successful Response
     * @throws ApiError
     */
    static getVideoAssetApiV1VideoAssetsVideoIdGet({ videoId, }: {
        videoId: string;
    }): CancelablePromise<VideoAssetResponse>;
    /**
     * Update Video Asset
     * 動画アセットのメタデータを更新（オーナーのみ）
     * @returns VideoAssetResponse Successful Response
     * @throws ApiError
     */
    static updateVideoAssetApiV1VideoAssetsVideoIdPatch({ videoId, requestBody, }: {
        videoId: string;
        requestBody: VideoAssetUpdateRequest;
    }): CancelablePromise<VideoAssetResponse>;
    /**
     * Delete Video Asset
     * 動画アセットを削除（オーナーのみ）
     * @returns void
     * @throws ApiError
     */
    static deleteVideoAssetApiV1VideoAssetsVideoIdDelete({ videoId, }: {
        videoId: string;
    }): CancelablePromise<void>;
    /**
     * List Video Asset Versions
     * 動画アセットのバージョン一覧を取得
     * @returns VideoAssetVersionListResponse Successful Response
     * @throws ApiError
     */
    static listVideoAssetVersionsApiV1VideoAssetsVideoIdVersionsGet({ videoId, }: {
        videoId: string;
    }): CancelablePromise<VideoAssetVersionListResponse>;
    /**
     * Add Video Asset Version
     * 動画アセットに新しいバージョンを追加
     * @returns VideoAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static addVideoAssetVersionApiV1VideoAssetsVideoIdVersionsPost({ videoId, formData, }: {
        videoId: string;
        formData: Body_add_video_asset_version_api_v1_video_assets__video_id__versions_post;
    }): CancelablePromise<VideoAssetVersionResponse>;
    /**
     * Get Latest Video Version
     * 動画アセットの最新バージョンを取得
     * @returns VideoAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getLatestVideoVersionApiV1VideoAssetsVideoIdVersionsLatestGet({ videoId, }: {
        videoId: string;
    }): CancelablePromise<VideoAssetVersionResponse>;
    /**
     * Get Video Asset Version
     * 動画アセットの特定バージョンを取得
     * @returns VideoAssetVersionResponse Successful Response
     * @throws ApiError
     */
    static getVideoAssetVersionApiV1VideoAssetsVideoIdVersionsVersionIdGet({ videoId, versionId, }: {
        videoId: string;
        versionId: string;
    }): CancelablePromise<VideoAssetVersionResponse>;
    /**
     * Delete Video Asset Version
     * 動画アセットの特定バージョンを削除
     * @returns void
     * @throws ApiError
     */
    static deleteVideoAssetVersionApiV1VideoAssetsVideoIdVersionsVersionIdDelete({ videoId, versionId, }: {
        videoId: string;
        versionId: string;
    }): CancelablePromise<void>;
    /**
     * Get Video Assets By Role
     * ロール別に動画アセットを取得
     * @returns VideoAssetListResponse Successful Response
     * @throws ApiError
     */
    static getVideoAssetsByRoleApiV1VideoAssetsRoleRoleGet({ role, limit, cursor, }: {
        role: AssetRole;
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<VideoAssetListResponse>;
}

declare class VoicesService {
    /**
     * Create Voice
     * 音声モデルを作成
     * @returns VoiceResponse Successful Response
     * @throws ApiError
     */
    static createVoiceApiV1VoicesPost({ requestBody, }: {
        requestBody: VoiceCreateRequest;
    }): CancelablePromise<VoiceResponse>;
    /**
     * List Voices
     * 音声モデル一覧を取得
     * @returns VoiceListResponse Successful Response
     * @throws ApiError
     */
    static listVoicesApiV1VoicesGet({ limit, cursor, }: {
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<VoiceListResponse>;
    /**
     * Search Voices
     * 音声モデルを検索
     * @returns VoiceSearchResponse Successful Response
     * @throws ApiError
     */
    static searchVoicesApiV1VoicesSearchGet({ languageCode, gender, ageGroup, provider, publishScope, ownerId, tagIds, minLevel, limit, cursor, }: {
        /**
         * 言語コード
         */
        languageCode?: (SupportedLanguage$1 | null);
        /**
         * 性別
         */
        gender?: (GenderType | null);
        /**
         * 年齢層
         */
        ageGroup?: (AgeGroupType | null);
        /**
         * プロバイダー
         */
        provider?: (VoiceProvider | null);
        /**
         * 公開範囲 (public, unlisted, private)
         */
        publishScope?: (PublishScope | null);
        /**
         * 所有者ID
         */
        ownerId?: (string | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<VoiceSearchResponse>;
    /**
     * Get Voice
     * 音声モデルを取得
     * @returns VoiceResponse Successful Response
     * @throws ApiError
     */
    static getVoiceApiV1VoicesVoiceIdGet({ voiceId, }: {
        voiceId: string;
    }): CancelablePromise<VoiceResponse>;
    /**
     * Update Voice
     * 音声モデルを更新（PATCH - 指定されたフィールドのみ更新）
     * @returns VoiceResponse Successful Response
     * @throws ApiError
     */
    static updateVoiceApiV1VoicesVoiceIdPatch({ voiceId, requestBody, }: {
        voiceId: string;
        requestBody: VoiceUpdateRequest;
    }): CancelablePromise<VoiceResponse>;
    /**
     * Delete Voice
     * 音声モデルを削除
     * @returns void
     * @throws ApiError
     */
    static deleteVoiceApiV1VoicesVoiceIdDelete({ voiceId, }: {
        voiceId: string;
    }): CancelablePromise<void>;
    /**
     * Auto Tag Voice By Id
     * 特定の音声モデルに対して自動タグ付けを実行
     * @returns any Successful Response
     * @throws ApiError
     */
    static autoTagVoiceByIdApiV1VoicesVoiceIdAutoTagPost({ voiceId, }: {
        voiceId: string;
    }): CancelablePromise<Record<string, any>>;
    /**
     * Batch Get Voices
     * 複数の音声モデルを一括取得
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetVoicesApiV1VoicesBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
}

declare class VrmaAssetsService {
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
    static createVrmaAssetApiV1VrmaAssetsPost({ formData, }: {
        formData: Body_create_vrma_asset_api_v1_vrma_assets_post;
    }): CancelablePromise<VRMAAssetWithVersionResponse>;
    /**
     * Search Vrma Assets
     * VRMAアセットを検索
     *
     * 管理者は全件閲覧可。一般ユーザーはPRIVATE/UNLISTED/未審査のアセットは自分のもののみ表示。
     * access_filterを指定すると、そのアクセスレベルに一致するアセットのみ返す。
     * @returns VRMAAssetListResponse Successful Response
     * @throws ApiError
     */
    static searchVrmaAssetsApiV1VrmaAssetsSearchGet({ ownerId, motionId, motionType, emotionId, targetGender, dataSource, tagIds, minLevel, maxAiLevel, isLoopable, hasRootMotion, minDuration, maxDuration, accessFilter, limit, cursor, }: {
        ownerId?: (string | null);
        motionId?: (string | null);
        motionType?: (MotionType | null);
        emotionId?: (string | null);
        targetGender?: (TargetGenderType | null);
        dataSource?: (DataSource | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * ループ可能フィルタ
         */
        isLoopable?: (boolean | null);
        /**
         * Root Motionフィルタ
         */
        hasRootMotion?: (boolean | null);
        /**
         * 最小再生時間（秒）
         */
        minDuration?: (number | null);
        /**
         * 最大再生時間（秒）
         */
        maxDuration?: (number | null);
        /**
         * アクセスレベルでフィルタ（例: full → 使用可能なもののみ）
         */
        accessFilter?: (AssetAccessLevel | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<VRMAAssetListResponse>;
    /**
     * Batch Get Vrma Assets
     * 複数のVRMAアセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetVrmaAssetsApiV1VrmaAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
    /**
     * Get Vrma Asset
     * VRMAアセットの詳細情報を取得
     * @returns VRMAAssetResponse Successful Response
     * @throws ApiError
     */
    static getVrmaAssetApiV1VrmaAssetsVrmaIdGet({ vrmaId, }: {
        vrmaId: string;
    }): CancelablePromise<VRMAAssetResponse>;
    /**
     * Update Vrma Asset
     * VRMAアセットのメタデータを更新（オーナーのみ）
     * @returns VRMAAssetResponse Successful Response
     * @throws ApiError
     */
    static updateVrmaAssetApiV1VrmaAssetsVrmaIdPatch({ vrmaId, requestBody, }: {
        vrmaId: string;
        requestBody: VRMAAssetUpdateRequest;
    }): CancelablePromise<VRMAAssetResponse>;
    /**
     * Delete Vrma Asset
     * VRMAアセットを削除（オーナーのみ）
     * @returns void
     * @throws ApiError
     */
    static deleteVrmaAssetApiV1VrmaAssetsVrmaIdDelete({ vrmaId, }: {
        vrmaId: string;
    }): CancelablePromise<void>;
    /**
     * Get Vrma File Url
     * VRMAファイルのダウンロード用一時URL（Signed URL）を返す
     * @returns SignedUrlResponse Successful Response
     * @throws ApiError
     */
    static getVrmaFileUrlApiV1VrmaAssetsVrmaIdFileGet({ vrmaId, versionId, }: {
        vrmaId: string;
        /**
         * バージョンID（省略時は最新）
         */
        versionId?: (string | null);
    }): CancelablePromise<SignedUrlResponse>;
}

declare class VrmAssetsService {
    /**
     * Create Vrm Asset
     * VRMアセットを作成
     *
     * ファイルアップロードと全メタデータを含む。
     * 複雑なデータ構造はJSON文字列で渡す。
     * @returns VRMAssetResponse Successful Response
     * @throws ApiError
     */
    static createVrmAssetApiV1VrmAssetsPost({ formData, }: {
        formData: Body_create_vrm_asset_api_v1_vrm_assets_post;
    }): CancelablePromise<VRMAssetResponse>;
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
    static searchVrmAssetsApiV1VrmAssetsSearchGet({ ownerId, modelName, artistName, tagIds, minLevel, maxAiLevel, limit, cursor, }: {
        ownerId?: (string | null);
        modelName?: (string | null);
        artistName?: (string | null);
        /**
         * タグIDリスト（AND検索）
         */
        tagIds?: (Array<string> | null);
        /**
         * 最低タグレベル (core, secondary, flavor)
         */
        minLevel?: (TagLevel$1 | null);
        /**
         * AI使用レベルの最大値
         */
        maxAiLevel?: (number | null);
        /**
         * 取得上限数
         */
        limit?: number;
        /**
         * ページネーションカーソル
         */
        cursor?: (string | null);
    }): CancelablePromise<VRMAssetListResponse>;
    /**
     * Batch Get Vrm Assets
     * 複数のVRMアセットを一括取得（アクセス不可は除外）
     * @returns any Successful Response
     * @throws ApiError
     */
    static batchGetVrmAssetsApiV1VrmAssetsBatchPost({ requestBody, }: {
        requestBody: BatchRequest;
    }): CancelablePromise<any>;
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
    static getVrmAssetApiV1VrmAssetsVrmIdGet({ vrmId, }: {
        vrmId: string;
    }): CancelablePromise<VRMAssetResponse>;
    /**
     * Update Vrm Asset
     * VRMアセットのメタデータを更新（オーナーのみ）
     * @returns VRMAssetResponse Successful Response
     * @throws ApiError
     */
    static updateVrmAssetApiV1VrmAssetsVrmIdPatch({ vrmId, requestBody, }: {
        vrmId: string;
        requestBody: VRMAssetUpdateRequest;
    }): CancelablePromise<VRMAssetResponse>;
    /**
     * Delete Vrm Asset
     * VRMアセットを削除（オーナーのみ、参照されている場合は削除不可）
     * @returns void
     * @throws ApiError
     */
    static deleteVrmAssetApiV1VrmAssetsVrmIdDelete({ vrmId, }: {
        vrmId: string;
    }): CancelablePromise<void>;
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
    static getVrmFileUrlApiV1VrmAssetsVrmIdFileGet({ vrmId, }: {
        vrmId: string;
    }): CancelablePromise<SignedUrlResponse>;
    /**
     * Get Vrm Protected File
     * 保護済みVRMファイルのダウンロード情報を返す
     *
     * ファイルはメッシュ難読化 + zstd圧縮 + AES-256-GCM暗号化済み。
     * クライアントは /content-protection/keys/{key_id} から鍵を取得して復号する。
     * @returns ProtectedFileResponse Successful Response
     * @throws ApiError
     */
    static getVrmProtectedFileApiV1VrmAssetsVrmIdProtectedFileGet({ vrmId, }: {
        vrmId: string;
    }): CancelablePromise<ProtectedFileResponse$1>;
}

/**
 * GeneratedApi namespace re-export
 *
 * This wrapper exists to work around a tsup/rollup-plugin-dts bug where
 * type-only exports (string union types like ModelType, MotionType, etc.)
 * become `declare const` instead of `type` when re-exported via `export * as`
 * and a same-named symbol exists at the top-level scope.
 *
 * By using `export type *` for types and explicit named exports for values,
 * we ensure the DTS output correctly treats string union types as types.
 */

type generatedApi_AccessType = AccessType;
type generatedApi_AccessoriesService = AccessoriesService;
declare const generatedApi_AccessoriesService: typeof AccessoriesService;
type generatedApi_AccessoryCategory = AccessoryCategory;
type generatedApi_AccessoryCreateRequest = AccessoryCreateRequest;
type generatedApi_AccessoryListResponse = AccessoryListResponse;
type generatedApi_AccessoryLocalized = AccessoryLocalized;
type generatedApi_AccessoryLocalizedRequest = AccessoryLocalizedRequest;
type generatedApi_AccessoryResponse = AccessoryResponse;
type generatedApi_AccessoryUpdateRequest = AccessoryUpdateRequest;
declare const generatedApi_AcquisitionMethod: typeof AcquisitionMethod;
type generatedApi_AddAliasRequest = AddAliasRequest;
type generatedApi_AdminDbStatsService = AdminDbStatsService;
declare const generatedApi_AdminDbStatsService: typeof AdminDbStatsService;
type generatedApi_AdminFirestoreService = AdminFirestoreService;
declare const generatedApi_AdminFirestoreService: typeof AdminFirestoreService;
type generatedApi_AdminForensicsService = AdminForensicsService;
declare const generatedApi_AdminForensicsService: typeof AdminForensicsService;
type generatedApi_AdminMigrationService = AdminMigrationService;
declare const generatedApi_AdminMigrationService: typeof AdminMigrationService;
type generatedApi_AdminReviewsService = AdminReviewsService;
declare const generatedApi_AdminReviewsService: typeof AdminReviewsService;
type generatedApi_AdminService = AdminService;
declare const generatedApi_AdminService: typeof AdminService;
type generatedApi_AffinityLevel = AffinityLevel;
type generatedApi_AgeGroupType = AgeGroupType;
declare const generatedApi_AgeRating: typeof AgeRating;
type generatedApi_AllModelsResponse = AllModelsResponse;
type generatedApi_AnimatedImageAssetListResponse = AnimatedImageAssetListResponse;
type generatedApi_AnimatedImageAssetLocalized = AnimatedImageAssetLocalized;
type generatedApi_AnimatedImageAssetResponse = AnimatedImageAssetResponse;
type generatedApi_AnimatedImageAssetUpdateRequest = AnimatedImageAssetUpdateRequest;
type generatedApi_AnimatedImageAssetVersionListResponse = AnimatedImageAssetVersionListResponse;
type generatedApi_AnimatedImageAssetVersionResponse = AnimatedImageAssetVersionResponse;
type generatedApi_AnimatedImageAssetWithVersionResponse = AnimatedImageAssetWithVersionResponse;
type generatedApi_AnimatedImageAssetsService = AnimatedImageAssetsService;
declare const generatedApi_AnimatedImageAssetsService: typeof AnimatedImageAssetsService;
type generatedApi_AnimatedImageFormat = AnimatedImageFormat;
declare const generatedApi_AnimatedImageRole: typeof AnimatedImageRole;
type generatedApi_AnimationAutoTagRequest = AnimationAutoTagRequest;
type generatedApi_AnimationClipAssetListResponse = AnimationClipAssetListResponse;
type generatedApi_AnimationClipAssetLocalized = AnimationClipAssetLocalized;
type generatedApi_AnimationClipAssetResponse = AnimationClipAssetResponse;
type generatedApi_AnimationClipAssetUpdateRequest = AnimationClipAssetUpdateRequest;
type generatedApi_AnimationClipAssetVersionResponse = AnimationClipAssetVersionResponse;
type generatedApi_AnimationClipAssetWithVersionResponse = AnimationClipAssetWithVersionResponse;
type generatedApi_AnimationClipAssetsService = AnimationClipAssetsService;
declare const generatedApi_AnimationClipAssetsService: typeof AnimationClipAssetsService;
type generatedApi_AnimatorMotionData = AnimatorMotionData;
type generatedApi_ApiError = ApiError;
declare const generatedApi_ApiError: typeof ApiError;
type generatedApi_AppealItemRequest = AppealItemRequest;
type generatedApi_AppealItemResponse = AppealItemResponse;
type generatedApi_AppealReason = AppealReason;
type generatedApi_AppealReviewRequest = AppealReviewRequest;
type generatedApi_AppearanceVariantCreateRequest = AppearanceVariantCreateRequest;
type generatedApi_AppearanceVariantListResponse = AppearanceVariantListResponse;
type generatedApi_AppearanceVariantResponse = AppearanceVariantResponse;
type generatedApi_AppearanceVariantUpdateRequest = AppearanceVariantUpdateRequest;
type generatedApi_ArchetypeSensitivity = ArchetypeSensitivity;
type generatedApi_AssetAccessLevel = AssetAccessLevel;
type generatedApi_AssetAiUsage = AssetAiUsage;
type generatedApi_AssetBundleAssetListResponse = AssetBundleAssetListResponse;
type generatedApi_AssetBundleAssetLocalized = AssetBundleAssetLocalized;
type generatedApi_AssetBundleAssetResponse = AssetBundleAssetResponse;
type generatedApi_AssetBundleAssetUpdateRequest = AssetBundleAssetUpdateRequest;
type generatedApi_AssetBundleAssetVersionListResponse = AssetBundleAssetVersionListResponse;
type generatedApi_AssetBundleAssetVersionResponse = AssetBundleAssetVersionResponse;
type generatedApi_AssetBundleAssetWithVersionResponse = AssetBundleAssetWithVersionResponse;
type generatedApi_AssetBundleAssetsService = AssetBundleAssetsService;
declare const generatedApi_AssetBundleAssetsService: typeof AssetBundleAssetsService;
type generatedApi_AssetBundleModelResponse = AssetBundleModelResponse;
type generatedApi_AssetBundleVariant = AssetBundleVariant;
type generatedApi_AssetBundleVariantDataResponse = AssetBundleVariantDataResponse;
type generatedApi_AssetCatalog = AssetCatalog;
declare const generatedApi_AssetRightsDeclaration: typeof AssetRightsDeclaration;
type generatedApi_AssetRole = AssetRole;
type generatedApi_AssetType = AssetType;
declare const generatedApi_AssetUsageConditions: typeof AssetUsageConditions;
type generatedApi_AssetVariantGroupResponse = AssetVariantGroupResponse;
type generatedApi_AssetVariantLinkResponse = AssetVariantLinkResponse;
type generatedApi_AssetVariantsService = AssetVariantsService;
declare const generatedApi_AssetVariantsService: typeof AssetVariantsService;
type generatedApi_AttachmentPointPoseResponse = AttachmentPointPoseResponse;
type generatedApi_AttachmentTransform2D = AttachmentTransform2D;
type generatedApi_AttachmentTransform3D = AttachmentTransform3D;
type generatedApi_AttachmentType = AttachmentType;
type generatedApi_AudienceScale = AudienceScale;
type generatedApi_AudioAssetListResponse = AudioAssetListResponse;
type generatedApi_AudioAssetLocalized = AudioAssetLocalized;
type generatedApi_AudioAssetResponse = AudioAssetResponse;
type generatedApi_AudioAssetUpdateRequest = AudioAssetUpdateRequest;
type generatedApi_AudioAssetVersionListResponse = AudioAssetVersionListResponse;
type generatedApi_AudioAssetVersionResponse = AudioAssetVersionResponse;
type generatedApi_AudioAssetWithVersionResponse = AudioAssetWithVersionResponse;
type generatedApi_AudioAssetsService = AudioAssetsService;
declare const generatedApi_AudioAssetsService: typeof AudioAssetsService;
type generatedApi_AudioFormat = AudioFormat;
type generatedApi_AudioQuality = AudioQuality;
type generatedApi_AudioType = AudioType;
type generatedApi_AuthenticationService = AuthenticationService;
declare const generatedApi_AuthenticationService: typeof AuthenticationService;
type generatedApi_AutoCreateCharacterRequest = AutoCreateCharacterRequest;
type generatedApi_AutoParamsService = AutoParamsService;
declare const generatedApi_AutoParamsService: typeof AutoParamsService;
type generatedApi_AutoReviewRequest = AutoReviewRequest;
type generatedApi_AutoTagResponse = AutoTagResponse;
type generatedApi_AutoTaggingService = AutoTaggingService;
declare const generatedApi_AutoTaggingService: typeof AutoTaggingService;
type generatedApi_AutoTransition_Input = AutoTransition_Input;
type generatedApi_AutoTransition_Output = AutoTransition_Output;
type generatedApi_AvatarAiUsage = AvatarAiUsage;
type generatedApi_AvatarAppearanceVariantsService = AvatarAppearanceVariantsService;
declare const generatedApi_AvatarAppearanceVariantsService: typeof AvatarAppearanceVariantsService;
type generatedApi_AvatarAutoParamsResponse = AvatarAutoParamsResponse;
type generatedApi_AvatarBlinkCreateRequest = AvatarBlinkCreateRequest;
type generatedApi_AvatarBlinkListResponse = AvatarBlinkListResponse;
type generatedApi_AvatarBlinkResponse = AvatarBlinkResponse;
type generatedApi_AvatarBlinksService = AvatarBlinksService;
declare const generatedApi_AvatarBlinksService: typeof AvatarBlinksService;
type generatedApi_AvatarBreathingCreateRequest = AvatarBreathingCreateRequest;
type generatedApi_AvatarBreathingListResponse = AvatarBreathingListResponse;
type generatedApi_AvatarBreathingResponse = AvatarBreathingResponse;
type generatedApi_AvatarBreathingsService = AvatarBreathingsService;
declare const generatedApi_AvatarBreathingsService: typeof AvatarBreathingsService;
type generatedApi_AvatarCoreMotionsCreateRequest = AvatarCoreMotionsCreateRequest;
type generatedApi_AvatarCoreMotionsResponse = AvatarCoreMotionsResponse;
type generatedApi_AvatarCoreMotionsService = AvatarCoreMotionsService;
declare const generatedApi_AvatarCoreMotionsService: typeof AvatarCoreMotionsService;
type generatedApi_AvatarCoreMotionsUpdateRequest = AvatarCoreMotionsUpdateRequest;
type generatedApi_AvatarEntitySnapshot = AvatarEntitySnapshot;
type generatedApi_AvatarExpressionCreateRequest = AvatarExpressionCreateRequest;
type generatedApi_AvatarExpressionResponse = AvatarExpressionResponse;
type generatedApi_AvatarExpressionUpdateRequest = AvatarExpressionUpdateRequest;
type generatedApi_AvatarExpressionsService = AvatarExpressionsService;
declare const generatedApi_AvatarExpressionsService: typeof AvatarExpressionsService;
type generatedApi_AvatarInstanceCreateRequest = AvatarInstanceCreateRequest;
type generatedApi_AvatarInstanceListResponse = AvatarInstanceListResponse;
type generatedApi_AvatarInstanceResponse = AvatarInstanceResponse;
type generatedApi_AvatarInstancesService = AvatarInstancesService;
declare const generatedApi_AvatarInstancesService: typeof AvatarInstancesService;
type generatedApi_AvatarItemAttachmentCreateRequest = AvatarItemAttachmentCreateRequest;
type generatedApi_AvatarItemAttachmentListResponse = AvatarItemAttachmentListResponse;
type generatedApi_AvatarItemAttachmentResponse = AvatarItemAttachmentResponse;
type generatedApi_AvatarItemAttachmentUpdateRequest = AvatarItemAttachmentUpdateRequest;
type generatedApi_AvatarItemAttachmentsService = AvatarItemAttachmentsService;
declare const generatedApi_AvatarItemAttachmentsService: typeof AvatarItemAttachmentsService;
type generatedApi_AvatarLipSyncCreateRequest = AvatarLipSyncCreateRequest;
type generatedApi_AvatarLipSyncListResponse = AvatarLipSyncListResponse;
type generatedApi_AvatarLipSyncResponse = AvatarLipSyncResponse;
type generatedApi_AvatarLipSyncUpdateRequest = AvatarLipSyncUpdateRequest;
type generatedApi_AvatarLipsyncsService = AvatarLipsyncsService;
declare const generatedApi_AvatarLipsyncsService: typeof AvatarLipsyncsService;
type generatedApi_AvatarListResponse = AvatarListResponse;
type generatedApi_AvatarLocalized = AvatarLocalized;
type generatedApi_AvatarLocalizedSnapshot = AvatarLocalizedSnapshot;
type generatedApi_AvatarLookAtCreateRequest = AvatarLookAtCreateRequest;
type generatedApi_AvatarLookAtListResponse = AvatarLookAtListResponse;
type generatedApi_AvatarLookAtResponse = AvatarLookAtResponse;
type generatedApi_AvatarLookatsService = AvatarLookatsService;
declare const generatedApi_AvatarLookatsService: typeof AvatarLookatsService;
type generatedApi_AvatarModelsService = AvatarModelsService;
declare const generatedApi_AvatarModelsService: typeof AvatarModelsService;
type generatedApi_AvatarMotionCreateRequest = AvatarMotionCreateRequest;
type generatedApi_AvatarMotionFormatRequest = AvatarMotionFormatRequest;
type generatedApi_AvatarMotionResponse = AvatarMotionResponse;
type generatedApi_AvatarMotionUpdateRequest = AvatarMotionUpdateRequest;
type generatedApi_AvatarMotionsService = AvatarMotionsService;
declare const generatedApi_AvatarMotionsService: typeof AvatarMotionsService;
type generatedApi_AvatarPurpose = AvatarPurpose;
type generatedApi_AvatarResponse = AvatarResponse;
type generatedApi_AvatarTemplateListResponse = AvatarTemplateListResponse;
type generatedApi_AvatarTemplatePromoteRequest = AvatarTemplatePromoteRequest;
type generatedApi_AvatarTemplateResponse = AvatarTemplateResponse;
type generatedApi_AvatarTemplateUpdateRequest = AvatarTemplateUpdateRequest;
type generatedApi_AvatarTemplatesService = AvatarTemplatesService;
declare const generatedApi_AvatarTemplatesService: typeof AvatarTemplatesService;
type generatedApi_AvatarsService = AvatarsService;
declare const generatedApi_AvatarsService: typeof AvatarsService;
type generatedApi_BackgroundChangeEvent = BackgroundChangeEvent;
type generatedApi_BaseMotionsRequest = BaseMotionsRequest;
type generatedApi_BaseMotionsResponse = BaseMotionsResponse;
type generatedApi_BaseState = BaseState;
type generatedApi_BatchRequest = BatchRequest;
type generatedApi_BatchResponse_TagCategoryResponse_ = BatchResponse_TagCategoryResponse_;
type generatedApi_BatchResponse_TagResponse_ = BatchResponse_TagResponse_;
type generatedApi_BatchSettingsRequest = BatchSettingsRequest;
type generatedApi_BatchSettingsResponse = BatchSettingsResponse;
declare const generatedApi_BehavioralPattern: typeof BehavioralPattern;
type generatedApi_BehavioralPatternPresetListResponse = BehavioralPatternPresetListResponse;
type generatedApi_BehavioralPatternPresetResponse = BehavioralPatternPresetResponse;
type generatedApi_BgmChangeEvent = BgmChangeEvent;
type generatedApi_BlendShapeBlinkPayload = BlendShapeBlinkPayload;
type generatedApi_BlendShapeBreathingPayload = BlendShapeBreathingPayload;
type generatedApi_BlendShapeEntryRequest = BlendShapeEntryRequest;
type generatedApi_BlendShapeEntryResponse = BlendShapeEntryResponse;
type generatedApi_BlendShapeExpressionData_Input = BlendShapeExpressionData_Input;
type generatedApi_BlendShapeExpressionData_Output = BlendShapeExpressionData_Output;
type generatedApi_BlendShapeLipSyncPayload = BlendShapeLipSyncPayload;
type generatedApi_BlendShapeLookAtPayload = BlendShapeLookAtPayload;
type generatedApi_BlendShapeWeight = BlendShapeWeight;
type generatedApi_BlinkBlendShapeEntry = BlinkBlendShapeEntry;
type generatedApi_BlinkContextModifier = BlinkContextModifier;
type generatedApi_BlinkFormatRequest = BlinkFormatRequest;
type generatedApi_BlinkFormatResponse = BlinkFormatResponse;
type generatedApi_BlinkFormatType = BlinkFormatType;
type generatedApi_BodyRegion = BodyRegion;
type generatedApi_BodySlot = BodySlot;
type generatedApi_Body_add_animated_image_asset_version_api_v1_animated_image_assets__asset_id__versions_post = Body_add_animated_image_asset_version_api_v1_animated_image_assets__asset_id__versions_post;
type generatedApi_Body_add_asset_bundle_asset_version_api_v1_asset_bundle_assets__asset_bundle_id__versions_post = Body_add_asset_bundle_asset_version_api_v1_asset_bundle_assets__asset_bundle_id__versions_post;
type generatedApi_Body_add_audio_asset_version_api_v1_audio_assets__audio_id__versions_post = Body_add_audio_asset_version_api_v1_audio_assets__audio_id__versions_post;
type generatedApi_Body_add_gaussian_splat_asset_version_api_v1_gaussian_splat_assets__gs_id__versions_post = Body_add_gaussian_splat_asset_version_api_v1_gaussian_splat_assets__gs_id__versions_post;
type generatedApi_Body_add_glb_asset_version_api_v1_glb_assets__glb_id__versions_post = Body_add_glb_asset_version_api_v1_glb_assets__glb_id__versions_post;
type generatedApi_Body_add_image_asset_version_api_v1_image_assets__image_id__versions_post = Body_add_image_asset_version_api_v1_image_assets__image_id__versions_post;
type generatedApi_Body_add_variant_to_version_api_v1_asset_bundle_assets__asset_bundle_id__versions__version_id__variants_post = Body_add_variant_to_version_api_v1_asset_bundle_assets__asset_bundle_id__versions__version_id__variants_post;
type generatedApi_Body_add_video_asset_version_api_v1_video_assets__video_id__versions_post = Body_add_video_asset_version_api_v1_video_assets__video_id__versions_post;
type generatedApi_Body_auto_tag_avatar_api_v1_auto_tagging_avatar_post = Body_auto_tag_avatar_api_v1_auto_tagging_avatar_post;
type generatedApi_Body_create_animated_image_asset_api_v1_animated_image_assets_post = Body_create_animated_image_asset_api_v1_animated_image_assets_post;
type generatedApi_Body_create_animation_clip_asset_api_v1_animation_clip_assets_post = Body_create_animation_clip_asset_api_v1_animation_clip_assets_post;
type generatedApi_Body_create_asset_bundle_asset_api_v1_asset_bundle_assets_post = Body_create_asset_bundle_asset_api_v1_asset_bundle_assets_post;
type generatedApi_Body_create_audio_asset_api_v1_audio_assets_post = Body_create_audio_asset_api_v1_audio_assets_post;
type generatedApi_Body_create_avatar_api_v1_avatars_post = Body_create_avatar_api_v1_avatars_post;
type generatedApi_Body_create_avatar_face_icon_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_face_icon_file_upload_post = Body_create_avatar_face_icon_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_face_icon_file_upload_post;
type generatedApi_Body_create_avatar_sprite_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_sprite_file_upload_post = Body_create_avatar_sprite_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_sprite_file_upload_post;
type generatedApi_Body_create_character_api_v1_characters_post = Body_create_character_api_v1_characters_post;
type generatedApi_Body_create_gaussian_splat_asset_api_v1_gaussian_splat_assets_post = Body_create_gaussian_splat_asset_api_v1_gaussian_splat_assets_post;
type generatedApi_Body_create_glb_asset_api_v1_glb_assets_post = Body_create_glb_asset_api_v1_glb_assets_post;
type generatedApi_Body_create_glb_from_fbx_api_v1_glb_assets_from_fbx_post = Body_create_glb_from_fbx_api_v1_glb_assets_from_fbx_post;
type generatedApi_Body_create_glb_from_gltf_api_v1_glb_assets_from_gltf_post = Body_create_glb_from_gltf_api_v1_glb_assets_from_gltf_post;
type generatedApi_Body_create_glb_from_obj_api_v1_glb_assets_from_obj_post = Body_create_glb_from_obj_api_v1_glb_assets_from_obj_post;
type generatedApi_Body_create_image_asset_api_v1_image_assets_post = Body_create_image_asset_api_v1_image_assets_post;
type generatedApi_Body_create_video_asset_api_v1_video_assets_post = Body_create_video_asset_api_v1_video_assets_post;
type generatedApi_Body_create_vrm_asset_api_v1_vrm_assets_post = Body_create_vrm_asset_api_v1_vrm_assets_post;
type generatedApi_Body_create_vrma_asset_api_v1_vrma_assets_post = Body_create_vrma_asset_api_v1_vrma_assets_post;
type generatedApi_Body_detect_animated_image_colluders_admin_v1_forensics_detect_animated_image_post = Body_detect_animated_image_colluders_admin_v1_forensics_detect_animated_image_post;
type generatedApi_Body_detect_face_api_v1_avatars__avatar_id__sprite_model_detect_face_post = Body_detect_face_api_v1_avatars__avatar_id__sprite_model_detect_face_post;
type generatedApi_Body_detect_image_colluders_admin_v1_forensics_detect_image_post = Body_detect_image_colluders_admin_v1_forensics_detect_image_post;
type generatedApi_Body_detect_model_colluders_admin_v1_forensics_detect_model_post = Body_detect_model_colluders_admin_v1_forensics_detect_model_post;
type generatedApi_Body_detect_pose_api_v1_avatars__avatar_id__sprite_model_detect_pose_post = Body_detect_pose_api_v1_avatars__avatar_id__sprite_model_detect_pose_post;
type generatedApi_Body_generate_avatar_auto_params_api_v1_auto_params_avatar_post = Body_generate_avatar_auto_params_api_v1_auto_params_avatar_post;
type generatedApi_Body_generate_character_auto_params_api_v1_auto_params_character_post = Body_generate_character_auto_params_api_v1_auto_params_character_post;
type generatedApi_Body_generate_motion_auto_params_api_v1_auto_params_motion_post = Body_generate_motion_auto_params_api_v1_auto_params_motion_post;
type generatedApi_Body_update_avatar_api_v1_avatars__avatar_id__patch = Body_update_avatar_api_v1_avatars__avatar_id__patch;
type generatedApi_Body_update_character_api_v1_characters__character_id__patch = Body_update_character_api_v1_characters__character_id__patch;
type generatedApi_Body_upload_asset_bundle_api_v1_avatars__avatar_id__asset_bundle_model_post = Body_upload_asset_bundle_api_v1_avatars__avatar_id__asset_bundle_model_post;
type generatedApi_Body_upload_face_icon_model_with_files_api_v1_avatars__avatar_id__face_icon_model_file_upload_post = Body_upload_face_icon_model_with_files_api_v1_avatars__avatar_id__face_icon_model_file_upload_post;
type generatedApi_Body_upload_glb_model_with_file_api_v1_avatars__avatar_id__glb_model_file_upload_post = Body_upload_glb_model_with_file_api_v1_avatars__avatar_id__glb_model_file_upload_post;
type generatedApi_Body_upload_sprite_model_with_files_api_v1_avatars__avatar_id__sprite_model_file_upload_post = Body_upload_sprite_model_with_files_api_v1_avatars__avatar_id__sprite_model_file_upload_post;
type generatedApi_Body_upload_vrm_model_with_file_api_v1_avatars__avatar_id__vrm_model_file_upload_post = Body_upload_vrm_model_with_file_api_v1_avatars__avatar_id__vrm_model_file_upload_post;
type generatedApi_BondType = BondType;
type generatedApi_BoneBreathingPayload = BoneBreathingPayload;
type generatedApi_BoneLookAtPayload = BoneLookAtPayload;
type generatedApi_BoneScaleEntryRequest = BoneScaleEntryRequest;
type generatedApi_BoneScaleEntryResponse = BoneScaleEntryResponse;
type generatedApi_BreathingBlendShapeEntry = BreathingBlendShapeEntry;
type generatedApi_BreathingContextModifier = BreathingContextModifier;
type generatedApi_BreathingFormatRequest = BreathingFormatRequest;
type generatedApi_BreathingFormatResponse = BreathingFormatResponse;
type generatedApi_BreathingFormatType = BreathingFormatType;
type generatedApi_BulkUpsertRequest = BulkUpsertRequest;
type generatedApi_BulkUpsertResultResponse = BulkUpsertResultResponse;
type generatedApi_CacheMetadataResponse = CacheMetadataResponse;
type generatedApi_CacheMetadataService = CacheMetadataService;
declare const generatedApi_CacheMetadataService: typeof CacheMetadataService;
type generatedApi_CacheMetadataUpsertRequest = CacheMetadataUpsertRequest;
type generatedApi_CancelError = CancelError;
declare const generatedApi_CancelError: typeof CancelError;
type generatedApi_CancelablePromise<T> = CancelablePromise<T>;
declare const generatedApi_CancelablePromise: typeof CancelablePromise;
type generatedApi_CharacterAbilitiesRequest = CharacterAbilitiesRequest;
type generatedApi_CharacterAbilitiesResponse = CharacterAbilitiesResponse;
type generatedApi_CharacterAbilitiesService = CharacterAbilitiesService;
declare const generatedApi_CharacterAbilitiesService: typeof CharacterAbilitiesService;
type generatedApi_CharacterActionBatchCreateRequest = CharacterActionBatchCreateRequest;
type generatedApi_CharacterActionCreateRequest = CharacterActionCreateRequest;
type generatedApi_CharacterActionListResponse = CharacterActionListResponse;
type generatedApi_CharacterActionResponse = CharacterActionResponse;
type generatedApi_CharacterActionTreeResponse = CharacterActionTreeResponse;
type generatedApi_CharacterActionUpdateRequest = CharacterActionUpdateRequest;
type generatedApi_CharacterActionsService = CharacterActionsService;
declare const generatedApi_CharacterActionsService: typeof CharacterActionsService;
type generatedApi_CharacterAiUsage = CharacterAiUsage;
type generatedApi_CharacterAutoParamsResponse = CharacterAutoParamsResponse;
type generatedApi_CharacterBackgroundDetailsRequest = CharacterBackgroundDetailsRequest;
type generatedApi_CharacterBackgroundDetailsResponse = CharacterBackgroundDetailsResponse;
type generatedApi_CharacterBackgroundDetailsService = CharacterBackgroundDetailsService;
declare const generatedApi_CharacterBackgroundDetailsService: typeof CharacterBackgroundDetailsService;
type generatedApi_CharacterBasicInfoRequest = CharacterBasicInfoRequest;
type generatedApi_CharacterBasicInfoResponse = CharacterBasicInfoResponse;
type generatedApi_CharacterBasicInfoService = CharacterBasicInfoService;
declare const generatedApi_CharacterBasicInfoService: typeof CharacterBasicInfoService;
type generatedApi_CharacterBehaviorSnippetListResponse = CharacterBehaviorSnippetListResponse;
type generatedApi_CharacterBehaviorSnippetResponse = CharacterBehaviorSnippetResponse;
type generatedApi_CharacterBounceEvent = CharacterBounceEvent;
type generatedApi_CharacterDailyLifeRequest = CharacterDailyLifeRequest;
type generatedApi_CharacterDailyLifeResponse = CharacterDailyLifeResponse;
type generatedApi_CharacterDailyLifeService = CharacterDailyLifeService;
declare const generatedApi_CharacterDailyLifeService: typeof CharacterDailyLifeService;
type generatedApi_CharacterEmotionBatchCreateRequest = CharacterEmotionBatchCreateRequest;
type generatedApi_CharacterEmotionCreateRequest = CharacterEmotionCreateRequest;
type generatedApi_CharacterEmotionEvent = CharacterEmotionEvent;
type generatedApi_CharacterEmotionIdsResponse = CharacterEmotionIdsResponse;
type generatedApi_CharacterEmotionListResponse = CharacterEmotionListResponse;
type generatedApi_CharacterEmotionResponse = CharacterEmotionResponse;
type generatedApi_CharacterEmotionUpdateRequest = CharacterEmotionUpdateRequest;
type generatedApi_CharacterEmotionsService = CharacterEmotionsService;
declare const generatedApi_CharacterEmotionsService: typeof CharacterEmotionsService;
type generatedApi_CharacterEntitySnapshot = CharacterEntitySnapshot;
type generatedApi_CharacterEquipmentCreateRequest = CharacterEquipmentCreateRequest;
type generatedApi_CharacterEquipmentListResponse = CharacterEquipmentListResponse;
type generatedApi_CharacterEquipmentResponse = CharacterEquipmentResponse;
type generatedApi_CharacterEquipmentService = CharacterEquipmentService;
declare const generatedApi_CharacterEquipmentService: typeof CharacterEquipmentService;
type generatedApi_CharacterEquipmentUpdateRequest = CharacterEquipmentUpdateRequest;
type generatedApi_CharacterFraming = CharacterFraming;
type generatedApi_CharacterFramingChangeEvent = CharacterFramingChangeEvent;
type generatedApi_CharacterHideEvent = CharacterHideEvent;
type generatedApi_CharacterHighlightEvent = CharacterHighlightEvent;
type generatedApi_CharacterInstanceCreateRequest = CharacterInstanceCreateRequest;
type generatedApi_CharacterInstanceListResponse = CharacterInstanceListResponse;
type generatedApi_CharacterInstanceResponse = CharacterInstanceResponse;
type generatedApi_CharacterInstancesService = CharacterInstancesService;
declare const generatedApi_CharacterInstancesService: typeof CharacterInstancesService;
type generatedApi_CharacterInventoryCreateRequest = CharacterInventoryCreateRequest;
type generatedApi_CharacterInventoryListResponse = CharacterInventoryListResponse;
type generatedApi_CharacterInventoryResponse = CharacterInventoryResponse;
type generatedApi_CharacterInventoryService = CharacterInventoryService;
declare const generatedApi_CharacterInventoryService: typeof CharacterInventoryService;
type generatedApi_CharacterInventoryUpdateRequest = CharacterInventoryUpdateRequest;
type generatedApi_CharacterListResponse = CharacterListResponse;
type generatedApi_CharacterLocalized = CharacterLocalized;
type generatedApi_CharacterLocalizedSnapshot = CharacterLocalizedSnapshot;
type generatedApi_CharacterMotionBatchCreateRequest = CharacterMotionBatchCreateRequest;
type generatedApi_CharacterMotionCreateRequest = CharacterMotionCreateRequest;
type generatedApi_CharacterMotionEvent = CharacterMotionEvent;
type generatedApi_CharacterMotionIdsResponse = CharacterMotionIdsResponse;
type generatedApi_CharacterMotionListResponse = CharacterMotionListResponse;
type generatedApi_CharacterMotionResponse = CharacterMotionResponse;
type generatedApi_CharacterMotionUpdateRequest = CharacterMotionUpdateRequest;
type generatedApi_CharacterMotionsService = CharacterMotionsService;
declare const generatedApi_CharacterMotionsService: typeof CharacterMotionsService;
type generatedApi_CharacterPersonalityParamsCreateRequest = CharacterPersonalityParamsCreateRequest;
type generatedApi_CharacterPersonalityParamsListResponse = CharacterPersonalityParamsListResponse;
type generatedApi_CharacterPersonalityParamsResponse = CharacterPersonalityParamsResponse;
type generatedApi_CharacterPersonalityParamsService = CharacterPersonalityParamsService;
declare const generatedApi_CharacterPersonalityParamsService: typeof CharacterPersonalityParamsService;
type generatedApi_CharacterPersonalityParamsUpdateRequest = CharacterPersonalityParamsUpdateRequest;
type generatedApi_CharacterPhysicalIdentityRequest = CharacterPhysicalIdentityRequest;
type generatedApi_CharacterPhysicalIdentityResponse = CharacterPhysicalIdentityResponse;
type generatedApi_CharacterPhysicalIdentityService = CharacterPhysicalIdentityService;
declare const generatedApi_CharacterPhysicalIdentityService: typeof CharacterPhysicalIdentityService;
type generatedApi_CharacterPreferencesRequest = CharacterPreferencesRequest;
type generatedApi_CharacterPreferencesResponse = CharacterPreferencesResponse;
type generatedApi_CharacterPreferencesService = CharacterPreferencesService;
declare const generatedApi_CharacterPreferencesService: typeof CharacterPreferencesService;
type generatedApi_CharacterProfileGenerationService = CharacterProfileGenerationService;
declare const generatedApi_CharacterProfileGenerationService: typeof CharacterProfileGenerationService;
type generatedApi_CharacterRelationshipCreateRequest = CharacterRelationshipCreateRequest;
type generatedApi_CharacterRelationshipListResponse = CharacterRelationshipListResponse;
type generatedApi_CharacterRelationshipLocalized = CharacterRelationshipLocalized;
type generatedApi_CharacterRelationshipResponse = CharacterRelationshipResponse;
type generatedApi_CharacterRelationshipUpdateRequest = CharacterRelationshipUpdateRequest;
type generatedApi_CharacterResetEvent = CharacterResetEvent;
type generatedApi_CharacterResponse = CharacterResponse;
type generatedApi_CharacterScalePulseEvent = CharacterScalePulseEvent;
type generatedApi_CharacterSceneDetails = CharacterSceneDetails;
type generatedApi_CharacterSceneDetailsCreateRequest = CharacterSceneDetailsCreateRequest;
type generatedApi_CharacterSceneDetailsResponse = CharacterSceneDetailsResponse;
type generatedApi_CharacterSceneDetailsUpdateRequest = CharacterSceneDetailsUpdateRequest;
type generatedApi_CharacterShakeEvent = CharacterShakeEvent;
type generatedApi_CharacterShowEvent = CharacterShowEvent;
type generatedApi_CharacterSilhouetteEvent = CharacterSilhouetteEvent;
type generatedApi_CharacterSpeakEvent_Input = CharacterSpeakEvent_Input;
type generatedApi_CharacterSpeakEvent_Output = CharacterSpeakEvent_Output;
type generatedApi_CharacterSpinEvent = CharacterSpinEvent;
type generatedApi_CharacterStateResponse = CharacterStateResponse;
type generatedApi_CharacterTemplateListResponse = CharacterTemplateListResponse;
type generatedApi_CharacterTemplateLocalized = CharacterTemplateLocalized;
type generatedApi_CharacterTemplatePromoteRequest = CharacterTemplatePromoteRequest;
type generatedApi_CharacterTemplateResponse = CharacterTemplateResponse;
type generatedApi_CharacterTemplateUpdateRequest = CharacterTemplateUpdateRequest;
type generatedApi_CharacterTemplatesService = CharacterTemplatesService;
declare const generatedApi_CharacterTemplatesService: typeof CharacterTemplatesService;
type generatedApi_CharacterTurnState = CharacterTurnState;
type generatedApi_CharacterTurnStateCreateRequest = CharacterTurnStateCreateRequest;
type generatedApi_CharacterTurnStateResponse = CharacterTurnStateResponse;
type generatedApi_CharacterTurnStateUpdateRequest = CharacterTurnStateUpdateRequest;
type generatedApi_CharactersService = CharactersService;
declare const generatedApi_CharactersService: typeof CharactersService;
type generatedApi_ChildBundle = ChildBundle;
type generatedApi_ChoiceOption_Input = ChoiceOption_Input;
type generatedApi_ChoiceOption_Output = ChoiceOption_Output;
type generatedApi_CollectionCountResponse = CollectionCountResponse;
type generatedApi_CollectionDetailResponse = CollectionDetailResponse;
type generatedApi_CollectionListResponse = CollectionListResponse;
type generatedApi_CollectionStats = CollectionStats;
type generatedApi_Color = Color;
type generatedApi_CompatibilityListCursorResponse = CompatibilityListCursorResponse;
type generatedApi_ComplexityFactors = ComplexityFactors;
type generatedApi_ComponentListing = ComponentListing;
type generatedApi_Condition = Condition;
type generatedApi_ConditionGroup_Input = ConditionGroup_Input;
type generatedApi_ConditionGroup_Output = ConditionGroup_Output;
type generatedApi_ConditionType = ConditionType;
type generatedApi_ConditionalEmotionalActivation = ConditionalEmotionalActivation;
type generatedApi_ContentAssessmentRequest = ContentAssessmentRequest;
type generatedApi_ContentAssessmentResponse = ContentAssessmentResponse;
type generatedApi_ContentCategory = ContentCategory;
declare const generatedApi_ContentDeclaration: typeof ContentDeclaration;
type generatedApi_ContentDetail = ContentDetail;
type generatedApi_ContentDetailRequest = ContentDetailRequest;
type generatedApi_ContentDetailResponse = ContentDetailResponse;
type generatedApi_ContentFrequency = ContentFrequency;
declare const generatedApi_ContentIntensity: typeof ContentIntensity;
type generatedApi_ContentLabels = ContentLabels;
declare const generatedApi_ContentOriginType: typeof ContentOriginType;
type generatedApi_ContentProtectionService = ContentProtectionService;
declare const generatedApi_ContentProtectionService: typeof ContentProtectionService;
type generatedApi_ContentPublishing = ContentPublishing;
type generatedApi_ContentReview = ContentReview;
type generatedApi_ContentZoning = ContentZoning;
type generatedApi_ContextModifierSet = ContextModifierSet;
type generatedApi_ConversationSignalsRequest = ConversationSignalsRequest;
type generatedApi_ConversationSignalsResponse = ConversationSignalsResponse;
type generatedApi_ConversationTimingContextModifier = ConversationTimingContextModifier;
type generatedApi_ConversionCallbackPayload = ConversionCallbackPayload;
type generatedApi_ConversionMetadata = ConversionMetadata;
type generatedApi_ConversionStatus = ConversionStatus;
type generatedApi_CostCalculationRequest = CostCalculationRequest;
type generatedApi_CostCalculationResponse = CostCalculationResponse;
type generatedApi_Country = Country;
type generatedApi_CreateAssetVariantLinkRequest = CreateAssetVariantLinkRequest;
type generatedApi_CreateFromTextRequest = CreateFromTextRequest;
type generatedApi_CreateFromTextResponse = CreateFromTextResponse;
declare const generatedApi_CreationMethod: typeof CreationMethod;
declare const generatedApi_CreativeCommonsType: typeof CreativeCommonsType;
type generatedApi_CreatorCreateRequest = CreatorCreateRequest;
type generatedApi_CreatorLinkRequest = CreatorLinkRequest;
type generatedApi_CreatorLinkResponse = CreatorLinkResponse;
type generatedApi_CreatorLocalizedRequest = CreatorLocalizedRequest;
type generatedApi_CreatorLocalizedResponse = CreatorLocalizedResponse;
type generatedApi_CreatorResponse = CreatorResponse;
type generatedApi_CreatorType = CreatorType;
type generatedApi_CreatorUpdateRequest = CreatorUpdateRequest;
type generatedApi_CreatorsService = CreatorsService;
declare const generatedApi_CreatorsService: typeof CreatorsService;
type generatedApi_DataSource = DataSource;
type generatedApi_DbOverviewResponse = DbOverviewResponse;
type generatedApi_DecisionMaking = DecisionMaking;
type generatedApi_DefaultService = DefaultService;
declare const generatedApi_DefaultService: typeof DefaultService;
type generatedApi_DetectedFaceResponse = DetectedFaceResponse;
type generatedApi_DetectedKeypointResponse = DetectedKeypointResponse;
type generatedApi_DetectedPoseResponse = DetectedPoseResponse;
type generatedApi_DialogueAct = DialogueAct;
type generatedApi_DistributionBundleCreateRequest = DistributionBundleCreateRequest;
type generatedApi_DistributionBundleListResponse = DistributionBundleListResponse;
type generatedApi_DistributionBundleLocalized = DistributionBundleLocalized;
type generatedApi_DistributionBundleResponse = DistributionBundleResponse;
type generatedApi_DistributionBundleUpdateRequest = DistributionBundleUpdateRequest;
type generatedApi_DistributionCreateRequest = DistributionCreateRequest;
type generatedApi_DistributionListResponse = DistributionListResponse;
type generatedApi_DistributionLocalized = DistributionLocalized;
type generatedApi_DistributionResponse = DistributionResponse;
type generatedApi_DistributionStatus = DistributionStatus;
type generatedApi_DistributionUpdateRequest = DistributionUpdateRequest;
type generatedApi_DocumentSummary = DocumentSummary;
type generatedApi_DocumentType = DocumentType;
type generatedApi_DryRunReviewRequest = DryRunReviewRequest;
type generatedApi_DuplicateResponse = DuplicateResponse;
type generatedApi_DuplicateSettingsResponse = DuplicateSettingsResponse;
type generatedApi_Effect = Effect;
type generatedApi_EffectRule = EffectRule;
type generatedApi_EffectType = EffectType;
type generatedApi_EmotionCenterResponse = EmotionCenterResponse;
type generatedApi_EmotionConfigCreateRequest = EmotionConfigCreateRequest;
type generatedApi_EmotionConfigResponse = EmotionConfigResponse;
type generatedApi_EmotionConfigService = EmotionConfigService;
declare const generatedApi_EmotionConfigService: typeof EmotionConfigService;
type generatedApi_EmotionConfigUpdateRequest = EmotionConfigUpdateRequest;
type generatedApi_EmotionCreateRequest = EmotionCreateRequest;
declare const generatedApi_EmotionFormatType: typeof EmotionFormatType;
type generatedApi_EmotionFormatsBlendshapeService = EmotionFormatsBlendshapeService;
declare const generatedApi_EmotionFormatsBlendshapeService: typeof EmotionFormatsBlendshapeService;
type generatedApi_EmotionFormatsFaceIconService = EmotionFormatsFaceIconService;
declare const generatedApi_EmotionFormatsFaceIconService: typeof EmotionFormatsFaceIconService;
type generatedApi_EmotionFormatsGlbService = EmotionFormatsGlbService;
declare const generatedApi_EmotionFormatsGlbService: typeof EmotionFormatsGlbService;
type generatedApi_EmotionFormatsSpriteService = EmotionFormatsSpriteService;
declare const generatedApi_EmotionFormatsSpriteService: typeof EmotionFormatsSpriteService;
type generatedApi_EmotionGroupLocalizedSchema = EmotionGroupLocalizedSchema;
type generatedApi_EmotionGroupNonVerbalProfile = EmotionGroupNonVerbalProfile;
type generatedApi_EmotionGroupSchema = EmotionGroupSchema;
type generatedApi_EmotionIndexEntrySchema = EmotionIndexEntrySchema;
type generatedApi_EmotionListResponse = EmotionListResponse;
type generatedApi_EmotionLocalized = EmotionLocalized;
type generatedApi_EmotionNeighborResponse = EmotionNeighborResponse;
type generatedApi_EmotionResponse = EmotionResponse;
type generatedApi_EmotionSuggestionResponse = EmotionSuggestionResponse;
type generatedApi_EmotionUpdateRequest = EmotionUpdateRequest;
type generatedApi_EmotionalActivationConditions = EmotionalActivationConditions;
type generatedApi_EmotionalModifierLayer = EmotionalModifierLayer;
type generatedApi_EmotionalParams = EmotionalParams;
type generatedApi_EmotionsService = EmotionsService;
declare const generatedApi_EmotionsService: typeof EmotionsService;
type generatedApi_EntitlementCheckResponse = EntitlementCheckResponse;
type generatedApi_EntitlementListResponse = EntitlementListResponse;
type generatedApi_EntitlementResponse = EntitlementResponse;
type generatedApi_EntitlementVersionUpdateRequest = EntitlementVersionUpdateRequest;
type generatedApi_EquipmentAnimationKeyframe = EquipmentAnimationKeyframe;
type generatedApi_EquipmentAnimationTrack = EquipmentAnimationTrack;
type generatedApi_EquipmentItemType = EquipmentItemType;
type generatedApi_EquipmentMotionOverlayCreateRequest = EquipmentMotionOverlayCreateRequest;
type generatedApi_EquipmentMotionOverlayListResponse = EquipmentMotionOverlayListResponse;
type generatedApi_EquipmentMotionOverlayResponse = EquipmentMotionOverlayResponse;
type generatedApi_EquipmentMotionOverlayUpdateRequest = EquipmentMotionOverlayUpdateRequest;
type generatedApi_EquipmentMotionOverlaysService = EquipmentMotionOverlaysService;
declare const generatedApi_EquipmentMotionOverlaysService: typeof EquipmentMotionOverlaysService;
type generatedApi_EthicalDilemma = EthicalDilemma;
type generatedApi_EvidenceRequest = EvidenceRequest;
type generatedApi_EvidenceResponse = EvidenceResponse;
type generatedApi_ExpressionContextModifier = ExpressionContextModifier;
type generatedApi_ExpressionFormatRequest = ExpressionFormatRequest;
type generatedApi_ExpressionFormatResponse = ExpressionFormatResponse;
type generatedApi_EyeBlendShapeGroup = EyeBlendShapeGroup;
type generatedApi_FaceDetectionResponse = FaceDetectionResponse;
type generatedApi_FaceIconBlinkPayload = FaceIconBlinkPayload;
type generatedApi_FaceIconBreathingPayload = FaceIconBreathingPayload;
type generatedApi_FaceIconExpressionData = FaceIconExpressionData;
type generatedApi_FaceIconLipSyncPayload = FaceIconLipSyncPayload;
type generatedApi_FaceIconLookAtPayload = FaceIconLookAtPayload;
type generatedApi_FaceIconModelResponse = FaceIconModelResponse;
type generatedApi_FaceIconVisemeMapping = FaceIconVisemeMapping;
type generatedApi_FacePositionResponse = FacePositionResponse;
type generatedApi_FavoriteCreateRequest = FavoriteCreateRequest;
type generatedApi_FavoriteListResponse = FavoriteListResponse;
type generatedApi_FavoriteResponse = FavoriteResponse;
type generatedApi_FieldStatsEntry = FieldStatsEntry;
type generatedApi_FittingMethod = FittingMethod;
type generatedApi_ForensicDetectResponse = ForensicDetectResponse;
type generatedApi_FormatOperationResponse = FormatOperationResponse;
type generatedApi_FreeInputConfig_Input = FreeInputConfig_Input;
type generatedApi_FreeInputConfig_Output = FreeInputConfig_Output;
type generatedApi_FreeInputRoute_Input = FreeInputRoute_Input;
type generatedApi_FreeInputRoute_Output = FreeInputRoute_Output;
type generatedApi_GLBAssetFromSourceResponse = GLBAssetFromSourceResponse;
type generatedApi_GLBAssetListResponse = GLBAssetListResponse;
type generatedApi_GLBAssetLocalized = GLBAssetLocalized;
type generatedApi_GLBAssetResponse = GLBAssetResponse;
type generatedApi_GLBAssetRole = GLBAssetRole;
type generatedApi_GLBAssetUpdateRequest = GLBAssetUpdateRequest;
type generatedApi_GLBAssetVersionListResponse = GLBAssetVersionListResponse;
type generatedApi_GLBAssetVersionResponse = GLBAssetVersionResponse;
type generatedApi_GLBExpressionData = GLBExpressionData;
type generatedApi_GLBModelResponse = GLBModelResponse;
type generatedApi_GLBMotionData = GLBMotionData;
type generatedApi_GaussianSplatAssetListResponse = GaussianSplatAssetListResponse;
type generatedApi_GaussianSplatAssetLocalized = GaussianSplatAssetLocalized;
type generatedApi_GaussianSplatAssetResponse = GaussianSplatAssetResponse;
type generatedApi_GaussianSplatAssetRole = GaussianSplatAssetRole;
type generatedApi_GaussianSplatAssetUpdateRequest = GaussianSplatAssetUpdateRequest;
type generatedApi_GaussianSplatAssetVersionListResponse = GaussianSplatAssetVersionListResponse;
type generatedApi_GaussianSplatAssetVersionResponse = GaussianSplatAssetVersionResponse;
type generatedApi_GaussianSplatAssetsService = GaussianSplatAssetsService;
declare const generatedApi_GaussianSplatAssetsService: typeof GaussianSplatAssetsService;
type generatedApi_GaussianSplatFormat = GaussianSplatFormat;
type generatedApi_GenderType = GenderType;
type generatedApi_GenerateCompatibilityRequest = GenerateCompatibilityRequest;
type generatedApi_GenerateCompatibilityResultResponse = GenerateCompatibilityResultResponse;
type generatedApi_GenerateContentRequest = GenerateContentRequest;
type generatedApi_GenerateContentResponse = GenerateContentResponse;
type generatedApi_GenerateProfileRequest = GenerateProfileRequest;
type generatedApi_GenerateProfileResponse = GenerateProfileResponse;
type generatedApi_GeneratedAbilitiesResponse = GeneratedAbilitiesResponse;
type generatedApi_GeneratedBackgroundDetailsResponse = GeneratedBackgroundDetailsResponse;
type generatedApi_GeneratedBasicInfoResponse = GeneratedBasicInfoResponse;
type generatedApi_GeneratedCharacterLocaleResponse = GeneratedCharacterLocaleResponse;
type generatedApi_GeneratedDailyLifeResponse = GeneratedDailyLifeResponse;
type generatedApi_GeneratedPhysicalIdentityResponse = GeneratedPhysicalIdentityResponse;
type generatedApi_GeneratedPreferencesResponse = GeneratedPreferencesResponse;
type generatedApi_GestureMotionsRequest = GestureMotionsRequest;
type generatedApi_GestureMotionsResponse = GestureMotionsResponse;
type generatedApi_GiftPurchaseRequest = GiftPurchaseRequest;
type generatedApi_GiftPurchaseResponse = GiftPurchaseResponse;
type generatedApi_GlbAssetsService = GlbAssetsService;
declare const generatedApi_GlbAssetsService: typeof GlbAssetsService;
type generatedApi_GroupAddMemberRequest = GroupAddMemberRequest;
type generatedApi_GroupBanCreateRequest = GroupBanCreateRequest;
type generatedApi_GroupBanListResponse = GroupBanListResponse;
type generatedApi_GroupBanResponse = GroupBanResponse;
type generatedApi_GroupBansService = GroupBansService;
declare const generatedApi_GroupBansService: typeof GroupBansService;
type generatedApi_GroupCreateRequest = GroupCreateRequest;
type generatedApi_GroupInviteCreateRequest = GroupInviteCreateRequest;
type generatedApi_GroupInviteListResponse = GroupInviteListResponse;
type generatedApi_GroupInviteResponse = GroupInviteResponse;
type generatedApi_GroupInvitesService = GroupInvitesService;
declare const generatedApi_GroupInvitesService: typeof GroupInvitesService;
type generatedApi_GroupJoinRequestListResponse = GroupJoinRequestListResponse;
type generatedApi_GroupJoinRequestResponse = GroupJoinRequestResponse;
type generatedApi_GroupJoinRequestsService = GroupJoinRequestsService;
declare const generatedApi_GroupJoinRequestsService: typeof GroupJoinRequestsService;
type generatedApi_GroupListResponse = GroupListResponse;
type generatedApi_GroupLocalizedRequest = GroupLocalizedRequest;
type generatedApi_GroupLocalizedResponse = GroupLocalizedResponse;
type generatedApi_GroupMemberResponse = GroupMemberResponse;
type generatedApi_GroupMemberRole = GroupMemberRole;
type generatedApi_GroupResponse = GroupResponse;
type generatedApi_GroupRoleUpdateRequest = GroupRoleUpdateRequest;
type generatedApi_GroupUpdateRequest = GroupUpdateRequest;
type generatedApi_GroupVisibility = GroupVisibility;
type generatedApi_GroupsService = GroupsService;
declare const generatedApi_GroupsService: typeof GroupsService;
type generatedApi_HTTPValidationError = HTTPValidationError;
type generatedApi_HairStyleCreateRequest = HairStyleCreateRequest;
type generatedApi_HairStyleListResponse = HairStyleListResponse;
type generatedApi_HairStyleLocalized = HairStyleLocalized;
type generatedApi_HairStyleLocalizedRequest = HairStyleLocalizedRequest;
type generatedApi_HairStyleResponse = HairStyleResponse;
type generatedApi_HairStyleUpdateRequest = HairStyleUpdateRequest;
type generatedApi_HairStylesService = HairStylesService;
declare const generatedApi_HairStylesService: typeof HairStylesService;
type generatedApi_IdleBehaviorsRequest = IdleBehaviorsRequest;
type generatedApi_IdleBehaviorsResponse = IdleBehaviorsResponse;
type generatedApi_ImageAssetListResponse = ImageAssetListResponse;
type generatedApi_ImageAssetLocalized = ImageAssetLocalized;
type generatedApi_ImageAssetResponse = ImageAssetResponse;
type generatedApi_ImageAssetUpdateRequest = ImageAssetUpdateRequest;
type generatedApi_ImageAssetVersionListResponse = ImageAssetVersionListResponse;
type generatedApi_ImageAssetVersionResponse = ImageAssetVersionResponse;
type generatedApi_ImageAssetWithVersionResponse = ImageAssetWithVersionResponse;
type generatedApi_ImageAssetsService = ImageAssetsService;
declare const generatedApi_ImageAssetsService: typeof ImageAssetsService;
type generatedApi_ImageBounceEvent = ImageBounceEvent;
type generatedApi_ImageHideEvent = ImageHideEvent;
type generatedApi_ImageHighlightEvent = ImageHighlightEvent;
type generatedApi_ImageResetEvent = ImageResetEvent;
type generatedApi_ImageScalePulseEvent = ImageScalePulseEvent;
type generatedApi_ImageShakeEvent = ImageShakeEvent;
type generatedApi_ImageShowEvent = ImageShowEvent;
type generatedApi_ImageSilhouetteEvent = ImageSilhouetteEvent;
type generatedApi_ImageSpinEvent = ImageSpinEvent;
type generatedApi_ImportantPerson = ImportantPerson;
type generatedApi_InstanceAccessType = InstanceAccessType;
type generatedApi_InternalMarketplaceService = InternalMarketplaceService;
declare const generatedApi_InternalMarketplaceService: typeof InternalMarketplaceService;
type generatedApi_InternalService = InternalService;
declare const generatedApi_InternalService: typeof InternalService;
type generatedApi_InterruptMode = InterruptMode;
type generatedApi_InviteType = InviteType;
type generatedApi_ItemImageData = ItemImageData;
type generatedApi_ItemImageSet = ItemImageSet;
type generatedApi_JoinPolicy = JoinPolicy;
type generatedApi_JoinRequestStatus = JoinRequestStatus;
type generatedApi_KeyEvent = KeyEvent;
type generatedApi_KeyResponse = KeyResponse;
type generatedApi_KnowledgeGraphEdgeRequest = KnowledgeGraphEdgeRequest;
type generatedApi_KnowledgeGraphEdgeResponse = KnowledgeGraphEdgeResponse;
type generatedApi_KnowledgeGraphNodeRequest = KnowledgeGraphNodeRequest;
type generatedApi_KnowledgeGraphNodeResponse = KnowledgeGraphNodeResponse;
type generatedApi_KnowledgeGraphOverwriteRequest = KnowledgeGraphOverwriteRequest;
type generatedApi_KnowledgeGraphResponse = KnowledgeGraphResponse;
type generatedApi_KnowledgeGraphService = KnowledgeGraphService;
declare const generatedApi_KnowledgeGraphService: typeof KnowledgeGraphService;
type generatedApi_Layer3ModifierSet = Layer3ModifierSet;
type generatedApi_LicenseType = LicenseType;
type generatedApi_LinguisticPatterns = LinguisticPatterns;
type generatedApi_LinkListCursorResponse = LinkListCursorResponse;
type generatedApi_LipSyncFormatRequest = LipSyncFormatRequest;
type generatedApi_LipSyncFormatResponse = LipSyncFormatResponse;
type generatedApi_LipSyncFormatType = LipSyncFormatType;
type generatedApi_LipSyncVisemeMapping = LipSyncVisemeMapping;
type generatedApi_ListingBundleCreateRequest = ListingBundleCreateRequest;
type generatedApi_ListingBundleListResponse = ListingBundleListResponse;
type generatedApi_ListingBundleLocalized = ListingBundleLocalized;
type generatedApi_ListingBundleResponse = ListingBundleResponse;
type generatedApi_ListingBundleType = ListingBundleType;
type generatedApi_ListingBundleUpdateRequest = ListingBundleUpdateRequest;
type generatedApi_ListingCreateRequest = ListingCreateRequest;
type generatedApi_ListingListResponse = ListingListResponse;
type generatedApi_ListingLocalized = ListingLocalized;
type generatedApi_ListingResponse = ListingResponse;
type generatedApi_ListingUpdateRequest = ListingUpdateRequest;
type generatedApi_ListingVisibility = ListingVisibility;
type generatedApi_LlmModelsService = LlmModelsService;
declare const generatedApi_LlmModelsService: typeof LlmModelsService;
type generatedApi_LookAtBlendShapeEntry = LookAtBlendShapeEntry;
type generatedApi_LookAtContextModifier = LookAtContextModifier;
type generatedApi_LookAtFormatRequest = LookAtFormatRequest;
type generatedApi_LookAtFormatResponse = LookAtFormatResponse;
type generatedApi_LookAtFormatType = LookAtFormatType;
type generatedApi_MarketplaceBrowseService = MarketplaceBrowseService;
declare const generatedApi_MarketplaceBrowseService: typeof MarketplaceBrowseService;
type generatedApi_MarketplaceDistributionBundlesService = MarketplaceDistributionBundlesService;
declare const generatedApi_MarketplaceDistributionBundlesService: typeof MarketplaceDistributionBundlesService;
type generatedApi_MarketplaceDistributionsService = MarketplaceDistributionsService;
declare const generatedApi_MarketplaceDistributionsService: typeof MarketplaceDistributionsService;
type generatedApi_MarketplaceEntitlementsService = MarketplaceEntitlementsService;
declare const generatedApi_MarketplaceEntitlementsService: typeof MarketplaceEntitlementsService;
type generatedApi_MarketplaceFavoritesService = MarketplaceFavoritesService;
declare const generatedApi_MarketplaceFavoritesService: typeof MarketplaceFavoritesService;
type generatedApi_MarketplaceGiftsService = MarketplaceGiftsService;
declare const generatedApi_MarketplaceGiftsService: typeof MarketplaceGiftsService;
type generatedApi_MarketplaceListingBundlesService = MarketplaceListingBundlesService;
declare const generatedApi_MarketplaceListingBundlesService: typeof MarketplaceListingBundlesService;
type generatedApi_MarketplaceListingsService = MarketplaceListingsService;
declare const generatedApi_MarketplaceListingsService: typeof MarketplaceListingsService;
type generatedApi_MarketplaceNotificationsService = MarketplaceNotificationsService;
declare const generatedApi_MarketplaceNotificationsService: typeof MarketplaceNotificationsService;
type generatedApi_MarketplaceReportsService = MarketplaceReportsService;
declare const generatedApi_MarketplaceReportsService: typeof MarketplaceReportsService;
type generatedApi_MarketplaceReviewsService = MarketplaceReviewsService;
declare const generatedApi_MarketplaceReviewsService: typeof MarketplaceReviewsService;
type generatedApi_MarketplaceStatus = MarketplaceStatus;
type generatedApi_MatchLevel = MatchLevel;
type generatedApi_MemoriesService = MemoriesService;
declare const generatedApi_MemoriesService: typeof MemoriesService;
type generatedApi_MemoryCreateRequest = MemoryCreateRequest;
type generatedApi_MemoryListResponse = MemoryListResponse;
type generatedApi_MemoryOrganizationResponse = MemoryOrganizationResponse;
type generatedApi_MemoryOrganizationService = MemoryOrganizationService;
declare const generatedApi_MemoryOrganizationService: typeof MemoryOrganizationService;
type generatedApi_MemoryPinRequest = MemoryPinRequest;
type generatedApi_MemoryResponse = MemoryResponse;
type generatedApi_MemorySearchRequest = MemorySearchRequest;
type generatedApi_MemorySearchResponse = MemorySearchResponse;
type generatedApi_MemorySummaryResponse = MemorySummaryResponse;
type generatedApi_MemoryUpdateRequest = MemoryUpdateRequest;
type generatedApi_MergeAccountsRequest = MergeAccountsRequest;
type generatedApi_MigrationStatusResponse = MigrationStatusResponse;
type generatedApi_Model3DSourceFormat = Model3DSourceFormat;
type generatedApi_ModelBenchmarkResponse = ModelBenchmarkResponse;
type generatedApi_ModelInfoResponse = ModelInfoResponse;
type generatedApi_ModelPricingResponse = ModelPricingResponse;
declare const generatedApi_ModelType: typeof ModelType;
declare const generatedApi_ModificationPolicy: typeof ModificationPolicy;
type generatedApi_ModifierEntry = ModifierEntry;
type generatedApi_MoodRegionSchema = MoodRegionSchema;
type generatedApi_MoodService = MoodService;
declare const generatedApi_MoodService: typeof MoodService;
type generatedApi_MoodStateResponse = MoodStateResponse;
type generatedApi_MoodUpdateRequest = MoodUpdateRequest;
type generatedApi_MoodVerbalizedResponse = MoodVerbalizedResponse;
type generatedApi_MotionAutoParamsResponse = MotionAutoParamsResponse;
type generatedApi_MotionCandidate = MotionCandidate;
type generatedApi_MotionCreateRequest = MotionCreateRequest;
type generatedApi_MotionFormatResponse = MotionFormatResponse;
declare const generatedApi_MotionFormatType: typeof MotionFormatType;
type generatedApi_MotionFormatsAnimatorService = MotionFormatsAnimatorService;
declare const generatedApi_MotionFormatsAnimatorService: typeof MotionFormatsAnimatorService;
type generatedApi_MotionFormatsGlbService = MotionFormatsGlbService;
declare const generatedApi_MotionFormatsGlbService: typeof MotionFormatsGlbService;
type generatedApi_MotionFormatsVrmaService = MotionFormatsVrmaService;
declare const generatedApi_MotionFormatsVrmaService: typeof MotionFormatsVrmaService;
type generatedApi_MotionIndexEntrySchema = MotionIndexEntrySchema;
type generatedApi_MotionLayer = MotionLayer;
type generatedApi_MotionListResponse = MotionListResponse;
type generatedApi_MotionLocalized = MotionLocalized;
type generatedApi_MotionLocalizedRequest = MotionLocalizedRequest;
type generatedApi_MotionResponse = MotionResponse;
type generatedApi_MotionSearchResponse = MotionSearchResponse;
type generatedApi_MotionSuggestByTextRequest = MotionSuggestByTextRequest;
type generatedApi_MotionSuggestionResponse = MotionSuggestionResponse;
type generatedApi_MotionTimingContextModifier = MotionTimingContextModifier;
declare const generatedApi_MotionType: typeof MotionType;
type generatedApi_MotionUpdateRequest = MotionUpdateRequest;
type generatedApi_MotionsService = MotionsService;
declare const generatedApi_MotionsService: typeof MotionsService;
type generatedApi_MotionsSummaryResponse = MotionsSummaryResponse;
type generatedApi_MotionsSummaryService = MotionsSummaryService;
declare const generatedApi_MotionsSummaryService: typeof MotionsSummaryService;
type generatedApi_MouthBlendShapeGroup = MouthBlendShapeGroup;
type generatedApi_NarrativeEvent_Input = NarrativeEvent_Input;
type generatedApi_NarrativeEvent_Output = NarrativeEvent_Output;
type generatedApi_NearestByVADRequest = NearestByVADRequest;
type generatedApi_NotificationListResponse = NotificationListResponse;
type generatedApi_NotificationResponse = NotificationResponse;
type generatedApi_NotificationType = NotificationType;
type generatedApi_ObjectVisibilityEntryRequest = ObjectVisibilityEntryRequest;
type generatedApi_ObjectVisibilityEntryResponse = ObjectVisibilityEntryResponse;
declare const generatedApi_OpenAPI: typeof OpenAPI;
type generatedApi_OpenAPIConfig = OpenAPIConfig;
type generatedApi_OtherBlendShapeGroup = OtherBlendShapeGroup;
type generatedApi_OutfitCategory = OutfitCategory;
type generatedApi_OutfitCreateRequest = OutfitCreateRequest;
type generatedApi_OutfitListResponse = OutfitListResponse;
type generatedApi_OutfitLocalized = OutfitLocalized;
type generatedApi_OutfitLocalizedRequest = OutfitLocalizedRequest;
type generatedApi_OutfitResponse = OutfitResponse;
type generatedApi_OutfitUpdateRequest = OutfitUpdateRequest;
type generatedApi_OutfitsService = OutfitsService;
declare const generatedApi_OutfitsService: typeof OutfitsService;
type generatedApi_OwnerType = OwnerType;
type generatedApi_ParamConfig = ParamConfig;
type generatedApi_ParticipantType = ParticipantType;
type generatedApi_PendingReviewListResponse = PendingReviewListResponse;
declare const generatedApi_PersonalityArchetype: typeof PersonalityArchetype;
type generatedApi_PersonalityPresetListResponse = PersonalityPresetListResponse;
type generatedApi_PersonalityPresetResponse = PersonalityPresetResponse;
type generatedApi_PersonalityPresetsService = PersonalityPresetsService;
declare const generatedApi_PersonalityPresetsService: typeof PersonalityPresetsService;
type generatedApi_PersonalityTraits = PersonalityTraits;
type generatedApi_Phoneme = Phoneme;
type generatedApi_PlayerActionEvent = PlayerActionEvent;
type generatedApi_PoseDetectionResponse = PoseDetectionResponse;
type generatedApi_PoseMotionsRequest = PoseMotionsRequest;
type generatedApi_PoseMotionsResponse = PoseMotionsResponse;
type generatedApi_PostureTransitionsRequest = PostureTransitionsRequest;
type generatedApi_PostureTransitionsResponse = PostureTransitionsResponse;
type generatedApi_PowerDynamic = PowerDynamic;
type generatedApi_PreferType = PreferType;
type generatedApi_PreferenceItem = PreferenceItem;
type generatedApi_PresetBlinkParams = PresetBlinkParams;
type generatedApi_PresetBreathingParams = PresetBreathingParams;
type generatedApi_PresetConversationTimingParams = PresetConversationTimingParams;
type generatedApi_PresetExpressionParams = PresetExpressionParams;
type generatedApi_PresetGestureParams = PresetGestureParams;
type generatedApi_PresetLipSyncParams = PresetLipSyncParams;
type generatedApi_PresetLookAtParams = PresetLookAtParams;
type generatedApi_PresetMotionTimingParams = PresetMotionTimingParams;
type generatedApi_ProtectedImageBatchItem = ProtectedImageBatchItem;
type generatedApi_ProtectedImageBatchRequest = ProtectedImageBatchRequest;
type generatedApi_ProtectedImageBatchResponse = ProtectedImageBatchResponse;
type generatedApi_ProtectedImageBatchResponseItem = ProtectedImageBatchResponseItem;
type generatedApi_ProviderModelsResponse = ProviderModelsResponse;
type generatedApi_PublishScope = PublishScope;
type generatedApi_PurchaseCompletedRequest = PurchaseCompletedRequest;
type generatedApi_PurchaseCompletedResponse = PurchaseCompletedResponse;
type generatedApi_PurchasedItem = PurchasedItem;
type generatedApi_RandomMotionEntryRequest = RandomMotionEntryRequest;
type generatedApi_RandomMotionEntryResponse = RandomMotionEntryResponse;
type generatedApi_RecommendationItem = RecommendationItem;
type generatedApi_RecommendationRequest = RecommendationRequest;
type generatedApi_RecommendationResponse = RecommendationResponse;
type generatedApi_RegenerateContentFromInputRequest = RegenerateContentFromInputRequest;
type generatedApi_RegenerateContentFromInputResponse = RegenerateContentFromInputResponse;
type generatedApi_RegenerateContentRequest = RegenerateContentRequest;
type generatedApi_RegenerateContentResponse = RegenerateContentResponse;
type generatedApi_RegisterLinkRequest = RegisterLinkRequest;
type generatedApi_RelatedAssetResponse = RelatedAssetResponse;
type generatedApi_RelationshipContextEntry = RelationshipContextEntry;
type generatedApi_RelationshipContextMapResponse = RelationshipContextMapResponse;
type generatedApi_RelationshipContextService = RelationshipContextService;
declare const generatedApi_RelationshipContextService: typeof RelationshipContextService;
type generatedApi_RelationshipRole = RelationshipRole;
type generatedApi_RelationshipsService = RelationshipsService;
declare const generatedApi_RelationshipsService: typeof RelationshipsService;
type generatedApi_RemoveAliasRequest = RemoveAliasRequest;
type generatedApi_RenderLayer = RenderLayer;
type generatedApi_ReorderRequest = ReorderRequest;
type generatedApi_ReorderResultResponse = ReorderResultResponse;
type generatedApi_ReportCreateRequest = ReportCreateRequest;
type generatedApi_ReportReason = ReportReason;
type generatedApi_ResettableScreenEffectType = ResettableScreenEffectType;
type generatedApi_ResettableVisualEffectType = ResettableVisualEffectType;
type generatedApi_Resolution = Resolution;
type generatedApi_ResolveExpressionRequest = ResolveExpressionRequest;
type generatedApi_ResolveExpressionResponse = ResolveExpressionResponse;
type generatedApi_ReviewCreateRequest = ReviewCreateRequest;
type generatedApi_ReviewListResponse = ReviewListResponse;
type generatedApi_ReviewLogListResponse = ReviewLogListResponse;
type generatedApi_ReviewLogResponse = ReviewLogResponse;
type generatedApi_ReviewRequestResponse = ReviewRequestResponse;
type generatedApi_ReviewResponse = ReviewResponse;
type generatedApi_ReviewResultResponse = ReviewResultResponse;
type generatedApi_ReviewStatus = ReviewStatus;
type generatedApi_ReviewStatusResponse = ReviewStatusResponse;
type generatedApi_ReviewTargetType = ReviewTargetType;
type generatedApi_ReviewType = ReviewType;
type generatedApi_ReviewsService = ReviewsService;
declare const generatedApi_ReviewsService: typeof ReviewsService;
declare const generatedApi_RightsScope: typeof RightsScope;
declare const generatedApi_RomanceTag: typeof RomanceTag;
type generatedApi_ScheduleCreateRequest = ScheduleCreateRequest;
type generatedApi_ScheduleListResponse = ScheduleListResponse;
type generatedApi_ScheduleResponse = ScheduleResponse;
type generatedApi_ScheduleUpdateRequest = ScheduleUpdateRequest;
type generatedApi_SchedulesService = SchedulesService;
declare const generatedApi_SchedulesService: typeof SchedulesService;
type generatedApi_ScreenBlurEvent = ScreenBlurEvent;
type generatedApi_ScreenColorAdjustEvent = ScreenColorAdjustEvent;
type generatedApi_ScreenFadeInEvent = ScreenFadeInEvent;
type generatedApi_ScreenFadeOutEvent = ScreenFadeOutEvent;
type generatedApi_ScreenFlashEvent = ScreenFlashEvent;
type generatedApi_ScreenOrientation = ScreenOrientation;
type generatedApi_ScreenResetEvent = ScreenResetEvent;
type generatedApi_ScreenShakeEvent = ScreenShakeEvent;
type generatedApi_SePlayEvent = SePlayEvent;
type generatedApi_SellableAssetType = SellableAssetType;
type generatedApi_SessionHistoryCreateRequest = SessionHistoryCreateRequest;
type generatedApi_SessionHistoryListResponse = SessionHistoryListResponse;
type generatedApi_SessionHistoryResponse = SessionHistoryResponse;
type generatedApi_SessionHistoryService = SessionHistoryService;
declare const generatedApi_SessionHistoryService: typeof SessionHistoryService;
type generatedApi_SessionTokenUsageCreateRequest = SessionTokenUsageCreateRequest;
type generatedApi_SessionTokenUsageResponse = SessionTokenUsageResponse;
type generatedApi_SettingsAutoTagRequest = SettingsAutoTagRequest;
type generatedApi_SettingsContentResponse = SettingsContentResponse;
type generatedApi_SettingsContent_Input = SettingsContent_Input;
type generatedApi_SettingsContent_Output = SettingsContent_Output;
type generatedApi_SettingsCreateRequest = SettingsCreateRequest;
type generatedApi_SettingsCreateWithContentRequest = SettingsCreateWithContentRequest;
type generatedApi_SettingsListResponse = SettingsListResponse;
type generatedApi_SettingsLocalized = SettingsLocalized;
type generatedApi_SettingsResponse = SettingsResponse;
type generatedApi_SettingsSearchRequest = SettingsSearchRequest;
type generatedApi_SettingsSearchResponse = SettingsSearchResponse;
type generatedApi_SettingsService = SettingsService;
declare const generatedApi_SettingsService: typeof SettingsService;
type generatedApi_SettingsSnippetsClientService = SettingsSnippetsClientService;
declare const generatedApi_SettingsSnippetsClientService: typeof SettingsSnippetsClientService;
type generatedApi_SettingsSnippetsService = SettingsSnippetsService;
declare const generatedApi_SettingsSnippetsService: typeof SettingsSnippetsService;
type generatedApi_SettingsUpdateRequest = SettingsUpdateRequest;
type generatedApi_SignalModeBehaviorRequest = SignalModeBehaviorRequest;
type generatedApi_SignalModeBehaviorResponse = SignalModeBehaviorResponse;
type generatedApi_SignalMotionEntryRequest = SignalMotionEntryRequest;
type generatedApi_SignalMotionEntryResponse = SignalMotionEntryResponse;
type generatedApi_SignaturePhrase = SignaturePhrase;
type generatedApi_SignedUrlResponse = SignedUrlResponse;
type generatedApi_SimilarTagItem = SimilarTagItem;
type generatedApi_SimilarTagsResponse = SimilarTagsResponse;
type generatedApi_SimpleCopyEmotionsResponse = SimpleCopyEmotionsResponse;
type generatedApi_SimpleCopyMotionsResponse = SimpleCopyMotionsResponse;
type generatedApi_SimpleCopySummary = SimpleCopySummary;
type generatedApi_Situation = Situation;
type generatedApi_SituationCategory = SituationCategory;
type generatedApi_SizeProfile = SizeProfile;
type generatedApi_SizeProfileDataResponse = SizeProfileDataResponse;
type generatedApi_SnippetBulkDeleteResponse = SnippetBulkDeleteResponse;
type generatedApi_SnippetCreateRequest = SnippetCreateRequest;
type generatedApi_SnippetGenerateFromInputRequest = SnippetGenerateFromInputRequest;
type generatedApi_SnippetGenerateRequest = SnippetGenerateRequest;
type generatedApi_SnippetGenerateResponse = SnippetGenerateResponse;
type generatedApi_SnippetRegenerateFromInputRequest = SnippetRegenerateFromInputRequest;
type generatedApi_SnippetRegenerateRequest = SnippetRegenerateRequest;
type generatedApi_SnippetUpdateRequest = SnippetUpdateRequest;
type generatedApi_SourceType = SourceType;
type generatedApi_SpecialDay = SpecialDay;
type generatedApi_SpeechMode = SpeechMode;
type generatedApi_SpeechModeChangeEvent = SpeechModeChangeEvent;
type generatedApi_SpriteBlinkPayload = SpriteBlinkPayload;
type generatedApi_SpriteBlinkPostureData = SpriteBlinkPostureData;
type generatedApi_SpriteBreathingPayload = SpriteBreathingPayload;
type generatedApi_SpriteExpressionData = SpriteExpressionData;
type generatedApi_SpriteExpressionPostureData = SpriteExpressionPostureData;
type generatedApi_SpriteExpressionPostures = SpriteExpressionPostures;
type generatedApi_SpriteLipSyncPayload = SpriteLipSyncPayload;
type generatedApi_SpriteLipSyncPostureData = SpriteLipSyncPostureData;
type generatedApi_SpriteLookAtPayload = SpriteLookAtPayload;
type generatedApi_SpriteLookAtPostureData = SpriteLookAtPostureData;
type generatedApi_SpriteModelPostureDataResponse = SpriteModelPostureDataResponse;
type generatedApi_SpriteModelPosturesResponse = SpriteModelPosturesResponse;
type generatedApi_SpriteModelResponse = SpriteModelResponse;
type generatedApi_SpriteVisemeMapping = SpriteVisemeMapping;
type generatedApi_StaffConfirmRequest = StaffConfirmRequest;
type generatedApi_StaffReviewRequestRequest = StaffReviewRequestRequest;
type generatedApi_StandardContextTableResponse = StandardContextTableResponse;
type generatedApi_StateBehaviorRequest = StateBehaviorRequest;
type generatedApi_StateBehaviorResponse = StateBehaviorResponse;
type generatedApi_StateService = StateService;
declare const generatedApi_StateService: typeof StateService;
type generatedApi_StoriesService = StoriesService;
declare const generatedApi_StoriesService: typeof StoriesService;
type generatedApi_StoryAiUsage = StoryAiUsage;
type generatedApi_StoryCreateRequest = StoryCreateRequest;
type generatedApi_StoryDeleteResponse = StoryDeleteResponse;
type generatedApi_StoryDuplicateResponse = StoryDuplicateResponse;
type generatedApi_StoryEntitySnapshot = StoryEntitySnapshot;
type generatedApi_StoryInstanceCreateRequest = StoryInstanceCreateRequest;
type generatedApi_StoryInstanceListResponse = StoryInstanceListResponse;
type generatedApi_StoryInstanceResponse = StoryInstanceResponse;
type generatedApi_StoryInstancesService = StoryInstancesService;
declare const generatedApi_StoryInstancesService: typeof StoryInstancesService;
type generatedApi_StoryListResponse = StoryListResponse;
type generatedApi_StoryLocalized = StoryLocalized;
type generatedApi_StoryResponse = StoryResponse;
type generatedApi_StorySceneCreateRequest = StorySceneCreateRequest;
type generatedApi_StorySceneLinkCreateRequest = StorySceneLinkCreateRequest;
type generatedApi_StorySceneLinkListResponse = StorySceneLinkListResponse;
type generatedApi_StorySceneLinkResponse = StorySceneLinkResponse;
type generatedApi_StorySceneLinkUpdateRequest = StorySceneLinkUpdateRequest;
type generatedApi_StorySceneListResponse = StorySceneListResponse;
type generatedApi_StorySceneLocalized = StorySceneLocalized;
type generatedApi_StorySceneResponse = StorySceneResponse;
type generatedApi_StorySceneUpdateRequest = StorySceneUpdateRequest;
type generatedApi_StorySettings = StorySettings;
type generatedApi_StoryTemplateListResponse = StoryTemplateListResponse;
type generatedApi_StoryTemplatePromoteRequest = StoryTemplatePromoteRequest;
type generatedApi_StoryTemplateResponse = StoryTemplateResponse;
type generatedApi_StoryTemplateUpdateRequest = StoryTemplateUpdateRequest;
type generatedApi_StoryTemplatesService = StoryTemplatesService;
declare const generatedApi_StoryTemplatesService: typeof StoryTemplatesService;
type generatedApi_StoryUpdateRequest = StoryUpdateRequest;
type generatedApi_StoryWithChildrenResponse = StoryWithChildrenResponse;
type generatedApi_SuccessResponse = SuccessResponse;
type generatedApi_SuggestByTextRequest = SuggestByTextRequest;
type generatedApi_SuspectResult = SuspectResult;
type generatedApi_SyncFromEntitlementRequest = SyncFromEntitlementRequest;
type generatedApi_SynonymsRequest = SynonymsRequest;
type generatedApi_TTSRequest = TTSRequest;
type generatedApi_TagCategoriesForTagResponse = TagCategoriesForTagResponse;
type generatedApi_TagCategoriesResponse = TagCategoriesResponse;
type generatedApi_TagCategoryCreateRequest = TagCategoryCreateRequest;
type generatedApi_TagCategoryItemWithOrder = TagCategoryItemWithOrder;
type generatedApi_TagCategoryLinkCreateRequest = TagCategoryLinkCreateRequest;
type generatedApi_TagCategoryLinkResponse = TagCategoryLinkResponse;
type generatedApi_TagCategoryListCursorResponse = TagCategoryListCursorResponse;
type generatedApi_TagCategoryLocalized = TagCategoryLocalized;
type generatedApi_TagCategoryResponse = TagCategoryResponse;
type generatedApi_TagCategoryWithLocaleResponse = TagCategoryWithLocaleResponse;
type generatedApi_TagCompatibilityCreateRequest = TagCompatibilityCreateRequest;
type generatedApi_TagCompatibilityResponse = TagCompatibilityResponse;
type generatedApi_TagCreateRequest = TagCreateRequest;
type generatedApi_TagListCursorResponse = TagListCursorResponse;
type generatedApi_TagLocalized = TagLocalized;
type generatedApi_TagResponse = TagResponse;
type generatedApi_TagSearchResultItem = TagSearchResultItem;
type generatedApi_TagSearchResultResponse = TagSearchResultResponse;
declare const generatedApi_TagWithLevel: typeof TagWithLevel;
type generatedApi_TagWithLocaleResponse = TagWithLocaleResponse;
type generatedApi_TagsService = TagsService;
declare const generatedApi_TagsService: typeof TagsService;
type generatedApi_TargetGenderType = TargetGenderType;
type generatedApi_TaxonomyCategoryItem = TaxonomyCategoryItem;
type generatedApi_TaxonomyResponse = TaxonomyResponse;
type generatedApi_TaxonomyTagItem = TaxonomyTagItem;
type generatedApi_TemplateLocalized = TemplateLocalized;
type generatedApi_TimeSpecificity = TimeSpecificity;
type generatedApi_ToolDefinitionCreateRequest = ToolDefinitionCreateRequest;
type generatedApi_ToolDefinitionListResponse = ToolDefinitionListResponse;
type generatedApi_ToolDefinitionResponse = ToolDefinitionResponse;
type generatedApi_ToolDefinitionUpdateRequest = ToolDefinitionUpdateRequest;
type generatedApi_ToolDefinitionsService = ToolDefinitionsService;
declare const generatedApi_ToolDefinitionsService: typeof ToolDefinitionsService;
type generatedApi_ToolParameterPropertySchema = ToolParameterPropertySchema;
type generatedApi_ToolPosition = ToolPosition;
type generatedApi_TransitionType = TransitionType;
type generatedApi_TreeNode = TreeNode;
type generatedApi_TtsService = TtsService;
declare const generatedApi_TtsService: typeof TtsService;
type generatedApi_TurnEndPredictionRequest = TurnEndPredictionRequest;
type generatedApi_TurnEndPredictionResponse = TurnEndPredictionResponse;
type generatedApi_TurnEndPredictionService = TurnEndPredictionService;
declare const generatedApi_TurnEndPredictionService: typeof TurnEndPredictionService;
declare const generatedApi_UnifiedChatCompletionRequest: typeof UnifiedChatCompletionRequest;
type generatedApi_UnifiedLlmWrapperService = UnifiedLlmWrapperService;
declare const generatedApi_UnifiedLlmWrapperService: typeof UnifiedLlmWrapperService;
type generatedApi_UnifiedStructuredCompletionRequest = UnifiedStructuredCompletionRequest;
declare const generatedApi_UsageRestrictions: typeof UsageRestrictions;
type generatedApi_UsageSummaryAccumulateRequest = UsageSummaryAccumulateRequest;
type generatedApi_UsageSummaryResponse = UsageSummaryResponse;
type generatedApi_UsageSummaryService = UsageSummaryService;
declare const generatedApi_UsageSummaryService: typeof UsageSummaryService;
type generatedApi_UserCreateRequest = UserCreateRequest;
type generatedApi_UserResponse = UserResponse;
type generatedApi_UserUpdateRequest = UserUpdateRequest;
type generatedApi_UsersService = UsersService;
declare const generatedApi_UsersService: typeof UsersService;
type generatedApi_VAD = VAD;
type generatedApi_VADSchema_Output = VADSchema_Output;
type generatedApi_VRMAAssetListResponse = VRMAAssetListResponse;
type generatedApi_VRMAAssetLocalized = VRMAAssetLocalized;
type generatedApi_VRMAAssetResponse = VRMAAssetResponse;
type generatedApi_VRMAAssetUpdateRequest = VRMAAssetUpdateRequest;
type generatedApi_VRMAAssetVersionResponse = VRMAAssetVersionResponse;
type generatedApi_VRMAAssetWithVersionResponse = VRMAAssetWithVersionResponse;
type generatedApi_VRMAMotionData = VRMAMotionData;
type generatedApi_VRMAssetListResponse = VRMAssetListResponse;
type generatedApi_VRMAssetLocalized = VRMAssetLocalized;
type generatedApi_VRMAssetResponse = VRMAssetResponse;
type generatedApi_VRMAssetUpdateRequest = VRMAssetUpdateRequest;
type generatedApi_VRMModelResponse = VRMModelResponse;
type generatedApi_VadNonVerbalMappingResponse = VadNonVerbalMappingResponse;
type generatedApi_ValidatePriceItem = ValidatePriceItem;
type generatedApi_ValidatePricesRequest = ValidatePricesRequest;
type generatedApi_ValidatePricesResponse = ValidatePricesResponse;
type generatedApi_ValidationError = ValidationError;
type generatedApi_ValueAndBeliefSystem = ValueAndBeliefSystem;
type generatedApi_VideoAssetListResponse = VideoAssetListResponse;
type generatedApi_VideoAssetLocalized = VideoAssetLocalized;
type generatedApi_VideoAssetResponse = VideoAssetResponse;
type generatedApi_VideoAssetUpdateRequest = VideoAssetUpdateRequest;
type generatedApi_VideoAssetVersionListResponse = VideoAssetVersionListResponse;
type generatedApi_VideoAssetVersionResponse = VideoAssetVersionResponse;
type generatedApi_VideoAssetWithVersionResponse = VideoAssetWithVersionResponse;
type generatedApi_VideoAssetsService = VideoAssetsService;
declare const generatedApi_VideoAssetsService: typeof VideoAssetsService;
type generatedApi_VideoCodec = VideoCodec;
type generatedApi_VideoFormat = VideoFormat;
type generatedApi_VideoQuality = VideoQuality;
type generatedApi_ViewAngle = ViewAngle;
type generatedApi_VoiceAutoTagRequest = VoiceAutoTagRequest;
type generatedApi_VoiceCreateRequest = VoiceCreateRequest;
type generatedApi_VoiceListResponse = VoiceListResponse;
type generatedApi_VoiceLocalized = VoiceLocalized;
type generatedApi_VoiceLocalizedRequest = VoiceLocalizedRequest;
type generatedApi_VoiceModel = VoiceModel;
type generatedApi_VoiceModelRequest = VoiceModelRequest;
type generatedApi_VoiceProvider = VoiceProvider;
type generatedApi_VoiceResponse = VoiceResponse;
type generatedApi_VoiceSearchResponse = VoiceSearchResponse;
type generatedApi_VoiceUpdateRequest = VoiceUpdateRequest;
type generatedApi_VoicesService = VoicesService;
declare const generatedApi_VoicesService: typeof VoicesService;
type generatedApi_VrmAssetsService = VrmAssetsService;
declare const generatedApi_VrmAssetsService: typeof VrmAssetsService;
type generatedApi_VrmaAssetsService = VrmaAssetsService;
declare const generatedApi_VrmaAssetsService: typeof VrmaAssetsService;
type generatedApi_WaitEvent = WaitEvent;
type generatedApi_WhitelistRule = WhitelistRule;
type generatedApi_XYZScale = XYZScale;
type generatedApi_app__api__schemas__emotion__VADSchema = app__api__schemas__emotion__VADSchema;
type generatedApi_app__api__schemas__emotion_config__VADSchema = app__api__schemas__emotion_config__VADSchema;
declare namespace generatedApi {
  export { type generatedApi_AccessType as AccessType, generatedApi_AccessoriesService as AccessoriesService, type generatedApi_AccessoryCategory as AccessoryCategory, type generatedApi_AccessoryCreateRequest as AccessoryCreateRequest, type generatedApi_AccessoryListResponse as AccessoryListResponse, type generatedApi_AccessoryLocalized as AccessoryLocalized, type generatedApi_AccessoryLocalizedRequest as AccessoryLocalizedRequest, type generatedApi_AccessoryResponse as AccessoryResponse, type generatedApi_AccessoryUpdateRequest as AccessoryUpdateRequest, generatedApi_AcquisitionMethod as AcquisitionMethod, type generatedApi_AddAliasRequest as AddAliasRequest, generatedApi_AdminDbStatsService as AdminDbStatsService, generatedApi_AdminFirestoreService as AdminFirestoreService, generatedApi_AdminForensicsService as AdminForensicsService, generatedApi_AdminMigrationService as AdminMigrationService, generatedApi_AdminReviewsService as AdminReviewsService, generatedApi_AdminService as AdminService, type generatedApi_AffinityLevel as AffinityLevel, type generatedApi_AgeGroupType as AgeGroupType, generatedApi_AgeRating as AgeRating, type generatedApi_AllModelsResponse as AllModelsResponse, type generatedApi_AnimatedImageAssetListResponse as AnimatedImageAssetListResponse, type generatedApi_AnimatedImageAssetLocalized as AnimatedImageAssetLocalized, type generatedApi_AnimatedImageAssetResponse as AnimatedImageAssetResponse, type generatedApi_AnimatedImageAssetUpdateRequest as AnimatedImageAssetUpdateRequest, type generatedApi_AnimatedImageAssetVersionListResponse as AnimatedImageAssetVersionListResponse, type generatedApi_AnimatedImageAssetVersionResponse as AnimatedImageAssetVersionResponse, type generatedApi_AnimatedImageAssetWithVersionResponse as AnimatedImageAssetWithVersionResponse, generatedApi_AnimatedImageAssetsService as AnimatedImageAssetsService, type generatedApi_AnimatedImageFormat as AnimatedImageFormat, generatedApi_AnimatedImageRole as AnimatedImageRole, type generatedApi_AnimationAutoTagRequest as AnimationAutoTagRequest, type generatedApi_AnimationClipAssetListResponse as AnimationClipAssetListResponse, type generatedApi_AnimationClipAssetLocalized as AnimationClipAssetLocalized, type generatedApi_AnimationClipAssetResponse as AnimationClipAssetResponse, type generatedApi_AnimationClipAssetUpdateRequest as AnimationClipAssetUpdateRequest, type generatedApi_AnimationClipAssetVersionResponse as AnimationClipAssetVersionResponse, type generatedApi_AnimationClipAssetWithVersionResponse as AnimationClipAssetWithVersionResponse, generatedApi_AnimationClipAssetsService as AnimationClipAssetsService, type generatedApi_AnimatorMotionData as AnimatorMotionData, generatedApi_ApiError as ApiError, type generatedApi_AppealItemRequest as AppealItemRequest, type generatedApi_AppealItemResponse as AppealItemResponse, type generatedApi_AppealReason as AppealReason, type generatedApi_AppealReviewRequest as AppealReviewRequest, type generatedApi_AppearanceVariantCreateRequest as AppearanceVariantCreateRequest, type generatedApi_AppearanceVariantListResponse as AppearanceVariantListResponse, type generatedApi_AppearanceVariantResponse as AppearanceVariantResponse, type generatedApi_AppearanceVariantUpdateRequest as AppearanceVariantUpdateRequest, type generatedApi_ArchetypeSensitivity as ArchetypeSensitivity, type generatedApi_AssetAccessLevel as AssetAccessLevel, type generatedApi_AssetAiUsage as AssetAiUsage, type generatedApi_AssetBundleAssetListResponse as AssetBundleAssetListResponse, type generatedApi_AssetBundleAssetLocalized as AssetBundleAssetLocalized, type generatedApi_AssetBundleAssetResponse as AssetBundleAssetResponse, type generatedApi_AssetBundleAssetUpdateRequest as AssetBundleAssetUpdateRequest, type generatedApi_AssetBundleAssetVersionListResponse as AssetBundleAssetVersionListResponse, type generatedApi_AssetBundleAssetVersionResponse as AssetBundleAssetVersionResponse, type generatedApi_AssetBundleAssetWithVersionResponse as AssetBundleAssetWithVersionResponse, generatedApi_AssetBundleAssetsService as AssetBundleAssetsService, type generatedApi_AssetBundleModelResponse as AssetBundleModelResponse, type generatedApi_AssetBundleVariant as AssetBundleVariant, type generatedApi_AssetBundleVariantDataResponse as AssetBundleVariantDataResponse, type generatedApi_AssetCatalog as AssetCatalog, generatedApi_AssetRightsDeclaration as AssetRightsDeclaration, type generatedApi_AssetRole as AssetRole, type generatedApi_AssetType as AssetType, generatedApi_AssetUsageConditions as AssetUsageConditions, type generatedApi_AssetVariantGroupResponse as AssetVariantGroupResponse, type generatedApi_AssetVariantLinkResponse as AssetVariantLinkResponse, generatedApi_AssetVariantsService as AssetVariantsService, type generatedApi_AttachmentPointPoseResponse as AttachmentPointPoseResponse, type generatedApi_AttachmentTransform2D as AttachmentTransform2D, type generatedApi_AttachmentTransform3D as AttachmentTransform3D, type generatedApi_AttachmentType as AttachmentType, type generatedApi_AudienceScale as AudienceScale, type generatedApi_AudioAssetListResponse as AudioAssetListResponse, type generatedApi_AudioAssetLocalized as AudioAssetLocalized, type generatedApi_AudioAssetResponse as AudioAssetResponse, type generatedApi_AudioAssetUpdateRequest as AudioAssetUpdateRequest, type generatedApi_AudioAssetVersionListResponse as AudioAssetVersionListResponse, type generatedApi_AudioAssetVersionResponse as AudioAssetVersionResponse, type generatedApi_AudioAssetWithVersionResponse as AudioAssetWithVersionResponse, generatedApi_AudioAssetsService as AudioAssetsService, type generatedApi_AudioFormat as AudioFormat, type generatedApi_AudioQuality as AudioQuality, type generatedApi_AudioType as AudioType, generatedApi_AuthenticationService as AuthenticationService, type generatedApi_AutoCreateCharacterRequest as AutoCreateCharacterRequest, generatedApi_AutoParamsService as AutoParamsService, type generatedApi_AutoReviewRequest as AutoReviewRequest, type generatedApi_AutoTagResponse as AutoTagResponse, generatedApi_AutoTaggingService as AutoTaggingService, type generatedApi_AutoTransition_Input as AutoTransition_Input, type generatedApi_AutoTransition_Output as AutoTransition_Output, type generatedApi_AvatarAiUsage as AvatarAiUsage, generatedApi_AvatarAppearanceVariantsService as AvatarAppearanceVariantsService, type generatedApi_AvatarAutoParamsResponse as AvatarAutoParamsResponse, type generatedApi_AvatarBlinkCreateRequest as AvatarBlinkCreateRequest, type generatedApi_AvatarBlinkListResponse as AvatarBlinkListResponse, type generatedApi_AvatarBlinkResponse as AvatarBlinkResponse, generatedApi_AvatarBlinksService as AvatarBlinksService, type generatedApi_AvatarBreathingCreateRequest as AvatarBreathingCreateRequest, type generatedApi_AvatarBreathingListResponse as AvatarBreathingListResponse, type generatedApi_AvatarBreathingResponse as AvatarBreathingResponse, generatedApi_AvatarBreathingsService as AvatarBreathingsService, type generatedApi_AvatarCoreMotionsCreateRequest as AvatarCoreMotionsCreateRequest, type generatedApi_AvatarCoreMotionsResponse as AvatarCoreMotionsResponse, generatedApi_AvatarCoreMotionsService as AvatarCoreMotionsService, type generatedApi_AvatarCoreMotionsUpdateRequest as AvatarCoreMotionsUpdateRequest, type generatedApi_AvatarEntitySnapshot as AvatarEntitySnapshot, type generatedApi_AvatarExpressionCreateRequest as AvatarExpressionCreateRequest, type generatedApi_AvatarExpressionResponse as AvatarExpressionResponse, type generatedApi_AvatarExpressionUpdateRequest as AvatarExpressionUpdateRequest, generatedApi_AvatarExpressionsService as AvatarExpressionsService, type generatedApi_AvatarInstanceCreateRequest as AvatarInstanceCreateRequest, type generatedApi_AvatarInstanceListResponse as AvatarInstanceListResponse, type generatedApi_AvatarInstanceResponse as AvatarInstanceResponse, generatedApi_AvatarInstancesService as AvatarInstancesService, type generatedApi_AvatarItemAttachmentCreateRequest as AvatarItemAttachmentCreateRequest, type generatedApi_AvatarItemAttachmentListResponse as AvatarItemAttachmentListResponse, type generatedApi_AvatarItemAttachmentResponse as AvatarItemAttachmentResponse, type generatedApi_AvatarItemAttachmentUpdateRequest as AvatarItemAttachmentUpdateRequest, generatedApi_AvatarItemAttachmentsService as AvatarItemAttachmentsService, type generatedApi_AvatarLipSyncCreateRequest as AvatarLipSyncCreateRequest, type generatedApi_AvatarLipSyncListResponse as AvatarLipSyncListResponse, type generatedApi_AvatarLipSyncResponse as AvatarLipSyncResponse, type generatedApi_AvatarLipSyncUpdateRequest as AvatarLipSyncUpdateRequest, generatedApi_AvatarLipsyncsService as AvatarLipsyncsService, type generatedApi_AvatarListResponse as AvatarListResponse, type generatedApi_AvatarLocalized as AvatarLocalized, type generatedApi_AvatarLocalizedSnapshot as AvatarLocalizedSnapshot, type generatedApi_AvatarLookAtCreateRequest as AvatarLookAtCreateRequest, type generatedApi_AvatarLookAtListResponse as AvatarLookAtListResponse, type generatedApi_AvatarLookAtResponse as AvatarLookAtResponse, generatedApi_AvatarLookatsService as AvatarLookatsService, generatedApi_AvatarModelsService as AvatarModelsService, type generatedApi_AvatarMotionCreateRequest as AvatarMotionCreateRequest, type generatedApi_AvatarMotionFormatRequest as AvatarMotionFormatRequest, type generatedApi_AvatarMotionResponse as AvatarMotionResponse, type generatedApi_AvatarMotionUpdateRequest as AvatarMotionUpdateRequest, generatedApi_AvatarMotionsService as AvatarMotionsService, type generatedApi_AvatarPurpose as AvatarPurpose, type generatedApi_AvatarResponse as AvatarResponse, type generatedApi_AvatarTemplateListResponse as AvatarTemplateListResponse, type generatedApi_AvatarTemplatePromoteRequest as AvatarTemplatePromoteRequest, type generatedApi_AvatarTemplateResponse as AvatarTemplateResponse, type generatedApi_AvatarTemplateUpdateRequest as AvatarTemplateUpdateRequest, generatedApi_AvatarTemplatesService as AvatarTemplatesService, generatedApi_AvatarsService as AvatarsService, type generatedApi_BackgroundChangeEvent as BackgroundChangeEvent, type generatedApi_BaseMotionsRequest as BaseMotionsRequest, type generatedApi_BaseMotionsResponse as BaseMotionsResponse, type generatedApi_BaseState as BaseState, type generatedApi_BatchRequest as BatchRequest, type generatedApi_BatchResponse_TagCategoryResponse_ as BatchResponse_TagCategoryResponse_, type generatedApi_BatchResponse_TagResponse_ as BatchResponse_TagResponse_, type generatedApi_BatchSettingsRequest as BatchSettingsRequest, type generatedApi_BatchSettingsResponse as BatchSettingsResponse, generatedApi_BehavioralPattern as BehavioralPattern, type generatedApi_BehavioralPatternPresetListResponse as BehavioralPatternPresetListResponse, type generatedApi_BehavioralPatternPresetResponse as BehavioralPatternPresetResponse, type generatedApi_BgmChangeEvent as BgmChangeEvent, type generatedApi_BlendShapeBlinkPayload as BlendShapeBlinkPayload, type generatedApi_BlendShapeBreathingPayload as BlendShapeBreathingPayload, type generatedApi_BlendShapeEntryRequest as BlendShapeEntryRequest, type generatedApi_BlendShapeEntryResponse as BlendShapeEntryResponse, type generatedApi_BlendShapeExpressionData_Input as BlendShapeExpressionData_Input, type generatedApi_BlendShapeExpressionData_Output as BlendShapeExpressionData_Output, type generatedApi_BlendShapeLipSyncPayload as BlendShapeLipSyncPayload, type generatedApi_BlendShapeLookAtPayload as BlendShapeLookAtPayload, type generatedApi_BlendShapeWeight as BlendShapeWeight, type generatedApi_BlinkBlendShapeEntry as BlinkBlendShapeEntry, type generatedApi_BlinkContextModifier as BlinkContextModifier, type generatedApi_BlinkFormatRequest as BlinkFormatRequest, type generatedApi_BlinkFormatResponse as BlinkFormatResponse, type generatedApi_BlinkFormatType as BlinkFormatType, type generatedApi_BodyRegion as BodyRegion, type generatedApi_BodySlot as BodySlot, type generatedApi_Body_add_animated_image_asset_version_api_v1_animated_image_assets__asset_id__versions_post as Body_add_animated_image_asset_version_api_v1_animated_image_assets__asset_id__versions_post, type generatedApi_Body_add_asset_bundle_asset_version_api_v1_asset_bundle_assets__asset_bundle_id__versions_post as Body_add_asset_bundle_asset_version_api_v1_asset_bundle_assets__asset_bundle_id__versions_post, type generatedApi_Body_add_audio_asset_version_api_v1_audio_assets__audio_id__versions_post as Body_add_audio_asset_version_api_v1_audio_assets__audio_id__versions_post, type generatedApi_Body_add_gaussian_splat_asset_version_api_v1_gaussian_splat_assets__gs_id__versions_post as Body_add_gaussian_splat_asset_version_api_v1_gaussian_splat_assets__gs_id__versions_post, type generatedApi_Body_add_glb_asset_version_api_v1_glb_assets__glb_id__versions_post as Body_add_glb_asset_version_api_v1_glb_assets__glb_id__versions_post, type generatedApi_Body_add_image_asset_version_api_v1_image_assets__image_id__versions_post as Body_add_image_asset_version_api_v1_image_assets__image_id__versions_post, type generatedApi_Body_add_variant_to_version_api_v1_asset_bundle_assets__asset_bundle_id__versions__version_id__variants_post as Body_add_variant_to_version_api_v1_asset_bundle_assets__asset_bundle_id__versions__version_id__variants_post, type generatedApi_Body_add_video_asset_version_api_v1_video_assets__video_id__versions_post as Body_add_video_asset_version_api_v1_video_assets__video_id__versions_post, type generatedApi_Body_auto_tag_avatar_api_v1_auto_tagging_avatar_post as Body_auto_tag_avatar_api_v1_auto_tagging_avatar_post, type generatedApi_Body_create_animated_image_asset_api_v1_animated_image_assets_post as Body_create_animated_image_asset_api_v1_animated_image_assets_post, type generatedApi_Body_create_animation_clip_asset_api_v1_animation_clip_assets_post as Body_create_animation_clip_asset_api_v1_animation_clip_assets_post, type generatedApi_Body_create_asset_bundle_asset_api_v1_asset_bundle_assets_post as Body_create_asset_bundle_asset_api_v1_asset_bundle_assets_post, type generatedApi_Body_create_audio_asset_api_v1_audio_assets_post as Body_create_audio_asset_api_v1_audio_assets_post, type generatedApi_Body_create_avatar_api_v1_avatars_post as Body_create_avatar_api_v1_avatars_post, type generatedApi_Body_create_avatar_face_icon_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_face_icon_file_upload_post as Body_create_avatar_face_icon_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_face_icon_file_upload_post, type generatedApi_Body_create_avatar_sprite_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_sprite_file_upload_post as Body_create_avatar_sprite_with_files_api_v1_avatars__avatar_id__expressions__avatar_expression_id__formats_sprite_file_upload_post, type generatedApi_Body_create_character_api_v1_characters_post as Body_create_character_api_v1_characters_post, type generatedApi_Body_create_gaussian_splat_asset_api_v1_gaussian_splat_assets_post as Body_create_gaussian_splat_asset_api_v1_gaussian_splat_assets_post, type generatedApi_Body_create_glb_asset_api_v1_glb_assets_post as Body_create_glb_asset_api_v1_glb_assets_post, type generatedApi_Body_create_glb_from_fbx_api_v1_glb_assets_from_fbx_post as Body_create_glb_from_fbx_api_v1_glb_assets_from_fbx_post, type generatedApi_Body_create_glb_from_gltf_api_v1_glb_assets_from_gltf_post as Body_create_glb_from_gltf_api_v1_glb_assets_from_gltf_post, type generatedApi_Body_create_glb_from_obj_api_v1_glb_assets_from_obj_post as Body_create_glb_from_obj_api_v1_glb_assets_from_obj_post, type generatedApi_Body_create_image_asset_api_v1_image_assets_post as Body_create_image_asset_api_v1_image_assets_post, type generatedApi_Body_create_video_asset_api_v1_video_assets_post as Body_create_video_asset_api_v1_video_assets_post, type generatedApi_Body_create_vrm_asset_api_v1_vrm_assets_post as Body_create_vrm_asset_api_v1_vrm_assets_post, type generatedApi_Body_create_vrma_asset_api_v1_vrma_assets_post as Body_create_vrma_asset_api_v1_vrma_assets_post, type generatedApi_Body_detect_animated_image_colluders_admin_v1_forensics_detect_animated_image_post as Body_detect_animated_image_colluders_admin_v1_forensics_detect_animated_image_post, type generatedApi_Body_detect_face_api_v1_avatars__avatar_id__sprite_model_detect_face_post as Body_detect_face_api_v1_avatars__avatar_id__sprite_model_detect_face_post, type generatedApi_Body_detect_image_colluders_admin_v1_forensics_detect_image_post as Body_detect_image_colluders_admin_v1_forensics_detect_image_post, type generatedApi_Body_detect_model_colluders_admin_v1_forensics_detect_model_post as Body_detect_model_colluders_admin_v1_forensics_detect_model_post, type generatedApi_Body_detect_pose_api_v1_avatars__avatar_id__sprite_model_detect_pose_post as Body_detect_pose_api_v1_avatars__avatar_id__sprite_model_detect_pose_post, type generatedApi_Body_generate_avatar_auto_params_api_v1_auto_params_avatar_post as Body_generate_avatar_auto_params_api_v1_auto_params_avatar_post, type generatedApi_Body_generate_character_auto_params_api_v1_auto_params_character_post as Body_generate_character_auto_params_api_v1_auto_params_character_post, type generatedApi_Body_generate_motion_auto_params_api_v1_auto_params_motion_post as Body_generate_motion_auto_params_api_v1_auto_params_motion_post, type generatedApi_Body_update_avatar_api_v1_avatars__avatar_id__patch as Body_update_avatar_api_v1_avatars__avatar_id__patch, type generatedApi_Body_update_character_api_v1_characters__character_id__patch as Body_update_character_api_v1_characters__character_id__patch, type generatedApi_Body_upload_asset_bundle_api_v1_avatars__avatar_id__asset_bundle_model_post as Body_upload_asset_bundle_api_v1_avatars__avatar_id__asset_bundle_model_post, type generatedApi_Body_upload_face_icon_model_with_files_api_v1_avatars__avatar_id__face_icon_model_file_upload_post as Body_upload_face_icon_model_with_files_api_v1_avatars__avatar_id__face_icon_model_file_upload_post, type generatedApi_Body_upload_glb_model_with_file_api_v1_avatars__avatar_id__glb_model_file_upload_post as Body_upload_glb_model_with_file_api_v1_avatars__avatar_id__glb_model_file_upload_post, type generatedApi_Body_upload_sprite_model_with_files_api_v1_avatars__avatar_id__sprite_model_file_upload_post as Body_upload_sprite_model_with_files_api_v1_avatars__avatar_id__sprite_model_file_upload_post, type generatedApi_Body_upload_vrm_model_with_file_api_v1_avatars__avatar_id__vrm_model_file_upload_post as Body_upload_vrm_model_with_file_api_v1_avatars__avatar_id__vrm_model_file_upload_post, type generatedApi_BondType as BondType, type generatedApi_BoneBreathingPayload as BoneBreathingPayload, type generatedApi_BoneLookAtPayload as BoneLookAtPayload, type generatedApi_BoneScaleEntryRequest as BoneScaleEntryRequest, type generatedApi_BoneScaleEntryResponse as BoneScaleEntryResponse, type generatedApi_BreathingBlendShapeEntry as BreathingBlendShapeEntry, type generatedApi_BreathingContextModifier as BreathingContextModifier, type generatedApi_BreathingFormatRequest as BreathingFormatRequest, type generatedApi_BreathingFormatResponse as BreathingFormatResponse, type generatedApi_BreathingFormatType as BreathingFormatType, type generatedApi_BulkUpsertRequest as BulkUpsertRequest, type generatedApi_BulkUpsertResultResponse as BulkUpsertResultResponse, type generatedApi_CacheMetadataResponse as CacheMetadataResponse, generatedApi_CacheMetadataService as CacheMetadataService, type generatedApi_CacheMetadataUpsertRequest as CacheMetadataUpsertRequest, generatedApi_CancelError as CancelError, generatedApi_CancelablePromise as CancelablePromise, type generatedApi_CharacterAbilitiesRequest as CharacterAbilitiesRequest, type generatedApi_CharacterAbilitiesResponse as CharacterAbilitiesResponse, generatedApi_CharacterAbilitiesService as CharacterAbilitiesService, type generatedApi_CharacterActionBatchCreateRequest as CharacterActionBatchCreateRequest, type generatedApi_CharacterActionCreateRequest as CharacterActionCreateRequest, type generatedApi_CharacterActionListResponse as CharacterActionListResponse, type generatedApi_CharacterActionResponse as CharacterActionResponse, type generatedApi_CharacterActionTreeResponse as CharacterActionTreeResponse, type generatedApi_CharacterActionUpdateRequest as CharacterActionUpdateRequest, generatedApi_CharacterActionsService as CharacterActionsService, type generatedApi_CharacterAiUsage as CharacterAiUsage, type generatedApi_CharacterAutoParamsResponse as CharacterAutoParamsResponse, type generatedApi_CharacterBackgroundDetailsRequest as CharacterBackgroundDetailsRequest, type generatedApi_CharacterBackgroundDetailsResponse as CharacterBackgroundDetailsResponse, generatedApi_CharacterBackgroundDetailsService as CharacterBackgroundDetailsService, type generatedApi_CharacterBasicInfoRequest as CharacterBasicInfoRequest, type generatedApi_CharacterBasicInfoResponse as CharacterBasicInfoResponse, generatedApi_CharacterBasicInfoService as CharacterBasicInfoService, type generatedApi_CharacterBehaviorSnippetListResponse as CharacterBehaviorSnippetListResponse, type generatedApi_CharacterBehaviorSnippetResponse as CharacterBehaviorSnippetResponse, type generatedApi_CharacterBounceEvent as CharacterBounceEvent, type generatedApi_CharacterDailyLifeRequest as CharacterDailyLifeRequest, type generatedApi_CharacterDailyLifeResponse as CharacterDailyLifeResponse, generatedApi_CharacterDailyLifeService as CharacterDailyLifeService, type generatedApi_CharacterEmotionBatchCreateRequest as CharacterEmotionBatchCreateRequest, type generatedApi_CharacterEmotionCreateRequest as CharacterEmotionCreateRequest, type generatedApi_CharacterEmotionEvent as CharacterEmotionEvent, type generatedApi_CharacterEmotionIdsResponse as CharacterEmotionIdsResponse, type generatedApi_CharacterEmotionListResponse as CharacterEmotionListResponse, type generatedApi_CharacterEmotionResponse as CharacterEmotionResponse, type generatedApi_CharacterEmotionUpdateRequest as CharacterEmotionUpdateRequest, generatedApi_CharacterEmotionsService as CharacterEmotionsService, type generatedApi_CharacterEntitySnapshot as CharacterEntitySnapshot, type generatedApi_CharacterEquipmentCreateRequest as CharacterEquipmentCreateRequest, type generatedApi_CharacterEquipmentListResponse as CharacterEquipmentListResponse, type generatedApi_CharacterEquipmentResponse as CharacterEquipmentResponse, generatedApi_CharacterEquipmentService as CharacterEquipmentService, type generatedApi_CharacterEquipmentUpdateRequest as CharacterEquipmentUpdateRequest, type generatedApi_CharacterFraming as CharacterFraming, type generatedApi_CharacterFramingChangeEvent as CharacterFramingChangeEvent, type generatedApi_CharacterHideEvent as CharacterHideEvent, type generatedApi_CharacterHighlightEvent as CharacterHighlightEvent, type generatedApi_CharacterInstanceCreateRequest as CharacterInstanceCreateRequest, type generatedApi_CharacterInstanceListResponse as CharacterInstanceListResponse, type generatedApi_CharacterInstanceResponse as CharacterInstanceResponse, generatedApi_CharacterInstancesService as CharacterInstancesService, type generatedApi_CharacterInventoryCreateRequest as CharacterInventoryCreateRequest, type generatedApi_CharacterInventoryListResponse as CharacterInventoryListResponse, type generatedApi_CharacterInventoryResponse as CharacterInventoryResponse, generatedApi_CharacterInventoryService as CharacterInventoryService, type generatedApi_CharacterInventoryUpdateRequest as CharacterInventoryUpdateRequest, type generatedApi_CharacterListResponse as CharacterListResponse, type generatedApi_CharacterLocalized as CharacterLocalized, type generatedApi_CharacterLocalizedSnapshot as CharacterLocalizedSnapshot, type generatedApi_CharacterMotionBatchCreateRequest as CharacterMotionBatchCreateRequest, type generatedApi_CharacterMotionCreateRequest as CharacterMotionCreateRequest, type generatedApi_CharacterMotionEvent as CharacterMotionEvent, type generatedApi_CharacterMotionIdsResponse as CharacterMotionIdsResponse, type generatedApi_CharacterMotionListResponse as CharacterMotionListResponse, type generatedApi_CharacterMotionResponse as CharacterMotionResponse, type generatedApi_CharacterMotionUpdateRequest as CharacterMotionUpdateRequest, generatedApi_CharacterMotionsService as CharacterMotionsService, type generatedApi_CharacterPersonalityParamsCreateRequest as CharacterPersonalityParamsCreateRequest, type generatedApi_CharacterPersonalityParamsListResponse as CharacterPersonalityParamsListResponse, type generatedApi_CharacterPersonalityParamsResponse as CharacterPersonalityParamsResponse, generatedApi_CharacterPersonalityParamsService as CharacterPersonalityParamsService, type generatedApi_CharacterPersonalityParamsUpdateRequest as CharacterPersonalityParamsUpdateRequest, type generatedApi_CharacterPhysicalIdentityRequest as CharacterPhysicalIdentityRequest, type generatedApi_CharacterPhysicalIdentityResponse as CharacterPhysicalIdentityResponse, generatedApi_CharacterPhysicalIdentityService as CharacterPhysicalIdentityService, type generatedApi_CharacterPreferencesRequest as CharacterPreferencesRequest, type generatedApi_CharacterPreferencesResponse as CharacterPreferencesResponse, generatedApi_CharacterPreferencesService as CharacterPreferencesService, generatedApi_CharacterProfileGenerationService as CharacterProfileGenerationService, type generatedApi_CharacterRelationshipCreateRequest as CharacterRelationshipCreateRequest, type generatedApi_CharacterRelationshipListResponse as CharacterRelationshipListResponse, type generatedApi_CharacterRelationshipLocalized as CharacterRelationshipLocalized, type generatedApi_CharacterRelationshipResponse as CharacterRelationshipResponse, type generatedApi_CharacterRelationshipUpdateRequest as CharacterRelationshipUpdateRequest, type generatedApi_CharacterResetEvent as CharacterResetEvent, type generatedApi_CharacterResponse as CharacterResponse, type generatedApi_CharacterScalePulseEvent as CharacterScalePulseEvent, type generatedApi_CharacterSceneDetails as CharacterSceneDetails, type generatedApi_CharacterSceneDetailsCreateRequest as CharacterSceneDetailsCreateRequest, type generatedApi_CharacterSceneDetailsResponse as CharacterSceneDetailsResponse, type generatedApi_CharacterSceneDetailsUpdateRequest as CharacterSceneDetailsUpdateRequest, type generatedApi_CharacterShakeEvent as CharacterShakeEvent, type generatedApi_CharacterShowEvent as CharacterShowEvent, type generatedApi_CharacterSilhouetteEvent as CharacterSilhouetteEvent, type generatedApi_CharacterSpeakEvent_Input as CharacterSpeakEvent_Input, type generatedApi_CharacterSpeakEvent_Output as CharacterSpeakEvent_Output, type generatedApi_CharacterSpinEvent as CharacterSpinEvent, type generatedApi_CharacterStateResponse as CharacterStateResponse, type generatedApi_CharacterTemplateListResponse as CharacterTemplateListResponse, type generatedApi_CharacterTemplateLocalized as CharacterTemplateLocalized, type generatedApi_CharacterTemplatePromoteRequest as CharacterTemplatePromoteRequest, type generatedApi_CharacterTemplateResponse as CharacterTemplateResponse, type generatedApi_CharacterTemplateUpdateRequest as CharacterTemplateUpdateRequest, generatedApi_CharacterTemplatesService as CharacterTemplatesService, type generatedApi_CharacterTurnState as CharacterTurnState, type generatedApi_CharacterTurnStateCreateRequest as CharacterTurnStateCreateRequest, type generatedApi_CharacterTurnStateResponse as CharacterTurnStateResponse, type generatedApi_CharacterTurnStateUpdateRequest as CharacterTurnStateUpdateRequest, generatedApi_CharactersService as CharactersService, type generatedApi_ChildBundle as ChildBundle, type generatedApi_ChoiceOption_Input as ChoiceOption_Input, type generatedApi_ChoiceOption_Output as ChoiceOption_Output, type generatedApi_CollectionCountResponse as CollectionCountResponse, type generatedApi_CollectionDetailResponse as CollectionDetailResponse, type generatedApi_CollectionListResponse as CollectionListResponse, type generatedApi_CollectionStats as CollectionStats, type generatedApi_Color as Color, type generatedApi_CompatibilityListCursorResponse as CompatibilityListCursorResponse, type generatedApi_ComplexityFactors as ComplexityFactors, type generatedApi_ComponentListing as ComponentListing, type generatedApi_Condition as Condition, type generatedApi_ConditionGroup_Input as ConditionGroup_Input, type generatedApi_ConditionGroup_Output as ConditionGroup_Output, type generatedApi_ConditionType as ConditionType, type generatedApi_ConditionalEmotionalActivation as ConditionalEmotionalActivation, type generatedApi_ContentAssessmentRequest as ContentAssessmentRequest, type generatedApi_ContentAssessmentResponse as ContentAssessmentResponse, type generatedApi_ContentCategory as ContentCategory, generatedApi_ContentDeclaration as ContentDeclaration, type generatedApi_ContentDetail as ContentDetail, type generatedApi_ContentDetailRequest as ContentDetailRequest, type generatedApi_ContentDetailResponse as ContentDetailResponse, type generatedApi_ContentFrequency as ContentFrequency, generatedApi_ContentIntensity as ContentIntensity, type generatedApi_ContentLabels as ContentLabels, generatedApi_ContentOriginType as ContentOriginType, generatedApi_ContentProtectionService as ContentProtectionService, type generatedApi_ContentPublishing as ContentPublishing, type generatedApi_ContentReview as ContentReview, type generatedApi_ContentZoning as ContentZoning, type generatedApi_ContextModifierSet as ContextModifierSet, type generatedApi_ConversationSignalsRequest as ConversationSignalsRequest, type generatedApi_ConversationSignalsResponse as ConversationSignalsResponse, type generatedApi_ConversationTimingContextModifier as ConversationTimingContextModifier, type generatedApi_ConversionCallbackPayload as ConversionCallbackPayload, type generatedApi_ConversionMetadata as ConversionMetadata, type generatedApi_ConversionStatus as ConversionStatus, type generatedApi_CostCalculationRequest as CostCalculationRequest, type generatedApi_CostCalculationResponse as CostCalculationResponse, type generatedApi_Country as Country, type generatedApi_CreateAssetVariantLinkRequest as CreateAssetVariantLinkRequest, type generatedApi_CreateFromTextRequest as CreateFromTextRequest, type generatedApi_CreateFromTextResponse as CreateFromTextResponse, generatedApi_CreationMethod as CreationMethod, generatedApi_CreativeCommonsType as CreativeCommonsType, type generatedApi_CreatorCreateRequest as CreatorCreateRequest, type generatedApi_CreatorLinkRequest as CreatorLinkRequest, type generatedApi_CreatorLinkResponse as CreatorLinkResponse, type generatedApi_CreatorLocalizedRequest as CreatorLocalizedRequest, type generatedApi_CreatorLocalizedResponse as CreatorLocalizedResponse, type generatedApi_CreatorResponse as CreatorResponse, type generatedApi_CreatorType as CreatorType, type generatedApi_CreatorUpdateRequest as CreatorUpdateRequest, generatedApi_CreatorsService as CreatorsService, type generatedApi_DataSource as DataSource, type generatedApi_DbOverviewResponse as DbOverviewResponse, type generatedApi_DecisionMaking as DecisionMaking, generatedApi_DefaultService as DefaultService, type generatedApi_DetectedFaceResponse as DetectedFaceResponse, type generatedApi_DetectedKeypointResponse as DetectedKeypointResponse, type generatedApi_DetectedPoseResponse as DetectedPoseResponse, type generatedApi_DialogueAct as DialogueAct, type generatedApi_DistributionBundleCreateRequest as DistributionBundleCreateRequest, type generatedApi_DistributionBundleListResponse as DistributionBundleListResponse, type generatedApi_DistributionBundleLocalized as DistributionBundleLocalized, type generatedApi_DistributionBundleResponse as DistributionBundleResponse, type generatedApi_DistributionBundleUpdateRequest as DistributionBundleUpdateRequest, type generatedApi_DistributionCreateRequest as DistributionCreateRequest, type generatedApi_DistributionListResponse as DistributionListResponse, type generatedApi_DistributionLocalized as DistributionLocalized, type generatedApi_DistributionResponse as DistributionResponse, type generatedApi_DistributionStatus as DistributionStatus, type generatedApi_DistributionUpdateRequest as DistributionUpdateRequest, type generatedApi_DocumentSummary as DocumentSummary, type generatedApi_DocumentType as DocumentType, type generatedApi_DryRunReviewRequest as DryRunReviewRequest, type generatedApi_DuplicateResponse as DuplicateResponse, type generatedApi_DuplicateSettingsResponse as DuplicateSettingsResponse, type generatedApi_Effect as Effect, type generatedApi_EffectRule as EffectRule, type generatedApi_EffectType as EffectType, type generatedApi_EmotionCenterResponse as EmotionCenterResponse, type generatedApi_EmotionConfigCreateRequest as EmotionConfigCreateRequest, type generatedApi_EmotionConfigResponse as EmotionConfigResponse, generatedApi_EmotionConfigService as EmotionConfigService, type generatedApi_EmotionConfigUpdateRequest as EmotionConfigUpdateRequest, type generatedApi_EmotionCreateRequest as EmotionCreateRequest, generatedApi_EmotionFormatType as EmotionFormatType, generatedApi_EmotionFormatsBlendshapeService as EmotionFormatsBlendshapeService, generatedApi_EmotionFormatsFaceIconService as EmotionFormatsFaceIconService, generatedApi_EmotionFormatsGlbService as EmotionFormatsGlbService, generatedApi_EmotionFormatsSpriteService as EmotionFormatsSpriteService, type generatedApi_EmotionGroupLocalizedSchema as EmotionGroupLocalizedSchema, type generatedApi_EmotionGroupNonVerbalProfile as EmotionGroupNonVerbalProfile, type generatedApi_EmotionGroupSchema as EmotionGroupSchema, type generatedApi_EmotionIndexEntrySchema as EmotionIndexEntrySchema, type generatedApi_EmotionListResponse as EmotionListResponse, type generatedApi_EmotionLocalized as EmotionLocalized, type generatedApi_EmotionNeighborResponse as EmotionNeighborResponse, type generatedApi_EmotionResponse as EmotionResponse, type generatedApi_EmotionSuggestionResponse as EmotionSuggestionResponse, type generatedApi_EmotionUpdateRequest as EmotionUpdateRequest, type generatedApi_EmotionalActivationConditions as EmotionalActivationConditions, type generatedApi_EmotionalModifierLayer as EmotionalModifierLayer, type generatedApi_EmotionalParams as EmotionalParams, generatedApi_EmotionsService as EmotionsService, type generatedApi_EntitlementCheckResponse as EntitlementCheckResponse, type generatedApi_EntitlementListResponse as EntitlementListResponse, type generatedApi_EntitlementResponse as EntitlementResponse, type generatedApi_EntitlementVersionUpdateRequest as EntitlementVersionUpdateRequest, type generatedApi_EquipmentAnimationKeyframe as EquipmentAnimationKeyframe, type generatedApi_EquipmentAnimationTrack as EquipmentAnimationTrack, type generatedApi_EquipmentItemType as EquipmentItemType, type generatedApi_EquipmentMotionOverlayCreateRequest as EquipmentMotionOverlayCreateRequest, type generatedApi_EquipmentMotionOverlayListResponse as EquipmentMotionOverlayListResponse, type generatedApi_EquipmentMotionOverlayResponse as EquipmentMotionOverlayResponse, type generatedApi_EquipmentMotionOverlayUpdateRequest as EquipmentMotionOverlayUpdateRequest, generatedApi_EquipmentMotionOverlaysService as EquipmentMotionOverlaysService, type generatedApi_EthicalDilemma as EthicalDilemma, type generatedApi_EvidenceRequest as EvidenceRequest, type generatedApi_EvidenceResponse as EvidenceResponse, type generatedApi_ExpressionContextModifier as ExpressionContextModifier, type generatedApi_ExpressionFormatRequest as ExpressionFormatRequest, type generatedApi_ExpressionFormatResponse as ExpressionFormatResponse, type generatedApi_EyeBlendShapeGroup as EyeBlendShapeGroup, type generatedApi_FaceDetectionResponse as FaceDetectionResponse, type generatedApi_FaceIconBlinkPayload as FaceIconBlinkPayload, type generatedApi_FaceIconBreathingPayload as FaceIconBreathingPayload, type generatedApi_FaceIconExpressionData as FaceIconExpressionData, type generatedApi_FaceIconLipSyncPayload as FaceIconLipSyncPayload, type generatedApi_FaceIconLookAtPayload as FaceIconLookAtPayload, type generatedApi_FaceIconModelResponse as FaceIconModelResponse, type generatedApi_FaceIconVisemeMapping as FaceIconVisemeMapping, type generatedApi_FacePositionResponse as FacePositionResponse, type generatedApi_FavoriteCreateRequest as FavoriteCreateRequest, type generatedApi_FavoriteListResponse as FavoriteListResponse, type generatedApi_FavoriteResponse as FavoriteResponse, type generatedApi_FieldStatsEntry as FieldStatsEntry, type generatedApi_FittingMethod as FittingMethod, type generatedApi_ForensicDetectResponse as ForensicDetectResponse, type generatedApi_FormatOperationResponse as FormatOperationResponse, type generatedApi_FreeInputConfig_Input as FreeInputConfig_Input, type generatedApi_FreeInputConfig_Output as FreeInputConfig_Output, type generatedApi_FreeInputRoute_Input as FreeInputRoute_Input, type generatedApi_FreeInputRoute_Output as FreeInputRoute_Output, type generatedApi_GLBAssetFromSourceResponse as GLBAssetFromSourceResponse, type generatedApi_GLBAssetListResponse as GLBAssetListResponse, type generatedApi_GLBAssetLocalized as GLBAssetLocalized, type generatedApi_GLBAssetResponse as GLBAssetResponse, type generatedApi_GLBAssetRole as GLBAssetRole, type generatedApi_GLBAssetUpdateRequest as GLBAssetUpdateRequest, type generatedApi_GLBAssetVersionListResponse as GLBAssetVersionListResponse, type generatedApi_GLBAssetVersionResponse as GLBAssetVersionResponse, type generatedApi_GLBExpressionData as GLBExpressionData, type generatedApi_GLBModelResponse as GLBModelResponse, type generatedApi_GLBMotionData as GLBMotionData, type generatedApi_GaussianSplatAssetListResponse as GaussianSplatAssetListResponse, type generatedApi_GaussianSplatAssetLocalized as GaussianSplatAssetLocalized, type generatedApi_GaussianSplatAssetResponse as GaussianSplatAssetResponse, type generatedApi_GaussianSplatAssetRole as GaussianSplatAssetRole, type generatedApi_GaussianSplatAssetUpdateRequest as GaussianSplatAssetUpdateRequest, type generatedApi_GaussianSplatAssetVersionListResponse as GaussianSplatAssetVersionListResponse, type generatedApi_GaussianSplatAssetVersionResponse as GaussianSplatAssetVersionResponse, generatedApi_GaussianSplatAssetsService as GaussianSplatAssetsService, type generatedApi_GaussianSplatFormat as GaussianSplatFormat, type generatedApi_GenderType as GenderType, type generatedApi_GenerateCompatibilityRequest as GenerateCompatibilityRequest, type generatedApi_GenerateCompatibilityResultResponse as GenerateCompatibilityResultResponse, type generatedApi_GenerateContentRequest as GenerateContentRequest, type generatedApi_GenerateContentResponse as GenerateContentResponse, type generatedApi_GenerateProfileRequest as GenerateProfileRequest, type generatedApi_GenerateProfileResponse as GenerateProfileResponse, type generatedApi_GeneratedAbilitiesResponse as GeneratedAbilitiesResponse, type generatedApi_GeneratedBackgroundDetailsResponse as GeneratedBackgroundDetailsResponse, type generatedApi_GeneratedBasicInfoResponse as GeneratedBasicInfoResponse, type generatedApi_GeneratedCharacterLocaleResponse as GeneratedCharacterLocaleResponse, type generatedApi_GeneratedDailyLifeResponse as GeneratedDailyLifeResponse, type generatedApi_GeneratedPhysicalIdentityResponse as GeneratedPhysicalIdentityResponse, type generatedApi_GeneratedPreferencesResponse as GeneratedPreferencesResponse, type generatedApi_GestureMotionsRequest as GestureMotionsRequest, type generatedApi_GestureMotionsResponse as GestureMotionsResponse, type generatedApi_GiftPurchaseRequest as GiftPurchaseRequest, type generatedApi_GiftPurchaseResponse as GiftPurchaseResponse, generatedApi_GlbAssetsService as GlbAssetsService, type generatedApi_GroupAddMemberRequest as GroupAddMemberRequest, type generatedApi_GroupBanCreateRequest as GroupBanCreateRequest, type generatedApi_GroupBanListResponse as GroupBanListResponse, type generatedApi_GroupBanResponse as GroupBanResponse, generatedApi_GroupBansService as GroupBansService, type generatedApi_GroupCreateRequest as GroupCreateRequest, type generatedApi_GroupInviteCreateRequest as GroupInviteCreateRequest, type generatedApi_GroupInviteListResponse as GroupInviteListResponse, type generatedApi_GroupInviteResponse as GroupInviteResponse, generatedApi_GroupInvitesService as GroupInvitesService, type generatedApi_GroupJoinRequestListResponse as GroupJoinRequestListResponse, type generatedApi_GroupJoinRequestResponse as GroupJoinRequestResponse, generatedApi_GroupJoinRequestsService as GroupJoinRequestsService, type generatedApi_GroupListResponse as GroupListResponse, type generatedApi_GroupLocalizedRequest as GroupLocalizedRequest, type generatedApi_GroupLocalizedResponse as GroupLocalizedResponse, type generatedApi_GroupMemberResponse as GroupMemberResponse, type generatedApi_GroupMemberRole as GroupMemberRole, type generatedApi_GroupResponse as GroupResponse, type generatedApi_GroupRoleUpdateRequest as GroupRoleUpdateRequest, type generatedApi_GroupUpdateRequest as GroupUpdateRequest, type generatedApi_GroupVisibility as GroupVisibility, generatedApi_GroupsService as GroupsService, type generatedApi_HTTPValidationError as HTTPValidationError, type generatedApi_HairStyleCreateRequest as HairStyleCreateRequest, type generatedApi_HairStyleListResponse as HairStyleListResponse, type generatedApi_HairStyleLocalized as HairStyleLocalized, type generatedApi_HairStyleLocalizedRequest as HairStyleLocalizedRequest, type generatedApi_HairStyleResponse as HairStyleResponse, type generatedApi_HairStyleUpdateRequest as HairStyleUpdateRequest, generatedApi_HairStylesService as HairStylesService, type generatedApi_IdleBehaviorsRequest as IdleBehaviorsRequest, type generatedApi_IdleBehaviorsResponse as IdleBehaviorsResponse, type generatedApi_ImageAssetListResponse as ImageAssetListResponse, type generatedApi_ImageAssetLocalized as ImageAssetLocalized, type generatedApi_ImageAssetResponse as ImageAssetResponse, type generatedApi_ImageAssetUpdateRequest as ImageAssetUpdateRequest, type generatedApi_ImageAssetVersionListResponse as ImageAssetVersionListResponse, type generatedApi_ImageAssetVersionResponse as ImageAssetVersionResponse, type generatedApi_ImageAssetWithVersionResponse as ImageAssetWithVersionResponse, generatedApi_ImageAssetsService as ImageAssetsService, type generatedApi_ImageBounceEvent as ImageBounceEvent, type generatedApi_ImageHideEvent as ImageHideEvent, type generatedApi_ImageHighlightEvent as ImageHighlightEvent, type generatedApi_ImageResetEvent as ImageResetEvent, type generatedApi_ImageScalePulseEvent as ImageScalePulseEvent, type generatedApi_ImageShakeEvent as ImageShakeEvent, type generatedApi_ImageShowEvent as ImageShowEvent, type generatedApi_ImageSilhouetteEvent as ImageSilhouetteEvent, type generatedApi_ImageSpinEvent as ImageSpinEvent, type generatedApi_ImportantPerson as ImportantPerson, type generatedApi_InstanceAccessType as InstanceAccessType, generatedApi_InternalMarketplaceService as InternalMarketplaceService, generatedApi_InternalService as InternalService, type generatedApi_InterruptMode as InterruptMode, type generatedApi_InviteType as InviteType, type generatedApi_ItemImageData as ItemImageData, type generatedApi_ItemImageSet as ItemImageSet, type generatedApi_JoinPolicy as JoinPolicy, type generatedApi_JoinRequestStatus as JoinRequestStatus, type generatedApi_KeyEvent as KeyEvent, type generatedApi_KeyResponse as KeyResponse, type generatedApi_KnowledgeGraphEdgeRequest as KnowledgeGraphEdgeRequest, type generatedApi_KnowledgeGraphEdgeResponse as KnowledgeGraphEdgeResponse, type generatedApi_KnowledgeGraphNodeRequest as KnowledgeGraphNodeRequest, type generatedApi_KnowledgeGraphNodeResponse as KnowledgeGraphNodeResponse, type generatedApi_KnowledgeGraphOverwriteRequest as KnowledgeGraphOverwriteRequest, type generatedApi_KnowledgeGraphResponse as KnowledgeGraphResponse, generatedApi_KnowledgeGraphService as KnowledgeGraphService, type generatedApi_Layer3ModifierSet as Layer3ModifierSet, type generatedApi_LicenseType as LicenseType, type generatedApi_LinguisticPatterns as LinguisticPatterns, type generatedApi_LinkListCursorResponse as LinkListCursorResponse, type generatedApi_LipSyncFormatRequest as LipSyncFormatRequest, type generatedApi_LipSyncFormatResponse as LipSyncFormatResponse, type generatedApi_LipSyncFormatType as LipSyncFormatType, type generatedApi_LipSyncVisemeMapping as LipSyncVisemeMapping, type generatedApi_ListingBundleCreateRequest as ListingBundleCreateRequest, type generatedApi_ListingBundleListResponse as ListingBundleListResponse, type generatedApi_ListingBundleLocalized as ListingBundleLocalized, type generatedApi_ListingBundleResponse as ListingBundleResponse, type generatedApi_ListingBundleType as ListingBundleType, type generatedApi_ListingBundleUpdateRequest as ListingBundleUpdateRequest, type generatedApi_ListingCreateRequest as ListingCreateRequest, type generatedApi_ListingListResponse as ListingListResponse, type generatedApi_ListingLocalized as ListingLocalized, type generatedApi_ListingResponse as ListingResponse, type generatedApi_ListingUpdateRequest as ListingUpdateRequest, type generatedApi_ListingVisibility as ListingVisibility, generatedApi_LlmModelsService as LlmModelsService, type generatedApi_LookAtBlendShapeEntry as LookAtBlendShapeEntry, type generatedApi_LookAtContextModifier as LookAtContextModifier, type generatedApi_LookAtFormatRequest as LookAtFormatRequest, type generatedApi_LookAtFormatResponse as LookAtFormatResponse, type generatedApi_LookAtFormatType as LookAtFormatType, generatedApi_MarketplaceBrowseService as MarketplaceBrowseService, generatedApi_MarketplaceDistributionBundlesService as MarketplaceDistributionBundlesService, generatedApi_MarketplaceDistributionsService as MarketplaceDistributionsService, generatedApi_MarketplaceEntitlementsService as MarketplaceEntitlementsService, generatedApi_MarketplaceFavoritesService as MarketplaceFavoritesService, generatedApi_MarketplaceGiftsService as MarketplaceGiftsService, generatedApi_MarketplaceListingBundlesService as MarketplaceListingBundlesService, generatedApi_MarketplaceListingsService as MarketplaceListingsService, generatedApi_MarketplaceNotificationsService as MarketplaceNotificationsService, generatedApi_MarketplaceReportsService as MarketplaceReportsService, generatedApi_MarketplaceReviewsService as MarketplaceReviewsService, type generatedApi_MarketplaceStatus as MarketplaceStatus, type generatedApi_MatchLevel as MatchLevel, generatedApi_MemoriesService as MemoriesService, type generatedApi_MemoryCreateRequest as MemoryCreateRequest, type generatedApi_MemoryListResponse as MemoryListResponse, type generatedApi_MemoryOrganizationResponse as MemoryOrganizationResponse, generatedApi_MemoryOrganizationService as MemoryOrganizationService, type generatedApi_MemoryPinRequest as MemoryPinRequest, type generatedApi_MemoryResponse as MemoryResponse, type generatedApi_MemorySearchRequest as MemorySearchRequest, type generatedApi_MemorySearchResponse as MemorySearchResponse, type generatedApi_MemorySummaryResponse as MemorySummaryResponse, type generatedApi_MemoryUpdateRequest as MemoryUpdateRequest, type generatedApi_MergeAccountsRequest as MergeAccountsRequest, type generatedApi_MigrationStatusResponse as MigrationStatusResponse, type generatedApi_Model3DSourceFormat as Model3DSourceFormat, type generatedApi_ModelBenchmarkResponse as ModelBenchmarkResponse, type generatedApi_ModelInfoResponse as ModelInfoResponse, type generatedApi_ModelPricingResponse as ModelPricingResponse, generatedApi_ModelType as ModelType, generatedApi_ModificationPolicy as ModificationPolicy, type generatedApi_ModifierEntry as ModifierEntry, type generatedApi_MoodRegionSchema as MoodRegionSchema, generatedApi_MoodService as MoodService, type generatedApi_MoodStateResponse as MoodStateResponse, type generatedApi_MoodUpdateRequest as MoodUpdateRequest, type generatedApi_MoodVerbalizedResponse as MoodVerbalizedResponse, type generatedApi_MotionAutoParamsResponse as MotionAutoParamsResponse, type generatedApi_MotionCandidate as MotionCandidate, type generatedApi_MotionCreateRequest as MotionCreateRequest, type generatedApi_MotionFormatResponse as MotionFormatResponse, generatedApi_MotionFormatType as MotionFormatType, generatedApi_MotionFormatsAnimatorService as MotionFormatsAnimatorService, generatedApi_MotionFormatsGlbService as MotionFormatsGlbService, generatedApi_MotionFormatsVrmaService as MotionFormatsVrmaService, type generatedApi_MotionIndexEntrySchema as MotionIndexEntrySchema, type generatedApi_MotionLayer as MotionLayer, type generatedApi_MotionListResponse as MotionListResponse, type generatedApi_MotionLocalized as MotionLocalized, type generatedApi_MotionLocalizedRequest as MotionLocalizedRequest, type generatedApi_MotionResponse as MotionResponse, type generatedApi_MotionSearchResponse as MotionSearchResponse, type generatedApi_MotionSuggestByTextRequest as MotionSuggestByTextRequest, type generatedApi_MotionSuggestionResponse as MotionSuggestionResponse, type generatedApi_MotionTimingContextModifier as MotionTimingContextModifier, generatedApi_MotionType as MotionType, type generatedApi_MotionUpdateRequest as MotionUpdateRequest, generatedApi_MotionsService as MotionsService, type generatedApi_MotionsSummaryResponse as MotionsSummaryResponse, generatedApi_MotionsSummaryService as MotionsSummaryService, type generatedApi_MouthBlendShapeGroup as MouthBlendShapeGroup, type generatedApi_NarrativeEvent_Input as NarrativeEvent_Input, type generatedApi_NarrativeEvent_Output as NarrativeEvent_Output, type generatedApi_NearestByVADRequest as NearestByVADRequest, type generatedApi_NotificationListResponse as NotificationListResponse, type generatedApi_NotificationResponse as NotificationResponse, type generatedApi_NotificationType as NotificationType, type generatedApi_ObjectVisibilityEntryRequest as ObjectVisibilityEntryRequest, type generatedApi_ObjectVisibilityEntryResponse as ObjectVisibilityEntryResponse, generatedApi_OpenAPI as OpenAPI, type generatedApi_OpenAPIConfig as OpenAPIConfig, type generatedApi_OtherBlendShapeGroup as OtherBlendShapeGroup, type generatedApi_OutfitCategory as OutfitCategory, type generatedApi_OutfitCreateRequest as OutfitCreateRequest, type generatedApi_OutfitListResponse as OutfitListResponse, type generatedApi_OutfitLocalized as OutfitLocalized, type generatedApi_OutfitLocalizedRequest as OutfitLocalizedRequest, type generatedApi_OutfitResponse as OutfitResponse, type generatedApi_OutfitUpdateRequest as OutfitUpdateRequest, generatedApi_OutfitsService as OutfitsService, type generatedApi_OwnerType as OwnerType, type generatedApi_ParamConfig as ParamConfig, type generatedApi_ParticipantType as ParticipantType, type generatedApi_PendingReviewListResponse as PendingReviewListResponse, generatedApi_PersonalityArchetype as PersonalityArchetype, type generatedApi_PersonalityPresetListResponse as PersonalityPresetListResponse, type generatedApi_PersonalityPresetResponse as PersonalityPresetResponse, generatedApi_PersonalityPresetsService as PersonalityPresetsService, type generatedApi_PersonalityTraits as PersonalityTraits, type generatedApi_Phoneme as Phoneme, type generatedApi_PlayerActionEvent as PlayerActionEvent, type generatedApi_PoseDetectionResponse as PoseDetectionResponse, type generatedApi_PoseMotionsRequest as PoseMotionsRequest, type generatedApi_PoseMotionsResponse as PoseMotionsResponse, type generatedApi_PostureTransitionsRequest as PostureTransitionsRequest, type generatedApi_PostureTransitionsResponse as PostureTransitionsResponse, type generatedApi_PowerDynamic as PowerDynamic, type generatedApi_PreferType as PreferType, type generatedApi_PreferenceItem as PreferenceItem, type generatedApi_PresetBlinkParams as PresetBlinkParams, type generatedApi_PresetBreathingParams as PresetBreathingParams, type generatedApi_PresetConversationTimingParams as PresetConversationTimingParams, type generatedApi_PresetExpressionParams as PresetExpressionParams, type generatedApi_PresetGestureParams as PresetGestureParams, type generatedApi_PresetLipSyncParams as PresetLipSyncParams, type generatedApi_PresetLookAtParams as PresetLookAtParams, type generatedApi_PresetMotionTimingParams as PresetMotionTimingParams, type ProtectedFileResponse$1 as ProtectedFileResponse, type generatedApi_ProtectedImageBatchItem as ProtectedImageBatchItem, type generatedApi_ProtectedImageBatchRequest as ProtectedImageBatchRequest, type generatedApi_ProtectedImageBatchResponse as ProtectedImageBatchResponse, type generatedApi_ProtectedImageBatchResponseItem as ProtectedImageBatchResponseItem, type generatedApi_ProviderModelsResponse as ProviderModelsResponse, type generatedApi_PublishScope as PublishScope, type generatedApi_PurchaseCompletedRequest as PurchaseCompletedRequest, type generatedApi_PurchaseCompletedResponse as PurchaseCompletedResponse, type generatedApi_PurchasedItem as PurchasedItem, type generatedApi_RandomMotionEntryRequest as RandomMotionEntryRequest, type generatedApi_RandomMotionEntryResponse as RandomMotionEntryResponse, type generatedApi_RecommendationItem as RecommendationItem, type generatedApi_RecommendationRequest as RecommendationRequest, type generatedApi_RecommendationResponse as RecommendationResponse, type generatedApi_RegenerateContentFromInputRequest as RegenerateContentFromInputRequest, type generatedApi_RegenerateContentFromInputResponse as RegenerateContentFromInputResponse, type generatedApi_RegenerateContentRequest as RegenerateContentRequest, type generatedApi_RegenerateContentResponse as RegenerateContentResponse, type generatedApi_RegisterLinkRequest as RegisterLinkRequest, type generatedApi_RelatedAssetResponse as RelatedAssetResponse, type generatedApi_RelationshipContextEntry as RelationshipContextEntry, type generatedApi_RelationshipContextMapResponse as RelationshipContextMapResponse, generatedApi_RelationshipContextService as RelationshipContextService, type generatedApi_RelationshipRole as RelationshipRole, generatedApi_RelationshipsService as RelationshipsService, type generatedApi_RemoveAliasRequest as RemoveAliasRequest, type generatedApi_RenderLayer as RenderLayer, type generatedApi_ReorderRequest as ReorderRequest, type generatedApi_ReorderResultResponse as ReorderResultResponse, type generatedApi_ReportCreateRequest as ReportCreateRequest, type generatedApi_ReportReason as ReportReason, type generatedApi_ResettableScreenEffectType as ResettableScreenEffectType, type generatedApi_ResettableVisualEffectType as ResettableVisualEffectType, type generatedApi_Resolution as Resolution, type generatedApi_ResolveExpressionRequest as ResolveExpressionRequest, type generatedApi_ResolveExpressionResponse as ResolveExpressionResponse, type generatedApi_ReviewCreateRequest as ReviewCreateRequest, type generatedApi_ReviewListResponse as ReviewListResponse, type generatedApi_ReviewLogListResponse as ReviewLogListResponse, type generatedApi_ReviewLogResponse as ReviewLogResponse, type generatedApi_ReviewRequestResponse as ReviewRequestResponse, type generatedApi_ReviewResponse as ReviewResponse, type generatedApi_ReviewResultResponse as ReviewResultResponse, type generatedApi_ReviewStatus as ReviewStatus, type generatedApi_ReviewStatusResponse as ReviewStatusResponse, type generatedApi_ReviewTargetType as ReviewTargetType, type generatedApi_ReviewType as ReviewType, generatedApi_ReviewsService as ReviewsService, generatedApi_RightsScope as RightsScope, generatedApi_RomanceTag as RomanceTag, type generatedApi_ScheduleCreateRequest as ScheduleCreateRequest, type generatedApi_ScheduleListResponse as ScheduleListResponse, type generatedApi_ScheduleResponse as ScheduleResponse, type generatedApi_ScheduleUpdateRequest as ScheduleUpdateRequest, generatedApi_SchedulesService as SchedulesService, type generatedApi_ScreenBlurEvent as ScreenBlurEvent, type generatedApi_ScreenColorAdjustEvent as ScreenColorAdjustEvent, type generatedApi_ScreenFadeInEvent as ScreenFadeInEvent, type generatedApi_ScreenFadeOutEvent as ScreenFadeOutEvent, type generatedApi_ScreenFlashEvent as ScreenFlashEvent, type generatedApi_ScreenOrientation as ScreenOrientation, type generatedApi_ScreenResetEvent as ScreenResetEvent, type generatedApi_ScreenShakeEvent as ScreenShakeEvent, type generatedApi_SePlayEvent as SePlayEvent, type generatedApi_SellableAssetType as SellableAssetType, type generatedApi_SessionHistoryCreateRequest as SessionHistoryCreateRequest, type generatedApi_SessionHistoryListResponse as SessionHistoryListResponse, type generatedApi_SessionHistoryResponse as SessionHistoryResponse, generatedApi_SessionHistoryService as SessionHistoryService, type generatedApi_SessionTokenUsageCreateRequest as SessionTokenUsageCreateRequest, type generatedApi_SessionTokenUsageResponse as SessionTokenUsageResponse, type generatedApi_SettingsAutoTagRequest as SettingsAutoTagRequest, type generatedApi_SettingsContentResponse as SettingsContentResponse, type generatedApi_SettingsContent_Input as SettingsContent_Input, type generatedApi_SettingsContent_Output as SettingsContent_Output, type generatedApi_SettingsCreateRequest as SettingsCreateRequest, type generatedApi_SettingsCreateWithContentRequest as SettingsCreateWithContentRequest, type generatedApi_SettingsListResponse as SettingsListResponse, type generatedApi_SettingsLocalized as SettingsLocalized, type generatedApi_SettingsResponse as SettingsResponse, type generatedApi_SettingsSearchRequest as SettingsSearchRequest, type generatedApi_SettingsSearchResponse as SettingsSearchResponse, generatedApi_SettingsService as SettingsService, generatedApi_SettingsSnippetsClientService as SettingsSnippetsClientService, generatedApi_SettingsSnippetsService as SettingsSnippetsService, type generatedApi_SettingsUpdateRequest as SettingsUpdateRequest, type generatedApi_SignalModeBehaviorRequest as SignalModeBehaviorRequest, type generatedApi_SignalModeBehaviorResponse as SignalModeBehaviorResponse, type generatedApi_SignalMotionEntryRequest as SignalMotionEntryRequest, type generatedApi_SignalMotionEntryResponse as SignalMotionEntryResponse, type generatedApi_SignaturePhrase as SignaturePhrase, type generatedApi_SignedUrlResponse as SignedUrlResponse, type generatedApi_SimilarTagItem as SimilarTagItem, type generatedApi_SimilarTagsResponse as SimilarTagsResponse, type generatedApi_SimpleCopyEmotionsResponse as SimpleCopyEmotionsResponse, type generatedApi_SimpleCopyMotionsResponse as SimpleCopyMotionsResponse, type generatedApi_SimpleCopySummary as SimpleCopySummary, type generatedApi_Situation as Situation, type generatedApi_SituationCategory as SituationCategory, type generatedApi_SizeProfile as SizeProfile, type generatedApi_SizeProfileDataResponse as SizeProfileDataResponse, type generatedApi_SnippetBulkDeleteResponse as SnippetBulkDeleteResponse, type generatedApi_SnippetCreateRequest as SnippetCreateRequest, type generatedApi_SnippetGenerateFromInputRequest as SnippetGenerateFromInputRequest, type generatedApi_SnippetGenerateRequest as SnippetGenerateRequest, type generatedApi_SnippetGenerateResponse as SnippetGenerateResponse, type generatedApi_SnippetRegenerateFromInputRequest as SnippetRegenerateFromInputRequest, type generatedApi_SnippetRegenerateRequest as SnippetRegenerateRequest, type generatedApi_SnippetUpdateRequest as SnippetUpdateRequest, type generatedApi_SourceType as SourceType, type generatedApi_SpecialDay as SpecialDay, type generatedApi_SpeechMode as SpeechMode, type generatedApi_SpeechModeChangeEvent as SpeechModeChangeEvent, type generatedApi_SpriteBlinkPayload as SpriteBlinkPayload, type generatedApi_SpriteBlinkPostureData as SpriteBlinkPostureData, type generatedApi_SpriteBreathingPayload as SpriteBreathingPayload, type generatedApi_SpriteExpressionData as SpriteExpressionData, type generatedApi_SpriteExpressionPostureData as SpriteExpressionPostureData, type generatedApi_SpriteExpressionPostures as SpriteExpressionPostures, type generatedApi_SpriteLipSyncPayload as SpriteLipSyncPayload, type generatedApi_SpriteLipSyncPostureData as SpriteLipSyncPostureData, type generatedApi_SpriteLookAtPayload as SpriteLookAtPayload, type generatedApi_SpriteLookAtPostureData as SpriteLookAtPostureData, type generatedApi_SpriteModelPostureDataResponse as SpriteModelPostureDataResponse, type generatedApi_SpriteModelPosturesResponse as SpriteModelPosturesResponse, type generatedApi_SpriteModelResponse as SpriteModelResponse, type generatedApi_SpriteVisemeMapping as SpriteVisemeMapping, type generatedApi_StaffConfirmRequest as StaffConfirmRequest, type generatedApi_StaffReviewRequestRequest as StaffReviewRequestRequest, type generatedApi_StandardContextTableResponse as StandardContextTableResponse, type generatedApi_StateBehaviorRequest as StateBehaviorRequest, type generatedApi_StateBehaviorResponse as StateBehaviorResponse, generatedApi_StateService as StateService, generatedApi_StoriesService as StoriesService, type generatedApi_StoryAiUsage as StoryAiUsage, type generatedApi_StoryCreateRequest as StoryCreateRequest, type generatedApi_StoryDeleteResponse as StoryDeleteResponse, type generatedApi_StoryDuplicateResponse as StoryDuplicateResponse, type generatedApi_StoryEntitySnapshot as StoryEntitySnapshot, type generatedApi_StoryInstanceCreateRequest as StoryInstanceCreateRequest, type generatedApi_StoryInstanceListResponse as StoryInstanceListResponse, type generatedApi_StoryInstanceResponse as StoryInstanceResponse, generatedApi_StoryInstancesService as StoryInstancesService, type generatedApi_StoryListResponse as StoryListResponse, type generatedApi_StoryLocalized as StoryLocalized, type generatedApi_StoryResponse as StoryResponse, type generatedApi_StorySceneCreateRequest as StorySceneCreateRequest, type generatedApi_StorySceneLinkCreateRequest as StorySceneLinkCreateRequest, type generatedApi_StorySceneLinkListResponse as StorySceneLinkListResponse, type generatedApi_StorySceneLinkResponse as StorySceneLinkResponse, type generatedApi_StorySceneLinkUpdateRequest as StorySceneLinkUpdateRequest, type generatedApi_StorySceneListResponse as StorySceneListResponse, type generatedApi_StorySceneLocalized as StorySceneLocalized, type generatedApi_StorySceneResponse as StorySceneResponse, type generatedApi_StorySceneUpdateRequest as StorySceneUpdateRequest, type generatedApi_StorySettings as StorySettings, type generatedApi_StoryTemplateListResponse as StoryTemplateListResponse, type generatedApi_StoryTemplatePromoteRequest as StoryTemplatePromoteRequest, type generatedApi_StoryTemplateResponse as StoryTemplateResponse, type generatedApi_StoryTemplateUpdateRequest as StoryTemplateUpdateRequest, generatedApi_StoryTemplatesService as StoryTemplatesService, type generatedApi_StoryUpdateRequest as StoryUpdateRequest, type generatedApi_StoryWithChildrenResponse as StoryWithChildrenResponse, type generatedApi_SuccessResponse as SuccessResponse, type generatedApi_SuggestByTextRequest as SuggestByTextRequest, SupportedLanguage$1 as SupportedLanguage, type generatedApi_SuspectResult as SuspectResult, type generatedApi_SyncFromEntitlementRequest as SyncFromEntitlementRequest, type generatedApi_SynonymsRequest as SynonymsRequest, type generatedApi_TTSRequest as TTSRequest, type generatedApi_TagCategoriesForTagResponse as TagCategoriesForTagResponse, type generatedApi_TagCategoriesResponse as TagCategoriesResponse, type generatedApi_TagCategoryCreateRequest as TagCategoryCreateRequest, type generatedApi_TagCategoryItemWithOrder as TagCategoryItemWithOrder, type generatedApi_TagCategoryLinkCreateRequest as TagCategoryLinkCreateRequest, type generatedApi_TagCategoryLinkResponse as TagCategoryLinkResponse, type generatedApi_TagCategoryListCursorResponse as TagCategoryListCursorResponse, type generatedApi_TagCategoryLocalized as TagCategoryLocalized, type generatedApi_TagCategoryResponse as TagCategoryResponse, type generatedApi_TagCategoryWithLocaleResponse as TagCategoryWithLocaleResponse, type generatedApi_TagCompatibilityCreateRequest as TagCompatibilityCreateRequest, type generatedApi_TagCompatibilityResponse as TagCompatibilityResponse, type generatedApi_TagCreateRequest as TagCreateRequest, TagLevel$1 as TagLevel, type generatedApi_TagListCursorResponse as TagListCursorResponse, type generatedApi_TagLocalized as TagLocalized, type generatedApi_TagResponse as TagResponse, type generatedApi_TagSearchResultItem as TagSearchResultItem, type generatedApi_TagSearchResultResponse as TagSearchResultResponse, generatedApi_TagWithLevel as TagWithLevel, type generatedApi_TagWithLocaleResponse as TagWithLocaleResponse, generatedApi_TagsService as TagsService, type generatedApi_TargetGenderType as TargetGenderType, type generatedApi_TaxonomyCategoryItem as TaxonomyCategoryItem, type generatedApi_TaxonomyResponse as TaxonomyResponse, type generatedApi_TaxonomyTagItem as TaxonomyTagItem, type generatedApi_TemplateLocalized as TemplateLocalized, type generatedApi_TimeSpecificity as TimeSpecificity, type generatedApi_ToolDefinitionCreateRequest as ToolDefinitionCreateRequest, type generatedApi_ToolDefinitionListResponse as ToolDefinitionListResponse, type generatedApi_ToolDefinitionResponse as ToolDefinitionResponse, type generatedApi_ToolDefinitionUpdateRequest as ToolDefinitionUpdateRequest, generatedApi_ToolDefinitionsService as ToolDefinitionsService, type generatedApi_ToolParameterPropertySchema as ToolParameterPropertySchema, type generatedApi_ToolPosition as ToolPosition, type generatedApi_TransitionType as TransitionType, type generatedApi_TreeNode as TreeNode, generatedApi_TtsService as TtsService, type generatedApi_TurnEndPredictionRequest as TurnEndPredictionRequest, type generatedApi_TurnEndPredictionResponse as TurnEndPredictionResponse, generatedApi_TurnEndPredictionService as TurnEndPredictionService, generatedApi_UnifiedChatCompletionRequest as UnifiedChatCompletionRequest, generatedApi_UnifiedLlmWrapperService as UnifiedLlmWrapperService, type generatedApi_UnifiedStructuredCompletionRequest as UnifiedStructuredCompletionRequest, generatedApi_UsageRestrictions as UsageRestrictions, type generatedApi_UsageSummaryAccumulateRequest as UsageSummaryAccumulateRequest, type generatedApi_UsageSummaryResponse as UsageSummaryResponse, generatedApi_UsageSummaryService as UsageSummaryService, type generatedApi_UserCreateRequest as UserCreateRequest, type generatedApi_UserResponse as UserResponse, type generatedApi_UserUpdateRequest as UserUpdateRequest, generatedApi_UsersService as UsersService, type generatedApi_VAD as VAD, type generatedApi_VADSchema_Output as VADSchema_Output, type generatedApi_VRMAAssetListResponse as VRMAAssetListResponse, type generatedApi_VRMAAssetLocalized as VRMAAssetLocalized, type generatedApi_VRMAAssetResponse as VRMAAssetResponse, type generatedApi_VRMAAssetUpdateRequest as VRMAAssetUpdateRequest, type generatedApi_VRMAAssetVersionResponse as VRMAAssetVersionResponse, type generatedApi_VRMAAssetWithVersionResponse as VRMAAssetWithVersionResponse, type generatedApi_VRMAMotionData as VRMAMotionData, type generatedApi_VRMAssetListResponse as VRMAssetListResponse, type generatedApi_VRMAssetLocalized as VRMAssetLocalized, type generatedApi_VRMAssetResponse as VRMAssetResponse, type generatedApi_VRMAssetUpdateRequest as VRMAssetUpdateRequest, type generatedApi_VRMModelResponse as VRMModelResponse, type generatedApi_VadNonVerbalMappingResponse as VadNonVerbalMappingResponse, type generatedApi_ValidatePriceItem as ValidatePriceItem, type generatedApi_ValidatePricesRequest as ValidatePricesRequest, type generatedApi_ValidatePricesResponse as ValidatePricesResponse, type generatedApi_ValidationError as ValidationError, type generatedApi_ValueAndBeliefSystem as ValueAndBeliefSystem, type generatedApi_VideoAssetListResponse as VideoAssetListResponse, type generatedApi_VideoAssetLocalized as VideoAssetLocalized, type generatedApi_VideoAssetResponse as VideoAssetResponse, type generatedApi_VideoAssetUpdateRequest as VideoAssetUpdateRequest, type generatedApi_VideoAssetVersionListResponse as VideoAssetVersionListResponse, type generatedApi_VideoAssetVersionResponse as VideoAssetVersionResponse, type generatedApi_VideoAssetWithVersionResponse as VideoAssetWithVersionResponse, generatedApi_VideoAssetsService as VideoAssetsService, type generatedApi_VideoCodec as VideoCodec, type generatedApi_VideoFormat as VideoFormat, type generatedApi_VideoQuality as VideoQuality, type generatedApi_ViewAngle as ViewAngle, type generatedApi_VoiceAutoTagRequest as VoiceAutoTagRequest, type generatedApi_VoiceCreateRequest as VoiceCreateRequest, type generatedApi_VoiceListResponse as VoiceListResponse, type generatedApi_VoiceLocalized as VoiceLocalized, type generatedApi_VoiceLocalizedRequest as VoiceLocalizedRequest, type generatedApi_VoiceModel as VoiceModel, type generatedApi_VoiceModelRequest as VoiceModelRequest, type generatedApi_VoiceProvider as VoiceProvider, type generatedApi_VoiceResponse as VoiceResponse, type generatedApi_VoiceSearchResponse as VoiceSearchResponse, type generatedApi_VoiceUpdateRequest as VoiceUpdateRequest, generatedApi_VoicesService as VoicesService, generatedApi_VrmAssetsService as VrmAssetsService, generatedApi_VrmaAssetsService as VrmaAssetsService, type generatedApi_WaitEvent as WaitEvent, type generatedApi_WhitelistRule as WhitelistRule, type generatedApi_XYZScale as XYZScale, type generatedApi_app__api__schemas__emotion__VADSchema as app__api__schemas__emotion__VADSchema, type generatedApi_app__api__schemas__emotion_config__VADSchema as app__api__schemas__emotion_config__VADSchema };
}

/**
 * Content Protection Types
 *
 * Types for the VRM/GLB content protection pipeline:
 * AES-256-GCM decryption, zstd decompression, mesh deobfuscation.
 */
/** Response from the protected-file endpoint */
interface ProtectedFileResponse {
    /** Signed URL to download the protected (encrypted) data */
    url: string;
    /** Key ID for looking up the decryption key */
    key_id: string;
    /** Protection format version identifier */
    format: string;
    /** Obfuscation seed for mesh deobfuscation (null if not obfuscated) */
    obfuscation_seed: string | null;
    /** Fingerprint ID for forensic watermarking (null if not fingerprinted) */
    fingerprint_id?: string | null;
}
/** Response from the key distribution endpoint */
interface ContentProtectionKeyResponse {
    /** Base64-encoded AES-256 key (32 bytes) */
    key: string;
    /** Algorithm identifier (e.g. "AES-256-GCM") */
    algorithm: string;
}
/** Protection format version */
declare const PROTECTION_FORMAT_V1 = "charahome-protected-v1";
/** Auth tag size for AES-256-GCM (16 bytes) */
declare const AES_GCM_TAG_SIZE = 16;

/**
 * Cache Key Builder
 *
 * Constructs deterministic cache keys from asset identifiers.
 */

interface CacheKeyParams {
    category: AssetCategory;
    assetId: string;
    /** Optional variant (e.g. resolution, quality, platform+arch) */
    variant?: string;
}
/**
 * Build a deterministic cache key from asset identifiers.
 *
 * Format: `{category}:{assetId}` or `{category}:{assetId}:{variant}`
 */
declare function buildCacheKey(params: CacheKeyParams): string;

/**
 * Cache Policy Definitions
 *
 * Per-category policy defining persistence tier and encryption requirements.
 */

/**
 * Default cache policies per asset category.
 *
 * VRM: Persistent (server-side content protection handles encryption).
 * AssetBundle: MemoryOnly by default (Unity SDK responsibility).
 * Exception: if ownedByUser=true, CacheManager promotes MemoryOnly to Persistent.
 *
 * All other categories: Persistent (IndexedDB on Web, FS on Electron).
 */
declare const CACHE_POLICIES: Record<AssetCategory, AssetCachePolicy>;

/**
 * No-op Persistent Cache Store
 *
 * Used when persistent caching is not available or not needed
 * (SSR environments, MemoryOnly policy without ownership).
 */

declare class NoopCacheStore implements PersistentCacheStore {
    get(_key: string): Promise<CacheEntry | null>;
    put(_key: string, _entry: CacheEntry): Promise<void>;
    delete(_key: string): Promise<void>;
    has(_key: string): Promise<boolean>;
    getMeta(_key: string): Promise<CacheEntryMeta | null>;
    listMeta(): Promise<CacheEntryMeta[]>;
    totalSize(): Promise<number>;
    clear(): Promise<void>;
}

export { type TagCategory as $, AES_GCM_TAG_SIZE as A, type AuthApiErrorResponse as B, type ContentProtectionKeyResponse as C, type DictionaryWordAddRequest as D, type Emotion as E, type DictionaryWordAddResponse as F, type DictionaryWordDeleteResponse as G, type DictionaryUpdateRequest as H, type DictionaryUpdateResponse as I, type MessageType as J, type ChatLogMessage as K, type ChatLogSaveRequest as L, type MergeAccountsRequest$1 as M, NoopCacheStore as N, OpenAPI as O, PROTECTION_FORMAT_V1 as P, type ChatLogSaveResponse as Q, type RegisterLinkRequest$1 as R, type SenderType as S, type ChatLogEntry as T, type ChatLogHistoryResponse as U, type VoiceGender as V, type ChatLogDeleteResponse as W, type TagLevel as X, type CompatibilitySource as Y, type CompatibilityMode as Z, type TagCategoryLocalized$1 as _, type ProtectedFileResponse as a, type TagCategoryCreateRequest$1 as a0, type TagCategoryUpdateRequest as a1, type TagLocalized$1 as a2, type Tag as a3, type TagCreateRequest$1 as a4, type TagUpdateRequest as a5, type TagCategoryLink as a6, type TagCategoryLinkCreateRequest$1 as a7, type TagCategoryLinkReorderItem as a8, type TagCategoryLinkReorderRequest as a9, type StoryLink as aA, type StoryGraphMetadata as aB, type StoryGraphStoryData as aC, type StoryGraph as aD, type StoryGraphCreateRequest as aE, type StoryGraphCreateResponse as aF, type StoryGraphUpdateRequest as aG, type StoryGraphResponse as aH, type StoryNavigationRequest as aI, type StoryNavigationResponse as aJ, type StoryPathsResponse as aK, type ScheduleRecurrence as aL, type ScheduleReminder as aM, type Schedule as aN, type ScheduleCreateRequest$1 as aO, type ScheduleUpdateRequest$1 as aP, type ScheduleResponse$1 as aQ, type ScheduleListResponse$1 as aR, type ScheduleListOptions as aS, type TagCategoryLinkReorderResponse as aa, type TagCategoryLinkBulkUpsertRequest as ab, type TagCompatibility as ac, type TagCompatibilityCreateRequest$1 as ad, type TagCompatibilityGenerateRequest as ae, type TagCompatibilityGenerateResponse as af, type TaxonomyTag as ag, type TaxonomyNode as ah, type TagWithCategoriesResponse as ai, type PaginatedResponse as aj, type AutoTagResult as ak, type AutoTagResponse$1 as al, type AutoTagCategoriesResponse as am, type AutoTagAvatarOptions as an, type AutoTagDescriptionRequest as ao, type StoryMetadataLocalized as ap, type StoryMetadata as aq, type StorySettings$1 as ar, type AssetCatalog$1 as as, type StorySegment as at, type StoryChoice as au, type Story as av, type StoryCreateRequest$1 as aw, type StoryCreateResponse as ax, type StoryUpdateRequest$1 as ay, type StoryResponse$1 as az, buildCacheKey as b, CACHE_POLICIES as c, type VoiceAgeGroup as d, type VoiceProvider$1 as e, type VoiceDataSource as f, generatedApi as g, type VoiceLocalePayload as h, type VoiceModel$1 as i, type VoiceTagWithLevel as j, type Voice as k, type VoiceListItem as l, type VoiceListResponse$1 as m, type VoiceSearchResponse$1 as n, type VoiceCreateRequest$1 as o, type VoiceUpdateRequest$1 as p, type EmotionFormat as q, type EmotionsResponse as r, type EmotionCreateRequest$1 as s, type EmotionUpdateRequest$1 as t, type EmotionResponse$1 as u, type EmotionFormatCreateRequest as v, type EmotionFormatResponse as w, type AccountLink as x, type CheckLinkResult as y, type AuthApiSuccessResponse as z };
