import Link from "next/link";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { CourseMotif } from "@/components/ui/motif/CourseMotif";
import { getAllCourses } from "@/lib/data/courses";
import { cn } from "@/lib/utils/cn";
import type { Course } from "@/types/course";

function MosaicTile({ course, tall }: { course: Course; tall: boolean }) {
  return (
    <Link href={`/courses/${course.slug}`} aria-label={`${course.name} classes`} className="block">
      <CourseMotif
        variant={course.motif}
        tone={course.tone}
        className={cn(tall ? "aspect-4/5" : "aspect-[4/3.3]")}
      >
        <div className="flex h-full items-start justify-between p-4 sm:p-5">
          <span className="font-display text-[clamp(1.625rem,3vw,2.375rem)] leading-none">{course.name}</span>
          <span className="text-[12px] text-white/60">Ages {course.minAge}+</span>
        </div>
      </CourseMotif>
    </Link>
  );
}

export function HeroCourseMosaic() {
  const courses = getAllCourses();
  const columns = [
    [courses[0], courses[2]],
    [courses[1], courses[3]],
  ];

  return (
    <Reveal onLoad stagger delay={0.15} className="grid grid-cols-2 gap-3 sm:gap-4">
      {columns.map((column, columnIndex) => (
        <RevealItem key={columnIndex} className={cn("flex flex-col gap-3 sm:gap-4", columnIndex === 1 && "mt-10")}>
          {column.map((course, rowIndex) => (
            <MosaicTile key={course.slug} course={course} tall={(columnIndex + rowIndex) % 2 === 0} />
          ))}
        </RevealItem>
      ))}
    </Reveal>
  );
}
