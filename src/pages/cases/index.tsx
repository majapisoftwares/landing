import Link from "next/link";
import type { ReactNode } from "react";
import getLayout from "../../views/layout/layout";
import { cases } from "../../views/cases";
import { useTranslation } from "../../intl/useTranslation";
import Routes from "../../routes";

export default function CasesPage() {
  const t = useTranslation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000003] px-4 pt-32 pb-28 text-white sm:px-8 sm:pt-40">
      <div className="hero-background-texture pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-80" />
      <main className="relative z-10 mx-auto w-full max-w-[1104px]">
        <header className="mx-auto mb-12 max-w-[560px] text-center">
          <h1 className="font-sora text-4xl tracking-[-1.5px] text-zinc-100 sm:text-5xl">
            Cases
          </h1>
          <p className="mt-4 font-inter text-base leading-7 text-zinc-400">
            {t(
              "Projects where strategy, design, and technology come together to create consistent results.",
            )}
          </p>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={Routes.Case(caseStudy.slug)}
              locale={false}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[rgba(5,5,5,0.31)] p-2 transition-transform duration-200 hover:-translate-y-1"
            >
              <img
                src={caseStudy.cardImage}
                alt=""
                className="aspect-[1.45] w-full rounded-lg object-cover"
              />
              <div className="p-4">
                <h2 className="font-dm text-xl text-zinc-100">
                  {t(caseStudy.name)}
                </h2>
                <p className="mt-1 font-dm text-sm leading-5 text-zinc-400">
                  {t(caseStudy.description)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

CasesPage.getLayout = (page: ReactNode) => getLayout(page);
