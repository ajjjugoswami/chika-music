import Image from "next/image";
import { siteConfig } from "@/content/site";
import { getImage } from "@/lib/data/images";
import { cn } from "@/lib/utils/cn";

export function FounderAvatar({ className }: { className?: string }) {
  const photo = getImage("founder");

  return (
    <span className={cn("relative block size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-accent", className)}>
      <Image
        src={photo.src}
        alt={siteConfig.founder}
        fill
        sizes="56px"
        placeholder="blur"
        blurDataURL={photo.blurDataURL}
        className="object-cover"
      />
    </span>
  );
}
