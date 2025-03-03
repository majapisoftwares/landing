import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@italodeandra/ui/components/Button";
import { WHATSAPP_LINK } from "../../constants";
import Bg from "../layout/Bg";

export default function Hero() {
  return (
    <div className="relative">
      <Bg className="absolute -top-44 left-1/2 h-[832px] w-[1440px] -translate-x-1/2 opacity-20" />
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center gap-10 px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="max-w-[600px] bg-gradient-to-br py-2 from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-5xl font-semibold tracking-[-1.92px] text-transparent lg:max-w-[767px] lg:text-[90px] lg:leading-[98px] lg:tracking-[-5.4px]">
            Transforming ideas into digital solutions
          </div>
          <div className="max-w-[268px] text-center font-dm text-zinc-400 lg:max-w-[600px] lg:text-2xl lg:leading-8">
            Innovation, agility and efficiency to take your comp to the next
            level.
          </div>
        </div>
        <Button
          variant="filled"
          target="_blank"
          href={WHATSAPP_LINK}
          className="rounded-[50px] border border-zinc-600 bg-zinc-100 px-8 py-3 font-tight text-zinc-800"
          trailing={<ArrowLongRightIcon className="h-6 w-6" />}
        >
          Schedule a meeting
        </Button>
      </div>
    </div>
  );
}
