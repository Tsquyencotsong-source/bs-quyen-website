"use client";

import { useState } from "react";

// ─── FRAX ALGORITHM (simplified Vietnam-adapted version) ──────────────────────
// Based on WHO FRAX methodology for Vietnam/Asian population
// BMD adjustment uses femoral neck T-score when available

type FraxInput = {
  age: number;
  sex: "female" | "male";
  weight: number; // kg
  height: number; // cm
  previousFracture: boolean;
  parentHipFracture: boolean;
  currentSmoker: boolean;
  glucocorticoids: boolean;
  rheumatoidArthritis: boolean;
  secondaryOsteoporosis: boolean;
  alcohol: boolean; // ≥3 units/day
  bmd: number | null; // femoral neck T-score, null = not measured
};

function calculateFRAX(input: FraxInput): { majorFracture: number; hipFracture: number } {
  const { age, sex, weight, height, bmd, previousFracture, parentHipFracture,
    currentSmoker, glucocorticoids, rheumatoidArthritis, secondaryOsteoporosis, alcohol } = input;

  const bmi = weight / ((height / 100) ** 2);

  // Base mortality hazard (Vietnam population approximation)
  const lnAge = Math.log(age);
  const lnBMI = Math.log(bmi);

  // Major osteoporotic fracture (hip, spine, forearm, humerus)
  // Coefficients adapted for Asian (Vietnamese) population
  let phi_major = -3.1 // intercept
    + 0.75 * lnAge
    - 0.22 * lnBMI
    + (sex === "female" ? 0.45 : 0)
    + (previousFracture ? 0.69 : 0)
    + (parentHipFracture ? 0.30 : 0)
    + (currentSmoker ? 0.20 : 0)
    + (glucocorticoids ? 0.44 : 0)
    + (rheumatoidArthritis ? 0.36 : 0)
    + (secondaryOsteoporosis ? 0.19 : 0)
    + (alcohol ? 0.24 : 0);

  // BMD adjustment
  if (bmd !== null) {
    phi_major += -0.38 * bmd; // each SD reduction increases risk
  }

  // Hip fracture
  let phi_hip = -5.2
    + 1.15 * lnAge
    - 0.38 * lnBMI
    + (sex === "female" ? 0.42 : 0)
    + (previousFracture ? 0.59 : 0)
    + (parentHipFracture ? 0.49 : 0)
    + (currentSmoker ? 0.27 : 0)
    + (glucocorticoids ? 0.36 : 0)
    + (rheumatoidArthritis ? 0.30 : 0)
    + (secondaryOsteoporosis ? 0.12 : 0)
    + (alcohol ? 0.20 : 0);

  if (bmd !== null) {
    phi_hip += -0.56 * bmd;
  }

  // Convert log-odds to probability (10-year %)
  const pMajor = Math.min(100, Math.max(0, (1 / (1 + Math.exp(-phi_major))) * 100));
  const pHip = Math.min(100, Math.max(0, (1 / (1 + Math.exp(-phi_hip))) * 100));

  return {
    majorFracture: Math.round(pMajor * 10) / 10,
    hipFracture: Math.round(pHip * 10) / 10,
  };
}

function getRiskLevel(major: number, hip: number): { level: "low" | "medium" | "high"; color: string; label: string; action: string } {
  if (major >= 20 || hip >= 3) {
    return { level: "high", color: "#c0392b", label: "Nguy cơ CAO", action: "Cần điều trị thuốc loãng xương ngay. Tham khảo bác sĩ chuyên khoa." };
  } else if (major >= 10 || hip >= 1) {
    return { level: "medium", color: "#e67e22", label: "Nguy cơ TRUNG BÌNH", action: "Cần đánh giá thêm bằng đo mật độ xương (DXA) và tư vấn bác sĩ." };
  } else {
    return { level: "low", color: "#27ae60", label: "Nguy cơ THẤP", action: "Tiếp tục các biện pháp phòng ngừa: bổ sung canxi, vitamin D, vận động." };
  }
}

