import { NextResponse } from "next/server";
import crypto from "crypto";

// Cầu nối token an toàn cho Coze Chat SDK (Bé Bự).
// Ký JWT bằng private key (bí mật, lưu trong biến môi trường Vercel — KHÔNG nằm trong repo),
// đổi lấy access_token ngắn hạn từ Coze. Client không bao giờ thấy private key.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
    exp: now + 600, // JWT sống 10 phút, chỉ để đổi lấy access_token
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

export async function GET() {
  try {
    if (!COZE_APP_ID || !COZE_KEY_ID || !COZE_PRIVATE_KEY) {
      return NextResponse.json(
        { error: "Coze OAuth chưa cấu hình (thiếu COZE_APP_ID / COZE_KEY_ID / COZE_PRIVATE_KEY)." },
        { status: 500 }
      );
    }
    const jwt = signJWT();
    const res = await fetch(COZE_TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        duration_seconds: 900, // access_token sống 15 phút, SDK tự xin lại khi hết
      }),
    });
    const data = await res.json();
    if (!res.ok || !data?.access_token) {
      return NextResponse.json(
        { error: "Không lấy được token từ Coze", detail: data },
        { status: 502 }
      );
    }
    return NextResponse.json({
      token: data.access_token,
      expires_in: data.expires_in,
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Lỗi ký JWT" },
      { status: 500 }
    );
  }
}
