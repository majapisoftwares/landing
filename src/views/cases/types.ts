export type CaseSection = {
  title: string;
  paragraphs: string[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  subtitle: string;
  tags: string[];
  cardImage: string;
  heroImage: string;
  logo?: string;
  previewLogoClassName?: string;
  heroLogo?: string;
  heroLogoClassName?: string;
  heroWordmark?: string;
  heroOverlayOpacity?: "40" | "56" | "76";
  heroAspect?: "square" | "wide";
  description: string;
  sections: CaseSection[];
  gallery: string[];
};
