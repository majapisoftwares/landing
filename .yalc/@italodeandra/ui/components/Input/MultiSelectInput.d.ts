import { ComponentProps, ForwardedRef } from "react";
import { InputProps } from "./Input";
declare function MultiSelectInput({ options, value, onChange, emptyLabel, ...props }: Omit<InputProps<undefined>, "value" | "onChange"> & {
    options: {
        value: string;
        name: string;
    }[];
    value?: string[];
    onChange?: (value: string[]) => void;
    emptyLabel?: string;
}, ref: ForwardedRef<HTMLInputElement>): import("react").JSX.Element;
export type MultiSelectInputProps = ComponentProps<typeof MultiSelectInput>;
declare const _default: import("react").ForwardRefExoticComponent<Omit<Omit<InputProps<undefined>, "onChange" | "value"> & {
    options: {
        value: string;
        name: string;
    }[];
    value?: string[];
    onChange?: (value: string[]) => void;
    emptyLabel?: string;
}, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
