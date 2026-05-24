import type { Metadata } from "next";
import { Urbanist, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const jakarta = Urbanist({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "StanAutomation — Strony internetowe dla restauracji w Trójmieście",
  description:
    "Strona dla Twojej restauracji gotowa w 48 godzin. Błyskawiczne ładowanie, AI SEO, gwarancja zwrotu. Gdańsk, Gdynia, Sopot.",
  openGraph: {
    title: "StanAutomation — Strony dla restauracji w Trójmieście",
    description:
      "Strona ładuje się błyskawicznie. AI SEO wbudowane. Gwarancja zwrotu. 48h realizacja.",
    type: "website",
    locale: "pl_PL",
  },
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
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
