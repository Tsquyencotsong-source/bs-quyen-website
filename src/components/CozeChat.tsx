"use client";

import { useEffect } from "react";

const COZE_BOT_ID = "7671836676280909877";
const COZE_SDK_SRC =
  "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/oversea/index.js";

// Xin access_token ngắn hạn từ cầu nối /api/coze-token (private key nằm ở server, không lộ ra client).
async function fetchCozeToken(): Promise<string> {
  const res = await fetch("/api/coze-token", { cache: "no-store" });
  const data = await res.json();
  if (!res.ok || !data?.token) {
    throw new Error(data?.error || "Không lấy được token Coze");
  }
  return data.token as string;
}

export default function CozeChat() {
  useEffect(() => {
    let cancelled = false;

    async function init() {
      let token: string;
      try {
        token = await fetchCozeToken();
      } catch {
        // Cầu nối chưa cấu hình xong (thiếu env) → không hiện chat, tránh lỗi cho khách.
        return;
      }
      if (cancelled || document.getElementById("coze-sdk-script")) return;

      const script = document.createElement("script");
      script.id = "coze-sdk-script";
      script.src = COZE_SDK_SRC;
      script.async = true;
      script.onload = () => {
        const CozeWebSDK = (
          window as unknown as {
            CozeWebSDK?: { WebChatClient: new (opts: unknown) => unknown };
          }
        ).CozeWebSDK;
        if (!CozeWebSDK) return;
        new CozeWebSDK.WebChatClient({
          config: { bot_id: COZE_BOT_ID },
          componentProps: { title: "Bé Bự — Trợ lý BS. Quyền" },
          auth: {
            type: "token",
            token,
            onRefreshToken: async () => await fetchCozeToken(),
          },
        });
      };
      document.body.appendChild(script);
    }

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
