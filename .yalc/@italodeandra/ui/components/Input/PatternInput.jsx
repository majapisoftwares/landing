import Input from "./Input";
import { PatternFormat } from "react-number-format";
function PatternInput(props) {
    return <PatternFormat customInput={Input} {...props}/>;
}
export default PatternInput;
