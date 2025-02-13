import Routes from "../Routes";
import prepareSendMail from "@italodeandra/next/mailer/sendMail";
import { IUserType } from "../collections/user/User";
import AuthIntl from "../intl/AuthIntl";
export interface AuthConfig {
    connectDb: () => Promise<void>;
    primaryColor: string;
    intl?: Record<string, AuthIntl>;
    routes: Routes;
    fallbackLocale?: string;
    sendMail: ReturnType<typeof prepareSendMail>;
    disableImpersonate?: boolean;
    newUserDefaultType?: IUserType[keyof IUserType];
    multitenantMode?: boolean;
}
export default function Auth(config: AuthConfig): import("next").NextApiHandler;
