import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
declare const styles: {
    variants: {
        default: {
            root: string;
            icon: string;
            title: string;
            content: string;
        };
        error: {
            root: string;
            icon: string;
            title: string;
            content: string;
        };
        success: {
            root: string;
            icon: string;
            title: string;
            content: string;
        };
    };
};
export type AlertProps = {
    title: ReactNode;
    variant?: keyof (typeof styles)["variants"];
    children?: ReactNode;
    actions?: ReactNode;
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "title">;
export default function Alert({ variant, title, children, className, actions, ...props }: AlertProps): import("react").JSX.Element;
export {};
