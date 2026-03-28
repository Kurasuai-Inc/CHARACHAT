// src/react.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo
} from "react";
import { onAuthStateChanged, signInAnonymously as signInAnonymously2 } from "firebase/auth";

// src/firebase.ts
import {
  initializeApp,
  getApps
} from "firebase/app";
import {
  getAuth,
  initializeAuth,
  browserLocalPersistence
} from "firebase/auth";
function getOrInitializeApp(config, name) {
  const existingApp = getApps().find((app) => app.name === name);
  if (existingApp) {
    return existingApp;
  }
  return initializeApp(config, name);
}
function createBrowserAuth(app) {
  if (typeof window === "undefined") {
    return getAuth(app);
  }
  try {
    return initializeAuth(app, {
      persistence: browserLocalPersistence
    });
  } catch {
    return getAuth(app);
  }
}
function initializeDualAuth(derivedConfig, derivedAppName, charahomeConfig) {
  const derivedApp = getOrInitializeApp(derivedConfig, derivedAppName);
  const derivedAuth = createBrowserAuth(derivedApp);
  const charahomeApp = getOrInitializeApp(charahomeConfig, "charahome");
  const charahomeAuth = createBrowserAuth(charahomeApp);
  return { derivedAuth, charahomeAuth };
}
function getProjectId(config) {
  return config.projectId || "";
}
function getAuthInstances(config) {
  return initializeDualAuth(
    config.derivedAppConfig,
    config.derivedAppName,
    config.charahomeConfig
  );
}

