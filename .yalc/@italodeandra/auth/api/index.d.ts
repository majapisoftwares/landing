import Routes from "../Routes";
import prepareSendMail from "@italodeandra/next/mailer/sendMail";
import { IUserType } from "../collections/user/User";
export interface AuthConfig {
    connectDb: () => Promise<void>;
    primaryColor: string;
    intl?: Record<string, {
        "Reset your password": string;
        "To reset your password click the link below": string;
        "Click here": string;
        "If you didn't request to reset your password, please ignore this email": string;
        "Kind regards": string;
        "or copy and paste the following link on your browser": string;
        "We received a request to reset your password": string;
    }>;
    routes: Routes;
    fallbackLocale?: string;
    sendMail: ReturnType<typeof prepareSendMail>;
    disableImpersonate?: boolean;
    newUserDefaultType?: IUserType[keyof IUserType];
    multitenantMode?: boolean;
}
export default function Auth(config: AuthConfig): import("next").NextApiHandler;
