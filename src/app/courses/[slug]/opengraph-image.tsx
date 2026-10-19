import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";
import { getAllCourses, getCourse } from "@/lib/data/courses";
import { OG_SIZE, OgCard } from "@/lib/seo/OgCard";

export const alt = `Course at ${siteConfig.name}, Rohtak`;
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export default async function CourseOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);

  return new ImageResponse(
    <OgCard
      eyebrow={`Ages ${course?.minAge ?? 5}+ · Beginner to advanced`}
      title={`${course?.name ?? "Music"} classes in Rohtak`}
      subtitle={course?.tagline ?? siteConfig.tagline}
    />,
    size,
  );
}
