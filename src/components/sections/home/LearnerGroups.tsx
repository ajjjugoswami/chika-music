import { ImageTile } from "@/components/ui/ImageTile";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { learnerGroups } from "@/content/academy";
import { getImage } from "@/lib/data/images";

export function LearnerGroups() {
  return (
    <section className="container-x py-section">
      <SectionIntro
        label="Who we teach"
        title={
          <>
            Five or fifty-five — <em>start where you are.</em>
          </>
        }
        description="Lessons are tailored to age, experience and the kind of music you want to make."
      />
      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 lg:grid-cols-4">
        {learnerGroups.map((group, index) => (
          <ImageTile
            key={group.title}
            image={getImage(group.imageId)}
            title={group.title}
            description={group.description}
            label={String(index + 1).padStart(2, "0")}
            sizes="(min-width: 1024px) 25vw, 50vw"
            delay={index * 0.08}
            className="aspect-3/4 lg:aspect-4/5"
          />
        ))}
      </div>
    </section>
  );
}
