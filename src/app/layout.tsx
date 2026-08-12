import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CozeChat from "@/components/CozeChat";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bsquyen108.com"),
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

        {/* Trợ lý AI Bé Bự — bong bóng chat góc phải dưới */}
        <CozeChat />

        {/* Thống kê lượt truy cập (dashboard riêng trên Vercel) */}
        <Analytics />
      </body>
    </html>
  );
}
