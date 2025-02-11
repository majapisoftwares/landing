import ms from "ms";
import getUser from "../collections/user/User";
import { createUser, generateToken } from "../collections/user/User.service";
import { useMutation } from "@tanstack/react-query";
import { badRequest, conflict } from "@italodeandra/next/api/errors";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { setCookie } from "cookies-next";
import { getReqTenant } from "../collections/tenant/Tenant.service";
export default async function signUpHandler(args, req, res, { connectDb, newUserDefaultType, multitenantMode }) {
    if (!args.email || !args.password) {
        throw badRequest;
    }
    await connectDb();
    const User = getUser();
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    const existingUser = await User.countDocuments({
        tenantId,
        email: args.email.toLowerCase().trim(),
    });
    if (existingUser) {
        throw conflict;
    }
    const user = await createUser({
        tenantId,
        ...args,
        type: newUserDefaultType || "NORMAL",
    });
    const token = generateToken(user._id);
    setCookie("auth", { token }, {
        req,
        res,
        maxAge: ms("30d"),
        path: "/",
    });
}
const mutationKey = "/api/auth/signUp";
export const useAuthSignUp = (options) => useMutation({
    mutationKey: [mutationKey],
    mutationFn: mutationFnWrapper(mutationKey),
    ...options,
});
