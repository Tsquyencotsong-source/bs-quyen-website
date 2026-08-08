import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/Section";
import { DOCTOR, EXPERTISE, TRAINEES } from "@/data/content";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "Giới thiệu",
  description: "Tiểu sử, triết lý làm nghề, học vị và giải thưởng của TS.BS. Nguyễn Ngọc Quyền.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy py-12 md:py-16">
        <Container>
          <p className="eyebrow-gold mb-2">Giới thiệu</p>
          <h1 className="font-serif-brand text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight">
            Lâm sàng · Nghiên cứu ·{" "}
            <em className="font-light italic text-brand-gold">Đào tạo</em>
          </h1>
        </Container>
      </div>

      {/* About content */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-[1fr_300px] gap-14 items-start">
            {/* Main body */}
            <div>
              <p className="text-[16px] font-light leading-[1.85] text-gray-500 mb-5">
                Tôi là{" "}
                <strong className="font-semibold text-gray-800">{DOCTOR.fullTitle}</strong>,
                bác sĩ chuyên ngành Cột sống tại {DOCTOR.hospital}. Công việc tập trung vào
                khám, điều trị, phẫu thuật và nghiên cứu các bệnh lý cột sống — đặc biệt
                những vấn đề ảnh hưởng trực tiếp đến khả năng đi lại và chất lượng sống của
                người bệnh.
              </p>
              <p className="text-[16px] font-light leading-[1.85] text-gray-500 mb-5">
                Hướng làm nghề của tôi thực tế:{" "}
                <strong className="font-semibold text-gray-800">
                  đưa kiến thức chuyên sâu trở thành quyết định điều trị rõ ràng, có ích cho
                  từng người bệnh cụ thể
                </strong>
                . Điều trị tốt không chỉ là mổ đúng kỹ thuật — mà còn là đánh giá đúng thời
                điểm và giải thích để người bệnh hiểu và hợp tác tốt trong suốt quá trình
                phục hồi.
              </p>

              <blockquote className="border-l-[3px] border-navy pl-6 py-1 my-8">
                <p className="font-serif-brand text-[19px] font-normal italic text-navy leading-relaxed">
                  "Dao mổ chỉ là một phần của nghề. Phần khó hơn là quyết định khi nào không
                  nên dùng đến dao mổ."
                </p>
                <cite className="block mt-3 text-[12px] font-normal not-italic tracking-widest uppercase text-gray-400">
                  — TS.BS. Nguyễn Ngọc Quyền
                </cite>
              </blockquote>

              <p className="text-[16px] font-light leading-[1.85] text-gray-500 mb-10">
                Tôi tin rằng y học hiện đại cần ba điều đi cùng nhau:{" "}
                <strong className="font-semibold text-gray-800">
                  chuyên môn sâu, dữ liệu tốt và lòng nhân ái trong giao tiếp
                </strong>
                . Thiếu một trong ba, người thầy thuốc rất dễ thành kỹ thuật viên giỏi mà
                thiếu nhân văn, hoặc người tử tế nhưng thiếu công cụ để thực sự giúp được
                bệnh nhân.
              </p>

              {/* Three pillars */}
              <div className="border-t-2 border-navy">
                {[
                  {
                    n: "I",
                    t: "Lâm sàng chuyên sâu",
                    d: "Tiếp cận toàn diện: chẩn đoán hình ảnh, đánh giá triệu chứng, điều trị bảo tồn, can thiệp ít xâm lấn và phẫu thuật khi thực sự cần thiết.",
                  },
                  {
                    n: "II",
                    t: "Nghiên cứu ứng dụng",
                    d: "Nghiên cứu không chỉ để công bố — mà để tạo ra công cụ thực hành: thuật toán điều trị, bảng điểm tiên lượng, quy trình có thể triển khai rộng.",
                  },
                  {
                    n: "III",
                    t: "Đào tạo & Lan tỏa",
                    d: "Xây dựng nội dung y học thực hành ngắn gọn, áp dụng được ngay, kết hợp AI và công cụ số để tăng hiệu quả chia sẻ kiến thức.",
                  },
                ].map((p) => (
                  <div key={p.n} className="flex gap-5 py-5 border-b border-gray-100">
                    <span className="font-serif-brand text-[22px] font-bold italic text-gray-200 leading-none flex-shrink-0 w-6 pt-1">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-gray-800 mb-1.5">{p.t}</h3>
                      <p className="text-[13.5px] font-light leading-relaxed text-gray-400">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Credentials */}
              <div className="bg-navy p-6">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4 pb-3 border-b border-white/10">
                  Đào tạo & Học vị
                </p>
                {[
                  { year: "2021", text: "Tiến sĩ Y khoa", sub: "Chấn thương Chỉnh hình & Tạo hình · Viện NCKH Y Dược lâm sàng 108" },
                  { year: "2024", text: "IELTS 6.0", sub: "Đại học Ngoại ngữ – ĐHQG Hà Nội · IDP Vietnam" },
                  { year: "Hiện tại", text: "Phó Chủ nhiệm Khoa", sub: `${DOCTOR.department} · ${DOCTOR.hospitalShort}` },
                ].map((c) => (
                  <div key={c.year} className="py-3 border-b border-white/[0.08] last:border-b-0">
                    <p className="text-[11px] text-white/35 mb-1">{c.year}</p>
                    <p className="text-[13.5px] font-medium text-white/90 leading-tight">{c.text}</p>
                    <p className="text-[12px] text-white/40 mt-1 leading-snug">{c.sub}</p>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div className="border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy-light mb-3 pb-2 border-b border-gray-100">
                  Giải thưởng & Ghi nhận
                </p>
                {[
                  { title: "Giải Nhất", sub: "Đề tài Tuổi trẻ sáng tạo trong Quân đội · 2022" },
                  { title: "Đại sứ Trẻ", sub: "Hội CTCH Châu Á Thái Bình Dương (APOA) · 2016" },
                  { title: "Giải pháp hữu ích", sub: "Điều trị chấn thương vỡ nhiều mảnh thân đốt sống · 2022" },
                ].map((a) => (
                  <div key={a.title} className="py-2.5 border-b border-gray-50 last:border-b-0">
                    <p className="text-[13.5px] font-semibold text-gray-800 mb-0.5">{a.title}</p>
                    <p className="text-[13px] text-gray-400 leading-snug">{a.sub}</p>
                  </div>
                ))}
              </div>

              {/* ORCID */}
              <a
                href={DOCTOR.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-navy bg-navy-pale px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39]" />
                ORCID: {DOCTOR.orcidId}
                <ExternalLink size={12} className="ml-auto" />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Expertise summary */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader eyebrow="Chuyên môn" title={<>Bốn hướng <em className="font-normal not-italic text-navy">trọng tâm</em></>} />
          <div className="grid md:grid-cols-2 gap-4">
            {EXPERTISE.map((exp) => (
              <div key={exp.num} className="bg-white border border-gray-100 p-6 hover:border-navy-light transition-colors">
                <span className="text-[11px] font-semibold tracking-wide uppercase text-gray-300 block mb-3">{exp.num}</span>
                <h3 className="font-serif-brand text-[17px] font-bold text-navy mb-3 leading-tight">{exp.title}</h3>
                <p className="text-[13.5px] font-light leading-relaxed text-gray-400 mb-3">{exp.body}</p>
                <p className="text-[12px] text-gray-300">{exp.keywords.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trainees */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Đào tạo" title="Học viên đang hướng dẫn" />
          <div className="border border-gray-200">
            <div className="bg-navy px-5 py-3.5">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold">
                Học viên đang hướng dẫn
              </p>
            </div>
            {TRAINEES.map((t) => (
              <div key={t.name} className="px-5 py-5 border-b border-gray-100 last:border-b-0">
                <p className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-navy-light mb-1.5">
                  {t.type} · {t.school} · {t.year}
                </p>
                <p className="font-serif-brand text-[16px] font-bold text-gray-900 mb-1.5">{t.name}</p>
                <p className="text-[13.5px] text-gray-400 leading-relaxed">{t.thesis}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
