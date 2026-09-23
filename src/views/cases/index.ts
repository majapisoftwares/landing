import { kawasakiCase } from "./kawasaki";
import { nissanCase } from "./nissan";
import { numaCase } from "./numa";
import { renaultCase } from "./renault";
import { trackfyCase } from "./trackfy";
import type { CaseStudy } from "./types";

export const cases: CaseStudy[] = [
  numaCase,
  kawasakiCase,
  trackfyCase,
  renaultCase,
  nissanCase,
];

export function getCaseBySlug(slug: string) {
  return cases.find((caseStudy) => caseStudy.slug === slug);
}

export type { CaseStudy } from "./types";
