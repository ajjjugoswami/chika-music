import { FaWhatsapp } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { KeysMotif } from "@/components/ui/motif/KeysMotif";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import styles from "./TrialCta.module.css";

interface TrialCtaProps {
  courseSlug?: string;
  courseName?: string;
}

export function TrialCta({ courseSlug, courseName }: TrialCtaProps) {
  const bookHref = courseSlug ? `/book-trial?course=${courseSlug}` : "/book-trial";

  return (
    <section className="container-x pb-section">
      <Reveal className={styles.card}>
        <div className={styles.keys}>
          <KeysMotif />
        </div>
        <div className="relative max-w-2xl">
          <p className="eyebrow text-accent-bright">Admissions open</p>
          <h2 className="mt-4 text-display-lg text-white">
            {courseName ? (
              <>
                Start {courseName.toLowerCase()} <em className="text-accent-bright">this week.</em>
              </>
            ) : (
              <>
                Your first lesson <em className="text-accent-bright">starts here.</em>
              </>
            )}
          </h2>
          <p className="mt-5 max-w-lg text-lead text-white/65">
            Book a trial class at {siteConfig.address.locality}, {siteConfig.address.city}. Meet your teacher, try the
            instrument and get a learning plan.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={bookHref} variant="light">
              Book a trial class
            </ButtonLink>
            <ButtonLink
              href={buildWhatsAppLink(courseName)}
              external
              variant="ghost-light"
              icon={<FaWhatsapp className="size-4" />}
            >
              WhatsApp us
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
