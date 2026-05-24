"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import posthog from "posthog-js";

const links = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#1d4ed8]/15 shadow-sm shadow-[#1d4ed8]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
          aria-label="StanAutomation"
        >
          <Image
            src="/images/stan_automation_logo_transparent.png"
            alt="StanAutomation Logo"
            width={163}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#003459]/70 hover:text-[#1d4ed8] transition-colors duration-200 text-sm font-[family-name:var(--font-inter)] font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => posthog.capture("navbar_cta_clicked")}
            className="bg-[#1d4ed8] hover:bg-[#1d4ed8]/90 text-white text-sm font-[family-name:var(--font-inter)] font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Umów demo
          </a>
        </div>

        <button
          className="md:hidden text-[#00171f] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-5 space-y-1">
            <span className={`block h-0.5 bg-[#00171f] transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-[#00171f] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-[#00171f] transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/98 backdrop-blur-md border-b border-[#1d4ed8]/15 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#003459]/70 hover:text-[#1d4ed8] transition-colors text-base"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => { posthog.capture("navbar_cta_clicked"); setOpen(false); }}
                className="bg-[#1d4ed8] hover:bg-[#1d4ed8]/90 text-white text-sm font-[family-name:var(--font-inter)] font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-center"
              >
                Umów demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
