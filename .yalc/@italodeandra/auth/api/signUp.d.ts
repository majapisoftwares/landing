import { NextApiRequest, NextApiResponse } from "next";
import { UseMutationOptions } from "@tanstack/react-query";
import { AuthConfig } from ".";
import { InferApiArgs } from "@italodeandra/next/api/apiHandlerWrapper";
export interface AuthSignUpApiError {
    code: 409;
}
export default function signUpHandler(args: {
    email: string;
    password: string;
}, req: NextApiRequest, res: NextApiResponse, { connectDb, newUserDefaultType, multitenantMode }: AuthConfig): Promise<void>;
export type AuthSignUpArgs = InferApiArgs<typeof signUpHandler>;
export declare const useAuthSignUp: (options?: UseMutationOptions<void, AuthSignUpApiError, AuthSignUpArgs>) => import("@tanstack/react-query").UseMutationResult<void, AuthSignUpApiError, {
    email: string;
    password: string;
}, unknown>;
