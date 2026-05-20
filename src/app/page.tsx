import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/Section";
import { PubItem } from "@/components/PubItem";
import { PostCard } from "@/components/PostCard";
import { DOCTOR, STATS, EXPERTISE, PUBLICATIONS, POSTS } from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div className="bg-navy relative overflow-hidden">
        {/* Diagonal stripe texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,0.018) 40px, rgba(255,255,255,0.018) 41px)",
          }}
        />
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 relative z-10">
          <div className="grid md:grid-cols-[1fr_280px] gap-14 md:gap-16 items-center">
            {/* Left */}
            <div>
              {/* Eyebrow */}
              <p className="flex items-center gap-2.5 text-[11.5px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-5">
                <span className="block w-7 h-0.5 bg-brand-gold" />
                Bác sĩ Cột sống · {DOCTOR.hospitalShort}
              </p>

              <h1 className="font-serif-brand text-[clamp(30px,5vw,52px)] font-bold text-white leading-[1.1] tracking-tight mb-3">
                {DOCTOR.fullTitle}
              </h1>

              {/* Degree row */}
              <div className="flex flex-wrap items-center mb-6">
                {[DOCTOR.degree, DOCTOR.specialty, "Phó Chủ nhiệm Khoa C1.1-A"].map((d, i) => (
                  <span
                    key={i}
                    className="text-[13px] text-white/60 px-3.5 border-r border-white/20 last:border-r-0 first:pl-0 leading-snug"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* Tagline — refined, not a slogan */}
              <blockquote className="border-l-2 border-brand-gold pl-5 py-1 mb-6 max-w-xl">
                <p className="font-serif-brand text-[15px] font-light italic text-white/55 leading-relaxed">
                  {DOCTOR.tagline}
                </p>
              </blockquote>

              <p className="text-[15.5px] font-light leading-relaxed text-white/65 max-w-[580px] mb-9">
                Lâm sàng, nghiên cứu và đào tạo trong lĩnh vực bệnh lý cột sống — với trọng tâm là{" "}
                <strong className="text-white/90 font-semibold">gãy xẹp đốt sống do loãng xương</strong>,
                thoái hóa cột sống người cao tuổi và{" "}
                <strong className="text-white/90 font-semibold">ứng dụng AI</strong>{" "}
                trong hỗ trợ chẩn đoán, điều trị.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/research" className="btn-primary">
                  Công trình nghiên cứu <ArrowRight size={15} />
                </Link>
                <Link href="/education" className="btn-ghost">
                  Thông tin cho người bệnh
                </Link>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-12 pt-8 border-t border-white/10">
                {STATS.map((s) => (
                  <div key={s.label} className="pr-5 [&+&]:pl-5 [&+&]:border-l [&+&]:border-white/10">
                    <p className="font-serif-brand text-[36px] font-bold text-white leading-none mb-1">
                      {s.num}
                    </p>
                    <p className="text-[12px] text-white/40 leading-snug">
                      <strong className="block text-white/65 font-medium text-[12.5px] mb-0.5">{s.label}</strong>
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: academic info card */}
            <div className="hidden md:block bg-white/[0.07] border border-white/[0.14]">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/40 px-5 py-3.5 border-b border-white/10 bg-white/[0.06]">
                Thông tin học thuật
              </p>
              {[
                { k: "Học vị", v: `${DOCTOR.degree}\nViện NCKH Y Dược lâm sàng 108` },
                { k: "Chuyên ngành", v: "Chấn thương Chỉnh hình & Cột sống" },
                { k: "Chức vụ", v: DOCTOR.position },
                { k: "Đơn vị", v: `${DOCTOR.hospitalShort}, Hà Nội` },
                { k: "Ngoại ngữ", v: DOCTOR.ielts },
                { k: "Email", v: DOCTOR.email, link: `mailto:${DOCTOR.email}` },
                { k: "ORCID", v: DOCTOR.orcidId, link: DOCTOR.orcid },
              ].map(({ k, v, link }) => (
                <div key={k} className="flex gap-0 px-5 py-3 border-b border-white/[0.07] last:border-b-0">
                  <span className="w-20 flex-shrink-0 text-[11.5px] text-white/35">{k}</span>
                  {link ? (
                    <a href={link} target={link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[13px] text-brand-gold/80 hover:text-brand-gold leading-snug">
                      {v}
                    </a>
                  ) : (
                    <span className="text-[13px] text-white/70 leading-snug whitespace-pre-line">{v}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── AUDIENCE BLOCKS ──────────────────────────────────────── */}
      <div className="grid md:grid-cols-2">
        {/* Patients */}
        <div className="bg-navy relative overflow-hidden px-8 md:px-14 py-14 border-t border-white/10 md:border-r md:border-white/10">
          <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full bg-white/[0.04] translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <p className="eyebrow-gold mb-4">Dành cho người bệnh</p>
          <h2 className="font-serif-brand text-2xl font-bold text-white mb-4 leading-tight">
            Bạn đang lo lắng<br />về cột sống?
          </h2>
          <p className="text-[14.5px] font-light leading-relaxed text-white/60 mb-7">
            Đau lưng, tê chân, đi lại khó — những triệu chứng này không phải lúc nào cũng
            cần phẫu thuật. Điều quan trọng là được đánh giá đúng và giải thích rõ ràng để
            bạn hiểu bệnh của mình và biết lựa chọn phù hợp.
          </p>
          <ul className="space-y-0 list-none">
            {[
              "Khi nào đau lưng cần đến gặp bác sĩ cột sống?",
              "Gãy xẹp đốt sống ở người cao tuổi là gì?",
              "Thoát vị đĩa đệm có nhất thiết phải mổ không?",
              "Phục hồi sau phẫu thuật cột sống — những điều cần biết",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 py-2.5 border-b border-white/[0.08] text-[14px] text-white/70 hover:text-white cursor-pointer transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/education" className="btn-primary mt-8 inline-flex">
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        {/* Colleagues */}
        <div className="bg-white px-8 md:px-14 py-14 border-t border-gray-100">
          <p className="eyebrow mb-4">Dành cho đồng nghiệp</p>
          <h2 className="font-serif-brand text-2xl font-bold text-gray-900 mb-4 leading-tight">
            Nghiên cứu, đào tạo<br />và cộng tác chuyên môn
          </h2>
          <p className="text-[14.5px] font-light leading-relaxed text-gray-400 mb-7">
            Trao đổi học thuật, chia sẻ kết quả nghiên cứu và phát triển các công cụ hỗ
            trợ quyết định lâm sàng — theo hướng thực dụng, có sản phẩm cụ thể và có thể
            triển khai trong thực hành.
          </p>
          <ul className="space-y-0 list-none">
            {[
              "Đánh giá loãng xương trước phẫu thuật cột sống",
              "Ứng dụng AI trong phân tầng nguy cơ bệnh nhân cột sống",
              "Dùng thang điểm Barthel theo dõi gãy xẹp đốt sống",
              "Hướng dẫn nghiên cứu sinh và bác sĩ nội trú",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 py-2.5 border-b border-gray-100 text-[14px] text-gray-600 hover:text-navy cursor-pointer transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-8">
            <Link href="/research" className="btn-outline-navy">
              Nghiên cứu
            </Link>
            <Link href="/blog" className="btn-outline-navy">
              Kiến thức
            </Link>
          </div>
        </div>
      </div>

      {/* ── EXPERTISE ────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <Container>
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
            <SectionHeader eyebrow="Chuyên môn" title={<>Bốn hướng <em className="font-normal not-italic text-navy">nghiên cứu trọng tâm</em></>} />
            <Link href="/about" className="text-[13px] text-gray-400 hover:text-navy transition-colors mb-10">
              Xem chi tiết →
            </Link>
          </div>

          <div className="border-t-2 border-navy">
            {EXPERTISE.map((exp) => (
              <div
                key={exp.num}
                className="grid grid-cols-[36px_1fr] md:grid-cols-[36px_1fr_180px] gap-6 md:gap-7 py-7 border-b border-gray-100 hover:bg-gray-100 transition-colors -mx-2 px-2"
              >
                <span className="font-serif-brand text-[11px] italic text-gray-300 pt-1">{exp.num}</span>
                <div>
                  <h3 className="font-serif-brand text-[18px] font-bold text-navy mb-2 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-[14px] font-light leading-relaxed text-gray-400 mb-2.5">
                    {exp.body}
                  </p>
                  <p className="text-[12px] text-gray-400">
                    {exp.keywords.join(" · ")}
                  </p>
                </div>
                <div className="hidden md:block text-right text-[12.5px] text-gray-400 pt-1 leading-relaxed">
                  {exp.badge && (
                    <span className="inline-block text-[10.5px] font-semibold tracking-wide uppercase border-[1.5px] border-navy text-navy px-2.5 py-0.5 mb-2">
                      {exp.badge}
                    </span>
                  )}
                  {exp.meta.map((m) => <span key={m} className="block">{m}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 px-4 py-3.5 bg-navy-pale border-l-[3px] border-navy text-[13px] font-light text-gray-600">
            <strong className="font-semibold text-navy">Lưu ý:</strong>{" "}
            Thông tin trên trang này mô tả định hướng nghiên cứu và thực hành lâm sàng.
            Không thay thế việc thăm khám và tư vấn y tế trực tiếp.
          </div>
        </Container>
      </Section>

      {/* ── RESEARCH HIGHLIGHT ───────────────────────────────────── */}
      <Section>
        <Container>
          <div className="flex justify-between items-end mb-6 flex-wrap gap-4">
            <SectionHeader eyebrow="Nghiên cứu" title={<>Công trình <em className="font-normal not-italic text-navy">tiêu biểu</em></>} />
            <Link
              href={DOCTOR.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-navy hover:underline underline-offset-2 mb-10"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39] inline-block" />
              ORCID Profile <ExternalLink size={13} />
            </Link>
          </div>

          <div className="grid md:grid-cols-[210px_1fr] gap-12">
            {/* Sidebar stats */}
            <div>
              {[
                { n: "45",  l: "Tổng bài báo",      s: "đã công bố" },
                { n: "6",   l: "Bài báo ISI",        s: "quốc tế uy tín" },
                { n: "1",   l: "Giải pháp hữu ích",  s: "được cấp 2022" },
                { n: "10+", l: "Báo cáo",            s: "hội nghị quốc tế" },
              ].map(({ n, l, s }) => (
                <div key={l} className="py-4 border-b border-gray-100 first:border-t">
                  <p className="font-serif-brand text-[38px] font-bold text-navy leading-none mb-1">{n}</p>
                  <p className="text-[12px] text-gray-400 leading-snug">
                    <strong className="block text-[13px] text-gray-500 font-medium mb-0.5">{l}</strong>
                    {s}
                  </p>
                </div>
              ))}
              <div className="mt-4 bg-navy-pale p-4">
                <p className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-navy mb-2.5">
                  Giải thưởng
                </p>
                <p className="text-[12.5px] text-gray-600 mb-2 pb-2 border-b border-gray-200">
                  <strong className="font-semibold">Giải Nhất</strong> — Tuổi trẻ sáng tạo trong Quân đội · 2022
                </p>
                <p className="text-[12.5px] text-gray-600">
                  <strong className="font-semibold">Đại sứ Trẻ</strong> — Hội CTCH Châu Á TBD · 2016
                </p>
              </div>
            </div>

            {/* Pub list */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 pb-2.5 border-b-2 border-navy mb-0">
                Bài báo chọn lọc
              </p>
              {PUBLICATIONS.slice(0, 5).map((pub) => (
                <PubItem key={pub.title} pub={pub} />
              ))}
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center flex-wrap gap-3">
                <Link href={DOCTOR.orcid} target="_blank" rel="noopener noreferrer"
                  className="text-[13px] text-navy hover:underline underline-offset-2 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39]" />
                  Xem hồ sơ đầy đủ trên ORCID ↗
                </Link>
                <Link href="/research" className="text-[13px] text-gray-400 hover:text-navy transition-colors">
                  Xem tất cả 45 công trình →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── BLOG / KNOWLEDGE ─────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <Container>
          <div className="flex justify-between items-end mb-0 flex-wrap gap-4">
            <SectionHeader eyebrow="Kiến thức & Bài viết" title={<>Nội dung y học <em className="font-normal not-italic text-navy">thực hành</em></>} />
            <Link href="/blog" className="text-[13px] text-gray-400 hover:text-navy transition-colors mb-10">
              Xem tất cả →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 border-t-2 border-navy">
            {POSTS.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-6 p-4 bg-brand-gold-lt border-l-[3px] border-brand-gold text-[13px] font-light text-gray-600">
            <strong className="font-semibold text-gray-700">Lưu ý:</strong>{" "}
            Nội dung mang tính giáo dục sức khỏe tổng quát, không thay thế tư vấn y tế trực tiếp.
            Nếu bạn có triệu chứng cụ thể, vui lòng đến gặp bác sĩ để được thăm khám đầy đủ.
          </div>
        </Container>
      </Section>

      {/* ── CONTACT CTA STRIP ────────────────────────────────────── */}
      <div className="bg-navy">
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow-gold mb-2">Cộng tác & Liên hệ</p>
            <h2 className="font-serif-brand text-[26px] font-bold text-white leading-tight">
              Hoan nghênh trao đổi<br />
              <em className="font-light text-brand-gold">chuyên môn và nghiên cứu</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${DOCTOR.email}`} className="btn-primary whitespace-nowrap">
              Gửi email trao đổi
            </a>
            <Link href="/contact" className="btn-ghost whitespace-nowrap">
              Thông tin liên hệ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
