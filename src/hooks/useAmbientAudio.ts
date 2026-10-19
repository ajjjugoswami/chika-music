"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ambientAudio } from "@/content/audio";
import { PRACTICE_AUDIO_EVENT } from "@/lib/audio/ambientBus";
import { fadeVolume } from "@/lib/audio/fadeVolume";

const GESTURES = ["pointerdown", "keydown", "touchstart"] as const;

function readMuted() {
  try {
    return window.localStorage.getItem(ambientAudio.storageKey) === "1";
  } catch {
    return false;
  }
}

function writeMuted(muted: boolean) {
  try {
    window.localStorage.setItem(ambientAudio.storageKey, muted ? "1" : "0");
  } catch {}
}

export function useAmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cancelFadeRef = useRef<(() => void) | null>(null);
  const [playing, setPlaying] = useState(false);

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(ambientAudio.src);
      audio.loop = true;
      audio.preload = "none";
      audio.volume = 0;
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const fadeIn = useCallback(() => {
    const audio = getAudio();
    cancelFadeRef.current?.();
    audio
      .play()
      .then(() => {
        setPlaying(true);
        cancelFadeRef.current = fadeVolume(audio, ambientAudio.volume, ambientAudio.fadeMs);
      })
      .catch(() => setPlaying(false));
  }, [getAudio]);

  const fadeOut = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelFadeRef.current?.();
    setPlaying(false);
    cancelFadeRef.current = fadeVolume(audio, 0, 600, () => audio.pause());
  }, []);

  useEffect(() => {
    if (readMuted()) return;

    const start = () => {
      GESTURES.forEach((name) => window.removeEventListener(name, start));
      fadeIn();
    };

    GESTURES.forEach((name) => window.addEventListener(name, start, { once: true, passive: true }));
    return () => GESTURES.forEach((name) => window.removeEventListener(name, start));
  }, [fadeIn]);

  useEffect(() => {
    const onPractice = () => fadeOut();
    const onVisibility = () => {
      if (document.hidden) {
        audioRef.current?.pause();
      } else if (audioRef.current && playing) {
        void audioRef.current.play();
      }
    };

    window.addEventListener(PRACTICE_AUDIO_EVENT, onPractice);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener(PRACTICE_AUDIO_EVENT, onPractice);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [fadeOut, playing]);

  useEffect(
    () => () => {
      cancelFadeRef.current?.();
      audioRef.current?.pause();
    },
    [],
  );

  const toggle = useCallback(() => {
    if (playing) {
      writeMuted(true);
      fadeOut();
    } else {
      writeMuted(false);
      fadeIn();
    }
  }, [playing, fadeIn, fadeOut]);

  return { playing, toggle };
}
