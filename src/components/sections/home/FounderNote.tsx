import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HighlightGrid } from "@/components/ui/HighlightGrid";
import { WaveMotif } from "@/components/ui/motif/WaveMotif";
import { academyValues } from "@/content/academy";
import { siteConfig } from "@/content/site";
import { getInitials } from "@/lib/utils/format";
import styles from "./FounderNote.module.css";

export function FounderNote() {
  return (
    <section className={styles.section}>
      <div className={styles.wave}>
        <WaveMotif />
      </div>
      <div className="container-x relative py-section">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-accent-bright">Our approach</p>
          <h2 className="mt-6 text-display-lg text-white">
            Classical discipline, <em className="text-accent-bright">applied to the music you love.</em>
          </h2>
        </Reveal>

        <HighlightGrid items={academyValues} tone="light" className="mt-14 lg:grid-cols-3" />

        <Reveal className="mt-14 flex flex-col gap-8 border-t border-line-light pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-full bg-accent font-display text-[1.5rem] text-white">
              {getInitials(siteConfig.founder)}
            </span>
            <div>
              <p className="text-[16px] font-medium text-white">{siteConfig.founder}</p>
              <p className="text-[14px] text-white/55">Founder & teacher, {siteConfig.name}</p>
            </div>
          </div>
          <ButtonLink href="/about" variant="ghost-light">
            About the academy
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
