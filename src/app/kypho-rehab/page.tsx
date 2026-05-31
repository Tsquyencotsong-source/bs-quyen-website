import type { Metadata } from "next";
import KyphoRehabApp from "@/components/KyphoRehabApp";

export const metadata: Metadata = {
  title: "Lộ trình tập luyện sau Kyphoplasty — TS.BS. Nguyễn Ngọc Quyền",
  description: "Hướng dẫn phục hồi từng giai đoạn sau bơm xi măng đốt sống (kyphoplasty): bài tập, nguyên tắc vàng, dấu hiệu cần gặp bác sĩ. TS.BS. Nguyễn Ngọc Quyền, Bệnh viện TWQĐ 108.",
};

export default function KyphoRehabPage() {
  return <KyphoRehabApp />;
}
