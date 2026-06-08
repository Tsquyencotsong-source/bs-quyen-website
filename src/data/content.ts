// ─── THÔNG TIN CÁ NHÂN ─────────────────────────────────────────
export const DOCTOR = {
  name: "Nguyễn Ngọc Quyền",
  fullTitle: "TS.BS. Nguyễn Ngọc Quyền",
  degree: "Tiến sĩ Y khoa (2021)",
  specialty: "Chuyên ngành Cột sống",
  position: "Phó Chủ nhiệm Khoa Khám bệnh đa khoa (C1.1-A)",
  hospital: "Bệnh viện Trung ương Quân đội 108",
  hospitalShort: "Bệnh viện TWQĐ 108",
  department: "Trung tâm Khám bệnh đa khoa và điều trị theo yêu cầu",
  email: "bsquyenptcs108@gmail.com",
  phone: "0989 052 288",
  orcid: "https://orcid.org/0000-0001-7114-4157",
  orcidId: "0000-0001-7114-4157",
  ielts: "IELTS 6.0 (12/2024)",
  tagline:
    "Mỗi bệnh nhân mang đến không chỉ một tổn thương cần điều trị, mà còn mang theo nỗi lo về khả năng đi lại và sự độc lập trong cuộc sống. Mục tiêu của tôi là giúp họ phục hồi cả hai.",
} as const;

// ─── SỐ LIỆU THỐNG KÊ ──────────────────────────────────────────
export const STATS = [
  { num: "45", label: "Bài báo khoa học", sub: "đã công bố" },
  { num: "6",  label: "Bài báo ISI",      sub: "quốc tế uy tín" },
  { num: "20+",label: "Năm",              sub: "kinh nghiệm lâm sàng" },
  { num: "3",  label: "Học viên",         sub: "đang hướng dẫn" },
] as const;

// ─── LĨNH VỰC CHUYÊN MÔN ───────────────────────────────────────
export const EXPERTISE = [
  {
    num: "01",
    title: "Gãy xẹp đốt sống do loãng xương",
    badge: "Hướng chính",
    body: "Bệnh lý phổ biến ở người cao tuổi nhưng thường bị đánh giá chưa đủ mức. Người bệnh không chỉ đau lưng — họ đối mặt với nguy cơ mất vận động và mất sự độc lập trong sinh hoạt. Nghiên cứu tập trung vào yếu tố tiên lượng, khi nào bảo tồn đủ, khi nào cần can thiệp tạo hình thân đốt sống và quy trình theo dõi chuẩn hóa.",
    keywords: ["Kyphoplasty", "Barthel Index", "Tiên lượng phục hồi", "Chất lượng cuộc sống"],
    meta: ["Người cao tuổi", "Phụ nữ sau mãn kinh"],
  },
  {
    num: "02",
    title: "Loãng xương trong phẫu thuật cột sống",
    badge: "",
    body: "Mật độ xương kém làm tăng nguy cơ lỏng vít, xẹp thân đốt và phẫu thuật lại. Đánh giá loãng xương trước mổ phải là một phần chiến lược điều trị. Tích hợp DXA, Hounsfield Unit trên CT, yếu tố nguy cơ lâm sàng và tình trạng dinh dưỡng để ra quyết định chính xác hơn.",
    keywords: ["DXA", "Hounsfield Unit", "Pedicle screw", "Biến chứng cơ học"],
    meta: ["Đánh giá trước mổ", "Phòng ngừa biến chứng"],
  },
  {
    num: "03",
    title: "Thoái hóa & biến dạng cột sống người lớn",
    badge: "",
    body: "Vẹo cột sống thắt lưng do thoái hóa, hẹp ống sống, trượt đốt sống và các chiến lược cố định-hàn xương ở người cao tuổi. Nhóm khó vì thường đa bệnh lý, xương kém — điều trị phải cân bằng giữa hiệu quả và nguy cơ biến chứng.",
    keywords: ["TLIF · PLIF", "Spondylolisthesis", "Adult deformity", "Lumbar stenosis"],
    meta: ["Phẫu thuật cột sống", "Chỉnh hình biến dạng"],
  },
  {
    num: "04",
    title: "Ứng dụng AI trong y học cột sống",
    badge: "",
    body: "Phát triển ứng dụng hỗ trợ chuẩn hóa dữ liệu lâm sàng–hình ảnh học, phân tầng nguy cơ, cá thể hóa điều trị loãng xương và xây dựng hệ sinh thái tri thức y học cá nhân. AI không thay thế bác sĩ, nhưng giúp bác sĩ quyết định tốt hơn.",
    keywords: ["Phân tầng nguy cơ", "Hỗ trợ quyết định", "Notion · Claude · Obsidian"],
    meta: ["Nghiên cứu ứng dụng", "Đào tạo số"],
  },
] as const;

