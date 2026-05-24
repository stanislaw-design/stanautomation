import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Polityka cookies — StanAutomation",
  description: "Polityka plików cookies serwisu stanautomation.pl",
};

const cookieRows = [
  {
    name: "_ga",
    provider: "Google Analytics",
    desc: "Identyfikuje unikalnych użytkowników witryny",
    lifetime: "2 lata",
  },
  {
    name: "_ga_[ID]",
    provider: "Google Analytics",
    desc: "Przechowuje stan sesji pomiarowej GA4",
    lifetime: "2 lata",
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    desc: "Identyfikuje sesję użytkownika",
    lifetime: "24 godziny",
  },
  {
    name: "ph_*",
    provider: "PostHog",
    desc: "Identyfikuje sesję i rejestruje zdarzenia analityczne",
    lifetime: "1 rok",
  },
];

export default function PolitykaCookies() {
  return (
    <main className="min-h-screen bg-white text-[#00171f] overflow-x-hidden">
      <Navbar />
      <div className="max-w-[780px] mx-auto px-6 pt-28 pb-24">
        <div className="mb-12">
          <p className="text-[#1d4ed8] text-xs font-[family-name:var(--font-inter)] font-semibold uppercase tracking-[0.12em] mb-3">
            Dokumenty prawne
          </p>
          <h1 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl text-[#00171f] mb-3">
            Polityka cookies
          </h1>
          <p className="text-[#003459]/45 text-sm font-[family-name:var(--font-inter)]">
            Ostatnia aktualizacja: 24 maja 2026
          </p>
        </div>

        <div className="space-y-10 font-[family-name:var(--font-inter)] text-[#003459]/75 text-[15px] leading-relaxed">
          <section id="czym">
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-lg text-[#00171f] mb-4">
              1. Czym są pliki cookies?
            </h2>
            <p>
              Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na
              Twoim urządzeniu przez przeglądarkę internetową podczas odwiedzania
              stron. Używamy ich wyłącznie do{" "}
              <strong className="text-[#00171f]">analizy ruchu na stronie</strong> —
              nie do reklam, remarketingu ani profilowania.
            </p>
          </section>

          <section id="lista">
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-lg text-[#00171f] mb-4">
              2. Jakich cookies używamy?
            </h2>
            <p className="mb-5">
              Używamy wyłącznie cookies analitycznych — nie ma na naszej stronie
              cookies niezbędnych techniczne, ponieważ nie wymagamy logowania ani
              koszyka zakupowego.
            </p>
            <div className="overflow-x-auto rounded-xl border border-[#1d4ed8]/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#f8faff] border-b border-[#1d4ed8]/10">
                    <th className="text-left px-4 py-3 font-semibold text-[#00171f] whitespace-nowrap">
                      Cookie
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-[#00171f] whitespace-nowrap">
                      Dostawca
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-[#00171f]">
                      Opis
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-[#00171f] whitespace-nowrap">
                      Czas życia
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookieRows.map((row, i) => (
                    <tr
                      key={row.name}
                      className={i < cookieRows.length - 1 ? "border-b border-[#1d4ed8]/8" : ""}
                    >
                      <td className="px-4 py-3 font-mono text-[13px] text-[#1d4ed8] whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.provider}</td>
                      <td className="px-4 py-3">{row.desc}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.lifetime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="zarzadzanie">
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-lg text-[#00171f] mb-4">
              3. Jak zarządzać plikami cookies?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#00171f] mb-2">
                  Ustawienia przeglądarki
                </h3>
                <ul className="list-disc pl-6 space-y-1 text-[#003459]/70">
                  <li>
                    <strong className="text-[#003459]/85">Chrome:</strong> Ustawienia → Prywatność i
                    bezpieczeństwo → Pliki cookie
                  </li>
                  <li>
                    <strong className="text-[#003459]/85">Firefox:</strong> Opcje → Prywatność i
                    bezpieczeństwo → Pliki cookie
                  </li>
                  <li>
                    <strong className="text-[#003459]/85">Safari:</strong> Preferencje → Prywatność
                  </li>
                  <li>
                    <strong className="text-[#003459]/85">Edge:</strong> Ustawienia → Pliki cookie i
                    uprawnienia witryny
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#00171f] mb-2">
                  Rezygnacja z Google Analytics
                </h3>
                <p>
                  Zainstaluj{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1d4ed8] hover:underline"
                  >
                    dodatek opt-out do przeglądarki Google Analytics
                  </a>
                  , który blokuje przesyłanie danych do Google Analytics na
                  wszystkich stronach.
                </p>
              </div>
              <div className="bg-[#f8faff] border border-[#1d4ed8]/10 rounded-xl p-4">
                <p className="text-[14px]">
                  <strong className="text-[#00171f]">Ważne:</strong> Wyłączenie cookies
                  analitycznych nie wpłynie na działanie strony — służą nam
                  wyłącznie do wewnętrznej analizy, nie do żadnych funkcji
                  widocznych dla użytkownika.
                </p>
              </div>
            </div>
          </section>

          <section id="zmiany">
            <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-lg text-[#00171f] mb-4">
              4. Zmiany polityki cookies
            </h2>
            <p>
              Możemy aktualizować tę politykę wraz ze zmianami w stosowanych
              narzędziach lub przepisach prawa. Aktualna wersja zawsze dostępna
              jest na tej stronie z datą ostatniej aktualizacji.
            </p>
            <p className="mt-3">
              Pytania?{" "}
              <a
                href="mailto:stanislaw@stanautomation.pl"
                className="text-[#1d4ed8] hover:underline"
              >
                stanislaw@stanautomation.pl
              </a>
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-[#1d4ed8]/10">
          <a
            href="/polityka-prywatnosci"
            className="text-[#1d4ed8] text-sm font-[family-name:var(--font-inter)] hover:underline"
          >
            Zobacz też: Polityka prywatności →
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
