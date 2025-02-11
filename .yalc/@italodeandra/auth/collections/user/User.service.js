import crypto from "crypto";
import jwt from "jsonwebtoken";
import getUser, { UserType } from "./User";
import isomorphicObjectId from "@italodeandra/next/utils/isomorphicObjectId";
import { deleteCookie, getCookies } from "cookies-next";
import { getReqTenant } from "../tenant/Tenant.service";
import removeEmptyProperties from "@italodeandra/next/utils/removeEmptyProperties";
const { JWT_SECRET } = process.env;
export function hashPassword(plainPassword, salt) {
    return crypto
        .pbkdf2Sync(plainPassword, salt, 1000, 64, `sha512`)
        .toString(`hex`);
}
export function generateSalt() {
    return crypto.randomBytes(16).toString("hex");
}
export function checkUserPassword(user, plainPassword) {
    const passwordToCheck = hashPassword(plainPassword, user.passwordSalt);
    return user.password === passwordToCheck;
}
export function generateToken(userId) {
    if (!JWT_SECRET) {
        throw Error(`Missing JWT_SECRET env var`);
    }
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "30d" });
}
export function readToken(token) {
    if (!JWT_SECRET) {
        throw Error(`Missing JWT_SECRET env var`);
    }
    const payload = jwt.verify(token, JWT_SECRET);
    return isomorphicObjectId(payload.id);
}
export function generateResetPasswordToken(userEmail) {
    if (!JWT_SECRET) {
        throw Error(`Missing JWT_SECRET env var`);
    }
    return jwt.sign({ email: userEmail }, JWT_SECRET, { expiresIn: "10m" });
}
export function readResetPasswordToken(token) {
    if (!JWT_SECRET) {
        throw Error(`Missing JWT_SECRET env var`);
    }
    const payload = jwt.verify(token, JWT_SECRET);
    return payload.email;
}
export function checkUserType(user, typesToCheck) {
    return !!user?.type && typesToCheck.includes(user.type);
}
// noinspection JSUnusedGlobalSymbols
export function convertToUserType(userType) {
    return UserType[userType];
}
export async function createUser(doc) {
    const User = getUser();
    const passwordSalt = generateSalt();
    removeEmptyProperties(doc);
    return User.insertOne({
        ...doc,
        email: doc.email.toLowerCase().trim(),
        password: hashPassword(doc.password, passwordSalt),
        passwordSalt,
    });
}
export function getAuthCookieToken(req, res) {
    const cookies = getCookies({ req, res });
    try {
        return cookies.auth ? JSON.parse(cookies.auth).token : null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        return null;
    }
}
export async function getUserFromCookies(req, res, multitenantMode) {
    const User = getUser();
    const tenantId = multitenantMode
        ? (await getReqTenant(req))?._id
        : undefined;
    const token = getAuthCookieToken(req, res);
    if (!token) {
        return null;
    }
    try {
        const userId = readToken(token);
        const user = await User.findOne({
            disabled: { $ne: true },
            ...(multitenantMode ? { tenantId } : {}),
            _id: userId,
        }, { projection: { email: 1, type: 1, name: 1, profilePicture: 1 } });
        if (!user) {
            deleteCookie("auth", { req, res });
            return null;
        }
        return user;
    }
    catch (e) {
        console.error(e);
        deleteCookie("auth", { req, res });
        return null;
    }
}
export async function getFullUserFromCookies(req, res, multitenantMode) {
    const User = getUser();
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    const token = getAuthCookieToken(req, res);
    if (!token) {
        return null;
    }
    try {
        const userId = readToken(token);
        const user = await User.findOne({
            disabled: { $ne: true },
            ...(multitenantMode ? { tenantId } : {}),
            _id: userId,
        }, {
            projection: {
                email: 1,
                type: 1,
                name: 1,
                phoneNumber: 1,
                customData: 1,
                profilePicture: 1,
            },
        });
        if (!user) {
            deleteCookie("auth", { req, res });
            return null;
        }
        return user;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        deleteCookie("auth", { req, res });
        return null;
    }
}
export async function setUserPassword(userId, plainPassword) {
    const User = getUser();
    const passwordSalt = generateSalt();
    await User.updateOne({
        _id: userId,
    }, {
        $set: {
            password: hashPassword(plainPassword, passwordSalt),
            passwordSalt,
        },
    });
}
export const userTypeTranslations = {
    [UserType.ADMIN]: "Administrator",
    [UserType.NORMAL]: "Normal",
};
export function translateUserType(userType) {
    return userTypeTranslations[userType.toString()];
}
