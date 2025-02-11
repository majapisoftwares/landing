import { forwardRef } from "react";
import Input from "./Input";
import { NumericFormat } from "react-number-format";
function NumericInput(props, ref) {
    return <NumericFormat getInputRef={ref} customInput={Input} {...props}/>;
}
export default forwardRef(NumericInput);
