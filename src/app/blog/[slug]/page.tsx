import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Section";
import { POSTS } from "@/data/content";

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

// ─── NỘI DUNG BÀI VIẾT ─────────────────────────────────────────
// Mỗi bài viết là một mảng các block: { type, content }
// type: "para" | "heading" | "list" | "note" | "highlight"

type Block =
  | { type: "para"; content: string }
  | { type: "heading"; content: string }
  | { type: "list"; items: string[] }
  | { type: "note"; content: string }
  | { type: "highlight"; content: string };

const ARTICLES: Record<string, Block[]> = {

  // ── BÀI 1 ────────────────────────────────────────────────────
  "loang-xuong-o-nguoi-cao-tuoi": [
    { type: "para", content: "Loãng xương là tình trạng mật độ xương giảm và cấu trúc xương bị suy yếu, khiến xương trở nên giòn và dễ gãy hơn bình thường. Đây là một trong những bệnh lý mạn tính phổ biến nhất ở người cao tuổi, nhưng lại thường bị bỏ qua vì không có triệu chứng rõ ràng cho đến khi xảy ra gãy xương." },
    { type: "heading", content: "Tại sao loãng xương nguy hiểm?" },
    { type: "para", content: "Điều khiến loãng xương đặc biệt đáng lo ngại là tính chất âm thầm của nó. Người bệnh thường không biết mình bị loãng xương cho đến khi gặp phải một cú ngã nhỏ, một động tác cúi người, hay thậm chí chỉ một cơn ho mạnh — và xương gãy." },
    { type: "para", content: "Gãy xương do loãng xương, đặc biệt là gãy xẹp đốt sống và gãy cổ xương đùi, có thể gây ra những hậu quả nghiêm trọng: đau mạn tính, mất khả năng đi lại, phụ thuộc vào người khác trong sinh hoạt hàng ngày và giảm chất lượng cuộc sống đáng kể. Ở người cao tuổi, gãy cổ xương đùi thậm chí có thể đe dọa tính mạng trong vòng 1 năm sau gãy xương." },
    { type: "heading", content: "Ai có nguy cơ bị loãng xương?" },
    { type: "para", content: "Loãng xương có thể gặp ở cả nam và nữ, nhưng phụ nữ sau mãn kinh là nhóm có nguy cơ cao nhất do sự sụt giảm nhanh chóng của estrogen — một hormone quan trọng trong việc duy trì mật độ xương." },
    { type: "list", items: [
      "Phụ nữ trên 50 tuổi, đặc biệt sau mãn kinh",
      "Nam giới trên 70 tuổi",
      "Người có tiền sử gia đình bị loãng xương hoặc gãy xương",
      "Người có vóc dáng nhỏ, nhẹ cân",
      "Người ít vận động, ngồi nhiều",
      "Người hút thuốc lá hoặc uống nhiều rượu bia",
      "Người dùng corticosteroid kéo dài (thuốc chống viêm dạng steroid)",
      "Người mắc các bệnh lý như tiểu đường, cường giáp, bệnh thận mạn",
      "Người có chế độ ăn thiếu canxi và vitamin D",
    ]},
    { type: "heading", content: "Biểu hiện cần chú ý" },
    { type: "para", content: "Loãng xương thường không có triệu chứng. Tuy nhiên, có một số dấu hiệu gián tiếp mà bạn nên để ý:" },
    { type: "list", items: [
      "Chiều cao giảm dần theo năm tháng (dấu hiệu của gãy xẹp đốt sống âm thầm)",
      "Lưng gù hơn, dáng đứng cong về phía trước",
      "Đau lưng mạn tính không rõ nguyên nhân",
      "Gãy xương sau một chấn thương nhẹ không tương xứng với mức độ chấn thương",
    ]},
    { type: "highlight", content: "Nếu bạn nhận thấy mình thấp đi 2–3 cm so với lúc trẻ, hoặc lưng bắt đầu gù — đây có thể là dấu hiệu của gãy xẹp đốt sống do loãng xương. Hãy đến gặp bác sĩ để được đánh giá." },
    { type: "heading", content: "Chẩn đoán loãng xương như thế nào?" },
    { type: "para", content: "Phương pháp chuẩn để chẩn đoán loãng xương là đo mật độ xương bằng máy DXA (Dual-energy X-ray Absorptiometry). Kết quả được biểu diễn bằng chỉ số T-score:" },
    { type: "list", items: [
      "T-score từ -1.0 trở lên: Mật độ xương bình thường",
      "T-score từ -1.0 đến -2.5: Thiếu xương (osteopenia) — cảnh báo cần chú ý",
      "T-score dưới -2.5: Loãng xương — cần điều trị",
    ]},
    { type: "para", content: "Ngoài DXA, bác sĩ còn có thể dùng chỉ số Hounsfield Unit (HU) trên phim CT để ước lượng chất lượng xương — đặc biệt hữu ích ở những bệnh nhân đã có chỉ định chụp CT vì lý do khác, chẳng hạn bệnh nhân chuẩn bị phẫu thuật cột sống." },
    { type: "heading", content: "Phòng ngừa loãng xương — bắt đầu từ hôm nay" },
    { type: "para", content: "Tin tốt là loãng xương có thể phòng ngừa và điều trị được. Dưới đây là những việc bạn có thể làm ngay từ bây giờ:" },
    { type: "list", items: [
      "Bổ sung canxi đủ nhu cầu: người trên 50 tuổi cần khoảng 1.200mg canxi/ngày từ thực phẩm (sữa, phô mai, cá nhỏ ăn cả xương, rau xanh đậm) và bổ sung nếu cần",
      "Đảm bảo vitamin D: cần 800–1.000 IU/ngày, có thể tổng hợp từ ánh nắng mặt trời (15–20 phút/ngày) hoặc bổ sung theo chỉ định",
      "Vận động thường xuyên: đi bộ, bơi lội, thái cực quyền giúp duy trì mật độ xương và cải thiện thăng bằng, giảm nguy cơ té ngã",
      "Tránh hút thuốc lá và hạn chế rượu bia",
      "Tầm soát định kỳ: phụ nữ sau mãn kinh và nam giới trên 70 tuổi nên đo mật độ xương ít nhất 2 năm một lần",
      "Phòng tránh té ngã: đảm bảo ánh sáng tốt trong nhà, dùng thảm chống trượt, kiểm tra thị lực định kỳ",
    ]},
    { type: "heading", content: "Điều trị loãng xương" },
    { type: "para", content: "Khi đã được chẩn đoán loãng xương, điều trị bao gồm thay đổi lối sống kết hợp với thuốc theo chỉ định của bác sĩ. Các nhóm thuốc thường dùng gồm bisphosphonates, denosumab, raloxifene và các thuốc tạo xương mới hơn. Việc lựa chọn thuốc phụ thuộc vào mức độ loãng xương, tiền sử bệnh, các thuốc đang dùng và tình trạng sức khỏe tổng thể." },
    { type: "para", content: "Điều quan trọng: điều trị loãng xương là một quá trình dài hạn, cần tuân thủ đúng phác đồ và tái khám định kỳ. Không nên tự ý dừng thuốc khi chưa có ý kiến của bác sĩ." },
    { type: "heading", content: "Gãy xẹp đốt sống do loãng xương — biến chứng thường gặp nhất" },
    { type: "para", content: "Gãy xẹp đốt sống là biến chứng phổ biến và có tác động lớn đến chất lượng sống của người bệnh loãng xương. Người bệnh không chỉ đau lưng mà còn đối mặt với nguy cơ mất vận động, mất sự độc lập trong sinh hoạt hàng ngày và tăng nguy cơ gãy tiếp theo." },
    { type: "para", content: "Điều trị gãy xẹp đốt sống tùy thuộc vào mức độ đau, tình trạng thần kinh và chất lượng xương. Với nhiều bệnh nhân, điều trị bảo tồn (nghỉ ngơi có kiểm soát, giảm đau, nẹp lưng) là đủ. Một số trường hợp cần can thiệp tạo hình thân đốt sống qua da (kyphoplasty hoặc vertebroplasty) để giảm đau nhanh và ổn định đốt sống." },
    { type: "note", content: "Thông tin trong bài này mang tính giáo dục sức khỏe tổng quát. Mỗi người bệnh có tình trạng khác nhau và cần được đánh giá cụ thể bởi bác sĩ. Nếu bạn lo lắng về loãng xương hoặc có các triệu chứng nghi ngờ, hãy đến gặp bác sĩ để được thăm khám và tư vấn phù hợp." },
  ],

  // ── BÀI 2 ────────────────────────────────────────────────────
  "dau-lung-khi-nao-gap-bac-si": [
    { type: "para", content: "Đau lưng là một trong những lý do phổ biến nhất khiến người bệnh đến gặp bác sĩ. Hầu hết các cơn đau lưng tự cải thiện trong vài tuần với điều trị đơn giản. Tuy nhiên, có những dấu hiệu cảnh báo mà bạn không nên bỏ qua." },
    { type: "heading", content: "Khi nào đau lưng tự khỏi được?" },
    { type: "para", content: "Đa số cơn đau lưng — đặc biệt là đau lưng cơ học do căng cơ, sai tư thế hoặc vận động quá mức — tự cải thiện trong vòng 4–6 tuần với điều trị ban đầu: nghỉ ngơi có kiểm soát, thuốc giảm đau theo chỉ định và vận động nhẹ nhàng. Nghỉ ngơi hoàn toàn trên giường kéo dài không được khuyến khích vì làm chậm phục hồi." },
    { type: "heading", content: "Những dấu hiệu cần đến gặp bác sĩ sớm" },
    { type: "list", items: [
      "Đau không cải thiện sau 4–6 tuần điều trị ban đầu đúng cách",
      "Đau lan xuống chân, đặc biệt kèm tê bì hoặc yếu cơ",
      "Đau sau chấn thương (ngã, tai nạn giao thông)",
      "Đau kèm khó khăn khi tiểu tiện hoặc đại tiện",
      "Đau nhiều về đêm, làm mất ngủ kéo dài",
      "Đau kèm sụt cân không rõ nguyên nhân hoặc sốt",
      "Người cao tuổi với cơn đau lưng cấp tính sau ho, hắt hơi hoặc một động tác nhỏ",
    ]},
    { type: "note", content: "Thông tin này mang tính tổng quát. Chỉ bác sĩ thăm khám trực tiếp mới có thể đánh giá chính xác tình trạng của bạn." },
  ],

  // ── BÀI 3 ────────────────────────────────────────────────────
  "loang-xuong-truoc-phau-thuat": [
    { type: "para", content: "Khi một bệnh nhân loãng xương cần phẫu thuật cột sống, chất lượng xương kém có thể làm tăng đáng kể nguy cơ biến chứng cơ học: lỏng vít, xẹp thân đốt tại điểm cố định, giả khớp và phẫu thuật lại. Vì vậy, đánh giá loãng xương trước mổ không phải là thủ tục hồ sơ mà là một phần không thể thiếu trong chiến lược điều trị." },
    { type: "heading", content: "Tại sao DXA chưa đủ?" },
    { type: "para", content: "DXA (đo mật độ xương bằng tia X kép) là phương pháp chuẩn để chẩn đoán loãng xương, nhưng có một số hạn chế quan trọng trong bối cảnh phẫu thuật cột sống. DXA đo mật độ xương toàn bộ vùng thắt lưng, nhưng ở bệnh nhân có thoái hóa nặng, gai xương hay vôi hóa dây chằng, kết quả DXA có thể bị cao giả tạo — tức là đọc mật độ xương cao hơn thực tế." },
    { type: "heading", content: "Hounsfield Unit — công cụ bổ sung quan trọng" },
    { type: "para", content: "Hounsfield Unit (HU) trên phim CT là một chỉ số phản ánh mật độ xương thực sự tại từng vị trí cụ thể, không bị ảnh hưởng bởi các thay đổi thoái hóa bên ngoài. Nhiều nghiên cứu cho thấy HU dưới 110 tại thân đốt sống là yếu tố nguy cơ cao cho biến chứng cơ học sau phẫu thuật." },
    { type: "para", content: "Ưu điểm lớn của HU là không cần chụp thêm phim: nếu bệnh nhân đã có CT cột sống (thường có trong đánh giá trước mổ), bác sĩ có thể đo HU từ phim đó mà không tốn thêm chi phí hay thời gian cho người bệnh." },
    { type: "note", content: "Bài viết này dành cho bác sĩ và học viên y khoa. Nội dung mang tính chuyên môn và thảo luận, không thay thế hướng dẫn điều trị chính thức hay quyết định lâm sàng cụ thể." },
  ],

  // ── BÀI 4 ────────────────────────────────────────────────────
  "ai-trong-nghien-cuu-y-hoc": [
    { type: "para", content: "Trí tuệ nhân tạo (AI) đang thay đổi cách chúng ta làm nghiên cứu y học. Từ việc tìm kiếm tài liệu, tổng hợp bằng chứng, hỗ trợ viết bài đến phân tích dữ liệu — AI có thể làm được nhiều việc. Nhưng điều đó không có nghĩa là bác sĩ có thể buông tay." },
    { type: "heading", content: "AI có thể hỗ trợ được gì?" },
    { type: "list", items: [
      "Tìm kiếm và tóm tắt tài liệu y văn nhanh hơn — công việc mất vài ngày nay có thể rút xuống vài giờ",
      "Hỗ trợ viết draft đầu tiên cho bài báo, phần discussion, abstract",
      "Dịch thuật và hiệu đính tiếng Anh học thuật",
      "Gợi ý cấu trúc đề cương nghiên cứu",
      "Phân tích xu hướng nghiên cứu trong một lĩnh vực",
    ]},
    { type: "heading", content: "Cạm bẫy lớn nhất: AI có thể bịa tài liệu" },
    { type: "para", content: "Đây là điều mà mọi bác sĩ dùng AI cần ghi nhớ: các mô hình ngôn ngữ lớn như ChatGPT, Claude có thể tạo ra các trích dẫn tài liệu trông rất thuyết phục — tên tác giả, tên tạp chí, năm xuất bản, số trang — nhưng hoàn toàn không có thật. Hiện tượng này gọi là \"hallucination\" (ảo giác)." },
    { type: "para", content: "Quy tắc bắt buộc: bất kỳ tài liệu nào AI đề xuất, bạn phải tự tìm và đọc nguyên văn trước khi trích dẫn. Không bao giờ trích dẫn tài liệu chỉ dựa trên output của AI." },
    { type: "highlight", content: "AI là cộng sự chăm chỉ không biết mệt — nhưng vẫn cần một bác sĩ đủ tỉnh táo để kiểm tra, định hướng và chịu trách nhiệm cuối cùng." },
    { type: "note", content: "Bài viết chia sẻ kinh nghiệm sử dụng AI trong thực hành nghiên cứu cá nhân. Không đại diện cho quan điểm của bất kỳ tổ chức nào." },
  ],

  // ── BÀI 5 ────────────────────────────────────────────────────
  "thoat-vi-dia-dem-co-can-mo": [
    { type: "para", content: "Một trong những câu hỏi phổ biến nhất tôi nhận được từ người bệnh: 'Bác sĩ ơi, tôi bị thoát vị đĩa đệm, có cần mổ không?' Câu trả lời ngắn gọn là: đa số là không." },
    { type: "heading", content: "Hầu hết thoát vị đĩa đệm tự khỏi được" },
    { type: "para", content: "Nhiều nghiên cứu cho thấy phần lớn người bệnh thoát vị đĩa đệm cải thiện tốt với điều trị bảo tồn trong vòng 6–12 tuần. Thậm chí, trên phim MRI theo dõi, khối thoát vị có thể thu nhỏ dần theo thời gian do cơ thể tự hấp thu." },
    { type: "heading", content: "Điều trị bảo tồn gồm những gì?" },
    { type: "list", items: [
      "Kiểm soát đau bằng thuốc theo chỉ định (không tự ý dùng thuốc)",
      "Vật lý trị liệu với bài tập phù hợp — không phải nghỉ ngơi hoàn toàn",
      "Thay đổi thói quen sinh hoạt: tư thế đúng khi ngồi, đứng, mang vác",
      "Tiêm ngoài màng cứng trong một số trường hợp có chỉ định",
    ]},
    { type: "heading", content: "Khi nào cần xem xét phẫu thuật?" },
    { type: "list", items: [
      "Triệu chứng không cải thiện sau 6–12 tuần điều trị bảo tồn đúng cách",
      "Yếu cơ tiến triển — chân ngày càng yếu hơn",
      "Hội chứng chùm đuôi ngựa: mất kiểm soát đại tiểu tiện (khẩn cấp, cần mổ sớm)",
      "Đau dữ dội không đáp ứng điều trị, ảnh hưởng nghiêm trọng đến chất lượng sống",
    ]},
    { type: "highlight", content: "Phim MRI cho thấy thoát vị đĩa đệm KHÔNG có nghĩa là bắt buộc phải mổ. Quyết định điều trị phải dựa trên triệu chứng của người bệnh, không phải hình ảnh phim." },
    { type: "note", content: "Thông tin mang tính giáo dục tổng quát. Chỉ bác sĩ thăm khám trực tiếp mới có thể đưa ra khuyến cáo điều trị phù hợp cho từng người bệnh cụ thể." },
  ],

  // ── BÀI 6 ────────────────────────────────────────────────────
  "barthel-index-trong-theo-doi-gay-xep": [
    { type: "para", content: "Khi chăm sóc bệnh nhân gãy xẹp đốt sống do loãng xương, chúng ta không chỉ quan tâm đến hình ảnh phim hay kết quả xét nghiệm — mà còn cần biết người bệnh đang sống như thế nào. Họ có tự tắm rửa được không? Có tự đi vệ sinh không? Có thể đi lại trong nhà không? Thang điểm Barthel giúp trả lời những câu hỏi đó một cách có hệ thống." },
    { type: "heading", content: "Thang điểm Barthel là gì?" },
    { type: "para", content: "Barthel Index (BI) là công cụ đánh giá mức độ độc lập trong 10 hoạt động sinh hoạt hàng ngày cơ bản: ăn uống, tắm rửa, vệ sinh cá nhân, mặc/cởi quần áo, đại tiện, tiểu tiện, sử dụng nhà vệ sinh, di chuyển từ giường sang ghế, đi bộ và lên xuống cầu thang. Tổng điểm từ 0 đến 100 — điểm càng cao, người bệnh càng độc lập." },
    { type: "heading", content: "Tại sao dùng Barthel cho bệnh nhân gãy xẹp đốt sống?" },
    { type: "para", content: "Nghiên cứu tại Phòng khám Cột sống — Bệnh viện TWQĐ 108 cho thấy nhiều bệnh nhân gãy xẹp đốt sống có loãng xương đang ở mức phụ thuộc một phần hoặc phụ thuộc nhiều trong sinh hoạt hàng ngày, dù họ có thể tự đi lại được. Việc đo Barthel giúp phát hiện những khiếm khuyết chức năng này và lên kế hoạch can thiệp phù hợp." },
    { type: "note", content: "Bài viết dành cho bác sĩ, điều dưỡng và học viên y khoa. Nội dung dựa trên kinh nghiệm lâm sàng và nghiên cứu tại Bệnh viện TWQĐ 108." },
  ],
};

