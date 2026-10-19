import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { AppImage } from "@/components/ui/AppImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FounderAvatar } from "@/components/ui/FounderAvatar";
import { NumberedList } from "@/components/ui/NumberedList";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { academyValues } from "@/content/academy";
import { siteConfig } from "@/content/site";
import { getImage } from "@/lib/data/images";

export function Approach() {
  return (
    <section className="container-x py-section">
      <div className="grid overflow-hidden rounded-panel bg-stage lg:grid-cols-[1fr_1.1fr]">
        <div className="relative min-h-72 overflow-hidden sm:min-h-96 lg:min-h-full">
          <Parallax>
            <AppImage image={getImage("harmonium-02")} sizes="(min-width: 1024px) 45vw, 100vw" />
          </Parallax>
          <span aria-hidden className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-black/35 p-3 ring-1 ring-white/15 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:max-w-xs">
            <FounderAvatar />
            <div>
              <p className="text-[15px] font-semibold text-white">{siteConfig.founder}</p>
              <p className="text-[13px] text-white/65">Founder & teacher</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-10 lg:p-14">
          <SectionIntro
            tone="light"
            label="Our approach"
            title={
              <>
                Classical discipline, <span className="text-white/45">applied to the music you love.</span>
              </>
            }
          />
          <NumberedList items={academyValues} tone="light" className="mt-8 sm:mt-10" />
          <Reveal className="mt-8">
            <ButtonLink href="/about" variant="light" size="md">
              About the academy
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
