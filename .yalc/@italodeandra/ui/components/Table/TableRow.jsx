import clsx from "../../utils/clsx";
function TableRow({ children, onClick, className, ...props }) {
    return (<tr onClick={onClick} className={clsx({
            "group/row cursor-pointer hover:bg-black/5 dark:hover:bg-white/5": !!onClick,
        }, className)} {...props}>
      {children}
    </tr>);
}
export default TableRow;
