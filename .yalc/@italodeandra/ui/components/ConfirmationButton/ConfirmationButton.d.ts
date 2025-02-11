import { MenuProps } from "../Menu/Menu";
import { ReactNode } from "react";
import { ButtonProps } from "../Button";
export type ConfirmationButtonProps = {
    confirmation: string;
    label: ReactNode;
    confirm?: string;
    onConfirm: () => void;
    loading?: boolean;
    className?: string;
    cancel?: string;
    position?: MenuProps["position"];
    buttonClassName?: string;
    buttonProps?: Partial<ButtonProps>;
    menuProps?: Partial<MenuProps>;
};
export default function ConfirmationButton({ label, confirm, confirmation, onConfirm, loading, className, cancel, position, buttonClassName, buttonProps, menuProps, }: ConfirmationButtonProps): import("react").JSX.Element;
