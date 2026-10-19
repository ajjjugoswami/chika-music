"use client";

import { motion } from "motion/react";
import { CUBIC, VIEWPORT } from "@/lib/motion/tokens";

export function TimelineTrack() {
  const transition = { duration: 1.8, ease: CUBIC.outExpo, delay: 0.2 };

  return (
    <div aria-hidden>
      <div className="absolute top-4 bottom-4 left-4.5 w-px bg-line lg:top-5.5 lg:right-[calc(25%-2.875rem)] lg:bottom-auto lg:left-5.5 lg:h-px lg:w-auto">
        <motion.div
          className="absolute inset-0 hidden origin-left bg-accent lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={transition}
        />
        <motion.div
          className="absolute inset-0 origin-top bg-accent lg:hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT}
          transition={transition}
        />
      </div>
    </div>
  );
}
