import React, { ComponentProps } from "react";
import * as RDropdownMenu from "@radix-ui/react-dropdown-menu";
declare function DropdownMenuContent({ className, arrowClassName, children, sideOffset, collisionPadding, ...props }: ComponentProps<typeof RDropdownMenu.Content> & {
    arrowClassName?: string;
}): React.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: ComponentProps<typeof RDropdownMenu.Separator>): React.JSX.Element;
declare function DropdownMenuItem({ className, href, ...props }: ComponentProps<typeof RDropdownMenu.Item> & {
    href?: string;
}): React.JSX.Element;
declare function DropdownMenuLabel({ className, ...props }: ComponentProps<typeof RDropdownMenu.Item>): React.JSX.Element;
declare function DropdownMenuItemIndicator({ className, ...props }: ComponentProps<typeof RDropdownMenu.ItemIndicator>): React.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, indicatorClassName, ...props }: ComponentProps<typeof RDropdownMenu.CheckboxItem> & {
    indicatorClassName?: string;
}): React.JSX.Element;
declare function DropdownMenuSubContent({ className, children, sideOffset, alignOffset, ...props }: ComponentProps<typeof RDropdownMenu.SubContent>): React.JSX.Element;
declare function DropdownMenuSubTrigger({ className, href, children, ...props }: ComponentProps<typeof RDropdownMenu.SubTrigger> & {
    href?: string;
}): React.JSX.Element;
declare const DropdownMenu: {
    Root: React.FC<RDropdownMenu.DropdownMenuProps>;
    Trigger: React.ForwardRefExoticComponent<RDropdownMenu.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Content: typeof DropdownMenuContent;
    Item: typeof DropdownMenuItem;
    Separator: typeof DropdownMenuSeparator;
    CheckboxItem: typeof DropdownMenuCheckboxItem;
    Label: typeof DropdownMenuLabel;
    ItemIndicator: typeof DropdownMenuItemIndicator;
    Sub: React.FC<RDropdownMenu.DropdownMenuSubProps>;
    SubContent: typeof DropdownMenuSubContent;
    SubTrigger: typeof DropdownMenuSubTrigger;
};
export default DropdownMenu;
