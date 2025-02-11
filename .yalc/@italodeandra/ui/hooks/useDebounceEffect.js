import { useEffect } from "react";
export default function useDebounceEffect(fn, waitTime, deps) {
    useEffect(() => {
        const t = setTimeout(() => {
            // @ts-expect-error trust me
            // eslint-disable-next-line prefer-spread
            fn.apply(undefined, deps);
        }, waitTime);
        return () => {
            clearTimeout(t);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
