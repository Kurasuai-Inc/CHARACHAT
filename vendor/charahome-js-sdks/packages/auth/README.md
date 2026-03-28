# @kurasuai-inc/charahome-auth

CHARAHOME派生アプリ向け認証SDK。Firebase Auth連携とCHARAHOMEアカウント紐づけを提供。

## 対応環境

| 環境 | 対応 |
|------|------|
| Web (Next.js/React) | ✅ |
| Web (Vanilla JS) | ✅ |
| Electron (Renderer) | ✅ |

## インストール

```bash
npm install @kurasuai-inc/charahome-auth firebase
```

`apiBaseUrl` を環境から自動で解決したい場合は、必要に応じて `@kurasuai-inc/charahome-api` も併用してください。

---

## 概要：なぜ2つのFirebase Auth?

CHARAHOME派生アプリは **2つのFirebase プロジェクト** を使用します：

```
┌─────────────────────────────────────────────────────────────┐
│  派生アプリ (例: 恋愛相談アプリ)                              │
│  ┌──────────────────┐     ┌──────────────────┐              │
│  │ 派生アプリAuth    │     │ CHARAHOME Auth   │              │
│  │ (常に匿名)       │     │ (共通アカウント)  │              │
│  └──────────────────┘     └──────────────────┘              │
│          │                        │                         │
│          │                        ▼                         │
│          │               ┌──────────────────┐               │
│          │               │ CHARAHOME API    │               │
│          │               │ (キャラ/会話等)  │               │
│          │               └──────────────────┘               │
│          │                                                  │
│          ▼                                                  │
│  ┌──────────────────┐                                       │
│  │ 派生アプリ固有    │                                       │
│  │ データ/機能       │                                       │
│  └──────────────────┘                                       │
└─────────────────────────────────────────────────────────────┘
```

**ポイント:**
- **派生アプリAuthは常に匿名** - ユーザーは派生アプリのアカウントを意識しない
- **CHARAHOMEアカウントが唯一の正規アカウント** - 複数の派生アプリで共通
- CHARAHOMEのキャラクター・会話機能は `CHARAHOME Auth` のトークンで認証
- ユーザーが複数の派生アプリを使う場合、CHARAHOME側で紐づけ（`accountLinks`）

---

## 派生アプリ共通の auth config を組む

`CHARAHOME-WORK` や `CHARADESK` のような派生アプリでは、毎回

- derived app Firebase config
- derived app name
- app id
- CHARAHOME environment
- CHARAHOME auth API base URL

を組み立てる必要があります。  
同じ client-side bootstrap を複数アプリで書かないよう、SDK では `createDerivedAppAuthConfig()` を使えます。

```typescript
import { createDerivedAppAuthConfig } from '@kurasuai-inc/charahome-auth';

export const authConfig = createDerivedAppAuthConfig({
  derivedAppConfig: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
  },
  derivedAppName: 'charadesk-web',
  appId: 'charadesk_web',
  environment: 'staging',
  apiBaseUrl: '/charahome-api/api/v1',
});
```

`charahomeConfig` と `apiBaseUrl` を省略した場合は、environment から SDK 側で解決します。

---

## ユーザー体験フロー

### 初回起動時のUI

派生アプリは起動時に以下の3つの選択肢を提示します：

```
┌─────────────────────────────────────┐
│                                     │
│   「はじめまして」                    │
│   アカウント登録なしで体験            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   「CHARAHOMEでログイン」             │
│   既存アカウントをお持ちの方          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   「CHARAHOMEアカウントを作成」       │
│   新規登録                           │
│                                     │
└─────────────────────────────────────┘

      ─────────────────────────
      CHARAHOMEとは？
      対応アプリ間でキャラクターとの
      思い出を共有できるアカウントです
      ─────────────────────────
```

### フロー詳細

