import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

type Block =
  | { type: "para"; content: string }
  | { type: "heading"; content: string }
  | { type: "list"; items: string[] }
  | { type: "note"; content: string }
  | { type: "highlight"; content: string }
  | { type: "image"; src: string; alt: string; caption: string; subcaption: string }
  | { type: "warning"; content: string };

const ARTICLES: Record<string, Block[]> = {

  "loang-xuong-phu-nu-sau-man-kinh": [
    { type: "para", content: "Bà N.T.H., 72 tuổi, đến phòng khám trong tình trạng không thể tự đi lại sau một cú trượt chân nhẹ khi xuống cầu thang. X-quang cho thấy nhiều đốt sống đã xẹp từ trước — lặng lẽ, không ai hay biết. Đây không phải câu chuyện hiếm gặp." },

    { type: "image",
      src: "/images/Patient1_blurred.jpg",
      alt: "Bệnh nhân cao tuổi đến khám bằng xe lăn do loãng xương nặng và gãy xẹp đốt sống",
      caption: "Hình 1. Bệnh nhân nữ, 72 tuổi đến khám bằng xe lăn",
      subcaption: "Không thể đi lại sau gãy xẹp đốt sống do loãng xương tiến triển lâu năm không được điều trị. Ảnh đã được xử lý bảo vệ danh tính." },

    { type: "heading", content: "Loãng xương — căn bệnh không có tiếng động" },
    { type: "para", content: "Loãng xương là tình trạng mật độ xương giảm và cấu trúc xương bị suy yếu tiến triển, khiến xương ngày càng mỏng manh và dễ gãy hơn. Điều làm cho căn bệnh này đặc biệt nguy hiểm chính là tính chất hoàn toàn không có triệu chứng trong giai đoạn đầu và giữa. Người bệnh không đau, không khó chịu, không biết gì — cho đến khi xương gãy." },
    { type: "para", content: "Ở phụ nữ sau mãn kinh, tốc độ mất xương xảy ra rất nhanh trong 5–7 năm đầu do sự sụt giảm đột ngột của estrogen. Trong giai đoạn này, phụ nữ có thể mất tới 20–30% khối lượng xương mà không hề hay biết." },

    { type: "highlight", content: "Loãng xương không gõ cửa trước. Nó đến lặng lẽ, và chỉ lộ diện khi một cú ngã nhẹ, một cái hắt hơi — hay thậm chí không có gì — cũng đủ để gãy xương." },

    { type: "heading", content: "Tại sao phụ nữ sau mãn kinh là nhóm nguy cơ cao nhất?" },
    { type: "para", content: "Phụ nữ chiếm hơn 80% số người bị loãng xương. Sau mãn kinh, hai yếu tố cộng hưởng làm tăng nguy cơ vượt trội so với nam giới cùng tuổi:" },
    { type: "list", items: [
      "Mất estrogen đột ngột làm tăng tốc độ hủy xương và giảm tái tạo xương",
      "Phụ nữ có khối lượng xương tối đa thấp hơn nam giới từ trước — nền xương vốn đã mỏng hơn",
      "Tuổi thọ dài hơn đồng nghĩa với thời gian tiếp tục mất xương dài hơn",
      "Các yếu tố bổ sung: ít vận động, thiếu canxi và vitamin D, hút thuốc lá",
    ]},

    { type: "image",
      src: "/images/Xquang_1.jpg",
      alt: "X-quang cột sống thắt lưng bệnh nhân nữ loãng xương nặng — gãy xẹp nhiều đốt sống",
      caption: "Hình 2. X-quang cột sống thắt lưng — gãy xẹp đốt sống do loãng xương (13/12/2024)",
      subcaption: "Phim X-quang thẳng và nghiêng cho thấy gãy xẹp nhiều đốt sống vùng thắt lưng ở bệnh nhân nữ sau mãn kinh, xương thưa loãng rõ rệt — hậu quả của loãng xương tiến triển nhiều năm không được tầm soát." },

    { type: "heading", content: "Gãy xẹp đốt sống — hậu quả thường bị đánh giá thấp" },
    { type: "para", content: "Gãy xẹp đốt sống là biến chứng thường gặp nhất nhưng lại thường bị đánh giá chưa đủ mức độ nghiêm trọng. Người bệnh và đôi khi cả thầy thuốc thường nghĩ đây chỉ là 'đau lưng do tuổi già' — bỏ qua cơ hội can thiệp sớm." },
    { type: "list", items: [
      "Mất chiều cao tiến triển (có thể thấp đi 5–10 cm theo thời gian)",
      "Gù lưng, biến dạng tư thế, ảnh hưởng chức năng hô hấp",
      "Giảm khả năng đi lại và thực hiện các hoạt động sinh hoạt hàng ngày",
      "Mất sự độc lập, tăng nguy cơ phụ thuộc vào người thân",
      "Tăng nguy cơ gãy tiếp theo — mỗi lần gãy làm tăng nguy cơ gãy thêm gấp 5 lần",
    ]},

    { type: "image",
      src: "/images/Xquang_2.jpg",
      alt: "X-quang cột sống thắt lưng gãy xẹp và thoái hóa nặng do loãng xương",
      caption: "Hình 3. X-quang cột sống thắt lưng — gãy xẹp và thoái hóa cột sống mức độ nặng",
      subcaption: "Hình ảnh gãy xẹp đốt sống kết hợp thoái hóa lan tỏa toàn bộ cột sống thắt lưng — hình ảnh điển hình của loãng xương không được điều trị ở phụ nữ sau mãn kinh." },

    { type: "heading", content: "Tại sao căn bệnh này chưa được quan tâm thỏa đáng?" },
    { type: "list", items: [
      "Người bệnh không biết mình thuộc nhóm nguy cơ cao, không có triệu chứng nên không đi khám",
      "Cho rằng 'đau lưng là chuyện bình thường khi già' — bỏ qua dấu hiệu cảnh báo",
      "Sàng lọc loãng xương chưa được thực hiện thường quy tại nhiều cơ sở y tế cơ sở",
      "Loãng xương chưa được truyền thông đúng mức so với bệnh tim mạch hay ung thư",
    ]},

    { type: "warning", content: "Dấu hiệu cần đi khám ngay: Đau lưng cấp tính đột ngột sau một động tác nhỏ (cúi người, ho, hắt hơi) · Chiều cao giảm hơn 2 cm so với lúc trẻ · Lưng ngày càng gù hơn · Đã từng gãy xương sau chấn thương nhẹ." },

    { type: "heading", content: "Phát hiện sớm — điều trị hiệu quả" },
    { type: "para", content: "Phụ nữ sau mãn kinh nên được đo mật độ xương bằng máy DXA ít nhất mỗi 2 năm một lần, hoặc sớm hơn nếu có yếu tố nguy cơ. Điều trị toàn diện bao gồm:" },
    { type: "list", items: [
      "Bổ sung canxi (1.000–1.200mg/ngày) và vitamin D (800–1.000 IU/ngày)",
      "Vận động thường xuyên — đặc biệt bài tập tải trọng và tăng cường cơ bắp",
      "Điều trị thuốc khi có chỉ định (bisphosphonates, denosumab, teriparatide...)",
      "Phòng ngừa té ngã — kiểm tra thị lực, điều chỉnh môi trường sống",
      "Can thiệp tạo hình thân đốt sống (kyphoplasty) khi có gãy xẹp gây đau nặng",
    ]},

    { type: "highlight", content: "Mục tiêu điều trị không chỉ là làm chậm quá trình mất xương — mà là giúp người phụ nữ tiếp tục sống tự lập, đi lại được, và có chất lượng cuộc sống xứng đáng với những năm tháng phía trước." },

    { type: "note", content: "Bài viết mang tính giáo dục sức khỏe tổng quát, không thay thế tư vấn y tế trực tiếp. Nếu bạn có triệu chứng nghi ngờ, vui lòng đến gặp bác sĩ để được thăm khám đầy đủ." },
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
      "Người cao tuổi đau lưng cấp sau ho hoặc động tác nhỏ",
    ]},
    { type: "note", content: "Thông tin tổng quát. Chỉ bác sĩ thăm khám trực tiếp mới có thể đánh giá chính xác tình trạng của bạn." },
  ],

  "loang-xuong-truoc-phau-thuat": [
    { type: "para", content: "Khi bệnh nhân loãng xương cần phẫu thuật cột sống, chất lượng xương kém có thể làm tăng đáng kể nguy cơ biến chứng cơ học." },
    { type: "heading", content: "Tại sao DXA chưa đủ?" },
    { type: "para", content: "Ở bệnh nhân có thoái hóa nặng, kết quả DXA có thể bị cao giả tạo do gai xương và vôi hóa dây chằng làm tăng giá trị đo được." },
    { type: "heading", content: "Hounsfield Unit — công cụ bổ sung quan trọng" },
    { type: "para", content: "HU trên phim CT phản ánh mật độ xương thực sự tại từng vị trí. HU dưới 110 tại thân đốt sống là yếu tố nguy cơ cao cho biến chứng sau phẫu thuật." },
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
    { type: "para", content: "Quy tắc bắt buộc: bất kỳ tài liệu nào AI đề xuất, bạn phải tự tìm và đọc nguyên văn trước khi trích dẫn." },
    { type: "highlight", content: "AI là cộng sự chăm chỉ không biết mệt — nhưng vẫn cần một bác sĩ đủ tỉnh táo để kiểm tra, định hướng và chịu trách nhiệm cuối cùng." },
    { type: "note", content: "Chia sẻ kinh nghiệm cá nhân. Không đại diện cho quan điểm của bất kỳ tổ chức nào." },
  ],

  "thoat-vi-dia-dem-co-can-mo": [
    { type: "para", content: "Câu hỏi phổ biến nhất: 'Bác sĩ ơi, tôi bị thoát vị đĩa đệm, có cần mổ không?' Câu trả lời ngắn gọn là: đa số là không." },
    { type: "heading", content: "Hầu hết thoát vị đĩa đệm tự khỏi được" },
    { type: "para", content: "Phần lớn người bệnh cải thiện tốt với điều trị bảo tồn trong vòng 6–12 tuần." },
    { type: "heading", content: "Khi nào cần xem xét phẫu thuật?" },
    { type: "list", items: [
      "Triệu chứng không cải thiện sau 6–12 tuần điều trị bảo tồn",
      "Yếu cơ tiến triển ngày càng nặng hơn",
      "Hội chứng chùm đuôi ngựa: mất kiểm soát đại tiểu tiện (khẩn cấp)",
      "Đau dữ dội không đáp ứng điều trị",
    ]},
    { type: "highlight", content: "Phim MRI cho thấy thoát vị đĩa đệm KHÔNG có nghĩa là bắt buộc phải mổ. Quyết định dựa trên triệu chứng của người bệnh, không phải hình ảnh phim." },
    { type: "note", content: "Thông tin giáo dục tổng quát. Chỉ bác sĩ thăm khám trực tiếp mới có thể đưa ra khuyến cáo phù hợp." },
  ],

  "barthel-index-trong-theo-doi-gay-xep": [
    { type: "para", content: "Thang điểm Barthel đánh giá mức độ độc lập trong 10 hoạt động sinh hoạt hàng ngày. Tổng điểm từ 0–100, điểm càng cao người bệnh càng độc lập." },
    { type: "heading", content: "Tại sao dùng Barthel cho bệnh nhân gãy xẹp đốt sống?" },
    { type: "para", content: "Nghiên cứu tại BV TWQĐ 108 cho thấy nhiều bệnh nhân gãy xẹp đốt sống có loãng xương đang ở mức phụ thuộc một phần trong sinh hoạt hàng ngày. Đo Barthel giúp phát hiện sớm và lên kế hoạch can thiệp phù hợp." },
    { type: "note", content: "Bài viết dành cho bác sĩ, điều dưỡng và học viên y khoa." },
  ],

