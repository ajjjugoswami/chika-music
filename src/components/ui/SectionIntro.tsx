import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionIntroProps {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
}

export function SectionIntro({
  label,
  title,
  description,
  action,
  align = "left",
  tone = "default",
  className,
}: SectionIntroProps) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn(centered ? "flex max-w-3xl flex-col items-center" : "max-w-2xl")}>
        <Eyebrow tone={tone}>{label}</Eyebrow>
        <h2 className={cn("mt-4 text-display-lg", light && "text-white")}>{title}</h2>
        {description && (
          <p className={cn("mt-4 max-w-xl text-lead", light ? "text-white/60" : "text-muted")}>{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
