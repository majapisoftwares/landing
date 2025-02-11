import { forwardRef } from "react";
import NextLink from "next/link";
const UnstyledButton = ({ href, as, ...props }, ref) => {
    if (as) {
        const Component = as;
        return (<Component {...props} {...{
            ref,
        }}/>);
    }
    if (href) {
        const props2 = props;
        return (<NextLink {...props2} href={href} ref={ref} tabIndex={props2.disabled ? -1 : undefined}/>);
    }
    return (<button {...props} ref={ref}/>);
};
export default forwardRef(UnstyledButton);
