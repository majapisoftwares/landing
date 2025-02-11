import { useEffect, useRef } from "react";
import { isEqual } from "lodash-es";
export default function useWhyDidYouUpdate(name, props) {
    // create a reference to track the previous data
    const previousProps = useRef({});
    useEffect(() => {
        if (previousProps.current) {
            // merge the keys of previous and current data
            const keys = Object.keys({ ...previousProps.current, ...props });
            // to store what has changed
            const changesObj = {};
            // check what values have changed between the previous and current
            keys.forEach((key) => {
                // if both are object
                if (typeof props[key] === "object" &&
                    typeof previousProps.current[key] === "object") {
                    if (!isEqual(previousProps.current[key], props[key])) {
                        // add to changesObj
                        changesObj[key] = {
                            from: previousProps.current[key],
                            to: props[key],
                        };
                    }
                }
                else {
                    // if both are non-object
                    if (previousProps.current[key] !== props[key]) {
                        // add to changesObj
                        changesObj[key] = {
                            from: previousProps.current[key],
                            to: props[key],
                        };
                    }
                }
            });
            // if changesObj not empty, print the cause
            if (Object.keys(changesObj).length) {
                console.info("This is causing re-renders", name, changesObj);
            }
        }
        // update the previous props with the current
        previousProps.current = props;
    });
}
