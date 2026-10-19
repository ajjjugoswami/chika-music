import { CalendarCheck, Phone } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import styles from "./MobileActionBar.module.css";

export function MobileActionBar() {
  return (
    <nav aria-label="Quick actions" className={styles.bar}>
      <div className="grid grid-cols-4 items-center gap-1.5 px-2 pt-2">
        <a href={`tel:${siteConfig.contact.phoneE164}`} className={styles.action}>
          <Phone className="size-4.5" aria-hidden />
          Call
        </a>
        <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className={styles.action}>
          <FaWhatsapp className="size-4.5 text-[#25d366]" aria-hidden />
          WhatsApp
        </a>
        <a href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer" className={styles.action}>
          <FaInstagram className="size-4.5 text-[#e1306c]" aria-hidden />
          Instagram
        </a>
        <Link href="/book-trial" className={`${styles.action} ${styles.primary}`}>
          <CalendarCheck className="size-4.5" aria-hidden />
          Book trial
        </Link>
      </div>
    </nav>
  );
}
