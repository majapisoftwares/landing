import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import useBreakpoint from "../../hooks/useBreakpoint";

type DelayType = number | { mobile?: number; desktop?: number };

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: DelayType;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const isMobile = useBreakpoint();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedDelay =
    typeof delay === "number"
      ? delay
      : isMobile
        ? (delay.mobile ?? 0)
        : (delay.desktop ?? 0);

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: mounted ? resolvedDelay : 0 }}
    >
      {children}
    </motion.div>
  );
}
