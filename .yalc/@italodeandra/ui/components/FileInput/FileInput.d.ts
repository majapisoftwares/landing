import { ComponentPropsWithRef, ReactNode } from "react";
import { InputProps } from "../Input";
import { FileSelectProps } from "../FileSelect";
export type FileFile = {
    _id: string;
    file: File;
    description?: string;
    name: string;
    type: string;
    size: number;
};
export type FileUrl = {
    _id: string;
    url: string;
    description?: string;
    name: string;
    type: string;
    size: number;
};
export type FileInputFile = FileFile | FileUrl;
declare function FileInput({ error, className, helpText, onChange, name, limit, label, id, required, onMouseOver, onMouseOut, readOnly, value, emptyText, downloadText, openText, fileDisplay, asyncUpload, onRejectFiles, loading, maxConcurrentUploads, fileAdditionalInfo, ref, ...props }: Pick<InputProps<false>, "error" | "className" | "helpText" | "name" | "label" | "id" | "required" | "onMouseOver" | "onMouseOut"> & Omit<FileSelectProps, "onAcceptFiles" | "onRejectFiles"> & {
    readOnly?: boolean;
    value?: FileInputFile[];
    onChange?: (event: {
        target: {
            value: FileInputFile[];
        };
    }) => void;
    emptyText?: string;
    downloadText?: string;
    openText?: string;
    fileDisplay?: "info" | "preview" | "both";
    asyncUpload?: (file: FileFile & {
        _id: string;
    }) => Promise<FileUrl & {
        _id: string;
    }>;
    onRejectFiles?: (files: File[], reason: "type" | "size" | "limit" | "upload-error") => void;
    loading?: boolean;
    maxConcurrentUploads?: number;
    fileAdditionalInfo?: (file: FileInputFile, index: number) => ReactNode;
}): import("react").JSX.Element;
export type FileInputProps = ComponentPropsWithRef<typeof FileInput>;
export default FileInput;
