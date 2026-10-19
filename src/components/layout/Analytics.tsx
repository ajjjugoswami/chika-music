import Script from "next/script";
import { analyticsConfig } from "@/content/site";

export function Analytics() {
  return <Script src={analyticsConfig.trackerSrc} data-site={analyticsConfig.siteId} strategy="afterInteractive" />;
}
