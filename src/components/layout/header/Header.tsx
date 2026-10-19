"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowNudge } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { mainNav } from "@/content/site";
import { CoursesMenu } from "./CoursesMenu";
import styles from "./Header.module.css";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 8));

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const toggle = () => {
    setOpenedAt(pathname);
    setOpen((value) => !value);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className={styles.header} data-scrolled={scrolled || undefined} data-menu-open={open || undefined}>
        <div className="container-x flex h-header items-center gap-4">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <nav aria-label="Main" className="hidden shrink-0 items-center gap-0.5 self-stretch lg:flex">
            <CoursesMenu active={isActive("/courses")} />
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={styles.navLink}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-1.5">
            <ThemeToggle className={styles.iconButton} />
            <Link href="/book-trial" className={`group ${styles.cta}`}>
              Book a trial
              <span className="hidden sm:inline-flex">
                <ArrowNudge />
              </span>
            </Link>
            <MenuToggle open={open} onToggle={toggle} />
          </div>
        </div>

        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </header>
      <div aria-hidden className="h-header" />
    </>
  );
}
