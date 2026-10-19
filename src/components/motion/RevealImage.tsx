"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { CUBIC, IMAGE_REVEAL, VIEWPORT } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils/cn";

interface RevealImageProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onLoad?: boolean;
}

const clip = (inset: number) => `inset(${inset}% ${inset}% ${inset}% ${inset}% round ${IMAGE_REVEAL.radius})`;

export function RevealImage({ children, className, delay = 0, onLoad = false }: RevealImageProps) {
  const reduceMotion = useReducedMotion();
  const transition = { duration: IMAGE_REVEAL.duration, ease: CUBIC.outExpo, delay };
  const frame = { clipPath: clip(0) };
  const settle = { scale: 1 };
  const frameTrigger = onLoad ? { animate: frame } : { whileInView: frame, viewport: VIEWPORT };
  const settleTrigger = onLoad ? { animate: settle } : { whileInView: settle, viewport: VIEWPORT };

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={reduceMotion ? false : { clipPath: clip(IMAGE_REVEAL.insetPercent) }}
      transition={transition}
      {...frameTrigger}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: IMAGE_REVEAL.scale }}
        transition={transition}
        {...settleTrigger}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
