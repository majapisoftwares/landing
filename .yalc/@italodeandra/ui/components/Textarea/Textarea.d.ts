import { InputProps } from "../Input";
import { TextareaAutosizeProps } from "react-textarea-autosize/dist/declarations/src";
export type TextareaProps = InputProps<false> & Partial<Pick<TextareaAutosizeProps, "maxRows" | "minRows" | "onHeightChange" | "cacheMeasurements">>;
declare const _default: import("react").ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & import("react").RefAttributes<HTMLTextAreaElement>>;
export default _default;
