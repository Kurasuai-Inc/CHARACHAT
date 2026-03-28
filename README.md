# CHARACHAT

`CHARACHAT` は、**キャラクターと最も手軽に会話するための軽量な CHARAHOME 派生アプリ**です。

狙っている体験:

- 一瞬で開ける
- すぐ入力して送れる
- スマホで扱いやすい
- キャラからの返信タイミングに制限がない
- 必要なら `CHARADESK` や `CHARAWORK` にも自然に繋がる

今の実装では:

- CHARAHOME Auth + minimal onboarding
- favorite character からすぐスレッド作成
- lightweight な会話 UI
- CHARAHOME ConversationAPI を使った direct conversation
- `CHARADESK` が開いている時の Desk 側気づき連携

## Scripts

```bash
npm run sync:charahome-sdk
npm install
npm run dev:api
npm run lint
npm run test
npm run build
```

## Deploy

Cloud Run への自動 deploy は [docs/CLOUD_RUN_DEPLOY.md](D:/ClaudeCode/projects/web/CHARACHAT/docs/CLOUD_RUN_DEPLOY.md) を参照してください。
