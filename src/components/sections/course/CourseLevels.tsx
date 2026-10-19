import { Check } from "lucide-react";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { LEVEL_LABELS } from "@/lib/data/courses";
import type { Course } from "@/types/course";

export function CourseLevels({ course }: { course: Course }) {
  return (
    <section className="container-x py-section">
      <SectionIntro
        label="Your journey"
        title={
          <>
            Three levels, <em>one clear path.</em>
          </>
        }
        description={`Move up when you're ready. Your teacher reviews progress regularly so you always know what's next on ${course.name.toLowerCase()}.`}
      />
      <Reveal stagger className="mt-12 grid gap-3 md:grid-cols-3">
        {course.levels.map((level, index) => (
          <RevealItem key={level.level} className="flex flex-col rounded-card border border-line bg-card p-6 shadow-card md:p-7">
            <div className="flex items-center gap-3">
              <span className="tabular grid size-8 place-items-center rounded-full bg-accent-soft text-[13px] font-semibold text-accent-text">
                {index + 1}
              </span>
              <span className="text-[13px] font-semibold text-muted">{LEVEL_LABELS[level.level]}</span>
            </div>
            <h3 className="mt-5 text-[1.3125rem] leading-snug tracking-[-0.025em]">{level.summary}</h3>
            <ul className="mt-5 space-y-2.5 border-t border-line pt-5 text-[14.5px] text-ink-soft">
              {level.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {outcome}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
