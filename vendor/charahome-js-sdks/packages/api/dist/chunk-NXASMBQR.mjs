// src/cache/types.ts
var AssetCategory = /* @__PURE__ */ ((AssetCategory2) => {
  AssetCategory2["Image"] = "image";
  AssetCategory2["Vrma"] = "vrma";
  AssetCategory2["AnimationClip"] = "animation_clip";
  AssetCategory2["Audio"] = "audio";
  AssetCategory2["Vrm"] = "vrm";
  AssetCategory2["AssetBundle"] = "asset_bundle";
  AssetCategory2["Video"] = "video";
  AssetCategory2["AnimatedImage"] = "animated_image";
  return AssetCategory2;
})(AssetCategory || {});
var PersistenceTier = /* @__PURE__ */ ((PersistenceTier2) => {
  PersistenceTier2["MemoryOnly"] = "memory_only";
  PersistenceTier2["Persistent"] = "persistent";
  return PersistenceTier2;
})(PersistenceTier || {});

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

export {
  AssetCategory,
  PersistenceTier,
  CACHE_POLICIES,
  resolveEffectiveTier
};
