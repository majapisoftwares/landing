import React, { ComponentProps, ForwardedRef } from "react";
import * as RSelect from "@radix-ui/react-select";
import Button from "../Button";
declare function SelectContent({ className, children, ...props }: ComponentProps<typeof RSelect.Content>): React.JSX.Element;
declare function SelectSeparator({ className, ...props }: ComponentProps<typeof RSelect.Separator>): React.JSX.Element;
declare function SelectItemComponent({ children, className, indicatorClassName, ...props }: ComponentProps<typeof RSelect.Item> & {
    indicatorClassName?: string;
}, forwardedRef: ForwardedRef<HTMLDivElement>): React.JSX.Element;
declare function SelectTrigger({ className, placeholder, children, readOnly, ...props }: ComponentProps<typeof RSelect.Trigger> & ComponentProps<typeof Button> & {
    placeholder?: string;
}, ref: ForwardedRef<HTMLButtonElement>): React.JSX.Element;
declare function SelectLabel({ className, ...props }: ComponentProps<typeof RSelect.Label>): React.JSX.Element;
declare const Select: {
    Root: React.FC<RSelect.SelectProps>;
    Item: typeof SelectItemComponent;
    Trigger: typeof SelectTrigger;
    Content: typeof SelectContent;
    Group: React.ForwardRefExoticComponent<RSelect.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
    Label: typeof SelectLabel;
    Separator: typeof SelectSeparator;
    Icon: React.ForwardRefExoticComponent<RSelect.SelectIconProps & React.RefAttributes<HTMLSpanElement>>;
    Value: React.ForwardRefExoticComponent<RSelect.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
};
export default Select;
