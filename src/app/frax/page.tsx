import type { Metadata } from "next";
import FraxTool from "@/components/FraxTool";

export const metadata: Metadata = {
  alternates: { canonical: "/frax" },
  title: "Công cụ FRAX — Đánh giá nguy cơ gãy xương",
  description: "Tính nguy cơ gãy xương trong 10 năm theo thang điểm FRAX WHO, điều chỉnh cho dân số Việt Nam. TS.BS. Nguyễn Ngọc Quyền, Bệnh viện TWQĐ 108.",
};

export default function FraxPage() {
  return <FraxTool />;
}
