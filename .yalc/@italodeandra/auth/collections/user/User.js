import { schema, types } from "papr";
import { onlyServer } from "@italodeandra/next/utils/isServer";
import db from "@italodeandra/next/db";
export const UserType = {
    NORMAL: "NORMAL",
    ADMIN: "ADMIN",
};
const userSchema = onlyServer(() => schema({
    _id: types.objectId({ required: true }),
    email: types.string({
        required: true,
        maxLength: 255,
    }),
    emailVerified: types.date(),
    type: types.string({ required: true }),
    password: types.string({
        required: true,
        maxLength: 130,
    }),
    passwordSalt: types.string({
        required: true,
        maxLength: 60,
    }),
    name: types.string({
        maxLength: 100,
    }),
    phoneNumber: types.string(),
    profilePicture: types.string(),
    createdAt: types.date({ required: true }),
    updatedAt: types.date({ required: true }),
    customData: types.any(),
    tenantId: types.objectId(),
    disabled: types.boolean(),
}, {
    defaults: {
        type: UserType.NORMAL,
    },
    timestamps: true,
}));
const getUser = () => onlyServer(() => db.model("users", userSchema));
export default getUser;
