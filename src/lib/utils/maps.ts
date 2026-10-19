import { siteConfig } from "@/content/site";

const query = encodeURIComponent(siteConfig.address.mapQuery);

export const mapEmbedUrl = `https://www.google.com/maps?q=${query}&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
