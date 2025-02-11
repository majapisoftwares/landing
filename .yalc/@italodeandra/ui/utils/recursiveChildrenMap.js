import { Children, cloneElement, isValidElement, } from "react";
export default function recursiveChildrenMap(children, fn) {
    return Children.map(children, (child) => {
        if (!isValidElement(child)) {
            return child;
        }
        if (child.props.children) {
            child = cloneElement(child, {
                children: recursiveChildrenMap(child.props.children, fn),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            });
        }
        return fn(child);
    });
}
