/* ==========================================================================
   LỘ TRÌNH 108 — Bộ sinh mã QR (tự viết, không dùng thư viện ngoài)
   --------------------------------------------------------------------------
   Chỉ làm đúng phần cần dùng: chế độ byte, mức sửa lỗi M, phiên bản 1–10.
   Đủ cho một đường link khoảng 200 ký tự.

   Vì sao không dùng thư viện có sẵn: phần mềm phải chạy được khi KHÔNG có
   mạng và khi mở trực tiếp từ file, nên mọi thứ phải nằm trong máy.

   Đã đối chiếu từng ô với thư viện chuẩn (python "qrcode") và giải mã lại
   bằng OpenCV để chắc chắn quét được.
   ========================================================================== */

/* ---------- Số học trên trường GF(256) dùng cho mã sửa lỗi Reed–Solomon ---------- */
const QR_EXP = new Uint8Array(512), QR_LOG = new Uint8Array(256);
(function () {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    QR_EXP[i] = x; QR_LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;          // đa thức nguyên thủy
  }
  for (let i = 255; i < 512; i++) QR_EXP[i] = QR_EXP[i - 255];
})();
function qrNhan(a, b) { return (a === 0 || b === 0) ? 0 : QR_EXP[QR_LOG[a] + QR_LOG[b]]; }

function qrDaThucSinh(n) {                // đa thức sinh cho n từ mã sửa lỗi
  let p = [1];
  for (let i = 0; i < n; i++) {
    const q = [1, QR_EXP[i]], r = new Array(p.length + 1).fill(0);
    for (let j = 0; j < p.length; j++)
      for (let k = 0; k < 2; k++) r[j + k] ^= qrNhan(p[j], q[k]);
    p = r;
  }
  return p;
}
function qrSuaLoi(data, n) {
  const g = qrDaThucSinh(n), r = new Array(n).fill(0);
  for (const d of data) {
    const h = d ^ r[0];
    r.shift(); r.push(0);
    if (h) for (let i = 0; i < n; i++) r[i] ^= qrNhan(g[i + 1], h);
  }
  return r;
}

/* ---------- Bảng dung lượng, mức sửa lỗi M, phiên bản 1–10 ----------
   [tổng số từ mã, số từ sửa lỗi mỗi khối, [số khối, số từ dữ liệu], ...] */
const QR_BANG = {
  1:  [26,  10, [[1, 16]]],
  2:  [44,  16, [[1, 28]]],
  3:  [70,  26, [[1, 44]]],
  4:  [100, 18, [[2, 32]]],
  5:  [134, 24, [[2, 43]]],
  6:  [172, 16, [[4, 27]]],
  7:  [196, 18, [[4, 31]]],
  8:  [242, 22, [[2, 38], [2, 39]]],
  9:  [292, 22, [[3, 36], [2, 37]]],
  10: [346, 26, [[4, 43], [1, 44]]]
};
const QR_CANH = {                          // tâm các ô định vị phụ
  1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30],
  6: [6, 34], 7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50]
};

function qrSoTuDuLieu(v) {
  return QR_BANG[v][2].reduce((s, [sk, sd]) => s + sk * sd, 0);
}

/* ---------- Ghi bit ---------- */
function QrBit() { this.bit = []; }
QrBit.prototype.them = function (giaTri, soBit) {
  for (let i = soBit - 1; i >= 0; i--) this.bit.push((giaTri >> i) & 1);
};

