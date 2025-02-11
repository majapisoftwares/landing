import { ComponentProps, DetailedHTMLProps, HTMLAttributes } from "react";
import NextLink from "next/link";
export declare const defaultTextStyles: {
    variant: {
        default: string;
        label: string;
        secondary: string;
        link: string;
    };
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
    };
};
export type TextProps = {
    variant?: keyof (typeof defaultTextStyles)["variant"];
    size?: keyof (typeof defaultTextStyles)["size"];
    inline?: boolean;
} & Partial<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & ComponentProps<typeof NextLink>>;
declare const _default: import("react").ForwardRefExoticComponent<Omit<TextProps, "ref"> & import("react").RefAttributes<HTMLDivElement | HTMLAnchorElement>>;
export default _default;
