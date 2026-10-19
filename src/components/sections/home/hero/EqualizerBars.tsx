import { cn } from "@/lib/utils/cn";
import styles from "./EqualizerBars.module.css";

const BARS = Array.from({ length: 5 }, (_, index) => index);

export function EqualizerBars({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <span aria-hidden className={cn(styles.bars, size === "sm" && styles.small)}>
      {BARS.map((bar) => (
        <span key={bar} className={styles.bar} />
      ))}
    </span>
  );
}
