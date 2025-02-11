import Button from "@italodeandra/ui/components/Button";
import Input from "@italodeandra/ui/components/Input";
import Text from "@italodeandra/ui/components/Text";
import AuthLayout from "./AuthLayout/AuthLayout";
import useTranslation from "@italodeandra/ui/hooks/useTranslation";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";
import emailRegExp from "@italodeandra/ui/utils/emailRegExp";
import { useQueryClient } from "@tanstack/react-query";
import { invalidate_authGetUser } from "../api/getUser";
import { useRouter } from "next/router";
import { useAuthSignUp } from "../api/signUp";
import Stack from "@italodeandra/ui/components/Stack";
import { useAuthContext } from "../AuthContext";
export default function SignUpView({ backgroundImage }) {
    const { Routes, intl } = useAuthContext();
    const t = useTranslation(intl);
    const queryClient = useQueryClient();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, setError, } = useForm();
    const { mutate: signUp, isPending: isCreatingAccount } = useAuthSignUp({
        async onSuccess() {
            await invalidate_authGetUser(queryClient);
            await router.replace(Routes.Home);
        },
        async onError(error) {
            if (error.code === 409) {
                setError("email", {
                    message: t("An user with the same email already exists"),
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
        if (!isCreatingAccount) {
            signUp(values);
        }
    }
    return (<AuthLayout title={t("Create a new account")} subtitle={<>
          {t("Or")}{" "}
          <Text variant="link" href={Routes.SignIn}>
            {t("sign in to your account")}
          </Text>
        </>} backgroundImage={backgroundImage}>
      <NextSeo title={t("Sign up")}/>
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

          <Button type="submit" variant="filled" color="primary" className="w-full" loading={isCreatingAccount}>
            {t("Sign up")}
          </Button>
        </Stack>
      </form>
    </AuthLayout>);
}
