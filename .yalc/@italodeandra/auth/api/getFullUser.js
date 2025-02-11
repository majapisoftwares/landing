import { useQuery, useQueryClient, } from "@tanstack/react-query";
import { queryFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { unauthorized } from "@italodeandra/next/api/errors";
import { getFullUserFromCookies } from "../collections/user/User.service";
import { useEffect } from "react";
import { setData_authGetUser } from "./getUser";
import authState, { useAuthSnapshot } from "../auth.state";
export default async function getFullUserHandler(_args, req, res, { connectDb, multitenantMode }) {
    await connectDb();
    const user = await getFullUserFromCookies(req, res, multitenantMode);
    if (!user) {
        throw unauthorized(res, { noLog: true });
    }
    return user;
}
const queryKey = "/api/auth/getFullUser";
// noinspection JSUnusedGlobalSymbols
export const useAuthGetFullUser = (required) => {
    const queryClient = useQueryClient();
    const { token } = useAuthSnapshot();
    useEffect(() => {
        if (!token) {
            setData_authGetUser(queryClient, null);
        }
    }, [queryClient, token]);
    const query = useQuery({
        queryKey: [queryKey],
        queryFn: queryFnWrapper(queryKey),
        enabled: required || !!token,
    });
    useEffect(() => {
        if (query.isError) {
            if (query.error.code === 401) {
                authState.token = null;
                setData_authGetUser(queryClient, null);
            }
        }
    }, [query.error?.code, query.isError, queryClient]);
    return query;
};
export const invalidate_authGetFullUser = (queryClient) => queryClient.invalidateQueries({ queryKey: [queryKey] });
export const setData_authGetFullUser = (queryClient, data) => queryClient.setQueryData([queryKey], data);
