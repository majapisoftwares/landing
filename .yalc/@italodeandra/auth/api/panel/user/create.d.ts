import { NextApiRequest, NextApiResponse } from "next";
import { UseMutationOptions } from "@tanstack/react-query";
import Jsonify from "@italodeandra/next/utils/Jsonify";
import { IUser } from "../../../collections/user/User";
import { InferApiArgs, InferApiResponse } from "@italodeandra/next/api/apiHandlerWrapper";
import { AuthConfig } from "../..";
interface UserCreateError extends Error {
    status: "Existing";
}
export default function authPanelUserCreateHandler(args: Jsonify<Pick<IUser, "name" | "email" | "type" | "customData" | "disabled">>, req: NextApiRequest, res: NextApiResponse, { connectDb, multitenantMode }: AuthConfig): Promise<{
    _id: import("bson").ObjectId;
}>;
export type AuthPanelUserCreateResponse = InferApiResponse<typeof authPanelUserCreateHandler>;
export type AuthPanelUserCreateArgs = InferApiArgs<typeof authPanelUserCreateHandler>;
export declare const useAuthPanelUserCreate: (options?: UseMutationOptions<AuthPanelUserCreateResponse, UserCreateError, AuthPanelUserCreateArgs>) => import("@tanstack/react-query").UseMutationResult<{
    _id: string;
}, UserCreateError, {
    email: string;
    type: string;
    name?: string | undefined;
    disabled?: boolean | undefined;
    customData?: {} | undefined;
}, unknown>;
export {};
