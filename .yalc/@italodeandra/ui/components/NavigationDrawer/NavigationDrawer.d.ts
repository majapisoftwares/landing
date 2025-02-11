import { ReactNode } from "react";
export default function NavigationDrawer({ children, navigationChildren, position, title, noPadding, panelClassName, }: {
    children: ReactNode;
    navigationChildren: ReactNode;
    position?: "left" | "right";
    title?: ReactNode;
    noPadding?: boolean;
    panelClassName?: string;
}): import("react").JSX.Element;
