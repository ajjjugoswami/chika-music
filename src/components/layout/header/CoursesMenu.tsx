"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getAllCourses } from "@/lib/data/courses";
import { CUBIC } from "@/lib/motion/tokens";
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

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const show = () => {
    setOpenedAt(pathname);
    setOpen(true);
  };

  return (
    <div
      ref={rootRef}
      className="relative flex items-center self-stretch"
      onMouseEnter={show}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="courses-menu"
        aria-current={active ? "page" : undefined}
        onClick={() => (open ? setOpen(false) : show())}
        className={styles.navLink}
      >
        Courses
        <ChevronDown
          aria-hidden
          className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="courses-menu"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3, ease: CUBIC.outExpo }}
            className="absolute top-full left-1/2 w-[38rem] -translate-x-1/2 pt-2"
          >
            <div className="rounded-2xl border border-line bg-card p-3 shadow-2xl shadow-black/10">
              <ul className="grid grid-cols-2 gap-2">
                {courses.map((course) => (
                  <li key={course.slug}>
                    <CoursesMenuItem course={course} />
                  </li>
                ))}
              </ul>
              <Link
                href="/courses"
                className="mt-2 flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                Compare all courses
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
