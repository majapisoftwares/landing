import getUser from "../collections/user/User";
import { readResetPasswordToken, setUserPassword, } from "../collections/user/User.service";
import { useMutation } from "@tanstack/react-query";
import { TokenExpiredError } from "jsonwebtoken";
import { badRequest } from "@italodeandra/next/api/errors";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { getReqTenant } from "../collections/tenant/Tenant.service";
export default async function resetPasswordHandler(args, req, res, { connectDb, multitenantMode }) {
    if (!args.token || !args.newPassword) {
        throw badRequest;
    }
    await connectDb();
    const User = getUser();
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    try {
        const email = readResetPasswordToken(args.token);
        const user = await User.findOne({
            disabled: { $ne: true },
            ...(multitenantMode ? { tenantId } : {}),
            email,
        }, {
            projection: {},
        });
        if (!user) {
            // noinspection ExceptionCaughtLocallyJS
            throw badRequest;
        }
        await setUserPassword(user._id, args.newPassword);
    }
    catch (e) {
        if (e instanceof TokenExpiredError) {
            // noinspection JSVoidFunctionReturnValueUsed
            throw badRequest(res, {
                status: "TokenExpired",
                noLog: true,
            });
        }
        throw e;
    }
}
const mutationKey = "/api/auth/resetPassword";
export const useAuthResetPassword = (options) => useMutation({
    mutationKey: [mutationKey],
    mutationFn: mutationFnWrapper(mutationKey),
    ...options,
});
