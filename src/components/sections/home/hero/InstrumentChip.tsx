import Link from "next/link";
import { AppImage } from "@/components/ui/AppImage";
import { cn } from "@/lib/utils/cn";
import type { ImageAsset } from "@/types/image";

interface InstrumentChipProps {
  href: string;
  label: string;
  meta: string;
  image: ImageAsset;
  className?: string;
}

export function InstrumentChip({ href, label, meta, image, className }: InstrumentChipProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-2.5 rounded-2xl border border-line bg-card/90 p-1.5 pr-4 shadow-float backdrop-blur-md transition-colors hover:border-line-strong",
        className,
      )}
    >
      <span className="relative size-10 overflow-hidden rounded-xl sm:size-12">
        <AppImage
          image={image}
          sizes="48px"
          className="transition-transform duration-500 ease-out-expo group-hover:scale-110"
        />
      </span>
      <span className="leading-tight">
        <span className="block text-[13.5px] font-semibold tracking-[-0.01em] sm:text-[14px]">{label}</span>
        <span className="block text-[11.5px] text-muted sm:text-[12px]">{meta}</span>
      </span>
    </Link>
  );
}
