import NextLink from "next/link";
import clsx from "../../utils/clsx";
export default function Link({ className, href, ...props }) {
    className = clsx("text-primary-500 underline decoration-primary-500/40 decoration-2 transition-colors hover:decoration-primary-500", className);
    if (href) {
        return <NextLink href={href} {...props} className={className}/>;
    }
    return (<button {...props} className={className} type="button"/>);
}
