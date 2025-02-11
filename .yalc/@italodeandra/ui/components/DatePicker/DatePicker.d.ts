import React, { ComponentProps, ReactElement, ReactNode } from "react";
import { DateRange, Matcher, ModifiersClassNames } from "react-day-picker";
import Button from "../Button";
import type { DayPickerProps } from "react-day-picker/src/types/props";
export type { DateRange };
export default function DatePicker({ value, onValueChange, children, buttonProps, fromDate, toDate, footer, monthFooter, modifiers, modifiersClassNames, disabled, defaultMonth, }: {
    value?: Date | string;
    onValueChange?: (value?: Date) => void;
    children?: (value: string) => ReactElement;
    buttonProps?: ComponentProps<typeof Button>;
    fromDate?: Date;
    toDate?: Date;
    footer?: ReactNode;
    monthFooter?: ReactNode;
    modifiers?: DayPickerProps["modifiers"];
    modifiersClassNames?: ModifiersClassNames;
    disabled?: Matcher | Matcher[];
    defaultMonth?: Date;
}): React.JSX.Element;
