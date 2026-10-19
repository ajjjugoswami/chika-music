import { Clock } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils/cn";

export function HoursList({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="flex items-center gap-2 text-[13px] font-semibold text-white/70">
        <Clock className="size-4" aria-hidden />
        Class hours
      </p>
      <dl className="mt-3 space-y-2 text-[14px]">
        {siteConfig.hours.map((slot, index) => (
          <div
            key={slot.days}
            className={cn("flex justify-between gap-4", index > 0 && "border-t border-line-light pt-2")}
          >
            <dt className="text-white/60">{slot.days}</dt>
            <dd className="tabular font-medium">{slot.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
