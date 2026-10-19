import { CourseCard } from "@/components/cards/CourseCard";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getAllCourses } from "@/lib/data/courses";

export function CourseShowcase() {
  return (
    <section className="container-x py-section">
      <SectionIntro
        label="Courses"
        title={
          <>
            Four instruments. <em>One place to grow.</em>
          </>
        }
        description="Every course runs from complete beginner to advanced, with lessons shaped around your goals."
        action={
          <ButtonLink href="/courses" variant="outline" size="md">
            Compare courses
          </ButtonLink>
        }
      />
      <Reveal stagger className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
        {getAllCourses().map((course) => (
          <RevealItem key={course.slug}>
            <CourseCard
              course={course}
              compact
              imageClassName="aspect-square sm:aspect-4/5"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
