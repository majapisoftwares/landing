import authMigration from "@majapisoftwares/auth/db/migration";
import authSeed from "@majapisoftwares/auth/db/seed";
import { connectDb as connect } from "@majapisoftwares/next/db";
import migration from "./migration";
import devSeed from "./dev-seed";
import { MULTITENANT_MODE } from "../constants";

export default async function connectDb() {
  await connect([migration, authMigration, () => authSeed(MULTITENANT_MODE), devSeed]);
}
