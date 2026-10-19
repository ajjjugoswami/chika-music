import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils/cn";
import type { Highlight } from "@/types/site";
import { TimelineTrack } from "./TimelineTrack";

export function StepTimeline({ steps, className }: { steps: Highlight[]; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <TimelineTrack />
      <Reveal stagger className="relative grid gap-8 pl-12 lg:grid-cols-4 lg:gap-8 lg:pl-0">
        {steps.map((step, index) => (
          <RevealItem key={step.title} className="relative">
            <span className="absolute top-0 -left-12 grid size-9 place-items-center rounded-full border border-line bg-paper text-[13px] font-semibold shadow-card lg:static lg:size-11 lg:text-[14px]">
              <span
                className={cn(
                  "tabular grid size-full place-items-center rounded-full",
                  index === steps.length - 1 ? "bg-accent text-white" : "text-accent-text",
                )}
              >
                {index + 1}
              </span>
            </span>
            <h3 className="text-[1.125rem] tracking-[-0.025em] lg:mt-6 lg:text-[1.25rem]">{step.title}</h3>
            <p className="mt-1.5 max-w-xs text-[14.5px] leading-relaxed text-muted">{step.description}</p>
          </RevealItem>
        ))}
      </Reveal>
    </div>
  );
}
