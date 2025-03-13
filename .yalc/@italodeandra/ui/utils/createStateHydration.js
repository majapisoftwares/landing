import { getCookies as cnGetCookies, setCookie } from "cookies-next";
import ms from "ms";
import { snapshot, subscribe } from "valtio";
import { omit } from "lodash-es";
export default function createStateHydration(cookieName, state, properties) {
    const retypedState = state;
    if (!retypedState._hydration) {
        subscribe(state, () => {
            setCookie(cookieName, omit(snapshot(retypedState), [
                "_hydration",
                ...Object.keys(retypedState).filter((p) => properties && !properties.includes(p)),
            ]), {
                maxAge: ms("30d"),
                path: "/",
            });
        });
    }
    return function hydrate(cookies) {
        const retypedCookies = cookies;
        if (!retypedCookies?._lastUpdate ||
            !retypedState._hydration ||
            retypedState._hydration < +retypedCookies._lastUpdate) {
            retypedState._hydration = retypedCookies?._lastUpdate
                ? +retypedCookies._lastUpdate
                : Date.now();
            if (cookies?.[cookieName]) {
                try {
                    const cookieValueString = cookies[cookieName];
                    const cookieValue = JSON.parse(cookieValueString);
                    if (typeof cookieValue === "object") {
                        for (const property of properties || Object.keys(state)) {
                            if (cookieValue[property]) {
                                state[property] = cookieValue[property];
                            }
                        }
                    }
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                }
                catch (e) {
                    // do nothing
                }
            }
        }
    };
}
export const getCookies = async (options) => ({
    ...(await cnGetCookies(options)),
    _lastUpdate: Date.now().toString(),
});
