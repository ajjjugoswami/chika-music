import { FaWhatsapp } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import { HeroCourseMosaic } from "./HeroCourseMosaic";

export function Hero() {
  const { address } = siteConfig;

  return (
    <section className="container-x grid items-center gap-12 pt-10 pb-20 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
      <Reveal onLoad>
        <p className="inline-flex items-center gap-2.5 rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-medium text-accent-text">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Admissions open · {address.locality}, {address.city}
        </p>

        <h1 className="mt-7 text-display-2xl">
          When words fail, <em>music speaks.</em>
        </h1>

        <p className="mt-7 max-w-xl text-lead text-muted">
          Guitar, piano, harmonium and vocal classes for children and adults — personal coaching by{" "}
          {siteConfig.founder} at {siteConfig.name}, {address.city}.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/book-trial">Book a trial class</ButtonLink>
          <ButtonLink
            href={buildWhatsAppLink()}
            external
            variant="outline"
            icon={<FaWhatsapp className="size-4 text-[#25d366]" />}
          >
            Ask on WhatsApp
          </ButtonLink>
        </div>
      </Reveal>

      <HeroCourseMosaic />
    </section>
  );
}
