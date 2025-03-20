import Button from "@italodeandra/ui/components/Button";
import Routes from "../../routes";
import { motion, useTime, useTransform } from "framer-motion";

export default function Contact() {
  const time = useTime();
  const rotate = useTransform(time, [0, 2500], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #18181b 90%, #27272a 10%)`;
  });

  return (
    <div className="relative z-20 px-4">
      <div className="relative mx-auto -mb-96 flex w-full max-w-screen-xl flex-col items-center gap-4 rounded-xl bg-zinc-900 px-4 py-20 md:px-10 lg:flex-row">
        <div className="relative flex max-w-[500px] flex-col gap-2 xl:max-w-[610px]">
          <div className="text-center font-dm text-2xl font-semibold leading-[44px] tracking-[-0.432px] text-white sm:text-3xl md:text-4xl lg:text-left">
            Ready to transform your business? Get in touch now!
          </div>
          <div className="text-center font-dm text-lg font-medium text-zinc-400 md:text-xl md:tracking-[-0.216px] lg:text-left">
            Turn challenges into opportunities with our expertise.
          </div>
        </div>
        <div className="mx-auto flex lg:mx-0 lg:ml-auto">
          <Button
            variant="filled"
            href={Routes.Contact}
            className="rounded-lg border border-zinc-600 bg-zinc-100 px-[78px] py-3 font-dm text-zinc-800 md:text-xl"
          >
            Contact Us
          </Button>
        </div>
        <motion.div
          style={{ background: rotatingBg }}
          className="absolute -inset-[2px] z-[-1] rounded-xl"
        />
      </div>
    </div>
  );
}
