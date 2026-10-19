import { Navigation, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/content/site";
import { mapDirectionsUrl } from "@/lib/utils/maps";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";

export function ContactActions() {
  return (
    <div className="flex flex-wrap gap-2.5">
      <ButtonLink href={buildWhatsAppLink()} external icon={<FaWhatsapp className="size-4 text-[#25d366]" />}>
        WhatsApp us
      </ButtonLink>
      <ButtonLink
        href={`tel:${siteConfig.contact.phoneE164}`}
        variant="outline"
        icon={<Phone className="size-4" aria-hidden />}
      >
        Call now
      </ButtonLink>
      <ButtonLink href={mapDirectionsUrl} external variant="outline" icon={<Navigation className="size-4" aria-hidden />}>
        Directions
      </ButtonLink>
    </div>
  );
}
