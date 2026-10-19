import { Parallax } from "@/components/motion/Parallax";
import { RevealImage } from "@/components/motion/RevealImage";
import { AppImage } from "@/components/ui/AppImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { getImage } from "@/lib/data/images";
import { cn } from "@/lib/utils/cn";

const TILES = [
  { id: "guitar-01", className: "col-span-2 row-span-2" },
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
      <div className="mt-12 grid auto-rows-44 grid-cols-2 gap-3 sm:auto-rows-52 sm:grid-cols-4">
        {TILES.map((tile, index) => (
          <RevealImage key={tile.id} delay={index * 0.08} className={cn("group rounded-card bg-surface", tile.className)}>
            <Parallax>
              <AppImage
                image={getImage(tile.id)}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
            </Parallax>
          </RevealImage>
        ))}
      </div>
    </section>
  );
}
