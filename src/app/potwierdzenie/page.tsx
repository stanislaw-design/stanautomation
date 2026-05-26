import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Email z potwierdzeniem",
    description: "Sprawdź skrzynkę — wyślemy szczegóły spotkania.",
  },
  {
    number: "2",
    title: "Przypomnienie dzień wcześniej",
    description: "Mail 24 godziny przed rozmową z datą i godziną.",
  },
  {
    number: "3",
    title: "Przypomnienie godzinę przed",
    description: "Żebyś nie zapomniał — kolejny mail tuż przed spotkaniem.",
  },
  {
    number: "4",
    title: "Rozmowa o Twojej restauracji",
    description:
      "Pokażemy gotową stronę i odpowiemy na wszystkie pytania. Zero zobowiązań.",
  },
  {
    number: "5",
    title: "Podsumowanie po rozmowie",
    description: "Mail z ofertą i następnymi krokami prosto na Twoją skrzynkę.",
  },
];

export default function PotwierdzenieePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#1d4ed8]/10 flex items-center justify-center mb-6 mx-auto">
          <svg
            className="w-8 h-8 text-[#1d4ed8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="font-[family-name:var(--font-jakarta)] font-bold text-[32px] leading-tight text-[#00171f] text-center mb-2">
          Spotkanie zarezerwowane!
        </h1>
        <p className="text-[#003459]/60 text-center text-[15px] font-[family-name:var(--font-inter)] mb-10">
          Odezwiemy się wkrótce. Oto co się teraz stanie:
        </p>

        {/* Steps */}
        <div className="space-y-3 mb-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 bg-[#f5fbff] border border-[#c8e9f7] rounded-xl px-5 py-4"
            >
              <div className="w-7 h-7 rounded-lg bg-[#1d4ed8]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-[#1d4ed8] font-[family-name:var(--font-inter)]">
                  {step.number}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#00171f] font-[family-name:var(--font-inter)] mb-0.5">
                  {step.title}
                </p>
                <p className="text-sm text-[#003459]/60 font-[family-name:var(--font-inter)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="block w-full text-center bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold text-sm py-4 rounded-xl transition-colors duration-150 font-[family-name:var(--font-inter)]"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}
