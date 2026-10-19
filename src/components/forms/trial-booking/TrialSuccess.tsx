import { CheckCircle2 } from "lucide-react";
import { buttonClassName } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/content/site";

interface TrialSuccessProps {
  whatsappLink: string;
  onReset: () => void;
}

export function TrialSuccess({ whatsappLink, onReset }: TrialSuccessProps) {
  return (
    <div role="status" className="flex flex-col items-start gap-5 py-6">
      <CheckCircle2 className="size-10 text-accent" aria-hidden />
      <h2 className="text-display-md">Almost done — send it on WhatsApp.</h2>
      <p className="max-w-md text-[16px] leading-relaxed text-muted">
        We opened WhatsApp with your booking details. Tap send and we&apos;ll confirm your trial slot. Prefer to talk?
        Call us on{" "}
        <a href={`tel:${siteConfig.contact.phoneE164}`} className="font-medium text-ink underline underline-offset-4">
          {siteConfig.contact.phoneDisplay}
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={buttonClassName("primary")}>
          Open WhatsApp again
        </a>
        <button type="button" onClick={onReset} className={buttonClassName("outline")}>
          Book another student
        </button>
      </div>
    </div>
  );
}
