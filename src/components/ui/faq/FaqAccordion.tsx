"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { Faq } from "@/types/site";
import { FaqItem } from "./FaqItem";

export function FaqAccordion({ faqs, className }: { faqs: Faq[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.question}
          id={`${baseId}-${index}`}
          faq={faq}
          index={index}
          open={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
        />
      ))}
    </div>
  );
}
