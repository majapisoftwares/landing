import clsx from "../../utils/clsx";
import Link from "../Link";
export const defaultTextStyles = {
    variant: {
        default: "text-zinc-700 dark:text-zinc-200",
        label: "text-zinc-800 font-medium dark:text-zinc-100",
        secondary: "text-sm text-zinc-500 dark:text-zinc-400",
    },
    size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
    },
};
function Text({ inline, variant = "default", className, href, target, size = variant !== "label" ? "base" : "sm", ...props }) {
    if (href || variant === "link") {
        return (<Link href={href} target={target} {...props} className={className}/>);
    }
    className = clsx(defaultTextStyles.variant[variant], defaultTextStyles.size[size], className);
    if (inline) {
        return <span {...props} className={className}/>;
    }
    return <div {...props} className={className}/>;
}
export default Text;
