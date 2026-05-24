import Image from "next/image";

const footerLinks = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Cennik", href: "#cennik" },
  { label: "Demo", href: "#demo" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#1d4ed8]/8">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a
              href="/"
              className="mb-3 block"
            >
              <Image
                src="/images/stan_automation_logo_transparent.png"
                alt="StanAutomation Logo"
                width={1582}
                height={310}
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-[#003459]/50 text-sm font-[family-name:var(--font-inter)] leading-relaxed">
              Technologiczny partner dla restauracji w Trójmieście.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#003459]/35 text-[11px] uppercase tracking-[0.12em] font-[family-name:var(--font-inter)] font-medium mb-1">
              Nawigacja
            </p>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#003459]/55 text-sm hover:text-[#1d4ed8] transition-colors font-[family-name:var(--font-inter)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#003459]/35 text-[11px] uppercase tracking-[0.12em] font-[family-name:var(--font-inter)] font-medium mb-1">
              Kontakt
            </p>
            <a
              href="mailto:kontakt@stanautomation.pl"
              className="text-[#003459]/55 text-sm hover:text-[#1d4ed8] transition-colors font-[family-name:var(--font-inter)]"
            >
              kontakt@stanautomation.pl
            </a>
            <p className="text-[#003459]/45 text-sm font-[family-name:var(--font-inter)]">
              Gdańsk, Trójmiasto
            </p>
          </div>
        </div>

        <div className="border-t border-[#1d4ed8]/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-3">
          <p className="text-[#003459]/35 text-sm font-[family-name:var(--font-inter)]">
            © 2026 StanAutomation · Gdańsk
          </p>
          <div className="flex gap-5">
            <a
              href="/polityka-prywatnosci"
              className="text-[#003459]/35 text-sm font-[family-name:var(--font-inter)] hover:text-[#1d4ed8] transition-colors"
            >
              Polityka prywatności
            </a>
            <a
              href="/polityka-cookies"
              className="text-[#003459]/35 text-sm font-[family-name:var(--font-inter)] hover:text-[#1d4ed8] transition-colors"
            >
              Polityka cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
