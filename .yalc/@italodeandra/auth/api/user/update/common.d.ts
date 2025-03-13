import { IUser } from "../../../collections/user/User";
export declare const authUserUpdateApiMutationKey = "/api/auth/user/update";
export type AuthUserUpdateApiArgs = Pick<Partial<IUser>, "name" | "username" | "profilePicture" | "customData">;
export type AuthUserUpdateApiResponse = void;
