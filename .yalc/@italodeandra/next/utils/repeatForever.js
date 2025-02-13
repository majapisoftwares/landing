import wait from "./wait";
export default async function repeatForever(fn, interval, onError = console.error) {
    try {
        await fn();
    }
    catch (e) {
        onError(e);
    }
    if (interval) {
        await wait(interval);
    }
    await repeatForever(fn, interval, onError);
}
