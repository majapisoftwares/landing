import Button from "@italodeandra/ui/components/Button";
import Input from "@italodeandra/ui/components/Input";
import Text from "@italodeandra/ui/components/Text";
import AuthLayout from "./AuthLayout/AuthLayout";
import useTranslation from "@italodeandra/ui/hooks/useTranslation";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import emailRegExp from "@italodeandra/ui/utils/emailRegExp";
import { useAuthRequestPasswordReset } from "../api/requestPasswordReset";
import Stack from "@italodeandra/ui/components/Stack";
import { useAuthContext } from "../AuthContext";
export default function ForgotPasswordView({ backgroundImage, }) {
    const { Routes, intl } = useAuthContext();
    const t = useTranslation(intl);
    const { register, handleSubmit, formState: { errors }, setError, watch, } = useForm();
    const { mutate: requestPasswordReset, isPending: isRequestingToResetPassword, isSuccess: wasEmailSent, } = useAuthRequestPasswordReset({
        async onError(error) {
            console.error(error);
            setError("email", {
                message: t("There was an unexpected error. Try again later."),
            });
        },
    });
    function onSubmit(data) {
        if (!isRequestingToResetPassword) {
            requestPasswordReset(data);
        }
    }
    if (wasEmailSent) {
        return (<AuthLayout title={t("Check your email inbox")} subtitle={<>
            {t("We sent a link to")} {watch("email")}
          </>} backgroundImage={backgroundImage}>
        <NextSeo title={t("Reset your password")}/>
        <Stack>
          <Text>
            {t("Click the link we sent you to create a new password")}.
          </Text>
          <Text variant="secondary">
            {t("Did you remember your password?")}{" "}
            <Text variant="link" href={Routes.SignIn}>
              {t("Sign in")}
            </Text>{" "}
            {t("to your account")}.
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
        </>}>
      <NextSeo title={t("Reset password")}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack className="gap-5">
          <Input label={t("Email")} type="email" autoComplete="email" required {...register("email", {
        required: t("Please fill with your email"),
        pattern: {
            value: emailRegExp,
            message: t("Please fill with a valid email"),
        },
    })} error={!!errors.email} helpText={errors.email?.message}/>

          <Button type="submit" variant="filled" color="primary" className="w-full" loading={isRequestingToResetPassword}>
            {t("Reset password")}
          </Button>
        </Stack>
      </form>
    </AuthLayout>);
}
