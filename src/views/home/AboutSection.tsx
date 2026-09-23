import { Icon } from "@iconify/react/dist/iconify.js";
import { Reveal } from "./Reveal";
import { useTranslation } from "../../intl/useTranslation";

type TeamMember = {
  name: string;
  image: string;
  linkedin?: string;
  description?: string;
};

const team: TeamMember[] = [
  {
    name: "Ítalo Andrade",
    image: "/images/team/italo.png",
    linkedin: "https://www.linkedin.com/in/italodeandra/",
    description: `Founder
Leads strategy, architecture, and digital product development, turning business problems into software and AI solutions.`,
  },
  {
    name: "Cairo Andrade",
    image: "/images/team/cairo.png",
    linkedin: "https://www.linkedin.com/in/cairo-andrade-8995a6353/",
    description:
      "Product Manager connecting strategy, technology, and business to build relevant products.",
  },
  {
    name: "Caio Alexandre",
    image: "/images/team/caio.png",
    linkedin: "https://www.linkedin.com/in/caio-alexandre-lemos-991011259/",
    description:
      "Full-Stack Developer building scalable, high-performance web applications.",
  },
  {
    name: "Vinicius Morais",
    image: "/images/team/vinicius.png",
    linkedin: "https://www.linkedin.com/in/vinicius-morais1/",
    description:
      "Product Designer creating simple, functional, and people-centered digital experiences.",
  },
];

export default function AboutSection() {
  const t = useTranslation();

  return (
    <section
      id="about"
      className="relative z-10 mb-16 bg-[#000003] px-4 pb-32 sm:mb-20 sm:px-8 sm:pb-40 lg:mb-28 lg:px-12 lg:pb-[200px]"
    >
      <Reveal
        className="mx-auto flex w-full max-w-[1105px] flex-col gap-16"
        viewportAmount={0.3}
      >
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
              {t("About us")}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-dm text-lg leading-8 text-zinc-300">
            {t(
              "We are a technology-driven company focused on delivering innovative and scalable solutions. With expertise in AI, blockchain, and software development, we empower businesses to thrive in a constantly evolving digital landscape.",
            )}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Reveal
                key={member.name}
                className="relative h-[463px] min-w-0 overflow-hidden rounded-[16px] border border-zinc-800 bg-black"
                delay={team.indexOf(member) * 0.08}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%), url(${member.image})`,
                  backgroundPosition: "center, center",
                  backgroundRepeat: "no-repeat, no-repeat",
                  backgroundSize: "100% 100%, cover",
                  backdropFilter: "blur(50px)",
                }}
              >
                <div className="absolute right-0 bottom-0 left-0 z-10 px-5 pb-8">
                  <div className="flex items-center gap-2">
                    <h2 className="font-dm text-[22px] leading-[1.5] text-white">
                      {member.name}
                    </h2>
                    <span aria-hidden="true" className="text-sm text-white">
                      •
                    </span>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${t("LinkedIn profile for")} ${member.name}`}
                      >
                        <Icon
                          aria-hidden="true"
                          icon="mdi:linkedin"
                          className="h-5 w-5 shrink-0 text-white"
                        />
                      </a>
                    ) : (
                      <Icon
                        aria-label="LinkedIn"
                        icon="mdi:linkedin"
                        className="h-5 w-5 shrink-0 text-white"
                      />
                    )}
                  </div>
                  <p className="font-dm mt-1 whitespace-pre-line text-[15px] leading-[1.5] tracking-[-0.3px] text-zinc-400">
                    {member.description ? t(member.description) : t("A Product Designer focused on intuitive user experiences.")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
