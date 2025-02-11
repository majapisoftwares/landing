export default function createStateHydration<T extends object>(cookieName: string, state: T, properties?: (keyof T)[]): (cookies?: {
    state?: string;
}) => void;
