import { SectionIntro } from "@/components/ui/SectionIntro";
import { learningPath } from "@/content/academy";
import { StepTimeline } from "./timeline/StepTimeline";

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
      <StepTimeline steps={learningPath} className="mt-10 sm:mt-14" />
    </section>
  );
}
