import { ComponentProps } from "react";
import NextLink from "next/link";
export default function Link({ className, href, ...props }: Partial<ComponentProps<typeof NextLink>>): import("react").JSX.Element;
