import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@majapisoftwares/ui/components/Button";
import Accordion from "@majapisoftwares/ui/components/Accordion";
import { BoltIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import { WHATSAPP_LINK } from "../../constants";
import { useTranslation } from "../../intl/useTranslation";

export default function WhyChooseUs() {
  const t = useTranslation();

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-10 px-4">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-4">
        <div className="flex w-full flex-col items-center justify-center gap-4 self-start lg:items-start lg:gap-10">
          <div className="font-dm bg-linear-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center text-3xl font-semibold text-transparent md:text-5xl md:tracking-[-2.88px] lg:text-left">
            {t("Why choose us")}
          </div>
          <div className="font-dm max-w-[506px] text-center text-xl text-zinc-400 lg:text-left">
            {t(
              "At Majapi, we blend innovation, agility, and deep technical expertise to build tailor-made, high-performance solutions. With a global footprint spanning Brazil, the US, and Turkey, we deliver cutting-edge technology, dedicated support, and scalable results, empowering your business to grow with confidence.",
            )}
          </div>
          <div className="hidden lg:flex">
            <Button
              variant="filled"
              href={WHATSAPP_LINK}
              target="_blank"
              className="font-dm rounded-[50px] border border-zinc-500 bg-zinc-100 px-8 py-3 text-base text-zinc-800"
              trailing={<ArrowLongRightIcon className="h-6 w-6" />}
            >
              {t("Schedule a meeting")}
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 sm:gap-6">
          <Accordion>
            <Accordion.Item
              className="rounded-lg border border-zinc-800 lg:mx-auto lg:w-[380px] dark:bg-zinc-900"
              triggerClassName="gap-2 justify-center items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg lg:text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 md:text-lg font-dm"
              title={
                <div className="flex gap-3">
                  {t("Agility & Efficiency")}
                  <BoltIcon className="h-8 w-8 rounded-full bg-white p-2 text-black" />
                </div>
              }
            >
              {t("Fast, scalable, and high-performance software development.")}
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item
              className="rounded-lg border border-zinc-800 lg:ml-auto lg:w-[380px] dark:bg-zinc-900"
              triggerClassName="gap-2 justify-center items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg lg:text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 md:text-lg font-dm"
              title={
                <div className="flex gap-3">
                  {t("Innovative Solutions")}
                  <Icon
                    icon="tabler:bulb"
                    className="h-8 w-8 rounded-full bg-white p-2 text-black"
                  />
                </div>
              }
            >
              {t("Cutting-edge technology tailored to your business needs.")}
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item
              className="rounded-lg border border-zinc-800 lg:mx-auto lg:w-[380px] dark:bg-zinc-900"
              triggerClassName="gap-2 justify-center items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-lg lg:text-2xl px-8 py-5"
              contentClassName="text-center text-zinc-400 md:text-lg font-dm"
              title={
                <div className="flex gap-3">
                  {t("Global Expertise")}
                  <GlobeAltIcon className="h-8 w-8 rounded-full bg-white p-2 text-black" />
                </div>
              }
            >
              {t("Trusted by clients in Brazil, the US, and Turkey.")}
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
