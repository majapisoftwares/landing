import Bg from "../../layout/Bg";
import { Orbit } from "./Orbit";

export function Technologies() {
  return (
    <div className="relative">
      <Bg />
      <div className="relative z-10 mx-auto flex w-full max-w-(--breakpoint-xl) flex-col items-center justify-center gap-[75px] px-4">
        <div className="flex max-w-[604px] flex-col items-center gap-2">
          <div className="font-dm bg-[linear-gradient(180deg,#F8F8F8_-4.83%,rgba(255,255,255,0.00)_441.19%)] bg-clip-text text-5xl leading-[56px] font-semibold tracking-[-2.88px] text-transparent">
            Majapi
          </div>
          <div className="font-dm text-center text-2xl leading-8 tracking-[-0.288px] text-zinc-500">
            Using modern technologies and methodologies, our projects become
            unique.
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 xl:flex-row">
          <Orbit />
          <div className="w-full max-w-[503px] text-[22px] leading-7 text-zinc-400">
            Here in{" "}
            <span className="font-mono font-medium text-zinc-50">Majapi</span>,
            we simplify technology by working closely with our clients to ensure
            clear communication and custom solutions. As an extension of your
            team, we immerse ourselves in your business, delivering impactful
            results.
          </div>
        </div>
      </div>
    </div>
  );
}
