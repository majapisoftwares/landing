import { ReactNode } from "react";
import { UnstyledInputCommonProps } from "../Input";
export interface SwitchProps {
    srLabel?: string;
    checked?: boolean;
    className?: string;
    rightLabel?: ReactNode;
    switchClassName?: string;
    pointerClassName?: string;
    readOnly?: boolean;
    disabled?: boolean;
    onChange?(checked: boolean): void;
}
export default function Switch({ srLabel, checked, onChange, className, rightLabel, readOnly, switchClassName, pointerClassName, disabled, }: SwitchProps): import("react").JSX.Element;
export type SwitchInputProps = UnstyledInputCommonProps & SwitchProps;
export declare function SwitchInput({ inputClassName, checked, ...props }: SwitchInputProps): import("react").JSX.Element;
