import Image from "next/image";
import miyache from "./miyache.png";

export default function Projects() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-4">
      <div className="flex flex-col gap-4">
        <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text font-dm text-5xl font-semibold tracking-[-2.88px] text-transparent">
          Some of our projects
        </div>
        <div className="max-w-[600px] font-dm text-2xl leading-8 tracking-[-1.44px] text-zinc-500">
          Some of the solutions we developed, combining design, technology and
          innovation to create incredible experiences!
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="group relative overflow-hidden">
            <Image src={miyache} alt="Miyache" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 p-4 transition-all duration-300 ease-in-out group-hover:bg-opacity-85 rounded">
              <div className="flex flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>Miyache</div>
                <div>
                  Miyache, a platform dedicated to limiting anime/discoveries
                  based on the users own choices, based on the ranking defined
                  by you, the system recommends new series to you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
