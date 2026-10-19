import { AboutStory } from "@/components/sections/about/AboutStory";
import { PageBreadcrumbJsonLd } from "@/components/ui/PageBreadcrumbJsonLd";
import { LearningPath } from "@/components/sections/home/LearningPath";
import { TrialCta } from "@/components/sections/shared/TrialCta";
import { NumberedList } from "@/components/ui/NumberedList";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { academyValues } from "@/content/academy";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "About the Academy",
  description: `${siteConfig.name} in Model Town, Rohtak, founded by ${siteConfig.founder}. Personal music coaching in guitar, piano, harmonium and vocal.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            {siteConfig.tagline.split(",")[0]}, <em>music speaks.</em>
          </>
        }
        description={`${siteConfig.name} is a music academy in ${siteConfig.address.locality}, ${siteConfig.address.city}, teaching students of every age to play, sing and perform.`}
      />
      <AboutStory />
      <section className="border-y border-line bg-surface">
        <div className="container-x py-section">
          <SectionIntro label="What we believe" title="Three things guide every lesson." />
          <NumberedList items={academyValues} columns={3} className="mt-10 sm:mt-12" />
        </div>
      </section>
      <LearningPath />
      <TrialCta />
      <PageBreadcrumbJsonLd name="About" path="/about" />
    </>
  );
}
