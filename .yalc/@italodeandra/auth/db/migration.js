export default async function authMigration(db) {
    await db.collection("users").createIndex({ tenantId: 1, email: 1 }, {
        unique: true,
    });
    await db
        .collection("users")
        .createIndex({ tenantId: 1, email: "text", name: "text" });
}
