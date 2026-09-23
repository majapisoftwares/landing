import Link from "next/link";
import type { CaseStudy } from "./types";
import Routes from "../../routes";
import { useTranslation } from "../../intl/useTranslation";

function CaseTags({ tags }: { tags: string[] }) {
  const t = useTranslation();

  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-[#09090b] px-[9px] py-2 font-sora text-[13px] leading-[19px] text-[#929292]"
        >
          {t(tag)}
        </span>
      ))}
    </div>
  );
}

export default function CasePage({ caseStudy }: { caseStudy: CaseStudy }) {
  const t = useTranslation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000003] text-white">
      <div className="hero-background-texture pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-80" />

      <main className="relative z-10 px-4 pt-32 pb-28 sm:px-6 sm:pt-36 lg:pt-40">
        <article className="mx-auto flex w-full max-w-[640px] flex-col items-center">
          <header className="mb-5 flex flex-col items-center gap-2 text-center">
            <h1 className="font-sora text-[36px] leading-[1.16] font-bold tracking-[-1.08px] text-zinc-100">
              {t(caseStudy.name)}
            </h1>
            <p className="font-sora text-sm leading-[22px] text-white">
              {t(caseStudy.subtitle)}
            </p>
            <CaseTags tags={caseStudy.tags} />
          </header>

          <figure className="w-full overflow-hidden rounded-[24px] border border-zinc-900 bg-zinc-950 p-3 shadow-[0_0_0_5px_rgba(255,255,255,0.02),0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="relative overflow-hidden rounded-[8px]">
              <img
                src={caseStudy.heroImage}
                alt={`${t("Main image for case")} ${t(caseStudy.name)}`}
                className={`block w-full object-cover ${caseStudy.heroAspect === "wide" ? "aspect-[1.304]" : "aspect-square"}`}
              />
              {(caseStudy.heroLogo || caseStudy.heroWordmark) && (
                <div
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center ${caseStudy.heroOverlayOpacity === "76" ? "bg-black/[0.76]" : "bg-black/40"}`}
                >
                  {caseStudy.heroWordmark ? (
                    <div className="flex items-center gap-2">
                      {caseStudy.heroLogo && (
                        <img
                          src={caseStudy.heroLogo}
                          alt=""
                          className="h-[61px] w-[53px]"
                        />
                      )}
                      <span className="font-sora text-5xl leading-none font-semibold tracking-[-2px] text-white sm:text-[64px] sm:tracking-[-3px]">
                        {caseStudy.heroWordmark}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={caseStudy.heroLogo}
                      alt=""
                      className="w-[44%] max-w-[244px]"
                    />
                  )}
                </div>
              )}
            </div>
          </figure>

          <div className="mt-5 w-full space-y-5">
            {caseStudy.sections.length > 0 ? (
              caseStudy.sections.map((section) => (
                <section key={section.title} className="space-y-2.5">
                  <h2 className="font-sora text-lg leading-6 font-bold tracking-[-0.54px] text-zinc-100">
                    {t(section.title)}
                  </h2>
                  <div className="space-y-2.5">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-sora text-sm leading-[22px] font-medium text-zinc-200"
                      >
                        {t(paragraph)}
                      </p>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <section className="space-y-2.5">
                <h2 className="font-sora text-lg leading-6 font-bold text-zinc-100">
                  {t("About the project")}
                </h2>
                <p className="font-sora text-sm leading-[22px] font-medium text-zinc-200">
                  {t(caseStudy.description)}
                </p>
              </section>
            )}
          </div>

          <section className="mt-6 w-full" aria-labelledby="gallery-title">
            <h2
              id="gallery-title"
              className="mb-2.5 font-sora text-lg leading-6 font-bold text-zinc-100"
            >
              {t("Gallery")}
            </h2>
            <div className="space-y-1">
              {(caseStudy.gallery.length > 0
                ? caseStudy.gallery
                : [caseStudy.heroImage]
              ).map((image, index) => (
                <figure
                  key={image}
                  className="aspect-[2.455] overflow-hidden rounded-[8px] border border-white/[0.08] bg-zinc-950"
                >
                  <img
                    src={image}
                    alt={`${t(caseStudy.name)} — ${t("image")} ${index + 1}`}
                    className="block size-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </figure>
              ))}
            </div>
          </section>

          <Link
            href={Routes.Cases}
            className="mt-9 rounded-full border border-white/15 px-4 py-2 font-sora text-xs text-zinc-300 transition-colors hover:border-white/35 hover:text-white"
          >
            {t("Back to cases")}
          </Link>
        </article>
      </main>
    </div>
  );
}
