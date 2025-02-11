import { ReactNode } from "react";
export type TableCellProps = {
    children?: ReactNode;
    className?: string;
    actions?: boolean;
    colSpan?: number;
    title?: string;
};
export default function TableCell({ children, className, actions, colSpan, title, }: TableCellProps): import("react").JSX.Element;
