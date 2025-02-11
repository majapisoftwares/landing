export interface IUserType {
    NORMAL: "NORMAL";
    ADMIN: "ADMIN";
}
export declare const UserType: IUserType;
export interface UserCustomData {
}
declare const userSchema: [{
    _id: import("bson").ObjectId;
    email: string;
    type: string;
    password: string;
    passwordSalt: string;
    createdAt: Date;
    updatedAt: Date;
    emailVerified?: Date | undefined;
    name?: string | undefined;
    phoneNumber?: string | undefined;
    profilePicture?: string | undefined;
    tenantId?: import("bson").ObjectId | undefined;
    disabled?: boolean | undefined;
    customData?: UserCustomData | undefined;
}, {
    defaults: {
        type: "NORMAL";
    };
    timestamps: true;
}];
declare const getUser: () => import("papr").Model<{
    _id: import("bson").ObjectId;
    email: string;
    type: string;
    password: string;
    passwordSalt: string;
    createdAt: Date;
    updatedAt: Date;
    emailVerified?: Date | undefined;
    name?: string | undefined;
    phoneNumber?: string | undefined;
    profilePicture?: string | undefined;
    tenantId?: import("bson").ObjectId | undefined;
    disabled?: boolean | undefined;
    customData?: UserCustomData | undefined;
}, {
    defaults: {
        type: "NORMAL";
    };
    timestamps: true;
}>;
export type IUser = (typeof userSchema)[0];
export default getUser;
