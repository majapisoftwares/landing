import { cloneElement } from "react";
import clsx from "../../utils/clsx";
export default function InputIcon({ className, children, }) {
    return cloneElement(children, {
        className: clsx("h-5 w-5", className),
    });
}
