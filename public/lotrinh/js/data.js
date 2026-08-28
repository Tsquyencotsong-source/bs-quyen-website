/* ==========================================================================
   LỘ TRÌNH 108 — Dữ liệu nền  ·  phiên bản 3
   Khoa Khám bệnh đa khoa (C1.1-A) — cổng 1B Trần Hưng Đạo
   --------------------------------------------------------------------------
   PHIÊN BẢN NÀY DỰNG TỪ ẢNH VÀ VIDEO KHẢO SÁT THỰC ĐỊA (27/08/2026)
   do TS.BS Nguyễn Ngọc Quyền chụp tại chỗ.

   xacNhan:true  = có ảnh/video chứng minh, đọc được biển hoặc số phòng.
   xacNhan:false = CHƯA CÓ ẢNH, phần mềm tạm điền — Khoa phải xác nhận.
   ========================================================================== */

const VIEN = {
  ten: 'Bệnh viện Trung ương Quân đội 108',
  khu: 'Khoa Khám bệnh đa khoa — cổng 1B Trần Hưng Đạo',
  gioLamViec: '6h30 – 17h00, thứ 2 – thứ 6',
  tongDai: '1900 986 869'
};

/* --------------------------------------------------------------------------
   1. TOÀ NHÀ — theo khảo sát thực địa
   -------------------------------------------------------------------------- */
const TOA_NHA_MAC_DINH = [
  { id:'n1a',  ten:'Nhà N1A', xacNhan:true,
    moTa:'Đi thẳng từ cổng 1B vào. Tầng 1 là sảnh ĐĂNG KÝ KHÁM (cửa 2, 6, 99). Tầng 2 có phòng khám 201–212.' },
  { id:'n1b',  ten:'Nhà N1B', xacNhan:true,
    moTa:'Liền ngay nhà N1A. Tầng 1 là khu X-quang và khu chụp CT – MRI (đối diện Trung tâm thẩm mỹ). Tầng 2 có phòng khám 215–234 và khu LẤY MÁU.' },
  { id:'ht12', ten:'Hội trường 12', xacNhan:true,
    moTa:'Sảnh nối giữa nhà N1A và nhà N1B ở TẦNG 2. Đây là nơi LẤY ỐNG XÉT NGHIỆM.' },
  { id:'n2a',  ten:'Nhà N2A', xacNhan:true,
    moTa:'Tầng 2 có phòng khám 235–247. Lên bằng thang máy hoặc cầu thang bộ, ra khỏi thang rẽ tay phải.' },
  { id:'n2b',  ten:'Nhà N2B', xacNhan:true,
    moTa:'Tầng 1 là khu NỘI SOI TIÊU HOÁ. Từ lối vào khu X-quang rẽ tay trái.' },
  { id:'nha21', ten:'Nhà 21 tầng — Toà tháp đôi (toà nhà trung tâm)', xacNhan:true,
    moTa:'Toà cao nhất viện, nhìn thấy từ xa. Tầng 2 có phòng đo điện cơ và các phòng chụp cộng hưởng từ (Toà trung tâm 2, Toà trung tâm 3).' },
  { id:'xatri', ten:'Trung tâm Xạ trị', xacNhan:false,
    moTa:'CẦN KHOA XÁC NHẬN đứng ở đâu so với Trung tâm Cyberknife cạnh nhà N3. Tầng 2 có phòng đo mật độ xương.' },
  { id:'n3',   ten:'Nhà N3', xacNhan:true,
    moTa:'Toà riêng. Tầng 1 hiến máu tình nguyện, tầng 2 Trung tâm khám sức khoẻ, tầng 3 Khoa khám bệnh theo yêu cầu, tầng 4 Khoa Phẫu thuật và điều trị theo yêu cầu.' }
];

/* --------------------------------------------------------------------------
   2. THỜI GIAN ĐI BỘ GIỮA CÁC TOÀ (phút)
   --------------------------------------------------------------------------
   VẪN LÀ SỐ TẠM — suy ra từ video, CHƯA BẤM ĐỒNG HỒ.
   Cách đo thật: hai người đi thử từng cặp một lượt, lấy thời gian người chậm hơn.
   Chỉ có 15 cặp, mất một buổi.
   -------------------------------------------------------------------------- */
const THOI_GIAN_DI_MAC_DINH = {
  'n1a|n1b':  { phut: 2, ngoaiTroi: false, xacNhan:false },
  'n1a|ht12': { phut: 1, ngoaiTroi: false, xacNhan:false },
  'n1b|ht12': { phut: 1, ngoaiTroi: false, xacNhan:false },
  'n1a|n2a':  { phut: 4, ngoaiTroi: false, xacNhan:false },
  'n1b|n2a':  { phut: 3, ngoaiTroi: false, xacNhan:false },
  'ht12|n2a': { phut: 3, ngoaiTroi: false, xacNhan:false },
  'n1a|n2b':  { phut: 4, ngoaiTroi: false, xacNhan:false },
  'n1b|n2b':  { phut: 2, ngoaiTroi: false, xacNhan:false },
  'ht12|n2b': { phut: 3, ngoaiTroi: false, xacNhan:false },
  'n2a|n2b':  { phut: 4, ngoaiTroi: false, xacNhan:false },
  'n1a|n3':   { phut: 6, ngoaiTroi: true,  xacNhan:false },
  'n1b|n3':   { phut: 6, ngoaiTroi: true,  xacNhan:false },
  'ht12|n3':  { phut: 7, ngoaiTroi: true,  xacNhan:false },
  'n2a|n3':   { phut: 7, ngoaiTroi: true,  xacNhan:false },
  'n2b|n3':   { phut: 7, ngoaiTroi: true,  xacNhan:false },
  'n1a|nha21':  { phut: 7, ngoaiTroi: true, xacNhan:false },
  'n1b|nha21':  { phut: 7, ngoaiTroi: true, xacNhan:false },
  'ht12|nha21': { phut: 8, ngoaiTroi: true, xacNhan:false },
  'n2a|nha21':  { phut: 7, ngoaiTroi: true, xacNhan:false },
  'n2b|nha21':  { phut: 7, ngoaiTroi: true, xacNhan:false },
  'n3|nha21':   { phut: 6, ngoaiTroi: true, xacNhan:false },
  'n1a|xatri':   { phut: 8, ngoaiTroi: true, xacNhan:false },
  'n1b|xatri':   { phut: 8, ngoaiTroi: true, xacNhan:false },
  'ht12|xatri':  { phut: 9, ngoaiTroi: true, xacNhan:false },
  'n2a|xatri':   { phut: 8, ngoaiTroi: true, xacNhan:false },
  'n2b|xatri':   { phut: 8, ngoaiTroi: true, xacNhan:false },
  'n3|xatri':    { phut: 5, ngoaiTroi: true, xacNhan:false },
  'nha21|xatri': { phut: 5, ngoaiTroi: true, xacNhan:false }
};

