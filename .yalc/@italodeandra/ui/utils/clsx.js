import originalClsx from "clsx";
import { twMerge } from "tailwind-merge";
export default function clsx(...args) {
    return twMerge(originalClsx(...args));
}
