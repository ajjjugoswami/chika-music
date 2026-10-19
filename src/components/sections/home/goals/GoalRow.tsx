import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CUBIC } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils/cn";
import type { ImageHighlight } from "@/types/site";

interface GoalRowProps {
  goal: ImageHighlight;
  number: string;
  active: boolean;
  onActivate: () => void;
}

export function GoalRow({ goal, number, active, onActivate }: GoalRowProps) {
  return (
    <button
      type="button"
      aria-expanded={active}
      onClick={onActivate}
      onPointerEnter={(event) => event.pointerType === "mouse" && onActivate()}
      className="group relative w-full border-b border-line py-5 text-left sm:py-6"
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-0 left-0 h-px w-full origin-left bg-accent transition-transform duration-700 ease-out-expo",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
      <span className="flex items-center gap-4 sm:gap-6">
        <span
          className={cn(
            "tabular text-[13px] font-semibold transition-colors",
            active ? "text-accent-text" : "text-faint",
          )}
        >
          {number}
        </span>
        <span
          className={cn(
            "flex-1 text-[1.25rem] font-semibold tracking-[-0.03em] transition-colors sm:text-[1.625rem]",
            active ? "text-ink" : "text-faint group-hover:text-ink-soft",
          )}
        >
          {goal.title}
        </span>
        <ArrowRight
          aria-hidden
          className={cn(
            "size-5 shrink-0 transition-all duration-500 ease-out-expo",
            active ? "translate-x-0 text-accent-text opacity-100" : "-translate-x-2 text-faint opacity-0",
          )}
        />
      </span>
      <AnimatePresence initial={false}>
        {active && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: CUBIC.outExpo }}
            className="block max-w-lg pt-2 pl-9 text-[14.5px] leading-relaxed text-muted sm:pl-12 sm:text-[15.5px]"
          >
            {goal.description}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
