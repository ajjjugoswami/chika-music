import { FaWhatsapp } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HighlightGrid } from "@/components/ui/HighlightGrid";
import { feeFactors } from "@/content/academy";
import { siteConfig } from "@/content/site";
import { buildWhatsAppMessageLink } from "@/lib/utils/whatsapp";

export function FeeFactors() {
  const feeLink = buildWhatsAppMessageLink(`Hi ${siteConfig.name}! Could you share your current fee structure?`);

  return (
    <section className="container-x pb-section">
      <HighlightGrid items={feeFactors} numbered className="lg:grid-cols-3" />
      <Reveal className="mt-10 flex flex-col gap-6 rounded-2xl bg-surface p-7 md:flex-row md:items-center md:justify-between md:p-9">
        <div>
          <h2 className="text-display-md">Get the current fee structure.</h2>
          <p className="mt-2 text-[16px] text-muted">We&apos;ll reply on WhatsApp with fees for your course and level.</p>
        </div>
        <ButtonLink href={feeLink} external icon={<FaWhatsapp className="size-4" />}>
          Request fees
        </ButtonLink>
      </Reveal>
    </section>
  );
}
