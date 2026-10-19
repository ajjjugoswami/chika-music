import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export const BASE_KEYWORDS = [
  "music academy Rohtak",
  "music classes in Rohtak",
  "music classes Model Town Rohtak",
  "Future Music Academy",
];

export function buildPageMetadata({ title, description, path, keywords = [] }: PageMetaInput): Metadata {
  const fullTitle = `${title} · ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...keywords, ...BASE_KEYWORDS],
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
