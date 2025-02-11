import { useEffect } from "react";
export default function useBeforeUnload(message) {
    useEffect(() => {
        if (message) {
            const handleBeforeUnload = (e) => {
                e.preventDefault();
                // noinspection JSDeprecatedSymbols
                e.returnValue = message; // This message is not shown in most browsers
                return message; // Some older browsers may display this message
            };
            window.addEventListener("beforeunload", handleBeforeUnload);
            return () => {
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        }
    }, [message]);
}
