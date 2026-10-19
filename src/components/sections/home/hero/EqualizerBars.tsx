import styles from "./EqualizerBars.module.css";

const BARS = Array.from({ length: 5 }, (_, index) => index);

export function EqualizerBars() {
  return (
    <span aria-hidden className={styles.bars}>
      {BARS.map((bar) => (
        <span key={bar} className={styles.bar} />
      ))}
    </span>
  );
}
