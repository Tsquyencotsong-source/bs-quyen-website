import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hướng dẫn tự tập luyện — Người bệnh cột sống",
  description: "Bộ hướng dẫn tập luyện phục hồi chức năng dành cho bệnh nhân cột sống và loãng xương. TS.BS. Nguyễn Ngọc Quyền, Bệnh viện TWQĐ 108.",
};

const APPS = [
  {
    href: "/education/tu-tap-luyen/sau-bom-xi-mang-dot-song",
    icon: "🦴",
    badge: "Kyphoplasty · Vertebroplasty",
    title: "Tập luyện sau bơm xi măng đốt sống",
    desc: "Lộ trình phục hồi 4 giai đoạn (12 tuần+) với hình minh họa bài tập, checklist theo dõi tiến độ, nguyên tắc vàng và dấu hiệu cần gặp bác sĩ ngay.",
    tags: ["19 bài tập", "4 giai đoạn", "Theo dõi tiến độ"],
  },
  // Các app khác sẽ được bổ sung tại đây
];

export default function TuTapLuyenPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy py-12 md:py-16">
        <Container>
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-4">
            <Link href="/education" className="hover:text-white/70 transition-colors">Người bệnh</Link>
            <span>/</span>
            <span className="text-white/70">Hướng dẫn tự tập luyện</span>
          </nav>
          <p className="eyebrow-gold mb-2">Hướng dẫn tự tập luyện</p>
          <h1 className="font-serif-brand text-[clamp(26px,4vw,40px)] font-bold text-white leading-tight">
            Tập luyện phục hồi <em className="font-light italic text-brand-gold">đúng cách</em>
          </h1>
          <p className="text-[15px] font-light text-white/50 mt-3 max-w-xl">
            Bộ công cụ hướng dẫn tập luyện tương tác dành cho bệnh nhân cột sống và loãng xương — từng giai đoạn, từng bài tập, kèm hình minh họa.
          </p>
        </Container>
      </div>

      {/* Disclaimer */}
      <div className="bg-brand-gold-lt border-b border-brand-gold/30">
        <Container>
          <div className="py-3 flex items-start gap-3 text-[13px] text-gray-600">
            <span className="text-lg flex-shrink-0">ℹ️</span>
            <p>
              <strong className="font-semibold text-gray-800">Lưu ý:</strong>{" "}
              Các hướng dẫn mang tính tổng quát và không thay thế chỉ định trực tiếp của bác sĩ. Mỗi bệnh nhân cần được cá thể hóa lộ trình tập luyện.
            </p>
          </div>
        </Container>
      </div>

      {/* App cards */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-5">
            {APPS.map((app) => (
              <Link
                key={app.href}
                href={app.href}
                className="group border border-gray-200 hover:border-navy transition-all p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-3xl">{app.icon}</span>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-gold bg-brand-gold-lt px-2.5 py-1 flex-shrink-0">
                    {app.badge}
                  </span>
                </div>

                <div>
                  <h2 className="font-serif-brand text-[19px] font-bold text-navy group-hover:text-navy-light transition-colors leading-snug">
                    {app.title}
                  </h2>
                  <p className="mt-2 text-[14px] font-light text-gray-500 leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((t) => (
                      <span key={t} className="text-[12px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowRight size={18} className="text-navy opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </Link>
            ))}

            {/* Placeholder — sắp ra mắt */}
            <div className="border border-dashed border-gray-200 p-6 flex flex-col gap-3 opacity-60">
              <span className="text-3xl">🦵</span>
              <h2 className="font-serif-brand text-[19px] font-bold text-gray-400">
                Tập luyện sau phẫu thuật khớp gối
              </h2>
              <p className="text-[14px] font-light text-gray-400">Sắp ra mắt.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <div className="bg-navy-pale border-t border-gray-200">
        <Container>
          <div className="py-10 text-center">
            <h2 className="font-serif-brand text-[22px] font-bold text-navy mb-2">
              Cần lộ trình tập luyện riêng cho bạn?
            </h2>
            <p className="text-[14px] font-light text-gray-500 mb-5 max-w-lg mx-auto">
              Liên hệ TS.BS. Nguyễn Ngọc Quyền để được tư vấn và xây dựng chương trình phục hồi cá thể hóa.
            </p>
            <a href="tel:0989052288" className="btn-primary inline-flex">
              Gọi đặt lịch: 0989 052 288
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
