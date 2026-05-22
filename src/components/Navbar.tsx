"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { DOCTOR } from "@/data/content";

const NAV_LINKS = [
  { href: "/",           label: "Trang chủ" },
  { href: "/about",      label: "Giới thiệu" },
  { href: "/research",   label: "Nghiên cứu" },
  { href: "/education",  label: "Người bệnh" },
  { href: "/blog",       label: "Kiến thức" },
  { href: "/contact",    label: "Liên hệ" },
  { href: "/frax", label: "FRAX" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Đóng popup khi bấm ra ngoài
  useEffect(() => {
    if (!popupOpen) return;
    const handler = (e: MouseEvent) => {
      const popup = document.getElementById("contact-popup");
      if (popup && !popup.contains(e.target as Node)) {
        setPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [popupOpen]);

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
            <span className="font-serif-brand text-[15px] font-bold text-white leading-tight">
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

          {/* Nút Liên hệ — mở popup */}
          <button
            onClick={() => setPopupOpen(true)}
            className="hidden md:flex items-center text-[13px] font-semibold text-white bg-brand-red px-5 py-2.5 hover:bg-red-800 transition-colors"
          >
            Liên hệ
          </button>

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
          {/* Liên hệ trong mobile menu */}
          <button
            onClick={() => { setMenuOpen(false); setPopupOpen(true); }}
            className="mt-6 btn-primary justify-center"
          >
            Liên hệ & Đặt khám
          </button>
        </div>
      )}

      {/* POPUP LIÊN HỆ */}
      {popupOpen && (
        <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4">
          <div
            id="contact-popup"
            className="bg-white w-full max-w-lg shadow-2xl overflow-hidden"
          >
            {/* Header popup */}
            <div className="bg-navy px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-0.5">
                  Thông tin đặt khám
                </p>
                <h3 className="font-serif-brand text-[18px] font-bold text-white">
                  TS.BS. Nguyễn Ngọc Quyền
                </h3>
              </div>
              <button
                onClick={() => setPopupOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-1"
              >
                <X size={22} />
              </button>
            </div>

            {/* Số điện thoại nổi bật */}
            <div className="bg-brand-red px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-white/70 uppercase tracking-wider mb-1">Gọi đặt lịch ngay</p>
                <a
                  href="tel:0989052288"
                  className="text-[26px] font-bold text-white tracking-wide hover:text-white/90"
                >
                  0989 052 288
                </a>
              </div>
              <a
                href="tel:0989052288"
                className="bg-white text-brand-red font-bold text-[13px] px-4 py-2.5 hover:bg-gray-100 transition-colors"
              >
                Gọi ngay
              </a>
            </div>

            {/* Hai phòng khám */}
            <div className="divide-y divide-gray-100">

              {/* Trong giờ */}
              <div className="px-6 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-navy-pale text-navy text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1">
                    Trong giờ hành chính
                  </span>
                </div>
                <p className="font-serif-brand text-[16px] font-bold text-navy mb-3">
                  Bệnh viện Trung ương Quân đội 108
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-[13.5px] text-gray-500">
                    <Clock size={14} className="text-navy mt-0.5 flex-shrink-0" />
                    <span>Thứ 2 – Thứ 6 &nbsp;|&nbsp; <strong className="text-gray-800">6h30 – 17h00</strong></span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13.5px] text-gray-500">
                    <MapPin size={14} className="text-navy mt-0.5 flex-shrink-0" />
                    <span>
                      Phòng 225 – Tầng 2, Nhà N1B<br />
                      Khoa Khám bệnh đa khoa<br />
                      <strong className="text-gray-800">Số 1 Trần Hưng Đạo, Hai Bà Trưng, Hà Nội</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Ngoài giờ */}
              <div className="px-6 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-50 text-brand-red text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1">
                    Ngoài giờ hành chính
                  </span>
                </div>
                <p className="font-serif-brand text-[16px] font-bold text-navy mb-3">
                  Phòng khám SpineTech
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-[13.5px] text-gray-500">
                    <Clock size={14} className="text-brand-red mt-0.5 flex-shrink-0" />
                    <span>Thứ 6 hàng tuần &nbsp;|&nbsp; <strong className="text-gray-800">17h30 trở đi</strong></span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[13.5px] text-gray-500">
                    <MapPin size={14} className="text-brand-red mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-800">257 Giải Phóng</strong><br />
                      Phường Bạch Mai, Hà Nội
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer popup */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <a
                href={`mailto:${DOCTOR.email}`}
                className="text-[13px] text-navy hover:underline underline-offset-2"
              >
                📧 {DOCTOR.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
