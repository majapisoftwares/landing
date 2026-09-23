"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cases } from "../cases";
import { useTranslation } from "../../intl/useTranslation";
import Routes from "../../routes";
export default function CaseStudies() {
  const t = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateControls = () => {
      const maximumScroll = carousel.scrollWidth - carousel.clientWidth;
      setCanGoPrevious(carousel.scrollLeft > 1);
      setCanGoNext(carousel.scrollLeft < maximumScroll - 1);
    };

    updateControls();
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(carousel);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const scrollCases = (direction: "previous" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollDistance = Math.min(carousel.clientWidth * 0.82, 376);

    carousel.scrollBy({
      left: (direction === "next" ? 1 : -1) * scrollDistance,
      behavior: "smooth",
    });
  };

  const updateControls = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maximumScroll = carousel.scrollWidth - carousel.clientWidth;
    setCanGoPrevious(carousel.scrollLeft > 1);
    setCanGoNext(carousel.scrollLeft < maximumScroll - 1);
  };

  return (
    <section
      id="cases"
      className="relative z-10 bg-[#000003] px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex w-full max-w-[1104px] flex-col gap-16">
        <div className="relative h-16">
          <div className="section-gradient-line pointer-events-none absolute top-0 left-1/2 w-[min(1088px,100%)] -translate-x-1/2" />
          <div className="absolute top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap">
            <span className="font-dm text-[16.695px] text-zinc-100">マ</span>
            <img
              src="/images/services/section-dot.svg"
              alt=""
              className="size-[3px]"
            />
            <span className="font-tight text-base leading-8 text-white uppercase">
              Cases
            </span>
          </div>
        </div>

        <div
          className="cases-carousel relative w-full"
          role="region"
          aria-label={t("Cases at Majapi")}
        >
          <div
            ref={carouselRef}
            onScroll={updateControls}
            className="cases-carousel-track flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2"
          >
            {cases.map((item) => (
              <Link
                key={item.name}
                href={Routes.Case(item.slug)}
                locale={false}
                className="shrink-0 snap-start pr-6 last:pr-0"
              >
                <div className="relative flex h-[440px] w-[min(352px,calc(100vw-4.25rem))] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[rgba(5,5,5,0.31)] p-2 shadow-[0_42px_25px_rgba(0,0,0,0.05),0_5px_10px_rgba(0,0,0,0.1)] sm:w-[min(352px,calc(100vw-2rem))]">
                  <div className="relative h-[240px] shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={item.cardImage}
                      alt={`${t("Open case")} ${t(item.name)}`}
                      className="size-full object-cover"
                    />
                    {item.logo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                        {item.name === "Trackfy" ? (
                          <div className="flex items-center gap-2 text-white drop-shadow-lg">
                            <img src={item.logo} alt="" className="size-9" />
                            <span className="font-dm text-[40px] leading-none font-medium">
                              trackfy
                            </span>
                          </div>
                        ) : (
                          <img
                            src={item.logo}
                            alt={t("Kawasaki Consortium")}
                            className="w-[258px]"
                          />
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-1 p-4">
                    <h2 className="font-dm text-[22px] leading-[1.5] text-zinc-100">
                      {t(item.name)}
                    </h2>
                    <p className="font-dm text-sm leading-5 tracking-[-0.28px] text-[#929292]">
                      {t(item.description)}
                    </p>
                    <div className="mt-auto flex gap-2 pt-3">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-dm flex h-[38px] flex-1 items-center justify-center rounded-full bg-[#09090b] px-2.5 py-2 text-center text-sm leading-5 tracking-[-0.28px] text-[#929292]"
                        >
                          {t(tag)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollCases("previous")}
            aria-label={t("See previous cases")}
            disabled={!canGoPrevious}
            className="absolute top-1/2 left-3 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white shadow-lg backdrop-blur-sm transition-[background-color,scale,opacity] duration-150 hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-96 disabled:pointer-events-none disabled:opacity-30 xl:-left-20"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5 fill-none stroke-current"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollCases("next")}
            aria-label={t("See next cases")}
            disabled={!canGoNext}
            className="absolute top-1/2 right-3 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-white shadow-lg backdrop-blur-sm transition-[background-color,scale,opacity] duration-150 hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-96 disabled:pointer-events-none disabled:opacity-30 xl:-right-20"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5 fill-none stroke-current"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
