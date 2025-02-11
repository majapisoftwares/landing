import clsx from "../../utils/clsx";
import { forwardRef } from "react";
function TableRow({ children, onClick, className, ...props }, ref) {
    return (<tr ref={ref} onClick={onClick} className={clsx({
            "group/row cursor-pointer hover:bg-black/5 dark:hover:bg-white/5": !!onClick,
        }, className)} {...props}>
      {children}
    </tr>);
}
export default forwardRef(TableRow);
