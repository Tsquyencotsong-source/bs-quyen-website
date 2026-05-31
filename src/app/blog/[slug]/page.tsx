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

  "phuc-hoi-sau-kyphoplasty-tap-luyen": [
    { type: "para", content: "Ông N.V.T., 76 tuổi, vừa được thực hiện kỹ thuật tạo hình thân đốt sống bằng bơm xi măng (kyphoplasty) tại BV TWQĐ 108. Trước thủ thuật, ông không thể đi lại vì đau quá. Chỉ 24 giờ sau, cơn đau giảm rõ rệt và ông bắt đầu ngồi dậy được. Nhưng câu hỏi tiếp theo của gia đình là: 'Bây giờ ông có thể tập gì? Bao giờ đi bộ được? Cần kiêng những gì?'" },
    { type: "highlight", content: "Kyphoplasty giúp giảm đau nhanh chóng — nhưng đó mới là khởi đầu, không phải điểm kết thúc. Phục hồi chức năng đúng cách sau thủ thuật quyết định chất lượng cuộc sống lâu dài của người bệnh." },
    { type: "heading", content: "Kyphoplasty là gì và tại sao vẫn cần tập luyện sau đó?" },
    { type: "para", content: "Kyphoplasty (tạo hình thân đốt sống có bơm bóng) và vertebroplasty (bơm xi măng trực tiếp) là hai kỹ thuật ít xâm lấn giúp ổn định đốt sống bị xẹp bằng xi măng sinh học. Sau thủ thuật, đau cấp thường giảm 70-90% trong vòng 24-72 giờ đầu — đây là hiệu quả rõ rệt mà bệnh nhân cảm nhận được ngay." },
    { type: "para", content: "Tuy nhiên, xi măng chỉ ổn định đốt sống đã xẹp — không chữa khỏi loãng xương, không tự động phục hồi cơ lưng đã yếu đi, và không ngăn được đốt sống kế cận bị xẹp tiếp theo. Nghiên cứu đăng trên Journal of Orthopaedic Research (2023) phân tích dữ liệu từ 12 thử nghiệm lâm sàng xác nhận: bệnh nhân được tập luyện phục hồi sau kyphoplasty có điểm đau VAS thấp hơn và chỉ số Oswestry Disability Index tốt hơn đáng kể so với nhóm chỉ nghỉ ngơi." },
    { type: "warning", content: "Bài viết này dành cho bệnh nhân sau thủ thuật kyphoplasty hoặc vertebroplasty đơn thuần — KHÔNG áp dụng cho bệnh nhân phẫu thuật cột sống có đặt vít (TLIF, PLIF, laminectomy). Nếu không chắc bản thân thuộc nhóm nào, hỏi bác sĩ trước khi tập bất kỳ bài nào." },
    { type: "heading", content: "Giai đoạn 1: Ngay sau thủ thuật — tuần đầu tiên" },
    { type: "para", content: "Trong 24-48 giờ đầu, xi măng đang trong giai đoạn đông cứng hoàn toàn. Mục tiêu giai đoạn này là di chuyển an toàn và phòng ngừa biến chứng bất động — không phải tập cường độ cao." },
    { type: "list", items: [
      "Hít thở sâu mỗi giờ: nằm ngửa, hít vào phình bụng, thở ra từ từ — 10 lần/lần. Phòng ngừa xẹp phổi và cải thiện tuần hoàn",
      "Bài tập bơm cổ chân (Ankle Pumps): co và duỗi bàn chân theo chiều lên-xuống, 20 lần/lần, mỗi 1-2 giờ. Phòng ngừa huyết khối tĩnh mạch sâu",
      "Siết cơ đùi (Quadriceps Sets): nằm ngửa, gồng cứng cơ đùi, giữ 5 giây rồi thư giãn. Lặp 10 lần mỗi 2 giờ",
      "Đứng dậy và đi vệ sinh ngay hôm thủ thuật hoặc sáng hôm sau nếu bác sĩ cho phép — đây là mục tiêu quan trọng nhất, không để nằm liệt giường",
      "Đi bộ nhẹ trong phòng bệnh: bắt đầu từ 5 phút, tăng dần theo từng ngày",
    ]},
    { type: "heading", content: "Kỹ năng quan trọng nhất: Cách đứng dậy từ giường đúng cách" },
    { type: "para", content: "Đứng dậy sai tư thế là lúc dễ gây đau và chấn thương nhất. Quy trình 4 bước sau đây cần được học đúng từ đầu và áp dụng mỗi lần thay đổi tư thế:" },
    { type: "list", items: [
      "Bước 1 — Lăn nghiêng: từ tư thế nằm ngửa, lăn sang nằm nghiêng một bên (bên ít đau hơn). Toàn thân lăn cùng lúc như một khối cứng, KHÔNG xoắn lưng",
      "Bước 2 — Đặt chân xuống: hạ hai chân xuống mép giường trong khi dùng tay chống lên đệm để nâng thân người lên",
      "Bước 3 — Ngồi thẳng: ngồi thẳng lưng ở mép giường, nghỉ 20-30 giây để cơ thể thích nghi, tránh hạ huyết áp tư thế",
      "Bước 4 — Đứng lên: đẩy tay vào đùi hoặc tay vịn giường để đứng dậy — KHÔNG cúi người ra trước để đứng lên",
    ]},
    { type: "heading", content: "Giai đoạn 2: Tuần 2 đến tuần 6 — xây dựng nền tảng cơ bắp" },
    { type: "para", content: "Sau 1-2 tuần, xi măng đã hoàn toàn ổn định. Đây là lúc bắt đầu chương trình tập có hệ thống. Mục tiêu: tăng cường cơ lưng, cơ vùng lõi và phục hồi dáng đi bình thường. Nghiên cứu lâm sàng cho thấy tập sức mạnh cơ lưng và cơ bụng sớm sau PKP giảm đáng kể nguy cơ xẹp đốt sống kế cận." },
    { type: "list", items: [
      "Đi bộ có kiểm soát: mục tiêu 15-20 phút/ngày trên mặt phẳng, tốc độ vừa phải. Đây là bài tập quan trọng nhất — kích thích tạo xương và tăng sức cơ toàn thân",
      "Kéo vai về sau (Scapular Retraction): đứng hoặc ngồi thẳng, kéo hai vai về phía sau và xuống dưới, giữ 5 giây. Lặp 10 lần, 2 hiệp/ngày. Cải thiện tư thế gù vẹo",
      "Nâng mông cầu nhẹ (Modified Glute Bridge): nằm ngửa, đầu gối co, bàn chân sát sàn. Siết cơ mông, nâng hông lên nhẹ nhàng. Giữ 3 giây rồi hạ xuống chậm. Lặp 8 lần",
      "Kích hoạt cơ bụng sâu: nằm ngửa, thở ra và kéo rốn vào cột sống nhẹ nhàng — giữ 5-8 giây. Lặp 10 lần. Kích hoạt cơ transversus abdominis là lớp cơ sâu nhất bảo vệ cột sống",
      "Ưỡn lưng nhẹ dựa tường: đứng cách tường 30cm, ngả lưng trên vào tường — mở ngực ra phía trước nhẹ nhàng. Giữ 10 giây. Lặp 10 lần. Bài tập an toàn chống gù sau xẹp đốt sống",
    ]},
    { type: "note", content: "Trong giai đoạn 2, bác sĩ có thể cho mặc đai lưng khi đi lại — đặc biệt khi ra ngoài hoặc đứng lâu. Đai hỗ trợ nhắc nhở tư thế đúng, nhưng không nên mặc liên tục khi nằm nghỉ vì cơ cần hoạt động để phát triển." },
    { type: "heading", content: "Giai đoạn 3: Sau 6 tuần — phục hồi toàn diện và duy trì lâu dài" },
    { type: "para", content: "Sau 6 tuần, nếu không có biến chứng và đau đã kiểm soát tốt, có thể nâng cường độ tập lên mức duy trì lâu dài. Nghiên cứu từ Journal of Pharmacology and Therapeutics (2024) xác nhận: chương trình tập sức mạnh sớm sau kyphoplasty cải thiện kiểm soát tư thế, tăng sức cơ và giảm nguy cơ té ngã đáng kể." },
    { type: "list", items: [
      "Đi bộ 30 phút mỗi ngày, ít nhất 5 ngày/tuần: mục tiêu dài hạn quan trọng nhất để duy trì mật độ xương và sức cơ",
      "Bài tập thăng bằng: đứng một chân (tay giữ vào ghế), đứng trên tấm thảm mỏng, đi theo đường thẳng — giảm nguy cơ té ngã gây gãy xương mới",
      "Ngồi đứng có kiểm soát (Sit-to-Stand): từ ghế có tay vịn, đứng lên mà KHÔNG cúi người ra trước — siết cơ mông và đùi để đẩy người lên. Lặp 10 lần, 2 hiệp",
      "Đạp xe đạp tĩnh: tốt cho tim mạch và cơ chân mà không tải trọng mạnh lên cột sống — thích hợp đặc biệt sau kyphoplasty",
      "Thái cực quyền (Tai chi): bằng chứng khoa học mạnh nhất về cải thiện thăng bằng ở người cao tuổi, giảm té ngã đến 47% theo nhiều nghiên cứu tổng hợp",
    ]},
    { type: "heading", content: "Điều trị loãng xương song song — bước không thể thiếu" },
    { type: "para", content: "Kyphoplasty xử lý đốt sống đã xẹp, nhưng nếu không điều trị loãng xương nguyên nhân, đốt sống kế cận sẽ tiếp tục chịu tải bất thường. Nguy cơ đốt sống lân cận bị gãy tăng 2-3 lần trong 12 tháng đầu sau thủ thuật nếu không điều trị loãng xương song song." },
    { type: "list", items: [
      "Bắt đầu hoặc tiếp tục thuốc điều trị loãng xương ngay sau kyphoplasty theo chỉ định bác sĩ",
      "Bổ sung canxi 1.000-1.200mg/ngày và vitamin D 800-1.000 IU/ngày đều đặn",
      "Tái khám DXA sau 12-24 tháng để đánh giá đáp ứng điều trị và hiệu quả thuốc",
      "Tuyệt đối không tự ngưng thuốc — đặc biệt với Denosumab: ngưng đột ngột có thể gây xẹp đốt sống bùng phát nhiều vị trí",
    ]},
    { type: "warning", content: "Dừng tập và liên hệ bác sĩ ngay nếu xuất hiện: đau lưng tăng đột ngột trở lại sau khi đã giảm, tê bì hoặc yếu chân, đau lan xuống chân, mất kiểm soát đại tiểu tiện. Đây là dấu hiệu có thể xẹp đốt sống mới hoặc biến chứng cần xử lý khẩn cấp." },
    { type: "heading", content: "Lịch tập tham khảo theo tuần" },
    { type: "list", items: [
      "Tuần 1-2: Bơm cổ chân + hít thở sâu + đi bộ trong phòng 2-3 lần/ngày, mỗi lần 5-10 phút",
      "Tuần 2-4: Thêm kéo vai về sau + kích hoạt cơ bụng sâu + đi bộ 15-20 phút/ngày",
      "Tuần 4-6: Thêm cầu mông nhẹ + ưỡn lưng dựa tường + đi bộ 20-25 phút/ngày",
      "Sau 6 tuần: Đi bộ 30 phút + bài tập thăng bằng + ngồi đứng có kiểm soát + đạp xe tĩnh",
      "Sau 3 tháng trở đi: Duy trì lịch trên suốt đời — đây là liều thuốc phòng ngừa hiệu quả nhất",
    ]},
    { type: "highlight", content: "Mục tiêu của chương trình phục hồi không phải là trở lại như trước khi bị xẹp đốt sống — mà là trở thành người có cột sống được bảo vệ tốt hơn, cơ lưng khỏe hơn, thăng bằng tốt hơn và nguy cơ gãy xương thấp hơn so với trước đây." },
    { type: "note", content: "Bài viết dựa trên: Than và cộng sự, Journal of Orthopaedic Research (2023) — phân tích tổng hợp 12 thử nghiệm lâm sàng về tập luyện sau kyphoplasty; hướng dẫn phục hồi chức năng sau PKP từ Journal of Pharmacology and Therapeutics (2024); và kinh nghiệm lâm sàng tại Khoa Cột sống, BV TWQĐ 108. Không thay thế tư vấn y tế trực tiếp — mỗi bệnh nhân cần chương trình phục hồi được cá thể hóa." },
    { type: "highlight", content: "Bác sĩ đã xây dựng ứng dụng tập luyện tương tác — theo dõi từng giai đoạn phục hồi, đánh dấu bài tập hoàn thành, xem hình minh họa và nhắc nhở dấu hiệu cần gặp bác sĩ ngay. Truy cập tại: bs-quyen-website.vercel.app/education/tu-tap-luyen/sau-bom-xi-mang-dot-song" },
  ],

  "tu-tap-luyen-xep-dot-song-loang-xuong": [
    { type: "para", content: "Bà T.T.L., 73 tuổi, vừa được chẩn đoán xẹp đốt sống L1 do loãng xương. Sau khi ra viện, con gái đưa bà đến tái khám và hỏi thẳng: 'Bác sĩ ơi, mẹ con có được tập thể dục không? Hay phải nằm yên?' Đây là câu hỏi tôi nhận được mỗi ngày — và câu trả lời quan trọng hơn nhiều người nghĩ." },
    { type: "highlight", content: "Nằm yên quá nhiều sau xẹp đốt sống có hại không kém gì tập sai. Vận động đúng cách — đúng bài, đúng kỹ thuật, đúng thời điểm — là một phần thiết yếu trong điều trị và phục hồi." },
    { type: "heading", content: "Tại sao vận động lại quan trọng sau xẹp đốt sống?" },
    { type: "para", content: "Nhiều bệnh nhân xẹp đốt sống lo sợ vận động sẽ làm xương vỡ thêm. Thực tế ngược lại: bất động kéo dài làm loãng xương nặng hơn, cơ lưng yếu đi, nguy cơ đốt sống kế tiếp xẹp theo càng cao. Nghiên cứu đăng trên Osteoporosis International (2024) xác nhận: bệnh nhân xẹp đốt sống được tập vật lý trị liệu sớm có mật độ xương cao hơn và tỷ lệ gãy xương mới thấp hơn so với nhóm nằm nghỉ hoàn toàn." },
    { type: "para", content: "Chương trình 'Too Fit to Fracture' — được Hội Loãng xương Canada phát triển và công bố trên tạp chí Osteoporosis International — là tài liệu khoa học quan trọng nhất hiện nay về tập luyện an toàn cho bệnh nhân loãng xương có xẹp đốt sống. Chương trình này chia nhỏ bài tập theo mức độ nguy cơ và tình trạng bệnh, giúp bệnh nhân tập hiệu quả mà không gây thêm tổn thương." },
    { type: "warning", content: "TRƯỚC KHI TẬP BẤT KỲ BÀI NÀO: Bắt buộc hỏi ý kiến bác sĩ chuyên khoa cột sống. Nếu đang trong giai đoạn đau cấp (dưới 6 tuần sau xẹp mới) — hầu hết các bài tập dưới đây CHƯA được chỉ định. Dừng ngay và báo bác sĩ nếu đau tăng, tê bì hoặc yếu chân khi tập." },
    { type: "heading", content: "Những bài tập TUYỆT ĐỐI TRÁNH khi bị xẹp đốt sống" },
    { type: "para", content: "Đây là điều quan trọng nhất cần nắm rõ trước khi bắt đầu. Xương cột sống bị xẹp do loãng xương có cấu trúc yếu ở phần trước (mặt bụng) của thân đốt. Các động tác cúi gập người ra trước (gập cột sống) sẽ dồn thêm lực ép lên vùng đã yếu này — gây nguy cơ xẹp thêm hoặc gãy thêm." },
    { type: "list", items: [
      "Cúi người gập cột sống: gập người cúi đầu xuống chân, ngồi gập người ra trước, cúi nhặt đồ vật không uốn gối",
      "Động tác twist xoay cột sống: xoay người mạnh sang hai bên trong khi lưng không được đỡ",
      "Bài tập crunch (sit-up) và các biến thể: kéo đầu lên trong tư thế nằm ngửa gây áp lực uốn cột sống",
      "Yoga có động tác cúi gập: child's pose, forward fold, seated forward bend — đặc biệt nguy hiểm",
      "Các bài tập tác động mạnh: nhảy, chạy trên địa hình gồ ghề, aerobics cường độ cao, khiêng vác nặng",
      "Bơi theo kiểu breaststroke (bơi ếch): đầu ngẩng cao liên tục gây ưỡn cổ — không phù hợp",
      "Gập người nhặt đồ: luôn uốn đầu gối và hạ thấp cơ thể bằng khớp hông, KHÔNG cúi lưng",
    ]},
    { type: "heading", content: "Nguyên tắc tập luyện an toàn: Cột sống trung tính" },
    { type: "para", content: "Thuật ngữ 'cột sống trung tính' (neutral spine) là chìa khóa trong mọi bài tập cho bệnh nhân xẹp đốt sống. Đây là tư thế cột sống giữ nguyên đường cong tự nhiên — lưng thắt lưng hơi ưỡn nhẹ, không cúi, không ưỡn quá mức. Trong mọi bài tập, bất kể đứng, ngồi hay nằm, bạn phải giữ được tư thế cột sống trung tính này." },
    { type: "highlight", content: "Quy tắc vàng: nếu bài tập khiến bạn phải cúi lưng hoặc xoay mạnh — đó không phải bài tập phù hợp với bạn. Hãy hỏi bác sĩ hoặc kỹ thuật viên vật lý trị liệu về phương án thay thế." },
    { type: "heading", content: "Giai đoạn 1: Đau cấp — 0 đến 6 tuần đầu sau xẹp mới" },
    { type: "para", content: "Đây là giai đoạn đốt sống đang lành lại. Mục tiêu không phải tập luyện mà là bảo vệ vùng tổn thương và duy trì chức năng cơ bản. Nghỉ ngơi có kiểm soát — không nằm liệt, không làm đau thêm." },
    { type: "list", items: [
      "Đi bộ nhẹ trong nhà: bắt đầu từ 5–10 phút, tăng dần theo khả năng chịu đau. Đây là vận động an toàn nhất trong giai đoạn cấp",
      "Bài tập thở bụng: nằm ngửa, đặt tay lên bụng, hít vào phình bụng — thở ra xẹp bụng. Duy trì 5–10 phút mỗi ngày. Kích hoạt cơ hoành, giảm căng cơ lưng",
      "Co cơ mông nhẹ: nằm ngửa, siết cơ mông 5 giây rồi thư giãn — lặp 10 lần. Không nâng lưng lên",
      "Tư thế đúng khi nằm: nằm nghiêng với gối kẹp giữa hai đầu gối; hoặc nằm ngửa với gối dưới đầu gối để giảm áp lực cột sống thắt lưng",
      "Mặc đai lưng khi di chuyển nếu bác sĩ chỉ định: đai hỗ trợ giảm áp lực đốt sống trong giai đoạn cấp",
    ]},
    { type: "heading", content: "Giai đoạn 2: Phục hồi — 6 đến 12 tuần, đau đã giảm đáng kể" },
    { type: "para", content: "Khi cơn đau cấp đã giảm (thường sau 4–8 tuần với điều trị đúng), bắt đầu tập tăng sức mạnh cơ lưng và cơ vùng lõi (core). Mục tiêu: xây dựng lớp cơ bảo vệ quanh cột sống để giảm tải trọng lên đốt sống đã xẹp." },
    { type: "list", items: [
      "Bài 1 — Kéo vai về sau (Scapular Retraction): Ngồi hoặc đứng thẳng, kéo hai vai về phía sau và xuống, giữ 5 giây. Lặp 10 lần, 2–3 hiệp/ngày. Tăng cường cơ lưng trên, cải thiện tư thế",
      "Bài 2 — Ưỡn lưng trên dựa tường (Wall Extension): Đứng cách tường 30cm, ngả lưng vào tường nhẹ nhàng cho phần lưng trên chạm tường. Giữ 10 giây. Lặp 10 lần. An toàn hơn ưỡn lưng trên sàn",
      "Bài 3 — Nâng tay từ tư thế nằm sấp (Modified Prone Extension): Nằm sấp, gối đệm dưới bụng nếu cần. Nâng nhẹ đầu và vai lên khỏi sàn 2–3cm — giữ 3 giây, hạ xuống. KHÔNG ngửa đầu mạnh. Lặp 8–10 lần",
      "Bài 4 — Siết cơ bụng dưới (Abdominal Drawing-In): Nằm ngửa, đầu gối co, bàn chân sát sàn. Thở ra, kéo rốn vào cột sống nhẹ nhàng — giữ 5–10 giây. Lặp 10 lần. Kích hoạt cơ transversus abdominis — cơ sâu nhất bảo vệ cột sống",
      "Bài 5 — Nâng mông cầu (Glute Bridge): Nằm ngửa, đầu gối co, bàn chân sát sàn. Siết cơ mông và nâng hông lên khỏi sàn đến khi đùi và thân tạo đường thẳng. Giữ 3–5 giây, hạ xuống chậm. Lặp 8–10 lần",
      "Bài 6 — Đi bộ có kiểm soát: Tăng dần lên 20–30 phút/ngày trên mặt phẳng. Đi bộ là bài tập tải trọng tốt nhất, kích thích tạo xương và tăng sức cơ lưng",
    ]},
    { type: "heading", content: "Giai đoạn 3: Duy trì lâu dài — Sau 3 tháng" },
    { type: "para", content: "Sau 3 tháng, nếu đau đã kiểm soát tốt và bác sĩ cho phép, có thể nâng cường độ tập luyện. Mục tiêu giai đoạn này: duy trì mật độ xương, phòng ngừa gãy xương tiếp theo và duy trì sự độc lập trong sinh hoạt." },
    { type: "list", items: [
      "Đi bộ 30 phút mỗi ngày, ít nhất 5 ngày/tuần: Nghiên cứu xác nhận đi bộ là bài tập hiệu quả nhất về lợi ích/nguy cơ cho bệnh nhân xẹp đốt sống do loãng xương",
      "Bài tập thăng bằng: Đứng một chân (giữ tay vào ghế khi cần), đứng trên tấm nệm mỏng, đi trên đường thẳng — giảm nguy cơ té ngã",
      "Tập cơ chân: Ngồi đứng (sit-to-stand) từ ghế thấp lên — mà KHÔNG cúi lưng ra trước. Lặp 10 lần, 2 hiệp/ngày",
      "Bơi lội và đạp xe đạp tĩnh: An toàn cho cột sống, tốt cho tim mạch và toàn thân",
      "Tai chi (thái cực quyền): Cải thiện thăng bằng và phối hợp động tác, giảm nguy cơ té ngã đến 47% theo meta-analysis",
    ]},
    { type: "heading", content: "Hỏi đáp thường gặp" },
    { type: "para", content: "Câu hỏi: 'Đau lưng tăng lên khi tập có nghĩa là tập sai không?' — Đau nhẹ và mỏi cơ sau tập là bình thường. Nhưng đau tăng rõ rệt trong khi tập, đau nhói, hoặc xuất hiện tê bì chân tay là dấu hiệu phải DỪNG và liên hệ bác sĩ ngay." },
    { type: "para", content: "Câu hỏi: 'Tôi có thể tập cùng với người bình thường không?' — Không. Người bị xẹp đốt sống do loãng xương cần chương trình tập riêng, được thiết kế phù hợp với giới hạn của cột sống. Tham gia lớp yoga, aerobics hoặc gym thông thường có thể nguy hiểm nếu không có sự giám sát và điều chỉnh." },
    { type: "para", content: "Câu hỏi: 'Bao lâu thì thấy kết quả?' — Cơ lưng khỏe hơn rõ rệt sau 6–8 tuần tập đều đặn. Mật độ xương cần 12–24 tháng để có thay đổi đo được trên DXA. Nhưng giảm đau và cải thiện vận động có thể thấy sớm hơn nhiều." },
    { type: "heading", content: "Môi trường và sinh hoạt an toàn hàng ngày" },
    { type: "list", items: [
      "Nâng đồ vật đúng cách: luôn uốn đầu gối, giữ vật sát cơ thể, không cúi lưng",
      "Không với tay cao quá đầu để lấy đồ: dùng ghế thấp có tay vịn hoặc nhờ người khác",
      "Tay vịn trong nhà vệ sinh: lắp thanh vịn cạnh bồn cầu và bồn tắm",
      "Giày dép có đế chống trơn: tránh dép lê, đi chân trần trên sàn trơn",
      "Ánh sáng đủ sáng ban đêm: té ngã khi đi vệ sinh ban đêm là nguyên nhân hàng đầu gãy xương hông",
      "Ngồi đứng đúng cách: ghế vừa tầm, bàn chân chạm sàn, không ngồi lâu quá 30 phút liên tục",
    ]},
    { type: "highlight", content: "Bài tập tốt nhất là bài tập bạn có thể thực hiện đều đặn mỗi ngày, không gây đau và được bác sĩ phê duyệt. Tính kiên trì quan trọng hơn cường độ." },
    { type: "note", content: "Bài viết được biên soạn dựa trên chương trình Too Fit to Fracture (Osteoporosis International), hướng dẫn của Hội Vật lý trị liệu Canada về loãng xương và kinh nghiệm lâm sàng tại Khoa C1.1-A, Bệnh viện TWQĐ 108. Không thay thế tư vấn y tế trực tiếp — mỗi bệnh nhân cần được đánh giá và có chương trình tập luyện cá thể hóa từ bác sĩ chuyên khoa." },
  ],

  "loang-xuong-phu-nu-sau-man-kinh": [
    { type: "para", content: "Bà N.T.H., 72 tuổi, đến phòng khám trong tình trạng không thể tự đi lại sau một cú trượt chân nhẹ khi xuống cầu thang. X-quang cho thấy nhiều đốt sống đã xẹp từ trước — lặng lẽ, không ai hay biết. Đây không phải câu chuyện hiếm gặp." },
    { type: "image", src: "/images/Patient1_blurred.jpg", alt: "Bệnh nhân cao tuổi đến khám bằng xe lăn do loãng xương nặng và gãy xẹp đốt sống", caption: "Hình 1. Bệnh nhân nữ, 72 tuổi đến khám bằng xe lăn", subcaption: "Không thể đi lại sau gãy xẹp đốt sống do loãng xương tiến triển lâu năm không được điều trị. Ảnh đã được xử lý bảo vệ danh tính." },
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
    { type: "image", src: "/images/Xquang_1.jpg", alt: "X-quang cột sống thắt lưng bệnh nhân nữ loãng xương nặng — gãy xẹp nhiều đốt sống", caption: "Hình 2. X-quang cột sống thắt lưng — gãy xẹp đốt sống do loãng xương (13/12/2024)", subcaption: "Phim X-quang thẳng và nghiêng cho thấy gãy xẹp nhiều đốt sống vùng thắt lưng ở bệnh nhân nữ sau mãn kinh, xương thưa loãng rõ rệt — hậu quả của loãng xương tiến triển nhiều năm không được tầm soát." },
    { type: "heading", content: "Gãy xẹp đốt sống — hậu quả thường bị đánh giá thấp" },
    { type: "para", content: "Gãy xẹp đốt sống là biến chứng thường gặp nhất nhưng lại thường bị đánh giá chưa đủ mức độ nghiêm trọng. Người bệnh và đôi khi cả thầy thuốc thường nghĩ đây chỉ là 'đau lưng do tuổi già' — bỏ qua cơ hội can thiệp sớm." },
    { type: "list", items: [
      "Mất chiều cao tiến triển (có thể thấp đi 5–10 cm theo thời gian)",
      "Gù lưng, biến dạng tư thế, ảnh hưởng chức năng hô hấp",
      "Giảm khả năng đi lại và thực hiện các hoạt động sinh hoạt hàng ngày",
      "Mất sự độc lập, tăng nguy cơ phụ thuộc vào người thân",
      "Tăng nguy cơ gãy tiếp theo — mỗi lần gãy làm tăng nguy cơ gãy thêm gấp 5 lần",
    ]},
    { type: "image", src: "/images/Xquang_2.jpg", alt: "X-quang cột sống thắt lưng gãy xẹp và thoái hóa nặng do loãng xương", caption: "Hình 3. X-quang cột sống thắt lưng — gãy xẹp và thoái hóa cột sống mức độ nặng", subcaption: "Hình ảnh gãy xẹp đốt sống kết hợp thoái hóa lan tỏa toàn bộ cột sống thắt lưng — hình ảnh điển hình của loãng xương không được điều trị ở phụ nữ sau mãn kinh." },
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

  "loang-xuong-nam-gioi-dich-te-nguyen-nhan-co-che": [
    { type: "para", content: "Nếu ai đó nói với bạn rằng loãng xương là bệnh của phụ nữ — người đó đã sai. Và sự sai lầm này đang khiến hàng triệu đàn ông trên thế giới bỏ qua một mối nguy âm thầm đang gặm nhấm xương của họ từng ngày." },
    { type: "para", content: "Ông H., 68 tuổi, kỹ sư về hưu. Vào buổi sáng tháng 3, ông khiêng thùng nước lên tầng hai — một việc ông đã làm hàng trăm lần. Lần đó, ông nghe tiếng 'rắc' ở lưng. Phim chụp sau đó cho thấy hai đốt sống thắt lưng đã xẹp. Chẩn đoán: loãng xương nặng, T-score -3.2. Ông chưa bao giờ được ai khuyên đi đo mật độ xương." },
    { type: "heading", content: "Con số đáng kinh ngạc" },
    { type: "para", content: "Theo báo cáo của Tổ chức Loãng xương Quốc tế (IOF) và nghiên cứu đăng trên PMC năm 2023: trong số 9 triệu ca gãy xương do loãng xương toàn cầu năm 2000, 40% xảy ra ở nam giới. Tỷ lệ tử vong sau gãy xương hông ở đàn ông cao hơn phụ nữ — trong năm đầu sau gãy, tỷ lệ tử vong dao động 20-24%. Chưa đến 20% nam giới mắc loãng xương được điều trị." },
    { type: "heading", content: "Tại sao đàn ông vẫn loãng xương?" },
    { type: "para", content: "Xương của đàn ông được bảo vệ bởi testosterone trực tiếp và estrogen gián tiếp. Nhưng sau tuổi 50-60, quá trình mất xương bắt đầu tăng tốc. Ở nam giới suy sinh dục, sự giảm testosterone dẫn đến giảm aromatization thành estrogen — chính estrogen nội sinh giảm là nguyên nhân trực tiếp gây mất xương, không phải testosterone." },
    { type: "heading", content: "Nguyên nhân thứ phát ở nam giới" },
    { type: "list", items: [
      "Suy sinh dục: thiếu testosterone → giảm estrogen nội sinh → mất xương",
      "Corticosteroid mãn tính: ức chế osteoblast, tăng calcium niệu, giảm hấp thu calcium",
      "Liệu pháp triệt androgen (ADT) điều trị ung thư tuyến tiền liệt: mật độ xương giảm 2-3%/năm",
      "Lạm dụng rượu bia: ức chế osteoblast, giảm hấp thu canxi",
      "Bệnh lý nội tiết: cường giáp, cường tuyến cận giáp, hội chứng Cushing",
      "Bệnh lý tiêu hóa mãn tính: kém hấp thu canxi và vitamin D",
    ]},
    { type: "heading", content: "Nhận diện nguy cơ" },
    { type: "list", items: [
      "Tuổi trên 70 hoặc đang dùng corticosteroid trên 3 tháng",
      "Đang điều trị ung thư tuyến tiền liệt bằng ADT — nhóm nguy cơ cao nhất",
      "Uống rượu nhiều (trên 3 đơn vị/ngày) hoặc hút thuốc lá",
      "BMI thấp (dưới 20) hoặc giảm cân nhanh không chủ đích",
      "Tiểu đường type 1, cường giáp, suy sinh dục",
      "Đã từng gãy xương khi va chạm nhẹ sau tuổi 50",
    ]},
    { type: "highlight", content: "Bạn có 2 yếu tố trở lên? Hãy đề nghị bác sĩ chỉ định đo mật độ xương DXA. Đây là xét nghiệm không xâm lấn, chưa đến 15 phút, và cho kết quả chính xác nhất về tình trạng xương." },
    { type: "note", content: "Loãng xương hoàn toàn có thể phát hiện sớm và điều trị hiệu quả ở nam giới. Phòng ngừa từ lúc còn chưa gãy xương bao giờ cũng hiệu quả hơn điều trị sau gãy." },
  ],

  "bom-xi-mang-tao-hinh-dot-song": [
    { type: "para", content: "Kỹ thuật bơm xi măng sinh học tạo hình thân đốt sống (vertebroplasty/kyphoplasty) có thể giảm đau kịch tính trong vòng 24–48 giờ sau can thiệp. Nhưng nếu chỉ dừng ở đó mà không điều trị loãng xương — căn nguyên thực sự — người bệnh đang đứng trên nền đất sụt." },
    { type: "heading", content: "Bơm xi măng đốt sống là gì?" },
    { type: "list", items: [
      "Vertebroplasty: bơm xi măng sinh học (PMMA) trực tiếp vào thân đốt xẹp",
      "Kyphoplasty: nong bóng trước tạo khoang, sau đó bơm xi măng — phục hồi chiều cao tốt hơn",
      "Thực hiện qua da, không cần mổ mở",
      "Giảm đau rõ rệt trong 24–72 giờ sau thủ thuật",
    ]},
    { type: "image", src: "/images/Xquang_bom_xi_mang.jpg", alt: "X-quang cột sống thắt lưng sau tạo hình thân đốt sống bằng xi măng sinh học", caption: "Hình 1. X-quang cột sống thắt lưng — sau tạo hình thân đốt sống bằng xi măng sinh học", subcaption: "Phim X-quang cho thấy xi măng sinh học (vùng trắng đậm) trong thân đốt sống đã xẹp. Đốt sống được ổn định cơ học, người bệnh giảm đau rõ rệt sau can thiệp." },
    { type: "heading", content: "Khi nào được xem xét bơm xi măng?" },
    { type: "list", items: [
      "Đau lưng cấp tính dữ dội do xẹp đốt sống mới, xác nhận trên MRI có phù tủy xương",
      "Điều trị bảo tồn không hiệu quả sau 4–6 tuần",
      "Người bệnh không thể chịu đựng đau để vận động, nguy cơ nằm lâu cao",
      "Không có chống chỉ định: nhiễm trùng, rối loạn đông máu, tổn thương thần kinh",
    ]},
    { type: "warning", content: "Xi măng sinh học giải quyết triệu chứng đau — nhưng không thể thay thế xương đã mất. Nếu không điều trị loãng xương, đốt sống kế cận sẽ tiếp tục sụp đổ." },
    { type: "heading", content: "Nguy cơ khi không điều trị loãng xương song song" },
    { type: "list", items: [
      "Xẹp đốt sống kế cận: xi măng cứng hơn xương bình thường, truyền lực bất thường lên đốt liền kề",
      "Vòng xoáy can thiệp nhiều lần trong khi loãng xương vẫn tiến triển",
      "Biến dạng cột sống tiến triển: gù nặng, mất cân bằng, suy giảm hô hấp",
    ]},
    { type: "highlight", content: "Bơm xi măng là công cụ — không phải giải pháp. Người bệnh xứng đáng được nhận cả hai: giảm đau nhanh VÀ điều trị loãng xương bền vững để bảo vệ những đốt sống còn lại." },
    { type: "note", content: "Bài viết mang tính giáo dục sức khỏe tổng quát. Quyết định điều trị cần được thảo luận với bác sĩ chuyên khoa dựa trên tình trạng cụ thể của từng người bệnh." },
  ],

  "bai-tap-phuc-hoi-cot-song-that-lung": [
    { type: "para", content: "Tập luyện đúng cách là một phần quan trọng trong điều trị và phục hồi bệnh lý cột sống thắt lưng. Các bài tập dưới đây được thiết kế đơn giản, có thể thực hiện tại nhà, giúp giảm đau, tăng cường cơ lưng và cải thiện khả năng vận động." },
    { type: "warning", content: "Trước khi tập, hãy tham khảo ý kiến bác sĩ. Nếu xuất hiện đau tăng hoặc tê bì trong khi tập, dừng lại ngay và báo cho bác sĩ." },
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
    { type: "para", content: "Tập đều đặn mỗi ngày, kiên trì ít nhất 4–6 tuần để thấy rõ hiệu quả. Kết hợp với điều trị của bác sĩ để đạt kết quả tốt nhất." },
    { type: "note", content: "Thông tin giáo dục sức khỏe tổng quát. Không thay thế tư vấn y tế trực tiếp. Người bệnh cần được thăm khám và có chỉ định cụ thể từ bác sĩ chuyên khoa." },
  ],

  "loang-xuong-co-che-va-nguyen-nhan": [
    { type: "para", content: "Nhiều người nghĩ loãng xương chỉ là 'xương yếu đi theo tuổi tác' và không làm gì được. Thực ra không phải vậy. Hiểu đúng cơ chế, bạn hoàn toàn có thể làm chậm quá trình này." },
    { type: "heading", content: "Xương hoạt động như thế nào?" },
    { type: "para", content: "Xương không phải khối đá chết — đây là bộ phận sống, liên tục được tái tạo. Trong xương có hai loại tế bào làm việc song song: tế bào tạo xương (osteoblast) chuyên xây dựng xương mới, và tế bào hủy xương (osteoclast) chuyên phá vỡ xương cũ để tái sử dụng khoáng chất." },
    { type: "list", items: [
      "Trước 30 tuổi: xây dựng nhiều hơn phá vỡ — xương ngày càng chắc",
      "30–50 tuổi: xây dựng cân bằng phá vỡ — xương giữ nguyên sức mạnh",
      "Sau 50 tuổi: phá vỡ nhiều hơn xây dựng — xương bắt đầu mỏng dần",
    ]},
    { type: "heading", content: "3 nguyên nhân chính gây loãng xương" },
    { type: "list", items: [
      "Giảm estrogen sau mãn kinh: estrogen là 'nút phanh' kiểm soát tế bào hủy xương. Khi mãn kinh, estrogen giảm mạnh, tế bào hủy xương hoạt động quá mức",
      "Thiếu canxi và vitamin D: canxi là nguyên liệu xây xương; vitamin D giúp hấp thu canxi. Thiếu một trong hai, xương không được tái tạo đủ nhanh",
      "Ít vận động: xương cần lực tác động để duy trì sức mạnh. Ít vận động đồng nghĩa với xương không có động lực để chắc chắn",
    ]},
    { type: "heading", content: "Hậu quả" },
    { type: "list", items: [
      "Xương trở nên xốp như tổ ong — mất khả năng chịu lực",
      "Gãy xương từ chấn thương nhỏ: ngã nhẹ, ho mạnh, cúi người",
      "Vị trí gãy thường gặp: cột sống, hông, cổ tay",
    ]},
    { type: "note", content: "Thông tin giáo dục sức khỏe tổng quát. Nếu bạn có nguy cơ loãng xương, hãy gặp bác sĩ để được đánh giá và tư vấn điều trị phù hợp." },
  ],

  "chan-doan-loang-xuong-phuong-phap-va-doi-tuong": [
    { type: "para", content: "Bà L.T.M., 58 tuổi, đến khám vì đau lưng âm ỉ hơn 3 tháng. Kết quả đo mật độ xương cho thấy T-score -2.8 — loãng xương mức độ nặng, đốt sống đã bắt đầu mất cấu trúc. Nếu không được chẩn đoán lúc này, cú ngã đầu tiên có thể là cú ngã thay đổi cả cuộc đời." },
    { type: "heading", content: "Phương pháp chẩn đoán chuẩn: DXA" },
    { type: "para", content: "DXA (Dual-energy X-ray Absorptiometry) là tiêu chuẩn vàng trong chẩn đoán loãng xương. Thời gian đo 10–20 phút, không xâm lấn, liều phóng xạ rất thấp." },
    { type: "heading", content: "Đọc kết quả T-score" },
    { type: "list", items: [
      "T-score từ -1.0 trở lên: Xương bình thường",
      "T-score từ -1.0 đến -2.5: Thiếu xương (osteopenia) — cảnh báo sớm",
      "T-score từ -2.5 trở xuống: Loãng xương — cần điều trị",
      "T-score từ -2.5 trở xuống kèm tiền sử gãy xương: Loãng xương nặng",
    ]},
    { type: "heading", content: "Công cụ FRAX đánh giá nguy cơ gãy xương" },
    { type: "para", content: "FRAX (Fracture Risk Assessment Tool) của WHO tích hợp nhiều yếu tố nguy cơ để tính xác suất gãy xương trong 10 năm tới. Đặc biệt hữu ích khi DXA nằm vùng 'thiếu xương' — ranh giới cần và chưa cần điều trị thuốc." },
    { type: "heading", content: "Ai nên được kiểm tra?" },
    { type: "list", items: [
      "Phụ nữ từ 65 tuổi trở lên — tầm soát thường quy",
      "Phụ nữ sau mãn kinh dưới 65 tuổi có ít nhất một yếu tố nguy cơ",
      "Nam giới từ 70 tuổi trở lên",
      "Người đã từng gãy xương sau chấn thương nhẹ",
      "Người dùng corticosteroid toàn thân từ 3 tháng trở lên",
    ]},
    { type: "warning", content: "Dấu hiệu cần đi kiểm tra sớm: chiều cao giảm hơn 2–3cm · lưng ngày càng khom gù · đau lưng cấp tính sau động tác nhỏ · gãy xương khi va chạm nhẹ · mãn kinh sớm trước 45 tuổi." },
    { type: "note", content: "Chẩn đoán loãng xương không phải để gây lo lắng — mà để có cơ sở hành động sớm. Biết T-score của mình là thông tin bảo vệ bạn, không phải bản án." },
  ],

  "canh-bao-thuoc-dau-cot-song-khong-ro-nguon-goc": [
    { type: "warning", content: "CẢNH BÁO Y TẾ: Nhiều loại thuốc gia truyền trị đau xương khớp đang lưu hành KHÔNG có đăng ký Bộ Y tế. Phân tích thực tế cho thấy một số sản phẩm chứa corticosteroid (dexamethasone, prednisolone...) liều cao được pha trộn bí mật — người bệnh không hề biết mình đang dùng corticoid." },
    { type: "heading", content: "Tại sao những loại thuốc này 'hiệu quả' nhanh?" },
    { type: "para", content: "Corticosteroid liều cao có tác dụng kháng viêm và giảm đau cực nhanh — nhưng cái giá phải trả về lâu dài là vô cùng đắt. Người bệnh lầm tưởng 'thuốc hay', tiếp tục uống hàng tuần, hàng tháng, thậm chí hàng năm. Cơ thể quen với corticoid ngoại sinh → tuyến thượng thận ngưng sản xuất cortisol nội sinh." },
    { type: "heading", content: "Nguy cơ suy vỏ tuyến thượng thận" },
    { type: "list", items: [
      "Mệt mỏi kéo dài, chán ăn, sụt cân, buồn nôn",
      "Huyết áp thấp, chóng mặt khi đứng dậy, da sạm màu",
      "Khi stress hoặc phẫu thuật: tụt huyết áp đột ngột, sốc (Addisonian Crisis) — đe dọa tính mạng",
      "Khi ngưng thuốc đột ngột: đau dữ dội hơn trước (hội chứng cai corticoid)",
    ]},
    { type: "heading", content: "Loãng xương nặng thêm do corticoid" },
    { type: "para", content: "Corticosteroid là nguyên nhân hàng đầu gây loãng xương thứ phát. Chỉ 3-6 tháng dùng corticoid → mật độ xương giảm đáng kể, nguy cơ gãy xẹp đốt sống tăng gấp đôi. Đặc biệt nguy hiểm: bệnh nhân đang điều trị loãng xương bằng bisphosphonate mà vẫn dùng kèm corticoid ẩn → mọi điều trị loãng xương đều vô hiệu." },
    { type: "heading", content: "Nhận biết thuốc đáng ngờ" },
    { type: "list", items: [
      "Giảm đau RẤT NHANH trong 1-3 ngày đầu — không thuốc thảo dược nào tác dụng nhanh như vậy",
      "Cảm giác phấn chấn, ăn ngon, ngủ ngon bất thường; tăng cân, phù mặt tròn",
      "Không có số đăng ký Bộ Y tế, không ghi thành phần hoạt chất, mua qua mạng xã hội",
    ]},
    { type: "note", content: "KHÔNG tự ý dùng bất kỳ thuốc nào không có số đăng ký Bộ Y tế. Nếu đã dùng lâu, KHÔNG ngưng đột ngột — cần gặp bác sĩ để được hỗ trợ đúng cách. Nếu nghi ngờ: xét nghiệm cortisol máu buổi sáng, ACTH, đo mật độ xương DXA." },
  ],

  "tu-y-bo-thuoc-loang-xuong": [
    { type: "para", content: "Loãng xương là bệnh mãn tính — điều trị thường kéo dài nhiều năm. Thế nhưng rất nhiều bệnh nhân tự ý bỏ thuốc giữa chừng. Đây là quyết định tiềm ẩn nguy hiểm nghiêm trọng, đặc biệt với một số nhóm thuốc điều trị hiện đại." },
    { type: "heading", content: "Tại sao bệnh nhân tự ý bỏ thuốc?" },
    { type: "list", items: [
      "Cảm thấy 'đỡ rồi, không đau nữa' — không nhận ra loãng xương là bệnh thầm lặng",
      "Sợ tác dụng phụ: đau khớp, buồn nôn, lo lắng về 'hoại tử xương hàm' đọc trên mạng",
      "Chi phí điều trị dài hạn gây gánh nặng kinh tế",
      "Quên uống nhiều lần rồi bỏ hẳn",
    ]},
    { type: "heading", content: "Denosumab (Prolia) — NGUY HIỂM NHẤT nếu ngưng đột ngột" },
    { type: "para", content: "Denosumab ức chế tiêu xương bằng cách chặn RANKL — nhưng tác dụng chỉ kéo dài 6 tháng (chu kỳ tiêm). Khi ngưng: RANKL bùng phát → tiêu xương xảy ra rất nhanh, mật độ xương giảm mạnh chỉ sau 6–12 tháng." },
    { type: "warning", content: "Trong các nghiên cứu quan sát tại châu Âu và Nhật Bản, tỷ lệ gãy đốt sống mới sau ngưng Denosumab không đúng chỉ định lên đến 10–15% trong vòng 18 tháng. Nhiều trường hợp gãy 3–5 đốt sống đồng thời. Nếu muốn ngưng Denosumab, BẮT BUỘC phải chuyển tiếp sang Bisphosphonate theo hướng dẫn của bác sĩ." },
    { type: "heading", content: "Điều bệnh nhân cần làm" },
    { type: "list", items: [
      "Liên hệ bác sĩ ngay khi có ý định ngưng thuốc — gọi điện hoặc nhắn tin đều được",
      "Mô tả cụ thể tác dụng phụ nghi ngờ để bác sĩ đánh giá",
      "Thiết lập báo thức điện thoại nếu hay quên uống thuốc",
      "Tái khám đúng hẹn, đo DXA mỗi 1–2 năm để theo dõi hiệu quả",
    ]},
    { type: "highlight", content: "Với loãng xương, cảm giác 'không đau = đã khỏi' là sai lầm nguy hiểm. Xương mỏng dần không gây đau — cho đến khi gãy." },
    { type: "note", content: "Mỗi bệnh nhân có hồ sơ bệnh lý riêng — quyết định điều trị cần được cá thể hóa. Nếu đang dùng thuốc và có bất kỳ lo ngại nào, hãy liên hệ bác sĩ điều trị trước khi thay đổi bất cứ điều gì." },
  ],

  "di-bo-dieu-chinh-goc-ban-chan-giam-dau-khop-goi": [
    { type: "para", content: "Một nghiên cứu lâm sàng ngẫu nhiên có đối chứng vừa công bố trên tạp chí The Lancet Rheumatology (8/2025) mang đến hy vọng mới cho bệnh nhân thoái hóa khớp gối: chỉ cần thay đổi góc bàn chân thêm 5–10 độ khi đi bộ có thể giảm đau khớp gối đáng kể, làm chậm tổn thương sụn khớp và không có tác dụng phụ nào." },
    { type: "heading", content: "Tại sao góc bàn chân quan trọng?" },
    { type: "para", content: "Khoang trong (medial compartment) của khớp gối chịu 60–80% tổng lực tải trọng cơ thể. Ở người có trục chi bất thường, lực này tăng lên đến 80–100% — gây quá tải mạn tính và bào mòn sụn khớp. Thước đo quan trọng nhất là Knee Adduction Moment (KAM). Góc tiến bàn chân ảnh hưởng trực tiếp đến KAM này." },
    { type: "heading", content: "Kết quả nghiên cứu" },
    { type: "list", items: [
      "68 bệnh nhân thoái hóa khớp gối nhẹ-trung bình được chia 2 nhóm",
      "Nhóm can thiệp giảm điểm đau trung bình 2,5 điểm (thang 10 điểm) — tương đương thuốc giảm đau OTC",
      "Giảm lực tải trọng tối đa tại khớp gối 4%; nhóm đối chứng tăng thêm 3%",
      "MRI cho thấy sụn khoang trong thoái hóa chậm hơn sau 12 tháng theo dõi",
      "Không ghi nhận tác dụng phụ có hại nào",
    ]},
    { type: "heading", content: "Ai phù hợp?" },
    { type: "list", items: [
      "Bệnh nhân thoái hóa khớp gối khoang trong mức độ nhẹ đến trung bình",
      "Người muốn trì hoãn hoặc tránh phẫu thuật thay khớp",
      "Người không thể dùng thuốc kháng viêm lâu dài do bệnh nền",
    ]},
    { type: "warning", content: "KHÔNG tự ý điều chỉnh góc bàn chân mà không có gait analysis chính thức — sai góc có thể tăng tải trọng lên khoang khớp khác hoặc gây đau cổ chân, hông. Phương pháp này cần được chỉ định và hướng dẫn bởi bác sĩ vật lý trị liệu sau đánh giá lâm sàng đầy đủ." },
    { type: "note", content: "Tài liệu tham khảo: Mazzoli V, et al. Personalised gait retraining for medial compartment knee osteoarthritis: a randomised controlled trial. The Lancet Rheumatology. August 2025. DOI: 10.1016/S2665-9913(25)00151-1" },
  ],

  "phong-ngua-loang-xuong-phu-nu-sau-man-kinh": [
    { type: "para", content: "Trong suốt những năm sau mãn kinh, xương của phụ nữ đang mất đi khoảng 2-4% mật độ mỗi năm — âm thầm, không đau, không dấu hiệu. Tin tốt là: hoàn toàn có thể phòng ngừa và làm chậm lại được, nếu biết cần làm gì và bắt đầu đúng thời điểm." },
    { type: "heading", content: "Tại sao mãn kinh là bước ngoặt của xương?" },
    { type: "para", content: "Estrogen là người gác cổng bảo vệ mật độ xương suốt cuộc đời sinh sản của phụ nữ. Khi mãn kinh, estrogen giảm mạnh: hủy xương nhanh hơn tạo xương. Trong 5-10 năm đầu sau mãn kinh, có thể mất 2-4% mật độ xương mỗi năm — nhanh hơn gấp 4-8 lần so với nam giới cùng tuổi." },
    { type: "heading", content: "Canxi và Vitamin D — nền tảng không thể thiếu" },
    { type: "para", content: "Meta-analysis năm 2025 (BMC Musculoskeletal Disorders), tổng hợp 37 RCT với 43.397 bệnh nhân, xác nhận bổ sung canxi và vitamin D kết hợp giúp tăng mật độ xương và giảm nguy cơ gãy xương ở phụ nữ sau mãn kinh." },
    { type: "list", items: [
      "Canxi: 1.200mg/ngày — ưu tiên từ thực phẩm (sữa, đậu phụ, tôm, cá nhỏ ăn cả xương)",
      "Vitamin D: 800-1.000 IU/ngày, có thể lên 2.000 IU nếu thiếu hụt",
      "Tiếp xúc ánh nắng 15-20 phút mỗi ngày (trước 10h hoặc sau 16h)",
    ]},
    { type: "heading", content: "Vận động — không phải môn nào cũng như nhau" },
    { type: "para", content: "Bơi lội và đạp xe tốt cho tim mạch nhưng gần như không có tác dụng tăng mật độ xương vì thiếu lực tác động. Các bài tập hiệu quả lên xương:" },
    { type: "list", items: [
      "Đi bộ nhanh 30 phút/ngày, ít nhất 5 ngày/tuần",
      "Tập có trọng tải: squat, tập tạ nhẹ, leo cầu thang",
      "Yoga và Tai chi: cải thiện thăng bằng, giảm nguy cơ té ngã",
    ]},
    { type: "heading", content: "Thuốc điều trị khi cần" },
    { type: "list", items: [
      "Bisphosphonate (Alendronate, Zoledronic acid): lựa chọn đầu tay, giảm nguy cơ gãy đốt sống đến 40-70%",
      "Denosumab (Prolia): tiêm mỗi 6 tháng, hiệu quả cao — không được tự ý ngưng",
      "Liệu pháp hormone thay thế (HRT): phù hợp phụ nữ mãn kinh sớm hoặc dưới 60 tuổi theo guideline 2024",
    ]},
    { type: "highlight", content: "Loãng xương sau mãn kinh không phải định mệnh. Với can thiệp đúng — vận động đều đặn, dinh dưỡng đủ canxi và vitamin D, thuốc điều trị nếu cần — phụ nữ hoàn toàn có thể giữ xương chắc khỏe và duy trì cuộc sống độc lập." },
    { type: "note", content: "Tài liệu tham khảo chính: NOGG 2024, RACGP 2024, Meta-analysis 37 RCT / 43.397 bệnh nhân (BMC Musculoskeletal Disorders 2025). Không thay thế tư vấn y tế cá nhân." },
  ],

  "loang-xuong-khong-dieu-tri-gay-vo-dot-song": [
    { type: "para", content: "Bà N., 68 tuổi, bị đau lưng âm ỉ suốt 3 năm. Con cái nhiều lần khuyên đi khám nhưng bà gạt đi: 'Già thì đau lưng, bình thường thôi.' Cho đến một buổi sáng bà cúi xuống nhặt cái chổi — chỉ vậy thôi — và ngã khuỵu xuống vì đau không thể chịu được. X-quang: 4 đốt sống bị xẹp, 2 đốt gãy hoàn toàn. Loãng xương giai đoạn nặng." },
    { type: "highlight", content: "80% người mắc loãng xương tại Việt Nam không được chẩn đoán và điều trị. Họ đang đi lại, sinh hoạt hàng ngày với những đốt sống ngày càng mỏng manh — mà không hay biết." },
    { type: "heading", content: "Cuộc sống của người bị vỡ nhiều đốt sống" },
    { type: "list", items: [
      "Đau lưng mãn tính không dứt: cơn đau ở lại mỗi ngày, chỉ khác nhau về mức độ",
      "Mất chiều cao: mỗi đốt xẹp làm người bệnh thấp đi 1-3cm, nhiều đốt có thể thấp 5-10cm",
      "Còng lưng nặng dần: cột sống mất điểm tựa, ảnh hưởng hô hấp và tiêu hóa",
      "Nguy cơ liệt: mảnh xương vỡ có thể chèn ép tủy sống hoặc rễ thần kinh",
      "Trầm cảm và cô lập xã hội: không đi được xa, không tham gia hoạt động gia đình",
      "Tăng nguy cơ tử vong: nghiên cứu Lancet (2022) cho thấy gãy đốt sống do loãng xương tăng nguy cơ tử vong 5 năm gấp đôi",
    ]},
    { type: "warning", content: "Dấu hiệu cần đi khám NGAY: đau lưng kéo dài trên 4 tuần không rõ nguyên nhân ở người trên 50 tuổi · chiều cao giảm hơn 3cm · đã từng gãy xương khi va chạm nhẹ · đang dùng corticosteroid trên 3 tháng." },
    { type: "heading", content: "Điều trị loãng xương — không bao giờ là quá muộn" },
    { type: "list", items: [
      "Đo mật độ xương DXA: xét nghiệm 15 phút, không đau, cho kết quả chính xác nhất",
      "Thuốc Bisphosphonate: giảm nguy cơ gãy đốt sống đến 70%",
      "Denosumab (Prolia): tiêm mỗi 6 tháng, hiệu quả cao",
      "Teriparatide: kích thích tạo xương mới — dùng cho loãng xương rất nặng hoặc đã gãy",
      "Bổ sung Canxi và Vitamin D đúng liều: nền tảng bắt buộc",
      "Vật lý trị liệu và bài tập thăng bằng: phòng ngừa té ngã",
    ]},
    { type: "note", content: "TS.BS. Nguyễn Ngọc Quyền — Bệnh viện TWQĐ 108. Tất cả hình ảnh trong bài được sử dụng với sự đồng ý của bệnh nhân vì mục đích giáo dục sức khỏe cộng đồng." },
  ],

  "loi-khuyen-suc-khoe-nang-nong-cuc-doan": [
    { type: "para", content: "Mùa hè 2025–2026, nhiều tỉnh thành Việt Nam ghi nhận nhiệt độ vượt 40°C liên tục nhiều ngày. Sốc nhiệt (heat stroke) có thể gây tổn thương não vĩnh viễn và tử vong chỉ trong vòng 30 phút nếu không được xử trí kịp thời." },
    { type: "heading", content: "Ba mức độ say nắng" },
    { type: "list", items: [
      "Mức 1 — Kiệt sức do nhiệt: ra nhiều mồ hôi, da lạnh và ẩm, mạch nhanh yếu, chóng mặt, buồn nôn, thân nhiệt dưới 40°C — cần dừng hoạt động và vào nơi mát ngay",
      "Mức 2 — Sốc nhiệt: thân nhiệt trên 40°C, da đỏ và nóng (không còn mồ hôi), lú lẫn, co giật hoặc mất ý thức — GỌI 115 NGAY",
    ]},
    { type: "heading", content: "7 hành động bảo vệ sức khỏe" },
    { type: "list", items: [
      "Uống đủ nước kể cả khi không khát: 2–3 lít/ngày; người lao động ngoài trời uống 250ml mỗi 15–20 phút",
      "Tránh ra ngoài khung giờ 10h–16h; mặc quần áo sáng màu, rộng rãi, đội mũ rộng vành",
      "Bôi kem chống nắng SPF 30 trở lên, thoa lại mỗi 2 giờ",
      "Làm mát môi trường sống bằng quạt, điều hòa hoặc đến nơi công cộng có điều hòa",
      "Không để trẻ em hoặc người già một mình trong xe ô tô — nhiệt độ trong xe tăng thêm 20°C chỉ sau 10 phút",
      "Theo dõi sức khỏe người thân có nguy cơ cao, gọi điện kiểm tra người già sống một mình ít nhất 2 lần/ngày",
    ]},
    { type: "heading", content: "Lưu ý đặc biệt cho bệnh nhân cột sống và khớp" },
    { type: "para", content: "Thuốc kháng viêm NSAID (Ibuprofen, Diclofenac, Meloxicam) làm giảm lưu lượng máu đến thận. Kết hợp với mất nước do nắng nóng, nguy cơ suy thận cấp tăng cao đột biến. Không tập phục hồi chức năng ngoài trời trong nắng; không ngưng thuốc loãng xương hay bệnh nền khi trời nóng." },
    { type: "warning", content: "Với sốc nhiệt: chuyển người bệnh vào nơi mát · cởi bớt quần áo · đặt túi đá lên nách, háng, hai bên cổ · cho uống nước từng ngụm nhỏ nếu còn tỉnh · GỌI 115 NGAY và theo dõi liên tục." },
    { type: "note", content: "Tổng hợp từ: WHO 2025, CDC Hoa Kỳ, Bộ Y tế Việt Nam và các nghiên cứu lâm sàng đăng trên PubMed/NIH năm 2024–2025. Liên hệ cấp cứu: 115." },
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
          <strong className="font-semibold text-gray-800 block mb-1">⚠️ Lưu ý quan trọng:</strong>
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
