import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Sevices() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-10 px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text font-dm text-5xl font-semibold tracking-[-2.88px] text-transparent">
          Our services
        </div>
        <div className="max-w-[500px] text-center font-dm text-2xl leading-8 tracking-[-1.44px] text-zinc-500">
          From design to programming, we offer agile and efficient services to
          meet your needs.
        </div>
      </div>
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
