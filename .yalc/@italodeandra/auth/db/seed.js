import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import getUser, { UserType } from "../collections/user/User";
import { createUser } from "../collections/user/User.service";
import getTenant from "../collections/tenant/Tenant";
const appEnv = process.env.APP_ENV || "development";
export const userId = isomorphicObjectId("62da0f38c6dc21efec2136e6");
export const tenantId = isomorphicObjectId("661021d7cae5964a0b9ec04a");
export default async function authSeed(multiTenant) {
    const User = getUser();
    const Tenant = getTenant();
    if (appEnv === "development") {
        let tenant;
        if (multiTenant) {
            tenant = await Tenant.findOneAndUpdate({
                _id: tenantId,
            }, {
                $set: {
                    name: "Test Tenant",
                    subdomain: "tenant",
                },
            }, { upsert: true });
        }
        if (!(await User.countDocuments({ email: "italodeandra@gmail.com" })))
            await createUser({
                ...(tenant ? { tenantId: tenant?._id } : {}),
                _id: userId,
                email: "italodeandra@gmail.com",
                password: "12345678",
                type: UserType.ADMIN,
                name: "Ítalo Andrade",
            });
        if (!(await User.countDocuments({ email: "italodeandra+b@gmail.com" })))
            await createUser({
                ...(tenant ? { tenantId: tenant?._id } : {}),
                email: "italodeandra+b@gmail.com",
                password: "12345678",
                type: UserType.ADMIN,
                name: "Ítalo Andrade B",
            });
    }
}
