"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getAudioContext } from "@/lib/audio/audioContext";
import { playTone } from "@/lib/audio/playTone";

const LOOKAHEAD_MS = 25;
const SCHEDULE_AHEAD_S = 0.12;

export function useMetronome(initialBpm = 80, initialBeats = 4) {
  const [bpm, setBpm] = useState(initialBpm);
  const [beatsPerBar, setBeatsPerBar] = useState(initialBeats);
  const [playing, setPlaying] = useState(false);
  const [beat, setBeat] = useState(-1);

  const nextTimeRef = useRef(0);
  const beatRef = useRef(0);
  const settingsRef = useRef({ bpm, beatsPerBar });

  useEffect(() => {
    settingsRef.current = { bpm, beatsPerBar };
  }, [bpm, beatsPerBar]);

  useEffect(() => {
    if (!playing) return;
    const ctx = getAudioContext();
    nextTimeRef.current = ctx.currentTime + 0.05;
    beatRef.current = 0;
    const timeouts: number[] = [];

    const timer = window.setInterval(() => {
      while (nextTimeRef.current < ctx.currentTime + SCHEDULE_AHEAD_S) {
        const current = beatRef.current;
        const accent = current === 0;
        playTone({
          frequency: accent ? 1568 : 1046,
          duration: 0.06,
          type: "square",
          volume: accent ? 0.22 : 0.12,
          when: nextTimeRef.current,
        });
        const delay = Math.max(0, (nextTimeRef.current - ctx.currentTime) * 1000);
        timeouts.push(window.setTimeout(() => setBeat(current), delay));

        const { bpm: tempo, beatsPerBar: beats } = settingsRef.current;
        nextTimeRef.current += 60 / tempo;
        beatRef.current = (current + 1) % beats;
      }
    }, LOOKAHEAD_MS);

    return () => {
      window.clearInterval(timer);
      timeouts.forEach(window.clearTimeout);
      setBeat(-1);
    };
  }, [playing]);

  const toggle = useCallback(() => setPlaying((value) => !value), []);

  return { bpm, setBpm, beatsPerBar, setBeatsPerBar, playing, toggle, beat };
}
