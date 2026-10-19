import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import type { Course } from "@/types/course";
import { TagList } from "./TagList";

export function CourseOverview({ course }: { course: Course }) {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-x grid gap-12 py-section lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-accent-text">Who it&apos;s for</p>
          <h2 className="mt-4 text-display-md">Made for every kind of learner.</h2>
          <ul className="mt-8 space-y-4">
            {course.forWho.map((item) => (
              <li key={item} className="flex gap-3 text-[16.5px]">
                <Check className="mt-1 size-4.5 shrink-0 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="space-y-10">
          <div>
            <p className="eyebrow text-accent-text">Styles you can learn</p>
            <TagList items={course.styles} className="mt-5" />
          </div>
          <div>
            <p className="eyebrow text-accent-text">Class format</p>
            <TagList items={course.formats} className="mt-5" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
