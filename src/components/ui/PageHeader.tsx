import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Eyebrow } from "./Eyebrow";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({ eyebrow, title, description, children, className }: PageHeaderProps) {
  return (
    <header className={cn("container-x pt-14 pb-14 md:pt-20 md:pb-16", className)}>
      <div className="max-w-3xl">
        <Eyebrow className="rise rise-1">{eyebrow}</Eyebrow>
        <h1 className="rise rise-2 mt-5 text-display-xl">{title}</h1>
        {description && <p className="rise rise-3 mt-5 max-w-2xl text-lead text-muted">{description}</p>}
        {children && <div className="rise rise-4 mt-8">{children}</div>}
      </div>
    </header>
  );
}
