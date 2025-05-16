import prepareSendMail from "@majapisoftwares/next/mailer/sendMail";
import { LANDING_URL } from "./constants";

const sendMail = prepareSendMail({
  product: {
    name: "Majapi",
    link: LANDING_URL,
    logo: `${LANDING_URL}/icons/web-app-manifest-192x192.png`,
    copyright: `&copy; ${new Date().getFullYear()} <a href="${LANDING_URL}" target="_blank">Majapi</a>`
  }
});

export default sendMail;
