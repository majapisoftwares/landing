import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import DataTable, {
  DataTableProps,
} from "@italodeandra/ui/components/Table/DataTable";
import Breadcrumbs from "@italodeandra/ui/components/Breadcrumbs";
import Button from "@italodeandra/ui/components/Button";
import Alert from "@italodeandra/ui/components/Alert";
import { PlusIcon } from "@heroicons/react/16/solid";
import { parseAsInteger, useQueryState } from "nuqs";
import Routes from "../../../routes";
import {
  VehicleListApi,
  vehicleListApi,
} from "../../../pages/api/vehicle/list";

export default function Vehicles() {
  const router = useRouter();

  const [page, setPage] = useQueryState(
    "p",
    parseAsInteger
      .withDefault(1)
      .withOptions({ history: "push", clearOnDefault: true }),
  );

  const { data, isFetching, isError, refetch } = vehicleListApi.useQuery({
    page,
    limit: 15,
  });

  const columns = useMemo(() => {
    const columns: DataTableProps<
      VehicleListApi["Response"]["results"][0]
    >["columns"] = [];
    columns.push({
      title: "Title",
      accessor: "title",
    });
    return columns;
  }, []);

  const handleRowClick = useCallback(
    (item: VehicleListApi["Response"]["results"][0]) =>
      router.push(Routes.PanelVehicle(item._id)),
    [router],
  );

  const pages = useMemo(() => [{ title: "Vehicles" }], []);

  return (
    <div className="flex flex-1 flex-col gap-2 sm:px-2 sm:pb-2">
      <NextSeo title={pages[0].title} />
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <div className="flex grow flex-col gap-2 md:flex-row md:items-center">
          <Breadcrumbs pages={pages} />
        </div>
        <div className="flex flex-col justify-end gap-2 px-2 sm:px-0 md:flex-row md:items-center">
          <Button
            variant="outlined"
            leading={<PlusIcon />}
            href={Routes.PanelVehicle("nova")}
          >
            Vehicle
          </Button>
        </div>
      </div>

      <DataTable
        className="flex flex-1 flex-col"
        columns={columns}
        data={data?.results}
        isLoading={isFetching}
        onRowClick={handleRowClick}
        autoHeight
        noRecords={
          !isFetching && isError ? (
            <Alert
              title="There was an unknown error trying to list the vehicles"
              variant="error"
              className="m-2"
              actions={
                <Button variant="text" color="error" onClick={() => refetch()}>
                  Tente novamente
                </Button>
              }
            />
          ) : (
            "No vehicle found"
          )
        }
        pagination
        onChangePage={setPage}
        currentPage={page}
        itemsPerPage={15}
        totalItems={data?.totalItems}
      />
    </div>
  );
}
