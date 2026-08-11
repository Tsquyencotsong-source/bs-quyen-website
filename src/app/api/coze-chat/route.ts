import { NextResponse } from "next/server";
import { getCozeAccessToken, cozeConfigured } from "@/lib/coze";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const BOT_ID = "7671836676280909877";
const API = "https://api.coze.com";

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

type StartResp = {
  code?: number;
  msg?: string;
  data?: { id: string; conversation_id: string; status: string };
};
type RetrieveResp = {
  data?: { status: string; last_error?: { code: number; msg: string } };
};
type CozeMsg = { role?: string; type?: string; content?: string };
type ListResp = { data?: CozeMsg[] };

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

    // 1) Gửi tin nhắn, tạo phiên chat
    const startUrl = new URL(API + "/v3/chat");
    if (body.conversationId) startUrl.searchParams.set("conversation_id", body.conversationId);
    const startRes = await fetch(startUrl.toString(), {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        bot_id: BOT_ID,
        user_id: userId,
        stream: false,
        auto_save_history: true,
        additional_messages: [{ role: "user", content: message, content_type: "text" }],
      }),
    });
    const start = (await startRes.json()) as StartResp;
    if (start.code !== 0 || !start.data) {
      return NextResponse.json({ error: "Coze từ chối", detail: start }, { status: 502 });
    }
    const chatId = start.data.id;
    const convId = start.data.conversation_id;

    // 2) Chờ Bé Bự trả lời (poll ~25s)
    let status = start.data.status;
    for (let i = 0; i < 25 && (status === "in_progress" || status === "created"); i++) {
      await sleep(1000);
      const rRes = await fetch(
        `${API}/v3/chat/retrieve?chat_id=${chatId}&conversation_id=${convId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const r = (await rRes.json()) as RetrieveResp;
      status = r.data?.status || status;
      if (status === "failed") {
        return NextResponse.json(
          { error: "Bé Bự chưa trả lời được", detail: r.data?.last_error },
          { status: 502 }
        );
      }
    }

    // 3) Lấy câu trả lời
    const mRes = await fetch(
      `${API}/v3/chat/message/list?chat_id=${chatId}&conversation_id=${convId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const list = (await mRes.json()) as ListResp;
    const msgs = Array.isArray(list.data) ? list.data : [];
    const answer = msgs
      .filter((m) => m.role === "assistant" && m.type === "answer")
      .map((m) => m.content || "")
      .join("\n")
      .trim();

    return NextResponse.json({
      reply:
        answer ||
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
