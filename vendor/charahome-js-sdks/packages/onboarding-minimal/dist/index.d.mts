import * as react_jsx_runtime from 'react/jsx-runtime';

interface MinimalOnboardingUser {
    user_id: string;
    user_name?: string | null;
    favorite_character_id?: string | null;
    character_ids?: string[] | null;
    birth_date?: string | null;
    tos_accepted_at?: string | null;
    privacy_policy_accepted_at?: string | null;
    tos_version?: string | null;
    privacy_policy_version?: string | null;
    [key: string]: unknown;
}
interface MinimalOnboardingApiAdapter {
    getUser(token: string): Promise<MinimalOnboardingUser>;
    createUser?(token: string): Promise<MinimalOnboardingUser>;
    patchUser(data: Record<string, unknown>, token: string): Promise<MinimalOnboardingUser>;
    ensureUser?(token: string): Promise<MinimalOnboardingUser>;
}
interface CreateMinimalOnboardingFetchAdapterOptions {
    baseUrl: string;
    headers?: Record<string, string>;
    defaultUserName?: string;
}
interface MinimalOnboardingCompletePayload {
    user: MinimalOnboardingUser;
    charahomeToken: string;
    derivedToken: string | null;
    isNewAccount: boolean;
}
interface MinimalOnboardingFlowProps {
    appId: string;
    api: MinimalOnboardingApiAdapter;
    title?: string;
    subtitle?: string;
    tosUrl: string;
    privacyPolicyUrl: string;
    tosVersion: string;
    privacyPolicyVersion: string;
    minimumAge?: number;
    allowAnonymous?: boolean;
    submitLabel?: string;
    onComplete?: (payload: MinimalOnboardingCompletePayload) => void | Promise<void>;
}

declare function MinimalOnboardingFlow({ api, title, subtitle, tosUrl, privacyPolicyUrl, tosVersion, privacyPolicyVersion, minimumAge, allowAnonymous, submitLabel, onComplete, }: MinimalOnboardingFlowProps): react_jsx_runtime.JSX.Element;

declare function createMinimalOnboardingFetchAdapter(options: CreateMinimalOnboardingFetchAdapterOptions): MinimalOnboardingApiAdapter;

export { type CreateMinimalOnboardingFetchAdapterOptions, type MinimalOnboardingApiAdapter, type MinimalOnboardingCompletePayload, MinimalOnboardingFlow, type MinimalOnboardingFlowProps, type MinimalOnboardingUser, createMinimalOnboardingFetchAdapter };
