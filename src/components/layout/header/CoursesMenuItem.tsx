import Link from "next/link";
import { AppImage } from "@/components/ui/AppImage";
import { getImage } from "@/lib/data/images";
import type { Course } from "@/types/course";

export function CoursesMenuItem({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="group block">
      <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-surface">
        <AppImage
          image={getImage(course.heroImageId)}
          sizes="240px"
          className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-[15px] font-semibold tracking-[-0.01em] group-hover:text-accent-text">{course.name}</p>
      <p className="mt-0.5 truncate text-[13px] text-muted">{course.styles.slice(0, 3).join(" · ")}</p>
    </Link>
  );
}
