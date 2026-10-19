import type { ReactNode } from "react";
import { ArrowNudge } from "@/components/ui/ButtonLink";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: { label: string; href: string; external?: boolean };
}

export function ContactCard({ icon, title, description, action }: ContactCardProps) {
  return (
    <div className="flex h-full flex-col rounded-card border border-line bg-card p-6 shadow-card md:p-7">
      <span className="grid size-11 place-items-center rounded-full bg-surface">{icon}</span>
      <h2 className="mt-6 text-[1.25rem] leading-tight tracking-[-0.025em]">{title}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>
      {action && (
        <a
          href={action.href}
          {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-medium text-accent-text"
        >
          {action.label}
          <ArrowNudge />
        </a>
      )}
    </div>
  );
}
