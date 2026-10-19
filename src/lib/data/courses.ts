import { courses } from "@/content/courses";
import { siteConfig } from "@/content/site";
import type { Course, Level } from "@/types/course";

export const LEVEL_LABELS: Record<Level, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const CLASS_LOCATION = `At the academy, ${siteConfig.address.locality}`;

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getOtherCourses(slug: string): Course[] {
  return courses.filter((course) => course.slug !== slug);
}
