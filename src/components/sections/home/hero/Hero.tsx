import { FaWhatsapp } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroTrustPoints } from "@/content/academy";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import { AnnouncementPill } from "./AnnouncementPill";
import { HeroStage } from "./HeroStage";
import { TrustPoints } from "./TrustPoints";
import { WordRise } from "./WordRise";

export function Hero() {
  const { address } = siteConfig;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container-x grid items-center gap-12 pt-10 pb-16 sm:pt-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 lg:py-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <AnnouncementPill href="/book-trial" label="New batch" className="rise rise-1">
            Admissions open · {address.locality}, {address.city}
          </AnnouncementPill>

          <h1 className="mt-7 text-display-2xl font-semibold">
            <WordRise text="When words fail," />{" "}
            <WordRise text="music speaks." offset={3} className="text-accent" />
          </h1>

          <p className="rise rise-3 mt-6 max-w-lg text-lead text-muted">
            Guitar, piano, harmonium and vocal classes for children and adults — personal coaching by{" "}
            <span className="font-medium text-ink">{siteConfig.founder}</span> in {address.city}.
          </p>

          <div className="rise rise-4 mt-9 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            <ButtonLink href="/book-trial">Book a trial class</ButtonLink>
            <ButtonLink
              href={buildWhatsAppLink()}
              external
              variant="outline"
              icon={<FaWhatsapp className="size-4 text-[#25d366]" />}
            >
              WhatsApp us
            </ButtonLink>
          </div>

          <TrustPoints points={heroTrustPoints} className="rise rise-5 mt-9 justify-center lg:justify-start" />
        </div>

        <HeroStage />
      </div>
    </section>
  );
}
