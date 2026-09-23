import { Reveal } from "../Reveal";
import { StackingCardItem, StackingCards } from "./StackingCards";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslation } from "../../../intl/useTranslation";

const process = [
  {
    title: "We understand",
    description:
      "We understand the business context, its goals, challenges, and opportunities. From there, we identify the right problem to solve and define project priorities.",
    image: "/images/process/discovery.png",
    imageWidth: 342,
    imageHeight: 447,
  },
  {
    title: "We plan",
    description:
      "We turn discovery insights into a clear execution plan, defining scope, features, priorities, timeline, and the product's technical direction.",
    image: "/images/process/planning.png",
    imageWidth: 308,
    imageHeight: 447,
  },
  {
    title: "We build",
    description:
      "We bring the project to life through design and development cycles, building a functional, scalable solution aligned with the real needs of users and the business.",
    image: "/images/process/development.png",
    imageWidth: 313,
    imageHeight: 299,
  },
  {
    title: "We evolve",
    description:
      "We prepare the product for launch, make the final adjustments, and monitor the first results to ensure consistent evolution after release.",
    image: "/images/process/launch.png",
    imageWidth: 119,
    imageHeight: 180,
  },
];

export function OurProcess() {
  const t = useTranslation();

  return (
    <section className="relative z-10 bg-[#000003] px-4 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1106px] flex-col">
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
              {t("Our process")}
            </span>
          </div>
        </div>

        <StackingCards
          totalCards={process.length}
          className="mt-16"
          aria-label={t("Stages of our process")}
        >
          {process.map((step, index) => {
            const isReversed = index % 2 === 1;

            return (
              <StackingCardItem key={step.title} index={index}>
                {(imageScale) => (
                  <Reveal
                    delay={index * 0.08}
                    className="mx-auto w-full max-w-[1111px]"
                  >
                    <article
                      className={`flex min-h-[250px] w-full items-center gap-8 rounded-[24px] border border-zinc-800 px-6 py-8 shadow-[0_4px_50px_rgba(14,15,12,0.06)] backdrop-blur-xl md:gap-14 md:px-[61px] md:py-[31px] ${
                        isReversed
                          ? "flex-col md:flex-row-reverse md:text-right"
                          : "flex-col md:flex-row md:text-left"
                      }`}
                    >
                      <div className="flex h-[132px] w-fit shrink-0 items-center justify-center overflow-visible md:h-[180px]">
                        <motion.div
                          className="flex h-full w-fit items-center justify-center"
                          style={{ scale: imageScale }}
                        >
                          <Image
                            src={step.image}
                            alt=""
                            width={step.imageWidth}
                            height={step.imageHeight}
                            className="h-full w-auto max-w-[200px] object-contain mix-blend-screen [mask-image:radial-gradient(circle_at_center,black_45%,transparent_78%)] drop-shadow-[0_4px_55px_rgba(255,255,255,0.27)]"
                          />
                        </motion.div>
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
                        <h2 className="font-sora text-[30px] leading-[1.15] font-semibold tracking-[-0.3px] text-white md:text-[36px] md:leading-[42px] md:tracking-[-0.36px]">
                          {t(step.title)}
                        </h2>
                        <p className="font-inter text-base leading-6 text-zinc-300 md:text-[18px] md:leading-[27px]">
                          {t(step.description)}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                )}
              </StackingCardItem>
            );
          })}
        </StackingCards>
      </div>
    </section>
  );
}
