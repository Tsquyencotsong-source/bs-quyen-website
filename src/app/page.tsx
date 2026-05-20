import Link from "next/link";
import Image from "next/image";
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
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,0.018) 40px, rgba(255,255,255,0.018) 41px)",
        }} />
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 relative z-10">
          <div className="grid md:grid-cols-[1fr_300px] gap-14 items-center">
            <div>
              <p className="flex items-center gap-2.5 text-[11.5px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-5">
                <span className="block w-7 h-0.5 bg-brand-gold" />
                Bác sĩ Cột sống · {DOCTOR.hospitalShort}
              </p>
              <h1 className="font-serif-brand text-[clamp(30px,5vw,52px)] font-bold text-white leading-[1.1] tracking-tight mb-3">
                {DOCTOR.fullTitle}
              </h1>
              <div className="flex flex-wrap items-center mb-6">
                {[DOCTOR.degree, DOCTOR.specialty, "Phó Chủ nhiệm Khoa C1.1-A"].map((d, i) => (
                  <span key={i} className="text-[13px] text-white/60 px-3.5 border-r border-white/20 last:border-r-0 first:pl-0 leading-snug">{d}</span>
                ))}
              </div>
              <blockquote className="border-l-2 border-brand-gold pl-5 py-1 mb-6 max-w-xl">
                <p className="font-serif-brand text-[15px] font-light italic text-white/55 leading-relaxed">
                  {DOCTOR.tagline}
                </p>
              </blockquote>
              <p className="text-[15.5px] font-light leading-relaxed text-white/65 max-w-[580px] mb-9">
                Lâm sàng, nghiên cứu và đào tạo trong lĩnh vực bệnh lý cột sống — với trọng tâm là{" "}
                <strong className="text-white/90 font-semibold">gãy xẹp đốt sống do loãng xương</strong>,
                thoái hóa cột sống người cao tuổi và{" "}
                <strong className="text-white/90 font-semibold">ứng dụng AI</strong> trong hỗ trợ chẩn đoán, điều trị.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/research" className="btn-primary">Công trình nghiên cứu <ArrowRight size={15} /></Link>
                <Link href="/education" className="btn-ghost">Thông tin cho người bệnh</Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-12 pt-8 border-t border-white/10">
                {STATS.map((s) => (
                  <div key={s.label} className="pr-5 [&+&]:pl-5 [&+&]:border-l [&+&]:border-white/10">
                    <p className="font-serif-brand text-[36px] font-bold text-white leading-none mb-1">{s.num}</p>
                    <p className="text-[12px] text-white/40 leading-snug">
                      <strong className="block text-white/65 font-medium text-[12.5px] mb-0.5">{s.label}</strong>
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ảnh chân dung khám bệnh */}
            <div className="hidden md:block relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-white/10">
                <Image
                  src="/images/2.jpg"
                  alt="TS.BS. Nguyễn Ngọc Quyền tại phòng khám"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-navy/85 px-5 py-4">
                  <p className="font-serif-brand text-[14px] font-bold text-white">TS.BS. Nguyễn Ngọc Quyền</p>
                  <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Phó Chủ nhiệm Khoa · C1.1-A · BV TWQĐ 108</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── AUDIENCE BLOCKS ──────────────────────────────────────── */}
      <div className="grid md:grid-cols-2">
        <div className="bg-navy relative overflow-hidden px-8 md:px-14 py-14 border-t border-white/10 md:border-r md:border-white/10">
          <p className="eyebrow-gold mb-4">Dành cho người bệnh</p>
          <h2 className="font-serif-brand text-2xl font-bold text-white mb-4 leading-tight">Bạn đang lo lắng<br />về cột sống?</h2>
          <p className="text-[14.5px] font-light leading-relaxed text-white/60 mb-7">
            Đau lưng, tê chân, đi lại khó — những triệu chứng này không phải lúc nào cũng cần phẫu thuật. Điều quan trọng là được đánh giá đúng và giải thích rõ ràng.
          </p>
          <Link href="/education" className="btn-primary inline-flex">Xem thông tin →</Link>
        </div>
        <div className="bg-white px-8 md:px-14 py-14 border-t border-gray-100">
          <p className="eyebrow mb-4">Dành cho đồng nghiệp</p>
          <h2 className="font-serif-brand text-2xl font-bold text-gray-900 mb-4 leading-tight">Nghiên cứu, đào tạo<br />và cộng tác chuyên môn</h2>
          <p className="text-[14.5px] font-light leading-relaxed text-gray-400 mb-7">
            Trao đổi học thuật, chia sẻ kết quả nghiên cứu và phát triển các công cụ hỗ trợ quyết định lâm sàng.
          </p>
          <div className="flex gap-3">
            <Link href="/research" className="btn-outline-navy">Nghiên cứu</Link>
            <Link href="/blog" className="btn-outline-navy">Kiến thức</Link>
          </div>
        </div>
      </div>

      {/* ── GALLERY ──────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader eyebrow="Hình ảnh" title={<>Hoạt động <em className="font-normal not-italic text-navy">chuyên môn</em></>} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
            {/* Ảnh hội nghị Malaysia */}
            <div className="relative aspect-square overflow-hidden group">
              <Image src="/images/9.jpg" alt="Báo cáo tại hội nghị APSS APPOS Malaysia 2025" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-[12px] font-medium">Báo cáo tại APSS APPOS 2025, Malaysia</p>
              </div>
            </div>
            {/* Ảnh khám bệnh */}
            <div className="relative aspect-square overflow-hidden group">
              <Image src="/images/2.jpg" alt="Khám và tư vấn bệnh nhân tại phòng khám" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-[12px] font-medium">Tư vấn bệnh nhân tại phòng khám</p>
              </div>
            </div>
            {/* Ảnh nghiên cứu */}
            <div className="relative aspect-square overflow-hidden group">
              <Image src="/images/3.jpg" alt="Nghiên cứu khoa học và công bố quốc tế" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-[12px] font-medium">Nghiên cứu khoa học</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <Image src="/images/4.jpg" alt="Hoạt động chuyên môn" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <Image src="/images/5.jpg" alt="Hoạt động chuyên môn" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <Image src="/images/6.jpg" alt="Hoạt động chuyên môn" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── EXPERTISE ────────────────────────────────────────────── */}
      <Section className="bg-white">
        <Container>
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
            <SectionHeader eyebrow="Chuyên môn" title={<>Bốn hướng <em className="font-normal not-italic text-navy">nghiên cứu trọng tâm</em></>} />
            <Link href="/about" className="text-[13px] text-gray-400 hover:text-navy transition-colors mb-10">Xem chi tiết →</Link>
          </div>
          <div className="border-t-2 border-navy">
            {EXPERTISE.map((exp) => (
              <div key={exp.num} className="grid grid-cols-[36px_1fr] md:grid-cols-[36px_1fr_180px] gap-6 md:gap-7 py-7 border-b border-gray-100 hover:bg-gray-50 transition-colors -mx-2 px-2">
                <span className="font-serif-brand text-[11px] italic text-gray-300 pt-1">{exp.num}</span>
                <div>
                  <h3 className="font-serif-brand text-[18px] font-bold text-navy mb-2 leading-snug">{exp.title}</h3>
                  <p className="text-[14px] font-light leading-relaxed text-gray-400 mb-2.5">{exp.body}</p>
                  <p className="text-[12px] text-gray-400">{exp.keywords.join(" · ")}</p>
                </div>
                <div className="hidden md:block text-right text-[12.5px] text-gray-400 pt-1 leading-relaxed">
                  {exp.badge && <span className="inline-block text-[10.5px] font-semibold tracking-wide uppercase border-[1.5px] border-navy text-navy px-2.5 py-0.5 mb-2">{exp.badge}</span>}
                  {exp.meta.map((m) => <span key={m} className="block">{m}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── RESEARCH ─────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <Container>
          <div className="flex justify-between items-end mb-6 flex-wrap gap-4">
            <SectionHeader eyebrow="Nghiên cứu" title={<>Công trình <em className="font-normal not-italic text-navy">tiêu biểu</em></>} />
            <Link href={DOCTOR.orcid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-navy hover:underline underline-offset-2 mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39] inline-block" />
              ORCID Profile <ExternalLink size={13} />
            </Link>
          </div>

          {/* Ảnh nghiên cứu nổi bật */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/9.jpg" alt="Báo cáo tại hội nghị quốc tế APSS APPOS Malaysia 2025" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/60 text-[10px] uppercase tracking-wider mb-1">Hội nghị quốc tế</p>
                <p className="text-white font-semibold text-[14px]">14th APSS APPOS Combined Meeting, Malaysia · 2025</p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/1.jpg" alt="Nghiên cứu và công bố khoa học quốc tế" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/60 text-[10px] uppercase tracking-wider mb-1">Nghiên cứu khoa học</p>
                <p className="text-white font-semibold text-[14px]">45 bài báo · 6 ISI · h-index 4 · 158 citations</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[210px_1fr] gap-12">
            <div>
              {[{n:"45",l:"Tổng bài báo",s:"đã công bố"},{n:"6",l:"Bài báo ISI",s:"quốc tế uy tín"},{n:"1",l:"Giải pháp hữu ích",s:"được cấp 2022"},{n:"10+",l:"Báo cáo",s:"hội nghị quốc tế"}].map(({n,l,s})=>(
                <div key={l} className="py-4 border-b border-gray-100 first:border-t">
                  <p className="font-serif-brand text-[38px] font-bold text-navy leading-none mb-1">{n}</p>
                  <p className="text-[12px] text-gray-400 leading-snug"><strong className="block text-[13px] text-gray-500 font-medium mb-0.5">{l}</strong>{s}</p>
                </div>
              ))}
              <a href={DOCTOR.orcid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 text-[12.5px] text-navy py-3 border-t border-gray-100 hover:underline underline-offset-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39]" />ORCID Profile ↗
              </a>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 pb-2.5 border-b-2 border-navy mb-0">Bài báo chọn lọc</p>
              {PUBLICATIONS.slice(0,5).map((pub)=><PubItem key={pub.title} pub={pub}/>)}
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap justify-between gap-3">
                <Link href={DOCTOR.orcid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-navy hover:underline underline-offset-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A6CE39]"/>Xem hồ sơ đầy đủ trên ORCID ↗
                </Link>
                <Link href="/research" className="text-[13px] text-gray-400 hover:text-navy transition-colors">Xem tất cả 45 công trình →</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── BLOG ─────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <Container>
          <div className="flex justify-between items-end mb-0 flex-wrap gap-4">
            <SectionHeader eyebrow="Kiến thức & Bài viết" title={<>Nội dung y học <em className="font-normal not-italic text-navy">thực hành</em></>} />
            <Link href="/blog" className="text-[13px] text-gray-400 hover:text-navy transition-colors mb-10">Xem tất cả →</Link>
          </div>
          <div className="grid md:grid-cols-3 border-t-2 border-navy">
            {POSTS.slice(0,3).map((post)=><PostCard key={post.slug} post={post}/>)}
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="bg-navy">
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow-gold mb-2">Cộng tác & Liên hệ</p>
            <h2 className="font-serif-brand text-[26px] font-bold text-white leading-tight">
              Hoan nghênh trao đổi<br /><em className="font-light text-brand-gold">chuyên môn và nghiên cứu</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${DOCTOR.email}`} className="btn-primary whitespace-nowrap">Gửi email trao đổi</a>
            <Link href="/contact" className="btn-ghost whitespace-nowrap">Thông tin liên hệ</Link>
          </div>
        </div>
      </div>
    </>
  );
}
