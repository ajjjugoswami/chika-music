import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils/cn";
import { Metronome } from "./Metronome";
import { SargamKeyboard } from "./SargamKeyboard";
import { Tanpura } from "./Tanpura";

export function PracticeToolsGrid({ className }: { className?: string }) {
  return (
    <Reveal stagger className={cn("grid gap-3 sm:gap-4 lg:grid-cols-2", className)}>
      <RevealItem>
        <Tanpura className="h-full" />
      </RevealItem>
      <RevealItem>
        <Metronome className="h-full" />
      </RevealItem>
      <RevealItem className="lg:col-span-2">
        <SargamKeyboard />
      </RevealItem>
    </Reveal>
  );
}
