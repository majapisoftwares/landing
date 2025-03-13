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
  multitenantMode: MULTITENANT_MODE
});
