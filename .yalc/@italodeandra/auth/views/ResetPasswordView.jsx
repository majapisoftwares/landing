import Button from "@italodeandra/ui/components/Button";
import Input from "@italodeandra/ui/components/Input";
import Text from "@italodeandra/ui/components/Text";
import AuthLayout from "./AuthLayout/AuthLayout";
import useTranslation from "@italodeandra/ui/hooks/useTranslation";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Stack from "@italodeandra/ui/components/Stack";
import { useMemo } from "react";
import { useAuthResetPassword } from "../api/resetPassword";
import { useAuthContext } from "../AuthContext";
export default function ResetPasswordView({ backgroundImage, }) {
    const { Routes, intl } = useAuthContext();
    const t = useTranslation(intl);
    const router = useRouter();
    const token = router.query.token;
    const email = useMemo(() => {
        try {
            return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("binary")).email;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }
        catch (e) {
            return "";
        }
    }, [token]);
    const { register, handleSubmit, formState: { errors }, setError, } = useForm();
    const { mutate: resetPassword, isPending: isResettingPassword, isSuccess: wasPasswordReset, } = useAuthResetPassword({
        async onError(error) {
            if (error.status === "TokenExpired") {
                setError("newPassword", {
                    message: t("Your token expired. To generate a new one, make a new request to reset your password."),
                });
                return;
            }
            console.error(error);
            setError("newPassword", {
                message: t("There was an unexpected error. Try again later."),
            });
        },
    });
    function onSubmit(data) {
        if (!isResettingPassword) {
            resetPassword({
                ...data,
                token,
            });
        }
    }
    if (wasPasswordReset) {
        return (<AuthLayout title={t("Password reset successfully")}>
        <NextSeo title={t("Reset password")}/>
        <Stack>
          <Text variant="secondary">
            {t("Click")}{" "}
            <Text variant="link" href={Routes.SignIn}>
              {t("here")}
            </Text>{" "}
            {t("to sign in")}.
          </Text>
        </Stack>
      </AuthLayout>);
    }
    return (<AuthLayout title={t("Reset your password")} subtitle={<>
          {t("Or")}{" "}
          <Text variant="link" href={Routes.SignIn}>
            {t("sign in to your account")}
          </Text>{" "}
          {t("if you remembered the password")}
        </>} backgroundImage={backgroundImage}>
      <NextSeo title={t("Reset password")}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack className="gap-5">
          <Input label={t("Email")} value={email} readOnly/>

          <Input label={t("New password")} type="password" autoComplete="new-password" required {...register("newPassword", {
        required: t("Please fill with the new password"),
    })} error={!!errors.newPassword} helpText={errors.newPassword?.message}/>

          <Button type="submit" variant="filled" color="primary" className="w-full" loading={isResettingPassword}>
            {t("Reset password")}
          </Button>
        </Stack>
      </form>
    </AuthLayout>);
}
