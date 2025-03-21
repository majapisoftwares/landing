import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import clsx from "@italodeandra/ui/utils/clsx";

export function RevealTailwind({
  children,
  delayDesktop,
  delayMobile,
  className,
}: {
  children: ReactNode;
  delayDesktop: number;
  delayMobile: number;
  className: string;
}) {
  const [gotVisible, setGotVisible] = useState(false);
  const intersectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkIfRefIsOnScreen = () => {
      if (intersectionRef.current) {
        const intersection = intersectionRef.current.getBoundingClientRect();
        if (intersection.top < window.innerHeight) {
          setGotVisible(true);
          window.removeEventListener("scroll", checkIfRefIsOnScreen);
        }
      }
    };
    window.addEventListener("scroll", checkIfRefIsOnScreen);
    return () => {
      window.removeEventListener("scroll", checkIfRefIsOnScreen);
    };
  }, []);

  return (
    <div
      ref={intersectionRef}
      className={clsx(
        "transition-[opacity,transform] delay-[--delay-mobile] duration-500 md:delay-[--delay-desktop]",
        "translate-y-[75px] opacity-0",
        "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100",
        className,
      )}
      data-visible={gotVisible ? "true" : "false"}
      style={
        {
          "--delay-desktop": `${delayDesktop}s`,
          "--delay-mobile": `${delayMobile}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
