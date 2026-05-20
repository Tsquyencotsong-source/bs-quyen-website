import Link from "next/link";
import { DOCTOR } from "@/data/content";

const LINKS = [
  { href: "/about",     label: "Giới thiệu" },
  { href: "/research",  label: "Nghiên cứu" },
  { href: "/education", label: "Người bệnh" },
  { href: "/blog",      label: "Kiến thức" },
  { href: "/contact",   label: "Liên hệ" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t-[3px] border-brand-gold">
      <div className="max-w-content mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="font-serif-brand text-[14px] font-bold text-white">
            TS.BS. Nguyễn Ngọc{" "}
            <span className="text-brand-gold">Quyền</span>
          </p>
          <p className="text-[12px] text-white/40 mt-1">
            Bác sĩ Cột sống · {DOCTOR.hospitalShort}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-1 list-none">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-xs text-white/35 hover:text-white transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-[11.5px] text-white/25">
          Nội dung mang tính giáo dục. Không thay thế tư vấn y tế trực tiếp.
        </p>
      </div>
    </footer>
  );
}
