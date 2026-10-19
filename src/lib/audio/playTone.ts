import { getAudioContext } from "./audioContext";

interface ToneOptions {
  frequency: number;
  duration?: number;
  type?: OscillatorType;
  volume?: number;
  when?: number;
}

export function playTone({ frequency, duration = 1.2, type = "triangle", volume = 0.25, when }: ToneOptions) {
  const ctx = getAudioContext();
  const start = when ?? ctx.currentTime;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.05);
}
