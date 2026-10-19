import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface EyebrowProps {
  children: ReactNode;
  tone?: "default" | "light";
  className?: string;
}

export function Eyebrow({ children, tone = "default", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "eyebrow inline-flex items-center gap-2",
        tone === "light" ? "text-accent-bright" : "text-accent-text",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {children}
    </p>
  );
}
