import { useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Breadcrumbs from "@italodeandra/ui/components/Breadcrumbs";
import Input from "@italodeandra/ui/components/Input";
import Button from "@italodeandra/ui/components/Button";
import { Json } from "@italodeandra/ui/components/Code";
import { omit } from "lodash-es";
import getObjectDiff from "@italodeandra/next/utils/getObjectDiff";
import { CheckIcon } from "@heroicons/react/16/solid";
import { vehicleGetApi } from "../../../pages/api/vehicle/get";
import { vehicleUpsertApi } from "../../../pages/api/vehicle/upsert";
import Routes from "../../../routes";
import { IS_NODE_PROD } from "../../../constants";
import ConfirmationButton from "@italodeandra/ui/components/ConfirmationButton";
import { vehicleDeleteApi } from "../../../pages/api/vehicle/delete";
import { TrashIcon } from "@heroicons/react/20/solid";
import { VehicleFormSchema, vehicleFormSchema } from "./vehicleFormSchema";
import { useForm } from "@italodeandra/ui/form2";
import { useAuthGetUser } from "@italodeandra/auth/api/getUser";
import { checkUserType } from "@italodeandra/auth/collections/user/User.service";
import { UserType } from "@italodeandra/auth/collections/user/User";

export default function Vehicle() {
  const router = useRouter();
  const _id = router.query._id as string;
  const isNew = ["novo", "nova", "new"].includes(_id);

  const { data, isLoading, isFetching } = vehicleGetApi.useQuery(
    {
      _id,
    },
    {
      enabled: !isNew,
    },
  );

  const pages = useMemo(
    () => [
      { title: "Vehicles", href: Routes.PanelVehicles },
      {
        title: isNew ? "New vehicle" : data?.title || "Vehicle",
        loading: isLoading,
      },
    ],
    [data?.title, isLoading, isNew],
  );

  const form = useForm({
    schema: vehicleFormSchema,
  });

  useEffect(() => {
    if (data) {
      form.reset(JSON.parse(JSON.stringify(omit(data, ["_id"]))));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?._id, form]);

  const vehicleUpsert = vehicleUpsertApi.useMutation({
    onSuccess(data) {
      if (_id !== data._id) {
        void router.push(Routes.PanelVehicle(data._id));
      }
    },
  });
  const vehicleDelete = vehicleDeleteApi.useMutation({
    onSuccess() {
      void router.replace(Routes.PanelVehicles);
    },
  });

  const pendingSave = useMemo(() => {
    const diff = getObjectDiff<Partial<VehicleFormSchema>>(
      omit(data, ["_id"]),
      form.watch(),
    );
    return !!Object.keys(diff).length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data), form.watch()]);

  const onSubmit = useCallback(() => {
    if (!vehicleUpsert.isPending) {
      vehicleUpsert.mutate({
        _id: !isNew ? _id : undefined,
        ...form.getValues(),
      });
    }
  }, [vehicleUpsert, isNew, _id, form]);

  const authGetUser = useAuthGetUser();
  const isAdmin = checkUserType(authGetUser.data, [UserType.ADMIN]);

  return (
    <div className="flex flex-1 flex-col gap-2 sm:pb-4 sm:pr-4">
      <NextSeo title={pages[0].title} />
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-2">
        <Breadcrumbs
          pages={pages}
          className="sticky top-0 z-10 sm:top-4"
          loading={isFetching}
        />
        <form
          className="flex flex-col gap-2 px-2 sm:px-0"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Input
            label="Title"
            {...form.register("title")}
            loading={isLoading}
          />
          {!IS_NODE_PROD && <Json className="col-span-6" json={form.watch()} />}
          <div className="sticky bottom-0 col-span-6 -mb-4 flex w-full gap-1 pb-4 backdrop-blur">
            <Button
              className="w-full"
              variant="filled"
              color="primary"
              size="lg"
              loading={vehicleUpsert.isPending}
              trailing={
                !pendingSave && vehicleUpsert.isSuccess ? (
                  <CheckIcon />
                ) : undefined
              }
              type="submit"
            >
              Save
            </Button>
            {!isNew && isAdmin && (
              <ConfirmationButton
                label={<TrashIcon />}
                confirmation="Are you sure you want to delete the vehicle?"
                onConfirm={() => vehicleDelete.mutate({ _id })}
                loading={vehicleDelete.isPending}
                cancel="Cancel"
                confirm="Delete"
                position="bottom-right"
                buttonProps={{
                  size: "lg",
                  icon: true,
                }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
