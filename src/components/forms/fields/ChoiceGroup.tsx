import type { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils/cn";

interface ChoiceGroupProps {
  name: string;
  options: { value: string; label: string }[];
  registration: UseFormRegisterReturn;
  columns?: 2 | 4;
}

export function ChoiceGroup({ name, options, registration, columns = 2 }: ChoiceGroupProps) {
  return (
    <div className={cn("grid gap-2", columns === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2")}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex h-12 items-center justify-center rounded-xl border border-line-strong bg-card px-3 text-center text-[14.5px] font-medium transition-colors has-checked:border-accent has-checked:bg-accent-soft has-checked:text-accent-text has-focus-visible:ring-2 has-focus-visible:ring-accent/30"
        >
          <input type="radio" value={option.value} className="sr-only" {...registration} name={name} />
          {option.label}
        </label>
      ))}
    </div>
  );
}
