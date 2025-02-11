import { useQuery } from "@tanstack/react-query";
import getUser, { UserType } from "../../../collections/user/User";
import { checkUserType, getUserFromCookies, } from "../../../collections/user/User.service";
import { unauthorized } from "@italodeandra/next/api/errors";
import { queryFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { getReqTenant } from "../../../collections/tenant/Tenant.service";
export default async function authPanelUserListHandler(args, req, res, { connectDb, multitenantMode }) {
    await connectDb();
    const User = getUser();
    const user = await getUserFromCookies(req, res, multitenantMode);
    if (!checkUserType(user, [UserType.ADMIN])) {
        throw unauthorized(res, { noLog: true });
    }
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    return User.find({
        tenantId,
        ...(args?.search ? { $text: { $search: args.search } } : {}),
    }, {
        projection: {
            email: 1,
            name: 1,
            type: 1,
            createdAt: 1,
            updatedAt: 1,
            disabled: 1,
        },
        sort: {
            ...(args?.search ? { score: { $meta: "textScore" } } : {}),
            ...(args.sort
                ? {
                    [args.sort]: args.sortDirection !== "desc" ? 1 : -1,
                }
                : {}),
        },
    });
}
const queryKey = "/api/auth/panel/user/list";
export const useAuthPanelUserList = (args) => useQuery({
    queryKey: [queryKey, args?.search, args?.sort, args?.sortDirection],
    queryFn: queryFnWrapper(queryKey, args),
});
// noinspection JSUnusedGlobalSymbols
export const prefetch_authPanelUserList = (queryClient, ...args) => queryClient.prefetchQuery({
    queryKey: [queryKey, args[0].search, args[0].sort, args[0].sortDirection],
    queryFn: () => authPanelUserListHandler(...args),
});
export const invalidate_authPanelUserList = (queryClient) => queryClient.invalidateQueries({ queryKey: [queryKey] });
