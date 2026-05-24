"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call 20 min",
    body: "Opowiadasz nam o swojej restauracji. Tyle od Ciebie potrzebujemy.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "My robimy wszystko",
    body: "Zbieramy treści, piszemy, kodujemy, optymalizujemy. Nie potrzebujesz nic robić.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Twoja strona online",
    body: "Gotowe w 48 godzin od rozmowy. Możesz sprawdzić.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-[120px] section-divider bg-white">
      <div className="absolute pointer-events-none" style={{ top: '-80px', left: '-100px', width: '480px', height: '440px', background: '#1d4ed8', opacity: 0.09, borderRadius: '50% 50% 62% 38% / 44% 56% 44% 56%', filter: 'blur(70px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-60px', right: '-110px', width: '420px', height: '380px', background: '#1d4ed8', opacity: 0.08, borderRadius: '38% 62% 46% 54% / 58% 42% 58% 42%', filter: 'blur(65px)' }} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-[#00171f]">
            Trzy kroki.{" "}
            <span className="text-[#1d4ed8]">Dwadzieścia minut</span>{" "}
            Twojego czasu.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[16.5%] right-[16.5%] h-px border-t-2 border-dashed border-[#1d4ed8]/25" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-[#c8e9f7] flex flex-col items-center justify-center gap-1 relative z-10 shadow-lg shadow-[#1d4ed8]/10">
                    <span className="text-[#1e40af] font-[family-name:var(--font-mono)] font-bold text-xs tracking-widest">
                      {step.number}
                    </span>
                    <div className="text-[#1d4ed8]">{step.icon}</div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#1d4ed8]/5 scale-125" />
                </div>

                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-xl text-[#00171f] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#003459]/60 text-base leading-relaxed font-[family-name:var(--font-inter)] max-w-xs">
                  {step.body}
                </p>

                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-[#1d4ed8] text-2xl">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
