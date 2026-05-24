"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView, type Transition } from "framer-motion";

const ease: Transition["ease"] = "easeOut";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function Stars({ count, filled }: { count: number; filled: number }) {
  return (
    <span className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={`w-3 h-3 ${i < filled ? "text-[#fbbc04]" : "text-[#dadce0]"}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMapsVisual() {
  const listings = [
    { name: "Trattoria Roma", rating: 4.8, stars: 5, reviews: 312, type: "Restauracja włoska · $$", status: "Otwarte", until: "22:00", img: "from-amber-100 to-orange-100", dim: false },
    { name: "Gdańska Kuchnia", rating: 4.6, stars: 5, reviews: 189, type: "Restauracja polska · $$", status: "Otwarte", until: "21:00", img: "from-sky-100 to-blue-100", dim: false },
    { name: "Twoja restauracja", rating: null, stars: 0, reviews: 0, type: "Brak strony internetowej", status: null, until: null, img: "from-gray-100 to-gray-200", dim: true },
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/10 w-full max-w-sm border border-[#dadce0]">
      {/* Search bar */}
      <div className="px-3 pt-3 pb-2 bg-white">
        <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-md shadow-black/10 border border-[#dadce0]">
          <svg className="w-4 h-4 text-[#4285f4] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <span className="text-[#3c4043] text-xs flex-1">Restauracje w pobliżu</span>
          <div className="w-5 h-5 rounded-full bg-[#4285f4] flex items-center justify-center shrink-0">
            <span className="text-white text-[8px] font-bold">G</span>
          </div>
        </div>
        {/* Filter chips */}
        <div className="flex gap-1.5 mt-2 overflow-hidden">
          {["Otwarte teraz", "Ocena 4.0+", "Włoska"].map((chip) => (
            <span key={chip} className="border border-[#dadce0] rounded-full px-2 py-0.5 text-[10px] text-[#3c4043] whitespace-nowrap bg-white">
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="divide-y divide-[#f0f0f0]">
        {listings.map((r) => (
          <div key={r.name} className={`px-3 py-3 flex gap-2.5 ${r.dim ? "opacity-35" : ""}`}>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate ${r.dim ? "text-[#3c4043]" : "text-[#1a73e8]"}`}>
                {r.name}
              </p>
              {r.rating !== null ? (
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[#e37400] text-[11px] font-bold">{r.rating}</span>
                  <Stars count={5} filled={r.stars} />
                  <span className="text-[#70757a] text-[10px]">({r.reviews})</span>
                </div>
              ) : (
                <p className="text-[#70757a] text-[10px] mt-0.5">Brak opinii</p>
              )}
              <p className="text-[#70757a] text-[10px] mt-0.5">{r.type}</p>
              {r.status && (
                <p className="text-[10px] mt-0.5">
                  <span className="text-[#137333] font-medium">{r.status}</span>
                  <span className="text-[#70757a]"> · do {r.until}</span>
                </p>
              )}
            </div>
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${r.img} shrink-0 overflow-hidden`} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-3 py-2.5 bg-[#f8f9fa] border-t border-[#f0f0f0]">
        <p className="text-[#1a73e8] text-[11px]">↓ Twoja restauracja poniżej widocznego obszaru</p>
      </div>
    </div>
  );
}

function SolutionVisual() {
  const days = [
    { d: "Wt", n: "20", active: false },
    { d: "Śr", n: "21", active: true },
    { d: "Cz", n: "22", active: false },
    { d: "Pt", n: "23", active: false },
    { d: "So", n: "24", active: false },
  ];
  const slots = [
    { t: "12:00", free: true },
    { t: "13:00", free: false },
    { t: "14:00", free: true },
    { t: "18:00", free: true },
    { t: "19:00", free: true },
    { t: "20:00", free: false },
    { t: "21:00", free: true },
    { t: "21:30", free: true },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#c8e9f7] shadow-lg shadow-[#1d4ed8]/8 w-full max-w-sm">
      <div className="bg-[#f5fbff] rounded-xl overflow-hidden border border-[#c8e9f7]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1e40af] to-[#1d4ed8] px-4 pt-4 pb-3">
          <p className="text-white font-semibold text-sm">Restauracja Italiana</p>
          <p className="text-white/70 text-xs">Sopot · Czynne 12:00–22:00</p>
          {/* Tabs */}
          <div className="flex gap-1.5 mt-3">
            {["Menu", "Rezerwuj", "Galeria"].map((tab) => (
              <span
                key={tab}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide ${
                  tab === "Rezerwuj"
                    ? "bg-white text-[#1e40af]"
                    : "bg-white/15 text-white/80"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Step label */}
          <p className="text-[#003459]/40 text-[10px] uppercase tracking-widest font-semibold">Wybierz datę</p>

          {/* Date picker row */}
          <div className="flex gap-1.5 justify-between">
            {days.map((day) => (
              <div
                key={day.n}
                className={`flex-1 flex flex-col items-center py-2 rounded-lg border text-center ${
                  day.active
                    ? "bg-[#1d4ed8] border-[#1d4ed8] shadow-sm shadow-[#1d4ed8]/30"
                    : "bg-white border-[#c8e9f7]"
                }`}
              >
                <span className={`text-[9px] font-medium ${day.active ? "text-white/70" : "text-[#003459]/40"}`}>
                  {day.d}
                </span>
                <span className={`text-sm font-bold leading-tight ${day.active ? "text-white" : "text-[#003459]"}`}>
                  {day.n}
                </span>
              </div>
            ))}
          </div>

          {/* Guest count */}
          <div className="flex items-center justify-between bg-white rounded-lg border border-[#c8e9f7] px-3 py-2.5">
            <span className="text-[#003459]/60 text-xs">Liczba gości</span>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#f0f7ff] border border-[#c8e9f7] flex items-center justify-center">
                <span className="text-[#1d4ed8] text-sm font-bold leading-none">−</span>
              </div>
              <span className="text-[#003459] text-sm font-bold w-3 text-center">2</span>
              <div className="w-6 h-6 rounded-full bg-[#1d4ed8] flex items-center justify-center">
                <span className="text-white text-sm font-bold leading-none">+</span>
              </div>
            </div>
          </div>

          {/* Time slots */}
          <div>
            <p className="text-[#003459]/40 text-[10px] uppercase tracking-widest font-semibold mb-2">Dostępne godziny</p>
            <div className="grid grid-cols-4 gap-1.5">
              {slots.map((s) => (
                <div
                  key={s.t}
                  className={`py-1.5 rounded-lg text-center text-[11px] font-semibold border ${
                    !s.free
                      ? "bg-[#f5f5f5] border-[#ebebeb] text-[#003459]/25 line-through"
                      : s.t === "19:00"
                      ? "bg-[#1d4ed8] border-[#1d4ed8] text-white shadow-sm shadow-[#1d4ed8]/25"
                      : "bg-white border-[#c8e9f7] text-[#003459]/80"
                  }`}
                >
                  {s.t}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#1d4ed8] rounded-xl py-3 text-center shadow-md shadow-[#1d4ed8]/25">
            <span className="text-white text-xs font-bold tracking-wide">Potwierdź rezerwację →</span>
          </div>

          {/* Confirmation note */}
          <p className="text-[#003459]/35 text-[10px] text-center">Potwierdzenie SMS i email · Bez opłaty z góry</p>
        </div>
      </div>
    </div>
  );
}

function CountUp({ to, decimals = 0, prefix = "", suffix = "", isInView }: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const ctrl = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => ctrl.stop();
  }, [isInView, to]);
  return <>{prefix}{val.toFixed(decimals)}{suffix}</>;
}

function DashboardVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const bars = [32, 48, 55, 41, 63, 71, 61];
  const maxBar = 71;
  const dayLabels = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];

  const stats = [
    { label: "Rezerwacje online", to: 31, decimals: 0, prefix: "", suffix: "", trend: "↑ +12% vs zeszły tydz." },
    { label: "Wizyty na stronie", to: 423, decimals: 0, prefix: "", suffix: "", trend: "↑ +8% vs zeszły tydz." },
    { label: "Konwersja strony", to: 7.3, decimals: 1, prefix: "", suffix: "%", trend: "↑ +0.4pp" },
    { label: "Pozycja w Google", to: 2, decimals: 0, prefix: "#", suffix: "", trend: "↑ 3 miejsca w górę" },
  ];

  return (
    <div ref={ref} className="bg-white rounded-2xl p-5 border border-[#c8e9f7] shadow-lg shadow-[#1d4ed8]/8 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[#003459] text-xs font-bold font-[family-name:var(--font-jakarta)]">Panel restauratora</p>
          <p className="text-[#003459]/40 text-[10px] font-[family-name:var(--font-inter)]">Ten tydzień · Restauracja Italiana</p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-2.5 py-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-[#15803d] text-[9px] font-semibold font-[family-name:var(--font-inter)]">Na żywo</span>
        </div>
      </div>

      {/* 2×2 stat grid */}
      <div className="grid grid-cols-2 gap-2.5 mb-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#f5fbff] rounded-xl p-3 border border-[#c8e9f7]">
            <p className="text-[#003459]/40 text-[9px] uppercase tracking-wider font-semibold mb-1.5 font-[family-name:var(--font-inter)] leading-tight">
              {s.label}
            </p>
            <p className="text-[#003459] text-xl font-extrabold leading-none mb-1.5 font-[family-name:var(--font-jakarta)]">
              <CountUp to={s.to} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} isInView={isInView} />
            </p>
            <p className="text-[#16a34a] text-[10px] font-medium font-[family-name:var(--font-inter)]">{s.trend}</p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-[#f5fbff] rounded-xl p-3 border border-[#c8e9f7]">
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[#003459]/40 text-[9px] uppercase tracking-wider font-semibold font-[family-name:var(--font-inter)]">Wizyty / dzień</p>
          <p className="text-[#1d4ed8] text-[9px] font-bold font-[family-name:var(--font-inter)]">Dziś: 61</p>
        </div>
        <div className="flex items-end gap-1.5 h-12">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-t-sm ${i === 6 ? "bg-[#1d4ed8]" : "bg-[#1d4ed8]/25"}`}
              initial={{ height: 0 }}
              animate={isInView ? { height: `${(h / maxBar) * 48}px` } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.07, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className="flex gap-1.5 mt-1.5">
          {dayLabels.map((d, i) => (
            <p key={i} className={`flex-1 text-center text-[8px] font-[family-name:var(--font-inter)] ${i === 6 ? "text-[#1d4ed8] font-bold" : "text-[#003459]/30"}`}>
              {d}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const blocks = [
  {
    label: "Czemu restauracje tracą klientów",
    title: "Piękna restauracja.\nNiewidoczna w Google.",
    body: "Turyści szukają restauracji na telefonie zanim wyjdą z hotelu. Jeśli Twoje menu jest nieczytelne lub strona ładuje się 6 sekund — idą do konkurencji. Ty tego nie widzisz. Ale widzisz puste stoliki.",
    visual: <GoogleMapsVisual />,
    reverse: false,
  },
  {
    label: "Co dostarczamy",
    title: "Strona która\npracuje na Ciebie\n24 godziny na dobę.",
    body: "Czytelne menu z cenami. Rezerwacje online bez dzwonienia. Strona ładuje się w sekundy — klienci nie odchodzą przez długie ładowanie. AI SEO: widoczny w Google, ChatGPT i Perplexity.",
    visual: <SolutionVisual />,
    reverse: true,
  },
  {
    label: "Mierzalne wyniki",
    title: "Liczby które możesz\nsprawdzić sam —\nzanim zdecydujesz.",
    body: "Ile stolików zajął Ci Google w zeszłym tygodniu? Ile osób odwiedziło stronę i ilu zarezerwowało? Te liczby masz pod ręką od pierwszego dnia — bez agencji, bez zgadywania.",
    visual: <DashboardVisual />,
    reverse: false,
  },
];

export default function ProblemSolution() {
  return (
    <section id="uslugi" className="relative overflow-hidden py-[120px] section-divider bg-white">
      <div className="absolute pointer-events-none" style={{ top: '-70px', left: '-110px', width: '520px', height: '480px', background: '#1d4ed8', opacity: 0.09, borderRadius: '55% 45% 62% 38% / 48% 58% 42% 52%', filter: 'blur(70px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-80px', right: '-100px', width: '440px', height: '400px', background: '#1d4ed8', opacity: 0.08, borderRadius: '44% 56% 38% 62% / 60% 40% 60% 40%', filter: 'blur(65px)' }} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-24">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                block.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className={block.reverse ? "order-2 lg:order-1" : ""}>
                <span className="inline-block text-[#1e40af] text-[11px] font-[family-name:var(--font-inter)] font-medium uppercase tracking-[0.15em] mb-4 bg-[#e8f5fc] px-3 py-1.5 rounded-full border border-[#c8e9f7]">
                  {block.label}
                </span>
                <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-[#00171f] mb-5 whitespace-pre-line">
                  {block.title}
                </h2>
                <p className="text-[#003459]/65 text-[17px] leading-relaxed font-[family-name:var(--font-inter)]">
                  {block.body}
                </p>
              </div>
              <div className={`flex ${block.reverse ? "lg:justify-start order-1 lg:order-2" : "lg:justify-end"} justify-center`}>
                {block.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
