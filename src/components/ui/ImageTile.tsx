import { RevealImage } from "@/components/motion/RevealImage";
import { cn } from "@/lib/utils/cn";
import type { ImageAsset } from "@/types/image";
import { AppImage } from "./AppImage";

interface ImageTileProps {
  image: ImageAsset;
  title: string;
  description: string;
  label?: string;
  sizes?: string;
  delay?: number;
  className?: string;
}

export function ImageTile({ image, title, description, label, sizes = "50vw", delay = 0, className }: ImageTileProps) {
  return (
    <RevealImage delay={delay} className={cn("group rounded-card bg-stage", className)}>
      <AppImage
        image={image}
        sizes={sizes}
        className="transition-transform duration-1000 ease-out-expo group-hover:scale-105"
      />
      <span aria-hidden className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
      {label && (
        <span className="absolute top-3 left-3 rounded-full bg-white/15 px-2.5 py-1 text-[11.5px] font-medium text-white ring-1 ring-white/20 backdrop-blur-md sm:top-4 sm:left-4 sm:text-[12px]">
          {label}
        </span>
      )}
      <span className="absolute inset-x-4 bottom-4 text-white sm:inset-x-5 sm:bottom-5">
        <span className="block text-[1.25rem] font-semibold tracking-[-0.03em] sm:text-[1.5rem]">{title}</span>
        <span className="mt-1 line-clamp-3 block text-[13px] leading-snug text-white/75 sm:text-[14px]">
          {description}
        </span>
      </span>
    </RevealImage>
  );
}
