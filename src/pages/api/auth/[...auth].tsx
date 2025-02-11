import Auth from "@italodeandra/auth/api";
import Routes from "../../../routes";
import sendMail from "../../../sendMail";
import connectDb from "../../../db/db";
import { MULTITENANT_MODE, PRIMARY_COLOR } from "../../../constants";

export default Auth({
  connectDb,
  routes: Routes,
  primaryColor: PRIMARY_COLOR,
  sendMail,
  intl: {
    "pt-BR": {
      "Reset your password": "Redefinir sua senha",
      "To reset your password click the link below":
        "Para redefinir sua senha clique no link abaixo",
      "Click here": "Clique aqui",
      "If you didn't request to reset your password, please ignore this email":
        "Se você não solicitou a redefinição de sua senha, ignore este e-mail",
      "Kind regards": "Atenciosamente",
      "or copy and paste the following link on your browser":
        "ou copie e cole o seguinte link no seu navegador",
      "We received a request to reset your password":
        "Recebemos uma solicitação para redefinir sua senha"
    }
  },
  fallbackLocale: "pt-BR",
  multitenantMode: MULTITENANT_MODE
});
