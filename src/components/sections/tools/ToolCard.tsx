import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export function ToolCard({ icon: Icon, title, description, children, className }: ToolCardProps) {
  return (
    <div className={cn("flex flex-col rounded-panel border border-line bg-card p-5 shadow-card sm:p-7", className)}>
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft">
          <Icon className="size-4.5 text-accent-text" aria-hidden />
        </span>
        <div>
          <h2 className="text-[1.1875rem] tracking-[-0.02em]">{title}</h2>
          <p className="mt-0.5 text-[14px] text-muted">{description}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-1 flex-col">{children}</div>
    </div>
  );
}
