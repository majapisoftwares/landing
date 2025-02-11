import { QueryClient } from "@tanstack/react-query";
import { AuthConfig } from "../..";
import { InferApiArgs, InferApiResponse } from "@italodeandra/next/api/apiHandlerWrapper";
import { NextApiRequest, NextApiResponse } from "next";
export default function authPanelUserListHandler(args: {
    search?: string;
    sort?: string;
    sortDirection?: "asc" | "desc";
}, req: NextApiRequest, res: NextApiResponse, { connectDb, multitenantMode }: AuthConfig): Promise<import("mongodb").WithId<Pick<{
    _id: import("bson").ObjectId;
    email: string;
    type: string;
    password: string;
    passwordSalt: string;
    createdAt: Date;
    updatedAt: Date;
    emailVerified?: Date | undefined;
    name?: string | undefined;
    phoneNumber?: string | undefined;
    profilePicture?: string | undefined;
    tenantId?: import("bson").ObjectId | undefined;
    disabled?: boolean | undefined;
    customData?: Pick<{}, never> | undefined;
}, "_id" | "email" | "type" | "name" | "createdAt" | "updatedAt" | "disabled">>[]>;
export type AuthPanelUserListApiArgs = InferApiArgs<typeof authPanelUserListHandler>;
export type AuthPanelUserListApiResponse = InferApiResponse<typeof authPanelUserListHandler>;
export declare const useAuthPanelUserList: (args?: AuthPanelUserListApiArgs) => import("@tanstack/react-query").UseQueryResult<{
    email: string;
    type: string;
    name?: string | undefined;
    createdAt: string;
    updatedAt: string;
    disabled?: boolean | undefined;
    _id: string;
}[], Error>;
export declare const prefetch_authPanelUserList: (queryClient: QueryClient, args: {
    search?: string;
    sort?: string;
    sortDirection?: "asc" | "desc";
}, req: NextApiRequest, res: NextApiResponse, args_3: AuthConfig) => Promise<void>;
export declare const invalidate_authPanelUserList: (queryClient: QueryClient) => Promise<void>;
