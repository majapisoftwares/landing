import React, { useCallback, useMemo, useState, } from "react";
import { DayPicker, } from "react-day-picker";
import dayjs from "dayjs";
import { CalendarIcon } from "@heroicons/react/20/solid";
import Button from "../Button";
import clsx from "../../utils/clsx";
import { useDeepCompareEffect } from "react-use";
import Popover from "../Popover";
import { dayPickerButtonClassName, dayPickerClassNames, } from "../../styles/DayPicker.classNames";
export default function DatePicker({ value, onValueChange, children, buttonProps, fromDate, toDate, footer, monthFooter, modifiers, modifiersClassNames, disabled, defaultMonth, }) {
    const [open, setOpen] = useState(false);
    const convertedValue = value && typeof value === "string"
        ? dayjs(value).toDate()
        : (value || undefined);
    const [date, setDate] = useState(convertedValue);
    useDeepCompareEffect(() => {
        onValueChange?.(date);
    }, [date || {}]);
    useDeepCompareEffect(() => {
        setDate(convertedValue);
    }, [convertedValue || {}]);
    const buttonText = useMemo(() => {
        return date ? dayjs(date).format("ll") : "";
    }, [date]);
    const children2 = children ? (children(buttonText)) : (<Button {...buttonProps} leading={buttonProps?.leading || <CalendarIcon />} className={clsx(dayPickerButtonClassName, buttonProps?.className)}>
      {buttonText}
    </Button>);
    const defaultDisabled = useMemo(() => [
        ...(fromDate
            ? [
                {
                    before: fromDate,
                },
            ]
            : []),
        ...(toDate
            ? [
                {
                    after: toDate,
                },
            ]
            : []),
    ], [fromDate, toDate]);
    const onSelect = useCallback((value) => {
        setOpen(false);
        setDate(value);
    }, []);
    return (<Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{children2}</Popover.Trigger>
      <Popover.Content>
        <DayPicker mode="single" selected={date} onSelect={onSelect} showOutsideDays classNames={dayPickerClassNames} startMonth={fromDate} endMonth={toDate} footer={monthFooter} modifiers={modifiers} modifiersClassNames={modifiersClassNames} disabled={disabled || defaultDisabled} defaultMonth={defaultMonth}/>
        {footer}
      </Popover.Content>
    </Popover.Root>);
}
