import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { learningGoals } from "@/content/academy";
import { getImage } from "@/lib/data/images";
import { GoalExplorer } from "./goals/GoalExplorer";

export function LearningGoals() {
  return (
    <section className="container-x py-section">
      <SectionIntro
        label="Learn for your goal"
        title={
          <>
            Whatever brings you to music, <em>we&apos;ll plan around it.</em>
          </>
        }
      />
      <Reveal delay={0.1} className="mt-10 sm:mt-12">
        <GoalExplorer goals={learningGoals} images={learningGoals.map((goal) => getImage(goal.imageId))} />
      </Reveal>
    </section>
  );
}
