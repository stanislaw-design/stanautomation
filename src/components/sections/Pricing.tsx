"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import posthog from "posthog-js";

function fmt(n: number) {
  return n.toLocaleString("pl-PL");
}

export default function Pricing() {
  const [tables, setTables] = useState(1);
  const [bill, setBill] = useState(150);

  const daily = tables * bill;
  const weekly = daily * 7;
  const monthly = daily * 30;
  const yearly = daily * 365;

  return (
    <section id="cennik" className="relative overflow-hidden py-[120px] section-divider bg-white">
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-60px",
          left: "-120px",
          width: "500px",
          height: "460px",
          background: "#dc2626",
          opacity: 0.06,
          borderRadius: "55% 45% 38% 62% / 48% 60% 40% 52%",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px",
          right: "-100px",
          width: "420px",
          height: "380px",
          background: "#1d4ed8",
          opacity: 0.09,
          borderRadius: "44% 56% 62% 38% / 60% 44% 56% 40%",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#dc2626] text-[11px] font-[family-name:var(--font-inter)] font-medium uppercase tracking-[0.15em] mb-4 bg-[#fef2f2] px-3 py-1.5 rounded-full border border-[#fecaca]">
            Kalkulator strat
          </span>
          <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-[#00171f] mb-4">
            Ile kosztuje Cię
            <br />
            <span className="text-[#dc2626]">brak dobrej strony?</span>
          </h2>
          <p className="text-[#003459]/50 text-[17px] font-[family-name:var(--font-inter)] max-w-md mx-auto leading-relaxed">
            Ustaw suwaki — zobaczysz swój konkretny koszt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Inputs */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8e8e8] shadow-md shadow-[#003459]/5 flex flex-col gap-10">
            {/* Slider 1 */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm font-semibold text-[#00171f] font-[family-name:var(--font-inter)]">
                  Wolne stoliki wieczorem
                </label>
                <span className="font-[family-name:var(--font-mono)] font-bold text-2xl text-[#1d4ed8]">
                  {tables}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={tables}
                onChange={(e) => setTables(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#1d4ed8] bg-[#e8f5fc]"
              />
              <div className="flex justify-between mt-1.5 text-[11px] text-[#003459]/30 font-[family-name:var(--font-inter)]">
                <span>1 stolik</span>
                <span>10 stolików</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm font-semibold text-[#00171f] font-[family-name:var(--font-inter)]">
                  Średni rachunek na stół
                </label>
                <span className="font-[family-name:var(--font-mono)] font-bold text-2xl text-[#1d4ed8]">
                  {bill} PLN
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={500}
                step={10}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#1d4ed8] bg-[#e8f5fc]"
              />
              <div className="flex justify-between mt-1.5 text-[11px] text-[#003459]/30 font-[family-name:var(--font-inter)]">
                <span>50 PLN</span>
                <span>500 PLN</span>
              </div>
            </div>

            <p className="text-[#003459]/30 text-xs font-[family-name:var(--font-inter)] mt-auto">
              Kalkulacja zakłada straty przy nieobsadzonych stolikach przez jeden wieczór dziennie.
            </p>
          </div>

          {/* Result */}
          <div className="bg-[#00171f] rounded-2xl p-8 border border-[#1d4ed8]/20 shadow-xl flex flex-col gap-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1d4ed8] font-[family-name:var(--font-inter)]">
              Twoja strata
            </div>

            <div className="space-y-4 flex-1">
              {[
                { label: "dziennie", value: daily, sm: true },
                { label: "tygodniowo", value: weekly, sm: true },
                { label: "miesięcznie", value: monthly, sm: false },
              ].map(({ label, value, sm }) => (
                <div key={label} className="flex items-baseline justify-between border-b border-white/5 pb-4">
                  <span className="text-sm text-white/35 font-[family-name:var(--font-inter)]">
                    {label}
                  </span>
                  <span
                    className={`font-[family-name:var(--font-mono)] font-bold tabular-nums text-white/70 transition-all duration-150 ${
                      sm ? "text-lg" : "text-2xl"
                    }`}
                  >
                    {fmt(value)} PLN
                  </span>
                </div>
              ))}

              {/* Yearly — highlighted */}
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-sm text-white/40 font-[family-name:var(--font-inter)]">
                  rocznie
                </span>
                <span className="font-[family-name:var(--font-mono)] font-bold tabular-nums text-[#f87171] text-[clamp(28px,3vw,40px)] leading-none transition-all duration-150">
                  {fmt(yearly)} PLN
                </span>
              </div>
            </div>

            <a
              href="#kontakt"
              onClick={() => posthog.capture("pricing_cta_clicked", { tables, bill, yearly_loss: yearly })}
              className="mt-2 text-center py-3.5 rounded-xl text-sm font-semibold font-[family-name:var(--font-inter)] bg-[#1d4ed8] text-white hover:brightness-110 hover:scale-[1.02] transition-all duration-150 shadow-lg shadow-[#1d4ed8]/30"
            >
              Umów bezpłatną wycenę →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
