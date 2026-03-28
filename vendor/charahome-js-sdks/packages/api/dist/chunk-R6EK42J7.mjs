import {
  OpenAPI
} from "./chunk-HRAAT6ML.mjs";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-HE7KASUR.mjs";

// src/generated/core/ApiError.ts
var ApiError = class extends Error {
  constructor(request2, response, message) {
    super(message);
    this.name = "ApiError";
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
    this.request = request2;
  }
};

// src/generated/core/CancelablePromise.ts
var CancelError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CancelError";
  }
  get isCancelled() {
    return true;
  }
};
var _isResolved, _isRejected, _isCancelled, _cancelHandlers, _promise, _resolve, _reject;
var CancelablePromise = class {
  constructor(executor) {
    __privateAdd(this, _isResolved);
    __privateAdd(this, _isRejected);
    __privateAdd(this, _isCancelled);
    __privateAdd(this, _cancelHandlers);
    __privateAdd(this, _promise);
    __privateAdd(this, _resolve);
    __privateAdd(this, _reject);
    __privateSet(this, _isResolved, false);
    __privateSet(this, _isRejected, false);
    __privateSet(this, _isCancelled, false);
    __privateSet(this, _cancelHandlers, []);
    __privateSet(this, _promise, new Promise((resolve2, reject) => {
      __privateSet(this, _resolve, resolve2);
      __privateSet(this, _reject, reject);
      const onResolve = (value) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateSet(this, _isResolved, true);
        if (__privateGet(this, _resolve)) __privateGet(this, _resolve).call(this, value);
      };
      const onReject = (reason) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateSet(this, _isRejected, true);
        if (__privateGet(this, _reject)) __privateGet(this, _reject).call(this, reason);
      };
      const onCancel = (cancelHandler) => {
        if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
          return;
        }
        __privateGet(this, _cancelHandlers).push(cancelHandler);
      };
      Object.defineProperty(onCancel, "isResolved", {
        get: () => __privateGet(this, _isResolved)
      });
      Object.defineProperty(onCancel, "isRejected", {
        get: () => __privateGet(this, _isRejected)
      });
      Object.defineProperty(onCancel, "isCancelled", {
        get: () => __privateGet(this, _isCancelled)
      });
      return executor(onResolve, onReject, onCancel);
    }));
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(onFulfilled, onRejected) {
    return __privateGet(this, _promise).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return __privateGet(this, _promise).catch(onRejected);
  }
  finally(onFinally) {
    return __privateGet(this, _promise).finally(onFinally);
  }
  cancel() {
    if (__privateGet(this, _isResolved) || __privateGet(this, _isRejected) || __privateGet(this, _isCancelled)) {
      return;
    }
    __privateSet(this, _isCancelled, true);
    if (__privateGet(this, _cancelHandlers).length) {
      try {
        for (const cancelHandler of __privateGet(this, _cancelHandlers)) {
          cancelHandler();
        }
      } catch (error) {
        console.warn("Cancellation threw an error", error);
        return;
      }
    }
    __privateGet(this, _cancelHandlers).length = 0;
    if (__privateGet(this, _reject)) __privateGet(this, _reject).call(this, new CancelError("Request aborted"));
  }
  get isCancelled() {
    return __privateGet(this, _isCancelled);
  }
};
_isResolved = new WeakMap();
_isRejected = new WeakMap();
_isCancelled = new WeakMap();
_cancelHandlers = new WeakMap();
_promise = new WeakMap();
_resolve = new WeakMap();
_reject = new WeakMap();

// src/generated/core/request.ts
var isDefined = (value) => {
  return value !== void 0 && value !== null;
};
var isString = (value) => {
  return typeof value === "string";
};
var isStringWithValue = (value) => {
  return isString(value) && value !== "";
};
var isBlob = (value) => {
  return typeof value === "object" && typeof value.type === "string" && typeof value.stream === "function" && typeof value.arrayBuffer === "function" && typeof value.constructor === "function" && typeof value.constructor.name === "string" && /^(Blob|File)$/.test(value.constructor.name) && /^(Blob|File)$/.test(value[Symbol.toStringTag]);
};
var isFormData = (value) => {
  return value instanceof FormData;
};
var base64 = (str) => {
  try {
    return btoa(str);
  } catch (err) {
    return Buffer.from(str).toString("base64");
  }
};
var getQueryString = (params) => {
  const qs = [];
  const append = (key, value) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };
  const process = (key, value) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process(key, v);
        });
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };
  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });
  if (qs.length > 0) {
    return `?${qs.join("&")}`;
  }
  return "";
};
var getUrl = (config, options) => {
  const encoder = config.ENCODE_PATH || encodeURI;
  const path = options.url.replace("{api-version}", config.VERSION).replace(/{(.*?)}/g, (substring, group) => {
    if (options.path?.hasOwnProperty(group)) {
      return encoder(String(options.path[group]));
    }
    return substring;
  });
  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};
