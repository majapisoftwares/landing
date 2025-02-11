import { ComponentProps } from "react";
import { InputProps } from "./Input";
import { PatternFormatProps } from "react-number-format";
declare function PatternInput(props: Omit<PatternFormatProps, "customInput"> & InputProps<undefined>): import("react").JSX.Element;
export type PatternInputProps = ComponentProps<typeof PatternInput>;
export default PatternInput;
