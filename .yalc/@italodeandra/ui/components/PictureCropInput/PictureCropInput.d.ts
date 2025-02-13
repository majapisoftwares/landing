import { RefObject } from "react";
import { PixelCrop } from "react-image-crop";
export type PictureCropInputRef = {
    handleCrop: () => Promise<void>;
    completedCrop: PixelCrop | undefined;
};
export default function PictureCropInput({ value, onChange, loading, className, previewSizeClassNames, previewContainerClassName, cropButtonClassName, aspect, ref, }: {
    value: string;
    onChange: (value: string) => void;
    loading?: boolean;
    className?: string;
    previewSizeClassNames?: string;
    previewContainerClassName?: string;
    cropButtonClassName?: string;
    aspect?: number;
    ref?: RefObject<PictureCropInputRef | null>;
}): import("react").JSX.Element;
