import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "TS.BS. Nguyễn Ngọc Quyền — Bác sĩ Cột sống, Bệnh viện TWQĐ 108",
    template: "%s | TS.BS. Nguyễn Ngọc Quyền",
  },
  description: "TS.BS. Nguyễn Ngọc Quyền — Bác sĩ chuyên ngành Cột sống, Tiến sĩ Y khoa, Bệnh viện Trung ương Quân đội 108.",
  keywords: ["bác sĩ cột sống", "loãng xương", "gãy xẹp đốt sống", "bệnh viện 108"],
  authors: [{ name: "TS.BS. Nguyễn Ngọc Quyền" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta property="fb:app_id" content="1295239782726990" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Nút Messenger nổi góc phải */}
        <a
          href="https://m.me/61576562018406"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0084FF, #0099FF)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,132,255,0.4)",
            textDecoration: "none",
          }}
          title="Nhắn tin qua Messenger"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
            <path d="M14 2C7.373 2 2 7.149 2 13.5c0 3.352 1.52 6.349 3.938 8.389V26l3.787-2.087C10.965 24.284 12.455 24.5 14 24.5c6.627 0 12-5.149 12-11.5S20.627 2 14 2zm1.193 15.494l-3.057-3.26-5.965 3.26 6.563-6.973 3.13 3.26 5.893-3.26-6.564 6.973z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
