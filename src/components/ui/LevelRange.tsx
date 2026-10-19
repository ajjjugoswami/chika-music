import { ArrowRight } from "lucide-react";

export function LevelRange() {
  return (
    <span className="inline-flex items-center gap-1.5">
      Beginner
      <ArrowRight aria-label="to" className="size-3.5 shrink-0 text-faint" />
      Advanced
    </span>
  );
}
