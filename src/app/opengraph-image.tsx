import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";
import { OG_SIZE, OgCard } from "@/lib/seo/OgCard";

export const alt = `${siteConfig.name} — music classes in Model Town, Rohtak`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <OgCard
      eyebrow="Admissions open"
      title={`${siteConfig.tagline}.`}
      subtitle="Guitar · Piano · Harmonium · Vocal classes"
    />,
    size,
  );
}
