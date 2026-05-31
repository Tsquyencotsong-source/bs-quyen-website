import type { Metadata } from "next";
import Link from "next/link";
import KyphoRehabApp from "@/components/KyphoRehabApp";

export const metadata: Metadata = {
  title: "Tập luyện sau bơm xi măng đốt sống (Kyphoplasty) — TS.BS. Nguyễn Ngọc Quyền",
  description: "Hướng dẫn phục hồi từng giai đoạn sau kyphoplasty / vertebroplasty: bài tập, nguyên tắc vàng, theo dõi tiến độ. TS.BS. Nguyễn Ngọc Quyền, Bệnh viện TWQĐ 108.",
};

export default function SauBomXiMangPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-navy py-4">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link href="/education" className="hover:text-white/70 transition-colors">Người bệnh</Link>
            <span>/</span>
            <Link href="/education/tu-tap-luyen" className="hover:text-white/70 transition-colors">Hướng dẫn tự tập luyện</Link>
            <span>/</span>
            <span className="text-white/70">Sau bơm xi măng đốt sống</span>
          </nav>
        </div>
      </div>

      {/* App */}
      <KyphoRehabApp />
    </>
  );
}
