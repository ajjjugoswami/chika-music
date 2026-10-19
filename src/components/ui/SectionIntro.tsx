import type { ReactNode } from "react";
import { Reveal, RevealItem, RevealLine } from "@/components/motion/Reveal";
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
      stagger
      className={cn(
        "flex flex-col gap-6",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn(centered ? "flex max-w-3xl flex-col items-center" : "max-w-2xl")}>
        <RevealItem>
          <Eyebrow tone={tone}>{label}</Eyebrow>
        </RevealItem>
        <h2 className={cn("mt-4 text-display-lg", light && "text-white")}>
          <RevealLine>{title}</RevealLine>
        </h2>
        {description && (
          <RevealItem>
            <p className={cn("mt-4 max-w-xl text-lead", light ? "text-white/60" : "text-muted")}>{description}</p>
          </RevealItem>
        )}
      </div>
      {action && <RevealItem className="shrink-0">{action}</RevealItem>}
    </Reveal>
  );
}
