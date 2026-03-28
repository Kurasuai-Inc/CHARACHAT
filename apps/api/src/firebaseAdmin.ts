import { applicationDefault, cert, getApps, initializeApp, type App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { type CharachatApiConfig } from './config.js';

function ensureFirebaseAdminApp(config: CharachatApiConfig): App {
  if (getApps().length > 0) {
    return getApps()[0]!;
  }

  if (config.firebaseProjectId && config.firebaseClientEmail && config.firebasePrivateKey) {
    return initializeApp({
      credential: cert({
        projectId: config.firebaseProjectId,
        clientEmail: config.firebaseClientEmail,
        privateKey: config.firebasePrivateKey,
      }),
      projectId: config.firebaseProjectId,
    });
  }

  return initializeApp({
    credential: applicationDefault(),
    projectId: config.firebaseProjectId,
  });
}

export function canUseFirebaseAdmin(config: CharachatApiConfig) {
  return Boolean(config.firebaseProjectId);
}

export function getAdminAuth(config: CharachatApiConfig) {
  return getAuth(ensureFirebaseAdminApp(config));
}

export function getAdminFirestore(config: CharachatApiConfig) {
  return getFirestore(ensureFirebaseAdminApp(config));
}
