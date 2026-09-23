import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import type { ReactNode } from "react";
import getLayout from "../../views/layout/layout";
import CasePage from "../../views/cases/CasePage";
import { cases, getCaseBySlug } from "../../views/cases";

type Params = { slug: string };

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: cases.map((caseStudy) => ({ params: { slug: caseStudy.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  { caseStudy: (typeof cases)[number] },
  Params
> = async ({ params }) => {
  const caseStudy = getCaseBySlug(params?.slug ?? "");

  if (!caseStudy) {
    return { notFound: true };
  }

  return { props: { caseStudy } };
};

export default function CaseDetailPage({
  caseStudy,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CasePage caseStudy={caseStudy} />;
}

CaseDetailPage.getLayout = (page: ReactNode) => getLayout(page);
