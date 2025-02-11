import { UserType } from "../../../collections/user/User";
import { checkUserType, getUserFromCookies, } from "../../../collections/user/User.service";
import { unauthorized } from "@italodeandra/next/api/errors";
import { getCookies, setCookie } from "cookies-next";
import ms from "ms";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { useMutation } from "@tanstack/react-query";
export default async function authPanelUserStopImpersonateHandler(_args, req, res, { connectDb, disableImpersonate, multitenantMode }) {
    if (disableImpersonate) {
        throw unauthorized;
    }
    await connectDb();
    const reqUser = await getUserFromCookies(req, res, multitenantMode);
    if (!reqUser && !checkUserType(reqUser, [UserType.ADMIN])) {
        throw unauthorized;
    }
    const cookies = getCookies({ req, res });
    const previousToken = cookies.auth
        ? JSON.parse(cookies.auth).previousToken
        : null;
    setCookie("auth", {
        token: previousToken,
    }, {
        req,
        res,
        maxAge: ms("30d"),
        path: "/",
    });
}
const mutationKey = "/api/auth/panel/user/stopImpersonate";
export const useAuthPanelUserStopImpersonate = (options) => useMutation({
    mutationKey: [mutationKey],
    mutationFn: mutationFnWrapper(mutationKey),
    ...options,
    async onSuccess(...params) {
        window.location.reload();
        await options?.onSuccess?.(...params);
    },
});
