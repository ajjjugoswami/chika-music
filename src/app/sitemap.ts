import type { MetadataRoute } from "next";
import { getAllCourses } from "@/lib/data/courses";
import { getSiteUrl } from "@/lib/utils/siteUrl";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/courses", priority: 0.9 },
  { path: "/book-trial", priority: 0.9 },
  { path: "/tools", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/fees", priority: 0.6 },
  { path: "/credits", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...getAllCourses().map((course) => ({
      url: `${siteUrl}/courses/${course.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
