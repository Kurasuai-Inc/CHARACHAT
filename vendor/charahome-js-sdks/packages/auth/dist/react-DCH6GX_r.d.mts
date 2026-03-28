import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { Auth, User } from 'firebase/auth';
import { FirebaseOptions } from 'firebase/app';

/**
 * CHARAHOME Auth SDK - Type Definitions
 */

/**
 * Account link information
 */
interface AccountLink {
    charahomeUid: string;
    appId: string;
    derivedUid: string;
    derivedProjectId: string;
    linkedAt: string;
    lastUsedAt: string;
    disabled: boolean;
    linkId: string;
}
/**
 * Result of check-link API
 */
interface CheckLinkResult {
    linked: boolean;
    links: AccountLink[];
}
/**
 * Merge accounts request body
 */
interface MergeAccountsRequest {
    anonUid: string;
    /** ID token of the existing account (for server-side verification) */
    existingToken: string;
    derivedUid: string;
    appId: string;
    derivedProjectId: string;
}
/**
 * Register link request body
 */
interface RegisterLinkRequest {
    charahomeUid: string;
    derivedUid: string;
    appId: string;
    derivedProjectId: string;
}
/**
 * CHARAHOME API response for successful operations
 */
interface CHARAHOMEApiSuccessResponse {
    status: 'success';
    charahomeUid?: string;
    linkId: string;
}
/**
 * CHARAHOME API error response
 */
interface CHARAHOMEApiErrorResponse {
    detail: string;
}
/**
 * Auth API client interface
 * Used to proxy Auth API calls through API SDK (to avoid CORS)
 */
interface AuthApiClient {
    /** Check if user has a link with the app */
    checkLink: (appId: string, userToken: string) => Promise<CheckLinkResult>;
    /** Merge anonymous account with existing account */
    mergeAccounts: (request: MergeAccountsRequest, userToken: string) => Promise<CHARAHOMEApiSuccessResponse>;
    /** Register a new account link */
    registerLink: (request: RegisterLinkRequest, userToken: string) => Promise<CHARAHOMEApiSuccessResponse>;
}
/**
 * Options for creating an Auth API client with fetch.
 * baseUrl should point at the `/api/v1` root or a same-origin proxy equivalent.
 */
interface CreateAuthApiClientOptions {
    baseUrl: string;
    headers?: Record<string, string>;
}
/**
 * Configuration for CHARAHOME Auth SDK
 */
interface CHARAHOMEAuthConfig {
    /** Firebase config for the derived app */
    derivedAppConfig: FirebaseOptions;
    /** Unique name for the derived Firebase app instance */
    derivedAppName: string;
    /** Firebase config for CHARAHOME */
    charahomeConfig: FirebaseOptions;
    /** App identifier for account linking (e.g., "love_advice", "vr_world") */
    appId: string;
    /** Same-origin proxy or direct `/api/v1` URL for CHARAHOME auth endpoints */
    apiBaseUrl?: string;
    /** Auth API client for proxying API calls */
    apiClient?: AuthApiClient;
}
/**
 * Auth state for both derived app and CHARAHOME
 */
interface DualAuthState {
    /** Derived app Firebase Auth instance */
    derivedAuth: Auth;
    /** CHARAHOME Firebase Auth instance */
    charahomeAuth: Auth;
    /** Current user in derived app */
    derivedUser: User | null;
    /** Current user in CHARAHOME */
    charahomeUser: User | null;
    /** Loading state */
    loading: boolean;
    /** Error if any */
    error: Error | null;
}
/**
 * Result of account linking operations
 */
interface LinkResult {
    type: 'existing' | 'upgraded';
    uid: string;
    linkId?: string;
}
/**
 * Token claims including admin status
 */
interface TokenClaims {
    /** Whether the user is an admin */
    admin?: boolean;
    /** User ID */
    user_id?: string;
    /** Email */
    email?: string;
    /** Email verified */
    email_verified?: boolean;
    /** All other custom claims */
    [key: string]: unknown;
}
/**
 * Hook return type for useAuth
 */
