import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AppImage } from "@/components/ui/AppImage";
import { formatModes } from "@/lib/data/courses";
import { getImage } from "@/lib/data/images";
import { cn } from "@/lib/utils/cn";
import type { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}

export function CourseCard({
  course,
  className,
  imageClassName = "aspect-4/3",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-line bg-card shadow-card transition-shadow duration-300 hover:shadow-float",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden bg-surface", imageClassName)}>
        <AppImage
          image={getImage(course.heroImageId)}
          sizes={sizes}
          className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-black/45 px-2.5 py-1 text-[12px] font-medium text-white backdrop-blur-md">
          Ages {course.minAge}+
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[1.25rem] tracking-[-0.025em]">{course.name}</h3>
          <span className="grid size-8 place-items-center rounded-full bg-surface transition-colors duration-300 group-hover:bg-cta group-hover:text-cta-fg">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </div>
        <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{course.tagline}</p>
        <p className="mt-auto pt-4 text-[12.5px] font-medium text-faint">{formatModes(course.modes)}</p>
      </div>
    </Link>
  );
}
