import { Reveal } from "@/components/motion/Reveal";
import { InstrumentQuiz } from "@/components/sections/quiz/InstrumentQuiz";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function InstrumentFinder() {
  return (
    <section className="container-x grid gap-10 py-section lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
      <SectionIntro
        label="Not sure where to start?"
        title={
          <>
            Find your instrument <em>in 30 seconds.</em>
          </>
        }
        description="Answer three quick questions and we'll suggest the course that suits you best."
      />
      <Reveal delay={0.1}>
        <InstrumentQuiz />
      </Reveal>
    </section>
  );
}
