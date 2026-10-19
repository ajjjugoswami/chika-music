import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHero } from "@/components/sections/course/CourseHero";
import { CourseLevels } from "@/components/sections/course/CourseLevels";
import { CourseOverview } from "@/components/sections/course/CourseOverview";
import { OtherCourses } from "@/components/sections/course/OtherCourses";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { TrialCta } from "@/components/sections/shared/TrialCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/content/site";
import { getAllCourses, getCourse, getOtherCourses } from "@/lib/data/courses";
import { breadcrumbSchema, courseSchema } from "@/lib/seo/jsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSiteUrl } from "@/lib/utils/siteUrl";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};

  return buildPageMetadata({
    title: `${course.name} Classes in Rohtak`,
    description: `${course.tagline} ${course.name} classes for ages ${course.minAge}+ at ${siteConfig.name}, ${siteConfig.address.locality}, ${siteConfig.address.city}. Book a trial class.`,
    path: `/courses/${course.slug}`,
  });
}

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const siteUrl = getSiteUrl();

  return (
    <>
      <CourseHero course={course} />
      <CourseOverview course={course} />
      <CourseLevels course={course} />
      <FaqSection faqs={course.faqs} title={`${course.name} questions.`} />
      <OtherCourses courses={getOtherCourses(course.slug)} />
      <TrialCta courseSlug={course.slug} courseName={course.name} />
      <JsonLd
        data={[
          courseSchema(course, siteUrl),
          breadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "Courses", path: "/courses" },
              { name: course.name, path: `/courses/${course.slug}` },
            ],
            siteUrl,
          ),
        ]}
      />
    </>
  );
}
