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
export const PRIMARY_COLOR = "#000";
export const APP_NAME = "Majapi";
export const APP_DESCRIPTION = "Transforming ideas into digital solutions";
export const APP_KEYWORDS = "majapibr,app,software,development,saas,technology";
export const WHATSAPP_LINK = "https://wa.me/5516981814643";
export const LINKEDIN_LINK =
  "https://www.linkedin.com/company/majapi-softwares";
export const INSTAGRAM_LINK = "https://www.instagram.com/majapisoftwares";
export const MIYACHE_LINK = "https://miyache.com";
export const TICKETIS_LINK = "https://ticketis.com.br";
export const LAPWING_LINK = "https://lapwing.com.br";
