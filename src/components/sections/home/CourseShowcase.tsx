import { CourseTile } from "@/components/cards/CourseTile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getAllCourses } from "@/lib/data/courses";

const LAYOUT = [
  { size: "lg", className: "col-span-2 row-span-2", sizes: "(min-width: 1024px) 50vw, 100vw" },
  { size: "md", className: "col-span-2", sizes: "(min-width: 1024px) 50vw, 100vw" },
  { size: "sm", className: "", sizes: "(min-width: 1024px) 25vw, 50vw" },
  { size: "sm", className: "", sizes: "(min-width: 1024px) 25vw, 50vw" },
] as const;

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
      <div className="mt-10 grid auto-rows-40 grid-cols-2 gap-3 sm:mt-12 sm:auto-rows-60 lg:grid-cols-4 lg:auto-rows-72">
        {getAllCourses().map((course, index) => {
          const tile = LAYOUT[index % LAYOUT.length];
          return (
            <CourseTile
              key={course.slug}
              course={course}
              index={index}
              size={tile.size}
              sizes={tile.sizes}
              className={tile.className}
              delay={index * 0.08}
            />
          );
        })}
      </div>
    </section>
  );
}
