import { NextApiRequest, NextApiResponse } from "next";
import Jsonify from "@italodeandra/next/utils/Jsonify";
import { IUser } from "../../../collections/user/User";
import { AuthConfig } from "../..";
import { InferApiArgs, InferApiResponse } from "@italodeandra/next/api/apiHandlerWrapper";
import { UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
export default function authPanelUserImpersonateHandler(args: Jsonify<Pick<IUser, "_id">>, req: NextApiRequest, res: NextApiResponse, { connectDb, disableImpersonate, multitenantMode }: AuthConfig): Promise<void>;
export type AuthPanelUserImpersonateResponse = InferApiResponse<typeof authPanelUserImpersonateHandler>;
export type AuthPanelUserImpersonateArgs = InferApiArgs<typeof authPanelUserImpersonateHandler>;
export declare const useAuthPanelUserImpersonate: (options?: UseMutationOptions<AuthPanelUserImpersonateResponse, AxiosError, AuthPanelUserImpersonateArgs>) => import("@tanstack/react-query").UseMutationResult<void, AxiosError<unknown, any>, {
    _id: string;
}, unknown>;
