const Routes = {
  Home: "/",
  About: "/about",
  Contact: "/contact",
  PrivacyPolicy: "/privacy-policy",
  Panel: "/panel",

  PanelVehicles: "/panel/vehicles",
  PanelVehicle: (_id?: string) => `/panel/vehicle/${_id ?? ""}`,

  // Security
  PanelUsers: "/panel/users",
  PanelNewUser: "/panel/user/new",
  PanelUser: (_id: string) => `/panel/user/${_id}`,

  // Auth
  SignIn: "/sign-in",
  SignUp: "/sign-up",
  ForgotPassword: "/forgot-password",
  ResetPassword: (token: string) => `/reset-password/${token}`,
};

export default Routes;
