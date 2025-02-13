import { ComponentProps } from "react";
import * as RSelect from "@radix-ui/react-select";
import Button from "../Button";
declare function SelectContent({ className, children, ...props }: ComponentProps<typeof RSelect.Content>): import("react").JSX.Element;
declare function SelectSeparator({ className, ...props }: ComponentProps<typeof RSelect.Separator>): import("react").JSX.Element;
declare function SelectItem({ children, className, indicatorClassName, ...props }: ComponentProps<typeof RSelect.Item> & {
    indicatorClassName?: string;
}): import("react").JSX.Element;
declare function SelectTrigger({ className, placeholder, children, readOnly, ref, ...props }: ComponentProps<typeof RSelect.Trigger> & ComponentProps<typeof Button> & {
    placeholder?: string;
}): import("react").JSX.Element;
declare function SelectLabel({ className, ...props }: ComponentProps<typeof RSelect.Label>): import("react").JSX.Element;
declare const Select: {
    Root: import("react").FC<RSelect.SelectProps>;
    Item: typeof SelectItem;
    Trigger: typeof SelectTrigger;
    Content: typeof SelectContent;
    Group: import("react").ForwardRefExoticComponent<RSelect.SelectGroupProps & import("react").RefAttributes<HTMLDivElement>>;
    Label: typeof SelectLabel;
    Separator: typeof SelectSeparator;
    Icon: import("react").ForwardRefExoticComponent<RSelect.SelectIconProps & import("react").RefAttributes<HTMLSpanElement>>;
    Value: import("react").ForwardRefExoticComponent<RSelect.SelectValueProps & import("react").RefAttributes<HTMLSpanElement>>;
};
export default Select;
