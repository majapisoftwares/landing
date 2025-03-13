import { InputProps } from "../Input";
declare function DateInput({ readOnly, value, onValueChange, ref, ...props }: Omit<InputProps<false>, "value"> & {
    value?: string;
    onValueChange?: (value?: string) => void;
}): import("react").JSX.Element;
export default DateInput;
