import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { AppImage } from "@/components/ui/AppImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HighlightGrid } from "@/components/ui/HighlightGrid";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { academyValues } from "@/content/academy";
import { siteConfig } from "@/content/site";
import { getImage } from "@/lib/data/images";
import { FounderAvatar } from "@/components/ui/FounderAvatar";

export function Approach() {
  return (
    <section className="container-x">
      <div className="overflow-hidden rounded-panel bg-stage p-5 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionIntro
            tone="light"
            label="Our approach"
            title={
              <>
                Classical discipline, <span className="text-white/45">applied to the music you love.</span>
              </>
            }
          />
          <RevealImage className="aspect-video rounded-card">
            <Parallax>
              <AppImage image={getImage("harmonium-02")} sizes="(min-width: 1024px) 40vw, 100vw" />
            </Parallax>
          </RevealImage>
        </div>

        <HighlightGrid items={academyValues} tone="light" className="mt-10 lg:grid-cols-3" />

        <Reveal className="mt-10 flex flex-col gap-6 border-t border-line-light pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <FounderAvatar className="size-13" />
            <div>
              <p className="text-[15px] font-semibold text-white">{siteConfig.founder}</p>
              <p className="text-[13.5px] text-white/55">Founder & teacher, {siteConfig.name}</p>
            </div>
          </div>
          <ButtonLink href="/about" variant="ghost-light" size="md">
            About the academy
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
