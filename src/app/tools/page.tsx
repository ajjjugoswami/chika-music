import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { Metronome } from "@/components/sections/tools/Metronome";
import { SargamKeyboard } from "@/components/sections/tools/SargamKeyboard";
import { Tanpura } from "@/components/sections/tools/Tanpura";
import { TrialCta } from "@/components/sections/shared/TrialCta";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Free Practice Tools — Metronome, Tanpura & Sargam Keyboard",
  description:
    "Free in-browser metronome, tanpura drone and sargam keyboard for daily riyaz and practice, from Future Music Academy, Rohtak.",
  path: "/tools",
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
        <Reveal stagger className="grid gap-4 lg:grid-cols-2">
          <RevealItem>
            <Tanpura className="h-full" />
          </RevealItem>
          <RevealItem>
            <Metronome className="h-full" />
          </RevealItem>
          <RevealItem className="lg:col-span-2">
            <SargamKeyboard />
          </RevealItem>
        </Reveal>
      </section>
      <TrialCta imageId="vocal-hero" />
    </>
  );
}
