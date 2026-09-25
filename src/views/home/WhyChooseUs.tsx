import { useTranslation } from "../../intl/useTranslation";
import { Reveal } from "./Reveal";

const benefits = [
  {
    image: "/images/why-choose-us/agility.png",
    imageClassName: "h-[234px] w-[185px]",
    title: "Agility & Efficiency",
    description: "Fast, scalable, and high-performance software development.",
  },
  {
    image: "/images/why-choose-us/innovation.png",
    imageClassName: "h-[244px] w-[198px] rotate-[11deg]",
    title: "Innovative Solutions",
    description: "Cutting-edge technology tailored to your business needs.",
  },
  {
    image: "/images/why-choose-us/global.png",
    imageClassName: "h-[215px] w-[216px]",
    title: "Global Expertise",
    description: "Trusted by clients in Brazil, the US, and Turkey.",
  },
];

export default function WhyChooseUs() {
  const t = useTranslation();

  return (
    <section
      id="why-choose-us"
      className="relative z-10 overflow-hidden bg-[#000003] px-5 pb-8 sm:px-8 lg:min-h-[700px] lg:px-12"
    >
      <div className="section-gradient-line pointer-events-none absolute top-0 left-1/2 w-[min(1088px,100%)] -translate-x-1/2" />
      <div className="relative mx-auto max-w-[1104px]">
        <div className="relative h-16">
          <p className="font-tight absolute top-8 left-1/2 flex -translate-x-1/2 items-center justify-center gap-1.5 text-center text-xs font-normal tracking-[-0.12px] whitespace-nowrap text-zinc-100 uppercase lg:text-base">
            <span aria-hidden="true">マ</span>
            <span className="size-[3px] rounded-full bg-zinc-100" />
            {t("Why choose us")}
          </p>
        </div>

        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-[306px_306px_306px] lg:justify-between lg:gap-0">
          {benefits.map((benefit, index) => (
            <Reveal
              className="relative flex min-h-[320px] flex-col items-start"
              key={benefit.title}
              delay={index * 0.1}
            >
              {index > 0 && (
                <div className="absolute top-0 -left-[47px] hidden h-[340px] w-px bg-linear-to-b from-transparent via-white/10 to-transparent lg:block" />
              )}
              <div className="flex h-[273px] w-full items-center justify-center">
                <img
                  alt=""
                  className={`${benefit.imageClassName} object-contain`}
                  src={benefit.image}
                />
              </div>
              <div className="mt-8 max-w-[306px]">
                <h2 className="font-dm text-xl font-semibold tracking-[-0.2px] text-white lg:text-2xl">
                  {t(benefit.title)}
                </h2>
                <p className="font-dm mt-5 text-sm leading-6 text-zinc-300 lg:text-base">
                  {t(benefit.description)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
