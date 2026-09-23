import type { CaseStudy } from "../types";

export const kawasakiCase: CaseStudy = {
  slug: "kawasaki",
  name: "Kawasaki Consortium",
  subtitle: "Simple and fast consortium",
  tags: ["Strategy", "UX/UI", "Development", "Digital Product"],
  cardImage: "/images/cases/kawasaki/hero-background.png",
  heroImage: "/images/cases/kawasaki/hero-overlay-source.png",
  heroLogo: "/images/cases/kawasaki/hero-logo.svg",
  heroAspect: "wide",
  description:
    "We created a new digital experience for Kawasaki Consortium, allowing customers to simulate, choose, and purchase their consortium plan entirely online.",
  sections: [
    {
      title: "About the project",
      paragraphs: [
        "We created a new digital experience for Kawasaki Consortium, allowing customers to simulate, choose, and purchase their consortium plan entirely online.",
        "The project was designed to turn a traditionally bureaucratic process into a simpler, clearer, and faster journey.",
      ],
    },
    {
      title: "Challenges",
      paragraphs: [
        "Joining a consortium involves a lot of information, steps, and important decisions.",
        "Our challenge was to organize all this complexity into an intuitive experience, reducing friction and making it clear what happens at each stage of the purchase.",
      ],
    },
    {
      title: "Result",
      paragraphs: [
        "We developed a complete purchase portal, with a guided journey from plan selection to proposal completion.",
        "Each step was designed to build trust, make decision-making easier, and allow users to complete the entire process digitally without relying on in-person service.",
      ],
    },
  ],
  gallery: [
    "/images/cases/kawasaki/gallery-01.png",
    "/images/cases/kawasaki/gallery-02.png",
    "/images/cases/kawasaki/gallery-03.png",
    "/images/cases/kawasaki/gallery-04.png",
  ],
};
