import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
export type CheckboxProps = {
    label?: ReactNode;
    description?: ReactNode;
    labelClassName?: string;
    descriptionClassName?: string;
    inputClassName?: string;
    labelOuterClassName?: string;
    error?: boolean;
    helpText?: ReactNode;
    indeterminate?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const _default: import("react").ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
