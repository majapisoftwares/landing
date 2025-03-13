import { ReactNode } from "react";
import TableActionButton from "./TableActionButton";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import TableFooterWithPagination from "./TableFooterWithPagination";
export type TableProps = {
    children?: ReactNode;
    className?: string;
    hideBorder?: boolean;
    autoHeight?: boolean;
};
declare function Table({ children, className, hideBorder, autoHeight, }: TableProps): import("react").JSX.Element;
declare namespace Table {
    var Row: typeof TableRow;
    var Head: typeof TableHead;
    var Body: typeof TableBody;
    var Cell: typeof TableCell;
    var ActionButton: typeof TableActionButton;
    var Header: typeof TableHeader;
    var Footer: typeof TableFooter;
    var FooterWithPagination: typeof TableFooterWithPagination;
}
export default Table;
