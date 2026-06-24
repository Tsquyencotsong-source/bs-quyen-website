"use client";

import React, { useState } from "react";

/* ══ TYPES ══════════════════════════════════════════════════════ */
type ChkItem = { id: string; icon: string; lbl: string };

type Exercise = {
  id: string; name: string; cat: string; cc: string; cb: string;
  maxvas: number; minct: number; contras: string[];
  sets: number; reps: number; hold: string; freq: string;
  desc: string; tip: string; ev: string; evClass: string; ref: string;
  svgKey: string;
};

type WarnItem = { kind: string; msg: string };

type GenResult = {
  nmDisp: string; ageN: number; sexLabel: string;
  bmi: string | null; bmiNote: string; occLabel: string;
  durLabel: string; todLabel: string; dpw: string; tpd: string;
  vasVal: number; vasColor: string; vasLvl: string;
  warns: WarnItem[]; exercises: Exercise[];
};

/* ══ DATA ══════════════════════════════════════════════════════ */
const VASC = ['#27AE60','#2ECC71','#82E0AA','#F1C40F','#F39C12','#E67E22','#E74C3C','#C0392B','#A93226','#922B21','#7B241C'];
const VASD = ['0 – Không đau','1 – Rất nhẹ','2 – Nhẹ','3 – Nhẹ vừa','4 – Vừa','5 – Vừa-khá','6 – Khá nhiều','7 – Nhiều','8 – Rất nhiều','9 – Dữ dội','10 – Cực kỳ dữ dội'];

const LOCS: ChkItem[] = [
  {id:'neck',icon:'🔴',lbl:'Gáy / Cổ sau'},{id:'trap',icon:'🟠',lbl:'Cơ thang (vai-cổ)'},
  {id:'shoulder',icon:'🟡',lbl:'Vùng vai'},{id:'arm',icon:'🟢',lbl:'Cánh tay / Cẳng tay'},
  {id:'head',icon:'🔵',lbl:'Đầu / Đau đầu'},{id:'scap',icon:'🟣',lbl:'Bả vai / Lưng giữa'},
];
const TYPES: ChkItem[] = [
  {id:'ache',icon:'💢',lbl:'Âm ỉ liên tục'},{id:'sharp',icon:'⚡',lbl:'Nhói sắc bén'},
  {id:'stiff',icon:'🧊',lbl:'Cứng / Vướng víu'},{id:'burn',icon:'🔥',lbl:'Nóng / Bỏng rát'},
  {id:'numb',icon:'🌀',lbl:'Tê bì'},{id:'muscle',icon:'💪',lbl:'Cơ căng cứng'},
];
const COMS: ChkItem[] = [
  {id:'htn',icon:'❤️',lbl:'Tăng huyết áp'},{id:'dm',icon:'🩸',lbl:'Đái tháo đường'},
  {id:'osteo',icon:'🦴',lbl:'Loãng xương'},{id:'dizzy',icon:'🌀',lbl:'Chóng mặt / Tiền đình'},
  {id:'heart',icon:'💗',lbl:'Bệnh tim mạch'},{id:'shouldercom',icon:'🤲',lbl:'Viêm quanh khớp vai'},
  {id:'lumbar',icon:'🔶',lbl:'Đau lưng thắt lưng'},{id:'anxiety',icon:'🧠',lbl:'Lo âu / Căng thẳng'},
];

