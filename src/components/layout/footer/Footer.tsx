import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/content/site";
import { getAllCourses } from "@/lib/data/courses";
import { mapDirectionsUrl } from "@/lib/utils/maps";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import { FooterColumn } from "./FooterColumn";

const ACADEMY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Fees & FAQ", href: "/fees" },
  { label: "Contact", href: "/contact" },
  { label: "Book a trial", href: "/book-trial" },
];

export function Footer() {
  const { contact, address, hours } = siteConfig;
  const courseLinks = getAllCourses().map((course) => ({ label: course.name, href: `/courses/${course.slug}` }));
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 font-display text-[1.75rem] leading-tight italic">“{siteConfig.tagline}.”</p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-accent-text hover:underline"
            >
              <FaWhatsapp className="size-4" />
              Message us on WhatsApp
            </a>
          </div>

          <FooterColumn title="Courses" links={courseLinks} />
          <FooterColumn title="Academy" links={ACADEMY_LINKS} />

          <div>
            <p className="eyebrow text-muted">Visit</p>
            <address className="mt-5 space-y-1.5 text-[15px] not-italic">
              <p>{siteConfig.name}</p>
              <p>
                {address.locality}, {address.city}, {address.region}
              </p>
              <p>
                <a href={`tel:${contact.phoneE164}`} className="hover:text-accent-text">
                  {contact.phoneDisplay}
                </a>
              </p>
            </address>
            <ul className="mt-5 space-y-1 text-[14px] text-muted">
              {hours.map((slot) => (
                <li key={slot.days}>
                  {slot.days}: {slot.time}
                </li>
              ))}
            </ul>
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[14px] font-medium underline underline-offset-4 hover:text-accent-text"
            >
              Get directions
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-[13px] text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}, {address.city}. All rights reserved.
          </p>
          <p>
            Founded by <Link href="/about" className="hover:text-ink">{siteConfig.founder}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
