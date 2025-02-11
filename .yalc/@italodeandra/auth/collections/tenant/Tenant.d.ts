export declare enum TenantFeature {
    ALL = "ALL"
}
declare const tenantSchema: [{
    _id: import("bson").ObjectId;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    subdomain: string;
    enabledFeatures?: TenantFeature[] | undefined;
}, {
    timestamps: true;
}];
declare const getTenant: () => import("papr").Model<{
    _id: import("bson").ObjectId;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    subdomain: string;
    enabledFeatures?: TenantFeature[] | undefined;
}, {
    timestamps: true;
}>;
export type ITenant = (typeof tenantSchema)[0];
export default getTenant;