/* ══ SVG ILLUSTRATIONS ══════════════════════════════════════════ */
const SVG_MAP: Record<string, string> = {

chin_tuck: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ct1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker></defs>
  <rect x="45" y="158" width="110" height="9" rx="3" fill="#C49A3C"/>
  <line x1="55" y1="167" x2="51" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="145" y1="167" x2="149" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <rect x="147" y="112" width="9" height="55" rx="3" fill="#C49A3C"/>
  <rect x="57" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <rect x="108" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <ellipse cx="74" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <ellipse cx="125" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <path d="M60,96 Q50,112 50,155 L150,155 Q150,112 140,96 Q128,84 100,84 Q72,84 60,96Z" fill="#4A90D9"/>
  <path d="M60,102 Q44,122 42,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <path d="M140,102 Q156,122 158,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <ellipse cx="158" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <rect x="91" y="66" width="18" height="22" rx="6" fill="#F5CBA7"/>
  <ellipse cx="100" cy="46" rx="30" ry="32" fill="#F5CBA7"/>
  <path d="M70,37 Q76,12 100,12 Q124,12 130,37 Q124,26 100,26 Q76,26 70,37Z" fill="#3D2B1F"/>
  <ellipse cx="88" cy="44" rx="5" ry="4.5" fill="white"/><circle cx="88" cy="44" r="2.5" fill="#2C3E50"/>
  <ellipse cx="112" cy="44" rx="5" ry="4.5" fill="white"/><circle cx="112" cy="44" r="2.5" fill="#2C3E50"/>
  <path d="M83,38 Q88,35 93,38" fill="none" stroke="#3D2B1F" stroke-width="1.8"/>
  <path d="M107,38 Q112,35 117,38" fill="none" stroke="#3D2B1F" stroke-width="1.8"/>
  <path d="M97,52 Q95,58 98,60 Q100,60 102,60 Q105,58 103,52" fill="none" stroke="#C87050" stroke-width="1.5"/>
  <path d="M94,66 Q100,70 106,66" fill="none" stroke="#C87050" stroke-width="2"/>
  <path d="M130,58 L114,58" stroke="#E74C3C" stroke-width="3" marker-end="url(#ct1)" fill="none"/>
  <path d="M70,58 L86,58" stroke="#E74C3C" stroke-width="3" marker-end="url(#ct1)" fill="none"/>
  <ellipse cx="100" cy="62" rx="14" ry="7" fill="none" stroke="#E74C3C" stroke-width="1.8" stroke-dasharray="4,3" opacity=".7"/>
  <text x="100" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#7F77DD" font-family="sans-serif">← Kéo cằm về sau (không cúi cổ) →</text>
</svg>`,

rotation: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="rot1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker>
    <marker id="rot2" markerWidth="9" markerHeight="9" refX="1" refY="4.5" orient="auto-start-reverse"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker>
  </defs>
  <rect x="45" y="158" width="110" height="9" rx="3" fill="#C49A3C"/>
  <line x1="55" y1="167" x2="51" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="145" y1="167" x2="149" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <rect x="147" y="112" width="9" height="55" rx="3" fill="#C49A3C"/>
  <rect x="57" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <rect x="108" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <ellipse cx="74" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <ellipse cx="125" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <path d="M60,96 Q50,112 50,155 L150,155 Q150,112 140,96 Q128,84 100,84 Q72,84 60,96Z" fill="#27AE60"/>
  <path d="M60,102 Q44,122 42,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <path d="M140,102 Q156,122 158,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <ellipse cx="158" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <rect x="91" y="66" width="18" height="22" rx="6" fill="#F5CBA7"/>
  <ellipse cx="106" cy="46" rx="30" ry="32" fill="#F5CBA7"/>
  <path d="M80,37 Q88,12 108,12 Q128,12 132,37 Q126,26 106,26 Q84,26 80,37Z" fill="#3D2B1F"/>
  <ellipse cx="118" cy="43" rx="5" ry="4.5" fill="white"/><circle cx="120" cy="43" r="2.5" fill="#2C3E50"/>
  <ellipse cx="96" cy="43" rx="4" ry="3.5" fill="white"/><circle cx="97" cy="43" r="2" fill="#2C3E50"/>
  <path d="M93,38 Q96,35 100,38" fill="none" stroke="#3D2B1F" stroke-width="1.8"/>
  <path d="M113,38 Q118,35 123,38" fill="none" stroke="#3D2B1F" stroke-width="1.8"/>
  <path d="M128,52 Q134,56 130,60" fill="none" stroke="#C87050" stroke-width="2"/>
  <path d="M76,16 Q55,28 55,46 Q55,64 76,76" stroke="#E74C3C" stroke-width="2.5" fill="none" marker-end="url(#rot1)"/>
  <path d="M134,16 Q155,28 155,46 Q155,64 134,76" stroke="#E74C3C" stroke-width="2.5" fill="none" marker-end="url(#rot2)"/>
  <line x1="100" y1="14" x2="100" y2="78" stroke="#aaa" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="100" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#1D9E75" font-family="sans-serif">Xoay đầu chậm — trái ↔ phải</text>
</svg>`,

lat_flex: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="lf1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker></defs>
  <rect x="45" y="158" width="110" height="9" rx="3" fill="#C49A3C"/>
  <line x1="55" y1="167" x2="51" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="145" y1="167" x2="149" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <rect x="147" y="112" width="9" height="55" rx="3" fill="#C49A3C"/>
  <rect x="57" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <rect x="108" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <ellipse cx="74" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <ellipse cx="125" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <path d="M60,96 Q50,112 50,155 L150,155 Q150,112 140,96 Q128,84 100,84 Q72,84 60,96Z" fill="#9B59B6"/>
  <path d="M60,102 Q44,122 42,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <path d="M140,102 Q156,122 158,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <ellipse cx="158" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <rect x="91" y="66" width="18" height="22" rx="6" fill="#F5CBA7"/>
  <g transform="rotate(18,100,76)">
    <ellipse cx="100" cy="46" rx="30" ry="32" fill="#F5CBA7"/>
    <path d="M70,37 Q76,12 100,12 Q124,12 130,37 Q124,26 100,26 Q76,26 70,37Z" fill="#3D2B1F"/>
    <ellipse cx="88" cy="44" rx="5" ry="4.5" fill="white"/><circle cx="88" cy="44" r="2.5" fill="#2C3E50"/>
    <ellipse cx="112" cy="44" rx="5" ry="4.5" fill="white"/><circle cx="112" cy="44" r="2.5" fill="#2C3E50"/>
    <path d="M94,66 Q100,70 106,66" fill="none" stroke="#C87050" stroke-width="2"/>
  </g>
  <path d="M100,14 Q130,8 140,32" stroke="#E74C3C" stroke-width="2.5" fill="none" marker-end="url(#lf1)"/>
  <line x1="100" y1="14" x2="100" y2="82" stroke="#aaa" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="100" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#9B59B6" font-family="sans-serif">Nghiêng tai về vai — không xoay cổ</text>
</svg>`,

trap_stretch: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ts1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker></defs>
  <rect x="45" y="158" width="110" height="9" rx="3" fill="#C49A3C"/>
  <line x1="55" y1="167" x2="51" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="145" y1="167" x2="149" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <rect x="147" y="112" width="9" height="55" rx="3" fill="#C49A3C"/>
  <rect x="57" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <rect x="108" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <ellipse cx="74" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <ellipse cx="125" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <path d="M60,96 Q50,112 50,155 L150,155 Q150,112 140,96 Q128,84 100,84 Q72,84 60,96Z" fill="#E67E22"/>
  <path d="M60,102 Q44,122 42,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <path d="M140,100 Q148,72 132,46" stroke="#F5CBA7" stroke-width="14" stroke-linecap="round" fill="none"/>
  <ellipse cx="130" cy="40" rx="12" ry="9" fill="#F5CBA7"/>
  <rect x="91" y="66" width="18" height="22" rx="6" fill="#F5CBA7"/>
  <g transform="rotate(-16,100,78)">
    <ellipse cx="100" cy="46" rx="30" ry="32" fill="#F5CBA7"/>
    <path d="M70,37 Q76,12 100,12 Q124,12 130,37 Q124,26 100,26 Q76,26 70,37Z" fill="#3D2B1F"/>
    <ellipse cx="88" cy="44" rx="5" ry="4.5" fill="white"/><circle cx="88" cy="44" r="2.5" fill="#2C3E50"/>
    <ellipse cx="112" cy="44" rx="5" ry="4.5" fill="white"/><circle cx="112" cy="44" r="2.5" fill="#2C3E50"/>
    <path d="M94,66 Q100,70 106,66" fill="none" stroke="#C87050" stroke-width="2"/>
  </g>
  <path d="M68,30 Q60,20 60,10" stroke="#E74C3C" stroke-width="2.5" fill="none" stroke-dasharray="5,3" marker-end="url(#ts1)"/>
  <text x="50" y="8" font-size="10" fill="#E74C3C" font-weight="700" font-family="sans-serif">căng</text>
  <text x="100" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#E67E22" font-family="sans-serif">Tay kéo nhẹ đầu — giữ 30 giây</text>
</svg>`,

scap_retract: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="sr1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker>
    <marker id="sr2" markerWidth="9" markerHeight="9" refX="1" refY="4.5" orient="auto-start-reverse"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker>
  </defs>
  <rect x="45" y="158" width="110" height="9" rx="3" fill="#C49A3C"/>
  <line x1="55" y1="167" x2="51" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="145" y1="167" x2="149" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <rect x="57" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <rect x="108" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <ellipse cx="74" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <ellipse cx="125" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <path d="M60,96 Q50,112 50,155 L150,155 Q150,112 140,96 Q128,84 100,84 Q72,84 60,96Z" fill="#3498DB"/>
  <line x1="100" y1="90" x2="100" y2="155" stroke="rgba(255,255,255,0.35)" stroke-width="3" stroke-dasharray="5,4"/>
  <path d="M64,100 Q58,118 66,132 Q74,136 82,126 Q88,116 82,102 Q74,96 64,100Z" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M136,100 Q142,118 134,132 Q126,136 118,126 Q112,116 118,102 Q126,96 136,100Z" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M62,102 Q46,124 44,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <path d="M138,102 Q154,124 156,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <ellipse cx="44" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <ellipse cx="156" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <rect x="91" y="66" width="18" height="22" rx="6" fill="#F5CBA7"/>
  <ellipse cx="100" cy="46" rx="30" ry="32" fill="#F5CBA7"/>
  <path d="M70,37 Q76,12 100,12 Q124,12 130,37 Q124,26 100,26 Q76,26 70,37Z" fill="#3D2B1F"/>
  <path d="M72,116 L84,116" stroke="#E74C3C" stroke-width="3" marker-end="url(#sr1)" fill="none"/>
  <path d="M128,116 L116,116" stroke="#E74C3C" stroke-width="3" marker-end="url(#sr2)" fill="none"/>
  <text x="68" y="128" font-size="9" fill="white" font-weight="700" font-family="sans-serif" text-anchor="middle">bả vai</text>
  <text x="132" y="128" font-size="9" fill="white" font-weight="700" font-family="sans-serif" text-anchor="middle">bả vai</text>
  <text x="100" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#378ADD" font-family="sans-serif">Kéo 2 bả vai vào nhau — giữ 5 giây</text>
</svg>`,

isometric: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="iso1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker>
    <marker id="iso2" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#378ADD"/></marker>
  </defs>
  <rect x="45" y="158" width="110" height="9" rx="3" fill="#C49A3C"/>
  <line x1="55" y1="167" x2="51" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="145" y1="167" x2="149" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <rect x="147" y="112" width="9" height="55" rx="3" fill="#C49A3C"/>
  <rect x="57" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <rect x="108" y="158" width="35" height="55" rx="8" fill="#2C3E50"/>
  <ellipse cx="74" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <ellipse cx="125" cy="216" rx="18" ry="7" fill="#4A4A4A"/>
  <path d="M60,96 Q50,112 50,155 L150,155 Q150,112 140,96 Q128,84 100,84 Q72,84 60,96Z" fill="#8E44AD"/>
  <path d="M60,102 Q44,122 42,158" stroke="#F5CBA7" stroke-width="16" stroke-linecap="round" fill="none"/>
  <ellipse cx="42" cy="162" rx="12" ry="9" fill="#F5CBA7"/>
  <path d="M140,100 Q148,78 130,52" stroke="#F5CBA7" stroke-width="14" stroke-linecap="round" fill="none"/>
  <ellipse cx="124" cy="46" rx="16" ry="9" fill="#F5CBA7" stroke="#C87050" stroke-width="1.5"/>
  <rect x="91" y="66" width="18" height="22" rx="6" fill="#F5CBA7"/>
  <ellipse cx="100" cy="46" rx="30" ry="32" fill="#F5CBA7"/>
  <path d="M70,37 Q76,12 100,12 Q124,12 130,37 Q124,26 100,26 Q76,26 70,37Z" fill="#3D2B1F"/>
  <ellipse cx="88" cy="44" rx="5" ry="4.5" fill="white"/><circle cx="88" cy="44" r="2.5" fill="#2C3E50"/>
  <ellipse cx="112" cy="44" rx="5" ry="4.5" fill="white"/><circle cx="112" cy="44" r="2.5" fill="#2C3E50"/>
  <path d="M94,66 Q100,70 106,66" fill="none" stroke="#C87050" stroke-width="2"/>
  <path d="M122,42 L140,42" stroke="#E74C3C" stroke-width="2.5" marker-end="url(#iso1)" fill="none"/>
  <text x="143" y="45" font-size="9" fill="#E74C3C" font-weight="700" font-family="sans-serif">tay →</text>
  <path d="M88,42 L70,42" stroke="#378ADD" stroke-width="2.5" marker-end="url(#iso2)" fill="none"/>
  <text x="40" y="45" font-size="9" fill="#378ADD" font-weight="700" font-family="sans-serif">← đầu</text>
  <rect x="80" y="76" width="40" height="14" rx="4" fill="#E74C3C"/>
  <text x="100" y="86" text-anchor="middle" font-size="9" fill="white" font-weight="700" font-family="sans-serif">KHÔNG nhúc nhích</text>
  <text x="100" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#8E44AD" font-family="sans-serif">Đầu đẩy — tay cản — không di chuyển</text>
</svg>`,

dcf: `<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="dcf1" markerWidth="9" markerHeight="9" refX="4.5" refY="9" orient="auto-start-reverse"><path d="M0,9 L4.5,0 L9,9 Z" fill="#E74C3C"/></marker></defs>
  <rect x="10" y="128" width="220" height="10" rx="3" fill="#ddd"/>
  <line x1="10" y1="128" x2="230" y2="128" stroke="#ccc" stroke-width="2"/>
  <rect x="20" y="118" width="200" height="12" rx="4" fill="#ABEBC6" opacity=".7"/>
  <path d="M200,108 Q215,112 226,118" stroke="#2C3E50" stroke-width="22" stroke-linecap="round" fill="none"/>
  <path d="M180,108 Q195,112 205,118 Q215,118 226,118" stroke="#2C3E50" stroke-width="14" stroke-linecap="round" fill="none"/>
  <rect x="80" y="98" width="120" height="24" rx="10" fill="#4A90D9"/>
  <ellipse cx="226" cy="122" rx="18" ry="8" fill="#4A4A4A"/>
  <path d="M80,108 Q70,112 55,116" stroke="#F5CBA7" stroke-width="12" stroke-linecap="round" fill="none"/>
  <ellipse cx="50" cy="118" rx="10" ry="7" fill="#F5CBA7"/>
  <rect x="60" y="101" width="24" height="18" rx="6" fill="#F5CBA7"/>
  <ellipse cx="36" cy="100" rx="26" ry="22" fill="#F5CBA7"/>
  <path d="M14,90 Q20,78 36,78 Q52,78 58,90 Q52,84 36,84 Q20,84 14,90Z" fill="#3D2B1F"/>
  <circle cx="30" cy="100" r="3.5" fill="white"/><circle cx="30" cy="100" r="2" fill="#2C3E50"/>
  <path d="M24,108 Q28,112 34,110" fill="none" stroke="#C87050" stroke-width="2"/>
  <path d="M36,76 L36,58" stroke="#E74C3C" stroke-width="3" marker-end="url(#dcf1)" fill="none"/>
  <text x="42" y="56" font-size="10" fill="#E74C3C" font-weight="700" font-family="sans-serif">2–3cm</text>
  <text x="125" y="148" text-anchor="middle" font-size="9" fill="#888" font-family="sans-serif">— sàn —</text>
  <path d="M56,96 L48,96" stroke="#7F77DD" stroke-width="2.5" fill="none"/>
  <text x="26" y="92" font-size="8" fill="#7F77DD" font-family="sans-serif" font-weight="700">chin tuck trước</text>
  <text x="120" y="165" text-anchor="middle" font-size="11" font-weight="700" fill="#7F77DD" font-family="sans-serif">Nằm ngửa — chin tuck — nhấc đầu 2–3cm</text>
</svg>`,

yoga: `<svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="195" rx="55" ry="16" fill="#F0D9C8" stroke="#C8A04A" stroke-width="2"/>
  <path d="M55,195 Q65,168 80,162 Q100,158 120,162 Q135,168 145,195" fill="#2C3E50"/>
  <ellipse cx="60" cy="192" rx="14" ry="8" fill="#4A4A4A"/>
  <ellipse cx="140" cy="192" rx="14" ry="8" fill="#4A4A4A"/>
  <path d="M72,98 Q64,118 64,158 L136,158 Q136,118 128,98 Q116,86 100,86 Q84,86 72,98Z" fill="#D4537E"/>
  <ellipse cx="74" cy="162" rx="12" ry="8" fill="#F5CBA7"/>
  <ellipse cx="126" cy="162" rx="12" ry="8" fill="#F5CBA7"/>
  <path d="M72,104 Q68,130 72,160" stroke="#F5CBA7" stroke-width="12" stroke-linecap="round" fill="none"/>
  <path d="M128,104 Q132,130 128,160" stroke="#F5CBA7" stroke-width="12" stroke-linecap="round" fill="none"/>
  <rect x="91" y="68" width="18" height="22" rx="6" fill="#F5CBA7"/>
  <ellipse cx="100" cy="48" rx="28" ry="30" fill="#F5CBA7"/>
  <path d="M72,39 Q78,14 100,14 Q122,14 128,39 Q122,28 100,28 Q78,28 72,39Z" fill="#3D2B1F"/>
  <path d="M84,46 Q88,43 93,46" fill="none" stroke="#3D2B1F" stroke-width="2"/>
  <path d="M107,46 Q112,43 117,46" fill="none" stroke="#3D2B1F" stroke-width="2"/>
  <path d="M83,39 Q88,36 93,39" fill="none" stroke="#3D2B1F" stroke-width="1.8"/>
  <path d="M107,39 Q112,36 117,39" fill="none" stroke="#3D2B1F" stroke-width="1.8"/>
  <path d="M94,64 Q100,68 106,64" fill="none" stroke="#C87050" stroke-width="2"/>
  <path d="M28,90 Q34,82 40,90 Q46,98 52,90 Q58,82 64,90" fill="none" stroke="#4ECDC4" stroke-width="2.5" opacity=".8"/>
  <path d="M136,90 Q142,82 148,90 Q154,98 160,90 Q166,82 172,90" fill="none" stroke="#4ECDC4" stroke-width="2.5" opacity=".8"/>
  <text x="22" y="104" font-size="9" fill="#4ECDC4" font-weight="700" font-family="sans-serif">hít vào</text>
  <text x="140" y="104" font-size="9" fill="#4ECDC4" font-weight="700" font-family="sans-serif">thở ra</text>
  <ellipse cx="100" cy="48" rx="40" ry="42" fill="none" stroke="#D4537E" stroke-width="1" opacity=".25"/>
  <ellipse cx="100" cy="48" rx="52" ry="54" fill="none" stroke="#D4537E" stroke-width="1" opacity=".15"/>
  <text x="100" y="226" text-anchor="middle" font-size="11" font-weight="700" fill="#D4537E" font-family="sans-serif">Hít vào 4s — nín 2s — thở ra 6s</text>
</svg>`,

posture: `<svg viewBox="0 0 220 230" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ps1" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#E74C3C"/></marker></defs>
  <rect x="80" y="130" width="130" height="8" rx="3" fill="#A0785A"/>
  <line x1="80" y1="130" x2="210" y2="130" stroke="#8B6347" stroke-width="2"/>
  <rect x="200" y="138" width="8" height="82" rx="3" fill="#A0785A"/>
  <rect x="20" y="155" width="80" height="8" rx="3" fill="#C49A3C"/>
  <line x1="28" y1="163" x2="24" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <line x1="92" y1="163" x2="88" y2="218" stroke="#C49A3C" stroke-width="5" stroke-linecap="round"/>
  <rect x="16" y="108" width="9" height="55" rx="3" fill="#C49A3C"/>
  <path d="M42,155 Q40,180 36,218 L52,218 Q54,180 54,155Z" fill="#2C3E50"/>
  <path d="M66,155 Q66,180 68,218 L84,218 Q82,180 78,155Z" fill="#2C3E50"/>
  <ellipse cx="44" cy="219" rx="14" ry="6" fill="#4A4A4A"/>
  <ellipse cx="76" cy="219" rx="14" ry="6" fill="#4A4A4A"/>
  <path d="M38,100 Q30,115 30,155 L70,155 Q70,115 62,100 Q54,90 50,90 Q42,90 38,100Z" fill="#27AE60"/>
  <path d="M62,105 Q78,120 90,130" stroke="#F5CBA7" stroke-width="14" stroke-linecap="round" fill="none"/>
  <ellipse cx="92" cy="130" rx="10" ry="7" fill="#F5CBA7"/>
  <path d="M38,105 Q28,118 26,150" stroke="#F5CBA7" stroke-width="12" stroke-linecap="round" fill="none"/>
  <rect x="44" y="72" width="14" height="20" rx="5" fill="#F5CBA7"/>
  <ellipse cx="56" cy="54" rx="22" ry="24" fill="#F5CBA7"/>
  <path d="M36,44 Q40,28 56,28 Q70,28 74,44 Q70,36 56,36 Q42,36 36,44Z" fill="#3D2B1F"/>
  <circle cx="68" cy="50" r="4" fill="white"/><circle cx="69" cy="50" r="2.2" fill="#2C3E50"/>
  <path d="M76,58 Q80,61 76,65" fill="none" stroke="#C87050" stroke-width="2"/>
  <path d="M70,66 Q73,70 76,68" fill="none" stroke="#C87050" stroke-width="1.8"/>
  <rect x="148" y="90" width="54" height="38" rx="4" fill="#2C3E50" stroke="#555" stroke-width="2"/>
  <rect x="152" y="94" width="46" height="30" rx="2" fill="#4FC3F7"/>
  <line x1="156" y1="100" x2="190" y2="100" stroke="white" stroke-width="2" opacity=".7"/>
  <line x1="156" y1="106" x2="182" y2="106" stroke="white" stroke-width="2" opacity=".5"/>
  <line x1="156" y1="112" x2="188" y2="112" stroke="white" stroke-width="2" opacity=".5"/>
  <rect x="170" y="128" width="8" height="8" rx="1" fill="#555"/>
  <rect x="158" y="134" width="32" height="5" rx="2" fill="#555"/>
  <rect x="100" y="136" width="55" height="10" rx="3" fill="#888" stroke="#666" stroke-width="1"/>
  <line x1="70" y1="50" x2="196" y2="50" stroke="#E74C3C" stroke-width="1.8" stroke-dasharray="6,4" opacity=".8"/>
  <text x="100" y="46" font-size="9" fill="#E74C3C" font-weight="700" font-family="sans-serif">← ngang tầm mắt →</text>
  <line x1="14" y1="90" x2="14" y2="155" stroke="#27AE60" stroke-width="2.5" stroke-dasharray="4,3"/>
  <text x="8" y="88" font-size="8" fill="#27AE60" font-weight="700" font-family="sans-serif">↑ thẳng</text>
  <text x="110" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#BA7517" font-family="sans-serif">Màn hình ngang mắt — lưng thẳng</text>
</svg>`,
};

