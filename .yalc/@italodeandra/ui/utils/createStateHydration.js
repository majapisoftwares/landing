import { setCookie } from "cookies-next";
import ms from "ms";
import { snapshot, subscribe } from "valtio";
export default function createStateHydration(cookieName, state, properties) {
    subscribe(state, () => {
        setCookie(cookieName, snapshot(state), {
            maxAge: ms("30d"),
            path: "/",
        });
    });
    return function hydrate(cookies) {
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
    };
}
