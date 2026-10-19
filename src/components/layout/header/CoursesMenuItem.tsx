import Link from "next/link";
import { CourseMotif } from "@/components/ui/motif/CourseMotif";
import type { Course } from "@/types/course";

export function CoursesMenuItem({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-surface"
    >
      <CourseMotif variant={course.motif} tone={course.tone} className="h-16 w-20 shrink-0 rounded-lg" />
      <span className="min-w-0">
        <span className="block font-display text-[1.375rem] leading-tight">{course.name}</span>
        <span className="mt-0.5 block truncate text-[13px] text-muted">{course.styles.slice(0, 3).join(" · ")}</span>
      </span>
    </Link>
  );
}
