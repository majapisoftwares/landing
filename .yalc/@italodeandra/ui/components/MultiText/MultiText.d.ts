import { ChangeEventHandler, FocusEventHandler } from "react";
export interface MultiTextProps {
    value?: string[];
    onChangeValue?: (value: string[]) => void;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    id?: string;
    className?: string;
    helpText?: string;
    label?: string;
    validate?: (value: string) => boolean;
    invalidHelpText?: string;
    error?: boolean;
    format?: (item: string) => string;
    readOnly?: boolean;
    loading?: boolean;
    type?: string;
    required?: boolean;
}
declare const _default: import("react").ForwardRefExoticComponent<MultiTextProps & import("react").RefAttributes<HTMLDivElement>>;
export default _default;
