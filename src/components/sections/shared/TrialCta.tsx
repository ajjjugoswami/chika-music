import { FaWhatsapp } from "react-icons/fa6";
import { Parallax } from "@/components/motion/Parallax";
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
    <section className="container-x py-section">
      <Reveal className="grid overflow-hidden rounded-panel bg-stage lg:grid-cols-[1.15fr_1fr]">
        <div className="relative h-40 sm:h-56 lg:order-2 lg:h-auto">
          <Parallax>
            <AppImage image={getImage(imageId)} sizes="(min-width: 1024px) 45vw, 100vw" />
          </Parallax>
        </div>
        <div className="p-5 sm:p-10 lg:order-1 lg:p-14">
          <p className="eyebrow text-accent-bright">Admissions open</p>
          <h2 className="mt-3 text-[1.625rem] leading-tight tracking-[-0.03em] text-white sm:mt-4 sm:text-display-lg">
            {courseName ? `Start ${courseName.toLowerCase()} this week.` : "Your first lesson starts here."}
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/60 sm:mt-4 sm:text-lead">
            Book a trial class at {siteConfig.address.locality}, {siteConfig.address.city}. Meet your teacher, try the
            instrument and get a learning plan.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-2.5">
            <ButtonLink href={bookHref} variant="light" size="md" className="sm:h-12 sm:px-5.5 sm:text-[15px]">
              Book a trial
            </ButtonLink>
            <ButtonLink
              href={buildWhatsAppLink(courseName)}
              external
              variant="ghost-light"
              size="md"
              className="sm:h-12 sm:px-5.5 sm:text-[15px]"
              icon={<FaWhatsapp className="size-4" />}
            >
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
