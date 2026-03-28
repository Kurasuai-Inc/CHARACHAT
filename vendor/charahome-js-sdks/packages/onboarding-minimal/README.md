# @kurasuai-inc/charahome-onboarding-minimal

モバイルやチャット導線向けの、必要最低限の CHARAHOME オンボーディングです。

- ログイン
- 新規登録
- 規約同意
- 年齢確認

演出や VRM 表示は持たず、`LINE` や `Discord` からの遷移先、スマホ向けリンク導線に向いています。

## インストール

```bash
npm install @kurasuai-inc/charahome-onboarding-minimal
```

## 使い方

```tsx
import {
  MinimalOnboardingFlow,
  createMinimalOnboardingFetchAdapter,
} from '@kurasuai-inc/charahome-onboarding-minimal';
import { CHARAHOMEAuthProvider } from '@kurasuai-inc/charahome-auth/react';

const api = createMinimalOnboardingFetchAdapter({
  baseUrl: 'https://charahome.example.com/api/v1',
});

<CHARAHOMEAuthProvider config={authConfig} autoAnonymousLogin={false}>
  <MinimalOnboardingFlow
    appId="charaline_web"
    title="CHARAHOME with LINE"
    subtitle="ログインまたは新規登録を行うと、お気に入りのキャラと会話できます。"
    tosUrl="https://example.com/terms"
    privacyPolicyUrl="https://example.com/privacy"
    tosVersion="1.0"
    privacyPolicyVersion="1.0"
    api={api}
    onComplete={(payload) => {
      console.log(payload.user.user_id);
    }}
  />
</CHARAHOMEAuthProvider>
```

## 補足

- `createMinimalOnboardingFetchAdapter()` は `/api/v1/users` の `GET/POST/PATCH` を使います
- user ドキュメントが無い場合は、仮の名前で自動作成してから続行します
- favorite character の選択や派生アプリ固有の紐付けは、`onComplete` のあとにアプリ側で実施してください
