import { MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/content/site";
import { mapDirectionsUrl, mapEmbedUrl } from "@/lib/utils/maps";

export function LocationMap() {
  const { name, address } = siteConfig;

  return (
    <Reveal className="relative overflow-hidden rounded-panel border border-line bg-surface">
      <iframe
        title={`Map showing ${name}, ${address.locality}, ${address.city}`}
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block aspect-4/5 w-full border-0 grayscale-30 sm:aspect-video lg:aspect-21/9"
      />
      <div className="absolute inset-x-3 bottom-3 rounded-card border border-line bg-card/95 p-5 shadow-float backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-sm">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft">
            <MapPin className="size-4.5 text-accent-text" aria-hidden />
          </span>
          <div>
            <p className="text-[15px] font-semibold tracking-[-0.01em]">{name}</p>
            <p className="text-[13.5px] text-muted">
              {address.locality}, {address.city}, {address.region}
            </p>
          </div>
        </div>
        <ButtonLink href={mapDirectionsUrl} external size="md" className="mt-4 w-full">
          Get directions
        </ButtonLink>
      </div>
    </Reveal>
  );
}
