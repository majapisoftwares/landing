import { useQuery } from "@tanstack/react-query";
import { badRequest, notFound, unauthorized, } from "@italodeandra/next/api/errors";
import getUser, { UserType } from "../../../collections/user/User";
import { checkUserType, getUserFromCookies, } from "../../../collections/user/User.service";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import { queryFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { getReqTenant } from "../../../collections/tenant/Tenant.service";
export default async function panelUserGetHandler(args, req, res, { connectDb, multitenantMode }) {
    if (!args._id) {
        throw badRequest;
    }
    await connectDb();
    const User = getUser();
    const signedInUser = await getUserFromCookies(req, res, multitenantMode);
    if (!checkUserType(signedInUser, [UserType.ADMIN])) {
        throw unauthorized;
    }
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    const user = await User.findOne({
        tenantId,
        _id: isomorphicObjectId(args._id),
    }, {
        projection: {
            email: 1,
            name: 1,
            type: 1,
            customData: 1,
            disabled: 1,
        },
    });
    if (!user) {
        throw notFound;
    }
    return user;
}
const queryKey = "/api/auth/panel/user/get";
export const useAuthPanelUserGet = (args, options) => useQuery({
    queryKey: [queryKey, args?._id],
    queryFn: queryFnWrapper(queryKey, args),
    ...options,
    enabled: !!args?._id,
});
// noinspection JSUnusedGlobalSymbols
export const prefetch_authPanelUserGet = (queryClient, ...args) => queryClient.prefetchQuery({
    queryKey: [queryKey, args[0]._id],
    queryFn: () => panelUserGetHandler(...args),
});
export const invalidate_authPanelUserGet = (queryClient, args) => queryClient.invalidateQueries({ queryKey: [queryKey, args._id] });
// noinspection JSUnusedGlobalSymbols
export const remove_authPanelUserGet = (queryClient, args) => queryClient.removeQueries({ queryKey: [queryKey, args._id] });
