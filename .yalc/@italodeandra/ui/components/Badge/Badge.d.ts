import { ReactNode } from "react";
declare const colorMap: {
    default: {
        badge: string;
        button: string;
    };
    primary: {
        badge: string;
        button: string;
    };
    success: {
        badge: string;
        button: string;
    };
    error: {
        badge: string;
        button: string;
    };
};
declare const sizeMap: {
    badge: {
        sm: string;
        md: string;
        lg: string;
    };
    button: {
        sm: string;
        md: string;
        lg: string;
    };
};
declare const _default: import("react").ForwardRefExoticComponent<{
    color?: keyof typeof colorMap;
    size?: keyof (typeof sizeMap)["badge"];
    className?: string;
    children: ReactNode;
    onActionClick?: () => void;
    href?: string;
    shallow?: boolean;
    onClick?: () => void;
} & import("react").RefAttributes<HTMLSpanElement>>;
export default _default;
