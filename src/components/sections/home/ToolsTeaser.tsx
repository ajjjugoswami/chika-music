import { AudioLines, Piano, Timer, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { ArrowNudge, ButtonLink } from "@/components/ui/ButtonLink";
import { SectionIntro } from "@/components/ui/SectionIntro";

const TOOLS: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: AudioLines, title: "Tanpura drone", description: "A steady Sa in any key for riyaz." },
  { icon: Timer, title: "Metronome", description: "Build timing from 40 to 220 BPM." },
  { icon: Piano, title: "Sargam keyboard", description: "Hear every swar, shuddh and komal." },
];

export function ToolsTeaser() {
  return (
    <section className="container-x py-section">
      <SectionIntro
        label="Free for everyone"
        title={
          <>
            Practise at home <em>with our free tools.</em>
          </>
        }
        description="No app to install. Open on your phone and start your daily practice."
        action={
          <ButtonLink href="/tools" variant="outline" size="md">
            Open practice tools
          </ButtonLink>
        }
      />
      <Reveal stagger className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3">
        {TOOLS.map(({ icon: Icon, title, description }) => (
          <RevealItem key={title}>
            <Link
              href="/tools"
              className="group flex h-full items-center gap-4 rounded-card border border-line bg-card p-4.5 shadow-card transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-float sm:flex-col sm:items-start sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft">
                <Icon className="size-5 text-accent-text" aria-hidden />
              </span>
              <span className="flex-1 sm:mt-4">
                <span className="block text-[1.0625rem] font-semibold tracking-[-0.02em]">{title}</span>
                <span className="mt-0.5 block text-[14px] text-muted">{description}</span>
              </span>
              <span className="text-faint group-hover:text-ink sm:mt-4">
                <ArrowNudge />
              </span>
            </Link>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
