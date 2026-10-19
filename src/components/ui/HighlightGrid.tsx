import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils/cn";
import type { Highlight } from "@/types/site";

interface HighlightGridProps {
  items: Highlight[];
  numbered?: boolean;
  tone?: "default" | "light";
  className?: string;
}

export function HighlightGrid({ items, numbered = false, tone = "default", className }: HighlightGridProps) {
  const light = tone === "light";

  return (
    <Reveal stagger className={cn("grid gap-px sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item, index) => (
        <RevealItem
          key={item.title}
          className={cn("border-t pt-6 pr-6 pb-8", light ? "border-line-light" : "border-line-strong")}
        >
          {numbered && (
            <span className={cn("tabular text-[13px] font-medium", light ? "text-accent-bright" : "text-accent-text")}>
              0{index + 1}
            </span>
          )}
          <h3 className={cn("text-[1.875rem] leading-tight", numbered && "mt-3")}>{item.title}</h3>
          <p className={cn("mt-3 text-[15.5px] leading-relaxed", light ? "text-white/65" : "text-muted")}>
            {item.description}
          </p>
        </RevealItem>
      ))}
    </Reveal>
  );
}
