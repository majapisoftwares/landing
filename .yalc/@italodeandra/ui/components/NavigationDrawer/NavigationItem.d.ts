import { ReactElement, ReactNode } from "react";
export default function NavigationItem({ icon, children, href, exact, alternativeActiveHrefs, className, disabled, active, }: {
    icon?: ReactElement;
    children: ReactNode;
    href: string;
    exact?: boolean;
    alternativeActiveHrefs?: string[];
    className?: string;
    disabled?: boolean;
    active?: boolean;
}): import("react").JSX.Element;
