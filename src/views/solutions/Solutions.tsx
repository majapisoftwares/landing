import { Icon } from "@iconify/react/dist/iconify.js";
import Flare from "../layout/Flare";
import Content from "./Content";
import Bg from "../layout/Bg";
import Button from "@majapisoftwares/ui/components/Button";
import Routes from "../../routes";
import RevealMotion from "../../components/RevealMotion";
import development from "./development.webp";
import uiuxdesign from "./uiuxdesign.webp";
import billbords from "./billboards.webp";

const solutions = [
  {
    delay: 0.5,
    left: true,
    positionBg: "-top-96",
    title: "Development",
    description:
      "We design and develop high-performance, scalable, and secure solutions tailored to your business needs. From web and mobile applications to advanced software systems.",
    img: development,
    icons: [
      <Icon
        icon="mdi:tailwind"
        className="h-8 w-8 text-zinc-400 hover:text-sky-500"
        key="tailwind"
      />,
      <Icon
        icon="mdi:react"
        className="h-8 w-8 text-zinc-400 hover:text-sky-500"
        key="react"
      />,
      <Icon
        icon="nonicons:javascript-16"
        className="h-8 w-8 text-zinc-400 hover:text-yellow-500"
        key="javscript"
      />,
      <Icon
        icon="devicon-plain:nextjs"
        className="h-8 w-8 text-zinc-400 hover:text-zinc-50"
        key="nextjs"
      />,
    ],
    subtextOne: "Front-end (React / Next / Tailwind)",
    subtextTwo: "Back-end(Node.js)",
    subtextThree: "QA Testing",
  },
  {
    delay: 0.5,
    left: false,
    positionBg: "-top-80",
    title: "UI/UX Design",
    description:
      "We craft intuitive interfaces and engaging experiences to maximize usability and user satisfaction. Strategic design for effective results.",
    img: uiuxdesign,
    icons: [
      <Icon
        icon="gg:figma"
        className="h-8 w-8 text-zinc-400 hover:text-orange-500"
        key="figma"
      />,
      <Icon
        icon="mage:photoshop"
        className="h-8 w-8 text-zinc-400 hover:text-sky-500"
        key="ps"
      />,
    ],
    subtextOne: "Website design",
    subtextTwo: "Mobile App Design",
    subtextThree: "Dashboard Design",
  },
  {
    delay: 0.5,
    left: true,
    positionBg: "-top-72",
    title: "Branding & Logo",
    description:
      "We create strong, memorable brands with unique visual identities. From logos to complete branding strategies, we ensure consistency and impact across all touchpoints.",
    img: billbords,
    icons: [
      <Icon
        icon="gg:figma"
        className="h-8 w-8 text-zinc-400 hover:text-orange-500"
        key="figma"
      />,
      <Icon
        icon="mage:photoshop"
        className="h-8 w-8 text-zinc-400 hover:text-sky-500"
        key="ps"
      />,
      <Icon
        icon="devicon-plain:illustrator"
        className="h-7 w-7 text-zinc-400 hover:text-red-900"
        key="illustrator"
      />,
    ],
    subtextOne: "Brand Identity",
    subtextTwo: "Logo Design",
    subtextThree: "Publication Design",
  },
];

export default function Solutions() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <div className="relative flex w-full flex-col gap-20 pt-20">
        <div className="relative mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-10 px-4">
          <RevealMotion delay={0.25}>
            <div className="z-10 flex flex-col gap-4">
              <div className="bg-linear-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-left md:text-5xl">
                Our Solutions
              </div>
              <div className="max-w-[500px] self-center text-center font-dm text-lg leading-8 text-zinc-400 md:self-start md:text-left md:text-xl">
                From design to programming, we offer agile and efficient
                services to meet your needs.
              </div>
            </div>
          </RevealMotion>
          {solutions.map((solutions) => (
            <Content
              delay={solutions.delay}
              key={solutions.title}
              left={solutions.left}
              positionBg={solutions.positionBg}
              image={solutions.img}
              title={solutions.title}
              description={solutions.description}
              subtextOne={solutions.subtextOne}
              subtextTwo={solutions.subtextTwo}
              subtextThree={solutions.subtextThree}
              icons={solutions.icons}
            />
          ))}
        </div>
        <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-center justify-center gap-6 px-4 pb-20">
          <div className="relative">
            <Bg className="-top-72" />
          </div>
          <RevealMotion
            delay={0.5}
            className="z-10 mx-auto max-w-[450px] text-center font-dm text-3xl font-semibold tracking-[-0.432px] text-white sm:text-3xl md:max-w-[500px] md:text-4xl"
          >
            Innovation starts with action. Get in touch now!
          </RevealMotion>
          <RevealMotion className="z-10" delay={0.5}>
            <Button
              variant="filled"
              href={Routes.Contact}
              className="max-w rounded-lg border border-zinc-600 bg-zinc-100 px-[78px] py-3 font-dm text-zinc-800 md:text-xl"
            >
              Contact Us
            </Button>
          </RevealMotion>
        </div>
      </div>
    </div>
  );
}
