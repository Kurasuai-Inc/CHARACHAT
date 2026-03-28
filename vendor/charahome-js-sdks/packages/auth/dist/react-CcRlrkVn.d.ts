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
    /** Auth API client for proxying API calls (required to avoid CORS) */
    apiClient: AuthApiClient;
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
    /** Called when auth state changes */
    onAuthStateChange?: (state: DualAuthState) => void;
}

interface CHARAHOMEAuthProviderProps {
    children: ReactNode;
    config: CHARAHOMEAuthConfig;
    onAuthStateChange?: (state: {
        derivedUser: User | null;
        charahomeUser: User | null;
        loading: boolean;
        error: Error | null;
    }) => void;
}
/**
 * CHARAHOME Auth Provider
 *
 * Wraps your app to provide dual Firebase auth (derived + CHARAHOME)
 * and account linking functionality.
 *
 * @example
 * ```tsx
 * import { CHARAHOMEAuthProvider } from '@kurasuai-inc/charahome-auth/react';
 *
 * const config = {
 *   derivedAppConfig: { apiKey: "...", projectId: "..." },
 *   derivedAppName: "my-app",
 *   charahomeConfig: { apiKey: "...", projectId: "..." },
 *   appId: "my_app_id",
 * };
 *
 * function App() {
 *   return (
 *     <CHARAHOMEAuthProvider config={config}>
 *       <MyApp />
 *     </CHARAHOMEAuthProvider>
 *   );
 * }
 * ```
 */
declare function CHARAHOMEAuthProvider({ children, config, onAuthStateChange, }: CHARAHOMEAuthProviderProps): react_jsx_runtime.JSX.Element;
/**
 * Hook to access CHARAHOME auth state and functions
 *
 * @example
 * ```tsx
 * import { useAuth } from '@kurasuai-inc/charahome-auth/react';
 *
 * function MyComponent() {
 *   const {
 *     charahomeUser,
 *     derivedUser,
 *     loading,
 *     isAdmin,
 *     claims,
 *     getCharahomeToken,
 *     linkWithCHARAHOME,
 *   } = useAuth();
 *
 *   if (loading) return <div>Loading...</div>;
 *
 *   return (
 *     <div>
 *       <p>CHARAHOME UID: {charahomeUser?.uid}</p>
 *       <p>Derived UID: {derivedUser?.uid}</p>
 *       <p>Admin: {isAdmin ? 'Yes' : 'No'}</p>
 *     </div>
 *   );
 * }
 * ```
 */
declare function useAuth(): UseAuthReturn;
/**
 * Hook to get just the CHARAHOME token (convenience hook)
 *
 * @example
 * ```tsx
 * const getToken = useCharahomeToken();
 *
 * async function callApi() {
 *   const token = await getToken();
 *   const response = await fetch('/api/endpoint', {
 *     headers: { Authorization: `Bearer ${token}` }
 *   });
 * }
 * ```
 */
declare function useCharahomeToken(): () => Promise<string | null>;
/**
 * Hook to check if user is authenticated
 */
declare function useIsAuthenticated(): {
    isAuthenticated: boolean;
    isCharahomeAuthenticated: boolean;
    isDerivedAuthenticated: boolean;
    loading: boolean;
};
/**
 * Hook to check if user is an admin
 *
 * @example
 * ```tsx
 * import { useIsAdmin } from '@kurasuai-inc/charahome-auth/react';
 *
 * function AdminPanel() {
 *   const { isAdmin, loading } = useIsAdmin();
 *
 *   if (loading) return <div>Loading...</div>;
 *   if (!isAdmin) return <div>Access denied</div>;
 *
 *   return <div>Admin content</div>;
 * }
 * ```
 */
declare function useIsAdmin(): {
    /** Whether the user is an admin (null if unknown/loading) */
    isAdmin: boolean | null;
    /** Whether the user is definitely an admin */
    isDefinitelyAdmin: boolean;
    /** Whether the user is definitely not an admin */
    isDefinitelyNotAdmin: boolean;
    /** Loading state */
    loading: boolean;
    /** Refresh admin status from server */
    refresh: () => Promise<void>;
};

export { type AuthApiClient as A, type CHARAHOMEAuthConfig as C, type DualAuthState as D, type LinkResult as L, type MergeAccountsRequest as M, type RegisterLinkRequest as R, type TokenClaims as T, type UseAuthReturn as U, type CheckLinkResult as a, type AccountLink as b, type CHARAHOMEApiSuccessResponse as c, type CHARAHOMEApiErrorResponse as d, type CHARAHOMEAuthProviderProps$1 as e, CHARAHOMEAuthProvider as f, type CHARAHOMEAuthProviderProps as g, useCharahomeToken as h, useIsAuthenticated as i, useIsAdmin as j, useAuth as u };
