"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import posthog from "posthog-js";

// Wypełnij w .env.local:
// NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function CookieBanner() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookieConsent");
    if (stored === null) {
      setVisible(true);
    } else {
      const consented = stored === "true";
      setConsent(consented);
      if (consented) {
        posthog.opt_in_capturing();
      } else {
        posthog.opt_out_capturing();
      }
    }
  }, []);

  function accept() {
    localStorage.setItem("cookieConsent", "true");
    setConsent(true);
    setVisible(false);
    posthog.opt_in_capturing();
    posthog.capture("cookie_consent_accepted");
  }

  function decline() {
    localStorage.setItem("cookieConsent", "false");
    setConsent(false);
    setVisible(false);
    posthog.capture("cookie_consent_declined");
    posthog.opt_out_capturing();
  }

  return (
    <>
      {consent === true && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      {visible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#1d4ed8]/12 shadow-[0_-4px_24px_rgba(29,78,216,0.06)]"
          role="dialog"
          aria-label="Zgoda na pliki cookies"
        >
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p className="flex-1 text-[13px] text-[#003459]/60 font-[family-name:var(--font-inter)] leading-relaxed">
              Używamy{" "}
              <span className="text-[#003459]/80 font-medium">
                Google Analytics i PostHog
              </span>{" "}
              do analizy ruchu na stronie. Nie profilujemy ani nie wyświetlamy
              reklam.{" "}
              <a
                href="/polityka-prywatnosci"
                className="text-[#1d4ed8] hover:underline"
              >
                Polityka prywatności
              </a>{" "}
              ·{" "}
              <a
                href="/polityka-cookies"
                className="text-[#1d4ed8] hover:underline"
              >
                Polityka cookies
              </a>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm font-[family-name:var(--font-inter)] font-medium text-[#003459]/55 hover:text-[#003459]/80 transition-colors"
              >
                Odrzuć
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-sm font-[family-name:var(--font-inter)] font-semibold bg-[#1d4ed8] hover:bg-[#1d4ed8]/90 text-white rounded-lg transition-colors"
              >
                Akceptuj
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
