import React, { useEffect, useState } from "react";
export default function NoSsr({ children }) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return isMounted ? <>{children}</> : null;
}
