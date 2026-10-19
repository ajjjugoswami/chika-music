import { ContactChannels } from "@/components/sections/contact/ContactChannels";
import { LocationMap } from "@/components/sections/contact/LocationMap";
import { Reveal } from "@/components/motion/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact & Directions",
  description: `Call or WhatsApp ${siteConfig.contact.phoneDisplay}, or visit ${siteConfig.name} in Model Town, Rohtak.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Come say hello. <em>Bring your curiosity.</em>
          </>
        }
        description={`We're in ${siteConfig.address.locality}, ${siteConfig.address.city}. Call, WhatsApp or drop by during class hours.`}
      />
      <section className="container-x grid gap-6 pb-section lg:grid-cols-[1.1fr_1fr]">
        <ContactChannels />
        <Reveal delay={0.1} className="h-full">
          <LocationMap />
        </Reveal>
      </section>
    </>
  );
}
