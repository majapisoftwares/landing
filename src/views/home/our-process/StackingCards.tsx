import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useRef,
} from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import clsx from "clsx";

type StackingCardsContextValue = {
  scrollProgress: MotionValue<number>;
  totalCards: number;
};

const StackingCardsContext = createContext<StackingCardsContextValue | null>(
  null,
);

type StackingCardsProps = HTMLAttributes<HTMLDivElement> & {
  totalCards: number;
  children: ReactNode;
};

export function StackingCards({
  totalCards,
  children,
  className,
  ...props
}: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <StackingCardsContext.Provider value={{ scrollProgress: scrollYProgress, totalCards }}>
      <div
        ref={containerRef}
        className={clsx("relative", className)}
        {...props}
      >
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

type StackingCardItemProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  index: number;
  children:
    | ReactNode
    | ((imageScale: MotionValue<number>) => ReactNode);
};

export function StackingCardItem({
  index,
  children,
  className,
  ...props
}: StackingCardItemProps) {
  const context = useContext(StackingCardsContext);
  const shouldReduceMotion = useReducedMotion();

  if (!context) {
    throw new Error(
      "StackingCardItem must be used inside a StackingCards component.",
    );
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const targetScale = 1 - (context.totalCards - index) * 0.05;
  const scale = useTransform(
    context.scrollProgress,
    [index / context.totalCards, 1],
    [1, targetScale],
  );

  return (
    <div
      ref={containerRef}
      className={clsx(
        "sticky top-[12vh] flex h-[400px] min-h-0 items-center justify-center sm:h-[360px] md:h-[42vh] md:min-h-[280px]",
        className,
      )}
      {...props}
    >
      <motion.div
        className="relative w-full origin-top"
        style={{
          scale: shouldReduceMotion ? 1 : scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        {typeof children === "function" ? children(imageScale) : children}
      </motion.div>
    </div>
  );
}
