import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Section";
import { POSTS } from "@/data/content";
import { FacebookShareButton, FacebookFollowButton } from "@/components/FacebookComponents";

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

type Block =
  | { type: "para"; content: string }
  | { type: "heading"; content: string }
  | { type: "list"; items: string[] }
  | { type: "note"; content: string }
  | { type: "highlight"; content: string };

const ARTICLES: Record<string, Block[]> = {
  "loang-xuong-o-nguoi-cao-tuoi": [
    { type: "para", content: "Loãng xương là tình trạng mật độ xương giảm và cấu trúc xương bị suy yếu, khiến xương trở nên giòn và dễ gãy hơn bình thường. Đây là một trong những bệnh lý mạn tính phổ biến nhất ở người cao tuổi, nhưng lại thường bị bỏ qua vì không có triệu chứng rõ ràng cho đến khi xảy ra gãy xương." },
    { type: "heading", content: "Tại sao loãng xương nguy hiểm?" },
    { type: "para", content: "Điều khiến loãng xương đặc biệt đáng lo ngại là tính chất âm thầm của nó. Người bệnh thường không biết mình bị loãng xương cho đến khi gặp phải một cú ngã nhỏ, một động tác cúi người, hay thậm chí chỉ một cơn ho mạnh — và xương gãy." },
    { type: "para", content: "Gãy xương do loãng xương, đặc biệt là gãy xẹp đốt sống và gãy cổ xương đùi, có thể gây ra những hậu quả nghiêm trọng: đau mạn tính, mất khả năng đi lại, phụ thuộc vào người khác trong sinh hoạt hàng ngày và giảm chất lượng cuộc sống đáng kể." },
    { type: "heading", content: "Ai có nguy cơ bị loãng xương?" },
    { type: "list", items: [
      "Phụ nữ trên 50 tuổi, đặc biệt sau mãn kinh",
      "Nam giới trên 70 tuổi",
      "Người có tiền sử gia đình bị loãng xương hoặc gãy xương",
      "Người ít vận động, ngồi nhiều",
      "Người hút thuốc lá hoặc uống nhiều rượu bia",
      "Người dùng corticosteroid kéo dài",
      "Người có chế độ ăn thiếu canxi và vitamin D",
    ]},
    { type: "heading", content: "Biểu hiện cần chú ý" },
    { type: "list", items: [
      "Chiều cao giảm dần theo năm tháng",
      "Lưng gù hơn, dáng đứng cong về phía trước",
      "Đau lưng mạn tính không rõ nguyên nhân",
      "Gãy xương sau một chấn thương nhẹ không tương xứng",
    ]},
    { type: "highlight", content: "Nếu bạn nhận thấy mình thấp đi 2–3 cm so với lúc trẻ, hoặc lưng bắt đầu gù — đây có thể là dấu hiệu của gãy xẹp đốt sống do loãng xương. Hãy đến gặp bác sĩ để được đánh giá." },
    { type: "heading", content: "Chẩn đoán loãng xương" },
    { type: "para", content: "Phương pháp chuẩn để chẩn đoán là đo mật độ xương bằng máy DXA. Kết quả T-score dưới -2.5 được chẩn đoán là loãng xương. Ngoài ra, chỉ số Hounsfield Unit (HU) trên phim CT cũng giúp đánh giá chất lượng xương tại từng vị trí cụ thể." },
    { type: "heading", content: "Phòng ngừa loãng xương" },
    { type: "list", items: [
      "Bổ sung canxi đủ nhu cầu: người trên 50 tuổi cần khoảng 1.200mg canxi/ngày",
      "Đảm bảo vitamin D: 800–1.000 IU/ngày",
      "Vận động thường xuyên: đi bộ, bơi lội, thái cực quyền",
      "Tránh hút thuốc lá và hạn chế rượu bia",
      "Tầm soát định kỳ: đo mật độ xương ít nhất 2 năm một lần",
      "Phòng tránh té ngã trong nhà",
    ]},
    { type: "note", content: "Thông tin trong bài này mang tính giáo dục sức khỏe tổng quát. Mỗi người bệnh có tình trạng khác nhau và cần được đánh giá cụ thể bởi bác sĩ." },
  ],

  "dau-lung-khi-nao-gap-bac-si": [
    { type: "para", content: "Đau lưng là một trong những lý do phổ biến nhất khiến người bệnh đến gặp bác sĩ. Hầu hết các cơn đau lưng tự cải thiện trong vài tuần với điều trị đơn giản." },
    { type: "heading", content: "Khi nào đau lưng tự khỏi được?" },
    { type: "para", content: "Đa số cơn đau lưng cơ học tự cải thiện trong vòng 4–6 tuần với: nghỉ ngơi có kiểm soát, thuốc giảm đau theo chỉ định và vận động nhẹ nhàng." },
    { type: "heading", content: "Những dấu hiệu cần đến gặp bác sĩ sớm" },
    { type: "list", items: [
      "Đau không cải thiện sau 4–6 tuần điều trị ban đầu",
      "Đau lan xuống chân, kèm tê bì hoặc yếu cơ",
      "Đau sau chấn thương",
      "Đau kèm khó tiểu tiện hoặc đại tiện",
      "Đau nhiều về đêm, mất ngủ kéo dài",
      "Đau kèm sụt cân hoặc sốt không rõ nguyên nhân",
      "Người cao tuổi đau lưng cấp sau ho hoặc động tác nhỏ",
    ]},
    { type: "note", content: "Thông tin tổng quát. Chỉ bác sĩ thăm khám trực tiếp mới có thể đánh giá chính xác tình trạng của bạn." },
  ],

  "loang-xuong-truoc-phau-thuat": [
    { type: "para", content: "Khi bệnh nhân loãng xương cần phẫu thuật cột sống, chất lượng xương kém có thể làm tăng đáng kể nguy cơ biến chứng cơ học. Đánh giá loãng xương trước mổ là một phần không thể thiếu trong chiến lược điều trị." },
    { type: "heading", content: "Tại sao DXA chưa đủ?" },
    { type: "para", content: "DXA là phương pháp chuẩn chẩn đoán loãng xương, nhưng ở bệnh nhân có thoái hóa nặng, kết quả DXA có thể bị cao giả tạo do gai xương và vôi hóa dây chằng làm tăng giá trị đo được." },
    { type: "heading", content: "Hounsfield Unit — công cụ bổ sung quan trọng" },
    { type: "para", content: "HU trên phim CT phản ánh mật độ xương thực sự tại từng vị trí, không bị ảnh hưởng bởi thay đổi thoái hóa. HU dưới 110 tại thân đốt sống là yếu tố nguy cơ cao cho biến chứng sau phẫu thuật." },
    { type: "note", content: "Bài viết dành cho bác sĩ và học viên y khoa. Không thay thế hướng dẫn điều trị chính thức." },
  ],

  "ai-trong-nghien-cuu-y-hoc": [
    { type: "para", content: "AI đang thay đổi cách chúng ta làm nghiên cứu y học — nhưng điều đó không có nghĩa là bác sĩ có thể buông tay." },
    { type: "heading", content: "AI có thể hỗ trợ được gì?" },
    { type: "list", items: [
      "Tìm kiếm và tóm tắt tài liệu y văn nhanh hơn",
      "Hỗ trợ viết draft đầu tiên cho bài báo",
      "Dịch thuật và hiệu đính tiếng Anh học thuật",
      "Gợi ý cấu trúc đề cương nghiên cứu",
    ]},
    { type: "heading", content: "Cạm bẫy lớn nhất: AI có thể bịa tài liệu" },
    { type: "para", content: "Các mô hình AI có thể tạo ra trích dẫn tài liệu trông rất thuyết phục nhưng hoàn toàn không có thật. Quy tắc bắt buộc: bất kỳ tài liệu nào AI đề xuất, bạn phải tự tìm và đọc nguyên văn trước khi trích dẫn." },
    { type: "highlight", content: "AI là cộng sự chăm chỉ không biết mệt — nhưng vẫn cần một bác sĩ đủ tỉnh táo để kiểm tra, định hướng và chịu trách nhiệm cuối cùng." },
    { type: "note", content: "Chia sẻ kinh nghiệm cá nhân. Không đại diện cho quan điểm của bất kỳ tổ chức nào." },
  ],

  "thoat-vi-dia-dem-co-can-mo": [
    { type: "para", content: "Câu hỏi phổ biến nhất: 'Bác sĩ ơi, tôi bị thoát vị đĩa đệm, có cần mổ không?' Câu trả lời ngắn gọn là: đa số là không." },
    { type: "heading", content: "Hầu hết thoát vị đĩa đệm tự khỏi được" },
    { type: "para", content: "Phần lớn người bệnh cải thiện tốt với điều trị bảo tồn trong vòng 6–12 tuần. Trên phim MRI theo dõi, khối thoát vị có thể thu nhỏ dần do cơ thể tự hấp thu." },
    { type: "heading", content: "Khi nào cần xem xét phẫu thuật?" },
    { type: "list", items: [
      "Triệu chứng không cải thiện sau 6–12 tuần điều trị bảo tồn",
      "Yếu cơ tiến triển — chân ngày càng yếu hơn",
      "Hội chứng chùm đuôi ngựa: mất kiểm soát đại tiểu tiện (khẩn cấp)",
      "Đau dữ dội không đáp ứng điều trị",
    ]},
    { type: "highlight", content: "Phim MRI cho thấy thoát vị đĩa đệm KHÔNG có nghĩa là bắt buộc phải mổ. Quyết định dựa trên triệu chứng của người bệnh, không phải hình ảnh phim." },
    { type: "note", content: "Thông tin giáo dục tổng quát. Chỉ bác sĩ thăm khám trực tiếp mới có thể đưa ra khuyến cáo điều trị phù hợp." },
  ],

  "barthel-index-trong-theo-doi-gay-xep": [
    { type: "para", content: "Thang điểm Barthel đánh giá mức độ độc lập trong 10 hoạt động sinh hoạt hàng ngày cơ bản. Tổng điểm từ 0 đến 100 — điểm càng cao, người bệnh càng độc lập." },
    { type: "heading", content: "Tại sao dùng Barthel cho bệnh nhân gãy xẹp đốt sống?" },
    { type: "para", content: "Nghiên cứu tại Phòng khám Cột sống — BV TWQĐ 108 cho thấy nhiều bệnh nhân gãy xẹp đốt sống có loãng xương đang ở mức phụ thuộc một phần trong sinh hoạt hàng ngày. Đo Barthel giúp phát hiện sớm và lên kế hoạch can thiệp phù hợp." },
    { type: "note", content: "Bài viết dành cho bác sĩ, điều dưỡng và học viên y khoa." },
  ],
};

