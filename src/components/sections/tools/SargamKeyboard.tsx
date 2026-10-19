"use client";

import { Piano } from "lucide-react";
import { useState } from "react";
import { keyToMidi, midiToFrequency, SARGAM } from "@/lib/audio/notes";
import { playTone } from "@/lib/audio/playTone";
import { KeyboardKey } from "./KeyboardKey";
import { ToolCard } from "./ToolCard";

const BLACK = new Set([1, 3, 6, 8, 10]);
const SEMITONES = Array.from({ length: 13 }, (_, index) => index);
const BASE_MIDI = keyToMidi("C", 4);

export function SargamKeyboard({ className }: { className?: string }) {
  const [active, setActive] = useState<number | null>(null);

  const play = (semitone: number) => {
    playTone({ frequency: midiToFrequency(BASE_MIDI + semitone), duration: 1.4, type: "triangle", volume: 0.3 });
    setActive(semitone);
    window.setTimeout(() => setActive((current) => (current === semitone ? null : current)), 220);
  };

  const whites = SEMITONES.filter((semitone) => !BLACK.has(semitone % 12));
  const blacks = SEMITONES.filter((semitone) => BLACK.has(semitone % 12));

  return (
    <ToolCard
      icon={Piano}
      title="Sargam keyboard"
      description="Tap a key to hear the note. Labels show Indian and Western names."
      className={className}
    >
      <div className="relative h-44 select-none sm:h-52">
        <div className="grid h-full grid-cols-8 gap-1">
          {whites.map((semitone) => (
            <KeyboardKey
              key={semitone}
              tone="white"
              sargam={semitone === 12 ? "Sa'" : SARGAM[semitone % 12]}
              active={active === semitone}
              onPlay={() => play(semitone)}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 grid h-[58%] grid-cols-16">
          {blacks.map((semitone) => (
            <KeyboardKey
              key={semitone}
              tone="black"
              sargam={SARGAM[semitone % 12]}
              active={active === semitone}
              onPlay={() => play(semitone)}
              position={semitone}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 text-[13px] text-muted">
        Lowercase names (re, ga, dha, ni) are komal notes; Ma&apos; is tivra Ma.
      </p>
    </ToolCard>
  );
}
