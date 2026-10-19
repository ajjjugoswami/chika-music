"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { ArrowNudge } from "@/components/ui/ButtonLink";
import { useDismiss } from "@/hooks/useDismiss";
import { getAllCourses } from "@/lib/data/courses";
import { cn } from "@/lib/utils/cn";
import { CoursesMenuItem } from "./CoursesMenuItem";
import styles from "./Header.module.css";

export function CoursesMenu({ active }: { active: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const rootRef = useRef<HTMLDivElement>(null);
  const courses = getAllCourses();

  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  const close = useCallback(() => setOpen(false), []);
  useDismiss(rootRef, open, close);

  const show = () => {
    setOpenedAt(pathname);
    setOpen(true);
  };

  return (
    <div ref={rootRef} className="flex items-center self-stretch" onMouseEnter={show} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="courses-menu"
        aria-current={active ? "page" : undefined}
        onClick={() => (open ? setOpen(false) : show())}
        className={styles.navLink}
      >
        Courses
        <ChevronDown aria-hidden className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")} />
      </button>

      <div id="courses-menu" className={styles.panel} data-open={open || undefined}>
        <div className="container-x grid grid-cols-[1fr_15rem] gap-8 py-8">
          <ul className="grid grid-cols-4 gap-4">
            {courses.map((course) => (
              <li key={course.slug}>
                <CoursesMenuItem course={course} />
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-between rounded-card bg-surface p-5">
            <div>
              <p className="text-[15px] font-semibold tracking-[-0.01em]">Not sure where to start?</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                Book a trial class and we&apos;ll help you pick the right instrument.
              </p>
            </div>
            <div className="space-y-2 text-[13.5px] font-medium">
              <Link href="/book-trial" className="group flex items-center gap-1.5 text-accent-text">
                Book a trial class
                <ArrowNudge />
              </Link>
              <Link href="/courses" className="group flex items-center gap-1.5 text-ink">
                Compare all courses
                <ArrowNudge />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
