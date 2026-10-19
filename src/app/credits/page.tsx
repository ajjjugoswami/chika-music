import { PageHeader } from "@/components/ui/PageHeader";
import { PageBreadcrumbJsonLd } from "@/components/ui/PageBreadcrumbJsonLd";
import { audioCredits } from "@/content/audio";
import { getImageCredits } from "@/lib/data/images";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Photo Credits",
  description: "Credits and licenses for the photographs used on the Future Music Academy website.",
  path: "/credits",
});

export default function CreditsPage() {
  const credits = getImageCredits();

  return (
    <>
      <PageHeader
        eyebrow="Credits"
        title="Photo credits"
        description="Thank you to the photographers whose work appears on this site."
      />
      <section className="container-x pb-section">
        <div className="overflow-x-auto rounded-card border border-line bg-card">
          <table className="w-full min-w-[40rem] text-left text-[14px]">
            <thead className="border-b border-line text-[12.5px] text-muted">
              <tr>
                <th scope="col" className="p-4 font-medium">Photo</th>
                <th scope="col" className="p-4 font-medium">Photographer</th>
                <th scope="col" className="p-4 font-medium">Source</th>
                <th scope="col" className="p-4 font-medium">License</th>
              </tr>
            </thead>
            <tbody>
              {credits.map((credit) => (
                <tr key={credit.imageId} className="border-b border-line last:border-b-0">
                  <td className="p-4">
                    <a href={credit.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent-text">
                      {credit.title}
                    </a>
                  </td>
                  <td className="p-4 text-ink-soft">{credit.photographer}</td>
                  <td className="p-4 text-ink-soft">{credit.source}</td>
                  <td className="p-4 text-ink-soft">{credit.license}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-display-md">Music</h2>
        <ul className="mt-6 divide-y divide-line rounded-card border border-line bg-card text-[14px]">
          {audioCredits.map((credit) => (
            <li key={credit.url} className="flex flex-wrap items-center justify-between gap-2 p-4">
              <a href={credit.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent-text">
                {credit.title} — {credit.creator}
              </a>
              <span className="text-ink-soft">
                {credit.source} · {credit.license}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <PageBreadcrumbJsonLd name="Photo credits" path="/credits" />
    </>
  );
}
