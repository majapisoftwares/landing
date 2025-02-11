import React, { ComponentProps } from "react";
import * as RContextMenu from "@radix-ui/react-context-menu";
declare function ContextMenuContent({ className, children, ...props }: ComponentProps<typeof RContextMenu.Content>): React.JSX.Element;
declare function ContextMenuSeparator({ className, ...props }: ComponentProps<typeof RContextMenu.Separator>): React.JSX.Element;
declare function ContextMenuItem({ className, href, ...props }: ComponentProps<typeof RContextMenu.Item> & {
    href?: string;
}): React.JSX.Element;
declare function ContextMenuItemIndicator({ className, ...props }: ComponentProps<typeof RContextMenu.ItemIndicator>): React.JSX.Element;
declare function ContextMenuCheckboxItem({ className, children, indicatorClassName, ...props }: ComponentProps<typeof RContextMenu.CheckboxItem> & {
    indicatorClassName?: string;
}): React.JSX.Element;
declare function ContextMenuSubContent({ className, children, sideOffset, alignOffset, ...props }: ComponentProps<typeof RContextMenu.SubContent>): React.JSX.Element;
declare function ContextMenuSubTrigger({ className, href, children, ...props }: ComponentProps<typeof RContextMenu.SubTrigger> & {
    href?: string;
}): React.JSX.Element;
declare const ContextMenu: {
    Root: React.FC<RContextMenu.ContextMenuProps>;
    Trigger: React.ForwardRefExoticComponent<RContextMenu.ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>;
    Content: typeof ContextMenuContent;
    Item: typeof ContextMenuItem;
    Separator: typeof ContextMenuSeparator;
    CheckboxItem: typeof ContextMenuCheckboxItem;
    ItemIndicator: typeof ContextMenuItemIndicator;
    Sub: React.FC<RContextMenu.ContextMenuSubProps>;
    SubContent: typeof ContextMenuSubContent;
    SubTrigger: typeof ContextMenuSubTrigger;
};
export default ContextMenu;