"bom-xi-mang-tao-hinh-dot-song": [
    { type: "para", content: "Kỹ thuật bơm xi măng sinh học tạo hình thân đốt sống (vertebroplasty/kyphoplasty) có thể giảm đau kịch tính trong vòng 24–48 giờ sau can thiệp. Nhưng nếu chỉ dừng ở đó mà không điều trị loãng xương — căn nguyên thực sự của vấn đề — người bệnh đang đứng trên nền đất sụt." },
    { type: "heading", content: "Bơm xi măng đốt sống là gì?" },
    { type: "para", content: "Khi một đốt sống bị xẹp do loãng xương, phần thân đốt bị vỡ vụn bên trong gây đau dữ dội. Kỹ thuật bơm xi măng sinh học (PMMA) vào bên trong thân đốt xẹp nhằm ổn định cơ học và giảm đau nhanh." },
    { type: "list", items: ["Vertebroplasty: bơm xi măng trực tiếp vào thân đốt xẹp", "Kyphoplasty: nong bóng trước tạo khoang, sau đó bơm xi măng — phục hồi chiều cao thân đốt tốt hơn", "Thực hiện qua da, không cần mổ mở", "Giảm đau rõ rệt trong 24–72 giờ sau thủ thuật"] },
    { type: "image", src: "/images/Bom-xi-mang-1.jpg", alt: "X-quang cột sống sau bơm xi măng tạo hình đốt sống", caption: "Hình 1. X-quang cột sống thắt lưng — sau tạo hình thân đốt sống bằng xi măng sinh học (24/12/2024)", subcaption: "Phim X-quang cho thấy xi măng sinh học (vùng trắng đậm) trong thân đốt sống đã xẹp. Đốt sống được ổn định cơ học, người bệnh giảm đau rõ rệt sau can thiệp." },
    { type: "heading", content: "Khi nào được xem xét bơm xi măng?" },
    { type: "list", items: ["Đau lưng cấp tính dữ dội do xẹp đốt sống mới, xác nhận trên MRI có phù tủy xương", "Điều trị bảo tồn không hiệu quả sau 4–6 tuần", "Người bệnh không thể chịu đựng đau để vận động, nguy cơ nằm lâu cao", "Không có chống chỉ định: nhiễm trùng, rối loạn đông máu, tổn thương thần kinh"] },
    { type: "highlight", content: "Xi măng sinh học giải quyết triệu chứng đau — nhưng không thể thay thế xương đã mất. Nếu không điều trị loãng xương, đốt sống kế cận sẽ tiếp tục sụp đổ." },
    { type: "image", src: "/images/Bom-xi-mang-2.jpg", alt: "X-quang cột sống thắt lưng thẳng và nghiêng — xi măng tại nhiều tầng đốt sống", caption: "Hình 2. X-quang cột sống thắt lưng — xi măng sinh học tại nhiều tầng đốt sống", subcaption: "Minh họa hậu quả của loãng xương không được điều trị — nhiều đốt sống lần lượt xẹp theo thời gian, buộc phải can thiệp nhiều lần." },
    { type: "heading", content: "Nguy cơ khi lạm dụng mà không điều trị loãng xương" },
    { type: "list", items: ["Xẹp đốt sống kế cận: xi măng cứng hơn xương bình thường, truyền lực bất thường lên đốt liền kề", "Vòng xoáy can thiệp nhiều lần trong khi loãng xương vẫn tiến triển", "Biến dạng cột sống tiến triển: gù nặng, mất cân bằng, suy giảm hô hấp", "Rò xi măng vào ống sống hoặc mạch máu trong trường hợp hiếm gặp"] },
    { type: "heading", content: "Điều trị đúng nghĩa: bơm xi măng kết hợp điều trị gốc" },
    { type: "list", items: ["Bơm xi măng: giảm đau cấp tính, ổn định cơ học", "Đánh giá mật độ xương: DXA, Hounsfield Unit trên CT", "Điều trị loãng xương bằng thuốc theo chỉ định bác sĩ", "Bổ sung canxi và vitamin D đầy đủ", "Phục hồi chức năng và phòng ngừa té ngã", "Theo dõi định kỳ để phát hiện xẹp mới"] },
    { type: "highlight", content: "Bơm xi măng là công cụ — không phải giải pháp. Người bệnh xứng đáng được nhận cả hai: giảm đau nhanh VÀ điều trị loãng xương bền vững để bảo vệ những đốt sống còn lại." },
    { type: "note", content: "Bài viết mang tính giáo dục sức khỏe tổng quát. Quyết định điều trị cần được thảo luận với bác sĩ chuyên khoa dựa trên tình trạng cụ thể của từng người bệnh." },
  ],
  
