import { siteConfig } from "@/content/site";
import { mapEmbedUrl } from "@/lib/utils/maps";

export function LocationMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface">
      <iframe
        title={`Map showing ${siteConfig.name}, ${siteConfig.address.locality}, ${siteConfig.address.city}`}
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-4/3 h-full min-h-80 w-full border-0 grayscale-[30%] lg:aspect-auto"
      />
    </div>
  );
}
