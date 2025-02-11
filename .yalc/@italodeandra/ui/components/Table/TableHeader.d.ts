import { ReactNode } from "react";
export type TableHeaderProps = {
    title?: ReactNode;
    subtitle?: ReactNode;
    children?: ReactNode;
};
export default function TableHeader({ title, subtitle, children, }: TableHeaderProps): import("react").JSX.Element;
