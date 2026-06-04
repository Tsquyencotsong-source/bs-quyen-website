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

  "thuc-pham-chuc-nang-thoai-hoa-khop-goi": [
    { type: "para", content: "Bà N.T.H., 58 tuổi, mở chiếc hộp to bày lên bàn khám: glucosamine từ Mỹ, collagen từ Nhật, curcumin từ Ấn Độ, canxi từ Úc, và thêm một lọ 'sụn cá mập' từ không biết đâu. Tổng chi phí mỗi tháng: hơn 3 triệu đồng. 'Bác sĩ ơi, tôi uống đủ thứ mà sao vẫn đau?' Đây là câu chuyện tôi gặp mỗi tuần tại phòng khám — và câu trả lời đòi hỏi phải nói thật, dù thật không phải lúc nào cũng dễ nghe." },
    { type: "highlight", content: "Thị trường thực phẩm chức năng khớp gối tại Việt Nam trị giá hàng nghìn tỷ đồng mỗi năm. Nhưng bằng chứng khoa học thực sự về hiệu quả của từng loại rất khác nhau — từ 'có ích thực sự' đến 'không có bằng chứng' và thậm chí 'có thể có hại'. Bài viết này giúp bạn phân biệt rõ ràng." },
    { type: "heading", content: "Tại sao thực phẩm chức năng khớp gối lại được dùng nhiều đến vậy?" },
    { type: "para", content: "Thoái hóa khớp gối là bệnh mạn tính, không thuốc nào chữa khỏi hoàn toàn. Thuốc giảm đau NSAIDs hiệu quả nhưng lo ngại tác dụng phụ tiêu hóa, thận, tim mạch khi dùng dài hạn. Khoảng trống đó chính là đất sống của thị trường thực phẩm chức năng: 'thiên nhiên', 'an toàn', 'không tác dụng phụ', 'nuôi dưỡng sụn từ bên trong'. Nhưng những tuyên bố này đúng đến đâu?" },
    { type: "para", content: "Năm 2025, tạp chí Nutrients công bố một network meta-analysis (phân tích mạng lưới) tổng hợp 42 thử nghiệm lâm sàng ngẫu nhiên với 4.599 bệnh nhân — lớn nhất từ trước đến nay so sánh đồng thời nhiều loại thực phẩm chức năng trong thoái hóa khớp gối. Kết quả xếp hạng bằng chứng theo chỉ số SUCRA (Surface Under the Cumulative Ranking — càng cao càng tốt) là cơ sở chính cho bài viết này." },
    { type: "heading", content: "Bảng xếp hạng thực phẩm chức năng theo bằng chứng khoa học 2025" },
    { type: "list", items: [
      "Hạng 1 — Boswellia (Nhũ hương): Giảm đau SUCRA 0,803 / Cải thiện chức năng SUCRA 0,842 — Dẫn đầu cả hai tiêu chí",
      "Hạng 2 — Collagen type II: Giảm đau SUCRA 0,766 — Ấn tượng về đau; Krill oil (omega-3 biển): Chức năng SUCRA 0,808 — Dẫn đầu về chức năng vận động",
      "Hạng 3 — Curcumin (nghệ): Cân bằng tốt cả hai tiêu chí (0,601 đau / 0,629 chức năng)",
      "Hạng 4 — Ginger (gừng): Giảm đau tốt (SUCRA 0,578), cải thiện chức năng vừa",
      "Hạng 5 — Glucosamine + Chondroitin: Không nằm trong mạng lưới trên nhưng có meta-analysis riêng (54 RCT, n=16.427) — hiệu quả vừa phải nhưng an toàn",
      "Hạng 6 — Vitamin D: SUCRA thấp nhất (0,329 đau / 0,368 chức năng) — cần bổ sung khi thiếu hụt, không phải cho tất cả",
    ]},
    { type: "heading", content: "1. Boswellia (Nhũ hương) — Ứng cử viên số 1 ít ai biết đến" },
    { type: "para", content: "Boswellia serrata là nhựa cây từ Ấn Độ và Bắc Phi, đã được dùng trong y học Ayurveda hàng nghìn năm. Hoạt chất chính là AKBA (3-O-acetyl-11-keto-β-boswellic acid) — ức chế enzyme 5-lipoxygenase (5-LOX), qua đó ngăn chặn tổng hợp leukotriene — chất trung gian viêm quan trọng KHÔNG bị ức chế bởi NSAIDs thông thường. Đây là cơ chế kháng viêm độc đáo, khác biệt hoàn toàn với thuốc giảm đau thông thường." },
    { type: "list", items: [
      "Thử nghiệm lâm sàng 2025 (PMC11880083, n=96, mù đôi có đối chứng): Boswellia + Apium graveolens giảm đau VAS từ 6,8 xuống 2,1 (giảm 69%) sau 12 tuần — vượt trội so với giả dược",
      "Liều dùng: Chiết xuất Boswellia chuẩn hóa 30-40% AKBA, 100-250mg/ngày. Dạng viên nang. Cần 4-6 tuần để thấy hiệu quả rõ",
      "Thời gian dùng: Ít nhất 8-12 tuần liên tục. Hiệu quả kéo dài sau ngưng thuốc (không cần dùng mãi mãi)",
      "Tác dụng phụ: Nhẹ — buồn nôn, đau bụng nhẹ (hiếm). An toàn ở liều khuyến cáo",
      "Chống chỉ định: Phụ nữ có thai (có thể gây co tử cung). Thận trọng khi dùng cùng thuốc chống đông máu",
      "Phù hợp nhất: Bệnh nhân có viêm hoạt dịch, đau nhiều, không dùng được NSAIDs. Khó tìm sản phẩm chuẩn tại Việt Nam — cần kiểm tra hàm lượng AKBA",
    ]},
    { type: "heading", content: "2. Glucosamine và Chondroitin — Bộ đôi kinh điển: Sự thật sau 30 năm nghiên cứu" },
    { type: "para", content: "Đây là hai hoạt chất được nghiên cứu nhiều nhất trong lịch sử thực phẩm chức năng khớp gối. Glucosamine là nguyên liệu xây dựng proteoglycan — khung cấu trúc của sụn khớp. Chondroitin sulfate hút nước vào sụn, giữ tính đàn hồi và ức chế enzyme phân giải sụn. Lý thuyết rất thuyết phục — nhưng thực tế lâm sàng ra sao?" },
    { type: "list", items: [
      "GAIT Trial (NEJM 2006, n=1.583 bệnh nhân): Glucosamine và chondroitin dùng riêng lẻ không khác giả dược trong toàn bộ nhóm. Nhưng ở nhóm đau vừa-nặng: kết hợp cả hai hiệu quả 79% so với 54% ở giả dược — sự khác biệt có ý nghĩa thống kê",
      "LEGS Trial (Arthritis & Rheumatism 2015, n=605, theo dõi 2 năm): Kết hợp glucosamine + chondroitin làm chậm hẹp khe khớp đáng kể — bằng chứng đầu tiên về tác dụng bảo vệ cấu trúc sụn dài hạn",
      "Glucosamine sulfate vs glucosamine HCl: Quan trọng! Glucosamine SULFATE (1.500mg/ngày) có bằng chứng tốt hơn glucosamine HCl. Nhiều sản phẩm rẻ tiền dùng HCl — cần kiểm tra nhãn",
      "Chondroitin liều: 800-1.200mg/ngày. Cần dùng ít nhất 3 tháng liên tục. Thường thấy hiệu quả sau 6-8 tuần",
      "Tác dụng phụ: Rất nhẹ — đầy bụng, buồn nôn nhẹ. Glucosamine chiết từ vỏ giáp xác: cẩn thận nếu dị ứng hải sản. Glucosamine có thể ảnh hưởng đường huyết — bệnh nhân đái tháo đường theo dõi sát",
      "Kết luận thực tế: Hiệu quả nhất ở nhóm đau VAS 5-8 (vừa-nặng), kém hiệu quả ở đau nhẹ. Không phải 'thần dược' nhưng là lựa chọn an toàn đáng xem xét — đặc biệt khi không thể dùng NSAIDs dài hạn",
    ]},
    { type: "heading", content: "3. Curcumin (Nghệ) — Từ bếp ăn vào phòng khám có chứng cứ khoa học" },
    { type: "para", content: "Curcumin là hoạt chất chính của củ nghệ vàng (Curcuma longa). Cơ chế tác dụng: ức chế NF-κB (yếu tố phiên mã kích hoạt gen viêm), giảm tổng hợp COX-2 và TNF-α — tương tự cơ chế của NSAIDs nhưng nhẹ hơn và an toàn hơn cho đường tiêu hóa." },
    { type: "list", items: [
      "Thử nghiệm lâm sàng Journal of Medicinal Food (2014, n=45): Curcumin 2g/ngày tương đương ibuprofen 800mg trong giảm đau khớp gối — với ít tác dụng phụ tiêu hóa hơn đáng kể",
      "Vấn đề sinh khả dụng: Curcumin thô hấp thu rất kém (< 1%). Cần dùng dạng đặc biệt: Theracurmin (nano-curcumin), Meriva (phytosome curcumin), hoặc curcumin + piperine (tiêu đen — tăng hấp thu 20 lần)",
      "Liều dùng hiệu quả: Curcumin chuẩn hóa 500-1.000mg/ngày (tương đương ~10g bột nghệ thô). Dùng sau bữa ăn có chất béo tăng hấp thu",
      "Boswellia + Curcumin: Kết hợp này được nghiên cứu nhiều nhất và có hiệu quả cộng hưởng — cả hai ức chế hai con đường viêm khác nhau (LOX và COX). Nhiều sản phẩm kết hợp sẵn",
      "Tác dụng phụ: Nhẹ — đầy hơi, tiêu chảy ở liều cao. Liều > 8g/ngày có thể gây buồn nôn",
      "Chú ý quan trọng: Curcumin ức chế kết tập tiểu cầu nhẹ — thận trọng khi dùng cùng warfarin, aspirin, thuốc chống đông. Ngưng 2 tuần trước phẫu thuật",
    ]},
    { type: "heading", content: "4. Collagen Type II và Krill Oil — Hai ngôi sao mới nổi từ nghiên cứu 2025" },
    { type: "para", content: "Collagen type II (UC-II — undenatured collagen type II) là thành phần cấu trúc chính của sụn khớp. Dạng undenatured (không biến tính) hoạt động theo cơ chế đặc biệt: kích hoạt dung nạp miễn dịch qua niêm mạc ruột, giảm phản ứng viêm tự miễn nhắm vào sụn khớp — hoàn toàn khác với collagen thủy phân thông thường trong các loại nước uống đẹp da." },
    { type: "list", items: [
      "UC-II (Undenatured Collagen Type II): Liều chỉ 40mg/ngày — thấp hơn nhiều so với collagen thủy phân (10-15g/ngày). Nghiên cứu International Journal of Medical Sciences (2016, n=191): UC-II vượt trội glucosamine + chondroitin về giảm đau và cải thiện chức năng sau 180 ngày",
      "Collagen thủy phân (hydrolyzed collagen): Bằng chứng yếu hơn UC-II. Cần liều 10-15g/ngày. Phù hợp để hỗ trợ sức khỏe da-xương nói chung, không đặc hiệu cho viêm khớp",
      "Krill Oil (Dầu nhuyễn thể): Nguồn omega-3 đặc biệt ở dạng phospholipid — hấp thu tốt hơn cá thông thường. Chứa EPA và DHA ức chế tổng hợp prostaglandin và leukotriene gây viêm, đồng thời có astaxanthin — chất chống oxy hóa mạnh bảo vệ sụn",
      "Liều krill oil: 2-3g/ngày (tương đương 500-1.000mg EPA+DHA). Cần 8-12 tuần. Đắt hơn dầu cá thông thường nhưng hấp thu hiệu quả hơn",
      "Omega-3 từ cá thường (fish oil): Bằng chứng khoa học tốt nhưng kém krill oil về sinh khả dụng. Liều cần 3-6g/ngày EPA+DHA. Lựa chọn tiết kiệm hơn",
      "Tác dụng phụ omega-3/krill oil: Mùi tanh, ợ cá — dùng dạng enteric-coated hoặc uống giữa bữa ăn. Tăng nguy cơ chảy máu ở liều cao — ngưng 1 tuần trước phẫu thuật",
    ]},
    { type: "heading", content: "5. Vitamin D — Cần bổ sung đúng đối tượng, không phải cho tất cả" },
    { type: "para", content: "Vitamin D đóng vai trò quan trọng trong chuyển hóa xương và điều hòa miễn dịch. Thiếu vitamin D (< 20 ng/mL) liên quan đến tăng nguy cơ KOA và đau khớp nặng hơn. Nhưng bổ sung vitamin D ở người có nồng độ bình thường không cải thiện đau hay chức năng khớp gối." },
    { type: "list", items: [
      "Ai nên đo vitamin D: Người cao tuổi > 60 tuổi, ít ra ngoài nắng, có loãng xương kèm theo, đau khớp mạn tính không rõ nguyên nhân",
      "Mục tiêu điều trị: Duy trì 25(OH)D huyết thanh ≥ 30-50 ng/mL. Bổ sung 1.000-2.000 IU/ngày nếu thiếu hụt (< 20 ng/mL)",
      "Vitamin D3 (cholecalciferol) hiệu quả hơn D2 (ergocalciferol) trong nâng nồng độ huyết thanh — ưu tiên D3",
      "Kết hợp với K2 (MK-7): Vitamin K2 giúp phân phối canxi vào đúng xương, tránh lắng đọng ở mạch máu — khuyến cáo dùng kèm khi bổ sung D3 liều cao dài hạn",
      "Không nên tự bổ sung liều cao mà không xét nghiệm: Thừa vitamin D gây tăng canxi máu, buồn nôn, suy thận. Liều an toàn tối đa 4.000 IU/ngày",
    ]},
    { type: "heading", content: "6. MSM (Methylsulfonylmethane) — Lưu huỳnh hữu cơ ít được biết đến" },
    { type: "para", content: "MSM là hợp chất lưu huỳnh hữu cơ tự nhiên có trong rau củ quả và thịt. Lưu huỳnh là thành phần thiết yếu của collagen và glutathione (chất chống oxy hóa chính của cơ thể). Cơ chế trong KOA: giảm viêm màng hoạt dịch, ức chế NF-κB, tăng tổng hợp collagen." },
    { type: "list", items: [
      "Thử nghiệm lâm sàng Osteoarthritis & Cartilage (Kim 2006, n=50, 12 tuần): MSM 3g/ngày giảm đau VAS 25% và cải thiện chức năng 20% so với giả dược — kết quả khiêm tốn nhưng có ý nghĩa",
      "Liều dùng: 1.000-3.000mg/ngày, chia 2-3 lần. Bắt đầu liều thấp, tăng dần để tránh tác dụng phụ tiêu hóa",
      "Thường kết hợp với glucosamine trong nhiều sản phẩm thương mại — bằng chứng kết hợp chưa nhiều nhưng an toàn",
      "Tác dụng phụ: Nhẹ — đầy bụng, tiêu chảy, đau đầu nhẹ ở đầu điều trị. Hiếm có phản ứng nặng",
      "Lưu ý: Người dị ứng sulfur (kháng sinh sulfonamide) có thể phản ứng với MSM — thận trọng",
    ]},
    { type: "warning", content: "5 điều cần tránh khi dùng thực phẩm chức năng khớp: (1) Dùng nhiều loại cùng lúc mà không có kế hoạch — vừa tốn tiền vừa không biết cái nào hiệu quả; (2) Tin vào sản phẩm quảng cáo 'tái tạo sụn hoàn toàn' hay 'khỏi thoái hóa trong 30 ngày' — không có thực phẩm chức năng nào làm được điều này; (3) Thay thế thuốc bác sĩ kê bằng thực phẩm chức năng mà không báo bác sĩ; (4) Mua sản phẩm không rõ nguồn gốc, không có COA (Certificate of Analysis); (5) Không báo bác sĩ và dược sĩ khi đang dùng thuốc kê đơn — nhiều thực phẩm chức năng tương tác với warfarin, aspirin, thuốc đái tháo đường." },
    { type: "heading", content: "Hướng dẫn thực tế: Dùng gì, bao nhiêu, bao lâu?" },
    { type: "list", items: [
      "Đau nhẹ, KOA độ I-II, không muốn dùng thuốc: Bắt đầu Glucosamine sulfate 1.500mg + Chondroitin 1.200mg/ngày. Dùng 3 tháng, đánh giá lại. Thêm Curcumin phytosome nếu có viêm",
      "Đau vừa, không thể dùng NSAIDs (loét dạ dày, bệnh thận): Boswellia 250mg/ngày + Curcumin 500mg/ngày. Đây là kết hợp có bằng chứng tốt nhất, thay thế hợp lý cho NSAIDs",
      "Đau nhiều kèm cứng khớp buổi sáng: Krill oil 2-3g/ngày + Boswellia — nhắm đến cả hai con đường viêm",
      "Loãng xương kèm thoái hóa khớp: Bắt buộc đo vitamin D — bổ sung nếu thiếu. Kết hợp canxi và K2. Đây là điều trị nền không thể thiếu",
      "Ngân sách hạn chế: Glucosamine sulfate 1.500mg + bổ sung omega-3 từ cá hồi, cá thu, cá mòi 3 lần/tuần — hiệu quả thực phẩm chức năng từ thức ăn tự nhiên",
      "Nguyên tắc vàng: Dùng 1-2 sản phẩm, đủ liều, đủ thời gian (tối thiểu 3 tháng), sau đó đánh giá — không dùng 5-6 sản phẩm cùng lúc",
    ]},
    { type: "highlight", content: "Không có viên thuốc thần kỳ nào uống vào là khớp gối hết đau. Nhưng với kiến thức đúng — Boswellia và Curcumin cho viêm, Glucosamine + Chondroitin cho nền tảng, Omega-3 cho dài hạn — thực phẩm chức năng đúng loại, đúng liều, đúng thời gian hoàn toàn có thể là một phần hữu ích trong chiến lược điều trị tổng thể, không phải là tiền ném qua cửa sổ." },
    { type: "note", content: "Tài liệu tham khảo: (1) Comparative Effectiveness of Nutritional Supplements in the Treatment of Knee Osteoarthritis: A Network Meta-Analysis, Nutrients 2025 (PMC12348802) — 42 RCTs, n=4.599 bệnh nhân; (2) Clegg DO, et al. Glucosamine, Chondroitin Sulfate, and the Two in Combination for Painful Knee Osteoarthritis (GAIT Trial), NEJM 2006; (3) Martel-Pelletier J, et al. (LEGS Trial), Arthritis & Rheumatism 2015; (4) Kuptniratsaikul V, et al. Curcumin vs Ibuprofen in Knee OA, Clinical Interventions in Aging 2014; (5) Efficacy and Safety of Boswellia serrata, PMC11880083, 2025; (6) UC-II vs Glucosamine + Chondroitin, International Journal of Medical Sciences 2016. Bài viết mang tính giáo dục — không thay thế tư vấn của bác sĩ và dược sĩ." },
  ],

  "thoai-hoa-khop-goi-phuong-phap-dieu-tri": [
    { type: "para", content: "Ông T.V.M., 62 tuổi mà chúng ta đã gặp ở bài trước, sau khi được chẩn đoán thoái hóa khớp gối độ III, đã hỏi thẳng: 'Bây giờ tôi phải làm gì? Có cần mổ không? Tiêm có khỏi không? Uống thuốc gì?' Đây là câu hỏi của hàng triệu người đang sống chung với thoái hóa khớp gối. Câu trả lời phức tạp hơn một viên thuốc — nhưng cũng có nhiều lựa chọn hơn bạn nghĩ." },
    { type: "highlight", content: "Thoái hóa khớp gối không có thuốc đặc hiệu chữa khỏi hoàn toàn. Nhưng với chiến lược điều trị đúng — kết hợp nhiều phương pháp theo từng giai đoạn — đa số bệnh nhân có thể kiểm soát đau tốt, duy trì vận động và trì hoãn phẫu thuật nhiều năm, thậm chí suốt đời." },
    { type: "heading", content: "Nguyên tắc nền tảng: Điều trị theo bậc thang và cá thể hóa" },
    { type: "para", content: "Tất cả các hướng dẫn lớn hiện nay — OARSI 2023, ACR/AF 2021, AAOS 2021, EULAR 2023 — đều thống nhất một nguyên tắc: điều trị KOA phải theo bậc thang (step-up approach), bắt đầu từ can thiệp ít xâm lấn nhất, leo dần lên khi cần thiết. Không có phương án 'một cho tất cả' — điều trị phải cá thể hóa dựa trên mức độ thoái hóa, mức độ đau, tuổi, cân nặng, bệnh đồng mắc và mục tiêu của từng bệnh nhân." },
    { type: "list", items: [
      "Bậc 1 — Nền tảng (PHẢI làm trước): Tập luyện, giảm cân, giáo dục bệnh nhân, thay đổi lối sống",
      "Bậc 2 — Hỗ trợ: Thuốc giảm đau, bổ sung khớp, vật lý trị liệu, dụng cụ chỉnh hình",
      "Bậc 3 — Can thiệp tại khớp: Tiêm corticosteroid, tiêm acid hyaluronic, tiêm PRP",
      "Bậc 4 — Phẫu thuật: Cắt xương chỉnh trục, thay khớp bán phần, thay khớp toàn phần",
    ]},
    { type: "heading", content: "BẬC 1 — Tập luyện: Liều thuốc hiệu quả nhất không cần đơn bác sĩ" },
    { type: "para", content: "Đây là khuyến cáo mạnh nhất, nhất quán nhất, có bằng chứng tốt nhất trong điều trị KOA. OARSI, ACR, AAOS đều khuyến cáo mạnh (strong recommendation). Phân tích tổng hợp 54 thử nghiệm lâm sàng ngẫu nhiên (Cochrane Review 2023) xác nhận: tập luyện giảm đau tương đương thuốc NSAIDs uống nhưng không có tác dụng phụ tiêu hóa hay tim mạch." },
    { type: "list", items: [
      "Aerobic cường độ thấp (đi bộ, đạp xe, bơi lội): 150 phút/tuần, chia nhỏ thành các buổi 30 phút. Giảm đau, cải thiện chức năng, giảm nguy cơ tàn tật dài hạn. Hiệu quả nhất khi duy trì lâu dài",
      "Tập sức mạnh cơ tứ đầu đùi: Yếu cơ tứ đầu là yếu tố nguy cơ độc lập của KOA. Tập nâng chân thẳng, ngồi đứng có kiểm soát, squat nông (0-60 độ). 2-3 buổi/tuần",
      "Tập dưới nước (hydrotherapy/aquatic exercise): Hiệu quả tương đương tập trên cạn nhưng tải trọng lên khớp giảm 50-90%. Đặc biệt phù hợp cho bệnh nhân béo phì, đau nhiều khi đứng",
      "Chỉ định: Tất cả bệnh nhân KOA, ở mọi độ nặng — không có chống chỉ định tuyệt đối",
      "Lưu ý: Không nên bơi ếch (breaststroke) hoặc squat sâu dưới 90 độ. Tránh các môn tạo lực xoắn mạnh lên gối: cầu lông, tennis, bóng đá",
    ]},
    { type: "heading", content: "BẬC 1 — Giảm cân: 1kg mất đi = 4kg áp lực giải phóng cho khớp gối" },
    { type: "para", content: "Béo phì là yếu tố nguy cơ lớn nhất có thể can thiệp được của KOA. Nghiên cứu ADAPT (Arthritis, Diet, and Activity Promotion Trial) — thử nghiệm ngẫu nhiên có đối chứng trên 316 bệnh nhân — cho thấy: giảm 5-10% trọng lượng cơ thể kết hợp tập luyện cải thiện đau và chức năng gối tốt hơn có ý nghĩa so với chỉ tập luyện đơn thuần. Với BMI ≥ 25, giảm cân là can thiệp bắt buộc song song mọi phương pháp khác." },
    { type: "heading", content: "BẬC 2 — Thuốc giảm đau tại chỗ: Ít tác dụng phụ, hiệu quả đáng kể" },
    { type: "para", content: "Thuốc bôi ngoài (topical NSAIDs) — diclofenac gel, ketoprofen gel — hiện được OARSI và ACR/AF khuyến cáo dùng trước thuốc uống đối với bệnh nhân KOA đơn thuần không kèm bệnh lý khớp khác. Hiệu quả tương đương NSAIDs uống nhưng nồng độ thuốc trong máu thấp hơn 5-15 lần, hạn chế tác dụng phụ tiêu hóa và tim mạch." },
    { type: "list", items: [
      "Diclofenac gel 1% (Voltaren Emulgel): thoa 4 lần/ngày vùng quanh khớp. Giảm đau rõ rệt sau 1-2 tuần. Chỉ định: KOA gối giai đoạn nhẹ-trung bình",
      "Chống chỉ định: dị ứng NSAIDs, vết thương hở, da bị viêm. Không dùng trên diện tích lớn với bệnh nhân suy thận",
      "Paracetamol (Acetaminophen): Vai trò đang được xem xét lại. Các guideline mới nhất (OARSI 2019, ACR 2021) chỉ khuyến cáo có điều kiện do hiệu quả nhỏ khi dùng đơn thuần. Tuy nhiên an toàn ở liều đúng (tối đa 3g/ngày) và vẫn là lựa chọn khi không dùng được NSAIDs",
    ]},
    { type: "heading", content: "BẬC 2 — NSAIDs đường uống: Hiệu quả rõ, nhưng cần thận trọng" },
    { type: "para", content: "NSAIDs uống (ibuprofen, naproxen, celecoxib, meloxicam) là thuốc giảm đau kháng viêm được dùng phổ biến nhất trong KOA. Phân tích tổng hợp 74 thử nghiệm lâm sàng (Lancet 2016, cập nhật 2023) xác nhận: NSAIDs uống hiệu quả giảm đau tốt hơn placebo và tốt hơn paracetamol ở KOA triệu chứng." },
    { type: "list", items: [
      "Chỉ định: KOA có triệu chứng vừa-nặng, không đáp ứng với thuốc bôi và tập luyện",
      "Celecoxib (COX-2 selective): Hiệu quả tương đương ibuprofen nhưng ít tác dụng phụ tiêu hóa hơn. Ưu tiên ở bệnh nhân có nguy cơ loét dạ dày",
      "Tác dụng phụ cần biết: Loét dạ dày tá tràng (1-4% dùng dài hạn), tăng huyết áp, phù nề, suy thận ở bệnh nhân có sẵn bệnh thận mạn, tăng nguy cơ tim mạch (đặc biệt ở bệnh nhân có bệnh tim)",
      "Chống chỉ định: Tiền sử loét tiêu hóa đang hoạt động, suy thận nặng (GFR < 30), suy tim nặng, dị ứng NSAIDs, trong 3 tháng cuối thai kỳ",
      "KHÔNG dùng kéo dài không kê đơn: Dùng liều thấp nhất có hiệu quả trong thời gian ngắn nhất cần thiết — theo chỉ định bác sĩ",
    ]},
    { type: "heading", content: "BẬC 2 — Glucosamine và Chondroitin: Sự thật đằng sau quảng cáo" },
    { type: "para", content: "Đây là chủ đề gây tranh luận nhiều nhất trong điều trị KOA. Dữ liệu khoa học hiện tại cho thấy bức tranh không đơn giản:" },
    { type: "list", items: [
      "Thử nghiệm GAIT (NEJM 2006, n=1583): Glucosamine và chondroitin dùng đơn lẻ không khác placebo trong toàn bộ nhóm — nhưng ở nhóm đau vừa-nặng, kết hợp hai chất có hiệu quả 79% so với 54% nhóm placebo",
      "Nghiên cứu LEGS (Arthritis & Rheumatism 2015, n=605): Kết hợp glucosamine + chondroitin làm chậm hẹp khe khớp sau 2 năm — tác động bảo vệ cấu trúc sụn",
      "OARSI 2023: Khuyến cáo có điều kiện (conditional recommendation) — có thể dùng, đặc biệt ở bệnh nhân không thể dùng NSAIDs",
      "Kết luận thực tế: Không có hại, có thể có ích ở một số nhóm bệnh nhân. Nếu dùng, cần ít nhất 3 tháng liên tục để đánh giá hiệu quả. Không phải 'thần dược' nhưng cũng không phải vô dụng",
      "Chống chỉ định: Dị ứng hải sản (glucosamine từ vỏ giáp xác). Glucosamine có thể ảnh hưởng đường huyết ở bệnh nhân đái tháo đường — cần theo dõi",
    ]},
    { type: "heading", content: "BẬC 3 — Tiêm corticosteroid vào khớp: Nhanh nhưng không bền" },
    { type: "para", content: "Tiêm corticosteroid nội khớp (Intra-Articular Corticosteroid Injection — IACS) là can thiệp phổ biến nhất tại phòng khám cơ xương khớp. Phân tích tổng hợp 2024 trên tạp chí EFORT Open Reviews (meta-analysis gồm 72 thử nghiệm) xác nhận: IACS giảm đau nhanh và rõ rệt nhưng hiệu quả đạt đỉnh ở tuần 1-4, sau đó giảm dần và không còn khác biệt so với placebo sau 8-12 tuần." },
    { type: "list", items: [
      "Chỉ định: Đau cấp tính bùng phát (flare), tràn dịch khớp gối, đau không đáp ứng với thuốc uống và tập luyện. Hiệu quả nhất ở bệnh nhân có viêm hoạt dịch trên siêu âm",
      "Thuốc thường dùng: Triamcinolone acetonide, methylprednisolone acetate, betamethasone — thường phối hợp với lidocaine giảm đau ngay sau tiêm",
      "Tần suất: Không nên tiêm quá 3-4 lần/năm cùng một khớp. Khoảng cách tối thiểu 6-8 tuần giữa các lần",
      "Biến chứng và tác dụng phụ: Đau tăng tạm thời 24-48 giờ sau tiêm (post-injection flare, 2-10%), nhiễm trùng khớp (rất hiếm, < 1/10.000 nếu thực hiện đúng kỹ thuật vô khuẩn), teo da và mất sắc tố tại chỗ tiêm (nếu tiêm không vào trong khớp)",
      "Lo ngại dài hạn quan trọng: Một số nghiên cứu (Radiology 2019, n=459) phát hiện IACS lặp lại nhiều lần có thể liên quan đến: đẩy nhanh thoái hóa sụn, gãy xương dưới sụn do thiếu máu, hoại tử chỏm xương đùi, và phá hủy khớp nhanh. Cần cân nhắc thận trọng khi tiêm lặp lại nhiều lần",
      "Chống chỉ định: Nhiễm trùng khớp hoặc mô mềm quanh khớp, rối loạn đông máu nặng, đái tháo đường kiểm soát kém (có thể tăng đường huyết sau tiêm 3-5 ngày)",
    ]},
    { type: "heading", content: "BẬC 3 — Tiêm acid hyaluronic (HA): Bôi trơn từ bên trong" },
    { type: "para", content: "Acid hyaluronic (HA) — còn gọi là tiêm dịch khớp nhân tạo — hoạt động theo cơ chế bổ sung cho dịch khớp đã mất chất lượng trong KOA. Dịch khớp bình thường có HA phân tử lượng cao, giúp bôi trơn và giảm chấn. Trong KOA, HA bị phân giải và giảm phân tử lượng — tiêm HA ngoại sinh nhằm khôi phục tính chất nhớt-đàn hồi này (viscosupplementation)." },
    { type: "list", items: [
      "Chỉ định: KOA gối độ I-III có đau dai dẳng sau thất bại với thuốc và tập luyện. Hiệu quả nhất ở KOA nhẹ-trung bình",
      "Phác đồ: Thường 3 mũi tiêm cách nhau 1 tuần, hoặc 1 mũi duy nhất với HA phân tử lượng cao (Synvisc One, Monovisc). Hiệu quả kéo dài 3-6 tháng",
      "So sánh với IACS: Khởi phát tác dụng chậm hơn (2-4 tuần) nhưng duy trì lâu hơn (3-6 tháng vs 4-6 tuần của IACS). Meta-analysis 2024 (OARSI Journal) cho thấy HA có hiệu quả tương đương IACS về dài hạn",
      "Tác dụng phụ: Thường nhẹ — đau tại chỗ tiêm, sưng nhẹ tạm thời (1-7 ngày). Phản ứng viêm cấp sau tiêm (pseudo-septic reaction) hiếm gặp (< 2%) — biểu hiện đau và sưng nhiều trong 24-72 giờ, cần phân biệt với nhiễm trùng",
      "Chống chỉ định: Dị ứng protein gia cầm (HA truyền thống chiết từ mào gà), nhiễm trùng khớp, tràn dịch nhiều chưa được hút",
    ]},
    { type: "heading", content: "BẬC 3 — Tiêm PRP (Huyết tương giàu tiểu cầu): Liệu pháp sinh học đang lên" },
    { type: "para", content: "PRP (Platelet-Rich Plasma) là máu của chính bệnh nhân được ly tâm để cô đặc tiểu cầu — nguồn giải phóng các yếu tố tăng trưởng (TGF-β, PDGF, IGF-1, VEGF) có tác dụng kháng viêm và kích thích tái tạo mô. Đây là liệu pháp sinh học đang được nghiên cứu và ứng dụng rộng rãi nhất trong điều trị KOA hiện nay." },
    { type: "list", items: [
      "Hiệu quả: Meta-analysis 2024 (PLOS ONE, 16 RCT, n=1.088) xác nhận PRP vượt trội so với HA về giảm đau và cải thiện chức năng ở KOA nhẹ-trung bình, với lợi ích rõ rệt nhất ở tháng 6-12. Leukocyte-poor PRP (ít bạch cầu) hiệu quả tốt hơn leukocyte-rich PRP trong KOA",
      "Chỉ định tối ưu: KOA độ I-II (Kellgren-Lawrence), tuổi < 65, không béo phì, không có viêm hoạt dịch nặng. Hiệu quả giảm dần ở KOA nặng",
      "Phác đồ thường dùng: 3 mũi tiêm cách nhau 1 tuần. Một số nơi áp dụng 1-2 mũi ở giai đoạn nhẹ. Có thể nhắc lại sau 6-12 tháng",
      "Hạn chế quan trọng: Chưa có chuẩn hóa về quy trình ly tâm, nồng độ tiểu cầu, thể tích tiêm — dẫn đến kết quả không đồng nhất giữa các nghiên cứu. Chi phí cao hơn IACS và HA",
      "Tác dụng phụ: Thường nhẹ — đau tại chỗ tiêm (thường nhiều hơn IACS trong 24-48 giờ đầu), sưng tạm thời. Nguy cơ nhiễm trùng rất thấp (máu tự thân). Chống chỉ định: rối loạn đông máu, đang dùng anticoagulant, nhiễm trùng khớp, tiểu cầu < 100.000/mm³",
    ]},
    { type: "note", content: "So sánh nhanh 3 loại tiêm: IACS — nhanh nhất (24-48 giờ), rẻ nhất, ngắn nhất (4-6 tuần); HA — tác dụng trung bình (2-4 tuần), chi phí trung bình, kéo dài 3-6 tháng; PRP — chậm nhất (4-6 tuần), đắt nhất, kéo dài 6-12 tháng. Lựa chọn phụ thuộc vào tình trạng lâm sàng, mức độ KOA và điều kiện kinh tế của bệnh nhân." },
    { type: "heading", content: "BẬC 4 — Phẫu thuật: Khi nào thực sự cần thiết?" },
    { type: "para", content: "Quyết định phẫu thuật KOA không nên đưa ra chỉ dựa vào hình ảnh X-quang hay MRI — mà phải dựa trên sự kết hợp của: mức độ đau và tàn tật ảnh hưởng sinh hoạt hàng ngày, thất bại với điều trị bảo tồn đúng cách ≥ 3-6 tháng, tuổi, cân nặng, bệnh đồng mắc và mục tiêu sống của bệnh nhân." },
    { type: "list", items: [
      "Nội soi khớp gối (Arthroscopic debridement/lavage): KHÔNG còn được khuyến cáo trong điều trị KOA đơn thuần. AAOS và OARSI đưa ra khuyến cáo mạnh KHÔNG làm thủ thuật này — bằng chứng từ thử nghiệm METEOR (NEJM 2013) và nhiều nghiên cứu khác cho thấy không có lợi ích so với điều trị bảo tồn. Ngoại lệ: có rách sụn chêm kèm theo gây triệu chứng cơ học rõ ràng",
      "Cắt xương chỉnh trục (High Tibial Osteotomy — HTO): Chỉ định khi KOA chủ yếu khoang trong + biến dạng chữ O (varus) + bệnh nhân trẻ (< 60 tuổi) + còn hoạt động thể chất nhiều. Kỹ thuật cắt xương chày và điều chỉnh lại trục chi để phân bổ tải trọng ra khoang ngoài (ít tổn thương hơn). Hiệu quả giảm đau tốt 70-80% trong 5-10 năm. Biến chứng: chậm liền xương, nhiễm trùng, huyết khối tĩnh mạch sâu",
      "Thay khớp gối một khoang (Unicompartmental Knee Arthroplasty — UKA): Thay chỉ phần sụn và xương của khoang bị tổn thương (thường khoang trong). Chỉ định khi KOA khu trú một khoang + dây chằng chéo trước còn nguyên vẹn + tuổi trên 50 + cân nặng < 120kg. Ưu điểm: ít xâm lấn hơn TKA, phục hồi nhanh, bảo tồn cảm giác khớp. Nhược điểm: có thể cần thay toàn phần sau 10-15 năm nếu các khoang khác tiến triển",
      "Thay khớp gối toàn phần (Total Knee Arthroplasty — TKA): Can thiệp phẫu thuật cuối cùng cho KOA giai đoạn cuối. Chỉ định: KOA hai hoặc ba khoang độ III-IV K-L + đau mức độ nặng ảnh hưởng đời sống + thất bại với điều trị bảo tồn ≥ 6 tháng. Nghiên cứu hồi cứu 2025 (PMC12305278) trên 132 bệnh nhân: điểm đau VAS giảm từ 7,2 xuống 1,8 sau 12 tháng, 94% bệnh nhân hài lòng tốt-rất tốt. Tỷ lệ biến chứng nặng < 2%: nhiễm trùng sâu (0,5-1%), huyết khối tĩnh mạch sâu (1-2%), cứng khớp (9%). Tuổi thọ khớp nhân tạo: > 90% còn tốt sau 15-20 năm với kỹ thuật hiện đại",
    ]},
    { type: "warning", content: "Dấu hiệu cần đến gặp bác sĩ ngay để bàn về phẫu thuật: Đau gối liên tục không giảm kể cả khi nghỉ và ban đêm, không đi được quá 100-200m, không thể leo cầu thang, cần gậy chống liên tục, chất lượng cuộc sống suy giảm nghiêm trọng — dù đã điều trị bảo tồn đúng cách ≥ 3-6 tháng. Trì hoãn quá lâu làm yếu cơ nặng hơn, biến dạng khớp tiến triển và kết quả phẫu thuật kém hơn." },
    { type: "heading", content: "Tổng hợp: Lộ trình điều trị thực tế tại phòng khám" },
    { type: "list", items: [
      "KOA độ I-II, đau nhẹ: Tập luyện đều đặn + giảm cân (nếu cần) + thuốc bôi topical NSAID ± glucosamine 3 tháng. Theo dõi sau 3 tháng",
      "KOA độ II-III, đau vừa không đáp ứng bước trên: Thêm NSAIDs uống ngắn đợt + vật lý trị liệu + xem xét tiêm HA hoặc PRP",
      "KOA độ III-IV, đau nặng, bùng phát cấp: Tiêm IACS để kiểm soát đau cấp + tiếp tục tập luyện + đánh giá chỉ định phẫu thuật",
      "KOA độ IV, thất bại bảo tồn: Hội chẩn phẫu thuật — HTO (bệnh nhân trẻ, varus) hoặc UKA/TKA (bệnh nhân lớn tuổi, KOA lan rộng)",
    ]},
    { type: "highlight", content: "Câu trả lời cho ông T.V.M.: Ở độ III K-L, ông chưa cần mổ ngay. Bắt đầu với chương trình tập tăng sức mạnh cơ tứ đầu đùi + giảm 5kg + tiêm PRP hoặc HA một đợt. Nếu sau 6 tháng đau vẫn kiểm soát tốt — trì hoãn phẫu thuật được. Nếu không — sẽ có chỉ định thay khớp rõ ràng hơn. Không bao giờ là quá sớm hay quá muộn để bắt đầu đúng." },
    { type: "note", content: "Tài liệu tham khảo: (1) Bannuru RR, et al. OARSI Guidelines for Non-Surgical Management of Knee OA, Osteoarthritis & Cartilage 2019; cập nhật OARSI 2023; (2) Kolasinski SL, et al. 2019 ACR/AF Guideline for Management of OA of Hand, Hip, and Knee, Arthritis Care & Research 2020; (3) Bensa M, et al. Intra-articular corticosteroid injections provide benefit only at short-term, Knee Surgery Sports Traumatology Arthroscopy 2024; (4) Di Martino A, et al. PRP vs HA for knee OA, EFORT Open Reviews meta-analysis 2024; (5) GAIT Trial, NEJM 2006; (6) Moseley JB, et al. METEOR Trial — Arthroscopic surgery for knee OA, NEJM 2013; (7) Chaturvedi A, et al. Clinical outcomes following primary TKA in knee OA: A prospective study, PMC 2025. Bài viết mang tính giáo dục sức khỏe — không thay thế khám và tư vấn trực tiếp từ bác sĩ chuyên khoa." },
  ],

  "thoai-hoa-khop-goi-dinh-nghia-nguyen-nhan-co-che": [
    { type: "para", content: "Ông T.V.M., 62 tuổi, kể: 'Tôi bắt đầu thấy gối phải đau nhẹ khi leo cầu thang từ 2 năm trước. Nghĩ tuổi già thôi, uống vài viên giảm đau là xong. Rồi đau lan ra cả hai gối, khớp kêu lục cục mỗi khi ngồi xuống đứng lên, sáng ngủ dậy cứng khớp đến 20 phút mới đi lại bình thường được.' Khi chụp X-quang, kết quả là: khe khớp hẹp rõ, gai xương mọc tứ phía, xơ xương dưới sụn — thoái hóa khớp gối độ III theo Kellgren-Lawrence." },
    { type: "highlight", content: "Thoái hóa khớp gối là nguyên nhân đau mạn tính và tàn tật số 1 ở người cao tuổi tại Việt Nam. Hơn 34% người trên 40 tuổi đã có thoái hóa khớp gối trên X-quang. Hiểu đúng bệnh — từ cơ chế đến chẩn đoán — là bước đầu tiên để sống chung với bệnh một cách thông minh." },
    { type: "heading", content: "Thoái hóa khớp gối là gì? Định nghĩa đúng theo y học hiện đại" },
    { type: "para", content: "Thoái hóa khớp gối (Knee Osteoarthritis — KOA) là bệnh lý thoái hóa khớp mạn tính, đặc trưng bởi sự phá hủy sụn khớp tiến triển kết hợp với biến đổi của toàn bộ cấu trúc khớp gối — bao gồm xương dưới sụn, màng hoạt dịch, dây chằng, cơ quanh khớp và bao khớp. Khác với quan niệm cũ xem đây chỉ là 'bệnh mòn sụn đơn thuần', y học hiện đại nhìn nhận KOA là một bệnh lý toàn khớp phức tạp, có cả yếu tố viêm, chuyển hóa và thần kinh tham gia." },
    { type: "para", content: "Định nghĩa cập nhật từ hội nghị Osteoarthritis Research Society International (OARSI) 2023 nhấn mạnh: KOA không phải là hệ quả tất yếu của tuổi già, mà là một bệnh lý có thể phòng ngừa và can thiệp được nếu phát hiện đúng lúc. Đây là sự thay đổi quan trọng về tư duy điều trị — từ 'chịu đựng' sang 'quản lý chủ động'." },
    { type: "heading", content: "Con số biết nói — Thực trạng tại Việt Nam và thế giới" },
    { type: "para", content: "Thoái hóa khớp gối đang ở quy mô dịch bệnh thầm lặng toàn cầu. Dữ liệu từ Global Burden of Disease Study 2021 cho thấy KOA ảnh hưởng đến hơn 365 triệu người trên thế giới và là nguyên nhân tàn tật hàng đầu ở người trên 60 tuổi. Tại Việt Nam, nghiên cứu tại TP.HCM trên người trên 40 tuổi ghi nhận:" },
    { type: "list", items: [
      "34,2% có thoái hóa khớp gối trên X-quang (phụ nữ 35,3%, nam giới 31,2%)",
      "Nhóm 40-49 tuổi: tỷ lệ 8% — chưa phổ biến nhưng đã bắt đầu",
      "Nhóm 50-59 tuổi: tỷ lệ 30% — cứ 3 người thì 1 người đã có thoái hóa",
      "Nhóm ≥60 tuổi: tỷ lệ 61,1% — đa số người cao tuổi đã bị bệnh",
      "Nhiều người có thoái hóa trên X-quang nhưng chưa có triệu chứng — đây là giai đoạn vàng để can thiệp sớm",
    ]},
    { type: "heading", content: "Giải phẫu học cần biết — Khớp gối khỏe mạnh hoạt động ra sao?" },
    { type: "para", content: "Khớp gối là khớp lớn nhất và chịu tải trọng nhiều nhất trong cơ thể. Mỗi bước đi, lực tác động lên khớp gối bằng 3-5 lần trọng lượng cơ thể; khi leo cầu thang, con số này lên đến 7-8 lần. Cấu trúc bảo vệ khớp gối bao gồm: sụn khớp phủ đầu xương (dày 4-6mm, không có mạch máu — nuôi dưỡng hoàn toàn qua khuếch tán dịch khớp), sụn chêm trong và ngoài làm bộ giảm chấn, màng hoạt dịch sản xuất dịch bôi trơn, xương dưới sụn làm nền đỡ, dây chằng chéo trước-sau và dây chằng bên giữ vững khớp, và cơ tứ đầu đùi — nhóm cơ bảo vệ khớp quan trọng nhất." },
    { type: "heading", content: "Cơ chế bệnh sinh — Điều gì thực sự xảy ra bên trong khớp gối?" },
    { type: "para", content: "Đây là phần mà nhiều bệnh nhân thắc mắc nhất: 'Tại sao sụn lại bị phá hủy?' Câu trả lời không đơn giản là 'vì già' — mà là một vòng xoáy bệnh lý phức tạp. Trong sụn khỏe mạnh, hai quá trình tổng hợp và phân giải collagen-proteoglycan cân bằng nhau. Khi KOA bắt đầu, cân bằng này bị phá vỡ theo chuỗi phản ứng:" },
    { type: "list", items: [
      "Kích hoạt tế bào sụn (chondrocytes): Dưới tác động cơ học bất thường hoặc yếu tố nguy cơ, tế bào sụn tiết ra các enzyme phân hủy — MMP-13 (matrix metalloproteinase) và ADAMTS (aggrecanase). Đây là bước khởi đầu của vòng xoáy phá hủy",
      "Mất proteoglycan và collagen: Enzyme tấn công vào khung cấu trúc sụn. Sụn mất tính đàn hồi, trở nên mỏng manh, nứt nẻ và bắt đầu bong tróc",
      "Viêm màng hoạt dịch (synovitis): Các mảnh sụn vỡ ra kích hoạt phản ứng viêm trong khớp. Màng hoạt dịch sản xuất dư thừa TNF-α, IL-1β, IL-6 — chất trung gian gây đau và làm nặng thêm phá hủy sụn",
      "Biến đổi xương dưới sụn: Xương dưới sụn trở nên dày hơn (xơ hóa) và cứng hơn, mất khả năng hấp thụ lực. Ngược lại, cũng có thể xuất hiện nang xương (subchondral cysts) do dịch khớp thâm nhập vào xương",
      "Hình thành gai xương (osteophytes): Đây là nỗ lực 'tự sửa chữa' của cơ thể — xương cố gắng tăng diện tích tiếp xúc để phân tán lực. Nhưng gai xương không đều, gây đau và cản trở vận động",
      "Kết quả cuối cùng: Sụn bị bào mòn đến lộ xương, khớp bị biến dạng, trục khớp lệch — dẫn đến dáng đi chữ O (varus) hoặc chữ X (valgus) đặc trưng của thoái hóa khớp gối nặng",
    ]},
    { type: "note", content: "Điểm quan trọng: Viêm trong thoái hóa khớp gối là viêm bậc thấp (low-grade inflammation) — khác với viêm khớp dạng thấp. Không có sốt, không tăng CRP rõ rệt, nhưng viêm mạn tính âm ỉ này lại là động lực chính thúc đẩy phá hủy khớp theo thời gian." },
    { type: "heading", content: "Nguyên nhân và yếu tố nguy cơ — Ai dễ bị thoái hóa khớp gối nhất?" },
    { type: "para", content: "KOA là bệnh đa nguyên nhân — không có một nguyên nhân duy nhất. Các yếu tố sau đây làm tăng nguy cơ mắc bệnh hoặc đẩy nhanh tiến triển:" },
    { type: "list", items: [
      "Tuổi tác: Yếu tố nguy cơ không thể tránh. Sụn khớp mất dần khả năng tự phục hồi theo tuổi — tế bào sụn ít đi, chất lượng giảm, tốc độ tổng hợp collagen chậm hơn. Nguy cơ tăng mạnh sau 45 tuổi",
      "Thừa cân-béo phì: Yếu tố nguy cơ mạnh nhất có thể can thiệp được. Mỗi 1kg tăng cân thêm 4kg lực lên khớp gối. Ngoài ra, mô mỡ tạo ra các adipokine gây viêm (leptin, adiponectin) tác động trực tiếp lên sụn khớp — đây là lý do béo phì gây KOA kể cả ở bàn tay",
      "Giới tính nữ: Phụ nữ có nguy cơ cao gấp 1,8 lần nam giới, đặc biệt sau mãn kinh. Estrogen có vai trò bảo vệ sụn khớp — khi estrogen giảm đột ngột sau mãn kinh, tốc độ thoái hóa sụn tăng lên",
      "Chấn thương khớp gối cũ: Rách sụn chêm, đứt dây chằng chéo trước, gãy xương vùng gối — nguy cơ KOA tăng 3-5 lần trong vòng 10-15 năm sau chấn thương. Đây là lý do nhiều vận động viên mắc KOA sớm",
      "Nghề nghiệp và hoạt động: Công việc đòi hỏi quỳ gối, đứng lâu, leo trèo (thợ xây dựng, nông dân, công nhân khai thác mỏ) làm tăng nguy cơ đáng kể",
      "Yếu tố di truyền: 40-65% nguy cơ KOA có liên quan di truyền. Các gen liên quan đến cấu trúc sụn (COL9A1, GDF5) và phản ứng viêm được ghi nhận",
      "Mất cân bằng cơ bắp: Cơ tứ đầu đùi yếu làm tăng tải trọng lên sụn khớp. Đây vừa là nguyên nhân vừa là hệ quả của KOA — tạo vòng tròn bệnh lý",
      "Trục khớp bất thường bẩm sinh: Bàn chân phẳng, biến dạng chữ O/X từ nhỏ làm lực dồn không đều lên sụn, đẩy nhanh thoái hóa",
    ]},
    { type: "heading", content: "Phân loại thoái hóa khớp gối — Hệ thống Kellgren-Lawrence" },
    { type: "para", content: "Hệ thống phân loại Kellgren-Lawrence (K-L), được phát triển từ năm 1957 và vẫn là tiêu chuẩn vàng trên X-quang đến ngày nay, chia thoái hóa khớp gối thành 5 độ dựa trên hình ảnh X-quang:" },
    { type: "list", items: [
      "Độ 0 — Bình thường: Không có dấu hiệu thoái hóa. Khe khớp bình thường, không có gai xương",
      "Độ I — Nghi ngờ: Có thể có gai xương nhỏ hoặc nghi ngờ — ranh giới giữa bình thường và bệnh. Ý nghĩa lâm sàng còn tranh luận. Bệnh nhân thường chưa có triệu chứng",
      "Độ II — Nhẹ: Gai xương rõ ràng nhưng khe khớp chưa hẹp hoặc hẹp tối thiểu. Đây là thời điểm nhiều bệnh nhân bắt đầu thấy đau nhẹ khi vận động nhiều",
      "Độ III — Trung bình: Gai xương nhiều, khe khớp hẹp rõ, xơ xương dưới sụn bắt đầu. Đau thường xuyên hơn, ảnh hưởng đến sinh hoạt hàng ngày",
      "Độ IV — Nặng: Khe khớp hẹp nhiều hoặc gần như mất hoàn toàn, xơ xương dưới sụn rõ, có thể có biến dạng khớp. Đau liên tục, đi lại khó khăn nghiêm trọng",
    ]},
    { type: "highlight", content: "Điều quan trọng: Độ K-L trên X-quang không hoàn toàn tương đương với mức độ đau của bệnh nhân. Nhiều người có K-L độ III-IV nhưng đau không nhiều; ngược lại, có người K-L độ I-II nhưng đau dữ dội. Đây là lý do chẩn đoán và điều trị KOA phải dựa trên cả lâm sàng, không chỉ dựa vào phim." },
    { type: "heading", content: "Triệu chứng — Nhận biết thoái hóa khớp gối từ sớm" },
    { type: "para", content: "Triệu chứng của KOA thường khởi phát âm thầm và tiến triển chậm theo năm tháng. Đây là lý do nhiều bệnh nhân bỏ lỡ giai đoạn sớm — thời điểm can thiệp hiệu quả nhất. Các triệu chứng điển hình bao gồm:" },
    { type: "list", items: [
      "Đau khớp gối — triệu chứng chủ yếu: Đau thường khởi đầu khi vận động (leo cầu thang, ngồi xuống đứng lên, đi bộ dài) và giảm khi nghỉ ngơi. Giai đoạn nặng hơn, đau cả khi nghỉ và ban đêm. Vị trí đau thường ở mặt trong khớp (thoái hóa khoang trong phổ biến nhất), hoặc lan tỏa toàn khớp",
      "Cứng khớp buổi sáng: Thức dậy thấy khớp gối cứng, khó co duỗi — đặc trưng là cứng dưới 30 phút (phân biệt với viêm khớp dạng thấp: cứng trên 1 giờ). Nhiều bệnh nhân mô tả 'phải đi lại một lúc mới mềm khớp'",
      "Tiếng lục cục (crepitus): Khi co duỗi gối nghe thấy hoặc cảm nhận tiếng kêu 'lục cục', 'lạo xạo'. Là dấu hiệu bề mặt sụn không còn trơn láng. Có thể xuất hiện rất sớm, trước khi đau",
      "Sưng khớp gối: Do viêm màng hoạt dịch tiết dịch khớp quá mức (tràn dịch khớp gối). Gối trông to hơn, sờ căng, đôi khi nóng nhẹ. Không phải tất cả bệnh nhân đều có dấu hiệu này",
      "Hạn chế tầm vận động: Khó duỗi thẳng hoàn toàn hoặc co gập gối hết mức. Bệnh nhân thường không ngồi xổm được, khó leo cầu thang, khó ngồi bệt xuống sàn",
      "Yếu cơ và mất ổn định khớp: Cảm giác gối 'lỏng lẻo', chân 'khụy xuống' khi bước — đặc biệt khi xuống dốc. Do cơ tứ đầu đùi yếu và phản xạ bảo vệ khớp bị suy giảm",
      "Biến dạng khớp (giai đoạn nặng): Chân cong hình chữ O (varus — phổ biến hơn) hoặc chữ X (valgus). Do mất sụn không đều giữa khoang trong và ngoài khớp gối",
    ]},
    { type: "heading", content: "Chẩn đoán — Bác sĩ xác định thoái hóa khớp gối như thế nào?" },
    { type: "para", content: "Chẩn đoán KOA dựa trên sự kết hợp của lâm sàng, hình ảnh học và xét nghiệm. Tiêu chuẩn chẩn đoán lâm sàng theo Hội Thấp khớp học Mỹ (ACR) bao gồm: đau gối kèm ít nhất 3 trong 6 tiêu chí sau — tuổi trên 50, cứng khớp dưới 30 phút, tiếng lạo xạo, đau khi sờ vào bờ xương, sờ thấy gai xương, không sờ thấy nóng. Độ nhạy 95%, độ đặc hiệu 69%." },
    { type: "list", items: [
      "X-quang khớp gối thẳng-nghiêng: Bắt buộc và là công cụ chẩn đoán hình ảnh đầu tay. Đánh giá khe khớp, gai xương, xơ xương dưới sụn, độ biến dạng. Phân độ K-L từ 0-IV. Lưu ý: X-quang bình thường không loại trừ KOA giai đoạn sớm",
      "MRI khớp gối: Không phải chỉ định thường quy nhưng có giá trị cao trong giai đoạn sớm. Đánh giá được sụn khớp (trước khi thấy trên X-quang), sụn chêm, dây chằng, phù xương dưới sụn (bone marrow lesion — yếu tố tiên lượng đau quan trọng). Chỉ định khi nghi ngờ rách sụn chêm, hoặc cần lập kế hoạch phẫu thuật",
      "Siêu âm khớp gối: Phát hiện tràn dịch khớp, viêm màng hoạt dịch, gai xương — nhanh, rẻ, có thể thực hiện ngay tại phòng khám. Hạn chế: không đánh giá được sụn khớp và xương dưới sụn",
      "Xét nghiệm máu: Không có xét nghiệm đặc hiệu cho KOA. Xét nghiệm được chỉ định để loại trừ bệnh khác (viêm khớp dạng thấp: RF, anti-CCP; gút: acid uric; viêm cột sống dính khớp: HLA-B27). CRP và tốc độ lắng máu có thể tăng nhẹ trong KOA có viêm hoạt dịch",
      "Dịch khớp: Khi có tràn dịch khớp, có thể chọc hút để phân tích — phân biệt KOA với viêm nhiễm hoặc gút (tinh thể urat). Trong KOA, dịch khớp trong, nhớt, bạch cầu thấp (<2.000/mm³)",
    ]},
    { type: "warning", content: "Đến khám bác sĩ ngay nếu có một trong các dấu hiệu sau: đau gối đột ngột sau chấn thương, gối sưng đỏ nóng kèm sốt (có thể viêm nhiễm), không đi lại được, chân tê bì hoặc yếu cơ tăng nhanh, đau về đêm dữ dội không giảm khi nghỉ. Những dấu hiệu này cần đánh giá khẩn cấp — không phải 'chịu đựng chờ hết'." },
    { type: "highlight", content: "Thông điệp quan trọng nhất: Thoái hóa khớp gối không thể chữa khỏi hoàn toàn — nhưng hoàn toàn có thể làm chậm tiến triển, kiểm soát đau và duy trì chất lượng cuộc sống tốt nếu điều trị đúng và đủ sớm. Bài viết tiếp theo sẽ đi vào chi tiết các phương pháp điều trị hiệu quả nhất theo bằng chứng khoa học." },
    { type: "note", content: "Tài liệu tham khảo: (1) OARSI Guidelines for Non-Surgical Management of Knee Osteoarthritis, 2023; (2) Global Burden of Disease Study 2021 — Knee Osteoarthritis; (3) Hoàng Thị Thu Hương và cộng sự, Prevalence of Radiographic Osteoarthritis of the Knee in Ho Chi Minh City, PLOS ONE 2014; (4) Kellgren JH, Lawrence JS. Radiological assessment of osteoarthritis, Ann Rheum Dis 1957; (5) Altman R, et al. Development of clinical criteria for osteoarthritis, Arthritis Rheum 1986 (ACR criteria); (6) Hunter DJ, Bierma-Zeinstra S. Osteoarthritis, Lancet 2019. Bài viết mang tính giáo dục sức khỏe — không thay thế khám và tư vấn trực tiếp từ bác sĩ chuyên khoa." },
  ],

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

  "tu-tap-luyen-thoai-hoa-khop-goi": [
    { type: "para", content: "Bà N.T.H., 62 tuổi, từng phải vịn tường mỗi khi xuống cầu thang vì đau. Con trai đưa bà đến khám với câu hỏi: 'Mẹ con có còn đi bộ được không, hay phải ngồi một chỗ đến già?' Chẩn đoán: thoái hóa khớp gối độ 2-3. Câu trả lời của tôi làm cả nhà ngạc nhiên: 'Không chỉ đi bộ được — bà còn phải tập bài tập mỗi ngày. Đó là cách điều trị hiệu quả nhất hiện nay.'" },
    { type: "highlight", content: "Thoái hóa khớp gối KHÔNG có nghĩa là ngồi yên một chỗ. Ngược lại, vận động đúng cách là liệu pháp đã được chứng minh giúp giảm đau, cải thiện chức năng và làm chậm tiến triển bệnh — không kém gì thuốc giảm đau thông thường." },
    { type: "heading", content: "Tại sao tập luyện lại là thuốc số 1 cho thoái hóa khớp gối?" },
    { type: "para", content: "Hướng dẫn điều trị của Tổ chức Quốc tế Nghiên cứu Thoái hóa Khớp (OARSI) và Hội Phẫu thuật Chỉnh hình Hoa Kỳ (AAOS) đều xếp bài tập thể chất vào nhóm điều trị cốt lõi cho hầu hết bệnh nhân thoái hóa khớp gối — không phụ thuộc tuổi tác hay mức độ bệnh. Một phân tích tổng hợp năm 2025 trên hơn 60 thử nghiệm lâm sàng ngẫu nhiên xác nhận: tập thể dục aerobic mang lại lợi ích lớn nhất về giảm đau, cải thiện chức năng và chất lượng cuộc sống — bằng chứng mức độ trung bình đến cao." },
    { type: "para", content: "Sụn khớp gối không có mạch máu nuôi — nó nhận dinh dưỡng qua cơ chế ép và giải phóng áp lực khi vận động, giống như miếng bọt biển khi bóp và thả. Ngồi yên quá nhiều đồng nghĩa với sụn bị 'khô' và teo đét dần. Ngoài ra, cơ đùi (quadriceps) yếu là yếu tố nguy cơ hàng đầu làm đau khớp gối nặng hơn — bởi vì cơ đùi chính là hệ thống giảm xóc tự nhiên của khớp gối khi đi đứng." },
    { type: "warning", content: "Bài viết này dành cho bệnh nhân thoái hóa khớp gối độ 1-3 chưa phẫu thuật. Nếu vừa phẫu thuật thay khớp hoặc nội soi khớp gối, bạn cần chương trình phục hồi riêng — hãy hỏi bác sĩ trực tiếp trước khi tập bất kỳ bài nào." },
    { type: "heading", content: "Khởi động 5 phút trước khi tập — không được bỏ qua" },
    { type: "para", content: "Khớp gối cần được 'làm ấm' trước khi chịu tải. Khởi động tốt giúp dịch khớp phân bố đều vào sụn, giảm độ cứng sáng và hạn chế nguy cơ chấn thương khi tập. Dành 5 phút làm các động tác sau trước mỗi buổi tập:" },
    { type: "list", items: [
      "Đi bộ tại chỗ nhẹ nhàng 2-3 phút — đơn giản nhất và hiệu quả nhất để khởi động toàn thân",
      "Ngồi trên ghế, gập và duỗi đầu gối nhẹ nhàng 10-15 lần mỗi bên — làm trơn ổ khớp",
      "Xoay vòng cổ chân 10 vòng mỗi bên theo chiều kim đồng hồ và ngược lại",
      "Tùy chọn: chườm ấm lên khớp gối 10-15 phút trước khi tập — rất hiệu quả vào buổi sáng khi khớp còn cứng",
    ]},
    { type: "heading", content: "Bài 1: Nâng chân thẳng (Straight Leg Raise)" },
    { type: "para", content: "Đây là bài tập nền tảng số 1, được khuyến cáo trong tất cả guideline điều trị thoái hóa khớp gối quốc tế. Bài tập tăng cường cơ đùi (quadriceps) — lớp cơ bảo vệ quan trọng nhất của khớp gối — mà không tạo áp lực trực tiếp lên mặt sụn khớp đang tổn thương. Nếu chỉ có thể tập một bài duy nhất, hãy chọn bài này." },
    { type: "list", items: [
      "Nằm ngửa trên sàn hoặc giường cứng. Một chân co nhẹ (bàn chân đặt sàn), một chân duỗi thẳng",
      "Siết cứng cơ đùi chân duỗi thẳng — cảm giác như đang ép đầu gối xuống sàn",
      "Giữ cơ đùi siết, nâng chân lên cao khoảng 30-45 độ so với sàn — giữ 3 giây",
      "Hạ xuống chậm rãi và có kiểm soát. Đổi chân. Lặp 10-15 lần mỗi bên, 2-3 hiệp mỗi ngày",
      "Nâng cao hơn: sau 2-3 tuần tập tốt, có thể đeo tạ cổ chân nhẹ 0.5-1kg",
    ]},
    { type: "heading", content: "Bài 2: Siết cơ đùi tĩnh (Quad Sets)" },
    { type: "para", content: "Bài tập đẳng trường (isometric) này đặc biệt phù hợp với bệnh nhân đang trong giai đoạn đau cấp hoặc vừa trải qua đợt viêm khớp. Không có chuyển động ở khớp gối nhưng vẫn kích thích cơ đùi hoạt động hiệu quả." },
    { type: "list", items: [
      "Ngồi trên sàn hoặc giường, chân duỗi thẳng. Đặt một chiếc khăn cuộn nhỏ dưới đầu gối",
      "Siết (gồng) cơ đùi — cảm giác như đang ép chiếc khăn xuống sàn và duỗi thẳng đầu gối",
      "Giữ 5-10 giây, thư giãn hoàn toàn. Lặp 10-15 lần. Thực hiện 3 lần mỗi ngày",
      "Có thể tập ngay trên giường khi mới thức dậy — lý tưởng để giảm cứng khớp buổi sáng",
    ]},
    { type: "heading", content: "Bài 3: Ngồi đứng có kiểm soát (Sit-to-Stand)" },
    { type: "para", content: "Đây là bài tập chức năng quan trọng nhất — bởi vì đứng lên ngồi xuống là động tác người thoái hóa khớp gối phải thực hiện hàng chục lần mỗi ngày. Tập đúng kỹ thuật giúp bảo vệ khớp trong sinh hoạt hàng ngày và tăng sức mạnh cơ đùi, cơ mông đồng thời." },
    { type: "list", items: [
      "Ngồi thẳng lưng trên ghế có độ cao vừa phải — không quá thấp (ghế thấp gây đầu gối gập hơn 90 độ, tăng áp lực khớp)",
      "Đặt hai bàn chân rộng bằng vai, hơi nghiêng người ra trước từ hông — KHÔNG cúi lưng",
      "Đẩy từ gót chân và siết cơ đùi, cơ mông để đứng lên — tránh dùng tay vịn ghế nếu có thể",
      "Từ từ ngồi xuống có kiểm soát — KHÔNG ngồi phịch xuống, kiểm soát chuyển động đến khi mông chạm ghế",
      "Lặp 10-15 lần, 2-3 hiệp. Khi đã tập tốt, đặt gối bên dưới mông để tăng độ khó dần",
    ]},
    { type: "heading", content: "Bài 4: Kéo gót chân (Hamstring Curl)" },
    { type: "para", content: "Cơ sau đùi (hamstrings) và cơ trước đùi (quadriceps) cần được cân bằng — tập mỗi bên đơn độc dễ tạo mất cân bằng cơ, tăng nguy cơ chấn thương. Bài này giúp kéo giãn và tăng sức mạnh cơ sau đùi." },
    { type: "list", items: [
      "Đứng thẳng, tay vịn nhẹ vào thành ghế hoặc tường để giữ thăng bằng",
      "Từ từ gập một đầu gối lên phía sau — cố gắng đưa gót chân gần về phía mông",
      "Giữ 2-3 giây, hạ xuống chậm và có kiểm soát. Đổi chân. Lặp 10-15 lần mỗi bên",
      "Không xoay hông hay nghiêng người sang bên khi thực hiện động tác",
    ]},
    { type: "heading", content: "Bài 5: Nâng gót chân đứng (Calf Raise)" },
    { type: "para", content: "Bắp chân (calf) đóng vai trò bơm máu về tim và hỗ trợ giảm sưng cho khớp gối. Bài tập này cũng cải thiện tuần hoàn máu toàn bộ chân dưới và giảm cảm giác nặng nề sau một ngày dài." },
    { type: "list", items: [
      "Đứng thẳng, hai chân rộng bằng vai. Tay vịn nhẹ vào ghế hoặc tường để giữ thăng bằng",
      "Từ từ nhón hai gót chân lên cao hết mức có thể — giữ 2-3 giây",
      "Hạ xuống chậm rãi — KHÔNG thả gót xuống đột ngột, kiểm soát đến khi gót chạm sàn nhẹ nhàng",
      "Lặp 15-20 lần, 2-3 hiệp. Nâng cao: tập một chân khi đã quen",
    ]},
    { type: "heading", content: "Bài 6: Bước lên bậc thang (Step-Up)" },
    { type: "para", content: "Bài tập chức năng mô phỏng thực tế hàng ngày — giúp người thoái hóa khớp gối đi cầu thang an toàn và tự tin hơn. Tập có kiểm soát giúp xây dựng sức mạnh và sự phối hợp cần thiết cho vận động thực tế." },
    { type: "list", items: [
      "Đứng trước một bậc thang thấp khoảng 10-15cm (hoặc dùng một cuốn sách dày đặt dưới chân)",
      "Bước chân phải lên bậc trước, đẩy cơ đùi và mông để kéo cơ thể lên — giữ lưng thẳng",
      "Đặt chân trái lên bậc cạnh chân phải rồi bước xuống từng bước. Lặp 10 lần mỗi bên",
      "Tay có thể vịn tường bên cạnh khi mới tập, giảm dần khi đã quen. Không vội, không nhún mạnh",
    ]},
    { type: "heading", content: "Bài 7: Đi bộ — bài tập quan trọng và đơn giản nhất" },
    { type: "para", content: "Đi bộ đều đặn mỗi ngày là liệu pháp vận động có bằng chứng khoa học mạnh nhất cho thoái hóa khớp gối. Phân tích tổng hợp năm 2025 xác nhận: tập thể dục aerobic (bao gồm đi bộ) mang lại lợi ích về giảm đau và cải thiện chức năng lớn hơn so với nhiều can thiệp khác. Không cần phòng gym, không cần dụng cụ — chỉ cần đôi giày phù hợp và sự kiên trì." },
    { type: "list", items: [
      "Bắt đầu từ 10-15 phút mỗi ngày nếu chưa quen tập — tăng dần 5 phút mỗi tuần",
      "Mục tiêu dài hạn: 30 phút mỗi ngày, 5 ngày mỗi tuần theo khuyến cáo của OARSI",
      "Đi trên mặt phẳng bằng phẳng, tránh đường dốc cao hoặc gồ ghề trong giai đoạn đầu",
      "Chọn giày đế mềm, đệm tốt — giày không phù hợp làm tăng đáng kể lực tác động lên khớp gối",
      "Đi bộ dưới nước hoặc trong hồ bơi (aqua walking): giảm 50-70% trọng lực lên khớp — cực kỳ phù hợp khi đau nặng",
      "Đạp xe đạp tĩnh cũng là lựa chọn tốt: tập aerobic mà không tải trọng mạnh lên khớp",
    ]},
    { type: "highlight", content: "Một phân tích năm 2025 so sánh đi bộ có hỗ trợ và đi bộ tự do ở bệnh nhân thoái hóa khớp gối — kết quả: cả hai đều cải thiện đau và chức năng đáng kể. Yếu tố quan trọng nhất không phải là bài tập bạn chọn, mà là sự kiên trì và đều đặn." },
    { type: "heading", content: "Những gì TUYỆT ĐỐI TRÁNH khi bị thoái hóa khớp gối" },
    { type: "list", items: [
      "Ngồi xổm sâu hoặc quỳ lâu: tạo áp lực lên sụn khớp gấp 5-8 lần trọng lượng cơ thể",
      "Chạy bộ trên mặt đường nhựa cứng khi cơ đùi chưa đủ mạnh: tăng tốc độ mòn sụn",
      "Các môn thể thao va chạm: bóng đá, bóng rổ, cầu lông cường độ cao trong giai đoạn đau",
      "Ngồi hoặc đứng một tư thế quá lâu: thay đổi tư thế mỗi 30-45 phút, đứng lên đi lại vài bước",
      "Leo cầu thang nhiều lần không cần thiết trong giai đoạn đau cấp",
      "Tăng cân: mỗi 1kg tăng thêm tạo khoảng 3-4kg áp lực lên mỗi đầu gối khi đi bộ",
      "Dừng tập hoàn toàn vì sợ đau: nghịch lý nhưng ngồi yên một chỗ thường làm khớp đau hơn về lâu dài",
    ]},
    { type: "heading", content: "Lịch tập gợi ý trong tuần" },
    { type: "list", items: [
      "Thứ 2, 4, 6: Nâng chân thẳng + Siết cơ đùi tĩnh + Ngồi đứng + Kéo gót chân + Nâng gót chân (khoảng 25-30 phút)",
      "Thứ 3, 5: Đi bộ 20-30 phút nhẹ nhàng hoặc đạp xe đạp tĩnh 20 phút",
      "Thứ 7: Đi bộ dài hơn (30-45 phút) hoặc thêm bài Bước lên bậc thang",
      "Chủ nhật: Nghỉ ngơi hoặc hoạt động nhẹ — kéo giãn nhẹ nhàng không xoay gối",
      "Mỗi buổi tập: 5 phút khởi động trước và 5 phút kéo giãn thả lỏng sau khi tập",
    ]},
    { type: "note", content: "Nguyên tắc 2 giờ: nếu sau khi tập đầu gối đau hơn và kéo dài hơn 2 giờ — bạn đang tập quá sức. Giảm số lần lặp hoặc thời gian xuống 50% và thử lại. Một chút đau cơ bắp sau tập là bình thường, nhưng đau khớp tăng kéo dài là dấu hiệu cần điều chỉnh." },
    { type: "heading", content: "Khi nào cần gặp bác sĩ ngay?" },
    { type: "warning", content: "Liên hệ bác sĩ ngay nếu: đau tăng đột ngột sau khi đang ổn định | đầu gối sưng to, nóng đỏ bất thường (có thể viêm khớp cấp) | cảm giác khớp lỏng, bị kẹt không duỗi thẳng được | đau về đêm làm mất ngủ kéo dài | đã tập đúng phương pháp 8-12 tuần nhưng hoàn toàn không cải thiện." },
    { type: "para", content: "Thoái hóa khớp gối là bệnh mãn tính — không có thuốc chữa khỏi hoàn toàn, nhưng hoàn toàn có thể kiểm soát tốt để giữ chất lượng cuộc sống. Bài tập đúng cách, đều đặn mỗi ngày là nền tảng quan trọng nhất của điều trị. Bác sĩ có thể kê thêm thuốc giảm đau, hỗ trợ tiêm khớp hay vật lý trị liệu chuyên sâu — nhưng việc tập luyện hằng ngày là trách nhiệm của chính bạn và không ai có thể thay thế bạn làm điều đó." },
    { type: "note", content: "Tài liệu tham khảo: OARSI Guidelines for Knee Osteoarthritis (2019, cập nhật 2022); AAOS Clinical Practice Guideline on Knee OA (2021); Supervised or Home-Based Exercise for Knee OA: Systematic Review and Meta-Analysis, PMC (2025); Nonoperative Management Recommendations for Knee OA — PMC (2025). Bài viết mang tính giáo dục sức khỏe — không thay thế tư vấn y tế trực tiếp." },
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
