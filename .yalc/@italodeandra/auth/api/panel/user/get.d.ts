import { QueryClient, UseQueryOptions } from "@tanstack/react-query";
import { ObjectId } from "bson";
import Jsonify from "@italodeandra/next/utils/Jsonify";
import { NextApiRequest, NextApiResponse } from "next";
import { AuthConfig } from "../..";
import { InferApiArgs, InferApiResponse } from "@italodeandra/next/api/apiHandlerWrapper";
export default function panelUserGetHandler(args: Jsonify<{
    _id: ObjectId;
}>, req: NextApiRequest, res: NextApiResponse, { connectDb, multitenantMode }: AuthConfig): Promise<import("mongodb").WithId<Pick<{
    _id: ObjectId;
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
    tenantId?: ObjectId | undefined;
    disabled?: boolean | undefined;
    customData?: Pick<{}, never> | undefined;
}, "_id" | "email" | "type" | "name" | "disabled" | "customData">>>;
export type AuthPanelUserGetApiResponse = InferApiResponse<typeof panelUserGetHandler>;
export type AuthPanelUserGetApiArgs = InferApiArgs<typeof panelUserGetHandler>;
export declare const useAuthPanelUserGet: (args?: AuthPanelUserGetApiArgs, options?: UseQueryOptions<AuthPanelUserGetApiResponse>) => import("@tanstack/react-query").UseQueryResult<{
    email: string;
    type: string;
    name?: string | undefined;
    disabled?: boolean | undefined;
    customData?: {} | undefined;
    _id: string;
}, Error>;
export declare const prefetch_authPanelUserGet: (queryClient: QueryClient, args: {
    _id: string;
}, req: NextApiRequest, res: NextApiResponse, args_3: AuthConfig) => Promise<void>;
export declare const invalidate_authPanelUserGet: (queryClient: QueryClient, args: Parameters<typeof panelUserGetHandler>[0]) => Promise<void>;
export declare const remove_authPanelUserGet: (queryClient: QueryClient, args: Parameters<typeof panelUserGetHandler>[0]) => void;
