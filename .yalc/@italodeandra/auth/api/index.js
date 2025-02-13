import getUser from "./getUser";
import signIn from "./signIn";
import signUp from "./signUp";
import resetPassword from "./resetPassword";
import requestPasswordReset from "./requestPasswordReset";
import { apiHandlerWrapper } from "@italodeandra/next/api/apiHandlerWrapper";
import { get } from "lodash-es";
import list from "./panel/user/list";
import panelGet from "./panel/user/get";
import create from "./panel/user/create";
import update from "./panel/user/update";
import getFullUser from "./getFullUser";
import impersonate from "./panel/user/impersonate";
import stopImpersonate from "./panel/user/stop-impersonate";
import { authGetTenantApi } from "./getTenant";
import userUpdateApiHandler from "./user/update/handler";
import intlPtBr from "../intl/pt-br";
export default function Auth(config) {
    config.fallbackLocale = config.fallbackLocale || "en-US";
    config.intl = {
        "pt-BR": intlPtBr,
        ...config.intl,
    };
    return apiHandlerWrapper((args, req, res) => {
        const route = req.query.auth;
        return get({
            getUser,
            getFullUser,
            signIn,
            signUp,
            resetPassword,
            requestPasswordReset,
            getTenant: authGetTenantApi.unwrappedHandler,
            panel: {
                user: {
                    list,
                    get: panelGet,
                    create,
                    update,
                    impersonate,
                    stopImpersonate,
                },
            },
            user: {
                update: userUpdateApiHandler,
            },
        }, route.join("."))(args, req, res, config);
    });
}
