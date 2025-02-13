import { ComponentType, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
export type UnstyledInputCommonProps = {
    label?: ReactNode;
    inputClassName?: string;
    labelClassName?: string;
    helpTextClassName?: string;
    trailingClassName?: string;
    trailingInputClassName?: string;
    leadingClassName?: string;
    leadingInputClassName?: string;
    helpText?: ReactNode;
    trailing?: ReactNode;
    leading?: ReactNode;
    as?: ComponentType;
    innerClassName?: string;
    error?: boolean | string;
};
export type UnstyledInputProps<Select extends boolean | undefined> = UnstyledInputCommonProps & {
    select?: Select;
} & (Select extends string ? DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> : DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>);
declare function UnstyledInput<Select extends boolean | undefined>({ id, label, className, inputClassName, labelClassName, helpTextClassName, trailingClassName, trailingInputClassName, leadingClassName, leadingInputClassName, helpText, type, leading, trailing, select, children, as, innerClassName, value, ...props }: UnstyledInputProps<Select>): import("react").JSX.Element;
export default UnstyledInput;
