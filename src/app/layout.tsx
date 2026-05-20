import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "TS.BS. Nguyễn Ngọc Quyền — Bác sĩ Cột sống, Bệnh viện TWQĐ 108",
    template: "%s | TS.BS. Nguyễn Ngọc Quyền",
  },
  description:
    "TS.BS. Nguyễn Ngọc Quyền — Bác sĩ chuyên ngành Cột sống, Tiến sĩ Y khoa, Phó Chủ nhiệm Khoa C1.1-A, Bệnh viện Trung ương Quân đội 108. Nghiên cứu loãng xương, gãy xẹp đốt sống, ứng dụng AI trong y học.",
  keywords: ["bác sĩ cột sống", "loãng xương", "gãy xẹp đốt sống", "bệnh viện 108", "phẫu thuật cột sống"],
  authors: [{ name: "TS.BS. Nguyễn Ngọc Quyền" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "TS.BS. Nguyễn Ngọc Quyền",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
