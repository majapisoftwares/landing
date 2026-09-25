import { ServiceCard } from "./ServiceCard";
import { Reveal } from "../Reveal";
import { useTranslation } from "../../../intl/useTranslation";

const services = [
  {
    image: "/images/services/service-strategy.png",
    category: "Strategy",
    title: "Product Strategy",
    description:
      "We turn ideas into purposeful digital products. We combine business vision, research, and strategy to create solutions that generate real value.",
  },
  {
    image: "/images/services/service-development.png",
    category: "Technology",
    title: "Web Development",
    description:
      "We develop robust, scalable, high-performance digital products. Modern technology to turn strategy into results.",
  },
  {
    image: "/images/services/service-design.png",
    category: "Design",
    title: "Discovery & Design",
    description:
      "We create intuitive, elegant, and memorable digital experiences. Design that connects people, simplifies journeys, and strengthens brands.",
  },
  {
    image: "/images/services/service-ai.png",
    category: "Intelligence",
    title: "AI Solutions",
    description:
      "We turn ideas into purposeful digital products. We combine business vision, research, and strategy to create solutions that generate real value.",
  },
];

export function ServiceOverview() {
  const t = useTranslation();

  return (
    <section
      id="services"
      className="relative z-10 bg-[#000003] px-4 sm:px-8 lg:px-12"
      data-node-id="887:528"
    >
      <div className="mx-auto flex w-full max-w-[1104px] flex-col gap-16">
        <div className="relative h-16">
          <div className="section-gradient-line pointer-events-none absolute top-0 left-1/2 w-full -translate-x-1/2" />
          <div className="absolute top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap">
            <span className="font-dm text-[16.695px] leading-normal font-normal text-zinc-100">
              マ
            </span>
            <img
              src="/images/services/section-dot.svg"
              alt=""
              className="size-[3px] shrink-0"
            />
            <span className="font-tight text-center text-base leading-8 font-normal text-white uppercase">
              {t("Our services")}
            </span>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.category} delay={index * 0.08}>
              <ServiceCard
                {...service}
                category={t(service.category)}
                title={t(service.title)}
                description={t(service.description)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
