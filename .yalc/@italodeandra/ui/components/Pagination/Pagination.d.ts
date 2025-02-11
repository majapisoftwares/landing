export interface PaginationProps {
    totalItems?: number;
    itemsPerPage?: number;
    currentPage: number;
    onChangePage?: (page: number) => void;
    className?: string;
    pageHref?: (page: number) => string;
    paginationText?: string;
    previousText?: string;
    nextText?: string;
    pagesToClickAmount?: number;
}
export default function Pagination({ totalItems, itemsPerPage, currentPage, onChangePage, className, pageHref, paginationText, previousText, nextText, pagesToClickAmount, }: PaginationProps): import("react").JSX.Element;
