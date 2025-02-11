import { useQuery, useQueryClient, } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { queryFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { unauthorized } from "@italodeandra/next/api/errors";
import { checkUserType, getUserFromCookies, } from "../collections/user/User.service";
import { useAuthContext } from "../AuthContext";
import { useEffect } from "react";
import { invalidate_authGetFullUser, setData_authGetFullUser, } from "./getFullUser";
import authState, { useAuthSnapshot } from "../auth.state";
export default async function getUserHandler(_args, req, res, { connectDb, multitenantMode }) {
    await connectDb();
    const user = await getUserFromCookies(req, res, multitenantMode);
    if (!user) {
        throw unauthorized(res, { noLog: true });
    }
    return user;
}
const queryKey = "/api/auth/getUser";
export const useAuthGetUser = (required, options) => {
    const queryClient = useQueryClient();
    const { token } = useAuthSnapshot();
    useEffect(() => {
        if (!token) {
            setData_authGetUser(queryClient, null);
        }
    }, [queryClient, token]);
    const enabled = typeof options?.enabled !== "undefined"
        ? options?.enabled
        : required || !!token;
    const query = useQuery({
        queryKey: [queryKey],
        queryFn: queryFnWrapper(queryKey),
        ...options,
        enabled,
    });
    useEffect(() => {
        if (query.isError) {
            if (query.error.code === 401) {
                authState.token = null;
                setData_authGetUser(queryClient, null);
            }
        }
    }, [query.error?.code, query.isError, queryClient]);
    return { ...query, isLoading: enabled ? query.isLoading : false };
};
export const useAuthRequiredUserType = (typesToCheck, redirectTo) => {
    const { data: user, isLoading } = useAuthGetUser(true);
    const router = useRouter();
    const { Routes } = useAuthContext();
    redirectTo = redirectTo || Routes.Home;
    useEffect(() => {
        if (!isLoading && !checkUserType(user, typesToCheck)) {
            void router.replace(redirectTo);
        }
    }, [isLoading, router, redirectTo, typesToCheck, user]);
    return !!user;
};
// noinspection JSUnusedGlobalSymbols
export const useAuthRequiredUser = (redirectTo) => {
    const { data: user, isLoading } = useAuthGetUser(true);
    const router = useRouter();
    const { Routes } = useAuthContext();
    redirectTo = redirectTo || Routes.Home;
    useEffect(() => {
        if (!isLoading && !user) {
            void router.replace(redirectTo);
        }
    }, [isLoading, router, redirectTo, user]);
    return !!user;
};
export const useAuthUser = () => {
    const { data: user } = useAuthGetUser();
    const router = useRouter();
    const { Routes } = useAuthContext();
    useEffect(() => {
        if (user) {
            void router.replace(Routes.Home);
        }
    }, [Routes.Home, router, user]);
    return !!user;
};
// noinspection JSUnusedGlobalSymbols
export const prefetch_authGetUser = (queryClient, ...args) => queryClient.prefetchQuery({
    queryKey: [queryKey],
    queryFn: () => getUserHandler(...args),
});
export const setData_authGetUser = (queryClient, data) => {
    if (data === null) {
        setData_authGetFullUser(queryClient, null);
    }
    return queryClient.setQueryData([queryKey], data);
};
export const invalidate_authGetUser = async (queryClient) => {
    await invalidate_authGetFullUser(queryClient);
    return queryClient.invalidateQueries({ queryKey: [queryKey] });
};
