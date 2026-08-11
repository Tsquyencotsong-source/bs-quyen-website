"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Dạ em chào anh/chị, em là Bé Bự — trợ lý của phòng khám BS. Nguyễn Ngọc Quyền ạ 🌿 Anh/chị cần em hỗ trợ gì ạ? (tư vấn cột sống - loãng xương, đặt lịch khám, hay dặn dò sau khám...)";

export default function CozeChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const convRef = useRef<string | undefined>(undefined);
  const userIdRef = useRef<string>("web_" + Math.random().toString(36).slice(2, 12));
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/coze-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          conversationId: convRef.current,
          userId: userIdRef.current,
        }),
      });
      const data = (await res.json()) as { reply?: string; conversationId?: string };
      if (data.conversationId) convRef.current = data.conversationId;
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.reply || "Dạ em chưa trả lời được câu này, anh/chị thử lại giúp em nha 🙏",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Dạ mạng đang trục trặc, anh/chị thử lại sau giúp em nha 🙏" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat với Bé Bự"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
          boxShadow: "0 4px 16px rgba(109,40,217,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M12 3C6.5 3 2 6.86 2 11.5c0 2.08.9 3.98 2.4 5.44-.1.9-.5 2.2-1.4 3.06 0 0 2.2-.3 3.7-1.3.9.35 2.1.8 3.3.8 5.5 0 10-3.86 10-8.5S17.5 3 12 3z" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "92px",
            right: "24px",
            zIndex: 9999,
            width: "370px",
            maxWidth: "calc(100vw - 32px)",
            height: "540px",
            maxHeight: "calc(100vh - 120px)",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg,#1e3a5f,#16324f)",
              color: "#fff",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "#7c3aed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                🩺
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px" }}>Bé Bự</div>
                <div style={{ fontSize: "11px", opacity: 0.85 }}>Trợ lý TS.BS. Nguyễn Ngọc Quyền</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Đóng"
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "22px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "14px",
              background: "#f7f8fa",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "82%",
                  background: m.role === "user" ? "#1e3a5f" : "#fff",
                  color: m.role === "user" ? "#fff" : "#1f2937",
                  padding: "9px 12px",
                  borderRadius: "14px",
                  fontSize: "14px",
                  lineHeight: 1.55,
                  whiteSpace: "pre-wrap",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                }}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: "flex-start", color: "#6b7280", fontSize: "13px", padding: "4px 8px" }}>
                Bé Bự đang trả lời…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div style={{ display: "flex", gap: "8px", padding: "10px", borderTop: "1px solid #eee", background: "#fff" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              placeholder="Nhập câu hỏi cho Bé Bự…"
              disabled={loading}
              style={{
                flex: 1,
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "9px 12px",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Gửi"
              style={{
                background: "#1e3a5f",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "0 16px",
                cursor: loading || !input.trim() ? "default" : "pointer",
                fontSize: "14px",
                fontWeight: 600,
                opacity: loading || !input.trim() ? 0.6 : 1,
              }}
            >
              Gửi
            </button>
          </div>
          <div style={{ fontSize: "10px", color: "#9ca3af", textAlign: "center", padding: "0 8px 8px" }}>
            Thông tin chỉ mang tính tham khảo, không thay thế việc khám trực tiếp.
          </div>
        </div>
      )}
    </>
  );
}
