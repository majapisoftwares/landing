import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@italodeandra/ui/components/Button";
import Accordion from "@italodeandra/ui/components/Accordion";
import { BoltIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import { WHATSAPP_LINK } from "../../constants";

export default function WhyChooseUs() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-4">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-10 lg:items-start">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold text-transparent lg:text-5xl md:tracking-[-2.88px] lg:text-left">
            Why choose us
          </div>
          <div className="max-w-[506px] text-center font-dm text-zinc-400 lg:text-2xl lg:leading-8 lg:tracking-[-1.44px] lg:text-left">
            We combine innovation, agility, and expertise to deliver custom,
            high-performance solutions. With a global presence in Brazil, the
            US, and Turkey, we ensure cutting-edge technology, dedicated
            support, and scalable results to help your business thrive.
          </div>
          <div className="hidden lg:flex">
            <Button
              variant="filled"
              href={WHATSAPP_LINK}
              target="_blank"
              className="rounded-[50px] border border-zinc-500 bg-zinc-100 px-8 py-3 font-dm text-zinc-800"
              trailing={<ArrowLongRightIcon className="h-6 w-6" />}
            >
              Schedule a meeting
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full lg:items-end">
          <Accordion>
            <Accordion.Item
              className="rounded-lg border border-zinc-800 dark:bg-zinc-900 lg:mr-16"
              triggerClassName="gap-2 justify-center items-center md:flex-row dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg lg:text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 md:text-lg font-dm"
              title={
                <div className="flex gap-3">
                  Agility & Efficiency
                  <BoltIcon className="h-8 w-8 rounded-full bg-white p-2 text-black" />
                </div>
              }
            >
              Optimized solutions that accelerate processes and enhance
              productivity for your business.
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item
              className="rounded-lg border border-zinc-800 dark:bg-zinc-900"
              triggerClassName="gap-2 justify-center items-center md:flex-row dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg lg:text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 md:text-lg font-dm"
              title={
                <div className="flex gap-3">
                  Innovative Solutions
                  <Icon
                    icon="tabler:bulb"
                    className="h-8 w-8 rounded-full bg-white p-2 text-black"
                  />
                </div>
              }
            >
              Cutting-edge technology tailored to your business needs.
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item
              className="rounded-lg border border-zinc-800 dark:bg-zinc-900 lg:mr-16"
              triggerClassName="gap-2 justify-center items-center md:flex-row dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg lg:text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 md:text-lg font-dm"
              title={
                <div className="flex gap-3">
                  Global Expertise
                  <GlobeAltIcon className="h-8 w-8 rounded-full bg-white p-2 text-black" />
                </div>
              }
            >
              Leveraging worldwide knowledge to deliver innovative and scalable
              solutions for your needs.
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
