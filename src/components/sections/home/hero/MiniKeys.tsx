import { cn } from "@/lib/utils/cn";
import styles from "./MiniKeys.module.css";

const WHITE_KEYS = Array.from({ length: 10 }, (_, index) => index);
const BLACK_KEYS = Array.from({ length: 7 }, (_, index) => index);

export function MiniKeys({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn(styles.keys, className)}>
      <div className={styles.white}>
        {WHITE_KEYS.map((key) => (
          <span key={key} className={styles.whiteKey} />
        ))}
      </div>
      <div className={styles.black}>
        {BLACK_KEYS.map((key) => (
          <span key={key} className={styles.blackKey} />
        ))}
      </div>
    </div>
  );
}
