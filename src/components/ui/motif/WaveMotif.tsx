import styles from "./CourseMotif.module.css";

const BARS = Array.from({ length: 36 }, (_, index) => index);

export function WaveMotif() {
  return (
    <div aria-hidden className={styles.waveWrap}>
      {BARS.map((bar) => (
        <span key={bar} className={styles.bar} />
      ))}
    </div>
  );
}
