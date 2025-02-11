import { AuthConfig } from "./index";
export declare const authGetTenantApi: {
    handler: import("next").NextApiHandler;
    unwrappedHandler: (_args: void, req: import("next").NextApiRequest, _res: import("next").NextApiResponse, { connectDb }: AuthConfig) => Promise<import("mongodb").WithId<Pick<{
        _id: import("bson").ObjectId;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        subdomain: string;
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
    }, "_id" | "enabledFeatures">> | null>;
    Types: {
        Args: void;
        Response: {
            enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
            _id: string;
        } | null;
        QueryOptions: Partial<import("@tanstack/react-query").UseQueryOptions<{
            enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
            _id: string;
        } | null, Error, {
            enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
            _id: string;
        } | null, import("@tanstack/query-core").QueryKey>>;
        MutationOptions: Partial<import("@tanstack/react-query").UseMutationOptions<{
            enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
            _id: string;
        } | null, import("axios").AxiosError<unknown, any>, void, unknown>>;
    };
    useQuery: (args?: void | undefined, options?: Partial<import("@tanstack/react-query").UseQueryOptions<{
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null, Error, {
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null, import("@tanstack/query-core").QueryKey>> | undefined) => import("@tanstack/react-query").UseQueryResult<{
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null, Error>;
    useMutation: (options?: Partial<import("@tanstack/react-query").UseMutationOptions<{
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null, import("axios").AxiosError<unknown, any>, void, unknown>> | undefined) => import("@tanstack/react-query").UseMutationResult<{
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null, import("axios").AxiosError<unknown, any>, void, Record<string, any>>;
    invalidateQueries: (queryClient: import("@tanstack/query-core").QueryClient, args?: void | undefined) => Promise<void>;
    prefetchQuery: (queryClient: import("@tanstack/query-core").QueryClient, args: void, req?: import("next").NextApiRequest | import("next").GetServerSidePropsContext["req"], res?: import("next").NextApiResponse | import("next").GetServerSidePropsContext["res"]) => Promise<void>;
    refetchQueries: (queryClient: import("@tanstack/query-core").QueryClient, args?: void | undefined) => Promise<void>;
    cancelQueries: (queryClient: import("@tanstack/query-core").QueryClient, args?: void | undefined) => Promise<void>;
    getQueryData: (queryClient: import("@tanstack/query-core").QueryClient, args?: void | undefined) => {
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null | undefined;
    setQueryData: (queryClient: import("@tanstack/query-core").QueryClient, updater: import("@tanstack/query-core").Updater<{
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null | undefined, {
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null | undefined>, args?: void | undefined) => {
        enabledFeatures?: import("../collections/tenant/Tenant").TenantFeature[] | undefined;
        _id: string;
    } | null | undefined;
};
