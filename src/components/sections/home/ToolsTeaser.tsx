import { AudioLines, Piano, Timer } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { EqualizerBars } from "./hero/EqualizerBars";
import { MiniKeys } from "./hero/MiniKeys";
import { BeatPulse } from "./tools-teaser/BeatPulse";
import { ToolPreview } from "./tools-teaser/ToolPreview";

export function ToolsTeaser() {
  return (
    <section className="container-x py-section">
      <Reveal className="grid gap-8 overflow-hidden rounded-panel border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-12 lg:p-14">
        <div>
          <p className="eyebrow inline-flex items-center gap-2 text-accent-text">
            <span aria-hidden className="size-1.5 rounded-full bg-current" />
            Free for everyone
          </p>
          <h2 className="mt-4 text-display-lg">
            Practise at home <em>with our free tools.</em>
          </h2>
          <p className="mt-4 max-w-md text-lead text-muted">
            A tanpura, metronome and sargam keyboard in your browser. No app to install — open on your phone and start
            your riyaz.
          </p>
          <ButtonLink href="/tools" className="mt-8">
            Open practice tools
          </ButtonLink>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <ToolPreview icon={AudioLines} title="Tanpura drone" meta="Sa in any key" className="sm:row-span-2">
            <div className="flex h-24 items-end justify-center sm:h-full sm:min-h-40">
              <span className="scale-[2.5] sm:scale-[3.5]">
                <EqualizerBars />
              </span>
            </div>
          </ToolPreview>
          <ToolPreview icon={Timer} title="Metronome" meta="40–220 BPM">
            <BeatPulse />
          </ToolPreview>
          <ToolPreview icon={Piano} title="Sargam keyboard" meta="Shuddh & komal swar">
            <MiniKeys />
          </ToolPreview>
        </div>
      </Reveal>
    </section>
  );
}
