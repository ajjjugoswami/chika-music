import { Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { Faq } from "@/types/site";

export function FaqList({ faqs, className }: { faqs: Faq[]; className?: string }) {
  return (
    <div className={cn("border-t border-line", className)}>
      {faqs.map((faq) => (
        <details key={faq.question} className="group border-b border-line">
          <summary className="flex list-none items-start justify-between gap-6 py-6 text-[17px] font-medium transition-colors hover:text-accent-text md:text-[18px] [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ring-1 ring-line-strong transition-transform duration-300 ease-out-expo group-open:rotate-45">
              <Plus className="size-3.5" aria-hidden />
            </span>
          </summary>
          <p className="max-w-2xl pr-12 pb-7 text-[15.5px] leading-relaxed text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
