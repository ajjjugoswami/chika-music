import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { RevealImage } from "@/components/motion/RevealImage";
import { AppImage } from "@/components/ui/AppImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/content/site";
import { getImage } from "@/lib/data/images";
import { FounderAvatar } from "@/components/ui/FounderAvatar";

export function AboutStory() {
  const { founder, address, name } = siteConfig;

  return (
    <section className="container-x grid gap-12 pb-section lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
      <RevealImage className="aspect-4/5 max-h-144 rounded-panel bg-surface">
        <Parallax>
          <AppImage image={getImage("academy-perform")} sizes="(min-width: 1024px) 45vw, 100vw" />
        </Parallax>
        <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-card/90 p-3 shadow-float backdrop-blur-md">
          <FounderAvatar className="size-12" />
          <div>
            <p className="text-[15px] font-semibold">{founder}</p>
            <p className="text-[13px] text-muted">Founder & teacher</p>
          </div>
        </div>
      </RevealImage>

      <Reveal delay={0.1} className="space-y-5 text-[16.5px] leading-relaxed text-ink-soft">
        <Eyebrow>Our story</Eyebrow>
        <h2 className="text-display-md text-ink">A neighbourhood academy with serious musical roots.</h2>
        <p>
          {name} was founded by {founder} in {address.locality}, {address.city}, with a simple belief: anyone can learn
          music when it&apos;s taught with patience, structure and genuine care.
        </p>
        <p>
          We teach guitar, piano, harmonium and vocal — from a child&apos;s very first sargam to adults rediscovering a
          lifelong love of music. Classes are personal, so every student gets attention and a plan that suits them.
        </p>
        <p>
          Whether you want to sing bhajans with confidence, play your favourite film songs or prepare for the stage, we
          build the foundations first — and then help you make the music you love.
        </p>
      </Reveal>
    </section>
  );
}
