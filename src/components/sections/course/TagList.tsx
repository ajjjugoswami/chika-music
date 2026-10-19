import { cn } from "@/lib/utils/cn";

export function TagList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex h-10 items-center rounded-full bg-card px-4 text-[14.5px] font-medium ring-1 ring-line ring-inset"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
