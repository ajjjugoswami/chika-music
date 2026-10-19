import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CourseMotif } from "@/components/ui/motif/CourseMotif";
import { formatModes } from "@/lib/data/courses";
import { cn } from "@/lib/utils/cn";
import type { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  index?: number;
  className?: string;
}

export function CourseCard({ course, index, className }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`} className={cn("group block", className)}>
      <CourseMotif variant={course.motif} tone={course.tone} className="aspect-[4/3.4]">
        <div className="flex h-full flex-col justify-between p-6 md:p-7">
          <div className="flex items-start justify-between">
            {index !== undefined && (
              <span className="tabular text-[13px] font-medium text-white/60">0{index + 1}</span>
            )}
            <span className="ml-auto grid size-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur transition-colors duration-300 group-hover:bg-white group-hover:text-stage">
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          </div>
          <h3 className="text-[clamp(2.5rem,4vw,3.5rem)] leading-none">{course.name}</h3>
        </div>
      </CourseMotif>
      <div className="mt-5 px-1">
        <p className="text-[16px] leading-snug text-ink">{course.tagline}</p>
        <p className="mt-2 text-[13.5px] text-muted">
          Ages {course.minAge}+ · {formatModes(course.modes)}
        </p>
      </div>
    </Link>
  );
}
