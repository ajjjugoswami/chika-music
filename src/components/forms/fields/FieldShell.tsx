import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface FieldShellProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  className?: string;
  as?: "div" | "fieldset";
  children: ReactNode;
}

export function FieldShell({ id, label, error, hint, className, as = "div", children }: FieldShellProps) {
  const Wrapper = as;
  const LabelTag = as === "fieldset" ? "legend" : "label";

  return (
    <Wrapper className={cn("flex flex-col gap-2", className)}>
      <LabelTag {...(as === "div" ? { htmlFor: id } : {})} className="text-[14px] font-medium text-ink">
        {label}
      </LabelTag>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-[13px] text-accent-text">
          {error}
        </p>
      ) : (
        hint && <p className="text-[13px] text-muted">{hint}</p>
      )}
    </Wrapper>
  );
}
