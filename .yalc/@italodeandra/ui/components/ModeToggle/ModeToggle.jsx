import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Button from "../Button";
import clsx from "../../utils/clsx";
import { forwardRef } from "react";
import useModeToggle from "./useModeToggle";
const ModeToggle = forwardRef(function ModeToggle({ ariaLabel = "Toggle dark mode", className, iconClassName }, ref) {
    const toggleMode = useModeToggle();
    return (<Button ref={ref} icon variant="text" aria-label={ariaLabel} onClick={toggleMode} className={className}>
      <SunIcon className={clsx("dark:hidden", iconClassName)}/>
      <MoonIcon className={clsx("hidden dark:block", iconClassName)}/>
    </Button>);
});
export default ModeToggle;
