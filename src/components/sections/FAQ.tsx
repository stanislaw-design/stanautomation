"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Ile czasu trwa wdrożenie strony i jakich materiałów potrzebujecie?",
    answer: "Realizacja strony internetowej trwa zaledwie 48 godzin od momentu zebrania od Ciebie podstawowych materiałów. Do startu potrzebujemy jedynie Twojego logo, aktualnego menu z cenami, danych kontaktowych oraz zdjęć dań (jeśli ich nie masz, możemy zająć się ich profesjonalną obróbką lub zorganizować sesję). Od Ciebie wymagamy jedynie 20 minut rozmowy briefingowej – całą resztą (pisanie tekstów, kodowanie, konfiguracja hostingu) zajmujemy się sami.",
  },
  {
    question: "Czy Wasz wbudowany system rezerwacji stolików pobiera prowizje od rezerwacji?",
    answer: "Zdecydowanie nie. Nasz system rezerwacji stolików online jest zbudowany przez nas od zera i zintegrowany bezpośrednio z Twoją stroną. W przeciwieństwie do portali takich jak Booksy czy TheFork, nie pobieramy żadnych prowizji za rezerwacje ani stałych opłat od stolika. Całość wpłat z ewentualnych przedpłat (realizowanych bezpiecznie przez Stripe) trafia bezpośrednio na Twoje konto bankowe.",
  },
  {
    question: "Co to jest optymalizacja pod AI (AI SEO / GEO) i jak pomoże mojej restauracji w Trójmieście?",
    answer: "AI SEO (lub Generative Engine Optimization) to dostosowanie strony pod najnowsze wyszukiwarki oparte o sztuczną inteligencję (np. Google Gemini, ChatGPT, Perplexity, SearchGPT). W StanAutomation wdrażamy pliki instrukcji llms.txt, Speakable Schema (dla asystentów głosowych) oraz precyzyjne dane strukturalne Schema.org (Restaurant, MenuItem, LocalBusiness). Dzięki temu asystenci AI, gdy są pytani o polecane restauracje w Gdańsku, Gdyni czy Sopocie, łatwo odnajdują Twoją stronę i chętnie rekomendują ją użytkownikom.",
  },
  {
    question: "Co wchodzi w skład abonamentu i czy mogę z niego zrezygnować?",
    answer: "Nasz najniższy plan Obecność (29 PLN/mies.) obejmuje szybki hosting na Vercel, darmowy certyfikat SSL, monitoring działania strony 24/7 i bezpłatne usuwanie ewentualnych błędów. Plan Wzrost (249 PLN/mies.) dodatkowo daje Ci do 5 aktualizacji menu/treści w miesiącu i raporty SEO. Jesteś właścicielem kodu od pierwszego dnia – jeśli zdecydujesz się zrezygnować z subskrypcji, możesz bez problemu przenieść stronę do dowolnego innego dostawcy hostingu.",
  },
  {
    question: "Czy oferujecie gwarancję zwrotu pieniędzy?",
    answer: "Tak, oferujemy 100% gwarancję zwrotu pieniędzy. Jeśli gotowa strona internetowa nie spełni Twoich oczekiwań po jej wdrożeniu, zwracamy pełną wpłaconą kwotę bez zadawania pytań. Chcemy, aby współpraca ze StanAutomation była dla Ciebie całkowicie bezryzykowna i opierała się na zaufaniu.",
  },
  {
    question: "Dlaczego wysoki wynik wydajności (PageSpeed) strony jest kluczowy dla restauracji?",
    answer: "Ponad 70% klientów szuka restauracji w Trójmieście na telefonie, będąc już w drodze. Jeśli strona ładuje się dłużej niż 3 sekundy, większość z nich rezygnuje. Nasze strony są zoptymalizowane pod kątem wskaźników Core Web Vitals i regularnie uzyskują wyniki powyżej 90-98% na urządzeniach mobilnych w Google PageSpeed Insights. Szybka strona oznacza mniej utraconych gości i wyższą pozycję w wyszukiwarkach.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Generate structured FAQPage JSON-LD for AI search engines indexing
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative overflow-hidden py-[120px] section-divider bg-white">
      {/* Background decoration */}
      <div className="absolute pointer-events-none" style={{ top: '-60px', left: '-120px', width: '500px', height: '460px', background: '#1d4ed8', opacity: 0.08, borderRadius: '62% 38% 50% 50% / 54% 46% 54% 46%', filter: 'blur(68px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-70px', right: '-90px', width: '400px', height: '360px', background: '#1d4ed8', opacity: 0.07, borderRadius: '46% 54% 62% 38% / 50% 60% 40% 50%', filter: 'blur(60px)' }} />

      {/* JSON-LD Script tag for Search Engine and AI indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#1e40af] text-[11px] font-[family-name:var(--font-inter)] font-medium uppercase tracking-[0.15em] mb-4 bg-[#e8f5fc] px-3 py-1.5 rounded-full border border-[#c8e9f7]">
            Często zadawane pytania
          </span>
          <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-[#00171f] mb-4">
            Masz pytania? <span className="text-[#1d4ed8]">Mamy odpowiedzi.</span>
          </h2>
          <p className="text-[#003459]/60 text-lg max-w-lg mx-auto font-[family-name:var(--font-inter)]">
            Dowiedz się więcej o naszym procesie, ofercie i technologii, która pomoże Twojej restauracji rosnąć.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-[#1d4ed8] shadow-lg shadow-[#1d4ed8]/5" : "border-[#003459]/10 hover:border-[#1d4ed8]/40"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-button-${index}`}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="font-[family-name:var(--font-jakarta)] font-bold text-base sm:text-lg text-[#00171f] transition-colors group-hover:text-[#1d4ed8]">
                    {item.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border border-[#003459]/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-[#1d4ed8] text-[#1d4ed8]" : "text-[#003459]/50"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[#003459]/75 text-sm sm:text-base leading-relaxed font-[family-name:var(--font-inter)] border-t border-gray-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
