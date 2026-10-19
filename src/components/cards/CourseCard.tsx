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
  compact?: boolean;
}

export function CourseCard({
  course,
  className,
  imageClassName = "aspect-4/3",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  compact = false,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-line bg-card shadow-card transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-float",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden bg-surface", imageClassName)}>
        <AppImage
          image={getImage(course.heroImageId)}
          sizes={sizes}
          className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute top-2.5 left-2.5 rounded-full bg-black/45 font-medium text-white backdrop-blur-md",
            compact ? "px-2 py-0.5 text-[11px] sm:top-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-[12px]" : "px-2.5 py-1 text-[12px]",
          )}
        >
          Ages {course.minAge}+
        </span>
      </div>
      <div className={cn("flex flex-1 flex-col", compact ? "p-3.5 sm:p-5" : "p-5")}>
        <div className="flex items-center justify-between gap-2">
          <h3 className={cn("tracking-tight", compact ? "text-[1rem] sm:text-[1.25rem]" : "text-[1.25rem]")}>
            {course.name}
          </h3>
          <span
            className={cn(
              "grid shrink-0 place-items-center rounded-full bg-surface transition-colors duration-300 group-hover:bg-cta group-hover:text-cta-fg",
              compact ? "size-7 sm:size-8" : "size-8",
            )}
          >
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </div>
        <p className={cn("mt-2 text-[14.5px] leading-relaxed text-muted", compact && "hidden sm:block")}>
          {course.tagline}
        </p>
        <p
          className={cn(
            "mt-auto font-medium text-faint",
            compact ? "pt-1.5 text-[11.5px] sm:pt-4 sm:text-[12.5px]" : "pt-4 text-[12.5px]",
          )}
        >
          {formatModes(course.modes)}
        </p>
      </div>
    </Link>
  );
}
