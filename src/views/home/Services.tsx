import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react/dist/iconify.js";
import Accordion from "@italodeandra/ui/components/Accordion";
import useMediaQuery from "@italodeandra/ui/hooks/useMediaQuery";
import { cloneElement } from "react";
import Bg from "../layout/Bg";
import { motion, useTime, useTransform } from "framer-motion";

const services = [
  {
    title: "Web & App development",
    description:
      "We develop digital assets,such as website, microsite and mobile apps.",
    icon: <ComputerDesktopIcon />,
  },
  {
    title: "UI/UX Design",
    description: "Product that have a good appearance can attract new users.",
    icon: <SparklesIcon />,
  },
  {
    title: "Blockchain & AI",
    description:
      "Harnessing the power of Blockchain and AI to create secure, intelligent, and automated digital solutions.",
    icon: <Icon icon="icon-park-outline:blockchain" />,
  },
];

export default function Sevices() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const time = useTime();
  const rotate = useTransform(time, [0, 1300], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #18181b 90%, #27272a 10% )`;
  });

  return (
    <div className="relative">
      <Bg className="-top-44" />
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center gap-10 px-4">
        <div className="flex flex-col gap-4 md:items-center">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold text-transparent md:text-5xl lg:text-left lg:tracking-[-2.88px]">
            Our services
          </div>
          <div className="max-w-[500px] text-center font-dm text-lg text-zinc-400 md:text-2xl lg:leading-8 lg:tracking-[-1.44px]">
            From design to programming, we offer agile and efficient services to
            meet your needs.
          </div>
        </div>
        {isMobile ? (
          <div className="flex w-full flex-col gap-4">
            {services.map((service) => (
              <Accordion key={service.title}>
                <Accordion.Item
                  className="rounded-lg border border-zinc-800 dark:bg-zinc-900"
                  triggerClassName="gap-2 justify-center items-center md:flex-row dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg lg:text-2xl px-8 py-5"
                  contentClassName="text-center text-zinc-400 font-dm"
                  title={
                    <div className="flex items-center gap-3">
                      {service.title}
                      <div className="rounded-full bg-white p-2">
                        {cloneElement(service.icon, {
                          className: "h-5 w-5 text-black",
                        })}
                      </div>
                    </div>
                  }
                >
                  {service.description}
                </Accordion.Item>
              </Accordion>
            ))}
          </div>
        ) : (
          <div className="flex w-full justify-center gap-8">
            {services.map((service) => (
              <div className="relative" key={service.title}>
                <div className="relative z-10 flex h-60 max-w-[340px] flex-col items-center justify-center gap-4 rounded-lg bg-zinc-900 px-4">
                  <div className="rounded-full bg-white p-4">
                    {cloneElement(service.icon, {
                      className: "h-8 w-8 text-black",
                    })}
                  </div>
                  <div className="flex flex-col gap-2 text-center">
                    <div className="font-tight text-2xl font-semibold text-white">
                      {service.title}
                    </div>
                    <div className="font-tight text-zinc-400">
                      {service.description}
                    </div>
                  </div>
                </div>
                <motion.div
                  style={{
                    background: rotatingBg,
                  }}
                  className="absolute -inset-[2px] rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
