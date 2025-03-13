// noinspection JSUnusedGlobalSymbols
export function stripLineBreak(input) {
    return input?.trim().replaceAll("\r", "").replaceAll("\n", "");
}
