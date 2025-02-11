import { Language, PrismTheme } from "prism-react-renderer";
export type CodeProps = {
    children: string;
    language: Language;
    className?: string;
    copy?: boolean;
    copyText?: string;
    copiedText?: string;
    theme?: PrismTheme;
};
export default function Code({ children, language, className, copy, copyText, copiedText, theme, }: CodeProps): import("react").JSX.Element;
