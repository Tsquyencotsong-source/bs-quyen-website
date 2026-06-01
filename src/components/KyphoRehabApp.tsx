"use client";

import { useState, useEffect } from "react";
import { Activity, AlertTriangle, CheckCircle2, Circle, Phone, ShieldCheck, ChevronDown, ChevronUp, Footprints, HeartPulse, Bone, RotateCcw } from "lucide-react";

/* ── Màu sắc ── */
const N = "#0f2a47";   // navy
const N2 = "#1b3a5b";  // navy nhạt hơn
const T = "#0e7c7b";   // teal
const G = "#c19a3e";   // gold
const R = "#a42820";   // red
const BG = "#f0f2f5";

const PHASES = [
  {
    id: "p1", icon: HeartPulse, range: "Ngày 0–7", name: "Giai đoạn 1",
    title: "Cấp tính & vận động sớm",
    goal: "Kiểm soát đau, chống huyết khối, ngồi dậy – đi lại an toàn, học tư thế đúng.",
    exercises: [
      { id: "p1e1", name: "Bơm cổ chân", detail: "Gập – duỗi cổ chân lên xuống. 10–15 lần × 3–4 lượt/ngày. Giúp lưu thông máu, chống tắc mạch." },
      { id: "p1e2", name: "Hít thở sâu cơ hoành", detail: "Hít sâu bằng bụng rồi thở chậm ra. 5–10 nhịp × vài lần/ngày. Phòng viêm phổi sau nằm lâu." },
      { id: "p1e3", name: "Gồng cơ đùi & cơ mông", detail: "Siết chặt cơ đùi và cơ mông, giữ 5 giây rồi thả. 10 lần mỗi nhóm." },
      { id: "p1e4", name: "Lăn người khúc gỗ (log-roll)", detail: "Khi trở mình: giữ vai – hông – chân xoay cùng lúc. KHÔNG vặn riêng phần lưng." },
      { id: "p1e5", name: "Tập ngồi dậy & đứng có hỗ trợ", detail: "Đi vài bước quanh giường với người nhà hoặc khung tập. Mang đai nếu được chỉ định." },
    ],
    dos: ["Đi lại ngắn, thường xuyên với hỗ trợ", "Giữ lưng thẳng khi ngồi/đứng", "Uống đủ nước, ăn đủ chất"],
    donts: ["Cúi gập người ra trước", "Xoay vặn cột sống", "Nâng vật nặng > 2–3 kg", "Nằm bất động cả ngày"],
    milestone: "Tự ngồi dậy và đi được vài bước trong phòng.",
  },
  {
    id: "p2", icon: Footprints, range: "Tuần 2–4", name: "Giai đoạn 2",
    title: "Phục hồi vận động",
    goal: "Đi lại độc lập, tăng dần quãng đường, giữ tư thế thẳng, khởi động cơ lõi nhẹ nhàng.",
    exercises: [
      { id: "p2e1", name: "Đi bộ trong nhà", detail: "Tăng dần 5 → 10 → 15 phút, vài lần/ngày. Đi chậm, lưng thẳng, nghỉ khi mỏi." },
      { id: "p2e2", name: "Ép bụng nhẹ (abdominal bracing)", detail: "Nằm ngửa gối co, gồng nhẹ cơ bụng. Giữ 5–10 giây × 10 lần." },
      { id: "p2e3", name: "Khép xương bả vai", detail: "Kéo hai vai ra sau và xuống, giữ 5 giây × 10 lần. Cải thiện tư thế, chống gù." },
      { id: "p2e4", name: "Nâng tay – chân luân phiên", detail: "Nằm ngửa, nâng nhẹ một tay hoặc một chân, giữ lưng trung tính. 8–10 lần mỗi bên." },
      { id: "p2e5", name: "Đứng thăng bằng có vịn", detail: "Đứng cạnh ghế/tay vịn, tập dồn trọng lượng đều hai chân. 1–2 phút." },
    ],
    dos: ["Ngồi & đứng tư thế thẳng", "Nghỉ ngắt quãng, không ngồi quá lâu", "Phơi nắng nhẹ + đủ canxi/vitamin D"],
    donts: ["Gập bụng kiểu sit-up", "Cúi nhặt đồ bằng cách gập lưng", "Mang vác nặng"],
    milestone: "Đi bộ liên tục 15 phút, tự làm vệ sinh – sinh hoạt cơ bản.",
  },
  {
    id: "p3", icon: Activity, range: "Tuần 5–8", name: "Giai đoạn 3",
    title: "Tăng cường & thăng bằng",
    goal: "Mạnh cơ duỗi lưng và cơ lõi, cải thiện thăng bằng — giảm nguy cơ ngã và gãy đốt sống mới.",
    exercises: [
      { id: "p3e1", name: "Cơ duỗi lưng nhẹ", detail: "Ngẩng nhẹ phần thân trên với biên độ NHỎ. Ưu tiên duỗi, KHÔNG ưỡn quá mức." },
      { id: "p3e2", name: "Cầu mông (bridging)", detail: "Nằm ngửa gối co, nâng hông lên, giữ 5 giây × 10 lần. Mạnh cơ mông và lưng dưới." },
      { id: "p3e3", name: "Đứng một chân có vịn", detail: "Vịn ghế, đứng một chân 10–20 giây mỗi bên. Tập thăng bằng phòng ngã." },
      { id: "p3e4", name: "Đi bộ 20–30 phút/ngày", detail: "Có thể chia 2 lần. Đi đều, giữ tư thế thẳng." },
      { id: "p3e5", name: "Kéo dãn ngực & tư thế", detail: "Mở rộng ngực, ngả vai ra sau nhẹ nhàng. Chống tư thế gù do co rút." },
    ],
    dos: ["Tập đều, tăng cường độ từ từ", "Ưu tiên bài tập thăng bằng", "Duy trì thuốc loãng xương theo đơn"],
    donts: ["Tập gập lưng mạnh", "Vặn xoắn đột ngột", "Nâng tạ nặng"],
    milestone: "Đi bộ 30 phút, thăng bằng tốt hơn rõ rệt.",
  },
  {
    id: "p4", icon: ShieldCheck, range: "Tuần 9–12+", name: "Giai đoạn 4",
    title: "Duy trì & phòng tái gãy",
    goal: "Duy trì sức cơ và thăng bằng lâu dài, tuân thủ điều trị loãng xương, phòng ngã và gãy đốt sống mới.",
    exercises: [
      { id: "p4e1", name: "Duy trì cơ duỗi lưng + thăng bằng", detail: "Tập 3–5 buổi/tuần, kết hợp các bài đã quen ở giai đoạn 3." },
      { id: "p4e2", name: "Đi bộ 30+ phút/ngày", detail: "Hoặc hoạt động chịu lực nhẹ tương đương, đều đặn." },
      { id: "p4e3", name: "Thái cực quyền / yoga nhẹ", detail: "Cải thiện thăng bằng và linh hoạt. Tránh các tư thế gập sâu cột sống." },
      { id: "p4e4", name: "Phòng ngã tại nhà", detail: "Thảm chống trượt, tay vịn nhà tắm, đủ ánh sáng, dọn dây điện cầu thang." },
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
  { k: "Điều trị gốc rễ", v: "Kyphoplasty xử lý đốt gãy, KHÔNG chữa loãng xương. Phải dùng thuốc loãng xương nền." },
];

const KEY = "kypho-progress";

export default function KyphoRehabApp() {
  const [active, setActive] = useState("p1");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [showGolden, setShowGolden] = useState(true);

  useEffect(() => {
    try { const s = localStorage.getItem(KEY); if (s) setDone(JSON.parse(s)); } catch { /* skip */ }
  }, []);

  const save = (next: Record<string, boolean>) => {
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* skip */ }
  };

  const toggle = (id: string) => { const next = { ...done, [id]: !done[id] }; setDone(next); save(next); };
  const resetAll = () => { setDone({}); save({}); };

  const allEx = PHASES.flatMap(p => p.exercises.map(e => e.id));
  const completed = allEx.filter(id => done[id]).length;
  const pct = Math.round((completed / allEx.length) * 100);
  const phase = PHASES.find(p => p.id === active)!;
  const PhaseIcon = phase.icon;

  return (
    <div style={{ background: BG, color: "#111827", minHeight: "100%", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <div className="max-w-3xl mx-auto px-4 pb-12">

        {/* ── HEADER ── */}
        <div className="rounded-2xl mt-4 p-5 sm:p-6" style={{ background: N }}>
          <div className="flex items-center gap-2 mb-2">
            <Bone size={18} style={{ color: G }} />
            <span className="text-xs tracking-widest font-bold uppercase" style={{ color: G }}>Phục hồi sau bơm xi măng đốt sống</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-white">Lộ trình tập luyện sau Kyphoplasty</h1>
          <p className="mt-2 text-sm sm:text-base" style={{ color: "#c8d8ea" }}>
            Hướng dẫn phục hồi từng giai đoạn cho người bệnh gãy xẹp đốt sống do loãng xương.
          </p>

          {/* Progress */}
          <div className="mt-4 rounded-xl p-4" style={{ background: N2, border: "1.5px solid #2d527a" }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-white">Tiến độ hoàn thành bài tập</span>
              <span className="text-xl font-bold" style={{ color: G }}>{pct}%</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "#0a1f35", border: "1px solid #2d527a" }}>
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: G }} />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-semibold" style={{ color: "#c8d8ea" }}>{completed}/{allEx.length} bài tập đã đánh dấu</span>
              <button onClick={resetAll} className="flex items-center gap-1 text-sm font-bold" style={{ color: G, background: "none", border: "none", cursor: "pointer" }}>
                <RotateCcw size={13} /> Đặt lại
              </button>
            </div>
          </div>
        </div>

        {/* ── NGUYÊN TẮC VÀNG ── */}
        <div className="rounded-2xl mt-3 overflow-hidden" style={{ border: "2px solid #c8a840", background: "#fffaed" }}>
          <button onClick={() => setShowGolden(!showGolden)} className="w-full flex items-center justify-between p-4" style={{ background: "#fff8dc" }}>
            <span className="flex items-center gap-2 text-base font-bold" style={{ color: "#1a1000" }}>
              <ShieldCheck size={18} style={{ color: G }} /> Nguyên tắc vàng cần nhớ
            </span>
            {showGolden ? <ChevronUp size={18} style={{ color: "#6b4400" }} /> : <ChevronDown size={18} style={{ color: "#6b4400" }} />}
          </button>
          {showGolden && (
            <div className="px-4 pb-4 grid sm:grid-cols-2 gap-3">
              {GOLDEN.map((g, i) => (
                <div key={i} className="bg-white rounded-xl p-3" style={{ border: "1.5px solid #d4b430" }}>
                  <div className="text-sm font-bold mb-1" style={{ color: "#6b4400" }}>{g.k}</div>
                  <div className="text-sm" style={{ color: "#2d1500" }}>{g.v}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── PHASE SELECTOR ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
          {PHASES.map(p => {
            const Ic = p.icon;
            const isAct = p.id === active;
            const pd = p.exercises.filter(e => done[e.id]).length;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className="rounded-xl p-3 text-left transition-all"
                style={{
                  background: isAct ? N : "#ffffff",
                  border: `2px solid ${isAct ? N : "#b0bec5"}`,
                }}
              >
                <Ic size={18} style={{ color: isAct ? G : T }} />
                <div className="text-xs mt-2 font-bold" style={{ color: isAct ? "#7ec8e3" : "#000000" }}>{p.range}</div>
                <div className="text-xs font-bold leading-tight mt-1" style={{ color: isAct ? "#ffffff" : "#000000" }}>{p.title}</div>
                <div className="text-xs mt-1 font-bold" style={{ color: isAct ? G : "#000000" }}>{pd}/{p.exercises.length} bài</div>
              </button>
            );
          })}
        </div>

        {/* ── PHASE DETAIL ── */}
        <div className="rounded-2xl mt-3 bg-white p-5" style={{ border: "2px solid #c8d4dc" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl p-2.5" style={{ background: "#d8f0ee" }}>
              <PhaseIcon size={22} style={{ color: T }} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide" style={{ color: "#374151" }}>{phase.name} · {phase.range}</div>
              <h2 className="text-xl font-bold" style={{ color: N }}>{phase.title}</h2>
            </div>
          </div>

          <div className="text-sm rounded-xl p-3 mb-5" style={{ background: "#d8f0ee", color: "#062220", borderLeft: `4px solid ${T}` }}>
            <span className="font-bold">Mục tiêu: </span>{phase.goal}
          </div>

          <div className="text-base font-bold mb-1" style={{ color: N }}>Bài tập — chạm để đánh dấu hoàn thành</div>
          <p className="text-sm mb-3" style={{ color: "#374151" }}>Thực hiện theo hướng dẫn của bác sĩ / kỹ thuật viên.</p>

          <div className="space-y-2">
            {phase.exercises.map(e => {
              const isDone = !!done[e.id];
              return (
                <button
                  key={e.id}
                  onClick={() => toggle(e.id)}
                  className="w-full text-left rounded-xl p-3 flex gap-3 items-center transition-all"
                  style={{ background: isDone ? "#d8f0ee" : "#f8fafc", border: `2px solid ${isDone ? T : "#c8d4dc"}` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {isDone
                        ? <CheckCircle2 size={20} style={{ color: T, flexShrink: 0 }} />
                        : <Circle size={20} style={{ color: "#7a8fa0", flexShrink: 0 }} />
                      }
                      <span className="text-base font-bold" style={{ color: N }}>{e.name}</span>
                    </div>
                    <div className="text-sm ml-7" style={{ color: "#1e2d3d" }}>{e.detail}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Nên / Tránh */}
          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            <div className="rounded-xl p-4" style={{ background: "#d8f0ee", border: "2px solid #0b6b63" }}>
              <div className="text-base font-bold mb-2" style={{ color: "#062220" }}>✓ Nên làm</div>
              <ul className="space-y-1.5">
                {phase.dos.map((d, i) => (
                  <li key={i} className="text-sm flex gap-2" style={{ color: "#062220" }}>
                    <span style={{ color: T, fontWeight: 700, flexShrink: 0 }}>•</span>{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-4" style={{ background: "#fde8e7", border: "2px solid #a42820" }}>
              <div className="text-base font-bold mb-2" style={{ color: "#3d0c09" }}>✕ Tránh</div>
              <ul className="space-y-1.5">
                {phase.donts.map((d, i) => (
                  <li key={i} className="text-sm flex gap-2" style={{ color: "#3d0c09" }}>
                    <span style={{ color: R, fontWeight: 700, flexShrink: 0 }}>•</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-xl p-3 flex items-start gap-2" style={{ background: "#fff8dc", border: "2px solid #c8a840" }}>
            <CheckCircle2 size={18} style={{ color: G, flexShrink: 0, marginTop: 2 }} />
            <div className="text-sm" style={{ color: "#2d1500" }}>
              <span className="font-bold">Mốc cần đạt: </span>{phase.milestone}
            </div>
          </div>
        </div>

        {/* ── DẤU HIỆU ĐỎ ── */}
        <div className="rounded-2xl mt-3 p-5" style={{ background: "#fde8e7", border: "2px solid #a42820" }}>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={20} style={{ color: R }} />
            <h3 className="text-base font-bold" style={{ color: "#3d0c09" }}>Dấu hiệu cần đi khám NGAY</h3>
          </div>
          <ul className="space-y-2">
            {RED_FLAGS.map((f, i) => (
              <li key={i} className="text-sm flex gap-2" style={{ color: "#2d0906" }}>
                <span style={{ color: R, fontWeight: 700, fontSize: 16, flexShrink: 0, lineHeight: 1 }}>!</span>{f}
              </li>
            ))}
          </ul>
        </div>

        {/* ── LIÊN HỆ ── */}
        <div className="rounded-2xl mt-3 p-6 text-center" style={{ background: N }}>
          <div className="text-lg font-bold text-white mb-2">Cần bác sĩ tư vấn lộ trình riêng?</div>
          <p className="text-sm mb-5" style={{ color: "#c8d8ea" }}>
            Lộ trình phục hồi cần được cá thể hóa theo mức độ gãy xẹp, tuổi và bệnh nền của từng người.
          </p>
          <a
            href="tel:0989052288"
            className="inline-flex items-center gap-3 rounded-xl px-6 py-3"
            style={{ background: "#ffffff", color: N, textDecoration: "none" }}
          >
            <Phone size={20} style={{ color: T }} />
            <span className="font-bold text-base" style={{ color: N }}>Gọi đặt lịch: 0989 052 288</span>
          </a>
          <div className="text-sm mt-4" style={{ color: "#c8d8ea" }}>
            TS.BS. Nguyễn Ngọc Quyền · Bác sĩ Cột sống · Bệnh viện TWQĐ 108 · Phòng 225, Nhà N1B
          </div>
        </div>

        <p className="text-xs text-center mt-5" style={{ color: "#6b7280" }}>
          Nội dung mang tính giáo dục, không thay thế tư vấn và chỉ định trực tiếp của bác sĩ điều trị.
        </p>
      </div>
    </div>
  );
}
