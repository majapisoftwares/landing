import { createContext, useContext } from "react";
// noinspection JSUnusedGlobalSymbols
export const authContextDefaultValue = {
    Routes: {
        SignUp: "/sign-up",
        ForgotPassword: "/forgot-password",
        Home: "/",
        SignIn: "/sign-in",
        ResetPassword: (token) => `/reset-password/${token}`,
        Panel: "/panel",
        PanelUser: (id) => `/panel/user/${id}`,
        PanelUsers: "/panel/users",
        PanelNewUser: "/panel/user/new",
    },
};
export const AuthContext = createContext(authContextDefaultValue);
export function useAuthContext() {
    return useContext(AuthContext);
}
