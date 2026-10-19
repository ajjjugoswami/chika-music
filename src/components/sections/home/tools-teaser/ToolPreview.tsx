import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ToolPreviewProps {
  icon: LucideIcon;
  title: string;
  meta: string;
  children: ReactNode;
  className?: string;
}

export function ToolPreview({ icon: Icon, title, meta, children, className }: ToolPreviewProps) {
  return (
    <Link
      href="/tools"
      className={cn(
        "group flex flex-col gap-4 rounded-card border border-line bg-card p-4 shadow-card transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-float sm:p-5",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-accent-soft">
          <Icon className="size-4 text-accent-text" aria-hidden />
        </span>
        <div className="leading-tight">
          <p className="text-[14.5px] font-semibold tracking-[-0.015em]">{title}</p>
          <p className="text-[12.5px] text-muted">{meta}</p>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </Link>
  );
}
