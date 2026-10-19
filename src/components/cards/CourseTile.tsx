import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RevealImage } from "@/components/motion/RevealImage";
import { AppImage } from "@/components/ui/AppImage";
import { getImage } from "@/lib/data/images";
import { cn } from "@/lib/utils/cn";
import type { Course } from "@/types/course";

interface CourseTileProps {
  course: Course;
  index?: number;
  size?: "lg" | "md" | "sm";
  sizes?: string;
  className?: string;
  delay?: number;
}

const TITLE_SIZE = {
  lg: "text-[1.75rem] sm:text-[2.5rem]",
  md: "text-[1.5rem] sm:text-[1.875rem]",
  sm: "text-[1.125rem] sm:text-[1.5rem]",
};

export function CourseTile({
  course,
  index,
  size = "md",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  delay = 0,
}: CourseTileProps) {
  return (
    <RevealImage delay={delay} className={cn("group rounded-card bg-stage", className)}>
      <Link href={`/courses/${course.slug}`} className="absolute inset-0 block" aria-label={`${course.name} classes`}>
        <AppImage
          image={getImage(course.heroImageId)}
          sizes={sizes}
          className="transition-transform duration-1000 ease-out-expo group-hover:scale-105"
        />
        <span aria-hidden className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/10" />

        <span className="absolute inset-x-3 top-3 flex items-start justify-between sm:inset-x-4 sm:top-4">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11.5px] font-medium text-white ring-1 ring-white/20 backdrop-blur-md sm:text-[12px]">
            Ages {course.minAge}+
          </span>
          <span className="grid size-8 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur-md transition-[background-color,color,transform] duration-500 ease-out-expo group-hover:rotate-45 group-hover:bg-white group-hover:text-[#171717] sm:size-10">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </span>

        <span className="absolute inset-x-4 bottom-4 text-white sm:inset-x-6 sm:bottom-6">
          {index !== undefined && (
            <span className="tabular block text-[12px] font-medium text-white/60">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className={cn("block font-semibold tracking-[-0.035em]", TITLE_SIZE[size])}>{course.name}</span>
          <span
            className={cn(
              "mt-1 max-w-md text-[13.5px] leading-snug text-white/75 sm:text-[15px]",
              size === "sm" ? "hidden sm:line-clamp-2" : "line-clamp-2 block",
            )}
          >
            {course.tagline}
          </span>
          {size === "lg" && (
            <span className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
              {course.styles.slice(0, 4).map((style) => (
                <span
                  key={style}
                  className="rounded-full bg-white/10 px-3 py-1 text-[12.5px] text-white/90 ring-1 ring-white/15 backdrop-blur-sm"
                >
                  {style}
                </span>
              ))}
            </span>
          )}
        </span>
      </Link>
    </RevealImage>
  );
}
