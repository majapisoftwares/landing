import React, { CSSProperties, ReactElement, ReactNode } from "react";
export default function Resizable({ children, minWidth, maxWidth, width, onResize, }: {
    children: ReactElement;
    minWidth?: number;
    maxWidth?: number;
    width?: number;
    onResize: (width?: number) => void;
}): React.ReactElement<{
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}, string | React.JSXElementConstructor<any>>;
