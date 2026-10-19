import { CourseCard } from "@/components/cards/CourseCard";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
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
        <Reveal stagger className="grid gap-x-5 gap-y-12 sm:grid-cols-2">
          {courses.map((course, index) => (
            <RevealItem key={course.slug}>
              <CourseCard course={course} index={index} />
            </RevealItem>
          ))}
        </Reveal>
      </section>
      <CourseComparison courses={courses} />
      <TrialCta />
    </>
  );
}
