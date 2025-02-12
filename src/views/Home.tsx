import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@italodeandra/ui/components/Button";

export function Home() {
  return (
    <div className="mt-20 h-screen w-full bg-[url('/bg-fullhd.png')] bg-top bg-repeat-y">
      <div className="-mt-20 h-screen w-full bg-[url('/noise.png')] bg-cover bg-top bg-repeat-y">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-10 pt-40">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-gradient-to-br max-w-[767px] from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-[90px] font-semibold leading-[98px] tracking-[-5.4px] text-transparent">
              Transfoming ideas into digital solutions
            </div>
            <div className="max-w-[600px] text-center text-2xl font-normal leading-8 text-zinc-400">
              Innovation, agility and efficiency to take your comp to the next
              level.
            </div>
          </div>
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
    </div>
  );
}
