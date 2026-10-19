import { cn } from "@/lib/utils/cn";

interface SegmentedControlProps<T extends string | number> {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function SegmentedControl<T extends string | number>({
  label,
  options,
  value,
  onChange,
  className,
}: SegmentedControlProps<T>) {
  return (
    <div role="radiogroup" aria-label={label} className={cn("flex flex-wrap gap-1.5", className)}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "h-9 min-w-10 rounded-full px-3 text-[13.5px] font-medium transition-colors",
              active ? "bg-cta text-cta-fg" : "bg-surface text-ink hover:bg-line",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
