import { ChangeEventHandler, FocusEventHandler, Ref } from "react";
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
    ref?: Ref<HTMLInputElement>;
}
declare function MultiText({ value, onChangeValue, onChange, onBlur, name, id, className, helpText, label, validate, invalidHelpText, error, format, readOnly, loading, type, required, ref, }: MultiTextProps): import("react").JSX.Element;
export default MultiText;
