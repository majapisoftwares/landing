export declare function getSubdomain(urlOrReq?: string | {
    headers: {
        host?: string;
    };
}): string | undefined;
export declare function getReqTenant(req?: {
    headers: {
        host?: string;
    };
}): Promise<import("mongodb").WithId<Pick<{
    _id: import("bson").ObjectId;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    subdomain: string;
    enabledFeatures?: import("./Tenant").TenantFeature[] | undefined;
}, "_id" | "subdomain" | "enabledFeatures">> | null>;
