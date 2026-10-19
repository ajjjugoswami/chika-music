const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function fadeVolume(audio: HTMLAudioElement, to: number, durationMs: number, onDone?: () => void) {
  const from = audio.volume;
  const target = clamp(to);
  const start = performance.now();
  let frame = 0;

  const step = (now: number) => {
    const progress = clamp((now - start) / durationMs);
    audio.volume = clamp(from + (target - from) * progress);
    if (progress < 1) {
      frame = requestAnimationFrame(step);
    } else {
      onDone?.();
    }
  };

  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}