// src/charahome.ts
import {
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  linkWithCredential,
  EmailAuthProvider
} from "firebase/auth";
import { initializeApp as initializeApp2, deleteApp } from "firebase/app";
var CHARAHOMELinkingClient = class {
  constructor(derivedAuth, charahomeAuth, charahomeConfig, appId, apiBaseUrl = DEFAULT_API_BASE_URL) {
    this.derivedAuth = derivedAuth;
    this.charahomeAuth = charahomeAuth;
    this.charahomeConfig = charahomeConfig;
    this.appId = appId;
    this.apiBaseUrl = apiBaseUrl;
  }
  /**
   * Ensure both auth instances have users (anonymous if needed)
   */
  async ensureAuthenticated() {
    if (!this.derivedAuth.currentUser) {
      await signInAnonymously(this.derivedAuth);
    }
    if (!this.charahomeAuth.currentUser) {
      await signInAnonymously(this.charahomeAuth);
    }
    const derivedUser = this.derivedAuth.currentUser;
    const charahomeUser = this.charahomeAuth.currentUser;
    if (!derivedUser || !charahomeUser) {
      throw new Error("Failed to authenticate");
    }
    return { derivedUser, charahomeUser };
  }
  /**
   * Get CHARAHOME ID token for API calls
   */
  async getCharahomeToken() {
    const user = this.charahomeAuth.currentUser;
    if (!user) return null;
    return user.getIdToken();
  }
  /**
   * Get derived app ID token
   */
  async getDerivedToken() {
    const user = this.derivedAuth.currentUser;
    if (!user) return null;
    return user.getIdToken();
  }
  /**
   * Check if current user has a link with this app
   */
  async checkLink() {
    const token = await this.getCharahomeToken();
    if (!token) {
      return { linked: false, links: [] };
    }
    const response = await fetch(
      `${this.apiBaseUrl}/api/auth/check-link?app_id=${encodeURIComponent(this.appId)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    if (!response.ok) {
      if (response.status === 401) {
        return { linked: false, links: [] };
      }
      const error = await response.json();
      throw new Error(error.detail || "Failed to check link");
    }
    return response.json();
  }
  /**
   * Link with CHARAHOME account
   * Handles both existing account merge and anonymous upgrade flows
   */
  async linkWithCHARAHOME(email, password) {
    await this.ensureAuthenticated();
    const derivedUser = this.derivedAuth.currentUser;
    const currentAnonUid = this.charahomeAuth.currentUser.uid;
    const existingUser = await this.checkExistingAccount(email, password);
    if (existingUser) {
      return this.mergeWithExistingAccount(
        currentAnonUid,
        existingUser.uid,
        derivedUser.uid,
        email,
        password
      );
    } else {
      return this.upgradeAnonymousAccount(
        currentAnonUid,
        derivedUser.uid,
        email,
        password
      );
    }
  }
  /**
   * Check if an account with given email exists
   * Returns the user if exists, null otherwise
   */
  async checkExistingAccount(email, password) {
    const tempAppName = `temp-check-${Date.now()}`;
    let tempApp;
    try {
      tempApp = initializeApp2(this.charahomeConfig, tempAppName);
      const tempAuth = createBrowserAuth(tempApp);
      const credential = await signInWithEmailAndPassword(
        tempAuth,
        email,
        password
      );
      const user = credential.user;
      await firebaseSignOut(tempAuth);
      return user;
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/user-not-found" || firebaseError.code === "auth/wrong-password" || firebaseError.code === "auth/invalid-credential") {
        return null;
      }
      throw error;
    } finally {
      if (tempApp) {
        try {
          await deleteApp(tempApp);
        } catch {
        }
      }
    }
  }
  /**
   * Merge anonymous account data with existing CHARAHOME account
   */
  async mergeWithExistingAccount(anonUid, existingUid, derivedUid, email, password) {
    const token = await this.getCharahomeToken();
    if (!token) {
      throw new Error("No CHARAHOME token available");
    }
    const body = {
      anonUid,
      existingUid,
      derivedUid,
      appId: this.appId,
      derivedProjectId: getProjectId(this.charahomeConfig)
    };
    const response = await fetch(`${this.apiBaseUrl}/api/auth/merge-accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Merge failed");
    }
    const result = await response.json();
    await firebaseSignOut(this.charahomeAuth);
    await signInWithEmailAndPassword(this.charahomeAuth, email, password);
    return {
      type: "existing",
      uid: existingUid,
      linkId: result.linkId
    };
  }
  /**
   * Upgrade anonymous account to regular account with email/password
   */
  async upgradeAnonymousAccount(anonUid, derivedUid, email, password) {
    const currentUser = this.charahomeAuth.currentUser;
    if (!currentUser) {
      throw new Error("No current user to upgrade");
    }
    const credential = EmailAuthProvider.credential(email, password);
    let linkedUser;
    try {
      const result2 = await linkWithCredential(currentUser, credential);
      linkedUser = result2.user;
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new Error(
          "Email already in use. Please use correct password to link with existing account."
        );
      }
      throw error;
    }
    const token = await linkedUser.getIdToken();
    const body = {
      charahomeUid: linkedUser.uid,
      // Same as anonUid
      derivedUid,
      appId: this.appId,
      derivedProjectId: getProjectId(this.charahomeConfig)
    };
    const response = await fetch(`${this.apiBaseUrl}/api/auth/register-link`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Link registration failed");
    }
    const result = await response.json();
    return {
      type: "upgraded",
      uid: linkedUser.uid,
      linkId: result.linkId
    };
  }
  /**
   * Sign out from both apps
   */
  async signOut() {
    await Promise.all([
      firebaseSignOut(this.derivedAuth),
      firebaseSignOut(this.charahomeAuth)
    ]);
  }
};
function createLinkingClient(derivedAuth, charahomeAuth, charahomeConfig, appId, apiBaseUrl) {
  return new CHARAHOMELinkingClient(
    derivedAuth,
    charahomeAuth,
    charahomeConfig,
    appId,
    apiBaseUrl
  );
}

