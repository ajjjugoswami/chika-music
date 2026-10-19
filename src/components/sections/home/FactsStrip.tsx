import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { academyFacts } from "@/content/academy";

export function FactsStrip() {
  return (
    <section aria-label="Academy at a glance" className="border-y border-line bg-line">
      <Reveal stagger className="container-x grid grid-cols-2 gap-px px-0! lg:grid-cols-4">
        {academyFacts.map((fact) => (
          <RevealItem key={fact.title} className="bg-surface px-gutter py-8 lg:px-8">
            <p className="font-display text-[clamp(1.875rem,3vw,2.5rem)] leading-none">{fact.title}</p>
            <p className="mt-2 text-[14px] text-muted">{fact.description}</p>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
