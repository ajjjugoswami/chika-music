import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils/cn";
import { LogoMark } from "./LogoMark";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className={cn("group flex items-center gap-2", className)}>
      <LogoMark className="h-10 w-auto text-ink transition-transform duration-500 ease-out-expo group-hover:-rotate-6" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.375rem] tracking-[-0.01em]">Future Music</span>
        <span className="mt-0.5 text-[9.5px] font-semibold tracking-[0.28em] text-muted uppercase">Academy</span>
      </span>
    </Link>
  );
}
