import { ReactElement } from "react";
export default function InputIcon({ className, children, }: {
    className?: string;
    children: ReactElement<{
        className?: string;
    }>;
}): ReactElement<{
    className?: string;
}, string | import("react").JSXElementConstructor<any>>;
