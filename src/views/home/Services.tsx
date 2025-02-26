import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react/dist/iconify.js";
import Accordion from "@italodeandra/ui/components/Accordion";
import useMediaQuery from "@italodeandra/ui/hooks/useMediaQuery";
import { cloneElement } from "react";

const services = [
  {
    title: "Web & App development",
    description:
      "We develop digital assets,such as website, microsite and mobile apps",
    icon: <ComputerDesktopIcon />,
  },
  {
    title: "UI/UX Design",
    description: "Product that have a good appearance can attract new users",
    icon: <SparklesIcon />,
  },
  {
    title: "Software development",
    description:
      "We develop digital assets,such as website, microsite and mobile apps",
    icon: <Icon icon="nrk:category-active" />,
  },
];

export default function Sevices() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-10 px-4">
        <div className="flex flex-col gap-4 md:items-center">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text font-dm text-3xl font-semibold text-transparent md:text-5xl md:tracking-[-2.88px]">
            Our services
          </div>
          <div className="max-w-[500px] font-dm text-zinc-400 md:text-center md:text-2xl md:leading-8 md:tracking-[-1.44px]">
            From design to programming, we offer agile and efficient services to
            meet your needs.
          </div>
        </div>
        {isMobile ? (
          <div className="flex flex-col gap-4">
            {services.map((service) => (
              <>
                <Accordion>
                  <Accordion.Item
                    className="rounded-lg border border-zinc-800 dark:bg-zinc-900 md:mr-16"
                    triggerClassName="gap-2 items-center flex-row-reverse dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg px-8 py-5"
                    contentClassName="text-center text-zinc-400 font-dm"
                    title={
                      <div className="flex items-center gap-4">
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
              </>
            ))}
          </div>
        ) : (
          <div className="flex w-full justify-center gap-8">
            {services.map((service) => (
              <>
                <div className="flex h-60 max-w-[340px] flex-col items-center justify-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4">
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
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
