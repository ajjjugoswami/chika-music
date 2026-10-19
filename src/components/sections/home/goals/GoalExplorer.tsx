"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AppImage } from "@/components/ui/AppImage";
import { CUBIC } from "@/lib/motion/tokens";
import type { ImageAsset } from "@/types/image";
import type { ImageHighlight } from "@/types/site";
import { GoalRow } from "./GoalRow";

interface GoalExplorerProps {
  goals: ImageHighlight[];
  images: ImageAsset[];
}

export function GoalExplorer({ goals, images }: GoalExplorerProps) {
  const [active, setActive] = useState(0);
  const pad = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
      <div className="relative aspect-4/3 overflow-hidden rounded-panel bg-stage lg:aspect-auto lg:min-h-112">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: CUBIC.outExpo }}
          >
            <AppImage image={images[active]} sizes="(min-width: 1024px) 50vw, 100vw" />
          </motion.div>
        </AnimatePresence>
        <span aria-hidden className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-7">
          <p className="max-w-xs text-[1.25rem] leading-snug font-semibold tracking-[-0.025em] sm:text-[1.5rem]">
            {goals[active].title}
          </p>
          <p className="tabular text-[13px] font-medium text-white/70">
            {pad(active + 1)} / {pad(goals.length)}
          </p>
        </div>
      </div>

      <ul className="flex flex-col justify-center border-t border-line">
        {goals.map((goal, index) => (
          <li key={goal.title}>
            <GoalRow
              goal={goal}
              number={pad(index + 1)}
              active={index === active}
              onActivate={() => setActive(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
