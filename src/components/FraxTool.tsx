"use client";

import { useState } from "react";

export default function FraxTool() {
  const [showTool, setShowTool] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="bg-navy text-white px-8 py-6 mb-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-2">
            Công cụ đánh giá nguy cơ gãy xương
          </p>
          <h1 className="font-serif-brand text-[28px] font-bold leading-tight mb-2">
            Thang điểm FRAX®
          </h1>
          <p className="text-[13.5px] text-white/65 font-light leading-relaxed">
            Tính nguy cơ gãy xương trong 10 năm theo mô hình WHO FRAX chính thức,
            sử dụng dữ liệu dân số Việt Nam.
          </p>
        </div>

        {/* Giới thiệu ngắn */}
        <div className="bg-white border border-gray-200 p-6 mb-4">
          <h2 className="font-serif-brand text-[18px] font-bold text-navy mb-3">FRAX® là gì?</h2>
          <p className="text-[14.5px] font-light leading-relaxed text-gray-500 mb-4">
            FRAX® là công cụ đánh giá nguy cơ gãy xương do WHO phát triển tại Đại học Sheffield.
            Tính xác suất gãy xương lớn và gãy cổ xương đùi trong 10 năm dựa trên các yếu tố nguy cơ lâm sàng.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[
              { color: "bg-green-500", label: "Nguy cơ THẤP", desc: "Gãy lớn <10%\nGãy háng <1%" },
              { color: "bg-orange-500", label: "Nguy cơ TRUNG BÌNH", desc: "Gãy lớn 10–20%\nGãy háng 1–3%" },
              { color: "bg-red-600", label: "Nguy cơ CAO", desc: "Gãy lớn ≥20%\nGãy háng ≥3%" },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className={`${item.color} h-1.5 mb-2`} />
                <p className="font-semibold text-[12px] text-gray-700">{item.label}</p>
                <p className="text-[11.5px] text-gray-400 mt-1 whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Công cụ chính thức */}
        <div className="bg-white border border-gray-200 p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif-brand text-[18px] font-bold text-navy">
              Công cụ tính FRAX® chính thức
            </h2>
            <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2.5 py-1 uppercase tracking-wide border border-green-200">
              WHO Official
            </span>
          </div>

          <p className="text-[13.5px] text-gray-500 mb-5 leading-relaxed">
            Chọn <strong className="text-gray-700">Vietnam</strong> làm quốc gia để sử dụng dữ liệu dân số Việt Nam.
            Kết quả trực tiếp từ máy chủ WHO — không qua tính toán trung gian.
          </p>

          {!showTool ? (
            <div className="text-center py-10 border-2 border-dashed border-gray-200 bg-gray-50">
              <div className="text-[40px] mb-3">🦴</div>
              <p className="text-[14px] text-gray-500 mb-5">Nhấn để mở công cụ FRAX chính thức từ WHO</p>
              <button
                onClick={() => setShowTool(true)}
                className="bg-navy text-white px-10 py-3.5 font-semibold text-[14px] hover:bg-navy-dark transition-colors"
              >
                Mở công cụ FRAX®
              </button>
              <p className="text-[12px] text-gray-400 mt-3">Nguồn: fraxplus.org · WHO Collaborating Centre, Sheffield</p>
            </div>
          ) : (
            <div>
              <div className="mb-2 flex items-center gap-2 text-[12px] text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Đang kết nối trực tiếp với fraxplus.org...
              </div>
              <iframe
                src="https://www.fraxplus.org/fraxservlet?country=Vietnam&LanguageCode=VN&SkeletalSite=FN"
                width="100%"
                height="950"
                frameBorder="0"
                title="FRAX® Calculator WHO - Vietnam"
                className="w-full border border-gray-200"
                style={{ minHeight: "950px" }}
                loading="lazy"
              />
              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={() => setShowTool(false)}
                  className="text-[12px] text-gray-400 hover:text-gray-600 underline underline-offset-2"
                >
                  ← Đóng
                </button>
                <a
                  href="https://www.fraxplus.org/calculation-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-navy hover:underline underline-offset-2"
                >
                  Mở trang đầy đủ ↗
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Hướng dẫn */}
        <div className="bg-white border border-gray-200 p-6 mb-4">
          <h2 className="font-serif-brand text-[17px] font-bold text-navy mb-4">Hướng dẫn sử dụng</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Chọn quốc gia: Vietnam", d: "Quan trọng — phải chọn đúng để dùng dữ liệu dân số VN" },
              { n: "2", t: "Nhập tuổi, giới, cân nặng, chiều cao", d: "BMI tính tự động" },
              { n: "3", t: "Đánh dấu các yếu tố nguy cơ", d: "Tiền sử gãy xương, corticoid, viêm khớp dạng thấp, hút thuốc, rượu..." },
              { n: "4", t: "Nhập T-score DXA nếu có", d: "T-score cổ xương đùi giúp kết quả chính xác hơn đáng kể" },
              { n: "5", t: "Nhấn Calculate — đọc kết quả", d: "So sánh với ngưỡng điều trị NOF/IOF ở trên" },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-navy text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
                <div>
                  <p className="font-semibold text-[13.5px] text-gray-800">{t}</p>
                  <p className="text-[12.5px] text-gray-400 mt-0.5">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lưu ý y đức */}
        <div className="bg-yellow-50 border border-yellow-200 border-l-[3px] border-l-brand-gold px-5 py-4 mb-4 text-[13px] text-gray-600 leading-relaxed">
          <strong className="font-semibold text-gray-800 block mb-1">⚠️ Lưu ý quan trọng</strong>
          Kết quả FRAX là công cụ hỗ trợ quyết định lâm sàng, không phải chỉ định điều trị độc lập.
          Cần kết hợp với đánh giá lâm sàng toàn diện, kết quả DXA và tiền sử bệnh của từng người bệnh.
        </div>

        {/* CTA đặt khám */}
        <div className="bg-navy px-6 py-5">
          <p className="text-[11px] font-semibold tracking-wider uppercase text-brand-gold mb-1">Tư vấn kết quả FRAX</p>
          <p className="text-[13.5px] text-white/75 font-light mb-3">
            Cần bác sĩ diễn giải kết quả và lập kế hoạch điều trị loãng xương?
          </p>
          <a href="tel:0989052288"
            className="inline-block bg-brand-red text-white px-6 py-2.5 font-semibold text-[14px] hover:bg-red-800 transition-colors">
            Gọi đặt lịch: 0989 052 288
          </a>
          <p className="text-[11.5px] text-white/40 mt-2">
            T2–T6: 6h30–17h · Phòng 225, BV 108 &nbsp;|&nbsp; Thứ 6 chiều · SpineTech, 257 Giải Phóng
          </p>
        </div>

      </div>
    </div>
  );
}
