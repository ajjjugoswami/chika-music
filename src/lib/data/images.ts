import generated from "@/content/generated/images.json";
import { imageAlts, imageCredits } from "@/content/images";
import type { ImageAsset, ImageCredit } from "@/types/image";

type GeneratedImage = Omit<ImageAsset, "alt">;

const images = generated as Record<string, GeneratedImage>;

export function getImage(id: string): ImageAsset {
  const image = images[id];
  if (!image) throw new Error(`Unknown image id: ${id}`);
  return { ...image, alt: imageAlts[id] ?? "" };
}

export function getImageCredits(): ImageCredit[] {
  return imageCredits;
}
