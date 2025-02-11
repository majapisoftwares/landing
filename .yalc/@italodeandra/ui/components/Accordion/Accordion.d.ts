import { ReactNode } from "react";
declare function Accordion({ children }: {
    children?: ReactNode;
}): import("react").JSX.Element;
declare namespace Accordion {
    var Item: typeof AccordionItem;
}
export default Accordion;
declare function AccordionItem({ children, title, value, }: {
    children?: ReactNode;
    title: ReactNode;
    value?: string;
}): import("react").JSX.Element;