```
┌─────────────────────────────────────────────────────────────────┐
│ アプリ起動（暗い画面、固定演出）                                   │
│ ※この時点ではAuth処理なし                                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ はじめまして   │   │ ログイン      │   │ アカウント作成 │
└───────────────┘   └───────────────┘   └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ 両方で匿名Auth │   │ CHARAHOME Auth│   │ CHARAHOME Auth│
│ 作成           │   │ ログイン      │   │ アカウント作成│
└───────────────┘   └───────────────┘   └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ 年齢確認      │   │ 派生Auth匿名  │   │ 派生Auth匿名  │
│ (生年月日)    │   │ 作成+連携登録 │   │ 作成+連携登録 │
└───────────────┘   └───────────────┘   └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ 公式キャラ複製 │   │ 年齢確認済み  │   │ 年齢確認      │
│ →利用開始     │   │ なら利用開始  │   │ →利用開始     │
└───────────────┘   └───────────────┘   └───────────────┘
```

### 年齢確認

LLM API利用規約により、生年月日の取得が必須です：

- **13歳未満**: 利用不可
- **13〜17歳**: 親の同意確認が必要
- **18歳以上**: 利用可能

生年月日はCHARAHOME側のユーザーデータに保存され、派生アプリには「利用可能か」の結果のみ返されます。

---

## 匿名ユーザーのAPI制限

マージ処理の複雑さを回避するため、匿名ユーザーには以下の制限があります：

### 許可される操作

| カテゴリ | 操作 | 備考 |
|---------|------|------|
| 全データ | Read | 公開データは閲覧可能 |
| Character | Duplicate | 公式キャラを複製して使用 |
| UserData | CRUD | 基本情報、お気に入りなど |
| Acquaintance | CRUD | キャラとの関係性（親密度等） |
| ChatLogs | Create/Read | 会話履歴 |
| Memory系 | CRUD | 記憶、要約など |

### 禁止される操作（要CHARAHOMEアカウント）

| カテゴリ | 操作 | 理由 |
|---------|------|------|
| Character | Create/Update/Delete | owner_id変更+サブコレクション移動が複雑 |
| Avatar | CUD | 同上 |
| Settings | CUD | 深いネスト構造のマージが困難 |
| Model | CUD | 同上 |
| Asset Upload | Create | Storage+Firestoreの整合性 |

### 派生アプリの典型的な実装パターン

```
派生アプリ起動
    │
    ▼
匿名Auth作成 + UserData作成
    │
    ▼
POST /api/characters/{official_id}/duplicate
    │
    ▼
新しい Character (owner_id = 匿名UID)
    │
    ▼
この複製キャラで会話開始
```

派生アプリは公式キャラを複製してユーザーごとに提供します。
これにより、他ユーザーとの記憶が混ざることを防ぎます。

---

## 後からのCHARAHOME連携

匿名で利用開始したユーザーには、後からCHARAHOME連携を促します：

```
┌─────────────────────────────────────┐
│ CHARAHOMEアカウントに登録しますか？   │
│                                     │
│ ・別デバイスでも続きから遊べます      │
│ ・対応アプリでキャラとの思い出を共有  │
│ ・データのバックアップ               │
│                                     │
│  [今すぐ登録]  [あとで]              │
└─────────────────────────────────────┘
```

### 連携フロー

```
「今すぐ登録」を選択
    │
    ▼
┌─────────────────────────────────────┐
│ CHARAHOMEアカウント                  │
│                                     │
│  [新規作成]                         │
│  ← 今のデータを引き継いで登録        │
│                                     │
│  [既存アカウントでログイン]           │
│  ← 既にお持ちの方（データ統合）       │
│  ⚠️ 既存データと統合されます         │
└─────────────────────────────────────┘
```

### マージ処理

匿名アカウント → 既存アカウント のマージ：

1. 複製したキャラの `owner_id` を既存UIDに変更
2. Acquaintance を既存アカウント側に移動
3. ChatLogs の `user_id` を既存UIDに変更
4. UserData をマージ（下記ルール参照）
5. 匿名アカウント削除

```typescript
// マージAPI呼び出し
await charahomeApi.mergeAccounts({
  anonymousUid: anonUser.uid,
  existingUid: existingUser.uid,
});
```

### UserData マージルール

