import { NextApiRequest, NextApiResponse } from "next";
import { UseMutationOptions } from "@tanstack/react-query";
import { InferApiArgs } from "@italodeandra/next/api/apiHandlerWrapper";
import { AuthConfig } from ".";
interface ResetPasswordError extends Error {
    status: "TokenExpired";
    noLog?: true;
}
export default function resetPasswordHandler(args: {
    newPassword: string;
    token: string;
}, req: NextApiRequest, res: NextApiResponse, { connectDb, multitenantMode }: AuthConfig): Promise<void>;
export type AuthResetPasswordArgs = InferApiArgs<typeof resetPasswordHandler>;
export declare const useAuthResetPassword: (options?: UseMutationOptions<void, ResetPasswordError, AuthResetPasswordArgs>) => import("@tanstack/react-query").UseMutationResult<void, ResetPasswordError, {
    newPassword: string;
    token: string;
}, unknown>;
export {};
