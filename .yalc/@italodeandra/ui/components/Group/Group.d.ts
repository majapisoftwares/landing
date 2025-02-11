import type { DetailedHTMLProps, HTMLAttributes } from "react";
export type GroupProps = {
    wrap?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export default function Group({ wrap, className, ...props }: GroupProps): import("react").JSX.Element;
