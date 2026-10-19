import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordion } from "@/components/ui/faq/FaqAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/content/site";
import { faqSchema } from "@/lib/seo/jsonLd";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import type { Faq } from "@/types/site";

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
}

export function FaqSection({ faqs, title = "Questions, answered." }: FaqSectionProps) {
  return (
    <section className="container-x grid gap-10 py-section lg:grid-cols-[1fr_1.7fr] lg:gap-16">
      <Reveal className="lg:sticky lg:top-24 lg:self-start">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-4 text-display-lg">{title}</h2>
        <p className="mt-4 max-w-sm text-lead text-muted">Everything parents and students usually ask before joining.</p>

        <div className="mt-8 rounded-card border border-line bg-card p-5 shadow-card">
          <p className="text-[15px] font-semibold tracking-[-0.01em]">Still have a question?</p>
          <p className="mt-1 text-[14px] text-muted">We usually reply within a few hours.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <ButtonLink
              href={buildWhatsAppLink()}
              external
              size="md"
              icon={<FaWhatsapp className="size-4 text-[#25d366]" />}
            >
              WhatsApp
            </ButtonLink>
            <ButtonLink
              href={`tel:${siteConfig.contact.phoneE164}`}
              variant="outline"
              size="md"
              icon={<Phone className="size-4" aria-hidden />}
            >
              Call
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <FaqAccordion faqs={faqs} />
      </Reveal>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
