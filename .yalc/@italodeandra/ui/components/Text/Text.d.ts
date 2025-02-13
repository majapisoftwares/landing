import { ComponentProps, DetailedHTMLProps, HTMLAttributes } from "react";
import NextLink from "next/link";
export declare const defaultTextStyles: {
    variant: {
        default: string;
        label: string;
        secondary: string;
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
    variant?: keyof (typeof defaultTextStyles)["variant"] | "link";
    size?: keyof (typeof defaultTextStyles)["size"];
    inline?: boolean;
} & Partial<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & ComponentProps<typeof NextLink>>;
declare function Text({ inline, variant, className, href, target, size, ...props }: TextProps): import("react").JSX.Element;
export default Text;
