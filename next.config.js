/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Chuyển hướng các URL hỏng mà Google Search Console báo 404
  async redirects() {
    return [
      // Google bò nhầm chuỗi "/bên" trong JS của bai-tap-lung.html (đã gỡ 16/11/2026)
      { source: "/b%C3%AAn", destination: "/bai-tap-lung", permanent: true },
      { source: "/bên", destination: "/bai-tap-lung", permanent: true },
      // Link bị cắt cụt từ một trang Facebook bên ngoài
      { source: "/blog/thoat-vi-dia-", destination: "/blog/thoat-vi-dia-dem-co-can-mo", permanent: true },
    ];
  },
};
module.exports = nextConfig;
