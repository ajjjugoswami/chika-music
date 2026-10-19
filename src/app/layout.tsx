import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SocialFloat } from "@/components/layout/SocialFloat";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/content/site";
import { musicSchoolSchema, websiteSchema } from "@/lib/seo/jsonLd";
import { getSiteUrl } from "@/lib/utils/siteUrl";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    "music classes near me Rohtak",
    "best music academy in Rohtak",
    "music classes for kids Rohtak",
    "keyboard classes Rohtak",
    "Bollywood singing classes Rohtak",
    "Chika Gochwal",
  ],
  other: {
    "geo.region": "IN-HR",
    "geo.placename": `${siteConfig.address.locality}, ${siteConfig.address.city}`,
  },
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
  themeColor: "#0a0a0a",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={inter.variable} suppressHydrationWarning>
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
            <SocialFloat />
            <MobileActionBar />
          </MotionProvider>
        </ThemeProvider>
        <JsonLd data={[musicSchoolSchema(getSiteUrl()), websiteSchema(getSiteUrl())]} />
        <Analytics />
      </body>
    </html>
  );
}
