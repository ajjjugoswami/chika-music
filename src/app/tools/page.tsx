import { TrialCta } from "@/components/sections/shared/TrialCta";
import { PageBreadcrumbJsonLd } from "@/components/ui/PageBreadcrumbJsonLd";
import { PracticeToolsGrid } from "@/components/sections/tools/PracticeToolsGrid";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Free Practice Tools — Tanpura, Metronome & Sargam Keyboard",
  description:
    "Free in-browser tanpura drone, metronome and sargam keyboard for daily riyaz and practice, from Future Music Academy, Rohtak.",
  path: "/tools",
  keywords: ["online tanpura", "free metronome", "sargam keyboard", "riyaz tanpura app", "tanpura drone online"],
});

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free practice tools"
        title={
          <>
            Your daily riyaz, <em>right in the browser.</em>
          </>
        }
        description="A metronome, tanpura drone and sargam keyboard — free for every student. Turn your volume up and press play."
      />
      <section className="container-x pb-section">
        <PracticeToolsGrid />
      </section>
      <TrialCta imageId="vocal-hero" />
      <PageBreadcrumbJsonLd name="Practice tools" path="/tools" />
    </>
  );
}
