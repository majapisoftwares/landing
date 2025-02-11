import { ComponentType, ReactElement, ReactNode } from "react";
export type DataTableProps<RowData> = {
    title?: ReactNode;
    subtitle?: ReactNode;
    headerContent?: ReactNode;
    data?: RowData[];
    idAccessor?: keyof RowData;
    columns: {
        id?: string;
        title?: ReactNode;
        accessor?: keyof RowData;
        render?: (item: RowData) => ReactNode;
        headerClassName?: string;
        cellClassName?: string;
        sortable?: boolean;
    }[];
    actions?: {
        title: string;
        icon: ReactElement;
        href?: string | ((item: RowData) => string | null | undefined);
        onClick?: (item: RowData) => void;
        wrapper?: ComponentType<{
            item: RowData;
            children: ReactNode;
        }>;
        target?: string;
    }[];
    isLoading?: boolean;
    noRecords?: ReactNode;
    onRowClick?: (item: RowData) => void;
    rowWrapper?: ComponentType<{
        item: RowData;
        children: ReactNode;
    }>;
    pagination?: boolean;
    currentPage?: number;
    onChangePage?: (page: number) => void;
    totalItems?: number;
    itemsPerPage?: number;
    className?: string;
    autoHeight?: boolean;
    onChangeSort?: (sort: [string, "asc" | "desc"][]) => void;
    sort?: [string, "asc" | "desc"][];
    previousText?: string;
    nextText?: string;
    showingText?: string;
    toText?: string;
    ofText?: string;
    resultsText?: string;
    tableClassName?: string;
};
export default function DataTable<RowData>({ title, subtitle, headerContent, data, idAccessor, actions, columns, isLoading, noRecords: noRecordsText, onRowClick, rowWrapper, pagination, currentPage, onChangePage, totalItems, itemsPerPage, className, autoHeight, onChangeSort, sort: defaultSort, previousText, nextText, showingText, toText, ofText, resultsText, tableClassName, }: DataTableProps<RowData>): import("react").JSX.Element;
