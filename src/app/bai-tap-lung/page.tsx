import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bài tập cho người đau lưng — Đơn tập cá thể hóa",
  description:
    "Công cụ kê đơn bài tập đau lưng cá thể hóa theo tuổi, thể trạng, mức độ và kiểu đau, thời gian luyện tập. TS.BS. Nguyễn Ngọc Quyền, Bệnh viện TWQĐ 108.",
};
export default function BaiTapLungPage() {
  return (
    <div style={{ width: "100%", height: "calc(100vh - 64px)" }}>
      <iframe
        src="/bai-tap-lung.html"
        title="Đơn bài tập đau lưng cá thể hóa"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
