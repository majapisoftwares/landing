import { useMutation } from "@tanstack/react-query";
import { mutationFnWrapper } from "@italodeandra/next/api/apiHandlerWrapper";
import { authUserUpdateApiMutationKey, } from "./common";
import getQueryClient from "@italodeandra/next/api/getQueryClient";
import { invalidate_authGetUser } from "../../getUser";
export const useAuthUserUpdateApi = (options) => useMutation({
    ...options,
    mutationKey: [authUserUpdateApiMutationKey],
    mutationFn: mutationFnWrapper(authUserUpdateApiMutationKey),
    onSuccess(...args) {
        const queryClient = getQueryClient();
        void invalidate_authGetUser(queryClient);
        return options?.onSuccess?.(...args);
    },
});