| フィールド | マージルール |
|-----------|-------------|
| `user_id` | 既存UIDを維持（変更なし） |
| `character_ids` | 両方のリストを結合（重複排除） |
| `favorite_character_id` | データがある方を優先。両方あれば既存優先 |
| `user_name` | データがある方を優先。両方あれば既存優先 |
| `birth_date` | データがある方を優先。両方あれば既存優先 |
| `updated_at` | 現在時刻に更新 |

**⚠️ 派生アプリ開発者への注意:**
マージ後に `favorite_character_id` が変わる可能性があります。
匿名時に設定した `favorite_character_id` が、既存アカウントの値で上書きされる場合があるため、
マージ後は最新の UserData を再取得してください。

---

## 派生アプリ固有データの設計

派生アプリが独自のデータ（ゲーム進行、課金履歴等）を保存する場合の設計指針です。

### 推奨: CHARAHOMEログイン後に機能解放

```
┌─────────────────────────────────────────────────────────┐
│ 匿名ユーザー                                              │
│ ・CHARAHOME API（キャラ会話等）のみ利用可能               │
│ ・派生アプリ固有機能は制限                                │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼ CHARAHOMEログイン後
┌─────────────────────────────────────────────────────────┐
│ CHARAHOMEユーザー                                         │
│ ・派生アプリ固有機能が解放                                │
│ ・データは charahome_uid をキーに保存                     │
│ ・マイグレーション処理不要                                │
└─────────────────────────────────────────────────────────┘
```

**メリット:**
- マイグレーション処理が不要
- マルチデバイス対応が自動的に実現
- 実装がシンプル

### 代替案: 匿名時から全機能提供

匿名ユーザーにも派生アプリ固有機能を提供する場合：

1. 匿名時は `derived_uid` をキーにデータ保存
2. CHARAHOMEログイン後、派生アプリ側でもマイグレーション処理を実装
3. `accountLinks` から `derived_uid` → `charahome_uid` の紐づけを取得
4. 派生アプリのFirestore上でデータを `charahome_uid` キーに移行

**注意:** この方式は実装が複雑になるため、推奨しません。

---

## マルチデバイス対応

同じCHARAHOMEアカウントで複数デバイスからログインする場合の動作：

```
端末A: derived_uid=anon-123, charahome_uid=user-abc → accountLink作成
端末B: derived_uid=anon-456, charahome_uid=user-abc → 別のaccountLink作成
```

- 同じ `app_id` + `charahome_uid` で複数の `accountLinks` が作成される
- 各デバイスの `derived_uid` は異なる（派生アプリAuthは常に匿名のため）
- CHARAHOME側のデータ（キャラ、会話等）は `charahome_uid` で共有される
- 派生アプリ固有データは `charahome_uid` をキーにすることで共有可能

### accountLinks の検索

```typescript
// 特定ユーザーの特定アプリの全デバイス紐づけを取得
const links = await charahomeApi.findLinksByCharahomeUidAndAppId(
  charahomeUid,
  appId
);
// → AccountLink[] （複数デバイス分）
```

---

## 派生アプリ用Firebaseプロジェクト設定

派生アプリのFirebaseプロジェクトでは、以下の認証方法のみ有効化してください：

| 認証方法 | 有効化 | 理由 |
|---------|-------|------|
| 匿名認証 | ✅ 必須 | 派生アプリAuthは常に匿名 |
| メール/パスワード | ❌ 不要 | CHARAHOMEAuth側で処理 |
| Google | ❌ 不要 | CHARAHOMEAuth側で処理 |

**CHARAHOME側のFirebase**（運営が管理）では全認証方法が有効化されています。

---

## クイックスタート

### 1. 設定ファイルを作成

```typescript
// src/config/auth-config.ts
import type { CHARAHOMEAuthConfig } from '@kurasuai-inc/charahome-auth';

export const authConfig: CHARAHOMEAuthConfig = {
  // 派生アプリのFirebase設定
  derivedAppConfig: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  },
  // 派生アプリの識別名（Hot Reload対策で一意にする）
  derivedAppName: 'my-derived-app',

  // CHARAHOMEのFirebase設定（全派生アプリ共通）
  charahomeConfig: {
    apiKey: process.env.NEXT_PUBLIC_CHARAHOME_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_CHARAHOME_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_CHARAHOME_FIREBASE_PROJECT_ID!,
  },

  // アプリ識別子（アカウント紐づけに使用）
  appId: 'love_advice',

  // CHARAHOME Auth API の /api/v1 ルート、または same-origin proxy
  apiBaseUrl: 'https://charahome-internal-api-stg.example.com/api/v1',
};
```

