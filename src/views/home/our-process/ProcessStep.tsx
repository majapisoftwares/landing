import { cloneElement, ReactElement } from "react";
import clsx from "@majapisoftwares/ui/utils/clsx";
import { motion } from "framer-motion";

export function ProcessStep({
  className,
  title,
  description,
  icon,
  glow,
}: {
  className?: string;
  title: string;
  description: string;
  icon: ReactElement<{
    className?: string;
  }>;
  glow?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex w-[265px] flex-col items-center gap-[29px]",
        className,
      )}
    >
      <div className="font-dm bg-[linear-gradient(180deg,#F8F8F8_-4.83%,rgba(255,255,255,0.00)_441.19%)] bg-clip-text text-center text-[28px] leading-[37.226px] font-medium tracking-[-1.675px] text-transparent">
        {title}
      </div>
      <div className="relative">
        {glow && (
          <>
            <motion.div
              animate={{
                scale: [0.3, 1.4],
                opacity: [0, 0.4, 0],
                filter: ["blur(0px)", "blur(4px)"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-zinc-600/80 backdrop-blur-lg"
            />
            <motion.div
              animate={{
                scale: [0.3, 1.4],
                opacity: [0, 0.4, 0],
                filter: ["blur(0px)", "blur(4px)"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: 0.5,
              }}
              className="absolute inset-0 rounded-full bg-zinc-600/80 backdrop-blur-lg"
            />
            <motion.div
              animate={{
                scale: [0.3, 1.4],
                opacity: [0, 0.4, 0],
                filter: ["blur(0px)", "blur(4px)"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: 1,
              }}
              className="absolute inset-0 rounded-full bg-zinc-600/80 backdrop-blur-lg"
            />
          </>
        )}
        <div className="relative z-10 flex h-[104px] w-[104px] items-center justify-center rounded-full border-[8px] border-zinc-800 bg-white">
          {cloneElement(icon, {
            className: clsx(
              "h-[35px] w-[35px] text-zinc-900",
              icon.props.className,
            ),
          })}
        </div>
      </div>
      <div className="text-center text-[18px] leading-[26.756px] text-white">
        {description}
      </div>
    </div>
  );
}
