import { cn } from "@/lib/utils/cn";
import styles from "./KeyboardKey.module.css";

interface KeyboardKeyProps {
  tone: "white" | "black";
  sargam: string;
  active: boolean;
  onPlay: () => void;
  position?: number;
}

export function KeyboardKey({ tone, sargam, active, onPlay, position }: KeyboardKeyProps) {
  return (
    <button
      type="button"
      onPointerDown={onPlay}
      onKeyDown={(event) => (event.key === "Enter" || event.key === " ") && onPlay()}
      aria-label={`Play ${sargam}`}
      data-active={active || undefined}
      className={cn(
        styles.key,
        tone === "white" ? styles.white : styles.black,
        position !== undefined && styles[`pos${position}`],
      )}
    >
      <span className={styles.label}>{sargam}</span>
    </button>
  );
}
