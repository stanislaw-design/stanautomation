"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import posthog from "posthog-js";

const EMAIL = "stanislaw@stanautomation.com";

const trustItems = [
  {
    label: "100% zwrot",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "48h realizacja",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Trójmiasto",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Dane bezpieczne",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function FinalCTA() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      posthog.capture("contact_email_copied");
    });
  }

  return (
    <section
      id="kontakt"
      className="py-[120px] section-divider relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5fbff 40%, #ffffff 100%)" }}
    >
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute pointer-events-none" style={{ top: '-70px', right: '-110px', width: '500px', height: '460px', background: '#1d4ed8', opacity: 0.14, borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%', filter: 'blur(72px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-50px', left: '-80px', width: '360px', height: '320px', background: '#1d4ed8', opacity: 0.11, borderRadius: '44% 56% 38% 62% / 54% 46% 54% 46%', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-[clamp(28px,4vw,52px)] leading-[1.1] text-[#00171f] mb-5">
              Skontaktuj się z nami
              <br />
              <span className="text-[#1d4ed8]">— odpowiemy w 24 godziny.</span>
            </h2>
            <p className="text-[#003459]/60 text-[17px] leading-relaxed font-[family-name:var(--font-inter)] mb-10">
              Przygotujemy stronę dla Twojej restauracji i wyślemy link.
              Jeśli się nie spodoba — zero zobowiązań.
              Jeśli się spodoba — zaczniemy w 48 godzin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-[#c8e9f7] rounded-2xl p-8 mb-8 shadow-xl shadow-[#1d4ed8]/10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Email — kliknij aby skopiować */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-4 flex-1 bg-[#f5fbff] border rounded-xl px-6 py-5 hover:shadow-md transition-all duration-200 group text-left cursor-pointer"
              style={{
                borderColor: copied ? "#16a34a" : undefined,
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                style={{
                  background: copied ? "#16a34a1a" : "rgb(29 78 216 / 0.1)",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.svg
                      key="check"
                      className="w-5 h-5"
                      style={{ color: "#16a34a" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.4, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="email"
                      className="w-5 h-5 text-[#1d4ed8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.4, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </div>
              <div className="min-w-0">
                <p className="text-[#003459]/50 text-xs font-[family-name:var(--font-inter)] uppercase tracking-wider mb-0.5">
                  Email
                </p>
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.p
                      key="copied"
                      className="font-[family-name:var(--font-inter)] font-semibold text-sm"
                      style={{ color: "#16a34a" }}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                    >
                      Skopiowano!
                    </motion.p>
                  ) : (
                    <motion.p
                      key="email-text"
                      className="text-[#00171f] font-[family-name:var(--font-inter)] font-semibold text-sm truncate"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                    >
                      {EMAIL}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </button>

            <a
              href="tel:+48505753683"
              onClick={() => posthog.capture("contact_phone_clicked")}
              className="flex items-center gap-4 flex-1 bg-[#f5fbff] border border-[#c8e9f7] rounded-xl px-6 py-5 hover:border-[#1d4ed8] hover:shadow-md transition-all duration-150 group text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1d4ed8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1d4ed8]/20 transition-colors">
                <svg className="w-5 h-5 text-[#1d4ed8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[#003459]/50 text-xs font-[family-name:var(--font-inter)] uppercase tracking-wider mb-0.5">Telefon</p>
                <p className="text-[#00171f] font-[family-name:var(--font-inter)] font-semibold text-sm">+48 505 753 683</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-[#003459]/50 text-sm font-[family-name:var(--font-inter)]">
                <span className="text-[#1d4ed8]/60">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
