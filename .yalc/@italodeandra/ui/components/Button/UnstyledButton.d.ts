import type { HTMLProps } from "react";
export type UnstyledButtonProps<T extends HTMLElement = HTMLButtonElement> = {
    href?: string | null;
    target?: string;
    rel?: string;
    download?: string;
    as?: string;
} & Omit<HTMLProps<T>, "ref" | "href">;
declare const UnstyledButton: <T extends HTMLElement = HTMLButtonElement>({ href, as, ...props }: UnstyledButtonProps<T>) => import("react").JSX.Element;
export default UnstyledButton;
