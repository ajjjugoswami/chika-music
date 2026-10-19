import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface AnnouncementPillProps {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export function AnnouncementPill({ href, label, children, className }: AnnouncementPillProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full border border-line py-1 pr-3 pl-1 text-[13px] text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink",
        className,
      )}
    >
      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-text">{label}</span>
      {children}
      <ChevronRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}
