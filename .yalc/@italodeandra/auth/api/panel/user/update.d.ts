import { NextApiRequest, NextApiResponse } from "next";
import { UseMutationOptions } from "@tanstack/react-query";
import Jsonify from "@italodeandra/next/utils/Jsonify";
import { IUser } from "../../../collections/user/User";
import { InferApiArgs, InferApiResponse } from "@italodeandra/next/api/apiHandlerWrapper";
import { AuthConfig } from "../..";
import { AuthPanelUserCreateArgs } from "./create";
interface UserUpdateError extends Error {
    status: "Existing";
}
export default function authPanelUserUpdateHandler(args: Jsonify<Pick<IUser, "_id"> & AuthPanelUserCreateArgs>, req: NextApiRequest, res: NextApiResponse, { connectDb, multitenantMode }: AuthConfig): Promise<{
    _id: import("bson").ObjectId;
}>;
export type AuthPanelUserUpdateResponse = InferApiResponse<typeof authPanelUserUpdateHandler>;
export type AuthPanelUserUpdateArgs = InferApiArgs<typeof authPanelUserUpdateHandler>;
export declare const useAuthPanelUserUpdate: (options?: UseMutationOptions<AuthPanelUserUpdateResponse, UserUpdateError, AuthPanelUserUpdateArgs>) => import("@tanstack/react-query").UseMutationResult<{
    _id: string;
}, UserUpdateError, {
    _id: string;
    email: string;
    type: string;
    name?: string | undefined;
    disabled?: boolean | undefined;
    customData?: {} | undefined;
}, unknown>;
export {};
