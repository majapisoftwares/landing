import { QueryClient, UseQueryResult } from "@tanstack/react-query";
import { InferApiResponse } from "@italodeandra/next/api/apiHandlerWrapper";
import { AuthConfig } from "./index";
import { NextApiRequest, NextApiResponse } from "next";
export default function getFullUserHandler(_args: void, req: NextApiRequest, res: NextApiResponse, { connectDb, multitenantMode }: AuthConfig): Promise<Pick<{
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
    customData?: import("../collections/user/User").UserCustomData | undefined;
}, "_id" | "email" | "type" | "name" | "phoneNumber" | "profilePicture" | "customData">>;
export type AuthGetFullUserApiResponse = InferApiResponse<typeof getFullUserHandler>;
export declare const useAuthGetFullUser: (required?: boolean) => UseQueryResult<AuthGetFullUserApiResponse, {
    code: 401;
}>;
export declare const invalidate_authGetFullUser: (queryClient: QueryClient) => Promise<void>;
export declare const setData_authGetFullUser: (queryClient: QueryClient, data: null) => unknown;
