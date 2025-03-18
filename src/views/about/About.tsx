import Image from "next/image";
import Reveal from "../home/Reveal";
import Bg from "../layout/Bg";
import Flare from "../layout/Flare";
import office from "./office.webp";
import work from "./work.webp";
import workagain from "./workagain.webp";
import Ma from "../Ma";
import italo from "./italo.webp";
import cairo from "./cairo.webp";
import caio from "./caio.webp";

export default function About() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <Bg />
      <div className="relative flex w-full flex-col gap-20 pt-20">
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4">
          <Reveal delay={0.25}>
            <div className="z-10 flex flex-col gap-4">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-left md:text-5xl">
                About us
              </div>
              <div className="max-w-[500px] self-center text-center font-dm text-lg leading-8 text-zinc-400 md:self-start md:text-left md:text-xl">
                We are a technology-driven company dedicated to delivering
                innovative and scalable solutions. With expertise in AI,
                blockchain, and software development, we help businesses thrive
                in a constantly evolving digital world.
              </div>
            </div>
          </Reveal>
          <div className="relative flex flex-col gap-4 p-6 md:flex-row">
            <div className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-xl bg-black">
              <Ma className="h-10 w-10" />
            </div>
            <div className="flex w-full">
              <Image className="w-full" src={office} alt="office" />
            </div>
            <div className="flex w-full">
              <Image className="w-full" src={work} alt="office" />
            </div>
            <div className="flex w-full">
              <Image className="w-full" src={workagain} alt="office" />
            </div>
            <div className="absolute bottom-0 right-0 flex h-24 w-24 items-center justify-center rounded-xl bg-zinc-50">
              <Ma className="h-10 w-10 text-black" />
            </div>
          </div>
          <div className="mb-20 flex w-full flex-col gap-16">
            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-5xl">
                The Experts Behind the Innovation
              </div>
              <div className="max-w-[630px] self-center text-center font-dm text-lg leading-8 text-zinc-400 md:text-xl">
                A passionate team of experts dedicated to innovation,
                creativity, and delivering exceptional solutions.
              </div>
            </div>
            <div className="flex justify-center gap-20">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4">
                <div className="">
                  <Image
                    className="max-w-44 rounded-full"
                    src={italo}
                    alt="patrao"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="font-dm text-xl text-zinc-50">
                    Ítalo Andrade
                  </div>
                  <div className="font-dm text-lg text-zinc-50">
                    Founder & CEO
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4">
                <div className="">
                  <Image
                    className="max-w-44 rounded-full"
                    src={cairo}
                    alt="irmaodopatrao"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="font-dm text-xl text-zinc-50">
                    Cairo Andrade
                  </div>
                  <div className="font-dm text-lg text-zinc-50">
                    Product Manager
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4">
                <div className="">
                  <Image
                    className="max-w-44 rounded-full"
                    src={caio}
                    alt="patrao"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="font-dm text-xl text-zinc-50">Caio Lemos</div>
                  <div className="font-dm text-lg text-zinc-50">
                    Full Stack Júnior
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-4">
                <div className="">
                  <Image
                    className="max-w-44 rounded-full"
                    src={italo}
                    alt="patrao"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="font-dm text-xl text-zinc-50">Vini Jr</div>
                  <div className="font-dm text-lg text-zinc-50">
                    Product Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
