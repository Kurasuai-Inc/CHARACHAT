// src/MinimalOnboardingFlow.tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "@kurasuai-inc/charahome-auth/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function calculateAge(birthDate) {
  const today = /* @__PURE__ */ new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();
  if (monthDiff < 0 || monthDiff === 0 && dayDiff < 0) {
    age -= 1;
  }
  return age;
}
function isValidDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
}
function panelStyle(compact = false) {
  return {
    display: "flex",
    flexDirection: "column",
    gap: compact ? "0.75rem" : "1rem"
  };
}
function fieldStyle() {
  return {
    width: "100%",
    border: "1px solid rgba(15, 23, 42, 0.18)",
    borderRadius: "0.9rem",
    padding: "0.95rem 1rem",
    fontSize: "0.98rem",
    background: "rgba(255,255,255,0.96)",
    color: "#132238",
    boxSizing: "border-box"
  };
}
function primaryButtonStyle(disabled) {
  return {
    border: "none",
    borderRadius: "999px",
    padding: "0.95rem 1.2rem",
    fontSize: "0.98rem",
    fontWeight: 700,
    cursor: disabled ? "not-allowed" : "pointer",
    background: disabled ? "#94a3b8" : "#0f766e",
    color: "#f8fafc"
  };
}
function secondaryButtonStyle(active) {
  return {
    border: active ? "1px solid rgba(15, 118, 110, 0.35)" : "1px solid rgba(15, 23, 42, 0.12)",
    borderRadius: "999px",
    padding: "0.8rem 1rem",
    fontSize: "0.95rem",
    cursor: "pointer",
    background: active ? "rgba(15, 118, 110, 0.1)" : "rgba(255,255,255,0.85)",
    color: "#132238",
    fontWeight: active ? 700 : 500
  };
}
function MinimalOnboardingFlow({
  api,
  title = "CHARAHOME",
  subtitle = "\u30ED\u30B0\u30A4\u30F3\u307E\u305F\u306F\u65B0\u898F\u767B\u9332\u3092\u884C\u3046\u3068\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3068\u306E\u4F1A\u8A71\u3092\u59CB\u3081\u3089\u308C\u307E\u3059\u3002",
  tosUrl,
  privacyPolicyUrl,
  tosVersion,
  privacyPolicyVersion,
  minimumAge = 13,
  allowAnonymous = false,
  submitLabel = "\u7D9A\u3051\u308B",
  onComplete
}) {
  const {
    charahomeUser,
    loading,
    signInAnonymously,
    signInWithCHARAHOME,
    createCHARAHOMEAccount,
    forceGetCharahomeToken,
    getDerivedToken
  } = useAuth();
  const [step, setStep] = useState("auth");
  const [authMode, setAuthMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [acceptTos, setAcceptTos] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [profile, setProfile] = useState(null);
  const [lastResolvedUid, setLastResolvedUid] = useState(null);
  const [accountWasCreated, setAccountWasCreated] = useState(false);
  const resetAuthError = () => setError(null);
  const finish = useCallback(async (user, isNewAccount) => {
    const charahomeToken = await forceGetCharahomeToken();
    const derivedToken = await getDerivedToken();
    if (!charahomeToken) {
      throw new Error("CHARAHOME token could not be resolved.");
    }
    const payload = {
      user,
      charahomeToken,
      derivedToken,
      isNewAccount
    };
    setProfile(user);
    setStep("complete");
    if (onComplete) {
      await onComplete(payload);
    }
  }, [forceGetCharahomeToken, getDerivedToken, onComplete]);
  const resolveProfileStep = useCallback(async (isNewAccount) => {
    const charahomeToken = await forceGetCharahomeToken();
    if (!charahomeToken) {
      throw new Error("Not authenticated.");
    }
    const user = api.ensureUser ? await api.ensureUser(charahomeToken) : await api.getUser(charahomeToken);
    setProfile(user);
    const hasConsent = Boolean(user.tos_accepted_at && user.privacy_policy_accepted_at);
    if (!hasConsent) {
      setStep("consent");
      return;
    }
    if (!user.birth_date) {
      setStep("age");
      return;
    }
    const age = calculateAge(user.birth_date);
    if (age < minimumAge) {
      setStep("blocked");
      return;
    }
    await finish(user, isNewAccount);
  }, [api, finish, forceGetCharahomeToken, minimumAge]);
  useEffect(() => {
    if (loading || !charahomeUser) {
      return;
    }
    if (charahomeUser.uid === lastResolvedUid) {
      return;
    }
    setLastResolvedUid(charahomeUser.uid);
    setBusy(true);
    setError(null);
    void resolveProfileStep(accountWasCreated).catch((resolveError) => {
      setError(resolveError instanceof Error ? resolveError.message : "Failed to resolve onboarding state.");
      setStep("auth");
    }).finally(() => {
      setBusy(false);
    });
  }, [accountWasCreated, charahomeUser, lastResolvedUid, loading, resolveProfileStep]);
  const submitAuth = useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      if (authMode === "anonymous") {
        await signInAnonymously();
        setAccountWasCreated(true);
        return;
      }
      if (!email.trim() || !password) {
        throw new Error("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      }
      if (authMode === "register") {
        if (password.length < 8) {
          throw new Error("\u30D1\u30B9\u30EF\u30FC\u30C9\u306F8\u6587\u5B57\u4EE5\u4E0A\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
        }
        if (password !== confirmPassword) {
          throw new Error("\u78BA\u8A8D\u7528\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u307E\u305B\u3093\u3002");
        }
        await createCHARAHOMEAccount(email.trim(), password);
        setAccountWasCreated(true);
        return;
      }
      await signInWithCHARAHOME(email.trim(), password);
      setAccountWasCreated(false);
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "\u8A8D\u8A3C\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");
      setLastResolvedUid(null);
    } finally {
      setBusy(false);
    }
  }, [authMode, confirmPassword, createCHARAHOMEAccount, email, password, signInAnonymously, signInWithCHARAHOME]);
  const submitConsent = useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      if (!acceptTos || !acceptPrivacy) {
        throw new Error("\u5229\u7528\u898F\u7D04\u3068\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u3078\u306E\u540C\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002");
      }
      const token = await forceGetCharahomeToken();
      if (!token) {
        throw new Error("\u8A8D\u8A3C\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
      }
      const user = await api.patchUser({
        tos_version: tosVersion,
        privacy_policy_version: privacyPolicyVersion
      }, token);
      setProfile(user);
      setStep("age");
    } catch (consentError) {
      setError(consentError instanceof Error ? consentError.message : "\u540C\u610F\u306E\u4FDD\u5B58\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");
    } finally {
      setBusy(false);
    }
  }, [acceptPrivacy, acceptTos, api, forceGetCharahomeToken, privacyPolicyVersion, tosVersion]);
  const submitAge = useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      if (!isValidDate(birthDate)) {
        throw new Error("\u751F\u5E74\u6708\u65E5\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      }
      const age = calculateAge(birthDate);
      if (age < minimumAge) {
        setStep("blocked");
        return;
      }
      const token = await forceGetCharahomeToken();
      if (!token) {
        throw new Error("\u8A8D\u8A3C\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
      }
      const user = await api.patchUser({ birth_date: birthDate }, token);
      setProfile(user);
      await finish(user, accountWasCreated);
    } catch (ageError) {
      setError(ageError instanceof Error ? ageError.message : "\u5E74\u9F62\u78BA\u8A8D\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002");
    } finally {
      setBusy(false);
    }
  }, [accountWasCreated, api, birthDate, finish, forceGetCharahomeToken, minimumAge]);
  const currentTitle = useMemo(() => {
    if (step === "consent") return "\u5229\u7528\u898F\u7D04\u3078\u306E\u540C\u610F";
    if (step === "age") return "\u5E74\u9F62\u78BA\u8A8D";
    if (step === "blocked") return "\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u305B\u3093";
    if (step === "complete") return "\u63A5\u7D9A\u6E96\u5099\u304C\u3067\u304D\u307E\u3057\u305F";
    return title;
  }, [step, title]);
  return /* @__PURE__ */ jsx("section", { style: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
    background: "radial-gradient(circle at top, #f8fafc 0%, #e2e8f0 100%)",
    color: "#132238",
    fontFamily: '"Segoe UI", "Hiragino Sans", "Yu Gothic UI", sans-serif'
  }, children: /* @__PURE__ */ jsxs("div", { style: {
    width: "min(100%, 29rem)",
    background: "rgba(255,255,255,0.94)",
    borderRadius: "1.6rem",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
    padding: "1.5rem"
  }, children: [
    /* @__PURE__ */ jsxs("header", { style: { ...panelStyle(true), marginBottom: "1.1rem" }, children: [
      /* @__PURE__ */ jsx("span", { style: {
        display: "inline-flex",
        alignSelf: "flex-start",
        padding: "0.35rem 0.65rem",
        borderRadius: "999px",
        background: "rgba(15, 118, 110, 0.12)",
        color: "#0f766e",
        fontWeight: 700,
        fontSize: "0.83rem"
      }, children: "Minimal Onboarding" }),
      /* @__PURE__ */ jsx("h1", { style: { margin: 0, fontSize: "1.55rem" }, children: currentTitle }),
      /* @__PURE__ */ jsxs("p", { style: { margin: 0, color: "#475569", lineHeight: 1.6 }, children: [
        step === "auth" ? subtitle : "",
        step === "consent" ? "\u6700\u4F4E\u9650\u306E\u540C\u610F\u3060\u3051\u5148\u306B\u6E08\u307E\u305B\u307E\u3059\u3002" : "",
        step === "age" ? `\u751F\u5E74\u6708\u65E5\u3092\u5165\u529B\u3059\u308B\u3068\u5229\u7528\u53EF\u5426\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002${minimumAge}\u6B73\u672A\u6E80\u306F\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002` : "",
        step === "blocked" ? `${minimumAge}\u6B73\u672A\u6E80\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u306F\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u305B\u3093\u3002` : "",
        step === "complete" ? "\u3053\u306E\u3042\u3068\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u5074\u3067 favorite character \u3084\u4F1A\u8A71\u5148\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002" : ""
      ] })
    ] }),
    error ? /* @__PURE__ */ jsx("div", { style: {
      marginBottom: "1rem",
      borderRadius: "1rem",
      padding: "0.9rem 1rem",
      background: "rgba(239, 68, 68, 0.1)",
      color: "#991b1b"
    }, children: error }) : null,
    step === "auth" ? /* @__PURE__ */ jsxs("div", { style: panelStyle(), children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "0.6rem", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsx("button", { type: "button", style: secondaryButtonStyle(authMode === "login"), onClick: () => {
          setAuthMode("login");
          resetAuthError();
        }, children: "\u30ED\u30B0\u30A4\u30F3" }),
        /* @__PURE__ */ jsx("button", { type: "button", style: secondaryButtonStyle(authMode === "register"), onClick: () => {
          setAuthMode("register");
          resetAuthError();
        }, children: "\u65B0\u898F\u767B\u9332" }),
        allowAnonymous ? /* @__PURE__ */ jsx("button", { type: "button", style: secondaryButtonStyle(authMode === "anonymous"), onClick: () => {
          setAuthMode("anonymous");
          resetAuthError();
        }, children: "\u533F\u540D\u3067\u306F\u3058\u3081\u308B" }) : null
      ] }),
      authMode === "anonymous" ? /* @__PURE__ */ jsx("div", { style: { borderRadius: "1rem", background: "rgba(15, 23, 42, 0.04)", padding: "1rem", lineHeight: 1.6, color: "#475569" }, children: "\u533F\u540D\u3067\u958B\u59CB\u3059\u308B\u3068\u3001\u3042\u3068\u304B\u3089 CHARAHOME \u30A2\u30AB\u30A6\u30F3\u30C8\u3078\u5F15\u304D\u7D99\u3052\u307E\u3059\u3002" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            style: fieldStyle(),
            type: "email",
            placeholder: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
            value: email,
            onChange: (event) => setEmail(event.target.value),
            autoComplete: "email"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            style: fieldStyle(),
            type: "password",
            placeholder: "\u30D1\u30B9\u30EF\u30FC\u30C9",
            value: password,
            onChange: (event) => setPassword(event.target.value),
            autoComplete: authMode === "login" ? "current-password" : "new-password"
          }
        ),
        authMode === "register" ? /* @__PURE__ */ jsx(
          "input",
          {
            style: fieldStyle(),
            type: "password",
            placeholder: "\u78BA\u8A8D\u7528\u30D1\u30B9\u30EF\u30FC\u30C9",
            value: confirmPassword,
            onChange: (event) => setConfirmPassword(event.target.value),
            autoComplete: "new-password"
          }
        ) : null
      ] }),
      /* @__PURE__ */ jsx("button", { type: "button", style: primaryButtonStyle(busy || loading), disabled: busy || loading, onClick: () => {
        void submitAuth();
      }, children: busy || loading ? "\u51E6\u7406\u4E2D..." : submitLabel })
    ] }) : null,
    step === "consent" ? /* @__PURE__ */ jsxs("div", { style: panelStyle(), children: [
      /* @__PURE__ */ jsxs("label", { style: { display: "flex", gap: "0.75rem", alignItems: "flex-start", lineHeight: 1.6 }, children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: acceptTos, onChange: (event) => setAcceptTos(event.target.checked) }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("a", { href: tosUrl, target: "_blank", rel: "noreferrer", children: "\u5229\u7528\u898F\u7D04" }),
          " \u306B\u540C\u610F\u3057\u307E\u3059\u3002"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { style: { display: "flex", gap: "0.75rem", alignItems: "flex-start", lineHeight: 1.6 }, children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: acceptPrivacy, onChange: (event) => setAcceptPrivacy(event.target.checked) }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("a", { href: privacyPolicyUrl, target: "_blank", rel: "noreferrer", children: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC" }),
          " \u306B\u540C\u610F\u3057\u307E\u3059\u3002"
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "button", style: primaryButtonStyle(busy), disabled: busy, onClick: () => {
        void submitConsent();
      }, children: busy ? "\u4FDD\u5B58\u4E2D..." : "\u540C\u610F\u3057\u3066\u7D9A\u3051\u308B" })
    ] }) : null,
    step === "age" ? /* @__PURE__ */ jsxs("div", { style: panelStyle(), children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          style: fieldStyle(),
          type: "date",
          value: birthDate,
          onChange: (event) => setBirthDate(event.target.value),
          max: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "button", style: primaryButtonStyle(busy), disabled: busy, onClick: () => {
        void submitAge();
      }, children: busy ? "\u78BA\u8A8D\u4E2D..." : "\u5E74\u9F62\u3092\u78BA\u8A8D\u3059\u308B" })
    ] }) : null,
    step === "blocked" ? /* @__PURE__ */ jsx("div", { style: panelStyle(), children: /* @__PURE__ */ jsx("div", { style: { borderRadius: "1rem", background: "rgba(15, 23, 42, 0.04)", padding: "1rem", lineHeight: 1.7, color: "#475569" }, children: "\u5E74\u9F62\u6761\u4EF6\u3092\u6E80\u305F\u3057\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u30B5\u30FC\u30D3\u30B9\u306F\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002" }) }) : null,
    step === "complete" ? /* @__PURE__ */ jsx("div", { style: panelStyle(), children: /* @__PURE__ */ jsxs("div", { style: { borderRadius: "1rem", background: "rgba(15, 118, 110, 0.1)", padding: "1rem", lineHeight: 1.7, color: "#115e59" }, children: [
      "\u30A2\u30AB\u30A6\u30F3\u30C8\u6E96\u5099\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002",
      profile?.favorite_character_id ? ` \u304A\u6C17\u306B\u5165\u308A\u30AD\u30E3\u30E9\u306F ${profile.favorite_character_id} \u3067\u3059\u3002` : ""
    ] }) }) : null
  ] }) });
}

