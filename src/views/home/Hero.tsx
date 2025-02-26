import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Button from "@italodeandra/ui/components/Button";
import { WHATSAPP_LINK } from "../../constants";
import Bg from "../layout/bg";

export default function Hero() {
  return (
    <>
      <Bg />
      <div className="mx-auto relative flex w-full max-w-screen-xl flex-col items-center gap-10 px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="max-w-[350px] bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-4xl font-semibold leading-10 tracking-[-1.92px] text-transparent md:max-w-[767px] md:text-[90px] md:leading-[98px] md:tracking-[-5.4px]">
            Transforming ideas into digital solutions
          </div>
          <div className="max-w-[268px] text-center font-dm text-zinc-400 md:max-w-[600px] md:text-2xl md:leading-8">
            Innovation, agility and efficiency to take your comp to the next
            level.
          </div>
        </div>
        <Button
          variant="filled"
          target="_blank"
          href={WHATSAPP_LINK}
          className="rounded-[50px] border border-zinc-500 bg-zinc-100 px-8 py-3 font-tight text-zinc-800"
          trailing={<ArrowLongRightIcon className="h-6 w-6" />}
        >
          Schedule a meeting
        </Button>
      </div>
    </>
  );
}
