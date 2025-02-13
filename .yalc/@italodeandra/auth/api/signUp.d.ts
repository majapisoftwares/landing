import { NextApiRequest, NextApiResponse } from "next";
import { UseMutationOptions } from "@tanstack/react-query";
import { AuthConfig } from ".";
import { InferApiArgs, InferApiResponse } from "@italodeandra/next/api/apiHandlerWrapper";
export interface AuthSignUpApiError {
    code: 409;
}
export default function signUpHandler(args: {
    email: string;
    password: string;
}, req: NextApiRequest, res: NextApiResponse, { connectDb, newUserDefaultType, multitenantMode }: AuthConfig): Promise<{
    user: Pick<{
        _id: import("bson").ObjectId;
        email: string;
        type: string;
        password: string;
        passwordSalt: string;
        createdAt: Date;
        updatedAt: Date;
        username?: string | undefined;
        emailVerified?: Date | undefined;
        name?: string | undefined;
        phoneNumber?: string | undefined;
        profilePicture?: string | undefined;
        tenantId?: import("bson").ObjectId | undefined;
        disabled?: boolean | undefined;
        customData?: import("../collections/user/User").UserCustomData | undefined;
    }, "_id" | "email" | "type" | "customData">;
    token: string;
}>;
export type AuthSignUpApiArgs = InferApiArgs<typeof signUpHandler>;
export type AuthSignUpApiResponse = InferApiResponse<typeof signUpHandler>;
export declare const useAuthSignUp: (options?: UseMutationOptions<AuthSignUpApiResponse, AuthSignUpApiError, AuthSignUpApiArgs>) => import("@tanstack/react-query").UseMutationResult<{
    user: {
        _id: string;
        email: string;
        type: string;
        customData?: {} | undefined;
    };
    token: string;
}, AuthSignUpApiError, {
    email: string;
    password: string;
}, unknown>;
