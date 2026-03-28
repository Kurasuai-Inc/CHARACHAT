/**
 * Asset Cache Types
 *
 * Enums, interfaces, and configuration for the multi-tier asset cache.
 */
declare enum AssetCategory {
    Image = "image",
    Vrma = "vrma",
    AnimationClip = "animation_clip",
    Audio = "audio",
    Vrm = "vrm",
    AssetBundle = "asset_bundle",
    Video = "video",
    AnimatedImage = "animated_image"
}
declare enum PersistenceTier {
    MemoryOnly = "memory_only",
    Persistent = "persistent"
}
interface CacheConfig {
    /** Enable caching */
    enabled: boolean;
    /** Maximum memory cache size in MB (default: 200) */
    maxMemoryMB?: number;
    /** Maximum persistent cache size in MB (default: 500) */
    maxPersistentMB?: number;
    /** Memory TTL in milliseconds (default: 300000 = 5 min) */
    memoryTTLMs?: number;
    /** Injected persistent store (for Electron FS store) */
    persistentStore?: PersistentCacheStore;
}
interface CacheEntryMeta {
    /** Cache key */
    key: string;
    /** Asset category */
    category: AssetCategory;
    /** Version ID from server (null if unknown) */
    versionId: string | null;
    /** Whether this asset is owned by the current user */
    ownedByUser: boolean;
    /** Timestamp when cached */
    cachedAt: number;
    /** Data size in bytes */
    sizeBytes: number;
    /** Timestamp of last access */
    lastAccessedAt: number;
}
interface CacheEntry {
    meta: CacheEntryMeta;
    data: ArrayBuffer;
}
interface PersistentCacheStore {
    get(key: string): Promise<CacheEntry | null>;
    put(key: string, entry: CacheEntry): Promise<void>;
    delete(key: string): Promise<void>;
    has(key: string): Promise<boolean>;
    getMeta(key: string): Promise<CacheEntryMeta | null>;
    listMeta(): Promise<CacheEntryMeta[]>;
    totalSize(): Promise<number>;
    clear(): Promise<void>;
}
interface AssetCachePolicy {
    category: AssetCategory;
    /** Default persistence tier (may be overridden by ownedByUser) */
    persistenceTier: PersistenceTier;
    /** Whether to encrypt on disk (Electron FS only, for VRM/AssetBundle) */
    encryptOnDisk: boolean;
}
interface CacheStats {
    memoryEntries: number;
    memorySizeBytes: number;
    persistentEntries: number;
    persistentSizeBytes: number;
}

export { AssetCategory as A, type CacheConfig as C, PersistenceTier as P, type CacheEntryMeta as a, type CacheEntry as b, type PersistentCacheStore as c, type AssetCachePolicy as d, type CacheStats as e };
