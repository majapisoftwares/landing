import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export default function AuthLayout({ title, subtitle, children, backgroundImage, backgroundDescription, }: {
    title: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
    backgroundImage?: string | StaticImageData;
    backgroundDescription?: ReactNode;
}): import("react").JSX.Element;
