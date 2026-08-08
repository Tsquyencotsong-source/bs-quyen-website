import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Section";

export const metadata: Metadata = {
  alternates: { canonical: "/education/tu-tap-luyen" },
  title: "Huong dan tu tap luyen",
  description: "TS.BS. Nguyen Ngoc Quyen, BV TWQD 108.",
};

export default function TuTapLuyenPage() {
  return (
    <>
      <div className="bg-navy py-12 md:py-16">
        <Container>
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-4">
            <Link href="/education" className="hover:text-white/70">Nguoi benh</Link>
            <span>/</span>
            <span className="text-white/70">Huong dan tu tap luyen</span>
          </nav>
          <h1 className="font-serif-brand text-3xl font-bold text-white">Tap luyen phuc hoi</h1>
        </Container>
      </div>
      <div className="py-12">
        <Container>
          <Link
            href="/education/tu-tap-luyen/sau-bom-xi-mang-dot-song"
            className="group border-2 border-gray-200 hover:border-navy p-6 rounded-xl flex flex-col gap-3 max-w-sm"
          >
            <h2 className="font-serif-brand text-lg font-bold text-navy">Tap luyen sau bom xi mang dot song</h2>
            <p className="text-sm text-gray-500">4 giai doan, 19 bai tap, checklist.</p>
            <span className="text-sm font-semibold text-navy">Xem huong dan</span>
          </Link>
        </Container>
      </div>
    </>
  );
}
