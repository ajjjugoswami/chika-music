import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CUBIC } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils/cn";
import type { Faq } from "@/types/site";

interface FaqItemProps {
  id: string;
  faq: Faq;
  index: number;
  open: boolean;
  onToggle: () => void;
}

export function FaqItem({ id, faq, index, open, onToggle }: FaqItemProps) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div
      className={cn(
        "rounded-card border transition-colors duration-300",
        open ? "border-transparent bg-surface" : "border-line bg-card hover:border-line-strong",
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-4.5 text-left md:px-6"
        >
          <span
            className={cn(
              "tabular text-[13px] font-semibold transition-colors",
              open ? "text-accent-text" : "text-faint",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 text-[15.5px] font-semibold tracking-[-0.015em] md:text-[16.5px]">
            {faq.question}
          </span>
          <span
            className={cn(
              "grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300 ease-out-expo",
              open ? "rotate-45 bg-cta text-cta-fg" : "bg-surface text-ink",
            )}
          >
            <Plus className="size-4" aria-hidden />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: CUBIC.outExpo }}
          >
            <p className="max-w-2xl px-5 pb-5 pl-14 text-[15px] leading-relaxed text-muted md:px-6 md:pl-15.5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
