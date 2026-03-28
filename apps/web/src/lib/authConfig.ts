import { createDerivedAppAuthConfig } from '@kurasuai-inc/charahome-auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || undefined,
};

export const chatAuthConfig = createDerivedAppAuthConfig({
  derivedAppConfig: firebaseConfig,
  derivedAppName: 'charachat-web',
  appId: import.meta.env.VITE_CHARAHOME_APP_ID || 'charachat_web',
  environment: import.meta.env.VITE_CHARAHOME_ENV === 'production' ? 'production' : 'staging',
});

