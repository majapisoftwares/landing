import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import { PanelUserFieldValues } from "./PanelUserFieldValues";
export default function PanelUserView({ customFields, innerClassName, }: {
    customFields?: (form: UseFormReturn<PanelUserFieldValues>, isLoadingFields: boolean) => ReactNode;
    innerClassName?: string;
}): import("react").JSX.Element;
