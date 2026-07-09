import type { Metadata, Viewport } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LiquidBackground from "@/components/LiquidBackground";
import RevealProvider from "@/components/RevealProvider";
import Ripple from "@/components/Ripple";
import { BRAND } from "@/lib/site";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-sora",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description:
    "Sculpted electric hypercars with zero-compromise performance. 0–60 in 2.1 seconds. 520 miles of range. Designed for the road ahead.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#080809",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh w-full antialiased overflow-x-hidden">
        <LiquidBackground />
        <Nav />
        <RevealProvider>
          <main className="relative z-10 isolate">
            {/* Vignette scrim — keeps text readable over bright shader hotspots */}
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(8,8,9,0.25)_0%,rgba(8,8,9,0.65)_100%)]"
            />
            <div className="relative z-[1]">{children}</div>
          </main>
        </RevealProvider>
        <Footer />
        <Ripple />
      </body>
    </html>
  );
}
