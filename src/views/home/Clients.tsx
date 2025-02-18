import { Icon } from "@iconify/react/dist/iconify.js";

export default function Clients() {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-10 px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text font-dm text-5xl font-semibold tracking-[-2.88px] text-transparent">
          Some of our clients
        </div>
        <div className="max-w-[550px] text-center font-dm text-2xl leading-8 tracking-[-1.44px] text-zinc-500">
          Trusted by businesses across Brazil, the US, and Turkey.
        </div>
      </div>
      <div className="flex w-full justify-center gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-10">
          <div className="rounded bg-white p-4">
            <Icon icon="bxs:ambulance" className="h-8 w-8 text-black" />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="font-tight text-2xl font-semibold text-white">
              Pulse
            </div>
            <div className="max-w-[280px] font-tight text-zinc-400">
              We create tools that improve efficiency in transporting and
              removing patients, ensuring speed and precision in medical care
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-10">
          <div className="rounded bg-white p-4">
            <Icon icon="material-symbols:lock" className="h-8 w-8 text-black" />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="font-tight text-2xl font-semibold text-white">
              Sailor
            </div>
            <div className="max-w-[280px] font-tight text-zinc-400">
              Our Warranty Manager optimizes the control and management of
              warranties, ensuring compliance, deadlines and efficiency in the
              administration of contracts and processes.
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-10">
          <div className="rounded bg-white p-4">
            <Icon icon="ic:baseline-facebook" className="h-8 w-8 text-black" />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="font-tight text-2xl font-semibold text-white">
              Facebot
            </div>
            <div className="max-w-[280px] font-tight text-zinc-400">
              Integration and optimization services for Facebook campaigns,
              allowing your brand to reach the right audience effective way.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
