import { ReactNode } from "react";
import { IAuthContext } from "./AuthContext";
export default function AuthProvider({ children, ...props }: {
    children: ReactNode;
} & IAuthContext): import("react").JSX.Element;
