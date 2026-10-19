import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { AppImage } from "@/components/ui/AppImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getImage } from "@/lib/data/images";
import { cn } from "@/lib/utils/cn";

const TILES = [
  { id: "guitar-01", className: "sm:col-span-2 sm:row-span-2" },
  { id: "piano-hero", className: "" },
  { id: "vocal-01", className: "" },
  { id: "harmonium-01", className: "" },
  { id: "guitar-02", className: "" },
];

export function PhotoStrip() {
  return (
    <section className="container-x py-section">
      <SectionIntro
        label="Inside the academy"
        title={
          <>
            Every instrument, <em>every age.</em>
          </>
        }
      />
      <Reveal stagger className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:grid-cols-4">
        {TILES.map((tile) => (
          <RevealItem key={tile.id} className={cn("group relative overflow-hidden rounded-card bg-surface", tile.className)}>
            <AppImage
              image={getImage(tile.id)}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
