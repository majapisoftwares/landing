import { BoltIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react/dist/iconify.js";
import Accordion from "@italodeandra/ui/components/Accordion";
import useMediaQuery from "@italodeandra/ui/hooks/useMediaQuery";

export default function Sevices() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-10 px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text font-dm text-3xl font-semibold text-transparent md:text-5xl md:tracking-[-2.88px]">
          Our services
        </div>
        <div className="max-w-[500px] text-center font-dm text-zinc-500 md:text-2xl md:leading-8 md:tracking-[-1.44px]">
          From design to programming, we offer agile and efficient services to
          meet your needs.
        </div>
      </div>
      {isMobile && (
        <Accordion>
          <Accordion.Item
            className="w-[350px] rounded-lg border border-zinc-800 dark:bg-zinc-900 md:mr-16"
            triggerClassName="gap-2 items-center dark:bg-zinc-900 dark:hover:bg-zinc-950/30 font-tight text-xl md:text-2xl px-8 py-5"
            contentClassName="text-center text-zinc-400 md:text-lg font-dm"
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
      )}
      <div className="flex w-full justify-center gap-8">
        <div className="flex h-60 max-w-[340px] flex-col items-center justify-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4">
          <div className="rounded-full bg-white p-4">
            <ComputerDesktopIcon className="h-8 w-8 text-black" />
          </div>

          <div className="flex flex-col gap-2 text-center">
            <div className="font-tight text-2xl font-semibold text-white">
              Web & App development
            </div>
            <div className="font-tight text-zinc-400">
              We develop digital assets,such as website, microsite and mobile
              apps
            </div>
          </div>
        </div>
        <div className="flex h-60 max-w-[340px] flex-col items-center justify-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4">
          <div className="rounded-full bg-white p-4">
            <SparklesIcon className="h-8 w-8 text-black" />
          </div>

          <div className="flex flex-col gap-2 text-center">
            <div className="font-tight text-2xl font-semibold text-white">
              UI/UX Design
            </div>
            <div className="font-tight text-zinc-400">
              Product that have a good appearance can attract new users
            </div>
          </div>
        </div>
        <div className="flex h-60 max-w-[340px] flex-col items-center justify-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4">
          <div className="rounded-full bg-white p-4">
            <Icon icon="nrk:category-active" className="h-8 w-8 text-black" />
          </div>

          <div className="flex flex-col gap-2 text-center">
            <div className="font-tight text-2xl font-semibold text-white">
              Software development
            </div>
            <div className="font-tight text-zinc-400">
              We develop digital assets,such as website, microsite and mobile
              apps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
