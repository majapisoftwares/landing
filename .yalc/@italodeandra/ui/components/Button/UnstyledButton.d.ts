import type { HTMLProps } from "react";
export type UnstyledButtonProps<T extends HTMLElement = HTMLButtonElement> = {
    href?: string | null;
    target?: string;
    rel?: string;
    download?: string;
    as?: string;
} & Omit<HTMLProps<T>, "ref" | "href">;
declare const _default: import("react").ForwardRefExoticComponent<{
    href?: string | null;
    target?: string;
    rel?: string;
    download?: string;
    as?: string;
} & Omit<HTMLProps<HTMLElement>, "href" | "ref"> & import("react").RefAttributes<HTMLElement>>;
export default _default;
