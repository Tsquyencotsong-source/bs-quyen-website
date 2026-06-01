"use client";

import { useState, useEffect } from "react";
import { Activity, AlertTriangle, CheckCircle2, Circle, Phone, ShieldCheck, ChevronDown, ChevronUp, Footprints, HeartPulse, Bone, RotateCcw } from "lucide-react";

const C = {
  navy: "#0f2a47",
  navy2: "#1b3a5b",
  teal: "#0e7c7b",
  tealSoft: "#e6f4f3",
  gold: "#c19a3e",
  goldSoft: "#fbf3dc",
  bg: "#f6f8fa",
  red: "#b3261e",
  redSoft: "#fdecea",
  text: "#1f2937",
  sub: "#5b6b7b",
};

function Illu({ type }: { type: string }) {
  const N = "#0f2a47", T = "#0e7c7b", G = "#c19a3e", GR = "#cdd5dd";
  const s = { fill: "none" as const, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const svg = (children: React.ReactNode) => (
    <svg viewBox="0 0 140 100" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">{children}</svg>
  );
  switch (type) {
    case "ankle": return svg(<>
      <line x1="12" y1="86" x2="128" y2="86" stroke={GR} strokeWidth="3" {...s} />
      <line x1="24" y1="72" x2="92" y2="72" stroke={N} strokeWidth="6" {...s} />
      <circle cx="92" cy="72" r="4" fill={T} />
      <line x1="92" y1="72" x2="104" y2="54" stroke={T} strokeWidth="6" {...s} />
      <line x1="92" y1="72" x2="106" y2="80" stroke={T} strokeWidth="4" strokeDasharray="3 4" opacity="0.55" {...s} />
      <path d="M114 56 A15 15 0 0 1 116 78" stroke={G} strokeWidth="3" {...s} />
      <polyline points="110,57 115,53 118,58" stroke={G} strokeWidth="3" {...s} />
      <polyline points="120,73 116,79 111,74" stroke={G} strokeWidth="3" {...s} />
    </>);
    case "breathing": return svg(<>
      <line x1="12" y1="92" x2="128" y2="92" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="56" cy="30" r="11" stroke={N} strokeWidth="4" {...s} />
      <rect x="46" y="40" width="20" height="44" rx="9" stroke={N} strokeWidth="4" {...s} />
      <path d="M48 66 q8 8 16 0" stroke={T} strokeWidth="4" {...s} />
      <line x1="56" y1="20" x2="56" y2="8" stroke={G} strokeWidth="3" {...s} />
      <polyline points="51,13 56,7 61,13" stroke={G} strokeWidth="3" {...s} />
      <line x1="44" y1="62" x2="30" y2="62" stroke={G} strokeWidth="3" {...s} />
      <polyline points="35,57 29,62 35,67" stroke={G} strokeWidth="3" {...s} />
      <line x1="68" y1="62" x2="82" y2="62" stroke={G} strokeWidth="3" {...s} />
      <polyline points="77,57 83,62 77,67" stroke={G} strokeWidth="3" {...s} />
    </>);
    case "quadGlute": return svg(<>
      <line x1="8" y1="84" x2="132" y2="84" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="20" cy="66" r="8" stroke={N} strokeWidth="4" {...s} />
      <line x1="28" y1="66" x2="122" y2="66" stroke={N} strokeWidth="6" {...s} />
      <line x1="78" y1="66" x2="112" y2="66" stroke={T} strokeWidth="6" {...s} />
      <line x1="90" y1="58" x2="90" y2="52" stroke={G} strokeWidth="2.5" {...s} />
      <line x1="100" y1="58" x2="100" y2="52" stroke={G} strokeWidth="2.5" {...s} />
      <line x1="84" y1="58" x2="84" y2="53" stroke={G} strokeWidth="2.5" {...s} />
    </>);
    case "logroll": return svg(<>
      <circle cx="30" cy="52" r="9" stroke={N} strokeWidth="4" {...s} />
      <rect x="40" y="42" width="44" height="20" rx="9" stroke={N} strokeWidth="4" {...s} />
      <line x1="84" y1="47" x2="120" y2="44" stroke={N} strokeWidth="4" {...s} />
      <line x1="84" y1="57" x2="120" y2="60" stroke={N} strokeWidth="4" {...s} />
      <path d="M38 26 Q70 12 102 26" stroke={G} strokeWidth="3" {...s} />
      <polyline points="96,20 103,25 97,31" stroke={G} strokeWidth="3" {...s} />
    </>);
    case "standSupport": return svg(<>
      <line x1="14" y1="92" x2="126" y2="92" stroke={GR} strokeWidth="3" {...s} />
      <line x1="116" y1="22" x2="116" y2="92" stroke={N} strokeWidth="5" {...s} />
      <line x1="108" y1="22" x2="124" y2="22" stroke={N} strokeWidth="4" {...s} />
      <circle cx="48" cy="24" r="9" stroke={N} strokeWidth="4" {...s} />
      <line x1="48" y1="33" x2="48" y2="62" stroke={N} strokeWidth="4" {...s} />
      <line x1="48" y1="62" x2="38" y2="90" stroke={N} strokeWidth="4" {...s} />
      <line x1="48" y1="62" x2="58" y2="90" stroke={N} strokeWidth="4" {...s} />
      <line x1="48" y1="42" x2="110" y2="40" stroke={T} strokeWidth="4" {...s} />
    </>);
    case "walking": return svg(<>
      <line x1="14" y1="90" x2="126" y2="90" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="64" cy="22" r="9" stroke={N} strokeWidth="4" {...s} />
      <line x1="64" y1="31" x2="59" y2="60" stroke={N} strokeWidth="4" {...s} />
      <line x1="60" y1="60" x2="76" y2="88" stroke={T} strokeWidth="4" {...s} />
      <line x1="60" y1="60" x2="44" y2="86" stroke={N} strokeWidth="4" {...s} />
      <line x1="62" y1="40" x2="76" y2="52" stroke={N} strokeWidth="4" {...s} />
      <line x1="62" y1="40" x2="48" y2="50" stroke={N} strokeWidth="4" {...s} />
    </>);
    case "brace": return svg(<>
      <line x1="8" y1="86" x2="132" y2="86" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="18" cy="70" r="8" stroke={N} strokeWidth="4" {...s} />
      <line x1="26" y1="70" x2="60" y2="70" stroke={N} strokeWidth="5" {...s} />
      <line x1="60" y1="70" x2="80" y2="50" stroke={N} strokeWidth="4" {...s} />
      <line x1="80" y1="50" x2="84" y2="76" stroke={N} strokeWidth="4" {...s} />
      <ellipse cx="48" cy="66" rx="11" ry="7" stroke={T} strokeWidth="4" {...s} />
      <line x1="40" y1="58" x2="44" y2="62" stroke={G} strokeWidth="2.5" {...s} />
      <line x1="56" y1="58" x2="52" y2="62" stroke={G} strokeWidth="2.5" {...s} />
    </>);
    case "scapular": return svg(<>
      <circle cx="60" cy="24" r="9" stroke={N} strokeWidth="4" {...s} />
      <line x1="42" y1="42" x2="78" y2="42" stroke={N} strokeWidth="4" {...s} />
      <line x1="60" y1="42" x2="60" y2="78" stroke={N} strokeWidth="4" {...s} />
      <line x1="50" y1="46" x2="56" y2="54" stroke={T} strokeWidth="4" {...s} />
      <line x1="70" y1="46" x2="64" y2="54" stroke={T} strokeWidth="4" {...s} />
      <line x1="28" y1="42" x2="44" y2="42" stroke={G} strokeWidth="3" {...s} />
      <polyline points="39,37 45,42 39,47" stroke={G} strokeWidth="3" {...s} />
      <line x1="92" y1="42" x2="76" y2="42" stroke={G} strokeWidth="3" {...s} />
      <polyline points="81,37 75,42 81,47" stroke={G} strokeWidth="3" {...s} />
    </>);
    case "limbRaise": return svg(<>
      <line x1="8" y1="86" x2="132" y2="86" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="18" cy="72" r="8" stroke={N} strokeWidth="4" {...s} />
      <line x1="26" y1="72" x2="64" y2="72" stroke={N} strokeWidth="5" {...s} />
      <line x1="64" y1="72" x2="102" y2="72" stroke={N} strokeWidth="5" {...s} />
      <line x1="32" y1="72" x2="26" y2="50" stroke={T} strokeWidth="5" {...s} />
      <line x1="64" y1="72" x2="94" y2="52" stroke={T} strokeWidth="5" {...s} />
      <line x1="24" y1="46" x2="24" y2="38" stroke={G} strokeWidth="2.5" {...s} />
      <polyline points="20,42 24,37 28,42" stroke={G} strokeWidth="2.5" {...s} />
    </>);
    case "balanceRail": return svg(<>
      <line x1="14" y1="92" x2="126" y2="92" stroke={GR} strokeWidth="3" {...s} />
      <line x1="116" y1="22" x2="116" y2="92" stroke={N} strokeWidth="5" {...s} />
      <line x1="108" y1="22" x2="124" y2="22" stroke={N} strokeWidth="4" {...s} />
      <circle cx="48" cy="22" r="9" stroke={N} strokeWidth="4" {...s} />
      <line x1="48" y1="31" x2="48" y2="58" stroke={N} strokeWidth="4" {...s} />
      <line x1="48" y1="58" x2="46" y2="90" stroke={N} strokeWidth="4" {...s} />
      <line x1="48" y1="58" x2="62" y2="68" stroke={T} strokeWidth="4" {...s} />
      <line x1="62" y1="68" x2="58" y2="82" stroke={T} strokeWidth="4" {...s} />
      <line x1="48" y1="40" x2="110" y2="40" stroke={T} strokeWidth="4" {...s} />
    </>);
    case "backExt": return svg(<>
      <line x1="8" y1="84" x2="132" y2="84" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="34" cy="56" r="9" stroke={N} strokeWidth="4" {...s} />
      <path d="M52 66 L96 76 L124 78" stroke={N} strokeWidth="5" {...s} />
      <path d="M52 66 L96 76" stroke={T} strokeWidth="5" {...s} />
      <path d="M40 60 L34 47" stroke={N} strokeWidth="4" {...s} />
      <line x1="52" y1="66" x2="60" y2="82" stroke={N} strokeWidth="4" {...s} />
      <line x1="44" y1="40" x2="44" y2="28" stroke={G} strokeWidth="3" {...s} />
      <polyline points="39,33 44,27 49,33" stroke={G} strokeWidth="3" {...s} />
    </>);
    case "bridge": return svg(<>
      <line x1="8" y1="88" x2="132" y2="88" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="16" cy="78" r="8" stroke={N} strokeWidth="4" {...s} />
      <line x1="24" y1="78" x2="40" y2="78" stroke={N} strokeWidth="4" {...s} />
      <path d="M40 78 L64 54" stroke={T} strokeWidth="6" {...s} />
      <line x1="64" y1="54" x2="84" y2="60" stroke={N} strokeWidth="4" {...s} />
      <line x1="84" y1="60" x2="86" y2="86" stroke={N} strokeWidth="4" {...s} />
      <line x1="64" y1="44" x2="64" y2="32" stroke={G} strokeWidth="3" {...s} />
      <polyline points="59,37 64,31 69,37" stroke={G} strokeWidth="3" {...s} />
    </>);
    case "chestStretch": return svg(<>
      <line x1="14" y1="92" x2="126" y2="92" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="60" cy="22" r="9" stroke={N} strokeWidth="4" {...s} />
      <line x1="60" y1="31" x2="60" y2="64" stroke={N} strokeWidth="4" {...s} />
      <line x1="60" y1="64" x2="52" y2="90" stroke={N} strokeWidth="4" {...s} />
      <line x1="60" y1="64" x2="68" y2="90" stroke={N} strokeWidth="4" {...s} />
      <line x1="60" y1="40" x2="42" y2="34" stroke={T} strokeWidth="4" {...s} />
      <line x1="60" y1="40" x2="78" y2="34" stroke={T} strokeWidth="4" {...s} />
      <line x1="44" y1="44" x2="32" y2="40" stroke={G} strokeWidth="3" {...s} />
      <polyline points="38,37 31,40 36,46" stroke={G} strokeWidth="3" {...s} />
      <line x1="76" y1="44" x2="88" y2="40" stroke={G} strokeWidth="3" {...s} />
      <polyline points="82,37 89,40 84,46" stroke={G} strokeWidth="3" {...s} />
    </>);
    case "taichi": return svg(<>
      <line x1="14" y1="92" x2="126" y2="92" stroke={GR} strokeWidth="3" {...s} />
      <circle cx="62" cy="22" r="9" stroke={N} strokeWidth="4" {...s} />
      <line x1="62" y1="31" x2="62" y2="58" stroke={N} strokeWidth="4" {...s} />
      <line x1="62" y1="58" x2="50" y2="90" stroke={N} strokeWidth="4" {...s} />
      <line x1="62" y1="58" x2="76" y2="86" stroke={N} strokeWidth="4" {...s} />
      <path d="M50 44 Q62 62 76 46" stroke={T} strokeWidth="4" {...s} />
      <line x1="62" y1="40" x2="50" y2="44" stroke={N} strokeWidth="4" {...s} />
      <line x1="62" y1="40" x2="76" y2="46" stroke={N} strokeWidth="4" {...s} />
    </>);
    case "homeSafety": return svg(<>
      <polyline points="22,48 70,18 118,48" stroke={N} strokeWidth="4" {...s} />
      <path d="M34 48 V86 H106 V48" stroke={N} strokeWidth="4" {...s} />
      <line x1="22" y1="86" x2="118" y2="86" stroke={GR} strokeWidth="3" {...s} />
      <line x1="94" y1="56" x2="94" y2="76" stroke={T} strokeWidth="5" {...s} />
      <line x1="89" y1="56" x2="99" y2="56" stroke={T} strokeWidth="3" {...s} />
      <line x1="89" y1="76" x2="99" y2="76" stroke={T} strokeWidth="3" {...s} />
      <rect x="44" y="79" width="30" height="6" rx="2" stroke={G} strokeWidth="3" {...s} />
      <line x1="50" y1="82" x2="52" y2="82" stroke={G} strokeWidth="2" {...s} />
    </>);
    default: return svg(<circle cx="70" cy="50" r="20" stroke={N} strokeWidth="4" {...s} />);
  }
}

const PHASES = [
  {
    id: "p1", icon: HeartPulse, range: "Ngày 0 – 7", name: "Giai đoạn 1",
    title: "Cấp tính & vận động sớm",
    goal: "Kiểm soát đau, chống huyết khối, ngồi dậy – đi lại an toàn, học tư thế đúng.",
    exercises: [
      { id: "p1e1", img: "ankle", name: "Bơm cổ chân", detail: "Nằm trên giường, gập – duỗi cổ chân lên xuống. 10–15 lần × 3–4 lượt/ngày. Giúp lưu thông máu, chống tắc mạch." },
      { id: "p1e2", img: "breathing", name: "Hít thở sâu cơ hoành", detail: "Hít sâu bằng bụng rồi thở chậm ra. 5–10 nhịp × vài lần/ngày. Phòng viêm phổi sau nằm lâu." },
      { id: "p1e3", img: "quadGlute", name: "Gồng cơ đùi & cơ mông", detail: "Siết chặt cơ đùi và cơ mông, giữ 5 giây rồi thả. 10 lần mỗi nhóm. Giữ sức cơ khi chưa đi nhiều." },
      { id: "p1e4", img: "logroll", name: "Lăn người khúc gỗ (log-roll)", detail: "Khi trở mình hoặc ngồi dậy: giữ vai – hông – chân xoay cùng lúc như khúc gỗ, KHÔNG vặn riêng phần lưng." },
      { id: "p1e5", img: "standSupport", name: "Tập ngồi dậy & đứng có hỗ trợ", detail: "Đi vài bước quanh giường/phòng với người nhà hoặc khung tập. Mang đai/nẹp nếu được bác sĩ chỉ định." },
    ],
    dos: ["Đi lại ngắn, thường xuyên với hỗ trợ", "Giữ lưng thẳng khi ngồi/đứng", "Uống đủ nước, ăn đủ chất"],
    donts: ["Cúi gập người ra trước", "Xoay vặn cột sống", "Nâng vật nặng > 2–3 kg", "Nằm bất động cả ngày"],
    milestone: "Tự ngồi dậy và đi được vài bước trong phòng.",
  },
  {
    id: "p2", icon: Footprints, range: "Tuần 2 – 4", name: "Giai đoạn 2",
    title: "Phục hồi vận động",
    goal: "Đi lại độc lập, tăng dần quãng đường, giữ tư thế thẳng, khởi động cơ lõi nhẹ nhàng.",
    exercises: [
      { id: "p2e1", img: "walking", name: "Đi bộ trong nhà", detail: "Tăng dần 5 → 10 → 15 phút, vài lần/ngày. Đi chậm, lưng thẳng, nghỉ khi mỏi." },
      { id: "p2e2", img: "brace", name: "Ép bụng nhẹ (abdominal bracing)", detail: "Nằm ngửa gối co, gồng nhẹ cơ bụng như chuẩn bị bị đẩy. Giữ 5–10 giây × 10 lần." },
      { id: "p2e3", img: "scapular", name: "Khép xương bả vai", detail: "Ngồi/đứng thẳng, kéo hai vai ra sau và xuống, giữ 5 giây × 10 lần. Cải thiện tư thế, chống gù." },
      { id: "p2e4", img: "limbRaise", name: "Nâng tay – chân luân phiên", detail: "Nằm ngửa, nâng nhẹ một tay hoặc một chân, giữ lưng trung tính. 8–10 lần mỗi bên." },
      { id: "p2e5", img: "balanceRail", name: "Đứng thăng bằng có vịn", detail: "Đứng cạnh ghế/tay vịn, tập dồn trọng lượng đều hai chân. 1–2 phút." },
    ],
    dos: ["Ngồi & đứng tư thế thẳng", "Nghỉ ngắt quãng, không ngồi quá lâu", "Phơi nắng nhẹ + đủ canxi/vitamin D"],
    donts: ["Gập bụng kiểu sit-up", "Cúi nhặt đồ bằng cách gập lưng", "Mang vác nặng"],
    milestone: "Đi bộ liên tục 15 phút, tự làm vệ sinh – sinh hoạt cơ bản.",
  },
  {
    id: "p3", icon: Activity, range: "Tuần 5 – 8", name: "Giai đoạn 3",
    title: "Tăng cường & thăng bằng",
    goal: "Mạnh nhóm cơ duỗi lưng và cơ lõi, cải thiện thăng bằng — giảm nguy cơ ngã và gãy đốt sống mới.",
    exercises: [
      { id: "p3e1", img: "backExt", name: "Cơ duỗi lưng nhẹ", detail: "Nằm sấp (hoặc ngồi), ngẩng nhẹ phần thân trên với biên độ NHỎ. Ưu tiên duỗi, KHÔNG ưỡn quá mức, không gập." },
      { id: "p3e2", img: "bridge", name: "Cầu mông (bridging)", detail: "Nằm ngửa gối co, nâng hông lên khỏi giường, giữ 5 giây × 10 lần. Mạnh cơ mông và lưng dưới." },
      { id: "p3e3", img: "balanceRail", name: "Đứng một chân có vịn", detail: "Vịn ghế, đứng một chân 10–20 giây mỗi bên. Tập thăng bằng phòng ngã." },
      { id: "p3e4", img: "walking", name: "Đi bộ 20–30 phút/ngày", detail: "Có thể chia 2 lần. Đi đều, giữ tư thế thẳng." },
      { id: "p3e5", img: "chestStretch", name: "Kéo dãn ngực & tư thế", detail: "Mở rộng ngực, ngả vai ra sau nhẹ nhàng. Chống tư thế gù do co rút." },
    ],
    dos: ["Tập đều, tăng cường độ từ từ", "Ưu tiên bài tập thăng bằng", "Duy trì thuốc loãng xương theo đơn"],
    donts: ["Tập gập lưng mạnh", "Vặn xoắn đột ngột", "Nâng tạ nặng"],
    milestone: "Đi bộ 30 phút, thăng bằng tốt hơn rõ rệt.",
  },
  {
    id: "p4", icon: ShieldCheck, range: "Tuần 9 – 12+", name: "Giai đoạn 4",
    title: "Duy trì & phòng tái gãy",
    goal: "Giữ sức cơ và thăng bằng lâu dài, tuân thủ điều trị loãng xương, phòng ngã và gãy đốt sống mới.",
    exercises: [
      { id: "p4e1", img: "backExt", name: "Duy trì cơ duỗi lưng + thăng bằng", detail: "Tập 3–5 buổi/tuần, kết hợp các bài đã quen ở giai đoạn 3." },
      { id: "p4e2", img: "walking", name: "Đi bộ 30+ phút/ngày", detail: "Hoặc hoạt động chịu lực nhẹ tương đương, đều đặn." },
      { id: "p4e3", img: "taichi", name: "Thái cực quyền / yoga nhẹ", detail: "Cải thiện thăng bằng và linh hoạt. Tránh các tư thế gập sâu cột sống." },
      { id: "p4e4", img: "homeSafety", name: "Phòng ngã tại nhà", detail: "Dọn dây điện, dùng thảm chống trượt, đủ ánh sáng, lắp tay vịn ở nhà tắm – cầu thang." },
    ],
    dos: ["Tái khám đo DXA, tuân thủ thuốc loãng xương", "Đủ canxi, vitamin D và protein", "Sắp xếp nhà cửa chống ngã"],
    donts: ["Chủ quan tự ngừng thuốc loãng xương", "Động tác gập – vặn nguy cơ cao", "Bỏ tập khi đã hết đau"],
    milestone: "Trở lại sinh hoạt độc lập và duy trì lâu dài.",
  },
];

const RED_FLAGS = [
  "Đau lưng tăng đột ngột, dữ dội (nghi gãy đốt sống mới)",
  "Sốt, vị trí tiêm sưng – nóng – đỏ (nghi nhiễm trùng)",
  "Tê hoặc yếu hai chân tăng dần",
  "Rối loạn tiểu tiện hoặc đại tiện",
  "Đau ngực, khó thở (cần loại trừ biến chứng)",
];

const GOLDEN = [
  { k: "Tránh 3 động tác đầu giai đoạn", v: "Cúi gập (Bending) – Nâng nặng (Lifting) – Xoay vặn (Twisting)." },
  { k: "Lăn khúc gỗ", v: "Luôn xoay cả thân khi trở mình, ngồi dậy — không vặn riêng lưng." },
  { k: "Tư thế là thuốc", v: "Giữ lưng thẳng khi ngồi, đứng, đi giúp giảm tải lên đốt sống." },
  { k: "Điều trị gốc rễ", v: "Kyphoplasty xử lý đốt gãy, KHÔNG chữa loãng xương. Phải điều trị loãng xương nền để phòng gãy mới." },
];

const STORAGE_KEY = "kypho-progress";

export default function KyphoRehabApp() {
  const [active, setActive] = useState("p1");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [showGolden, setShowGolden] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setDone(JSON.parse(saved));
    } catch { /* bỏ qua */ }
  }, []);

  const persist = (next: Record<string, boolean>) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* bỏ qua */ }
  };

  const toggle = (id: string) => {
    const next = { ...done, [id]: !done[id] };
    setDone(next);
    persist(next);
  };

  const resetAll = () => { setDone({}); persist({}); };

  const allEx = PHASES.flatMap((p) => p.exercises.map((e) => e.id));
  const completed = allEx.filter((id) => done[id]).length;
  const pct = Math.round((completed / allEx.length) * 100);
  const phase = PHASES.find((p) => p.id === active)!;
  const PhaseIcon = phase.icon;

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100%", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <div className="max-w-3xl mx-auto px-4 pb-12">

        {/* Header */}
        <div className="rounded-2xl mt-4 p-5 sm:p-6 text-white" style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navy2})` }}>
          <div className="flex items-center gap-2 mb-2">
            <Bone size={20} style={{ color: C.gold }} />
            <span className="text-xs sm:text-sm tracking-wide" style={{ color: C.gold }}>PHỤC HỒI SAU BƠM XI MĂNG ĐỐT SỐNG</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">Lộ trình tập luyện sau Kyphoplasty</h1>
          <p className="mt-2 text-sm sm:text-base" style={{ color: "#cdd8e4" }}>
            Hướng dẫn phục hồi từng giai đoạn cho người bệnh gãy xẹp đốt sống do loãng xương. Tập đúng cách quyết định khả năng đi lại và sự độc lập lâu dài.
          </p>

          {/* Progress */}
          <div className="mt-5 bg-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-semibold text-white">Tiến độ hoàn thành bài tập</span>
              <span className="font-bold text-white" style={{ color: C.gold }}>{pct}%</span>
            </div>
            <div className="h-3 rounded-full bg-white/20 overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: C.gold }} />
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-white/70">
              <span>{completed}/{allEx.length} bài tập đã đánh dấu</span>
              <button onClick={resetAll} className="flex items-center gap-1 hover:text-white transition-colors">
                <RotateCcw size={12} /> Đặt lại
              </button>
            </div>
          </div>
        </div>

        {/* Golden rules */}
        <div className="rounded-2xl mt-4 overflow-hidden border" style={{ borderColor: "#e7ddc2", background: C.goldSoft }}>
          <button onClick={() => setShowGolden(!showGolden)} className="w-full flex items-center justify-between p-4">
            <span className="flex items-center gap-2 font-semibold" style={{ color: C.navy }}>
              <ShieldCheck size={18} style={{ color: C.gold }} /> Nguyên tắc vàng cần nhớ
            </span>
            {showGolden ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {showGolden && (
            <div className="px-4 pb-4 grid sm:grid-cols-2 gap-3">
              {GOLDEN.map((g, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border" style={{ borderColor: "#eee5cc" }}>
                  <div className="font-semibold text-sm" style={{ color: C.teal }}>{g.k}</div>
                  <div className="text-sm mt-1" style={{ color: C.sub }}>{g.v}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Phase selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
          {PHASES.map((p) => {
            const Ic = p.icon;
            const isAct = p.id === active;
            const pd = p.exercises.filter((e) => done[e.id]).length;
            return (
              <button key={p.id} onClick={() => setActive(p.id)}
                className="rounded-xl p-3 text-left border transition-all"
                style={{ background: isAct ? C.navy : "#fff", borderColor: isAct ? C.navy : "#e3e8ee", color: isAct ? "#fff" : C.text }}
              >
                <Ic size={18} style={{ color: isAct ? C.gold : C.teal }} />
                <div className="text-xs mt-2 opacity-80">{p.range}</div>
                <div className="font-semibold text-sm leading-tight">{p.title}</div>
                <div className="text-xs mt-1" style={{ color: isAct ? C.gold : C.sub }}>{pd}/{p.exercises.length} bài</div>
              </button>
            );
          })}
        </div>

        {/* Phase detail */}
        <div className="rounded-2xl mt-4 bg-white border p-5" style={{ borderColor: "#e3e8ee" }}>
          <div className="flex items-center gap-3">
            <div className="rounded-xl p-2.5" style={{ background: C.tealSoft }}>
              <PhaseIcon size={22} style={{ color: C.teal }} />
            </div>
            <div>
              <div className="text-xs" style={{ color: C.sub }}>{phase.name} · {phase.range}</div>
              <h2 className="text-xl font-bold" style={{ color: C.navy }}>{phase.title}</h2>
            </div>
          </div>
          <div className="mt-3 text-sm rounded-xl p-3" style={{ background: C.tealSoft, color: C.navy }}>
            <span className="font-semibold">Mục tiêu: </span>{phase.goal}
          </div>

          <h3 className="font-semibold mt-5" style={{ color: C.navy }}>Bài tập (chạm để đánh dấu hoàn thành)</h3>
          <p className="text-xs mb-3 mt-0.5" style={{ color: C.sub }}>Hình minh họa mang tính sơ đồ; thực hiện theo hướng dẫn của bác sĩ / kỹ thuật viên.</p>
          <div className="space-y-2">
            {phase.exercises.map((e) => {
              const isDone = !!done[e.id];
              return (
                <button key={e.id} onClick={() => toggle(e.id)}
                  className="w-full text-left rounded-xl p-3 border flex gap-3 items-stretch transition-all"
                  style={{ background: isDone ? C.tealSoft : "#fff", borderColor: isDone ? C.teal : "#e3e8ee" }}
                >
                  <div className="rounded-lg flex items-center justify-center p-1"
                    style={{ width: 104, minWidth: 104, height: 80, background: isDone ? "#ffffff" : "#f3f6f9", border: `1px solid ${isDone ? C.teal : "#e3e8ee"}` }}>
                    <Illu type={e.img} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      {isDone
                        ? <CheckCircle2 size={20} style={{ color: C.teal, flexShrink: 0, marginTop: 1 }} />
                        : <Circle size={20} style={{ color: "#c2ccd6", flexShrink: 0, marginTop: 1 }} />
                      }
                      <span className="font-semibold text-[15px]" style={{ color: C.navy }}>{e.name}</span>
                    </div>
                    <div className="text-sm mt-1" style={{ color: C.sub }}>{e.detail}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            <div className="rounded-xl p-3 border" style={{ borderColor: "#cfe8e2", background: "#f1faf8" }}>
              <div className="font-semibold text-sm mb-2" style={{ color: C.teal }}>✓ Nên làm</div>
              <ul className="space-y-1.5">
                {phase.dos.map((d, i) => (
                  <li key={i} className="text-sm flex gap-2" style={{ color: C.sub }}>
                    <span style={{ color: C.teal }}>•</span>{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-3 border" style={{ borderColor: "#f0d6d3", background: C.redSoft }}>
              <div className="font-semibold text-sm mb-2" style={{ color: C.red }}>✕ Tránh</div>
              <ul className="space-y-1.5">
                {phase.donts.map((d, i) => (
                  <li key={i} className="text-sm flex gap-2" style={{ color: C.sub }}>
                    <span style={{ color: C.red }}>•</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-xl p-3 border flex items-start gap-2" style={{ borderColor: "#e7ddc2", background: C.goldSoft }}>
            <CheckCircle2 size={18} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
            <div className="text-sm">
              <span className="font-semibold" style={{ color: C.navy }}>Mốc cần đạt: </span>
              <span style={{ color: C.sub }}>{phase.milestone}</span>
            </div>
          </div>
        </div>

        {/* Red flags */}
        <div className="rounded-2xl mt-4 p-5 border" style={{ borderColor: "#f0c8c4", background: C.redSoft }}>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={20} style={{ color: C.red }} />
            <h3 className="font-bold" style={{ color: C.red }}>Dấu hiệu cần đi khám NGAY</h3>
          </div>
          <ul className="space-y-2">
            {RED_FLAGS.map((f, i) => (
              <li key={i} className="text-sm flex gap-2" style={{ color: "#7a201c" }}>
                <span style={{ color: C.red, fontWeight: 700 }}>!</span>{f}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="rounded-2xl mt-4 p-5 text-white" style={{ background: `linear-gradient(135deg, ${C.teal}, ${C.navy})` }}>
          <div className="font-semibold text-lg">Cần bác sĩ tư vấn lộ trình riêng?</div>
          <p className="text-sm mt-1" style={{ color: "#d7e8e6" }}>Lộ trình phục hồi cần được cá thể hóa theo mức độ gãy xẹp, tuổi và bệnh nền của từng người.</p>
          <a href="tel:0989052288" className="inline-flex items-center gap-2 mt-3 bg-white rounded-xl px-4 py-2.5 font-semibold" style={{ color: C.navy }}>
            <Phone size={18} style={{ color: C.teal }} /> Gọi đặt lịch: 0989 052 288
          </a>
          <div className="text-xs mt-3" style={{ color: "#d7e8e6" }}>
            TS.BS. Nguyễn Ngọc Quyền · Bác sĩ Cột sống · Bệnh viện TWQĐ 108 · Phòng 225, Nhà N1B
          </div>
        </div>

        <p className="text-xs text-center mt-5" style={{ color: C.sub }}>
          Nội dung mang tính giáo dục, không thay thế tư vấn và chỉ định trực tiếp của bác sĩ điều trị.
        </p>
      </div>
    </div>
  );
}
