"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 90, suffix: "+", label: "PageSpeed", sublabel: "strona ładuje się błyskawicznie" },
  { value: 48, suffix: "h", label: "realizacja", sublabel: "od briefu do launch" },
  { value: 29, suffix: " PLN", label: "miesięcznie", sublabel: "subskrypcja od dnia 1" },
  { value: 100, suffix: "%", label: "zwrot", sublabel: "jeśli nie spodoba" },
];

function StatItem({ value, suffix, label, sublabel, isLast, isOdd }: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  isLast: boolean;
  isOdd: boolean;
}) {
  const [count, setCount] = useState(0);
  const elRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();

    function animateCount() {
      const duration = 1000; // 1 second
      let startTime: number | null = null;

      function step(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // easeOutQuad: t * (2 - t)
        const easeProgress = progress * (2 - progress);
        const currentValue = Math.floor(easeProgress * value);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      }

      requestAnimationFrame(step);
    }
  }, [value]);

  return (
    <div
      className={`flex flex-col items-center text-center px-6 py-6 ${
        !isLast ? "border-b lg:border-b-0 lg:border-r border-white/10" : ""
      } ${isOdd && !isLast ? "border-r lg:border-r-0" : ""}`}
    >
      <div className="flex items-baseline gap-0.5 mb-2">
        <span
          ref={elRef}
          className="font-[family-name:var(--font-mono)] font-bold text-[clamp(40px,5vw,64px)] text-white tabular-nums leading-none"
        >
          {count}
        </span>
        <span className="font-[family-name:var(--font-mono)] font-bold text-[clamp(28px,3vw,48px)] text-white leading-none">
          {suffix}
        </span>
      </div>
      <p className="text-white/80 font-[family-name:var(--font-inter)] font-medium text-sm tracking-wide mb-0.5">
        {label}
      </p>
      <p className="text-white/40 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.08em]">
        {sublabel}
      </p>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-[#0d1a4a] section-divider">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              isLast={i === stats.length - 1}
              isOdd={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
