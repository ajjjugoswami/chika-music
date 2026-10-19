"use client";

import { VolumeX } from "lucide-react";
import { EqualizerBars } from "@/components/sections/home/hero/EqualizerBars";
import { useAmbientAudio } from "@/hooks/useAmbientAudio";
import { cn } from "@/lib/utils/cn";

export function AmbientSoundToggle({ className }: { className?: string }) {
  const { playing, toggle } = useAmbientAudio();

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        toggle();
      }}
      aria-pressed={playing}
      aria-label={playing ? "Mute background music" : "Play background music"}
      title={playing ? "Mute background music" : "Play background music"}
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-200 hover:bg-surface",
        className,
      )}
    >
      {playing ? <EqualizerBars size="sm" /> : <VolumeX className="size-4 text-muted" aria-hidden />}
    </button>
  );
}
