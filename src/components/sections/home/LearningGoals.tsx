import { BookOpenText, Headphones, Music2, Trophy, type LucideIcon } from "lucide-react";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { learningGoals } from "@/content/academy";

const ICONS: LucideIcon[] = [Music2, Trophy, BookOpenText, Headphones];

export function LearningGoals() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-x py-section">
        <SectionIntro
          label="Learn for your goal"
          title={
            <>
              Whatever brings you to music, <em>we&apos;ll plan around it.</em>
            </>
          }
        />
        <Reveal stagger className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-3 lg:grid-cols-4">
          {learningGoals.map((goal, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <RevealItem
                key={goal.title}
                className="rounded-card border border-line bg-card p-4 shadow-card transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-float sm:p-6"
              >
                <span className="grid size-10 place-items-center rounded-full bg-accent-soft sm:size-11">
                  <Icon className="size-5 text-accent-text" aria-hidden />
                </span>
                <h3 className="mt-4 text-[15px] leading-snug tracking-[-0.02em] sm:mt-5 sm:text-[1.125rem]">
                  {goal.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted sm:text-[14.5px]">{goal.description}</p>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