### 2. React/Next.js での使用

```tsx
// src/app/providers.tsx
'use client';

import { CHARAHOMEAuthProvider } from '@kurasuai-inc/charahome-auth/react';
import { authConfig } from '@/config/auth-config';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CHARAHOMEAuthProvider config={authConfig} autoAnonymousLogin={false}>
      {children}
    </CHARAHOMEAuthProvider>
  );
}
```

**注意:** `autoAnonymousLogin={false}` で自動ログインを無効化し、
ユーザーが選択肢を選んでから認証処理を開始します。

```tsx
// src/components/WelcomeScreen.tsx
'use client';

import { useAuth } from '@kurasuai-inc/charahome-auth/react';

export function WelcomeScreen() {
  const {
    signInAnonymously,
    signInWithCHARAHOME,
    createCHARAHOMEAccount,
    loading,
  } = useAuth();

  const handleStartAsGuest = async () => {
    await signInAnonymously();
    // → 年齢確認画面へ
  };

  const handleLogin = async () => {
    // → ログインフォーム表示
  };

  const handleSignUp = async () => {
    // → 新規登録フォーム表示
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleStartAsGuest}>はじめまして</button>
      <button onClick={handleLogin}>CHARAHOMEでログイン</button>
      <button onClick={handleSignUp}>CHARAHOMEアカウントを作成</button>
    </div>
  );
}
```

### 3. Non-React (サービスレイヤー) での使用

```typescript
// src/services/firebase.ts
import { getAuthInstances } from '@kurasuai-inc/charahome-auth';
import { authConfig } from '@/config/auth-config';

// 一度だけ初期化（シングルトン）
const { derivedAuth, charahomeAuth } = getAuthInstances(authConfig);

export { derivedAuth, charahomeAuth };
```

```typescript
// src/services/auth-service.ts
import {
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { charahomeAuth, derivedAuth } from './firebase';

// 匿名ログイン（はじめまして）
export async function startAsGuest() {
  await signInAnonymously(derivedAuth);
  await signInAnonymously(charahomeAuth);
}

// CHARAHOMEログイン
export async function signInToCHARAHOME(email: string, password: string) {
  const result = await signInWithEmailAndPassword(charahomeAuth, email, password);
  // 派生アプリ側も匿名で作成して連携
  await signInAnonymously(derivedAuth);
  // accountLinks登録
  return result;
}

export async function signOutAll() {
  await Promise.all([
    signOut(charahomeAuth),
    signOut(derivedAuth),
  ]);
}
```

---

## IndexedDB遅延問題

### 問題

Firebase Authのデフォルト永続化（IndexedDB）を使用すると、`onAuthStateChanged` の初回コールバックまで **100秒以上** の遅延が発生することがあります。

### 解決策（SDK内で自動適用）

このSDKは `browserLocalPersistence` (localStorage) を自動で使用します。これにより遅延は **8-20ms** に短縮されます。

**手動でFirebase Authを初期化する場合の注意:**

```typescript
// ❌ NG: デフォルト（IndexedDB）- 100秒以上の遅延の可能性
import { getAuth } from 'firebase/auth';
const auth = getAuth(app);

// ✅ OK: このSDKのユーティリティを使用
import { createBrowserAuth } from '@kurasuai-inc/charahome-auth';
const auth = createBrowserAuth(app);

// ✅ OK: 両方のAuthを一度に初期化
import { getAuthInstances } from '@kurasuai-inc/charahome-auth';
const { derivedAuth, charahomeAuth } = getAuthInstances(authConfig);
```

---

## API リファレンス

### メインエントリ (`@kurasuai-inc/charahome-auth`)

#### `getAuthInstances(config)`
設定からAuth instancesを取得。React以外のコードで使用。

