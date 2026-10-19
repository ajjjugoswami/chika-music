import { CourseTile } from "@/components/cards/CourseTile";
import { CourseComparison } from "@/components/sections/courses/CourseComparison";
import { TrialCta } from "@/components/sections/shared/TrialCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllCourses } from "@/lib/data/courses";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Courses — Guitar, Piano, Harmonium & Vocal",
  description:
    "Guitar, piano, harmonium and vocal classes in Model Town, Rohtak for children and adults, from beginner to advanced.",
  path: "/courses",
});

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title={
          <>
            Pick your instrument. <em>We&apos;ll do the rest.</em>
          </>
        }
        description="Four courses, each taught from first lesson to advanced level, with personal attention at every step."
      />
      <section className="container-x pb-section">
        <div className="grid gap-3 sm:grid-cols-2">
          {courses.map((course, index) => (
            <CourseTile
              key={course.slug}
              course={course}
              index={index}
              size="lg"
              sizes="(min-width: 640px) 50vw, 100vw"
              delay={(index % 2) * 0.08}
              className="aspect-4/3 sm:aspect-16/11"
            />
          ))}
        </div>
      </section>
      <CourseComparison courses={courses} />
      <TrialCta />
    </>
  );
}
