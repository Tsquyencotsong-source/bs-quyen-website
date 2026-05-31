import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Thông tin dành cho người bệnh",
  description: "Kiến thức y tế về cột sống, loãng xương và phục hồi chức năng dành cho người bệnh và gia đình.",
};

const FAQ = [
  {
    q: "Đau lưng — khi nào cần đến gặp bác sĩ cột sống?",
    a: "Đa số cơn đau lưng tự cải thiện trong vài tuần. Tuy nhiên cần đến gặp bác sĩ sớm khi: đau không cải thiện sau 4–6 tuần, đau lan xuống chân kèm tê bì hoặc yếu cơ, đau sau chấn thương, đau kèm khó tiểu tiện/đại tiện, đau nhiều về đêm, sụt cân không rõ nguyên nhân, hoặc đau cấp ở người cao tuổi sau một động tác nhỏ.",
    note: true,
  },
  {
    q: "Loãng xương và gãy xẹp đốt sống liên quan nhau như thế nào?",
    a: "Loãng xương làm giảm mật độ xương, khiến xương giòn và dễ gãy — kể cả khi chỉ có lực tác động nhỏ như ho, hắt hơi hay cúi người. Gãy xẹp đốt sống do loãng xương là một trong những loại gãy xương phổ biến nhất ở người cao tuổi, đặc biệt phụ nữ sau mãn kinh. Triệu chứng có thể là đau lưng cấp tính đột ngột, hoặc người bệnh chỉ nhận ra khi thấy mình thấp đi hoặc lưng gù hơn theo thời gian.",
    note: true,
  },
  {
    q: "Thoát vị đĩa đệm có nhất thiết phải phẫu thuật không?",
    a: "Không. Đa số người bệnh thoát vị đĩa đệm cải thiện tốt với điều trị bảo tồn: kiểm soát đau, vật lý trị liệu và thay đổi thói quen sinh hoạt. Phẫu thuật thường được xem xét khi triệu chứng không cải thiện sau 6–12 tuần điều trị bảo tồn đúng cách, có dấu hiệu thần kinh tiến triển (yếu cơ ngày càng nặng), hoặc có hội chứng chùm đuôi ngựa (khẩn cấp). Quyết định phẫu thuật luôn phải dựa trên đánh giá tổng thể của bác sĩ.",
    note: true,
  },
  {
    q: "Làm thế nào để bảo vệ cột sống khi lớn tuổi?",
    a: "Một số biện pháp có thể thực hiện: duy trì cân nặng phù hợp, vận động thường xuyên (đi bộ, bơi lội, yoga nhẹ), kiểm tra mật độ xương (DXA) theo khuyến cáo, bổ sung đủ canxi và vitamin D theo hướng dẫn của bác sĩ, tránh hút thuốc lá, và điều chỉnh tư thế làm việc, tránh ngồi quá lâu một chỗ.",
    note: true,
  },
  {
    q: "Sau phẫu thuật cột sống, tôi cần làm gì để phục hồi tốt?",
    a: "Phục hồi sau phẫu thuật cột sống cần tuân thủ hướng dẫn của bác sĩ và điều dưỡng. Thông thường bao gồm: tập vận động sớm theo hướng dẫn, dùng thuốc đầy đủ theo đơn, tránh các động tác cúi gập, xoắn vặn cột sống trong giai đoạn đầu, đến tái khám đúng lịch và báo ngay cho bác sĩ khi có các dấu hiệu bất thường như đau tăng đột ngột, sưng nề hoặc tê bì mới xuất hiện.",
    note: true,
  },
];

const INFO_CARDS = [
  {
    icon: "🦴",
    title: "Loãng xương",
    items: [
      "Thường không có triệu chứng cho đến khi gãy xương",
      "Phụ nữ sau mãn kinh có nguy cơ cao nhất",
      "Tầm soát bằng đo mật độ xương (DXA)",
      "Điều trị gồm thuốc, bổ sung canxi, vận động",
    ],
  },
  {
    icon: "📐",
    title: "Gãy xẹp đốt sống",
    items: [
      "Thường xảy ra ở vùng ngực-thắt lưng",
      "Có thể do chấn thương nhỏ ở người loãng xương",
      "Triệu chứng: đau lưng cấp, giảm chiều cao",
      "Điều trị: bảo tồn hoặc tạo hình thân đốt sống",
    ],
  },
  {
    icon: "💊",
    title: "Điều trị bảo tồn",
    items: [
      "Nghỉ ngơi có kiểm soát (không nghỉ tuyệt đối)",
      "Vật lý trị liệu và bài tập phù hợp",
      "Thuốc giảm đau theo chỉ định bác sĩ",
      "Nẹp lưng khi cần thiết và theo hướng dẫn",
    ],
  },
  {
    icon: "🏃",
    title: "Phục hồi chức năng",
    items: [
      "Bắt đầu vận động sớm theo hướng dẫn",
      "Bài tập tăng cường cơ lưng và cơ bụng",
      "Điều chỉnh tư thế và thói quen sinh hoạt",
      "Theo dõi định kỳ với bác sĩ cột sống",
    ],
  },
];

