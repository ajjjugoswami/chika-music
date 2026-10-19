import { Music, Music2, Music3, Music4, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import styles from "./FloatingNotes.module.css";

const NOTES: LucideIcon[] = [Music2, Music, Music3, Music4];

export function FloatingNotes({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn(styles.wrap, className)}>
      {NOTES.map((Icon, index) => (
        <span key={index} className={styles.note}>
          <Icon className={styles.glyph} strokeWidth={2.25} />
        </span>
      ))}
    </div>
  );
}
