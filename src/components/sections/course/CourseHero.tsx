import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CourseMotif } from "@/components/ui/motif/CourseMotif";
import { formatModes } from "@/lib/data/courses";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";
import type { Course } from "@/types/course";
import { CourseFacts } from "./CourseFacts";

export function CourseHero({ course }: { course: Course }) {
  return (
    <section className="container-x grid gap-12 pt-8 pb-16 md:pt-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:pb-24">
      <Reveal onLoad>
        <nav aria-label="Breadcrumb" className="text-[13.5px] text-muted">
          <Link href="/courses" className="hover:text-ink">
            Courses
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span aria-current="page" className="text-ink">
            {course.name}
          </span>
        </nav>
        <h1 className="mt-6 text-display-2xl">
          {course.name} <em>classes</em>
        </h1>
        <p className="mt-6 max-w-xl font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-snug">{course.tagline}</p>
        <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-muted">{course.description}</p>
        <div className="mt-9 flex flex-wrap gap-3">
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
      </Reveal>

      <Reveal onLoad delay={0.15}>
        <CourseMotif variant={course.motif} tone={course.tone} className="aspect-[4/3.6]" />
        <CourseFacts
          facts={[
            { label: "Age", value: `${course.minAge}+` },
            { label: "Levels", value: "3" },
            { label: "Mode", value: formatModes(course.modes) },
          ]}
        />
      </Reveal>
    </section>
  );
}
