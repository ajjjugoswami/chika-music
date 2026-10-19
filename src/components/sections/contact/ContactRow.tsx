import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface ContactRowProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export function ContactRow({ icon, label, value, href, external }: ContactRowProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-white/5 sm:px-5"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[14.5px] font-semibold tracking-[-0.01em]">{label}</span>
        <span className="block text-[13px] text-white/55">{value}</span>
      </span>
      <ArrowUpRight
        aria-hidden
        className="size-4 shrink-0 text-white/40 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
      />
    </a>
  );
}
