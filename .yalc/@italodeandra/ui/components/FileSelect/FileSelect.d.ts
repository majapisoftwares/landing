import { ReactElement, ReactNode } from "react";
export interface FileSelectProps {
    uploadAFileText?: string;
    orDragAndDropText?: string;
    upToText?: string;
    anyFileText?: string;
    dropFilesHereText?: string;
    uploadingText?: string;
    maxFileSize?: number | string;
    allowedFileTypes?: string[];
    id?: string;
    limit?: number;
    onAcceptFiles: (files: File[]) => void;
    onRejectFiles?: (files: File[], reason: "type" | "size") => void;
    helperText?: string;
    className?: string;
    error?: boolean;
    icon?: ReactElement;
    uploading?: boolean;
    disabled?: boolean;
    additionalBottomInfo?: ReactNode;
}
declare const _default: import("react").ForwardRefExoticComponent<FileSelectProps & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
export declare function FileSelectProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
