"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { CUBIC, REVEAL, VIEWPORT } from "@/lib/motion/tokens";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  onLoad?: boolean;
}

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: REVEAL.distance, filter: REVEAL.blur },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: REVEAL.duration, ease: CUBIC.outExpo, delay },
  },
});

const staggerParent = (delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: REVEAL.stagger, delayChildren: delay } },
});

const lineRise: Variants = {
  hidden: { y: "105%" },
  visible: { y: 0, transition: { duration: 1, ease: CUBIC.outExpo } },
};

export function Reveal({ children, className, delay = 0, stagger = false, onLoad = false }: RevealProps) {
  const trigger = onLoad ? { animate: "visible" } : { whileInView: "visible", viewport: VIEWPORT };

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={stagger ? staggerParent(delay) : fadeUp(delay)}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp()}>
      {children}
    </motion.div>
  );
}

export function RevealLine({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span className={className ? `block ${className}` : "block"} variants={lineRise}>
        {children}
      </motion.span>
    </span>
  );
}
