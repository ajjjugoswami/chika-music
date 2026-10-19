import { siteConfig } from "@/content/site";
import type { Course } from "@/types/course";
import type { Faq } from "@/types/site";

export function musicSchoolSchema(siteUrl: string) {
  const { address, contact } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": ["MusicSchool", "LocalBusiness"],
    "@id": `${siteUrl}/#academy`,
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    url: siteUrl,
    telephone: contact.phoneE164,
    founder: { "@type": "Person", name: siteConfig.founder },
    address: {
      "@type": "PostalAddress",
      addressLocality: `${address.locality}, ${address.city}`,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    areaServed: { "@type": "City", name: address.city },
    knowsAbout: ["Guitar", "Piano", "Harmonium", "Vocal music", "Hindustani classical music"],
  };
}

export function courseSchema(course: Course, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.name} classes`,
    description: course.description,
    url: `${siteUrl}/courses/${course.slug}`,
    provider: { "@type": "MusicSchool", "@id": `${siteUrl}/#academy`, name: siteConfig.name },
    educationalLevel: "Beginner to Advanced",
    hasCourseInstance: course.modes.map((mode) => ({
      "@type": "CourseInstance",
      courseMode: mode === "online" ? "Online" : "Onsite",
      location: mode === "online" ? undefined : `${siteConfig.address.locality}, ${siteConfig.address.city}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[], siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
