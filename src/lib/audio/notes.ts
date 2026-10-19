export const KEY_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"] as const;
export type KeyName = (typeof KEY_NAMES)[number];

export const SARGAM = ["Sa", "re", "Re", "ga", "Ga", "Ma", "Ma'", "Pa", "dha", "Dha", "ni", "Ni"] as const;

const A4 = 440;
const A4_MIDI = 69;

export function midiToFrequency(midi: number) {
  return A4 * 2 ** ((midi - A4_MIDI) / 12);
}

export function keyToMidi(key: KeyName, octave = 3) {
  return 12 * (octave + 1) + KEY_NAMES.indexOf(key);
}
