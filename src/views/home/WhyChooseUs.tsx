import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@italodeandra/ui/components/Button";
import Accordion from "@italodeandra/ui/components/Accordion";
import { BoltIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";

export default function WhyChooseUs() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4">
      <div className="flex flex-col items-center gap-8 md:gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-5 md:gap-10">
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
              size="xl"
              className="rounded-[50px] border border-zinc-500 bg-zinc-100 px-8 py-3 font-dm text-zinc-800"
              trailing={<ArrowLongRightIcon className="h-6 w-6" />}
            >
              Schedule a meeting
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-end gap-4">
          <Accordion>
            <Accordion.Item
              className="mr-16 w-[350px] rounded-lg border border-zinc-800 dark:bg-zinc-900"
              triggerClassName="gap-2 items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 text-lg font-dm"
              title={
                <>
                  Agility & Efficiency
                  <BoltIcon className="h-8 w-8 rounded-full bg-white p-2 text-black" />
                </>
              }
            >
              Cutting-edge technology tailored to your business needs.
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item
              className="w-[350px] rounded-lg border border-zinc-800 dark:bg-zinc-900"
              triggerClassName="gap-2 items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 text-lg font-dm"
              title={
                <>
                  Innovative Solutions
                  <Icon
                    icon="tabler:bulb"
                    className="h-8 w-8 rounded-full bg-white p-2 text-black"
                  />
                </>
              }
            >
              Cutting-edge technology tailored to your business needs.
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item
              className="mr-16 w-[350px] rounded-lg border border-zinc-800 dark:bg-zinc-900"
              triggerClassName="gap-2 items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 text-lg font-dm"
              title={
                <>
                  Global Expertise
                  <GlobeAltIcon className="h-8 w-8 rounded-full bg-white p-2 text-black" />
                </>
              }
            >
              Cutting-edge technology tailored to your business needs.
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
