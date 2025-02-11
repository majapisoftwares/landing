import { useAuthPanelUserList, } from "../../../api/panel/user/list";
import DataTable from "@italodeandra/ui/components/Table/DataTable";
import { translateUserType } from "../../../collections/user/User.service";
import Button from "@italodeandra/ui/components/Button";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../../../AuthContext";
import useTranslation from "@italodeandra/ui/hooks/useTranslation";
import Alert from "@italodeandra/ui/components/Alert";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import Breadcrumbs from "@italodeandra/ui/components/Breadcrumbs";
import { IdentificationIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useAuthPanelUserImpersonate } from "../../../api/panel/user/impersonate";
import Group from "@italodeandra/ui/components/Group";
export default function PanelUsersView({ disableImpersonate, }) {
    const { Routes, intl } = useAuthContext();
    const router = useRouter();
    const { data, isFetching, isError, refetch } = useAuthPanelUserList({
        sort: "createdAt",
        sortDirection: "desc",
    });
    const t = useTranslation(intl);
    const columns = useMemo(() => [
        {
            title: t("Name"),
            accessor: "name",
        },
        {
            title: t("Email"),
            accessor: "email",
        },
        {
            title: t("Type"),
            render: ({ type, disabled }) => t(disabled ? "Disabled" : translateUserType(type)),
        },
        {
            title: t("Created at"),
            render: ({ createdAt }) => dayjs(createdAt).format("lll"),
        },
        {
            title: t("Updated at"),
            render: ({ updatedAt }) => dayjs(updatedAt).format("lll"),
        },
    ], [t]);
    const handleRowClick = useCallback((item) => router.push(Routes.PanelUser(item._id)), [router, Routes]);
    const { mutate: impersonate, isPending: isImpersonating } = useAuthPanelUserImpersonate();
    const pages = useMemo(() => [{ title: t("Users") }], [t]);
    return (<div className="mb-2 flex flex-1 flex-col md:px-2">
      <NextSeo title={t("Users")}/>
      <Group className="mb-2">
        <Breadcrumbs pages={pages}/>
        <div className="flex-grow"/>
        <Group className="items-end">
          <Button leading={<PlusIcon />} href={Routes.PanelNewUser}>
            {t("New")}
          </Button>
        </Group>
      </Group>
      <DataTable className="flex-1" autoHeight columns={columns} data={data} isLoading={isFetching || isImpersonating} onRowClick={handleRowClick} noRecords={!isFetching && isError ? (<Alert title={t("There was an unexpected error trying to list the users")} variant="error" className="m-2" actions={<Button variant="text" color="error" onClick={() => refetch()}>
                  {t("Try again")}
                </Button>}/>) : (t("No records"))} actions={!disableImpersonate
            ? [
                {
                    icon: <IdentificationIcon />,
                    title: t("Impersonate"),
                    onClick: impersonate,
                },
            ]
            : undefined}/>
    </div>);
}