/* --------------------------------------------------------------------------
   2b. LUẬT SIÊU ÂM THEO BUỔI  (Khoa cung cấp 27/08/2026)
   --------------------------------------------------------------------------
   Buổi sáng chỉ vài phòng siêu âm làm việc nên chờ rất lâu. Buổi chiều được
   tăng cường thêm các phòng siêu âm theo yêu cầu nên nhanh hơn hẳn.

   Hệ quả cho việc sắp thứ tự:
   - Người bệnh vào sớm, rời phòng khám TRƯỚC 7h00: siêu âm còn vắng
     -> cho đi SIÊU ÂM TRƯỚC, rồi mới CT / MRI.
   - Rời phòng khám SAU 7h30: siêu âm đã đông
     -> cho đi CT / MRI TRƯỚC, siêu âm để sau (càng về chiều càng nhanh).
   - Khoảng 7h00–7h30 là vùng giao, giữ nguyên thứ tự mặc định.
   -------------------------------------------------------------------------- */
const LUAT_SIEU_AM = {
  gioSom:       420,   // 7h00 — trước mốc này thì ưu tiên siêu âm trước
  gioMuon:      450,   // 7h30 — sau mốc này thì đẩy siêu âm xuống sau CT/MRI
  gioChieu:     780,   // 13h00 — từ đây có thêm phòng siêu âm theo yêu cầu
  heSoChoSang:  1.5,   // nhân thêm vào thời gian chờ siêu âm buổi sáng
  heSoChoChieu: 0.7,   // buổi chiều nhanh hơn
  uuTienSom:    3,     // thứ tự ưu tiên của siêu âm khi đi sớm
  uuTienMuon:   6,     // khi đi muộn (sau CT=4, MRI=5)
  uuTienCTMuon: 4,
  uuTienMRIMuon: 5
};

/* --------------------------------------------------------------------------
   2c. TRANG CHO NGƯỜI BỆNH QUÉT MÃ QR
   --------------------------------------------------------------------------
   Để TRỐNG thì mã QR trỏ về chính chỗ đang mở phần mềm — đủ để chạy thử
   trong mạng bệnh viện. Khi có địa chỉ chính thức, điền vào đây MỘT LẦN,
   ví dụ:  diaChi: 'https://<tên miền của viện>/lotrinh/dt.html'
   -------------------------------------------------------------------------- */
const CAU_HINH_QR = {
  diaChi: 'https://bsquyen108.com/lotrinh/dt.html',   // địa chỉ chính thức
  hienTrenPhieu: true  // in mã QR lên góc phiếu A4
};

const PHUT_TRONG_TOA_CUNG_TANG = 3;
const PHUT_MOI_TANG            = 2;
const HE_SO_DI_LAI_KHO         = 1.4;

/* --------------------------------------------------------------------------
   3. LUỒNG THEO ĐỐI TƯỢNG
   -------------------------------------------------------------------------- */
const LUONG_MAC_DINH = [
  { id:'bhyt',   ten:'BHYT (chuyển tuyến hoặc đăng ký ban đầu tại 108)',
    dangKyTai:'cua2', nopTienXN:false, quayThuoc:'thuocbh', cuaKetLuan:'cua8_n1b',
    luuY:'Không phải nộp tiền xét nghiệm. Lấy thuốc tại QUẦY THUỐC BHYT, KHÔNG phải Nhà thuốc số 2.' },
  { id:'dichvu', ten:'Khám dịch vụ',
    dangKyTai:'cua6', nopTienXN:true,  quayThuoc:'thuoc2', cuaKetLuan:'cua8_n1b',
    luuY:'Nộp tiền xét nghiệm tại cửa số 8 (tầng 2) trước khi đi làm. Lấy thuốc tại Nhà thuốc số 2.' },
  { id:'ksk',    ten:'Khám sức khỏe / kiểm tra sức khỏe',
    dangKyTai:'cua6', nopTienXN:true,  quayThuoc:'thuoc2', cuaKetLuan:'cua8_n1b',
    luuY:'Nộp tiền theo gói đã đăng ký. Trung tâm khám sức khoẻ ở tầng 2 nhà N3.' }
];

/* --------------------------------------------------------------------------
   4. NHÓM ƯU TIÊN — PHẢI xin Phòng Kế hoạch tổng hợp bản chính thức
   -------------------------------------------------------------------------- */
const UU_TIEN_MAC_DINH = [
  { id:'khong',     ten:'Không thuộc diện ưu tiên' },
  { id:'capcuu',    ten:'Cấp cứu' },
  { id:'nguoicong', ten:'Người có công với cách mạng / thương binh' },
  { id:'caotuoi',   ten:'Người cao tuổi (theo ngưỡng quy định của Bệnh viện)' },
  { id:'khuyettat', ten:'Người khuyết tật nặng / đặc biệt nặng' },
  { id:'treem',     ten:'Trẻ em nhỏ tuổi' }
];

