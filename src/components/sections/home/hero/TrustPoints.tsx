import { cn } from "@/lib/utils/cn";

export function TrustPoints({ points, className }: { points: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-faint", className)}>
      {points.map((point, index) => (
        <li key={point} className="flex items-center gap-3">
          {index > 0 && <span className="size-0.75 rounded-full bg-line-strong" aria-hidden />}
          {point}
        </li>
      ))}
    </ul>
  );
}
