import { MouseEventHandler, ReactNode } from "react";
export type TableRowProps = {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLTableRowElement>;
    className?: string;
};
declare function TableRow({ children, onClick, className, ...props }: TableRowProps): import("react").JSX.Element;
export default TableRow;
