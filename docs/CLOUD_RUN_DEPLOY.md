# CHARACHAT Cloud Run Deploy

`main` へ push されると [deploy-cloud-run.yml](D:/ClaudeCode/projects/web/CHARACHAT/.github/workflows/deploy-cloud-run.yml) が動き、`CHARACHAT` API を Cloud Run へ自動 deploy します。

## GitHub Secrets

- `GCP_WORKLOAD_IDENTITY_PROVIDER`
- `GCP_SERVICE_ACCOUNT`
- `CHARAHOME_AUTH_TOKEN`
- `CHARADESK_SIBLING_SHARED_SECRET`

`CHARADESK_SIBLING_SHARED_SECRET` は Desk 側へ気づきイベントを渡すために使います。未設定でも deploy 自体はできますが、Desk 連携は動きません。

## GitHub Variables

- `GCP_PROJECT_ID`
- `GCP_REGION`
- `GAR_LOCATION`
- `GAR_REPOSITORY`
- `CLOUD_RUN_RUNTIME_SERVICE_ACCOUNT`
- `CHARAHOME_ENVIRONMENT`
- `CHARAHOME_API_BASE_URL`
- `CHARADESK_RUNTIME_BASE_URL`
- `PUBLIC_API_BASE_URL`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

`PUBLIC_API_BASE_URL` は空でもよく、その場合は workflow が Cloud Run の service URL を自動で書き戻します。

## Required Google Cloud Setup

1. Workload Identity Federation を作る  
   参考: [WIF for GitHub Actions](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines)
2. workflow 用 service account に最低限これを付ける
   - Cloud Run Admin
   - Service Account User
   - Artifact Registry Admin
3. `GAR_REPOSITORY` は workflow が無ければ自動作成します
4. Firebase project では Web app と Anonymous Auth を有効化して、Cloud Run URL を authorized domain に追加します

## Container Entry

- Dockerfile: [apps/api/Dockerfile](D:/ClaudeCode/projects/web/CHARACHAT/apps/api/Dockerfile)
- Cloud Run entrypoint: `node apps/api/dist/index.js`
- health check: `GET /health`
