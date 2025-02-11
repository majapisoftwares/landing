import React, { Fragment } from "react";
import * as RDropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "../../utils/clsx";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { dropdownCheckboxItemClassName, dropdownItemClassName, dropdownItemIndicatorClassName, dropdownLabelClassName, dropdownSeparatorClassName, } from "../../styles/Dropdown.classNames";
import { modalArrowClassName, modalContentClassName, } from "../../styles/Modal.classNames";
function DropdownMenuContent({ className, arrowClassName, children, sideOffset = 4, collisionPadding = 8, ...props }) {
    return (<RDropdownMenu.Portal>
      <RDropdownMenu.Content sideOffset={sideOffset} collisionPadding={collisionPadding} {...props} className={clsx(modalContentClassName, "ui-dropdown-menu-content", className)}>
        {children}
        <RDropdownMenu.Arrow className={clsx(modalArrowClassName, "ui-dropdown-menu-arrow", arrowClassName)}/>
      </RDropdownMenu.Content>
    </RDropdownMenu.Portal>);
}
function DropdownMenuSeparator({ className, ...props }) {
    return (<RDropdownMenu.Separator {...props} className={clsx(dropdownSeparatorClassName, "ui-dropdown-menu-separator", className)}/>);
}
function DropdownMenuItem({ className, href, ...props }) {
    const Wrapper = href ? Link : Fragment;
    return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Wrapper {...(href ? { href } : {})}>
      <RDropdownMenu.Item {...props} className={clsx(dropdownItemClassName, "ui-dropdown-menu-item", className)}/>
    </Wrapper>);
}
function DropdownMenuLabel({ className, ...props }) {
    return (<RDropdownMenu.Item {...props} className={clsx(dropdownLabelClassName, "ui-dropdown-menu-label", className)}/>);
}
function DropdownMenuItemIndicator({ className, ...props }) {
    return (<RDropdownMenu.ItemIndicator className={clsx(dropdownItemIndicatorClassName, "ui-dropdown-menu-checkbox-item-indicator", className)} {...props}/>);
}
function DropdownMenuCheckboxItem({ className, children, indicatorClassName, ...props }) {
    return (<RDropdownMenu.CheckboxItem {...props} className={clsx(dropdownCheckboxItemClassName, "ui-dropdown-menu-checkbox-item", className)}>
      <DropdownMenuItemIndicator className={indicatorClassName}>
        <CheckIcon />
      </DropdownMenuItemIndicator>
      {children}
    </RDropdownMenu.CheckboxItem>);
}
function DropdownMenuSubContent({ className, children, sideOffset = 2, alignOffset = -5, ...props }) {
    return (<RDropdownMenu.Portal>
      <RDropdownMenu.SubContent sideOffset={sideOffset} alignOffset={alignOffset} {...props} className={clsx(modalContentClassName, "ui-dropdown-menu-sub-content", className)}>
        {children}
      </RDropdownMenu.SubContent>
    </RDropdownMenu.Portal>);
}
function DropdownMenuSubTrigger({ className, href, children, ...props }) {
    const Wrapper = href ? Link : Fragment;
    return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Wrapper {...(href ? { href } : {})}>
      <RDropdownMenu.SubTrigger {...props} className={clsx(dropdownItemClassName, "ui-dropdown-menu-sub-trigger", className)}>
        {children}
        <div className={clsx("absolute right-1.5 top-1.5 inline-flex items-center justify-center", "[&>svg]:h-4 [&>svg]:w-4")}>
          <ChevronRightIcon />
        </div>
      </RDropdownMenu.SubTrigger>
    </Wrapper>);
}
const DropdownMenu = {
    Root: RDropdownMenu.Root,
    Trigger: RDropdownMenu.Trigger,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem,
    Separator: DropdownMenuSeparator,
    CheckboxItem: DropdownMenuCheckboxItem,
    Label: DropdownMenuLabel,
    ItemIndicator: DropdownMenuItemIndicator,
    Sub: RDropdownMenu.Sub,
    SubContent: DropdownMenuSubContent,
    SubTrigger: DropdownMenuSubTrigger,
};
export default DropdownMenu;
