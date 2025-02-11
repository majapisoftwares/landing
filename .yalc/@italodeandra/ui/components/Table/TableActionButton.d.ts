import { ReactNode } from "react";
import { ButtonProps } from "../Button/Button";
export type TableActionButtonProps<T extends HTMLElement = HTMLButtonElement> = {
    title?: ReactNode;
} & ButtonProps<T>;
export default function TableActionButton<T extends HTMLElement = HTMLButtonElement>({ children, className, title, onClick, ...props }: TableActionButtonProps<T>): import("react").JSX.Element;
