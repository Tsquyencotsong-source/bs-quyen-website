import Link from "next/link";
import { DOCTOR } from "@/data/content";
import VisitorCounter from "@/components/VisitorCounter";

const LINKS = [
  { href: "/about",     label: "Giới thiệu" },
  { href: "/research",  label: "Nghiên cứu" },
  { href: "/education", label: "Người bệnh" },
  { href: "/blog",      label: "Kiến thức" },
  { href: "/contact",   label: "Liên hệ" },
];

const FB_URL = "https://www.facebook.com/share/1UdXLcnnLR/";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t-[3px] border-brand-gold">
      <div className="max-w-content mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 flex-wrap">

          {/* Brand + Facebook */}
          <div>
            <p className="font-serif-brand text-[14px] font-bold text-white mb-1">
              TS.BS. Nguyễn Ngọc <span className="text-brand-gold">Quyền</span>
            </p>
            <p className="text-[12px] text-white/40 mb-3">
              Bác sĩ Cột sống · {DOCTOR.hospitalShort}
            </p>

            {/* Icon mạng xã hội */}
            <div className="flex items-center gap-3">
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1877F2] text-white text-[12px] font-semibold px-3 py-1.5 rounded hover:bg-[#166FE5] transition-colors"
                title="Facebook TS.BS. Nguyễn Ngọc Quyền"
              >
                {/* Facebook icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Theo dõi Facebook
              </a>
            </div>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-5 gap-y-1 list-none">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-xs text-white/35 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-1.5">
            <VisitorCounter />
            <p className="text-[11.5px] text-white/25">
              Nội dung mang tính giáo dục. Không thay thế tư vấn y tế trực tiếp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
