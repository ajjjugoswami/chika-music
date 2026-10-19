import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { mobileNav, siteConfig } from "@/content/site";
import { getAllCourses } from "@/lib/data/courses";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import styles from "./MobileMenu.module.css";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const { contact, address } = siteConfig;

  return (
    <div id="mobile-menu" className={styles.menu}>
      <nav aria-label="Mobile" className={styles.body}>
        <ul>
          {mobileNav.map((item) => (
            <li key={item.href} className={styles.rise}>
              <Link href={item.href} onClick={onClose} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`${styles.rise} mt-10`}>
          <p className={styles.label}>Courses</p>
          <ul className={styles.chips}>
            {getAllCourses().map((course) => (
              <li key={course.slug}>
                <Link href={`/courses/${course.slug}`} onClick={onClose} className={styles.chip}>
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.rise} mt-10 space-y-3 text-[15px]`}>
          <div className="mb-6 flex items-center justify-between">
            <p className={styles.label}>Appearance</p>
            <ThemeToggle />
          </div>
          <p className={styles.label}>Visit or call</p>
          <a href={`tel:${contact.phoneE164}`} className="flex items-center gap-2.5">
            <Phone className="size-4 text-muted" aria-hidden />
            {contact.phoneDisplay}
          </a>
          <p className="flex items-center gap-2.5">
            <MapPin className="size-4 text-muted" aria-hidden />
            {address.locality}, {address.city}
          </p>
        </div>
      </nav>

      <div className={styles.actions}>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} ${styles.ghost}`}
        >
          <FaWhatsapp className="size-4" />
          WhatsApp
        </a>
        <Link href="/book-trial" onClick={onClose} className={`${styles.button} ${styles.solid}`}>
          Book a trial
        </Link>
      </div>
    </div>
  );
}
