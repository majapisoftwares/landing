import { StaticImageData } from "next/image";
export interface SignInViewProps {
    backgroundImage?: string | StaticImageData;
    disableSignUp?: boolean;
}
export default function SignInView({ backgroundImage, disableSignUp, }: SignInViewProps): import("react").JSX.Element;
