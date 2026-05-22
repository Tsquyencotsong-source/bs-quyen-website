import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/Section";
import { DOCTOR } from "@/data/content";

export const metadata: Metadata = {
  title: "Liên hệ & Đặt khám",
  description: "Thông tin phòng khám, giờ khám và liên hệ TS.BS. Nguyễn Ngọc Quyền.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-navy py-12 md:py-16">
        <Container>
          <p className="eyebrow-gold mb-2">Liên hệ & Đặt khám</p>
          <h1 className="font-serif-brand text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight">
            Thông tin <em className="font-light italic text-brand-gold">phòng khám</em>
          </h1>
          <p className="text-[15px] font-light text-white/50 mt-3 max-w-xl">
            Hai địa điểm khám — trong giờ hành chính tại Bệnh viện TWQĐ 108
            và ngoài giờ tại Phòng khám SpineTech.
          </p>
        </Container>
      </div>

      {/* HAI KHỐI PHÒNG KHÁM */}
      <div className="grid md:grid-cols-2">

        {/* TRONG GIỜ — Bệnh viện 108 */}
        <div className="bg-navy px-8 md:px-12 py-12 border-r border-white/10">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 mb-6">
            <Clock size={12} />
            Trong giờ hành chính
          </div>
          <h2 className="font-serif-brand text-[22px] font-bold text-white mb-2 leading-tight">
            Bệnh viện Trung ương Quân đội 108
          </h2>
          <p className="text-[14px] text-white/50 mb-6">Phòng khám Cột sống — Phòng 225</p>

          <ul className="space-y-4 list-none">
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={14} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">Giờ khám</p>
                <p className="text-[14.5px] text-white/85 font-light">
                  Thứ 2 – Thứ 6<br />
                  <span className="text-white font-medium">6h30 – 17h00</span>
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={14} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">Địa chỉ</p>
                <p className="text-[14.5px] text-white/85 font-light leading-relaxed">
                  Phòng 225 – Tầng 2, Nhà N1B<br />
                  Khoa Khám bệnh đa khoa<br />
                  Trung tâm Khám bệnh đa khoa và điều trị theo yêu cầu<br />
                  <span className="text-white font-medium">Số 1 Trần Hưng Đạo, Hai Bà Trưng, Hà Nội</span>
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={14} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">Điện thoại</p>
                <a href="tel:0989052288" className="text-[15px] text-brand-gold font-medium hover:underline underline-offset-2">
                  0989 052 288
                </a>
              </div>
            </li>
          </ul>

          <a
            href="https://maps.google.com/?q=Bệnh+viện+Trung+ương+Quân+đội+108,+1+Trần+Hưng+Đạo,+Hà+Nội"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-[13px] font-semibold text-white border border-white/25 px-5 py-2.5 hover:bg-white/10 transition-colors"
          >
            <MapPin size={14} />
            Xem bản đồ
            <ExternalLink size={12} />
          </a>
        </div>

        {/* NGOÀI GIỜ — SpineTech */}
        <div className="bg-white px-8 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-navy-pale text-navy text-[11px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 mb-6">
            <Clock size={12} />
            Ngoài giờ hành chính
          </div>
          <h2 className="font-serif-brand text-[22px] font-bold text-gray-900 mb-2 leading-tight">
            Phòng khám SpineTech
          </h2>
          <p className="text-[14px] text-gray-400 mb-6">Khám cột sống chuyên sâu ngoài giờ</p>

          <ul className="space-y-4 list-none">
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-navy-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={14} className="text-navy" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Giờ khám</p>
                <p className="text-[14.5px] text-gray-600 font-light">
                  Thứ 6 hàng tuần<br />
                  <span className="text-gray-900 font-medium">17h30 trở đi</span>
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-navy-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={14} className="text-navy" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Địa chỉ</p>
                <p className="text-[14.5px] text-gray-600 font-light leading-relaxed">
                  <span className="text-gray-900 font-medium">257 Giải Phóng</span><br />
                  Phường Bạch Mai, Hà Nội
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-navy-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={14} className="text-navy" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Đặt lịch</p>
                <a href="tel:0989052288" className="text-[15px] text-navy font-medium hover:underline underline-offset-2">
                  0989 052 288
                </a>
              </div>
            </li>
          </ul>

          <a
            href="https://maps.google.com/?q=257+Giải+Phóng,+Bạch+Mai,+Hà+Nội"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-[13px] font-semibold text-navy border border-navy/30 px-5 py-2.5 hover:bg-navy-pale transition-colors"
          >
            <MapPin size={14} />
            Xem bản đồ
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* THÔNG TIN LIÊN HỆ + CỘNG TÁC */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-[1fr_380px] gap-14 items-start">
            <div>
              <SectionHeader eyebrow="Liên hệ học thuật" title="Cộng tác & Nghiên cứu" />
              <ul className="list-none border-t border-gray-200 space-y-0">
                {[
                  { icon: <Mail size={16} />, label: "Email", value: DOCTOR.email, link: `mailto:${DOCTOR.email}` },
                  { icon: <Phone size={16} />, label: "Điện thoại", value: DOCTOR.phone, link: `tel:${DOCTOR.phone.replace(/\s/g, "")}` },
                  { icon: <ExternalLink size={16} />, label: "ORCID", value: DOCTOR.orcid.replace("https://", ""), link: DOCTOR.orcid, external: true },
                ].map(({ icon, label, value, link, external }) => (
                  <li key={label} className="flex gap-4 py-4 border-b border-gray-100 items-start">
                    <div className="w-8 h-8 rounded-full bg-navy-pale flex items-center justify-center text-navy flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[11.5px] text-gray-400 mb-1">{label}</p>
                      <a href={link} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                        className="text-[14.5px] font-light text-navy hover:underline underline-offset-2">
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <h3 className="font-serif-brand text-[20px] font-bold text-gray-900 mb-4 leading-snug">
                Cộng tác nghiên cứu
              </h3>
              <p className="text-[14px] font-light leading-relaxed text-gray-400 mb-6">
                Hoan nghênh trao đổi về nghiên cứu khoa học, cộng tác chuyên môn và mời giảng từ đồng nghiệp, học viên trong ngành.
              </p>
              <a href={`mailto:${DOCTOR.email}?subject=Đề xuất cộng tác nghiên cứu`} className="btn-primary w-full justify-center">
                <Mail size={14} /> Gửi email trao đổi
              </a>
              <div className="mt-5 pt-4 border-t border-gray-100 text-[12.5px] font-light text-gray-400 leading-relaxed">
                <strong className="font-semibold text-gray-600">Lưu ý:</strong> Tôi không tư vấn điều trị cá nhân hóa qua email. Để được khám, vui lòng đến trực tiếp tại một trong hai địa điểm phòng khám ở trên.
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
