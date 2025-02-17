export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;
export const IS_APP_PROD = APP_ENV === "production";
export const IS_NODE_PROD = NODE_ENV === "production";
export const HOST = IS_NODE_PROD
  ? "app-template.majapi.com"
  : `localhost:${PORT}`;
export const PROTOCOL = IS_NODE_PROD ? "https" : "http";
export const LANDING_URL = `${PROTOCOL}://${HOST}`;
export const MULTITENANT_MODE = false;
export const PRIMARY_COLOR = "#0ea5e9";
export const APP_NAME = "Majapi";
export const APP_DESCRIPTION = "Majapi";
export const APP_KEYWORDS = "majapibr,app,template";