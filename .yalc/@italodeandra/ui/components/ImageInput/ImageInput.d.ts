declare const _default: import("react").ForwardRefExoticComponent<Omit<Pick<import("../Input").InputProps<false>, "label" | "name" | "required" | "error" | "className" | "id" | "onMouseOut" | "onMouseOver" | "helpText"> & Omit<import("../FileSelect").FileSelectProps, "onAcceptFiles" | "onRejectFiles"> & {
    readOnly?: boolean;
    value?: import("../FileInput").FileInputFile[];
    onChange?: (event: {
        target: {
            value: import("../FileInput").FileInputFile[];
        };
    }) => void;
    emptyText?: string;
    downloadText?: string;
    openText?: string;
    preview?: boolean;
    asyncUpload?: (file: import("../FileInput").FileFile & {
        _id: string;
    }) => Promise<import("../FileInput").FileUrl & {
        _id: string;
    }>;
    onRejectFiles?: (files: File[], reason: "type" | "size" | "limit" | "upload-error") => void;
    loading?: boolean;
    maxConcurrentUploads?: number;
} & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
