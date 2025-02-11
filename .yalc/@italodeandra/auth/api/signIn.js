import getUser from "../collections/user/User";
import { checkUserPassword, generateToken, } from "../collections/user/User.service";
import ms from "ms";
import { useMutation } from "@tanstack/react-query";
import { badRequest, unauthorized } from "@italodeandra/next/api/errors";
import { pick } from "lodash-es";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { setCookie } from "cookies-next";
import { getReqTenant } from "../collections/tenant/Tenant.service";
export default async function signInHandler(args, req, res, { connectDb, multitenantMode }) {
    if (!args.email || !args.password) {
        throw badRequest;
    }
    await connectDb();
    const User = getUser();
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    const email = args.email.toLowerCase().trim();
    const user = await User.findOne({
        ...(multitenantMode ? { tenantId } : {}),
        email,
    }, {
        projection: {
            email: 1,
            type: 1,
            password: 1,
            passwordSalt: 1,
            disabled: 1,
        },
    });
    if (!user) {
        console.error(`User not found. Tenant ID: "${tenantId}". Email: "${email}".`);
        throw unauthorized(res, { message: "User not found", noLog: true });
    }
    if (!checkUserPassword(user, args.password)) {
        console.error(`Wrong password.`);
        throw unauthorized(res, { message: "User not found", noLog: true });
    }
    if (user.disabled) {
        throw unauthorized(res, { message: "User disabled", noLog: true });
    }
    const token = generateToken(user._id);
    setCookie("auth", { token }, {
        req,
        res,
        maxAge: ms("30d"),
        path: "/",
    });
    return pick(user, ["_id", "email", "type"]);
}
const mutationKey = "/api/auth/signIn";
export const useAuthSignIn = (options) => useMutation({
    mutationKey: [mutationKey],
    mutationFn: mutationFnWrapper(mutationKey),
    ...options,
});
