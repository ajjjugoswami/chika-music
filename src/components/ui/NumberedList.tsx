import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils/cn";
import type { Highlight } from "@/types/site";

interface NumberedListProps {
  items: Highlight[];
  tone?: "default" | "light";
  columns?: 1 | 3;
  className?: string;
}

export function NumberedList({ items, tone = "default", columns = 1, className }: NumberedListProps) {
  const light = tone === "light";

  return (
    <Reveal
      stagger
      className={cn(
        "grid",
        columns === 3 ? "gap-x-8 sm:grid-cols-3" : "",
        light ? "border-line-light" : "border-line",
        className,
      )}
    >
      {items.map((item, index) => (
        <RevealItem
          key={item.title}
          className={cn(
            "group relative flex gap-5 border-t py-5 sm:py-6",
            columns === 3 && "sm:flex-col sm:gap-3",
            light ? "border-line-light" : "border-line",
          )}
        >
          <span
            aria-hidden
            className="absolute top-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
          />
          <span
            className={cn(
              "tabular pt-0.5 text-[13px] font-semibold",
              light ? "text-accent-bright" : "text-accent-text",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className={cn("text-[1.125rem] tracking-[-0.025em] sm:text-[1.25rem]", light && "text-white")}>
              {item.title}
            </h3>
            <p className={cn("mt-1.5 text-[14.5px] leading-relaxed", light ? "text-white/60" : "text-muted")}>
              {item.description}
            </p>
          </div>
        </RevealItem>
      ))}
    </Reveal>
  );
}
