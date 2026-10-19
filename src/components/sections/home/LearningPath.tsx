import { HighlightGrid } from "@/components/ui/HighlightGrid";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { learningPath } from "@/content/academy";

export function LearningPath() {
  return (
    <section className="container-x py-section">
      <SectionIntro
        label="How it works"
        title={
          <>
            From your first note to your <em>first stage.</em>
          </>
        }
      />
      <HighlightGrid items={learningPath} numbered className="mt-14" />
    </section>
  );
}
