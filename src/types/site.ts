export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  founder: string;
  contactFormSrc: string;
  contact: {
    phoneDisplay: string;
    phoneE164: string;
    whatsappNumber: string;
    email: string;
  };
  address: {
    locality: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    mapQuery: string;
  };
  hours: { days: string; time: string }[];
  social: {
    instagram: { url: string; handle: string };  };
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface ImageHighlight extends Highlight {
  imageId: string;
}
