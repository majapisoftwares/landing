import { ComponentProps } from "react";
import { InputProps } from "./Input";
import { NumericFormatProps } from "react-number-format";
declare function NumericInput({ ref, ...props }: Omit<NumericFormatProps, "customInput"> & InputProps<undefined>): import("react").JSX.Element;
export type NumericInputProps = ComponentProps<typeof NumericInput>;
export default NumericInput;
