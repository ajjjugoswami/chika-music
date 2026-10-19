import { courses } from "@/content/courses";
import type { ClassMode, Course, Level } from "@/types/course";

export const LEVEL_LABELS: Record<Level, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const MODE_LABELS: Record<ClassMode, string> = {
  studio: "At the academy",
  online: "Online",
};

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getOtherCourses(slug: string): Course[] {
  return courses.filter((course) => course.slug !== slug);
}

export function formatModes(modes: ClassMode[]) {
  return modes.map((mode) => MODE_LABELS[mode]).join(" · ");
}
