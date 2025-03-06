import Image from "next/image";
import miyache from "./miyache.webp";
import ticketis from "./ticketis.webp";
import lapwing from "./lapwing.webp";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Bg from "../layout/Bg";
import Button from "@italodeandra/ui/components/Button";
import { LAPWING_LINK, MIYACHE_LINK, TICKETIS_LINK } from "../../constants";

export default function Projects() {
  return (
    <div className="relative">
      <Bg />
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-center font-dm text-3xl font-semibold text-transparent md:text-5xl md:tracking-[-2.88px] lg:text-left">
            Some of our projects
          </div>
          <div className="max-w-[600px] text-center font-dm text-lg text-zinc-400 md:text-2xl md:leading-8 md:tracking-[-1.44px] lg:text-left">
            Some of the solutions we developed, combining design, technology and
            innovation to create incredible experiences.
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col w-full gap-6">
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src={miyache}
                alt="Miyache"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ease-in-out group-hover:bg-opacity-85">
                <div className="flex h-full flex-col justify-end gap-4 px-6 py-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-6">
                    <div className="font-dm text-3xl tracking-[-1.2px] text-white">
                      Miyache
                    </div>
                    <Button href={MIYACHE_LINK} target="_blank" rounded icon>
                      <GlobeAltIcon className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                  <div className="font-dm leading-5 tracking-[-0.72px] text-zinc-400 md:text-lg">
                    Miyache, a platform dedicated to limiting anime/discoveries
                    based on the users own choices, based on the ranking defined
                    by you, the system recommends new series to you.
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src={ticketis}
                alt="Ticketis"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ease-in-out group-hover:bg-opacity-85">
                <div className="flex h-full flex-col justify-end gap-4 px-6 py-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-6">
                    <div className="font-dm text-3xl tracking-[-1.2px] text-white">
                      Ticketis
                    </div>
                    <Button href={TICKETIS_LINK} target="_blank" rounded icon>
                      <GlobeAltIcon className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                  <div className="font-dm leading-5 tracking-[-0.72px] text-zinc-400 md:text-lg">
                    Ticket sales platform for events in the city of Franca São
                    Paulo, Brazil.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="group relative max-h-[221px] w-full overflow-hidden rounded-3xl md:max-h-max">
              <Image
                src={lapwing}
                alt="Lapwing"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ease-in-out group-hover:bg-opacity-85">
                <div className="flex h-full flex-col justify-end gap-4 px-6 py-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-6">
                    <div className="font-dm text-3xl tracking-[-1.2px] text-white">
                      Lapwing
                    </div>
                    <Button href={LAPWING_LINK} target="_blank" rounded icon>
                      <GlobeAltIcon className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                  <div className="font-dm leading-5 tracking-[-0.72px] text-zinc-400 md:text-lg">
                    Soccer matches generated by AI, creat players, teams and win
                    money with smart decisions.
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
