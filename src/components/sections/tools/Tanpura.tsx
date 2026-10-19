"use client";

import { AudioLines } from "lucide-react";
import { EqualizerBars } from "@/components/sections/home/hero/EqualizerBars";
import { useTanpura, type DroneNote } from "@/hooks/useTanpura";
import { KEY_NAMES } from "@/lib/audio/notes";
import { PlayButton } from "./PlayButton";
import { SegmentedControl } from "./SegmentedControl";
import { ToolCard } from "./ToolCard";

const KEY_OPTIONS = KEY_NAMES.map((key) => ({ value: key, label: key }));
const STRING_OPTIONS: { value: DroneNote; label: string }[] = [
  { value: "Pa", label: "Pa – Sa" },
  { value: "Ma", label: "Ma – Sa" },
];

export function Tanpura({ className }: { className?: string }) {
  const { playing, toggle, keyName, setKeyName, firstString, setFirstString } = useTanpura();

  return (
    <ToolCard
      icon={AudioLines}
      title="Tanpura drone"
      description="Practise sargam and riyaz against a steady Sa."
      className={className}
    >
      <div className="flex items-center justify-between rounded-card bg-surface px-5 py-4">
        <div>
          <p className="text-[13px] text-muted">Sa is set to</p>
          <p className="text-[2rem] leading-tight font-semibold tracking-[-0.03em]">{keyName}</p>
        </div>
        {playing && <EqualizerBars />}
      </div>

      <div className="mt-6">
        <p className="mb-2 text-[13px] font-medium text-muted">Key (Sa)</p>
        <SegmentedControl label="Key" options={KEY_OPTIONS} value={keyName} onChange={setKeyName} />
      </div>

      <div className="mt-6">
        <p className="mb-2 text-[13px] font-medium text-muted">First string</p>
        <SegmentedControl label="First string" options={STRING_OPTIONS} value={firstString} onChange={setFirstString} />
      </div>

      <div className="mt-auto pt-6">
        <PlayButton playing={playing} onToggle={toggle} label="Play tanpura" />
      </div>
    </ToolCard>
  );
}