function RenderBlock({ block, index }: { block: Block; index: number }) {
  switch (block.type) {
    case "heading":
      return <h2 key={index} className="font-serif-brand text-[20px] font-bold text-navy mt-8 mb-3 leading-snug">{block.content}</h2>;
    case "para":
      return <p key={index} className="text-[15.5px] font-light leading-[1.85] text-gray-500 mb-5">{block.content}</p>;
    case "list":
      return (
        <ul key={index} className="list-none mb-6 space-y-2.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[15px] font-light text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div key={index} className="my-6 border-l-[3px] border-navy pl-5 py-1">
          <p className="font-serif-brand text-[17px] font-normal italic text-navy leading-relaxed">{block.content}</p>
        </div>
      );
    case "note":
      return (
        <div key={index} className="mt-8 p-4 bg-brand-gold-lt border-l-[3px] border-brand-gold text-[13px] font-light text-gray-600">
          <strong className="font-semibold text-gray-700">Lưu ý: </strong>{block.content}
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const blocks = ARTICLES[params.slug];
  const postUrl = `https://bs-quyen-website.vercel.app/blog/${params.slug}`;

  return (
    <>
      <div className="bg-navy py-10 md:py-14">
        <Container>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={14} /> Quay lại tất cả bài viết
          </Link>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-3">{post!.audience}</p>
          <h1 className="font-serif-brand text-[clamp(24px,3.5vw,38px)] font-bold text-white leading-tight max-w-2xl">
            {post!.title}
          </h1>
          <p className="text-[13px] text-white/40 mt-4">TS.BS. Nguyễn Ngọc Quyền &nbsp;·&nbsp; {post!.date}</p>
        </Container>
      </div>

      <div className="py-12 md:py-16">
        <Container>
          <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
            <article className="max-w-2xl">
              <p className="text-[16.5px] font-light leading-[1.85] text-gray-500 mb-8 font-serif-brand italic border-l-2 border-brand-gold pl-5">
                {post!.excerpt}
              </p>

              {blocks
                ? blocks.map((block, i) => <RenderBlock key={i} block={block} index={i} />)
                : <p className="text-gray-400 italic">Nội dung đầy đủ sẽ được cập nhật sớm.</p>
              }

              {/* Nút chia sẻ Facebook */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-4 flex-wrap">
                <span className="text-[13px] text-gray-400">Chia sẻ bài viết:</span>
                <FacebookShareButton url={postUrl} />
              </div>
            </article>

            <aside className="space-y-4 sticky top-20">
              {/* Theo dõi Facebook */}
              <div className="bg-white border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">
                  Theo dõi trang
                </p>
                <FacebookFollowButton />
              </div>

              {/* Về tác giả */}
              <div className="bg-navy-pale border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">Về tác giả</p>
                <p className="font-serif-brand text-[15px] font-bold text-navy">TS.BS. Nguyễn Ngọc Quyền</p>
                <p className="text-[13px] text-gray-400 mt-1 leading-snug">Bác sĩ Cột sống · Bệnh viện TWQĐ 108</p>
                <Link href="/about" className="inline-block mt-3 text-[13px] text-navy hover:underline underline-offset-2">
                  Xem giới thiệu →
                </Link>
              </div>

              {/* Đặt khám */}
              <div className="bg-navy p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">Đặt lịch khám</p>
                <a href="tel:0989052288" className="block text-[22px] font-bold text-white hover:text-brand-gold transition-colors mb-1">
                  0989 052 288
                </a>
                <p className="text-[12px] text-white/40 leading-relaxed">
                  T2–T6: 6h30–17h · Phòng 225, BV 108<br />
                  Thứ 6: 17h30+ · SpineTech, 257 Giải Phóng
                </p>
              </div>

              {/* Bài liên quan */}
              <div className="bg-gray-50 border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">Bài viết liên quan</p>
                <ul className="space-y-2 list-none">
                  {POSTS.filter((p) => p.slug !== params.slug).slice(0, 3).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-[13.5px] text-gray-600 hover:text-navy transition-colors leading-snug block">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}
