import { ComponentProps, ForwardedRef } from "react";
import { InputProps } from "./Input";
import { NumericFormatProps } from "react-number-format";
declare function NumericInput(props: Omit<NumericFormatProps, "customInput"> & InputProps<undefined>, ref: ForwardedRef<HTMLInputElement>): import("react").JSX.Element;
export type NumericInputProps = ComponentProps<typeof NumericInput>;
declare const _default: import("react").ForwardRefExoticComponent<Omit<Omit<NumericFormatProps, "customInput"> & {
    loading?: boolean;
} & import("./UnstyledInput").UnstyledInputCommonProps & {
    select?: undefined;
} & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
