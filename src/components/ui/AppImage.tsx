import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { ImageAsset } from "@/types/image";

interface AppImageProps {
  image: ImageAsset;
  sizes: string;
  className?: string;
  preload?: boolean;
  quality?: number;
}

export function AppImage({ image, sizes, className, preload, quality = 75 }: AppImageProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      quality={quality}
      preload={preload}
      placeholder={image.blurDataURL ? "blur" : "empty"}
      blurDataURL={image.blurDataURL}
      className={cn("object-cover", className)}
    />
  );
}
