export type Intl<T = string> = {
    [key: string]: Intl<T> | T;
};
export default function getTranslation<K extends string>(intl?: Intl, prePath?: string): (sentence: K, path?: string) => string;