/* ---------- Hàm chính: trả về ma trận true/false ---------- */
function taoQR(chuoi) {
  // 1. chuyển sang byte (UTF-8)
  const byte = [];
  for (const b of new TextEncoder().encode(chuoi)) byte.push(b);

  // 2. chọn phiên bản nhỏ nhất chứa đủ
  let v = 0;
  for (let i = 1; i <= 10; i++) {
    const soBitDem = i < 10 ? 8 : 16;
    if (4 + soBitDem + byte.length * 8 <= qrSoTuDuLieu(i) * 8) { v = i; break; }
  }
  if (!v) throw new Error('Chuỗi quá dài cho mã QR phiên bản 10');

  const [tong, ecMoiKhoi, nhomKhoi] = QR_BANG[v];
  const soTuDuLieu = qrSoTuDuLieu(v);

  // 3. dựng chuỗi bit
  const bs = new QrBit();
  bs.them(4, 4);                                   // chế độ byte
  bs.them(byte.length, v < 10 ? 8 : 16);           // số ký tự
  byte.forEach(b => bs.them(b, 8));
  const toiDa = soTuDuLieu * 8;
  bs.them(0, Math.min(4, toiDa - bs.bit.length));  // dấu kết thúc
  while (bs.bit.length % 8) bs.bit.push(0);
  const du = [0xEC, 0x11];
  for (let i = 0; bs.bit.length < toiDa; i++) bs.them(du[i % 2], 8);

  const tuMa = [];
  for (let i = 0; i < bs.bit.length; i += 8) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bs.bit[i + j];
    tuMa.push(b);
  }

  // 4. chia khối, tính từ mã sửa lỗi, rồi đan xen
  const khoiDL = [], khoiEC = [];
  let p = 0;
  for (const [soKhoi, soDL] of nhomKhoi) {
    for (let i = 0; i < soKhoi; i++) {
      const d = tuMa.slice(p, p + soDL); p += soDL;
      khoiDL.push(d);
      khoiEC.push(qrSuaLoi(d, ecMoiKhoi));
    }
  }
  const cuoi = [];
  const dlDaiNhat = Math.max(...khoiDL.map(b => b.length));
  for (let i = 0; i < dlDaiNhat; i++)
    for (const b of khoiDL) if (i < b.length) cuoi.push(b[i]);
  for (let i = 0; i < ecMoiKhoi; i++)
    for (const b of khoiEC) cuoi.push(b[i]);

  // 5. dựng ma trận
  const co = v * 4 + 17;
  const m = Array.from({ length: co }, () => new Array(co).fill(null));
  const datOTinh = (r, c, giaTri) => { m[r][c] = giaTri; };

  function veODinhVi(r, c) {
    for (let i = -1; i <= 7; i++)
      for (let j = -1; j <= 7; j++) {
        const y = r + i, x = c + j;
        if (y < 0 || y >= co || x < 0 || x >= co) continue;
        const trong = (i >= 0 && i <= 6 && (j === 0 || j === 6)) ||
                      (j >= 0 && j <= 6 && (i === 0 || i === 6)) ||
                      (i >= 2 && i <= 4 && j >= 2 && j <= 4);
        datOTinh(y, x, trong);
      }
  }
  veODinhVi(0, 0); veODinhVi(0, co - 7); veODinhVi(co - 7, 0);

  for (const t of QR_CANH[v])
    for (const t2 of QR_CANH[v]) {
      if ((t === 6 && t2 === 6) || (t === 6 && t2 === co - 7) || (t === co - 7 && t2 === 6)) continue;
      for (let i = -2; i <= 2; i++)
        for (let j = -2; j <= 2; j++)
          datOTinh(t + i, t2 + j, Math.max(Math.abs(i), Math.abs(j)) !== 1);
    }

  for (let i = 8; i < co - 8; i++) {           // hàng/cột đồng hồ
    datOTinh(6, i, i % 2 === 0);
    datOTinh(i, 6, i % 2 === 0);
  }
  datOTinh(co - 8, 8, true);                   // ô tối bắt buộc

  // chừa chỗ cho thông tin định dạng
  for (let i = 0; i < 9; i++) { if (m[8][i] === null) m[8][i] = false; if (m[i][8] === null) m[i][8] = false; }
  for (let i = 0; i < 8; i++) { if (m[8][co - 1 - i] === null) m[8][co - 1 - i] = false; if (m[co - 1 - i][8] === null) m[co - 1 - i][8] = false; }

  // chừa chỗ cho thông tin phiên bản (từ phiên bản 7)
  if (v >= 7)
    for (let i = 0; i < 6; i++)
      for (let j = 0; j < 3; j++) { m[i][co - 11 + j] = false; m[co - 11 + j][i] = false; }

  const daCoDinh = m.map(h => h.map(o => o !== null));

  // 6. rải dữ liệu theo đường zigzag
  let idx = 0, bitIdx = 0, huong = -1, hang = co - 1;
  for (let cot = co - 1; cot > 0; cot -= 2) {
    if (cot === 6) cot--;                      // bỏ qua cột đồng hồ
    while (true) {
      for (let i = 0; i < 2; i++) {
        const c = cot - i;
        if (!daCoDinh[hang][c]) {
          let bit = false;
          if (idx < cuoi.length) bit = ((cuoi[idx] >> (7 - bitIdx)) & 1) === 1;
          m[hang][c] = bit;
          bitIdx++;
          if (bitIdx === 8) { bitIdx = 0; idx++; }
        }
      }
      hang += huong;
      if (hang < 0 || hang >= co) { hang -= huong; huong = -huong; break; }
    }
  }

  // 7. thử 8 mặt nạ, chọn mặt nạ ít điểm phạt nhất
  const matNa = [
    (r, c) => (r + c) % 2 === 0,
    (r, c) => r % 2 === 0,
    (r, c) => c % 3 === 0,
    (r, c) => (r + c) % 3 === 0,
    (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
    (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
    (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
    (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0
  ];

  let tot = null, diemTot = Infinity;
  for (let k = 0; k < 8; k++) {
    const t = m.map(h => h.slice());
    for (let r = 0; r < co; r++)
      for (let c = 0; c < co; c++)
        if (!daCoDinh[r][c] && matNa[k](r, c)) t[r][c] = !t[r][c];
    qrGhiDinhDang(t, k, co);
    if (v >= 7) qrGhiPhienBan(t, v, co);
    const d = qrDiemPhat(t, co);
    if (d < diemTot) { diemTot = d; tot = t; }
  }
  return { co, o: tot };
}

/* ---------- Thông tin định dạng (mức M = 00) ---------- */
function qrGhiDinhDang(m, matNa, co) {
  let so = (0 << 3) | matNa;                  // 00 = mức sửa lỗi M
  let d = so << 10;
  for (let i = 4; i >= 0; i--) if (d & (1 << (i + 10))) d ^= 0x537 << i;
  const bits = ((so << 10) | d) ^ 0x5412;

  for (let i = 0; i <= 5; i++) m[i][8] = ((bits >> i) & 1) === 1;
  m[7][8] = ((bits >> 6) & 1) === 1;
  m[8][8] = ((bits >> 7) & 1) === 1;
  m[8][7] = ((bits >> 8) & 1) === 1;
  for (let i = 9; i <= 14; i++) m[8][14 - i] = ((bits >> i) & 1) === 1;

  for (let i = 0; i <= 7; i++) m[8][co - 1 - i] = ((bits >> i) & 1) === 1;
  for (let i = 8; i <= 14; i++) m[co - 15 + i][8] = ((bits >> i) & 1) === 1;
}

/* ---------- Thông tin phiên bản (từ phiên bản 7) ---------- */
function qrGhiPhienBan(m, v, co) {
  let d = v << 12;
  for (let i = 5; i >= 0; i--) if (d & (1 << (i + 12))) d ^= 0x1f25 << i;
  const bits = (v << 12) | d;
  for (let i = 0; i < 18; i++) {
    const b = ((bits >> i) & 1) === 1;
    m[Math.floor(i / 3)][co - 11 + (i % 3)] = b;
    m[co - 11 + (i % 3)][Math.floor(i / 3)] = b;
  }
}

/* ---------- Điểm phạt để chọn mặt nạ ---------- */
function qrDiemPhat(m, co) {
  let p = 0;
  // quy tắc 1: chuỗi cùng màu từ 5 ô trở lên
  for (let r = 0; r < co; r++)
    for (const ngang of [true, false]) {
      let dem = 1, truoc = null;
      for (let c = 0; c < co; c++) {
        const o = ngang ? m[r][c] : m[c][r];
        if (o === truoc) { dem++; if (dem === 5) p += 3; else if (dem > 5) p++; }
        else { truoc = o; dem = 1; }
      }
    }
  // quy tắc 2: khối 2×2 cùng màu
  for (let r = 0; r < co - 1; r++)
    for (let c = 0; c < co - 1; c++)
      if (m[r][c] === m[r][c + 1] && m[r][c] === m[r + 1][c] && m[r][c] === m[r + 1][c + 1]) p += 3;
  // quy tắc 3: hình giống ô định vị
  const mau1 = [true, false, true, true, true, false, true, false, false, false, false];
  const mau2 = [false, false, false, false, true, false, true, true, true, false, true];
  const khop = (lay) => {
    let d = 0;
    for (let i = 0; i + 11 <= co; i++) {
      let a = true, b = true;
      for (let j = 0; j < 11; j++) {
        const o = lay(i + j);
        if (o !== mau1[j]) a = false;
        if (o !== mau2[j]) b = false;
      }
      if (a) d += 40;
      if (b) d += 40;
    }
    return d;
  };
  for (let r = 0; r < co; r++) p += khop(i => m[r][i]);
  for (let c = 0; c < co; c++) p += khop(i => m[i][c]);
  // quy tắc 4: tỉ lệ ô tối
  let toi = 0;
  for (let r = 0; r < co; r++) for (let c = 0; c < co; c++) if (m[r][c]) toi++;
  const tiLe = (toi * 100) / (co * co);
  p += Math.floor(Math.abs(tiLe - 50) / 5) * 10;
  return p;
}

/* ---------- Vẽ ra SVG để in được nét ---------- */
function qrRaSVG(chuoi, canhPx, vienO) {
  const { co, o } = taoQR(chuoi);
  const vien = vienO == null ? 2 : vienO;
  const tong = co + vien * 2;
  let d = '';
  for (let r = 0; r < co; r++)
    for (let c = 0; c < co; c++)
      if (o[r][c]) d += 'M' + (c + vien) + ' ' + (r + vien) + 'h1v1h-1z';
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + tong + ' ' + tong +
    '" width="' + canhPx + '" height="' + canhPx + '" shape-rendering="crispEdges">' +
    '<rect width="' + tong + '" height="' + tong + '" fill="#fff"/>' +
    '<path d="' + d + '" fill="#000"/></svg>';
}

if (typeof module !== 'undefined' && module.exports) module.exports = { taoQR, qrRaSVG };
