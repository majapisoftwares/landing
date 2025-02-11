import { ReactNode } from "react";
export interface InputWrapperProps {
    children?: ReactNode;
    className?: string;
    label?: string;
    id?: string;
    helpText?: string;
    error?: boolean;
    required?: boolean;
}
export default function InputWrapper({ children, className, label, id, helpText, error, required, }: InputWrapperProps): import("react").JSX.Element;
