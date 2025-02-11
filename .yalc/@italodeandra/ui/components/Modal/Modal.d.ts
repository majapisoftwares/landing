import { ComponentPropsWithoutRef, CSSProperties, ReactElement, ReactNode } from "react";
import Button from "../Button";
declare function Modal({ open, onClose, children, overlayClassName, panelClassName, dialogClassName, dialogOuterPanelClassName, dialogOverflowClassName, style, }: {
    open?: boolean;
    onClose?: () => void;
    children?: ReactNode;
    overlayClassName?: string;
    panelClassName?: string;
    dialogClassName?: string;
    dialogOuterPanelClassName?: string;
    dialogOverflowClassName?: string;
    style?: CSSProperties;
}): import("react").JSX.Element;
declare namespace Modal {
    var Container: typeof ModalContainer;
    var Title: typeof ModalTitle;
    var Content: typeof ModalContent;
    var Actions: typeof ModalActions;
    var Icon: typeof ModalIcon;
    var CloseButton: typeof ModalCloseButton;
}
export default Modal;
declare function ModalContainer({ children, className, }: {
    children?: ReactNode;
    className?: string;
}): import("react").JSX.Element;
declare function ModalTitle({ children, className, }: {
    children?: ReactNode;
    className?: string;
}): import("react").JSX.Element;
declare function ModalContent({ children, className, }: {
    children?: ReactNode;
    className?: string;
}): import("react").JSX.Element;
declare function ModalActions({ children, className, }: {
    children?: ReactNode;
    className?: string;
}): import("react").JSX.Element;
declare function ModalIcon({ children }: {
    children?: ReactElement;
}): import("react").JSX.Element;
declare function ModalCloseButton({ className, ...props }: ComponentPropsWithoutRef<typeof Button>): import("react").JSX.Element;
