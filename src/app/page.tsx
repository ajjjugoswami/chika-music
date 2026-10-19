import { Approach } from "@/components/sections/home/Approach";
import { CourseShowcase } from "@/components/sections/home/CourseShowcase";
import { Hero } from "@/components/sections/home/hero/Hero";
import { InstagramFollow } from "@/components/sections/home/InstagramFollow";
import { InstrumentFinder } from "@/components/sections/home/InstrumentFinder";
import { LearnerGroups } from "@/components/sections/home/LearnerGroups";
import { LearningGoals } from "@/components/sections/home/LearningGoals";
import { LearningPath } from "@/components/sections/home/LearningPath";
import { PhotoStrip } from "@/components/sections/home/PhotoStrip";
import { PracticeTools } from "@/components/sections/home/PracticeTools";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { TrialCta } from "@/components/sections/shared/TrialCta";
import { generalFaqs } from "@/content/academy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseShowcase />
      <InstrumentFinder />
      <LearningGoals />
      <Approach />
      <LearningPath />
      <PhotoStrip />
      <LearnerGroups />
      <PracticeTools />
      <FaqSection faqs={generalFaqs} />
      <InstagramFollow />
      <TrialCta />
    </>
  );
}
