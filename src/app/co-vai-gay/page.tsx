import type { Metadata } from "next";
import CoVaiGayTool from "@/components/CoVaiGayTool";

export const metadata: Metadata = {
  alternates: { canonical: "/co-vai-gay" },
  title: "Phục Hồi Cổ Vai Gáy — Bài tập cá thể hóa dựa trên bằng chứng",
  description: "Công cụ đánh giá và xây dựng chương trình phục hồi chức năng đau cổ vai gáy cá thể hóa. TS.BS. Nguyễn Ngọc Quyền, Bệnh viện TWQĐ 108.",
};

export default function CoVaiGayPage() {
  return <CoVaiGayTool />;
}
