# @kurasuai-inc/charahome-api

CHARAHOME API SDK - API Client for Node.js, Next.js handlers, and Electron IPC helpers.

## Installation

```bash
pnpm add @kurasuai-inc/charahome-api
```

## Sub-paths

| Sub-path | 用途 | 環境 |
|----------|------|------|
| `.` | メインエントリ（Next.js API Routes 向け） | Next.js |
| `./client` | Node.js 向けクライアント（`server-only` 非依存） | Node.js / Electron Main |
| `./electron` | Electron IPC ヘルパー（Main + Preload + Renderer 型） | Electron |

## 3つのAPIアクセスパターン

### 1. OpenAPI 自動生成（推奨）

単一エンドポイントの標準 REST。手動実装不要、型安全。

```typescript
import { configureGeneratedApi, GeneratedApi } from '@kurasuai-inc/charahome-api';

configureGeneratedApi({ baseUrl: 'https://example.com/api/v1', token: '...' });

const character = await GeneratedApi.CharactersService.getCharacterCharactersCharacterIdGet({
  characterId: 'stella',
});
```

`configureGeneratedApi()` は `https://example.com` でも `https://example.com/api/v1` でも受け取れます。

47個のサービス、300+のエンドポイントを型安全に呼び出し可能。
全サービス一覧: `src/generated/services/`

### 2. 専用クライアント（Binary/Streaming）

OpenAPI では対応できないケース向け。

| カテゴリ | 内容 |
|---------|------|
| Binary | VRM/スプライトダウンロード、ファイルアップロード等（Uint8Array/FormData 変換） |
| Streaming | 会話API、TTS、シンプルチャット（ReadableStream/AsyncGenerator） |

### 3. Aggregation

複数API呼び出しを1つの関数に統合。

- `fetchCharacterData()` - character + emotions + motions を並列取得
- `duplicateAndRegisterCharacter()` - duplicate + updateUser

## Electron 環境

### Main プロセス

```typescript
import { registerCharahomeIpcHandlers } from '@kurasuai-inc/charahome-api/electron';

registerCharahomeIpcHandlers(ipcMain);
```

### Preload スクリプト

```typescript
import { createCharahomePreloadApi } from '@kurasuai-inc/charahome-api/electron';

const api = { charahome: createCharahomePreloadApi() };
contextBridge.exposeInMainWorld('api', api);
```

### Renderer

```typescript
// 初期化
await window.api.charahome.init({ baseUrl: '...', authToken: '...' });

// 汎用プロキシ（推奨）
const character = await window.api.charahome.call(
  'CharactersService',
  'getCharacterCharactersCharacterIdGet',
  { characterId: 'stella' }
);

// ストリーミング（専用ハンドラ）
const { cancel, done } = window.api.charahome.conversationStream(
  'stella',
  { input_string: 'hello', is_audio: true, language: 'JA' },
  (chunk) => { /* handle chunk */ }
);
```

## Node.js 環境

```typescript
import { CharahomeApiClient, DEFAULT_API_BASE_URL } from '@kurasuai-inc/charahome-api/client';

const client = new CharahomeApiClient({
  baseUrl: DEFAULT_API_BASE_URL,
  authToken: 'your_token',
});
```

## Binary アップロードヘルパー

`buildFormData` / `fileEntry` を使って、アップロードメソッドの FormData 構築を宣言的に記述できる。

```typescript
import { buildFormData, fileEntry } from '@kurasuai-inc/charahome-api/client';

const formData = buildFormData({
  file: fileEntry(vrmFile, 'model.vrm', 'model/gltf-binary'),
  model_name: 'MyModel',            // string → そのまま
  is_loopable: true,                // boolean → "true"
  default_fade_in: 0.5,             // number → "0.5"
  tags_json: [{ tag_id: 'dance' }], // object/array → JSON.stringify
  optional_field: undefined,        // undefined → スキップ
});
```

| 値の型 | 処理 |
|--------|------|
| `undefined` / `null` | スキップ |
| `FormDataFileEntry` | `append(key, blob, filename)` |
| `Blob` | `append(key, blob)` |
| `string` | `append(key, value)` |
| `number` / `boolean` | `append(key, String(value))` |
| `object` / `array` | `append(key, JSON.stringify(value))` |

## フォルダ構造

```
src/
├── client/           # Mixin パターン API クライアント
│   ├── binary/       # バイナリ upload/download
│   ├── streaming/    # ストリーミング応答
│   └── standard/     # 標準 REST（集約系）
├── electron/         # Electron IPC ハンドラー
│   └── handlers/     # ハンドラー実装
├── generated/        # OpenAPI 自動生成（編集禁止）
│   ├── models/       # 型定義
│   └── services/     # サービスクラス
├── handlers/         # Next.js API Route ハンドラー
└── types/            # 共有型定義
```

## OpenAPI クライアント再生成

API が変更された場合:

```bash
curl -s "https://charahome-internal-api-stg-cl2uo5hxla-dt.a.run.app/openapi.json" > openapi.json
npx openapi-typescript-codegen --input openapi.json --output packages/api/src/generated --client fetch --useOptions --useUnionTypes
cd packages/api && pnpm build
```

`generated/` フォルダは直接編集しないこと。

## Peer Dependencies

- `next` >= 14.0.0 (optional)
- `electron` >= 28.0.0 (optional)

## Changelog

### 0.20.4

- **feat**: AI使用情報（`AvatarAiUsage`, `CharacterAiUsage`, `StoryAiUsage`）スキーマ追加
- **feat**: `suggest-ai-usage` エンドポイント追加（Avatar, Character, Story）
- **breaking**: `CreationMethod` Enum 値を刷新（`ai_assisted` 等 → `fully_generative_ai` 等）
- **breaking**: `ContentReview` の `age_rating` → `age_ratings` に変更
- **breaking**: Character PATCH から `age_rating` フィールド削除
- OpenAPI クライアント再生成

### 0.20.3

- **breaking**: VRMA・AnimationClip 関連スキーマから `is_loopable` フィールドを削除（サーバー側で廃止）
- OpenAPI クライアント再生成

### 0.20.2

- **feat**: VRMA POST に `compatibleArchetypes` / `compatibleBehavioralPatterns` フィールドを追加
- OpenAPI クライアント再生成

### 0.20.1

- **refactor**: 全アップロードミックスインを `buildFormData` + `postFormData` パターンに統一（25メソッド、外部API変更なし）
- **feat**: `buildFormData()`, `fileEntry()`, `FormDataFileEntry` ヘルパーを追加
- **feat**: `BaseClient` に `postFormData()`, `patchFormData()` メソッドを追加
- **deprecate**: `appendJsonFields()` を非推奨化（次回 MINOR で削除予定）

### 0.20.0

- OpenAPI クライアント再生成（motion auto-params multipart 対応、新サービス追加）

## License

UNLICENSED - Kurasuai Inc.
