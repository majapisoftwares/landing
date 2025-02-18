import Button from "@italodeandra/ui/components/Button";

export default function Contact() {
  return (
    <div className="z-20 mx-auto -mb-96 flex w-full max-w-screen-xl items-center rounded-xl border border-zinc-800 bg-zinc-900/80 px-10 py-20">
      <div className="flex w-full flex-col">
        <div className="max-w-[610px] font-dm text-4xl font-semibold leading-[44px] tracking-[-0.432px] text-white">
          Ready to Transform your business? Get in touch now!
        </div>
        <div className="w-[399px] font-dm text-lg font-medium tracking-[-0.216px] text-zinc-400">
          Turn chellenges with our expertise.
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Button
          variant="filled"
          size="xl"
          className="rounded-lg border border-zinc-500 bg-zinc-100 px-20 py-3 font-dm text-zinc-800"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
