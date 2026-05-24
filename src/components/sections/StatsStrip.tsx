"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 90, suffix: "+", label: "PageSpeed", sublabel: "strona ładuje się błyskawicznie" },
  { value: 48, suffix: "h", label: "realizacja", sublabel: "od briefu do launch" },
  { value: 29, suffix: " PLN", label: "miesięcznie", sublabel: "subskrypcja od dnia 1" },
  { value: 100, suffix: "%", label: "zwrot", sublabel: "jeśli nie spodoba" },
];

export default function StatsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = countersRef.current[i];
        if (!el) return;

        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: String(stat.value),
            duration: 0.8,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0d1a4a] section-divider">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-6 py-6 ${
                i < stats.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-white/10"
                  : ""
              } ${i % 2 === 0 && i < stats.length - 1 ? "border-r lg:border-r-0" : ""}`}
            >
              <div className="flex items-baseline gap-0.5 mb-2">
                <span
                  ref={(el) => { if (el) countersRef.current[i] = el; }}
                  className="font-[family-name:var(--font-mono)] font-bold text-[clamp(40px,5vw,64px)] text-white tabular-nums leading-none"
                >
                  0
                </span>
                <span className="font-[family-name:var(--font-mono)] font-bold text-[clamp(28px,3vw,48px)] text-white leading-none">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-white/80 font-[family-name:var(--font-inter)] font-medium text-sm tracking-wide mb-0.5">
                {stat.label}
              </p>
              <p className="text-white/40 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.08em]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
