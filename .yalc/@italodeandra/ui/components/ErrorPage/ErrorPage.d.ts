import { ReactNode } from "react";
export type ErrorProps = {
    error: number;
    background?: string;
    title: string;
    description: string;
    defaultActionLabel?: string;
    defaultActionHref?: string;
    action?: ReactNode;
};
export default function ErrorPage({ error, background, title, description, defaultActionLabel, defaultActionHref, action, }: ErrorProps): import("react").JSX.Element;
