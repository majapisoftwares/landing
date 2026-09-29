import type { CaseStudy } from "../types";

export const sailorCase: CaseStudy = {
  slug: "sailor",
  name: "Sailor Software",
  subtitle: "Finance · Management Platform",
  tags: ["Strategy", "UX/UI", "Development", "Digital Product"],
  cardImage: "/images/cases/sailor/hero.png",
  heroImage: "/images/cases/sailor/hero.png",
  logo: "/images/clients/ancora.svg",
  heroLogo: "/images/clients/ancora.svg",
  heroLogoClassName: "brightness-0 invert",
  heroOverlayOpacity: "56",
  heroAspect: "wide",
  description:
    "A complete platform to centralize and organize vehicle recovery operations.",
  sections: [
    {
      title: "About the project",
      paragraphs: [
        "Sailor was developed for a company in the financial sector with the goal of centralizing and organizing the entire vehicle recovery operation in a single platform.",
        "We created a complete system to connect information, processes, and teams, bringing more control and clarity to an operation involving different stages and owners.",
      ],
    },
    {
      title: "Challenges",
      paragraphs: [
        "Vehicle recovery requires constant monitoring, up-to-date information, and integration between different areas of the operation.",
        "Our challenge was to turn this complex flow into a simpler and more structured experience, allowing each user to quickly find what they need and clearly follow the progress of every case.",
      ],
    },
    {
      title: "Result",
      paragraphs: [
        "We developed a complete platform to manage the vehicle recovery process from end to end.",
        "The system centralizes information, organizes requests, tracks operational stages, and simplifies the management of financial and operational processes.",
        "Everything was designed to reduce rework, improve information visibility, and make the operation faster and more efficient.",
      ],
    },
  ],
  gallery: [
    "/images/cases/sailor/gallery-01.png",
    "/images/cases/sailor/gallery-02.png",
    "/images/cases/sailor/gallery-03.png",
  ],
};
