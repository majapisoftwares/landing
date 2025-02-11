import vms from "ms";
const locale = {
    ["en"]: {
        day: "day",
        hour: "hour",
        minute: "minute",
        second: "second",
    },
    ["pt-BR"]: {
        day: "dia",
        hour: "hora",
        minute: "minuto",
        second: "segundo",
    },
    ["undefined"]: {
        day: "day",
        hour: "hour",
        second: "second",
        minute: "minute",
    },
};
export function ms(value, options) {
    if (typeof value === "number") {
        return vms(value, options)
            .replace("day", locale[String(options?.locale)].day)
            .replace("hour", locale[String(options?.locale)].hour)
            .replace("minute", locale[String(options?.locale)].minute)
            .replace("second", locale[String(options?.locale)].second);
    }
    return vms(value);
}