"loang-xuong-o-nguoi-cao-tuoi": [
    { type: "para", content: "Loãng xương là tình trạng mật độ xương giảm, khiến xương giòn và dễ gãy. Bệnh thường không có triệu chứng cho đến khi xảy ra gãy xương." },
    { type: "heading", content: "Ai có nguy cơ?" },
    { type: "list", items: [
      "Phụ nữ trên 50 tuổi, đặc biệt sau mãn kinh",
      "Nam giới trên 70 tuổi",
      "Người ít vận động, thiếu canxi và vitamin D",
      "Người hút thuốc lá hoặc uống nhiều rượu bia",
    ]},
    { type: "heading", content: "Phòng ngừa" },
    { type: "list", items: [
      "Bổ sung canxi 1.200mg/ngày và vitamin D 800–1.000 IU/ngày",
      "Vận động thường xuyên: đi bộ, bơi lội",
      "Tầm soát DXA định kỳ mỗi 2 năm",
      "Phòng tránh té ngã trong sinh hoạt hàng ngày",
    ]},
    { type: "note", content: "Thông tin giáo dục sức khỏe tổng quát. Không thay thế tư vấn y tế trực tiếp." },
  ],

"bai-tap-phuc-hoi-cot-song-that-lung": [
  { type: "para", content: "Tập luyện đúng cách là một phần quan trọng trong điều trị và phục hồi bệnh lý cột sống thắt lưng. Các bài tập dưới đây được thiết kế đơn giản, có thể thực hiện tại nhà, giúp giảm đau, tăng cường cơ lưng và cải thiện khả năng vận động." },
  { type: "note", content: "Trước khi tập, hãy tham khảo ý kiến bác sĩ. Nếu xuất hiện đau tăng hoặc tê bì trong khi tập, dừng lại ngay và báo cho bác sĩ." },
  { type: "heading", content: "Bài tập 1 — Cầu mông (Glute Bridge)" },
  { type: "para", content: "Nằm sấp, mặt nghiêng, hai tay xuôi. Nâng chân phải lên giữ thẳng, nâng căng cao tốt. Cột sống lưng hơi ưỡn giữ khoảng 5 giây. Mỗi động tác làm 5 lần luân phiên chân phải rồi chân trái, tổng cộng 10 lần." },
  { type: "heading", content: "Bài tập 2 — Nâng chân thẳng" },
  { type: "para", content: "Nằm sấp hai chân khép, nâng hai chân lên khỏi mặt giường, hai chân thẳng, cột sống cưỡn về phía trước. Thời gian làm động tác này khoảng 5 giây. Nằm thư giãn 10 giây, thở đều rồi làm lại động tác trên 10 lần." },
  { type: "heading", content: "Bài tập 3 — Ưỡn lưng sấp" },
  { type: "para", content: "Nằm sấp, khuỵu tay co, hai chân duỗi thẳng. Đẩy tay nâng nửa người phía trên lên, ưỡn dần và ngoẹo tít đầu ra sau. Toàn thân thả lỏng, thư giãn, thở đều khoảng 5 giây rồi lặp lại bài tập trên." },
  { type: "heading", content: "Bài tập 4 — Kéo giãn gối" },
  { type: "para", content: "Nằm ngửa co hai chân vuông góc với mặt sàn, nâng mông lên tối đa, kéo dài khoảng 5 giây. Thư giãn 5–10 giây rồi lặp lại bài tập trên 10 lần." },
  { type: "heading", content: "Bài tập 5 — Nâng chân thẳng ngửa" },
  { type: "para", content: "Nằm ngửa hai tay xuôi, chân duỗi thẳng. Nâng chân phải lên đến khi chân phải thẳng góc với mặt sàn. Thời gian làm động tác này khoảng 5 giây. Mỗi chân tập 5 lần xen kẽ nhau, tổng số 10 lần." },
  { type: "heading", content: "Bài tập 6 — Nâng chân thẳng đứng" },
  { type: "para", content: "Nằm ngửa hai chân thẳng, nâng hai chân duỗi thẳng và khép sát, đến khi hai chân thẳng góc với mặt sàn. Thời gian khoảng 5 giây. Thư giãn, thở đều 5–10 giây rồi lặp lại bài tập trên 10 lần." },
  { type: "heading", content: "Bài tập 7 — Kéo gối vào ngực" },
  { type: "para", content: "Nằm ngửa hai tay xuôi, nâng đầu gối bên phải lên, áp đùi vào ngực. Bàn tay giữ đầu gối, cột sống giữ thẳng và sát mặt sàn. Động tác trên kéo dài khoảng 5 giây. Mỗi chân tập 5 lần xen kẽ nhau, tổng số 10 lần." },
  { type: "heading", content: "Bài tập 8 — Nâng chân 45 độ" },
  { type: "para", content: "Nằm ngửa hai tay xuôi, hai chân khép sát nhau duỗi thẳng. Duỗi thẳng, nâng cả hai chân lên góc 45 độ. Chân trái và thân người áp sát mặt sàn. Động tác này kéo dài khoảng 5 giây. Mỗi chân tập 5 lần, tổng số 10 lần." },
  { type: "heading", content: "Bài tập 9 — Nâng chân 45 độ khép" },
  { type: "para", content: "Nằm ngửa hai tay xuôi, hai chân khép sát nhau duỗi thẳng. Duỗi thẳng nâng hai chân lên góc 45 độ thì dừng lại. Động tác này kéo dài khoảng 5 giây. Nằm thư giãn và thở đều khoảng 5–10 giây sau đó lặp lại bài tập trên 10 lần." },
  { type: "highlight", content: "Tập đều đặn mỗi ngày, kiên trì ít nhất 4–6 tuần để thấy rõ hiệu quả. Kết hợp với điều trị của bác sĩ để đạt kết quả tốt nhất." },
  { type: "note", content: "Thông tin giáo dục sức khỏe tổng quát. Không thay thế tư vấn y tế trực tiếp. Người bệnh cần được thăm khám và có chỉ định cụ thể từ bác sĩ chuyên khoa." },
],

