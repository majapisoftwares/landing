import ms from "ms";
import getUser from "../collections/user/User";
import { createUser, generateToken } from "../collections/user/User.service";
import { useMutation } from "@tanstack/react-query";
import { badRequest, conflict } from "@italodeandra/next/api/errors";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { setCookie } from "cookies-next";
import { getReqTenant } from "../collections/tenant/Tenant.service";
import { pick } from "lodash-es";
import getQueryClient from "@italodeandra/next/api/getQueryClient";
import { setData_authGetUser } from "./getUser";
import { setData_authGetFullUser } from "./getFullUser";
import authState from "../auth.state";
export default async function signUpHandler(args, req, res, { connectDb, newUserDefaultType, multitenantMode }) {
    if (!args.email || !args.password) {
        throw badRequest;
    }
    await connectDb();
    const User = getUser();
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    const existingUser = await User.countDocuments({
        ...(multitenantMode ? { tenantId } : {}),
        email: args.email.toLowerCase().trim(),
    });
    if (existingUser) {
        throw conflict;
    }
    const user = await createUser({
        ...(multitenantMode ? { tenantId } : {}),
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
    return {
        user: pick(user, ["_id", "email", "type", "customData"]),
        token,
    };
}
const mutationKey = "/api/auth/signUp";
export const useAuthSignUp = (options) => useMutation({
    mutationKey: [mutationKey],
    mutationFn: mutationFnWrapper(mutationKey),
    ...options,
    onSuccess: (...args) => {
        const [data] = args;
        const queryClient = getQueryClient();
        setData_authGetUser(queryClient, data.user);
        setData_authGetFullUser(queryClient, data.user);
        authState.token = data.token;
        return options?.onSuccess?.(...args);
    },
});
