import { ForwardedRef, ReactNode } from "react";
declare function Tooltip({ children, content, side, delayDuration, }: {
    children?: ReactNode;
    content?: ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    delayDuration?: number;
}, ref: ForwardedRef<HTMLButtonElement>): import("react").JSX.Element;
declare const _default: typeof Tooltip;
export default _default;
