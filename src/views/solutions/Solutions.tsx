import { Icon } from "@iconify/react/dist/iconify.js";
import Flare from "../layout/Flare";
import swan from "./swan.webp";
import Content from "./Content";
import Bg from "../layout/Bg";
import Button from "@italodeandra/ui/components/Button";
import Routes from "../../routes";

const solutions = [
  {
    left: true,
    positionBg: "-top-44",
    title: "Development",
    description:
      "We design and develop high-performance, scalable, and secure solutions tailored to your business needs. From web and mobile applications to advanced software systems.",
    image: swan,
    icons: [
      <Icon
        icon="mdi:tailwind"
        className="h-8 w-8 text-zinc-400"
        key="tailwind"
      />,
      <Icon icon="mdi:react" className="h-8 w-8 text-zinc-400" key="react" />,
      <Icon
        icon="nonicons:javascript-16"
        className="h-8 w-8 text-zinc-400"
        key="react"
      />,
      <Icon
        icon="devicon-plain:nextjs"
        className="h-8 w-8 text-zinc-400"
        key="react"
      />,
    ],
    front: "Front-end (React / Next / Tailwind)",
    back: "Back-end(Node.js)",
  },
  {
    left: false,
    positionBg: "-top-20",
    title: "Development",
    description:
      "We design and develop high-performance, scalable, and secure solutions tailored to your business needs. From web and mobile applications to advanced software systems.",
    image: swan,
    icons: [
      <Icon
        icon="mdi:tailwind"
        className="h-8 w-8 text-zinc-400"
        key="tailwind"
      />,
      <Icon icon="mdi:react" className="h-8 w-8 text-zinc-400" key="react" />,
      <Icon
        icon="nonicons:javascript-16"
        className="h-8 w-8 text-zinc-400"
        key="react"
      />,
      <Icon
        icon="devicon-plain:nextjs"
        className="h-8 w-8 text-zinc-400"
        key="react"
      />,
    ],
    front: "Front-end (React / Next / Tailwind)",
    back: "Back-end(Node.js)",
  },
  {
    left: true,
    positionBg: "-top-20",
    title: "Development",
    description:
      "We design and develop high-performance, scalable, and secure solutions tailored to your business needs. From web and mobile applications to advanced software systems.",
    image: swan,
    icons: [
      <Icon
        icon="mdi:tailwind"
        className="h-8 w-8 text-zinc-400"
        key="tailwind"
      />,
      <Icon icon="mdi:react" className="h-8 w-8 text-zinc-400" key="react" />,
      <Icon
        icon="nonicons:javascript-16"
        className="h-8 w-8 text-zinc-400"
        key="react"
      />,
      <Icon
        icon="devicon-plain:nextjs"
        className="h-8 w-8 text-zinc-400"
        key="react"
      />,
    ],
    front: "Front-end (React / Next / Tailwind)",
    back: "Back-end(Node.js)",
  },
];

export default function Solutions() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <div className="relative flex w-full flex-col gap-20 pt-20 lg:gap-40">
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4">
          <div className="z-10 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-left md:text-5xl">
              Our Solutions
            </div>
            <div className="max-w-[500px] self-center text-center font-dm text-lg leading-8 text-zinc-400 md:self-start md:text-left md:text-xl">
              From design to programming, we offer agile and efficient services
              to meet your needs.
            </div>
          </div>
          {solutions.map((solutions) => (
            <Content
              left={solutions.left}
              key={solutions.title}
              positionBg={solutions.positionBg}
              image={swan}
              title={solutions.title}
              description={solutions.description}
              front={solutions.front}
              back={solutions.back}
              icons={solutions.icons}
            />
          ))}
        </div>
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-4 px-4 pb-20">
          <div className="relative">
            <Bg className="-top-36" />
          </div>
          <div className="z-10 mx-auto max-w-[450px] text-center font-dm text-3xl font-semibold tracking-[-0.432px] text-white sm:text-3xl md:max-w-[500px] md:text-4xl">
            Innovation starts with action. Get in touch now!
          </div>
          <Button
            variant="filled"
            href={Routes.Contact}
            className="max-w z-10 rounded-lg border border-zinc-600 bg-zinc-100 px-[78px] py-3 font-dm text-zinc-800 md:text-xl"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
