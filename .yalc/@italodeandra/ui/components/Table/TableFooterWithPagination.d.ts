export interface TableFooterWithPaginationProps {
    itemsPerPage: number;
    totalItems?: number;
    currentPage: number;
    onChangePage?: (page: number) => void;
    previousText?: string;
    nextText?: string;
    showingText?: string;
    toText?: string;
    ofText?: string;
    resultsText?: string;
}
export default function TableFooterWithPagination({ itemsPerPage, totalItems, currentPage, onChangePage, previousText, nextText, showingText, toText, ofText, resultsText, }: TableFooterWithPaginationProps): import("react").JSX.Element;
