import crypto from "crypto";

// Lấy access_token ngắn hạn từ Coze bằng JWT (Service App OAuth).
// Private key nằm trong biến môi trường (server-side), không lộ ra client.

const COZE_APP_ID = process.env.COZE_APP_ID || "";
const COZE_KEY_ID = process.env.COZE_KEY_ID || "";
const COZE_PRIVATE_KEY = (process.env.COZE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
const COZE_AUD = "api.coze.com";
const COZE_TOKEN_URL = "https://api.coze.com/api/permission/oauth2/token";

function base64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function signJWT(): string {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT", kid: COZE_KEY_ID };
  const payload = {
    iss: COZE_APP_ID,
    aud: COZE_AUD,
    iat: now,
    exp: now + 600,
    jti: crypto.randomUUID(),
  };
  const signingInput = `${base64url(JSON.stringify(header))}.${base64url(
    JSON.stringify(payload)
  )}`;
  const signature = crypto.sign(
    "RSA-SHA256",
    Buffer.from(signingInput),
    COZE_PRIVATE_KEY
  );
  return `${signingInput}.${base64url(signature)}`;
}

export function cozeConfigured(): boolean {
  return Boolean(COZE_APP_ID && COZE_KEY_ID && COZE_PRIVATE_KEY);
}

export async function getCozeAccessToken(): Promise<string> {
  const jwt = signJWT();
  const res = await fetch(COZE_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      duration_seconds: 900,
    }),
  });
  const data = (await res.json()) as { access_token?: string };
  if (!res.ok || !data?.access_token) {
    throw new Error("Coze token error: " + JSON.stringify(data).slice(0, 200));
  }
  return data.access_token;
}
