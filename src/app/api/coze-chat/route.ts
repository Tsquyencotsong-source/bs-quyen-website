import { NextResponse } from "next/server";
import { getCozeAccessToken, cozeConfigured } from "@/lib/coze";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const BOT_ID = "7671836676280909877";
const API = "https://api.coze.com";

export async function POST(req: Request) {
  try {
    if (!cozeConfigured()) {
      return NextResponse.json({ error: "Coze chưa cấu hình" }, { status: 500 });
    }
    const body = (await req.json()) as {
      message?: string;
      conversationId?: string;
      userId?: string;
    };
    const message = (body.message || "").trim();
    if (!message) {
      return NextResponse.json({ error: "Thiếu nội dung tin nhắn" }, { status: 400 });
    }
    const userId = body.userId && typeof body.userId === "string" ? body.userId : "web_guest";
    const token = await getCozeAccessToken();

    // Gọi v3/chat ở chế độ STREAM — câu trả lời trả về ngay trong luồng SSE,
    // không cần message/list (tránh phải xin thêm quyền "Message").
    const url = new URL(API + "/v3/chat");
    if (body.conversationId) url.searchParams.set("conversation_id", body.conversationId);
    const res = await fetch(url.toString(), {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        bot_id: BOT_ID,
        user_id: userId,
        stream: true,
        auto_save_history: true,
        additional_messages: [{ role: "user", content: message, content_type: "text" }],
      }),
    });

    if (!res.ok || !res.body) {
      const t = await res.text().catch(() => "");
      return NextResponse.json({ error: "Coze từ chối", detail: t.slice(0, 200) }, { status: 502 });
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let answer = "";
    let convId = body.conversationId || "";
    let curEvent = "";

    const handleData = (dataStr: string) => {
      if (!dataStr || dataStr === "[DONE]") return;
      let obj: Record<string, unknown>;
      try {
        obj = JSON.parse(dataStr) as Record<string, unknown>;
      } catch {
        return;
      }
      if (typeof obj.conversation_id === "string") convId = obj.conversation_id;
      if (
        curEvent === "conversation.message.delta" &&
        obj.type === "answer" &&
        typeof obj.content === "string"
      ) {
        answer += obj.content;
      }
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (const raw of lines) {
        const line = raw.trim();
        if (line.startsWith("event:")) curEvent = line.slice(6).trim();
        else if (line.startsWith("data:")) handleData(line.slice(5).trim());
      }
    }

    return NextResponse.json({
      reply:
        answer.trim() ||
        "Dạ em xin phép ghi nhận và chuyển phòng khám hỗ trợ mình nhé, anh/chị có thể gọi 0989 052 288 ạ 🙏",
      conversationId: convId,
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Lỗi máy chủ" },
      { status: 500 }
    );
  }
}
