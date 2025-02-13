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
declare function Checkbox({ id, label, description, className, labelClassName, descriptionClassName, inputClassName, labelOuterClassName, type, error, helpText, indeterminate, ref, ...props }: CheckboxProps): import("react").JSX.Element;
export default Checkbox;
