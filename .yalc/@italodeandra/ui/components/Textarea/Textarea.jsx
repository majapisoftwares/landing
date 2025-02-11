import Input from "../Input";
import TextareaAutosize from "react-textarea-autosize";
import { forwardRef } from "react";
function Textarea(props, ref) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Input as={TextareaAutosize} {...props} ref={ref}/>;
}
export default forwardRef(Textarea);
