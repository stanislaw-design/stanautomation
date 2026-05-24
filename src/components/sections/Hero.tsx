"use client";

import dynamic from "next/dynamic";
import { motion, type Transition } from "framer-motion";
import posthog from "posthog-js";

const ease: Transition["ease"] = "easeOut";

const PhoneAnimationPlayer = dynamic(
  () => import("../PhoneAnimationPlayer"),
  {
    ssr: false,
    loading: () => <div className="w-[330px] h-[654px] max-w-full" />,
  }
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 glow-top" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      <div className="absolute pointer-events-none" style={{ top: '-80px', right: '-130px', width: '580px', height: '520px', background: '#1d4ed8', opacity: 0.13, borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%', filter: 'blur(72px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-60px', left: '-90px', width: '380px', height: '340px', background: '#1d4ed8', opacity: 0.10, borderRadius: '44% 56% 62% 38% / 54% 38% 62% 46%', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
              className="font-[family-name:var(--font-jakarta)] text-[clamp(40px,5vw,72px)] leading-[1.1] font-extrabold text-[#00171f] mb-6"
            >
              Strona dla Twojej
              <br />
              restauracji gotowa
              <br />
              <span className="text-[#1d4ed8]">w 48 godzin.</span>
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
              className="text-[#003459]/65 text-lg leading-relaxed mb-8 max-w-lg font-[family-name:var(--font-inter)]"
            >
              Klienci znajdą Cię na Google — i zarezerwują stolik ze strony.
              Jeśli nie jesteś zadowolony — oddajemy pieniądze.

            </motion.p>

            <motion.div
              initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <a
                href="#demo"
                onClick={() => posthog.capture("hero_cta_demo_clicked")}
                className="bg-[#1d4ed8] text-white px-7 py-3.5 rounded-xl font-[family-name:var(--font-inter)] font-semibold text-[15px] hover:brightness-110 transition-all duration-150 hover:scale-[1.02] text-center shadow-lg shadow-[#1d4ed8]/25"
              >
                Zobacz demo →
              </a>
              <a
                href="#cennik"
                onClick={() => posthog.capture("hero_cta_pricing_clicked")}
                className="border border-[#1e40af]/50 text-[#003459] px-7 py-3.5 rounded-xl font-[family-name:var(--font-inter)] font-semibold text-[15px] hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-all duration-150 text-center bg-white"
              >
                Sprawdź ceny
              </a>
            </motion.div>

            <motion.p
              initial="hidden" animate="visible" custom={0.4} variants={fadeUp}
              className="text-[#003459]/45 text-[13px] font-[family-name:var(--font-inter)]"
            >
              Zero zaliczki przed demo · 20 minut Twojego czasu · Zwrot 100% bez pytań
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end animate-float"
          >
            <PhoneAnimationPlayer />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
