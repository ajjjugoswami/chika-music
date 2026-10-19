import { Reveal } from "@/components/motion/Reveal";
import { PageBreadcrumbJsonLd } from "@/components/ui/PageBreadcrumbJsonLd";
import { ContactActions } from "@/components/sections/contact/ContactActions";
import { ContactPanel } from "@/components/sections/contact/ContactPanel";
import { LocationMap } from "@/components/sections/contact/LocationMap";
import { EmbeddedForm } from "@/components/ui/EmbeddedForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact & Directions",
  description: `Call or WhatsApp ${siteConfig.contact.phoneDisplay}, send us a message, or visit ${siteConfig.name} in Model Town, Rohtak.`,
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
        description={`We're in ${siteConfig.address.locality}, ${siteConfig.address.city}. Send a message, call, WhatsApp or drop by during class hours.`}
      >
        <ContactActions />
      </PageHeader>

      <section className="container-x grid gap-4 pb-section lg:grid-cols-[1fr_1.25fr]">
        <ContactPanel />
        <Reveal delay={0.1}>
          <EmbeddedForm src={siteConfig.contactFormSrc} title="Get in Touch" eager />
        </Reveal>
      </section>

      <section className="container-x py-section">
        <LocationMap />
      </section>
      <PageBreadcrumbJsonLd name="Contact" path="/contact" />
    </>
  );
}
