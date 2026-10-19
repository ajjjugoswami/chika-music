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
    <Reveal stagger className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item, index) => (
        <RevealItem
          key={item.title}
          className={cn(
            "flex flex-col rounded-card p-6 transition-[background-color,box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 md:p-7",
            light
              ? "bg-white/5 ring-1 ring-white/10 ring-inset hover:bg-white/8"
              : "border border-line bg-card shadow-card hover:shadow-float",
          )}
        >
          {numbered && (
            <span
              className={cn(
                "tabular grid size-8 place-items-center rounded-full text-[13px] font-semibold",
                light ? "bg-white/10 text-white" : "bg-accent-soft text-accent-text",
              )}
            >
              {index + 1}
            </span>
          )}
          <h3 className={cn("text-[1.1875rem] tracking-[-0.02em]", numbered && "mt-5", light && "text-white")}>
            {item.title}
          </h3>
          <p className={cn("mt-2 text-[15px] leading-relaxed", light ? "text-white/60" : "text-muted")}>
            {item.description}
          </p>
        </RevealItem>
      ))}
    </Reveal>
  );
}