/* --------------------------------------------------------------------------
   5. BẢNG VỊ TRÍ
   tang  : CHUỖI để hiển thị — chứa được "1,5"
   caoDo : SỐ để tính thời gian lên xuống
   -------------------------------------------------------------------------- */
const VI_TRI_MAC_DINH = [

  /* ===== TẦNG 1 NHÀ N1A — ĐĂNG KÝ ===== */
  { id:'sanh_n1a', ten:'Sảnh đăng ký khám — tầng 1 nhà N1A', toaNha:'n1a', tang:'1', caoDo:1, phong:'sảnh chính',
    moTa:'Đi thẳng từ cổng 1B vào là tới. Trước lối vào có Kiosk đăng ký khám dịch vụ.',
    gioMo:390, gioDong:1020, xacNhan:true },

  { id:'bansothutu', ten:'Bàn phát số thứ tự đăng ký', toaNha:'n1a', tang:'1', caoDo:1, phong:'trong sảnh',
    moTa:'Bên phải sảnh tầng 1 nhà N1A, ngay cạnh khu ghế chờ đăng ký khám dịch vụ.',
    gioMo:390, gioDong:1020, xacNhan:true },

  { id:'photo_bhyt', ten:'Quầy phô tô thẻ BHYT / cho mượn xe lăn', toaNha:'n1a', tang:'1', caoDo:1, phong:'trên đường vào',
    moTa:'Trên đường từ cổng 1B đi vào, bên TAY PHẢI. Cũng là nơi lấy số đăng ký khám BHYT và mượn xe lăn.',
    gioMo:390, gioDong:1020, xacNhan:true },

  { id:'cua6',  ten:'Cửa số 6 — Đăng ký khám DỊCH VỤ', toaNha:'n1a', tang:'1', caoDo:1, phong:'Cửa 6',
    moTa:'Trong sảnh tầng 1 nhà N1A, cạnh khu ghế chờ đăng ký khám dịch vụ thường.',
    gioMo:390, gioDong:1020, xacNhan:true },

  { id:'cua2',  ten:'Cửa số 2 — Đăng ký khám BẢO HIỂM Y TẾ', toaNha:'n1a', tang:'1', caoDo:1, phong:'Cửa 2',
    moTa:'Trong sảnh tầng 1 nhà N1A. Lấy số ở quầy phô tô trên đường vào rồi ra ĐÚNG cửa số 2 ngồi chờ.',
    gioMo:390, gioDong:1020, xacNhan:true },

  { id:'cua99', ten:'Cửa 99 — Đăng ký xét nghiệm tự nguyện', toaNha:'n1a', tang:'1', caoDo:1, phong:'Cửa 99',
    moTa:'Trong sảnh tầng 1 nhà N1A.',
    gioMo:390, gioDong:1020, xacNhan:true },

  { id:'thangmay_n1a', ten:'Thang máy đầu nhà N1A', toaNha:'n1a', tang:'1', caoDo:1, phong:'đầu hồi nhà N1A',
    moTa:'Thang máy ở ĐẦU nhà N1A, lên các tầng. Cũng có cầu thang bộ lên tầng 2.',
    gioMo:390, gioDong:1020, xacNhan:true },

  /* ===== TẦNG 2 — PHÒNG KHÁM ===== */
  { id:'pk_n1a', moc:['cauthang_t2'], ten:'Phòng khám 201 – 212 (tầng 2 nhà N1A)', toaNha:'n1a', tang:'2', caoDo:2, phong:'201–212',
    moTa:'Lên tầng 2, rẽ TRÁI. Có bàn đo huyết áp và khu ghế chờ ngay trước các phòng.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'pk_n1b', moc:['cauthang_t2'], ten:'Phòng khám 215 – 234 (tầng 2 nhà N1B)', toaNha:'n1b', tang:'2', caoDo:2, phong:'215–234',
    moTa:'Tầng 2 nhà N1B, đối diện khu lấy máu xét nghiệm.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'pk_n2a', moc:['nganhaitang2','doha_n2a'], ten:'Phòng khám 235 – 247 (tầng 2 nhà N2A)', toaNha:'n2a', tang:'2', caoDo:2, phong:'235–247',
    moTa:'Lên thang máy hoặc cầu thang bộ tới tầng 2, ra khỏi thang rẽ TAY PHẢI. Có bàn đo huyết áp riêng.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  /* ===== TẦNG 2 — THU TIỀN ===== */
  { id:'cua8_n1b', ten:'Cửa số 8 — thu tiền mặt (tầng 2 nhà N1B)', toaNha:'n1b', tang:'2', caoDo:2, phong:'Cửa 8',
    moTa:'Tầng 2 nhà N1B. Đây là cửa 8 gần khu lấy máu và phòng khám 215–234.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'cua8_n1a', ten:'Cửa số 8 — thu tiền mặt (tầng 2 nhà N1A)', toaNha:'n1a', tang:'2', caoDo:2, phong:'Cửa 8',
    moTa:'Tầng 2 nhà N1A. CÓ HAI CỬA SỐ 8 — đây là cửa gần phòng khám 201–212.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  /* ===== HỘI TRƯỜNG 12 — LẤY ỐNG XÉT NGHIỆM ===== */
  { id:'layong', moc:['nganhaitang2','layong_loivao'], ten:'Máy phát mã code dán ống xét nghiệm — Hội trường 12', toaNha:'ht12', tang:'2', caoDo:2, phong:'máy phát mã code',
    moTa:'Sảnh nối giữa nhà N1A và nhà N1B ở tầng 2. Có băng-rôn "LỐI ĐI LẤY MÁU XÉT NGHIỆM". Đi từ tầng 2 nhà N1A hoặc tầng 2 nhà N1B đều tới.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  /* ===== TẦNG 2 NHÀ N1B — LẤY MÁU ===== */
  { id:'laymau', moc:['laymau_loivao'], ten:'Khu lấy máu xét nghiệm — tầng 2 nhà N1B', toaNha:'n1b', tang:'2', caoDo:2, phong:'bàn 01 – 13',
    moTa:'Sảnh tầng 2 nhà N1B, đối diện khu phòng khám. Có dãy bàn đánh số 01 đến 13, mỗi bàn một màn hình gọi số.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810,
    buocTruoc:{ viTri:'layong', ten:'Lấy ống xét nghiệm tại Hội trường 12',
      moTa:'Ra máy phát mã code ở Hội trường 12 (sảnh giữa nhà N1A và N1B, tầng 2) để lấy ống có dán mã. KHÔNG CÓ ỐNG THÌ KHÔNG LẤY MÁU ĐƯỢC — phải quay ra lấy rồi xếp hàng lại từ đầu.' },
    xacNhan:true },

  { id:'nuoctieu', ten:'Nơi nộp mẫu nước tiểu', toaNha:'n1b', tang:'2', caoDo:2, phong:'CẦN XÁC NHẬN',
    moTa:'GIẢ ĐỊNH: cùng khu lấy máu, tầng 2 nhà N1B. CHƯA CÓ ẢNH.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:false },

  /* ===== TẦNG 1 NHÀ N1B — X-QUANG ===== */
  { id:'xquang', moc:['loivao_cls'], ten:'Chụp X-quang — phòng 101 đến 105', toaNha:'n1b', tang:'1', caoDo:1, phong:'101 – 105',
    moTa:'Khoa X-quang chẩn đoán, tầng 1 nhà N1B. Từ lối vào khu cận lâm sàng rẽ TAY PHẢI. Các phòng liền nhau, mỗi phòng có màn hình gọi số riêng.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'xquang_2', moc:['loivao_cls'], ten:'Chụp X-quang — phòng 106 đến 114', toaNha:'n1b', tang:'1', caoDo:1, phong:'106 – 114',
    moTa:'Cùng tầng 1 nhà N1B, là dãy phòng X-quang thứ hai, đi tiếp qua dãy 101–105.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  /* ===== ĐẦU HỒI NHÀ N1B — CT & MRI (đối diện Trung tâm thẩm mỹ) ===== */
  { id:'ct_n1b', moc:['loivao_cls'], ten:'Chụp cắt lớp vi tính (CT) — Khoa Chẩn đoán hình ảnh C8', toaNha:'n1b', tang:'1', caoDo:1, phong:'đầu hồi nhà N1B',
    moTa:'Tầng 1, ĐẦU HỒI nhà N1B, ĐỐI DIỆN TRUNG TÂM THẨM MỸ, cạnh cầu thang thoát hiểm. Biển xanh "PHÒNG CHỤP CẮT LỚP VI TÍNH — KHOA CHẨN ĐOÁN HÌNH ẢNH (C8)". Từ lối vào khu cận lâm sàng đi THẲNG.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'mri_n1b', moc:['loivao_cls'], ten:'Chụp cộng hưởng từ (MRI) — Khoa Chẩn đoán hình ảnh', toaNha:'n1b', tang:'1', caoDo:1, phong:'đầu hồi nhà N1B',
    moTa:'Tầng 1, ĐẦU HỒI nhà N1B, ĐỐI DIỆN TRUNG TÂM THẨM MỸ, cạnh phòng chụp cắt lớp vi tính.',
    gioMo:390, gioDong:1080, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'mri_yeucau', moc:['ct_tanglung_thang'], ten:'Chụp cộng hưởng từ 1.5T THEO YÊU CẦU — nhà N1A', toaNha:'n1a', tang:'1', caoDo:1, phong:'khu khám theo yêu cầu',
    moTa:'Khu "HƯỚNG DẪN KHÁM BỆNH THEO YÊU CẦU", tầng 1 đầu hồi nhà N1A, ngay cạnh chân cầu thang bộ lên tầng lửng chụp cắt lớp.',
    gioMo:390, gioDong:1080, nghiTruaTu:690, nghiTruaDen:810,
    doiTuong:['dichvu','ksk'], xacNhan:true },

  { id:'ct_tanglung', moc:['ct_tanglung_thang'], ten:'Chụp cắt lớp vi tính — TẦNG LỬNG nhà N1A', toaNha:'n1a', tang:'1,5', caoDo:1.5, phong:'tầng lửng đầu hồi',
    moTa:'ĐI BẰNG CẦU THANG BỘ lên TẦNG LỬNG (tầng 1,5) ở đầu hồi nhà N1A — có biển xanh "PHÒNG CHỤP CẮT LỚP VI TÍNH ↑" ngay chân cầu thang. Đây KHÔNG phải phòng CT ở tầng 1 đối diện Trung tâm thẩm mỹ.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  /* ===== TẦNG 1 NHÀ N2B — NỘI SOI ===== */
  { id:'noisoi_tiepdon', moc:['loivao_cls'], ten:'Quầy tiếp đón nội soi — tầng 1 nhà N2B', toaNha:'n2b', tang:'1', caoDo:1, phong:'quầy tiếp đón',
    moTa:'Tầng 1 nhà N2B. PHẢI QUA QUẦY NÀY TRƯỚC khi vào phòng nội soi.',
    gioMo:390, gioDong:960, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'noisoi', ten:'Khu phòng nội soi tiêu hoá — tầng 1 nhà N2B', toaNha:'n2b', tang:'1', caoDo:1, phong:'khu nội soi',
    moTa:'Tầng 1 nhà N2B. Từ lối vào khu cận lâm sàng rẽ TAY TRÁI.',
    gioMo:390, gioDong:960, nghiTruaTu:690, nghiTruaDen:810,
    buocTruoc:{ viTri:'noisoi_tiepdon', ten:'Đăng ký tại quầy tiếp đón nội soi',
      moTa:'Đưa phiếu chỉ định tại quầy tiếp đón ở tầng 1 nhà N2B trước, rồi mới vào khu phòng nội soi.' },
    xacNhan:true },

  /* ===== NHÀ N3 ===== */
  { id:'sanh_n3', ten:'Sảnh đầu nhà N3', toaNha:'n3', tang:'1', caoDo:1, phong:'sảnh',
    moTa:'Tầng 1 hiến máu tình nguyện · tầng 2 Trung tâm khám sức khoẻ · tầng 3 Khoa khám bệnh theo yêu cầu · tầng 4 Khoa Phẫu thuật và điều trị theo yêu cầu.',
    gioMo:390, gioDong:1020, xacNhan:true },

  /* ===== NHÀ THUỐC ===== */
  { id:'thuoc2', ten:'Nhà thuốc số 2 — thuốc DỊCH VỤ', toaNha:'n1a', tang:'1', caoDo:1, phong:'Nhà thuốc 2',
    moTa:'Cấp thuốc ngoại trú cho người bệnh DỊCH VỤ. Người bệnh BHYT KHÔNG lấy thuốc ở đây.',
    gioMo:390, gioDong:1020, xacNhan:true },

  { id:'thuocbh', ten:'Cấp phát thuốc ngoại trú BẢO HIỂM Y TẾ — Khoa Dược', toaNha:'n2a', tang:'1', caoDo:1, phong:'quầy 2 · 3 · 4',
    moTa:'Tầng 1 nhà N2A. Biển trắng chữ xanh trên cửa: "KHOA DƯỢC — CẤP PHÁT THUỐC NGOẠI TRÚ BẢO HIỂM Y TẾ". Có khu ghế chờ ngay trước cửa. Đây KHÔNG phải Nhà thuốc số 2.',
    gioMo:390, gioDong:1020, xacNhan:true },

  /* ===== CHƯA CÓ ẢNH — CẦN KHẢO SÁT BỔ SUNG ===== */
  { id:'mri_tt2', ten:'Chụp cộng hưởng từ — Toà trung tâm 2', toaNha:'nha21', tang:'2', caoDo:2, phong:'CẦN XÁC NHẬN',
    moTa:'Tầng 2 nhà 21 tầng — toà tháp đôi. CHƯA CÓ ẢNH và chưa có số phòng.',
    gioMo:390, gioDong:1080, nghiTruaTu:690, nghiTruaDen:810, xacNhan:false },

  { id:'mri_tt3', ten:'Chụp cộng hưởng từ — Toà trung tâm 3', toaNha:'nha21', tang:'2', caoDo:2, phong:'CẦN XÁC NHẬN',
    moTa:'Tầng 2 nhà 21 tầng — toà tháp đôi. CHƯA CÓ ẢNH và chưa có số phòng.',
    gioMo:390, gioDong:1080, nghiTruaTu:690, nghiTruaDen:810, xacNhan:false },

  /* ===== TẦNG 1 NHÀ N3 — MỘT KHU CHUNG cho 7 việc =====
     Biển trên cửa ghi: "KHU VỰC SIÊU ÂM · ĐIỆN TIM · ĐIỆN NÃO · ĐIỆN CƠ ·
     ĐO CHỨC NĂNG HÔ HẤP · LƯU HUYẾT NÃO · ĐO MẬT ĐỘ XƯƠNG".
     Gom làm MỘT điểm để người bệnh chỉ đến một lần, xếp hàng một lượt. */
  { id:'khu_n3', moc:['nganba_trai','cauvom_n2b_n3'],
    ten:'Khu siêu âm – điện tim – điện não – hô hấp',
    toaNha:'n3', tang:'1', caoDo:1, phong:'khu chức năng tầng 1',
    moTa:'Tầng 1 nhà N3, gần Trung tâm Cyberknife, cạnh lối vào Hiến máu nhân đạo. Đi cầu vòm từ nhà N2B sang. Biển xanh trên cửa liệt kê 7 việc, nhưng Khoa xác nhận HAI việc KHÔNG làm ở đây: đo mật độ xương (tầng 2 Trung tâm Xạ trị) và đo điện cơ (tầng 2 nhà 21 tầng).',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  /* ===== TẦNG 2 TOÀ THÁP ĐÔI — các phòng làm trùng với khu N3 ===== */
  { id:'dienco_tt', moc:['thangcuon_tt','dienco_cua'], ten:'Phòng đo điện cơ (nơi DUY NHẤT) — toà tháp đôi',
    toaNha:'nha21', tang:'2', caoDo:2, phong:'CẦN XÁC NHẬN số phòng',
    moTa:'Tầng 2 nhà 21 tầng — toà tháp đôi. Lên bằng cầu thang cuốn.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'hohap_tt', moc:['thangcuon_tt'], ten:'Đo chức năng hô hấp — toà tháp đôi',
    toaNha:'nha21', tang:'2', caoDo:2, phong:'CẦN XÁC NHẬN số phòng',
    moTa:'Tầng 2 nhà 21 tầng — toà tháp đôi.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  { id:'ct_tt', moc:['thangcuon_tt'], ten:'Chụp cắt lớp vi tính (CT) — toà tháp đôi',
    toaNha:'nha21', tang:'2', caoDo:2, phong:'Khu chụp CT',
    moTa:'Tầng 2 nhà 21 tầng. Biển treo "KHU CHỤP CT / CT Section". Cạnh khu chờ làm xét nghiệm chẩn đoán hình ảnh (Khám chất lượng cao) — CẦN KHOA XÁC NHẬN có nhận người bệnh BHYT không.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:true },

  /* ===== TRUNG TÂM XẠ TRỊ ===== */
  { id:'dexa_xatri', moc:['cyberknife'], ten:'Đo mật độ xương — Trung tâm Xạ trị',
    toaNha:'xatri', tang:'2', caoDo:2, phong:'CẦN XÁC NHẬN số phòng',
    moTa:'Tầng 2 Trung tâm Xạ trị. Đây là nơi DUY NHẤT đo mật độ xương (Khoa chốt 27/08/2026). CHƯA CÓ ẢNH và chưa có số phòng.',
    gioMo:390, gioDong:1020, nghiTruaTu:690, nghiTruaDen:810, xacNhan:false }
];


/* --------------------------------------------------------------------------
   5b. MỐC DỌC ĐƯỜNG — ảnh ngã rẽ
   --------------------------------------------------------------------------
   Người bệnh không lạc ở CỬA PHÒNG, họ lạc ở NGÃ BA trên đường tới.
   Mỗi mốc là một ảnh chụp đúng chỗ phải ra quyết định rẽ, kèm câu tả
   "tay phải là gì, tay trái là gì, đi thẳng là gì".
   Mỗi mốc chỉ in MỘT LẦN trên phiếu, ở bước đầu tiên cần tới nó.
   -------------------------------------------------------------------------- */
const MOC_MAC_DINH = [
  { id:'loivao_cls', ten:'Ngã ba lối vào khu cận lâm sàng',
    moTa:'Tay PHẢI: khu X-quang (phòng 103 – 105). Tay TRÁI: khu nội soi, nhà N2B. Đi THẲNG: phòng chụp cắt lớp vi tính và cộng hưởng từ, đối diện Trung tâm thẩm mỹ.' },
  { id:'nganhaitang2', ten:'Vừa ra khỏi thang máy ở tầng 2',
    moTa:'Tay PHẢI: lối vào phòng khám 235 – 247. Rẽ TRÁI rồi nhìn bên tay trái: phòng khám 201 – 212. Bên tay phải là sảnh có Hội trường 12.' },
  { id:'cauthang_t2', ten:'Cầu thang bộ lên tầng 2',
    moTa:'Lên hết cầu thang là tới khu phòng khám. Ai đi lại khó thì dùng thang máy ở đầu nhà N1A.' },
  { id:'layong_loivao', ten:'Lối vào Hội trường 12 để lấy ống xét nghiệm',
    moTa:'Có băng-rôn "LỐI ĐI LẤY MÁU XÉT NGHIỆM". Đi từ tầng 2 nhà N1A hay tầng 2 nhà N1B đều tới được.' },
  { id:'laymau_loivao', ten:'Lối vào khu lấy máu — sảnh tầng 2 nhà N1B',
    moTa:'Chỉ vào đây SAU KHI đã cầm ống xét nghiệm trong tay.' },
  { id:'xquang2', ten:'Khu X-quang — khu vực thứ hai',
    moTa:'Nếu dãy phòng 103 – 105 quá đông, hỏi nhân viên xem có được chuyển sang khu này không.' },
  { id:'doha_n2a', ten:'Bàn đo huyết áp tầng 2 nhà N2A',
    moTa:'Đo huyết áp tại bàn này trước khi vào phòng khám 235 – 247.' },
  { id:'cauvom_n2b_n3', ten:'Cầu vòm thông từ nhà N2B sang tầng 1 nhà N3',
    moTa:'Đi qua cầu vòm này để sang khu siêu âm – điện tim – điện não. Cạnh lối vào Hiến máu nhân đạo.' },
  { id:'loivao_n3', ten:'Lối vào khu chức năng tầng 1 nhà N3',
    moTa:'Gần Trung tâm Cyberknife. Biển xanh trên cửa ghi đủ 7 việc làm được ở đây.' },
  { id:'cyberknife', ten:'Khu vực Trung tâm Cyberknife',
    moTa:'Mốc dễ nhận để tìm khu chức năng tầng 1 nhà N3 và Trung tâm Xạ trị.' },
  { id:'thangcuon_tt', ten:'Cầu thang cuốn lên tầng 2 toà tháp đôi',
    moTa:'Đi cầu thang cuốn lên tầng 2 nhà 21 tầng (toà nhà trung tâm).' },
  { id:'dienco_cua', ten:'Cửa vào phòng đo điện cơ — tầng 2 toà tháp đôi',
    moTa:'Cửa riêng của phòng đo điện cơ.' },
  { id:'ct_tanglung_thang', ten:'Cầu thang bộ lên tầng lửng chụp cắt lớp',
    moTa:'Đầu hồi nhà N1A. Biển xanh "PHÒNG CHỤP CẮT LỚP VI TÍNH ↑" ngay chân cầu thang. Phòng chụp MRI 1.5 theo yêu cầu cũng ở ngay đây.' },
  { id:'nganba_trai', ten:'Ngã ba — nhìn về bên trái',
    moTa:'Tay TRÁI là hướng đi nội soi (tầng 1 nhà N2B) và khu siêu âm – điện tim – điện não (tầng 1 nhà N3).' },
  { id:'bienchidan', ten:'Biển chỉ dẫn ở lối vào (BIỂN CŨ)',
    moTa:'Biển ghi "PHÒNG CHỤP X.QUANG 1, 2, 3" nhưng thực tế là phòng 103, 104, 105 — người lần đầu đến rất dễ đi tìm nhầm. Đề nghị Khoa cho sửa biển.' }
];

/* --------------------------------------------------------------------------
   6. DANH MỤC XÉT NGHIỆM
   -------------------------------------------------------------------------- */
const DANH_MUC_MAC_DINH = [
  { id:'huyethoc', ten:'Xét nghiệm huyết học (công thức máu)', nhom:'Xét nghiệm', diem:['laymau'],
    nhinAn:false, uuTien:1, bangQuangDay:false, phutLam:5, phutCho:15, phutTraKQ:60,
    chuanBi:['Không cần chuẩn bị đặc biệt'] },

  { id:'sinhhoa', ten:'Xét nghiệm sinh hóa máu (đường, mỡ máu, gan, thận)', nhom:'Xét nghiệm', diem:['laymau'],
    nhinAn:true, uuTien:1, bangQuangDay:false, phutLam:5, phutCho:15, phutTraKQ:90,
    chuanBi:['NHỊN ĂN ít nhất 8 giờ trước khi lấy máu','Được uống nước lọc','Không uống cà phê, sữa, nước ngọt'] },

  { id:'hba1c', ten:'Xét nghiệm HbA1c', nhom:'Xét nghiệm', diem:['laymau'],
    nhinAn:false, uuTien:1, bangQuangDay:false, phutLam:5, phutCho:15, phutTraKQ:90,
    chuanBi:['Không cần nhịn ăn'] },

  { id:'nuoctieu', ten:'Xét nghiệm nước tiểu', nhom:'Xét nghiệm', diem:['nuoctieu'],
    nhinAn:false, uuTien:2, bangQuangDay:false, phutLam:5, phutCho:10, phutTraKQ:60,
    chuanBi:['Lấy nước tiểu giữa dòng vào lọ được phát','Nếu sắp siêu âm ổ bụng: lấy mẫu TRƯỚC rồi uống nước lại'] },

  { id:'sieuambung', ten:'Siêu âm ổ bụng tổng quát', nhom:'Chẩn đoán hình ảnh', diem:['khu_n3'], sieuAm:true,
    nhinAn:true, uuTien:3, bangQuangDay:true, phutLam:10, phutCho:25, phutTraKQ:5,
    chuanBi:['NHỊN ĂN ít nhất 6 giờ','Uống khoảng 500ml nước và NHỊN TIỂU cho căng bàng quang','Không đi vệ sinh trước khi vào phòng'] },

  { id:'sieuamtietnieu', ten:'Siêu âm hệ tiết niệu', nhom:'Chẩn đoán hình ảnh', diem:['khu_n3'], sieuAm:true,
    nhinAn:false, uuTien:3, bangQuangDay:true, phutLam:10, phutCho:20, phutTraKQ:5,
    chuanBi:['Uống khoảng 500ml nước và NHỊN TIỂU cho căng bàng quang'] },

  { id:'sieuamtc', ten:'Siêu âm tử cung — phần phụ', nhom:'Chẩn đoán hình ảnh', diem:['khu_n3'], sieuAm:true,
    nhinAn:false, uuTien:3, bangQuangDay:true, phutLam:10, phutCho:20, phutTraKQ:5,
    chuanBi:['Uống khoảng 500ml nước và NHỊN TIỂU cho căng bàng quang'] },

  { id:'sieuamgiap', ten:'Siêu âm tuyến giáp', nhom:'Chẩn đoán hình ảnh', diem:['khu_n3'], sieuAm:true,
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:8, phutCho:20, phutTraKQ:5,
    chuanBi:['Không cần chuẩn bị','Nên bỏ vòng cổ, khăn quàng trước khi vào'] },

  { id:'sieuamvu', ten:'Siêu âm tuyến vú', nhom:'Chẩn đoán hình ảnh', diem:['khu_n3'], sieuAm:true,
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:10, phutCho:20, phutTraKQ:5,
    chuanBi:['Không cần chuẩn bị'] },

  { id:'sieuamtim', ten:'Siêu âm tim', nhom:'Chẩn đoán hình ảnh', diem:['khu_n3'], sieuAm:true,
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:15, phutCho:25, phutTraKQ:10,
    chuanBi:['Cởi áo phần ngực khi vào phòng','Nghỉ ngơi 5 phút trước khi làm'] },

  { id:'doppler', ten:'Siêu âm Doppler mạch máu', nhom:'Chẩn đoán hình ảnh', diem:['khu_n3'], sieuAm:true,
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:20, phutCho:25, phutTraKQ:10,
    chuanBi:['Mặc quần áo rộng, dễ vén'] },

  { id:'xqnguc', ten:'Chụp X-quang ngực thẳng', nhom:'Chẩn đoán hình ảnh', diem:['xquang','xquang_2'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:5, phutCho:15, phutTraKQ:20,
    chuanBi:['Bỏ hết đồ kim loại: dây chuyền, áo có khuy sắt','BÁO NGAY nếu đang có thai hoặc nghi có thai'] },

  { id:'xqcotsong', ten:'Chụp X-quang cột sống thắt lưng', nhom:'Chẩn đoán hình ảnh', diem:['xquang','xquang_2'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:8, phutCho:15, phutTraKQ:20,
    chuanBi:['Bỏ hết đồ kim loại, thắt lưng có khóa','BÁO NGAY nếu đang có thai hoặc nghi có thai'] },

  { id:'xqkhop', ten:'Chụp X-quang khớp', nhom:'Chẩn đoán hình ảnh', diem:['xquang','xquang_2'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:5, phutCho:15, phutTraKQ:20,
    chuanBi:['Bỏ đồ kim loại ở vùng chụp'] },

  { id:'dexa', ten:'Đo mật độ xương (DEXA)', nhom:'Chẩn đoán hình ảnh', diem:['dexa_xatri'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:15, phutCho:20, phutTraKQ:20,
    chuanBi:['Không uống thuốc có canxi trong 24 giờ trước','Bỏ hết đồ kim loại','Không đo nếu vừa chụp thuốc cản quang trong 7 ngày'] },

  { id:'ct', ten:'Chụp cắt lớp vi tính (CT)', nhom:'Chẩn đoán hình ảnh', diem:['ct_n1b','ct_tanglung','ct_tt'],
    nhinAn:true, uuTien:4, bangQuangDay:false, phutLam:20, phutCho:35, phutTraKQ:45,
    chuanBi:['NHỊN ĂN 4-6 giờ nếu có tiêm thuốc cản quang','Báo bác sĩ nếu từng dị ứng thuốc cản quang','BÁO NGAY nếu đang có thai'] },

  { id:'mri', ten:'Chụp cộng hưởng từ (MRI)', nhom:'Chẩn đoán hình ảnh', diem:['mri_n1b','mri_tt2','mri_tt3','mri_yeucau'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:30, phutCho:40, phutTraKQ:60,
    chuanBi:['BỎ TOÀN BỘ đồ kim loại, thẻ từ, điện thoại, răng giả tháo được','BÁO NGAY nếu có máy tạo nhịp tim, van tim nhân tạo, đinh vít hoặc mảnh kim khí trong người','Nằm yên trong máy 20-30 phút, máy kêu to là bình thường'] },

  { id:'ecg', ten:'Điện tim (ECG)', nhom:'Thăm dò chức năng', diem:['khu_n3'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:8, phutCho:15, phutTraKQ:10,
    chuanBi:['Nghỉ ngơi 5 phút trước khi đo','Mặc áo dễ cởi'] },

  { id:'diennao', ten:'Điện não đồ / đo lưu huyết não', nhom:'Thăm dò chức năng', diem:['khu_n3'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:25, phutCho:20, phutTraKQ:30,
    chuanBi:['Gội đầu sạch, không bôi keo hay dầu dưỡng tóc','Ngủ đủ đêm hôm trước nếu được'] },

  { id:'dientk', ten:'Đo điện cơ', nhom:'Thăm dò chức năng', diem:['dienco_tt'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:30, phutCho:25, phutTraKQ:30,
    chuanBi:['Mặc quần áo rộng dễ vén tay chân','Không bôi kem dưỡng da lên tay chân trước khi đo'] },

  { id:'hohap', ten:'Đo chức năng hô hấp', nhom:'Thăm dò chức năng', diem:['khu_n3','hohap_tt'],
    nhinAn:false, uuTien:9, bangQuangDay:false, phutLam:20, phutCho:20, phutTraKQ:15,
    chuanBi:['Không hút thuốc trong 1 giờ trước','Không ăn no ngay trước khi đo'] },

  { id:'noisoida', ten:'Nội soi dạ dày', nhom:'Nội soi', diem:['noisoi'],
    nhinAn:true, khongUongNuoc:true, uuTien:2, bangQuangDay:false, phutLam:20, phutCho:40, phutTraKQ:20,
    chuanBi:['NHỊN ĂN HOÀN TOÀN ít nhất 8 giờ, kể cả nước','Phải có người nhà đi cùng nếu soi gây mê','Tháo răng giả trước khi soi'] },

  { id:'noisoidt', ten:'Nội soi đại tràng', nhom:'Nội soi', diem:['noisoi'],
    nhinAn:true, khongUongNuoc:true, uuTien:2, bangQuangDay:false, phutLam:35, phutCho:45, phutTraKQ:20,
    chuanBi:['NHỊN ĂN HOÀN TOÀN ít nhất 8 giờ','Uống thuốc làm sạch ruột theo hướng dẫn từ hôm trước','BẮT BUỘC có người nhà đi cùng'] },

  { id:'hpylori', ten:'Test hơi thở H. pylori', nhom:'Xét nghiệm', diem:['laymau'],
    nhinAn:true, khongUongNuoc:true, uuTien:2, bangQuangDay:false, phutLam:30, phutCho:15, phutTraKQ:20,
    chuanBi:['NHỊN ĂN ít nhất 6 giờ','Ngừng kháng sinh và thuốc dạ dày theo dặn dò của bác sĩ'] }
];

/* --------------------------------------------------------------------------
   7. PHIẾU DEMO
   viTriPK: phòng khám nằm ở toà nào — quyết định cửa số 8 nào và đường quay lại
   -------------------------------------------------------------------------- */
const PHIEU_DEMO = [
  { ma:'BH-9001', hoTen:'NGUYỄN VĂN Đ.', tuoi:71, gioiTinh:'Nam', doiTuong:'bhyt', uuTien:'caotuoi',
    phongKham:'Phòng 222 — Khám thần kinh', viTriPK:'pk_n1b', bacSi:'BS. Nguyễn Văn A.',
    ghiChu:'CA TRONG CÂU CHUYỆN THẬT: đau đầu, lần đầu ra viện, đi một mình, mất 2 ngày mới xong.',
    chiDinh:['huyethoc','sinhhoa','diennao','sieuambung','mri','dientk'] },

  { ma:'DV-2481', hoTen:'NGUYỄN VĂN B.', tuoi:58, gioiTinh:'Nam', doiTuong:'dichvu', uuTien:'khong',
    phongKham:'Phòng 208 — Nội tổng hợp', viTriPK:'pk_n1a', bacSi:'BS. Trần Văn C.',
    chiDinh:['huyethoc','sinhhoa','sieuambung','xqnguc','ecg'] },

  { ma:'BH-1075', hoTen:'LÊ THỊ M.', tuoi:67, gioiTinh:'Nữ', doiTuong:'bhyt', uuTien:'khong',
    phongKham:'Phòng 225 — Khám cột sống', viTriPK:'pk_n1b', bacSi:'TS.BS. Nguyễn Ngọc Quyền',
    chiDinh:['huyethoc','sinhhoa','dexa','xqcotsong','mri'] },

  { ma:'KSK-0312', hoTen:'PHẠM QUỐC T.', tuoi:45, gioiTinh:'Nam', doiTuong:'ksk', uuTien:'khong',
    phongKham:'Phòng 240 — Khám sức khỏe', viTriPK:'pk_n2a', bacSi:'BS. Đỗ Thị H.',
    chiDinh:['huyethoc','sinhhoa','nuoctieu','sieuambung','sieuamgiap','xqnguc','ecg','noisoida'] },

  { ma:'DV-2495', hoTen:'TRẦN THỊ N.', tuoi:34, gioiTinh:'Nữ', doiTuong:'dichvu', uuTien:'khong',
    phongKham:'Phòng 205 — Nội tiết', viTriPK:'pk_n1a', bacSi:'BS. Vũ Thị L.',
    chiDinh:['huyethoc','hba1c','sieuamgiap','sieuamtc'] }
];

/* xuất cho Node (kiểm thử ngoài trình duyệt) */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VIEN, TOA_NHA_MAC_DINH, LUAT_SIEU_AM, CAU_HINH_QR, THOI_GIAN_DI_MAC_DINH, LUONG_MAC_DINH, MOC_MAC_DINH,
    UU_TIEN_MAC_DINH, VI_TRI_MAC_DINH, DANH_MUC_MAC_DINH, PHIEU_DEMO,
    PHUT_TRONG_TOA_CUNG_TANG, PHUT_MOI_TANG, HE_SO_DI_LAI_KHO };
}
