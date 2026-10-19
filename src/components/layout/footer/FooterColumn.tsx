import Link from "next/link";
import type { NavItem } from "@/types/site";

export function FooterColumn({ title, links }: { title: string; links: NavItem[] }) {
  return (
    <div>
      <p className="eyebrow text-muted">{title}</p>
      <ul className="mt-5 space-y-2.5 text-[15px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-accent-text">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
