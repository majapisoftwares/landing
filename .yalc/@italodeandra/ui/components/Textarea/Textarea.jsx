import Input from "../Input";
import TextareaAutosize from "react-textarea-autosize";
function Textarea(props) {
    return <Input as={TextareaAutosize} {...props}/>;
}
export default Textarea;
