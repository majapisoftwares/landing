import { kawasakiCase } from "./kawasaki";
import { nissanCase } from "./nissan";
import { numaCase } from "./numa";
import { pulseCase } from "./pulse";
import { renaultCase } from "./renault";
import { sailorCase } from "./sailor";
import { trackfyCase } from "./trackfy";
import type { CaseStudy } from "./types";

export const cases: CaseStudy[] = [
  numaCase,
  pulseCase,
  kawasakiCase,
  trackfyCase,
  renaultCase,
  nissanCase,
  sailorCase,
];

export function getCaseBySlug(slug: string) {
  return cases.find((caseStudy) => caseStudy.slug === slug);
}

export type { CaseStudy } from "./types";
