import { ReactNode } from "react";
import { ButtonProps } from "../Button";
export default function Tabs({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export declare function Tab({ children, selected, onClick, className, ...props }: Omit<ButtonProps, "variant"> & {
    selected?: boolean;
}): import("react").JSX.Element;
