import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { PracticeToolsGrid } from "@/components/sections/tools/PracticeToolsGrid";

export function PracticeTools() {
  return (
    <section id="practice-tools" className="container-x py-section">
      <SectionIntro
        label="Free practice tools"
        title={
          <>
            Practise right here. <em>Turn your volume up.</em>
          </>
        }
        description="A tanpura drone, metronome and sargam keyboard for your daily riyaz — free, no app to install."
        action={
          <ButtonLink href="/tools" variant="outline" size="md">
            Open full screen
          </ButtonLink>
        }
      />
      <PracticeToolsGrid className="mt-10 sm:mt-12" />
    </section>
  );
}
