import createApi from "@italodeandra/next/api/createApi";
import getTenant from "../collections/tenant/Tenant";
import { getSubdomain } from "../collections/tenant/Tenant.service";
export const authGetTenantApi = createApi("/api/auth/getTenant", async (_args, req, _res, { connectDb }) => {
    await connectDb();
    const Tenant = getTenant();
    return await Tenant.findOne({
        subdomain: getSubdomain(req.headers.host),
    }, { projection: { _id: 0, enabledFeatures: 1 } });
});
