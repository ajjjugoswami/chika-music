import { CourseShowcase } from "@/components/sections/home/CourseShowcase";
import { FactsStrip } from "@/components/sections/home/FactsStrip";
import { FounderNote } from "@/components/sections/home/FounderNote";
import { Hero } from "@/components/sections/home/Hero";
import { LearnerGroups } from "@/components/sections/home/LearnerGroups";
import { LearningPath } from "@/components/sections/home/LearningPath";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { TrialCta } from "@/components/sections/shared/TrialCta";
import { generalFaqs } from "@/content/academy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactsStrip />
      <CourseShowcase />
      <FounderNote />
      <LearningPath />
      <LearnerGroups />
      <FaqSection faqs={generalFaqs} />
      <TrialCta />
    </>
  );
}
