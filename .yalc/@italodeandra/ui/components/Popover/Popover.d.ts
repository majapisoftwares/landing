import * as RPopover from "@radix-ui/react-popover";
import React, { ComponentProps, ForwardedRef } from "react";
declare function PopoverContentWithRef({ className, sideOffset, collisionPadding, children, noArrow, ...props }: ComponentProps<typeof RPopover.Content> & {
    noArrow?: boolean;
}, ref: ForwardedRef<HTMLDivElement>): React.JSX.Element;
declare function PopoverArrow({ className, ...props }: ComponentProps<typeof RPopover.Arrow>): React.JSX.Element;
declare const Popover: {
    Content: typeof PopoverContentWithRef;
    Root: React.FC<RPopover.PopoverProps>;
    Trigger: React.ForwardRefExoticComponent<RPopover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Arrow: typeof PopoverArrow;
};
export default Popover;
