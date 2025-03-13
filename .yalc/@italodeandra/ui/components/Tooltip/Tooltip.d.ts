import { ReactNode, Ref } from "react";
declare function Tooltip({ children, content, side, delayDuration, className, arrowClassName, ref, }: {
    children?: ReactNode;
    content?: ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    delayDuration?: number;
    className?: string;
    arrowClassName?: string;
    ref?: Ref<HTMLButtonElement>;
}): import("react").JSX.Element;
export default Tooltip;