```typescript
const { derivedAuth, charahomeAuth } = getAuthInstances(authConfig);
```

#### `createBrowserAuth(app)`
browserLocalPersistence付きでAuth instanceを作成。

#### `getOrInitializeApp(config, name)`
Hot Reload対策付きでFirebase Appを初期化。

#### `CHARAHOMELinkingClient`
アカウント連携のクライアントクラス。直接使用する場合はこちら。

```typescript
import { createAuthApiClient, createLinkingClient } from '@kurasuai-inc/charahome-auth';

const client = createLinkingClient(
  derivedAuth,
  charahomeAuth,
  charahomeConfig,
  'my_app_id',
  createAuthApiClient({ baseUrl: 'https://charahome-internal-api-stg.example.com/api/v1' })
);

await client.ensureAuthenticated();
const result = await client.linkWithCHARAHOME(email, password);
```

### Reactエントリ (`@kurasuai-inc/charahome-auth/react`)

#### `CHARAHOMEAuthProvider`
認証状態を管理するProvider。

| Props | 型 | 説明 |
|-------|---|------|
| `config` | `CHARAHOMEAuthConfig` | 認証設定 |
| `autoAnonymousLogin` | `boolean` | 自動匿名ログイン（デフォルト: true）。ログイン画面を挟みたい派生アプリでは `false` を推奨 |

#### `useAuth()`
認証状態と操作を提供するhook。

| プロパティ/メソッド | 型 | 説明 |
|------------------|---|------|
| `charahomeUser` | `User \| null` | CHARAHOMEのユーザー |
| `derivedUser` | `User \| null` | 派生アプリのユーザー（常に匿名） |
| `loading` | `boolean` | 読み込み中フラグ |
| `error` | `Error \| null` | エラー |
| `isAnonymous` | `boolean` | 匿名状態かどうか |
| `signInAnonymously()` | `Promise<void>` | 匿名ログイン（はじめまして） |
| `signInWithCHARAHOME(email, password)` | `Promise<void>` | CHARAHOMEログイン |
| `createCHARAHOMEAccount(email, password)` | `Promise<void>` | CHARAHOMEアカウント作成 |
| `getCharahomeToken()` | `Promise<string \| null>` | CHARAHOMEのIDトークン取得 |
| `getDerivedToken()` | `Promise<string \| null>` | 派生アプリのIDトークン取得 |
| `checkLink()` | `Promise<CheckLinkResult>` | 連携状態確認 |
| `linkWithCHARAHOME(email, password)` | `Promise<LinkResult>` | 後からの連携 |
| `signOut()` | `Promise<void>` | 両方からサインアウト |

---

## 型定義

```typescript
interface CHARAHOMEAuthConfig {
  derivedAppConfig: FirebaseOptions;  // 派生アプリのFirebase設定
  derivedAppName: string;             // 派生アプリの識別名
  charahomeConfig: FirebaseOptions;   // CHARAHOMEのFirebase設定
  appId: string;                      // アプリID（連携用）
  apiBaseUrl?: string;                // CHARAHOME Auth API の /api/v1 ルート
  apiClient?: AuthApiClient;          // カスタム API client（apiBaseUrl の代替）
}

interface CheckLinkResult {
  linked: boolean;
  links: AccountLink[];
}

interface LinkResult {
  type: 'existing' | 'upgraded';  // 既存マージ or 新規連携
  uid: string;
  linkId?: string;
}

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
```

---

## Electron での使用

Electron の **Renderer プロセス** ではWeb版と同じコードが動作します。

```typescript
// renderer/src/config/auth-config.ts
// Webと同じ

// renderer/src/App.tsx
// Webと同じ
```

**注意:** Main プロセスでFirebase Authを直接使用することは推奨しません。認証処理はRenderer プロセスで行い、必要に応じてIPCでMain プロセスと通信してください。

---

## トラブルシューティング

### 「Firebase App already initialized」エラー

Hot Reloadで発生。`getOrInitializeApp` または `getAuthInstances` を使用すると自動で対処されます。

### 100秒以上の起動遅延

