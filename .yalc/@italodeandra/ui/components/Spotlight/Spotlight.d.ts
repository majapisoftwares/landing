import { UnstyledAutocompleteProps } from "../Autocomplete";
export interface SpotlightProps<T extends {
    _id: string;
}> extends UnstyledAutocompleteProps<T> {
    open?: boolean;
    onClose?: () => void;
}
export default function Spotlight<T extends {
    _id: string;
}>({ open, onClose, placeholder, query: defaultQuery, onChangeQuery, emptyText, ...props }: SpotlightProps<T>): import("react").JSX.Element;
