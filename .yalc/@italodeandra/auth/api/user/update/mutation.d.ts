import { UseMutationOptions } from "@tanstack/react-query";
import { AuthUserUpdateApiArgs, AuthUserUpdateApiResponse } from "./common";
import { AxiosError } from "axios";
export declare const useAuthUserUpdateApi: (options?: UseMutationOptions<AuthUserUpdateApiResponse, AxiosError, AuthUserUpdateApiArgs>) => import("@tanstack/react-query").UseMutationResult<void, AxiosError<unknown, any>, AuthUserUpdateApiArgs, unknown>;
