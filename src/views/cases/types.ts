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
  heroLogo?: string;
  heroWordmark?: string;
  heroOverlayOpacity?: "40" | "76";
  heroAspect?: "square" | "wide";
  description: string;
  sections: CaseSection[];
  gallery: string[];
};
