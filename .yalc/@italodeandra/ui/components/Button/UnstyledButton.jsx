import NextLink from "next/link";
const UnstyledButton = ({ href, as, ...props }) => {
    if (as) {
        const Component = as;
        return <Component {...props}/>;
    }
    if (href) {
        const props2 = props;
        return (<NextLink {...props2} href={href} tabIndex={props2.disabled ? -1 : undefined}/>);
    }
    return (<button {...props}/>);
};
export default UnstyledButton;
