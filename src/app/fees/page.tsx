import { FeeFactors } from "@/components/sections/fees/FeeFactors";
import { PageBreadcrumbJsonLd } from "@/components/ui/PageBreadcrumbJsonLd";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { TrialCta } from "@/components/sections/shared/TrialCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { generalFaqs } from "@/content/academy";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Fees & FAQ",
  description:
    "How fees work for guitar, piano, harmonium and vocal classes at Future Music Academy, Rohtak, plus answers to common questions.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fees & FAQ"
        title={
          <>
            Simple, fair fees — <em>shared on request.</em>
          </>
        }
        description="Fees depend on your course, class format and level. Ask us and we'll send the current structure within the day."
      />
      <FeeFactors />
      <FaqSection faqs={generalFaqs} />
      <TrialCta />
      <PageBreadcrumbJsonLd name="Fees & FAQ" path="/fees" />
    </>
  );
}
