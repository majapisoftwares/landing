import { FileInputFile } from "./FileInput";
import { ReactNode } from "react";
export declare function PreviewFile({ file, readOnly, handleDeleteClick, downloadText, openText, display, additionalInfo, index, }: {
    file: FileInputFile;
    readOnly?: boolean;
    handleDeleteClick: () => void;
    downloadText: string;
    openText: string;
    display?: "info" | "preview" | "both";
    additionalInfo?: (file: FileInputFile, index: number) => ReactNode;
    index: number;
}): import("react").JSX.Element;
