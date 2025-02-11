import { useEffect, useRef } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");
export function parseDate(value) {
    try {
        // noinspection SpellCheckingInspection
        return dayjs(value, "YYYY-MM-DDTHH:mm").toISOString();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        return value;
    }
}
export function formatDate(value) {
    try {
        // noinspection SpellCheckingInspection
        return dayjs(value).format("YYYY-MM-DDTHH:mm");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        return value;
    }
}
export function useRefValue(ref) {
    const realRef = useRef(null);
    const innerRef = useRef({
        get value() {
            return parseDate(realRef.current?.value || "");
        },
        set value(value) {
            if (realRef.current) {
                realRef.current.value = formatDate(value);
            }
        },
    });
    useEffect(() => {
        if (ref) {
            if (typeof ref === "function") {
                ref(innerRef.current);
            }
            else {
                ref.current = innerRef.current;
            }
        }
    }, [ref]);
    return realRef;
}
