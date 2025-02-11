import { useMutation, useQueryClient, } from "@tanstack/react-query";
import getUser, { UserType } from "../../../collections/user/User";
import { checkUserType, getUserFromCookies, } from "../../../collections/user/User.service";
import { conflict, unauthorized } from "@italodeandra/next/api/errors";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { invalidate_authPanelUserList } from "./list";
import { invalidate_authPanelUserGet } from "./get";
import { getReqTenant } from "../../../collections/tenant/Tenant.service";
import removeEmptyProperties from "@italodeandra/next/utils/removeEmptyProperties";
import { omit } from "lodash-es";
export default async function authPanelUserUpdateHandler(args, req, res, { connectDb, multitenantMode }) {
    await connectDb();
    const User = getUser();
    const user = await getUserFromCookies(req, res, multitenantMode);
    if (!user && !checkUserType(user, [UserType.ADMIN])) {
        throw unauthorized;
    }
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    const _id = isomorphicObjectId(args._id);
    const existingNewEmail = await User.countDocuments({
        tenantId,
        _id: { $ne: _id },
        email: args.email,
    });
    if (existingNewEmail) {
        throw conflict(res, { status: "Existing" });
    }
    const $set = omit(args, ["_id"]);
    const $unset = removeEmptyProperties($set);
    await User.updateOne({
        tenantId,
        _id,
    }, {
        $set,
        $unset,
    });
    return {
        _id,
    };
}
const mutationKey = "/api/auth/panel/user/update";
export const useAuthPanelUserUpdate = (options) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [mutationKey],
        mutationFn: mutationFnWrapper(mutationKey),
        ...options,
        async onSuccess(...params) {
            const [data] = params;
            await invalidate_authPanelUserList(queryClient);
            await invalidate_authPanelUserGet(queryClient, { _id: data._id });
            await options?.onSuccess?.(...params);
        },
    });
};
