import * as RPopover from "@radix-ui/react-popover";
import React from "react";
import clsx from "../../utils/clsx";
import { modalArrowClassName, modalContentClassName, } from "../../styles/Modal.classNames";
function PopoverContent({ className, sideOffset = 4, collisionPadding = 8, children, noArrow, ...props }) {
    return (<RPopover.Portal>
      <RPopover.Content {...props} className={clsx(modalContentClassName, "ui-popover-content", className)} sideOffset={sideOffset} collisionPadding={collisionPadding}>
        {children}
        {!noArrow && <PopoverArrow />}
      </RPopover.Content>
    </RPopover.Portal>);
}
function PopoverArrow({ className, ...props }) {
    return (<RPopover.Arrow {...props} className={clsx(modalArrowClassName, "ui-popover-arrow", className)}/>);
}
const Popover = {
    Content: PopoverContent,
    Root: RPopover.Root,
    Trigger: RPopover.Trigger,
    Arrow: PopoverArrow,
};
export default Popover;
