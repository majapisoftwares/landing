import { forwardRef } from "react";
import clsx from "../../utils/clsx";
function Stack({ className, ...props }, ref) {
    return (<div {...props} className={clsx("flex flex-col gap-2", className)} ref={ref}/>);
}
export default forwardRef(Stack);
