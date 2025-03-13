import { Children, cloneElement, isValidElement, } from "react";
export default function recursiveChildrenMap(children, fn) {
    return Children.map(children, (child) => {
        if (!isValidElement(child)) {
            return child;
        }
        const childProps = child.props;
        if (childProps?.children) {
            child = cloneElement(child, {
                children: recursiveChildrenMap(childProps.children, fn),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            });
        }
        return fn(child);
    });
}
