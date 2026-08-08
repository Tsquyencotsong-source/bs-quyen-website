import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/Section";
import { PubItem } from "@/components/PubItem";
import { DOCTOR, PUBLICATIONS } from "@/data/content";

export const metadata: Metadata = {
  alternates: { canonical: "/research" },
  title: "Nghiên cứu khoa học",
  description: "45 công trình nghiên cứu, 6 bài báo ISI, 1 giải pháp hữu ích. TS.BS. Nguyễn Ngọc Quyền.",
};

const RESEARCH_STATS = [
  { n: "45",  l: "Tổng bài báo",     s: "đã công bố" },
  { n: "6",   l: "Bài báo ISI",      s: "tạp chí quốc tế uy tín" },
  { n: "4",   l: "Bài báo quốc tế",  s: "uy tín khác" },
  { n: "13",  l: "Tạp chí quốc gia", s: "uy tín" },
  { n: "1",   l: "Giải pháp hữu ích",s: "được cấp 2022" },
  { n: "10+", l: "Báo cáo",          s: "hội nghị quốc tế" },
];

export default function ResearchPage() {
  return (
    <>
      <div className="bg-navy py-12 md:py-16">
        <Container>
          <p className="eyebrow-gold mb-2">Nghiên cứu khoa học</p>
          <h1 className="font-serif-brand text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight">
            Công trình <em className="font-light italic text-brand-gold">tiêu biểu</em>
          </h1>
          <p className="text-[15px] font-light text-white/50 mt-3 max-width-xl">
            45 bài báo đã công bố trong 14+ năm, trong đó 6 bài trên tạp chí ISI uy tín quốc tế.
          </p>
        </Container>
      </div>

      {/* Stats band */}
      <div className="bg-navy-pale border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-6 divide-x divide-gray-200">
            {RESEARCH_STATS.map(({ n, l, s }) => (
              <div key={l} className="py-6 px-5 first:pl-0 last:pr-0">
                <p className="font-serif-brand text-[34px] font-bold text-navy leading-none mb-1">{n}</p>
                <p className="text-[11.5px] text-gray-400 leading-snug">
                  <strong className="block text-[12px] text-gray-600 font-medium mb-0.5">{l}</strong>
                  {s}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Publications */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-14">
            {/* Sidebar */}
            <div>
              <div className="space-y-0 border-t border-gray-100">
                {[
                  { n: "45", l: "Tổng bài báo", s: "đã công bố" },
                  { n: "6",  l: "Bài báo ISI",  s: "quốc tế uy tín" },
                  { n: "1",  l: "Giải pháp hữu ích", s: "được cấp 2022" },
                  { n: "10+",l: "Báo cáo",      s: "hội nghị quốc tế" },
                ].map(({ n, l, s }) => (
                  <div key={l} className="py-4 border-b border-gray-100">
                    <p className="font-serif-brand text-[38px] font-bold text-navy leading-none mb-1">{n}</p>
                    <p className="text-[12px] text-gray-400 leading-snug">
                      <strong className="block text-[13px] text-gray-500 font-medium mb-0.5">{l}</strong>
                      {s}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={DOCTOR.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12.5px] text-navy py-3 border-t border-gray-100 hover:underline underline-offset-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39]" />
                ORCID Profile <ExternalLink size={12} className="ml-auto" />
              </a>

              <div className="mt-4 bg-navy-pale p-4">
                <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-navy mb-3">Giải thưởng</p>
                <p className="text-[12.5px] text-gray-600 mb-2 pb-2 border-b border-gray-200">
                  <strong className="font-semibold">Giải Nhất</strong> — Tuổi trẻ sáng tạo trong Quân đội · 2022
                </p>
                <p className="text-[12.5px] text-gray-600">
                  <strong className="font-semibold">Đại sứ Trẻ</strong> — Hội CTCH Châu Á TBD (APOA) · 2016
                </p>
              </div>
            </div>

            {/* Pub list */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 pb-2.5 border-b-2 border-navy mb-0">
                Bài báo khoa học chọn lọc
              </p>
              {PUBLICATIONS.map((pub) => (
                <PubItem key={pub.title} pub={pub} />
              ))}
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap justify-between gap-3">
                <Link
                  href={DOCTOR.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-navy hover:underline underline-offset-2"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39]" />
                  Xem hồ sơ đầy đủ trên ORCID ↗
                </Link>
                <span className="text-[12px] text-gray-400 italic">
                  Hiển thị {PUBLICATIONS.length} / 45 bài tiêu biểu
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Invention */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader eyebrow="Sáng chế" title="Giải pháp hữu ích" />
          <div className="border border-gray-200 bg-white p-6 flex gap-5 items-start">
            <span className="text-2xl flex-shrink-0">🏆</span>
            <div>
              <span className="inline-block text-[10.5px] font-semibold tracking-wide uppercase border-[1.5px] border-brand-gold text-brand-gold px-2.5 py-0.5 mb-3">
                Giải pháp hữu ích được cấp · 26/05/2022
              </span>
              <h3 className="font-serif-brand text-[17px] font-bold text-gray-900 mb-2 leading-snug">
                Điều trị chấn thương vỡ nhiều mảnh thân đốt sống bằng phẫu thuật cố định cột sống cấu hình ngắn có cải tiến ghép xương liên thân đốt sống qua lỗ ghép
              </h3>
              <p className="text-[13px] text-gray-400">
                Cơ quan cấp: {DOCTOR.hospital} · Tác giả chính
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
