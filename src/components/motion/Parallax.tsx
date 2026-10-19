"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { PARALLAX } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils/cn";

export function Parallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${PARALLAX.range}%`, `${PARALLAX.range}%`]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y, scale: PARALLAX.scale }}
      >
        {children}
      </motion.div>
    </div>
  );
}
