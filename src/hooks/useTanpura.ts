"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getAudioContext } from "@/lib/audio/audioContext";
import { keyToMidi, midiToFrequency, type KeyName } from "@/lib/audio/notes";

export type DroneNote = "Pa" | "Ma";

const STRING_CYCLE_S = 1.1;

export function useTanpura() {
  const [playing, setPlaying] = useState(false);
  const [keyName, setKeyName] = useState<KeyName>("C");
  const [firstString, setFirstString] = useState<DroneNote>("Pa");
  const settingsRef = useRef({ keyName, firstString });

  useEffect(() => {
    settingsRef.current = { keyName, firstString };
  }, [keyName, firstString]);

  useEffect(() => {
    if (!playing) return;
    const ctx = getAudioContext();
    const master = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1800;
    master.gain.value = 0.18;
    master.connect(filter).connect(ctx.destination);

    let index = 0;
    let nextTime = ctx.currentTime + 0.05;

    const pluck = (frequency: number, when: number) => {
      [1, 2, 3].forEach((harmonic, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i === 0 ? "sawtooth" : "sine";
        osc.frequency.value = frequency * harmonic;
        gain.gain.setValueAtTime(0.0001, when);
        gain.gain.exponentialRampToValueAtTime(0.5 / harmonic, when + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, when + STRING_CYCLE_S * 3.6);
        osc.connect(gain).connect(master);
        osc.start(when);
        osc.stop(when + STRING_CYCLE_S * 3.7);
      });
    };

    const timer = window.setInterval(() => {
      while (nextTime < ctx.currentTime + 0.2) {
        const { keyName: key, firstString: first } = settingsRef.current;
        const sa = keyToMidi(key, 3);
        const strings = [sa + (first === "Pa" ? -5 : -7), sa, sa, sa - 12];
        pluck(midiToFrequency(strings[index % 4]), nextTime);
        nextTime += index % 4 === 3 ? STRING_CYCLE_S * 1.6 : STRING_CYCLE_S;
        index += 1;
      }
    }, 50);

    return () => {
      window.clearInterval(timer);
      master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.2);
      window.setTimeout(() => master.disconnect(), 800);
    };
  }, [playing]);

  const toggle = useCallback(() => setPlaying((value) => !value), []);

  return { playing, toggle, keyName, setKeyName, firstString, setFirstString };
}
