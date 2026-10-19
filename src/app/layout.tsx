import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/content/site";
import { musicSchoolSchema } from "@/lib/seo/jsonLd";
import { getSiteUrl } from "@/lib/utils/siteUrl";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const DEFAULT_TITLE = `${siteConfig.name} — Music Classes in Model Town, Rohtak`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  keywords: [
    "music classes in Rohtak",
    "music academy Rohtak",
    "music academy Model Town Rohtak",
    "guitar classes Rohtak",
    "piano classes Rohtak",
    "harmonium classes Rohtak",
    "vocal classes Rohtak",
    "singing classes Rohtak",
    "Hindustani classical music Rohtak",
    "Chika Gochwal",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: DEFAULT_TITLE,
    description: siteConfig.description,
    locale: "en_IN",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e11" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${geist.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <ThemeProvider>
          <MotionProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to content
            </a>
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <WhatsAppFloat />
            <MobileActionBar />
          </MotionProvider>
        </ThemeProvider>
        <JsonLd data={musicSchoolSchema(getSiteUrl())} />
      </body>
    </html>
  );
}
