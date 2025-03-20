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
import vinicius from "./vinicius.webp";

const staff = [
  {
    name: "Ítalo Andrade",
    role: "Founder & CEO",
    img: italo,
    delay: 0.5,
  },
  {
    name: "Cairo Andrade",
    role: "Product Manager",
    img: cairo,
    delay: 0.75,
  },
  {
    name: "Caio Lemos",
    role: "Full Stack Júnior",
    img: caio,
    delay: 1,
  },
  {
    name: "Vinicius Morais",
    role: "Product Designer",
    img: vinicius,
    delay: 1.25,
  },
];

export default function About() {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <Bg className="-top-12" />
      <div className="relative flex w-full flex-col gap-20 pt-20">
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4">
          <Reveal delay={0.25} className="z-10 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-left md:text-5xl">
              About us
            </div>
            <div className="max-w-[500px] self-center text-center font-dm text-lg leading-8 text-zinc-400 md:self-start md:text-left md:text-xl">
              We are a technology-driven company dedicated to delivering
              innovative and scalable solutions. With expertise in AI,
              blockchain, and software development, we help businesses thrive in
              a constantly evolving digital world.
            </div>
          </Reveal>
          <div className="relative flex flex-col gap-4 p-6 md:flex-row">
            <Reveal
              delay={1}
              className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-xl bg-black"
            >
              <Ma className="h-10 w-10" />
            </Reveal>
            <Reveal delay={0.5} className="w-full">
              <Image className="w-full" src={office} alt="office" />
            </Reveal>
            <Reveal delay={0.75} className="w-full">
              <Image className="w-full" src={work} alt="office" />
            </Reveal>
            <Reveal delay={1} className="w-full">
              <Image className="w-full" src={workagain} alt="office" />
              <Reveal
                delay={1.5}
                className="absolute bottom-0 right-0 flex h-24 w-24 items-center justify-center rounded-xl bg-zinc-50"
              >
                <Ma className="h-10 w-10 text-black" />
              </Reveal>
            </Reveal>
          </div>
          <div className="mb-20 flex w-full flex-col gap-16">
            <div className="relative">
              <Bg className="-top-44" />
            </div>
            <Reveal delay={0.25} className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-5xl">
                The Experts Behind the Innovation
              </div>
              <div className="max-w-[630px] self-center text-center font-dm text-lg leading-8 text-zinc-400 md:text-xl">
                A passionate team of experts dedicated to innovation,
                creativity, and delivering exceptional solutions.
              </div>
            </Reveal>
            <div className="z-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-24">
              {staff.map((member) => (
                <Reveal
                  delay={member.delay}
                  key={member.name}
                  className="flex flex-col items-center justify-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-4"
                >
                  <div className="flex">
                    <Image
                      className="w-full max-w-36 rounded-full"
                      src={member.img}
                      alt={member.name}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="text-center font-dm text-xl text-zinc-50">
                      {member.name}
                    </div>
                    <div className="text-center font-dm text-lg text-zinc-50">
                      {member.role}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
