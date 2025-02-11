import { ReactNode } from "react";
import Input, { UnstyledInputProps } from "../Input";
export interface UnstyledAutocompleteProps<T extends {
    _id: string;
}> extends Omit<UnstyledInputProps<false>, "as" | "onSelect" | "inputClassName" | "innerClassName" | "value"> {
    placeholder?: string;
    emptyText?: string;
    items?: T[];
    filterProperty?: keyof T;
    filterFunction?: (item: T) => boolean;
    onSelect?: (item: T | null) => void;
    renderProperty?: keyof T;
    renderFunction?: (item: T) => ReactNode;
    query?: string;
    onChangeQuery?: (query: string) => void;
    loading?: boolean;
    emptyTextClassName?: string;
    leadingClassName?: string;
    optionsClassName?: string;
    optionClassName?: ({ active, selected, }: {
        active: boolean;
        selected: boolean;
    }) => string;
    inputInnerClassName?: string;
    inputElementClassName?: string;
    leading?: ReactNode;
    as?: typeof Input;
    static?: boolean;
    displayValue?: (item: T | null) => string;
    value?: T | null;
    itemsRenderLimit?: number;
    disabledItems?: string[];
}
export default function UnstyledAutocomplete<T extends {
    _id: string;
}>({ placeholder, emptyText, items, renderProperty, renderFunction, filterProperty, filterFunction, onSelect, query: defaultQuery, onChangeQuery, loading, emptyTextClassName, optionsClassName, optionClassName, inputInnerClassName, inputElementClassName, as, trailing, trailingClassName, trailingInputClassName, leadingInputClassName, static: isStatic, displayValue, value, readOnly, itemsRenderLimit, disabledItems, ...props }: UnstyledAutocompleteProps<T>): import("react").JSX.Element;
