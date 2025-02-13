import clsx from "../../utils/clsx";
function Stack({ className, ...props }) {
    return <div {...props} className={clsx("flex flex-col gap-2", className)}/>;
}
export default Stack;
