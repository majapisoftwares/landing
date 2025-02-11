import { UnstyledAutocompleteProps } from "../Autocomplete/UnstyledAutocomplete";
export type AutocompleteProps<T extends {
    _id: string;
}> = UnstyledAutocompleteProps<T>;
export default function Autocomplete<T extends {
    _id: string;
}>({ query: defaultQuery, onChangeQuery, emptyText, className, ...props }: AutocompleteProps<T>): import("react").JSX.Element;
