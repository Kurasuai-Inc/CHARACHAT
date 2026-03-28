import { FirebaseOptions } from 'firebase/app';
import { Auth, User } from 'firebase/auth';

/**
 * CHARAHOME Auth SDK - Type Definitions
 */

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
    /** CHARAHOME Internal API base URL */
    charahomeApiBaseUrl?: string;
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
 * Result of account linking operations
 */
interface LinkResult {
    type: 'existing' | 'upgraded';
    uid: string;
    linkId?: string;
}
/**
 * Merge accounts request body
 */
interface MergeAccountsRequest {
    anonUid: string;
    existingUid: string;
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
    /** Get ID token for CHARAHOME API calls */
    getCharahomeToken: () => Promise<string | null>;
    /** Get ID token for derived app API calls */
    getDerivedToken: () => Promise<string | null>;
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
interface CHARAHOMEAuthProviderProps {
    children: React.ReactNode;
    config: CHARAHOMEAuthConfig;
    /** Called when auth state changes */
    onAuthStateChange?: (state: DualAuthState) => void;
}

export type { AccountLink as A, CHARAHOMEAuthConfig as C, DualAuthState as D, LinkResult as L, MergeAccountsRequest as M, RegisterLinkRequest as R, UseAuthReturn as U, CheckLinkResult as a, CHARAHOMEApiSuccessResponse as b, CHARAHOMEApiErrorResponse as c, CHARAHOMEAuthProviderProps as d };
