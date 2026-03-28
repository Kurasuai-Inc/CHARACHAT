// src/react.tsx
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { onAuthStateChanged, signInAnonymously as firebaseSignInAnonymously } from "firebase/auth";

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
  fetchSignInMethodsForEmail,
  signOut as firebaseSignOut,
  linkWithCredential,
  EmailAuthProvider
} from "firebase/auth";
import { initializeApp as initializeApp2, deleteApp } from "firebase/app";
var CHARAHOMEAuthFlowError = class extends Error {
  constructor(code, message) {
    super(message);
    this.name = "CHARAHOMEAuthFlowError";
    this.code = code;
  }
};
var CHARAHOMELinkingClient = class {
  constructor(derivedAuth, charahomeAuth, charahomeConfig, appId, apiClient) {
    this.derivedAuth = derivedAuth;
    this.charahomeAuth = charahomeAuth;
    this.charahomeConfig = charahomeConfig;
    this.appId = appId;
    this.apiClient = apiClient;
  }
  /**
   * Ensure both auth instances have users (anonymous if needed)
   * and register link if not already linked.
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
      throw new Error("Failed to authenticate.");
    }
    const linkStatus = await this.checkLink();
    let isNewLink = false;
    if (!linkStatus.linked) {
      await this.registerAnonymousLink(charahomeUser, derivedUser);
      isNewLink = true;
    }
    return { derivedUser, charahomeUser, isNewLink };
  }
  /**
   * Sign in to an existing CHARAHOME account and merge the current anonymous session.
   */
  async signInWithCHARAHOME(email, password) {
    await this.ensureAuthenticated();
    const derivedUser = this.derivedAuth.currentUser;
    const currentAnonUid = this.charahomeAuth.currentUser?.uid;
    if (!derivedUser || !currentAnonUid) {
      throw new Error("Failed to initialize anonymous session before CHARAHOME sign-in.");
    }
    const existingAccount = await this.checkExistingAccount(email, password);
    if (!existingAccount) {
      throw new CHARAHOMEAuthFlowError(
        "auth/invalid-credential",
        "Invalid email or password for the existing CHARAHOME account."
      );
    }
    return this.mergeWithExistingAccount(
      currentAnonUid,
      existingAccount.user.uid,
      existingAccount.token,
      derivedUser.uid,
      email,
      password
    );
  }
  /**
   * Create a new CHARAHOME account from the current anonymous session.
   */
  async createCHARAHOMEAccount(email, password) {
    await this.ensureAuthenticated();
    const derivedUser = this.derivedAuth.currentUser;
    const currentAnonUid = this.charahomeAuth.currentUser?.uid;
    if (!derivedUser || !currentAnonUid) {
      throw new Error("Failed to initialize anonymous session before CHARAHOME account creation.");
    }
    const signInMethods = await this.getSignInMethodsForEmail(email);
    if (signInMethods.length > 0) {
      throw new CHARAHOMEAuthFlowError(
        "auth/email-already-in-use",
        "This email address is already registered with CHARAHOME."
      );
    }
    return this.upgradeAnonymousAccount(
      currentAnonUid,
      derivedUser.uid,
      email,
      password
    );
  }
  /**
   * Link with CHARAHOME account.
   * If the account exists, merge into it. If it does not exist, upgrade the current anonymous session.
   */
  async linkWithCHARAHOME(email, password) {
    await this.ensureAuthenticated();
    const derivedUser = this.derivedAuth.currentUser;
    const currentAnonUid = this.charahomeAuth.currentUser?.uid;
    if (!derivedUser || !currentAnonUid) {
      throw new Error("Failed to initialize anonymous session before CHARAHOME linking.");
    }
    const existingAccount = await this.checkExistingAccount(email, password);
    if (existingAccount) {
      return this.mergeWithExistingAccount(
        currentAnonUid,
        existingAccount.user.uid,
        existingAccount.token,
        derivedUser.uid,
        email,
        password
      );
    }
    const signInMethods = await this.getSignInMethodsForEmail(email);
    if (signInMethods.length > 0) {
      throw new CHARAHOMEAuthFlowError(
        "auth/invalid-credential",
        "Invalid email or password for the existing CHARAHOME account."
      );
    }
    return this.upgradeAnonymousAccount(
      currentAnonUid,
      derivedUser.uid,
      email,
      password
    );
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
    return this.apiClient.checkLink(this.appId, token);
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
  getDerivedProjectId() {
    return getProjectId(this.derivedAuth.app.options);
  }
  async registerAnonymousLink(charahomeUser, derivedUser) {
    const token = await charahomeUser.getIdToken();
    const body = {
      charahomeUid: charahomeUser.uid,
      derivedUid: derivedUser.uid,
      appId: this.appId,
      derivedProjectId: this.getDerivedProjectId()
    };
    await this.apiClient.registerLink(body, token);
  }
  /**
   * Check if an account with given email exists.
   * Returns the user and token if credentials are valid.
   */
  async checkExistingAccount(email, password) {
    try {
      return await this.withTempAuth(async (tempAuth) => {
        const credential = await signInWithEmailAndPassword(tempAuth, email, password);
        const user = credential.user;
        const token = await user.getIdToken();
        await firebaseSignOut(tempAuth);
        return { user, token };
      });
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/user-not-found" || firebaseError.code === "auth/wrong-password" || firebaseError.code === "auth/invalid-credential") {
        return null;
      }
      throw error;
    }
  }
  async getSignInMethodsForEmail(email) {
    return this.withTempAuth(async (tempAuth) => {
      return fetchSignInMethodsForEmail(tempAuth, email);
    });
  }
  async mergeWithExistingAccount(anonUid, existingUid, existingToken, derivedUid, email, password) {
    const anonToken = await this.getCharahomeToken();
    if (!anonToken) {
      throw new Error("No CHARAHOME token available.");
    }
    const body = {
      anonUid,
      existingToken,
      derivedUid,
      appId: this.appId,
      derivedProjectId: this.getDerivedProjectId()
    };
    const result = await this.apiClient.mergeAccounts(body, anonToken);
    await firebaseSignOut(this.charahomeAuth);
    await signInWithEmailAndPassword(this.charahomeAuth, email, password);
    return {
      type: "existing",
      uid: existingUid,
      linkId: result.linkId
    };
  }
  async upgradeAnonymousAccount(anonUid, derivedUid, email, password) {
    const currentUser = this.charahomeAuth.currentUser;
    if (!currentUser) {
      throw new Error("No current user to upgrade.");
    }
    const credential = EmailAuthProvider.credential(email, password);
    let linkedUser;
    try {
      const result2 = await linkWithCredential(currentUser, credential);
      linkedUser = result2.user;
    } catch (error) {
      const firebaseError = error;
      if (firebaseError.code === "auth/email-already-in-use") {
        throw new CHARAHOMEAuthFlowError(
          "auth/email-already-in-use",
          "This email address is already registered with CHARAHOME."
        );
      }
      throw error;
    }
    const token = await linkedUser.getIdToken();
    const body = {
      charahomeUid: linkedUser.uid,
      derivedUid,
      appId: this.appId,
      derivedProjectId: this.getDerivedProjectId()
    };
    const result = await this.apiClient.registerLink(body, token);
    return {
      type: "upgraded",
      uid: linkedUser.uid,
      linkId: result.linkId
    };
  }
  async withTempAuth(callback) {
    const tempAppName = `temp-charahome-auth-${Date.now()}`;
    let tempApp;
    try {
      tempApp = initializeApp2(this.charahomeConfig, tempAppName);
      const tempAuth = createBrowserAuth(tempApp);
      return await callback(tempAuth);
    } finally {
      if (tempApp) {
        try {
          await deleteApp(tempApp);
        } catch {
        }
      }
    }
  }
};
function createLinkingClient(derivedAuth, charahomeAuth, charahomeConfig, appId, apiClient) {
  return new CHARAHOMELinkingClient(
    derivedAuth,
    charahomeAuth,
    charahomeConfig,
    appId,
    apiClient
  );
}

