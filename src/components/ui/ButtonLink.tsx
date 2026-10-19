import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "accent" | "outline" | "light" | "ghost-light" | "link";
export type ButtonSize = "md" | "lg";

const SIZES: Record<ButtonSize, string> = {
  md: "h-10 px-4 text-[14px]",
  lg: "h-12 px-5.5 text-[15px]",
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "rounded-full font-semibold bg-cta text-cta-fg hover:bg-cta-hover",
  accent: "rounded-full font-semibold bg-accent text-white hover:bg-accent-hover",
  outline: "rounded-full font-medium text-ink ring-1 ring-line-strong ring-inset hover:bg-surface",
  light: "rounded-full font-semibold bg-white text-[#171717] hover:bg-white/85",
  "ghost-light": "rounded-full font-medium text-white ring-1 ring-white/25 ring-inset hover:bg-white/10",
  link: "font-medium text-accent-text underline-offset-4 hover:underline",
};

export const buttonClassName = (variant: ButtonVariant, className?: string, size: ButtonSize = "lg") =>
  cn(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-200 [&>svg]:shrink-0",
    variant !== "link" && SIZES[size],
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
  size?: ButtonSize;
  icon?: ReactNode;
  external?: boolean;
}

export function ButtonLink({
  children,
  variant = "primary",
  size = "lg",
  icon,
  external,
  className,
  ...props
}: ButtonLinkProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link {...props} {...externalProps} className={buttonClassName(variant, className, size)}>
      {icon}
      {children}
      {!icon && <ArrowNudge />}
    </Link>
  );
}
