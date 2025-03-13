import * as RPopover from "@radix-ui/react-popover";
import React, { ComponentProps } from "react";
declare function PopoverContent({ className, sideOffset, collisionPadding, children, noArrow, ...props }: ComponentProps<typeof RPopover.Content> & {
    noArrow?: boolean;
}): React.JSX.Element;
declare function PopoverArrow({ className, ...props }: ComponentProps<typeof RPopover.Arrow>): React.JSX.Element;
declare const Popover: {
    Content: typeof PopoverContent;
    Root: React.FC<RPopover.PopoverProps>;
    Trigger: React.ForwardRefExoticComponent<RPopover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    Arrow: typeof PopoverArrow;
};
export default Popover;
