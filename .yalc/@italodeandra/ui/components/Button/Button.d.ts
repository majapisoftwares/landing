import { UnstyledButtonProps } from "./UnstyledButton";
import { ReactElement } from "react";
declare const styles: {
    root: string;
    variant: {
        filled: string;
        light: string;
        outlined: string;
        text: string;
        custom: string;
    };
    color: {
        primary: string;
        success: string;
        error: string;
        gray: string;
        default: string;
    };
    variantColor: {
        "filled-primary": string;
        "filled-success": string;
        "filled-error": string;
        "filled-gray": string;
        "filled-default": string;
        "light-primary": string;
        "light-success": string;
        "light-error": string;
        "light-gray": string;
        "light-default": string;
        "outlined-primary": string;
        "outlined-success": string;
        "outlined-error": string;
        "outlined-gray": string;
        "outlined-default": string;
        "text-primary": string;
        "text-success": string;
        "text-error": string;
        "text-gray": string;
        "text-default": string;
    };
    disabled: string;
    size: {
        xs: {
            button: string;
        };
        sm: {
            button: string;
        };
        md: {
            button: string;
        };
        lg: {
            button: string;
        };
        xl: {
            button: string;
        };
    };
    icon: {
        xs: {
            button: string;
            icon: string;
            leading: string;
            trailing: string;
        };
        sm: {
            button: string;
            icon: string;
            leading: string;
            trailing: string;
        };
        md: {
            button: string;
            icon: string;
            leading: string;
            trailing: string;
        };
        lg: {
            button: string;
            icon: string;
            leading: string;
            trailing: string;
        };
        xl: {
            button: string;
            icon: string;
            leading: string;
            trailing: string;
        };
    };
};
export type ButtonProps<T extends HTMLElement = HTMLButtonElement> = Omit<UnstyledButtonProps<T>, "size"> & {
    variant?: keyof (typeof styles)["variant"];
    color?: keyof (typeof styles)["color"];
    size?: keyof (typeof styles)["size"];
    icon?: boolean;
    leading?: ReactElement;
    trailing?: ReactElement;
    loading?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    trailingClassName?: string;
    leadingClassName?: string;
};
declare const _default: import("react").ForwardRefExoticComponent<Omit<UnstyledButtonProps<HTMLElement>, "size"> & {
    variant?: keyof (typeof styles)["variant"];
    color?: keyof (typeof styles)["color"];
    size?: keyof (typeof styles)["size"];
    icon?: boolean;
    leading?: ReactElement;
    trailing?: ReactElement;
    loading?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    trailingClassName?: string;
    leadingClassName?: string;
} & import("react").RefAttributes<HTMLElement>>;
export default _default;
