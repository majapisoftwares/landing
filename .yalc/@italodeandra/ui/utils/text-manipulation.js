// noinspection JSUnusedGlobalSymbols
export function stripHtml(input) {
    return input?.replace(/<\/?[^>]+(>|$)/g, "");
}
// noinspection JSUnusedGlobalSymbols
export function stripLineBreak(input) {
    return input?.trim().replaceAll("\r", "").replaceAll("\n", "");
}