IndexedDB永続化の問題。このSDKの関数を使っていれば自動で解決されます。直接 `getAuth()` を使っている箇所があれば `createBrowserAuth()` に置き換えてください。

### 「auth/email-already-in-use」エラー

`linkWithCHARAHOME()` 内部で自動的に既存アカウントマージフローに切り替わります。このエラーが表示される場合は、パスワードが間違っている可能性があります。

### トークンが無効（401エラー）

```typescript
// トークンを強制的に再取得
const token = await charahomeUser.getIdToken(true);
```

---

## 環境変数テンプレート

```env
# .env.local

# 派生アプリのFirebase設定
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=my-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=my-app

# CHARAHOMEのFirebase設定（運営から提供）
NEXT_PUBLIC_CHARAHOME_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_CHARAHOME_FIREBASE_AUTH_DOMAIN=charahome.firebaseapp.com
NEXT_PUBLIC_CHARAHOME_FIREBASE_PROJECT_ID=charahome
```

---

## チェックリスト

派生アプリ開発時の確認項目：

- [ ] `authConfig` を作成し、環境変数を設定
- [ ] `CHARAHOMEAuthProvider` で `autoAnonymousLogin={false}` を設定
- [ ] 初回起動時に「はじめまして/ログイン/新規作成」の選択肢を表示
- [ ] 年齢確認UIを実装（13歳未満は利用不可）
- [ ] 公式キャラの複製機能を実装
- [ ] CHARAHOME API呼び出し時は `getCharahomeToken()` を使用
- [ ] 後からの連携促進UIを実装
- [ ] ❌ `createUserWithEmailAndPassword` を派生アプリ側で使用禁止
- [ ] ❌ 直接 `getAuth()` を使わない（遅延問題）
- [ ] ❌ 匿名ユーザーにキャラ作成機能を提供しない

---

## まとめ

### ユーザー認証状態

| ユーザー状態 | 派生アプリAuth | CHARAHOME Auth | 説明 |
|-------------|----------------|----------------|------|
| はじめまして | 匿名 | 匿名 | 両方とも匿名状態。データは匿名UIDで保存 |
| CHARAHOMEログイン | 匿名 | メール/パスワード | 派生は常に匿名。CHARAHOMEで本人確認済み |
| CHARAHOME新規作成 | 匿名 | メール/パスワード | 同上 |

### 匿名ユーザーのAPI制限

| データ種別 | Read | Create | Update | Delete | 備考 |
|-----------|------|--------|--------|--------|------|
| Character | ✅ | ⚠️ Duplicate Only | ❌ | ❌ | 公式キャラを複製して利用 |
| Avatar | ✅ | ❌ | ❌ | ❌ | 要CHARAHOMEアカウント |
| Settings | ✅ | ❌ | ❌ | ❌ | 要CHARAHOMEアカウント |
| UserData | ✅ | ✅ | ✅ | ✅ | 匿名でも完全CRUD可能 |
| Acquaintance | ✅ | ✅ | ✅ | ✅ | 匿名でも完全CRUD可能 |
| ChatLogs | ✅ | ✅ | ❌ | ❌ | 会話履歴は追記のみ |
| Memory系 | ✅ | ✅ | ✅ | ✅ | 匿名でも完全CRUD可能 |

### 3ボタンUI選択後のフロー

| 選択 | 派生アプリAuth処理 | CHARAHOME Auth処理 | 次の画面 |
|------|-------------------|-------------------|----------|
| はじめまして | signInAnonymously | signInAnonymously | 年齢確認 |
| ログイン | signInAnonymously | signInWithEmailAndPassword | 年齢確認（未済の場合） |
| 新規作成 | signInAnonymously | createUserWithEmailAndPassword | 年齢確認 |

### 年齢別の利用可否

| 年齢 | 利用可否 | 備考 |
|-----|---------|------|
| 13歳未満 | ❌ 利用不可 | LLM利用規約による制限 |
| 13〜17歳 | ⚠️ 親の同意必要 | 同意確認UI必須 |
| 18歳以上 | ✅ 利用可能 | 制限なし |

---

## ライセンス

UNLICENSED - Kurasuai Inc. Internal Use Only
