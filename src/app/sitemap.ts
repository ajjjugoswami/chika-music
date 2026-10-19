import type { MetadataRoute } from "next";
import { getAllCourses } from "@/lib/data/courses";
import { getSiteUrl } from "@/lib/utils/siteUrl";

const STATIC_ROUTES = ["", "/courses", "/about", "/fees", "/contact", "/book-trial", "/credits"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...getAllCourses().map((course) => ({
      url: `${siteUrl}/courses/${course.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
