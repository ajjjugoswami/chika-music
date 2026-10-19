import { siteConfig } from "@/content/site";

export function buildWhatsAppMessageLink(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppLink(subject?: string) {
  return buildWhatsAppMessageLink(
    subject
      ? `Hi ${siteConfig.name}! I'd like to know more about ${subject} classes.`
      : `Hi ${siteConfig.name}! I'd like to know more about your music classes.`,
  );
}
