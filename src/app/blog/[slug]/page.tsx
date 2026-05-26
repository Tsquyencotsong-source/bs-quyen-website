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

  "loi-khuyen-suc-khoe-nang-nong-cuc-doan": [
    {
      type: "para",
      content: "Mùa hè năm 2025–2026, nhiều tỉnh thành Việt Nam ghi nhận nhiệt độ vượt 40°C liên tục nhiều ngày — mức kỷ lục trong lịch sử khí tượng. Không khí oi bức, độ ẩm cao và nhiệt độ không hạ xuống vào ban đêm tạo ra điều kiện nguy hiểm cho hàng triệu người, đặc biệt là người cao tuổi, trẻ nhỏ và người mắc bệnh mãn tính. Tổ chức Y tế Thế giới (WHO) đã xếp nắng nóng cực đoan là một trong những nguyên nhân hàng đầu gây tử vong do thời tiết trên toàn cầu.",
    },
    {
      type: "para",
      content: "Điều đáng lo ngại là nhiều người không nhận ra mức độ nguy hiểm cho đến khi đã xuất hiện các triệu chứng nặng. Sốc nhiệt (heat stroke) có thể gây tổn thương não vĩnh viễn và tử vong chỉ trong vòng 30 phút nếu không được xử trí kịp thời. Bài viết này tổng hợp các khuyến cáo từ Bộ Y tế Việt Nam, WHO, CDC Hoa Kỳ và các nghiên cứu lâm sàng mới nhất năm 2024–2025 để giúp bạn và gia đình an toàn trong những ngày nắng nóng.",
    },
    {
      type: "heading",
      content: "Nắng Nóng Tác Động Lên Cơ Thể Như Thế Nào?",
    },
    {
      type: "para",
      content: "Cơ thể người duy trì thân nhiệt ổn định ở khoảng 37°C thông qua cơ chế đổ mồ hôi và giãn mạch máu ngoại vi. Khi nhiệt độ môi trường quá cao hoặc độ ẩm quá lớn, hai cơ chế này bị suy giảm hiệu quả: mồ hôi bay hơi chậm hơn, nhiệt không thoát ra ngoài được, thân nhiệt bắt đầu tăng. Nếu thân nhiệt vượt 40°C, các enzyme trong tế bào bắt đầu bị phá hủy, màng tế bào mất ổn định và tổn thương đa tạng bắt đầu xảy ra.",
    },
    {
      type: "para",
      content: "Nghiên cứu đăng trên tạp chí chuyên ngành năm 2025 (NIH/PubMed) chỉ ra rằng nắng nóng không chỉ ảnh hưởng đến tim mạch mà còn gây tổn thương cơ xương khớp qua cơ chế tiêu cơ vân (rhabdomyolysis) — tình trạng các tế bào cơ bị phá hủy hàng loạt, giải phóng myoglobin vào máu, dẫn đến suy thận cấp. Người tập thể dục ngoài trời trong nắng nóng có nguy cơ mắc rhabdomyolysis cao gấp 5–10 lần so với điều kiện bình thường.",
    },
    {
      type: "heading",
      content: "Ba Mức Độ Say Nắng — Nhận Biết Để Xử Trí Đúng",
    },
    {
      type: "para",
      content: "Các bệnh lý do nhiệt nắng được chia thành ba mức độ tăng dần, từ nhẹ đến nguy hiểm tính mạng. Việc nhận biết sớm và xử trí đúng cách ở giai đoạn nhẹ có thể ngăn chặn tiến triển sang mức nguy hiểm.",
    },
    {
      type: "highlight",
      content: "Mức 1 — Kiệt sức do nhiệt (Heat Exhaustion): Ra nhiều mồ hôi, da lạnh và ẩm, mạch nhanh và yếu, chóng mặt, buồn nôn, chuột rút cơ, có thể ngất xỉu. Thân nhiệt thường dưới 40°C. Đây là giai đoạn CẢNH BÁO — cần dừng ngay mọi hoạt động và vào nơi mát.",
    },
    {
      type: "highlight",
      content: "Mức 2 — Sốc nhiệt (Heat Stroke): Thân nhiệt trên 40°C, da đỏ và nóng (không còn mồ hôi), mạch nhanh và mạnh, lú lẫn, nói nhảm, co giật hoặc mất ý thức. ĐÂY LÀ CẤP CỨU Y TẾ — phải gọi 115 ngay lập tức.",
    },
    {
      type: "heading",
      content: "Ai Có Nguy Cơ Cao Nhất?",
    },
    {
      type: "para",
      content: "Không phải ai cũng bị ảnh hưởng như nhau bởi nắng nóng. Bộ Y tế Việt Nam xác định các nhóm cần được ưu tiên bảo vệ đặc biệt:",
    },
    {
      type: "list",
      items: [
        "Người cao tuổi (trên 65 tuổi): Khả năng điều hòa nhiệt độ suy giảm, ít nhận biết cảm giác khát, thường dùng nhiều thuốc ảnh hưởng đến cân bằng dịch.",
        "Trẻ em dưới 5 tuổi: Diện tích da so với khối lượng cơ thể lớn, trao đổi nhiệt nhanh hơn người lớn.",
        "Phụ nữ có thai: Thân nhiệt cơ sở cao hơn, nhu cầu nước lớn hơn, nguy cơ ảnh hưởng đến thai nhi.",
        "Người lao động ngoài trời: Nông dân, công nhân xây dựng, bảo vệ, người giao hàng — tiếp xúc trực tiếp nhiều giờ.",
        "Người mắc bệnh tim mạch, tăng huyết áp, đái tháo đường: Khả năng bù trừ tim mạch kém, mạch máu ngoại vi không giãn được tốt.",
        "Người mắc bệnh cột sống, khớp đang dùng thuốc kháng viêm NSAID: Nhóm thuốc này làm giảm lưu lượng máu thận, kết hợp mất nước do nắng nóng có thể gây suy thận cấp.",
        "Người thừa cân, béo phì: Lớp mỡ cách nhiệt làm cơ thể khó thoát nhiệt.",
      ],
    },
    {
      type: "warning",
      content: "Lưu ý đặc biệt cho bệnh nhân cột sống và khớp: Các thuốc kháng viêm không steroid (NSAID) như Ibuprofen, Diclofenac, Meloxicam làm giảm lưu lượng máu đến thận. Khi kết hợp với mất nước do nắng nóng, nguy cơ suy thận cấp tăng cao đột biến. Trong những ngày nắng nóng cực đoan, hãy hỏi bác sĩ về việc điều chỉnh liều thuốc và đảm bảo uống đủ nước.",
    },
    {
      type: "heading",
      content: "7 Hành Động Bảo Vệ Sức Khỏe Trong Nắng Nóng",
    },
    {
      type: "para",
      content: "Bộ Y tế Việt Nam và WHO đồng thuận về 7 nhóm biện pháp hiệu quả nhất để phòng chống tác hại của nắng nóng cực đoan:",
    },
    {
      type: "list",
      items: [
        "Uống đủ nước — kể cả khi không khát: Người lớn cần uống tối thiểu 2–3 lít nước mỗi ngày trong thời tiết nắng nóng. Người lao động ngoài trời cần uống 250ml nước mỗi 15–20 phút. Ưu tiên nước lọc, nước điện giải; tránh rượu bia và đồ uống có caffeine vì gây lợi tiểu.",
        "Tránh ra ngoài trong khung giờ 10h–16h: Đây là thời điểm bức xạ mặt trời mạnh nhất và nhiệt độ cao nhất. Nếu buộc phải ra ngoài, hãy mặc quần áo sáng màu, rộng rãi, đội mũ rộng vành và sử dụng ô che nắng.",
        "Bôi kem chống nắng SPF 30 trở lên: Cháy nắng không chỉ làm tổn thương da mà còn làm giảm khả năng tỏa nhiệt của cơ thể. Thoa lại mỗi 2 giờ khi ở ngoài trời.",
        "Mặc trang phục phù hợp: Chọn vải cotton hoặc vải thoáng khí, màu sáng (phản xạ nhiệt tốt hơn màu tối), rộng rãi để không khí lưu thông. Tránh mặc đồ bó sát khi ra ngoài.",
        "Làm mát môi trường sống: Dùng quạt, điều hòa không khí hoặc đến các không gian công cộng có điều hòa (thư viện, trung tâm thương mại) vào ban ngày. Đóng rèm cửa phía tây buổi chiều để giảm bức xạ.",
        "Không để trẻ em hoặc người già một mình trong xe ô tô: Nhiệt độ trong xe có thể tăng thêm 20°C chỉ sau 10 phút. Đây là nguyên nhân gây tử vong hàng đầu ở trẻ nhỏ vào mùa hè.",
        "Theo dõi sức khỏe người thân có nguy cơ cao: Gọi điện kiểm tra người già sống một mình ít nhất hai lần mỗi ngày trong đợt nắng nóng. Biết số điện thoại cấp cứu 115 và địa chỉ cơ sở y tế gần nhất.",
      ],
    },
    {
      type: "heading",
      content: "Xử Trí Khi Gặp Người Bị Say Nắng",
    },
    {
      type: "para",
      content: "Biết cách sơ cứu đúng có thể cứu sống người thân trong tình huống khẩn cấp. CDC khuyến cáo quy trình xử trí theo thứ tự sau:",
    },
    {
      type: "list",
      items: [
        "Bước 1 — Gọi 115 ngay nếu nghi ngờ sốc nhiệt (người lú lẫn, mất ý thức, thân nhiệt trên 40°C). Không chờ xem có tự khỏi không.",
        "Bước 2 — Chuyển người bệnh ngay vào nơi mát, thoáng gió, có bóng râm hoặc điều hòa.",
        "Bước 3 — Cởi bớt quần áo bên ngoài, nới lỏng cà vạt, thắt lưng, cúc áo.",
        "Bước 4 — Làm mát nhanh bằng nước: Lau toàn thân bằng khăn ướt mát. Đặt túi đá hoặc khăn lạnh lên vùng nách, háng, hai bên cổ — đây là nơi mạch máu lớn đi qua, làm mát hiệu quả nhất.",
        "Bước 5 — Cho uống nước từng ngụm nhỏ nếu người bệnh còn tỉnh táo và nuốt được. KHÔNG cho uống nếu đang mất ý thức.",
        "Bước 6 — Không cho uống rượu, bia hoặc bất kỳ loại đồ uống có cồn nào.",
        "Bước 7 — Theo dõi liên tục cho đến khi xe cấp cứu đến hoặc đến được cơ sở y tế.",
      ],
    },
    {
      type: "note",
      content: "Với kiệt sức do nhiệt (mức nhẹ): Sau khi nghỉ ngơi ở nơi mát, uống nước điện giải và làm mát cơ thể, hầu hết bệnh nhân hồi phục trong vòng 30 phút. Nếu sau 30 phút không cải thiện hoặc triệu chứng nặng hơn, phải đến cơ sở y tế ngay.",
    },
    {
      type: "heading",
      content: "Dinh Dưỡng Và Lối Sống Trong Mùa Nắng Nóng",
    },
    {
      type: "para",
      content: "Ngoài việc uống đủ nước, chế độ ăn uống và sinh hoạt hàng ngày cũng ảnh hưởng đáng kể đến khả năng chịu đựng nắng nóng của cơ thể. Một số điều chỉnh đơn giản nhưng hiệu quả:",
    },
    {
      type: "list",
      items: [
        "Ăn nhiều rau quả có hàm lượng nước cao: Dưa hấu, dưa leo, cà chua, cam, bưởi — vừa cung cấp nước vừa bổ sung vitamin và khoáng chất.",
        "Tránh ăn thực phẩm nhiều dầu mỡ vào bữa trưa: Tiêu hóa thực phẩm béo sinh nhiệt lớn, làm cơ thể nóng hơn.",
        "Ưu tiên bữa ăn nhẹ, chia nhiều bữa nhỏ: Giảm gánh nặng tiêu hóa trong thời tiết nóng.",
        "Bổ sung điện giải sau khi ra mồ hôi nhiều: Oresol pha đúng liều, nước dừa tươi hoặc nước có bổ sung muối khoáng — không phải nước lọc thuần túy khi mất mồ hôi nhiều.",
        "Tập thể dục vào sáng sớm (trước 8h) hoặc chiều tối (sau 17h30): Tránh hoàn toàn tập ngoài trời từ 10h đến 16h.",
        "Ngủ đủ giấc: Thiếu ngủ làm giảm khả năng điều nhiệt và tăng nguy cơ say nắng.",
      ],
    },
    {
      type: "heading",
      content: "Lưu Ý Đặc Biệt Cho Bệnh Nhân Đau Cột Sống Và Khớp",
    },
    {
      type: "para",
      content: "Với tư cách là bác sĩ chuyên khoa cột sống, tôi muốn nhấn mạnh một số điều đặc biệt quan trọng với nhóm bệnh nhân đang điều trị các bệnh lý xương khớp trong mùa nắng nóng:",
    },
    {
      type: "list",
      items: [
        "Không tập phục hồi chức năng ngoài trời trong nắng: Các bài tập đi bộ, đạp xe phục hồi sau phẫu thuật khớp gối hoặc cột sống phải thực hiện trong nhà có điều hòa hoặc vào lúc mát mẻ.",
        "Đau cơ tăng lên trong nắng nóng là dấu hiệu bình thường nhưng cần theo dõi: Nhiệt độ cao làm giãn mạch máu cơ, có thể gây đau nhức tạm thời. Tuy nhiên, nếu đau tăng đột ngột kèm nước tiểu màu nâu sẫm — đây là dấu hiệu tiêu cơ vân, cần đến cấp cứu ngay.",
        "Người đặt dụng cụ kim loại (vít, thanh nẹp cột sống, khớp nhân tạo): Kim loại không dẫn nhiệt đáng kể trong điều kiện sinh hoạt bình thường. Tuy nhiên, tránh tắm nắng kéo dài vùng phẫu thuật vừa mổ xong.",
        "Không ngưng thuốc loãng xương hay bệnh nền khi trời nóng: Hỏi bác sĩ về lịch uống thuốc phù hợp, đặc biệt với các thuốc cần uống kèm nhiều nước như Alendronate.",
      ],
    },
    {
      type: "heading",
      content: "Kết Luận",
    },
    {
      type: "para",
      content: "Nắng nóng cực đoan là mối nguy hiểm thực sự với sức khỏe — không phải chỉ gây khó chịu đơn thuần. Sốc nhiệt có tỷ lệ tử vong cao và để lại di chứng thần kinh nghiêm trọng ngay cả khi bệnh nhân qua khỏi. Tin tốt là hầu hết các trường hợp đều có thể phòng ngừa được bằng những biện pháp đơn giản: uống đủ nước, tránh nắng vào giờ cao điểm, làm mát môi trường sống và nhận biết sớm các dấu hiệu cảnh báo.",
    },
    {
      type: "para",
      content: "Hãy chia sẻ bài viết này đến người thân — đặc biệt những người cao tuổi, trẻ nhỏ và người đang điều trị bệnh mãn tính trong gia đình bạn. Trong mùa nắng nóng, sự quan tâm kịp thời của người xung quanh đôi khi có thể cứu sống một người.",
    },
    {
      type: "note",
      content: "Bài viết tổng hợp từ: Tổ chức Y tế Thế giới (WHO, 2025), CDC Hoa Kỳ, Bộ Y tế Việt Nam và các nghiên cứu lâm sàng đăng trên PubMed/NIH năm 2024–2025. Nếu bạn có thắc mắc cụ thể về sức khỏe trong nắng nóng, hãy liên hệ cơ sở y tế gần nhất hoặc gọi đường dây hỗ trợ y tế 1800 9095.",
    },
  ],

  "di-bo-dieu-chinh-goc-ban-chan-giam-dau-khop-goi": [
  {
    type: "para",
    content: "Một nghiên cứu lâm sàng ngẫu nhiên có đối chứng (RCT) vừa công bố trên tạp chí <em>The Lancet Rheumatology</em> tháng 8/2025 mang đến hy vọng mới cho hàng triệu bệnh nhân thoái hóa khớp gối: chỉ cần thay đổi góc bàn chân thêm 5–10 độ khi đi bộ — hướng vào trong hoặc ra ngoài tùy từng người — có thể giảm đau khớp gối đáng kể, làm chậm tổn thương sụn khớp và không có bất kỳ tác dụng phụ nào. Đây là công trình hợp tác của các nhà nghiên cứu tại NYU Langone Health, Đại học Utah và Đại học Stanford.",
  },
  {
    type: "heading",
    content: "Tại Sao Khớp Gối Bị Thoái Hóa? Hiểu Từ Góc Nhìn Sinh Cơ Học",
  },
  {
    type: "para",
    content: "Trong bước đi bình thường, khoang trong (medial compartment) của khớp gối phải chịu khoảng 60–80% tổng lực tải trọng cơ thể. Ở người có trục chi lệch vào trong (varus malalignment) hoặc dáng đi bất thường, lực này có thể tăng lên đến 80–100% tổng trọng lượng — gây ra tình trạng quá tải mạn tính, bào mòn sụn khớp và cuối cùng dẫn đến thoái hóa.",
  },
  {
    type: "para",
    content: "Thước đo quan trọng nhất trong đánh giá này là Knee Adduction Moment (KAM) — mô men lực tác động vào khoang trong khớp gối trong mỗi bước đi. KAM càng cao, sụn khoang trong mòn càng nhanh. Các yếu tố như góc tiến bàn chân (foot progression angle), chiều rộng bước chân, và độ lệch thân người đều có thể ảnh hưởng trực tiếp đến chỉ số KAM này.",
  },
  {
    type: "highlight",
    content: "\"Chúng tôi muốn tìm hiểu liệu thay đổi cách đặt bàn chân khi đi bộ có thể làm giảm lực tải quá mức lên khớp và hỗ trợ điều trị bệnh hay không.\" — TS. Valentina Mazzoli, PhD, Trưởng nhóm nghiên cứu, NYU Langone Health",
  },
  {
    type: "heading",
    content: "Nghiên Cứu Được Thực Hiện Như Thế Nào?",
  },
  {
    type: "para",
    content: "Nhóm nghiên cứu tuyển 68 bệnh nhân nam và nữ bị thoái hóa khớp gối mức độ nhẹ đến trung bình (khoang trong). Tất cả được phân tích dáng đi trên máy chạy bộ tại phòng thí nghiệm chuyên biệt, sử dụng phần mềm mô phỏng tính toán lực tải trọng tối đa tại khoang trong của mỗi người.",
  },
  {
    type: "list",
    items: [
      "Bước 1 — Mô hình hóa cá nhân: Máy tính tạo ra 4 mô hình bước chân mới cho mỗi bệnh nhân: xoay vào trong 5°, xoay vào trong 10°, xoay ra ngoài 5°, và xoay ra ngoài 10°. Góc nào giảm KAM nhiều nhất sẽ được chọn.",
      "Bước 2 — Tập luyện có hướng dẫn: Nhóm can thiệp (34 người) tham gia 6 buổi tập với chuyên gia vật lý trị liệu, học cách đi với góc bàn chân cá nhân hóa. Nhóm đối chứng (34 người) được khuyến khích đi bộ nhiều hơn mà không thay đổi cách đi.",
      "Bước 3 — Theo dõi 12 tháng: Điểm đau và chụp MRI tiên tiến được thực hiện ở đầu nghiên cứu và sau 1 năm để theo dõi cả triệu chứng lẫn cấu trúc sụn khớp.",
    ],
  },
  {
    type: "heading",
    content: "Kết Quả Nghiên Cứu: Những Con Số Ấn Tượng",
  },
  {
    type: "highlight",
    content: "✅ Các Kết Quả Chính Sau 12 Tháng — Thử nghiệm lâm sàng ngẫu nhiên có đối chứng, theo dõi 1 năm, công bố trên The Lancet Rheumatology 2025.",
  },
  {
    type: "list",
    items: [
      "Nhóm can thiệp giảm điểm đau trung bình 2,5 điểm trên thang 10 điểm — tương đương hiệu quả của thuốc giảm đau không kê đơn (paracetamol, ibuprofen).",
      "Nhóm đối chứng chỉ giảm được hơn 1 điểm đau mà không thay đổi cách đi.",
      "Nhóm can thiệp giảm lực tải trọng tối đa tại khớp gối 4% — trong khi nhóm đối chứng tăng tải trọng thêm hơn 3%.",
      "Hình ảnh MRI tiên tiến cho thấy nhóm điều chỉnh bước chân có tốc độ thoái hóa sụn chậm hơn ở khoang trong so với nhóm đối chứng.",
      "Không ghi nhận tác dụng phụ có hại nào trong suốt thời gian nghiên cứu.",
    ],
  },
  {
    type: "para",
    content: "Đây là thử nghiệm lâm sàng ngẫu nhiên có đối chứng đầu tiên trên thế giới chứng minh rằng điều chỉnh góc bàn chân theo từng cá nhân — không phải áp dụng một công thức chung — có thể giảm triệu chứng lâu dài và làm chậm tiến triển tổn thương sụn khớp gối.",
  },
  {
    type: "heading",
    content: "Cơ Chế Hoạt Động: Tại Sao Góc Bàn Chân Lại Quan Trọng?",
  },
  {
    type: "para",
    content: "Khi bàn chân xoay nhẹ vào trong (toe-in) hoặc ra ngoài (toe-out) so với hướng đi, hướng của lực phản lực mặt đất (ground reaction force) thay đổi tương đối với trục khớp gối. Điều này làm thay đổi cánh tay đòn (moment arm) của lực, từ đó trực tiếp giảm mô men lực tác động lên khoang trong. Tương tự nguyên lý cơ học — cùng một lực nhưng thay đổi điểm tác động sẽ thay đổi hoàn toàn áp suất tạo ra.",
  },
  {
    type: "para",
    content: "Điều quan trọng là mỗi người có một góc tối ưu riêng. Một số bệnh nhân đáp ứng tốt hơn với toe-in, một số khác với toe-out, và góc hiệu quả có thể là 5° hoặc 10°. Đây là lý do tại sao các nghiên cứu trước đây — áp dụng một góc cố định cho tất cả mọi người — không cho kết quả tích cực: tiếp cận \"một cỡ vừa tất cả\" không phù hợp với sinh cơ học cá thể.",
  },
  {
    type: "heading",
    content: "Quy Trình Thực Hiện Trong Thực Hành Lâm Sàng",
  },
  {
    type: "list",
    items: [
      "Bước 1 — Phân tích dáng đi (Gait Analysis): Bệnh nhân được đánh giá bởi bác sĩ vật lý trị liệu hoặc chuyên gia phục hồi chức năng, sử dụng hệ thống phân tích chuyển động (motion capture) hoặc phần mềm AI phân tích video từ điện thoại thông minh để đo KAM theo các tư thế bàn chân khác nhau.",
      "Bước 2 — Xác định góc tối ưu cá nhân: Chọn góc (5° hoặc 10°; vào trong hoặc ra ngoài) tạo ra mức giảm KAM lớn nhất cho từng bệnh nhân cụ thể.",
      "Bước 3 — Tập luyện có hướng dẫn (6 buổi): Bệnh nhân tập đi với góc mới dưới sự giám sát của chuyên gia, sử dụng phản hồi trực quan (gương, vạch kẻ sàn, hoặc cảm biến) để giúp nhận biết và duy trì tư thế đúng. Mục tiêu ít nhất 20 phút/ngày.",
      "Bước 4 — Hình thành thói quen (4–6 tuần): Qua tập luyện lặp lại, cách đi mới dần trở thành phản xạ tự động, không cần phải chú tâm chỉnh sửa trong từng bước.",
      "Bước 5 — Duy trì và theo dõi: Tiếp tục duy trì cách đi trong sinh hoạt hàng ngày; tái đánh giá định kỳ để theo dõi tiến triển lâm sàng.",
    ],
  },
  {
    type: "heading",
    content: "Ứng Dụng AI Trong Phân Tích Dáng Đi: Bước Tiến Quan Trọng",
  },
  {
    type: "para",
    content: "Một trong những rào cản lớn nhất của phương pháp này là yêu cầu phòng thí nghiệm chuyên biệt để phân tích dáng đi — điều không phải cơ sở y tế nào cũng có. Tuy nhiên, TS. Mazzoli cho biết hiện đã có phần mềm AI phân tích lực tải khớp thông qua video điện thoại thông minh, giúp bác sĩ lâm sàng có thể thực hiện phân tích dáng đi ngay tại phòng khám. Đây là bước đột phá giúp phổ cập hóa phương pháp điều trị không xâm lấn này.",
  },
  {
    type: "heading",
    content: "So Sánh Với Các Phương Pháp Điều Trị Thoái Hóa Khớp Gối Hiện Tại",
  },
  {
    type: "list",
    items: [
      "Thuốc giảm đau (NSAIDs, paracetamol): Giảm triệu chứng nhưng không điều trị nguyên nhân, có thể gây tổn thương dạ dày, gan, thận khi dùng lâu dài.",
      "Tiêm corticosteroid: Giảm viêm tạm thời, không ngăn tiến triển bệnh, không thể thực hiện quá 3–4 lần/năm.",
      "Phẫu thuật thay khớp gối: Hiệu quả cao ở giai đoạn cuối nhưng là can thiệp lớn, có nguy cơ biến chứng, và tuổi thọ khớp nhân tạo có giới hạn (15–20 năm).",
      "Điều chỉnh dáng đi cá nhân hóa: Không xâm lấn, không tác dụng phụ, giảm đau tương đương thuốc OTC, có bằng chứng làm chậm tiến triển sụn — phù hợp cho giai đoạn nhẹ đến trung bình.",
    ],
  },
  {
    type: "heading",
    content: "Ai Là Đối Tượng Phù Hợp Nhất?",
  },
  {
    type: "list",
    items: [
      "Bệnh nhân thoái hóa khớp gối khoang trong mức độ nhẹ đến trung bình (Kellgren-Lawrence độ 1–3).",
      "Người muốn trì hoãn hoặc tránh phẫu thuật thay khớp.",
      "Bệnh nhân không thể dùng thuốc kháng viêm lâu dài do bệnh nền (loét dạ dày, suy thận, bệnh tim mạch).",
      "Người đang trong chương trình phục hồi chức năng sau can thiệp khớp gối.",
      "Người có nguy cơ cao thoái hóa khớp gối muốn phòng ngừa sớm (thừa cân, vận động viên, người lao động nặng).",
    ],
  },
  {
    type: "warning",
    content: "⚠️ Những trường hợp cần thận trọng: (1) Thoái hóa khớp gối giai đoạn nặng (Kellgren-Lawrence độ 4) — hiệu quả hạn chế, cần đánh giá lại chỉ định phẫu thuật. (2) Biến dạng trục chi nặng (varus/valgus lớn, sau chấn thương) — cần đánh giá chỉnh hình trước. (3) Bệnh lý thần kinh ảnh hưởng dáng đi (Parkinson, đột quỵ, viêm đa khớp dạng thấp nặng) — cần cá thể hóa thêm. (4) KHÔNG tự ý điều chỉnh góc bàn chân mà không có gait analysis chính thức — sai góc có thể tăng tải trọng lên khoang khớp khác hoặc gây đau cổ chân, hông.",
  },
  {
    type: "heading",
    content: "Hướng Nghiên Cứu Tiếp Theo",
  },
  {
    type: "para",
    content: "Nhóm nghiên cứu đang lên kế hoạch mở rộng nghiên cứu sang bệnh nhân béo phì — nhóm có nguy cơ thoái hóa khớp gối đặc biệt cao do tải trọng cơ thể lớn. Họ cũng sẽ kiểm tra tính chính xác của các ứng dụng AI phân tích dáng đi qua điện thoại thông minh trong việc xác định góc bàn chân tối ưu cho từng bệnh nhân, hướng đến phổ cập hóa phương pháp này tại các phòng khám không có phòng thí nghiệm chuyên biệt.",
  },
  {
    type: "heading",
    content: "Tài Liệu Tham Khảo",
  },
  {
    type: "list",
    items: [
      "Mazzoli V, Uhlrich S, Kolesar J, et al. <em>Personalised gait retraining for medial compartment knee osteoarthritis: a randomised controlled trial.</em> The Lancet Rheumatology. August 12, 2025. DOI: 10.1016/S2665-9913(25)00151-1",
      "NYU Langone News. <em>Study Reveals How Small Changes in Walking Technique May Help Treat Knee Osteoarthritis.</em> August 13, 2025. nyulangone.org",
      "Harvard Health Publishing. <em>Correcting how you walk may ease osteoarthritis knee pain.</em> health.harvard.edu",
      "Shull PB et al. <em>Six-week gait retraining program reduces knee adduction moment, reduces pain, and improves function for individuals with medial compartment knee osteoarthritis.</em> PubMed PMID: 23494804",
      "ScienceDaily. <em>Scientists discover simple way to relieve arthritis pain without pills or surgery.</em> May 2026.",
    ],
  },
  {
    type: "note",
    content: "Bài viết này được biên soạn với mục đích cung cấp thông tin y khoa tổng quát, không thay thế cho việc thăm khám và tư vấn trực tiếp bởi bác sĩ chuyên khoa. Phương pháp điều chỉnh dáng đi cần được chỉ định và hướng dẫn bởi bác sĩ vật lý trị liệu hoặc chuyên gia phục hồi chức năng sau khi đánh giá lâm sàng đầy đủ. Nếu bạn có triệu chứng đau khớp gối, hãy đến gặp bác sĩ chuyên khoa xương khớp hoặc cột sống để được tư vấn phù hợp.",
  },
],

  "tu-y-bo-thuoc-loang-xuong": [
    {
      type: "para",
      content:
        "Loãng xương là bệnh mạn tính — điều trị không tính bằng tuần hay tháng, mà thường kéo dài nhiều năm. Thế nhưng trong thực tế lâm sàng, rất nhiều bệnh nhân tự ý bỏ thuốc giữa chừng mà không thông báo cho bác sĩ. Đây là một quyết định tiềm ẩn nguy hiểm nghiêm trọng, đặc biệt với một số nhóm thuốc điều trị hiện đại.",
    },
    {
      type: "heading",
      content: "Tại sao bệnh nhân thường tự ý bỏ thuốc?",
    },
    {
      type: "list",
      items: [
        "Cảm thấy 'đỡ rồi, không đau nữa' — không nhận ra loãng xương là bệnh thầm lặng, không triệu chứng cho đến khi gãy xương",
        "Sợ tác dụng phụ: đau khớp, buồn nôn, lo lắng về 'hoại tử xương hàm' đọc được trên mạng",
        "Chi phí điều trị dài hạn gây gánh nặng kinh tế",
        "Quên uống nhiều lần rồi bỏ hẳn",
        "Tự mua thuốc, không theo dõi định kỳ, không có bác sĩ quản lý",
        "Nghe người quen khuyên 'uống nhiều thuốc hại thận, hại gan'",
      ],
    },
    {
      type: "heading",
      content: "Các nhóm thuốc điều trị loãng xương hiện nay",
    },
    {
      type: "para",
      content:
        "Có nhiều nhóm thuốc điều trị loãng xương với cơ chế khác nhau: Bisphosphonates (alendronate, zoledronate, ibandronate), Denosumab (Prolia®), Teriparatide / Abaloparatide (thuốc tăng tạo xương), Romosozumab, và các thuốc nội tiết như Raloxifene. Mỗi nhóm có đặc điểm dược lý riêng — điều này quyết định mức độ nguy hiểm khi ngưng thuốc đột ngột.",
    },
    {
      type: "heading",
      content: "Nguy cơ cụ thể khi tự ý ngưng từng nhóm thuốc",
    },
    {
      type: "heading",
      content: "⚠️ Bisphosphonates (Alendronate, Zoledronate...)",
    },
    {
      type: "warning",
      content: "Thuốc tích lũy trong xương và có tác dụng kéo dài sau khi ngưng — nhưng tự ý ngưng không theo dõi khiến bác sĩ mất cơ hội đánh giá lại mật độ xương. Với bệnh nhân nguy cơ cao (T-score rất thấp, đã gãy xương), ngưng thuốc làm mất lớp bảo vệ tái tạo xương. Không được tự ý kéo dài thời gian 'nghỉ thuốc' vì nguy cơ gãy xương tăng trở lại.",
    },
    {
      type: "heading",
      content: "🚨 Denosumab (Prolia®) — NGUY HIỂM NHẤT nếu ngưng đột ngột",
    },
    {
      type: "warning",
      content: "Denosumab ức chế tiêu xương bằng cách chặn RANKL — nhưng tác dụng chỉ kéo dài 6 tháng (chu kỳ tiêm). Khi ngưng: RANKL bùng phát trở lại → tiêu xương xảy ra với tốc độ rất nhanh, mật độ xương giảm mạnh chỉ sau 6–12 tháng. Đã có nhiều báo cáo bệnh nhân gãy đồng thời nhiều đốt sống (multiple vertebral fractures) chỉ vì trễ 1–2 mũi tiêm. Nếu muốn ngưng Denosumab, BẮT BUỘC phải chuyển tiếp sang Bisphosphonate theo hướng dẫn của bác sĩ.",
    },
    {
      type: "para",
      content:
        "Hiện tượng 'rebound' sau ngưng Denosumab là một trong những vấn đề được nghiên cứu và cảnh báo nhiều nhất trong y văn về loãng xương. Đây không phải lý thuyết — đây là biến chứng thực tế xảy ra trên bệnh nhân ngoài đời thực, thường gặp ở phụ nữ sau mãn kinh có loãng xương nặng.",
    },
    {
      type: "heading",
      content: "⚠️ Teriparatide / Romosozumab (thuốc tăng tạo xương)",
    },
    {
      type: "warning",
      content: "Đây là thuốc 'xây dựng xương mới' — tác dụng phụ thuộc hoàn toàn vào thời gian dùng thuốc. Khi ngưng đột ngột: phần xương mới tạo thành sẽ bị tiêu dần nếu không được duy trì bằng thuốc chống tiêu xương tiếp theo. Ngưng giữa chừng đồng nghĩa với lãng phí toàn bộ quá trình điều trị. Phải ngưng theo lộ trình có bác sĩ theo dõi và chuyển tiếp phác đồ phù hợp.",
    },
    {
      type: "highlight",
      content:
        "Với loãng xương, cảm giác 'không đau = đã khỏi' là sai lầm nguy hiểm. Xương mỏng dần không gây đau — cho đến khi gãy.",
    },
    {
      type: "heading",
      content: "Gãy xương do rebound: Con số đáng lo ngại",
    },
    {
      type: "para",
      content:
        "Trong các nghiên cứu quan sát và hồi cứu tại châu Âu và Nhật Bản, tỷ lệ gãy đốt sống mới sau ngưng Denosumab không đúng chỉ định lên đến 10–15% trong vòng 18 tháng. Nhiều trường hợp gãy 3–5 đốt sống đồng thời, gây đau dữ dội, biến dạng cột sống, và giảm chiều cao đột ngột. Đây là những ca cấp cứu cột sống thực sự — có thể phòng tránh hoàn toàn nếu bệnh nhân không tự ý bỏ thuốc.",
    },
    {
      type: "heading",
      content: "Điều bệnh nhân cần làm thay vì tự ý bỏ thuốc",
    },
    {
      type: "highlight",
      content: "✅ Hành động đúng: Liên hệ bác sĩ điều trị trước khi ngưng — có thể gọi điện hoặc nhắn tin, không cần khám trực tiếp. Nếu lo tác dụng phụ, hãy mô tả cụ thể để bác sĩ đánh giá. Nếu khó khăn tài chính, hỏi về phác đồ thay thế chi phí thấp hơn. Tái khám đúng hẹn và đo DXA định kỳ để bác sĩ có căn cứ điều chỉnh.",
    },
    {
      type: "list",
      items: [
        "Liên hệ bác sĩ ngay khi có ý định ngưng thuốc — gọi điện hoặc nhắn tin đều được",
        "Mô tả cụ thể tác dụng phụ nghi ngờ để bác sĩ đánh giá có thực sự liên quan không",
        "Hỏi bác sĩ về phác đồ thay thế chi phí thấp hơn nếu gặp khó khăn tài chính",
        "Thiết lập báo thức điện thoại hoặc nhờ người thân nhắc nếu hay quên uống thuốc",
        "Tái khám đúng hẹn, đo mật độ xương DXA mỗi 1–2 năm để theo dõi hiệu quả điều trị",
        "Không tự ý tăng hoặc giảm liều dựa trên cảm giác chủ quan",
      ],
    },
    {
      type: "heading",
      content: "Khi nào bác sĩ mới quyết định ngưng thuốc?",
    },
    {
      type: "para",
      content:
        "Việc ngưng hoặc thay đổi thuốc điều trị loãng xương là một quyết định y khoa dựa trên nhiều yếu tố: mật độ xương hiện tại (DXA), nguy cơ gãy xương 10 năm (FRAX score), thời gian đã dùng thuốc, và các bệnh lý kèm theo. Bác sĩ cũng cân nhắc 'drug holiday' có chọn lọc cho bisphosphonates sau 5 năm — nhưng đây là quyết định lâm sàng có kiểm soát, không phải bệnh nhân tự quyết.",
    },
    {
      type: "list",
      items: [
        "Sau 3–5 năm dùng bisphosphonate uống hoặc 3 năm dùng zoledronate IV, bác sĩ có thể xem xét 'nghỉ thuốc' 1–2 năm nếu nguy cơ gãy xương thấp",
        "Denosumab KHÔNG có 'drug holiday' — phải dùng liên tục hoặc chuyển tiếp sang bisphosphonate khi muốn dừng",
        "Teriparatide và Romosozumab có giới hạn thời gian dùng tối đa (18–24 tháng), sau đó phải chuyển thuốc theo chỉ định",
        "Bệnh nhân có biến chứng nghiêm trọng (hoại tử xương hàm, gãy xương không điển hình) mới cần ngưng khẩn cấp — và vẫn phải có sự hướng dẫn của bác sĩ",
      ],
    },
    {
      type: "note",
      content:
        "Bài viết mang tính giáo dục sức khỏe cộng đồng, không thay thế cho thăm khám và tư vấn trực tiếp của bác sĩ. Mỗi bệnh nhân có hồ sơ bệnh lý riêng — quyết định điều trị cần được cá thể hóa. Nếu bạn đang dùng thuốc điều trị loãng xương và có bất kỳ lo ngại nào, hãy liên hệ bác sĩ điều trị của mình trước khi thay đổi bất cứ điều gì.",
    },
  ],

  "canh-bao-thuoc-dau-cot-song-khong-ro-nguon-goc": [
    { type: "heading", content: "⚠️ CẢNH BÁO Y TẾ QUAN TRỌNG" },
    { type: "warning", content: "Nhiều loại thuốc gia truyền, thuốc 'nam' trị đau xương khớp và đau cột sống đang lưu hành trên thị trường KHÔNG có đăng ký của Bộ Y tế. Phân tích thực tế cho thấy một số sản phẩm chứa corticosteroid (dexamethasone, prednisolone...) liều cao được pha trộn bí mật — người bệnh không hề biết mình đang dùng corticoid." },
    { type: "image", src: "/images/vien-thuoc-den-khong-nhan-mac.jpg", alt: "Viên thuốc màu đen không rõ nguồn gốc", caption: "Viên thuốc màu đen, đóng gói thô sơ, không nhãn mác hợp lệ", subcaption: "Không xác định được thành phần, không kiểm soát liều lượng — cực kỳ nguy hiểm" },
    { type: "heading", content: "🦴 TẠI SAO NHỮNG LOẠI THUỐC NÀY LẠI 'HIỆU QUẢ' NHANH?" },
    { type: "para", content: "Nhiều bệnh nhân phản hồi 'uống vào hết đau ngay', 'hiệu quả hơn cả thuốc bệnh viện'. Đây chính là dấu hiệu nguy hiểm nhất. Corticosteroid liều cao có tác dụng kháng viêm và giảm đau cực nhanh — nhưng cái giá phải trả về lâu dài là vô cùng đắt." },
    { type: "list", items: ["Corticosteroid ức chế mạnh phản ứng viêm → giảm đau tức thì.", "Người bệnh lầm tưởng 'thuốc hay', tiếp tục uống hàng tuần, hàng tháng, thậm chí hàng năm.", "Cơ thể quen với corticoid ngoại sinh → tuyến thượng thận ngưng sản xuất cortisol nội sinh.", "Khi ngưng thuốc đột ngột hoặc khi stress/phẫu thuật → suy vỏ tuyến thượng thận cấp, đe dọa tính mạng."] },
    { type: "heading", content: "🩺 SUY VỎ TUYẾN THƯỢNG THẬN DO CORTICOSTEROID" },
    { type: "para", content: "Vỏ tuyến thượng thận bình thường sản xuất cortisol — hormone thiết yếu giúp cơ thể đối phó với stress, duy trì huyết áp và điều hòa đường huyết. Khi dùng corticosteroid từ bên ngoài kéo dài, cơ chế phản hồi âm tính HPA (Hypothalamus-Pituitary-Adrenal) bị ức chế hoàn toàn." },
    { type: "warning", content: "TRIỆU CHỨNG CẦN NHẬN BIẾT: Mệt mỏi kéo dài — Chán ăn, sụt cân, buồn nôn — Huyết áp thấp, chóng mặt khi đứng dậy — Da sạm màu — Khi stress hoặc phẫu thuật: tụt huyết áp đột ngột, sốc (Addisonian Crisis) — đây là tình trạng nguy hiểm tính mạng." },
    { type: "heading", content: "💀 LOÃNG XƯƠNG — HẬU QUẢ TRỰC TIẾP CỦA CORTICOSTEROID KÉO DÀI" },
    { type: "para", content: "Corticosteroid là một trong những nguyên nhân hàng đầu gây loãng xương thứ phát (Glucocorticoid-Induced Osteoporosis — GIOP). Đặc biệt nguy hiểm với bệnh nhân đã có sẵn loãng xương nguyên phát — thuốc điều trị loãng xương sẽ hoàn toàn không có tác dụng khi vẫn tiếp tục dùng kèm corticoid." },
    { type: "list", items: ["Corticoid ức chế tạo cốt bào (osteoblast) → giảm tạo xương mới.", "Tăng hoạt động hủy cốt bào (osteoclast) → xương bị phá hủy nhanh hơn.", "Giảm hấp thu canxi tại ruột, tăng thải canxi qua thận.", "Ức chế trục GH-IGF1, giảm testosterone/estrogen → mất xương toàn thân.", "Chỉ 3-6 tháng dùng corticoid → mật độ xương giảm đáng kể, nguy cơ gãy xẹp đốt sống tăng gấp đôi."] },
    { type: "highlight", content: "⚡ VÒNG LUẨN QUẨN NGUY HIỂM NHẤT: Bệnh nhân loãng xương đang điều trị bisphosphonate/denosumab mà vẫn dùng kèm corticoid ẩn → MỌI ĐIỀU TRỊ LOÃNG XƯƠNG ĐỀU VÔ HIỆU." },
    { type: "heading", content: "🔍 DẤU HIỆU NHẬN BIẾT THUỐC ĐÁ NGỜ" },
    { type: "list", items: ["Giảm đau RẤT NHANH trong 1-3 ngày đầu (không thuốc thảo dược nào tác dụng nhanh như vậy).", "Cảm giác 'phấn chấn', ăn ngon, ngủ ngon bất thường.", "Tăng cân, phù mặt tròn, bướu mỡ sau gáy.", "Da mỏng, xuất hiện vết rạn, dễ bầm tím.", "Tăng huyết áp, tăng đường huyết.", "Khi ngưng thuốc: đau dữ dội hơn trước (hội chứng cai corticoid)."] },
    { type: "list", items: ["Không có số đăng ký Bộ Y tế (dãy số VD-XXXXX-XX).", "Không ghi rõ thành phần hoạt chất, hàm lượng.", "Nhãn mác in chữ nước ngoài không dịch thuật.", "Đóng gói thủ công, không tem chống hàng giả.", "Mua qua mạng xã hội, không hóa đơn, không địa chỉ sản xuất rõ ràng."] },
    { type: "heading", content: "👨‍⚕️ KHUYẾN CÁO CỦA BÁC SĨ CỘT SỐNG" },
    { type: "para", content: "Trong thực hành lâm sàng, chúng tôi thường xuyên gặp bệnh nhân nhập viện với bộ ba: (1) đau cột sống nặng hơn, (2) loãng xương tiến triển không đáp ứng điều trị, (3) cortisol máu buổi sáng rất thấp — tất cả đều có tiền sử dùng 'thuốc gia truyền' kéo dài. Đây là hậu quả trực tiếp của corticoid ẩn trong thuốc không rõ nguồn gốc." },
    { type: "list", items: ["KHÔNG tự ý dùng bất kỳ thuốc nào không có số đăng ký Bộ Y tế.", "KHÔNG ngưng đột ngột nếu đã dùng lâu — cần gặp bác sĩ để được hỗ trợ cai corticoid đúng cách.", "Nếu nghi ngờ đã dùng corticoid dài ngày: xét nghiệm cortisol máu buổi sáng, ACTH, đo mật độ xương (DXA).", "Thông báo cho bác sĩ tất cả thuốc đang dùng kể cả thuốc nam, gia truyền, thực phẩm chức năng.", "Điều trị đau cột sống đúng nguyên nhân: thăm khám, X-quang/MRI, điều trị theo phác đồ chuẩn."] },
    { type: "highlight", content: "📞 Nếu bạn hoặc người thân đang dùng thuốc đau lưng không rõ nguồn gốc — hãy tham khảo ý kiến bác sĩ TRƯỚC KHI ngưng thuốc đột ngột. Ngưng corticoid đột ngột sau dùng dài ngày có thể gây nguy hiểm tính mạng." },
    { type: "note", content: "Bài viết mang tính chất giáo dục sức khỏe cộng đồng. Mọi quyết định điều trị cần dựa trên thăm khám trực tiếp và chỉ định của bác sĩ chuyên khoa. Nếu bạn có triệu chứng nghi ngờ suy vỏ tuyến thượng thận hoặc loãng xương, hãy đến cơ sở y tế để được kiểm tra và tư vấn cụ thể." }
  ],

  "chan-doan-loang-xuong-phuong-phap-va-doi-tuong": [
    { type: "para", content: "Bà L.T.M., 58 tuổi, đến khám vì đau lưng âm ỉ hơn 3 tháng. Bà vẫn đi làm bình thường, không nghĩ mình bị gì nặng. Kết quả đo mật độ xương cho thấy T-score -2.8 — loãng xương mức độ nặng, đốt sống đã bắt đầu mất cấu trúc. Nếu không được chẩn đoán lúc này, cú ngã đầu tiên có thể là cú ngã thay đổi cả cuộc đời." },
    { type: "heading", content: "Tại sao phải chẩn đoán sớm?" },
    { type: "para", content: "Loãng xương là căn bệnh hoàn toàn không có triệu chứng trong giai đoạn đầu và giữa. Người bệnh không đau, không tê, không hạn chế vận động — cho đến khi xương gãy. Nghịch lý là: vào thời điểm gãy xương xảy ra, bệnh đã tiến triển âm thầm từ nhiều năm trước. Chẩn đoán sớm — trước khi gãy xương — là cơ hội duy nhất để điều trị hiệu quả và ngăn ngừa hậu quả nghiêm trọng." },
    { type: "highlight", content: "Loãng xương không gây đau — nhưng gãy xương do loãng xương thì gây đau rất nhiều. Mục tiêu của chẩn đoán sớm là ngăn cú gãy xương đầu tiên đó xảy ra." },

    { type: "heading", content: "Phương pháp chẩn đoán chuẩn: Đo mật độ xương bằng DXA" },
    { type: "para", content: "DXA (Dual-energy X-ray Absorptiometry — đo hấp thụ tia X năng lượng kép) là tiêu chuẩn vàng trong chẩn đoán loãng xương, được WHO và các hội y khoa quốc tế khuyến cáo sử dụng rộng rãi. Máy DXA đo mật độ khoáng của xương (Bone Mineral Density — BMD) tại hai vị trí quan trọng nhất: cột sống thắt lưng và cổ xương đùi." },
    { type: "list", items: [
      "Thời gian đo: 10–20 phút, không xâm lấn, không gây đau",
      "Liều phóng xạ rất thấp — thấp hơn nhiều lần so với chụp X-quang thường quy",
      "Kết quả cho ra chỉ số T-score để phân loại tình trạng xương",
      "Có thể theo dõi đáp ứng điều trị qua các lần đo định kỳ",
    ]},

    { type: "heading", content: "Đọc kết quả T-score như thế nào?" },
    { type: "para", content: "T-score là chỉ số so sánh mật độ xương của bạn với mật độ xương trung bình của người trưởng thành khỏe mạnh ở độ tuổi đỉnh cao (khoảng 25–30 tuổi). Theo tiêu chuẩn WHO:" },
    { type: "list", items: [
      "T-score từ -1.0 trở lên: Xương bình thường",
      "T-score từ -1.0 đến -2.5: Thiếu xương (osteopenia) — cảnh báo sớm, cần can thiệp dự phòng",
      "T-score từ -2.5 trở xuống: Loãng xương (osteoporosis) — cần điều trị",
      "T-score từ -2.5 trở xuống kèm tiền sử gãy xương: Loãng xương nặng — nguy cơ cao nhất",
    ]},
    { type: "highlight", content: "T-score -2.5 không có nghĩa là xương yếu gấp 2.5 lần. Nó có nghĩa là mật độ xương của bạn thấp hơn 2.5 độ lệch chuẩn so với người trẻ khỏe mạnh — và nguy cơ gãy xương tăng lên đáng kể." },

    { type: "heading", content: "Công cụ đánh giá nguy cơ gãy xương: FRAX" },
    { type: "para", content: "FRAX (Fracture Risk Assessment Tool) là công cụ trực tuyến của WHO, tích hợp nhiều yếu tố nguy cơ để tính xác suất gãy xương trong 10 năm tới. FRAX đặc biệt hữu ích khi kết quả DXA nằm trong vùng 'thiếu xương' — ranh giới giữa cần và chưa cần điều trị thuốc." },
    { type: "list", items: [
      "Tuổi, giới tính, cân nặng và chiều cao",
      "Tiền sử gãy xương cá nhân và gia đình",
      "Hút thuốc lá, uống rượu bia",
      "Sử dụng corticosteroid kéo dài",
      "Mắc bệnh viêm khớp dạng thấp",
      "Kết quả DXA cổ xương đùi (nếu có)",
    ]},
    { type: "para", content: "Kết quả FRAX cho biết xác suất phần trăm gãy xương hông và gãy xương lớn trong 10 năm tới. Nhiều hướng dẫn điều trị quốc tế sử dụng ngưỡng FRAX để quyết định bắt đầu điều trị thuốc hay chưa." },

    { type: "heading", content: "Các phương pháp bổ sung khác" },
    { type: "para", content: "Ngoài DXA và FRAX, một số phương pháp khác có thể cung cấp thêm thông tin trong các tình huống cụ thể:" },
    { type: "list", items: [
      "Hounsfield Unit (HU) trên CT scan: Đo mật độ xương tại vị trí phẫu thuật, đặc biệt hữu ích khi đánh giá trước mổ cột sống. HU dưới 110 tại thân đốt sống là dấu hiệu nguy cơ cao cho biến chứng sau phẫu thuật.",
      "Siêu âm xương gót (QUS): Không dùng tia X, thiết bị nhỏ gọn, chi phí thấp — phù hợp tầm soát ban đầu ở vùng thiếu máy DXA. Tuy nhiên, không thay thế được DXA để chẩn đoán chính xác.",
      "X-quang cột sống thường quy: Không đủ nhạy để phát hiện loãng xương sớm, nhưng giúp phát hiện gãy xẹp đốt sống đã xảy ra — thường là dấu hiệu đầu tiên người bệnh mới biết mình có loãng xương.",
      "Xét nghiệm máu và nước tiểu: Canxi, phospho, vitamin D, PTH, marker chuyển hóa xương (CTX, P1NP) — hỗ trợ tìm nguyên nhân thứ phát và theo dõi điều trị, không phải để chẩn đoán loãng xương.",
    ]},

    { type: "heading", content: "Ai nên được kiểm tra loãng xương?" },
    { type: "para", content: "Không phải ai cũng cần đo mật độ xương ngay. Dưới đây là các nhóm được khuyến cáo tầm soát chủ động theo hướng dẫn của Tổ chức Loãng xương Quốc tế (IOF) và Hội Nội tiết Mỹ:" },
    { type: "list", items: [
      "Phụ nữ từ 65 tuổi trở lên — tầm soát thường quy ngay cả khi không có triệu chứng",
      "Phụ nữ sau mãn kinh dưới 65 tuổi nếu có ít nhất một yếu tố nguy cơ (gãy xương sau chấn thương nhẹ, tiền sử gia đình, BMI thấp, hút thuốc, uống rượu)",
      "Nam giới từ 70 tuổi trở lên",
      "Nam giới 50–70 tuổi nếu có yếu tố nguy cơ cao (dùng corticosteroid, bệnh mạn tính ảnh hưởng xương)",
      "Người đã từng gãy xương sau chấn thương nhẹ (ngã từ tư thế đứng trở xuống)",
      "Người dùng corticosteroid toàn thân liều tương đương prednisone ≥5mg/ngày từ 3 tháng trở lên",
      "Người mắc bệnh có ảnh hưởng đến chuyển hóa xương: cường giáp, cường tuyến cận giáp, viêm khớp dạng thấp, bệnh Crohn, suy thận mạn",
      "Người đang hoặc đã điều trị loãng xương — để đánh giá đáp ứng và điều chỉnh liệu trình",
    ]},

    { type: "heading", content: "Dấu hiệu gợi ý cần đi kiểm tra sớm hơn" },
    { type: "para", content: "Ngay cả khi bạn chưa thuộc nhóm tuổi được khuyến cáo tầm soát thường quy, hãy chủ động đi khám nếu có bất kỳ dấu hiệu nào dưới đây:" },
    { type: "list", items: [
      "Chiều cao giảm hơn 2–3 cm so với khi còn trẻ",
      "Lưng ngày càng khom gù không giải thích được",
      "Đau lưng cấp tính xuất hiện sau một động tác nhỏ như cúi người, ho mạnh, hắt hơi",
      "Gãy xương sau chấn thương mà người khác không gãy — nhất là cổ tay, hông, cột sống",
      "Mãn kinh sớm trước 45 tuổi hoặc cắt buồng trứng hai bên",
    ]},
    { type: "warning", content: "Đau lưng cấp tính xuất hiện đột ngột ở người trên 50 tuổi, đặc biệt phụ nữ sau mãn kinh, sau một cử động nhỏ — cần nghĩ đến gãy xẹp đốt sống do loãng xương và đi khám ngay, không nên tự điều trị tại nhà." },

    { type: "heading", content: "Tần suất kiểm tra bao lâu một lần?" },
    { type: "para", content: "Tần suất đo DXA phụ thuộc vào kết quả và yếu tố nguy cơ:" },
    { type: "list", items: [
      "Xương bình thường, ít yếu tố nguy cơ: đo lại sau 2–3 năm",
      "Thiếu xương (T-score -1.0 đến -2.5): đo lại sau 1–2 năm tùy yếu tố nguy cơ",
      "Đang điều trị loãng xương: đo lại sau 1–2 năm để đánh giá đáp ứng",
      "Dùng corticosteroid liều cao kéo dài: có thể cần đo sau 6–12 tháng",
    ]},

    { type: "highlight", content: "Chẩn đoán loãng xương không phải để gây lo lắng — mà để có cơ sở hành động sớm. Biết T-score của mình là thông tin bảo vệ bạn, không phải bản án." },

    { type: "note", content: "Bài viết mang tính giáo dục sức khỏe tổng quát, không thay thế tư vấn y tế trực tiếp. Việc chỉ định đo mật độ xương và giải thích kết quả cần được thực hiện bởi bác sĩ có chuyên môn dựa trên tình trạng cụ thể của từng người bệnh." },
  ],

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
      return <p key={index} className="text-[15.5px] font-light leading-[1.85] text-gray-500 mb-5" dangerouslySetInnerHTML={{ __html: block.content }} />;
    case "list":
      return (
        <ul key={index} className="list-none mb-6 space-y-2.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[15px] font-light text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2.5 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div key={index} className="my-6 border-l-[3px] border-navy pl-5 py-1">
          <p className="font-serif-brand text-[17px] font-normal italic text-navy leading-relaxed" dangerouslySetInnerHTML={{ __html: block.content }} />
        </div>
      );
    case "warning":
      return (
        <div key={index} className="my-6 p-4 bg-yellow-50 border border-yellow-200 border-l-[3px] border-l-brand-gold text-[13.5px] text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: block.content }} />
      );
    case "note":
      return (
        <div key={index} className="mt-8 p-4 bg-brand-gold-lt border-l-[3px] border-brand-gold text-[13px] font-light text-gray-600">
          <strong className="font-semibold text-gray-700">Lưu ý: </strong><span dangerouslySetInnerHTML={{ __html: block.content }} />
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
