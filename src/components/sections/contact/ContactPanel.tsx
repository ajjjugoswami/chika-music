import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/content/site";
import { FounderAvatar } from "@/components/ui/FounderAvatar";
import { mapDirectionsUrl } from "@/lib/utils/maps";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import { ContactRow } from "./ContactRow";
import { HoursList } from "./HoursList";

export function ContactPanel() {
  const { contact, address, founder, social } = siteConfig;

  return (
    <Reveal className="flex flex-col rounded-panel bg-stage p-6 text-white sm:p-8 lg:p-10">
      <p className="eyebrow text-accent-bright">Talk to us</p>
      <h2 className="mt-4 text-display-md text-white">Prefer a quick chat? Reach us directly.</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-white/60">
        Questions about courses, fees or timings — we usually reply within a few hours.
      </p>

      <div className="mt-8 divide-y divide-line-light overflow-hidden rounded-card bg-white/5 ring-1 ring-white/10 ring-inset">
        <ContactRow
          icon={<FaWhatsapp className="size-4.5 text-[#25d366]" />}
          label="WhatsApp"
          value="Fastest reply"
          href={buildWhatsAppLink()}
          external
        />
        <ContactRow
          icon={<Phone className="size-4.5 text-accent-bright" aria-hidden />}
          label={contact.phoneDisplay}
          value={`Speak with ${founder}`}
          href={`tel:${contact.phoneE164}`}
        />
        <ContactRow
          icon={<FaInstagram className="size-4.5 text-[#e1306c]" />}
          label="Instagram"
          value={social.instagram.handle}
          href={social.instagram.url}
          external
        />
        <ContactRow
          icon={<MapPin className="size-4.5 text-accent-bright" aria-hidden />}
          label={`${address.locality}, ${address.city}`}
          value={`${address.region}, India`}
          href={mapDirectionsUrl}
          external
        />
      </div>

      <HoursList className="mt-8" />

      <div className="mt-auto flex items-center gap-3 border-t border-line-light pt-6">
        <FounderAvatar />
        <div>
          <p className="text-[15px] font-semibold">{founder}</p>
          <p className="text-[13px] text-white/55">Founder & teacher</p>
        </div>
      </div>
    </Reveal>
  );
}
