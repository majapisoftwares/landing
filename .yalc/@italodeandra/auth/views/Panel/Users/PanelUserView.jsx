import { useEffect, useMemo } from "react";
import { useAuthContext } from "../../../AuthContext";
import useTranslation from "@italodeandra/ui/hooks/useTranslation";
import { NextSeo } from "next-seo";
import Breadcrumbs from "@italodeandra/ui/components/Breadcrumbs";
import Input from "@italodeandra/ui/components/Input";
import { useRouter } from "next/router";
import { useAuthPanelUserGet } from "../../../api/panel/user/get";
import { useForm } from "react-hook-form";
import emailRegExp from "@italodeandra/ui/utils/emailRegExp";
import { UserType } from "../../../collections/user/User";
import { translateUserType } from "../../../collections/user/User.service";
import Button from "@italodeandra/ui/components/Button";
import { useAuthPanelUserUpdate } from "../../../api/panel/user/update";
import { useAuthPanelUserCreate } from "../../../api/panel/user/create";
import { useDeepCompareEffect } from "react-use";
import { showNotification } from "@italodeandra/ui/components/Notifications/notifications.state";
import { SwitchInput } from "@italodeandra/ui/components/Switch";
import clsx from "@italodeandra/ui/utils/clsx";
export default function PanelUserView({ customFields, innerClassName, }) {
    const { Routes, intl } = useAuthContext();
    const t = useTranslation(intl);
    const router = useRouter();
    const _id = router.query.id;
    const isNew = ["new", "novo"].includes(_id);
    const { data: user, isLoading, isFetching, } = useAuthPanelUserGet(!isNew
        ? {
            _id,
        }
        : undefined);
    const title = isNew ? t("New user") : user?.email || t("User");
    const pages = useMemo(() => [
        { title: t("Users"), href: Routes.PanelUsers },
        { title, loading: !isNew && isLoading },
    ], [Routes.PanelUsers, isLoading, isNew, t, title]);
    const form = useForm();
    const { register, handleSubmit, formState: { errors }, setError, reset, watch, setValue, } = form;
    useEffect(() => {
        if (user) {
            reset({
                ...user,
            });
        }
        else {
            reset({
                type: UserType.NORMAL,
            });
        }
    }, [reset, user]);
    const { mutate: update, isPending: isUpdating, isSuccess: isUpdated, reset: resetUpdate, } = useAuthPanelUserUpdate({
        onError(err) {
            if (err.status === "Existing") {
                setError("email", {
                    message: t("An user with the same email already exists"),
                });
                return;
            }
            console.error(err);
            showNotification({
                title: t("It was not possible to update the user"),
                message: t("There was an unexpected error. Try again later."),
                icon: "error",
            });
        },
    });
    const { mutate: create, isPending: isCreating, isSuccess: isCreated, reset: resetCreate, } = useAuthPanelUserCreate({
        onSuccess(data) {
            void router.push(Routes.PanelUser(data._id));
        },
        onError(err) {
            if (err.status === "Existing") {
                setError("email", {
                    message: t("An user with the same email already exists"),
                });
                return;
            }
            console.error(err);
            showNotification({
                title: t("It was not possible to create the user"),
                message: t("There was an unexpected error. Try again later."),
                icon: "error",
            });
        },
    });
    useDeepCompareEffect(() => {
        resetUpdate();
        resetCreate();
    }, [watch(), resetUpdate, resetCreate]);
    const isSubmitting = isUpdating || isCreating;
    const isSaved = isUpdated || isCreated;
    const isLoadingFields = !isNew && isLoading;
    function onSubmit(values) {
        if (!isSubmitting) {
            if (!isNew) {
                void update({
                    _id,
                    ...values,
                });
            }
            else {
                void create(values);
            }
        }
    }
    return (<div className="md:px-2">
      <NextSeo title={title}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={clsx("mx-auto w-full max-w-screen-lg", innerClassName)}>
          <Breadcrumbs pages={pages} className="col-span-2 mb-4" loading={isFetching}/>
          <div className="flex flex-col gap-4 px-2 sm:grid sm:grid-cols-2 md:px-0">
            <Input label={t("Email")} type="email" required {...register("email", {
        required: t("Please fill with an email"),
        pattern: {
            value: emailRegExp,
            message: t("Please fill with a valid email"),
        },
    })} error={!!errors.email} helpText={errors.email?.message} loading={isLoadingFields}/>
            <Input label={t("Name")} {...register("name")} loading={isLoadingFields}/>
            <Input select label={t("Type")} required {...register("type")} loading={isLoadingFields}>
              {Object.values(UserType).map((type) => (<option key={type} value={type}>
                  {t(translateUserType(type))}
                </option>))}
            </Input>
            <SwitchInput label={t("Disabled")} checked={watch("disabled")} onChange={(checked) => setValue("disabled", checked)} rightLabel={watch("disabled") ? t("User is disabled") : t("User is enabled")}/>
            {customFields?.(form, isLoadingFields)}
            <div className="col-span-2 grid justify-items-end border-t border-zinc-200 pt-4 dark:border-zinc-800">
              {!isSaved ? (<Button type="submit" loading={isSubmitting || isLoadingFields} variant="filled" color="primary">
                  {t("Save")}
                </Button>) : (<Button type="submit" loading={isSubmitting || isLoadingFields} variant="filled" color="success">
                  {t("Saved")}
                </Button>)}
            </div>
          </div>
        </div>
      </form>
    </div>);
}
