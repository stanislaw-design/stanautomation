import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Polityka prywatności — StanAutomation",
  description: "Polityka prywatności serwisu stanautomation.pl",
};

const sections = [
  {
    id: "administrator",
    title: "1. Administrator danych osobowych",
    content: (
      <div className="space-y-3">
        <p>Administratorem Twoich danych osobowych jest:</p>
        <div className="bg-[#f8faff] border border-[#1d4ed8]/10 rounded-xl p-5 space-y-1">
          <p className="font-semibold text-[#00171f]">StanAutomation</p>
          <p>Stanisław Korycki</p>
          <p>Gdańsk, Polska</p>
          <p>
            Email:{" "}
            <a
              href="mailto:stanislaw@stanautomation.pl"
              className="text-[#1d4ed8] hover:underline"
            >
              stanislaw@stanautomation.pl
            </a>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "dane",
    title: "2. Jakie dane zbieramy",
    content: (
      <div className="space-y-3">
        <p>
          Korzystając z naszej strony, automatycznie zbieramy następujące dane
          techniczne:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Adres IP (w formie zanonimizowanej)</li>
          <li>Typ i wersja przeglądarki internetowej</li>
          <li>System operacyjny urządzenia</li>
          <li>Odwiedzone podstrony i czas spędzony na każdej z nich</li>
          <li>Źródło wejścia (np. wyszukiwarka, link bezpośredni)</li>
          <li>Rozdzielczość ekranu i typ urządzenia</li>
        </ul>
        <p>
          <strong className="text-[#00171f]">
            Nie zbieramy imion, adresów e-mail, numerów telefonów ani innych
            danych identyfikacyjnych
          </strong>
          , chyba że sam nam je przekażesz (np. w wiadomości e-mail).
        </p>
      </div>
    ),
  },
  {
    id: "cel",
    title: "3. Cel i podstawa prawna przetwarzania",
    content: (
      <div className="space-y-3">
        <p>
          Dane zbieramy wyłącznie w celu <strong className="text-[#00171f]">analizy ruchu na stronie</strong> —
          żeby wiedzieć, które treści są pomocne, a które wymagają poprawy.
        </p>
        <p>
          <strong className="text-[#00171f]">Podstawa prawna:</strong> art. 6 ust. 1 lit. f) RODO — prawnie
          uzasadniony interes administratora polegający na analizie i doskonaleniu
          serwisu internetowego.
        </p>
      </div>
    ),
  },
  {
    id: "narzedzia",
    title: "4. Narzędzia analityczne",
    content: (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-[#00171f] text-base">Google Analytics 4</h3>
          <p>
            Dostawca: Google Ireland Limited, Gordon House, Barrow Street,
            Dublin 4, Irlandia.
          </p>
          <p>
            Dane mogą być przekazywane do USA na podstawie standardowych klauzul
            umownych (SCC). Korzystamy z anonimizacji adresów IP.
          </p>
          <p>
            Możesz zrezygnować ze śledzenia instalując{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d4ed8] hover:underline"
            >
              dodatek opt-out do przeglądarki
            </a>
            .{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d4ed8] hover:underline"
            >
              Polityka prywatności Google
            </a>
            .
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-[#00171f] text-base">PostHog</h3>
          <p>
            Dostawca: PostHog, Inc., 965 Mission St, San Francisco, CA 94103,
            USA. Dane przetwarzane są w infrastrukturze chmurowej UE (Frankfurt).
          </p>
          <p>
            Dane mogą być przekazywane do USA na podstawie standardowych klauzul
            umownych (SCC).{" "}
            <a
              href="https://posthog.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d4ed8] hover:underline"
            >
              Polityka prywatności PostHog
            </a>
            .
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "czas",
    title: "5. Czas przechowywania danych",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Google Analytics: dane użytkownika przechowywane przez 14 miesięcy</li>
        <li>PostHog: dane sesji przechowywane przez 12 miesięcy</li>
      </ul>
    ),
  },
  {
    id: "prawa",
    title: "6. Twoje prawa",
    content: (
      <div className="space-y-3">
        <p>Na podstawie RODO przysługuje Ci prawo do:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#00171f]">dostępu</strong> do swoich danych osobowych
          </li>
          <li>
            <strong className="text-[#00171f]">sprostowania</strong> nieprawidłowych lub niekompletnych danych
          </li>
          <li>
            <strong className="text-[#00171f]">usunięcia</strong> danych (prawo do bycia zapomnianym)
          </li>
          <li>
            <strong className="text-[#00171f]">ograniczenia</strong> przetwarzania danych
          </li>
          <li>
            <strong className="text-[#00171f]">sprzeciwu</strong> wobec przetwarzania opartego na prawnie
            uzasadnionym interesie
          </li>
          <li>
            <strong className="text-[#00171f]">przenoszenia</strong> danych
          </li>
        </ul>
        <p>
          Aby skorzystać z powyższych praw, skontaktuj się z nami:{" "}
          <a
            href="mailto:stanislaw@stanautomation.pl"
            className="text-[#1d4ed8] hover:underline"
          >
            stanislaw@stanautomation.pl
          </a>
        </p>
        <p>
          Masz też prawo złożyć skargę do organu nadzorczego — Prezesa Urzędu
          Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa,{" "}
          <a
            href="https://uodo.gov.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1d4ed8] hover:underline"
          >
            uodo.gov.pl
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "zmiany",
    title: "7. Zmiany polityki prywatności",
    content: (
      <p>
        Zastrzegamy sobie prawo do aktualizacji niniejszej polityki w związku ze
        zmianami prawnymi lub technicznymi. Aktualna wersja zawsze dostępna jest
        na tej stronie z datą ostatniej aktualizacji.
      </p>
    ),
  },
];

export default function PolitykaPrywatnosci() {
  return (
    <main className="min-h-screen bg-white text-[#00171f] overflow-x-hidden">
      <Navbar />
      <div className="max-w-[780px] mx-auto px-6 pt-28 pb-24">
        <div className="mb-12">
          <p className="text-[#1d4ed8] text-xs font-[family-name:var(--font-inter)] font-semibold uppercase tracking-[0.12em] mb-3">
            Dokumenty prawne
          </p>
          <h1 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl text-[#00171f] mb-3">
            Polityka prywatności
          </h1>
          <p className="text-[#003459]/45 text-sm font-[family-name:var(--font-inter)]">
            Ostatnia aktualizacja: 24 maja 2026
          </p>
        </div>

        <div className="space-y-10 font-[family-name:var(--font-inter)] text-[#003459]/75 text-[15px] leading-relaxed">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="font-[family-name:var(--font-jakarta)] font-bold text-lg text-[#00171f] mb-4">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[#1d4ed8]/10">
          <a
            href="/polityka-cookies"
            className="text-[#1d4ed8] text-sm font-[family-name:var(--font-inter)] hover:underline"
          >
            Zobacz też: Polityka cookies →
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