// src/api-client.ts
function normalizeBaseUrl(baseUrl) {
  return baseUrl.replace(/\/+$/, "");
}
async function parseError(response) {
  try {
    const body = await response.json();
    return new Error(body.detail || `Auth API request failed with status ${response.status}`);
  } catch {
    return new Error(`Auth API request failed with status ${response.status}`);
  }
}
async function requestJson(baseUrl, path, init, token, defaultHeaders) {
  const response = await fetch(`${normalizeBaseUrl(baseUrl)}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...defaultHeaders,
      ...init.headers ?? {}
    }
  });
  if (!response.ok) {
    throw await parseError(response);
  }
  return await response.json();
}
function createAuthApiClient(options) {
  const { baseUrl, headers } = options;
  return {
    checkLink(appId, userToken) {
      const params = new URLSearchParams({ app_id: appId });
      return requestJson(
        baseUrl,
        `/auth/check-link?${params.toString()}`,
        { method: "GET" },
        userToken,
        headers
      );
    },
    mergeAccounts(request, userToken) {
      return requestJson(
        baseUrl,
        "/auth/merge-accounts",
        {
          method: "POST",
          body: JSON.stringify(request)
        },
        userToken,
        headers
      );
    },
    registerLink(request, userToken) {
      return requestJson(
        baseUrl,
        "/auth/register-link",
        {
          method: "POST",
          body: JSON.stringify(request)
        },
        userToken,
        headers
      );
    }
  };
}
function resolveAuthApiClient(config) {
  if (config.apiClient) {
    return config.apiClient;
  }
  if (config.apiBaseUrl) {
    return createAuthApiClient({ baseUrl: config.apiBaseUrl });
  }
  throw new Error("CHARAHOME auth requires either apiClient or apiBaseUrl.");
}

// src/react.tsx
import { jsx } from "react/jsx-runtime";
var AuthContext = createContext(null);
function CHARAHOMEAuthProvider({
  children,
  config,
  autoAnonymousLogin = true,
  onAuthStateChange
}) {
  const [derivedUser, setDerivedUser] = useState(null);
  const [charahomeUser, setCharahomeUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [linkingClient, setLinkingClient] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [claims, setClaims] = useState(null);
  const fetchClaims = useCallback(async (user) => {
    if (!user) {
      setIsAdmin(null);
      setClaims(null);
      return null;
    }
    try {
      const tokenResult = await user.getIdTokenResult();
      const tokenClaims = tokenResult.claims;
      setIsAdmin(tokenClaims.admin === true);
      setClaims(tokenClaims);
      return tokenClaims;
    } catch (err) {
      console.error("[Auth] Failed to get token claims:", err);
      setIsAdmin(null);
      setClaims(null);
      return null;
    }
  }, []);
  useEffect(() => {
    let mounted = true;
    let derivedSettled = false;
    let charahomeSettled = false;
    let linkedPairKey = null;
    setLoading(true);
    setError(null);
    try {
      const { derivedAuth, charahomeAuth } = initializeDualAuth(
        config.derivedAppConfig,
        config.derivedAppName,
        config.charahomeConfig
      );
      const apiClient = resolveAuthApiClient(config);
      const client = createLinkingClient(
        derivedAuth,
        charahomeAuth,
        config.charahomeConfig,
        config.appId,
        apiClient
      );
      setLinkingClient(client);
      const finalizeIfReady = async () => {
        if (!mounted || !derivedSettled || !charahomeSettled) {
          return;
        }
        const currentDerivedUser = derivedAuth.currentUser;
        const currentCharahomeUser = charahomeAuth.currentUser;
        if (currentDerivedUser && currentCharahomeUser) {
          const pairKey = `${currentDerivedUser.uid}:${currentCharahomeUser.uid}`;
          if (linkedPairKey !== pairKey) {
            linkedPairKey = pairKey;
            try {
              const linkStatus = await client.checkLink();
              if (!linkStatus.linked) {
                await client.ensureAuthenticated();
              }
            } catch (err) {
              console.error("[Auth] Failed to register link:", err);
            }
          }
        }
        if (mounted) {
          setLoading(false);
        }
      };
      const maybeBootstrapAnonymousAuth = async (kind) => {
        if (!autoAnonymousLogin) {
          return false;
        }
        try {
          if (kind === "derived" && !derivedAuth.currentUser) {
            await firebaseSignInAnonymously(derivedAuth);
            return true;
          }
          if (kind === "charahome" && !charahomeAuth.currentUser) {
            await firebaseSignInAnonymously(charahomeAuth);
            return true;
          }
        } catch (err) {
          if (mounted) {
            setError(err instanceof Error ? err : new Error("Failed to sign in anonymously."));
          }
        }
        return false;
      };
      const unsubDerived = onAuthStateChanged(derivedAuth, async (user) => {
        if (!mounted) {
          return;
        }
        if (user) {
          setDerivedUser(user);
          derivedSettled = true;
          await finalizeIfReady();
          return;
        }
        setDerivedUser(null);
        const bootstrapped = await maybeBootstrapAnonymousAuth("derived");
        if (!bootstrapped) {
          derivedSettled = true;
          await finalizeIfReady();
        }
      });
      const unsubCharahome = onAuthStateChanged(charahomeAuth, async (user) => {
        if (!mounted) {
          return;
        }
        if (user) {
          setCharahomeUser(user);
          await fetchClaims(user);
          charahomeSettled = true;
          await finalizeIfReady();
          return;
        }
        setCharahomeUser(null);
        setIsAdmin(null);
        setClaims(null);
        const bootstrapped = await maybeBootstrapAnonymousAuth("charahome");
        if (!bootstrapped) {
          charahomeSettled = true;
          await finalizeIfReady();
        }
      });
      return () => {
        mounted = false;
        unsubDerived();
        unsubCharahome();
      };
    } catch (err) {
      if (mounted) {
        setError(err instanceof Error ? err : new Error("Failed to initialize auth."));
        setLoading(false);
      }
    }
  }, [autoAnonymousLogin, config, fetchClaims]);
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
  const forceGetCharahomeToken = useCallback(async () => {
    return linkingClient?.getCharahomeToken() ?? null;
  }, [linkingClient]);
  const refreshClaims = useCallback(async () => {
    if (!charahomeUser) {
      return null;
    }
    await charahomeUser.getIdToken(true);
    return fetchClaims(charahomeUser);
  }, [charahomeUser, fetchClaims]);
  const checkLink = useCallback(async () => {
    if (!linkingClient) {
      return { linked: false, links: [] };
    }
    return linkingClient.checkLink();
  }, [linkingClient]);
  const signInAnonymously2 = useCallback(async () => {
    if (!linkingClient) {
      throw new Error("Auth not initialized.");
    }
    await linkingClient.ensureAuthenticated();
  }, [linkingClient]);
  const signInWithCHARAHOME = useCallback(
    async (email, password) => {
      if (!linkingClient) {
        throw new Error("Auth not initialized.");
      }
      return linkingClient.signInWithCHARAHOME(email, password);
    },
    [linkingClient]
  );
  const createCHARAHOMEAccount = useCallback(
    async (email, password) => {
      if (!linkingClient) {
        throw new Error("Auth not initialized.");
      }
      return linkingClient.createCHARAHOMEAccount(email, password);
    },
    [linkingClient]
  );
  const linkWithCHARAHOME = useCallback(
    async (email, password) => {
      if (!linkingClient) {
        throw new Error("Auth not initialized.");
      }
      return linkingClient.linkWithCHARAHOME(email, password);
    },
    [linkingClient]
  );
  const signOut = useCallback(async () => {
    if (!linkingClient) {
      throw new Error("Auth not initialized.");
    }
    await linkingClient.signOut();
    setDerivedUser(null);
    setCharahomeUser(null);
    setIsAdmin(null);
    setClaims(null);
  }, [linkingClient]);
  const value = useMemo(
    () => ({
      config,
      derivedUser,
      charahomeUser,
      loading,
      error,
      isAdmin,
      claims,
      getCharahomeToken,
      getDerivedToken,
      forceGetCharahomeToken,
      refreshClaims,
      checkLink,
      signInAnonymously: signInAnonymously2,
      signInWithCHARAHOME,
      createCHARAHOMEAccount,
      linkWithCHARAHOME,
      signOut
    }),
    [
      config,
      derivedUser,
      charahomeUser,
      loading,
      error,
      isAdmin,
      claims,
      getCharahomeToken,
      getDerivedToken,
      forceGetCharahomeToken,
      refreshClaims,
      checkLink,
      signInAnonymously2,
      signInWithCHARAHOME,
      createCHARAHOMEAccount,
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
function useIsAdmin() {
  const { isAdmin, loading, refreshClaims } = useAuth();
  const refresh = useCallback(async () => {
    await refreshClaims();
  }, [refreshClaims]);
  return {
    isAdmin,
    isDefinitelyAdmin: isAdmin === true,
    isDefinitelyNotAdmin: isAdmin === false,
    loading,
    refresh
  };
}

export {
  createAuthApiClient,
  resolveAuthApiClient,
  getOrInitializeApp,
  createBrowserAuth,
  initializeDualAuth,
  getProjectId,
  getAuthInstances,
  CHARAHOMEAuthFlowError,
  CHARAHOMELinkingClient,
  createLinkingClient,
  CHARAHOMEAuthProvider,
  useAuth,
  useCharahomeToken,
  useIsAuthenticated,
  useIsAdmin
};
