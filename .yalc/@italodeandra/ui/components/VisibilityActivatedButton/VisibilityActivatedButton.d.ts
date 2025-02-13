import { ComponentProps } from "react";
import Button from "../Button";
export default function VisibilityActivatedButton({ rootMargin, threshold, root, ...props }: ComponentProps<typeof Button> & {
    root?: Element | Document | null;
    threshold?: number;
    rootMargin?: string;
}): import("react").JSX.Element;
