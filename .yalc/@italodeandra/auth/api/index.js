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
export default function Auth(config) {
    config.fallbackLocale = config.fallbackLocale || "en-US";
    config.intl = {
        "en-US": {
            "Reset your password": "Reset your password",
            "To reset your password click the link below": "To reset your password click the link below",
            "Click here": "Click here",
            "If you didn't request to reset your password, please ignore this email": "If you didn't request to reset your password, please ignore this email",
            "Kind regards": "Kind regards",
            "or copy and paste the following link on your browser": "or copy and paste the following link on your browser",
            "We received a request to reset your password": "We received a request to reset your password",
        },
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
        }, route.join("."))(args, req, res, config);
    });
}
