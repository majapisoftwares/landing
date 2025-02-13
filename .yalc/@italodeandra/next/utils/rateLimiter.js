import ms from "ms";
import getIp from "./getIp";
import { tooManyRequests } from "../api/errors";
const requestCounts = new Map();
export default function rateLimiter(req, windowTime = "1m", requestLimit = 10) {
    const windowTimeMs = ms(windowTime);
    const ip = getIp(req) || "unknown";
    const now = Date.now();
    if (!requestCounts.has(ip)) {
        requestCounts.set(ip, []);
    }
    let timestamps = requestCounts.get(ip);
    timestamps = timestamps.filter((ts) => now - ts < windowTimeMs);
    requestCounts.set(ip, timestamps);
    if (timestamps.length >= requestLimit) {
        throw tooManyRequests;
    }
    timestamps.push(now);
    requestCounts.set(ip, timestamps);
}
