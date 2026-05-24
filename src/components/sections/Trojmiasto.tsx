"use client";

import { motion } from "framer-motion";

const cities = ["Gdańsk", "Gdynia", "Sopot"];

export default function Trojmiasto() {
  return (
    <section className="py-[120px] section-divider relative overflow-hidden bg-gradient-to-b from-white via-[#f5fbff] to-white">
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-[#e8f5fc]/40" />
      <div className="absolute pointer-events-none" style={{ top: '-50px', left: '-120px', width: '460px', height: '420px', background: '#1d4ed8', opacity: 0.10, borderRadius: '56% 44% 40% 60% / 52% 48% 52% 48%', filter: 'blur(68px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-60px', right: '-100px', width: '420px', height: '380px', background: '#1d4ed8', opacity: 0.09, borderRadius: '42% 58% 60% 40% / 56% 44% 56% 44%', filter: 'blur(65px)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#1e40af] text-[11px] font-[family-name:var(--font-inter)] font-medium uppercase tracking-[0.15em] mb-6 bg-[#e8f5fc] px-3 py-1.5 rounded-full border border-[#c8e9f7]">
              Trójmiasto
            </span>
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-[#00171f] mb-6">
              Znamy Wasze restauracje.
              <br />
              Znamy sezonowość.
              <br />
              <span className="text-[#1d4ed8]">Jesteśmy stąd.</span>
            </h2>
            <p className="text-[#003459]/65 text-[17px] leading-relaxed font-[family-name:var(--font-inter)]">
              Gdańsk, Gdynia, Sopot — rozumiemy czym różni się sezon letni od
              zimy dla restauracji tutaj. Wiemy że turyści z hoteli szukają na
              Google Maps. Wiemy że puste stoliki w środę bolą bardziej niż w
              niedzielę. Dlatego to co budujemy jest dopasowane do Waszych
              realiów — nie jest ogólnym szablonem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center lg:items-end"
          >
            <div className="relative w-full max-w-sm">
              <div className="flex flex-col gap-3">
                {cities.map((city, i) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 bg-white border border-[#c8e9f7] rounded-2xl px-6 py-4 shadow-md shadow-[#1d4ed8]/8"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#1d4ed8] shrink-0 shadow-sm shadow-[#1d4ed8]/50" />
                    <span
                      className="font-[family-name:var(--font-jakarta)] font-bold text-[#00171f]"
                      style={{ fontSize: `${2.5 - i * 0.3}rem` }}
                    >
                      {city}
                    </span>
                    <div className="ml-auto">
                      <svg className="w-4 h-4 text-[#1e40af]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 bg-[#e8f5fc] border border-[#c8e9f7] rounded-2xl p-5 text-center"
              >
                <p className="text-[#003459]/50 text-xs uppercase tracking-[0.15em] mb-2 font-[family-name:var(--font-inter)]">
                  Zasięg działania
                </p>
                <p className="text-[#1d4ed8] font-[family-name:var(--font-mono)] font-bold text-2xl">
                  Trójmiasto
                </p>
                <p className="text-[#003459]/40 text-sm mt-1 font-[family-name:var(--font-inter)]">
                  i okolice
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
