import Input from "./Input";
import { NumericFormat } from "react-number-format";
function NumericInput({ ref, ...props }) {
    return <NumericFormat getInputRef={ref} customInput={Input} {...props}/>;
}
export default NumericInput;
