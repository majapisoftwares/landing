import clsx from "../../utils/clsx";
export default function Group({ wrap, className, ...props }) {
    return (<div {...props} className={clsx("flex gap-2", {
            "flex-wrap": wrap,
        }, className)}/>);
}
