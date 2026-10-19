import type { ReactNode } from "react";
import type { CourseMotifVariant, CourseTone } from "@/types/course";
import { cn } from "@/lib/utils/cn";
import styles from "./CourseMotif.module.css";
import { KeysMotif } from "./KeysMotif";
import { StringsMotif } from "./StringsMotif";
import { WaveMotif } from "./WaveMotif";

interface CourseMotifProps {
  variant: CourseMotifVariant;
  tone: CourseTone;
  className?: string;
  children?: ReactNode;
}

function MotifLayer({ variant }: { variant: CourseMotifVariant }) {
  switch (variant) {
    case "keys":
      return <KeysMotif />;
    case "reeds":
      return <KeysMotif withBellows />;
    case "strings":
      return <StringsMotif />;
    case "wave":
      return <WaveMotif />;
  }
}

export function CourseMotif({ variant, tone, className, children }: CourseMotifProps) {
  return (
    <div className={cn(styles.panel, styles[tone], className)}>
      <MotifLayer variant={variant} />
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}
