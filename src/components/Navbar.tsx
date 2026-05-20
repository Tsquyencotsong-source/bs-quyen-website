"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { DOCTOR } from "@/data/content";

const NAV_LINKS = [
  { href: "/",           label: "Trang chủ" },
  { href: "/about",      label: "Giới thiệu" },
  { href: "/research",   label: "Nghiên cứu" },
  { href: "/education",  label: "Người bệnh" },
  { href: "/blog",       label: "Kiến thức" },
  { href: "/contact",    label: "Liên hệ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-dark hidden md:block">
        <div className="max-w-content mx-auto px-10 h-9 flex items-center justify-between">
          <span className="text-xs text-white/50 font-light tracking-wide">
            {DOCTOR.hospital} · Hà Nội
          </span>
          <div className="flex gap-5">
            <a href={`mailto:${DOCTOR.email}`} className="text-xs text-white/50 hover:text-white transition-colors">
              {DOCTOR.email}
            </a>
            <a href={DOCTOR.orcid} target="_blank" rel="noopener noreferrer" className="text-xs text-white/50 hover:text-white transition-colors">
              ORCID ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-navy sticky top-0 z-50 shadow-md">
        <nav className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex flex-col gap-0.5 group">
            <span className="font-serif-brand text-[15px] font-bold text-white leading-tight group-hover:text-white/90 transition-colors">
              {DOCTOR.name}
            </span>
            <span className="text-[10.5px] font-light text-white/50 uppercase tracking-widest">
              TS.BS. · Bác sĩ Cột sống
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-stretch h-16 list-none">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center px-4 text-[13px] tracking-wide border-b-[3px] h-full transition-all
                      ${active
                        ? "text-white border-brand-gold bg-white/[0.06] font-medium"
                        : "text-white/75 border-transparent hover:text-white hover:bg-white/[0.06]"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href={`mailto:${DOCTOR.email}`}
            className="hidden md:flex items-center text-[13px] font-semibold text-white bg-brand-red px-5 py-2.5 hover:bg-red-800 transition-colors"
          >
            Liên hệ
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-dark flex flex-col pt-20 px-8 md:hidden">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-serif-brand text-2xl font-bold text-white/80 py-4 border-b border-white/10 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-8 pt-4 border-t border-white/10">
            <p className="text-sm text-white/40">{DOCTOR.email}</p>
          </div>
        </div>
      )}
    </>
  );
}
