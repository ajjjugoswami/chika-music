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
            Four instruments. <em>One</em> place to grow.
          </>
        }
        description="Every course runs from complete beginner to advanced, with lessons shaped around your goals."
        action={
          <ButtonLink href="/courses" variant="outline">
            Compare courses
          </ButtonLink>
        }
      />
      <Reveal stagger className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {getAllCourses().map((course, index) => (
          <RevealItem key={course.slug}>
            <CourseCard course={course} index={index} />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
