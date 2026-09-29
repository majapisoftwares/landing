import type { CaseStudy } from "../types";

export const pulseCase: CaseStudy = {
  slug: "pulse",
  name: "Pulse Software",
  subtitle: "Home Care · Management Software",
  tags: ["Strategy", "UX/UI", "Development", "Digital Product"],
  cardImage: "/images/cases/pulse/hero-raw-2.png",
  heroImage: "/images/cases/pulse/hero-raw-1.png",
  previewLogoClassName:
    "size-24 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]",
  heroLogo: "/images/cases/pulse/pulse-mark.svg",
  heroLogoClassName: "intrinsic",
  heroOverlayOpacity: "56",
  heroAspect: "wide",
  description:
    "Pulse was developed for a hospital transport company to digitize and organize essential operational processes in a single platform.",
  sections: [
    {
      title: "About the project",
      paragraphs: [
        "Pulse was developed for a hospital transport company to digitize and organize essential operational processes in a single platform.",
        "We created the entire product experience to balance the complexity of healthcare management with a simple, clear, and efficient interface for everyday use.",
      ],
    },
    {
      title: "Challenges",
      paragraphs: [
        "Hospital transport operations involve different teams, information, documents, and processes that need to remain accessible and up to date.",
      ],
    },
    {
      title: "Result",
      paragraphs: [
        "We developed centralized software to support operations management, organize information, and make workflows faster and safer.",
        "The result is a platform designed to follow the company's routine and support decision-making for everyone involved in care and management.",
      ],
    },
  ],
  gallery: [
    "/images/cases/pulse/gallery-01-raw-1.png",
    "/images/cases/pulse/gallery-02-raw-1.png",
    "/images/cases/pulse/gallery-03-raw-1.png",
  ],
};
