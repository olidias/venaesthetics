import { defaultLang } from "../data/ui";
import type { Lang } from "./constants";

export function replaceLangInUrl(url: URL, replaceLangKey: Lang): string {
    const splitUrl: string[] = url.pathname.split('/');
    if (splitUrl.length >= 2) {
        splitUrl[1] = replaceLangKey;
    } else if (splitUrl.length > 0 && replaceLangKey === defaultLang) {
        splitUrl[0] = '';
    }
    return splitUrl.join('/');
}