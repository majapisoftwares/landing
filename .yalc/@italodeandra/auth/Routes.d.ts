export default interface Routes {
    Home: string;
    SignUp: string;
    SignIn: string;
    ForgotPassword: string;
    Panel: string;
    PanelUsers: string;
    PanelNewUser: string;
    ResetPassword(token: string): string;
    PanelUser(id: string): string;
}
