import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CourseFact {
  label: string;
  value: ReactNode;
}

export function CourseFacts({ facts, className }: { facts: CourseFact[]; className?: string }) {
  return (
    <dl className={cn("grid grid-cols-3 divide-x divide-line rounded-card border border-line bg-surface", className)}>
      {facts.map((fact) => (
        <div key={fact.label} className="px-4 py-3.5 sm:px-5">
          <dt className="text-[12px] text-muted">{fact.label}</dt>
          <dd className="mt-0.5 text-[13.5px] font-semibold tracking-[-0.01em] sm:text-[14.5px]">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