/* ══ EXERCISE DATABASE ══════════════════════════════════════════ */
const EX: Exercise[] = [
  {id:'chin_tuck',name:'Tucking cằm (Chin Tuck)',cat:'Kiểm soát vận động',cc:'#7F77DD',cb:'#EEEDFE',maxvas:10,minct:0,contras:[],sets:3,reps:10,hold:'5 giây',freq:'Hằng ngày',desc:'Ngồi thẳng lưng. Từ từ kéo cằm về phía sau tạo "double chin" (KHÔNG cúi đầu xuống). Giữ 5 giây rồi thả ra nhẹ nhàng. Cảm giác phần sau cổ được kéo dài ra.',tip:'Đặt ngón tay trỏ trước cằm để kiểm tra — ngón tay không được bị đẩy về phía trước. Tưởng tượng kéo đầu ra sau theo trục nằm ngang.',ev:'★★★ Bằng chứng CAO',evClass:'ev-high',ref:'Dirito et al., PLOS ONE 2024; de Zoete et al., BJSM 2020',svgKey:'chin_tuck'},
  {id:'rotation',name:'Xoay cổ nhẹ nhàng',cat:'Tầm vận động',cc:'#1D9E75',cb:'#E1F5EE',maxvas:8,minct:0,contras:['dizzy'],sets:2,reps:10,hold:'2 giây',freq:'2 lần/ngày',desc:'Ngồi thẳng. Xoay đầu chậm sang phải đến khi cảm thấy căng nhẹ. Giữ 2 giây. Trở về giữa. Đổi sang trái. Không xoay mạnh hay đột ngột.',tip:'Tốc độ chuyển động phải thật chậm và có kiểm soát. Dừng lại ngay nếu thấy đau tăng hoặc chóng mặt.',ev:'★★☆ Bằng chứng TRUNG BÌNH',evClass:'ev-med',ref:'Colman et al., Clin Rehab 2023',svgKey:'rotation'},
  {id:'lat_flex',name:'Nghiêng cổ sang bên',cat:'Tầm vận động',cc:'#9B59B6',cb:'#F5EEF8',maxvas:8,minct:0,contras:[],sets:2,reps:10,hold:'2 giây',freq:'2 lần/ngày',desc:'Ngồi thẳng. Nghiêng đầu sang phải (tai phải về phía vai phải) đến khi căng nhẹ. Giữ 2 giây. Trở về giữa. Đổi bên. Không nâng vai lên.',tip:'KHÔNG xoay hoặc cúi cổ khi nghiêng. Giữ 2 vai thả lỏng ngang bằng nhau. Cảm thấy căng bên đối diện là đúng.',ev:'★★☆ Bằng chứng TRUNG BÌNH',evClass:'ev-med',ref:'Saini et al., Musculoskeletal Care 2025',svgKey:'lat_flex'},
  {id:'trap_stretch',name:'Giãn cơ thang trên',cat:'Giãn cơ',cc:'#E67E22',cb:'#FEF9E7',maxvas:9,minct:0,contras:[],sets:3,reps:1,hold:'30 giây',freq:'2 lần/ngày',desc:'Ngồi thẳng. Tay phải đặt nhẹ lên đỉnh đầu, kéo nhẹ đầu sang phải. Tay trái thả xuống hoặc nắm mép ghế. Cảm thấy căng vùng cổ-vai trái. Giữ 30 giây. Đổi bên.',tip:'Chỉ dùng trọng lượng bàn tay — không kéo mạnh. Thở đều trong suốt bài tập. Không cần đau nhiều mới có tác dụng.',ev:'★★☆ Bằng chứng TRUNG BÌNH',evClass:'ev-med',ref:'Sterling et al., J Clin Med 2019',svgKey:'trap_stretch'},
  {id:'scap_retract',name:'Kéo bả vai ra sau',cat:'Tăng cường cơ',cc:'#378ADD',cb:'#E6F1FB',maxvas:7,minct:10,contras:[],sets:3,reps:15,hold:'5 giây',freq:'5 ngày/tuần',desc:'Ngồi hoặc đứng thẳng. Kéo 2 xương bả vai về phía cột sống (như kẹp bút chì giữa 2 vai). Giữ 5 giây. Không nâng vai lên. Thở đều.',tip:'Hình dung đang cố kẹp chặt một vật mỏng giữa 2 xương bả vai. Vai không được nhô lên — nếu vai nhô lên là sai.',ev:'★★★ Bằng chứng CAO',evClass:'ev-high',ref:'Sterling et al. 2019; de Zoete et al., BJSM 2020',svgKey:'scap_retract'},
  {id:'isometric',name:'Tập đẳng trường cổ',cat:'Tăng cường cơ',cc:'#8E44AD',cb:'#F4ECF7',maxvas:5,minct:20,contras:['htn','heart'],sets:3,reps:8,hold:'10 giây',freq:'4 ngày/tuần',desc:'Đặt bàn tay lên trán. Dùng đầu đẩy vào tay trong khi tay giữ nguyên không cho đầu di chuyển. Giữ 10 giây. Thư giãn. Lặp lại với tay sau gáy và hai bên thái dương.',tip:'Đầu KHÔNG được di chuyển. Bắt đầu lực nhẹ (~30%), tăng dần sau 1–2 tuần. THỞ ĐỀU — không được nín thở.',ev:'★★★ Bằng chứng CAO',evClass:'ev-high',ref:'de Zoete et al., BJSM 2020; Colman et al. 2023',svgKey:'isometric'},
  {id:'dcf',name:'Tập cơ gấp cổ sâu (DCF)',cat:'Kiểm soát vận động',cc:'#7F77DD',cb:'#EEEDFE',maxvas:6,minct:20,contras:[],sets:3,reps:10,hold:'10 giây',freq:'5 ngày/tuần',desc:'Nằm ngửa, gối thẳng. Thực hiện chin tuck (kéo cằm về sau nhẹ). Nhấc đầu lên khoảng 2–3 cm khỏi sàn (KHÔNG nhấc vai). Giữ 10 giây. Hạ xuống từ từ.',tip:'Kích hoạt cơ longus colli và longus capitis — nhóm cơ ổn định cột sống cổ quan trọng nhất. Nếu cổ sau bị chuột rút — dừng ngay.',ev:'★★★ Bằng chứng rất CAO',evClass:'ev-high',ref:'Dirito et al., PLOS ONE 2024 — Moderate certainty GRADE',svgKey:'dcf'},
  {id:'yoga',name:'Thư giãn hít thở sâu (Yoga cổ)',cat:'Yoga / Thân tâm',cc:'#D4537E',cb:'#FBEAF0',maxvas:10,minct:10,contras:[],sets:1,reps:5,hold:'30–60 giây',freq:'Hằng ngày',desc:'Ngồi thiền hoặc ngồi thẳng thoải mái. Nhắm mắt. Hít vào 4 giây — nín 2 giây — thở ra chậm 6 giây. Kết hợp chin tuck nhẹ. Tập trung cảm giác thư giãn vùng cổ vai.',tip:'Yoga kết hợp liệu pháp nhiệt cho kết quả tốt nhất với đau cổ mạn tính. Có thể dùng túi chườm ấm vùng cổ vai trong khi thư giãn.',ev:'★★★ Bằng chứng CAO (NMA)',evClass:'ev-high',ref:'Gao et al., Curr Pain Headache Rep 2024 — NMA 18 RCTs',svgKey:'yoga'},
  {id:'posture',name:'Chỉnh tư thế làm việc',cat:'Phòng ngừa',cc:'#BA7517',cb:'#FAEEDA',maxvas:10,minct:0,contras:[],sets:0,reps:0,hold:'—',freq:'Mỗi 30–45 phút',desc:'Đặt màn hình ngang tầm mắt. Ghế có tựa lưng hỗ trợ cột sống. Bàn phím gần thân, khuỷu tay 90°. Vai thả lỏng. Cài báo thức 30 phút/lần để điều chỉnh tư thế.',tip:'Tư thế đầu cúi về phía trước làm tăng tải trọng lên cột sống cổ gấp 4–6 lần. Đây là can thiệp phòng ngừa hiệu quả nhất.',ev:'★★☆ Bằng chứng TRUNG BÌNH',evClass:'ev-med',ref:'Ahmed et al., F1000Research 2025; Sterling et al. 2019',svgKey:'posture'},
];

