import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CourseFact {
  label: string;
  value: ReactNode;
}

export function CourseFacts({ facts, className }: { facts: CourseFact[]; className?: string }) {
  return (
    <dl
      className={cn(
        "grid divide-y divide-line rounded-card border border-line bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0",
        className,
      )}
    >
      {facts.map((fact) => (
        <div key={fact.label} className="flex items-center justify-between gap-4 px-4 py-3 sm:block sm:px-5 sm:py-3.5">
          <dt className="text-[12px] text-muted">{fact.label}</dt>
          <dd className="mt-0.5 text-[13.5px] font-semibold tracking-[-0.01em] sm:text-[14.5px]">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