// ─── DANH SÁCH BÀI BÁO ─────────────────────────────────────────
export type Publication = {
  year: string;
  title: string;
  journal: string;
  ref: string;
  tags: { label: string; type: "isi" | "main" | "vn" }[];
};

export const PUBLICATIONS: Publication[] = [
  {
    year: "2025",
    title: "Tình trạng vận động, sinh hoạt hàng ngày theo thang điểm Barthel ở bệnh nhân gãy xẹp đốt sống có loãng xương",
    journal: "Y học Cộng đồng",
    ref: "ISSN 2354-0613 · Tập 66(5), tr. 365–370",
    tags: [{ label: "Tác giả chính", type: "main" }, { label: "Quốc gia uy tín", type: "vn" }],
  },
  {
    year: "2025",
    title: "Clinical Manifestations and Imaging Findings of Patients with Lumbar Degeneration Combined with Osteoporosis",
    journal: "Vietnam Medical Journal",
    ref: "ISSN 1859-1868 · Vol. 550(1), pp. 38–43",
    tags: [{ label: "Tác giả chính", type: "main" }, { label: "Quốc gia uy tín", type: "vn" }],
  },
  {
    year: "2023",
    title: "The Feasibility of Multiple Fixation Points in C2",
    journal: "Asian Spine Journal",
    ref: "pISSN 1976-1902 · doi: 10.31616/asj.2023.0233",
    tags: [{ label: "ISI", type: "isi" }, { label: "Tác giả chính", type: "main" }],
  },
  {
    year: "2022",
    title: "Delayed Infection 34 Months After IntraSPINE® Dynamic Internal Insertion",
    journal: "International Medical Case Reports Journal",
    ref: "ISSN 1179-142X · Vol. 2022:15, pp. 479–483",
    tags: [{ label: "ISI", type: "isi" }, { label: "Tác giả chính", type: "main" }],
  },
  {
    year: "2022",
    title: "Radiological Complications of Short-Segment Pedicle Screw Fixation Combined with TLIF for Unstable Thoracolumbar Burst Fracture",
    journal: "Orthopedic Research and Reviews",
    ref: "ISSN 1179-1462 · Vol. 14, pp. 91–99",
    tags: [{ label: "ISI", type: "isi" }, { label: "Tác giả liên hệ", type: "main" }],
  },
  {
    year: "2011",
    title: "Ceramic Fracture Following Cervical Disc Arthroplasty: A Case Report",
    journal: "Journal of Bone and Joint Surgery (Am)",
    ref: "ISSN 1535-1386 · 93(22):e132(1–4) · doi: 10.2106/JBJS.K.00077",
    tags: [{ label: "ISI", type: "isi" }, { label: "Tác giả chính", type: "main" }, { label: "J Bone Joint Surg", type: "vn" }],
  },
];

// ─── BÀI VIẾT / BLOG ────────────────────────────────────────────
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  audience: string;
  category: string;
  date: string;
};

