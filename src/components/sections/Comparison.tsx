"use client";

import { motion } from "framer-motion";

const rows = [
  { feature: "Czas realizacji", stan: "48 godzin", agency: "2–4 tygodnie", diy: "Ty robisz sam" },
  { feature: "Szybkość strony (Google)", stan: "90+", agency: "Rzadko mierzone", diy: "40–70 typowo" },
  { feature: "Specjalizacja", stan: "Tylko restauracje", agency: "Wszystko dla wszystkich", diy: "Brak" },
  { feature: "Gwarancja zwrotu", stan: "100%", agency: "Brak", diy: "Brak" },
  { feature: "AI SEO", stan: "Wbudowane", agency: "Rzadko", diy: "Brak" },
  { feature: "Czas właściciela", stan: "20 minut", agency: "Tygodnie spotkań", diy: "Godziny / dni" },
  { feature: "Subskrypcja", stan: "Od 29 PLN", agency: "Brak / drogie", diy: "50–200 PLN bez specjalizacji" },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#1d4ed8] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function Comparison() {
  return (
    <section className="relative overflow-hidden py-[120px] section-divider bg-gradient-to-b from-white via-[#f5fbff] to-white">
      <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-130px', width: '520px', height: '480px', background: '#1d4ed8', opacity: 0.09, borderRadius: '44% 56% 54% 46% / 62% 38% 62% 38%', filter: 'blur(72px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-80px', left: '-100px', width: '440px', height: '400px', background: '#1d4ed8', opacity: 0.08, borderRadius: '60% 40% 44% 56% / 46% 54% 46% 54%', filter: 'blur(65px)' }} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-[#00171f]">
            Dlaczego StanAutomation,
            <br />
            <span className="text-[#1d4ed8]">a nie ktoś inny?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 text-[#003459]/40 text-xs uppercase tracking-[0.1em] font-[family-name:var(--font-inter)] font-medium w-[30%]" />
                  <th className="py-4 px-5 w-[23%] bg-[#e8f5fc] border-t-2 border-x-2 border-[#1d4ed8] rounded-t-xl text-center">
                    <span className="text-[#00171f] font-[family-name:var(--font-jakarta)] font-bold text-base">
                      StanAutomation
                    </span>
                  </th>
                  <th className="py-4 px-5 text-[#003459]/45 text-sm font-[family-name:var(--font-inter)] font-medium w-[23%]">
                    Lokalna agencja
                  </th>
                  <th className="py-4 px-5 text-[#003459]/45 text-sm font-[family-name:var(--font-inter)] font-medium w-[24%]">
                    Wix / Squarespace
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/60" : ""}>
                    <td className="py-4 px-5 text-[#003459]/70 text-sm font-[family-name:var(--font-inter)]">
                      {row.feature}
                    </td>
                    <td className="py-3 px-5 border-x-2 border-[#1d4ed8] bg-[#e8f5fc]">
                      <div className="flex items-center justify-center gap-2">
                        <CheckIcon />
                        <span className="text-[#00171f] text-sm font-medium font-[family-name:var(--font-inter)]">
                          {row.stan}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-5 text-center">
                      <span className="text-[#003459]/40 text-sm font-[family-name:var(--font-inter)]">
                        {row.agency}
                      </span>
                    </td>
                    <td className="py-3 px-5 text-center">
                      <span className="text-[#003459]/40 text-sm font-[family-name:var(--font-inter)]">
                        {row.diy}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td />
                  <td className="pt-0 pb-4 px-5 border-x-2 border-b-2 border-[#1d4ed8] rounded-b-xl bg-[#e8f5fc]">
                    <div className="flex justify-center">
                      <a
                        href="#kontakt"
                        className="bg-[#1d4ed8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all hover:scale-[1.02] shadow-md shadow-[#1d4ed8]/20"
                      >
                        Wybierz nas →
                      </a>
                    </div>
                  </td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-1.5 mb-4">
              <div className="bg-[#e8f5fc] border-2 border-[#1d4ed8] rounded-xl py-2.5 text-center flex items-center justify-center">
                <span className="text-[#00171f] font-[family-name:var(--font-jakarta)] font-bold text-xs leading-tight">StanAutomation</span>
              </div>
              <div className="py-2.5 text-center flex items-center justify-center">
                <span className="text-[#003459]/45 text-xs font-[family-name:var(--font-inter)] font-medium leading-tight text-center">Lokalna<br />agencja</span>
              </div>
              <div className="py-2.5 text-center flex items-center justify-center">
                <span className="text-[#003459]/45 text-xs font-[family-name:var(--font-inter)] font-medium leading-tight text-center">Wix /<br />Squarespace</span>
              </div>
            </div>

            {rows.map((row, i) => (
              <div key={i} className="bg-white/70 rounded-xl border border-[#e8f0fe] overflow-hidden">
                <div className="px-4 py-2.5 bg-[#f8faff] border-b border-[#e8f0fe]">
                  <p className="text-[#003459]/60 text-xs font-semibold font-[family-name:var(--font-inter)] uppercase tracking-wider">
                    {row.feature}
                  </p>
                </div>
                <div className="grid grid-cols-3 divide-x divide-[#e8f0fe]">
                  <div className="px-3 py-3 bg-[#eef6fd] flex flex-col items-center justify-center gap-1 col-start-1">
                    <CheckIcon />
                    <span className="text-[#00171f] text-xs font-semibold font-[family-name:var(--font-inter)] text-center leading-tight">
                      {row.stan}
                    </span>
                  </div>
                  <div className="px-3 py-3 flex items-center justify-center">
                    <span className="text-[#003459]/40 text-xs font-[family-name:var(--font-inter)] text-center leading-tight">
                      {row.agency}
                    </span>
                  </div>
                  <div className="px-3 py-3 flex items-center justify-center">
                    <span className="text-[#003459]/40 text-xs font-[family-name:var(--font-inter)] text-center leading-tight">
                      {row.diy}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <a
                href="#demo"
                className="block w-full bg-[#1d4ed8] text-white py-3.5 rounded-xl text-sm font-semibold text-center hover:brightness-110 transition-all shadow-md shadow-[#1d4ed8]/20"
              >
                Wybierz nas →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