// src/react.tsx
import { jsx } from "react/jsx-runtime";
var AuthContext = createContext(null);
function CHARAHOMEAuthProvider({
  children,
  config,
  onAuthStateChange
}) {
  const [derivedUser, setDerivedUser] = useState(null);
  const [charahomeUser, setCharahomeUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [linkingClient, setLinkingClient] = useState(null);
  useEffect(() => {
    let mounted = true;
    let derivedReady = false;
    let charahomeReady = false;
    const checkReady = () => {
      if (derivedReady && charahomeReady && mounted) {
        setLoading(false);
      }
    };
    try {
      const { derivedAuth, charahomeAuth } = initializeDualAuth(
        config.derivedAppConfig,
        config.derivedAppName,
        config.charahomeConfig
      );
      const client = createLinkingClient(
        derivedAuth,
        charahomeAuth,
        config.charahomeConfig,
        config.appId,
        config.charahomeApiBaseUrl
      );
      setLinkingClient(client);
      const unsubDerived = onAuthStateChanged(derivedAuth, async (user) => {
        if (!mounted) return;
        if (!user) {
          try {
            await signInAnonymously2(derivedAuth);
          } catch (err) {
            if (mounted) {
              setError(err instanceof Error ? err : new Error("Failed to sign in anonymously"));
            }
          }
        } else {
          setDerivedUser(user);
          derivedReady = true;
          checkReady();
        }
      });
      const unsubCharahome = onAuthStateChanged(charahomeAuth, async (user) => {
        if (!mounted) return;
        if (!user) {
          try {
            await signInAnonymously2(charahomeAuth);
          } catch (err) {
            if (mounted) {
              setError(err instanceof Error ? err : new Error("Failed to sign in anonymously"));
            }
          }
        } else {
          setCharahomeUser(user);
          charahomeReady = true;
          checkReady();
        }
      });
      return () => {
        mounted = false;
        unsubDerived();
        unsubCharahome();
      };
    } catch (err) {
      if (mounted) {
        setError(err instanceof Error ? err : new Error("Failed to initialize auth"));
        setLoading(false);
      }
    }
  }, [config]);
  useEffect(() => {
    if (onAuthStateChange) {
      onAuthStateChange({ derivedUser, charahomeUser, loading, error });
    }
  }, [derivedUser, charahomeUser, loading, error, onAuthStateChange]);
  const getCharahomeToken = useCallback(async () => {
    return charahomeUser?.getIdToken() ?? null;
  }, [charahomeUser]);
  const getDerivedToken = useCallback(async () => {
    return derivedUser?.getIdToken() ?? null;
  }, [derivedUser]);
  const checkLink = useCallback(async () => {
    if (!linkingClient) {
      return { linked: false, links: [] };
    }
    return linkingClient.checkLink();
  }, [linkingClient]);
  const linkWithCHARAHOME = useCallback(
    async (email, password) => {
      if (!linkingClient) {
        throw new Error("Auth not initialized");
      }
      return linkingClient.linkWithCHARAHOME(email, password);
    },
    [linkingClient]
  );
  const signOut = useCallback(async () => {
    if (!linkingClient) {
      throw new Error("Auth not initialized");
    }
    await linkingClient.signOut();
    setDerivedUser(null);
    setCharahomeUser(null);
  }, [linkingClient]);
  const value = useMemo(
    () => ({
      config,
      derivedUser,
      charahomeUser,
      loading,
      error,
      getCharahomeToken,
      getDerivedToken,
      checkLink,
      linkWithCHARAHOME,
      signOut
    }),
    [
      config,
      derivedUser,
      charahomeUser,
      loading,
      error,
      getCharahomeToken,
      getDerivedToken,
      checkLink,
      linkWithCHARAHOME,
      signOut
    ]
  );
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a CHARAHOMEAuthProvider");
  }
  return context;
}
function useCharahomeToken() {
  const { getCharahomeToken } = useAuth();
  return getCharahomeToken;
}
function useIsAuthenticated() {
  const { charahomeUser, derivedUser, loading } = useAuth();
  return {
    isAuthenticated: !!(charahomeUser && derivedUser),
    isCharahomeAuthenticated: !!charahomeUser,
    isDerivedAuthenticated: !!derivedUser,
    loading
  };
}

export {
  getOrInitializeApp,
  createBrowserAuth,
  initializeDualAuth,
  getProjectId,
  getAuthInstances,
  CHARAHOMELinkingClient,
  createLinkingClient,
  CHARAHOMEAuthProvider,
  useAuth,
  useCharahomeToken,
  useIsAuthenticated
};
