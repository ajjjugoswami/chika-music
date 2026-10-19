let context: AudioContext | null = null;

export function getAudioContext() {
  if (!context) context = new AudioContext();
  if (context.state === "suspended") void context.resume();
  return context;
}
