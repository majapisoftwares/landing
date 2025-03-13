import { ComponentPropsWithoutRef, ReactElement, ReactNode, Ref } from "react";
import Button from "../Button/Button";
import { UnstyledButtonProps } from "../Button/UnstyledButton";
import { TextProps } from "../Text";
export declare const defaultMenuItemsClassName = "z-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800";
export type MenuProps = {
    className?: string;
    position?: "left" | "right" | "bottom-right" | "bottom-left";
    iconClassName?: string;
    menuItemsClassName?: string;
    buttonProps?: ComponentPropsWithoutRef<typeof Button>;
    label?: ReactNode;
    children?: ReactNode;
    button?: ReactNode;
    unmount?: boolean;
    ref?: Ref<HTMLDivElement>;
};
export type MenuItemProps<T extends HTMLElement = HTMLButtonElement> = UnstyledButtonProps<T> & {
    icon?: ReactElement<{
        className?: string;
    }>;
};
export type MenuLabelProps = TextProps;
declare const _default: (({ className, iconClassName, position, children, label, button, buttonProps, unmount, menuItemsClassName, ...props }: MenuProps) => import("react").JSX.Element) & {
    Label: (props: MenuLabelProps) => import("react").JSX.Element;
    Item: <T extends HTMLElement = HTMLButtonElement>({ className, icon, children, ...props }: MenuItemProps<T>) => import("react").JSX.Element;
};
export default _default;
