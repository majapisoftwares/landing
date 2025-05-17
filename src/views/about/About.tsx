import Image from "next/image";
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
import { useTranslation } from "../../intl/useTranslation";

const staff = [
  {
    name: "Cairo Andrade",
    role: "Product Manager",
    img: cairo,
  },
  {
    name: "Caio Lemos",
    role: "Full Stack",
    img: caio,
  },
  {
    name: "Vinicius Morais",
    role: "Product Designer",
    img: vinicius,
  },
  {
    name: "Ítalo Andrade",
    role: "Founder & CEO",
    img: italo,
  },
];

export default function About() {
  const t = useTranslation();

  return (
    <div className="relative overflow-x-hidden overflow-y-hidden bg-zinc-900/80 pt-20">
      <Flare />
      <Bg className="-top-12" />
      <div className="relative flex w-full flex-col gap-20 pt-20">
        <div className="relative mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-10 px-4">
          <div className="z-10 flex flex-col gap-4">
            <div className="font-dm bg-linear-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-left md:text-5xl">
              {t("About us")}
            </div>
            <div className="font-dm max-w-[500px] self-center text-center text-lg leading-8 text-zinc-400 md:self-start md:text-left md:text-xl">
              {t(
                "We are a technology-driven company dedicated to delivering innovative and scalable solutions. With expertise in AI, blockchain, and software development, we help businesses thrive in a constantly evolving digital world.",
              )}
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="flex p-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="block w-full overflow-hidden rounded-xl">
                  <Image
                    className="aspect-square object-cover"
                    src={office}
                    alt={t("office")}
                  />
                </div>
                <div className="block w-full overflow-hidden rounded-xl">
                  <Image
                    className="aspect-square object-cover"
                    src={work}
                    alt={t("office")}
                  />
                </div>
                <div className="block w-full overflow-hidden rounded-xl">
                  <Image
                    className="aspect-square object-cover"
                    src={workagain}
                    alt={t("office")}
                  />
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 flex h-24 w-24 items-center justify-center rounded-xl bg-zinc-50">
              <Ma className="h-10 w-10 text-black" />
            </div>
            <div className="absolute top-0 left-0 flex h-24 w-24 items-center justify-center rounded-xl bg-black">
              <Ma className="h-10 w-10" />
            </div>
          </div>
          <div className="mb-20 flex w-full flex-col gap-16">
            <div className="relative">
              <Bg className="-top-44" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-dm bg-linear-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center text-3xl font-semibold tracking-[-2.88px] text-transparent md:text-5xl">
                {t("The experts behind the innovation")}
              </div>
              <div className="font-dm max-w-[630px] self-center text-center text-lg leading-8 text-zinc-400 md:text-xl">
                {t(
                  "A passionate team of experts dedicated to innovation, creativity, and delivering exceptional solutions.",
                )}
              </div>
            </div>
            <div className="z-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-24">
              {staff.map((member) => (
                <div
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
                    <div className="font-dm text-center text-xl text-zinc-50">
                      {member.name}
                    </div>
                    <div className="font-dm text-center text-lg text-zinc-50">
                      {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
