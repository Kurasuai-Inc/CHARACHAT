"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/node-cache.ts
var node_cache_exports = {};
__export(node_cache_exports, {
  FilesystemCacheStore: () => FilesystemCacheStore
});
module.exports = __toCommonJS(node_cache_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FilesystemCacheStore
});
