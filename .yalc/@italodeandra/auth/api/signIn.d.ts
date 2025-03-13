import { NextApiRequest, NextApiResponse } from "next";
import { UseMutationOptions } from "@tanstack/react-query";
import { AuthConfig } from ".";
import { InferApiArgs, InferApiResponse } from "@italodeandra/next/api/apiHandlerWrapper";
export interface AuthSignInApiError {
    code: 401;
}
export default function signInHandler(args: {
    email: string;
    password: string;
}, req: NextApiRequest, res: NextApiResponse, { connectDb, multitenantMode }: AuthConfig): Promise<{
    user: Pick<import("mongodb").WithId<Pick<{
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
        customData?: Pick<{}, never> | undefined;
    }, "_id" | "email" | "type" | "password" | "passwordSalt" | "disabled" | "customData">>, "_id" | "email" | "type" | "customData">;
    token: string;
}>;
export type AuthSignInApiArgs = InferApiArgs<typeof signInHandler>;
export type AuthSignInApiResponse = InferApiResponse<typeof signInHandler>;
export declare const useAuthSignIn: (options?: UseMutationOptions<AuthSignInApiResponse, AuthSignInApiError, AuthSignInApiArgs>) => import("@tanstack/react-query").UseMutationResult<{
    user: {
        _id: string;
        email: string;
        type: string;
        customData?: {} | undefined;
    };
    token: string;
}, AuthSignInApiError, {
    email: string;
    password: string;
}, unknown>;
