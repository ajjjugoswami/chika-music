import { CourseTile } from "@/components/cards/CourseTile";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { Course } from "@/types/course";

export function OtherCourses({ courses }: { courses: Course[] }) {
  return (
    <section className="container-x py-section">
      <SectionIntro label="Explore more" title="Pair it with another course." />
      <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3">
        {courses.map((course, index) => (
          <CourseTile
            key={course.slug}
            course={course}
            size="md"
            sizes="(min-width: 640px) 33vw, 100vw"
            delay={index * 0.08}
            className="aspect-4/3 sm:aspect-3/4"
          />
        ))}
      </div>
    </section>
  );
}
