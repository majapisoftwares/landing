import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { WHATSAPP_LINK } from "../../constants";
import { useTranslation } from "../../intl/useTranslation";
import ClientLogosCarousel from "./ClientLogosCarousel";
import LightRays from "./LightRays";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const t = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[760px] overflow-hidden bg-[#000003] pt-36 sm:min-h-[860px] lg:min-h-[1024px] lg:pt-[346px]">
      <LightRays
        raysSpeed={0.4}
        mouseInfluence={0}
        className="pointer-events-none absolute inset-0 z-[1] opacity-80"
      />
      <div className="hero-background-texture pointer-events-none absolute inset-x-0 top-0 z-[2] h-[560px]" />
      <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[180px]" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
        >
          <h1 className="font-dm max-w-[760px] text-center text-[38px] leading-[1.08] font-normal tracking-[-1.52px] text-white sm:text-5xl md:text-6xl lg:text-[58px] lg:leading-[1.16] lg:tracking-[-2.32px]">
            {t("Transforming ideas into digital solutions")}
          </h1>
          <p className="font-dm max-w-[592px] text-center text-sm leading-5 text-zinc-300 lg:text-base">
            {t(
              "Innovation, agility and efficiency to take your company to the next level.",
            )}
          </p>
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: 0.18,
            ease: "easeOut",
          }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        >
          <RainbowButton
            target="_blank"
            href={WHATSAPP_LINK}
            size="lg"
            arcadeHover
            hoverText={t("Get a quote")}
            className="font-dm mt-6 rounded-full px-7 py-3 text-sm"
          >
            <ArrowLongRightIcon className="relative z-10 h-5 w-5" />
          </RainbowButton>
        </motion.div>
        <motion.div
          className="mt-24 min-h-[240px] w-full overflow-hidden pt-16 sm:mt-32 md:min-h-[260px] md:pt-14 lg:mt-[164px]"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: 0.35 }}
        >
          <p className="font-dm text-center text-sm text-white/60 italic">
            {t("Trusted by")}
          </p>
          <div className="mt-8 opacity-60 brightness-125 grayscale md:mt-10">
            <ClientLogosCarousel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