/* ══ HELPERS ══════════════════════════════════════════════════════ */
function toggleSet(prev: Set<string>, id: string): Set<string> {
  const next = new Set(prev);
  if (next.has(id)) next.delete(id); else next.add(id);
  return next;
}

/* ══ STYLES (object helpers) ══════════════════════════════════════ */
const C = {
  teal:'#1D9E75', tealD:'#0F6E56', tealL:'#E1F5EE',
  coral:'#D85A30', coralD:'#993C1D', coralL:'#FAECE7',
  purple:'#7F77DD', purpleL:'#EEEDFE',
  blue:'#378ADD', blueL:'#E6F1FB',
  amber:'#BA7517', amberL:'#FAEEDA',
  pink:'#D4537E', pinkL:'#FBEAF0',
  red:'#A32D2D', redL:'#FCEBEB',
  greenL:'#EAF3DE', greenD:'#27500A',
  bg:'#f4f6f9', card:'#ffffff',
  text:'#1a1a2e', muted:'#6b7280', border:'#e2e6ea',
};

const catBadge = (i: number) => ['#E74C3C','#27AE60','#3498DB','#8E44AD','#E67E22','#D4537E','#16A085','#C0392B','#BA7517'][i % 9];

/* ══ MAIN COMPONENT ══════════════════════════════════════════════ */
export default function CoVaiGayTool() {
  const [step, setStep] = useState(0);
  const [vas, setVas] = useState<number | null>(null);
  const [vasDesc, setVasDesc] = useState('Chọn mức độ đau hiện tại của bạn');
  const [locs, setLocs] = useState<Set<string>>(new Set());
  const [types, setTypes] = useState<Set<string>>(new Set());
  const [coms, setComs] = useState<Set<string>>(new Set());

  /* form fields */
  const [nm, setNm] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [occ, setOcc] = useState('');
  const [ht, setHt] = useState('');
  const [wt, setWt] = useState('');
  const [pdur, setPdur] = useState('acute');
  const [rad, setRad] = useState('no');
  const [img, setImg] = useState('none');
  const [tpd, setTpd] = useState('20');
  const [dpw, setDpw] = useState('5');
  const [tod, setTod] = useState('am');
  const [result, setResult] = useState<GenResult | null>(null);

  function goTo(n: number) {
    setStep(n);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleGenerate() {
    const vasVal = vas ?? 5;
    const minT = parseInt(tpd);
    const htN = parseFloat(ht) || 0;
    const wtN = parseFloat(wt) || 0;
    const bmi = (htN && wtN) ? (wtN / ((htN / 100) ** 2)).toFixed(1) : null;
    const bmiV = bmi ? parseFloat(bmi) : 0;
    const bmiNote = bmi ? (bmiV < 18.5 ? ' — Thiếu cân' : bmiV < 23 ? ' — Bình thường' : bmiV < 25 ? ' — Thừa cân' : ' — Béo phì') : '';
    const vasColor = vasVal <= 3 ? '#27AE60' : vasVal <= 6 ? '#E67E22' : '#E74C3C';
    const vasLvl = vasVal <= 3 ? 'Nhẹ' : vasVal <= 6 ? 'Vừa' : 'Nặng';
    const occMap: Record<string, string> = {desk:'Văn phòng / máy tính',driver:'Lái xe',manual:'Lao động chân tay',medical:'Y tế / phẫu thuật',teacher:'Giáo viên',retired:'Đã nghỉ hưu',other:'Khác'};
    const durMap: Record<string, string> = {acute:'Cấp tính (<4 tuần)',sub:'Bán cấp (1–3 tháng)',chronic:'Mạn tính (>3 tháng)',recur:'Tái phát nhiều lần'};
    const todMap: Record<string, string> = {am:'Buổi sáng (7:00–8:00)',mid:'Giữa giờ làm (12:00–13:00)',pm:'Buổi tối (19:00–20:00)',any:'Linh hoạt'};

    const warns: WarnItem[] = [];
    if (rad === 'sev') warns.push({kind:'danger',msg:'🚨 <strong>Cảnh báo:</strong> Triệu chứng thần kinh nặng (tê ngón tay, yếu cơ tay). Cần khám chuyên khoa cột sống NGAY trước khi tập.'});
    if (img === 'mri_ste') warns.push({kind:'danger',msg:'🚨 <strong>Hẹp ống sống:</strong> Tuyệt đối tránh vận động quá tầm. Chỉ tập trong giới hạn an toàn. Cần tái khám.'});
    if (img === 'mri_hv') warns.push({kind:'warn',msg:'⚠️ <strong>Thoát vị đĩa đệm cổ:</strong> Tránh ưỡn cổ quá mức. Ưu tiên chin tuck và tăng cường cơ.'});
    if (coms.has('htn')) warns.push({kind:'warn',msg:'❤️ <strong>Tăng huyết áp:</strong> Tuyệt đối không nín thở khi tập đẳng trường. Thở đều trong suốt bài tập.'});
    if (coms.has('dizzy')) warns.push({kind:'warn',msg:'🌀 <strong>Tiền đình:</strong> Tránh xoay cổ nhanh và đột ngột. Tập thật chậm, ngồi tựa lưng vào ghế.'});
    if (coms.has('osteo')) warns.push({kind:'warn',msg:'🦴 <strong>Loãng xương:</strong> Tránh bài tập có lực mạnh hay vặn xoắn. Ưu tiên giãn cơ và tập nhẹ nhàng.'});
    if (coms.has('heart')) warns.push({kind:'warn',msg:'💗 <strong>Bệnh tim mạch:</strong> Tập nhẹ, nghỉ giữa hiệp. Ngừng ngay nếu khó thở hoặc tức ngực.'});

    const exercises = EX.filter(e => {
      if (vasVal > e.maxvas) return false;
      if (minT < e.minct) return false;
      for (const c of e.contras) if (coms.has(c)) return false;
      if ((img === 'mri_hv' || img === 'mri_ste') && e.id === 'isometric') return false;
      if (img === 'mri_ste' && e.id === 'rotation') return false;
      return true;
    });

    setResult({
      nmDisp: nm || 'Bệnh nhân',
      ageN: parseInt(age) || 0,
      sexLabel: sex === 'm' ? '(Nam)' : sex === 'f' ? '(Nữ)' : '',
      bmi, bmiNote,
      occLabel: occMap[occ] || occ,
      durLabel: durMap[pdur] || pdur,
      todLabel: todMap[tod] || tod,
      dpw, tpd, vasVal, vasColor, vasLvl, warns, exercises,
    });
    goTo(3);
  }

  /* ── Shared sub-components ── */
  const StepBar = () => (
    <div style={{display:'flex',gap:6,marginBottom:'0.75rem'}}>
      {['① Thông tin','② Tình trạng đau','③ Bệnh lý & Thời gian','④ Chương trình tập'].map((lbl,i) => (
        <div key={i} style={{
          flex:1,padding:'9px 6px',borderRadius:8,fontSize:11,textAlign:'center',fontWeight:500,
          border:`1.5px solid ${step===i ? C.teal : step>i ? C.purple : C.border}`,
          background: step===i ? C.tealL : step>i ? C.purpleL : C.card,
          color: step===i ? C.tealD : step>i ? '#3C3489' : C.muted,
        }}>{lbl}</div>
      ))}
    </div>
  );

  const ProgBar = () => (
    <div style={{height:5,background:C.border,borderRadius:3,marginBottom:'1.25rem',overflow:'hidden'}}>
      <div style={{height:5,width:`${[25,50,75,100][step]}%`,background:`linear-gradient(90deg,${C.teal},#4ecdc4)`,borderRadius:3,transition:'width .4s ease'}}/>
    </div>
  );

  const Card = ({title, children}: {title: React.ReactNode; children: React.ReactNode}) => (
    <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:'1.25rem 1.5rem',marginBottom:'0.875rem',boxShadow:'0 1px 4px rgba(0,0,0,.05)'}}>
      <div style={{fontSize:14,fontWeight:700,color:C.text,marginBottom:'1rem',display:'flex',alignItems:'center',gap:8}}>{title}</div>
      {children}
    </div>
  );

  const Field = ({label, children}: {label: string; children: React.ReactNode}) => (
    <div style={{marginBottom:'0.875rem'}}>
      <label style={{display:'block',fontSize:11,color:C.muted,marginBottom:5,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.4px'}}>{label}</label>
      {children}
    </div>
  );

  const inputStyle: React.CSSProperties = {width:'100%',fontSize:14,padding:'10px 12px',border:`1.5px solid ${C.border}`,borderRadius:8,background:C.card,color:C.text,outline:'none',boxSizing:'border-box'};
  const btnPrimary: React.CSSProperties = {background:C.coral,color:'#fff',border:'none',padding:'11px 26px',borderRadius:8,fontSize:14,fontWeight:700,cursor:'pointer'};
  const btnSecondary: React.CSSProperties = {background:C.card,color:C.text,border:`1.5px solid ${C.border}`,padding:'11px 24px',borderRadius:8,fontSize:14,cursor:'pointer'};
  const btnGreen: React.CSSProperties = {background:`linear-gradient(135deg,${C.teal},#2eb888)`,color:'#fff',border:'none',padding:'11px 28px',borderRadius:8,fontSize:14,fontWeight:700,cursor:'pointer'};

  /* ── CheckGrid ── */
  const CheckGrid = ({items, selected, onToggle, selColor}: {items:ChkItem[]; selected:Set<string>; onToggle:(id:string)=>void; selColor:string}) => (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
      {items.map(item => (
        <div key={item.id} onClick={() => onToggle(item.id)} style={{
          display:'flex',alignItems:'center',gap:10,fontSize:13,padding:'10px 12px',
          borderRadius:8,border:`1.5px solid ${selected.has(item.id) ? selColor : C.border}`,
          cursor:'pointer',background:selected.has(item.id) ? C.greenL : C.card,
          color:selected.has(item.id) ? C.greenD : C.text,transition:'all .15s',
        }}>
          <span style={{fontSize:18,flexShrink:0}}>{item.icon}</span>
          <span>{item.lbl}</span>
        </div>
      ))}
    </div>
  );

  /* ════════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════════ */
  return (
    <div style={{background:C.bg,minHeight:'100vh',padding:'1.5rem 1rem 3rem',fontFamily:"'Segoe UI',system-ui,-apple-system,sans-serif",fontSize:15,lineHeight:1.6,color:C.text}}>
      <div style={{maxWidth:780,margin:'0 auto'}}>

        {/* HEADER */}
        <div style={{background:`linear-gradient(135deg,${C.tealD} 0%,${C.teal} 65%)`,color:'#fff',borderRadius:12,padding:'1.5rem 1.75rem',marginBottom:'1.25rem',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',right:18,top:8,fontSize:90,opacity:.1}}>🦴</div>
          <h1 style={{fontSize:22,fontWeight:700,marginBottom:4,margin:0}}>🏥 Phục Hồi Chức Năng Cổ Vai Gáy</h1>
          <p style={{fontSize:12,opacity:.85,marginTop:6}}>TS.BS Chuyên khoa Cột sống &nbsp;·&nbsp; Bệnh viện TWQĐ 108 &nbsp;·&nbsp; Cá thể hóa dựa trên bằng chứng khoa học</p>
        </div>

        <StepBar />
        <ProgBar />

        {/* ══ STEP 0 — Thông tin cơ bản ══ */}
        {step === 0 && (
          <>
            <Card title="👤 Thông tin cơ bản">
              <Field label="Họ và tên (tùy chọn)">
                <input style={inputStyle} type="text" value={nm} onChange={e => setNm(e.target.value)} placeholder="Ví dụ: Nguyễn Văn A"/>
              </Field>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12}}>
                <Field label="Tuổi">
                  <input style={inputStyle} type="number" value={age} onChange={e => setAge(e.target.value)} min={15} max={99} placeholder="VD: 45"/>
                </Field>
                <Field label="Giới tính">
                  <select style={inputStyle} value={sex} onChange={e => setSex(e.target.value)}>
                    <option value="">--</option>
                    <option value="m">Nam</option>
                    <option value="f">Nữ</option>
                  </select>
                </Field>
                <Field label="Nghề nghiệp">
                  <select style={inputStyle} value={occ} onChange={e => setOcc(e.target.value)}>
                    <option value="">--</option>
                    <option value="desk">Văn phòng/máy tính</option>
                    <option value="driver">Lái xe</option>
                    <option value="manual">Lao động chân tay</option>
                    <option value="medical">Y tế/phẫu thuật</option>
                    <option value="teacher">Giáo viên</option>
                    <option value="retired">Đã nghỉ hưu</option>
                    <option value="other">Khác</option>
                  </select>
                </Field>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <Field label="Chiều cao (cm)">
                  <input style={inputStyle} type="number" value={ht} onChange={e => setHt(e.target.value)} min={100} max={220} placeholder="VD: 165"/>
                </Field>
                <Field label="Cân nặng (kg)">
                  <input style={inputStyle} type="number" value={wt} onChange={e => setWt(e.target.value)} min={30} max={200} placeholder="VD: 60"/>
                </Field>
              </div>
            </Card>
            <div style={{display:'flex',justifyContent:'flex-end',marginTop:'1.25rem'}}>
              <button style={btnPrimary} onClick={() => goTo(1)}>Tiếp theo →</button>
            </div>
          </>
        )}

        {/* ══ STEP 1 — Tình trạng đau ══ */}
        {step === 1 && (
          <>
            <Card title="🌡️ Mức độ đau (VAS 0–10)">
              <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:6}}>
                {Array.from({length:11},(_,i) => (
                  <button key={i} onClick={() => { setVas(i); setVasDesc(VASD[i] ?? ''); }} style={{
                    width:48,height:48,borderRadius:8,border:`1.5px solid ${vas===i ? 'transparent' : C.border}`,
                    background:vas===i ? (VASC[i] ?? '#ccc') : C.card,
                    color:vas===i ? '#fff' : C.text,
                    fontSize:14,fontWeight:700,cursor:'pointer',
                    transform:vas===i ? 'scale(1.1)' : 'none',
                    boxShadow:vas===i ? '0 4px 14px rgba(0,0,0,.22)' : 'none',
                  }}>{i}</button>
                ))}
              </div>
              <div style={{fontSize:12,color:C.muted,fontStyle:'italic',minHeight:18}}>{vasDesc}</div>
            </Card>
            <Card title="📍 Vị trí đau (chọn tất cả vùng đau)">
              <CheckGrid items={LOCS} selected={locs} onToggle={id => setLocs(p => toggleSet(p,id))} selColor={C.coral}/>
            </Card>
            <Card title="🔍 Tính chất đau & Thông tin thêm">
              <CheckGrid items={TYPES} selected={types} onToggle={id => setTypes(p => toggleSet(p,id))} selColor={C.purple}/>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:14}}>
                <Field label="Thời gian đau">
                  <select style={inputStyle} value={pdur} onChange={e => setPdur(e.target.value)}>
                    <option value="acute">Cấp tính (&lt;4 tuần)</option>
                    <option value="sub">Bán cấp (1–3 tháng)</option>
                    <option value="chronic">Mạn tính (&gt;3 tháng)</option>
                    <option value="recur">Tái phát nhiều lần</option>
                  </select>
                </Field>
                <Field label="Lan xuống tay?">
                  <select style={inputStyle} value={rad} onChange={e => setRad(e.target.value)}>
                    <option value="no">Không</option>
                    <option value="mild">Tê bì nhẹ (cánh tay)</option>
                    <option value="mod">Tê lan đến cẳng tay</option>
                    <option value="sev">Tê ngón tay / yếu cơ</option>
                  </select>
                </Field>
              </div>
            </Card>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:'1.25rem'}}>
              <button style={btnSecondary} onClick={() => goTo(0)}>← Quay lại</button>
              <button style={btnPrimary} onClick={() => goTo(2)}>Tiếp theo →</button>
            </div>
          </>
        )}

        {/* ══ STEP 2 — Bệnh lý & Thời gian ══ */}
        {step === 2 && (
          <>
            <Card title="🩺 Bệnh lý kèm theo">
              <CheckGrid items={COMS} selected={coms} onToggle={id => setComs(p => toggleSet(p,id))} selColor="#185FA5"/>
            </Card>
            <Card title="🔬 Chẩn đoán hình ảnh">
              <select style={inputStyle} value={img} onChange={e => setImg(e.target.value)}>
                <option value="none">Chưa có / không rõ</option>
                <option value="xr">X-quang (thoái hóa đốt sống cổ)</option>
                <option value="mri_ok">MRI — không thoát vị</option>
                <option value="mri_hv">MRI — có thoát vị đĩa đệm</option>
                <option value="mri_ste">MRI — hẹp ống sống cổ</option>
              </select>
            </Card>
            <Card title="⏰ Thời gian & Mục tiêu">
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                <Field label="Thời gian/ngày">
                  <select style={inputStyle} value={tpd} onChange={e => setTpd(e.target.value)}>
                    <option value="10">10–15 phút</option>
                    <option value="20">20–30 phút</option>
                    <option value="40">40–60 phút</option>
                  </select>
                </Field>
                <Field label="Số ngày/tuần">
                  <select style={inputStyle} value={dpw} onChange={e => setDpw(e.target.value)}>
                    <option value="3">3 ngày/tuần</option>
                    <option value="5">5 ngày/tuần</option>
                    <option value="7">Hằng ngày</option>
                  </select>
                </Field>
                <Field label="Thời điểm tập">
                  <select style={inputStyle} value={tod} onChange={e => setTod(e.target.value)}>
                    <option value="am">Buổi sáng</option>
                    <option value="mid">Giữa giờ làm</option>
                    <option value="pm">Buổi tối</option>
                    <option value="any">Linh hoạt</option>
                  </select>
                </Field>
                <Field label="Mục tiêu">
                  <select style={inputStyle}>
                    <option value="pain">Giảm đau</option>
                    <option value="func">Phục hồi chức năng</option>
                    <option value="prev">Phòng tái phát</option>
                    <option value="all">Tất cả</option>
                  </select>
                </Field>
              </div>
            </Card>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:'1.25rem'}}>
              <button style={btnSecondary} onClick={() => goTo(1)}>← Quay lại</button>
              <button style={btnGreen} onClick={handleGenerate}>✨ Tạo chương trình tập cá thể hóa</button>
            </div>
          </>
        )}

        {/* ══ STEP 3 — Kết quả ══ */}
        {step === 3 && result && (
          <>
            {/* Summary row */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:'1.25rem'}}>
              {[
                {val:`${result.vasVal}/10`,lbl:'VAS',extra:result.vasLvl,color:result.vasColor},
                {val:`${result.exercises.length}`,lbl:'Bài tập phù hợp',extra:'',color:C.teal},
                {val:result.dpw,lbl:'Ngày/tuần',extra:'',color:C.purple},
                {val:`${result.tpd}'`,lbl:'Phút/ngày',extra:'',color:C.coral},
              ].map((s,i) => (
                <div key={i} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:8,padding:12,textAlign:'center'}}>
                  <div style={{fontSize:24,fontWeight:700,color:s.color}}>{s.val}</div>
                  <div style={{fontSize:10,color:C.muted}}>{s.lbl}{s.extra ? <><br/><span style={{color:s.color}}>{s.extra}</span></> : null}</div>
                </div>
              ))}
            </div>

            {/* Warnings */}
            {result.warns.map((w,i) => (
              <div key={i} style={{
                borderRadius:8,padding:'12px 14px',fontSize:13,marginBottom:'0.75rem',
                borderLeft:'4px solid',
                background: w.kind==='danger' ? C.redL : w.kind==='warn' ? C.amberL : C.blueL,
                borderColor: w.kind==='danger' ? C.red : w.kind==='warn' ? C.amber : C.blue,
                color: w.kind==='danger' ? '#501313' : w.kind==='warn' ? '#412402' : '#042C53',
              }} dangerouslySetInnerHTML={{__html: w.msg}}/>
            ))}

            {/* Patient schedule */}
            <div style={{borderRadius:12,border:`1px solid ${C.border}`,overflow:'hidden',marginBottom:'1.25rem'}}>
              <div style={{background:`linear-gradient(135deg,${C.tealD},${C.teal})`,color:'#fff',padding:'12px 16px',fontSize:14,fontWeight:700}}>📋 Thông tin bệnh nhân &amp; Lịch tập đề xuất</div>
              <div style={{padding:'0 16px'}}>
                {[
                  {lbl:'Bệnh nhân', val:`${result.nmDisp}${result.ageN ? ` — ${result.ageN} tuổi` : ''} ${result.sexLabel}`},
                  ...(result.bmi ? [{lbl:'BMI', val:`${result.bmi} kg/m²${result.bmiNote}`}] : []),
                  ...(result.occLabel ? [{lbl:'Nghề nghiệp', val:result.occLabel}] : []),
                  {lbl:'Chẩn đoán', val:`Đau cổ vai gáy — ${result.durLabel}`},
                  {lbl:'Thời điểm tập', val:result.todLabel},
                  {lbl:'Lịch tập', val:`${result.dpw} ngày/tuần × ${result.tpd} phút/ngày`},
                  {lbl:'Liệu trình', val:'6–8 tuần · Đánh giá lại sau 4 tuần'},
                  {lbl:'Ngày bắt đầu', val:new Date().toLocaleDateString('vi-VN')},
                ].map((row,i) => (
                  <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:`1px solid ${C.border}`,fontSize:13}}>
                    <span style={{color:C.muted}}>{row.lbl}</span>
                    <span style={{fontWeight:700,color:C.text,textAlign:'right',maxWidth:'62%'}}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercises */}
            <div style={{fontSize:16,fontWeight:700,color:C.text,margin:'1.5rem 0 .875rem',display:'flex',alignItems:'center',gap:8}}>
              🏋️ Chương trình bài tập cá thể hóa ({result.exercises.length} bài)
            </div>

            {result.exercises.map((ex, idx) => (
              <div key={ex.id} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,marginBottom:'1rem',boxShadow:'0 1px 6px rgba(0,0,0,.06)',overflow:'hidden'}}>
                <div style={{padding:'.875rem 1.25rem .5rem'}}>
                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:6}}>
                    <div style={{width:28,height:28,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700,color:'#fff',background:catBadge(idx),flexShrink:0}}>{idx+1}</div>
                    <div style={{fontSize:15,fontWeight:700,color:C.text}}>{ex.name}</div>
                  </div>
                  <span style={{display:'inline-block',fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:20,border:`1.5px solid ${ex.cc}`,background:ex.cb,color:ex.cc,marginBottom:8}}>{ex.cat}</span>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'200px 1fr'}}>
                  <div style={{background:'#f8f9fa',borderRight:`1px solid ${C.border}`,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'16px 8px',minHeight:220}}>
                    <div dangerouslySetInnerHTML={{__html: SVG_MAP[ex.svgKey] ?? ''}} style={{width:'100%',maxWidth:180}}/>
                    <div style={{fontSize:10,color:C.muted,textAlign:'center',marginTop:6,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.4px'}}>Hình minh họa</div>
                  </div>
                  <div style={{padding:'1rem 1.25rem'}}>
                    <p style={{fontSize:13,color:C.text,lineHeight:1.75,marginBottom:10}}>{ex.desc}</p>
                    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:10}}>
                      {ex.sets > 0 ? (
                        <>
                          <span style={{fontSize:12,padding:'4px 11px',borderRadius:20,background:C.bg,color:C.muted,border:`1px solid ${C.border}`,fontWeight:600}}>📋 {ex.sets} hiệp</span>
                          <span style={{fontSize:12,padding:'4px 11px',borderRadius:20,background:C.bg,color:C.muted,border:`1px solid ${C.border}`,fontWeight:600}}>🔁 {ex.reps} lần</span>
                          <span style={{fontSize:12,padding:'4px 11px',borderRadius:20,background:C.bg,color:C.muted,border:`1px solid ${C.border}`,fontWeight:600}}>⏱ {ex.hold}</span>
                          <span style={{fontSize:12,padding:'4px 11px',borderRadius:20,background:C.bg,color:C.muted,border:`1px solid ${C.border}`,fontWeight:600}}>📅 {ex.freq}</span>
                        </>
                      ) : (
                        <span style={{fontSize:12,padding:'4px 11px',borderRadius:20,background:C.bg,color:C.muted,border:`1px solid ${C.border}`,fontWeight:600}}>📅 {ex.freq}</span>
                      )}
                    </div>
                    <span style={{
                      fontSize:11,padding:'3px 10px',borderRadius:4,display:'inline-block',fontWeight:600,
                      background: ex.evClass==='ev-high' ? C.greenL : C.amberL,
                      color: ex.evClass==='ev-high' ? C.greenD : '#412402',
                      border: `1px solid ${ex.evClass==='ev-high' ? '#3B6D11' : C.amber}`,
                    }}>{ex.ev}</span>
                    <div style={{fontSize:11,color:C.muted,marginTop:4}}>{ex.ref}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:8,background:C.bg,borderRadius:8,padding:'9px 12px',borderLeft:`3px solid ${C.border}`,lineHeight:1.65}}>💡 {ex.tip}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Safety notes */}
            <div style={{fontSize:16,fontWeight:700,color:C.text,margin:'1.5rem 0 .875rem'}}>⚠️ Lưu ý an toàn quan trọng</div>
            <div style={{borderRadius:8,padding:'12px 14px',fontSize:13,marginBottom:'0.75rem',borderLeft:`4px solid ${C.red}`,background:C.redL,color:'#501313'}}>
              <strong>Dừng tập NGAY và đến cơ sở y tế nếu:</strong> Đau tăng đột ngột và dữ dội — Tê bì lan rộng hoặc nặng hơn — Yếu cơ tay tiến triển — Chóng mặt, mất thăng bằng — Đau lan lên đầu kèm buồn nôn.
            </div>
            <div style={{borderRadius:8,padding:'12px 14px',fontSize:13,marginBottom:'0.75rem',borderLeft:`4px solid ${C.blue}`,background:C.blueL,color:'#042C53'}}>
              <strong>Nguyên tắc tiến triển:</strong> Bắt đầu cường độ nhẹ (~50%). Nếu đau không tăng sau 2–3 ngày, tăng dần số hiệp và lực. Đánh giá lại VAS sau 4–6 tuần. Không cải thiện → tái khám bác sĩ.
            </div>
            <div style={{borderRadius:8,padding:'12px 14px',fontSize:13,marginBottom:'0.75rem',borderLeft:`4px solid ${C.blue}`,background:C.blueL,color:'#042C53'}}>
              <strong>Phối hợp tốt nhất:</strong> Tập luyện + nhiệt trị liệu + liệu pháp tay (manual therapy) cho kết quả vượt trội hơn tập đơn thuần (Hidalgo et al. 2017; Gao et al. 2024).
            </div>

            {/* References */}
            <div style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:12,padding:'1.25rem',fontSize:12,color:C.muted,lineHeight:1.85,marginTop:'1.5rem'}}>
              <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:10}}>📚 Tài liệu khoa học tham khảo (Peer-reviewed)</div>
              [1] Saini N et al. Cervical Stabilisation Exercises for Chronic Neck Pain. <em>Musculoskeletal Care</em> 2025.<br/>
              [2] Sterling M et al. Best Evidence Rehabilitation for Chronic Pain Part 4: Neck Pain. <em>J Clin Med</em> 2019.<br/>
              [3] Colman D et al. Cervical extensor muscle exercises in neck pain. <em>Clin Rehab</em> 2023.<br/>
              [4] de Zoete RD et al. NMA of 40 RCTs for chronic neck pain. <em>BJSM</em> 2020.<br/>
              [5] Gao Q et al. Mind–Body Exercise for Chronic Neck Pain NMA. <em>Curr Pain Headache Rep</em> 2024.<br/>
              [6] de Zoete RD. Exercise Therapy for Chronic Neck Pain. <em>J Clin Med</em> 2023.<br/>
              [7] Hidalgo B et al. Manual therapy and exercise for non-specific neck pain. <em>J Back Musculoskeletal Rehab</em> 2017.<br/>
              [8] Ahmed Z et al. Telerehabilitation Exercise Programme for Chronic Neck Pain. <em>F1000Research</em> 2025.<br/>
              [9] Dirito AM et al. Exercise on neuromuscular function in chronic neck pain. <em>PLOS ONE</em> 2024.<br/>
              [10] Guerra-Arencibia L et al. Telerehabilitation-Based Exercise for Chronic Neck Pain. <em>Sensors</em> 2024.
            </div>

            <div style={{display:'flex',gap:12,justifyContent:'center',marginTop:'1.5rem',flexWrap:'wrap'}}>
              <button style={btnSecondary} onClick={() => { setResult(null); goTo(0); }}>← Đánh giá lại từ đầu</button>
              <button style={btnGreen} onClick={() => window.print()}>🖨️ In / Lưu PDF</button>
            </div>

            <div style={{textAlign:'center',fontSize:12,color:C.muted,marginTop:'2rem',paddingTop:'1rem',borderTop:`1px solid ${C.border}`}}>
              <strong>TS.BS Chuyên khoa Cột sống · Bệnh viện TWQĐ 108</strong><br/>
              Công cụ hỗ trợ giáo dục sức khỏe — không thay thế khám và tư vấn y tế trực tiếp.<br/>
              Phiên bản 3.0 · {new Date().toLocaleDateString('vi-VN')} · Dựa trên 10 nghiên cứu peer-reviewed
            </div>
          </>
        )}

      </div>
    </div>
