import React, { ComponentProps, ReactElement, ReactNode } from "react";
import { DateRange } from "react-day-picker";
import Button from "../Button";
export type { DateRange };
export default function DateRangePicker({ value, onValueChange, children, buttonProps, fromDate, toDate, min, max, footer, monthFooter, }: {
    value?: DateRange;
    onValueChange?: (value?: DateRange) => void;
    children?: (value: string) => ReactElement;
    buttonProps?: ComponentProps<typeof Button>;
    fromDate?: Date;
    toDate?: Date;
    min?: number;
    max?: number;
    footer?: ReactNode;
    monthFooter?: ReactNode;
}): React.JSX.Element;