interface UseAuthReturn {
    /** Derived app user */
    derivedUser: User | null;
    /** CHARAHOME user */
    charahomeUser: User | null;
    /** Loading state */
    loading: boolean;
    /** Error if any */
    error: Error | null;
    /**
     * Whether the CHARAHOME user is an admin.
     * - `true`: User has admin privileges
     * - `false`: User is not an admin
     * - `null`: Unknown (loading or not authenticated)
     */
    isAdmin: boolean | null;
    /**
     * Full token claims from CHARAHOME Firebase Auth.
     * Contains admin status and other custom claims.
     */
    claims: TokenClaims | null;
    /** Get ID token for CHARAHOME API calls (from React state - may be stale in callbacks) */
    getCharahomeToken: () => Promise<string | null>;
    /** Get ID token for derived app API calls (from React state - may be stale in callbacks) */
    getDerivedToken: () => Promise<string | null>;
    /**
     * Force get current CHARAHOME token directly from Firebase Auth (bypasses React state).
     * Use this after linkWithCHARAHOME to get the updated token immediately.
     */
    forceGetCharahomeToken: () => Promise<string | null>;
    /**
     * Refresh token claims from Firebase Auth.
     * Call this after admin status might have changed.
     */
    refreshClaims: () => Promise<TokenClaims | null>;
    /** Check if accounts are linked */
    checkLink: () => Promise<CheckLinkResult>;
    /** Start a dual anonymous session and register the derived/CHARAHOME link if needed */
    signInAnonymously: () => Promise<void>;
    /** Sign in to an existing CHARAHOME account and link it to the current derived app session */
    signInWithCHARAHOME: (email: string, password: string) => Promise<LinkResult>;
    /** Create a new CHARAHOME account from the current anonymous session and link it */
    createCHARAHOMEAccount: (email: string, password: string) => Promise<LinkResult>;
    /** Link with CHARAHOME account (existing or new) */
    linkWithCHARAHOME: (email: string, password: string) => Promise<LinkResult>;
    /** Sign out from both apps */
    signOut: () => Promise<void>;
}
/**
 * Provider props
 */
interface CHARAHOMEAuthProviderProps$1 {
    children: React.ReactNode;
    config: CHARAHOMEAuthConfig;
    /** Automatically bootstrap anonymous auth on load. Disable to gate entry behind your own auth UI. */
    autoAnonymousLogin?: boolean;
    /** Called when auth state changes */
    onAuthStateChange?: (state: DualAuthState) => void;
}

interface CHARAHOMEAuthProviderProps {
    children: ReactNode;
    config: CHARAHOMEAuthConfig;
    autoAnonymousLogin?: boolean;
    onAuthStateChange?: (state: {
        derivedUser: User | null;
        charahomeUser: User | null;
        loading: boolean;
        error: Error | null;
    }) => void;
}
declare function CHARAHOMEAuthProvider({ children, config, autoAnonymousLogin, onAuthStateChange, }: CHARAHOMEAuthProviderProps): react_jsx_runtime.JSX.Element;
declare function useAuth(): UseAuthReturn;
declare function useCharahomeToken(): () => Promise<string | null>;
declare function useIsAuthenticated(): {
    isAuthenticated: boolean;
    isCharahomeAuthenticated: boolean;
    isDerivedAuthenticated: boolean;
    loading: boolean;
};
declare function useIsAdmin(): {
    isAdmin: boolean | null;
    isDefinitelyAdmin: boolean;
    isDefinitelyNotAdmin: boolean;
    loading: boolean;
    refresh: () => Promise<void>;
};

export { type AuthApiClient as A, type CreateAuthApiClientOptions as C, type DualAuthState as D, type LinkResult as L, type MergeAccountsRequest as M, type RegisterLinkRequest as R, type TokenClaims as T, type UseAuthReturn as U, type CHARAHOMEAuthConfig as a, type CheckLinkResult as b, type AccountLink as c, type CHARAHOMEApiSuccessResponse as d, type CHARAHOMEApiErrorResponse as e, type CHARAHOMEAuthProviderProps$1 as f, CHARAHOMEAuthProvider as g, type CHARAHOMEAuthProviderProps as h, useCharahomeToken as i, useIsAuthenticated as j, useIsAdmin as k, useAuth as u };