// ─── COMPONENT RENDER ──────────────────────────────────────────
function RenderBlock({ block, index }: { block: Block; index: number }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="font-serif-brand text-[20px] font-bold text-navy mt-8 mb-3 leading-snug">
          {block.content}
        </h2>
      );
    case "para":
      return (
        <p key={index} className="text-[15.5px] font-light leading-[1.85] text-gray-500 mb-5">
          {block.content}
        </p>
      );
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
          <p className="font-serif-brand text-[17px] font-normal italic text-navy leading-relaxed">
            {block.content}
          </p>
        </div>
      );
    case "note":
      return (
        <div key={index} className="mt-8 p-4 bg-brand-gold-lt border-l-[3px] border-brand-gold text-[13px] font-light text-gray-600">
          <strong className="font-semibold text-gray-700">Lưu ý: </strong>
          {block.content}
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

  return (
    <>
      <div className="bg-navy py-10 md:py-14">
        <Container>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={14} /> Quay lại tất cả bài viết
          </Link>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-3">
            {post.audience}
          </p>
          <h1 className="font-serif-brand text-[clamp(24px,3.5vw,38px)] font-bold text-white leading-tight max-w-2xl">
            {post.title}
          </h1>
          <p className="text-[13px] text-white/40 mt-4">
            TS.BS. Nguyễn Ngọc Quyền &nbsp;·&nbsp; {post.date}
          </p>
        </Container>
      </div>

      <div className="py-12 md:py-16">
        <Container>
          <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
            {/* Article */}
            <article className="max-w-2xl">
              {/* Lead */}
              <p className="text-[16.5px] font-light leading-[1.85] text-gray-500 mb-8 font-serif-brand italic border-l-2 border-brand-gold pl-5">
                {post.excerpt}
              </p>

              {/* Body */}
              {blocks
                ? blocks.map((block, i) => <RenderBlock key={i} block={block} index={i} />)
                : <p className="text-gray-400 italic">Nội dung đầy đủ sẽ được cập nhật sớm.</p>
              }
            </article>

            {/* Sidebar */}
            <aside className="space-y-4 sticky top-20">
              <div className="bg-navy-pale border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">
                  Về tác giả
                </p>
                <p className="font-serif-brand text-[15px] font-bold text-navy">
                  TS.BS. Nguyễn Ngọc Quyền
                </p>
                <p className="text-[13px] text-gray-400 mt-1 leading-snug">
                  Bác sĩ Cột sống · Bệnh viện TWQĐ 108
                </p>
                <Link href="/about" className="inline-block mt-3 text-[13px] text-navy hover:underline underline-offset-2">
                  Xem giới thiệu →
                </Link>
              </div>

              {/* Đặt khám */}
              <div className="bg-navy p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-3">
                  Đặt lịch khám
                </p>
                <a href="tel:0989052288" className="block text-[22px] font-bold text-white hover:text-brand-gold transition-colors mb-1">
                  0989 052 288
                </a>
                <p className="text-[12px] text-white/50 mb-3">Gọi để đặt lịch khám</p>
                <p className="text-[12px] text-white/40 leading-relaxed">
                  T2–T6: 6h30–17h · Phòng 225, BV 108<br />
                  Thứ 6: 17h30+ · SpineTech, 257 Giải Phóng
                </p>
              </div>

              {/* Bài liên quan */}
              <div className="bg-gray-50 border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">
                  Bài viết liên quan
                </p>
                <ul className="space-y-2 list-none">
                  {POSTS.filter((p) => p.slug !== params.slug).slice(0, 3).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-[13.5px] text-gray-600 hover:text-navy transition-colors leading-snug block"
                      >
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
