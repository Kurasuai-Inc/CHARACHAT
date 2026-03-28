import { C as CreateAuthApiClientOptions, A as AuthApiClient, D as DerivedAppAuthConfigInput, a as CHARAHOMEAuthConfig, L as LinkResult, b as CheckLinkResult } from './react-MLagZOBx.mjs';
export { d as AccountLink, f as CHARAHOMEApiErrorResponse, e as CHARAHOMEApiSuccessResponse, h as CHARAHOMEAuthProvider, g as CHARAHOMEAuthProviderProps, c as DualAuthState, M as MergeAccountsRequest, R as RegisterLinkRequest, U as UseAuthReturn, u as useAuth } from './react-MLagZOBx.mjs';
import { FirebaseOptions, FirebaseApp } from 'firebase/app';
import { Auth, User } from 'firebase/auth';
import 'react/jsx-runtime';
import 'react';
import '@kurasuai-inc/charahome-api/client';

declare function createAuthApiClient(options: CreateAuthApiClientOptions): AuthApiClient;
declare function resolveAuthApiClient(config: {
    apiClient?: AuthApiClient;
    apiBaseUrl?: string;
}): AuthApiClient;

declare function createDerivedAppAuthConfig(input: DerivedAppAuthConfigInput): CHARAHOMEAuthConfig;

/**
 * CHARAHOME Auth SDK - Firebase Utilities
 *
 * Handles Firebase initialization with browserLocalPersistence
 * to avoid IndexedDB delay issues (100+ seconds delay)
 */

/**
 * Get or initialize a Firebase app instance
 * Handles Hot Reload scenarios where app may already be initialized
 *
 * @param config - Firebase configuration
 * @param name - Unique name for the app instance
 * @returns Firebase app instance
 */
declare function getOrInitializeApp(config: FirebaseOptions, name: string): FirebaseApp;
/**
 * Create a Firebase Auth instance with browserLocalPersistence
 *
 * IMPORTANT: This solves the IndexedDB delay issue.
 * Without this, onAuthStateChanged can take 100+ seconds.
 * With browserLocalPersistence, it takes 8-20ms.
 *
 * @param app - Firebase app instance
 * @returns Firebase Auth instance
 */
declare function createBrowserAuth(app: FirebaseApp): Auth;
/**
 * Initialize both derived app and CHARAHOME Firebase instances
 *
 * @param derivedConfig - Firebase config for derived app
 * @param derivedAppName - Name for derived app instance
 * @param charahomeConfig - Firebase config for CHARAHOME
 * @returns Object containing both auth instances
 */
declare function initializeDualAuth(derivedConfig: FirebaseOptions, derivedAppName: string, charahomeConfig: FirebaseOptions): {
    derivedAuth: Auth;
    charahomeAuth: Auth;
};
/**
 * Get the Firebase project ID from a config object
 * Used for derivedProjectId in account linking
 *
 * @param config - Firebase configuration
 * @returns Project ID or empty string
 */
declare function getProjectId(config: FirebaseOptions): string;
/**
 * Get Firebase Auth instances from CHARAHOMEAuthConfig
 *
 * Use this function in service layers (non-React code) to get Auth instances
 * that are consistent with what CHARAHOMEAuthProvider uses.
 *
 * @param config - CHARAHOME Auth configuration
 * @returns Object containing both auth instances
 *
 * @example
 * ```typescript
 * import { getAuthInstances } from '@kurasuai-inc/charahome-auth';
 *
 * const config = {
 *   derivedAppConfig: { apiKey: "...", projectId: "my-app" },
 *   derivedAppName: "my-app",
 *   charahomeConfig: { apiKey: "...", projectId: "charahome" },
 *   appId: "my_app_id",
 * };
 *
 * const { derivedAuth, charahomeAuth } = getAuthInstances(config);
 *
 * // Use in service layer
 * await signInWithEmailAndPassword(charahomeAuth, email, password);
 * ```
 */
declare function getAuthInstances(config: CHARAHOMEAuthConfig): {
    derivedAuth: Auth;
    charahomeAuth: Auth;
};

/**
 * CHARAHOME Auth SDK - CHARAHOME Account Linking
 *
 * Implements the account linking flow between derived apps and CHARAHOME:
 * - Check existing link status
 * - Merge with existing CHARAHOME account
 * - Upgrade anonymous account to regular account
 */

declare class CHARAHOMEAuthFlowError extends Error {
    code: string;
    constructor(code: string, message: string);
}
/**
 * CHARAHOME Account Linking Client
 */
declare class CHARAHOMELinkingClient {
    private derivedAuth;
    private charahomeAuth;
    private charahomeConfig;
    private appId;
    private apiClient;
    constructor(derivedAuth: Auth, charahomeAuth: Auth, charahomeConfig: FirebaseOptions, appId: string, apiClient: AuthApiClient);
    /**
     * Ensure both auth instances have users (anonymous if needed)
     * and register link if not already linked.
     */
    ensureAuthenticated(): Promise<{
        derivedUser: User;
        charahomeUser: User;
        isNewLink: boolean;
    }>;
    /**
     * Sign in to an existing CHARAHOME account and merge the current anonymous session.
     */
    signInWithCHARAHOME(email: string, password: string): Promise<LinkResult>;
    /**
     * Create a new CHARAHOME account from the current anonymous session.
     */
    createCHARAHOMEAccount(email: string, password: string): Promise<LinkResult>;
    /**
     * Link with CHARAHOME account.
     * If the account exists, merge into it. If it does not exist, upgrade the current anonymous session.
     */
    linkWithCHARAHOME(email: string, password: string): Promise<LinkResult>;
    /**
     * Get CHARAHOME ID token for API calls
     */
    getCharahomeToken(): Promise<string | null>;
    /**
     * Get derived app ID token
     */
    getDerivedToken(): Promise<string | null>;
    /**
     * Check if current user has a link with this app
     */
    checkLink(): Promise<CheckLinkResult>;
    /**
     * Sign out from both apps
     */
    signOut(): Promise<void>;
    private getDerivedProjectId;
    private resetLinkedCharahomeSessionIfNeeded;
    private registerAnonymousLink;
    /**
     * Check if an account with given email exists.
     * Returns the user and token if credentials are valid.
     */
    private checkExistingAccount;
    private getSignInMethodsForEmail;
    private mergeWithExistingAccount;
    private upgradeAnonymousAccount;
    private withTempAuth;
}
/**
 * Create a CHARAHOME linking client
 */
declare function createLinkingClient(derivedAuth: Auth, charahomeAuth: Auth, charahomeConfig: FirebaseOptions, appId: string, apiClient: AuthApiClient): CHARAHOMELinkingClient;

export { AuthApiClient, CHARAHOMEAuthConfig, CHARAHOMEAuthFlowError, CHARAHOMELinkingClient, CheckLinkResult, CreateAuthApiClientOptions, DerivedAppAuthConfigInput, LinkResult, createAuthApiClient, createBrowserAuth, createDerivedAppAuthConfig, createLinkingClient, getAuthInstances, getOrInitializeApp, getProjectId, initializeDualAuth, resolveAuthApiClient };
