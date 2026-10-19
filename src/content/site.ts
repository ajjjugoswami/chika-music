import type { NavItem, SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Future Music Academy",
  shortName: "Future Music",
  tagline: "When words fail, music speaks",
  description:
    "Guitar, piano, harmonium and vocal classes in Model Town, Rohtak. Personal coaching for children and adults by Chika Gochwal. Admissions open.",
  url: "https://futuremusicacademy.in",
  founder: "Chika Gochwal",
  contactFormSrc: "https://forms.daorbit.in/form/6ad5e6dff45d3b66ce14df2e/view",
  contact: {
    phoneDisplay: "+91 70563 50917",
    phoneE164: "+917056350917",
    whatsappNumber: "917056350917",
    email: "hello@futuremusicacademy.in",
  },
  address: {
    locality: "Model Town",
    city: "Rohtak",
    region: "Haryana",
    postalCode: "124001",
    country: "IN",
    mapQuery: "Model Town, Rohtak, Haryana",
  },
  hours: [
    { days: "Monday – Saturday", time: "10:00 am – 8:00 pm" },
    { days: "Sunday", time: "10:00 am – 2:00 pm" },
  ],
  social: {
    instagram: { url: "https://www.instagram.com/chika_gochhwall/", handle: "@chika_gochhwall" },  },
};

export const analyticsConfig = {
  trackerSrc: "https://quantalog-be.daorbit.in/tracker.js",
  siteId: "o7K3OVNNMLmjhANp",
};

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Fees & FAQ", href: "/fees" },
  { label: "Contact", href: "/contact" },
];

export const mobileNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Fees & FAQ", href: "/fees" },
  { label: "Contact", href: "/contact" },
  { label: "Book a trial", href: "/book-trial" },
];
