"use client";

import { motion } from "motion/react";
import { CUBIC, VIEWPORT } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils/cn";

export function DrawLine({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative h-px bg-line", className)}>
      <motion.div
        className="absolute inset-0 origin-left bg-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.6, ease: CUBIC.outExpo, delay: 0.2 }}
      />
    </div>
  );
}
