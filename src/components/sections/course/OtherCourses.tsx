import { CourseCard } from "@/components/cards/CourseCard";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { Course } from "@/types/course";

export function OtherCourses({ courses }: { courses: Course[] }) {
  return (
    <section className="container-x pb-section">
      <SectionIntro label="Explore more" title="Pair it with another course." />
      <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <RevealItem key={course.slug}>
            <CourseCard course={course} />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
