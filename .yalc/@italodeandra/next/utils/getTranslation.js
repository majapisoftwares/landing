import { get } from "lodash-es";
export default function getTranslation(intl, prePath) {
    return (sentence, path) => {
        return (get(intl, [
            ...(prePath?.split(".") || []),
            ...(path?.split(".") || []),
            sentence,
        ].filter(Boolean)) || sentence);
    };
}
