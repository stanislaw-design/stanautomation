import type { Metadata } from "next";
import { Urbanist, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const jakarta = Urbanist({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stanautomation.pl"),
  title: {
    default: "StanAutomation — Strony internetowe dla restauracji w Trójmieście",
    template: "%s | StanAutomation",
  },
  description:
    "Strona dla Twojej restauracji gotowa w 48 godzin. Błyskawiczne ładowanie, AI SEO, gwarancja zwrotu. Gdańsk, Gdynia, Sopot.",
  keywords: [
    "strony internetowe dla restauracji",
    "marketing restauracyjny",
    "system rezerwacji restauracji",
    "AI SEO restauracja",
    "strona restauracji Trójmiasto",
    "tworzenie stron restauracja",
    "Gdańsk",
    "Gdynia",
    "Sopot",
  ],
  authors: [{ name: "StanAutomation" }],
  creator: "StanAutomation",
  publisher: "StanAutomation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StanAutomation — Strony internetowe dla restauracji w Trójmieście",
    description:
      "Strona dla Twojej restauracji gotowa w 48 godzin. Lighthouse 90+, AI SEO, gwarancja zwrotu. Gdańsk, Gdynia, Sopot.",
    url: "https://stanautomation.pl",
    siteName: "StanAutomation",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "StanAutomation — Nowoczesne strony internetowe dla restauracji w Trójmieście",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StanAutomation — Strony internetowe dla restauracji w Trójmieście",
    description:
      "Strona dla Twojej restauracji gotowa w 48 godzin. Lighthouse 90+, AI SEO, gwarancja zwrotu. Gdańsk, Gdynia, Sopot.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://stanautomation.pl/#service",
      "name": "StanAutomation",
      "url": "https://stanautomation.pl",
      "logo": "https://stanautomation.pl/images/stan_automation_logo_transparent.png",
      "image": "https://stanautomation.pl/images/og-image.png",
      "description":
        "Tworzenie nowoczesnych, szybkich stron internetowych dla restauracji z wbudowanym AI SEO i systemem rezerwacji w Trójmieście.",
      "telephone": "+48505753683",
      "email": "kontakt@stanautomation.pl",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gdańsk",
        "addressRegion": "Pomorskie",
        "addressCountry": "PL",
      },
      "priceRange": "PLN",
      "areaServed": [
        {
          "@type": "City",
          "name": "Gdańsk",
        },
        {
          "@type": "City",
          "name": "Gdynia",
        },
        {
          "@type": "City",
          "name": "Sopot",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${jakarta.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
