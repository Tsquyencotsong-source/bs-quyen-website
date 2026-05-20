import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Section";
import { POSTS } from "@/data/content";

// Generate static routes at build time
export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

// Stub article bodies — replace with MDX or CMS later
const BODIES: Record<string, string> = {
  "dau-lung-khi-nao-gap-bac-si": `
Đau lưng là một trong những lý do phổ biến nhất khiến người bệnh đến gặp bác sĩ. Tuy nhiên, không phải cơn đau lưng nào cũng cần đến bác sĩ cột sống ngay.

**Khi nào đau lưng tự khỏi được?**

Đa số cơn đau lưng — đặc biệt là đau lưng cơ học (do căng cơ, sai tư thế) — tự cải thiện trong vòng 4–6 tuần với điều trị ban đầu đơn giản: nghỉ ngơi có kiểm soát, thuốc giảm đau và vận động nhẹ.

**Những dấu hiệu cần đến gặp bác sĩ sớm:**

- Đau không cải thiện sau 4–6 tuần điều trị ban đầu
- Đau lan xuống chân (đặc biệt kèm tê bì, yếu cơ)
- Đau sau chấn thương (ngã, tai nạn)
- Đau kèm khó khăn khi tiểu tiện hoặc đại tiện
- Đau nhiều về đêm, làm mất ngủ kéo dài
- Đau kèm sụt cân không rõ nguyên nhân hoặc sốt
- Người cao tuổi với cơn đau lưng cấp tính sau ho, hắt hơi hoặc động tác nhỏ

**Lưu ý:** Thông tin này mang tính tổng quát. Chỉ bác sĩ thăm khám trực tiếp mới có thể đánh giá chính xác tình trạng của bạn.
  `,
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const body = BODIES[params.slug] || post.excerpt + "\n\n*(Nội dung đầy đủ sẽ được cập nhật sớm.)*";

  return (
    <>
      <div className="bg-navy py-10 md:py-14">
        <Container>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={14} /> Quay lại tất cả bài viết
          </Link>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-3">{post.audience}</p>
          <h1 className="font-serif-brand text-[clamp(24px,3.5vw,38px)] font-bold text-white leading-tight max-w-2xl">
            {post.title}
          </h1>
          <p className="text-[13px] text-white/40 mt-4">{post.date}</p>
        </Container>
      </div>

      <div className="py-12 md:py-16">
        <Container>
          <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
            {/* Article body */}
            <article className="max-w-2xl">
              <p className="text-[16px] font-light leading-[1.85] text-gray-500 mb-6 font-serif-brand italic border-l-2 border-brand-gold pl-5">
                {post.excerpt}
              </p>
              {/* Render stub body as simple paragraphs */}
              {body.split("\n\n").map((block, i) => {
                if (block.startsWith("**") && block.endsWith("**")) {
                  return <h3 key={i} className="font-serif-brand text-[19px] font-bold text-navy mt-7 mb-3">{block.replace(/\*\*/g, "")}</h3>;
                }
                if (block.startsWith("- ")) {
                  return (
                    <ul key={i} className="list-none mb-5 space-y-2">
                      {block.split("\n").filter(l => l.startsWith("- ")).map((line, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-[15px] font-light text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2 flex-shrink-0" />
                          {line.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return block.trim() ? (
                  <p key={i} className="text-[15.5px] font-light leading-[1.85] text-gray-500 mb-5">{block}</p>
                ) : null;
              })}

              <div className="mt-8 p-4 bg-brand-gold-lt border-l-[3px] border-brand-gold text-[13px] font-light text-gray-600">
                <strong className="font-semibold text-gray-700">Lưu ý:</strong>{" "}
                Nội dung mang tính giáo dục sức khỏe tổng quát. Không thay thế tư vấn y tế trực tiếp.
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-4 sticky top-20">
              <div className="bg-navy-pale border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">
                  Về tác giả
                </p>
                <p className="font-serif-brand text-[15px] font-bold text-navy">TS.BS. Nguyễn Ngọc Quyền</p>
                <p className="text-[13px] text-gray-400 mt-1 leading-snug">Bác sĩ Cột sống · Bệnh viện TWQĐ 108</p>
                <Link href="/about" className="inline-block mt-3 text-[13px] text-navy hover:underline underline-offset-2">
                  Xem giới thiệu →
                </Link>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">
                  Bài viết liên quan
                </p>
                <ul className="space-y-2 list-none">
                  {POSTS.filter(p => p.slug !== params.slug).slice(0, 3).map(p => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-[13.5px] text-gray-600 hover:text-navy transition-colors leading-snug block">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}
