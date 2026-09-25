import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewportAmount?: number;
  style?: CSSProperties;
};

/** A small, accessible scroll-in transition shared by the landing sections. */
export function Reveal({
  children,
  className,
  delay = 0,
  viewportAmount = 0.2,
  style,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