export const POSTS: Post[] = [
  {
    slug: "dinh-duong-thoai-hoa-khop-goi",
    title: "Dinh Dưỡng Cho Người Thoái Hóa Khớp Gối: Ăn Gì Để Khớp Khỏe, Tránh Gì Để Không Đau Thêm — Bằng Chứng Khoa Học 2025",
    excerpt: "Những gì bạn ăn mỗi ngày có thể âm thầm làm khớp gối viêm và thoái hóa nhanh hơn — hoặc ngược lại, giúp giảm đau và làm chậm quá trình phá hủy sụn. Từ chế độ ăn Địa Trung Hải, omega-3, collagen thủy phân đến curcumin chuẩn hóa: bác sĩ cột sống tổng hợp bằng chứng mới nhất 2025 và hướng dẫn thực hành cụ thể cho bệnh nhân Việt Nam.",
    audience: "Cho bệnh nhân",
    category: "Dinh dưỡng & Bổ sung",
    date: "2026-06-08",
  },
  {
    slug: "boi-loi-cot-song-co-xuong-khop",
    title: "Bơi Lội — 'Phòng Tập Lý Tưởng' Dưới Nước Cho Người Bệnh Cột Sống Và Cơ Xương Khớp: Khoa Học Nói Gì?",
    excerpt: "Ngâm tới ngực, nước nâng đỡ 75% trọng lượng cơ thể, giải nén cột sống và khớp một cách tự nhiên. Từ đau lưng mạn, thoái hóa khớp gối - khớp háng đến đau cơ xơ hóa, bằng chứng khoa học cho thấy bơi giúp giảm đau và phục hồi vận động an toàn. Bác sĩ cột sống giải thích: bơi kiểu nào cho ai, sự thật về bơi và loãng xương, và ai cần thận trọng.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-06-05",
  },
  {
    slug: "thuc-pham-chuc-nang-thoai-hoa-khop-goi",
    title: "Thực Phẩm Chức Năng Cho Thoái Hóa Khớp Gối: Bảng Xếp Hạng Theo Bằng Chứng Khoa Học 2025 — Cái Nào Thực Sự Có Ích, Cái Nào Là Tiền Ném Qua Cửa Sổ?",
    excerpt: "Từ glucosamine đến boswellia, curcumin đến krill oil — meta-analysis 4.599 bệnh nhân năm 2025 xếp hạng rõ ràng cái nào hiệu quả nhất. Bác sĩ cột sống giải thích thẳng thắn: loại nào đáng tiền, liều bao nhiêu, dùng bao lâu, và ai không nên dùng.",
    audience: "Cho bệnh nhân",
    category: "Dinh dưỡng & Bổ sung",
    date: "2026-06-04",
  },
  {
    slug: "thoai-hoa-khop-goi-phuong-phap-dieu-tri",
    title: "Thoái Hóa Khớp Gối: Toàn Bộ Phương Pháp Điều Trị Từ Tập Luyện Đến Phẫu Thuật — Chỉ Định, Hiệu Quả Và Biến Chứng Cần Biết",
    excerpt: "Tập luyện giảm đau ngang NSAIDs. Tiêm corticosteroid chỉ hiệu quả 6 tuần. PRP kéo dài 6-12 tháng. Nội soi khớp đã bị loại khỏi guideline. Thay khớp toàn phần đạt 94% hài lòng. Bài viết tổng hợp toàn bộ bằng chứng khoa học mới nhất về từng phương pháp — để bạn và bác sĩ đưa ra quyết định điều trị đúng nhất.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-06-03",
  },
  {
    slug: "thoai-hoa-khop-goi-dinh-nghia-nguyen-nhan-co-che",
    title: "Thoái Hóa Khớp Gối: Hiểu Đúng Từ Định Nghĩa, Cơ Chế Đến Chẩn Đoán — Vì Sao Bệnh Lại Phổ Biến Và Nguy Hiểm Đến Vậy?",
    excerpt: "34% người Việt trên 40 tuổi đã bị thoái hóa khớp gối mà nhiều người không biết. Bài viết giải thích đầy đủ từ định nghĩa, cơ chế phá hủy sụn từng bước, phân loại Kellgren-Lawrence đến triệu chứng nhận biết sớm và cách bác sĩ chẩn đoán — để bạn hiểu đúng thay vì 'sống chung với đau' một cách mù quáng.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-06-02",
  },
  {
    slug: "tu-tap-luyen-thoai-hoa-khop-goi",
    title: "Thoái Hóa Khớp Gối: 7 Bài Tập Đơn Giản Tại Nhà Giúp Giảm Đau Và Đi Lại Tốt Hơn",
    excerpt: "Không phải ngồi yên một chỗ — bài tập đúng cách mới là thuốc số 1 cho thoái hóa khớp gối. 7 bài tập đã được kiểm chứng khoa học, hướng dẫn từng bước, kèm lịch tập trong tuần — dành cho bất kỳ ai đang đau gối.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-06-01",
  },
  {
    slug: "phuc-hoi-sau-kyphoplasty-tap-luyen",
    title: "Tập Luyện Sau Bơm Xi Măng Kyphoplasty: Hướng Dẫn Phục Hồi Từng Tuần Cho Người Bệnh Xẹp Đốt Sống",
    excerpt: "Kyphoplasty giảm đau trong 24-72 giờ — nhưng phục hồi đúng cách mới quyết định chất lượng cuộc sống lâu dài. Hướng dẫn tập luyện theo từng tuần, từ bơm cổ chân trên giường bệnh đến đi bộ 30 phút mỗi ngày, dựa trên bằng chứng từ 12 thử nghiệm lâm sàng quốc tế.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-31",
  },
  {
    slug: "tu-tap-luyen-xep-dot-song-loang-xuong",
    title: "Tự Tập Luyện Khi Bị Xẹp Đốt Sống Do Loãng Xương: Hướng Dẫn An Toàn Và Hiệu Quả",
    excerpt: "Nằm yên quá nhiều sau xẹp đốt sống có hại không kém gì tập sai. Bài viết cung cấp hướng dẫn tập luyện an toàn theo từng giai đoạn — từ giai đoạn cấp đến phục hồi lâu dài — dựa trên chương trình Too Fit to Fracture và kinh nghiệm lâm sàng tại BV TWQĐ 108.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-30",
  },
  {
    slug: "loang-xuong-nam-gioi-dich-te-nguyen-nhan-co-che",
    title: "Loãng Xương Ở Nam Giới: Kẻ Thù Vô Hình Mà 80% Đàn Ông Không Biết Mình Đang Đối Mặt",
    excerpt: "40% ca gãy xương do loãng xương toàn cầu xảy ra ở nam giới. Tỷ lệ tử vong sau gãy xương hông ở đàn ông cao hơn phụ nữ. Vậy tại sao đến hơn 80% nam giới mắc bệnh vẫn chưa được điều trị? Hiểu đúng dịch tễ, nguyên nhân và cơ chế phân tử — để không trở thành một trong số đó.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-29",
  },
  {
    slug: "dau-lung-khi-nao-gap-bac-si",
    title: "Đau lưng — Khi nào cần đến gặp bác sĩ cột sống?",
    excerpt: "Đa số cơn đau lưng tự cải thiện được, nhưng có những dấu hiệu cảnh báo không nên bỏ qua — đặc biệt là đau kèm tê bì chân, yếu cơ hoặc đau cấp ở người cao tuổi sau một động tác nhỏ.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2025-05-01",
  },
  {
    slug: "loang-xuong-truoc-phau-thuat",
    title: "Đánh giá loãng xương trước phẫu thuật cột sống: DXA chưa đủ",
    excerpt: "Tích hợp Hounsfield Unit trên CT, tình trạng dinh dưỡng và yếu tố nguy cơ lâm sàng bên cạnh DXA để ra quyết định phẫu thuật chính xác hơn ở bệnh nhân loãng xương.",
    audience: "Cho đồng nghiệp",
    category: "Lâm sàng",
    date: "2025-04-10",
  },
  {
    slug: "ai-trong-nghien-cuu-y-hoc",
    title: "Dùng AI trong nghiên cứu y học: thực dụng và tỉnh táo",
    excerpt: "Claude, ChatGPT có thể hỗ trợ đáng kể trong viết bài và tổng quan tài liệu — nhưng bác sĩ phải là người kiểm tra, định hướng và chịu trách nhiệm cuối cùng.",
    audience: "AI & Công cụ số",
    category: "Công nghệ",
    date: "2025-03-20",
  },
  {
    slug: "thoat-vi-dia-dem-co-can-mo",
    title: "Thoát vị đĩa đệm — Có nhất thiết phải phẫu thuật?",
    excerpt: "Đa số người bệnh thoát vị đĩa đệm cải thiện tốt với điều trị bảo tồn. Phẫu thuật chỉ được xem xét trong các tình huống cụ thể. Hiểu đúng giúp người bệnh đưa ra quyết định phù hợp.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2025-03-01",
  },
  {
    slug: "barthel-index-trong-theo-doi-gay-xep",
    title: "Dùng thang điểm Barthel theo dõi bệnh nhân gãy xẹp đốt sống",
    excerpt: "Thang điểm Barthel đơn giản, dễ dùng tại phòng khám, cho phép theo dõi tiến triển hoạt động sinh hoạt hàng ngày và so sánh nhóm bệnh nhân trong nghiên cứu.",
    audience: "Cho đồng nghiệp",
    category: "Lâm sàng",
    date: "2025-02-15",
  },
  {
    slug: "loang-xuong-o-nguoi-cao-tuoi",
    title: "Loãng xương ở người cao tuổi: phát hiện sớm và phòng ngừa gãy xương",
    excerpt: "Loãng xương thường không có triệu chứng cho đến khi xảy ra gãy xương. Hiểu rõ các yếu tố nguy cơ và cách tầm soát giúp phòng ngừa hậu quả nghiêm trọng.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2025-01-20",
  },
  {
    slug: "loang-xuong-phu-nu-sau-man-kinh",
    title: "Loãng xương ở phụ nữ sau mãn kinh: Kẻ thù thầm lặng chưa được quan tâm thỏa đáng",
    excerpt: "Loãng xương không gõ cửa trước. Nó đến lặng lẽ và chỉ lộ diện khi một cú ngã nhẹ cũng đủ để gãy xương.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-20",
  },
  {
    slug: "bom-xi-mang-tao-hinh-dot-song",
    title: "Bơm xi măng tạo hình đốt sống: Hiệu quả giảm đau nhanh — nhưng không phải đích đến cuối cùng",
    excerpt: "Kỹ thuật bơm xi măng có thể giảm đau kịch tính trong 24–48 giờ. Nhưng nếu không điều trị loãng xương song song, đốt sống kế cận sẽ tiếp tục bị vỡ.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-21",
  },
  {
    slug: "bai-tap-phuc-hoi-cot-song-that-lung",
    title: "9 bài tập phục hồi chức năng bệnh lý cột sống thắt lưng",
    excerpt: "Các bài tập đơn giản, có thể tự thực hiện tại nhà giúp giảm đau, tăng cường cơ lưng và cải thiện vận động cột sống thắt lưng.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-21",
  },
  {
    slug: "loang-xuong-co-che-va-nguyen-nhan",
    title: "Loãng xương: Tại sao xương ngày càng yếu đi?",
    excerpt: "Xương không phải là khối đá cứng — đó là bộ phận sống động, luôn được tái tạo. Hiểu đúng cơ chế giúp bạn phòng ngừa loãng xương hiệu quả hơn.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-22",
  },
  {
    slug: "chan-doan-loang-xuong-phuong-phap-va-doi-tuong",
    title: "Chẩn đoán loãng xương: Phương pháp nào và ai nên được kiểm tra?",
    excerpt: "Loãng xương thường không có triệu chứng cho đến khi gãy xương — nhưng hoàn toàn có thể phát hiện sớm. Hiểu đúng các phương pháp chẩn đoán và biết mình có thuộc nhóm cần tầm soát hay không là bước đầu tiên để bảo vệ xương.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-22",
  },
  {
    slug: "canh-bao-thuoc-dau-cot-song-khong-ro-nguon-goc",
    title: "Cẩn Trọng Với Thuốc Trị Đau Cột Sống Không Rõ Nguồn Gốc: Nguy Cơ Suy Vỏ Tuyến Thượng Thận Và Loãng Xương Nặng Hơn",
    excerpt: "Nhiều bệnh nhân đau lưng, đau cột sống tự mua hoặc được mách dùng các loại thuốc gia truyền, thuốc không rõ nguồn gốc — tiềm ẩn nguy cơ suy vỏ tuyến thượng thận và làm loãng xương trở nên trầm trọng hơn.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-22",
  },
  {
    slug: "tu-y-bo-thuoc-loang-xuong",
    title: "Tự ý bỏ thuốc điều trị loãng xương: Nguy cơ bạn chưa biết",
    excerpt: "Nhiều bệnh nhân tự ý ngưng thuốc vì thấy 'đỡ rồi' hoặc sợ tác dụng phụ — nhưng với một số loại thuốc, đặc biệt là Denosumab, việc ngưng đột ngột có thể gây gãy nhiều đốt sống chỉ sau vài tháng.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-25",
  },
  {
    slug: "di-bo-dieu-chinh-goc-ban-chan-giam-dau-khop-goi",
    title: "Điều Chỉnh Góc Bàn Chân Khi Đi Bộ: Phương Pháp Mới Giảm Đau Khớp Gối Không Cần Thuốc",
    excerpt: "Nghiên cứu đăng trên The Lancet Rheumatology (2025) cho thấy chỉ cần điều chỉnh góc bàn chân thêm 5–10 độ khi đi bộ, bệnh nhân thoái hóa khớp gối có thể giảm đau tương đương thuốc không kê đơn — không phẫu thuật, không tác dụng phụ.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-26",
  },
  {
    slug: "phong-ngua-loang-xuong-phu-nu-sau-man-kinh",
    title: "Sau Mãn Kinh, Xương Phụ Nữ Mất 2-4% Mỗi Năm — Và Đây Là Cách Ngăn Lại",
    excerpt: "Cứ 3 phụ nữ trên 50 tuổi thì có 1 người bị loãng xương mà không hay biết. Bài viết tổng hợp từ guideline quốc tế 2024 và nghiên cứu 43.000 bệnh nhân: đây là những gì thực sự có căn cứ khoa học để bảo vệ xương sau mãn kinh.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-28",
  },
  {
    slug: "loang-xuong-khong-dieu-tri-gay-vo-dot-song",
    title: "Loãng Xương Không Điều Trị: Khi Đốt Sống Vỡ Vụn Từng Ngày Mà Người Bệnh Không Hay",
    excerpt: "Cúi nhặt cái chổi, ho một cái, hắt hơi — và đốt sống gãy. Đây không phải chuyện lạ với bệnh nhân loãng xương nặng không được điều trị. Bác sĩ cột sống BV TWQĐ 108 chia sẻ hình ảnh thật và sự thật đau lòng mà 80% bệnh nhân loãng xương tại Việt Nam chưa biết.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-26",
  },
  {
    slug: "loi-khuyen-suc-khoe-nang-nong-cuc-doan",
    title: "Lời Khuyên Bảo Vệ Sức Khỏe Trong Những Ngày Nắng Nóng Cực Đoan",
    excerpt: "Nắng nóng cực đoan không chỉ gây mệt mỏi — nó có thể dẫn đến sốc nhiệt, đột quỵ và tử vong trong vài giờ. Bộ Y tế và WHO khuyến cáo 7 nhóm hành động cụ thể để bảo vệ bản thân và gia đình trong những ngày nhiệt độ vượt 39°C.",
    audience: "Cho bệnh nhân",
    category: "Giáo dục sức khỏe",
    date: "2026-05-26",
  },
];

// ─── HỌC VIÊN ĐANG HƯỚNG DẪN ────────────────────────────────────
export const TRAINEES = [
  {
    type: "Cao học",
    school: "ĐH Thăng Long",
    year: "2026",
    name: "Vũ Hồng Vân",
    thesis:
      "Thực trạng vận động, sinh hoạt hàng ngày của người bệnh xẹp đốt sống có loãng xương đến khám tại Phòng khám Cột sống — Bệnh viện TWQĐ 108 năm 2025",
  },
  {
    type: "Bác sĩ nội trú",
    school: "ĐH Y Dược Thái Nguyên",
    year: "2026",
    name: "Bùi Văn Kha",
    thesis:
      "Kết quả phẫu thuật cột sống lối sau điều trị trượt đốt sống thắt lưng trên bệnh nhân loãng xương tại Bệnh viện TWQĐ 108",
  },
  {
    type: "Bác sĩ nội trú",
    school: "ĐH Y Dược Thái Nguyên",
    year: "2026",
    name: "Lê Thanh Tùng",
    thesis:
      "Kết quả phẫu thuật lối sau điều trị vẹo cột sống thắt lưng do thoái hóa tại Bệnh viện TWQĐ 108",
  },
] as const;
