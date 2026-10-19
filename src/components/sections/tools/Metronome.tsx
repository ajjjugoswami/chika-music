"use client";

import { Minus, Plus, Timer } from "lucide-react";
import { useMetronome } from "@/hooks/useMetronome";
import { cn } from "@/lib/utils/cn";
import { PlayButton } from "./PlayButton";
import { SegmentedControl } from "./SegmentedControl";
import { ToolCard } from "./ToolCard";

const MIN_BPM = 40;
const MAX_BPM = 220;
const BEAT_OPTIONS = [2, 3, 4, 6, 8].map((beats) => ({ value: beats, label: String(beats) }));

export function Metronome({ className }: { className?: string }) {
  const { bpm, setBpm, beatsPerBar, setBeatsPerBar, playing, toggle, beat } = useMetronome();
  const nudge = (delta: number) => setBpm((value) => Math.min(MAX_BPM, Math.max(MIN_BPM, value + delta)));

  return (
    <ToolCard icon={Timer} title="Metronome" description="Keep steady time while you practise." className={className}>
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Slower"
          className="grid size-11 place-items-center rounded-full bg-surface hover:bg-line"
        >
          <Minus className="size-4" aria-hidden />
        </button>
        <p className="text-center">
          <span className="tabular block text-[3.5rem] leading-none font-semibold tracking-[-0.04em]">{bpm}</span>
          <span className="text-[13px] text-muted">beats per minute</span>
        </p>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Faster"
          className="grid size-11 place-items-center rounded-full bg-surface hover:bg-line"
        >
          <Plus className="size-4" aria-hidden />
        </button>
      </div>

      <input
        type="range"
        min={MIN_BPM}
        max={MAX_BPM}
        value={bpm}
        onChange={(event) => setBpm(Number(event.target.value))}
        aria-label="Tempo"
        className="mt-6 w-full accent-accent"
      />

      <div aria-hidden className="mt-6 flex justify-center gap-2">
        {Array.from({ length: beatsPerBar }, (_, index) => (
          <span
            key={index}
            className={cn(
              "size-3 rounded-full transition-transform duration-100",
              beat === index ? "scale-125" : "scale-100",
              beat === index ? (index === 0 ? "bg-accent" : "bg-ink") : "bg-line-strong",
            )}
          />
        ))}
      </div>

      <div className="mt-6">
        <p className="mb-2 text-[13px] font-medium text-muted">Beats per bar</p>
        <SegmentedControl label="Beats per bar" options={BEAT_OPTIONS} value={beatsPerBar} onChange={setBeatsPerBar} />
      </div>

      <div className="mt-auto pt-6">
        <PlayButton playing={playing} onToggle={toggle} label="Start metronome" />
      </div>
    </ToolCard>
  );
}
