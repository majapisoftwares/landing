import { Icon } from "@iconify/react";
import Bg from "../layout/Bg";
import RevealMotion from "../../components/RevealMotion";
import { cloneElement } from "react";

const marketSegments = [
  {
    market: "Health care",
    description:
      "We create tools that improve efficiency in transporting and removing patients, ensuring speed and precision in medical care.",
    icon: <Icon icon="bxs:ambulance" />,
    delay: 0.5,
  },
  {
    market: "Consortium",
    description:
      "Our Warranty Manager optimizes the control and management of warranties, ensuring compliance, deadlines and efficiency in the administration of contracts and processes.",
    icon: <Icon icon="material-symbols:lock" />,
    delay: 0.75,
  },
  {
    market: "Automation",
    description:
      "Integration and optimization services for Facebook campaigns, allowing your brand to reach the right audience effective way.",
    icon: <Icon icon="ic:baseline-facebook" />,
    delay: 1,
  },
];

export default function Clients() {
  return (
    <div className="relative">
      <Bg />
      <div className="relative mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-center gap-10 px-4">
        <RevealMotion delay={0.25}>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-linear-to-br from-zinc-100 to-zinc-400 bg-clip-text font-dm text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-5xl">
              Some of our clients
            </div>
            <div className="max-w-[550px] text-center font-dm text-lg leading-8 text-zinc-400 md:text-xl">
              Trusted by businesses across Brazil, the US, and Turkey.
            </div>
          </div>
        </RevealMotion>
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row">
          {marketSegments.map((segment) => (
            <RevealMotion key={segment.market} delay={segment.delay}>
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-10">
                <div className="rounded bg-white p-4">
                  {cloneElement(segment.icon, {
                    className: "h-8 w-8 text-black",
                  })}
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <div className="font-tight text-2xl font-semibold text-white">
                    {segment.market}
                  </div>
                  <div className="max-w-[300px] font-dm text-lg text-zinc-400">
                    {segment.description}
                  </div>
                </div>
              </div>
            </RevealMotion>
          ))}
        </div>
      </div>
    </div>
  );
}
