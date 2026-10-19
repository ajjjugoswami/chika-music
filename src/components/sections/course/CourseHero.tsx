import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { RevealImage } from "@/components/motion/RevealImage";
import { AppImage } from "@/components/ui/AppImage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LevelRange } from "@/components/ui/LevelRange";
import { CLASS_LOCATION } from "@/lib/data/courses";
import { getImage } from "@/lib/data/images";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import type { Course } from "@/types/course";
import { CourseFacts } from "./CourseFacts";

export function CourseHero({ course }: { course: Course }) {
  const [first, second] = course.galleryImageIds.map(getImage);

  return (
    <section className="container-x grid gap-12 pt-8 pb-16 md:pt-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:pb-20">
      <div>
        <nav aria-label="Breadcrumb" className="rise rise-1 flex items-center gap-1.5 text-[13px] text-muted">
          <Link href="/courses" className="hover:text-ink">
            Courses
          </Link>
          <ChevronRight aria-hidden className="size-3.5 text-faint" />
          <span aria-current="page" className="text-ink">
            {course.name}
          </span>
        </nav>
        <h1 className="rise rise-2 mt-5 text-display-2xl">
          {course.name} <em>classes</em>
        </h1>
        <p className="rise rise-3 mt-5 max-w-xl text-[1.25rem] leading-snug font-medium tracking-[-0.02em]">
          {course.tagline}
        </p>
        <p className="rise rise-3 mt-4 max-w-xl text-[16px] leading-relaxed text-muted">{course.description}</p>
        <div className="rise rise-4 mt-8 flex flex-wrap gap-2.5">
          <ButtonLink href={`/book-trial?course=${course.slug}`}>Book a {course.name.toLowerCase()} trial</ButtonLink>
          <ButtonLink
            href={buildWhatsAppLink(course.name)}
            external
            variant="outline"
            icon={<FaWhatsapp className="size-4 text-[#25d366]" />}
          >
            Ask about fees
          </ButtonLink>
        </div>
        <CourseFacts
          className="rise rise-5 mt-10"
          facts={[
            { label: "Start from", value: `Age ${course.minAge}` },
            { label: "Levels", value: <LevelRange /> },
            { label: "Where", value: CLASS_LOCATION },
          ]}
        />
      </div>

      <div className="grid grid-cols-[1.4fr_1fr] gap-3">
        <RevealImage onLoad className="row-span-2 aspect-3/4 rounded-panel bg-surface">
          <AppImage image={getImage(course.heroImageId)} sizes="(min-width: 1024px) 30vw, 60vw" preload />
        </RevealImage>
        {[first, second].map((image, index) => (
          <RevealImage key={image.src} onLoad delay={0.15 + index * 0.12} className="rounded-card bg-surface">
            <AppImage image={image} sizes="(min-width: 1024px) 20vw, 40vw" />
          </RevealImage>
        ))}
      </div>
    </section>
  );
}
