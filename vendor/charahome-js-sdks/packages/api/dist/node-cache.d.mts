import { c as PersistentCacheStore, b as CacheEntry, a as CacheEntryMeta } from './types-D2KgMl8A.mjs';

/**
 * Filesystem Persistent Cache Store (Electron)
 *
 * Stores binary assets on disk for Electron apps.
 * VRM and AssetBundle files are encrypted with AES-256-GCM.
 * Other assets are stored as plain files.
 *
 * Directory layout:
 *   {cacheDir}/
 *     meta/        - JSON metadata files
 *     data/        - Binary data files (plain or encrypted)
 *
 * Encrypted file layout: [12-byte IV][ciphertext][16-byte AuthTag]
 */

interface FilesystemStoreConfig {
    /** Directory to store cache files */
    cacheDir: string;
    /** Passphrase for PBKDF2 key derivation (for encrypted categories) */
    encryptionPassphrase: string;
}
declare class FilesystemCacheStore implements PersistentCacheStore {
    private cacheDir;
    private metaDir;
    private dataDir;
    private encryptionKey;
    private encryptionPassphrase;
    private initialized;
    private crypto;
    private fs;
    private path;
    constructor(config: FilesystemStoreConfig);
    private init;
    get(key: string): Promise<CacheEntry | null>;
    put(key: string, entry: CacheEntry): Promise<void>;
    delete(key: string): Promise<void>;
    has(key: string): Promise<boolean>;
    getMeta(key: string): Promise<CacheEntryMeta | null>;
    listMeta(): Promise<CacheEntryMeta[]>;
    totalSize(): Promise<number>;
    clear(): Promise<void>;
    /**
     * Encrypt data with AES-256-GCM.
     * Output: [12-byte IV][ciphertext][16-byte AuthTag]
     */
    private encrypt;
    /**
     * Decrypt AES-256-GCM encrypted data.
     * Input: [12-byte IV][ciphertext][16-byte AuthTag]
     */
    private decrypt;
    /**
     * Sanitize cache key for use as a filename.
     */
    private sanitizeKey;
    private metaPath;
    private dataPath;
}

export { FilesystemCacheStore, type FilesystemStoreConfig };