// src/api.ts
var DEFAULT_USER_NAME = "\u540D\u524D\u304C\u5206\u304B\u3089\u306A\u3044\u4EBA";
var MinimalOnboardingApiError = class extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = "MinimalOnboardingApiError";
  }
};
async function requestJson(url, init) {
  const response = await fetch(url, init);
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const detail = data?.detail;
    throw new MinimalOnboardingApiError(detail ?? `Request failed with ${response.status}.`, response.status);
  }
  return data;
}
function normalizeBaseUrl(baseUrl) {
  return baseUrl.replace(/\/$/, "");
}
function createMinimalOnboardingFetchAdapter(options) {
  const baseUrl = normalizeBaseUrl(options.baseUrl);
  const defaultHeaders = options.headers ?? {};
  const defaultUserName = options.defaultUserName?.trim() || DEFAULT_USER_NAME;
  const withAuth = (token, contentType = true) => ({
    ...defaultHeaders,
    Authorization: `Bearer ${token}`,
    ...contentType ? { "Content-Type": "application/json" } : {}
  });
  const getUser = async (token) => requestJson(
    `${baseUrl}/users`,
    {
      method: "GET",
      headers: withAuth(token, false)
    }
  );
  const createUser = async (token) => requestJson(
    `${baseUrl}/users`,
    {
      method: "POST",
      headers: withAuth(token),
      body: JSON.stringify({
        user_name: defaultUserName
      })
    }
  );
  const ensureUser = async (token) => {
    try {
      return await getUser(token);
    } catch (error) {
      if (error instanceof MinimalOnboardingApiError && error.status === 404) {
        return createUser(token);
      }
      throw error;
    }
  };
  const patchUser = async (data, token) => {
    await ensureUser(token);
    return requestJson(
      `${baseUrl}/users`,
      {
        method: "PATCH",
        headers: withAuth(token),
        body: JSON.stringify(data)
      }
    );
  };
  return {
    getUser,
    createUser,
    ensureUser,
    patchUser
  };
}
export {
  MinimalOnboardingFlow,
  createMinimalOnboardingFetchAdapter
};