var getFormData = (options) => {
  if (options.formData) {
    const formData = new FormData();
    const process = (key, value) => {
      if (isString(value) || isBlob(value)) {
        formData.append(key, value);
      } else {
        formData.append(key, JSON.stringify(value));
      }
    };
    Object.entries(options.formData).filter(([_, value]) => isDefined(value)).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => process(key, v));
      } else {
        process(key, value);
      }
    });
    return formData;
  }
  return void 0;
};
var resolve = async (options, resolver) => {
  if (typeof resolver === "function") {
    return resolver(options);
  }
  return resolver;
};
var getHeaders = async (config, options) => {
  const [token, username, password, additionalHeaders] = await Promise.all([
    resolve(options, config.TOKEN),
    resolve(options, config.USERNAME),
    resolve(options, config.PASSWORD),
    resolve(options, config.HEADERS)
  ]);
  const headers = Object.entries({
    Accept: "application/json",
    ...additionalHeaders,
    ...options.headers
  }).filter(([_, value]) => isDefined(value)).reduce((headers2, [key, value]) => ({
    ...headers2,
    [key]: String(value)
  }), {});
  if (isStringWithValue(token)) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (isStringWithValue(username) && isStringWithValue(password)) {
    const credentials = base64(`${username}:${password}`);
    headers["Authorization"] = `Basic ${credentials}`;
  }
  if (options.body !== void 0) {
    if (options.mediaType) {
      headers["Content-Type"] = options.mediaType;
    } else if (isBlob(options.body)) {
      headers["Content-Type"] = options.body.type || "application/octet-stream";
    } else if (isString(options.body)) {
      headers["Content-Type"] = "text/plain";
    } else if (!isFormData(options.body)) {
      headers["Content-Type"] = "application/json";
    }
  }
  return new Headers(headers);
};
var getRequestBody = (options) => {
  if (options.body !== void 0) {
    if (options.mediaType?.includes("/json")) {
      return JSON.stringify(options.body);
    } else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
      return options.body;
    } else {
      return JSON.stringify(options.body);
    }
  }
  return void 0;
};
var sendRequest = async (config, options, url, body, formData, headers, onCancel) => {
  const controller = new AbortController();
  const request2 = {
    headers,
    body: body ?? formData,
    method: options.method,
    signal: controller.signal
  };
  if (config.WITH_CREDENTIALS) {
    request2.credentials = config.CREDENTIALS;
  }
  onCancel(() => controller.abort());
  return await fetch(url, request2);
};
var getResponseHeader = (response, responseHeader) => {
  if (responseHeader) {
    const content = response.headers.get(responseHeader);
    if (isString(content)) {
      return content;
    }
  }
  return void 0;
};
var getResponseBody = async (response) => {
  if (response.status !== 204) {
    try {
      const contentType = response.headers.get("Content-Type");
      if (contentType) {
        const jsonTypes = ["application/json", "application/problem+json"];
        const isJSON = jsonTypes.some((type) => contentType.toLowerCase().startsWith(type));
        if (isJSON) {
          return await response.json();
        } else {
          return await response.text();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return void 0;
};
var catchErrorCodes = (options, result) => {
  const errors = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...options.errors
  };
  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }
  if (!result.ok) {
    const errorStatus = result.status ?? "unknown";
    const errorStatusText = result.statusText ?? "unknown";
    const errorBody = (() => {
      try {
        return JSON.stringify(result.body, null, 2);
      } catch (e) {
        return void 0;
      }
    })();
    throw new ApiError(
      options,
      result,
      `Generic Error: status: ${errorStatus}; status text: ${errorStatusText}; body: ${errorBody}`
    );
  }
};
var request = (config, options) => {
  return new CancelablePromise(async (resolve2, reject, onCancel) => {
    try {
      const url = getUrl(config, options);
      const formData = getFormData(options);
      const body = getRequestBody(options);
      const headers = await getHeaders(config, options);
      if (!onCancel.isCancelled) {
        const response = await sendRequest(config, options, url, body, formData, headers, onCancel);
        const responseBody = await getResponseBody(response);
        const responseHeader = getResponseHeader(response, options.responseHeader);
        const result = {
          url,
          ok: response.ok,
          status: response.status,
          statusText: response.statusText,
          body: responseHeader ?? responseBody
        };
        catchErrorCodes(options, result);
        resolve2(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// src/generated/services/AccessoriesService.ts
var AccessoriesService = class {
  /**
   * Create Accessory
   * アクセサリーを作成
   * @returns AccessoryResponse Successful Response
   * @throws ApiError
   */
  static createAccessoryApiV1AccessoriesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/accessories",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Accessories
   * アクセサリー一覧を取得
   * @returns AccessoryListResponse Successful Response
   * @throws ApiError
   */
  static listAccessoriesApiV1AccessoriesGet({
    category,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/accessories",
      query: {
        "category": category,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Accessory
   * アクセサリーを取得
   * @returns AccessoryResponse Successful Response
   * @throws ApiError
   */
  static getAccessoryApiV1AccessoriesAccessoryIdGet({
    accessoryId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/accessories/{accessory_id}",
      path: {
        "accessory_id": accessoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Accessory
   * アクセサリーを更新
   * @returns AccessoryResponse Successful Response
   * @throws ApiError
   */
  static updateAccessoryApiV1AccessoriesAccessoryIdPatch({
    accessoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/accessories/{accessory_id}",
      path: {
        "accessory_id": accessoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Accessory
   * アクセサリーを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAccessoryApiV1AccessoriesAccessoryIdDelete({
    accessoryId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/accessories/{accessory_id}",
      path: {
        "accessory_id": accessoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AdminService.ts
var AdminService = class {
  /**
   * Admin Healthcheck
   * 管理者エンドポイントのヘルスチェック
   *
   * このエンドポイントにアクセスできた場合、
   * リクエストユーザーは claims.admin == true を持っている。
   * @returns any Successful Response
   * @throws ApiError
   */
  static adminHealthcheckAdminV1HealthcheckGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/healthcheck"
    });
  }
  /**
   * Get Db Overview
   * 全コレクションのドキュメント数を一覧取得
   *
   * マイグレーション計画時に全体像を把握するために使用。
   * @returns DbOverviewResponse Successful Response
   * @throws ApiError
   */
  static getDbOverviewAdminV1DbStatsOverviewGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/db-stats/overview"
    });
  }
  /**
   * Get Collection Detail
   * 特定コレクションの詳細統計を取得
   *
   * 全フィールド名の和集合と、指定フィールドの存在率を返す。
   * @returns CollectionDetailResponse Successful Response
   * @throws ApiError
   */
  static getCollectionDetailAdminV1DbStatsCollectionsCollectionNameGet({
    collectionName,
    checkFields
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/db-stats/collections/{collection_name}",
      path: {
        "collection_name": collectionName
      },
      query: {
        "check_fields": checkFields
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Collection Count
   * 指定コレクションのドキュメント数を取得
   *
   * Args:
   * collection_path: コレクションパス（例: "user/characters_data/characters"）
   *
   * Returns:
   * ドキュメント数
   * @returns CollectionCountResponse Successful Response
   * @throws ApiError
   */
  static getCollectionCountAdminV1FirestoreCollectionsCollectionPathCountGet({
    collectionPath
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/count",
      path: {
        "collection_path": collectionPath
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Collection Documents
   * 指定コレクションのドキュメント一覧を取得
   *
   * Args:
   * collection_path: コレクションパス
   * limit: 取得件数上限（デフォルト100、最大1000）
   * fields: 取得するフィールド（カンマ区切り）
   * cursor: ページネーションカーソル
   *
   * Returns:
   * ドキュメント一覧
   * @returns CollectionListResponse Successful Response
   * @throws ApiError
   */
  static listCollectionDocumentsAdminV1FirestoreCollectionsCollectionPathListGet({
    collectionPath,
    limit = 100,
    fields,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/list",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "limit": limit,
        "fields": fields,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Check Migration Status
   * 指定コレクションのマイグレーション状態を確認
   *
   * 特定のフィールドが存在するかどうかをチェックし、
   * マイグレーションが必要なドキュメントを特定する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 確認するフィールド名（例: "owner_type"）
   *
   * Returns:
   * マイグレーション状態
   * @returns MigrationStatusResponse Successful Response
   * @throws ApiError
   */
  static checkMigrationStatusAdminV1FirestoreCollectionsCollectionPathMigrationStatusGet({
    collectionPath,
    fieldName
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/migration-status",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Field
   * 指定コレクションのドキュメントにフィールドを追加
   *
   * 指定フィールドが存在しないドキュメントに、指定値を設定する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 追加するフィールド名
   * field_value: 設定する値
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateFieldAdminV1FirestoreCollectionsCollectionPathMigrateFieldPost({
    collectionPath,
    fieldName,
    fieldValue,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/migrate-field",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName,
        "field_value": fieldValue,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Field Value
   * 指定コレクションのフィールド値を変更
   *
   * 指定フィールドが old_value のドキュメントを new_value に更新する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 変更するフィールド名
   * old_value: 変更前の値
   * new_value: 変更後の値
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateFieldValueAdminV1FirestoreCollectionsCollectionPathMigrateFieldValuePost({
    collectionPath,
    fieldName,
    oldValue,
    newValue,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/migrate-field-value",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName,
        "old_value": oldValue,
        "new_value": newValue,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Document
   * 指定コレクションのドキュメントを削除
   *
   * Args:
   * collection_path: コレクションパス
   * document_id: ドキュメントID
   *
   * Returns:
   * 削除結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteDocumentAdminV1FirestoreCollectionsCollectionPathDocumentsDocumentIdDelete({
    collectionPath,
    documentId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/admin/v1/firestore/collections/{collection_path}/documents/{document_id}",
      path: {
        "collection_path": collectionPath,
        "document_id": documentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Rename Field
   * 指定コレクションのフィールド名をリネーム
   *
   * old_field_name を new_field_name にリネームする。
   *
   * Args:
   * collection_path: コレクションパス
   * old_field_name: 変更前のフィールド名
   * new_field_name: 変更後のフィールド名
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static renameFieldAdminV1FirestoreCollectionsCollectionPathRenameFieldPost({
    collectionPath,
    oldFieldName,
    newFieldName,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/rename-field",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "old_field_name": oldFieldName,
        "new_field_name": newFieldName,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Image Colluders
   * 静止画像からフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * ブラインド検出（オリジナル画像不要）。DWTスペクトルと擬似乱数列の相関で
   * 符号語を復元し、Tardosスコアリングで共謀者を特定する。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectImageColludersAdminV1ForensicsDetectImagePost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-image",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Model Colluders
   * GLB/VRMモデルからフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * オリジナルGLBをGCSから取得し、頂点変位の差分比較で符号語を復元する。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectModelColludersAdminV1ForensicsDetectModelPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-model",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Animated Image Colluders
   * アニメーション画像からフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * 先頭フレームを抽出して静止画と同じDWT相関検出を行う。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectAnimatedImageColludersAdminV1ForensicsDetectAnimatedImagePost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-animated-image",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Add Tag Ids
   * 全タグ付きエンティティのFirestoreドキュメントにtag_idsフラット配列を追加する。
   *
   * 既存のtags配列からtag_idを抽出し、tag_idsフィールドとして非正規化する。
   * array-containsクエリでの高速なタグ検索を可能にする。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateAddTagIdsAdminV1MigrateAddTagIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/add-tag-ids"
    });
  }
  /**
   * Migrate Add Tag Category Ids
   * 全タグ付きエンティティのtagsにtag_category_idを追加する。
   *
   * tag_category_linksコレクションからtag_id→tag_category_idのマッピングを構築し、
   * 各エンティティのtags配列内のタグオブジェクトにtag_category_idを追加する。
   * tag_category_linksに存在しないtag_idは"uncategorized"をセットする。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateAddTagCategoryIdsAdminV1MigrateAddTagCategoryIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/add-tag-category-ids"
    });
  }
  /**
   * Migrate Emotions Data Summary
   * emotion_config/default のデータを user/emotions_data ドキュメントに統合し、
   * official_emotion_index を構築する。
   *
   * 処理:
   * 1. user/emotions_data/emotion_config/default から既存データを読み取り
   * 2. user/emotions_data ドキュメントに既存フィールド(groups, vad_map, mood_verbalizer)を書き込み
   * 3. 全OFFICIAL Emotionドキュメントを読み取り → official_emotion_index を構築・追加
   * 4. user/emotions_data/emotion_config/default を削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateEmotionsDataSummaryAdminV1MigrateEmotionsDataSummaryPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/emotions-data-summary"
    });
  }
  /**
   * Recover Emotions Data
   * 消失した groups / emotion_vad_map / mood_verbalizer を再構築する。
   *
   * ソース:
   * - groups: scripts/seed_emotion_config.py の EMOTION_GROUPS
   * - emotion_vad_map: 個別Emotionドキュメントの vad フィールドから再構築
   * - mood_verbalizer: default_mood_verbalizer_config()
   * - official_emotion_index: 全OFFICIALのEmotionから再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static recoverEmotionsDataAdminV1MigrateRecoverEmotionsDataPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/recover-emotions-data"
    });
  }
  /**
   * Migrate Motions Data Summary
   * 全OFFICIAL Motionから official_motion_index を構築し、
   * user/motions_data ドキュメントに書き込む。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateMotionsDataSummaryAdminV1MigrateMotionsDataSummaryPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/motions-data-summary"
    });
  }
  /**
   * Migrate Motion Types
   * 既存Motionドキュメントにmotion_typeを正しく設定し、インデックスを再構築する。
   *
   * motion_idに基づいて意味的カテゴリ(base/gesture)を判定して設定。
   * 既存の motion_types リストフィールドがあれば motion_type 単数に移行。
   * 全Motionを処理後、motions_dataインデックスを再構築する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateMotionTypesAdminV1MigrateMotionTypesPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/motion-types"
    });
  }
  /**
   * Migrate Vrma Frame Counts
   * 既存VRMAAssetVersionにframe_countを設定する。
   *
   * 各VRMAファイルをStorageからダウンロードし、GLBバイナリを解析して
   * 実際のキーフレーム数を取得・保存する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateVrmaFrameCountsAdminV1MigrateVrmaFrameCountsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/vrma-frame-counts"
    });
  }
  /**
   * Seed All Motions
   * 全Motionデータを削除して新規シードデータを一括投入する。
   *
   * 1. 既存の全Motionドキュメントを削除
   * 2. scripts/seed_motions_data.py の全定義をFirestoreに書き込み
   * 3. motions_dataインデックスを再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static seedAllMotionsAdminV1MigrateSeedAllMotionsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/seed-all-motions"
    });
  }
  /**
   * Seed All Emotions
   * 全Emotionデータを削除して新規シードデータを一括投入し、EmotionConfigも更新する。
   *
   * 1. 既存の全Emotionドキュメントを削除
   * 2. scripts/seed_emotions_data.py の全定義をFirestoreに書き込み
   * 3. EmotionConfigを更新（groups + VAD map + mood_verbalizer + official_emotion_index）
   * @returns any Successful Response
   * @throws ApiError
   */
  static seedAllEmotionsAdminV1MigrateSeedAllEmotionsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/seed-all-emotions"
    });
  }
  /**
   * Rename Numbered Motion Ids
   * motion_id の数字表記を英単語表記にリネームする。
   *
   * 対象: finger_count_1→finger_count_one, ..., countdown_3_2_1→countdown_three_two_one (計11件)
   *
   * 更新対象コレクション:
   * 1. Motion ドキュメント (ドキュメントID + motion_id フィールド)
   * 2. AnimationClipAsset (motion_id フィールド)
   * 3. VRMAAsset (motion_id フィールド)
   * 4. CharacterMotion (各キャラクターのサブコレクション)
   * 5. AvatarMotion (各アバターのサブコレクション)
   * 6. AvatarCoreMotions (深いネスト構造内の全 motion_id)
   * 7. MotionsSummary インデックスの再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static renameNumberedMotionIdsAdminV1MigrateRenameNumberedMotionIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/rename-numbered-motion-ids"
    });
  }
};

// src/generated/services/AdminDbStatsService.ts
var AdminDbStatsService = class {
  /**
   * Get Db Overview
   * 全コレクションのドキュメント数を一覧取得
   *
   * マイグレーション計画時に全体像を把握するために使用。
   * @returns DbOverviewResponse Successful Response
   * @throws ApiError
   */
  static getDbOverviewAdminV1DbStatsOverviewGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/db-stats/overview"
    });
  }
  /**
   * Get Collection Detail
   * 特定コレクションの詳細統計を取得
   *
   * 全フィールド名の和集合と、指定フィールドの存在率を返す。
   * @returns CollectionDetailResponse Successful Response
   * @throws ApiError
   */
  static getCollectionDetailAdminV1DbStatsCollectionsCollectionNameGet({
    collectionName,
    checkFields
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/db-stats/collections/{collection_name}",
      path: {
        "collection_name": collectionName
      },
      query: {
        "check_fields": checkFields
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AdminFirestoreService.ts
var AdminFirestoreService = class {
  /**
   * Get Collection Count
   * 指定コレクションのドキュメント数を取得
   *
   * Args:
   * collection_path: コレクションパス（例: "user/characters_data/characters"）
   *
   * Returns:
   * ドキュメント数
   * @returns CollectionCountResponse Successful Response
   * @throws ApiError
   */
  static getCollectionCountAdminV1FirestoreCollectionsCollectionPathCountGet({
    collectionPath
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/count",
      path: {
        "collection_path": collectionPath
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Collection Documents
   * 指定コレクションのドキュメント一覧を取得
   *
   * Args:
   * collection_path: コレクションパス
   * limit: 取得件数上限（デフォルト100、最大1000）
   * fields: 取得するフィールド（カンマ区切り）
   * cursor: ページネーションカーソル
   *
   * Returns:
   * ドキュメント一覧
   * @returns CollectionListResponse Successful Response
   * @throws ApiError
   */
  static listCollectionDocumentsAdminV1FirestoreCollectionsCollectionPathListGet({
    collectionPath,
    limit = 100,
    fields,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/list",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "limit": limit,
        "fields": fields,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Check Migration Status
   * 指定コレクションのマイグレーション状態を確認
   *
   * 特定のフィールドが存在するかどうかをチェックし、
   * マイグレーションが必要なドキュメントを特定する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 確認するフィールド名（例: "owner_type"）
   *
   * Returns:
   * マイグレーション状態
   * @returns MigrationStatusResponse Successful Response
   * @throws ApiError
   */
  static checkMigrationStatusAdminV1FirestoreCollectionsCollectionPathMigrationStatusGet({
    collectionPath,
    fieldName
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/firestore/collections/{collection_path}/migration-status",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Field
   * 指定コレクションのドキュメントにフィールドを追加
   *
   * 指定フィールドが存在しないドキュメントに、指定値を設定する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 追加するフィールド名
   * field_value: 設定する値
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateFieldAdminV1FirestoreCollectionsCollectionPathMigrateFieldPost({
    collectionPath,
    fieldName,
    fieldValue,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/migrate-field",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName,
        "field_value": fieldValue,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Migrate Field Value
   * 指定コレクションのフィールド値を変更
   *
   * 指定フィールドが old_value のドキュメントを new_value に更新する。
   *
   * Args:
   * collection_path: コレクションパス
   * field_name: 変更するフィールド名
   * old_value: 変更前の値
   * new_value: 変更後の値
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateFieldValueAdminV1FirestoreCollectionsCollectionPathMigrateFieldValuePost({
    collectionPath,
    fieldName,
    oldValue,
    newValue,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/migrate-field-value",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "field_name": fieldName,
        "old_value": oldValue,
        "new_value": newValue,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Document
   * 指定コレクションのドキュメントを削除
   *
   * Args:
   * collection_path: コレクションパス
   * document_id: ドキュメントID
   *
   * Returns:
   * 削除結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteDocumentAdminV1FirestoreCollectionsCollectionPathDocumentsDocumentIdDelete({
    collectionPath,
    documentId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/admin/v1/firestore/collections/{collection_path}/documents/{document_id}",
      path: {
        "collection_path": collectionPath,
        "document_id": documentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Rename Field
   * 指定コレクションのフィールド名をリネーム
   *
   * old_field_name を new_field_name にリネームする。
   *
   * Args:
   * collection_path: コレクションパス
   * old_field_name: 変更前のフィールド名
   * new_field_name: 変更後のフィールド名
   * dry_run: ドライラン（デフォルトTrue、Falseで実際に更新）
   *
   * Returns:
   * 更新結果
   * @returns any Successful Response
   * @throws ApiError
   */
  static renameFieldAdminV1FirestoreCollectionsCollectionPathRenameFieldPost({
    collectionPath,
    oldFieldName,
    newFieldName,
    dryRun = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/firestore/collections/{collection_path}/rename-field",
      path: {
        "collection_path": collectionPath
      },
      query: {
        "old_field_name": oldFieldName,
        "new_field_name": newFieldName,
        "dry_run": dryRun
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AdminForensicsService.ts
var AdminForensicsService = class {
  /**
   * Detect Image Colluders
   * 静止画像からフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * ブラインド検出（オリジナル画像不要）。DWTスペクトルと擬似乱数列の相関で
   * 符号語を復元し、Tardosスコアリングで共謀者を特定する。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectImageColludersAdminV1ForensicsDetectImagePost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-image",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Model Colluders
   * GLB/VRMモデルからフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * オリジナルGLBをGCSから取得し、頂点変位の差分比較で符号語を復元する。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectModelColludersAdminV1ForensicsDetectModelPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-model",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Animated Image Colluders
   * アニメーション画像からフィンガープリントを抽出し、流出元ユーザーを特定する
   *
   * 先頭フレームを抽出して静止画と同じDWT相関検出を行う。
   * @returns ForensicDetectResponse Successful Response
   * @throws ApiError
   */
  static detectAnimatedImageColludersAdminV1ForensicsDetectAnimatedImagePost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/forensics/detect-animated-image",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AdminMigrationService.ts
var AdminMigrationService = class {
  /**
   * Migrate Add Tag Ids
   * 全タグ付きエンティティのFirestoreドキュメントにtag_idsフラット配列を追加する。
   *
   * 既存のtags配列からtag_idを抽出し、tag_idsフィールドとして非正規化する。
   * array-containsクエリでの高速なタグ検索を可能にする。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateAddTagIdsAdminV1MigrateAddTagIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/add-tag-ids"
    });
  }
  /**
   * Migrate Add Tag Category Ids
   * 全タグ付きエンティティのtagsにtag_category_idを追加する。
   *
   * tag_category_linksコレクションからtag_id→tag_category_idのマッピングを構築し、
   * 各エンティティのtags配列内のタグオブジェクトにtag_category_idを追加する。
   * tag_category_linksに存在しないtag_idは"uncategorized"をセットする。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateAddTagCategoryIdsAdminV1MigrateAddTagCategoryIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/add-tag-category-ids"
    });
  }
  /**
   * Migrate Emotions Data Summary
   * emotion_config/default のデータを user/emotions_data ドキュメントに統合し、
   * official_emotion_index を構築する。
   *
   * 処理:
   * 1. user/emotions_data/emotion_config/default から既存データを読み取り
   * 2. user/emotions_data ドキュメントに既存フィールド(groups, vad_map, mood_verbalizer)を書き込み
   * 3. 全OFFICIAL Emotionドキュメントを読み取り → official_emotion_index を構築・追加
   * 4. user/emotions_data/emotion_config/default を削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateEmotionsDataSummaryAdminV1MigrateEmotionsDataSummaryPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/emotions-data-summary"
    });
  }
  /**
   * Recover Emotions Data
   * 消失した groups / emotion_vad_map / mood_verbalizer を再構築する。
   *
   * ソース:
   * - groups: scripts/seed_emotion_config.py の EMOTION_GROUPS
   * - emotion_vad_map: 個別Emotionドキュメントの vad フィールドから再構築
   * - mood_verbalizer: default_mood_verbalizer_config()
   * - official_emotion_index: 全OFFICIALのEmotionから再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static recoverEmotionsDataAdminV1MigrateRecoverEmotionsDataPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/recover-emotions-data"
    });
  }
  /**
   * Migrate Motions Data Summary
   * 全OFFICIAL Motionから official_motion_index を構築し、
   * user/motions_data ドキュメントに書き込む。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateMotionsDataSummaryAdminV1MigrateMotionsDataSummaryPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/motions-data-summary"
    });
  }
  /**
   * Migrate Motion Types
   * 既存Motionドキュメントにmotion_typeを正しく設定し、インデックスを再構築する。
   *
   * motion_idに基づいて意味的カテゴリ(base/gesture)を判定して設定。
   * 既存の motion_types リストフィールドがあれば motion_type 単数に移行。
   * 全Motionを処理後、motions_dataインデックスを再構築する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateMotionTypesAdminV1MigrateMotionTypesPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/motion-types"
    });
  }
  /**
   * Migrate Vrma Frame Counts
   * 既存VRMAAssetVersionにframe_countを設定する。
   *
   * 各VRMAファイルをStorageからダウンロードし、GLBバイナリを解析して
   * 実際のキーフレーム数を取得・保存する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static migrateVrmaFrameCountsAdminV1MigrateVrmaFrameCountsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/vrma-frame-counts"
    });
  }
  /**
   * Seed All Motions
   * 全Motionデータを削除して新規シードデータを一括投入する。
   *
   * 1. 既存の全Motionドキュメントを削除
   * 2. scripts/seed_motions_data.py の全定義をFirestoreに書き込み
   * 3. motions_dataインデックスを再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static seedAllMotionsAdminV1MigrateSeedAllMotionsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/seed-all-motions"
    });
  }
  /**
   * Seed All Emotions
   * 全Emotionデータを削除して新規シードデータを一括投入し、EmotionConfigも更新する。
   *
   * 1. 既存の全Emotionドキュメントを削除
   * 2. scripts/seed_emotions_data.py の全定義をFirestoreに書き込み
   * 3. EmotionConfigを更新（groups + VAD map + mood_verbalizer + official_emotion_index）
   * @returns any Successful Response
   * @throws ApiError
   */
  static seedAllEmotionsAdminV1MigrateSeedAllEmotionsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/seed-all-emotions"
    });
  }
  /**
   * Rename Numbered Motion Ids
   * motion_id の数字表記を英単語表記にリネームする。
   *
   * 対象: finger_count_1→finger_count_one, ..., countdown_3_2_1→countdown_three_two_one (計11件)
   *
   * 更新対象コレクション:
   * 1. Motion ドキュメント (ドキュメントID + motion_id フィールド)
   * 2. AnimationClipAsset (motion_id フィールド)
   * 3. VRMAAsset (motion_id フィールド)
   * 4. CharacterMotion (各キャラクターのサブコレクション)
   * 5. AvatarMotion (各アバターのサブコレクション)
   * 6. AvatarCoreMotions (深いネスト構造内の全 motion_id)
   * 7. MotionsSummary インデックスの再構築
   * @returns any Successful Response
   * @throws ApiError
   */
  static renameNumberedMotionIdsAdminV1MigrateRenameNumberedMotionIdsPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/migrate/rename-numbered-motion-ids"
    });
  }
};

// src/generated/services/AdminReviewsService.ts
var AdminReviewsService = class {
  /**
   * List Pending Staff Reviews
   * 運営審査待ちの一覧を取得（管理者用）
   * @returns PendingReviewListResponse Successful Response
   * @throws ApiError
   */
  static listPendingStaffReviewsAdminV1ReviewLogsPendingStaffGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/admin/v1/review-logs/pending-staff",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Staff Confirm Review
   * 運営による審査確定（管理者用）
   * @returns ReviewLogResponse Successful Response
   * @throws ApiError
   */
  static staffConfirmReviewAdminV1ReviewLogsReviewLogIdStaffConfirmPut({
    reviewLogId,
    reviewerId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/admin/v1/review-logs/{review_log_id}/staff-confirm",
      path: {
        "review_log_id": reviewLogId
      },
      query: {
        "reviewer_id": reviewerId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * 審査ドライラン（DB保存なし・プロンプト評価用）
   * 任意のコンテンツでLLM審査を実行し、結果のみ返す（管理者用）
   *
   * DB保存は行わない。プロンプトや評価基準の品質検証に使用する。
   * appealsを指定すると異議申し立てプロンプトで再審査を実行する。
   * @returns ReviewResultResponse Successful Response
   * @throws ApiError
   */
  static dryRunReviewAdminV1ReviewLogsDryRunPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/admin/v1/review-logs/dry-run",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AnimatedImageAssetsService.ts
var AnimatedImageAssetsService = class {
  /**
   * Create Animated Image Asset
   * アニメーション画像アセットを作成（GIF, APNG対応）
   *
   * ファイルからformat, size_profile, width, height, frame_count, durationを自動検出。
   * roleのみ必須で指定。複雑なデータ構造はJSON文字列で渡す。
   * @returns AnimatedImageAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createAnimatedImageAssetApiV1AnimatedImageAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animated-image-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Animated Image Assets
   * 複数のアニメーション画像アセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAnimatedImageAssetsApiV1AnimatedImageAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animated-image-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Animated Image Assets
   * アニメーション画像アセットを検索
   * @returns AnimatedImageAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchAnimatedImageAssetsApiV1AnimatedImageAssetsSearchGet({
    ownerId,
    format,
    sizeProfile,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/search",
      query: {
        "owner_id": ownerId,
        "format": format,
        "size_profile": sizeProfile,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animated Image Asset
   * アニメーション画像アセットを取得
   * @returns AnimatedImageAssetResponse Successful Response
   * @throws ApiError
   */
  static getAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdGet({
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Animated Image Asset
   * アニメーション画像アセットのメタデータを更新
   * @returns AnimatedImageAssetResponse Successful Response
   * @throws ApiError
   */
  static updateAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdPatch({
    assetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/animated-image-assets/{asset_id}",
      path: {
        "asset_id": assetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Animated Image Asset
   * アニメーション画像アセットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAnimatedImageAssetApiV1AnimatedImageAssetsAssetIdDelete({
    assetId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/animated-image-assets/{asset_id}",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Animated Image Asset Versions
   * アニメーション画像アセットのバージョン一覧を取得
   * @returns AnimatedImageAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listAnimatedImageAssetVersionsApiV1AnimatedImageAssetsAssetIdVersionsGet({
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/versions",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Animated Image Asset Version
   * アニメーション画像アセットに新しいバージョンを追加
   *
   * ファイルからwidth, height, frame_count, durationを自動検出。
   * フォーマットはアセットのformatと一致する必要がある（不一致時は400エラー）。
   * @returns AnimatedImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsPost({
    assetId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animated-image-assets/{asset_id}/versions",
      path: {
        "asset_id": assetId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Animated Image Version
   * アニメーション画像アセットの最新バージョンを取得
   * @returns AnimatedImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestAnimatedImageVersionApiV1AnimatedImageAssetsAssetIdVersionsLatestGet({
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/versions/latest",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animated Image Asset Version
   * アニメーション画像アセットの特定バージョンを取得
   * @returns AnimatedImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsVersionIdGet({
    assetId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/versions/{version_id}",
      path: {
        "asset_id": assetId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Animated Image Asset Version
   * アニメーション画像アセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAnimatedImageAssetVersionApiV1AnimatedImageAssetsAssetIdVersionsVersionIdDelete({
    assetId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/animated-image-assets/{asset_id}/versions/{version_id}",
      path: {
        "asset_id": assetId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animated Image File Url
   * アニメーション画像ファイルのダウンロード用一時URL（Signed URL）を返す
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getAnimatedImageFileUrlApiV1AnimatedImageAssetsAssetIdFileGet({
    assetId,
    quality = "original"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/file",
      path: {
        "asset_id": assetId
      },
      query: {
        "quality": quality
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animated Image Protected File
   * 透かし入り暗号化アニメーション画像をバイナリレスポンスで返す
   *
   * ヘッダー X-Key-Id, X-Fingerprint-Id, X-Format を含む。
   * @returns any Successful Response
   * @throws ApiError
   */
  static getAnimatedImageProtectedFileApiV1AnimatedImageAssetsAssetIdProtectedFileGet({
    assetId,
    quality = "original"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animated-image-assets/{asset_id}/protected-file",
      path: {
        "asset_id": assetId
      },
      query: {
        "quality": quality
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AnimationClipAssetsService.ts
var AnimationClipAssetsService = class {
  /**
   * Create Animation Clip Asset
   * AnimationClipアセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns AnimationClipAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createAnimationClipAssetApiV1AnimationClipAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animation-clip-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Animation Clip Assets
   * AnimationClipアセットを検索
   * @returns AnimationClipAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchAnimationClipAssetsApiV1AnimationClipAssetsSearchGet({
    ownerId,
    motionId,
    motionType,
    emotionId,
    targetGender,
    dataSource,
    tagIds,
    minLevel,
    maxAiLevel,
    isLoopable,
    hasRootMotion,
    minDuration,
    maxDuration,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animation-clip-assets/search",
      query: {
        "owner_id": ownerId,
        "motion_id": motionId,
        "motion_type": motionType,
        "emotion_id": emotionId,
        "target_gender": targetGender,
        "data_source": dataSource,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "is_loopable": isLoopable,
        "has_root_motion": hasRootMotion,
        "min_duration": minDuration,
        "max_duration": maxDuration,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Animation Clip Assets
   * 複数のAnimationClipアセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAnimationClipAssetsApiV1AnimationClipAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/animation-clip-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animation Clip Asset
   * AnimationClipアセットの詳細情報を取得
   *
   * キャッシュ更新判定に使用するため、updated_atを含む
   *
   * Returns:
   * AnimationClipAsset: アセットの詳細情報
   * @returns AnimationClipAssetResponse Successful Response
   * @throws ApiError
   */
  static getAnimationClipAssetApiV1AnimationClipAssetsClipIdGet({
    clipId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animation-clip-assets/{clip_id}",
      path: {
        "clip_id": clipId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Animation Clip Asset
   * AnimationClipアセットのメタデータを更新
   * @returns AnimationClipAssetResponse Successful Response
   * @throws ApiError
   */
  static updateAnimationClipAssetApiV1AnimationClipAssetsClipIdPatch({
    clipId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/animation-clip-assets/{clip_id}",
      path: {
        "clip_id": clipId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Animation Clip Asset
   * AnimationClipアセットを削除
   *
   * 参照されている場合は削除不可
   * @returns void
   * @throws ApiError
   */
  static deleteAnimationClipAssetApiV1AnimationClipAssetsClipIdDelete({
    clipId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/animation-clip-assets/{clip_id}",
      path: {
        "clip_id": clipId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Animation Clip File Url
   * AnimationClipファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getAnimationClipFileUrlApiV1AnimationClipAssetsClipIdFileGet({
    clipId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/animation-clip-assets/{clip_id}/file",
      path: {
        "clip_id": clipId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AssetBundleAssetsService.ts
var AssetBundleAssetsService = class {
  /**
   * Create Asset Bundle Asset
   * AssetBundleアセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns AssetBundleAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createAssetBundleAssetApiV1AssetBundleAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-bundle-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Asset Bundle Assets
   * AssetBundleアセットを検索
   * @returns AssetBundleAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchAssetBundleAssetsApiV1AssetBundleAssetsSearchGet({
    ownerId,
    bundleName,
    platform,
    dataSource,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/search",
      query: {
        "owner_id": ownerId,
        "bundle_name": bundleName,
        "platform": platform,
        "data_source": dataSource,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Asset Bundle Assets
   * 複数のAssetBundleアセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAssetBundleAssetsApiV1AssetBundleAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-bundle-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle Asset
   * AssetBundleアセットの詳細情報を取得
   * @returns AssetBundleAssetResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdGet({
    assetBundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}",
      path: {
        "asset_bundle_id": assetBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Asset Bundle Asset
   * AssetBundleアセットのメタデータを更新
   * @returns AssetBundleAssetResponse Successful Response
   * @throws ApiError
   */
  static updateAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdPatch({
    assetBundleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}",
      path: {
        "asset_bundle_id": assetBundleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Bundle Asset
   * AssetBundleアセットを削除（参照されている場合は削除不可）
   * @returns void
   * @throws ApiError
   */
  static deleteAssetBundleAssetApiV1AssetBundleAssetsAssetBundleIdDelete({
    assetBundleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}",
      path: {
        "asset_bundle_id": assetBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Asset Bundle Asset Versions
   * AssetBundleアセットのバージョン一覧を取得
   * @returns AssetBundleAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listAssetBundleAssetVersionsApiV1AssetBundleAssetsAssetBundleIdVersionsGet({
    assetBundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions",
      path: {
        "asset_bundle_id": assetBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Asset Bundle Asset Version
   * AssetBundleアセットに新しいバージョンを追加
   * @returns AssetBundleAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsPost({
    assetBundleId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions",
      path: {
        "asset_bundle_id": assetBundleId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Asset Bundle Version
   * AssetBundleアセットの最新バージョンを取得
   * @returns AssetBundleAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestAssetBundleVersionApiV1AssetBundleAssetsAssetBundleIdVersionsLatestGet({
    assetBundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions/latest",
      path: {
        "asset_bundle_id": assetBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle Asset Version
   * AssetBundleアセットの特定バージョンを取得
   * @returns AssetBundleAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdGet({
    assetBundleId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions/{version_id}",
      path: {
        "asset_bundle_id": assetBundleId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Bundle Asset Version
   * AssetBundleアセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAssetBundleAssetVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdDelete({
    assetBundleId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions/{version_id}",
      path: {
        "asset_bundle_id": assetBundleId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Variant To Version
   * 既存バージョンに新しいバリアント（プラットフォーム/アーキテクチャ）を追加
   * @returns AssetBundleAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addVariantToVersionApiV1AssetBundleAssetsAssetBundleIdVersionsVersionIdVariantsPost({
    assetBundleId,
    versionId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/versions/{version_id}/variants",
      path: {
        "asset_bundle_id": assetBundleId,
        "version_id": versionId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle File Url
   * AssetBundleファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * 最新バージョンのファイルを取得
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleFileUrlApiV1AssetBundleAssetsAssetBundleIdFileGet({
    assetBundleId,
    platform,
    arch
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/file",
      path: {
        "asset_bundle_id": assetBundleId
      },
      query: {
        "platform": platform,
        "arch": arch
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle Protected File
   * 保護済みAssetBundleファイルのダウンロード情報を返す
   *
   * ファイルはzstd圧縮 + AES-256-GCM暗号化済み（メッシュ難読化なし）。
   * @returns ProtectedFileResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleProtectedFileApiV1AssetBundleAssetsAssetBundleIdProtectedFileGet({
    assetBundleId,
    platform,
    arch
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-bundle-assets/{asset_bundle_id}/protected-file",
      path: {
        "asset_bundle_id": assetBundleId
      },
      query: {
        "platform": platform,
        "arch": arch
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AssetVariantsService.ts
var AssetVariantsService = class {
  /**
   * Create Asset Variant Link
   * 2つのアセット間のリンクを作成
   *
   * 同じペアは重複不可（辞書順で正規化されるため、順序は問わない）
   * @returns AssetVariantLinkResponse Successful Response
   * @throws ApiError
   */
  static createAssetVariantLinkApiV1AssetVariantsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-variants",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Asset Variant Links
   * 複数のアセットバリアントリンクを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAssetVariantLinksApiV1AssetVariantsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/asset-variants/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Variants By Asset Id
   * 特定のアセットIDに紐づく全リンクを取得
   *
   * 例: vrm_xxxを指定すると、それに紐づくGLTF, AssetBundle等が返る
   * @returns AssetVariantGroupResponse Successful Response
   * @throws ApiError
   */
  static getVariantsByAssetIdApiV1AssetVariantsByAssetAssetIdGet({
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/asset-variants/by-asset/{asset_id}",
      path: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Variant Link
   * アセットバリアントリンクを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAssetVariantLinkApiV1AssetVariantsLinkIdDelete({
    linkId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/asset-variants/{link_id}",
      path: {
        "link_id": linkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AudioAssetsService.ts
var AudioAssetsService = class {
  /**
   * Create Audio Asset
   * 音声アセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns AudioAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createAudioAssetApiV1AudioAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/audio-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Audio Assets
   * 複数のオーディオアセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAudioAssetsApiV1AudioAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/audio-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Audio Assets
   * Search audio assets using field-based filters
   * @returns AudioAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchAudioAssetsApiV1AudioAssetsSearchGet({
    audioType,
    maxDuration,
    title,
    ownerId,
    tagIds,
    minLevel,
    artistName,
    album,
    bpmRange,
    isLoopable,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/search",
      query: {
        "audio_type": audioType,
        "max_duration": maxDuration,
        "title": title,
        "owner_id": ownerId,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "artist_name": artistName,
        "album": album,
        "bpm_range": bpmRange,
        "is_loopable": isLoopable,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Audio Asset
   * 音声アセットを取得
   * @returns AudioAssetResponse Successful Response
   * @throws ApiError
   */
  static getAudioAssetApiV1AudioAssetsAudioIdGet({
    audioId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/{audio_id}",
      path: {
        "audio_id": audioId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Audio Asset
   * 音声アセットのメタデータを更新
   * @returns AudioAssetResponse Successful Response
   * @throws ApiError
   */
  static updateAudioAssetApiV1AudioAssetsAudioIdPatch({
    audioId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/audio-assets/{audio_id}",
      path: {
        "audio_id": audioId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Audio Asset
   * 音声アセットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAudioAssetApiV1AudioAssetsAudioIdDelete({
    audioId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/audio-assets/{audio_id}",
      path: {
        "audio_id": audioId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Audio Asset Versions
   * 音声アセットのバージョン一覧を取得
   * @returns AudioAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listAudioAssetVersionsApiV1AudioAssetsAudioIdVersionsGet({
    audioId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/{audio_id}/versions",
      path: {
        "audio_id": audioId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Audio Asset Version
   * 音声アセットに新しいバージョンを追加
   * @returns AudioAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addAudioAssetVersionApiV1AudioAssetsAudioIdVersionsPost({
    audioId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/audio-assets/{audio_id}/versions",
      path: {
        "audio_id": audioId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Audio Version
   * 音声アセットの最新バージョンを取得
   * @returns AudioAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestAudioVersionApiV1AudioAssetsAudioIdVersionsLatestGet({
    audioId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/{audio_id}/versions/latest",
      path: {
        "audio_id": audioId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Audio Asset Version
   * 音声アセットの特定バージョンを取得
   * @returns AudioAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getAudioAssetVersionApiV1AudioAssetsAudioIdVersionsVersionIdGet({
    audioId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/{audio_id}/versions/{version_id}",
      path: {
        "audio_id": audioId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Audio Asset Version
   * 音声アセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAudioAssetVersionApiV1AudioAssetsAudioIdVersionsVersionIdDelete({
    audioId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/audio-assets/{audio_id}/versions/{version_id}",
      path: {
        "audio_id": audioId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Audio Assets By Type
   * タイプ別に音声アセットを取得
   * @returns AudioAssetListResponse Successful Response
   * @throws ApiError
   */
  static getAudioAssetsByTypeApiV1AudioAssetsTypeAudioTypeGet({
    audioType,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/audio-assets/type/{audio_type}",
      path: {
        "audio_type": audioType
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AuthenticationService.ts
var AuthenticationService = class {
  /**
   * Merge Accounts
   * Merge an anonymous account into an existing account and link the derived app user.
   *
   * Authentication:
   * - Header token: Anonymous account (anon_uid)
   * - Body existing_token: Existing account (proves ownership of target account)
   * @returns any Successful Response
   * @throws ApiError
   */
  static mergeAccountsApiV1AuthMergeAccountsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auth/merge-accounts",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Register Link
   * Register a link between a CHARAHOME account (usually just upgraded) and a derived app user.
   * @returns any Successful Response
   * @throws ApiError
   */
  static registerLinkApiV1AuthRegisterLinkPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auth/register-link",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Check Link
   * Check if the current user is linked to the specified app.
   * @returns any Successful Response
   * @throws ApiError
   */
  static checkLinkApiV1AuthCheckLinkGet({
    appId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auth/check-link",
      query: {
        "app_id": appId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AutoParamsService.ts
var AutoParamsService = class {
  /**
   * Generate Avatar Auto Params
   * アバターのアイコン画像からパラメータを自動生成
   *
   * LLMを使用して、アイコン画像から以下のパラメータを推定します:
   * - archetype: 推定された性格アーキタイプ（1つ）
   * - プリセット値（emotional_params, lookat, blink等）は GET /personality-presets/{archetype} で取得
   * - gender: 性別
   * - age_group: 年齢層（LLM推論）
   * - content_description: 審査・メタデータ用の詳細説明（50〜100文字程度）
   * - display_description: ストア・検索結果用の短いキャッチフレーズ（20文字程度）
   * - main_color / sub_color: テーマカラー
   * - tags: 既存タグDBからLLM推論で自動選択されたタグ（generate_tags=trueの場合）
   * @returns AvatarAutoParamsResponse Successful Response
   * @throws ApiError
   */
  static generateAvatarAutoParamsApiV1AutoParamsAvatarPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-params/avatar",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Character Auto Params
   * キャラクター情報からパラメータを自動生成
   *
   * LLMを使用して、キャラクター情報から以下のパラメータを推定します:
   * - personality_archetype: 性格アーキタイプ（23種から1つ選択）
   * - プリセット値（emotional_params, lookat, blink等）は GET /personality-presets/{archetype} で取得
   * - gender: 性別
   * - age_group: 年齢層（LLM推論）
   * - content_description: 審査・メタデータ用の詳細説明（50〜100文字程度）
   * - display_description: ストア・検索結果用の短いキャッチフレーズ（20文字程度）
   * - main_color / sub_color: テーマカラー
   * - tags: 既存タグDBからLLM推論で自動選択されたタグ（generate_tags=trueの場合）
   * - basic_info, background_details等: サブコレクション（generate_subcollections=trueの場合）
   * @returns CharacterAutoParamsResponse Successful Response
   * @throws ApiError
   */
  static generateCharacterAutoParamsApiV1AutoParamsCharacterPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-params/character",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Motion Auto Params
   * モーションの説明文 / 動画 / GIF からパラメータを自動生成
   *
   * description, video, gif のいずれか1つ以上を入力してください。
   * GIF/APNGはサーバー側でMP4に自動変換されてからLLMに送信されます。
   *
   * LLMを使用して、以下のパラメータを推定します:
   * - content_description: 審査・メタデータ用の整形された説明（フィラー除去済み、50〜100文字）
   * - display_description: ストア表示用の短いキャッチフレーズ（20文字程度）
   * - motion_id: MotionDataから最適なもの選択
   * - motion_id_candidates: 適合度順の候補リスト（最大5件）
   * - emotion_id: EmotionDataから最適なもの選択（デフォルト: neutral）
   * - target_gender: 対象性別
   * - age_groups: 該当する年齢層のリスト
   * - motion_type: モーションタイプ（インデックス参照の確定値）
   * - tags: 既存タグDBからLLM推論で自動選択されたタグ（generate_tags=trueの場合）
   *
   * 音声入力のようなフィラー混じりテキストにも対応します。
   * 動画/GIF入力ではキャラクターの外見を無視し、動作のみを分析します。
   * @returns MotionAutoParamsResponse Successful Response
   * @throws ApiError
   */
  static generateMotionAutoParamsApiV1AutoParamsMotionPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-params/motion",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AutoTaggingService.ts
var AutoTaggingService = class {
  /**
   * Auto Tag Avatar
   * Avatarの自動タグ付け
   *
   * Args:
   * description: アバターの説明文
   * icon_image: アバターのアイコン画像（オプション）
   *
   * Returns:
   * 重み付きタグのリスト
   * @returns AutoTagResponse Successful Response
   * @throws ApiError
   */
  static autoTagAvatarApiV1AutoTaggingAvatarPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-tagging/avatar",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Auto Tag Settings
   * Settingsの自動タグ付け
   *
   * Args:
   * request: 設定の説明文を含むリクエスト
   *
   * Returns:
   * 重み付きタグのリスト
   * @returns AutoTagResponse Successful Response
   * @throws ApiError
   */
  static autoTagSettingsApiV1AutoTaggingSettingsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-tagging/settings",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Auto Tag Animation
   * Animationの自動タグ付け
   *
   * Args:
   * request: アニメーションの説明文を含むリクエスト
   *
   * Returns:
   * 重み付きタグのリスト
   * @returns AutoTagResponse Successful Response
   * @throws ApiError
   */
  static autoTagAnimationApiV1AutoTaggingAnimationPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-tagging/animation",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Tag Categories
   * Avatarで使用可能なタグカテゴリ一覧を取得
   * @returns TagCategoriesResponse Successful Response
   * @throws ApiError
   */
  static getAvatarTagCategoriesApiV1AutoTaggingAvatarCategoriesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auto-tagging/avatar/categories"
    });
  }
  /**
   * Get Settings Tag Categories
   * Settingsで使用可能なタグカテゴリ一覧を取得
   * @returns TagCategoriesResponse Successful Response
   * @throws ApiError
   */
  static getSettingsTagCategoriesApiV1AutoTaggingSettingsCategoriesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auto-tagging/settings/categories"
    });
  }
  /**
   * Get Motion Tag Categories
   * Motionで使用可能なタグカテゴリ一覧を取得
   * @returns TagCategoriesResponse Successful Response
   * @throws ApiError
   */
  static getMotionTagCategoriesApiV1AutoTaggingMotionCategoriesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auto-tagging/motion/categories"
    });
  }
  /**
   * Auto Tag Voice
   * Voiceの自動タグ付け
   *
   * Args:
   * request: 音声の説明文を含むリクエスト
   *
   * Returns:
   * 重み付きタグのリスト
   * @returns AutoTagResponse Successful Response
   * @throws ApiError
   */
  static autoTagVoiceApiV1AutoTaggingVoicePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/auto-tagging/voice",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Voice Tag Categories
   * Voiceで使用可能なタグカテゴリ一覧を取得
   * @returns TagCategoriesResponse Successful Response
   * @throws ApiError
   */
  static getVoiceTagCategoriesApiV1AutoTaggingVoiceCategoriesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/auto-tagging/voice/categories"
    });
  }
};

// src/generated/services/AvatarAppearanceVariantsService.ts
var AvatarAppearanceVariantsService = class {
  /**
   * Get Appearance Variant List
   * アバターの全外観バリアントを取得
   * @returns AppearanceVariantListResponse Successful Response
   * @throws ApiError
   */
  static getAppearanceVariantListApiV1AvatarsAvatarIdAppearanceVariantsGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Appearance Variant
   * アバターに新しい外観バリアントを作成
   * @returns AppearanceVariantResponse Successful Response
   * @throws ApiError
   */
  static createAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Appearance Variant
   * 特定の外観バリアントを取得
   * @returns AppearanceVariantResponse Successful Response
   * @throws ApiError
   */
  static getAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdGet({
    avatarId,
    variantId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants/{variant_id}",
      path: {
        "avatar_id": avatarId,
        "variant_id": variantId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Appearance Variant
   * 外観バリアントを更新
   * @returns AppearanceVariantResponse Successful Response
   * @throws ApiError
   */
  static updateAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdPatch({
    avatarId,
    variantId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants/{variant_id}",
      path: {
        "avatar_id": avatarId,
        "variant_id": variantId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Appearance Variant
   * 外観バリアントを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAppearanceVariantApiV1AvatarsAvatarIdAppearanceVariantsVariantIdDelete({
    avatarId,
    variantId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/appearance-variants/{variant_id}",
      path: {
        "avatar_id": avatarId,
        "variant_id": variantId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarBlinksService.ts
var AvatarBlinksService = class {
  /**
   * Get Avatar Blinks
   * アバターの全ての瞬きデータを取得
   * @returns AvatarBlinkListResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBlinksApiV1AvatarsAvatarIdBlinksGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/blinks",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Blink
   * アバターに新しい瞬きデータを作成
   *
   * blink_id はサーバー側で自動生成される（blink_{avatar_id}形式）
   * @returns AvatarBlinkResponse Successful Response
   * @throws ApiError
   */
  static createAvatarBlinkApiV1AvatarsAvatarIdBlinksPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/blinks",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Blinks
   * 複数の瞬きデータを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarBlinksApiV1AvatarsAvatarIdBlinksBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/blinks/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Blink
   * 特定の瞬きデータを取得
   * @returns AvatarBlinkResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBlinkApiV1AvatarsAvatarIdBlinksAvatarBlinkIdGet({
    avatarId,
    avatarBlinkId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Blink
   * 瞬きデータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarBlinkApiV1AvatarsAvatarIdBlinksAvatarBlinkIdDelete({
    avatarId,
    avatarBlinkId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Blink Formats
   * 瞬きデータの全フォーマットを一覧取得
   * @returns BlinkFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarBlinkFormatsApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsGet({
    avatarId,
    avatarBlinkId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Blink Format
   * 瞬きデータにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsPost({
    avatarId,
    avatarBlinkId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Blink Format
   * 特定のフォーマットを取得
   * @returns BlinkFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypeGet({
    avatarId,
    avatarBlinkId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Blink Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypePatch({
    avatarId,
    avatarBlinkId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Blink Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarBlinkFormatApiV1AvatarsAvatarIdBlinksAvatarBlinkIdFormatsFormatTypeDelete({
    avatarId,
    avatarBlinkId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/blinks/{avatar_blink_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_blink_id": avatarBlinkId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarBreathingsService.ts
var AvatarBreathingsService = class {
  /**
   * Get Avatar Breathings
   * アバターの全ての呼吸データを取得
   * @returns AvatarBreathingListResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBreathingsApiV1AvatarsAvatarIdBreathingsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/breathings",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Breathing
   * アバターに新しい呼吸データを作成
   * @returns AvatarBreathingResponse Successful Response
   * @throws ApiError
   */
  static createAvatarBreathingApiV1AvatarsAvatarIdBreathingsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/breathings",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Breathings
   * 複数の呼吸データを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarBreathingsApiV1AvatarsAvatarIdBreathingsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/breathings/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Breathing
   * 特定の呼吸データを取得
   * @returns AvatarBreathingResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBreathingApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdGet({
    avatarId,
    avatarBreathingId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Breathing
   * 呼吸データを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarBreathingApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdDelete({
    avatarId,
    avatarBreathingId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Breathing Formats
   * 呼吸データの全フォーマットを一覧取得
   * @returns BreathingFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarBreathingFormatsApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsGet({
    avatarId,
    avatarBreathingId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Breathing Format
   * 呼吸データにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsPost({
    avatarId,
    avatarBreathingId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Breathing Format
   * 特定のフォーマットを取得
   * @returns BreathingFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypeGet({
    avatarId,
    avatarBreathingId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Breathing Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypePatch({
    avatarId,
    avatarBreathingId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Breathing Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarBreathingFormatApiV1AvatarsAvatarIdBreathingsAvatarBreathingIdFormatsFormatTypeDelete({
    avatarId,
    avatarBreathingId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/breathings/{avatar_breathing_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_breathing_id": avatarBreathingId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarCoreMotionsService.ts
var AvatarCoreMotionsService = class {
  /**
   * Get Avatar Core Motions
   * アバターのAvatarCoreMotionsデータを取得
   * @returns AvatarCoreMotionsResponse Successful Response
   * @throws ApiError
   */
  static getAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/core-motions",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Core Motions
   * アバターのAvatarCoreMotionsデータを作成
   * @returns AvatarCoreMotionsResponse Successful Response
   * @throws ApiError
   */
  static createAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/core-motions",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Core Motions
   * アバターのAvatarCoreMotionsデータを更新
   * @returns AvatarCoreMotionsResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsPut({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/avatars/{avatar_id}/core-motions",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Core Motions
   * アバターのAvatarCoreMotionsデータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarCoreMotionsApiV1AvatarsAvatarIdCoreMotionsDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/core-motions",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarExpressionsService.ts
var AvatarExpressionsService = class {
  /**
   * Get Avatar Expressions
   * アバターの全ての表現を取得
   * @returns AvatarExpressionResponse Successful Response
   * @throws ApiError
   */
  static getAvatarExpressionsApiV1AvatarsAvatarIdExpressionsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Expression
   * アバターに新しい表現を作成
   *
   * avatar_expression_id と number はサーバー側で自動採番される
   * @returns AvatarExpressionResponse Successful Response
   * @throws ApiError
   */
  static createAvatarExpressionApiV1AvatarsAvatarIdExpressionsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Expressions
   * 複数の表現データを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarExpressionsApiV1AvatarsAvatarIdExpressionsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Expression
   * 特定の表現を取得
   * @returns AvatarExpressionResponse Successful Response
   * @throws ApiError
   */
  static getAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdGet({
    avatarId,
    avatarExpressionId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Expression
   * 表現を更新
   * @returns AvatarExpressionResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdPatch({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Expression
   * 表現を削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Expression Formats
   * 表現の全フォーマットを一覧取得
   * @returns ExpressionFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarExpressionFormatsApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Expression Format
   * 表現にフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsPost({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Expression Format
   * 特定のフォーマットを取得
   * @returns ExpressionFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypeGet({
    avatarId,
    avatarExpressionId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Expression Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypePatch({
    avatarId,
    avatarExpressionId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Expression Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarExpressionFormatApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFormatTypeDelete({
    avatarId,
    avatarExpressionId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarInstancesService.ts
var AvatarInstancesService = class {
  /**
   * Create Avatar Instance
   * @returns AvatarInstanceResponse Successful Response
   * @throws ApiError
   */
  static createAvatarInstanceApiV1MarketplaceAvatarInstancesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/avatar-instances",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Instances
   * @returns AvatarInstanceListResponse Successful Response
   * @throws ApiError
   */
  static listAvatarInstancesApiV1MarketplaceAvatarInstancesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-instances",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Instance
   * @returns AvatarInstanceResponse Successful Response
   * @throws ApiError
   */
  static getAvatarInstanceApiV1MarketplaceAvatarInstancesInstanceIdGet({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Instance
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarInstanceApiV1MarketplaceAvatarInstancesInstanceIdDelete({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/avatar-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarItemAttachmentsService.ts
var AvatarItemAttachmentsService = class {
  /**
   * Create Attachment
   * 装着設定を作成
   * @returns AvatarItemAttachmentResponse Successful Response
   * @throws ApiError
   */
  static createAttachmentApiV1AvatarsAvatarIdItemAttachmentsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/item-attachments",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Attachments
   * 装着設定一覧を取得
   * @returns AvatarItemAttachmentListResponse Successful Response
   * @throws ApiError
   */
  static listAttachmentsApiV1AvatarsAvatarIdItemAttachmentsGet({
    avatarId,
    outfitId,
    accessoryId,
    hairStyleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/item-attachments",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "outfit_id": outfitId,
        "accessory_id": accessoryId,
        "hair_style_id": hairStyleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Attachment
   * 装着設定を1件取得
   * @returns AvatarItemAttachmentResponse Successful Response
   * @throws ApiError
   */
  static getAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdGet({
    avatarId,
    attachmentId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/item-attachments/{attachment_id}",
      path: {
        "avatar_id": avatarId,
        "attachment_id": attachmentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Attachment
   * 装着設定を更新
   * @returns AvatarItemAttachmentResponse Successful Response
   * @throws ApiError
   */
  static updateAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdPatch({
    avatarId,
    attachmentId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/item-attachments/{attachment_id}",
      path: {
        "avatar_id": avatarId,
        "attachment_id": attachmentId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Attachment
   * 装着設定を削除
   * @returns void
   * @throws ApiError
   */
  static deleteAttachmentApiV1AvatarsAvatarIdItemAttachmentsAttachmentIdDelete({
    avatarId,
    attachmentId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/item-attachments/{attachment_id}",
      path: {
        "avatar_id": avatarId,
        "attachment_id": attachmentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarLipsyncsService.ts
var AvatarLipsyncsService = class {
  /**
   * Get Avatar Lipsyncs
   * アバターの全てのリップシンクデータを取得
   * @returns AvatarLipSyncListResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLipsyncsApiV1AvatarsAvatarIdLipsyncsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Lipsync
   * アバターに新しいリップシンクデータを作成
   * @returns AvatarLipSyncResponse Successful Response
   * @throws ApiError
   */
  static createAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Lipsyncs
   * 複数のリップシンクデータを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarLipsyncsApiV1AvatarsAvatarIdLipsyncsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Lipsync
   * 特定のリップシンクデータを取得
   * @returns AvatarLipSyncResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdGet({
    avatarId,
    avatarLipsyncId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Lipsync
   * リップシンクデータを更新（共通パラメータのみ）
   * @returns AvatarLipSyncResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdPatch({
    avatarId,
    avatarLipsyncId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Lipsync
   * リップシンクデータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarLipsyncApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdDelete({
    avatarId,
    avatarLipsyncId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Lipsync Formats
   * リップシンクデータの全フォーマットを一覧取得
   * @returns LipSyncFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarLipsyncFormatsApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsGet({
    avatarId,
    avatarLipsyncId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Lipsync Format
   * リップシンクデータにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsPost({
    avatarId,
    avatarLipsyncId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Lipsync Format
   * 特定のフォーマットを取得
   * @returns LipSyncFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypeGet({
    avatarId,
    avatarLipsyncId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Lipsync Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypePatch({
    avatarId,
    avatarLipsyncId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Lipsync Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarLipsyncFormatApiV1AvatarsAvatarIdLipsyncsAvatarLipsyncIdFormatsFormatTypeDelete({
    avatarId,
    avatarLipsyncId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/lipsyncs/{avatar_lipsync_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lipsync_id": avatarLipsyncId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarLookatsService.ts
var AvatarLookatsService = class {
  /**
   * Get Avatar Lookats
   * アバターの全ての視線制御データを取得
   * @returns AvatarLookAtListResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLookatsApiV1AvatarsAvatarIdLookatsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lookats",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Lookat
   * アバターに新しい視線制御データを作成
   * @returns AvatarLookAtResponse Successful Response
   * @throws ApiError
   */
  static createAvatarLookatApiV1AvatarsAvatarIdLookatsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lookats",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Lookats
   * 複数の視線制御データを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarLookatsApiV1AvatarsAvatarIdLookatsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lookats/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Lookat
   * 特定の視線制御データを取得
   * @returns AvatarLookAtResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLookatApiV1AvatarsAvatarIdLookatsAvatarLookatIdGet({
    avatarId,
    avatarLookatId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Lookat
   * 視線制御データを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarLookatApiV1AvatarsAvatarIdLookatsAvatarLookatIdDelete({
    avatarId,
    avatarLookatId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Lookat Formats
   * 視線制御データの全フォーマットを一覧取得
   * @returns LookAtFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarLookatFormatsApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsGet({
    avatarId,
    avatarLookatId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Lookat Format
   * 視線制御データにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsPost({
    avatarId,
    avatarLookatId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Lookat Format
   * 特定のフォーマットを取得
   * @returns LookAtFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypeGet({
    avatarId,
    avatarLookatId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Lookat Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypePatch({
    avatarId,
    avatarLookatId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Lookat Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarLookatFormatApiV1AvatarsAvatarIdLookatsAvatarLookatIdFormatsFormatTypeDelete({
    avatarId,
    avatarLookatId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/lookats/{avatar_lookat_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "avatar_lookat_id": avatarLookatId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarModelsService.ts
var AvatarModelsService = class {
  /**
   * Create Vrm Model
   * VRMモデルを登録（アセットID参照）
   * @returns VRMModelResponse Successful Response
   * @throws ApiError
   */
  static createVrmModelApiV1AvatarsAvatarIdVrmModelPost({
    avatarId,
    vrmAssetId,
    modelerName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/vrm-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "vrm_asset_id": vrmAssetId,
        "modeler_name": modelerName,
        "character_designer_name": characterDesignerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrm Model
   * VRMモデル情報を取得
   * @returns VRMModelResponse Successful Response
   * @throws ApiError
   */
  static getVrmModelApiV1AvatarsAvatarIdVrmModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/vrm-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Vrm Model
   * VRMモデルを更新
   * @returns VRMModelResponse Successful Response
   * @throws ApiError
   */
  static updateVrmModelApiV1AvatarsAvatarIdVrmModelPatch({
    avatarId,
    vrmAssetId,
    modelerName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/vrm-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "vrm_asset_id": vrmAssetId,
        "modeler_name": modelerName,
        "character_designer_name": characterDesignerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Vrm Model
   * VRMモデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteVrmModelApiV1AvatarsAvatarIdVrmModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/vrm-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Vrm Model With File
   * VRMモデルを登録（ファイルアップロードしてアセット作成も行う統合版）
   * @returns VRMModelResponse Successful Response
   * @throws ApiError
   */
  static uploadVrmModelWithFileApiV1AvatarsAvatarIdVrmModelFileUploadPost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/vrm-model/file-upload",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Sprite Model
   * Spriteモデルを登録（アセットID参照）
   * @returns SpriteModelResponse Successful Response
   * @throws ApiError
   */
  static createSpriteModelApiV1AvatarsAvatarIdSpriteModelPost({
    avatarId,
    posture,
    baseAssetId,
    facePositionJson,
    eyelidAssetId,
    eyeballAssetId,
    mouthAssetId,
    illustratorName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/sprite-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "posture": posture,
        "base_asset_id": baseAssetId,
        "eyelid_asset_id": eyelidAssetId,
        "eyeball_asset_id": eyeballAssetId,
        "mouth_asset_id": mouthAssetId,
        "illustrator_name": illustratorName,
        "character_designer_name": characterDesignerName,
        "face_position_json": facePositionJson
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Sprite Model
   * Spriteモデル情報を取得
   * @returns SpriteModelResponse Successful Response
   * @throws ApiError
   */
  static getSpriteModelApiV1AvatarsAvatarIdSpriteModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/sprite-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Sprite Model
   * Spriteモデルを更新
   * @returns SpriteModelResponse Successful Response
   * @throws ApiError
   */
  static updateSpriteModelApiV1AvatarsAvatarIdSpriteModelPatch({
    avatarId,
    posture,
    baseAssetId,
    eyelidAssetId,
    eyeballAssetId,
    mouthAssetId,
    illustratorName,
    characterDesignerName,
    facePositionJson
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/sprite-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "posture": posture,
        "base_asset_id": baseAssetId,
        "eyelid_asset_id": eyelidAssetId,
        "eyeball_asset_id": eyeballAssetId,
        "mouth_asset_id": mouthAssetId,
        "illustrator_name": illustratorName,
        "character_designer_name": characterDesignerName,
        "face_position_json": facePositionJson
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Sprite Model
   * Spriteモデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSpriteModelApiV1AvatarsAvatarIdSpriteModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/sprite-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Sprite Model With Files
   * Spriteモデルを登録（画像ファイルアップロードしてアセット作成も行う統合版）
   * @returns SpriteModelResponse Successful Response
   * @throws ApiError
   */
  static uploadSpriteModelWithFilesApiV1AvatarsAvatarIdSpriteModelFileUploadPost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/sprite-model/file-upload",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Face
   * 画像から顔位置を自動検出する（正規化座標で返却）
   * @returns FaceDetectionResponse Successful Response
   * @throws ApiError
   */
  static detectFaceApiV1AvatarsAvatarIdSpriteModelDetectFacePost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/sprite-model/detect-face",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Detect Pose
   * 画像からボディキーポイントを自動検出する（正規化座標で返却）
   * @returns PoseDetectionResponse Successful Response
   * @throws ApiError
   */
  static detectPoseApiV1AvatarsAvatarIdSpriteModelDetectPosePost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/sprite-model/detect-pose",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Face Icon Model
   * FaceIconモデルを登録（アセットID参照）
   * @returns FaceIconModelResponse Successful Response
   * @throws ApiError
   */
  static createFaceIconModelApiV1AvatarsAvatarIdFaceIconModelPost({
    avatarId,
    baseAssetId,
    bodyAssetId,
    eyelidAssetId,
    eyeballAssetId,
    mouthAssetId,
    illustratorName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "base_asset_id": baseAssetId,
        "body_asset_id": bodyAssetId,
        "eyelid_asset_id": eyelidAssetId,
        "eyeball_asset_id": eyeballAssetId,
        "mouth_asset_id": mouthAssetId,
        "illustrator_name": illustratorName,
        "character_designer_name": characterDesignerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Face Icon Model
   * FaceIconモデル情報を取得
   * @returns FaceIconModelResponse Successful Response
   * @throws ApiError
   */
  static getFaceIconModelApiV1AvatarsAvatarIdFaceIconModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Face Icon Model
   * FaceIconモデルを更新
   * @returns FaceIconModelResponse Successful Response
   * @throws ApiError
   */
  static updateFaceIconModelApiV1AvatarsAvatarIdFaceIconModelPatch({
    avatarId,
    baseAssetId,
    bodyAssetId,
    eyelidAssetId,
    eyeballAssetId,
    mouthAssetId,
    illustratorName,
    characterDesignerName
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "base_asset_id": baseAssetId,
        "body_asset_id": bodyAssetId,
        "eyelid_asset_id": eyelidAssetId,
        "eyeball_asset_id": eyeballAssetId,
        "mouth_asset_id": mouthAssetId,
        "illustrator_name": illustratorName,
        "character_designer_name": characterDesignerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Face Icon Model
   * FaceIconモデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteFaceIconModelApiV1AvatarsAvatarIdFaceIconModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Face Icon Model With Files
   * FaceIconモデルを登録（画像ファイルアップロードしてアセット作成も行う統合版）
   * @returns FaceIconModelResponse Successful Response
   * @throws ApiError
   */
  static uploadFaceIconModelWithFilesApiV1AvatarsAvatarIdFaceIconModelFileUploadPost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/face-icon-model/file-upload",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Asset Bundle
   * AssetBundleモデルの作成/更新（単一バリアント登録・差し替え）
   * @returns AssetBundleModelResponse Successful Response
   * @throws ApiError
   */
  static uploadAssetBundleApiV1AvatarsAvatarIdAssetBundleModelPost({
    avatarId,
    platform,
    arch,
    storagePath,
    sha256,
    sizeBytes,
    modelerName,
    characterDesignerName,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/asset-bundle-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "platform": platform,
        "arch": arch,
        "storage_path": storagePath,
        "sha256": sha256,
        "size_bytes": sizeBytes,
        "modeler_name": modelerName,
        "character_designer_name": characterDesignerName
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Asset Bundle
   * AssetBundleモデル情報を取得（全バリアント一覧）
   * @returns AssetBundleModelResponse Successful Response
   * @throws ApiError
   */
  static getAssetBundleApiV1AvatarsAvatarIdAssetBundleModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/asset-bundle-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Bundle
   * AssetBundleモデル全体を削除（全バリアント + Firestore）
   * @returns void
   * @throws ApiError
   */
  static deleteAssetBundleApiV1AvatarsAvatarIdAssetBundleModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/asset-bundle-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Asset Bundle Variant
   * AssetBundleの単一バリアントを削除（Firestore + Storage）
   * @returns void
   * @throws ApiError
   */
  static deleteAssetBundleVariantApiV1AvatarsAvatarIdAssetBundleModelVariantDelete({
    avatarId,
    platform,
    arch
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/asset-bundle-model/variant",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "platform": platform,
        "arch": arch
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Glb Model
   * GLBモデルを登録（アセットID参照）
   * @returns GLBModelResponse Successful Response
   * @throws ApiError
   */
  static createGlbModelApiV1AvatarsAvatarIdGlbModelPost({
    avatarId,
    glbAssetId,
    glbAssetVersionId,
    modelerName,
    designerName
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/glb-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "glb_asset_id": glbAssetId,
        "glb_asset_version_id": glbAssetVersionId,
        "modeler_name": modelerName,
        "designer_name": designerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Model
   * GLBモデル情報を取得
   * @returns GLBModelResponse Successful Response
   * @throws ApiError
   */
  static getGlbModelApiV1AvatarsAvatarIdGlbModelGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/glb-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Glb Model
   * GLBモデルを更新
   * @returns GLBModelResponse Successful Response
   * @throws ApiError
   */
  static updateGlbModelApiV1AvatarsAvatarIdGlbModelPatch({
    avatarId,
    glbAssetId,
    glbAssetVersionId,
    modelerName,
    designerName
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/glb-model",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "glb_asset_id": glbAssetId,
        "glb_asset_version_id": glbAssetVersionId,
        "modeler_name": modelerName,
        "designer_name": designerName
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Glb Model
   * GLBモデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteGlbModelApiV1AvatarsAvatarIdGlbModelDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/glb-model",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upload Glb Model With File
   * GLBモデルを登録（ファイルアップロードしてアセット作成も行う統合版）
   * @returns GLBModelResponse Successful Response
   * @throws ApiError
   */
  static uploadGlbModelWithFileApiV1AvatarsAvatarIdGlbModelFileUploadPost({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/glb-model/file-upload",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarMotionsService.ts
var AvatarMotionsService = class {
  /**
   * Get Avatar Motions
   * アバターの全てのモーションを取得
   * @returns AvatarMotionResponse Successful Response
   * @throws ApiError
   */
  static getAvatarMotionsApiV1AvatarsAvatarIdMotionsGet({
    avatarId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Motion
   * アバターに新しいモーションを作成
   * @returns AvatarMotionResponse Successful Response
   * @throws ApiError
   */
  static createAvatarMotionApiV1AvatarsAvatarIdMotionsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatar Motions
   * 複数のモーションデータを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarMotionsApiV1AvatarsAvatarIdMotionsBatchPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/batch",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Motion
   * 特定のモーションを取得
   * @returns AvatarMotionResponse Successful Response
   * @throws ApiError
   */
  static getAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdGet({
    avatarId,
    motionId,
    includeFormats = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      query: {
        "include_formats": includeFormats
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Motion
   * モーションを更新
   * @returns AvatarMotionResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdPatch({
    avatarId,
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Motion
   * モーションを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarMotionApiV1AvatarsAvatarIdMotionsMotionIdDelete({
    avatarId,
    motionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Motion Formats
   * モーションの全フォーマットを一覧取得
   * @returns MotionFormatResponse Successful Response
   * @throws ApiError
   */
  static listAvatarMotionFormatsApiV1AvatarsAvatarIdMotionsMotionIdFormatsGet({
    avatarId,
    motionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Avatar Motion Format
   * モーションにフォーマットを追加
   * @returns any Successful Response
   * @throws ApiError
   */
  static addAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsPost({
    avatarId,
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Motion Format
   * 特定のフォーマットを取得
   * @returns MotionFormatResponse Successful Response
   * @throws ApiError
   */
  static getAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypeGet({
    avatarId,
    motionId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Motion Format
   * 特定のフォーマットを更新
   * @returns any Successful Response
   * @throws ApiError
   */
  static updateAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypePatch({
    avatarId,
    motionId,
    formatType,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId,
        "format_type": formatType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Motion Format
   * 特定のフォーマットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarMotionFormatApiV1AvatarsAvatarIdMotionsMotionIdFormatsFormatTypeDelete({
    avatarId,
    motionId,
    formatType
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{motion_id}/formats/{format_type}",
      path: {
        "avatar_id": avatarId,
        "motion_id": motionId,
        "format_type": formatType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarsService.ts
var AvatarsService = class {
  /**
   * List Avatars
   * @returns AvatarListResponse Successful Response
   * @throws ApiError
   */
  static listAvatarsApiV1AvatarsGet({
    modelType,
    gender,
    ageRating,
    country,
    publishScope,
    filterByOwner = false,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars",
      query: {
        "model_type": modelType,
        "gender": gender,
        "age_rating": ageRating,
        "country": country,
        "publish_scope": publishScope,
        "filter_by_owner": filterByOwner,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar
   * @returns AvatarResponse Successful Response
   * @throws ApiError
   */
  static createAvatarApiV1AvatarsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Avatars
   * 複数のアバターを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetAvatarsApiV1AvatarsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar
   * @returns AvatarResponse Successful Response
   * @throws ApiError
   */
  static getAvatarApiV1AvatarsAvatarIdGet({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar
   * @returns AvatarResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarApiV1AvatarsAvatarIdPatch({
    avatarId,
    formData
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}",
      path: {
        "avatar_id": avatarId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarApiV1AvatarsAvatarIdDelete({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Avatar Ai Usage
   * アバターの参照アセットからAI使用レベルをサジェスト
   * @returns AvatarAiUsage Successful Response
   * @throws ApiError
   */
  static suggestAvatarAiUsageApiV1AvatarsAvatarIdSuggestAiUsagePost({
    avatarId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/suggest-ai-usage",
      path: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Recommend Voices
   * アバターに相性の良いVoiceをおすすめ順で返す
   *
   * data_source=official, publish_scope=publicのVoiceのみが対象
   * @returns RecommendationResponse Successful Response
   * @throws ApiError
   */
  static recommendVoicesApiV1AvatarsAvatarIdRecommendVoicesPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/recommend-voices",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Recommend Settings
   * アバターに相性の良いSettingsをおすすめ順で返す
   *
   * data_source=official, publish_scope=publicのSettingsのみが対象
   * @returns RecommendationResponse Successful Response
   * @throws ApiError
   */
  static recommendSettingsApiV1AvatarsAvatarIdRecommendSettingsPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/recommend-settings",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Copy Avatar Expressions To Avatar
   * アバターの表現を別のアバターにコピー
   * @returns SimpleCopyEmotionsResponse Successful Response
   * @throws ApiError
   */
  static copyAvatarExpressionsToAvatarApiV1AvatarsSourceAvatarIdCopyExpressionsToAvatarTargetAvatarIdPost({
    sourceAvatarId,
    targetAvatarId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{source_avatar_id}/copy-expressions-to-avatar/{target_avatar_id}",
      path: {
        "source_avatar_id": sourceAvatarId,
        "target_avatar_id": targetAvatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Copy Avatar Motions To Avatar
   * アバターのモーションを別のアバターにコピー
   * @returns SimpleCopyMotionsResponse Successful Response
   * @throws ApiError
   */
  static copyAvatarMotionsToAvatarApiV1AvatarsSourceAvatarIdCopyMotionsToAvatarTargetAvatarIdPost({
    sourceAvatarId,
    targetAvatarId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{source_avatar_id}/copy-motions-to-avatar/{target_avatar_id}",
      path: {
        "source_avatar_id": sourceAvatarId,
        "target_avatar_id": targetAvatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Duplicate Avatar
   * アバターを複製（すべてのサブコレクションをコピー）
   * @returns DuplicateResponse Successful Response
   * @throws ApiError
   */
  static duplicateAvatarApiV1AvatarsAvatarIdDuplicatePost({
    avatarId,
    newAvatarId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/duplicate",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "new_avatar_id": newAvatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/AvatarTemplatesService.ts
var AvatarTemplatesService = class {
  /**
   * Create Avatar Template
   * @returns AvatarTemplateResponse Successful Response
   * @throws ApiError
   */
  static createAvatarTemplateApiV1MarketplaceAvatarTemplatesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/avatar-templates",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Templates
   * @returns AvatarTemplateListResponse Successful Response
   * @throws ApiError
   */
  static listAvatarTemplatesApiV1MarketplaceAvatarTemplatesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-templates",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Template
   * @returns AvatarTemplateResponse Successful Response
   * @throws ApiError
   */
  static getAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdGet({
    templateId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Template
   * @returns AvatarTemplateResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdPatch({
    templateId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/avatar-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Template
   * @returns void
   * @throws ApiError
   */
  static deleteAvatarTemplateApiV1MarketplaceAvatarTemplatesTemplateIdDelete({
    templateId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/avatar-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Publish Avatar Template Version
   * @returns AvatarTemplateVersionResponse Successful Response
   * @throws ApiError
   */
  static publishAvatarTemplateVersionApiV1MarketplaceAvatarTemplatesTemplateIdVersionsPost({
    templateId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/avatar-templates/{template_id}/versions",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Avatar Template Versions
   * @returns AvatarTemplateVersionResponse Successful Response
   * @throws ApiError
   */
  static listAvatarTemplateVersionsApiV1MarketplaceAvatarTemplatesTemplateIdVersionsGet({
    templateId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/avatar-templates/{template_id}/versions",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CacheMetadataService.ts
var CacheMetadataService = class {
  /**
   * Get Cache Metadata
   * @returns CacheMetadataResponse Successful Response
   * @throws ApiError
   */
  static getCacheMetadataApiV1CharactersCharacterIdCacheMetadataGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/cache-metadata",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Upsert Cache Metadata
   * @returns CacheMetadataResponse Successful Response
   * @throws ApiError
   */
  static upsertCacheMetadataApiV1CharactersCharacterIdCacheMetadataPut({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/cache-metadata",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Cache Metadata
   * @returns void
   * @throws ApiError
   */
  static deleteCacheMetadataApiV1CharactersCharacterIdCacheMetadataDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/cache-metadata",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Cache Status
   * インメモリキャッシュ状態を取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static getCacheStatusApiV1CharactersCharacterIdCacheMetadataStatusGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/cache-metadata/status",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Invalidate Cache
   * キャッシュを即座に無効化
   * @returns void
   * @throws ApiError
   */
  static invalidateCacheApiV1CharactersCharacterIdCacheMetadataInvalidateDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/cache-metadata/invalidate",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterAbilitiesService.ts
var CharacterAbilitiesService = class {
  /**
   * Create Abilities
   * キャラクターの能力情報を作成
   * @returns CharacterAbilitiesResponse Successful Response
   * @throws ApiError
   */
  static createAbilitiesApiV1CharactersCharacterIdAbilitiesPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/abilities",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Abilities
   * キャラクターの能力情報を取得
   * @returns CharacterAbilitiesResponse Successful Response
   * @throws ApiError
   */
  static getAbilitiesApiV1CharactersCharacterIdAbilitiesGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/abilities",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Abilities
   * キャラクターの能力情報を更新
   * @returns CharacterAbilitiesResponse Successful Response
   * @throws ApiError
   */
  static updateAbilitiesApiV1CharactersCharacterIdAbilitiesPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/abilities",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Abilities
   * キャラクターの能力情報を削除
   * @returns void
   * @throws ApiError
   */
  static deleteAbilitiesApiV1CharactersCharacterIdAbilitiesDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/abilities",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterActionsService.ts
var CharacterActionsService = class {
  /**
   * Create Action
   * アクションデータを作成
   * @returns CharacterActionResponse Successful Response
   * @throws ApiError
   */
  static createActionApiV1CharactersCharacterIdActionsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/actions",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Actions
   * キャラクターの全アクションデータを取得
   * @returns CharacterActionListResponse Successful Response
   * @throws ApiError
   */
  static listActionsApiV1CharactersCharacterIdActionsGet({
    characterId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions",
      path: {
        "character_id": characterId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Top Level Actions
   * トップレベルアクションのみ取得
   * @returns CharacterActionListResponse Successful Response
   * @throws ApiError
   */
  static listTopLevelActionsApiV1CharactersCharacterIdActionsTopLevelGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions/top-level",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Child Actions
   * 子アクションを取得
   * @returns CharacterActionListResponse Successful Response
   * @throws ApiError
   */
  static listChildActionsApiV1CharactersCharacterIdActionsActionIdChildrenGet({
    characterId,
    actionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions/{action_id}/children",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Action Tree
   * アクションのツリー構造を取得
   * @returns CharacterActionTreeResponse Successful Response
   * @throws ApiError
   */
  static getActionTreeApiV1CharactersCharacterIdActionsActionIdTreeGet({
    characterId,
    actionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions/{action_id}/tree",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Action
   * アクションデータを取得
   * @returns CharacterActionResponse Successful Response
   * @throws ApiError
   */
  static getActionApiV1CharactersCharacterIdActionsActionIdGet({
    characterId,
    actionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/actions/{action_id}",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Action
   * アクションデータを更新
   * @returns CharacterActionResponse Successful Response
   * @throws ApiError
   */
  static updateActionApiV1CharactersCharacterIdActionsActionIdPatch({
    characterId,
    actionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/actions/{action_id}",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Action
   * アクションデータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteActionApiV1CharactersCharacterIdActionsActionIdDelete({
    characterId,
    actionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/actions/{action_id}",
      path: {
        "character_id": characterId,
        "action_id": actionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Create Actions
   * アクションデータを一括作成
   * @returns CharacterActionListResponse Successful Response
   * @throws ApiError
   */
  static batchCreateActionsApiV1CharactersCharacterIdActionsBatchPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/actions/batch",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterBackgroundDetailsService.ts
var CharacterBackgroundDetailsService = class {
  /**
   * Create Background Details
   * キャラクターの背景詳細を作成
   * @returns CharacterBackgroundDetailsResponse Successful Response
   * @throws ApiError
   */
  static createBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/background_details",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Background Details
   * キャラクターの背景詳細を取得
   * @returns CharacterBackgroundDetailsResponse Successful Response
   * @throws ApiError
   */
  static getBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/background_details",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Background Details
   * キャラクターの背景詳細を更新
   * @returns CharacterBackgroundDetailsResponse Successful Response
   * @throws ApiError
   */
  static updateBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/background_details",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Background Details
   * キャラクターの背景詳細を削除
   * @returns void
   * @throws ApiError
   */
  static deleteBackgroundDetailsApiV1CharactersCharacterIdBackgroundDetailsDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/background_details",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterBasicInfoService.ts
var CharacterBasicInfoService = class {
  /**
   * Create Basic Info
   * キャラクターの基本情報を作成
   * @returns CharacterBasicInfoResponse Successful Response
   * @throws ApiError
   */
  static createBasicInfoApiV1CharactersCharacterIdBasicInfoPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/basic_info",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Basic Info
   * キャラクターの基本情報を取得
   * @returns CharacterBasicInfoResponse Successful Response
   * @throws ApiError
   */
  static getBasicInfoApiV1CharactersCharacterIdBasicInfoGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/basic_info",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Basic Info
   * キャラクターの基本情報を更新
   * @returns CharacterBasicInfoResponse Successful Response
   * @throws ApiError
   */
  static updateBasicInfoApiV1CharactersCharacterIdBasicInfoPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/basic_info",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Basic Info
   * キャラクターの基本情報を削除
   * @returns void
   * @throws ApiError
   */
  static deleteBasicInfoApiV1CharactersCharacterIdBasicInfoDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/basic_info",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterDailyLifeService.ts
var CharacterDailyLifeService = class {
  /**
   * Create Daily Life
   * キャラクターの日常生活情報を作成
   * @returns CharacterDailyLifeResponse Successful Response
   * @throws ApiError
   */
  static createDailyLifeApiV1CharactersCharacterIdDailyLifePost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/daily_life",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Daily Life
   * キャラクターの日常生活情報を取得
   * @returns CharacterDailyLifeResponse Successful Response
   * @throws ApiError
   */
  static getDailyLifeApiV1CharactersCharacterIdDailyLifeGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/daily_life",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Daily Life
   * キャラクターの日常生活情報を更新
   * @returns CharacterDailyLifeResponse Successful Response
   * @throws ApiError
   */
  static updateDailyLifeApiV1CharactersCharacterIdDailyLifePatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/daily_life",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Daily Life
   * キャラクターの日常生活情報を削除
   * @returns void
   * @throws ApiError
   */
  static deleteDailyLifeApiV1CharactersCharacterIdDailyLifeDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/daily_life",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterEmotionsService.ts
var CharacterEmotionsService = class {
  /**
   * List Character Emotions
   * キャラクターの感情設定一覧を取得
   * @returns CharacterEmotionListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterEmotionsApiV1CharactersCharacterIdEmotionsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/emotions",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Character Emotion
   * キャラクターの感情設定を作成
   * @returns CharacterEmotionResponse Successful Response
   * @throws ApiError
   */
  static createCharacterEmotionApiV1CharactersCharacterIdEmotionsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/emotions",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Emotion
   * キャラクターの特定の感情設定を取得
   * @returns CharacterEmotionResponse Successful Response
   * @throws ApiError
   */
  static getCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdGet({
    characterId,
    emotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/emotions/{emotion_id}",
      path: {
        "character_id": characterId,
        "emotion_id": emotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Emotion
   * キャラクターの感情設定を更新
   * @returns CharacterEmotionResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdPut({
    characterId,
    emotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/emotions/{emotion_id}",
      path: {
        "character_id": characterId,
        "emotion_id": emotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Emotion
   * キャラクターの感情設定を削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterEmotionApiV1CharactersCharacterIdEmotionsEmotionIdDelete({
    characterId,
    emotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/emotions/{emotion_id}",
      path: {
        "character_id": characterId,
        "emotion_id": emotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Create Character Emotions
   * キャラクターの感情設定を一括作成
   * @returns CharacterEmotionListResponse Successful Response
   * @throws ApiError
   */
  static batchCreateCharacterEmotionsApiV1CharactersCharacterIdEmotionsBatchPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/emotions/batch",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Emotion Ids
   * キャラクターが持つemotion_idのリストを取得
   * @returns CharacterEmotionIdsResponse Successful Response
   * @throws ApiError
   */
  static getCharacterEmotionIdsApiV1CharactersCharacterIdEmotionsIdsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/emotions/ids",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterEquipmentService.ts
var CharacterEquipmentService = class {
  /**
   * Create Equipment
   * キャラクターに装備を追加
   * @returns CharacterEquipmentResponse Successful Response
   * @throws ApiError
   */
  static createEquipmentApiV1CharactersCharacterIdEquipmentPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/equipment",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Equipment
   * キャラクターの装備一覧を取得
   * @returns CharacterEquipmentListResponse Successful Response
   * @throws ApiError
   */
  static listEquipmentApiV1CharactersCharacterIdEquipmentGet({
    characterId,
    avatarId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/equipment",
      path: {
        "character_id": characterId
      },
      query: {
        "avatar_id": avatarId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Equipment
   * 装備を1件取得
   * @returns CharacterEquipmentResponse Successful Response
   * @throws ApiError
   */
  static getEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdGet({
    characterId,
    equipmentId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/equipment/{equipment_id}",
      path: {
        "character_id": characterId,
        "equipment_id": equipmentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Equipment
   * 装備を更新
   * @returns CharacterEquipmentResponse Successful Response
   * @throws ApiError
   */
  static updateEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdPatch({
    characterId,
    equipmentId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/equipment/{equipment_id}",
      path: {
        "character_id": characterId,
        "equipment_id": equipmentId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Equipment
   * 装備を解除（ドキュメント削除）
   * @returns void
   * @throws ApiError
   */
  static deleteEquipmentApiV1CharactersCharacterIdEquipmentEquipmentIdDelete({
    characterId,
    equipmentId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/equipment/{equipment_id}",
      path: {
        "character_id": characterId,
        "equipment_id": equipmentId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterInstancesService.ts
var CharacterInstancesService = class {
  /**
   * Create Character Instance
   * @returns CharacterInstanceResponse Successful Response
   * @throws ApiError
   */
  static createCharacterInstanceApiV1MarketplaceCharacterInstancesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/character-instances",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Character Instances
   * @returns CharacterInstanceListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterInstancesApiV1MarketplaceCharacterInstancesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-instances",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Instance
   * @returns CharacterInstanceResponse Successful Response
   * @throws ApiError
   */
  static getCharacterInstanceApiV1MarketplaceCharacterInstancesInstanceIdGet({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Instance
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterInstanceApiV1MarketplaceCharacterInstancesInstanceIdDelete({
    instanceId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/character-instances/{instance_id}",
      path: {
        "instance_id": instanceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterInventoryService.ts
var CharacterInventoryService = class {
  /**
   * List Character Inventory
   * キャラクターの所持品一覧を取得
   * @returns CharacterInventoryListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterInventoryApiV1CharactersCharacterIdInventoryGet({
    characterId,
    itemCategory,
    accessibleOnly = false
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/inventory",
      path: {
        "character_id": characterId
      },
      query: {
        "item_category": itemCategory,
        "accessible_only": accessibleOnly
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Character Inventory Item
   * キャラクターの所持品を作成
   * @returns CharacterInventoryResponse Successful Response
   * @throws ApiError
   */
  static createCharacterInventoryItemApiV1CharactersCharacterIdInventoryPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/inventory",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Inventory Item
   * キャラクターの特定の所持品を取得
   * @returns CharacterInventoryResponse Successful Response
   * @throws ApiError
   */
  static getCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdGet({
    characterId,
    inventoryId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/inventory/{inventory_id}",
      path: {
        "character_id": characterId,
        "inventory_id": inventoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Inventory Item
   * キャラクターの所持品を更新
   * @returns CharacterInventoryResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdPatch({
    characterId,
    inventoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/inventory/{inventory_id}",
      path: {
        "character_id": characterId,
        "inventory_id": inventoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Inventory Item
   * キャラクターの所持品を削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterInventoryItemApiV1CharactersCharacterIdInventoryInventoryIdDelete({
    characterId,
    inventoryId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/inventory/{inventory_id}",
      path: {
        "character_id": characterId,
        "inventory_id": inventoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Sync From Entitlement
   * Entitlementから CharacterInventory を作成（デフォルトアクション付き）
   * @returns CharacterInventoryResponse Successful Response
   * @throws ApiError
   */
  static syncFromEntitlementApiV1CharactersCharacterIdInventorySyncFromEntitlementPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/inventory/sync-from-entitlement",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterMotionsService.ts
var CharacterMotionsService = class {
  /**
   * List Character Motions
   * キャラクターのモーション設定一覧を取得
   * @returns CharacterMotionListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterMotionsApiV1CharactersCharacterIdMotionsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/motions",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Character Motion
   * キャラクターのモーション設定を作成
   * @returns CharacterMotionResponse Successful Response
   * @throws ApiError
   */
  static createCharacterMotionApiV1CharactersCharacterIdMotionsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/motions",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Motion Ids
   * キャラクターが持つmotion_idのリストを取得
   * @returns CharacterMotionIdsResponse Successful Response
   * @throws ApiError
   */
  static getCharacterMotionIdsApiV1CharactersCharacterIdMotionsIdsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/motions/ids",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Motion
   * キャラクターの特定のモーション設定を取得
   * @returns CharacterMotionResponse Successful Response
   * @throws ApiError
   */
  static getCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdGet({
    characterId,
    motionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/motions/{motion_id}",
      path: {
        "character_id": characterId,
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Motion
   * キャラクターのモーション設定を更新
   * @returns CharacterMotionResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdPut({
    characterId,
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/motions/{motion_id}",
      path: {
        "character_id": characterId,
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Motion
   * キャラクターのモーション設定を削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterMotionApiV1CharactersCharacterIdMotionsMotionIdDelete({
    characterId,
    motionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/motions/{motion_id}",
      path: {
        "character_id": characterId,
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Create Character Motions
   * キャラクターのモーション設定を一括作成
   * @returns CharacterMotionListResponse Successful Response
   * @throws ApiError
   */
  static batchCreateCharacterMotionsApiV1CharactersCharacterIdMotionsBatchPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/motions/batch",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterPersonalityParamsService.ts
var CharacterPersonalityParamsService = class {
  /**
   * List Character Personality Params
   * キャラクターのパーソナリティパラメータ一覧を取得
   * @returns CharacterPersonalityParamsListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/personality-params",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Character Personality Params
   * キャラクターのパーソナリティパラメータを作成
   * @returns CharacterPersonalityParamsResponse Successful Response
   * @throws ApiError
   */
  static createCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/personality-params",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Personality Params
   * キャラクターの特定のパーソナリティパラメータを取得
   * @returns CharacterPersonalityParamsResponse Successful Response
   * @throws ApiError
   */
  static getCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyGet({
    characterId,
    key
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/personality-params/{key}",
      path: {
        "character_id": characterId,
        "key": key
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Personality Params
   * キャラクターのパーソナリティパラメータを更新
   * @returns CharacterPersonalityParamsResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyPatch({
    characterId,
    key,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/personality-params/{key}",
      path: {
        "character_id": characterId,
        "key": key
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Personality Params
   * キャラクターのパーソナリティパラメータを削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterPersonalityParamsApiV1CharactersCharacterIdPersonalityParamsKeyDelete({
    characterId,
    key
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/personality-params/{key}",
      path: {
        "character_id": characterId,
        "key": key
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterPhysicalIdentityService.ts
var CharacterPhysicalIdentityService = class {
  /**
   * Create Physical Identity
   * キャラクターの身体的自認情報を作成
   * @returns CharacterPhysicalIdentityResponse Successful Response
   * @throws ApiError
   */
  static createPhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/physical_identity",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Physical Identity
   * キャラクターの身体的自認情報を取得
   * @returns CharacterPhysicalIdentityResponse Successful Response
   * @throws ApiError
   */
  static getPhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/physical_identity",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Physical Identity
   * キャラクターの身体的自認情報を更新
   * @returns CharacterPhysicalIdentityResponse Successful Response
   * @throws ApiError
   */
  static updatePhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/physical_identity",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Physical Identity
   * キャラクターの身体的自認情報を削除
   * @returns void
   * @throws ApiError
   */
  static deletePhysicalIdentityApiV1CharactersCharacterIdPhysicalIdentityDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/physical_identity",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterPreferencesService.ts
var CharacterPreferencesService = class {
  /**
   * Create Preferences
   * キャラクターの好み・嗜好情報を作成
   * @returns CharacterPreferencesResponse Successful Response
   * @throws ApiError
   */
  static createPreferencesApiV1CharactersCharacterIdPreferencesPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/preferences",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Preferences
   * キャラクターの好み・嗜好情報を取得
   * @returns CharacterPreferencesResponse Successful Response
   * @throws ApiError
   */
  static getPreferencesApiV1CharactersCharacterIdPreferencesGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/preferences",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Preferences
   * キャラクターの好み・嗜好情報を更新
   * @returns CharacterPreferencesResponse Successful Response
   * @throws ApiError
   */
  static updatePreferencesApiV1CharactersCharacterIdPreferencesPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/preferences",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Preferences
   * キャラクターの好み・嗜好情報を削除
   * @returns void
   * @throws ApiError
   */
  static deletePreferencesApiV1CharactersCharacterIdPreferencesDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/preferences",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterProfileGenerationService.ts
var CharacterProfileGenerationService = class {
  /**
   * キャラクタープロファイルを一括生成
   * キャラクターの関連情報からプロファイル情報を一括生成します。save=trueで各サブコレクションに保存します。
   * @returns GenerateProfileResponse Successful Response
   * @throws ApiError
   */
  static generateCharacterProfileApiV1CharactersCharacterIdGenerateProfilePost({
    characterId,
    requestBody,
    save = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/generate-profile",
      path: {
        "character_id": characterId
      },
      query: {
        "save": save
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharactersService.ts
var CharactersService = class {
  /**
   * Create Character
   * キャラクターを新規作成
   *
   * multipart/form-data 形式でリクエストを受け付けます。
   * 複雑なフィールド（tags, locales, emotional_params等）はJSON文字列で送信してください。
   * @returns CharacterResponse Successful Response
   * @throws ApiError
   */
  static createCharacterApiV1CharactersPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Characters
   * キャラクター一覧を取得（カーソルベースページネーション）
   * @returns CharacterListResponse Successful Response
   * @throws ApiError
   */
  static listCharactersApiV1CharactersGet({
    filterByOwner = false,
    publishScope,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters",
      query: {
        "filter_by_owner": filterByOwner,
        "publish_scope": publishScope,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character
   * キャラクター情報を取得
   * @returns CharacterResponse Successful Response
   * @throws ApiError
   */
  static getCharacterApiV1CharactersCharacterIdGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character
   * キャラクター情報を更新
   * @returns CharacterResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterApiV1CharactersCharacterIdPatch({
    characterId,
    formData
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}",
      path: {
        "character_id": characterId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character
   * キャラクターを削除
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterApiV1CharactersCharacterIdDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Duplicate Character
   * キャラクターを複製（chat_logs以外のサブコレクションをコピー）
   * @returns DuplicateResponse Successful Response
   * @throws ApiError
   */
  static duplicateCharacterApiV1CharactersCharacterIdDuplicatePost({
    characterId,
    newCharacterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/duplicate",
      path: {
        "character_id": characterId
      },
      query: {
        "new_character_id": newCharacterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Character Ai Usage
   * キャラクターの参照アセットからAI使用レベルをサジェスト
   * @returns CharacterAiUsage Successful Response
   * @throws ApiError
   */
  static suggestCharacterAiUsageApiV1CharactersCharacterIdSuggestAiUsagePost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/suggest-ai-usage",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Characters
   * 複数のキャラクターを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetCharactersApiV1CharactersBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Auto Create Character
   * キャラクターを自動生成
   * @returns CharacterResponse Successful Response
   * @throws ApiError
   */
  static autoCreateCharacterApiV1CharactersAutoCreatePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/auto-create",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CharacterTemplatesService.ts
var CharacterTemplatesService = class {
  /**
   * Create Character Template
   * @returns CharacterTemplateResponse Successful Response
   * @throws ApiError
   */
  static createCharacterTemplateApiV1MarketplaceCharacterTemplatesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/character-templates",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Character Templates
   * @returns CharacterTemplateListResponse Successful Response
   * @throws ApiError
   */
  static listCharacterTemplatesApiV1MarketplaceCharacterTemplatesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-templates",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character Template
   * @returns CharacterTemplateResponse Successful Response
   * @throws ApiError
   */
  static getCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdGet({
    templateId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Character Template
   * @returns CharacterTemplateResponse Successful Response
   * @throws ApiError
   */
  static updateCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdPatch({
    templateId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/character-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Character Template
   * @returns void
   * @throws ApiError
   */
  static deleteCharacterTemplateApiV1MarketplaceCharacterTemplatesTemplateIdDelete({
    templateId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/character-templates/{template_id}",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Publish Character Template Version
   * @returns CharacterTemplateVersionResponse Successful Response
   * @throws ApiError
   */
  static publishCharacterTemplateVersionApiV1MarketplaceCharacterTemplatesTemplateIdVersionsPost({
    templateId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/character-templates/{template_id}/versions",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Character Template Versions
   * @returns CharacterTemplateVersionResponse Successful Response
   * @throws ApiError
   */
  static listCharacterTemplateVersionsApiV1MarketplaceCharacterTemplatesTemplateIdVersionsGet({
    templateId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/character-templates/{template_id}/versions",
      path: {
        "template_id": templateId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/ContentProtectionService.ts
var ContentProtectionService = class {
  /**
   * Get Key
   * 復号鍵を取得する（Firebase認証必須・レート制限あり）
   *
   * クライアントはこのエンドポイントからper-asset鍵を取得し、
   * ダウンロードした保護済みファイルをクライアント側で復号する。
   * nonceはファイルの先頭12バイトに埋め込まれているため、nonce_prefixは不要。
   * @returns KeyResponse Successful Response
   * @throws ApiError
   */
  static getKeyApiV1ContentProtectionKeysKeyIdGet({
    keyId,
    assetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/content-protection/keys/{key_id}",
      path: {
        "key_id": keyId
      },
      query: {
        "asset_id": assetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/CreatorsService.ts
var CreatorsService = class {
  /**
   * Create Creator
   * クリエイターを作成
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static createCreatorApiV1CreatorsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/creators",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Creator
   * クリエイターを取得
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static getCreatorApiV1CreatorsCreatorIdGet({
    creatorId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/creators/{creator_id}",
      path: {
        "creator_id": creatorId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Creator
   * クリエイターを更新
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static updateCreatorApiV1CreatorsCreatorIdPatch({
    creatorId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/creators/{creator_id}",
      path: {
        "creator_id": creatorId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Creator
   * クリエイターを削除
   * @returns void
   * @throws ApiError
   */
  static deleteCreatorApiV1CreatorsCreatorIdDelete({
    creatorId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/creators/{creator_id}",
      path: {
        "creator_id": creatorId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Creator By User Id
   * ユーザーIDでクリエイターを取得
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static getCreatorByUserIdApiV1CreatorsByUserUserIdGet({
    userId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/creators/by-user/{user_id}",
      path: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Creator By Group Id
   * グループIDでクリエイターを取得
   * @returns CreatorResponse Successful Response
   * @throws ApiError
   */
  static getCreatorByGroupIdApiV1CreatorsByGroupGroupIdGet({
    groupId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/creators/by-group/{group_id}",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/DefaultService.ts
var DefaultService = class {
  /**
   * Healthcheck
   * @returns any Successful Response
   * @throws ApiError
   */
  static healthcheckHealthcheckGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/healthcheck"
    });
  }
  /**
   * Root
   * @returns any Successful Response
   * @throws ApiError
   */
  static rootGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/"
    });
  }
};

// src/generated/services/EmotionConfigService.ts
var EmotionConfigService = class {
  /**
   * Get Emotion Config
   * EmotionConfigを取得
   * @returns EmotionConfigResponse Successful Response
   * @throws ApiError
   */
  static getEmotionConfigApiV1EmotionConfigGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/emotion-config"
    });
  }
  /**
   * Update Emotion Config
   * EmotionConfigを更新
   * @returns EmotionConfigResponse Successful Response
   * @throws ApiError
   */
  static updateEmotionConfigApiV1EmotionConfigPut({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/emotion-config",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Emotion Config
   * EmotionConfigを作成
   * @returns EmotionConfigResponse Successful Response
   * @throws ApiError
   */
  static createEmotionConfigApiV1EmotionConfigPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotion-config",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Emotion Config
   * EmotionConfigを削除
   * @returns void
   * @throws ApiError
   */
  static deleteEmotionConfigApiV1EmotionConfigDelete() {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/emotion-config"
    });
  }
  /**
   * Init Mood Verbalizer
   * デフォルトのMoodVerbalizerConfigをEmotionConfigに追加
   * @returns EmotionConfigResponse Successful Response
   * @throws ApiError
   */
  static initMoodVerbalizerApiV1EmotionConfigMoodVerbalizerInitPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotion-config/mood-verbalizer/init"
    });
  }
  /**
   * Resolve Expression
   * 表現解決: emotion_idから利用可能な表現を解決
   * @returns ResolveExpressionResponse Successful Response
   * @throws ApiError
   */
  static resolveExpressionApiV1EmotionConfigResolvePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotion-config/resolve",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionFormatsBlendshapeService.ts
var EmotionFormatsBlendshapeService = class {
  /**
   * Create Avatar Blend Shape
   * アバターの表現にBlendShapeフォーマットを追加
   * @returns BlendShapeExpressionData_Output Successful Response
   * @throws ApiError
   */
  static createAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapePost({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/blend_shape",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Blend Shape
   * アバターの表現のBlendShapeフォーマットを取得
   * @returns BlendShapeExpressionData_Output Successful Response
   * @throws ApiError
   */
  static getAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapeGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/blend_shape",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Blend Shape
   * アバターの表現のBlendShapeフォーマットを更新
   * @returns BlendShapeExpressionData_Output Successful Response
   * @throws ApiError
   */
  static updateAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapePatch({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/blend_shape",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Blend Shape
   * アバターの表現のBlendShapeフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarBlendShapeApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsBlendShapeDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/blend_shape",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionFormatsFaceIconService.ts
var EmotionFormatsFaceIconService = class {
  /**
   * Create Avatar Face Icon
   * アバターの表現にFaceIconフォーマットを追加（アセットID参照）
   * @returns FaceIconExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconPost({
    avatarId,
    avatarExpressionId,
    compositeImageAssetId,
    bodyImageAssetId,
    eyelidImageAssetId,
    mouthImageAssetId,
    holdDuration = 2,
    blockMouth = false,
    blockBlink = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "composite_image_asset_id": compositeImageAssetId,
        "body_image_asset_id": bodyImageAssetId,
        "eyelid_image_asset_id": eyelidImageAssetId,
        "mouth_image_asset_id": mouthImageAssetId,
        "hold_duration": holdDuration,
        "block_mouth": blockMouth,
        "block_blink": blockBlink
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Face Icon
   * アバターの表現のFaceIconフォーマットを取得
   * @returns FaceIconExpressionData Successful Response
   * @throws ApiError
   */
  static getAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Face Icon
   * アバターの表現のFaceIconフォーマットを更新（アセットID参照）
   * @returns FaceIconExpressionData Successful Response
   * @throws ApiError
   */
  static updateAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconPatch({
    avatarId,
    avatarExpressionId,
    compositeImageAssetId,
    bodyImageAssetId,
    eyelidImageAssetId,
    mouthImageAssetId,
    holdDuration,
    blockMouth,
    blockBlink
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "composite_image_asset_id": compositeImageAssetId,
        "body_image_asset_id": bodyImageAssetId,
        "eyelid_image_asset_id": eyelidImageAssetId,
        "mouth_image_asset_id": mouthImageAssetId,
        "hold_duration": holdDuration,
        "block_mouth": blockMouth,
        "block_blink": blockBlink
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Face Icon
   * アバターの表現のFaceIconフォーマットを削除（asset_id参照のみ削除、Asset自体は削除しない）
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarFaceIconApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Face Icon With Files
   * アバターの表現にFaceIconフォーマットを追加（画像ファイルアップロードしてアセット作成も行う統合版）
   * @returns FaceIconExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarFaceIconWithFilesApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsFaceIconFileUploadPost({
    avatarId,
    avatarExpressionId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/face_icon/file_upload",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionFormatsGlbService.ts
var EmotionFormatsGlbService = class {
  /**
   * Create Avatar Glb Expression
   * アバターの表現にGLBフォーマットを追加
   * @returns GLBExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbPost({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Glb Expression
   * アバターの表現のGLBフォーマットを取得
   * @returns GLBExpressionData Successful Response
   * @throws ApiError
   */
  static getAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Glb Expression
   * アバターの表現のGLBフォーマットを更新
   * @returns GLBExpressionData Successful Response
   * @throws ApiError
   */
  static updateAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbPatch({
    avatarId,
    avatarExpressionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Glb Expression
   * アバターの表現のGLBフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarGlbExpressionApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsGlbDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionFormatsSpriteService.ts
var EmotionFormatsSpriteService = class {
  /**
   * Create Avatar Sprite
   * アバターの表現にSpriteフォーマットを追加（アセットID参照）
   * @returns SpriteExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpritePost({
    avatarId,
    avatarExpressionId,
    posture,
    compositeImageAssetId,
    bodyImageAssetId,
    eyelidImageAssetId,
    mouthImageAssetId,
    holdDuration = 2,
    blockMouth = false,
    blockBlink = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "posture": posture,
        "composite_image_asset_id": compositeImageAssetId,
        "body_image_asset_id": bodyImageAssetId,
        "eyelid_image_asset_id": eyelidImageAssetId,
        "mouth_image_asset_id": mouthImageAssetId,
        "hold_duration": holdDuration,
        "block_mouth": blockMouth,
        "block_blink": blockBlink
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Sprite
   * アバターの表現のSpriteフォーマットを取得
   * @returns SpriteExpressionData Successful Response
   * @throws ApiError
   */
  static getAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteGet({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Sprite
   * アバターの表現のSpriteフォーマットを更新（アセットID参照）
   * @returns SpriteExpressionData Successful Response
   * @throws ApiError
   */
  static updateAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpritePatch({
    avatarId,
    avatarExpressionId,
    posture,
    compositeImageAssetId,
    bodyImageAssetId,
    eyelidImageAssetId,
    mouthImageAssetId,
    holdDuration,
    blockMouth,
    blockBlink
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      query: {
        "posture": posture,
        "composite_image_asset_id": compositeImageAssetId,
        "body_image_asset_id": bodyImageAssetId,
        "eyelid_image_asset_id": eyelidImageAssetId,
        "mouth_image_asset_id": mouthImageAssetId,
        "hold_duration": holdDuration,
        "block_mouth": blockMouth,
        "block_blink": blockBlink
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Sprite
   * アバターの表現のSpriteフォーマットを削除（asset_id参照のみ削除、Asset自体は削除しない）
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarSpriteApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteDelete({
    avatarId,
    avatarExpressionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Avatar Sprite With Files
   * アバターの表現にSpriteフォーマットを追加（画像ファイルアップロードしてアセット作成も行う統合版）
   * @returns SpriteExpressionData Successful Response
   * @throws ApiError
   */
  static createAvatarSpriteWithFilesApiV1AvatarsAvatarIdExpressionsAvatarExpressionIdFormatsSpriteFileUploadPost({
    avatarId,
    avatarExpressionId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/expressions/{avatar_expression_id}/formats/sprite/file_upload",
      path: {
        "avatar_id": avatarId,
        "avatar_expression_id": avatarExpressionId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EmotionsService.ts
var EmotionsService = class {
  /**
   * List Emotions
   * 感情の一覧取得・検索
   * @returns EmotionListResponse Successful Response
   * @throws ApiError
   */
  static listEmotionsApiV1EmotionsGet({
    q,
    dataSource,
    locale,
    prefer = "official",
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/emotions",
      query: {
        "q": q,
        "data_source": dataSource,
        "locale": locale,
        "prefer": prefer,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Emotion
   * 感情を作成
   * @returns EmotionResponse Successful Response
   * @throws ApiError
   */
  static createEmotionApiV1EmotionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Emotion
   * 感情を部分更新（管理者のみ）
   * @returns EmotionResponse Successful Response
   * @throws ApiError
   */
  static updateEmotionApiV1EmotionsEmotionIdPatch({
    emotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/emotions/{emotion_id}",
      path: {
        "emotion_id": emotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Emotion
   * 感情を削除（管理者のみ）
   * @returns void
   * @throws ApiError
   */
  static deleteEmotionApiV1EmotionsEmotionIdDelete({
    emotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/emotions/{emotion_id}",
      path: {
        "emotion_id": emotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Emotion By Id
   * IDで感情を取得
   * @returns EmotionResponse Successful Response
   * @throws ApiError
   */
  static getEmotionByIdApiV1EmotionsByIdEmotionIdGet({
    emotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/emotions/by-id/{emotion_id}",
      path: {
        "emotion_id": emotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Emotion By Name
   * 名前で感情を完全一致検索
   * @returns EmotionResponse Successful Response
   * @throws ApiError
   */
  static getEmotionByNameApiV1EmotionsByNameGet({
    name,
    locale,
    prefer = "official"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/emotions/by-name",
      query: {
        "name": name,
        "locale": locale,
        "prefer": prefer
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Emotions By Text
   * テキストから感情を提案（LLM使用）
   * @returns EmotionSuggestionResponse Successful Response
   * @throws ApiError
   */
  static suggestEmotionsByTextApiV1EmotionsSuggestByTextPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/suggest-by-text",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Find Nearest Emotions
   * VAD値で最近傍の感情を検索
   * @returns EmotionNeighborResponse Successful Response
   * @throws ApiError
   */
  static findNearestEmotionsApiV1EmotionsNearestPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/nearest",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Emotion Alias
   * 感情にエイリアスを追加
   * @returns SuccessResponse Successful Response
   * @throws ApiError
   */
  static addEmotionAliasApiV1EmotionsEmotionIdAliasesPost({
    emotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/{emotion_id}/aliases",
      path: {
        "emotion_id": emotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Remove Emotion Alias
   * 感情からエイリアスを削除
   * @returns void
   * @throws ApiError
   */
  static removeEmotionAliasApiV1EmotionsEmotionIdAliasesDelete({
    emotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/emotions/{emotion_id}/aliases",
      path: {
        "emotion_id": emotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Emotion From Text
   * テキストから感情を作成（VAD指定またはLLM推定）
   * @returns CreateFromTextResponse Successful Response
   * @throws ApiError
   */
  static createEmotionFromTextApiV1EmotionsCreateFromTextPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/create-from-text",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Emotions
   * 複数の感情を一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetEmotionsApiV1EmotionsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/emotions/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/EquipmentMotionOverlaysService.ts
var EquipmentMotionOverlaysService = class {
  /**
   * Create Overlay
   * モーションオーバーレイを作成
   * @returns EquipmentMotionOverlayResponse Successful Response
   * @throws ApiError
   */
  static createOverlayApiV1AvatarsAvatarIdMotionOverlaysPost({
    avatarId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays",
      path: {
        "avatar_id": avatarId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Overlays
   * モーションオーバーレイ一覧を取得
   * @returns EquipmentMotionOverlayListResponse Successful Response
   * @throws ApiError
   */
  static listOverlaysApiV1AvatarsAvatarIdMotionOverlaysGet({
    avatarId,
    outfitId,
    accessoryId,
    hairStyleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays",
      path: {
        "avatar_id": avatarId
      },
      query: {
        "outfit_id": outfitId,
        "accessory_id": accessoryId,
        "hair_style_id": hairStyleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Overlay
   * モーションオーバーレイを1件取得
   * @returns EquipmentMotionOverlayResponse Successful Response
   * @throws ApiError
   */
  static getOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdGet({
    avatarId,
    overlayId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays/{overlay_id}",
      path: {
        "avatar_id": avatarId,
        "overlay_id": overlayId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Overlay
   * モーションオーバーレイを更新
   * @returns EquipmentMotionOverlayResponse Successful Response
   * @throws ApiError
   */
  static updateOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdPatch({
    avatarId,
    overlayId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays/{overlay_id}",
      path: {
        "avatar_id": avatarId,
        "overlay_id": overlayId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Overlay
   * モーションオーバーレイを削除
   * @returns void
   * @throws ApiError
   */
  static deleteOverlayApiV1AvatarsAvatarIdMotionOverlaysOverlayIdDelete({
    avatarId,
    overlayId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motion-overlays/{overlay_id}",
      path: {
        "avatar_id": avatarId,
        "overlay_id": overlayId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GaussianSplatAssetsService.ts
var GaussianSplatAssetsService = class {
  /**
   * Create Gaussian Splat Asset
   * Gaussian Splatアセットを作成（SPZ/PLY直接アップロード）
   *
   * SPZ/PLYファイルを直接アップロード。変換不要なので即完了。
   * splat_formatを省略するとファイル名の拡張子から自動判定。
   * @returns GaussianSplatAssetResponse Successful Response
   * @throws ApiError
   */
  static createGaussianSplatAssetApiV1GaussianSplatAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/gaussian-splat-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Gaussian Splat Asset Version
   * 既存Gaussian Splatアセットに新バージョンを追加
   * @returns GaussianSplatAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addGaussianSplatAssetVersionApiV1GaussianSplatAssetsGsIdVersionsPost({
    gsId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/versions",
      path: {
        "gs_id": gsId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Gaussian Splat Asset Versions
   * Gaussian Splatアセットのバージョン一覧を取得
   * @returns GaussianSplatAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listGaussianSplatAssetVersionsApiV1GaussianSplatAssetsGsIdVersionsGet({
    gsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/versions",
      path: {
        "gs_id": gsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Gaussian Splat Assets
   * Gaussian Splatアセットを検索
   * @returns GaussianSplatAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchGaussianSplatAssetsApiV1GaussianSplatAssetsSearchGet({
    ownerId,
    modelName,
    modelerName,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/search",
      query: {
        "owner_id": ownerId,
        "model_name": modelName,
        "modeler_name": modelerName,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Gaussian Splat Assets
   * 複数のGaussian Splatアセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetGaussianSplatAssetsApiV1GaussianSplatAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/gaussian-splat-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Gaussian Splat Asset
   * Gaussian Splatアセットの詳細情報を取得
   * @returns GaussianSplatAssetResponse Successful Response
   * @throws ApiError
   */
  static getGaussianSplatAssetApiV1GaussianSplatAssetsGsIdGet({
    gsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}",
      path: {
        "gs_id": gsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Gaussian Splat Asset
   * Gaussian Splatアセットのメタデータを更新
   * @returns GaussianSplatAssetResponse Successful Response
   * @throws ApiError
   */
  static updateGaussianSplatAssetApiV1GaussianSplatAssetsGsIdPatch({
    gsId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/gaussian-splat-assets/{gs_id}",
      path: {
        "gs_id": gsId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Gaussian Splat Asset
   * Gaussian Splatアセットを削除（参照されている場合は削除不可）
   * @returns void
   * @throws ApiError
   */
  static deleteGaussianSplatAssetApiV1GaussianSplatAssetsGsIdDelete({
    gsId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/gaussian-splat-assets/{gs_id}",
      path: {
        "gs_id": gsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Gaussian Splat Asset Version
   * Gaussian Splatアセットの特定バージョンを取得
   * @returns GaussianSplatAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getGaussianSplatAssetVersionApiV1GaussianSplatAssetsGsIdVersionsVersionIdGet({
    gsId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/versions/{version_id}",
      path: {
        "gs_id": gsId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Gaussian Splat File Url
   * Gaussian SplatファイルのダウンロードURL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getGaussianSplatFileUrlApiV1GaussianSplatAssetsGsIdFileGet({
    gsId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/file",
      path: {
        "gs_id": gsId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Gaussian Splat Protected File
   * 保護済みGaussian Splatファイルのダウンロード情報を返す
   *
   * PLY形式: 頂点難読化 + zstd圧縮 + AES-256-GCM暗号化
   * SPZ形式: zstd圧縮 + AES-256-GCM暗号化（難読化なし）
   * @returns ProtectedFileResponse Successful Response
   * @throws ApiError
   */
  static getGaussianSplatProtectedFileApiV1GaussianSplatAssetsGsIdProtectedFileGet({
    gsId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/gaussian-splat-assets/{gs_id}/protected-file",
      path: {
        "gs_id": gsId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GlbAssetsService.ts
var GlbAssetsService = class {
  /**
   * Create Glb Asset
   * GLBアセットを作成（GLB直接アップロード）
   *
   * GLBファイルを直接アップロード。変換不要なので即完了（conversion_status=completed）。
   * @returns GLBAssetResponse Successful Response
   * @throws ApiError
   */
  static createGlbAssetApiV1GlbAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Glb From Gltf
   * glTFファイルからGLBアセットを作成（非同期変換）
   *
   * glTFファイルをアップロードし、バックグラウンドでGLBに変換。
   * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
   * @returns GLBAssetFromSourceResponse Successful Response
   * @throws ApiError
   */
  static createGlbFromGltfApiV1GlbAssetsFromGltfPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/from-gltf",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Glb From Fbx
   * FBXファイルからGLBアセットを作成（非同期変換）
   *
   * FBXファイルをアップロードし、バックグラウンドでGLBに変換。
   * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
   * @returns GLBAssetFromSourceResponse Successful Response
   * @throws ApiError
   */
  static createGlbFromFbxApiV1GlbAssetsFromFbxPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/from-fbx",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Glb From Obj
   * OBJファイルからGLBアセットを作成（非同期変換）
   *
   * OBJファイル（+ 任意のMTLファイル）をアップロードし、バックグラウンドでGLBに変換。
   * 即座に202 Acceptedを返し、変換状態はconversion_status=processingで管理。
   * @returns GLBAssetFromSourceResponse Successful Response
   * @throws ApiError
   */
  static createGlbFromObjApiV1GlbAssetsFromObjPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/from-obj",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Glb Asset Version
   * 既存GLBアセットに新バージョンを追加（GLB直接）
   * @returns GLBAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addGlbAssetVersionApiV1GlbAssetsGlbIdVersionsPost({
    glbId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/{glb_id}/versions",
      path: {
        "glb_id": glbId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Glb Asset Versions
   * GLBアセットのバージョン一覧を取得
   * @returns GLBAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listGlbAssetVersionsApiV1GlbAssetsGlbIdVersionsGet({
    glbId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/versions",
      path: {
        "glb_id": glbId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Glb Assets
   * GLBアセットを検索
   * @returns GLBAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchGlbAssetsApiV1GlbAssetsSearchGet({
    ownerId,
    modelName,
    modelerName,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/search",
      query: {
        "owner_id": ownerId,
        "model_name": modelName,
        "modeler_name": modelerName,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Glb Assets
   * 複数のGLBアセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetGlbAssetsApiV1GlbAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/glb-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Asset
   * GLBアセットの詳細情報を取得
   * @returns GLBAssetResponse Successful Response
   * @throws ApiError
   */
  static getGlbAssetApiV1GlbAssetsGlbIdGet({
    glbId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}",
      path: {
        "glb_id": glbId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Glb Asset
   * GLBアセットのメタデータを更新
   * @returns GLBAssetResponse Successful Response
   * @throws ApiError
   */
  static updateGlbAssetApiV1GlbAssetsGlbIdPatch({
    glbId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/glb-assets/{glb_id}",
      path: {
        "glb_id": glbId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Glb Asset
   * GLBアセットを削除（参照されている場合は削除不可）
   * @returns void
   * @throws ApiError
   */
  static deleteGlbAssetApiV1GlbAssetsGlbIdDelete({
    glbId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/glb-assets/{glb_id}",
      path: {
        "glb_id": glbId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Asset Version
   * GLBアセットの特定バージョンを取得
   * @returns GLBAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getGlbAssetVersionApiV1GlbAssetsGlbIdVersionsVersionIdGet({
    glbId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/versions/{version_id}",
      path: {
        "glb_id": glbId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb File Url
   * GLBファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getGlbFileUrlApiV1GlbAssetsGlbIdFileGet({
    glbId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/file",
      path: {
        "glb_id": glbId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Original File Url
   * 原本ファイル（FBX/glTF/OBJ）のダウンロード用一時URL（Signed URL）を返す
   *
   * GLB直接アップロードの場合は404を返す（原本は存在しない）。
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getGlbOriginalFileUrlApiV1GlbAssetsGlbIdOriginalFileGet({
    glbId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/original-file",
      path: {
        "glb_id": glbId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Glb Protected File
   * 保護済みGLBファイルのダウンロード情報を返す
   *
   * ファイルはメッシュ難読化 + zstd圧縮 + AES-256-GCM暗号化済み。
   * @returns ProtectedFileResponse Successful Response
   * @throws ApiError
   */
  static getGlbProtectedFileApiV1GlbAssetsGlbIdProtectedFileGet({
    glbId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/glb-assets/{glb_id}/protected-file",
      path: {
        "glb_id": glbId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GroupBansService.ts
var GroupBansService = class {
  /**
   * Ban User
   * ユーザーをBAN（ADMIN以上）
   * @returns GroupBanResponse Successful Response
   * @throws ApiError
   */
  static banUserApiV1GroupsGroupIdBansPost({
    groupId,
    requestBody,
    bannedBy = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/bans",
      path: {
        "group_id": groupId
      },
      query: {
        "banned_by": bannedBy
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Bans
   * BANリスト（ADMIN以上）
   * @returns GroupBanListResponse Successful Response
   * @throws ApiError
   */
  static listBansApiV1GroupsGroupIdBansGet({
    groupId,
    userId = ""
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/{group_id}/bans",
      path: {
        "group_id": groupId
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Unban User
   * BAN解除（ADMIN以上）
   * @returns void
   * @throws ApiError
   */
  static unbanUserApiV1GroupsGroupIdBansTargetUserIdDelete({
    groupId,
    targetUserId,
    userId = ""
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/groups/{group_id}/bans/{target_user_id}",
      path: {
        "group_id": groupId,
        "target_user_id": targetUserId
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GroupInvitesService.ts
var GroupInvitesService = class {
  /**
   * Create Invite
   * 招待を作成（ADMIN以上）
   * @returns GroupInviteResponse Successful Response
   * @throws ApiError
   */
  static createInviteApiV1GroupsGroupIdInvitesPost({
    groupId,
    requestBody,
    createdBy = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/invites",
      path: {
        "group_id": groupId
      },
      query: {
        "created_by": createdBy
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Invites
   * 招待一覧（ADMIN以上）
   * @returns GroupInviteListResponse Successful Response
   * @throws ApiError
   */
  static listInvitesApiV1GroupsGroupIdInvitesGet({
    groupId,
    userId = ""
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/{group_id}/invites",
      path: {
        "group_id": groupId
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Revoke Invite
   * 招待を取消（ADMIN以上）
   * @returns void
   * @throws ApiError
   */
  static revokeInviteApiV1GroupsGroupIdInvitesInviteIdDelete({
    groupId,
    inviteId,
    userId = ""
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/groups/{group_id}/invites/{invite_id}",
      path: {
        "group_id": groupId,
        "invite_id": inviteId
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Join By Token
   * 招待トークンでグループに参加
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static joinByTokenApiV1GroupsJoinByTokenTokenPost({
    token,
    userId = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/join-by-token/{token}",
      path: {
        "token": token
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GroupJoinRequestsService.ts
var GroupJoinRequestsService = class {
  /**
   * List Join Requests
   * 参加申請一覧（ADMIN以上）
   * @returns GroupJoinRequestListResponse Successful Response
   * @throws ApiError
   */
  static listJoinRequestsApiV1GroupsGroupIdJoinRequestsGet({
    groupId,
    userId = "",
    status
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/{group_id}/join-requests",
      path: {
        "group_id": groupId
      },
      query: {
        "user_id": userId,
        "status": status
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Approve Join Request
   * 参加申請を承認（ADMIN以上）
   * @returns GroupJoinRequestResponse Successful Response
   * @throws ApiError
   */
  static approveJoinRequestApiV1GroupsGroupIdJoinRequestsRequestIdApprovePost({
    groupId,
    requestId,
    userId = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/join-requests/{request_id}/approve",
      path: {
        "group_id": groupId,
        "request_id": requestId
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Reject Join Request
   * 参加申請を拒否（ADMIN以上）
   * @returns GroupJoinRequestResponse Successful Response
   * @throws ApiError
   */
  static rejectJoinRequestApiV1GroupsGroupIdJoinRequestsRequestIdRejectPost({
    groupId,
    requestId,
    userId = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/join-requests/{request_id}/reject",
      path: {
        "group_id": groupId,
        "request_id": requestId
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/GroupsService.ts
var GroupsService = class {
  /**
   * Create Group
   * グループを作成
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static createGroupApiV1GroupsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Group
   * グループを取得
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static getGroupApiV1GroupsGroupIdGet({
    groupId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/{group_id}",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Group
   * グループを更新
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static updateGroupApiV1GroupsGroupIdPatch({
    groupId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/groups/{group_id}",
      path: {
        "group_id": groupId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Group
   * グループを削除
   * @returns void
   * @throws ApiError
   */
  static deleteGroupApiV1GroupsGroupIdDelete({
    groupId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/groups/{group_id}",
      path: {
        "group_id": groupId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Groups By Member
   * メンバーIDで所属グループを取得
   * @returns GroupListResponse Successful Response
   * @throws ApiError
   */
  static listGroupsByMemberApiV1GroupsByMemberMemberIdGet({
    memberId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/groups/by-member/{member_id}",
      path: {
        "member_id": memberId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Member
   * グループにメンバーを追加
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static addMemberApiV1GroupsGroupIdMembersPost({
    groupId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/members",
      path: {
        "group_id": groupId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Remove Member
   * グループからメンバーを削除（キック）
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static removeMemberApiV1GroupsGroupIdMembersMemberIdDelete({
    groupId,
    memberId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/groups/{group_id}/members/{member_id}",
      path: {
        "group_id": groupId,
        "member_id": memberId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Join Group
   * グループに参加（OPENの場合は即参加、APPROVALの場合は申請作成）
   * @returns any Successful Response
   * @throws ApiError
   */
  static joinGroupApiV1GroupsGroupIdJoinPost({
    groupId,
    userId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/join",
      path: {
        "group_id": groupId
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Leave Group
   * グループから自主脱退
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static leaveGroupApiV1GroupsGroupIdLeavePost({
    groupId,
    userId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/groups/{group_id}/leave",
      path: {
        "group_id": groupId
      },
      query: {
        "user_id": userId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Member Role
   * メンバーのロールを変更（OWNERのみ）
   * @returns GroupResponse Successful Response
   * @throws ApiError
   */
  static updateMemberRoleApiV1GroupsGroupIdMembersMemberIdRolePatch({
    groupId,
    memberId,
    requestBody,
    ownerId = ""
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/groups/{group_id}/members/{member_id}/role",
      path: {
        "group_id": groupId,
        "member_id": memberId
      },
      query: {
        "owner_id": ownerId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/HairStylesService.ts
var HairStylesService = class {
  /**
   * Create Hair Style
   * 髪型を作成
   * @returns HairStyleResponse Successful Response
   * @throws ApiError
   */
  static createHairStyleApiV1HairStylesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/hair-styles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Hair Styles
   * 髪型一覧を取得
   * @returns HairStyleListResponse Successful Response
   * @throws ApiError
   */
  static listHairStylesApiV1HairStylesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/hair-styles",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Hair Style
   * 髪型を取得
   * @returns HairStyleResponse Successful Response
   * @throws ApiError
   */
  static getHairStyleApiV1HairStylesHairStyleIdGet({
    hairStyleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/hair-styles/{hair_style_id}",
      path: {
        "hair_style_id": hairStyleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Hair Style
   * 髪型を更新
   * @returns HairStyleResponse Successful Response
   * @throws ApiError
   */
  static updateHairStyleApiV1HairStylesHairStyleIdPatch({
    hairStyleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/hair-styles/{hair_style_id}",
      path: {
        "hair_style_id": hairStyleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Hair Style
   * 髪型を削除
   * @returns void
   * @throws ApiError
   */
  static deleteHairStyleApiV1HairStylesHairStyleIdDelete({
    hairStyleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/hair-styles/{hair_style_id}",
      path: {
        "hair_style_id": hairStyleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/ImageAssetsService.ts
var ImageAssetsService = class {
  /**
   * Create Image Asset
   * 画像アセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * SizeProfileは画像のアスペクト比から自動判定。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns ImageAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createImageAssetApiV1ImageAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/image-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Image Assets
   * 複数の画像アセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetImageAssetsApiV1ImageAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/image-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Image Assets
   * 画像アセットを検索（プロファイルフラグベース）
   *
   * 公開検索では exclude_unreviewed=True（デフォルト）で審査済みアセットのみ取得。
   * 自分のアセット一覧を取得する場合は exclude_unreviewed=False を指定。
   * @returns ImageAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchImageAssetsApiV1ImageAssetsSearchGet({
    ownerId,
    role,
    hasSquare,
    hasPortrait916,
    hasPortrait34,
    hasLandscape169,
    hasLandscape43,
    tagIds,
    minLevel,
    excludeUnreviewed = true,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/search",
      query: {
        "owner_id": ownerId,
        "role": role,
        "has_square": hasSquare,
        "has_portrait_9_16": hasPortrait916,
        "has_portrait_3_4": hasPortrait34,
        "has_landscape_16_9": hasLandscape169,
        "has_landscape_4_3": hasLandscape43,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "exclude_unreviewed": excludeUnreviewed,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Image Asset
   * 画像アセットを取得
   * @returns ImageAssetResponse Successful Response
   * @throws ApiError
   */
  static getImageAssetApiV1ImageAssetsImageIdGet({
    imageId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}",
      path: {
        "image_id": imageId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Image Asset
   * 画像アセットのメタデータを更新
   * @returns ImageAssetResponse Successful Response
   * @throws ApiError
   */
  static updateImageAssetApiV1ImageAssetsImageIdPatch({
    imageId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/image-assets/{image_id}",
      path: {
        "image_id": imageId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Image Asset
   * 画像アセットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteImageAssetApiV1ImageAssetsImageIdDelete({
    imageId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/image-assets/{image_id}",
      path: {
        "image_id": imageId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Image Asset Versions
   * 画像アセットのバージョン一覧を取得
   * @returns ImageAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listImageAssetVersionsApiV1ImageAssetsImageIdVersionsGet({
    imageId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/versions",
      path: {
        "image_id": imageId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Image Asset Version
   * 画像アセットに新しいバージョンを追加
   * @returns ImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addImageAssetVersionApiV1ImageAssetsImageIdVersionsPost({
    imageId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/image-assets/{image_id}/versions",
      path: {
        "image_id": imageId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Image Version
   * 画像アセットの最新バージョンを取得
   * @returns ImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestImageVersionApiV1ImageAssetsImageIdVersionsLatestGet({
    imageId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/versions/latest",
      path: {
        "image_id": imageId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Image Asset Version
   * 画像アセットの特定バージョンを取得
   * @returns ImageAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getImageAssetVersionApiV1ImageAssetsImageIdVersionsVersionIdGet({
    imageId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/versions/{version_id}",
      path: {
        "image_id": imageId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Image Asset Version
   * 画像アセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteImageAssetVersionApiV1ImageAssetsImageIdVersionsVersionIdDelete({
    imageId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/image-assets/{image_id}/versions/{version_id}",
      path: {
        "image_id": imageId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Image File Url
   * 画像ファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * プロファイルと解像度を指定してファイルを取得。
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getImageFileUrlApiV1ImageAssetsImageIdFileGet({
    imageId,
    profile,
    resolution = "high"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/file",
      path: {
        "image_id": imageId
      },
      query: {
        "profile": profile,
        "resolution": resolution
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Image Protected File
   * 透かし入り暗号化画像をバイナリレスポンスで返す
   *
   * ヘッダー X-Key-Id, X-Fingerprint-Id, X-Format を含む。
   * クライアントはこれらのヘッダーを使って復号・管理する。
   * @returns any Successful Response
   * @throws ApiError
   */
  static getImageProtectedFileApiV1ImageAssetsImageIdProtectedFileGet({
    imageId,
    profile,
    resolution = "low"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/image-assets/{image_id}/protected-file",
      path: {
        "image_id": imageId
      },
      query: {
        "profile": profile,
        "resolution": resolution
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Protected Image Files
   * バッチ透かし生成（メモリバジェット制御付き並列処理）
   *
   * 最大100件の画像を一括処理。各画像はbase64エンコードされた暗号化バイト列で返される。
   * @returns ProtectedImageBatchResponse Successful Response
   * @throws ApiError
   */
  static batchGetProtectedImageFilesApiV1ImageAssetsProtectedFilesBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/image-assets/protected-files/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/InternalService.ts
var InternalService = class {
  /**
   * Conversion Callback
   * Converter Serviceからの変換完了通知を受信
   *
   * 変換が成功した場合はGLBファイル情報でバージョンを更新。
   * 失敗した場合はエラー情報を記録。
   * @returns GLBAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static conversionCallbackApiV1InternalConversionCallbackPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/internal/conversion-callback",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/InternalMarketplaceService.ts
var InternalMarketplaceService = class {
  /**
   * Validate Prices
   * billing-gateway からの価格検証
   *
   * 各アイテムの effective_price がサーバー計算結果と一致するか検証する。
   * @returns ValidatePricesResponse Successful Response
   * @throws ApiError
   */
  static validatePricesInternalV1MarketplaceValidatePricesPost({
    requestBody,
    xInternalApiKey = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/internal/v1/marketplace/validate-prices",
      headers: {
        "x-internal-api-key": xInternalApiKey
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Purchase Completed
   * billing-gateway からの購入完了通知
   *
   * 各アイテムについて Entitlement を作成する。
   * avatar/character の場合は追加で Instance も作成する（将来実装）。
   * @returns PurchaseCompletedResponse Successful Response
   * @throws ApiError
   */
  static purchaseCompletedInternalV1MarketplacePurchaseCompletedPost({
    requestBody,
    xInternalApiKey = ""
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/internal/v1/marketplace/purchase-completed",
      headers: {
        "x-internal-api-key": xInternalApiKey
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/KnowledgeGraphService.ts
var KnowledgeGraphService = class {
  /**
   * Get Knowledge Graph
   * @returns KnowledgeGraphResponse Successful Response
   * @throws ApiError
   */
  static getKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/knowledge-graph",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Overwrite Knowledge Graph
   * @returns KnowledgeGraphResponse Successful Response
   * @throws ApiError
   */
  static overwriteKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphPut({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/knowledge-graph",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Rebuild Knowledge Graph
   * 全記憶から knowledge_graph を再構築する。
   * @returns KnowledgeGraphResponse Successful Response
   * @throws ApiError
   */
  static rebuildKnowledgeGraphApiV1CharactersCharacterIdKnowledgeGraphRebuildPost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/knowledge-graph/rebuild",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/LlmModelsService.ts
var LlmModelsService = class {
  /**
   * List All Models
   * 全プロバイダーのモデル一覧を取得
   * @returns AllModelsResponse Successful Response
   * @throws ApiError
   */
  static listAllModelsApiV1LlmModelsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/"
    });
  }
  /**
   * List All Models
   * 全プロバイダーのモデル一覧を取得
   * @returns AllModelsResponse Successful Response
   * @throws ApiError
   */
  static listAllModelsApiV1LlmModelsGet1() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models"
    });
  }
  /**
   * List Models By Provider
   * プロバイダー別モデル一覧を取得
   * @returns ProviderModelsResponse Successful Response
   * @throws ApiError
   */
  static listModelsByProviderApiV1LlmModelsProviderProviderGet({
    provider
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/provider/{provider}",
      path: {
        "provider": provider
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Models By Use Case
   * 用途別モデル一覧を取得（コスト順）
   *
   * use_case: conversation, structured_output, classification,
   * summarization, coding, reasoning, vision_analysis, general
   * @returns ModelInfoResponse Successful Response
   * @throws ApiError
   */
  static listModelsByUseCaseApiV1LlmModelsUseCaseUseCaseGet({
    useCase
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/use-case/{use_case}",
      path: {
        "use_case": useCase
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Model Info
   * 特定モデルの情報を取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static getModelInfoApiV1LlmModelsModelProviderModelIdGet({
    provider,
    modelId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/model/{provider}/{model_id}",
      path: {
        "provider": provider,
        "model_id": modelId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Calculate Model Cost
   * コストを計算
   * @returns CostCalculationResponse Successful Response
   * @throws ApiError
   */
  static calculateModelCostApiV1LlmModelsCalculateCostPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/llm-models/calculate-cost",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Capabilities
   * 利用可能な機能一覧を取得
   * @returns string Successful Response
   * @throws ApiError
   */
  static listCapabilitiesApiV1LlmModelsCapabilitiesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/capabilities"
    });
  }
  /**
   * List Use Cases
   * 利用可能な用途一覧を取得
   * @returns string Successful Response
   * @throws ApiError
   */
  static listUseCasesApiV1LlmModelsUseCasesGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm-models/use-cases"
    });
  }
};

// src/generated/services/MarketplaceBrowseService.ts
var MarketplaceBrowseService = class {
  /**
   * Browse Listings
   * @returns ListingListResponse Successful Response
   * @throws ApiError
   */
  static browseListingsApiV1MarketplaceBrowseListingsGet({
    assetType,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/browse/listings",
      query: {
        "asset_type": assetType,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Browse Listing Bundles
   * @returns ListingBundleListResponse Successful Response
   * @throws ApiError
   */
  static browseListingBundlesApiV1MarketplaceBrowseListingBundlesGet({
    listingBundleType,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/browse/listing-bundles",
      query: {
        "listing_bundle_type": listingBundleType,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceDistributionBundlesService.ts
var MarketplaceDistributionBundlesService = class {
  /**
   * Create Distribution Bundle
   * @returns DistributionBundleResponse Successful Response
   * @throws ApiError
   */
  static createDistributionBundleApiV1MarketplaceDistributionBundlesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/distribution-bundles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Distribution Bundles
   * @returns DistributionBundleListResponse Successful Response
   * @throws ApiError
   */
  static listDistributionBundlesApiV1MarketplaceDistributionBundlesGet({
    creatorId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/distribution-bundles",
      query: {
        "creator_id": creatorId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Distribution Bundle
   * @returns DistributionBundleResponse Successful Response
   * @throws ApiError
   */
  static getDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdGet({
    bundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/distribution-bundles/{bundle_id}",
      path: {
        "bundle_id": bundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Distribution Bundle
   * @returns DistributionBundleResponse Successful Response
   * @throws ApiError
   */
  static updateDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdPatch({
    bundleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/distribution-bundles/{bundle_id}",
      path: {
        "bundle_id": bundleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Distribution Bundle
   * @returns void
   * @throws ApiError
   */
  static deleteDistributionBundleApiV1MarketplaceDistributionBundlesBundleIdDelete({
    bundleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/distribution-bundles/{bundle_id}",
      path: {
        "bundle_id": bundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceDistributionsService.ts
var MarketplaceDistributionsService = class {
  /**
   * Create Distribution
   * @returns DistributionResponse Successful Response
   * @throws ApiError
   */
  static createDistributionApiV1MarketplaceDistributionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/distributions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Distributions
   * @returns DistributionListResponse Successful Response
   * @throws ApiError
   */
  static listDistributionsApiV1MarketplaceDistributionsGet({
    creatorId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/distributions",
      query: {
        "creator_id": creatorId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Distribution
   * @returns DistributionResponse Successful Response
   * @throws ApiError
   */
  static getDistributionApiV1MarketplaceDistributionsDistributionIdGet({
    distributionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/distributions/{distribution_id}",
      path: {
        "distribution_id": distributionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Distribution
   * @returns DistributionResponse Successful Response
   * @throws ApiError
   */
  static updateDistributionApiV1MarketplaceDistributionsDistributionIdPatch({
    distributionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/distributions/{distribution_id}",
      path: {
        "distribution_id": distributionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Discontinue Distribution
   * @returns DistributionResponse Successful Response
   * @throws ApiError
   */
  static discontinueDistributionApiV1MarketplaceDistributionsDistributionIdDelete({
    distributionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/distributions/{distribution_id}",
      path: {
        "distribution_id": distributionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Claim Distribution
   * @returns EntitlementResponse Successful Response
   * @throws ApiError
   */
  static claimDistributionApiV1MarketplaceDistributionsDistributionIdClaimPost({
    distributionId,
    ownerType = "user",
    ownerId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/distributions/{distribution_id}/claim",
      path: {
        "distribution_id": distributionId
      },
      query: {
        "owner_type": ownerType,
        "owner_id": ownerId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceEntitlementsService.ts
var MarketplaceEntitlementsService = class {
  /**
   * List Entitlements
   * @returns EntitlementListResponse Successful Response
   * @throws ApiError
   */
  static listEntitlementsApiV1MarketplaceEntitlementsGet({
    ownerId,
    ownerType = "user",
    assetType,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/entitlements",
      query: {
        "owner_id": ownerId,
        "owner_type": ownerType,
        "asset_type": assetType,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Check Entitlement
   * @returns EntitlementCheckResponse Successful Response
   * @throws ApiError
   */
  static checkEntitlementApiV1MarketplaceEntitlementsCheckGet({
    assetId,
    ownerId,
    ownerType = "user"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/entitlements/check",
      query: {
        "asset_id": assetId,
        "owner_id": ownerId,
        "owner_type": ownerType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Entitlement
   * @returns EntitlementResponse Successful Response
   * @throws ApiError
   */
  static getEntitlementApiV1MarketplaceEntitlementsEntitlementIdGet({
    entitlementId,
    ownerId,
    ownerType = "user"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/entitlements/{entitlement_id}",
      path: {
        "entitlement_id": entitlementId
      },
      query: {
        "owner_id": ownerId,
        "owner_type": ownerType
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Entitlement Version
   * @returns EntitlementResponse Successful Response
   * @throws ApiError
   */
  static updateEntitlementVersionApiV1MarketplaceEntitlementsEntitlementIdVersionPatch({
    entitlementId,
    requestBody,
    ownerId,
    ownerType = "user"
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/entitlements/{entitlement_id}/version",
      path: {
        "entitlement_id": entitlementId
      },
      query: {
        "owner_id": ownerId,
        "owner_type": ownerType
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceFavoritesService.ts
var MarketplaceFavoritesService = class {
  /**
   * Create Favorite
   * @returns FavoriteResponse Successful Response
   * @throws ApiError
   */
  static createFavoriteApiV1MarketplaceFavoritesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/favorites",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Favorites
   * @returns FavoriteListResponse Successful Response
   * @throws ApiError
   */
  static listFavoritesApiV1MarketplaceFavoritesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/favorites",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Favorite
   * @returns void
   * @throws ApiError
   */
  static deleteFavoriteApiV1MarketplaceFavoritesFavoriteIdDelete({
    favoriteId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/favorites/{favorite_id}",
      path: {
        "favorite_id": favoriteId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceGiftsService.ts
var MarketplaceGiftsService = class {
  /**
   * Create Gift Purchase
   * ギフト購入リクエストを作成する。
   *
   * 実際の決済は billing-gateway で処理される。
   * 決済完了後、purchase-completed エンドポイントで Entitlement が作成される。
   * @returns GiftPurchaseResponse Successful Response
   * @throws ApiError
   */
  static createGiftPurchaseApiV1MarketplaceGiftsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/gifts",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceListingBundlesService.ts
var MarketplaceListingBundlesService = class {
  /**
   * Create Listing Bundle
   * @returns ListingBundleResponse Successful Response
   * @throws ApiError
   */
  static createListingBundleApiV1MarketplaceListingBundlesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/listing-bundles",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Listing Bundles
   * @returns ListingBundleListResponse Successful Response
   * @throws ApiError
   */
  static listListingBundlesApiV1MarketplaceListingBundlesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/listing-bundles",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Listing Bundle
   * @returns ListingBundleResponse Successful Response
   * @throws ApiError
   */
  static getListingBundleApiV1MarketplaceListingBundlesListingBundleIdGet({
    listingBundleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/listing-bundles/{listing_bundle_id}",
      path: {
        "listing_bundle_id": listingBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Listing Bundle
   * @returns ListingBundleResponse Successful Response
   * @throws ApiError
   */
  static updateListingBundleApiV1MarketplaceListingBundlesListingBundleIdPatch({
    listingBundleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/listing-bundles/{listing_bundle_id}",
      path: {
        "listing_bundle_id": listingBundleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Listing Bundle
   * @returns void
   * @throws ApiError
   */
  static deleteListingBundleApiV1MarketplaceListingBundlesListingBundleIdDelete({
    listingBundleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/listing-bundles/{listing_bundle_id}",
      path: {
        "listing_bundle_id": listingBundleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceListingsService.ts
var MarketplaceListingsService = class {
  /**
   * Create Listing
   * @returns ListingResponse Successful Response
   * @throws ApiError
   */
  static createListingApiV1MarketplaceListingsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/listings",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Listings
   * @returns ListingListResponse Successful Response
   * @throws ApiError
   */
  static listListingsApiV1MarketplaceListingsGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/listings",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Listing
   * @returns ListingResponse Successful Response
   * @throws ApiError
   */
  static getListingApiV1MarketplaceListingsListingIdGet({
    listingId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/listings/{listing_id}",
      path: {
        "listing_id": listingId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Listing
   * @returns ListingResponse Successful Response
   * @throws ApiError
   */
  static updateListingApiV1MarketplaceListingsListingIdPatch({
    listingId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/listings/{listing_id}",
      path: {
        "listing_id": listingId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Listing
   * @returns void
   * @throws ApiError
   */
  static deleteListingApiV1MarketplaceListingsListingIdDelete({
    listingId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/listings/{listing_id}",
      path: {
        "listing_id": listingId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceNotificationsService.ts
var MarketplaceNotificationsService = class {
  /**
   * List Notifications
   * @returns NotificationListResponse Successful Response
   * @throws ApiError
   */
  static listNotificationsApiV1MarketplaceNotificationsGet({
    unreadOnly = false,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/notifications",
      query: {
        "unread_only": unreadOnly,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Mark Notification As Read
   * @returns void
   * @throws ApiError
   */
  static markNotificationAsReadApiV1MarketplaceNotificationsNotificationIdReadPatch({
    notificationId
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/marketplace/notifications/{notification_id}/read",
      path: {
        "notification_id": notificationId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Mark All Notifications As Read
   * @returns any Successful Response
   * @throws ApiError
   */
  static markAllNotificationsAsReadApiV1MarketplaceNotificationsMarkAllReadPost() {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/notifications/mark-all-read"
    });
  }
};

// src/generated/services/MarketplaceReportsService.ts
var MarketplaceReportsService = class {
  /**
   * Create Report
   * @returns any Successful Response
   * @throws ApiError
   */
  static createReportApiV1MarketplaceReportsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/reports",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MarketplaceReviewsService.ts
var MarketplaceReviewsService = class {
  /**
   * Create Review
   * @returns ReviewResponse Successful Response
   * @throws ApiError
   */
  static createReviewApiV1MarketplaceReviewsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/marketplace/reviews",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Reviews
   * @returns ReviewListResponse Successful Response
   * @throws ApiError
   */
  static listReviewsApiV1MarketplaceReviewsGet({
    targetType,
    targetId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/marketplace/reviews",
      query: {
        "target_type": targetType,
        "target_id": targetId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Review
   * @returns void
   * @throws ApiError
   */
  static deleteReviewApiV1MarketplaceReviewsReviewIdDelete({
    reviewId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/marketplace/reviews/{review_id}",
      path: {
        "review_id": reviewId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MemoriesService.ts
var MemoriesService = class {
  /**
   * Search Memories
   * @returns MemorySearchResponse Successful Response
   * @throws ApiError
   */
  static searchMemoriesApiV1CharactersCharacterIdMemoriesSearchPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/memories/search",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Memory
   * @returns MemoryResponse Successful Response
   * @throws ApiError
   */
  static createMemoryApiV1CharactersCharacterIdMemoriesPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/memories",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Memories
   * @returns MemoryListResponse Successful Response
   * @throws ApiError
   */
  static listMemoriesApiV1CharactersCharacterIdMemoriesGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/memories",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Memory
   * @returns MemoryResponse Successful Response
   * @throws ApiError
   */
  static getMemoryApiV1CharactersCharacterIdMemoriesMemoryIdGet({
    characterId,
    memoryId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/memories/{memory_id}",
      path: {
        "character_id": characterId,
        "memory_id": memoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Memory
   * @returns MemoryResponse Successful Response
   * @throws ApiError
   */
  static updateMemoryApiV1CharactersCharacterIdMemoriesMemoryIdPut({
    characterId,
    memoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PUT",
      url: "/api/v1/characters/{character_id}/memories/{memory_id}",
      path: {
        "character_id": characterId,
        "memory_id": memoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Memory
   * @returns void
   * @throws ApiError
   */
  static deleteMemoryApiV1CharactersCharacterIdMemoriesMemoryIdDelete({
    characterId,
    memoryId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/memories/{memory_id}",
      path: {
        "character_id": characterId,
        "memory_id": memoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Toggle Memory Pin
   * @returns MemoryResponse Successful Response
   * @throws ApiError
   */
  static toggleMemoryPinApiV1CharactersCharacterIdMemoriesMemoryIdPinPatch({
    characterId,
    memoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/memories/{memory_id}/pin",
      path: {
        "character_id": characterId,
        "memory_id": memoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MemoryOrganizationService.ts
var MemoryOrganizationService = class {
  /**
   * Organize Memories
   * @returns MemoryOrganizationResponse Successful Response
   * @throws ApiError
   */
  static organizeMemoriesApiV1CharactersCharacterIdMemoryOrganizationPost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/memory-organization",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MoodService.ts
var MoodService = class {
  /**
   * Get Current Mood
   * キャラクターの現在の気分状態を取得（減衰計算適用後）
   *
   * 時間経過による減衰を計算し、現在の気分値を返す。
   * MoodStateが存在しない場合は、キャラクターのemotional_paramsに基づいた
   * デフォルト値で初期化された状態を返す。
   * @returns MoodStateResponse Successful Response
   * @throws ApiError
   */
  static getCurrentMoodApiV1CharactersCharacterIdMoodGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/mood",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Mood From Conversation
   * 会話結果から気分を更新
   *
   * 会話で出力されたemotion_idのリストから気分を更新する。
   * 1. 現在のMoodStateを取得（減衰計算適用）
   * 2. emotion_idsからターンVADを算出
   * 3. sensitivityを適用
   * 4. emotion_centerを更新
   * 5. moodを更新（気分一致効果 + 飽和対策）
   * 6. 保存して返す
   * @returns MoodStateResponse Successful Response
   * @throws ApiError
   */
  static updateMoodFromConversationApiV1CharactersCharacterIdMoodPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/mood",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Verbalized Mood
   * キャラクターの現在の気分を言語化して取得
   *
   * 気分のVAD値を自然言語の説明に変換して返す。
   * EmotionConfigにmood_verbalizerが設定されている必要がある。
   * 未設定の場合は500エラーを返す。
   * @returns MoodVerbalizedResponse Successful Response
   * @throws ApiError
   */
  static getVerbalizedMoodApiV1CharactersCharacterIdMoodVerbalizedGet({
    characterId,
    locale = "ja-JP"
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/mood/verbalized",
      path: {
        "character_id": characterId
      },
      query: {
        "locale": locale
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Reset Mood
   * 気分をデフォルト値にリセット
   *
   * キャラクターのemotional_paramsに基づいたデフォルト値にリセットする。
   * emotion_centerの履歴もクリアされる。
   * @returns MoodStateResponse Successful Response
   * @throws ApiError
   */
  static resetMoodApiV1CharactersCharacterIdMoodResetPost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/mood/reset",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionFormatsAnimatorService.ts
var MotionFormatsAnimatorService = class {
  /**
   * Create Avatar Animator Format
   * アバターモーションのAnimatorフォーマットを作成
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static createAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorPost({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/animator",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Animator Format
   * アバターモーションのAnimatorフォーマットを取得
   * @returns AnimatorMotionData Successful Response
   * @throws ApiError
   */
  static getAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorGet({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/animator",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Animator Format
   * アバターモーションのAnimatorフォーマットを更新
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorPatch({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/animator",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Animator Format
   * アバターモーションのAnimatorフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarAnimatorFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsAnimatorDelete({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/animator",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionFormatsGlbService.ts
var MotionFormatsGlbService = class {
  /**
   * Create Avatar Glb Motion Format
   * アバターモーションのGLBフォーマットを作成
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static createAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbPost({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Glb Motion Format
   * アバターモーションのGLBフォーマットを取得
   * @returns GLBMotionData Successful Response
   * @throws ApiError
   */
  static getAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbGet({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Glb Motion Format
   * アバターモーションのGLBフォーマットを更新
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbPatch({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Glb Motion Format
   * アバターモーションのGLBフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarGlbMotionFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsGlbDelete({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/glb",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionFormatsVrmaService.ts
var MotionFormatsVrmaService = class {
  /**
   * Create Avatar Vrma Format
   * アバターモーションのVRMAフォーマットを作成
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static createAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaPost({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/vrma",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Avatar Vrma Format
   * アバターモーションのVRMAフォーマットを取得
   * @returns VRMAMotionData Successful Response
   * @throws ApiError
   */
  static getAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaGet({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/vrma",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Avatar Vrma Format
   * アバターモーションのVRMAフォーマットを更新
   * @returns FormatOperationResponse Successful Response
   * @throws ApiError
   */
  static updateAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaPatch({
    avatarId,
    avatarMotionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/vrma",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Avatar Vrma Format
   * アバターモーションのVRMAフォーマットを削除
   * @returns any Successful Response
   * @throws ApiError
   */
  static deleteAvatarVrmaFormatApiV1AvatarsAvatarIdMotionsAvatarMotionIdFormatsVrmaDelete({
    avatarId,
    avatarMotionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/avatars/{avatar_id}/motions/{avatar_motion_id}/formats/vrma",
      path: {
        "avatar_id": avatarId,
        "avatar_motion_id": avatarMotionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionsService.ts
var MotionsService = class {
  /**
   * Create Motion
   * 新しいMotionを作成
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static createMotionApiV1MotionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Motions
   * Motion一覧を取得
   * @returns MotionListResponse Successful Response
   * @throws ApiError
   */
  static listMotionsApiV1MotionsGet({
    dataSource,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/motions",
      query: {
        "data_source": dataSource,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Motions
   * 名前または同義語でMotionを検索
   * @returns MotionSearchResponse Successful Response
   * @throws ApiError
   */
  static searchMotionsApiV1MotionsSearchGet({
    searchTerm,
    locale = "ja-JP",
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/motions/search",
      query: {
        "search_term": searchTerm,
        "locale": locale,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Motions By Text
   * テキストからMotionを提案（LLM使用）
   * @returns MotionSuggestionResponse Successful Response
   * @throws ApiError
   */
  static suggestMotionsByTextApiV1MotionsSuggestByTextPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions/suggest-by-text",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Motions
   * 複数のMotionを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetMotionsApiV1MotionsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Motion
   * IDでMotionを取得
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static getMotionApiV1MotionsMotionIdGet({
    motionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/motions/{motion_id}",
      path: {
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Motion
   * Motionを更新
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static updateMotionApiV1MotionsMotionIdPatch({
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/motions/{motion_id}",
      path: {
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Motion
   * Motionを削除
   * @returns void
   * @throws ApiError
   */
  static deleteMotionApiV1MotionsMotionIdDelete({
    motionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/motions/{motion_id}",
      path: {
        "motion_id": motionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Synonyms
   * 指定ロケールに同義語を追加
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static addSynonymsApiV1MotionsMotionIdSynonymsAddPost({
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions/{motion_id}/synonyms/add",
      path: {
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Remove Synonyms
   * 指定ロケールから同義語を削除
   * @returns MotionResponse Successful Response
   * @throws ApiError
   */
  static removeSynonymsApiV1MotionsMotionIdSynonymsRemovePost({
    motionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/motions/{motion_id}/synonyms/remove",
      path: {
        "motion_id": motionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/MotionsSummaryService.ts
var MotionsSummaryService = class {
  /**
   * Get Motions Summary
   * MotionsSummary（モーションインデックス）を取得
   *
   * OFFICIALモーションの一括参照用インデックスを返します。
   * ロケール別にモーションID・名前・同義語・タイプを含みます。
   * @returns MotionsSummaryResponse Successful Response
   * @throws ApiError
   */
  static getMotionsSummaryApiV1MotionsSummaryGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/motions-summary"
    });
  }
};

// src/generated/services/OutfitsService.ts
var OutfitsService = class {
  /**
   * Create Outfit
   * 衣装を作成
   * @returns OutfitResponse Successful Response
   * @throws ApiError
   */
  static createOutfitApiV1OutfitsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/outfits",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Outfits
   * 衣装一覧を取得
   * @returns OutfitListResponse Successful Response
   * @throws ApiError
   */
  static listOutfitsApiV1OutfitsGet({
    category,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/outfits",
      query: {
        "category": category,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Outfit
   * 衣装を取得
   * @returns OutfitResponse Successful Response
   * @throws ApiError
   */
  static getOutfitApiV1OutfitsOutfitIdGet({
    outfitId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/outfits/{outfit_id}",
      path: {
        "outfit_id": outfitId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Outfit
   * 衣装を更新
   * @returns OutfitResponse Successful Response
   * @throws ApiError
   */
  static updateOutfitApiV1OutfitsOutfitIdPatch({
    outfitId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/outfits/{outfit_id}",
      path: {
        "outfit_id": outfitId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Outfit
   * 衣装を削除
   * @returns void
   * @throws ApiError
   */
  static deleteOutfitApiV1OutfitsOutfitIdDelete({
    outfitId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/outfits/{outfit_id}",
      path: {
        "outfit_id": outfitId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/PersonalityPresetsService.ts
var PersonalityPresetsService = class {
  /**
   * List Presets
   * 全性格プリセットを取得
   * @returns PersonalityPresetListResponse Successful Response
   * @throws ApiError
   */
  static listPresetsApiV1PersonalityPresetsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets"
    });
  }
  /**
   * Get Context Table
   * Layer 0 コンテキストテーブルを取得
   * @returns StandardContextTableResponse Successful Response
   * @throws ApiError
   */
  static getContextTableApiV1PersonalityPresetsContextTableGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/context-table"
    });
  }
  /**
   * Get Vad Mapping
   * Layer 0 VAD→非言語マッピングを取得
   * @returns VadNonVerbalMappingResponse Successful Response
   * @throws ApiError
   */
  static getVadMappingApiV1PersonalityPresetsVadMappingGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/vad-mapping"
    });
  }
  /**
   * List Behavioral Patterns
   * 全行動パターンプリセットを取得
   * @returns BehavioralPatternPresetListResponse Successful Response
   * @throws ApiError
   */
  static listBehavioralPatternsApiV1PersonalityPresetsBehavioralPatternsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/behavioral-patterns"
    });
  }
  /**
   * Get Behavioral Pattern
   * 指定パターンの行動パターンプリセットを取得
   * @returns BehavioralPatternPresetResponse Successful Response
   * @throws ApiError
   */
  static getBehavioralPatternApiV1PersonalityPresetsBehavioralPatternsPatternGet({
    pattern
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/behavioral-patterns/{pattern}",
      path: {
        "pattern": pattern
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Preset
   * 指定アーキタイプのプリセットを取得
   * @returns PersonalityPresetResponse Successful Response
   * @throws ApiError
   */
  static getPresetApiV1PersonalityPresetsArchetypeGet({
    archetype
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/personality-presets/{archetype}",
      path: {
        "archetype": archetype
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/RelationshipContextService.ts
var RelationshipContextService = class {
  /**
   * Get Relationship Context Map
   * RelationshipRole→(AffinityLevel, PowerDynamic, BondType) マッピングを取得
   *
   * クライアント側で RelationshipRole から AffinityLevel, PowerDynamic, BondType を
   * 導出するためのマッピングテーブル。
   * @returns RelationshipContextMapResponse Successful Response
   * @throws ApiError
   */
  static getRelationshipContextMapApiV1RelationshipContextMapGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/relationship-context-map"
    });
  }
};

// src/generated/services/RelationshipsService.ts
var RelationshipsService = class {
  /**
   * Create Relationship
   * キャラクターの対人関係を作成
   * @returns CharacterRelationshipResponse Successful Response
   * @throws ApiError
   */
  static createRelationshipApiV1CharactersCharacterIdRelationshipsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/relationships",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Relationships
   * キャラクターの全対人関係を取得
   * @returns CharacterRelationshipListResponse Successful Response
   * @throws ApiError
   */
  static listRelationshipsApiV1CharactersCharacterIdRelationshipsGet({
    characterId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/relationships",
      path: {
        "character_id": characterId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Relationship
   * 特定の対人関係を取得
   * @returns CharacterRelationshipResponse Successful Response
   * @throws ApiError
   */
  static getRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdGet({
    characterId,
    conversantType,
    conversantId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/relationships/{conversant_type}/{conversant_id}",
      path: {
        "character_id": characterId,
        "conversant_type": conversantType,
        "conversant_id": conversantId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Relationship
   * 対人関係を更新
   * @returns CharacterRelationshipResponse Successful Response
   * @throws ApiError
   */
  static updateRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdPatch({
    characterId,
    conversantType,
    conversantId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/relationships/{conversant_type}/{conversant_id}",
      path: {
        "character_id": characterId,
        "conversant_type": conversantType,
        "conversant_id": conversantId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Relationship
   * 対人関係を削除
   * @returns void
   * @throws ApiError
   */
  static deleteRelationshipApiV1CharactersCharacterIdRelationshipsConversantTypeConversantIdDelete({
    characterId,
    conversantType,
    conversantId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/relationships/{conversant_type}/{conversant_id}",
      path: {
        "character_id": characterId,
        "conversant_type": conversantType,
        "conversant_id": conversantId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/ReviewsService.ts
var ReviewsService = class {
  /**
   * Auto Review
   * 自動審査（一次審査）を実行
   *
   * LLMを使用してコンテンツを自動審査します。
   * @returns ReviewLogResponse Successful Response
   * @throws ApiError
   */
  static autoReviewApiV1ReviewsTargetTypeTargetIdAutoPost({
    targetType,
    targetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/reviews/{target_type}/{target_id}/auto",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Appeal Review
   * 異議申し立て（再審査）を実行
   *
   * LLMを使用して、異議内容を考慮した再審査を行います。
   * @returns ReviewLogResponse Successful Response
   * @throws ApiError
   */
  static appealReviewApiV1ReviewsTargetTypeTargetIdAppealPost({
    targetType,
    targetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/reviews/{target_type}/{target_id}/appeal",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Request Staff Review
   * 運営審査を要求
   *
   * 運営による手動審査を要求します。
   * @returns ReviewLogResponse Successful Response
   * @throws ApiError
   */
  static requestStaffReviewApiV1ReviewsTargetTypeTargetIdStaffRequestPost({
    targetType,
    targetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/reviews/{target_type}/{target_id}/staff-request",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Reviews
   * 審査ログ一覧を取得
   * @returns ReviewLogListResponse Successful Response
   * @throws ApiError
   */
  static listReviewsApiV1ReviewsTargetTypeTargetIdGet({
    targetType,
    targetId,
    limit = 10,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/reviews/{target_type}/{target_id}",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Review Status
   * 審査ステータスを取得
   * @returns ReviewStatusResponse Successful Response
   * @throws ApiError
   */
  static getReviewStatusApiV1ReviewsTargetTypeTargetIdStatusGet({
    targetType,
    targetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/reviews/{target_type}/{target_id}/status",
      path: {
        "target_type": targetType,
        "target_id": targetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SchedulesService.ts
var SchedulesService = class {
  /**
   * Get Schedules
   * @returns ScheduleListResponse Successful Response
   * @throws ApiError
   */
  static getSchedulesApiV1CharactersCharacterIdSchedulesGet({
    characterId,
    startDate,
    endDate,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/schedules",
      path: {
        "character_id": characterId
      },
      query: {
        "start_date": startDate,
        "end_date": endDate,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Schedule
   * @returns ScheduleResponse Successful Response
   * @throws ApiError
   */
  static createScheduleApiV1CharactersCharacterIdSchedulesPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/schedules",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Schedule
   * @returns ScheduleResponse Successful Response
   * @throws ApiError
   */
  static getScheduleApiV1CharactersCharacterIdSchedulesScheduleIdGet({
    characterId,
    scheduleId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/schedules/{schedule_id}",
      path: {
        "character_id": characterId,
        "schedule_id": scheduleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Schedule
   * @returns ScheduleResponse Successful Response
   * @throws ApiError
   */
  static updateScheduleApiV1CharactersCharacterIdSchedulesScheduleIdPatch({
    characterId,
    scheduleId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/schedules/{schedule_id}",
      path: {
        "character_id": characterId,
        "schedule_id": scheduleId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Schedule
   * @returns void
   * @throws ApiError
   */
  static deleteScheduleApiV1CharactersCharacterIdSchedulesScheduleIdDelete({
    characterId,
    scheduleId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/schedules/{schedule_id}",
      path: {
        "character_id": characterId,
        "schedule_id": scheduleId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SessionHistoryService.ts
var SessionHistoryService = class {
  /**
   * Create Session History
   * @returns SessionHistoryResponse Successful Response
   * @throws ApiError
   */
  static createSessionHistoryApiV1CharactersCharacterIdSessionHistoryPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/session-history",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Session History
   * @returns SessionHistoryListResponse Successful Response
   * @throws ApiError
   */
  static listSessionHistoryApiV1CharactersCharacterIdSessionHistoryGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/session-history",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Session History
   * @returns SessionHistoryResponse Successful Response
   * @throws ApiError
   */
  static getSessionHistoryApiV1CharactersCharacterIdSessionHistorySessionIdGet({
    characterId,
    sessionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/session-history/{session_id}",
      path: {
        "character_id": characterId,
        "session_id": sessionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SettingsService.ts
var SettingsService = class {
  /**
   * Create Settings
   * 詳細な設定内容（content）を指定して新しいSettingsを作成
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static createSettingsApiV1SettingsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Settings
   * 条件に合うSettings一覧を取得
   * @returns SettingsListResponse Successful Response
   * @throws ApiError
   */
  static listSettingsApiV1SettingsGet({
    filterByOwner = false,
    publishScope,
    parentSettingsId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings",
      query: {
        "filter_by_owner": filterByOwner,
        "publish_scope": publishScope,
        "parent_settings_id": parentSettingsId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Settings With Description
   * キャラ設定の概要（overview）から新しいSettingsを自動生成して作成
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static createSettingsWithDescriptionApiV1SettingsWithDescriptionPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/with-description",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Settings
   * 指定したIDのSettingsを取得
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static getSettingsApiV1SettingsSettingsIdGet({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Settings
   * 既存のSettingsを更新。
   * parent_settings_id, content, description, publishingを個別または複数まとめて更新できます。
   * タグは自動的に生成されます。
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static updateSettingsApiV1SettingsSettingsIdPatch({
    settingsId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/settings/{settings_id}",
      path: {
        "settings_id": settingsId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Settings
   * 指定したIDのSettingsを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSettingsApiV1SettingsSettingsIdDelete({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/settings/{settings_id}",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Settings Content
   * 設定の詳細なコンテンツのみを取得
   * @returns SettingsContentResponse Successful Response
   * @throws ApiError
   */
  static getSettingsContentApiV1SettingsSettingsIdContentGet({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/content",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Content
   * キャラ設定の概要（overview）から詳細な設定（SettingsContent）を生成
   * ※この時点ではデータベースに保存されません
   * @returns GenerateContentResponse Successful Response
   * @throws ApiError
   */
  static generateContentApiV1SettingsGenerateContentPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/generate-content",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Regenerate Content From Input
   * Client-input版: テキスト入力からSettingsContentを再生成（保存なし）
   *
   * settings_content にJSON文字列またはテキストを渡し、modification_instruction で修正指示を与える。
   * @returns RegenerateContentFromInputResponse Successful Response
   * @throws ApiError
   */
  static regenerateContentFromInputApiV1SettingsRegenerateContentPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/regenerate-content",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Regenerate Content
   * 既存Settingsのcontentを修正指示に基づいてLLMで再生成
   *
   * - save=false（デフォルト）: 再生成結果を返すのみ
   * - save=true: 再生成結果をDBに保存
   * @returns RegenerateContentResponse Successful Response
   * @throws ApiError
   */
  static regenerateContentApiV1SettingsSettingsIdRegenerateContentPost({
    settingsId,
    requestBody,
    save = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/regenerate-content",
      path: {
        "settings_id": settingsId
      },
      query: {
        "save": save
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Duplicate Settings
   * 既存のSettingsを複製して新規作成
   * @returns DuplicateSettingsResponse Successful Response
   * @throws ApiError
   */
  static duplicateSettingsApiV1SettingsSettingsIdDuplicatePost({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/duplicate",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Parent Settings
   * 指定したSettingsの親情報を取得
   * @returns SettingsResponse Successful Response
   * @throws ApiError
   */
  static getParentSettingsApiV1SettingsSettingsIdParentGet({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/parent",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Children Settings
   * 指定したSettingsの子一覧を取得
   * @returns SettingsListResponse Successful Response
   * @throws ApiError
   */
  static getChildrenSettingsApiV1SettingsSettingsIdChildrenGet({
    settingsId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/children",
      path: {
        "settings_id": settingsId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Settings By Tags
   * タグベースの検索を実行し、一致度が高い順に結果を返す
   *
   * Args:
   * tags: 検索するタグIDのリスト
   * limit: 取得件数制限
   * cursor: ページネーションカーソル
   *
   * Returns:
   * 検索結果のSettingsリスト（一致度が高い順）
   * @returns SettingsListResponse Successful Response
   * @throws ApiError
   */
  static searchSettingsByTagsApiV1SettingsTagSearchGet({
    tags,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/tag/search",
      query: {
        "tags": tags,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get User Settings
   * 特定のユーザーが所有するSettings一覧を取得
   * @returns SettingsListResponse Successful Response
   * @throws ApiError
   */
  static getUserSettingsApiV1SettingsUserUserIdGet({
    userId,
    publishScope,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/user/{user_id}",
      path: {
        "user_id": userId
      },
      query: {
        "publish_scope": publishScope,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Settings
   * フィールド値でSettingsを検索してIDリストを返す
   *
   * Args:
   * search_request: 検索条件
   *
   * Returns:
   * 検索結果のsettings_idリストと次のカーソル
   * @returns SettingsSearchResponse Successful Response
   * @throws ApiError
   */
  static searchSettingsApiV1SettingsSearchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/search",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Settings Batch
   * 複数のSettingsを一括取得
   *
   * Args:
   * request: リクエストオブジェクト（ユーザーID取得用）
   * batch_request: 一括取得リクエスト
   *
   * Returns:
   * 取得できたSettingsリストと統計情報
   * @returns BatchSettingsResponse Successful Response
   * @throws ApiError
   */
  static getSettingsBatchApiV1SettingsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SettingsSnippetsService.ts
var SettingsSnippetsService = class {
  /**
   * Create Snippet
   * Settingsにスニペットを作成
   * @returns CharacterBehaviorSnippetResponse Successful Response
   * @throws ApiError
   */
  static createSnippetApiV1SettingsSettingsIdSnippetsPost({
    settingsId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/snippets",
      path: {
        "settings_id": settingsId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Snippets
   * Settingsの全スニペットを取得
   * @returns CharacterBehaviorSnippetListResponse Successful Response
   * @throws ApiError
   */
  static listSnippetsApiV1SettingsSettingsIdSnippetsGet({
    settingsId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/snippets",
      path: {
        "settings_id": settingsId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete All Snippets
   * Settingsの全スニペットを一括削除
   * @returns SnippetBulkDeleteResponse Successful Response
   * @throws ApiError
   */
  static deleteAllSnippetsApiV1SettingsSettingsIdSnippetsDelete({
    settingsId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/settings/{settings_id}/snippets",
      path: {
        "settings_id": settingsId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Snippet
   * 特定のスニペットを取得
   * @returns CharacterBehaviorSnippetResponse Successful Response
   * @throws ApiError
   */
  static getSnippetApiV1SettingsSettingsIdSnippetsSnippetIdGet({
    settingsId,
    snippetId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/settings/{settings_id}/snippets/{snippet_id}",
      path: {
        "settings_id": settingsId,
        "snippet_id": snippetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Snippet
   * スニペットを更新
   * @returns CharacterBehaviorSnippetResponse Successful Response
   * @throws ApiError
   */
  static updateSnippetApiV1SettingsSettingsIdSnippetsSnippetIdPatch({
    settingsId,
    snippetId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/settings/{settings_id}/snippets/{snippet_id}",
      path: {
        "settings_id": settingsId,
        "snippet_id": snippetId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Snippet
   * スニペットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSnippetApiV1SettingsSettingsIdSnippetsSnippetIdDelete({
    settingsId,
    snippetId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/settings/{settings_id}/snippets/{snippet_id}",
      path: {
        "settings_id": settingsId,
        "snippet_id": snippetId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate Snippets
   * SettingsContentからBehaviorSnippetをLLM生成
   *
   * - save=false（デフォルト）: 生成結果を返すのみ
   * - save=true: 生成結果をサブコレクションに保存
   * @returns SnippetGenerateResponse Successful Response
   * @throws ApiError
   */
  static generateSnippetsApiV1SettingsSettingsIdSnippetsGeneratePost({
    settingsId,
    requestBody,
    save = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/snippets/generate",
      path: {
        "settings_id": settingsId
      },
      query: {
        "save": save
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Regenerate Snippets
   * 既存スニペットを修正指示に基づいてLLMで再生成
   *
   * - save=false（デフォルト）: 再生成結果を返すのみ
   * - save=true: 再生成結果をサブコレクションに保存
   * @returns SnippetGenerateResponse Successful Response
   * @throws ApiError
   */
  static regenerateSnippetsApiV1SettingsSettingsIdSnippetsRegeneratePost({
    settingsId,
    requestBody,
    save = false
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/{settings_id}/snippets/regenerate",
      path: {
        "settings_id": settingsId
      },
      query: {
        "save": save
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/SettingsSnippetsClientService.ts
var SettingsSnippetsClientService = class {
  /**
   * Generate Snippets From Input
   * Client-input版: テキスト入力からBehaviorSnippetをLLM生成（保存なし）
   *
   * settings_content にJSON文字列またはテキストを渡して、スニペットを生成。
   * @returns SnippetGenerateResponse Successful Response
   * @throws ApiError
   */
  static generateSnippetsFromInputApiV1SettingsSnippetsGeneratePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/snippets/generate",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Regenerate Snippets From Input
   * Client-input版: テキスト入力から既存スニペットをLLMで再生成（保存なし）
   *
   * settings_content と existing_snippets をJSON文字列またはテキストで渡し、
   * modification_instruction で修正指示を与える。
   * @returns SnippetGenerateResponse Successful Response
   * @throws ApiError
   */
  static regenerateSnippetsFromInputApiV1SettingsSnippetsRegeneratePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/settings/snippets/regenerate",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/StateService.ts
var StateService = class {
  /**
   * Create Scene Details
   * シーン詳細を作成
   * @returns CharacterSceneDetailsResponse Successful Response
   * @throws ApiError
   */
  static createSceneDetailsApiV1CharactersCharacterIdStateScenePost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/state/scene",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Scene Details
   * シーン詳細を取得
   * @returns CharacterSceneDetailsResponse Successful Response
   * @throws ApiError
   */
  static getSceneDetailsApiV1CharactersCharacterIdStateSceneGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/state/scene",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Scene Details
   * シーン詳細を更新
   * @returns CharacterSceneDetailsResponse Successful Response
   * @throws ApiError
   */
  static updateSceneDetailsApiV1CharactersCharacterIdStateScenePatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/state/scene",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Scene Details
   * シーン詳細を削除
   * @returns void
   * @throws ApiError
   */
  static deleteSceneDetailsApiV1CharactersCharacterIdStateSceneDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/state/scene",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Turn State
   * ターン状態を作成
   * @returns CharacterTurnStateResponse Successful Response
   * @throws ApiError
   */
  static createTurnStateApiV1CharactersCharacterIdStateTurnPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/state/turn",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Turn State
   * ターン状態を取得
   * @returns CharacterTurnStateResponse Successful Response
   * @throws ApiError
   */
  static getTurnStateApiV1CharactersCharacterIdStateTurnGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/state/turn",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Turn State
   * ターン状態を更新
   * @returns CharacterTurnStateResponse Successful Response
   * @throws ApiError
   */
  static updateTurnStateApiV1CharactersCharacterIdStateTurnPatch({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/state/turn",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Turn State
   * ターン状態を削除
   * @returns void
   * @throws ApiError
   */
  static deleteTurnStateApiV1CharactersCharacterIdStateTurnDelete({
    characterId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/state/turn",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Character State
   * キャラクターの全状態を取得
   * @returns CharacterStateResponse Successful Response
   * @throws ApiError
   */
  static getCharacterStateApiV1CharactersCharacterIdStateGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/state",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/StoriesService.ts
var StoriesService = class {
  /**
   * Create Story
   * ストーリーを作成
   * @returns StoryResponse Successful Response
   * @throws ApiError
   */
  static createStoryApiV1StoriesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Stories
   * ストーリー一覧を取得
   * @returns StoryListResponse Successful Response
   * @throws ApiError
   */
  static listStoriesApiV1StoriesGet({
    filterByOwner = false,
    publishScope,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories",
      query: {
        "filter_by_owner": filterByOwner,
        "publish_scope": publishScope,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Stories
   * 複数のストーリーを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetStoriesApiV1StoriesBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Story
   * ストーリーを取得
   * @returns StoryResponse Successful Response
   * @throws ApiError
   */
  static getStoryApiV1StoriesStoryIdGet({
    storyId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}",
      path: {
        "story_id": storyId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Story
   * ストーリーを更新
   * @returns StoryResponse Successful Response
   * @throws ApiError
   */
  static updateStoryApiV1StoriesStoryIdPatch({
    storyId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/stories/{story_id}",
      path: {
        "story_id": storyId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Story
   * ストーリーを削除
   * @returns StoryDeleteResponse Successful Response
   * @throws ApiError
   */
  static deleteStoryApiV1StoriesStoryIdDelete({
    storyId,
    deleteChildren = true
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/stories/{story_id}",
      path: {
        "story_id": storyId
      },
      query: {
        "delete_children": deleteChildren
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Story With Children
   * ストーリーとその子要素（シーン・リンク）を一括取得
   * @returns StoryWithChildrenResponse Successful Response
   * @throws ApiError
   */
  static getStoryWithChildrenApiV1StoriesStoryIdWithChildrenGet({
    storyId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/with-children",
      path: {
        "story_id": storyId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Duplicate Story
   * ストーリーを複製（シーン・リンクも含む）
   * @returns StoryDuplicateResponse Successful Response
   * @throws ApiError
   */
  static duplicateStoryApiV1StoriesStoryIdDuplicatePost({
    storyId,
    newStoryId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/{story_id}/duplicate",
      path: {
        "story_id": storyId
      },
      query: {
        "new_story_id": newStoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Suggest Story Ai Usage
   * ストーリーの参照アセットからAI使用レベルをサジェスト
   * @returns StoryAiUsage Successful Response
   * @throws ApiError
   */
  static suggestStoryAiUsageApiV1StoriesStoryIdSuggestAiUsagePost({
    storyId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/{story_id}/suggest-ai-usage",
      path: {
        "story_id": storyId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Scene
   * シーンを作成
   * @returns StorySceneResponse Successful Response
   * @throws ApiError
   */
  static createSceneApiV1StoriesStoryIdScenesPost({
    storyId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/{story_id}/scenes",
      path: {
        "story_id": storyId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Scenes
   * ストーリーのシーン一覧を取得
   * @returns StorySceneListResponse Successful Response
   * @throws ApiError
   */
  static listScenesApiV1StoriesStoryIdScenesGet({
    storyId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scenes",
      path: {
        "story_id": storyId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Scene
   * シーンを取得
   * @returns StorySceneResponse Successful Response
   * @throws ApiError
   */
  static getSceneApiV1StoriesStoryIdScenesSceneIdGet({
    storyId,
    sceneId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scenes/{scene_id}",
      path: {
        "story_id": storyId,
        "scene_id": sceneId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Scene
   * シーンを更新
   * @returns StorySceneResponse Successful Response
   * @throws ApiError
   */
  static updateSceneApiV1StoriesStoryIdScenesSceneIdPatch({
    storyId,
    sceneId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/stories/{story_id}/scenes/{scene_id}",
      path: {
        "story_id": storyId,
        "scene_id": sceneId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Scene
   * シーンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSceneApiV1StoriesStoryIdScenesSceneIdDelete({
    storyId,
    sceneId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/stories/{story_id}/scenes/{scene_id}",
      path: {
        "story_id": storyId,
        "scene_id": sceneId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Scene Link
   * シーンリンクを作成
   * @returns StorySceneLinkResponse Successful Response
   * @throws ApiError
   */
  static createSceneLinkApiV1StoriesStoryIdSceneLinksPost({
    storyId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/stories/{story_id}/scene-links",
      path: {
        "story_id": storyId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Scene Links
   * ストーリーのシーンリンク一覧を取得
   * @returns StorySceneLinkListResponse Successful Response
   * @throws ApiError
   */
  static listSceneLinksApiV1StoriesStoryIdSceneLinksGet({
    storyId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scene-links",
      path: {
        "story_id": storyId
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Scene Link
   * シーンリンクを取得
   * @returns StorySceneLinkResponse Successful Response
   * @throws ApiError
   */
  static getSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdGet({
    storyId,
    linkId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scene-links/{link_id}",
      path: {
        "story_id": storyId,
        "link_id": linkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Scene Link
   * シーンリンクを更新
   * @returns StorySceneLinkResponse Successful Response
   * @throws ApiError
   */
  static updateSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdPatch({
    storyId,
    linkId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/stories/{story_id}/scene-links/{link_id}",
      path: {
        "story_id": storyId,
        "link_id": linkId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Scene Link
   * シーンリンクを削除
   * @returns void
   * @throws ApiError
   */
  static deleteSceneLinkApiV1StoriesStoryIdSceneLinksLinkIdDelete({
    storyId,
    linkId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/stories/{story_id}/scene-links/{link_id}",
      path: {
        "story_id": storyId,
        "link_id": linkId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Outgoing Links
   * 指定シーンから出発するリンク一覧を取得
   * @returns StorySceneLinkListResponse Successful Response
   * @throws ApiError
   */
  static getOutgoingLinksApiV1StoriesStoryIdScenesSceneIdOutgoingLinksGet({
    storyId,
    sceneId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/stories/{story_id}/scenes/{scene_id}/outgoing-links",
      path: {
        "story_id": storyId,
        "scene_id": sceneId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/TagsService.ts
var TagsService = class {
  /**
   * Search Tags
   * タグを検索
   * @returns TagSearchResultResponse Successful Response
   * @throws ApiError
   */
  static searchTagsApiV1TagsSearchTagsGet({
    query,
    locale = "ja-JP",
    categoryId,
    limit = 50,
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/search/tags",
      query: {
        "query": query,
        "locale": locale,
        "category_id": categoryId,
        "limit": limit,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Taxonomy
   * カテゴリと配下を一括取得
   * @returns TaxonomyResponse Successful Response
   * @throws ApiError
   */
  static getTaxonomyApiV1TagsTaxonomyTagCategoryIdGet({
    tagCategoryId,
    locale = "ja-JP",
    fallback = true,
    depth = -1
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/taxonomy/{tag_category_id}",
      path: {
        "tag_category_id": tagCategoryId
      },
      query: {
        "locale": locale,
        "fallback": fallback,
        "depth": depth
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Tag Category
   * カテゴリを作成
   * @returns TagCategoryResponse Successful Response
   * @throws ApiError
   */
  static createTagCategoryApiV1TagsTagCategoriesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/tag-categories",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Tag Categories
   * カテゴリ一覧を取得
   * @returns TagCategoryListCursorResponse Successful Response
   * @throws ApiError
   */
  static listTagCategoriesApiV1TagsTagCategoriesGet({
    parentId,
    locale = "ja-JP",
    fallback = true,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tag-categories",
      query: {
        "parent_id": parentId,
        "locale": locale,
        "fallback": fallback,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Tag Categories
   * 複数のタグカテゴリを一括取得
   * @returns BatchResponse_TagCategoryResponse_ Successful Response
   * @throws ApiError
   */
  static batchGetTagCategoriesApiV1TagsTagCategoriesBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/tag-categories/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Tag Category
   * カテゴリを取得
   * @returns TagCategoryWithLocaleResponse Successful Response
   * @throws ApiError
   */
  static getTagCategoryApiV1TagsTagCategoriesTagCategoryIdGet({
    tagCategoryId,
    locale = "ja-JP",
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tag-categories/{tag_category_id}",
      path: {
        "tag_category_id": tagCategoryId
      },
      query: {
        "locale": locale,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Tag Category
   * カテゴリを部分更新
   * @returns TagCategoryResponse Successful Response
   * @throws ApiError
   */
  static updateTagCategoryApiV1TagsTagCategoriesTagCategoryIdPatch({
    tagCategoryId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/tags/tag-categories/{tag_category_id}",
      path: {
        "tag_category_id": tagCategoryId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Tag Category
   * カテゴリを削除
   * @returns void
   * @throws ApiError
   */
  static deleteTagCategoryApiV1TagsTagCategoriesTagCategoryIdDelete({
    tagCategoryId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/tags/tag-categories/{tag_category_id}",
      path: {
        "tag_category_id": tagCategoryId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Tag
   * タグを作成
   * @returns TagResponse Successful Response
   * @throws ApiError
   */
  static createTagApiV1TagsTagsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/tags",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Tags
   * タグ一覧を取得
   * @returns TagListCursorResponse Successful Response
   * @throws ApiError
   */
  static listTagsApiV1TagsTagsGet({
    locale = "ja-JP",
    fallback = true,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tags",
      query: {
        "locale": locale,
        "fallback": fallback,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Tags
   * 複数のタグを一括取得
   * @returns BatchResponse_TagResponse_ Successful Response
   * @throws ApiError
   */
  static batchGetTagsApiV1TagsTagsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/tags/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Tag Categories
   * タグが属するカテゴリ一覧
   * @returns TagCategoriesForTagResponse Successful Response
   * @throws ApiError
   */
  static getTagCategoriesApiV1TagsTagsTagIdCategoriesGet({
    tagId,
    locale = "ja-JP",
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tags/{tag_id}/categories",
      path: {
        "tag_id": tagId
      },
      query: {
        "locale": locale,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Similar Tags
   * 類似タグを取得
   * @returns SimilarTagsResponse Successful Response
   * @throws ApiError
   */
  static getSimilarTagsApiV1TagsTagsTagIdSimilarGet({
    tagId,
    locale = "ja-JP",
    withinCategoryId,
    limit = 50,
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tags/{tag_id}/similar",
      path: {
        "tag_id": tagId
      },
      query: {
        "locale": locale,
        "within_category_id": withinCategoryId,
        "limit": limit,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Tag
   * タグを取得
   * @returns TagWithLocaleResponse Successful Response
   * @throws ApiError
   */
  static getTagApiV1TagsTagsTagIdGet({
    tagId,
    locale = "ja-JP",
    fallback = true
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/tags/{tag_id}",
      path: {
        "tag_id": tagId
      },
      query: {
        "locale": locale,
        "fallback": fallback
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Tag
   * タグを部分更新
   * @returns TagResponse Successful Response
   * @throws ApiError
   */
  static updateTagApiV1TagsTagsTagIdPatch({
    tagId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/tags/tags/{tag_id}",
      path: {
        "tag_id": tagId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Tag
   * タグを削除
   * @returns void
   * @throws ApiError
   */
  static deleteTagApiV1TagsTagsTagIdDelete({
    tagId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/tags/tags/{tag_id}",
      path: {
        "tag_id": tagId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Link
   * リンクを作成/更新
   * @returns TagCategoryLinkResponse Successful Response
   * @throws ApiError
   */
  static createLinkApiV1TagsLinksPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/links",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Links
   * リンクを取得
   * @returns LinkListCursorResponse Successful Response
   * @throws ApiError
   */
  static getLinksApiV1TagsLinksGet({
    tagCategoryId,
    tagId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/links",
      query: {
        "tag_category_id": tagCategoryId,
        "tag_id": tagId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Reorder Links
   * カテゴリ内のタグ並び替え
   * @returns ReorderResultResponse Successful Response
   * @throws ApiError
   */
  static reorderLinksApiV1TagsLinksReorderPatch({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/tags/links/reorder",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Bulk Upsert Links
   * リンクを一括作成/更新
   * @returns BulkUpsertResultResponse Successful Response
   * @throws ApiError
   */
  static bulkUpsertLinksApiV1TagsLinksBulkUpsertPost({
    requestBody,
    upsert = true
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/links/bulk-upsert",
      query: {
        "upsert": upsert
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Link
   * リンクを削除
   * @returns void
   * @throws ApiError
   */
  static deleteLinkApiV1TagsLinksLinkKeyDelete({
    linkKey
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/tags/links/{link_key}",
      path: {
        "link_key": linkKey
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Compatibility
   * 相性を作成/更新
   * @returns TagCompatibilityResponse Successful Response
   * @throws ApiError
   */
  static createCompatibilityApiV1TagsCompatibilitiesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/compatibilities",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Compatibilities
   * カテゴリペアで相性一覧を取得
   * @returns CompatibilityListCursorResponse Successful Response
   * @throws ApiError
   */
  static listCompatibilitiesApiV1TagsCompatibilitiesGet({
    leftCategoryId,
    rightCategoryId,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/compatibilities",
      query: {
        "left_category_id": leftCategoryId,
        "right_category_id": rightCategoryId,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Generate And Save Compatibilities
   * カテゴリペアの全組み合わせで相性を生成・保存
   * @returns GenerateCompatibilityResultResponse Successful Response
   * @throws ApiError
   */
  static generateAndSaveCompatibilitiesApiV1TagsCompatibilitiesGenerateAndSavePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tags/compatibilities/generate-and-save",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Compatibility
   * 相性を取得
   * @returns TagCompatibilityResponse Successful Response
   * @throws ApiError
   */
  static getCompatibilityApiV1TagsCompatibilitiesPairKeyGet({
    pairKey
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tags/compatibilities/{pair_key}",
      path: {
        "pair_key": pairKey
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Compatibility
   * 相性を削除
   * @returns void
   * @throws ApiError
   */
  static deleteCompatibilityApiV1TagsCompatibilitiesPairKeyDelete({
    pairKey
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/tags/compatibilities/{pair_key}",
      path: {
        "pair_key": pairKey
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/ToolDefinitionsService.ts
var ToolDefinitionsService = class {
  /**
   * Create Tool Definition
   * @returns ToolDefinitionResponse Successful Response
   * @throws ApiError
   */
  static createToolDefinitionApiV1CharactersCharacterIdToolDefinitionsPost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/tool-definitions",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Tool Definitions
   * @returns ToolDefinitionListResponse Successful Response
   * @throws ApiError
   */
  static listToolDefinitionsApiV1CharactersCharacterIdToolDefinitionsGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/tool-definitions",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Tool Definition
   * @returns ToolDefinitionResponse Successful Response
   * @throws ApiError
   */
  static getToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdGet({
    characterId,
    toolDefinitionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/tool-definitions/{tool_definition_id}",
      path: {
        "character_id": characterId,
        "tool_definition_id": toolDefinitionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Tool Definition
   * @returns ToolDefinitionResponse Successful Response
   * @throws ApiError
   */
  static updateToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdPatch({
    characterId,
    toolDefinitionId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/characters/{character_id}/tool-definitions/{tool_definition_id}",
      path: {
        "character_id": characterId,
        "tool_definition_id": toolDefinitionId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Tool Definition
   * @returns void
   * @throws ApiError
   */
  static deleteToolDefinitionApiV1CharactersCharacterIdToolDefinitionsToolDefinitionIdDelete({
    characterId,
    toolDefinitionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/characters/{character_id}/tool-definitions/{tool_definition_id}",
      path: {
        "character_id": characterId,
        "tool_definition_id": toolDefinitionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Reset Tool Definitions
   * 全ツール定義を削除してデフォルトに戻す。
   * @returns ToolDefinitionListResponse Successful Response
   * @throws ApiError
   */
  static resetToolDefinitionsApiV1CharactersCharacterIdToolDefinitionsResetDefaultsPost({
    characterId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/tool-definitions/reset-defaults",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/TtsService.ts
var TtsService = class {
  /**
   * Get Models Details
   * @returns any Successful Response
   * @throws ApiError
   */
  static getModelsDetailsApiV1TtsModelsDetailsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/tts/models/details"
    });
  }
  /**
   * Generate Speech
   * @returns any Successful Response
   * @throws ApiError
   */
  static generateSpeechApiV1TtsGeneratePost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/tts/generate",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/TurnEndPredictionService.ts
var TurnEndPredictionService = class {
  /**
   * Predict Turn End
   * @returns TurnEndPredictionResponse Successful Response
   * @throws ApiError
   */
  static predictTurnEndTurnEndPredictionPredictPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/turn-end-prediction/predict",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Health Check
   * @returns any Successful Response
   * @throws ApiError
   */
  static healthCheckTurnEndPredictionHealthGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/turn-end-prediction/health"
    });
  }
};

// src/generated/services/UnifiedLlmWrapperService.ts
var UnifiedLlmWrapperService = class {
  /**
   * Create Chat Completion
   * 統合チャット補完エンドポイント（通常チャット用）
   *
   * OpenAI、Claude、Gemini、Vertex AIのAPIを統一したインターフェースで提供します。
   * 通常の会話型チャットに最適化されています。
   *
   * 使用例:
   * - providerとmodelを両方指定: {"provider": "openai", "model": "gpt-4.1-mini"}
   * - providerのみ指定: {"provider": "gemini"} (modelはデフォルト)
   * - 両方未指定: コンテンツに応じて自動選択
   *
   * ストリーミング:
   * - stream=true の場合、SSE形式でレスポンスを返します
   * @returns any Successful Response
   * @throws ApiError
   */
  static createChatCompletionApiV1LlmChatCompletionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/llm/chat/completions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Create Structured Completion
   * Structured Output専用エンドポイント
   *
   * JSON Schema制約を厳密に遵守する構造化出力専用。
   * 制約違反を最小化し、信頼性の高いJSON出力を保証します。
   *
   * 制約遵守レベル:
   * - OpenAI: 100%保証（strict mode、スキーマ完全遵守）
   * - Claude: Tool Use（高精度、ほぼ100%）
   * - Gemini: response_schema（ベストエフォート、制約違反の可能性あり）
   *
   * 推奨: 制約遵守が重要な場合はOpenAIモデルを明示的に指定してください。
   *
   * ストリーミング:
   * - stream=true の場合、SSE形式でレスポンスを返します
   * @returns any Successful Response
   * @throws ApiError
   */
  static createStructuredCompletionApiV1LlmStructuredCompletionsPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/llm/structured/completions",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Models
   * 利用可能なモデル一覧を返す（2025年最新版）
   * @returns any Successful Response
   * @throws ApiError
   */
  static listModelsApiV1LlmModelsGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/llm/models"
    });
  }
};

// src/generated/services/UsageSummaryService.ts
var UsageSummaryService = class {
  /**
   * Get Usage Summary
   * @returns UsageSummaryResponse Successful Response
   * @throws ApiError
   */
  static getUsageSummaryApiV1CharactersCharacterIdUsageSummaryGet({
    characterId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/characters/{character_id}/usage-summary",
      path: {
        "character_id": characterId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Accumulate Usage
   * @returns UsageSummaryResponse Successful Response
   * @throws ApiError
   */
  static accumulateUsageApiV1CharactersCharacterIdUsageSummaryAccumulatePost({
    characterId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/characters/{character_id}/usage-summary/accumulate",
      path: {
        "character_id": characterId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/UsersService.ts
var UsersService = class {
  /**
   * Get User
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  static getUserApiV1UsersGet() {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/users"
    });
  }
  /**
   * Create User
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  static createUserApiV1UsersPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete User
   * @returns void
   * @throws ApiError
   */
  static deleteUserApiV1UsersDelete() {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/users"
    });
  }
  /**
   * Update User
   * @returns UserResponse Successful Response
   * @throws ApiError
   */
  static updateUserApiV1UsersPatch({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/users",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Users
   * 複数のユーザーを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetUsersApiV1UsersBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/users/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/VideoAssetsService.ts
var VideoAssetsService = class {
  /**
   * Create Video Asset
   * 動画アセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns VideoAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createVideoAssetApiV1VideoAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/video-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Video Assets
   * 複数のビデオアセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetVideoAssetsApiV1VideoAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/video-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Video Assets
   * Search video assets using field-based filters
   * @returns VideoAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchVideoAssetsApiV1VideoAssetsSearchGet({
    role,
    maxDuration,
    durationRange,
    title,
    ownerId,
    tagIds,
    minLevel,
    artistName,
    resolutionRange,
    hasAudio,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/search",
      query: {
        "role": role,
        "max_duration": maxDuration,
        "duration_range": durationRange,
        "title": title,
        "owner_id": ownerId,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "artist_name": artistName,
        "resolution_range": resolutionRange,
        "has_audio": hasAudio,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Video Asset
   * 動画アセットを取得
   * @returns VideoAssetResponse Successful Response
   * @throws ApiError
   */
  static getVideoAssetApiV1VideoAssetsVideoIdGet({
    videoId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/{video_id}",
      path: {
        "video_id": videoId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Video Asset
   * 動画アセットのメタデータを更新
   * @returns VideoAssetResponse Successful Response
   * @throws ApiError
   */
  static updateVideoAssetApiV1VideoAssetsVideoIdPatch({
    videoId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/video-assets/{video_id}",
      path: {
        "video_id": videoId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Video Asset
   * 動画アセットを削除
   * @returns void
   * @throws ApiError
   */
  static deleteVideoAssetApiV1VideoAssetsVideoIdDelete({
    videoId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/video-assets/{video_id}",
      path: {
        "video_id": videoId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Video Asset Versions
   * 動画アセットのバージョン一覧を取得
   * @returns VideoAssetVersionListResponse Successful Response
   * @throws ApiError
   */
  static listVideoAssetVersionsApiV1VideoAssetsVideoIdVersionsGet({
    videoId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/{video_id}/versions",
      path: {
        "video_id": videoId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Add Video Asset Version
   * 動画アセットに新しいバージョンを追加
   * @returns VideoAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static addVideoAssetVersionApiV1VideoAssetsVideoIdVersionsPost({
    videoId,
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/video-assets/{video_id}/versions",
      path: {
        "video_id": videoId
      },
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Latest Video Version
   * 動画アセットの最新バージョンを取得
   * @returns VideoAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getLatestVideoVersionApiV1VideoAssetsVideoIdVersionsLatestGet({
    videoId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/{video_id}/versions/latest",
      path: {
        "video_id": videoId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Video Asset Version
   * 動画アセットの特定バージョンを取得
   * @returns VideoAssetVersionResponse Successful Response
   * @throws ApiError
   */
  static getVideoAssetVersionApiV1VideoAssetsVideoIdVersionsVersionIdGet({
    videoId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/{video_id}/versions/{version_id}",
      path: {
        "video_id": videoId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Video Asset Version
   * 動画アセットの特定バージョンを削除
   * @returns void
   * @throws ApiError
   */
  static deleteVideoAssetVersionApiV1VideoAssetsVideoIdVersionsVersionIdDelete({
    videoId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/video-assets/{video_id}/versions/{version_id}",
      path: {
        "video_id": videoId,
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Video Assets By Role
   * ロール別に動画アセットを取得
   * @returns VideoAssetListResponse Successful Response
   * @throws ApiError
   */
  static getVideoAssetsByRoleApiV1VideoAssetsRoleRoleGet({
    role,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/video-assets/role/{role}",
      path: {
        "role": role
      },
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/VoicesService.ts
var VoicesService = class {
  /**
   * Create Voice
   * 音声モデルを作成
   * @returns VoiceResponse Successful Response
   * @throws ApiError
   */
  static createVoiceApiV1VoicesPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/voices",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * List Voices
   * 音声モデル一覧を取得
   * @returns VoiceListResponse Successful Response
   * @throws ApiError
   */
  static listVoicesApiV1VoicesGet({
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/voices",
      query: {
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Voices
   * 音声モデルを検索
   * @returns VoiceSearchResponse Successful Response
   * @throws ApiError
   */
  static searchVoicesApiV1VoicesSearchGet({
    languageCode,
    gender,
    ageGroup,
    provider,
    publishScope,
    ownerId,
    tagIds,
    minLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/voices/search",
      query: {
        "language_code": languageCode,
        "gender": gender,
        "age_group": ageGroup,
        "provider": provider,
        "publish_scope": publishScope,
        "owner_id": ownerId,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Voice
   * 音声モデルを取得
   * @returns VoiceResponse Successful Response
   * @throws ApiError
   */
  static getVoiceApiV1VoicesVoiceIdGet({
    voiceId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/voices/{voice_id}",
      path: {
        "voice_id": voiceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Voice
   * 音声モデルを更新（PATCH - 指定されたフィールドのみ更新）
   * @returns VoiceResponse Successful Response
   * @throws ApiError
   */
  static updateVoiceApiV1VoicesVoiceIdPatch({
    voiceId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/voices/{voice_id}",
      path: {
        "voice_id": voiceId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Voice
   * 音声モデルを削除
   * @returns void
   * @throws ApiError
   */
  static deleteVoiceApiV1VoicesVoiceIdDelete({
    voiceId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/voices/{voice_id}",
      path: {
        "voice_id": voiceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Auto Tag Voice By Id
   * 特定の音声モデルに対して自動タグ付けを実行
   * @returns any Successful Response
   * @throws ApiError
   */
  static autoTagVoiceByIdApiV1VoicesVoiceIdAutoTagPost({
    voiceId
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/voices/{voice_id}/auto-tag",
      path: {
        "voice_id": voiceId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Voices
   * 複数の音声モデルを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetVoicesApiV1VoicesBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/voices/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/VrmaAssetsService.ts
var VrmaAssetsService = class {
  /**
   * Create Vrma Asset
   * VRMAアセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * サムネイル画像・プレビューアニメーション画像は、ファイル直接アップロードまたは既存asset_id参照のいずれかを指定可能。
   * 両方を同時に指定した場合は400エラー。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns VRMAAssetWithVersionResponse Successful Response
   * @throws ApiError
   */
  static createVrmaAssetApiV1VrmaAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/vrma-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Vrma Assets
   * VRMAアセットを検索
   *
   * Args:
   * owner_id: オーナーIDでフィルタ
   * motion_id: モーションIDでフィルタ
   * motion_type: モーションタイプでフィルタ
   * emotion_id: 感情IDでフィルタ
   * target_gender: 性別でフィルタ
   * data_source: データソースでフィルタ
   * tag_ids: タグIDリスト（AND検索）
   * min_level: タグの最小レベル (core, secondary, flavor)
   * is_loopable: ループ可能フィルタ
   * has_root_motion: Root Motionフィルタ
   * min_duration: 最小再生時間（秒）
   * max_duration: 最大再生時間（秒）
   * limit: 最大取得件数
   * cursor: ページネーションカーソル
   * @returns VRMAAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchVrmaAssetsApiV1VrmaAssetsSearchGet({
    ownerId,
    motionId,
    motionType,
    emotionId,
    targetGender,
    dataSource,
    tagIds,
    minLevel,
    maxAiLevel,
    isLoopable,
    hasRootMotion,
    minDuration,
    maxDuration,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrma-assets/search",
      query: {
        "owner_id": ownerId,
        "motion_id": motionId,
        "motion_type": motionType,
        "emotion_id": emotionId,
        "target_gender": targetGender,
        "data_source": dataSource,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "is_loopable": isLoopable,
        "has_root_motion": hasRootMotion,
        "min_duration": minDuration,
        "max_duration": maxDuration,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Vrma Assets
   * 複数のVRMAアセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetVrmaAssetsApiV1VrmaAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/vrma-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrma Asset
   * VRMAアセットの詳細情報を取得
   *
   * キャッシュ更新判定に使用するため、updated_atを含む
   *
   * Returns:
   * VRMAAsset: アセットの詳細情報
   * @returns VRMAAssetResponse Successful Response
   * @throws ApiError
   */
  static getVrmaAssetApiV1VrmaAssetsVrmaIdGet({
    vrmaId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrma-assets/{vrma_id}",
      path: {
        "vrma_id": vrmaId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Vrma Asset
   * VRMAアセットのメタデータを更新
   * @returns VRMAAssetResponse Successful Response
   * @throws ApiError
   */
  static updateVrmaAssetApiV1VrmaAssetsVrmaIdPatch({
    vrmaId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/vrma-assets/{vrma_id}",
      path: {
        "vrma_id": vrmaId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Vrma Asset
   * VRMAアセットを削除
   *
   * 参照されている場合は削除不可
   * @returns void
   * @throws ApiError
   */
  static deleteVrmaAssetApiV1VrmaAssetsVrmaIdDelete({
    vrmaId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/vrma-assets/{vrma_id}",
      path: {
        "vrma_id": vrmaId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrma File Url
   * VRMAファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getVrmaFileUrlApiV1VrmaAssetsVrmaIdFileGet({
    vrmaId,
    versionId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrma-assets/{vrma_id}/file",
      path: {
        "vrma_id": vrmaId
      },
      query: {
        "version_id": versionId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

// src/generated/services/VrmAssetsService.ts
var VrmAssetsService = class {
  /**
   * Create Vrm Asset
   * VRMアセットを作成
   *
   * ファイルアップロードと全メタデータを含む。
   * 複雑なデータ構造はJSON文字列で渡す。
   * @returns VRMAssetResponse Successful Response
   * @throws ApiError
   */
  static createVrmAssetApiV1VrmAssetsPost({
    formData
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/vrm-assets",
      formData,
      mediaType: "multipart/form-data",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Search Vrm Assets
   * VRMアセットを検索
   *
   * Args:
   * owner_id: オーナーIDでフィルタ
   * model_name: モデル名でフィルタ
   * artist_name: アーティスト名でフィルタ
   * tags: カンマ区切りのタグでフィルタ（すべて一致、重み順でソート）
   * min_level: タグの最小レベル (core, secondary, flavor)
   * limit: 最大取得件数
   * cursor: ページネーションカーソル
   * @returns VRMAssetListResponse Successful Response
   * @throws ApiError
   */
  static searchVrmAssetsApiV1VrmAssetsSearchGet({
    ownerId,
    modelName,
    artistName,
    tagIds,
    minLevel,
    maxAiLevel,
    limit = 50,
    cursor
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrm-assets/search",
      query: {
        "owner_id": ownerId,
        "model_name": modelName,
        "artist_name": artistName,
        "tag_ids": tagIds,
        "min_level": minLevel,
        "max_ai_level": maxAiLevel,
        "limit": limit,
        "cursor": cursor
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Batch Get Vrm Assets
   * 複数のVRMアセットを一括取得
   * @returns any Successful Response
   * @throws ApiError
   */
  static batchGetVrmAssetsApiV1VrmAssetsBatchPost({
    requestBody
  }) {
    return request(OpenAPI, {
      method: "POST",
      url: "/api/v1/vrm-assets/batch",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrm Asset
   * VRMアセットの詳細情報を取得
   *
   * キャッシュ更新判定に使用するため、updated_atを含む
   *
   * Returns:
   * VRMAsset: アセットの詳細情報
   * @returns VRMAssetResponse Successful Response
   * @throws ApiError
   */
  static getVrmAssetApiV1VrmAssetsVrmIdGet({
    vrmId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrm-assets/{vrm_id}",
      path: {
        "vrm_id": vrmId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Update Vrm Asset
   * VRMアセットのメタデータを更新
   * @returns VRMAssetResponse Successful Response
   * @throws ApiError
   */
  static updateVrmAssetApiV1VrmAssetsVrmIdPatch({
    vrmId,
    requestBody
  }) {
    return request(OpenAPI, {
      method: "PATCH",
      url: "/api/v1/vrm-assets/{vrm_id}",
      path: {
        "vrm_id": vrmId
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Delete Vrm Asset
   * VRMアセットを削除
   *
   * 参照されている場合は削除不可
   * @returns void
   * @throws ApiError
   */
  static deleteVrmAssetApiV1VrmAssetsVrmIdDelete({
    vrmId
  }) {
    return request(OpenAPI, {
      method: "DELETE",
      url: "/api/v1/vrm-assets/{vrm_id}",
      path: {
        "vrm_id": vrmId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrm File Url
   * VRMファイルのダウンロード用一時URL（Signed URL）を返す
   *
   * Returns:
   * {"url": "https://storage.googleapis.com/...?X-Goog-Expires=180"}
   * URLは3分間有効
   * @returns SignedUrlResponse Successful Response
   * @throws ApiError
   */
  static getVrmFileUrlApiV1VrmAssetsVrmIdFileGet({
    vrmId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrm-assets/{vrm_id}/file",
      path: {
        "vrm_id": vrmId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
  /**
   * Get Vrm Protected File
   * 保護済みVRMファイルのダウンロード情報を返す
   *
   * ファイルはメッシュ難読化 + zstd圧縮 + AES-256-GCM暗号化済み。
   * クライアントは /content-protection/keys/{key_id} から鍵を取得して復号する。
   * @returns ProtectedFileResponse Successful Response
   * @throws ApiError
   */
  static getVrmProtectedFileApiV1VrmAssetsVrmIdProtectedFileGet({
    vrmId
  }) {
    return request(OpenAPI, {
      method: "GET",
      url: "/api/v1/vrm-assets/{vrm_id}/protected-file",
      path: {
        "vrm_id": vrmId
      },
      errors: {
        422: `Validation Error`
      }
    });
  }
};

export {
  ApiError,
  CancelError,
  CancelablePromise,
  AccessoriesService,
  AdminService,
  AdminDbStatsService,
  AdminFirestoreService,
  AdminForensicsService,
  AdminMigrationService,
  AdminReviewsService,
  AnimatedImageAssetsService,
  AnimationClipAssetsService,
  AssetBundleAssetsService,
  AssetVariantsService,
  AudioAssetsService,
  AuthenticationService,
  AutoParamsService,
  AutoTaggingService,
  AvatarAppearanceVariantsService,
  AvatarBlinksService,
  AvatarBreathingsService,
  AvatarCoreMotionsService,
  AvatarExpressionsService,
  AvatarInstancesService,
  AvatarItemAttachmentsService,
  AvatarLipsyncsService,
  AvatarLookatsService,
  AvatarModelsService,
  AvatarMotionsService,
  AvatarsService,
  AvatarTemplatesService,
  CacheMetadataService,
  CharacterAbilitiesService,
  CharacterActionsService,
  CharacterBackgroundDetailsService,
  CharacterBasicInfoService,
  CharacterDailyLifeService,
  CharacterEmotionsService,
  CharacterEquipmentService,
  CharacterInstancesService,
  CharacterInventoryService,
  CharacterMotionsService,
  CharacterPersonalityParamsService,
  CharacterPhysicalIdentityService,
  CharacterPreferencesService,
  CharacterProfileGenerationService,
  CharactersService,
  CharacterTemplatesService,
  ContentProtectionService,
  CreatorsService,
  DefaultService,
  EmotionConfigService,
  EmotionFormatsBlendshapeService,
  EmotionFormatsFaceIconService,
  EmotionFormatsGlbService,
  EmotionFormatsSpriteService,
  EmotionsService,
  EquipmentMotionOverlaysService,
  GaussianSplatAssetsService,
  GlbAssetsService,
  GroupBansService,
  GroupInvitesService,
  GroupJoinRequestsService,
  GroupsService,
  HairStylesService,
  ImageAssetsService,
  InternalService,
  InternalMarketplaceService,
  KnowledgeGraphService,
  LlmModelsService,
  MarketplaceBrowseService,
  MarketplaceDistributionBundlesService,
  MarketplaceDistributionsService,
  MarketplaceEntitlementsService,
  MarketplaceFavoritesService,
  MarketplaceGiftsService,
  MarketplaceListingBundlesService,
  MarketplaceListingsService,
  MarketplaceNotificationsService,
  MarketplaceReportsService,
  MarketplaceReviewsService,
  MemoriesService,
  MemoryOrganizationService,
  MoodService,
  MotionFormatsAnimatorService,
  MotionFormatsGlbService,
  MotionFormatsVrmaService,
  MotionsService,
  MotionsSummaryService,
  OutfitsService,
  PersonalityPresetsService,
  RelationshipContextService,
  RelationshipsService,
  ReviewsService,
  SchedulesService,
  SessionHistoryService,
  SettingsService,
  SettingsSnippetsService,
  SettingsSnippetsClientService,
  StateService,
  StoriesService,
  TagsService,
  ToolDefinitionsService,
  TtsService,
  TurnEndPredictionService,
  UnifiedLlmWrapperService,
  UsageSummaryService,
  UsersService,
  VideoAssetsService,
  VoicesService,
  VrmaAssetsService,
  VrmAssetsService
};
