import { Approach } from "@/components/sections/home/Approach";
import { CourseShowcase } from "@/components/sections/home/CourseShowcase";
import { Hero } from "@/components/sections/home/hero/Hero";
import { LearnerGroups } from "@/components/sections/home/LearnerGroups";
import { LearningPath } from "@/components/sections/home/LearningPath";
import { PhotoStrip } from "@/components/sections/home/PhotoStrip";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { TrialCta } from "@/components/sections/shared/TrialCta";
import { generalFaqs } from "@/content/academy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseShowcase />
      <Approach />
      <LearningPath />
      <PhotoStrip />
      <LearnerGroups />
      <FaqSection faqs={generalFaqs} />
      <TrialCta />
    </>
  );
}
