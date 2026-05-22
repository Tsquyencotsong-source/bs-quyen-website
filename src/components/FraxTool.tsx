"use client";

import { useState } from "react";

const RISK_LEVELS = [
  { color: "#27ae60", bg: "bg-green-50", border: "border-green-200", label: "Nguy cơ THẤP", major: "< 10%", hip: "< 1%", action: "Duy trì lối sống lành mạnh, bổ sung canxi và vitamin D, vận động đều đặn, tầm soát DXA định kỳ." },
  { color: "#e67e22", bg: "bg-orange-50", border: "border-orange-200", label: "Nguy cơ TRUNG BÌNH", major: "10–20%", hip: "1–3%", action: "Cần đo mật độ xương DXA nếu chưa có. Tham khảo bác sĩ để quyết định có cần điều trị thuốc không." },
  { color: "#c0392b", bg: "bg-red-50", border: "border-red-200", label: "Nguy cơ CAO", major: "≥ 20%", hip: "≥ 3%", action: "Cần điều trị thuốc loãng xương. Liên hệ bác sĩ chuyên khoa ngay để được tư vấn phác đồ phù hợp." },
];

const RISK_FACTORS = [
  { id: "fracture", label: "Tiền sử gãy xương", note: "Gãy xương sau tuổi 40 do chấn thương nhẹ (không tính gãy đầu, ngón tay, mắt cá chân)" },
  { id: "parent", label: "Bố/mẹ bị gãy cổ xương đùi", note: "Bất kỳ bên nào" },
  { id: "smoke", label: "Đang hút thuốc lá", note: null },
  { id: "steroid", label: "Đang dùng corticosteroid", note: "Prednisolone ≥5mg/ngày hoặc tương đương, kéo dài ≥3 tháng" },
  { id: "ra", label: "Viêm khớp dạng thấp", note: "Được bác sĩ chẩn đoán xác định" },
  { id: "secondary", label: "Loãng xương thứ phát", note: "Đái tháo đường type 1, cường giáp, mãn kinh sớm (<45 tuổi), xơ gan, COPD..." },
  { id: "alcohol", label: "Uống rượu ≥3 đơn vị/ngày", note: "1 đơn vị = 1 ly bia 330ml, hoặc 1 ly rượu vang 150ml, hoặc 1 shot rượu mạnh 40ml" },
];

const STEPS = [
  { n: "1", t: "Chọn quốc gia: Thailand", d: "Việt Nam chưa có trong mô hình FRAX WHO — Thailand là quốc gia Đông Nam Á gần nhất về đặc điểm xương." },
  { n: "2", t: "Điền Age, Weight, Height, Sex", d: "Tuổi (40–90), cân nặng (kg), chiều cao (cm), giới tính." },
  { n: "3", t: "Đánh dấu các yếu tố nguy cơ", d: "Xem giải thích các yếu tố nguy cơ ở bảng bên trên trước khi điền." },
  { n: "4", t: "Nhập T-score (nếu có DXA)", d: "Chọn Femoral neck làm vị trí đo. T-score âm càng nhiều thì nguy cơ càng cao." },
  { n: "5", t: "Nhấn Calculate — đọc kết quả", d: "FRAX trả về 2 chỉ số: Major osteoporotic fracture (%) và Hip fracture (%). So sánh với bảng phân tầng nguy cơ bên trên." },
];

