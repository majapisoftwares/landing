import papr from "@majapisoftwares/next/db";

export default async function migration() {
  console.info("Updating schemas");
  await papr.updateSchemas();

  // add migration here

}
