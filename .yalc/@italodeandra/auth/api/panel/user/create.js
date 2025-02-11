import { useMutation, useQueryClient, } from "@tanstack/react-query";
import getUser, { UserType } from "../../../collections/user/User";
import { checkUserType, createUser, getUserFromCookies, } from "../../../collections/user/User.service";
import { conflict, unauthorized } from "@italodeandra/next/api/errors";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { getReqTenant } from "../../../collections/tenant/Tenant.service";
import { invalidate_authPanelUserList } from "./list";
export default async function authPanelUserCreateHandler(args, req, res, { connectDb, multitenantMode }) {
    await connectDb();
    const User = getUser();
    const user = await getUserFromCookies(req, res, multitenantMode);
    if (!user && !checkUserType(user, [UserType.ADMIN])) {
        throw unauthorized;
    }
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    const existingNewEmail = await User.countDocuments({
        tenantId,
        email: args.email,
    });
    if (existingNewEmail) {
        throw conflict(res, { status: "Existing", noLog: true });
    }
    const _id = isomorphicObjectId();
    await createUser({
        tenantId,
        _id,
        email: args.email,
        name: args.name,
        type: args.type,
        password: Math.random().toString(),
        customData: args.customData,
        disabled: args.disabled,
    });
    return {
        _id,
    };
}
const mutationKey = "/api/auth/panel/user/create";
export const useAuthPanelUserCreate = (options) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [mutationKey],
        mutationFn: mutationFnWrapper(mutationKey),
        ...options,
        async onSuccess(...params) {
            await invalidate_authPanelUserList(queryClient);
            await options?.onSuccess?.(...params);
        },
    });
};
