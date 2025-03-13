import wait from "./wait";
export default async function repeatUntil(fn, interval) {
    if (await fn()) {
        return;
    }
    if (interval) {
        await wait(interval);
    }
    await repeatUntil(fn, interval);
}
