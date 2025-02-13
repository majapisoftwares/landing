// noinspection JSUnusedGlobalSymbols
export function stripHtml(input) {
    return input?.replace(/<\/?[^>]+(>|$)/g, "");
}
