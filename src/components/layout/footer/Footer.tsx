import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { ArrowNudge } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/content/site";
import { getAllCourses } from "@/lib/data/courses";
import { mapDirectionsUrl } from "@/lib/utils/maps";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import styles from "./Footer.module.css";
import { FooterColumn } from "./FooterColumn";

const ACADEMY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Practice tools", href: "/tools" },
  { label: "Fees & FAQ", href: "/fees" },
  { label: "Contact", href: "/contact" },
  { label: "Book a trial", href: "/book-trial" },
];

const LEGAL_LINKS = [
  { label: "Photo credits", href: "/credits" },
  { label: "Contact", href: "/contact" },
  { label: "Book a trial", href: "/book-trial" },
];

export function Footer() {
  const { contact, address, hours } = siteConfig;
  const courseLinks = getAllCourses().map((course) => ({ label: course.name, href: `/courses/${course.slug}` }));

  return (
    <footer className={styles.footer}>
      <div className="container-x pt-14 sm:pt-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">{siteConfig.description}</p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-[12.5px] text-muted">
              <span className={styles.liveDot} />
              Admissions open for new students
            </p>
          </div>

          <FooterColumn title="Courses" links={courseLinks} />
          <FooterColumn title="Academy" links={ACADEMY_LINKS} />

          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-[13px] font-semibold">Visit</h2>
            <address className="mt-4 space-y-2.5 text-[13.5px] text-muted not-italic">
              <p>
                {address.locality}, {address.city}
                <br />
                {address.region}, India
              </p>
              {hours.map((slot) => (
                <p key={slot.days}>
                  {slot.days}
                  <br />
                  {slot.time}
                </p>
              ))}
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 hover:text-ink"
              >
                Get directions
                <ArrowNudge />
              </a>
            </address>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-[13px] font-semibold">Talk to us</h2>
            <div className="mt-4 space-y-2.5 text-[13.5px] text-muted">
              <a href={`tel:${contact.phoneE164}`} className="block hover:text-ink">
                {contact.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-ink"
              >
                <FaWhatsapp className="size-3.5 text-[#25d366]" />
                WhatsApp
              </a>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-ink"
              >
                <FaInstagram className="size-3.5 text-[#e1306c]" />
                {siteConfig.social.instagram.handle}
              </a>
              <p>{siteConfig.founder}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line py-6 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Footer" className="lg:order-2">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13.5px] transition-colors hover:text-muted">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-between gap-4 lg:contents">
            <p className="text-[13.5px] text-muted lg:order-1">
              © {new Date().getFullYear()} {siteConfig.name}, {address.city}.
            </p>
            <ThemeToggle className="lg:order-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}
