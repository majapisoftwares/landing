import type { OptionsType } from "cookies-next";
export default function createStateHydration<T extends object>(cookieName: string, state: T, properties?: (keyof T)[]): (cookies?: object) => void;
export declare const getCookies: (options?: OptionsType) => Promise<Record<string, string>>;
