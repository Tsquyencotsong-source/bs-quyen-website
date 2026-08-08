import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/Section";
import { POSTS } from "@/data/content";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Kiến thức y học",
  description: "Bài viết về bệnh lý cột sống, loãng xương, gãy xẹp đốt sống và ứng dụng AI trong y học.",
};

const CATEGORIES = ["Tất cả", "Giáo dục sức khỏe", "Lâm sàng", "Công nghệ"];

export default function BlogPage() {
  return (
    <>
      <div className="bg-navy py-12 md:py-16">
        <Container>
          <p className="eyebrow-gold mb-2">Kiến thức & Bài viết</p>
          <h1 className="font-serif-brand text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight">
            Nội dung y học <em className="font-light italic text-brand-gold">thực hành</em>
          </h1>
          <p className="text-[15px] font-light text-white/50 mt-3">
            Thông tin cho bệnh nhân, đồng nghiệp và những ai quan tâm đến y học cột sống.
          </p>
        </Container>
      </div>

      {/* Category filter (static — for Vercel deploy simplicity) */}
      <div className="border-b border-gray-200 bg-white">
        <Container>
          <div className="flex gap-0 overflow-x-auto">
            {CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                className={`text-[13px] px-5 py-3.5 border-b-2 whitespace-nowrap cursor-pointer transition-colors
                  ${i === 0 ? "border-navy text-navy font-medium" : "border-transparent text-gray-400 hover:text-gray-700"}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white border border-gray-200 p-6 hover:border-navy-light hover:shadow-sm transition-all group"
              >
                <p className="text-[10.5px] font-semibold tracking-[0.15em] uppercase text-navy mb-3 pb-3 border-b border-gray-100">
                  {post.audience}
                </p>
                <h2 className="font-serif-brand text-[18px] font-bold text-gray-900 leading-snug mb-3 group-hover:text-navy transition-colors">
                  {post.title}
                </h2>
                <p className="text-[13.5px] font-light leading-relaxed text-gray-400 mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[12px] text-gray-300">{post.date}</span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy group-hover:gap-3 transition-all">
                    Đọc bài <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-[13px] text-gray-400 italic">
            Hiển thị {POSTS.length} bài viết. Thêm nội dung sẽ được cập nhật thường xuyên.
          </p>
        </Container>
      </Section>

      {/* Disclaimer */}
      <div className="bg-brand-gold-lt border-t border-brand-gold/30">
        <Container>
          <div className="py-5 flex gap-3 text-[13px] text-gray-600 font-light">
            <span className="flex-shrink-0">ℹ️</span>
            <p>
              <strong className="font-semibold">Lưu ý:</strong>{" "}
              Tất cả nội dung mang tính giáo dục sức khỏe tổng quát và thông tin chuyên môn.
              Không thay thế tư vấn y tế trực tiếp. Nếu bạn có triệu chứng cụ thể, vui lòng
              đến gặp bác sĩ để được thăm khám và đánh giá đầy đủ.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
