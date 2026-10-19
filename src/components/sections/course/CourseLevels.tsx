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
      <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-3">
        {course.levels.map((level, index) => (
          <RevealItem key={level.level} className="flex flex-col rounded-2xl border border-line bg-card p-7 md:p-8">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-accent-text">{LEVEL_LABELS[level.level]}</span>
              <span className="tabular text-[13px] text-muted">0{index + 1}</span>
            </div>
            <h3 className="mt-6 text-[1.875rem] leading-tight">{level.summary}</h3>
            <div aria-hidden className="staff-rule my-7 opacity-60" />
            <ul className="space-y-3 text-[15.5px] text-ink-soft">
              {level.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
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
