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
