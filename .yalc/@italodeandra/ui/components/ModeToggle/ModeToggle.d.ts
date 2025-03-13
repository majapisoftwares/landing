import { Ref } from "react";
export interface ModeToggleProps {
    ariaLabel?: string;
    className?: string;
    iconClassName?: string;
    ref?: Ref<HTMLButtonElement>;
}
declare const ModeToggle: ({ ariaLabel, className, iconClassName, ref, }: ModeToggleProps) => import("react").JSX.Element;
export default ModeToggle;
