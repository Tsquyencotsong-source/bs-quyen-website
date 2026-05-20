import Link from "next/link";
import { Container } from "@/components/Section";

export default function NotFound() {
  return (
    <div className="bg-navy min-h-[60vh] flex items-center">
      <Container>
        <p className="eyebrow-gold mb-3">404</p>
        <h1 className="font-serif-brand text-[42px] font-bold text-white mb-4">
          Không tìm thấy trang
        </h1>
        <p className="text-[16px] font-light text-white/50 mb-8">
          Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          Về trang chủ
        </Link>
      </Container>
    </div>
  );
}
