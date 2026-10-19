export const PRACTICE_AUDIO_EVENT = "fma:practice-audio";

export function announcePracticeAudio() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(PRACTICE_AUDIO_EVENT));
}
