import { proxy, useSnapshot } from "valtio";
import createStateHydration from "@italodeandra/ui/utils/createStateHydration";
import { deleteCookie } from "cookies-next";
const authState = proxy({
    token: null,
    previousToken: null,
});
export function clearAuthState() {
    authState.token = null;
    authState.previousToken = null;
    deleteCookie("auth", { path: "/" });
}
export const hydrateAuthState = createStateHydration("auth", authState);
export const useAuthSnapshot = () => useSnapshot(authState);
export default authState;
