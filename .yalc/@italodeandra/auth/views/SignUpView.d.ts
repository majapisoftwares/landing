import { StaticImageData } from "next/image";
export interface SignUpViewProps {
    backgroundImage?: string | StaticImageData;
}
export default function SignUpView({ backgroundImage }: SignUpViewProps): import("react").JSX.Element;
