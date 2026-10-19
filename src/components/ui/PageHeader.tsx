import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils/cn";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, children, className }: PageHeaderProps) {
  return (
    <header className={cn("container-x pt-16 pb-14 md:pt-24 md:pb-20", className)}>
      <Reveal onLoad className="max-w-4xl">
        <p className="eyebrow text-accent-text">{eyebrow}</p>
        <h1 className="mt-5 text-display-xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lead text-muted">{description}</p>}
        {children && <div className="mt-9">{children}</div>}
      </Reveal>
      <div aria-hidden className="staff-rule mt-14 md:mt-20" />
    </header>
  );
}
