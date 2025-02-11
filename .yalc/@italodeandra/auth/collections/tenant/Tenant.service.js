import getTenant from "./Tenant";
export function getSubdomain(urlOrReq) {
    const url = typeof urlOrReq === "string" ? urlOrReq : urlOrReq?.headers.host;
    // noinspection HttpUrlsUsage
    url?.replaceAll("http://", "").replaceAll("https://", "");
    if (!url) {
        return url;
    }
    if (url.startsWith("localhost")) {
        return undefined;
    }
    return url.split(".")[0];
}
export async function getReqTenant(req) {
    const Tenant = getTenant();
    return Tenant.findOne({
        subdomain: getSubdomain(req),
    }, { projection: { _id: 1, subdomain: 1, enabledFeatures: 1 } });
}
