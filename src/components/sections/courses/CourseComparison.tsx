import Link from "next/link";
import type { ReactNode } from "react";
import { LevelRange } from "@/components/ui/LevelRange";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { Course } from "@/types/course";

const ROWS: { label: string; render: (course: Course) => ReactNode }[] = [
  { label: "Start from age", render: (course) => `${course.minAge}+` },
  { label: "Styles", render: (course) => course.styles.slice(0, 3).join(", ") },
  { label: "Format", render: (course) => course.formats.slice(0, 2).join(", ") },
  { label: "Levels", render: () => <LevelRange /> },
];

export function CourseComparison({ courses }: { courses: Course[] }) {
  return (
    <section className="container-x py-section">
      <SectionIntro label="At a glance" title="Compare courses side by side." />
      <Reveal className="mt-12 overflow-x-auto rounded-2xl border border-line bg-card">
        <table className="w-full min-w-176 text-left text-[15px]">
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="w-44 p-5 text-[12px] font-medium tracking-[0.12em] text-muted uppercase">
                <span className="sr-only">Detail</span>
              </th>
              {courses.map((course) => (
                <th key={course.slug} scope="col" className="p-5">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-[1.0625rem] font-semibold tracking-[-0.02em] hover:text-accent-text"
                  >
                    {course.name}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-b-0">
                <th scope="row" className="p-5 text-[12px] font-medium tracking-[0.12em] text-muted uppercase">
                  {row.label}
                </th>
                {courses.map((course) => (
                  <td key={course.slug} className="p-5 align-top text-ink-soft">
                    {row.render(course)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
