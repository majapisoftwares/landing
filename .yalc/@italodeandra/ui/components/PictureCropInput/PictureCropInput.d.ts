export default function PictureCropInput({ value, onChange, loading, className, previewSizeClassNames, previewContainerClassName, cropButtonClassName, aspect, }: {
    value: string;
    onChange: (value: string) => void;
    loading?: boolean;
    className?: string;
    previewSizeClassNames?: string;
    previewContainerClassName?: string;
    cropButtonClassName?: string;
    aspect?: number;
}): import("react").JSX.Element;
