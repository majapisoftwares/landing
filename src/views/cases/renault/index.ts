import type { CaseStudy } from "../types";

export const renaultCase: CaseStudy = {
  slug: "renault",
  name: "Renault Consortium",
  subtitle: "Digital experience",
  tags: ["Strategy", "UX/UI", "Development", "Digital Product"],
  cardImage: "/images/cases/renault/renault.png",
  heroImage: "/images/cases/renault/hero.png",
  heroAspect: "wide",
  description:
    "We created an interactive digital experience to showcase Renault vehicles and bring users closer to the possibilities of joining the consortium.",
  sections: [
    {
      title: "About the project",
      paragraphs: [
        "We created an interactive digital experience to showcase Renault vehicles and bring users closer to the possibilities of joining the consortium.",
        "The portal combines product discovery, model information, and access to a simulation in a simple and visual journey.",
      ],
    },
    {
      title: "Challenges",
      paragraphs: [
        "Our challenge was to transform a traditional vehicle showcase into a more engaging experience, making it easier to explore models and naturally guiding users toward interest in the consortium.",
      ],
    },
    {
      title: "Result",
      paragraphs: [
        "We developed an interactive page where users can learn about Renault vehicles, explore their main features, access more information, and start a consortium simulation quickly and intuitively.",
        "The experience was designed to highlight each model and create a smooth transition between discovery, consideration, and simulation.",
      ],
    },
  ],
  gallery: [
    "/images/cases/renault/gallery-01.png",
    "/images/cases/renault/gallery-02.png",
    "/images/cases/renault/gallery-03.png",
  ],
};
