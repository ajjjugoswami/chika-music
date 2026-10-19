import { Clock, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { siteConfig } from "@/content/site";
import { mapDirectionsUrl } from "@/lib/utils/maps";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import { ContactCard } from "./ContactCard";

export function ContactChannels() {
  const { contact, address, hours } = siteConfig;

  return (
    <Reveal stagger className="grid gap-4 sm:grid-cols-2">
      <RevealItem>
        <ContactCard
          icon={<FaWhatsapp className="size-5 text-[#25d366]" />}
          title="WhatsApp"
          description="Fastest way to reach us for fees, timings and trial slots."
          action={{ label: "Start a chat", href: buildWhatsAppLink(), external: true }}
        />
      </RevealItem>
      <RevealItem>
        <ContactCard
          icon={<Phone className="size-5 text-accent" aria-hidden />}
          title={contact.phoneDisplay}
          description={`Speak with ${siteConfig.founder} directly.`}
          action={{ label: "Call now", href: `tel:${contact.phoneE164}` }}
        />
      </RevealItem>
      <RevealItem>
        <ContactCard
          icon={<MapPin className="size-5 text-accent" aria-hidden />}
          title={`${address.locality}, ${address.city}`}
          description={`${address.region}, India`}
          action={{ label: "Get directions", href: mapDirectionsUrl, external: true }}
        />
      </RevealItem>
      <RevealItem>
        <ContactCard
          icon={<Clock className="size-5 text-accent" aria-hidden />}
          title="Class hours"
          description={hours.map((slot) => `${slot.days}: ${slot.time}`).join(" · ")}
        />
      </RevealItem>
    </Reveal>
  );
}
