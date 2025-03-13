import { ComponentProps } from "react";
import { InputProps } from "./Input";
declare function MultiSelectInput({ options, value, onChange, emptyLabel, ref, ...props }: Omit<InputProps<undefined>, "value" | "onChange"> & {
    options: {
        value: string;
        name: string;
    }[];
    value?: string[];
    onChange?: (value: string[]) => void;
    emptyLabel?: string;
}): import("react").JSX.Element;
export type MultiSelectInputProps = ComponentProps<typeof MultiSelectInput>;
export default MultiSelectInput;
