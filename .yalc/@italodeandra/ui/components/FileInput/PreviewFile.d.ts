import { FileInputFile } from "./FileInput";
export declare function PreviewFile({ file, readOnly, handleDeleteClick, downloadText, openText, preview, }: {
    file: FileInputFile;
    readOnly?: boolean;
    handleDeleteClick: () => void;
    downloadText: string;
    openText: string;
    preview?: boolean;
}): import("react").JSX.Element;
