export default function createLocalStorageStateHydration<T extends object>(localStorageName: string, state: T, properties?: (keyof T)[]): void;
