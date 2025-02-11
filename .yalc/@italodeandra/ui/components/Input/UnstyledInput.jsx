import { forwardRef, useId, } from "react";
import clsx from "../../utils/clsx";
function UnstyledInput({ id, label, className, inputClassName, labelClassName, helpTextClassName, trailingClassName, trailingInputClassName, leadingClassName, leadingInputClassName, helpText, type = "text", leading, trailing, select, children, as, innerClassName, value, ...props }, ref) {
    const innerId = useId();
    id = id || innerId;
    const Component = as || (select ? "select" : "input");
    inputClassName = clsx(inputClassName, leadingInputClassName && {
        [leadingInputClassName]: !!leading,
    }, trailingInputClassName && {
        [trailingInputClassName]: !!trailing,
    });
    return (<div className={className}>
      {label && (<label htmlFor={id} className={labelClassName}>
          {label}
        </label>)}
      <div style={{ position: "relative" }} className={innerClassName}>
        {leading && <div className={leadingClassName}>{leading}</div>}
        <Component 
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    {...props} className={inputClassName} id={id} type={type} ref={ref} value={value}>
          {children}
        </Component>
        {trailing && <div className={trailingClassName}>{trailing}</div>}
      </div>
      {helpText && <div className={helpTextClassName}>{helpText}</div>}
    </div>);
}
export default forwardRef(UnstyledInput);
