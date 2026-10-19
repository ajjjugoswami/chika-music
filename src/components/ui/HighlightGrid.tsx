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
    <Reveal stagger className={cn("grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4", className)}>
      {items.map((item, index) => (
        <RevealItem
          key={item.title}
          className={cn(
            "flex gap-4 rounded-card p-4.5 transition-[background-color,box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 sm:flex-col sm:gap-0 sm:p-6 md:p-7",
            light
              ? "bg-white/5 ring-1 ring-white/10 ring-inset hover:bg-white/8"
              : "border border-line bg-card shadow-card hover:shadow-float",
          )}
        >
          {numbered && (
            <span
              className={cn(
                "tabular grid size-7 shrink-0 place-items-center rounded-full text-[12.5px] font-semibold sm:size-8 sm:text-[13px]",
                light ? "bg-white/10 text-white" : "bg-accent-soft text-accent-text",
              )}
            >
              {index + 1}
            </span>
          )}
          <div className={cn(numbered && "sm:mt-5")}>
            <h3 className={cn("text-[1.0625rem] tracking-[-0.02em] sm:text-[1.1875rem]", light && "text-white")}>
              {item.title}
            </h3>
            <p
              className={cn(
                "mt-1 text-[14px] leading-relaxed sm:mt-2 sm:text-[15px]",
                light ? "text-white/60" : "text-muted",
              )}
            >
              {item.description}
            </p>
          </div>
        </RevealItem>
      ))}
    </Reveal>
  );
}
