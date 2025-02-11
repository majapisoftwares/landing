import clsx from "../../utils/clsx";
import { cloneElement, } from "react";
import Button from "../Button/Button";
import Tooltip from "../Tooltip";
export default function TableActionButton({ children, className, title, onClick, ...props }) {
    const handleClick = (e) => {
        e.stopPropagation();
        onClick?.(e);
    };
    const button = (<Button icon variant="text" className={clsx("!p-1", className)} onClick={handleClick} {...props}>
      {cloneElement(children, {
            className: clsx("!h-[20px] !w-[20px]", children?.props?.className),
        })}
    </Button>);
    if (title) {
        return <Tooltip content={title}>{button}</Tooltip>;
    }
    return button;
}
