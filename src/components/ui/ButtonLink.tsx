import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "outline" | "light" | "ghost-light" | "link";

const PILL = "h-11 rounded-full px-5 text-[14px] font-medium sm:h-12 sm:px-6 sm:text-[15px]";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: `${PILL} bg-accent text-white hover:bg-accent-hover`,
  outline: `${PILL} text-ink ring-1 ring-line-strong ring-inset hover:bg-ink hover:text-paper`,
  light: `${PILL} bg-white text-stage hover:bg-accent-soft`,
  "ghost-light": `${PILL} text-white ring-1 ring-white/30 ring-inset hover:bg-white/10`,
  link: "text-[15px] font-medium text-accent-text underline-offset-4 hover:underline",
};

export const buttonClassName = (variant: ButtonVariant, className?: string) =>
  cn(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-300 [&>svg]:shrink-0",
    VARIANTS[variant],
    className,
  );

export function ArrowNudge() {
  return (
    <ArrowRight
      aria-hidden
      className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
    />
  );
}

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  external?: boolean;
}

export function ButtonLink({ children, variant = "primary", icon, external, className, ...props }: ButtonLinkProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link {...props} {...externalProps} className={buttonClassName(variant, className)}>
      {icon}
      {children}
      {!icon && <ArrowNudge />}
    </Link>
  );
}
