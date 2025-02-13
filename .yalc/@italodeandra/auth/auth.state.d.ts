declare const authState: {
    token: string | null;
    previousToken: string | null;
};
export declare function clearAuthState(): void;
export declare const hydrateAuthState: (cookies?: object) => void;
export declare const useAuthSnapshot: () => {
    readonly token: string | null;
    readonly previousToken: string | null;
};
export default authState;
