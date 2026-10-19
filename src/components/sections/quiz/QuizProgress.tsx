import { cn } from "@/lib/utils/cn";

export function QuizProgress({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-1 gap-1.5" aria-hidden>
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={cn("h-1 flex-1 rounded-full transition-colors duration-500", index < current ? "bg-accent" : "bg-line")}
          />
        ))}
      </div>
      <span className="tabular text-[12.5px] font-medium text-muted">
        {current}/{total}
      </span>
    </div>
  );
}
