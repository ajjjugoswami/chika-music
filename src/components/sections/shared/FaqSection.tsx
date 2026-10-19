import { Reveal } from "@/components/motion/Reveal";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";
import type { Faq } from "@/types/site";

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
}

export function FaqSection({ faqs, title = "Questions, answered." }: FaqSectionProps) {
  return (
    <section className="container-x grid gap-10 py-section lg:grid-cols-[1fr_1.6fr] lg:gap-20">
      <Reveal>
        <p className="eyebrow text-accent-text">FAQ</p>
        <h2 className="mt-4 text-display-lg">{title}</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <FaqList faqs={faqs} />
      </Reveal>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
