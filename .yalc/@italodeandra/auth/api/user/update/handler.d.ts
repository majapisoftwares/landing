import { NextApiRequest, NextApiResponse } from "next";
import { AuthUserUpdateApiArgs, AuthUserUpdateApiResponse } from "./common";
import { AuthConfig } from "../../index";
export default function userUpdateApiHandler(args: AuthUserUpdateApiArgs, req: NextApiRequest, res: NextApiResponse, { connectDb, multitenantMode }: AuthConfig): Promise<AuthUserUpdateApiResponse>;