export default function FraxTool() {
  const [showIframe, setShowIframe] = useState(false);
  const [openFactor, setOpenFactor] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-4">

        {/* ── HEADER ──────────────────────────────── */}
        <div className="bg-navy text-white px-8 py-7">
          <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-2">
            Công cụ đánh giá nguy cơ gãy xương
          </p>
          <h1 className="font-serif-brand text-[clamp(22px,4vw,32px)] font-bold leading-tight mb-2">
            Thang điểm FRAX®
          </h1>
          <p className="text-[13px] text-white/60 font-light leading-relaxed max-w-xl">
            Ước tính nguy cơ gãy xương trong <strong className="text-white/80">10 năm tới</strong> dựa trên
            mô hình WHO FRAX, tham chiếu dân số Thailand (quốc gia Đông Nam Á gần nhất với dữ liệu Việt Nam).
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 text-[11.5px] text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Nguồn: WHO Collaborating Centre, University of Sheffield · fraxplus.org
          </div>
        </div>

        {/* ── LƯU Ý THAILAND ──────────────────────── */}
        <div className="bg-blue-50 border border-blue-200 border-l-[3px] border-l-blue-500 px-5 py-4 text-[13px] text-blue-800 leading-relaxed">
          <strong className="font-semibold block mb-1">📌 Lưu ý về quốc gia tham chiếu</strong>
          Việt Nam hiện chưa có trong mô hình FRAX của WHO. Theo khuyến cáo của các chuyên gia loãng xương
          Đông Nam Á, <strong>Thailand</strong> là quốc gia được dùng để tham chiếu cho người Việt Nam
          vì có đặc điểm dân số và hình thái xương tương đồng. Kết quả có thể nhỉnh hơn
          thực tế một chút — cần diễn giải trong bối cảnh lâm sàng tổng thể.
        </div>

        {/* ── PHÂN TẦNG NGUY CƠ ───────────────────── */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="font-serif-brand text-[17px] font-bold text-navy mb-4">
            Bảng phân tầng nguy cơ (NOF / IOF)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-600 w-36">Mức độ</th>
                  <th className="text-center py-2 px-3 font-semibold text-gray-600">Gãy xương lớn</th>
                  <th className="text-center py-2 px-3 font-semibold text-gray-600">Gãy cổ xương đùi</th>
                  <th className="text-left py-2 pl-4 font-semibold text-gray-600">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {RISK_LEVELS.map((r) => (
                  <tr key={r.label} className="border-b border-gray-100">
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center gap-2 font-semibold" style={{ color: r.color }}>
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: r.color }} />
                        {r.label}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-semibold text-gray-700">{r.major}</td>
                    <td className="py-3 px-3 text-center font-mono font-semibold text-gray-700">{r.hip}</td>
                    <td className="py-3 pl-4 text-gray-400 text-[12px] leading-relaxed">{r.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── YẾU TỐ NGUY CƠ ──────────────────────── */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="font-serif-brand text-[17px] font-bold text-navy mb-1">
            Giải thích các yếu tố nguy cơ
          </h2>
          <p className="text-[12.5px] text-gray-400 mb-4">Nhấn vào từng mục để xem định nghĩa chi tiết trước khi điền vào công cụ</p>
          <div className="space-y-0 border-t border-gray-100">
            {RISK_FACTORS.map(({ id, label, note }) => (
              <div key={id}>
                <button
                  onClick={() => setOpenFactor(openFactor === id ? null : id)}
                  className="w-full flex items-center justify-between py-3 border-b border-gray-50 hover:bg-gray-50 px-2 -mx-2 text-left"
                >
                  <span className="text-[14px] text-gray-700 font-medium">{label}</span>
                  <span className="text-gray-300 text-[18px] font-light">{openFactor === id ? "−" : "+"}</span>
                </button>
                {openFactor === id && note && (
                  <div className="px-2 py-3 bg-gray-50 border-b border-gray-100 text-[12.5px] text-gray-500 leading-relaxed -mx-2">
                    {note}
                  </div>
                )}
                {openFactor === id && !note && (
                  <div className="px-2 py-3 bg-gray-50 border-b border-gray-100 text-[12.5px] text-gray-400 -mx-2">
                    Không cần giải thích thêm.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CÔNG CỤ FRAX CHÍNH THỨC ─────────────── */}
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <h2 className="font-serif-brand text-[17px] font-bold text-navy">
              Công cụ tính FRAX® (WHO chính thức)
            </h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">fraxplus.org</span>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 px-4 py-2.5 mb-4 text-[12.5px] text-yellow-800 leading-relaxed">
            <strong>Quan trọng:</strong> Sau khi mở công cụ, bạn chọn <strong>Country = Thailand</strong> để tham chiếu cho dân số Việt Nam.
          </div>

          {!showIframe ? (
            <div className="text-center py-10 bg-gray-50 border-2 border-dashed border-gray-200">
              <p className="text-[38px] mb-3">🦴</p>
              <p className="text-[14px] text-gray-500 mb-2 font-medium">Công cụ FRAX® chính thức từ WHO</p>
              <p className="text-[12.5px] text-gray-400 mb-5">Chọn Thailand → điền thông tin → nhấn Calculate</p>
              <button
                onClick={() => setShowIframe(true)}
                className="bg-navy text-white px-10 py-3.5 font-semibold text-[14px] hover:bg-navy-dark transition-colors"
              >
                Mở công cụ FRAX®
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-[12px] text-gray-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Đang kết nối với fraxplus.org...
              </div>
              <iframe
                src="https://www.fraxplus.org/fraxservlet?country=Thailand&LanguageCode=EN&SkeletalSite=FN"
                width="100%"
                height="950"
                frameBorder="0"
                title="FRAX® Calculator WHO - Thailand (Vietnam reference)"
                className="w-full border border-gray-200"
                style={{ minHeight: "950px" }}
                loading="lazy"
              />
              <div className="mt-3 flex items-center justify-between text-[12px]">
                <button onClick={() => setShowIframe(false)} className="text-gray-400 hover:text-gray-600 underline underline-offset-2">
                  ← Thu gọn
                </button>
                <a href="https://www.fraxplus.org/calculation-tool" target="_blank" rel="noopener noreferrer"
                  className="text-navy hover:underline underline-offset-2">
                  Mở trang đầy đủ ↗
                </a>
              </div>
            </div>
          )}
        </div>

        {/* ── HƯỚNG DẪN ───────────────────────────── */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="font-serif-brand text-[17px] font-bold text-navy mb-4">
            Hướng dẫn điền thông tin từng bước
          </h2>
          <div className="space-y-3">
            {STEPS.map(({ n, t, d }) => (
              <div key={n} className="flex gap-3 items-start py-3 border-b border-gray-50 last:border-b-0">
                <span className="w-7 h-7 rounded-full bg-navy text-white text-[12px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {n}
                </span>
                <div>
                  <p className="font-semibold text-[14px] text-gray-800">{t}</p>
                  <p className="text-[12.5px] text-gray-400 mt-0.5 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── LƯU Ý Y ĐỨC ─────────────────────────── */}
        <div className="bg-yellow-50 border border-yellow-200 border-l-[3px] border-l-brand-gold px-5 py-4 text-[13px] text-gray-600 leading-relaxed">
          <strong className="font-semibold text-gray-800 block mb-1">⚠️ Lưu ý quan trọng</strong>
          Kết quả FRAX là công cụ hỗ trợ quyết định lâm sàng, không phải chỉ định điều trị độc lập.
          Cần kết hợp với kết quả đo mật độ xương DXA, tiền sử bệnh và đánh giá lâm sàng toàn diện
          của bác sĩ chuyên khoa. Không tự điều trị hoặc ngừng thuốc dựa trên FRAX đơn thuần.
        </div>

        {/* ── ĐẶT KHÁM ────────────────────────────── */}
        <div className="bg-navy px-6 py-6">
          <p className="text-[10.5px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-1">
            Tư vấn kết quả FRAX
          </p>
          <p className="text-[14px] text-white/75 font-light mb-4 leading-relaxed">
            Cần bác sĩ diễn giải kết quả và lập kế hoạch điều trị loãng xương toàn diện?
          </p>
          <a href="tel:0989052288"
            className="inline-block bg-brand-red text-white px-8 py-3 font-semibold text-[14px] hover:bg-red-800 transition-colors mb-3">
            📞 Gọi đặt lịch: 0989 052 288
          </a>
          <div className="text-[12px] text-white/40 leading-relaxed">
            <p>Trong giờ: T2–T6 · 6h30–17h · Phòng 225, Nhà N1B · BV TWQĐ 108</p>
            <p>Ngoài giờ: Thứ 6 · 17h30 trở đi · SpineTech, 257 Giải Phóng, Hà Nội</p>
          </div>
        </div>

      </div>
    </div>
  );
}
