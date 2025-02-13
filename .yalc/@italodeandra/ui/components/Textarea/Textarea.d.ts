import { InputProps } from "../Input";
import { TextareaAutosizeProps } from "react-textarea-autosize/dist/declarations/src";
export type TextareaProps = InputProps<false> & Partial<Pick<TextareaAutosizeProps, "maxRows" | "minRows" | "onHeightChange" | "cacheMeasurements">>;
declare function Textarea(props: TextareaProps): import("react").JSX.Element;
export default Textarea;
