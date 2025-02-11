import getUser from "../collections/user/User";
import { generateResetPasswordToken } from "../collections/user/User.service";
import { useMutation } from "@tanstack/react-query";
import { badRequest } from "@italodeandra/next/api/errors";
import { mutationFnWrapper, } from "@italodeandra/next/api/apiHandlerWrapper";
import { getReqTenant } from "../collections/tenant/Tenant.service";
const appEnv = process.env.APP_ENV || "development";
export default async function requestPasswordResetHandler(args, req, _res, { routes, connectDb, intl, fallbackLocale, primaryColor, sendMail, multitenantMode, }) {
    if (!routes.ResetPassword) {
        throw Error("Missing ResetPassword route");
    }
    if (!args.email) {
        throw badRequest;
    }
    const locales = req.headers["accept-language"]
        ?.split(",")
        .map((locale) => locale.split(";")[0]) || [];
    const locale = getFirstAvailableLocale(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    Object.keys(intl), locales, 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fallbackLocale);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const t = intl[locale];
    await connectDb();
    const User = getUser();
    const tenantId = multitenantMode ? (await getReqTenant(req))?._id : undefined;
    const user = await User.findOne({
        disabled: { $ne: true },
        ...(multitenantMode ? { tenantId } : {}),
        email: args.email.toLowerCase().trim(),
    }, {
        projection: {
            email: 1,
        },
    });
    if (!user)
        return;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const host = req.headers.host;
    const protocol = /^localhost(:\d+)?$/.test(host) ? "http" : "https";
    const token = generateResetPasswordToken(user.email);
    const url = `${protocol}://${host}${routes.ResetPassword(token)}`;
    await sendMail(user.email, t["Reset your password"], {
        title: t["Reset your password"],
        intro: t["We received a request to reset your password"],
        action: [
            {
                instructions: t["To reset your password click the link below"],
                button: {
                    color: primaryColor,
                    link: url,
                    text: t["Click here"],
                },
            },
        ],
        outro: [
            `${t["or copy and paste the following link on your browser"]}: `,
            `<span style="word-wrap: break-word; color: gray; user-select: all;">${url}</span>`,
            `${t["If you didn't request to reset your password, please ignore this email"]}.`,
        ],
        signature: t["Kind regards"],
    });
    if (appEnv === "development") {
        console.info("Reset password in URL:", url);
    }
}
function getFirstAvailableLocale(availableLocales, locales, fallbackLocale) {
    for (const locale of locales) {
        if (availableLocales.includes(locale)) {
            return locale;
        }
    }
    return fallbackLocale;
}
const mutationKey = "/api/auth/requestPasswordReset";
export const useAuthRequestPasswordReset = (options) => useMutation({
    mutationKey: [mutationKey],
    mutationFn: mutationFnWrapper(mutationKey),
    ...options,
});
