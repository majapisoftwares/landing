import Button from "@italodeandra/ui/components/Button";
import Input from "@italodeandra/ui/components/Input";
import Text from "@italodeandra/ui/components/Text";
import AuthLayout from "./AuthLayout/AuthLayout";
import useTranslation from "@italodeandra/ui/hooks/useTranslation";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import emailRegExp from "@italodeandra/ui/utils/emailRegExp";
import { useAuthSignIn } from "../api/signIn";
import { useQueryClient } from "@tanstack/react-query";
import { setData_authGetUser } from "../api/getUser";
import { useRouter } from "next/router";
import Stack from "@italodeandra/ui/components/Stack";
import { useAuthContext } from "../AuthContext";
export default function SignInView({ backgroundImage, disableSignUp, }) {
    const { Routes, intl } = useAuthContext();
    const t = useTranslation(intl);
    const queryClient = useQueryClient();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, setError, } = useForm();
    const { mutate: signIn, isPending: isSigningIn } = useAuthSignIn({
        async onSuccess(user) {
            setData_authGetUser(queryClient, user);
            await router.replace(Routes.Home);
        },
        async onError(error) {
            if (error.code === 401) {
                setError("email", {
                    message: t("User not found or incorrect password"),
                });
                return;
            }
            console.error(error);
            setError("email", {
                message: t("There was an unexpected error. Try again later."),
            });
        },
    });
    function onSubmit(values) {
        if (!isSigningIn) {
            signIn(values);
        }
    }
    return (<AuthLayout title={t("Sign in to your account")} subtitle={!disableSignUp ? (<>
            {t("Or")}{" "}
            <Text variant="link" href={Routes.SignUp}>
              {t("create a new account")}
            </Text>
          </>) : undefined} backgroundImage={backgroundImage}>
      <NextSeo title={t("Sign in")}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack className="gap-5">
          <Input label={t("Email")} type="email" autoComplete="email" required {...register("email", {
        required: t("Please fill with your email"),
        pattern: {
            value: emailRegExp,
            message: t("Please fill with a valid email"),
        },
    })} error={!!errors.email} helpText={errors.email?.message}/>

          <Input label={t("Password")} type="password" autoComplete="current-password" required {...register("password", {
        required: t("Please fill with your password"),
    })}/>

          <div className="flex items-center justify-between">
            <div />
            <div className="text-sm">
              <Text variant="link" href={Routes.ForgotPassword}>
                {t("Forgot your password?")}
              </Text>
            </div>
          </div>

          <Button type="submit" variant="filled" color="primary" className="w-full" loading={isSigningIn}>
            {t("Sign in")}
          </Button>
        </Stack>
      </form>
    </AuthLayout>);
}
