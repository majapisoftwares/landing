import React from "react";
import { ConverterOptions } from "showdown";
export type MarkdownProps = {
    children?: string;
    className?: string;
    options?: ConverterOptions;
};
export default function Markdown({ children, className, options, }: MarkdownProps): React.JSX.Element;
