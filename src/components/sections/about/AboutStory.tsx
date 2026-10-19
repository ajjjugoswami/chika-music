import { Reveal } from "@/components/motion/Reveal";
import { CourseMotif } from "@/components/ui/motif/CourseMotif";
import { siteConfig } from "@/content/site";
import { getInitials } from "@/lib/utils/format";

export function AboutStory() {
  const { founder, address, name } = siteConfig;

  return (
    <section className="container-x grid gap-12 pb-section lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
      <Reveal>
        <CourseMotif variant="wave" tone="midnight" className="aspect-4/5 max-h-[36rem]">
          <div className="flex h-full flex-col justify-between p-7 md:p-9">
            <span className="grid size-16 place-items-center rounded-full bg-accent font-display text-[1.75rem]">
              {getInitials(founder)}
            </span>
            <div>
              <p className="font-display text-[2.25rem] leading-none">{founder}</p>
              <p className="mt-2 text-[14px] text-white/60">Founder & teacher</p>
            </div>
          </div>
        </CourseMotif>
      </Reveal>

      <Reveal delay={0.1} className="space-y-6 text-[17px] leading-relaxed text-ink-soft">
        <p className="eyebrow text-accent-text">Our story</p>
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
