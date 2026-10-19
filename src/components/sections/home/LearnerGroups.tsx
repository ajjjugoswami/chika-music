import { HighlightGrid } from "@/components/ui/HighlightGrid";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { learnerGroups } from "@/content/academy";

export function LearnerGroups() {
  return (
    <section className="container-x py-section">
      <SectionIntro
        label="Who we teach"
        title={
          <>
            Five or fifty-five — <em>start where you are.</em>
          </>
        }
        description="Lessons are tailored to age, experience and the kind of music you want to make."
      />
      <HighlightGrid items={learnerGroups} className="mt-14" />
    </section>
  );
}