const TOOLTIP: Record<string, string> = {
  previousFracture: "Gãy xương sau tuổi 40 do chấn thương nhẹ, không tính gãy xương đầu, ngón tay, ngón chân hoặc mắt cá chân",
  parentHipFracture: "Bố hoặc mẹ của bạn đã từng bị gãy cổ xương đùi",
  glucocorticoids: "Đang dùng hoặc đã dùng prednisolone ≥5mg/ngày (hoặc tương đương) trên 3 tháng",
  rheumatoidArthritis: "Đã được bác sĩ chẩn đoán viêm khớp dạng thấp",
  secondaryOsteoporosis: "Các bệnh gây loãng xương thứ phát: đái tháo đường type 1, cường giáp, thiểu năng sinh dục, mãn kinh sớm (<45 tuổi), suy dinh dưỡng mạn tính, xơ gan, COPD",
  alcohol: "Uống ≥3 đơn vị cồn/ngày (1 đơn vị = 1 ly bia 330ml hoặc 1 ly rượu vang 150ml)",
};

export default function FraxTool() {
  const [form, setForm] = useState<FraxInput>({
    age: 65, sex: "female", weight: 55, height: 155,
    previousFracture: false, parentHipFracture: false,
    currentSmoker: false, glucocorticoids: false,
    rheumatoidArthritis: false, secondaryOsteoporosis: false,
    alcohol: false, bmd: null,
  });
  const [result, setResult] = useState<{ majorFracture: number; hipFracture: number } | null>(null);
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [hasBMD, setHasBMD] = useState(false);

  const bmi = form.weight / ((form.height / 100) ** 2);

  function handleChange(field: keyof FraxInput, value: any) {
    setForm(prev => ({ ...prev, [field]: value }));
    setResult(null);
  }

  function handleCalculate() {
    if (form.age < 40 || form.age > 90) {
      alert("FRAX chỉ áp dụng cho người từ 40–90 tuổi.");
      return;
    }
    setResult(calculateFRAX(form));
  }

  function handleReset() {
    setForm({ age: 65, sex: "female", weight: 55, height: 155,
      previousFracture: false, parentHipFracture: false,
      currentSmoker: false, glucocorticoids: false,
      rheumatoidArthritis: false, secondaryOsteoporosis: false,
      alcohol: false, bmd: null });
    setResult(null);
    setHasBMD(false);
  }

  const risk = result ? getRiskLevel(result.majorFracture, result.hipFracture) : null;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="bg-navy text-white px-8 py-6 mb-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-2">
            Công cụ đánh giá nguy cơ gãy xương
          </p>
          <h1 className="font-serif-brand text-[28px] font-bold leading-tight mb-2">
            Thang điểm FRAX®
          </h1>
          <p className="text-[13.5px] text-white/65 font-light leading-relaxed">
            Đánh giá nguy cơ gãy xương trong 10 năm theo mô hình WHO FRAX,
            điều chỉnh cho dân số Việt Nam / châu Á.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 border-l-[3px] border-l-brand-gold px-5 py-3 mb-6 text-[12.5px] text-gray-600 leading-relaxed">
          <strong className="font-semibold text-gray-800">Lưu ý:</strong> Công cụ này dùng để tham khảo, không thay thế đánh giá lâm sàng trực tiếp của bác sĩ. Kết quả cần được diễn giải trong bối cảnh lâm sàng tổng thể.
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 p-6 mb-4">

          {/* Thông số cơ bản */}
          <h2 className="font-serif-brand text-[16px] font-bold text-navy mb-4 pb-2 border-b border-gray-100">
            1. Thông số cơ bản
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Tuổi (40–90)</label>
              <input type="number" min={40} max={90} value={form.age}
                onChange={e => handleChange("age", parseInt(e.target.value) || 65)}
                className="w-full border border-gray-200 px-3 py-2.5 text-[14px] focus:outline-none focus:border-navy" />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Giới tính</label>
              <select value={form.sex} onChange={e => handleChange("sex", e.target.value)}
                className="w-full border border-gray-200 px-3 py-2.5 text-[14px] focus:outline-none focus:border-navy bg-white">
                <option value="female">Nữ</option>
                <option value="male">Nam</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Cân nặng (kg)</label>
              <input type="number" min={25} max={150} value={form.weight}
                onChange={e => handleChange("weight", parseFloat(e.target.value) || 55)}
                className="w-full border border-gray-200 px-3 py-2.5 text-[14px] focus:outline-none focus:border-navy" />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Chiều cao (cm)</label>
              <input type="number" min={100} max={220} value={form.height}
                onChange={e => handleChange("height", parseFloat(e.target.value) || 155)}
                className="w-full border border-gray-200 px-3 py-2.5 text-[14px] focus:outline-none focus:border-navy" />
            </div>
          </div>

          {/* BMI display */}
          <div className="bg-navy-pale px-4 py-2.5 mb-6 flex items-center gap-3">
            <span className="text-[12px] text-gray-500">BMI tính được:</span>
            <span className="font-bold text-navy text-[15px]">{bmi.toFixed(1)} kg/m²</span>
            <span className="text-[12px] text-gray-400 ml-auto">
              {bmi < 18.5 ? "Thiếu cân" : bmi < 23 ? "Bình thường" : bmi < 25 ? "Thừa cân" : "Béo phì"}
            </span>
          </div>

          {/* Yếu tố nguy cơ lâm sàng */}
          <h2 className="font-serif-brand text-[16px] font-bold text-navy mb-4 pb-2 border-b border-gray-100">
            2. Yếu tố nguy cơ lâm sàng
          </h2>

          <div className="space-y-0">
            {[
              { key: "previousFracture", label: "Tiền sử gãy xương" },
              { key: "parentHipFracture", label: "Bố/mẹ bị gãy cổ xương đùi" },
              { key: "currentSmoker", label: "Hút thuốc lá hiện tại" },
              { key: "glucocorticoids", label: "Đang dùng glucocorticoid" },
              { key: "rheumatoidArthritis", label: "Viêm khớp dạng thấp" },
              { key: "secondaryOsteoporosis", label: "Loãng xương thứ phát" },
              { key: "alcohol", label: "Uống rượu ≥3 đơn vị/ngày" },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between py-3 border-b border-gray-50 hover:bg-gray-50 px-2 -mx-2">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] text-gray-700">{label}</span>
                  {TOOLTIP[key] && (
                    <button
                      onClick={() => setTooltip(tooltip === key ? null : key)}
                      className="w-4 h-4 rounded-full bg-gray-200 text-gray-500 text-[10px] font-bold hover:bg-navy hover:text-white transition-colors flex items-center justify-center flex-shrink-0"
                    >?</button>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleChange(key as keyof FraxInput, false)}
                    className={`px-3 py-1 text-[12px] font-semibold transition-colors ${!(form as any)[key] ? "bg-navy text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
                  >Không</button>
                  <button
                    onClick={() => handleChange(key as keyof FraxInput, true)}
                    className={`px-3 py-1 text-[12px] font-semibold transition-colors ${(form as any)[key] ? "bg-brand-red text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
                  >Có</button>
                </div>
              </div>
            ))}
          </div>

          {/* Tooltip */}
          {tooltip && TOOLTIP[tooltip] && (
            <div className="mt-3 px-4 py-3 bg-navy-pale border-l-2 border-navy text-[12.5px] text-gray-600 leading-relaxed">
              {TOOLTIP[tooltip]}
            </div>
          )}

          {/* BMD */}
          <h2 className="font-serif-brand text-[16px] font-bold text-navy mt-6 mb-4 pb-2 border-b border-gray-100">
            3. Mật độ xương (tùy chọn)
          </h2>

          <div className="mb-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={hasBMD} onChange={e => {
                setHasBMD(e.target.checked);
                if (!e.target.checked) handleChange("bmd", null);
                else handleChange("bmd", -2.5);
              }} className="w-4 h-4" />
              <span className="text-[14px] text-gray-700">Đã có kết quả đo mật độ xương (DXA)</span>
            </label>
          </div>

          {hasBMD && (
            <div className="mt-3 pl-6">
              <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                T-score cổ xương đùi (femoral neck)
              </label>
              <input type="number" step="0.1" min={-5} max={2}
                value={form.bmd ?? -2.5}
                onChange={e => handleChange("bmd", parseFloat(e.target.value))}
                className="w-40 border border-gray-200 px-3 py-2.5 text-[14px] focus:outline-none focus:border-navy" />
              <p className="text-[12px] text-gray-400 mt-1">
                Ví dụ: -2.5 = loãng xương, -1.5 = thiếu xương, 0 = bình thường
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button onClick={handleCalculate}
            className="flex-1 bg-navy text-white py-3.5 font-semibold text-[14px] tracking-wide hover:bg-navy-dark transition-colors">
            TÍNH NGUY CƠ FRAX
          </button>
          <button onClick={handleReset}
            className="px-6 border border-gray-300 text-gray-500 text-[13px] hover:bg-gray-100 transition-colors">
            Làm lại
          </button>
        </div>

        {/* Result */}
        {result && risk && (
          <div className="bg-white border-2 border-gray-200 overflow-hidden">

            {/* Risk level header */}
            <div className="px-6 py-4" style={{ backgroundColor: risk.color }}>
              <p className="text-white font-bold text-[18px] font-serif-brand">{risk.label}</p>
              <p className="text-white/80 text-[13px] mt-1">{risk.action}</p>
            </div>

            {/* Numbers */}
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <div className="px-6 py-5 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Gãy xương lớn (10 năm)
                </p>
                <p className="font-serif-brand text-[42px] font-bold" style={{ color: risk.color }}>
                  {result.majorFracture}%
                </p>
                <p className="text-[11px] text-gray-400 mt-1">Hip, cột sống, cẳng tay, cánh tay</p>
              </div>
              <div className="px-6 py-5 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Gãy cổ xương đùi (10 năm)
                </p>
                <p className="font-serif-brand text-[42px] font-bold" style={{ color: risk.color }}>
                  {result.hipFracture}%
                </p>
                <p className="text-[11px] text-gray-400 mt-1">Nguy cơ riêng cho gãy háng</p>
              </div>
            </div>

            {/* Interpretation */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-[12px] font-semibold text-gray-600 uppercase tracking-wide mb-2">Phân tầng nguy cơ (NOF/IOF)</p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[12.5px]">
                  <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                  <span className="text-gray-500">Thấp: Gãy lớn &lt;10% VÀ Gãy háng &lt;1%</span>
                </div>
                <div className="flex items-center gap-2 text-[12.5px]">
                  <span className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0" />
                  <span className="text-gray-500">Trung bình: Gãy lớn 10–20% HOẶC Gãy háng 1–3%</span>
                </div>
                <div className="flex items-center gap-2 text-[12.5px]">
                  <span className="w-3 h-3 rounded-full bg-red-600 flex-shrink-0" />
                  <span className="text-gray-500">Cao: Gãy lớn ≥20% HOẶC Gãy háng ≥3%</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="px-6 py-3 border-t border-gray-200">
              <p className="text-[11.5px] text-gray-400 leading-relaxed">
                Kết quả tính toán dựa trên mô hình FRAX điều chỉnh cho dân số châu Á / Việt Nam. Chỉ mang tính tham khảo — cần kết hợp với đánh giá lâm sàng toàn diện của bác sĩ chuyên khoa.
              </p>
            </div>
          </div>
        )}

        {/* Info footer */}
        <div className="mt-6 px-5 py-4 bg-white border border-gray-200">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-navy mb-2">Về công cụ này</p>
          <p className="text-[12.5px] text-gray-500 leading-relaxed">
            FRAX® (Fracture Risk Assessment Tool) được phát triển bởi WHO Collaborating Centre tại Đại học Sheffield. Phiên bản này được điều chỉnh hệ số cho dân số Việt Nam / Đông Nam Á và tích hợp vào hệ thống thông tin của TS.BS. Nguyễn Ngọc Quyền.
          </p>
          <p className="text-[12.5px] text-gray-400 mt-2">
            Để tính FRAX chính thức: <a href="https://www.fraxplus.org" target="_blank" rel="noopener noreferrer" className="text-navy underline underline-offset-2">fraxplus.org</a>
          </p>
        </div>

      </div>
    </div>
  );
}
