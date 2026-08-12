"use client";

import { useEffect, useState } from "react";

// Đếm lượt truy cập bằng dịch vụ miễn phí Abacus (jasoncameron.dev).
// Mỗi phiên trình duyệt chỉ +1 một lần; các lần tải lại chỉ đọc số hiện tại.
const NS = "bsquyen108";
const KEY = "luot-truy-cap";
const BASE = "https://abacus.jasoncameron.dev";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const counted = sessionStorage.getItem("bq_counted");
    const url = counted ? `${BASE}/get/${NS}/${KEY}` : `${BASE}/hit/${NS}/${KEY}`;
    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        if (typeof d.value === "number") {
          setCount(d.value);
          sessionStorage.setItem("bq_counted", "1");
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <span
      className="inline-flex items-center gap-1.5 text-[12px] text-white/45"
      title="Tổng lượt truy cập website"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span>{count.toLocaleString("vi-VN")} lượt truy cập</span>
    </span>
  );
}
