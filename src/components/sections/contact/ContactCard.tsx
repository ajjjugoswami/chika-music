import type { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: { label: string; href: string; external?: boolean };
}

export function ContactCard({ icon, title, description, action }: ContactCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 md:p-7">
      <span className="grid size-11 place-items-center rounded-full bg-surface">{icon}</span>
      <h2 className="mt-6 font-display text-[1.75rem] leading-tight">{title}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>
      {action && (
        <a
          href={action.href}
          {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-auto pt-6 text-[15px] font-medium text-accent-text underline-offset-4 hover:underline"
        >
          {action.label} →
        </a>
      )}
    </div>
  );
}
