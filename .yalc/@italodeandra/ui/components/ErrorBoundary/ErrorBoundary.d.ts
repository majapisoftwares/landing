import { Component, ErrorInfo, ReactNode } from "react";
export default class ErrorBoundary extends Component<{
    title?: ReactNode;
    content?: ReactNode;
    tryAgain?: string;
    children: ReactNode;
}, {
    hasError: boolean;
}> {
    constructor(props: {
        children: ReactNode;
    });
    static getDerivedStateFromError(_error: Error): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
}
