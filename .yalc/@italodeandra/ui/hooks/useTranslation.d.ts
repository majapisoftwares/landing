export type Intl<T = string> = {
    [key: string]: Intl<T> | T;
};
export default function useTranslation<K extends string>(intl?: Intl, prePath?: string): (sentence: K, path?: string) => string;
