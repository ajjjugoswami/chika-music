import { Pause, Play } from "lucide-react";
import { buttonClassName } from "@/components/ui/ButtonLink";

interface PlayButtonProps {
  playing: boolean;
  onToggle: () => void;
  label: string;
}

export function PlayButton({ playing, onToggle, label }: PlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={playing}
      className={buttonClassName(playing ? "accent" : "primary", "w-full")}
    >
      {playing ? <Pause className="size-4" aria-hidden /> : <Play className="size-4" aria-hidden />}
      {playing ? "Stop" : label}
    </button>
  );
}
