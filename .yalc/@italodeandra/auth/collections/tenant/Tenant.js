import db from "@italodeandra/next/db";
import { onlyServer } from "@italodeandra/next/utils/isServer";
import { schema, types } from "papr";
export var TenantFeature;
(function (TenantFeature) {
    TenantFeature["ALL"] = "ALL";
})(TenantFeature || (TenantFeature = {}));
const tenantSchema = onlyServer(() => schema({
    _id: types.objectId({ required: true }),
    name: types.string({ required: true }),
    subdomain: types.string({ required: true }),
    createdAt: types.date({ required: true }),
    updatedAt: types.date({ required: true }),
    enabledFeatures: types.array(types.enum(Object.values(TenantFeature), { required: true })),
}, {
    timestamps: true,
}));
const getTenant = () => onlyServer(() => db.model("tenants", tenantSchema));
export default getTenant;