"loang-xuong-co-che-va-nguyen-nhan": [
  { type: "para", content: "Nhiều người nghĩ loãng xương chỉ là 'xương yếu đi theo tuổi tác' và không làm gì được. Thực ra không phải vậy. Hiểu đúng cơ chế, bạn hoàn toàn có thể làm chậm quá trình này." },
  { type: "heading", content: "Xương hoạt động như thế nào?" },
  { type: "para", content: "Xương không phải khối đá chết — đây là bộ phận sống, liên tục được tái tạo. Trong xương có hai loại tế bào làm việc song song: tế bào tạo xương (osteoblast) chuyên xây dựng xương mới, và tế bào hủy xương (osteoclast) chuyên phá vỡ xương cũ để tái sử dụng khoáng chất." },
  { type: "list", items: [
    "Trước 30 tuổi: xây dựng nhiều hơn phá vỡ — xương ngày càng chắc",
    "30–50 tuổi: xây dựng cân bằng phá vỡ — xương giữ nguyên sức mạnh",
    "Sau 50 tuổi: phá vỡ nhiều hơn xây dựng — xương bắt đầu mỏng dần"
  ]},
  { type: "heading", content: "Loãng xương xảy ra khi nào?" },
  { type: "para", content: "Loãng xương xảy ra khi quá trình phá vỡ vượt quá quá trình xây dựng kéo dài. Có ba nguyên nhân chính:" },
  { type: "heading", content: "1. Giảm estrogen sau mãn kinh" },
  { type: "para", content: "Estrogen hoạt động như một 'nút phanh' kiểm soát tế bào hủy xương. Khi phụ nữ mãn kinh, estrogen giảm mạnh, tế bào hủy xương hoạt động quá mức, tế bào tạo xương không kịp bù đắp. Đây là lý do phụ nữ sau mãn kinh có nguy cơ loãng xương cao hơn nam giới cùng tuổi." },
  { type: "heading", content: "2. Thiếu canxi và vitamin D" },
  { type: "para", content: "Canxi là nguyên liệu chính để xây dựng xương. Vitamin D giúp cơ thể hấp thu canxi từ thức ăn. Thiếu một trong hai, tế bào tạo xương không đủ nguyên liệu để làm việc, xương không được tái tạo đủ nhanh." },
  { type: "heading", content: "3. Ít vận động" },
  { type: "para", content: "Xương cần lực tác động để duy trì sức mạnh. Khi vận động, xương cảm nhận lực và kích thích tế bào tạo xương hoạt động tích cực hơn. Ít vận động đồng nghĩa với xương không có động lực để chắc chắn." },
  { type: "highlight", content: "Xương bình thường: xây dựng và phá vỡ cân bằng. Loãng xương: phá vỡ vượt trội — xương mỏng dần, nhiều lỗ hơn, dễ gãy hơn dù chỉ từ một cú ngã nhẹ." },
  { type: "heading", content: "Hậu quả của loãng xương" },
  { type: "list", items: [
    "Xương trở nên xốp như tổ ong — mất khả năng chịu lực",
    "Gãy xương từ chấn thương nhỏ: ngã nhẹ, ho mạnh, cúi người",
    "Vị trí gãy thường gặp: cột sống, hông, cổ tay",
    "Hậu quả: đau mạn tính, mất khả năng đi lại, phụ thuộc người thân"
  ]},
  { type: "note", content: "Thông tin giáo dục sức khỏe tổng quát. Nếu bạn có nguy cơ loãng xương hoặc đã được chẩn đoán, hãy gặp bác sĩ để được đánh giá và tư vấn điều trị phù hợp." },
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
              <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2.5 flex-shrink-0" />{item}
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
    case "warning":
      return (
        <div key={index} className="my-6 p-4 bg-yellow-50 border border-yellow-200 border-l-[3px] border-l-brand-gold text-[13.5px] text-gray-600 leading-relaxed">
          <strong className="font-semibold text-gray-800 block mb-1">⚠️ Dấu hiệu cần đi khám ngay:</strong>
          {block.content}
        </div>
      );
    case "note":
      return (
        <div key={index} className="mt-8 p-4 bg-brand-gold-lt border-l-[3px] border-brand-gold text-[13px] font-light text-gray-600">
          <strong className="font-semibold text-gray-700">Lưu ý: </strong>{block.content}
        </div>
      );
    case "image":
      return (
        <div key={index} className="my-7 border border-gray-200 overflow-hidden bg-gray-50">
          <div className="relative w-full" style={{aspectRatio: "4/3"}}>
            <Image src={block.src} alt={block.alt} fill className="object-cover" />
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <p className="text-[13px] font-semibold text-gray-800 mb-1">{block.caption}</p>
            <p className="text-[12px] text-gray-400 italic leading-relaxed">{block.subcaption}</p>
          </div>
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
          <h1 className="font-serif-brand text-[clamp(24px,3.5vw,38px)] font-bold text-white leading-tight max-w-2xl">{post!.title}</h1>
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
              <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-4 flex-wrap">
                <span className="text-[13px] text-gray-400">Chia sẻ bài viết:</span>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] text-white text-[13px] font-semibold px-4 py-2 hover:bg-[#166FE5] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Chia sẻ Facebook
                </a>
              </div>
            </article>

            <aside className="space-y-4 sticky top-20">
              <div className="bg-navy p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2">Về tác giả</p>
                <p className="font-serif-brand text-[15px] font-bold text-white">TS.BS. Nguyễn Ngọc Quyền</p>
                <p className="text-[12px] text-white/50 mt-1">Bác sĩ Cột sống · Bệnh viện TWQĐ 108</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">Đặt lịch khám</p>
                  <a href="tel:0989052288" className="text-[22px] font-bold text-white block hover:text-brand-gold transition-colors">0989 052 288</a>
                  <p className="text-[11.5px] text-white/40 mt-1 leading-relaxed">T2–T6: 6h30–17h · Phòng 225, BV 108<br/>Thứ 6: 17h30+ · SpineTech, 257 Giải Phóng</p>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-5">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-navy mb-3">Bài viết liên quan</p>
                <ul className="space-y-2 list-none">
                  {POSTS.filter((p) => p.slug !== params.slug).slice(0, 4).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-[13px] text-gray-600 hover:text-navy transition-colors leading-snug block py-1 border-b border-gray-100 last:border-b-0">
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
