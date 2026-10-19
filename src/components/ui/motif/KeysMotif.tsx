import styles from "./CourseMotif.module.css";

const WHITE_KEYS = Array.from({ length: 14 }, (_, index) => index);
const BLACK_KEYS = Array.from({ length: 10 }, (_, index) => index);

export function KeysMotif({ withBellows = false }: { withBellows?: boolean }) {
  return (
    <div aria-hidden className={styles.keysWrap}>
      {withBellows && <div className={styles.bellows} />}
      <div className={styles.keys}>
        <div className={styles.whiteKeys}>
          {WHITE_KEYS.map((key) => (
            <span key={key} className={styles.whiteKey} />
          ))}
        </div>
        <div className={styles.blackKeys}>
          {BLACK_KEYS.map((key) => (
            <span key={key} className={styles.blackKey} />
          ))}
        </div>
      </div>
    </div>
  );
}
