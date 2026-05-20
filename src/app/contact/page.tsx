import type { Metadata } from "next";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/Section";
import { DOCTOR } from "@/data/content";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ TS.BS. Nguyễn Ngọc Quyền để trao đổi nghiên cứu, cộng tác chuyên môn hoặc mời giảng.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-navy py-12 md:py-16">
        <Container>
          <p className="eyebrow-gold mb-2">Liên hệ & Cộng tác</p>
          <h1 className="font-serif-brand text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight">
            Kết nối <em className="font-light italic text-brand-gold">chuyên môn</em>
          </h1>
          <p className="text-[15px] font-light text-white/50 mt-3 max-w-xl">
            Hoan nghênh trao đổi về nghiên cứu, cộng tác chuyên môn, mời giảng và các câu
            hỏi học thuật từ đồng nghiệp và học viên trong ngành.
          </p>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid md:grid-cols-[1fr_380px] gap-14 items-start">
            {/* Contact info */}
            <div>
              <SectionHeader eyebrow="Thông tin" title="Liên hệ trực tiếp" />
              <ul className="list-none border-t border-gray-200 space-y-0">
                {[
                  {
                    icon: <Mail size={16} />,
                    label: "Email",
                    value: DOCTOR.email,
                    link: `mailto:${DOCTOR.email}`,
                  },
                  {
                    icon: <Phone size={16} />,
                    label: "Điện thoại",
                    value: DOCTOR.phone,
                    link: `tel:${DOCTOR.phone.replace(/\s/g, "")}`,
                  },
                  {
                    icon: <MapPin size={16} />,
                    label: "Đơn vị",
                    value: `${DOCTOR.position}\n${DOCTOR.department}\n${DOCTOR.hospital}, Hà Nội`,
                    link: null,
                  },
                  {
                    icon: <ExternalLink size={16} />,
                    label: "ORCID",
                    value: DOCTOR.orcid.replace("https://", ""),
                    link: DOCTOR.orcid,
                    external: true,
                  },
                ].map(({ icon, label, value, link, external }) => (
                  <li key={label} className="flex gap-4 py-5 border-b border-gray-100 items-start">
                    <div className="w-8 h-8 rounded-full bg-navy-pale flex items-center justify-center text-navy flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[11.5px] text-gray-400 mb-1">{label}</p>
                      {link ? (
                        <a
                          href={link}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="text-[14.5px] font-light text-navy hover:underline underline-offset-2 whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[14.5px] font-light text-gray-600 whitespace-pre-line leading-relaxed">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Disclaimer */}
              <div className="mt-8 p-4 border border-gray-200 bg-gray-50 text-[13px] font-light text-gray-500 leading-relaxed">
                <strong className="font-semibold text-gray-700 block mb-1">Lưu ý quan trọng</strong>
                Tôi không tư vấn điều trị cá nhân hóa qua email hay website. Nếu bạn là bệnh
                nhân cần thăm khám, vui lòng đến trực tiếp tại Phòng khám Cột sống —{" "}
                {DOCTOR.hospital}.
              </div>
            </div>

            {/* Collaboration panel */}
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="font-serif-brand text-[22px] font-bold text-gray-900 mb-4 leading-snug">
                  Cộng tác nghiên cứu
                </h3>
                <p className="text-[14px] font-light leading-relaxed text-gray-400 mb-6">
                  Tôi quan tâm đến các cơ hội cộng tác trong nghiên cứu về:
                </p>
                <ul className="list-none space-y-2 mb-7">
                  {[
                    "Gãy xẹp đốt sống và loãng xương",
                    "Đánh giá chất lượng cuộc sống bệnh nhân cột sống",
                    "Ứng dụng AI trong y học cột sống",
                    "Công cụ hỗ trợ quyết định lâm sàng",
                    "Đào tạo y khoa và chia sẻ kiến thức",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-500 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${DOCTOR.email}?subject=Đề xuất cộng tác nghiên cứu`}
                  className="btn-primary w-full justify-center"
                >
                  <Mail size={14} />
                  Gửi email trao đổi
                </a>
              </div>

              {/* For colleagues */}
              <div className="bg-navy-pale border border-gray-200 p-6">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">
                  Mời giảng & Đào tạo
                </p>
                <p className="text-[13.5px] font-light leading-relaxed text-gray-500 mb-4">
                  Tôi có thể tham gia giảng dạy, xây dựng tài liệu đào tạo hoặc phát triển
                  chương trình học cho các đơn vị y tế, trường đại học y dược.
                </p>
                <a
                  href={`mailto:${DOCTOR.email}?subject=Mời giảng`}
                  className="btn-outline-navy w-full justify-center"
                >
                  Liên hệ mời giảng
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
