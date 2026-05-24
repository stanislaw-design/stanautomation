"use client";

import { motion } from "framer-motion";
import posthog from "posthog-js";

const demos = [
  {
    city: "Gdańsk",
    type: "Restauracja włoska",
    accent: "from-amber-50 to-[#e8f5fc]",
    border: "border-amber-100",
    tags: ["Pasta", "Pizza", "Wino"],
  },
  {
    city: "Gdynia",
    type: "Restauracja morska",
    accent: "from-[#e8f5fc] to-cyan-50",
    border: "border-[#c8e9f7]",
    tags: ["Ryby", "Owoce morza", "Taras"],
  },
  {
    city: "Sopot",
    type: "Restauracja polska",
    accent: "from-emerald-50 to-[#e8f5fc]",
    border: "border-emerald-100",
    tags: ["Pierogi", "Żurek", "Sezonowe"],
  },
];

function DemoCard({ demo, index }: { demo: typeof demos[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-white border ${demo.border} rounded-2xl overflow-hidden hover:border-[#1d4ed8] transition-all duration-200 hover:shadow-xl hover:shadow-[#1d4ed8]/10 shadow-md shadow-[#003459]/5`}
    >
      <div className={`bg-gradient-to-br ${demo.accent} aspect-[16/10] relative overflow-hidden`}>
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-[#c8e9f7]">
              <span className="text-[#003459] text-xs font-medium">{demo.city}</span>
            </div>
            <div className="flex gap-1">
              {[92, 96, 98, 95].map((v, i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-white border border-[#1d4ed8]/40 flex items-center justify-center shadow-sm">
                  <span className="text-[#1d4ed8] text-[8px] font-bold font-mono">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-1.5 mb-3">
              {[1, 2, 3].map((j) => (
                <div key={j} className="flex items-center justify-between bg-white/70 rounded-lg px-3 py-1.5 border border-white/80">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#1d4ed8]/20" />
                    <div className="w-20 h-2 bg-[#003459]/15 rounded-full" />
                  </div>
                  <div className="w-12 h-2 bg-[#1d4ed8]/30 rounded-full" />
                </div>
              ))}
            </div>
            <div className="bg-[#1d4ed8] rounded-lg py-2 text-center shadow-sm">
              <span className="text-white text-[11px] font-bold">Rezerwuj stolik →</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-1.5 mb-3">
          {demo.tags.map((tag) => (
            <span key={tag} className="text-[#1e40af] text-[10px] uppercase tracking-wider font-medium border border-[#1d4ed8]/20 rounded-full px-2 py-0.5 bg-[#f0f9ff]">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-[#00171f] font-[family-name:var(--font-jakarta)] font-semibold text-base mb-1">
          {demo.type}
        </h3>
        <p className="text-[#003459]/50 text-sm mb-4">{demo.city}</p>
        <button
          onClick={() => posthog.capture("demo_card_clicked", { city: demo.city, restaurant_type: demo.type })}
          className="w-full text-[#1e40af] border border-[#1e40af]/30 rounded-xl py-2.5 text-sm font-medium hover:border-[#1d4ed8] hover:text-[#1d4ed8] hover:bg-[#f0f9ff] transition-all duration-150"
        >
          Zobacz demo →
        </button>
      </div>
    </motion.div>
  );
}

export default function Demo() {
  return (
    <section id="demo" className="relative overflow-hidden py-[120px] section-divider bg-gradient-to-b from-white via-[#f5fbff] to-white">
      <div className="absolute pointer-events-none" style={{ top: '-60px', right: '-120px', width: '500px', height: '460px', background: '#1d4ed8', opacity: 0.10, borderRadius: '62% 38% 50% 50% / 54% 46% 54% 46%', filter: 'blur(68px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-70px', left: '-90px', width: '400px', height: '360px', background: '#1d4ed8', opacity: 0.08, borderRadius: '46% 54% 62% 38% / 50% 60% 40% 50%', filter: 'blur(60px)' }} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#1e40af] text-[11px] font-[family-name:var(--font-inter)] font-medium uppercase tracking-[0.15em] mb-4 bg-[#e8f5fc] px-3 py-1.5 rounded-full border border-[#c8e9f7]">
            Przykłady naszych realizacji
          </span>
          <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-[clamp(32px,4vw,52px)] leading-[1.1] text-[#00171f] mb-4">
            Twoja restauracja
            <br />
            mogłaby tak wyglądać.
          </h2>
          <p className="text-[#003459]/60 text-lg max-w-lg mx-auto font-[family-name:var(--font-inter)]">
            Każde demo przygotowujemy pod konkretny typ lokalu.
            Poniżej przykłady — kliknij żeby zobaczyć pełną wersję.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo, i) => (
            <DemoCard key={i} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
