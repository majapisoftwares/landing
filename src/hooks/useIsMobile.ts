import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return isMobile;
}
