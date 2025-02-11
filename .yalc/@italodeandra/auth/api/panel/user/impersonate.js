import { UserType } from "../../../collections/user/User";
import { checkUserType, generateToken, getAuthCookieToken, getUserFromCookies, } from "../../../collections/user/User.service";
import { unauthorized } from "@italodeandra/next/api/errors";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import { setCookie } from "cookies-next";
import ms from "ms";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { useMutation } from "@tanstack/react-query";
export default async function authPanelUserImpersonateHandler(args, req, res, { connectDb, disableImpersonate, multitenantMode }) {
    if (disableImpersonate) {
        throw unauthorized;
    }
    await connectDb();
    const reqUser = await getUserFromCookies(req, res, multitenantMode);
    if (!reqUser && !checkUserType(reqUser, [UserType.ADMIN])) {
        throw unauthorized;
    }
    setCookie("auth", {
        token: generateToken(isomorphicObjectId(args._id)),
        previousToken: getAuthCookieToken(req, res),
    }, {
        req,
        res,
        maxAge: ms("30d"),
        path: "/",
    });
}
const mutationKey = "/api/auth/panel/user/impersonate";
export const useAuthPanelUserImpersonate = (options) => useMutation({
    mutationKey: [mutationKey],
    mutationFn: mutationFnWrapper(mutationKey),
    ...options,
    async onSuccess(...params) {
        window.location.reload();
        await options?.onSuccess?.(...params);
    },
});
