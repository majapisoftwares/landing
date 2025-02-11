import clsx from "../../utils/clsx";
export default function Skeleton({ className, ...props }) {
    return (<div className={clsx("animate-pulse rounded", "bg-zinc-300 text-zinc-300 dark:bg-zinc-700 dark:text-zinc-700", className)} {...props}/>);
}
