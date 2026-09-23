import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LineShadowTextProps = Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children"
> & {
  children: string;
  shadowColor?: string;
};

export function LineShadowText({
  children,
  className,
  shadowColor = "white",
  style,
  ...props
}: LineShadowTextProps) {
  return (
    <span
      {...props}
      data-text={children}
      style={{
        ...style,
        "--shadow-color": shadowColor,
      } as CSSProperties}
      className={cn("line-shadow-text", className)}
    >
      {children}
    </span>
  );
}