export default function EducationPage() {
  return (
    <>
      <div className="bg-navy py-12 md:py-16">
        <Container>
          <p className="eyebrow-gold mb-2">Dành cho người bệnh</p>
          <h1 className="font-serif-brand text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight">
            Thông tin y tế <em className="font-light italic text-brand-gold">đáng tin cậy</em>
          </h1>
          <p className="text-[15px] font-light text-white/50 mt-3 max-w-xl">
            Kiến thức tổng quát về bệnh lý cột sống, loãng xương và phục hồi chức năng
            dành cho người bệnh và gia đình.
          </p>
        </Container>
      </div>

      {/* Disclaimer banner */}
      <div className="bg-brand-gold-lt border-b border-brand-gold/30">
        <Container>
          <div className="py-4 flex items-start gap-3 text-[13px] text-gray-600">
            <span className="text-lg flex-shrink-0">ℹ️</span>
            <p>
              <strong className="font-semibold text-gray-800">Lưu ý quan trọng:</strong>{" "}
              Nội dung trên trang này mang tính giáo dục sức khỏe tổng quát và không thay
              thế tư vấn y tế trực tiếp. Nếu bạn có triệu chứng cụ thể, vui lòng đến gặp
              bác sĩ để được thăm khám và đánh giá đầy đủ.
            </p>
          </div>
        </Container>
      </div>

      {/* Info cards */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Kiến thức cơ bản" title={<>Những điều cần biết về <em className="font-normal not-italic text-navy">bệnh lý cột sống</em></>} />
          <div className="grid md:grid-cols-2 gap-4">
            {INFO_CARDS.map((card) => (
              <div key={card.title} className="border border-gray-200 p-6 hover:border-navy-light transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="font-serif-brand text-[18px] font-bold text-navy">{card.title}</h3>
                </div>
                <ul className="space-y-2 list-none">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-500 font-light leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader eyebrow="Câu hỏi thường gặp" title="Hỏi & Đáp" />
          <div className="space-y-0 border-t-2 border-navy max-w-3xl">
            {FAQ.map(({ q, a, note }) => (
              <details
                key={q}
                className="group border-b border-gray-200 py-0"
              >
                <summary className="flex justify-between items-center py-5 cursor-pointer list-none font-serif-brand text-[18px] font-bold text-gray-900 hover:text-navy transition-colors">
                  {q}
                  <span className="text-navy text-2xl font-light flex-shrink-0 ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pb-5">
                  <p className="text-[15px] font-light leading-relaxed text-gray-500">{a}</p>
                  {note && (
                    <p className="mt-3 text-[13px] italic text-gray-400">
                      Thông tin mang tính tổng quát. Chỉ bác sĩ thăm khám trực tiếp mới có thể đánh giá chính xác tình trạng của bạn.
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Hướng dẫn tự tập luyện */}
      <Section>
        <Container>
          <SectionHeader eyebrow="Công cụ tương tác" title={<>Hướng dẫn <em className="font-normal not-italic text-navy">tự tập luyện</em></>} />
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/education/tu-tap-luyen/sau-bom-xi-mang-dot-song"
              className="group border border-gray-200 hover:border-navy transition-all p-6 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">🦴</span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-gold bg-brand-gold-lt px-2.5 py-1">
                  Kyphoplasty
                </span>
              </div>
              <h3 className="font-serif-brand text-[17px] font-bold text-navy group-hover:text-navy-light transition-colors">
                Tập luyện sau bơm xi măng đốt sống
              </h3>
              <p className="text-[13.5px] font-light text-gray-500">
                Lộ trình 4 giai đoạn, 19 bài tập có hình minh họa, checklist theo dõi tiến độ.
              </p>
              <span className="text-[13px] font-semibold text-navy mt-auto group-hover:underline">
                Xem hướng dẫn →
              </span>
            </Link>

            <Link
              href="/education/tu-tap-luyen"
              className="group border border-dashed border-gray-200 hover:border-gray-300 transition-all p-6 flex flex-col gap-3 justify-center items-center text-center"
            >
              <span className="text-2xl opacity-50">📋</span>
              <h3 className="font-serif-brand text-[17px] font-bold text-gray-400">
                Xem tất cả hướng dẫn tập luyện
              </h3>
              <p className="text-[13px] text-gray-400">
                Thêm chương trình tập luyện đang được cập nhật.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <div className="bg-navy-pale border-t border-gray-200">
        <Container>
          <div className="py-12 text-center">
            <h2 className="font-serif-brand text-[24px] font-bold text-navy mb-3">
              Bạn cần được thăm khám trực tiếp?
            </h2>
            <p className="text-[15px] font-light text-gray-500 mb-6 max-w-xl mx-auto">
              Nếu bạn có triệu chứng cột sống cần được đánh giá, vui lòng đến Phòng khám Cột sống —
              Bệnh viện Trung ương Quân đội 108, Hà Nội.
            </p>
            <a href="mailto:bsquyenptcs108@gmail.com" className="btn-primary inline-flex">
              Liên hệ bác sĩ Quyền
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
