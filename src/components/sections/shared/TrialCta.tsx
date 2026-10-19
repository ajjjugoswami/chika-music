import { FaWhatsapp } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { AppImage } from "@/components/ui/AppImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/content/site";
import { getImage } from "@/lib/data/images";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";

interface TrialCtaProps {
  courseSlug?: string;
  courseName?: string;
  imageId?: string;
}

export function TrialCta({ courseSlug, courseName, imageId = "guitar-hero" }: TrialCtaProps) {
  const bookHref = courseSlug ? `/book-trial?course=${courseSlug}` : "/book-trial";

  return (
    <section className="container-x pb-section">
      <Reveal className="grid overflow-hidden rounded-panel bg-stage lg:grid-cols-[1.15fr_1fr]">
        <div className="p-7 sm:p-10 lg:p-14">
          <p className="eyebrow text-accent-bright">Admissions open</p>
          <h2 className="mt-4 text-display-lg text-white">
            {courseName ? `Start ${courseName.toLowerCase()} this week.` : "Your first lesson starts here."}
          </h2>
          <p className="mt-4 max-w-md text-lead text-white/60">
            Book a trial class at {siteConfig.address.locality}, {siteConfig.address.city}. Meet your teacher, try the
            instrument and get a learning plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
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
        <div className="relative min-h-64 lg:min-h-full">
          <AppImage image={getImage(imageId)} sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      </Reveal>
    </section>
  );
}
