import { DrawLine } from "@/components/motion/DrawLine";
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
            From your first note <em>to your first stage.</em>
          </>
        }
      />
      <DrawLine className="mt-12 hidden lg:block" />
      <HighlightGrid items={learningPath} numbered className="mt-12 lg:mt-6" />
    </section>
  );
}
