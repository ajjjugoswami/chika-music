import styles from "./BeatPulse.module.css";

const BEATS = Array.from({ length: 4 }, (_, index) => index);

export function BeatPulse() {
  return (
    <div aria-hidden className="flex items-center justify-between rounded-xl bg-surface px-4 py-3">
      <span className="tabular text-[1.5rem] leading-none font-semibold tracking-[-0.04em]">80</span>
      <span className="flex gap-2">
        {BEATS.map((beat) => (
          <span key={beat} className={styles.beat} />
        ))}
      </span>
    </div>
  );
}
