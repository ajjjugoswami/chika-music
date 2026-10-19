import { getImage } from "@/lib/data/images";
import { EqualizerBars } from "./EqualizerBars";
import { FloatingNotes } from "./FloatingNotes";
import { GuitarIllustration } from "./GuitarIllustration";
import styles from "./HeroStage.module.css";
import { InstrumentChip } from "./InstrumentChip";
import { MiniKeys } from "./MiniKeys";

export function HeroStage() {
  return (
    <div className={`rise rise-2 ${styles.stage}`}>
      <div aria-hidden className={styles.rings}>
        <span />
        <span />
        <span />
      </div>

      <div className={styles.guitar}>
        <GuitarIllustration className={styles.guitarSvg} />
      </div>
      <FloatingNotes className={styles.notes} />

      <InstrumentChip
        href="/courses/piano"
        label="Piano"
        meta="Ages 5+"
        image={getImage("piano-02")}
        className={`${styles.chip} ${styles.chipPiano}`}
      />
      <InstrumentChip
        href="/courses/harmonium"
        label="Harmonium"
        meta="Raag & bhajan"
        image={getImage("harmonium-hero")}
        className={`${styles.chip} ${styles.chipHarmonium}`}
      />
      <InstrumentChip
        href="/courses/vocal"
        label="Vocal"
        meta="Sur & taal"
        image={getImage("vocal-01")}
        className={`${styles.chip} ${styles.chipVocal}`}
      />

      <div className={styles.nowPlaying}>
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-medium text-muted">Today&apos;s riyaz</p>
            <p className="text-[14px] font-semibold tracking-[-0.01em] whitespace-nowrap">Raag Yaman</p>
          </div>
          <EqualizerBars />
        </div>
        <MiniKeys className="mt-3" />
      </div>
    </div>
  );
}
