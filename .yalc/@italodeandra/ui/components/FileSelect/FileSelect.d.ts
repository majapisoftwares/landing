import { ReactElement, ReactNode, Ref } from "react";
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
    icon?: ReactElement<{
        className?: string;
    }>;
    uploading?: boolean;
    disabled?: boolean;
    additionalBottomInfo?: ReactNode;
    ref?: Ref<HTMLInputElement>;
}
declare function FileSelect({ maxFileSize, allowedFileTypes, id, limit, onAcceptFiles, className, uploadAFileText, orDragAndDropText, upToText, anyFileText, dropFilesHereText, uploadingText, icon, uploading, disabled, additionalBottomInfo, onRejectFiles, error, ref, }: FileSelectProps): import("react").JSX.Element;
export default FileSelect;
export declare function FileSelectProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
