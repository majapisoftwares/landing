import { ReactElement } from "react";
import Routes from "./Routes";
import AuthIntl from "./intl/AuthIntl";
export type IAuthContext = {
    Routes: Routes;
    intl?: AuthIntl;
    disableModeToggle?: boolean;
    logo?: ReactElement;
};
export declare const authContextDefaultValue: {
    Routes: {
        SignUp: string;
        ForgotPassword: string;
        Home: string;
        SignIn: string;
        ResetPassword: (token: string) => string;
        Panel: string;
        PanelUser: (id: string) => string;
        PanelUsers: string;
        PanelNewUser: string;
    };
};
export declare const AuthContext: import("react").Context<IAuthContext>;
export declare function useAuthContext(): IAuthContext;
