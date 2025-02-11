import React, { ReactElement } from "react";
export default function Resizable({ children, minWidth, maxWidth, width, onResize, }: {
    children: ReactElement;
    minWidth?: number;
    maxWidth?: number;
    width?: number;
    onResize: (width?: number) => void;
}): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
