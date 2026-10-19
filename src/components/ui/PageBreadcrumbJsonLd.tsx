import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { getSiteUrl } from "@/lib/utils/siteUrl";
import { JsonLd } from "./JsonLd";

export function PageBreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name, path },
        ],
        getSiteUrl(),
      )}
    />
  );
}
