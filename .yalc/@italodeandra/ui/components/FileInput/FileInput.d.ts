import { ComponentPropsWithRef, ForwardedRef } from "react";
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
declare function FileInput({ error, className, helpText, onChange, name, limit, label, id, required, onMouseOver, onMouseOut, readOnly, value, emptyText, downloadText, openText, preview, asyncUpload, onRejectFiles, loading, maxConcurrentUploads, ...props }: Pick<InputProps<false>, "error" | "className" | "helpText" | "name" | "label" | "id" | "required" | "onMouseOver" | "onMouseOut"> & Omit<FileSelectProps, "onAcceptFiles" | "onRejectFiles"> & {
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
    preview?: boolean;
    asyncUpload?: (file: FileFile & {
        _id: string;
    }) => Promise<FileUrl & {
        _id: string;
    }>;
    onRejectFiles?: (files: File[], reason: "type" | "size" | "limit" | "upload-error") => void;
    loading?: boolean;
    maxConcurrentUploads?: number;
}, ref: ForwardedRef<HTMLInputElement>): import("react").JSX.Element;
export type FileInputProps = ComponentPropsWithRef<typeof FileInput>;
declare const _default: import("react").ForwardRefExoticComponent<Pick<InputProps<false>, "label" | "name" | "required" | "error" | "className" | "id" | "onMouseOut" | "onMouseOver" | "helpText"> & Omit<FileSelectProps, "onAcceptFiles" | "onRejectFiles"> & {
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
    preview?: boolean;
    asyncUpload?: (file: FileFile & {
        _id: string;
    }) => Promise<FileUrl & {
        _id: string;
    }>;
    onRejectFiles?: (files: File[], reason: "type" | "size" | "limit" | "upload-error") => void;
    loading?: boolean;
    maxConcurrentUploads?: number;
} & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
