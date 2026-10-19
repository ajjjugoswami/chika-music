import styles from "./CourseMotif.module.css";

const STRINGS = Array.from({ length: 6 }, (_, index) => index);

export function StringsMotif() {
  return (
    <div aria-hidden className={styles.stringsWrap}>
      <div className={styles.soundHole} />
      <div className={styles.neck}>
        {STRINGS.map((string) => (
          <span key={string} className={styles.string} />
        ))}
      </div>
    </div>
  );
}
