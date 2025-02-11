import { Fragment, useCallback, useEffect, useState, } from "react";
import Loading from "../Loading";
import Skeleton from "../Skeleton";
import Stack from "../Stack";
import Text from "../Text";
import Table from "./Table";
import clsx from "../../utils/clsx";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
export default function DataTable({ title, subtitle, headerContent, data, idAccessor = "_id", actions, columns, isLoading, noRecords: noRecordsText = "No records", onRowClick, rowWrapper, pagination, currentPage = 0, onChangePage, totalItems, itemsPerPage = 0, className, autoHeight, onChangeSort, sort: defaultSort = [], previousText, nextText, showingText, toText, ofText, resultsText, tableClassName, }) {
    const [sort, setSort] = useState(defaultSort);
    const [page, setPage] = useState(currentPage);
    useEffect(() => {
        if (page !== currentPage) {
            setPage(currentPage);
        }
    }, [currentPage, page]);
    useEffect(() => {
        if (onChangePage) {
            onChangePage(page);
        }
    }, [onChangePage, page]);
    const handleRowClick = useCallback((item) => (onRowClick ? () => onRowClick(item) : undefined), [onRowClick]);
    const getColumnSort = useCallback((id) => sort.find((column) => id === column[0]), [sort]);
    const handleColumnClick = useCallback((id) => () => {
        const sort = getColumnSort(id) || [
            id,
            null,
        ];
        switch (sort[1]) {
            case "asc":
                sort[1] = "desc";
                break;
            case "desc":
                sort[1] = null;
                break;
            case null:
                sort[1] = "asc";
                break;
        }
        setSort((oldSort) => {
            const newSort = [...oldSort];
            if (sort[1]) {
                const column = newSort.find((column) => column[0] === id);
                if (column) {
                    column[1] = sort[1];
                }
                else {
                    newSort.push([sort[0], sort[1]]);
                }
                return newSort;
            }
            return newSort.filter((column) => !!column[1]);
        });
    }, [getColumnSort]);
    useEffect(() => {
        if (onChangeSort) {
            onChangeSort?.(sort);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);
    return (<Stack className={clsx({
            "flex flex-1 flex-col": autoHeight,
        }, className)}>
      {(title || subtitle || headerContent) && (<Table.Header title={title} subtitle={subtitle}>
          {headerContent}
        </Table.Header>)}
      <Table autoHeight={autoHeight} className={tableClassName}>
        <Table.Head>
          <Table.Row>
            {columns.map((column, i) => {
            const id = column.id ||
                (typeof column.title === "string"
                    ? column.title
                    : i.toString());
            const columnSort = getColumnSort(id);
            return (<Table.Cell key={id} className={column.headerClassName}>
                  {column.sortable ? (<span className="group inline-flex cursor-pointer" onClick={handleColumnClick(id)}>
                      {column.title}
                      <span className={clsx("mb-auto ml-2 flex-none rounded text-zinc-400", {
                        "bg-zinc-200 text-zinc-900 group-hover:bg-zinc-300": columnSort?.[1],
                        "invisible group-hover:visible group-focus:visible": !columnSort?.[1],
                    })}>
                        <ChevronUpIcon className={clsx("h-5 w-5", {
                        "scale-y-flip": columnSort?.[1] === "desc",
                    })} aria-hidden="true"/>
                      </span>
                    </span>) : (column.title)}
                </Table.Cell>);
        })}
            {actions && <Table.Cell />}
          </Table.Row>
          {isLoading && (<tr className="absolute right-3 top-2 rounded-full bg-zinc-50/50 dark:bg-zinc-900/50">
              <td>
                <Loading className="mt-px"/>
              </td>
            </tr>)}
        </Table.Head>
        <Table.Body>
          {data?.map((item) => {
            const RowComponent = rowWrapper || Fragment;
            return (<RowComponent key={item[idAccessor]} {...(RowComponent !== Fragment
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    { item: item }
                : {})}>
                <Table.Row onClick={handleRowClick(item)}>
                  {columns.map((column, i) => {
                    const value = column.accessor
                        ? item[column.accessor]
                        : column.render && column.render(item);
                    return (<Table.Cell key={column.id ||
                            (typeof column.title === "string" ? column.title : i)} className={column.cellClassName} title={column.cellClassName?.includes("max-w") &&
                            typeof value === "string"
                            ? value
                            : undefined}>
                        {value}
                      </Table.Cell>);
                })}
                  {actions && (<Table.Cell actions>
                      {actions.map((action, i) => {
                        const ActionComponent = action.wrapper || Fragment;
                        return (<ActionComponent key={i} {...(ActionComponent !== Fragment
                            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                { item: item }
                            : {})}>
                            <Table.ActionButton title={action.title} onClick={() => action.onClick?.(item)} href={typeof action.href === "function"
                                ? action.href?.(item)
                                : action.href} target={action.target}>
                              {action.icon}
                            </Table.ActionButton>
                          </ActionComponent>);
                    })}
                    </Table.Cell>)}
                </Table.Row>
              </RowComponent>);
        })}
          {isLoading && !data?.length && (<Table.Row>
              {columns.map((column, i) => (<Table.Cell key={column.id ||
                    (typeof column.title === "string" ? column.title : i)}>
                  <Skeleton className="h-3"/>
                </Table.Cell>))}
              {actions && (<Table.Cell actions>
                  <Skeleton className="inline-block h-3 w-6"/>
                </Table.Cell>)}
            </Table.Row>)}
          {!isLoading && !data?.length && (<Table.Row>
              <Table.Cell colSpan={columns.length + (actions ? 1 : 0)}>
                <Text variant="secondary">{noRecordsText}</Text>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
      {pagination ? (<Table.FooterWithPagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} onChangePage={onChangePage} previousText={previousText} nextText={nextText} showingText={showingText} toText={toText} ofText={ofText} resultsText={resultsText}/>) : undefined}
    </Stack>);
}
