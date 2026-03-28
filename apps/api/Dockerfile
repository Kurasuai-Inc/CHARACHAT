FROM node:22-bookworm-slim AS build

WORKDIR /app

ARG VITE_FIREBASE_API_KEY
ARG VITE_FIREBASE_AUTH_DOMAIN
ARG VITE_FIREBASE_PROJECT_ID
ARG VITE_FIREBASE_STORAGE_BUCKET
ARG VITE_FIREBASE_MESSAGING_SENDER_ID
ARG VITE_FIREBASE_APP_ID
ARG VITE_CHARAHOME_ENV
ARG VITE_CHARAHOME_APP_ID

ENV VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY
ENV VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN
ENV VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID
ENV VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET
ENV VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID
ENV VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID
ENV VITE_CHARAHOME_ENV=$VITE_CHARAHOME_ENV
ENV VITE_CHARAHOME_APP_ID=$VITE_CHARAHOME_APP_ID

COPY package*.json ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
COPY packages/domain/package.json packages/domain/package.json
COPY vendor/charahome-js-sdks/packages/api/package.json vendor/charahome-js-sdks/packages/api/package.json
COPY vendor/charahome-js-sdks/packages/auth/package.json vendor/charahome-js-sdks/packages/auth/package.json
COPY vendor/charahome-js-sdks/packages/onboarding-minimal/package.json vendor/charahome-js-sdks/packages/onboarding-minimal/package.json
COPY . .

RUN npm ci
RUN npm run build

FROM node:22-bookworm-slim AS runtime

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080
ENV CHARACHAT_DATA_DIR=/tmp/charachat-data

WORKDIR /app

COPY --from=build /app /app

EXPOSE 8080

CMD ["node", "apps/api/dist/index.js"]
