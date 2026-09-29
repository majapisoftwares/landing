import { motion, useReducedMotion } from "motion/react";
import { BrainCircuit, Code2, Lightbulb, Palette } from "lucide-react";
import useIsMobile from "../../../hooks/useIsMobile";

type ServiceCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
};

export function ServiceCard({
  image,
  category,
  title,
  description,
}: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const ServiceIcon =
    category === "Design"
      ? Palette
      : category === "Technology" || category === "Tecnologia"
        ? Code2
        : category === "Intelligence" || category === "Inteligência"
          ? BrainCircuit
          : Lightbulb;

  return (
    <motion.article
      className="group relative isolate flex h-[466px] min-w-0 overflow-hidden rounded-[8px] border border-white/10 bg-black transition-[border-color,box-shadow] duration-200 ease-out md:hover:border-white/20 md:hover:shadow-[0_0_32px_rgb(255_255_255_/_0.08)] focus-visible:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%), url(${image})`,
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, cover",
        backdropFilter: "blur(50px)",
      }}
      role="group"
      tabIndex={0}
      whileHover={
        shouldReduceMotion || isMobile ? undefined : { y: -8, scale: 1.015 }
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0 bg-black/0 transition-[background-color] duration-200 ease-out md:group-hover:bg-black/20 md:group-focus-visible:bg-black/20" />

      <div className="absolute top-5 left-5 z-10 flex size-[51px] items-center justify-center rounded-[11px] border border-white/10 bg-black/45 text-white shadow-[0_8px_24px_rgb(0_0_0_/_0.28)] backdrop-blur-md">
        <ServiceIcon
          aria-hidden="true"
          className="size-[22px]"
          strokeWidth={1.6}
        />
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-10 px-5 pb-7">
        <h2 className="font-sora min-h-[50px] text-[21px] leading-tight font-normal text-white">
          {title}
        </h2>
        <p className="font-dm mt-3 max-h-[96px] translate-y-0 overflow-hidden text-[12px] leading-[1.35] font-normal text-white/80 opacity-100 transition-[max-height,opacity,transform] duration-200 ease-out md:max-h-0 md:translate-y-2 md:opacity-0 md:group-hover:max-h-[96px] md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:max-h-[96px] md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
