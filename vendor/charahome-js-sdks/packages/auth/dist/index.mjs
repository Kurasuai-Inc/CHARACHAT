import {
  CHARAHOMEAuthFlowError,
  CHARAHOMEAuthProvider,
  CHARAHOMELinkingClient,
  createAuthApiClient,
  createBrowserAuth,
  createLinkingClient,
  getAuthInstances,
  getOrInitializeApp,
  getProjectId,
  initializeDualAuth,
  resolveAuthApiClient,
  useAuth
} from "./chunk-TXMPAMOI.mjs";

// src/config.ts
import { getEnvironmentConfig, getFirebaseConfig } from "@kurasuai-inc/charahome-api/client";
function createDerivedAppAuthConfig(input) {
  const environment = input.environment ?? "staging";
  const environmentConfig = getEnvironmentConfig(environment);
  return {
    derivedAppConfig: input.derivedAppConfig,
    derivedAppName: input.derivedAppName,
    charahomeConfig: input.charahomeConfig ?? getFirebaseConfig(environment),
    appId: input.appId,
    apiBaseUrl: input.apiBaseUrl ?? environmentConfig.apiBaseUrl
  };
}
export {
  CHARAHOMEAuthFlowError,
  CHARAHOMEAuthProvider,
  CHARAHOMELinkingClient,
  createAuthApiClient,
  createBrowserAuth,
  createDerivedAppAuthConfig,
  createLinkingClient,
  getAuthInstances,
  getOrInitializeApp,
  getProjectId,
  initializeDualAuth,
  resolveAuthApiClient,
  useAuth
};
