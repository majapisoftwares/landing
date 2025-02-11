import { ReactElement, ReactNode } from "react";
export type FooterProps = {
    main?: {
        name: string;
        href: string;
    }[];
    social?: {
        name: string;
        href: string;
        icon: ReactElement;
    }[];
    companyName: ReactNode;
    allRightsReserved?: string;
    children: ReactNode;
};
export default function Footer({ main, social, companyName, allRightsReserved, children, }: FooterProps): import("react").JSX.Element;
