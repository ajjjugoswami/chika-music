import { CalendarCheck, Phone } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import styles from "./MobileActionBar.module.css";

export function MobileActionBar() {
  return (
    <nav aria-label="Quick actions" className={styles.bar}>
      <div className="grid grid-cols-3 items-center gap-2 px-3 pt-2">
        <a href={`tel:${siteConfig.contact.phoneE164}`} className={styles.action}>
          <Phone className="size-4.5" aria-hidden />
          Call
        </a>
        <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className={styles.action}>
          <FaWhatsapp className="size-4.5 text-[#25d366]" aria-hidden />
          WhatsApp
        </a>
        <Link href="/book-trial" className={`${styles.action} ${styles.primary}`}>
          <CalendarCheck className="size-4.5" aria-hidden />
          Book trial
        </Link>
      </div>
    </nav>
  );
}
