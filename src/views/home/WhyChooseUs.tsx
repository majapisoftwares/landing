import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@italodeandra/ui/components/Button";
import Accordion from "@italodeandra/ui/components/Accordion";
import { BoltIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import { WHATSAPP_LINK } from "../../constants";

export default function WhyChooseUs() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-4">
        <div className="flex w-full flex-col gap-4 md:gap-10">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text font-dm text-3xl font-semibold text-transparent md:text-5xl md:tracking-[-2.88px]">
            Why choose us
          </div>
          <div className="max-w-[506px] font-dm text-zinc-400 md:text-2xl md:leading-8 md:tracking-[-1.44px]">
            We combine innovation, agility, and expertise to deliver custom,
            high-performance solutions. With a global presence in Brazil, the
            US, and Turkey, we ensure cutting-edge technology, dedicated
            support, and scalable results to help your business thrive.
          </div>
          <div className="hidden md:flex">
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
        <div className="flex flex-col items-stretch gap-4 md:w-full md:items-end">
          <Accordion>
            <Accordion.Item
              className="max-w-[350px] rounded-lg border border-zinc-800 dark:bg-zinc-900 md:mr-16 md:w-[350px]"
              triggerClassName="gap-2 items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg md:text-2xl px-8 py-5 flex-row-reverse md:flex-row"
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
              className="max-w-[350px] rounded-lg border border-zinc-800 dark:bg-zinc-900 md:w-[350px]"
              triggerClassName="gap-2 items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg md:text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 md:text-lg font-dm"
              title={
                <div className="flex flex-row-reverse gap-3 md:flex-row">
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
              className="rounded-lg border border-zinc-800 dark:bg-zinc-900 md:mr-16 md:w-[350px]"
              triggerClassName="gap-2 items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg md:text-2xl px-8 py-5 flex-row-reverse md:flex-row"
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
